/**
 * Generates scripts/02_seed.sql from data/vocabularyData.ts
 * Run: node scripts/generateSeedSQL.js
 */

const fs = require('fs');
const path = require('path');

// Read and strip TypeScript so Node can eval() it
let src = fs.readFileSync(
  path.join(__dirname, '../data/vocabularyData.ts'),
  'utf8'
);

// Strip: import statements, type/interface declarations, export keyword, type annotations
src = src
  .replace(/^import\s+.*?;?\s*$/gm, '')            // remove imports
  .replace(/^export\s+type\s+\w+.*?;?\s*$/gm, '')  // remove type aliases
  .replace(/^export\s+interface\s+\w[\s\S]*?^}/gm, '') // remove interfaces
  .replace(/^export\s+const\s+/m, 'const ')         // export const → const
  .replace(/:\s*Job\[\]\s*=/g, ' =')                // remove : Job[] before =
  .replace(/:\s*\w+(\[\])?\s*(=)/g, ' $2')          // remove inline type annotations before =
  ;

let JOBS;
try {
  // eslint-disable-next-line no-eval
  eval(src + '\nglobal.__JOBS = JOBS;');
  JOBS = global.__JOBS;
} catch (e) {
  console.error('Failed to parse vocabularyData.ts:', e.message);
  process.exit(1);
}

if (!JOBS || !Array.isArray(JOBS)) {
  console.error('Could not extract JOBS array from vocabularyData.ts');
  process.exit(1);
}

// Escape single quotes in strings for SQL
function sqlStr(val) {
  if (val === null || val === undefined) return 'NULL';
  return `'${String(val).replace(/'/g, "''")}'`;
}

function sqlJson(obj) {
  return sqlStr(JSON.stringify(obj));
}

const lines = [];
lines.push('-- ============================================================');
lines.push('-- BeeFluent Vocabulary Seed Data');
lines.push('-- Run this AFTER 01_schema.sql in the Supabase SQL Editor');
lines.push('-- ============================================================');
lines.push('');
lines.push('BEGIN;');
lines.push('');
lines.push('-- Clear existing data (safe to re-run)');
lines.push('TRUNCATE public.vocabulary_items, public.roles, public.sectors, public.jobs CASCADE;');
lines.push('');

let jobOrder = 0;
for (const job of JOBS) {
  // INSERT job
  lines.push(`INSERT INTO public.jobs (id, name, icon, image_url, sort_order) VALUES (`);
  lines.push(`  ${sqlStr(job.id)}, ${sqlJson(job.name)}, ${sqlStr(job.icon)}, ${sqlStr(job.imageUrl)}, ${jobOrder++}`);
  lines.push(`);`);
  lines.push('');

  let sectorOrder = 0;
  for (const sector of (job.sectors || [])) {
    // INSERT sector
    lines.push(`INSERT INTO public.sectors (id, job_id, name, icon, sort_order) VALUES (`);
    lines.push(`  ${sqlStr(sector.id)}, ${sqlStr(job.id)}, ${sqlJson(sector.name)}, ${sqlStr(sector.icon)}, ${sectorOrder++}`);
    lines.push(`);`);

    let roleOrder = 0;
    for (const role of (sector.roles || [])) {
      // INSERT role
      lines.push(`INSERT INTO public.roles (id, job_id, sector_id, name, icon, sort_order) VALUES (`);
      lines.push(`  ${sqlStr(role.id)}, ${sqlStr(job.id)}, ${sqlStr(sector.id)}, ${sqlJson(role.name)}, ${sqlStr(role.icon)}, ${roleOrder++}`);
      lines.push(`);`);

      let itemOrder = 0;
      for (const item of (role.items || [])) {
        lines.push(`INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (`);
        lines.push(`  ${sqlStr(item.id)}, ${sqlStr(job.id)}, ${sqlStr(sector.id)}, ${sqlStr(role.id)}, ${sqlStr(item.localImage)}, ${sqlStr(item.imageUrl)}, ${sqlJson(item.translations)}, ${itemOrder++}`);
        lines.push(`);`);
        itemOrder++;
      }
    }
    lines.push('');
  }
}

lines.push('COMMIT;');
lines.push('');
lines.push(`-- Done: ${JOBS.length} jobs, ${JOBS.reduce((a, j) => a + j.sectors.length, 0)} sectors`);

const outFile = path.join(__dirname, '02_seed.sql');
fs.writeFileSync(outFile, lines.join('\n'), 'utf8');
console.log(`✓ Generated ${outFile} (${lines.length} lines)`);
console.log(`  Jobs: ${JOBS.length}`);
console.log(`  Sectors: ${JOBS.reduce((a, j) => a + (j.sectors || []).length, 0)}`);
console.log(`  Items: ${JOBS.reduce((a, j) => a + (j.sectors || []).reduce((b, s) => b + (s.roles || []).reduce((c, r) => c + (r.items || []).length, 0), 0), 0)}`);
