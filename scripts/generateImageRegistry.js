/**
 * Regenerates services/imageRegistry.ts from actual files on disk.
 * Key = lowercase relative path without extension (matches localImage in vocabularyData.ts)
 * require() path = exact actual path preserving case and correct extension
 *
 * Run: node scripts/generateImageRegistry.js
 */

const fs = require('fs');
const path = require('path');

const VOCAB_DIR = path.join(__dirname, '../assets/images/vocabulary');
const OUT_FILE  = path.join(__dirname, '../services/imageRegistry.ts');
const REL_FROM  = '../assets/images/vocabulary';

function walk(dir, results = []) {
  for (const entry of fs.readdirSync(dir)) {
    const full = path.join(dir, entry);
    if (fs.statSync(full).isDirectory()) {
      walk(full, results);
    } else if (/\.(webp|jpg|jpeg|png)$/i.test(entry)) {
      results.push(full);
    }
  }
  return results;
}

const files = walk(VOCAB_DIR).sort();

const lines = [];
lines.push('// Auto-generated — do not edit manually. Run: node scripts/generateImageRegistry.js');
lines.push('const images: Record<string, any> = {');

for (const fullPath of files) {
  // relative path from vocabulary/ root, preserving actual case
  const relActual = path.relative(VOCAB_DIR, fullPath).replace(/\\/g, '/');
  const parts = relActual.split('/');

  // Key: keep job folder (first part) as-is, lowercase everything else, strip extension
  const keyParts = parts.map((p, i) => {
    const noExt = p.replace(/\.[^.]+$/, '');
    return i === 0 ? noExt : noExt.toLowerCase();
  });
  const key = keyParts.join('/');

  // require() path: use the EXACT case from disk — Metro is case-sensitive on all platforms.
  const requirePath = `${REL_FROM}/${relActual}`;
  lines.push(`  '${key}': require('${requirePath}'),`);
}

lines.push('};');
lines.push('');
lines.push('export default images;');
lines.push('');

fs.writeFileSync(OUT_FILE, lines.join('\n'), 'utf8');
console.log(`✓ Generated ${OUT_FILE}`);
console.log(`  Entries: ${files.length}`);
