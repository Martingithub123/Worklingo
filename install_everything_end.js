const fs = require('fs');
const https = require('https');
const path = require('path');

// LISTA COMPLETA CONSOLIDADA DAS 20 PROFISSÕES
const items = [
  // 1-7. CONSTRUCTION (Laborer, Bricklayer, Plumber, Electrician, Carpenter, Roofer, Painter)
  'hammer', 'shovel', 'wheelbarrow', 'drill', 'tape_measure', 'level', 'ladder', 'pickaxe', 'rake', 'hoe', 'bucket', 'crowbar', 'pliers', 'screwdriver', 'saw', 'chisel', 'wrench', 'clamp', 'mallet', 'mixer',
  'cement', 'sand', 'gravel', 'bricks', 'concrete', 'wood', 'metal', 'nails', 'screws', 'insulation', 'tiles', 'pipes', 'cables', 'glue', 'paint', 'plaster', 'foam', 'mesh', 'stone', 'adhesive', 'filler', 'sealant',
  'trowel', 'line', 'jointer', 'float', 'brush', 'square', 'cutter', 'scraper', 'blocks', 'lime', 'grout', 'render', 'clay', 'pipe_wrench', 'pipe_cutter', 'adjustable_wrench', 'torch', 'auger', 'snake', 'plunger',
  'spanner', 'hacksaw', 'crimper', 'tester', 'valves', 'washers', 'rings', 'hoses', 'clips', 'bolts', 'nuts', 'wire_stripper', 'multimeter', 'tool_belt', 'voltage_tester', 'clamp_meter', 'scissors', 'punch_tool',
  'fish_tape', 'fuse', 'socket', 'switch', 'breakers', 'terminals', 'plugs', 'adapters', 'batteries', 'conduits', 'panels', 'resistors', 'relays', 'sensors', 'circuits', 'plane', 'sander', 'nail_gun', 'router',
  'file', 'grinder', 'blade', 'vice', 'varnish', 'timber', 'brackets', 'hinges', 'handles', 'laminate', 'planks', 'frames', 'safety_harness', 'broom', 'roller', 'tar', 'felt', 'membrane', 'flashing', 'spray_gun',
  'thinner', 'primer', 'solvent', 'lacquer', 'enamel',

  // 8. GARDENING
  'lawn_mower', 'hedge_trimmer', 'watering_can', 'leaf_blower', 'fork', 'spade', 'shears', 'pruner', 'sprayer', 'edger', 'soil', 'plants', 'seeds', 'fertilizer', 'compost', 'mulch', 'bark', 'pesticides', 'herbicide',

  // 9-10. AUTOMOTIVE (Mechanic, Car Washer)
  'jack', 'diagnostic_tool', 'scanner', 'impact_wrench', 'ratchet', 'compressor', 'oil_filter', 'coolant', 'brake_fluid', 'grease', 'fuel', 'lubricant', 'wax', 'polish', 'pressure_washer', 'nozzle', 'foam_gun', 'scrubber', 'shampoo', 'degreaser',

  // 11-13. HOSPITALITY (Kitchen, Waiter, Bartender)
  'fryer', 'stove', 'grill', 'spatula', 'ladle', 'tongs', 'whisk', 'peeler', 'grater', 'colander', 'sieve', 'tray', 'baking_tray', 'blender', 'food_processor', 'vegetables', 'meat', 'spices', 'flour', 'butter',
  'cheese', 'dough', 'vinegar', 'syrup', 'notepad', 'corkscrew', 'card_machine', 'cash_register', 'lighter', 'napkin', 'straws', 'cutlery', 'glass', 'shaker', 'jigger', 'strainer', 'bar_spoon', 'muddler', 'ice_scoop', 'crusher', 'alcohol', 'tonic', 'bitters',

  // 14. ICE CREAM RETAIL
  'ice_cream_scoop', 'freezer', 'dispenser', 'cones', 'sprinkles', 'caramel', 'marshmallow', 'wafer',

  // 15-16. LAUNDRY & CLEANING
  'washing_machine', 'dryer', 'iron', 'ironing_board', 'basket', 'hanger', 'steamer', 'press_machine', 'softener', 'bleach', 'starch', 'mop', 'vacuum_cleaner', 'duster', 'squeegee', 'disinfectant', 'glass_cleaner',

  // 17-20. SUPERMARKET, WAREHOUSE, DELIVERY
  'barcode_reader', 'pos_system', 'receipt_printer', 'coins', 'vouchers', 'pallet_jack', 'box_cutter', 'tape_gun', 'inventory', 'crates', 'forklift', 'bubble_wrap', 'conveyor_belt', 'parcels', 'gps_device', 'thermal_bag', 'tracker', 'headset'
];

const downloadDir = path.join(__dirname, 'assets', 'images', 'vocabulary');

if (!fs.existsSync(downloadDir)) {
  fs.mkdirSync(downloadDir, { recursive: true });
}

async function download(itemName) {
  const filePath = path.join(downloadDir, `${itemName}.jpg`);
  if (fs.existsSync(filePath)) return; 

  // Busca imagem nítida focada no objeto
  const url = `https://loremflickr.com/600/600/${itemName.replace('_', ',')},tool/all`;

  return new Promise((resolve) => {
    https.get(url, (res) => {
      const file = fs.createWriteStream(filePath);
      res.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log(`✅ Baixado: ${itemName}.jpg`);
        resolve();
      });
    }).on('error', (err) => {
      console.error(`❌ Erro em ${itemName}:`, err.message);
      resolve();
    });
  });
}

async function run() {
  const uniqueItems = [...new Set(items)]; // Remove duplicatas
  console.log(`🚀 Iniciando download de ${uniqueItems.length} imagens únicas...`);
  
  for (const item of uniqueItems) {
    await download(item);
  }

  console.log('✨ Download concluído! Gerando arquivo de índice...');
  
  const files = fs.readdirSync(downloadDir).filter(f => f.endsWith('.jpg'));
  let indexContent = 'export const VocabularyImages: Record<string, any> = {\n';
  files.forEach(f => {
    const name = f.replace('.jpg', '');
    indexContent += `  '${name}': require('./${f}'),\n`;
  });
  indexContent += '};\n';
  
  fs.writeFileSync(path.join(downloadDir, 'index.ts'), indexContent);
  console.log('📦 Arquivo assets/images/vocabulary/index.ts atualizado!');
}

run();