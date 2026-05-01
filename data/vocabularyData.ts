import { Job } from '@/types';

export const JOBS: Job[] = [
  {
    id: 'agricultura',
    name: { en: 'Agriculture', es: 'Agricultura', pt: 'Agricultura', fr: 'Agriculture', de: 'Landwirtschaft', it: 'Agricoltura', nl: 'Landbouw', zh: '农业', ja: '農業', ru: 'Сельское хозяйство' },
    icon: '🌾',
    imageUrl: 'https://images.pexels.com/photos/2132227/pexels-photo-2132227.jpeg?auto=compress&cs=tinysrgb&w=800',
    sectors: [
    {
      id: 'gardener',
      name: { en: 'Gardener', es: 'Jardinero', pt: 'Jardineiro', fr: 'Jardinier', de: 'Gärtner', it: 'Giardiniere', nl: 'Tuinier', zh: '园丁', ja: '庭師', ru: 'Садовник' },
      icon: '🌿',
      roles: [
      {
        id: 'tools',
        name: { en: 'Tools', es: 'Herramientas', pt: 'Ferramentas', fr: 'Outils', de: 'Werkzeuge', it: 'Attrezzi', nl: 'Gereedschap', zh: '工具', ja: '道具', ru: 'Инструменты' },
        icon: '🔧',
        items: [
        {
          id: 'agricultura/gardener/tools/blower',
          localImage: 'agricultura/gardener/tools/blower',
          translations: { en: 'blower', es: 'sopladora', pt: 'soprador', fr: 'souffleur', de: 'Gebläse', it: 'soffiatore', nl: 'blazer', zh: '鼓风机', ja: 'ブロワー', ru: 'воздуходувка' },
        },
        {
          id: 'agricultura/gardener/tools/cutter',
          localImage: 'agricultura/gardener/tools/cutter',
          translations: { en: 'cutter', es: 'cortador', pt: 'cortador', fr: 'cutter', de: 'Cutter', it: 'taglierino', nl: 'snijder', zh: '切割机', ja: 'カッター', ru: 'резак' },
        },
        {
          id: 'agricultura/gardener/tools/edger',
          localImage: 'agricultura/gardener/tools/edger',
          translations: { en: 'edger', es: 'bordeadora', pt: 'aparador de borda', fr: 'bordureuse', de: 'Randschneider', it: 'bordatrice', nl: 'kantenmaaier', zh: '修边机', ja: 'エッジャー', ru: 'кромкорез' },
        },
        {
          id: 'agricultura/gardener/tools/fork',
          localImage: 'agricultura/gardener/tools/fork',
          translations: { en: 'fork', es: 'tenedor', pt: 'forcado', fr: 'fourche', de: 'Gabel', it: 'forca', nl: 'vork', zh: '叉子', ja: 'フォーク', ru: 'вилка' },
        },
        {
          id: 'agricultura/gardener/tools/hedge_trimmer',
          localImage: 'agricultura/gardener/tools/hedge_trimmer',
          translations: { en: 'hedge trimmer', es: 'cortasetos', pt: 'podador de cerca', fr: 'taille-haie', de: 'Heckenschere', it: 'tagliasiepi', nl: 'hegenschaar', zh: '绿篱机', ja: 'ヘッジトリマー', ru: 'кусторез' },
        },
        {
          id: 'agricultura/gardener/tools/hoe',
          localImage: 'agricultura/gardener/tools/hoe',
          translations: { en: 'hoe', es: 'azada', pt: 'enxada', fr: 'houe', de: 'Hacke', it: 'zappa', nl: 'schoffel', zh: '锄头', ja: '鍬', ru: 'мотыга' },
        },
        {
          id: 'agricultura/gardener/tools/hose',
          localImage: 'agricultura/gardener/tools/hose',
          translations: { en: 'hose', es: 'manguera', pt: 'mangueira', fr: 'tuyau', de: 'Schlauch', it: 'tubo', nl: 'slang', zh: '软管', ja: 'ホース', ru: 'шланг' },
        },
        {
          id: 'agricultura/gardener/tools/knife',
          localImage: 'agricultura/gardener/tools/knife',
          translations: { en: 'knife', es: 'cuchillo', pt: 'faca', fr: 'couteau', de: 'Messer', it: 'coltello', nl: 'mes', zh: '刀', ja: 'ナイフ', ru: 'нож' },
        },
        {
          id: 'agricultura/gardener/tools/lawn_mower',
          localImage: 'agricultura/gardener/tools/lawn_mower',
          translations: { en: 'lawn mower', es: 'cortacésped', pt: 'cortador de grama', fr: 'tondeuse', de: 'Rasenmäher', it: 'tagliaerba', nl: 'grasmaaier', zh: '割草机', ja: '芝刈り機', ru: 'газонокосилка' },
        },
        {
          id: 'agricultura/gardener/tools/leaf_blower',
          localImage: 'agricultura/gardener/tools/leaf_blower',
          translations: { en: 'leaf blower', es: 'soplador de hojas', pt: 'soprador de folhas', fr: 'souffleur de feuilles', de: 'Laubbläser', it: 'soffiafoglie', nl: 'bladblazer', zh: '吹叶机', ja: '葉っぱブロワー', ru: 'воздуходувка для листьев' },
        },
        {
          id: 'agricultura/gardener/tools/pruner',
          localImage: 'agricultura/gardener/tools/pruner',
          translations: { en: 'pruner', es: 'podadora', pt: 'podadora', fr: 'sécateur', de: 'Astschere', it: 'potatrice', nl: 'snoeischaar', zh: '修剪器', ja: 'プルーナー', ru: 'секатор' },
        },
        {
          id: 'agricultura/gardener/tools/rake',
          localImage: 'agricultura/gardener/tools/rake',
          translations: { en: 'rake', es: 'rastrillo', pt: 'ancinho', fr: 'râteau', de: 'Rechen', it: 'rastrello', nl: 'hark', zh: '耙子', ja: '熊手', ru: 'грабли' },
        },
        {
          id: 'agricultura/gardener/tools/scissors',
          localImage: 'agricultura/gardener/tools/scissors',
          translations: { en: 'scissors', es: 'tijeras', pt: 'tesoura', fr: 'ciseaux', de: 'Schere', it: 'forbici', nl: 'schaar', zh: '剪刀', ja: 'ハサミ', ru: 'ножницы' },
        },
        {
          id: 'agricultura/gardener/tools/shears',
          localImage: 'agricultura/gardener/tools/shears',
          translations: { en: 'shears', es: 'tijeras de podar', pt: 'tesoura de poda', fr: 'sécateur', de: 'Gartenschere', it: 'cesoie', nl: 'snoeischaar', zh: '大剪刀', ja: '剪定鋏', ru: 'ножницы для стрижки' },
        },
        {
          id: 'agricultura/gardener/tools/shovel',
          localImage: 'agricultura/gardener/tools/shovel',
          translations: { en: 'shovel', es: 'pala', pt: 'pá', fr: 'pelle', de: 'Schaufel', it: 'vanga', nl: 'schop', zh: '铲子', ja: 'シャベル', ru: 'лопата' },
        },
        {
          id: 'agricultura/gardener/tools/spade',
          localImage: 'agricultura/gardener/tools/spade',
          translations: { en: 'spade', es: 'laya', pt: 'pá de bico', fr: 'bêche', de: 'Spaten', it: 'vanga', nl: 'spade', zh: '铁锹', ja: 'スペード', ru: 'штыковая лопата' },
        },
        {
          id: 'agricultura/gardener/tools/sprayer',
          localImage: 'agricultura/gardener/tools/sprayer',
          translations: { en: 'sprayer', es: 'pulverizador', pt: 'pulverizador', fr: 'pulvérisateur', de: 'Sprüher', it: 'spruzzatore', nl: 'sproeier', zh: '喷雾器', ja: 'スプレイヤー', ru: 'опрыскиватель' },
        },
        {
          id: 'agricultura/gardener/tools/trimmer',
          localImage: 'agricultura/gardener/tools/trimmer',
          translations: { en: 'trimmer', es: 'bordeadora', pt: 'aparador', fr: 'débroussailleuse', de: 'Trimmer', it: 'decespugliatore', nl: 'trimmer', zh: '修剪机', ja: 'トリマー', ru: 'триммер' },
        },
        {
          id: 'agricultura/gardener/tools/watering_can',
          localImage: 'agricultura/gardener/tools/watering_can',
          translations: { en: 'watering can', es: 'regadera', pt: 'regador', fr: 'arrosoir', de: 'Gießkanne', it: 'annaffiatoio', nl: 'gieter', zh: '浇水壶', ja: 'じょうろ', ru: 'лейка' },
        },
        {
          id: 'agricultura/gardener/tools/wheelbarrow',
          localImage: 'agricultura/gardener/tools/wheelbarrow',
          translations: { en: 'wheelbarrow', es: 'carretilla', pt: 'carrinho de mão', fr: 'brouette', de: 'Schubkarre', it: 'carriola', nl: 'kruiwagen', zh: '手推车', ja: '一輪車', ru: 'тачка' },
        }
        ],
      },
      {
        id: 'materials',
        name: { en: 'Materials', es: 'Materiales', pt: 'Materiais', fr: 'Matériaux', de: 'Materialien', it: 'Materiali', nl: 'Materialen', zh: '材料', ja: '材料', ru: 'Материалы' },
        icon: '📦',
        items: [
        {
          id: 'agricultura/gardener/materials/additive',
          localImage: 'agricultura/gardener/materials/additive',
          translations: { en: 'additive', es: 'additive', pt: 'additive', fr: 'additive', de: 'additive', it: 'additive', nl: 'additief', zh: '添加剂', ja: '添加剤', ru: 'добавка' },
        },
        {
          id: 'agricultura/gardener/materials/bark',
          localImage: 'agricultura/gardener/materials/bark',
          translations: { en: 'bark', es: 'bark', pt: 'bark', fr: 'bark', de: 'bark', it: 'bark', nl: 'bast', zh: '树皮', ja: '樹皮', ru: 'кора' },
        },
        {
          id: 'agricultura/gardener/materials/clay',
          localImage: 'agricultura/gardener/materials/clay',
          translations: { en: 'clay', es: 'clay', pt: 'clay', fr: 'clay', de: 'clay', it: 'clay', nl: 'klei', zh: '黏土', ja: '粘土', ru: 'глина' },
        },
        {
          id: 'agricultura/gardener/materials/compost',
          localImage: 'agricultura/gardener/materials/compost',
          translations: { en: 'compost', es: 'compost', pt: 'composto', fr: 'compost', de: 'Kompost', it: 'compost', nl: 'compost', zh: '堆肥', ja: '堆肥', ru: 'компост' },
        },
        {
          id: 'agricultura/gardener/materials/compost_mix',
          localImage: 'agricultura/gardener/materials/compost_mix',
          translations: { en: 'compost mix', es: 'compost mix', pt: 'compost mix', fr: 'compost mix', de: 'compost mix', it: 'compost mix', nl: 'compostmengsel', zh: '堆肥混合物', ja: '堆肥ミックス', ru: 'компостная смесь' },
        },
        {
          id: 'agricultura/gardener/materials/conditioner',
          localImage: 'agricultura/gardener/materials/conditioner',
          translations: { en: 'conditioner', es: 'conditioner', pt: 'conditioner', fr: 'conditioner', de: 'conditioner', it: 'conditioner', nl: 'conditioner', zh: '护发素', ja: 'コンディショナー', ru: 'кондиционер' },
        },
        {
          id: 'agricultura/gardener/materials/dressing',
          localImage: 'agricultura/gardener/materials/dressing',
          translations: { en: 'dressing', es: 'dressing', pt: 'dressing', fr: 'dressing', de: 'dressing', it: 'dressing', nl: 'wondverband', zh: '敷料', ja: 'ドレッシング', ru: 'перевязочный материал' },
        },
        {
          id: 'agricultura/gardener/materials/feed',
          localImage: 'agricultura/gardener/materials/feed',
          translations: { en: 'feed', es: 'feed', pt: 'feed', fr: 'feed', de: 'feed', it: 'feed', nl: 'voer', zh: '饲料', ja: '飼料', ru: 'корм' },
        },
        {
          id: 'agricultura/gardener/materials/fertilizer',
          localImage: 'agricultura/gardener/materials/fertilizer',
          translations: { en: 'fertilizer', es: 'fertilizante', pt: 'fertilizante', fr: 'engrais', de: 'Dünger', it: 'fertilizzante', nl: 'meststof', zh: '肥料', ja: '肥料', ru: 'удобрение' },
        },
        {
          id: 'agricultura/gardener/materials/gravel',
          localImage: 'agricultura/gardener/materials/gravel',
          translations: { en: 'gravel', es: 'gravel', pt: 'gravel', fr: 'gravel', de: 'gravel', it: 'gravel', nl: 'grind', zh: '砾石', ja: '砂利', ru: 'гравий' },
        },
        {
          id: 'agricultura/gardener/materials/herbicide',
          localImage: 'agricultura/gardener/materials/herbicide',
          translations: { en: 'herbicide', es: 'herbicide', pt: 'herbicide', fr: 'herbicide', de: 'herbicide', it: 'herbicide', nl: 'herbicide', zh: '除草剂', ja: '除草剤', ru: 'гербицид' },
        },
        {
          id: 'agricultura/gardener/materials/liquid_feed',
          localImage: 'agricultura/gardener/materials/liquid_feed',
          translations: { en: 'liquid feed', es: 'liquid feed', pt: 'liquid feed', fr: 'liquid feed', de: 'liquid feed', it: 'liquid feed', nl: 'vloeibare voeding', zh: '液体饲料', ja: '液体飼料', ru: 'жидкий корм' },
        },
        {
          id: 'agricultura/gardener/materials/mix',
          localImage: 'agricultura/gardener/materials/mix',
          translations: { en: 'mix', es: 'mix', pt: 'mix', fr: 'mix', de: 'mix', it: 'mix', nl: 'mengsel', zh: '混合物', ja: 'ミックス', ru: 'смесь' },
        },
        {
          id: 'agricultura/gardener/materials/moss',
          localImage: 'agricultura/gardener/materials/moss',
          translations: { en: 'moss', es: 'moss', pt: 'moss', fr: 'moss', de: 'moss', it: 'moss', nl: 'mos', zh: '苔藓', ja: '苔', ru: 'мох' },
        },
        {
          id: 'agricultura/gardener/materials/mulch',
          localImage: 'agricultura/gardener/materials/mulch',
          translations: { en: 'mulch', es: 'mulch', pt: 'mulch', fr: 'mulch', de: 'mulch', it: 'mulch', nl: 'mulch', zh: '覆盖物', ja: 'マルチ', ru: 'мульча' },
        },
        {
          id: 'agricultura/gardener/materials/nutrients',
          localImage: 'agricultura/gardener/materials/nutrients',
          translations: { en: 'nutrients', es: 'nutrients', pt: 'nutrients', fr: 'nutrients', de: 'nutrients', it: 'nutrients', nl: 'voedingsstoffen', zh: '营养素', ja: '栄養素', ru: 'питательные вещества' },
        },
        {
          id: 'agricultura/gardener/materials/organic_mix',
          localImage: 'agricultura/gardener/materials/organic_mix',
          translations: { en: 'organic mix', es: 'organic mix', pt: 'organic mix', fr: 'organic mix', de: 'organic mix', it: 'organic mix', nl: 'organisch mengsel', zh: '有机混合物', ja: '有機ミックス', ru: 'органическая смесь' },
        },
        {
          id: 'agricultura/gardener/materials/pellets',
          localImage: 'agricultura/gardener/materials/pellets',
          translations: { en: 'pellets', es: 'pellets', pt: 'pellets', fr: 'pellets', de: 'pellets', it: 'pellets', nl: 'pellets', zh: '颗粒', ja: 'ペレット', ru: 'гранулы' },
        },
        {
          id: 'agricultura/gardener/materials/pesticides',
          localImage: 'agricultura/gardener/materials/pesticides',
          translations: { en: 'pesticides', es: 'pesticides', pt: 'pesticides', fr: 'pesticides', de: 'pesticides', it: 'pesticides', nl: 'pesticiden', zh: '农药', ja: '農薬', ru: 'пестициды' },
        },
        {
          id: 'agricultura/gardener/materials/plants',
          localImage: 'agricultura/gardener/materials/plants',
          translations: { en: 'plants', es: 'plants', pt: 'plants', fr: 'plants', de: 'plants', it: 'plants', nl: 'planten', zh: '植物', ja: '植物', ru: 'растения' },
        },
        {
          id: 'agricultura/gardener/materials/powder',
          localImage: 'agricultura/gardener/materials/powder',
          translations: { en: 'powder', es: 'powder', pt: 'powder', fr: 'powder', de: 'powder', it: 'powder', nl: 'poeder', zh: '粉末', ja: 'パウダー', ru: 'порошок' },
        },
        {
          id: 'agricultura/gardener/materials/sand',
          localImage: 'agricultura/gardener/materials/sand',
          translations: { en: 'sand', es: 'sand', pt: 'sand', fr: 'sand', de: 'sand', it: 'sand', nl: 'zand', zh: '沙子', ja: '砂', ru: 'песок' },
        },
        {
          id: 'agricultura/gardener/materials/seeds',
          localImage: 'agricultura/gardener/materials/seeds',
          translations: { en: 'seeds', es: 'semillas', pt: 'sementes', fr: 'graines', de: 'Samen', it: 'semi', nl: 'zaden', zh: '种子', ja: '種', ru: 'семена' },
        },
        {
          id: 'agricultura/gardener/materials/soil',
          localImage: 'agricultura/gardener/materials/soil',
          translations: { en: 'soil', es: 'tierra', pt: 'solo', fr: 'sol', de: 'Erde', it: 'terra', nl: 'aarde', zh: '土壤', ja: '土', ru: 'почва' },
        },
        {
          id: 'agricultura/gardener/materials/soil_base',
          localImage: 'agricultura/gardener/materials/soil_base',
          translations: { en: 'soil base', es: 'soil base', pt: 'soil base', fr: 'soil base', de: 'soil base', it: 'soil base', nl: 'bodembasis', zh: '土壤基础', ja: '土壌ベース', ru: 'основа почвы' },
        },
        {
          id: 'agricultura/gardener/materials/solution',
          localImage: 'agricultura/gardener/materials/solution',
          translations: { en: 'solution', es: 'solution', pt: 'solution', fr: 'solution', de: 'solution', it: 'solution', nl: 'oplossing', zh: '溶液', ja: '溶液', ru: 'раствор' },
        },
        {
          id: 'agricultura/gardener/materials/stones',
          localImage: 'agricultura/gardener/materials/stones',
          translations: { en: 'stones', es: 'stones', pt: 'stones', fr: 'stones', de: 'stones', it: 'stones', nl: 'stenen', zh: '石头', ja: '石', ru: 'камни' },
        },
        {
          id: 'agricultura/gardener/materials/substrate',
          localImage: 'agricultura/gardener/materials/substrate',
          translations: { en: 'substrate', es: 'substrate', pt: 'substrate', fr: 'substrate', de: 'substrate', it: 'substrate', nl: 'substraat', zh: '基底', ja: '基質', ru: 'субстрат' },
        },
        {
          id: 'agricultura/gardener/materials/topping',
          localImage: 'agricultura/gardener/materials/topping',
          translations: { en: 'topping', es: 'topping', pt: 'topping', fr: 'topping', de: 'topping', it: 'topping', nl: 'topping', zh: '浇头', ja: 'トッピング', ru: 'топпинг' },
        },
        {
          id: 'agricultura/gardener/materials/water',
          localImage: 'agricultura/gardener/materials/water',
          translations: { en: 'water', es: 'agua', pt: 'água', fr: 'eau', de: 'Wasser', it: 'acqua', nl: 'water', zh: '水', ja: '水', ru: 'вода' },
        }
        ],
      }
      ],
    },
    {
      id: 'harvesting',
      name: { en: 'Harvesting', es: 'Cosecha', pt: 'Colheita', fr: 'Récolte', de: 'Ernte', it: 'Raccolta', nl: 'Oogsten', zh: '收割', ja: '収穫', ru: 'Уборка урожая' },
      icon: '🌾',
      roles: [
      {
        id: 'tools',
        name: { en: 'Tools', es: 'Herramientas', pt: 'Ferramentas', fr: 'Outils', de: 'Werkzeuge', it: 'Attrezzi', nl: 'Gereedschap', zh: '工具', ja: '道具', ru: 'Инструменты' },
        icon: '🔧',
        items: [
        {
          id: 'agricultura/harvesting/tools/barcode',
          localImage: 'agricultura/harvesting/tools/barcode',
          translations: { en: 'barcode', es: 'código de barras', pt: 'código de barras', fr: 'code-barres', de: 'Barcode', it: 'codice a barre', nl: 'streepjescode', zh: '条形码', ja: 'バーコード', ru: 'штрихкод' },
        },
        {
          id: 'agricultura/harvesting/tools/basket',
          localImage: 'agricultura/harvesting/tools/basket',
          translations: { en: 'basket', es: 'cesta', pt: 'cesto', fr: 'panier', de: 'Korb', it: 'cesto', nl: 'mand', zh: '篮子', ja: 'バスケット', ru: 'корзина' },
        },
        {
          id: 'agricultura/harvesting/tools/bin',
          localImage: 'agricultura/harvesting/tools/bin',
          translations: { en: 'bin', es: 'cubo de basura', pt: 'lixeira', fr: 'poubelle', de: 'Mülleimer', it: 'bidone', nl: 'prullenbak', zh: '垃圾桶', ja: 'ビン', ru: 'мусорное ведро' },
        },
        {
          id: 'agricultura/harvesting/tools/box',
          localImage: 'agricultura/harvesting/tools/box',
          translations: { en: 'box', es: 'caja', pt: 'caixa', fr: 'boîte', de: 'Kasten', it: 'scatola', nl: 'doos', zh: '箱子', ja: 'ボックス', ru: 'коробка' },
        },
        {
          id: 'agricultura/harvesting/tools/brush',
          localImage: 'agricultura/harvesting/tools/brush',
          translations: { en: 'brush', es: 'cepillo', pt: 'escova', fr: 'brosse', de: 'Bürste', it: 'spazzola', nl: 'borstel', zh: '刷子', ja: 'ブラシ', ru: 'кисть' },
        },
        {
          id: 'agricultura/harvesting/tools/bucket',
          localImage: 'agricultura/harvesting/tools/bucket',
          translations: { en: 'bucket', es: 'cubo', pt: 'balde', fr: 'seau', de: 'Eimer', it: 'secchio', nl: 'emmer', zh: '水桶', ja: 'バケツ', ru: 'ведро' },
        },
        {
          id: 'agricultura/harvesting/tools/cart',
          localImage: 'agricultura/harvesting/tools/cart',
          translations: { en: 'cart', es: 'carrito', pt: 'carrinho', fr: 'chariot', de: 'Wagen', it: 'carrello', nl: 'kar', zh: '推车', ja: 'カート', ru: 'тележка' },
        },
        {
          id: 'agricultura/harvesting/tools/cloth',
          localImage: 'agricultura/harvesting/tools/cloth',
          translations: { en: 'cloth', es: 'trapo', pt: 'pano', fr: 'chiffon', de: 'Tuch', it: 'panno', nl: 'doek', zh: '布', ja: '布', ru: 'ткань' },
        },
        {
          id: 'agricultura/harvesting/tools/container',
          localImage: 'agricultura/harvesting/tools/container',
          translations: { en: 'container', es: 'contenedor', pt: 'recipiente', fr: 'conteneur', de: 'Behälter', it: 'contenitore', nl: 'container', zh: '容器', ja: 'コンテナ', ru: 'контейнер' },
        },
        {
          id: 'agricultura/harvesting/tools/conveyor',
          localImage: 'agricultura/harvesting/tools/conveyor',
          translations: { en: 'conveyor', es: 'conveyor', pt: 'conveyor', fr: 'conveyor', de: 'conveyor', it: 'conveyor', nl: 'transportband', zh: '传送带', ja: 'コンベア', ru: 'конвейер' },
        },
        {
          id: 'agricultura/harvesting/tools/cooling_box',
          localImage: 'agricultura/harvesting/tools/cooling_box',
          translations: { en: 'cooling box', es: 'cooling box', pt: 'cooling box', fr: 'cooling box', de: 'cooling box', it: 'cooling box', nl: 'koelbox', zh: '冷却箱', ja: 'クーリングボックス', ru: 'холодильный ящик' },
        },
        {
          id: 'agricultura/harvesting/tools/crate',
          localImage: 'agricultura/harvesting/tools/crate',
          translations: { en: 'crate', es: 'cajón', pt: 'engradado', fr: 'caisse', de: 'Kiste', it: 'cassa', nl: 'krat', zh: '板条箱', ja: 'クレート', ru: 'ящик' },
        },
        {
          id: 'agricultura/harvesting/tools/fork',
          localImage: 'agricultura/harvesting/tools/fork',
          translations: { en: 'fork', es: 'tenedor', pt: 'forcado', fr: 'fourche', de: 'Gabel', it: 'forca', nl: 'vork', zh: '叉子', ja: 'フォーク', ru: 'вилка' },
        },
        {
          id: 'agricultura/harvesting/tools/gloves',
          localImage: 'agricultura/harvesting/tools/gloves',
          translations: { en: 'gloves', es: 'guantes', pt: 'luvas', fr: 'gants', de: 'Handschuhe', it: 'guanti', nl: 'handschoenen', zh: '手套', ja: '手袋', ru: 'перчатки' },
        },
        {
          id: 'agricultura/harvesting/tools/hand_truck',
          localImage: 'agricultura/harvesting/tools/hand_truck',
          translations: { en: 'hand truck', es: 'hand truck', pt: 'hand truck', fr: 'hand truck', de: 'hand truck', it: 'hand truck', nl: 'steekwagen', zh: '手推车', ja: 'ハンドトラック', ru: 'ручная тележка' },
        },
        {
          id: 'agricultura/harvesting/tools/harvest_knife',
          localImage: 'agricultura/harvesting/tools/harvest_knife',
          translations: { en: 'harvest knife', es: 'harvest knife', pt: 'harvest knife', fr: 'harvest knife', de: 'harvest knife', it: 'harvest knife', nl: 'oogstmes', zh: '收割刀', ja: '収穫ナイフ', ru: 'нож для уборки урожая' },
        },
        {
          id: 'agricultura/harvesting/tools/hook',
          localImage: 'agricultura/harvesting/tools/hook',
          translations: { en: 'hook', es: 'gancho', pt: 'gancho', fr: 'crochet', de: 'Haken', it: 'gancio', nl: 'haak', zh: '挂钩', ja: 'フック', ru: 'крюк' },
        },
        {
          id: 'agricultura/harvesting/tools/ice_box',
          localImage: 'agricultura/harvesting/tools/ice_box',
          translations: { en: 'ice box', es: 'ice box', pt: 'ice box', fr: 'ice box', de: 'ice box', it: 'ice box', nl: 'koelbox', zh: '冰箱', ja: 'アイスボックス', ru: 'ящик со льдом' },
        },
        {
          id: 'agricultura/harvesting/tools/knife',
          localImage: 'agricultura/harvesting/tools/knife',
          translations: { en: 'knife', es: 'cuchillo', pt: 'faca', fr: 'couteau', de: 'Messer', it: 'coltello', nl: 'mes', zh: '刀', ja: 'ナイフ', ru: 'нож' },
        },
        {
          id: 'agricultura/harvesting/tools/label',
          localImage: 'agricultura/harvesting/tools/label',
          translations: { en: 'label', es: 'etiqueta', pt: 'etiqueta', fr: 'étiquette', de: 'Etikett', it: 'etichetta', nl: 'etiket', zh: '标签', ja: 'ラベル', ru: 'этикетка' },
        },
        {
          id: 'agricultura/harvesting/tools/ladder',
          localImage: 'agricultura/harvesting/tools/ladder',
          translations: { en: 'ladder', es: 'escalera', pt: 'escada', fr: 'échelle', de: 'Leiter', it: 'scala', nl: 'ladder', zh: '梯子', ja: 'はしご', ru: 'лестница' },
        },
        {
          id: 'agricultura/harvesting/tools/marker',
          localImage: 'agricultura/harvesting/tools/marker',
          translations: { en: 'marker', es: 'marcador', pt: 'marcador', fr: 'marqueur', de: 'Marker', it: 'pennarello', nl: 'marker', zh: '记号笔', ja: 'マーカー', ru: 'маркер' },
        },
        {
          id: 'agricultura/harvesting/tools/net',
          localImage: 'agricultura/harvesting/tools/net',
          translations: { en: 'net', es: 'red', pt: 'rede', fr: 'filet', de: 'Netz', it: 'rete', nl: 'net', zh: '网', ja: 'ネット', ru: 'сетка' },
        },
        {
          id: 'agricultura/harvesting/tools/packing_machine',
          localImage: 'agricultura/harvesting/tools/packing_machine',
          translations: { en: 'packing machine', es: 'packing machine', pt: 'packing machine', fr: 'packing machine', de: 'packing machine', it: 'packing machine', nl: 'verpakkingsmachine', zh: '打包机', ja: '梱包機', ru: 'упаковочная машина' },
        },
        {
          id: 'agricultura/harvesting/tools/pallet',
          localImage: 'agricultura/harvesting/tools/pallet',
          translations: { en: 'pallet', es: 'palé', pt: 'palete', fr: 'palette', de: 'Palette', it: 'pallet', nl: 'pallet', zh: '托盘', ja: 'パレット', ru: 'паллет' },
        },
        {
          id: 'agricultura/harvesting/tools/picker',
          localImage: 'agricultura/harvesting/tools/picker',
          translations: { en: 'picker', es: 'picker', pt: 'picker', fr: 'picker', de: 'picker', it: 'picker', nl: 'plukker', zh: '采摘器', ja: 'ピッカー', ru: 'сборщик' },
        },
        {
          id: 'agricultura/harvesting/tools/picking_bag',
          localImage: 'agricultura/harvesting/tools/picking_bag',
          translations: { en: 'picking bag', es: 'picking bag', pt: 'picking bag', fr: 'picking bag', de: 'picking bag', it: 'picking bag', nl: 'plukzak', zh: '采摘袋', ja: '収穫袋', ru: 'мешок для сбора урожая' },
        },
        {
          id: 'agricultura/harvesting/tools/pole_picker',
          localImage: 'agricultura/harvesting/tools/pole_picker',
          translations: { en: 'pole picker', es: 'pole picker', pt: 'pole picker', fr: 'pole picker', de: 'pole picker', it: 'pole picker', nl: 'staafplukker', zh: '杆式采摘器', ja: 'ポールピッカー', ru: 'шестовой съемщик' },
        },
        {
          id: 'agricultura/harvesting/tools/rack',
          localImage: 'agricultura/harvesting/tools/rack',
          translations: { en: 'rack', es: 'estante', pt: 'prateleira', fr: 'étagère', de: 'Regal', it: 'scaffale', nl: 'rek', zh: '货架', ja: 'ラック', ru: 'стеллаж' },
        },
        {
          id: 'agricultura/harvesting/tools/rope',
          localImage: 'agricultura/harvesting/tools/rope',
          translations: { en: 'rope', es: 'cuerda', pt: 'corda', fr: 'corde', de: 'Seil', it: 'corda', nl: 'touw', zh: '绳子', ja: 'ロープ', ru: 'веревка' },
        },
        {
          id: 'agricultura/harvesting/tools/sack',
          localImage: 'agricultura/harvesting/tools/sack',
          translations: { en: 'sack', es: 'sack', pt: 'sack', fr: 'sack', de: 'sack', it: 'sack', nl: 'zak', zh: '麻袋', ja: '袋', ru: 'мешок' },
        },
        {
          id: 'agricultura/harvesting/tools/scale',
          localImage: 'agricultura/harvesting/tools/scale',
          translations: { en: 'scale', es: 'báscula', pt: 'balança', fr: 'balance', de: 'Waage', it: 'bilancia', nl: 'weegschaal', zh: '秤', ja: 'スケール', ru: 'весы' },
        },
        {
          id: 'agricultura/harvesting/tools/scanner',
          localImage: 'agricultura/harvesting/tools/scanner',
          translations: { en: 'scanner', es: 'escáner', pt: 'scanner', fr: 'scanner', de: 'Scanner', it: 'scanner', nl: 'scanner', zh: '扫描仪', ja: 'スキャナー', ru: 'сканер' },
        },
        {
          id: 'agricultura/harvesting/tools/scissors',
          localImage: 'agricultura/harvesting/tools/scissors',
          translations: { en: 'scissors', es: 'tijeras', pt: 'tesoura', fr: 'ciseaux', de: 'Schere', it: 'forbici', nl: 'schaar', zh: '剪刀', ja: 'ハサミ', ru: 'ножницы' },
        },
        {
          id: 'agricultura/harvesting/tools/shears',
          localImage: 'agricultura/harvesting/tools/shears',
          translations: { en: 'shears', es: 'tijeras de podar', pt: 'tesoura de poda', fr: 'sécateur', de: 'Gartenschere', it: 'cesoie', nl: 'snoeischaar', zh: '大剪刀', ja: '剪定鋏', ru: 'ножницы для стрижки' },
        },
        {
          id: 'agricultura/harvesting/tools/sorting_machine',
          localImage: 'agricultura/harvesting/tools/sorting_machine',
          translations: { en: 'sorting machine', es: 'sorting machine', pt: 'sorting machine', fr: 'sorting machine', de: 'sorting machine', it: 'sorting machine', nl: 'sorteermachine', zh: '分拣机', ja: 'ソーティングマシン', ru: 'сортировочная машина' },
        },
        {
          id: 'agricultura/harvesting/tools/strap',
          localImage: 'agricultura/harvesting/tools/strap',
          translations: { en: 'strap', es: 'strap', pt: 'strap', fr: 'strap', de: 'strap', it: 'strap', nl: 'band', zh: '带子', ja: 'ストラップ', ru: 'ремень' },
        },
        {
          id: 'agricultura/harvesting/tools/table',
          localImage: 'agricultura/harvesting/tools/table',
          translations: { en: 'table', es: 'mesa', pt: 'mesa', fr: 'table', de: 'Tisch', it: 'tavolo', nl: 'tafel', zh: '桌子', ja: 'テーブル', ru: 'стол' },
        },
        {
          id: 'agricultura/harvesting/tools/tape',
          localImage: 'agricultura/harvesting/tools/tape',
          translations: { en: 'tape', es: 'cinta', pt: 'fita', fr: 'ruban', de: 'Klebeband', it: 'nastro', nl: 'tape', zh: '胶带', ja: 'テープ', ru: 'лента' },
        },
        {
          id: 'agricultura/harvesting/tools/tray',
          localImage: 'agricultura/harvesting/tools/tray',
          translations: { en: 'tray', es: 'bandeja', pt: 'bandeja', fr: 'plateau', de: 'Tablett', it: 'vassoio', nl: 'dienblad', zh: '托盘', ja: 'トレイ', ru: 'поднос' },
        },
        {
          id: 'agricultura/harvesting/tools/trolley',
          localImage: 'agricultura/harvesting/tools/trolley',
          translations: { en: 'trolley', es: 'carrito', pt: 'carrinho', fr: 'chariot', de: 'Trolley', it: 'carrello', nl: 'trolley', zh: '手推车', ja: 'トロリー', ru: 'тележка' },
        },
        {
          id: 'agricultura/harvesting/tools/wheelbarrow',
          localImage: 'agricultura/harvesting/tools/wheelbarrow',
          translations: { en: 'wheelbarrow', es: 'carretilla', pt: 'carrinho de mão', fr: 'brouette', de: 'Schubkarre', it: 'carriola', nl: 'kruiwagen', zh: '手推车', ja: '一輪車', ru: 'тачка' },
        },
        {
          id: 'agricultura/harvesting/tools/wrap',
          localImage: 'agricultura/harvesting/tools/wrap',
          translations: { en: 'wrap', es: 'wrap', pt: 'wrap', fr: 'wrap', de: 'wrap', it: 'wrap', nl: 'folie', zh: '包装', ja: 'ラップ', ru: 'обертка' },
        }
        ],
      },
      {
        id: 'materials',
        name: { en: 'Materials', es: 'Materiales', pt: 'Materiais', fr: 'Matériaux', de: 'Materialien', it: 'Materiali', nl: 'Materialen', zh: '材料', ja: '材料', ru: 'Материалы' },
        icon: '📦',
        items: [
        {
          id: 'agricultura/harvesting/materials/crops',
          localImage: 'agricultura/harvesting/materials/crops',
          translations: { en: 'crops', es: 'crops', pt: 'crops', fr: 'crops', de: 'crops', it: 'crops', nl: 'gewassen', zh: '农作物', ja: '作物', ru: 'урожай' },
        },
        {
          id: 'agricultura/harvesting/materials/fruits',
          localImage: 'agricultura/harvesting/materials/fruits',
          translations: { en: 'fruits', es: 'fruits', pt: 'fruits', fr: 'fruits', de: 'fruits', it: 'fruits', nl: 'fruit', zh: '水果', ja: '果物', ru: 'фрукты' },
        },
        {
          id: 'agricultura/harvesting/materials/ice',
          localImage: 'agricultura/harvesting/materials/ice',
          translations: { en: 'ice', es: 'hielo', pt: 'gelo', fr: 'glace', de: 'Eis', it: 'ghiaccio', nl: 'ijs', zh: '冰块', ja: '氷', ru: 'лед' },
        },
        {
          id: 'agricultura/harvesting/materials/labels',
          localImage: 'agricultura/harvesting/materials/labels',
          translations: { en: 'labels', es: 'labels', pt: 'labels', fr: 'labels', de: 'labels', it: 'labels', nl: 'etiketten', zh: '标签', ja: 'ラベル', ru: 'этикетки' },
        },
        {
          id: 'agricultura/harvesting/materials/packaging',
          localImage: 'agricultura/harvesting/materials/packaging',
          translations: { en: 'packaging', es: 'embalaje', pt: 'embalagem', fr: 'emballage', de: 'Verpackung', it: 'imballaggio', nl: 'verpakking', zh: '包装', ja: '梱包', ru: 'упаковка' },
        },
        {
          id: 'agricultura/harvesting/materials/storage_materials',
          localImage: 'agricultura/harvesting/materials/storage_materials',
          translations: { en: 'storage materials', es: 'storage materials', pt: 'storage materials', fr: 'storage materials', de: 'storage materials', it: 'storage materials', nl: 'opslagmaterialen', zh: '储存材料', ja: '収納材料', ru: 'материалы для хранения' },
        },
        {
          id: 'agricultura/harvesting/materials/vegetables',
          localImage: 'agricultura/harvesting/materials/vegetables',
          translations: { en: 'vegetables', es: 'vegetables', pt: 'vegetables', fr: 'vegetables', de: 'vegetables', it: 'vegetables', nl: 'groenten', zh: '蔬菜', ja: '野菜', ru: 'овощи' },
        },
        {
          id: 'agricultura/harvesting/materials/wrap',
          localImage: 'agricultura/harvesting/materials/wrap',
          translations: { en: 'wrap', es: 'wrap', pt: 'wrap', fr: 'wrap', de: 'wrap', it: 'wrap', nl: 'folie', zh: '包装', ja: 'ラップ', ru: 'обертка' },
        }
        ],
      }
      ],
    },
    {
      id: 'livestock',
      name: { en: 'Livestock', es: 'Ganadería', pt: 'Pecuária', fr: 'Élevage', de: 'Viehzucht', it: 'Allevamento', nl: 'Vee', zh: '牲畜', ja: '家畜', ru: 'Животноводство' },
      icon: '🐄',
      roles: [
      {
        id: 'tools',
        name: { en: 'Tools', es: 'Herramientas', pt: 'Ferramentas', fr: 'Outils', de: 'Werkzeuge', it: 'Attrezzi', nl: 'Gereedschap', zh: '工具', ja: '道具', ru: 'Инструменты' },
        icon: '🔧',
        items: [
        {
          id: 'agricultura/livestock/tools/bell',
          localImage: 'agricultura/livestock/tools/bell',
          translations: { en: 'bell', es: 'bell', pt: 'bell', fr: 'bell', de: 'bell', it: 'bell', nl: 'bel', zh: '铃', ja: 'ベル', ru: 'колокольчик' },
        },
        {
          id: 'agricultura/livestock/tools/bin',
          localImage: 'agricultura/livestock/tools/bin',
          translations: { en: 'bin', es: 'cubo de basura', pt: 'lixeira', fr: 'poubelle', de: 'Mülleimer', it: 'bidone', nl: 'prullenbak', zh: '垃圾桶', ja: 'ビン', ru: 'мусорное ведро' },
        },
        {
          id: 'agricultura/livestock/tools/boots',
          localImage: 'agricultura/livestock/tools/boots',
          translations: { en: 'boots', es: 'botas', pt: 'botas', fr: 'bottes', de: 'Stiefel', it: 'stivali', nl: 'laarzen', zh: '靴子', ja: 'ブーツ', ru: 'ботинки' },
        },
        {
          id: 'agricultura/livestock/tools/bottle',
          localImage: 'agricultura/livestock/tools/bottle',
          translations: { en: 'bottle', es: 'botella', pt: 'garrafa', fr: 'bouteille', de: 'Flasche', it: 'bottiglia', nl: 'fles', zh: '瓶子', ja: 'ボトル', ru: 'бутылка' },
        },
        {
          id: 'agricultura/livestock/tools/brush',
          localImage: 'agricultura/livestock/tools/brush',
          translations: { en: 'brush', es: 'cepillo', pt: 'escova', fr: 'brosse', de: 'Bürste', it: 'spazzola', nl: 'borstel', zh: '刷子', ja: 'ブラシ', ru: 'кисть' },
        },
        {
          id: 'agricultura/livestock/tools/bucket',
          localImage: 'agricultura/livestock/tools/bucket',
          translations: { en: 'bucket', es: 'cubo', pt: 'balde', fr: 'seau', de: 'Eimer', it: 'secchio', nl: 'emmer', zh: '水桶', ja: 'バケツ', ru: 'ведро' },
        },
        {
          id: 'agricultura/livestock/tools/cage',
          localImage: 'agricultura/livestock/tools/cage',
          translations: { en: 'cage', es: 'cage', pt: 'cage', fr: 'cage', de: 'cage', it: 'cage', nl: 'kooi', zh: '笼子', ja: 'ケージ', ru: 'клетка' },
        },
        {
          id: 'agricultura/livestock/tools/chain',
          localImage: 'agricultura/livestock/tools/chain',
          translations: { en: 'chain', es: 'cadena', pt: 'corrente', fr: 'chaîne', de: 'Kette', it: 'catena', nl: 'ketting', zh: '链条', ja: 'チェーン', ru: 'цепь' },
        },
        {
          id: 'agricultura/livestock/tools/cleaner',
          localImage: 'agricultura/livestock/tools/cleaner',
          translations: { en: 'cleaner', es: 'cleaner', pt: 'cleaner', fr: 'cleaner', de: 'cleaner', it: 'cleaner', nl: 'reiniger', zh: '清洁剂', ja: '洗浄剤', ru: 'чистящее средство' },
        },
        {
          id: 'agricultura/livestock/tools/clip',
          localImage: 'agricultura/livestock/tools/clip',
          translations: { en: 'clip', es: 'clip', pt: 'clip', fr: 'clip', de: 'clip', it: 'clip', nl: 'clip', zh: '夹子', ja: 'クリップ', ru: 'зажим' },
        },
        {
          id: 'agricultura/livestock/tools/container',
          localImage: 'agricultura/livestock/tools/container',
          translations: { en: 'container', es: 'contenedor', pt: 'recipiente', fr: 'conteneur', de: 'Behälter', it: 'contenitore', nl: 'container', zh: '容器', ja: 'コンテナ', ru: 'контейнер' },
        },
        {
          id: 'agricultura/livestock/tools/cooling_tank',
          localImage: 'agricultura/livestock/tools/cooling_tank',
          translations: { en: 'cooling tank', es: 'cooling tank', pt: 'cooling tank', fr: 'cooling tank', de: 'cooling tank', it: 'cooling tank', nl: 'koeltank', zh: '冷却罐', ja: '冷却タンク', ru: 'охладительный резервуар' },
        },
        {
          id: 'agricultura/livestock/tools/crate',
          localImage: 'agricultura/livestock/tools/crate',
          translations: { en: 'crate', es: 'cajón', pt: 'engradado', fr: 'caisse', de: 'Kiste', it: 'cassa', nl: 'krat', zh: '板条箱', ja: 'クレート', ru: 'ящик' },
        },
        {
          id: 'agricultura/livestock/tools/disinfectant',
          localImage: 'agricultura/livestock/tools/disinfectant',
          translations: { en: 'disinfectant', es: 'desinfectante', pt: 'desinfetante', fr: 'désinfectant', de: 'Desinfektionsmittel', it: 'disinfettante', nl: 'ontsmettingsmiddel', zh: '消毒剂', ja: '消毒剤', ru: 'дезинфектант' },
        },
        {
          id: 'agricultura/livestock/tools/feed_bag',
          localImage: 'agricultura/livestock/tools/feed_bag',
          translations: { en: 'feed bag', es: 'feed bag', pt: 'feed bag', fr: 'feed bag', de: 'feed bag', it: 'feed bag', nl: 'voederzak', zh: '饲料袋', ja: '飼料袋', ru: 'мешок с кормом' },
        },
        {
          id: 'agricultura/livestock/tools/fence',
          localImage: 'agricultura/livestock/tools/fence',
          translations: { en: 'fence', es: 'fence', pt: 'fence', fr: 'fence', de: 'fence', it: 'fence', nl: 'hek', zh: '围栏', ja: 'フェンス', ru: 'забор' },
        },
        {
          id: 'agricultura/livestock/tools/fork',
          localImage: 'agricultura/livestock/tools/fork',
          translations: { en: 'fork', es: 'tenedor', pt: 'forcado', fr: 'fourche', de: 'Gabel', it: 'forca', nl: 'vork', zh: '叉子', ja: 'フォーク', ru: 'вилка' },
        },
        {
          id: 'agricultura/livestock/tools/gate',
          localImage: 'agricultura/livestock/tools/gate',
          translations: { en: 'gate', es: 'gate', pt: 'gate', fr: 'gate', de: 'gate', it: 'gate', nl: 'hek', zh: '闸门', ja: 'ゲート', ru: 'ворота' },
        },
        {
          id: 'agricultura/livestock/tools/gloves',
          localImage: 'agricultura/livestock/tools/gloves',
          translations: { en: 'gloves', es: 'guantes', pt: 'luvas', fr: 'gants', de: 'Handschuhe', it: 'guanti', nl: 'handschoenen', zh: '手套', ja: '手袋', ru: 'перчатки' },
        },
        {
          id: 'agricultura/livestock/tools/heat_lamp',
          localImage: 'agricultura/livestock/tools/heat_lamp',
          translations: { en: 'heat lamp', es: 'heat lamp', pt: 'heat lamp', fr: 'heat lamp', de: 'heat lamp', it: 'heat lamp', nl: 'warmtelamp', zh: '加热灯', ja: 'ヒートランプ', ru: 'тепловая лампа' },
        },
        {
          id: 'agricultura/livestock/tools/hook',
          localImage: 'agricultura/livestock/tools/hook',
          translations: { en: 'hook', es: 'gancho', pt: 'gancho', fr: 'crochet', de: 'Haken', it: 'gancio', nl: 'haak', zh: '挂钩', ja: 'フック', ru: 'крюк' },
        },
        {
          id: 'agricultura/livestock/tools/hose',
          localImage: 'agricultura/livestock/tools/hose',
          translations: { en: 'hose', es: 'manguera', pt: 'mangueira', fr: 'tuyau', de: 'Schlauch', it: 'tubo', nl: 'slang', zh: '软管', ja: 'ホース', ru: 'шланг' },
        },
        {
          id: 'agricultura/livestock/tools/injector',
          localImage: 'agricultura/livestock/tools/injector',
          translations: { en: 'injector', es: 'injector', pt: 'injector', fr: 'injector', de: 'injector', it: 'injector', nl: 'injector', zh: '喷油嘴', ja: 'インジェクター', ru: 'форсунка' },
        },
        {
          id: 'agricultura/livestock/tools/lamp',
          localImage: 'agricultura/livestock/tools/lamp',
          translations: { en: 'lamp', es: 'lamp', pt: 'lamp', fr: 'lamp', de: 'lamp', it: 'lamp', nl: 'lamp', zh: '灯', ja: 'ランプ', ru: 'лампа' },
        },
        {
          id: 'agricultura/livestock/tools/milk_tank',
          localImage: 'agricultura/livestock/tools/milk_tank',
          translations: { en: 'milk tank', es: 'milk tank', pt: 'milk tank', fr: 'milk tank', de: 'milk tank', it: 'milk tank', nl: 'melktank', zh: '牛奶罐', ja: 'ミルクタンク', ru: 'молочный резервуар' },
        },
        {
          id: 'agricultura/livestock/tools/milking_machine',
          localImage: 'agricultura/livestock/tools/milking_machine',
          translations: { en: 'milking machine', es: 'milking machine', pt: 'milking machine', fr: 'milking machine', de: 'milking machine', it: 'milking machine', nl: 'melkmachine', zh: '挤奶机', ja: '搾乳機', ru: 'доильный аппарат' },
        },
        {
          id: 'agricultura/livestock/tools/net',
          localImage: 'agricultura/livestock/tools/net',
          translations: { en: 'net', es: 'red', pt: 'rede', fr: 'filet', de: 'Netz', it: 'rete', nl: 'net', zh: '网', ja: 'ネット', ru: 'сетка' },
        },
        {
          id: 'agricultura/livestock/tools/rake',
          localImage: 'agricultura/livestock/tools/rake',
          translations: { en: 'rake', es: 'rastrillo', pt: 'ancinho', fr: 'râteau', de: 'Rechen', it: 'rastrello', nl: 'hark', zh: '耙子', ja: '熊手', ru: 'грабли' },
        },
        {
          id: 'agricultura/livestock/tools/rope',
          localImage: 'agricultura/livestock/tools/rope',
          translations: { en: 'rope', es: 'cuerda', pt: 'corda', fr: 'corde', de: 'Seil', it: 'corda', nl: 'touw', zh: '绳子', ja: 'ロープ', ru: 'веревка' },
        },
        {
          id: 'agricultura/livestock/tools/scoop',
          localImage: 'agricultura/livestock/tools/scoop',
          translations: { en: 'scoop', es: 'cuchara de helado', pt: 'concha', fr: 'cuillère à glace', de: 'Eiskugel', it: 'paletta gelato', nl: 'schep', zh: '勺子', ja: 'スコップ', ru: 'совок' },
        },
        {
          id: 'agricultura/livestock/tools/shovel',
          localImage: 'agricultura/livestock/tools/shovel',
          translations: { en: 'shovel', es: 'pala', pt: 'pá', fr: 'pelle', de: 'Schaufel', it: 'vanga', nl: 'schop', zh: '铲子', ja: 'シャベル', ru: 'лопата' },
        },
        {
          id: 'agricultura/livestock/tools/spray',
          localImage: 'agricultura/livestock/tools/spray',
          translations: { en: 'spray', es: 'spray', pt: 'spray', fr: 'spray', de: 'Spray', it: 'spray', nl: 'spray', zh: '喷雾', ja: 'スプレー', ru: 'спрей' },
        },
        {
          id: 'agricultura/livestock/tools/stick',
          localImage: 'agricultura/livestock/tools/stick',
          translations: { en: 'stick', es: 'stick', pt: 'stick', fr: 'stick', de: 'stick', it: 'stick', nl: 'stok', zh: '棒', ja: 'スティック', ru: 'палка' },
        },
        {
          id: 'agricultura/livestock/tools/stool',
          localImage: 'agricultura/livestock/tools/stool',
          translations: { en: 'stool', es: 'taburete', pt: 'banqueta', fr: 'tabouret', de: 'Hocker', it: 'sgabello', nl: 'kruk', zh: '凳子', ja: 'スツール', ru: 'табурет' },
        },
        {
          id: 'agricultura/livestock/tools/syringe',
          localImage: 'agricultura/livestock/tools/syringe',
          translations: { en: 'syringe', es: 'jeringa', pt: 'seringa', fr: 'seringue', de: 'Spritze', it: 'siringa', nl: 'spuit', zh: '注射器', ja: '注射器', ru: 'шприц' },
        },
        {
          id: 'agricultura/livestock/tools/tag',
          localImage: 'agricultura/livestock/tools/tag',
          translations: { en: 'tag', es: 'tag', pt: 'tag', fr: 'tag', de: 'tag', it: 'tag', nl: 'label', zh: '标签', ja: 'タグ', ru: 'тег' },
        },
        {
          id: 'agricultura/livestock/tools/tag_tool',
          localImage: 'agricultura/livestock/tools/tag_tool',
          translations: { en: 'tag tool', es: 'tag tool', pt: 'tag tool', fr: 'tag tool', de: 'tag tool', it: 'tag tool', nl: 'labelgereedschap', zh: '标签工具', ja: 'タグツール', ru: 'инструмент для маркировки' },
        },
        {
          id: 'agricultura/livestock/tools/tank',
          localImage: 'agricultura/livestock/tools/tank',
          translations: { en: 'tank', es: 'tanque', pt: 'tanque', fr: 'réservoir', de: 'Tank', it: 'serbatoio', nl: 'tank', zh: '容器', ja: 'タンク', ru: 'резервуар' },
        },
        {
          id: 'agricultura/livestock/tools/thermometer',
          localImage: 'agricultura/livestock/tools/thermometer',
          translations: { en: 'thermometer', es: 'termómetro', pt: 'termômetro', fr: 'thermomètre', de: 'Thermometer', it: 'termometro', nl: 'thermometer', zh: '温度计', ja: '体温計', ru: 'термометр' },
        },
        {
          id: 'agricultura/livestock/tools/towel',
          localImage: 'agricultura/livestock/tools/towel',
          translations: { en: 'towel', es: 'towel', pt: 'towel', fr: 'towel', de: 'towel', it: 'towel', nl: 'handdoek', zh: '毛巾', ja: 'タオル', ru: 'полотенце' },
        },
        {
          id: 'agricultura/livestock/tools/trailer',
          localImage: 'agricultura/livestock/tools/trailer',
          translations: { en: 'trailer', es: 'trailer', pt: 'trailer', fr: 'trailer', de: 'trailer', it: 'trailer', nl: 'aanhanger', zh: '拖车', ja: 'トレーラー', ru: 'прицеп' },
        },
        {
          id: 'agricultura/livestock/tools/wheelbarrow',
          localImage: 'agricultura/livestock/tools/wheelbarrow',
          translations: { en: 'wheelbarrow', es: 'carretilla', pt: 'carrinho de mão', fr: 'brouette', de: 'Schubkarre', it: 'carriola', nl: 'kruiwagen', zh: '手推车', ja: '一輪車', ru: 'тачка' },
        },
        {
          id: 'agricultura/livestock/tools/whistle',
          localImage: 'agricultura/livestock/tools/whistle',
          translations: { en: 'whistle', es: 'whistle', pt: 'whistle', fr: 'whistle', de: 'whistle', it: 'whistle', nl: 'fluitje', zh: '口哨', ja: '笛', ru: 'свисток' },
        }
        ],
      },
      {
        id: 'materials',
        name: { en: 'Materials', es: 'Materiales', pt: 'Materiais', fr: 'Matériaux', de: 'Materialien', it: 'Materiali', nl: 'Materialen', zh: '材料', ja: '材料', ru: 'Материалы' },
        icon: '📦',
        items: [
        {
          id: 'agricultura/livestock/materials/disinfectant',
          localImage: 'agricultura/livestock/materials/disinfectant',
          translations: { en: 'disinfectant', es: 'desinfectante', pt: 'desinfetante', fr: 'désinfectant', de: 'Desinfektionsmittel', it: 'disinfettante', nl: 'ontsmettingsmiddel', zh: '消毒剂', ja: '消毒剤', ru: 'дезинфектант' },
        },
        {
          id: 'agricultura/livestock/materials/feed',
          localImage: 'agricultura/livestock/materials/feed',
          translations: { en: 'feed', es: 'feed', pt: 'feed', fr: 'feed', de: 'feed', it: 'feed', nl: 'voer', zh: '饲料', ja: '飼料', ru: 'корм' },
        },
        {
          id: 'agricultura/livestock/materials/medicine',
          localImage: 'agricultura/livestock/materials/medicine',
          translations: { en: 'medicine', es: 'medicina', pt: 'medicamento', fr: 'médicament', de: 'Medizin', it: 'medicina', nl: 'medicijn', zh: '药物', ja: '薬', ru: 'лекарство' },
        },
        {
          id: 'agricultura/livestock/materials/supplements',
          localImage: 'agricultura/livestock/materials/supplements',
          translations: { en: 'supplements', es: 'supplements', pt: 'supplements', fr: 'supplements', de: 'supplements', it: 'supplements', nl: 'supplementen', zh: '补充剂', ja: 'サプリメント', ru: 'добавки' },
        },
        {
          id: 'agricultura/livestock/materials/water',
          localImage: 'agricultura/livestock/materials/water',
          translations: { en: 'water', es: 'agua', pt: 'água', fr: 'eau', de: 'Wasser', it: 'acqua', nl: 'water', zh: '水', ja: '水', ru: 'вода' },
        }
        ],
      }
      ],
    },
    {
      id: 'maintenance',
      name: { en: 'Maintenance', es: 'Mantenimiento', pt: 'Manutenção', fr: 'Maintenance', de: 'Wartung', it: 'Manutenzione', nl: 'Onderhoud', zh: '维护', ja: 'メンテナンス', ru: 'Техобслуживание' },
      icon: '🔧',
      roles: [
      {
        id: 'tools',
        name: { en: 'Tools', es: 'Herramientas', pt: 'Ferramentas', fr: 'Outils', de: 'Werkzeuge', it: 'Attrezzi', nl: 'Gereedschap', zh: '工具', ja: '道具', ru: 'Инструменты' },
        icon: '🔧',
        items: [
        {
          id: 'agricultura/maintenance/tools/backpack_sprayer',
          localImage: 'agricultura/maintenance/tools/backpack_sprayer',
          translations: { en: 'backpack sprayer', es: 'backpack sprayer', pt: 'backpack sprayer', fr: 'backpack sprayer', de: 'backpack sprayer', it: 'backpack sprayer', nl: 'rugsproeier', zh: '背负式喷雾器', ja: '背負い式噴霧器', ru: 'ранцевый опрыскиватель' },
        },
        {
          id: 'agricultura/maintenance/tools/bin',
          localImage: 'agricultura/maintenance/tools/bin',
          translations: { en: 'bin', es: 'cubo de basura', pt: 'lixeira', fr: 'poubelle', de: 'Mülleimer', it: 'bidone', nl: 'prullenbak', zh: '垃圾桶', ja: 'ビン', ru: 'мусорное ведро' },
        },
        {
          id: 'agricultura/maintenance/tools/boots',
          localImage: 'agricultura/maintenance/tools/boots',
          translations: { en: 'boots', es: 'botas', pt: 'botas', fr: 'bottes', de: 'Stiefel', it: 'stivali', nl: 'laarzen', zh: '靴子', ja: 'ブーツ', ru: 'ботинки' },
        },
        {
          id: 'agricultura/maintenance/tools/box',
          localImage: 'agricultura/maintenance/tools/box',
          translations: { en: 'box', es: 'caja', pt: 'caixa', fr: 'boîte', de: 'Kasten', it: 'scatola', nl: 'doos', zh: '箱子', ja: 'ボックス', ru: 'коробка' },
        },
        {
          id: 'agricultura/maintenance/tools/brush',
          localImage: 'agricultura/maintenance/tools/brush',
          translations: { en: 'brush', es: 'cepillo', pt: 'escova', fr: 'brosse', de: 'Bürste', it: 'spazzola', nl: 'borstel', zh: '刷子', ja: 'ブラシ', ru: 'кисть' },
        },
        {
          id: 'agricultura/maintenance/tools/bucket',
          localImage: 'agricultura/maintenance/tools/bucket',
          translations: { en: 'bucket', es: 'cubo', pt: 'balde', fr: 'seau', de: 'Eimer', it: 'secchio', nl: 'emmer', zh: '水桶', ja: 'バケツ', ru: 'ведро' },
        },
        {
          id: 'agricultura/maintenance/tools/cart',
          localImage: 'agricultura/maintenance/tools/cart',
          translations: { en: 'cart', es: 'carrito', pt: 'carrinho', fr: 'chariot', de: 'Wagen', it: 'carrello', nl: 'kar', zh: '推车', ja: 'カート', ru: 'тележка' },
        },
        {
          id: 'agricultura/maintenance/tools/clips',
          localImage: 'agricultura/maintenance/tools/clips',
          translations: { en: 'clips', es: 'clips', pt: 'clips', fr: 'clips', de: 'clips', it: 'clips', nl: 'clips', zh: '夹子', ja: 'クリップ', ru: 'зажимы' },
        },
        {
          id: 'agricultura/maintenance/tools/cloth',
          localImage: 'agricultura/maintenance/tools/cloth',
          translations: { en: 'cloth', es: 'trapo', pt: 'pano', fr: 'chiffon', de: 'Tuch', it: 'panno', nl: 'doek', zh: '布', ja: '布', ru: 'ткань' },
        },
        {
          id: 'agricultura/maintenance/tools/connector',
          localImage: 'agricultura/maintenance/tools/connector',
          translations: { en: 'connector', es: 'connector', pt: 'connector', fr: 'connector', de: 'connector', it: 'connector', nl: 'connector', zh: '连接器', ja: 'コネクター', ru: 'разъем' },
        },
        {
          id: 'agricultura/maintenance/tools/container',
          localImage: 'agricultura/maintenance/tools/container',
          translations: { en: 'container', es: 'contenedor', pt: 'recipiente', fr: 'conteneur', de: 'Behälter', it: 'contenitore', nl: 'container', zh: '容器', ja: 'コンテナ', ru: 'контейнер' },
        },
        {
          id: 'agricultura/maintenance/tools/cup',
          localImage: 'agricultura/maintenance/tools/cup',
          translations: { en: 'cup', es: 'cup', pt: 'cup', fr: 'cup', de: 'cup', it: 'cup', nl: 'beker', zh: '杯子', ja: 'カップ', ru: 'стакан' },
        },
        {
          id: 'agricultura/maintenance/tools/drip_line',
          localImage: 'agricultura/maintenance/tools/drip_line',
          translations: { en: 'drip line', es: 'drip line', pt: 'drip line', fr: 'drip line', de: 'drip line', it: 'drip line', nl: 'druppellijn', zh: '滴管', ja: '点滴ライン', ru: 'капельная линия' },
        },
        {
          id: 'agricultura/maintenance/tools/fence',
          localImage: 'agricultura/maintenance/tools/fence',
          translations: { en: 'fence', es: 'fence', pt: 'fence', fr: 'fence', de: 'fence', it: 'fence', nl: 'hek', zh: '围栏', ja: 'フェンス', ru: 'забор' },
        },
        {
          id: 'agricultura/maintenance/tools/filter',
          localImage: 'agricultura/maintenance/tools/filter',
          translations: { en: 'filter', es: 'filtro', pt: 'filtro', fr: 'filtre', de: 'Filter', it: 'filtro', nl: 'filter', zh: '过滤器', ja: 'フィルター', ru: 'фильтр' },
        },
        {
          id: 'agricultura/maintenance/tools/gauge',
          localImage: 'agricultura/maintenance/tools/gauge',
          translations: { en: 'gauge', es: 'medidor', pt: 'medidor', fr: 'jauge', de: 'Messgerät', it: 'calibro', nl: 'meter', zh: '仪表', ja: 'ゲージ', ru: 'манометр' },
        },
        {
          id: 'agricultura/maintenance/tools/gloves',
          localImage: 'agricultura/maintenance/tools/gloves',
          translations: { en: 'gloves', es: 'guantes', pt: 'luvas', fr: 'gants', de: 'Handschuhe', it: 'guanti', nl: 'handschoenen', zh: '手套', ja: '手袋', ru: 'перчатки' },
        },
        {
          id: 'agricultura/maintenance/tools/goggles',
          localImage: 'agricultura/maintenance/tools/goggles',
          translations: { en: 'goggles', es: 'gafas protectoras', pt: 'óculos de proteção', fr: 'lunettes', de: 'Schutzbrille', it: 'occhiali', nl: 'veiligheidsbril', zh: '护目镜', ja: 'ゴーグル', ru: 'защитные очки' },
        },
        {
          id: 'agricultura/maintenance/tools/hose',
          localImage: 'agricultura/maintenance/tools/hose',
          translations: { en: 'hose', es: 'manguera', pt: 'mangueira', fr: 'tuyau', de: 'Schlauch', it: 'tubo', nl: 'slang', zh: '软管', ja: 'ホース', ru: 'шланг' },
        },
        {
          id: 'agricultura/maintenance/tools/irrigation',
          localImage: 'agricultura/maintenance/tools/irrigation',
          translations: { en: 'irrigation', es: 'irrigation', pt: 'irrigation', fr: 'irrigation', de: 'irrigation', it: 'irrigation', nl: 'irrigatie', zh: '灌溉', ja: '灌漑', ru: 'ирригация' },
        },
        {
          id: 'agricultura/maintenance/tools/knife',
          localImage: 'agricultura/maintenance/tools/knife',
          translations: { en: 'knife', es: 'cuchillo', pt: 'faca', fr: 'couteau', de: 'Messer', it: 'coltello', nl: 'mes', zh: '刀', ja: 'ナイフ', ru: 'нож' },
        },
        {
          id: 'agricultura/maintenance/tools/label',
          localImage: 'agricultura/maintenance/tools/label',
          translations: { en: 'label', es: 'etiqueta', pt: 'etiqueta', fr: 'étiquette', de: 'Etikett', it: 'etichetta', nl: 'etiket', zh: '标签', ja: 'ラベル', ru: 'этикетка' },
        },
        {
          id: 'agricultura/maintenance/tools/ladder',
          localImage: 'agricultura/maintenance/tools/ladder',
          translations: { en: 'ladder', es: 'escalera', pt: 'escada', fr: 'échelle', de: 'Leiter', it: 'scala', nl: 'ladder', zh: '梯子', ja: 'はしご', ru: 'лестница' },
        },
        {
          id: 'agricultura/maintenance/tools/marker',
          localImage: 'agricultura/maintenance/tools/marker',
          translations: { en: 'marker', es: 'marcador', pt: 'marcador', fr: 'marqueur', de: 'Marker', it: 'pennarello', nl: 'marker', zh: '记号笔', ja: 'マーカー', ru: 'маркер' },
        },
        {
          id: 'agricultura/maintenance/tools/mask',
          localImage: 'agricultura/maintenance/tools/mask',
          translations: { en: 'mask', es: 'mascarilla', pt: 'máscara', fr: 'masque', de: 'Maske', it: 'maschera', nl: 'masker', zh: '口罩', ja: 'マスク', ru: 'маска' },
        },
        {
          id: 'agricultura/maintenance/tools/meter',
          localImage: 'agricultura/maintenance/tools/meter',
          translations: { en: 'meter', es: 'medidor', pt: 'medidor', fr: 'mètre', de: 'Messgerät', it: 'metro', nl: 'meter', zh: '仪表', ja: 'メーター', ru: 'счетчик' },
        },
        {
          id: 'agricultura/maintenance/tools/net',
          localImage: 'agricultura/maintenance/tools/net',
          translations: { en: 'net', es: 'red', pt: 'rede', fr: 'filet', de: 'Netz', it: 'rete', nl: 'net', zh: '网', ja: 'ネット', ru: 'сетка' },
        },
        {
          id: 'agricultura/maintenance/tools/pipe',
          localImage: 'agricultura/maintenance/tools/pipe',
          translations: { en: 'pipe', es: 'tubo', pt: 'cano', fr: 'tuyau', de: 'Rohr', it: 'tubo', nl: 'pijp', zh: '管道', ja: 'パイプ', ru: 'труба' },
        },
        {
          id: 'agricultura/maintenance/tools/rope',
          localImage: 'agricultura/maintenance/tools/rope',
          translations: { en: 'rope', es: 'cuerda', pt: 'corda', fr: 'corde', de: 'Seil', it: 'corda', nl: 'touw', zh: '绳子', ja: 'ロープ', ru: 'веревка' },
        },
        {
          id: 'agricultura/maintenance/tools/pump',
          localImage: 'agricultura/maintenance/tools/pump',
          translations: { en: 'rump', es: 'rump', pt: 'rump', fr: 'rump', de: 'rump', it: 'rump', nl: 'staartstuk', zh: '臀肉', ja: 'ランプ', ru: 'кострец' },
        },
        {
          id: 'agricultura/maintenance/tools/scale',
          localImage: 'agricultura/maintenance/tools/scale',
          translations: { en: 'scale', es: 'báscula', pt: 'balança', fr: 'balance', de: 'Waage', it: 'bilancia', nl: 'weegschaal', zh: '秤', ja: 'スケール', ru: 'весы' },
        },
        {
          id: 'agricultura/maintenance/tools/scissors',
          localImage: 'agricultura/maintenance/tools/scissors',
          translations: { en: 'scissors', es: 'tijeras', pt: 'tesoura', fr: 'ciseaux', de: 'Schere', it: 'forbici', nl: 'schaar', zh: '剪刀', ja: 'ハサミ', ru: 'ножницы' },
        },
        {
          id: 'agricultura/maintenance/tools/shears',
          localImage: 'agricultura/maintenance/tools/shears',
          translations: { en: 'shears', es: 'tijeras de podar', pt: 'tesoura de poda', fr: 'sécateur', de: 'Gartenschere', it: 'cesoie', nl: 'snoeischaar', zh: '大剪刀', ja: '剪定鋏', ru: 'ножницы для стрижки' },
        },
        {
          id: 'agricultura/maintenance/tools/sprayer',
          localImage: 'agricultura/maintenance/tools/sprayer',
          translations: { en: 'sprayer', es: 'pulverizador', pt: 'pulverizador', fr: 'pulvérisateur', de: 'Sprüher', it: 'spruzzatore', nl: 'sproeier', zh: '喷雾器', ja: 'スプレイヤー', ru: 'опрыскиватель' },
        },
        {
          id: 'agricultura/maintenance/tools/spreader',
          localImage: 'agricultura/maintenance/tools/spreader',
          translations: { en: 'spreader', es: 'spreader', pt: 'spreader', fr: 'spreader', de: 'spreader', it: 'spreader', nl: 'spreider', zh: '撒播机', ja: 'スプレッダー', ru: 'разбрасыватель' },
        },
        {
          id: 'agricultura/maintenance/tools/sprinkler',
          localImage: 'agricultura/maintenance/tools/sprinkler',
          translations: { en: 'sprinkler', es: 'sprinkler', pt: 'sprinkler', fr: 'sprinkler', de: 'sprinkler', it: 'sprinkler', nl: 'sproeier', zh: '喷水器', ja: 'スプリンクラー', ru: 'разбрызгиватель' },
        },
        {
          id: 'agricultura/maintenance/tools/stakes',
          localImage: 'agricultura/maintenance/tools/stakes',
          translations: { en: 'stakes', es: 'stakes', pt: 'stakes', fr: 'stakes', de: 'stakes', it: 'stakes', nl: 'palen', zh: '桩', ja: '杭', ru: 'колышки' },
        },
        {
          id: 'agricultura/maintenance/tools/tank',
          localImage: 'agricultura/maintenance/tools/tank',
          translations: { en: 'tank', es: 'tanque', pt: 'tanque', fr: 'réservoir', de: 'Tank', it: 'serbatoio', nl: 'tank', zh: '容器', ja: 'タンク', ru: 'резервуар' },
        },
        {
          id: 'agricultura/maintenance/tools/tape',
          localImage: 'agricultura/maintenance/tools/tape',
          translations: { en: 'tape', es: 'cinta', pt: 'fita', fr: 'ruban', de: 'Klebeband', it: 'nastro', nl: 'tape', zh: '胶带', ja: 'テープ', ru: 'лента' },
        },
        {
          id: 'agricultura/maintenance/tools/tester',
          localImage: 'agricultura/maintenance/tools/tester',
          translations: { en: 'tester', es: 'tester', pt: 'tester', fr: 'tester', de: 'tester', it: 'tester', nl: 'tester', zh: '测试仪', ja: 'テスター', ru: 'тестер' },
        },
        {
          id: 'agricultura/maintenance/tools/timer',
          localImage: 'agricultura/maintenance/tools/timer',
          translations: { en: 'timer', es: 'timer', pt: 'timer', fr: 'timer', de: 'timer', it: 'timer', nl: 'timer', zh: '计时器', ja: 'タイマー', ru: 'таймер' },
        },
        {
          id: 'agricultura/maintenance/tools/toolbox',
          localImage: 'agricultura/maintenance/tools/toolbox',
          translations: { en: 'toolbox', es: 'toolbox', pt: 'toolbox', fr: 'toolbox', de: 'toolbox', it: 'toolbox', nl: 'gereedschapskist', zh: '工具箱', ja: 'ツールボックス', ru: 'ящик для инструментов' },
        },
        {
          id: 'agricultura/maintenance/tools/trolley',
          localImage: 'agricultura/maintenance/tools/trolley',
          translations: { en: 'trolley', es: 'carrito', pt: 'carrinho', fr: 'chariot', de: 'Trolley', it: 'carrello', nl: 'trolley', zh: '手推车', ja: 'トロリー', ru: 'тележка' },
        },
        {
          id: 'agricultura/maintenance/tools/valve',
          localImage: 'agricultura/maintenance/tools/valve',
          translations: { en: 'valve', es: 'valve', pt: 'valve', fr: 'valve', de: 'valve', it: 'valve', nl: 'klep', zh: '阀门', ja: 'バルブ', ru: 'клапан' },
        },
        {
          id: 'agricultura/maintenance/tools/wheelbarrow',
          localImage: 'agricultura/maintenance/tools/wheelbarrow',
          translations: { en: 'wheelbarrow', es: 'carretilla', pt: 'carrinho de mão', fr: 'brouette', de: 'Schubkarre', it: 'carriola', nl: 'kruiwagen', zh: '手推车', ja: '一輪車', ru: 'тачка' },
        }
        ],
      },
      {
        id: 'materials',
        name: { en: 'Materials', es: 'Materiales', pt: 'Materiais', fr: 'Matériaux', de: 'Materialien', it: 'Materiali', nl: 'Materialen', zh: '材料', ja: '材料', ru: 'Материалы' },
        icon: '📦',
        items: [
        {
          id: 'agricultura/maintenance/materials/chemicals',
          localImage: 'agricultura/maintenance/materials/chemicals',
          translations: { en: 'chemicals', es: 'chemicals', pt: 'chemicals', fr: 'chemicals', de: 'chemicals', it: 'chemicals', nl: 'chemicaliën', zh: '化学品', ja: '化学物質', ru: 'химические вещества' },
        },
        {
          id: 'agricultura/maintenance/materials/cleaning_products',
          localImage: 'agricultura/maintenance/materials/cleaning_products',
          translations: { en: 'cleaning products', es: 'cleaning products', pt: 'cleaning products', fr: 'cleaning products', de: 'cleaning products', it: 'cleaning products', nl: 'schoonmaakproducten', zh: '清洁产品', ja: '洗浄製品', ru: 'чистящие средства' },
        },
        {
          id: 'agricultura/maintenance/materials/fertilizer',
          localImage: 'agricultura/maintenance/materials/fertilizer',
          translations: { en: 'fertilizer', es: 'fertilizante', pt: 'fertilizante', fr: 'engrais', de: 'Dünger', it: 'fertilizzante', nl: 'meststof', zh: '肥料', ja: '肥料', ru: 'удобрение' },
        },
        {
          id: 'agricultura/maintenance/materials/repair_materials',
          localImage: 'agricultura/maintenance/materials/repair_materials',
          translations: { en: 'repair materials', es: 'repair materials', pt: 'repair materials', fr: 'repair materials', de: 'repair materials', it: 'repair materials', nl: 'reparatiematerialen', zh: '修理材料', ja: '修理材料', ru: 'ремонтные материалы' },
        }
        ],
      }
      ],
    },
    {
      id: 'planting',
      name: { en: 'Planting', es: 'Siembra', pt: 'Plantio', fr: 'Plantation', de: 'Pflanzung', it: 'Semina', nl: 'Planten', zh: '种植', ja: '植え付け', ru: 'Посадка' },
      icon: '🌱',
      roles: [
      {
        id: 'tools',
        name: { en: 'Tools', es: 'Herramientas', pt: 'Ferramentas', fr: 'Outils', de: 'Werkzeuge', it: 'Attrezzi', nl: 'Gereedschap', zh: '工具', ja: '道具', ru: 'Инструменты' },
        icon: '🔧',
        items: [
        {
          id: 'agricultura/planting/tools/apron',
          localImage: 'agricultura/planting/tools/apron',
          translations: { en: 'apron', es: 'delantal', pt: 'avental', fr: 'tablier', de: 'Schürze', it: 'grembiule', nl: 'schort', zh: '围裙', ja: 'エプロン', ru: 'фартук' },
        },
        {
          id: 'agricultura/planting/tools/backpack_sprayer',
          localImage: 'agricultura/planting/tools/backpack_sprayer',
          translations: { en: 'backpack sprayer', es: 'backpack sprayer', pt: 'backpack sprayer', fr: 'backpack sprayer', de: 'backpack sprayer', it: 'backpack sprayer', nl: 'rugsproeier', zh: '背负式喷雾器', ja: '背負い式噴霧器', ru: 'ранцевый опрыскиватель' },
        },
        {
          id: 'agricultura/planting/tools/boots',
          localImage: 'agricultura/planting/tools/boots',
          translations: { en: 'boots', es: 'botas', pt: 'botas', fr: 'bottes', de: 'Stiefel', it: 'stivali', nl: 'laarzen', zh: '靴子', ja: 'ブーツ', ru: 'ботинки' },
        },
        {
          id: 'agricultura/planting/tools/box',
          localImage: 'agricultura/planting/tools/box',
          translations: { en: 'box', es: 'caja', pt: 'caixa', fr: 'boîte', de: 'Kasten', it: 'scatola', nl: 'doos', zh: '箱子', ja: 'ボックス', ru: 'коробка' },
        },
        {
          id: 'agricultura/planting/tools/bucket',
          localImage: 'agricultura/planting/tools/bucket',
          translations: { en: 'bucket', es: 'cubo', pt: 'balde', fr: 'seau', de: 'Eimer', it: 'secchio', nl: 'emmer', zh: '水桶', ja: 'バケツ', ru: 'ведро' },
        },
        {
          id: 'agricultura/planting/tools/connector',
          localImage: 'agricultura/planting/tools/connector',
          translations: { en: 'connector', es: 'connector', pt: 'connector', fr: 'connector', de: 'connector', it: 'connector', nl: 'connector', zh: '连接器', ja: 'コネクター', ru: 'разъем' },
        },
        {
          id: 'agricultura/planting/tools/container',
          localImage: 'agricultura/planting/tools/container',
          translations: { en: 'container', es: 'contenedor', pt: 'recipiente', fr: 'conteneur', de: 'Behälter', it: 'contenitore', nl: 'container', zh: '容器', ja: 'コンテナ', ru: 'контейнер' },
        },
        {
          id: 'agricultura/planting/tools/drip_line',
          localImage: 'agricultura/planting/tools/drip_line',
          translations: { en: 'drip line', es: 'drip line', pt: 'drip line', fr: 'drip line', de: 'drip line', it: 'drip line', nl: 'druppellijn', zh: '滴管', ja: '点滴ライン', ru: 'капельная линия' },
        },
        {
          id: 'agricultura/planting/tools/fork',
          localImage: 'agricultura/planting/tools/fork',
          translations: { en: 'fork', es: 'tenedor', pt: 'forcado', fr: 'fourche', de: 'Gabel', it: 'forca', nl: 'vork', zh: '叉子', ja: 'フォーク', ru: 'вилка' },
        },
        {
          id: 'agricultura/planting/tools/gloves',
          localImage: 'agricultura/planting/tools/gloves',
          translations: { en: 'gloves', es: 'guantes', pt: 'luvas', fr: 'gants', de: 'Handschuhe', it: 'guanti', nl: 'handschoenen', zh: '手套', ja: '手袋', ru: 'перчатки' },
        },
        {
          id: 'agricultura/planting/tools/grow_light',
          localImage: 'agricultura/planting/tools/grow_light',
          translations: { en: 'grow light', es: 'grow light', pt: 'grow light', fr: 'grow light', de: 'grow light', it: 'grow light', nl: 'groeilamp', zh: '植物灯', ja: 'グロウライト', ru: 'лампа для растений' },
        },
        {
          id: 'agricultura/planting/tools/hoe',
          localImage: 'agricultura/planting/tools/hoe',
          translations: { en: 'hoe', es: 'azada', pt: 'enxada', fr: 'houe', de: 'Hacke', it: 'zappa', nl: 'schoffel', zh: '锄头', ja: '鍬', ru: 'мотыга' },
        },
        {
          id: 'agricultura/planting/tools/hose',
          localImage: 'agricultura/planting/tools/hose',
          translations: { en: 'hose', es: 'manguera', pt: 'mangueira', fr: 'tuyau', de: 'Schlauch', it: 'tubo', nl: 'slang', zh: '软管', ja: 'ホース', ru: 'шланг' },
        },
        {
          id: 'agricultura/planting/tools/hose_reel',
          localImage: 'agricultura/planting/tools/hose_reel',
          translations: { en: 'hose reel', es: 'hose reel', pt: 'hose reel', fr: 'hose reel', de: 'hose reel', it: 'hose reel', nl: 'slanghaspel', zh: '软管卷轴', ja: 'ホースリール', ru: 'катушка для шланга' },
        },
        {
          id: 'agricultura/planting/tools/irrigation_system',
          localImage: 'agricultura/planting/tools/irrigation_system',
          translations: { en: 'irrigation system', es: 'irrigation system', pt: 'irrigation system', fr: 'irrigation system', de: 'irrigation system', it: 'irrigation system', nl: 'irrigatiesysteem', zh: '灌溉系统', ja: '灌漑システム', ru: 'ирригационная система' },
        },
        {
          id: 'agricultura/planting/tools/knife',
          localImage: 'agricultura/planting/tools/knife',
          translations: { en: 'knife', es: 'cuchillo', pt: 'faca', fr: 'couteau', de: 'Messer', it: 'coltello', nl: 'mes', zh: '刀', ja: 'ナイフ', ru: 'нож' },
        },
        {
          id: 'agricultura/planting/tools/labels',
          localImage: 'agricultura/planting/tools/labels',
          translations: { en: 'labels', es: 'labels', pt: 'labels', fr: 'labels', de: 'labels', it: 'labels', nl: 'etiketten', zh: '标签', ja: 'ラベル', ru: 'этикетки' },
        },
        {
          id: 'agricultura/planting/tools/marker',
          localImage: 'agricultura/planting/tools/marker',
          translations: { en: 'marker', es: 'marcador', pt: 'marcador', fr: 'marqueur', de: 'Marker', it: 'pennarello', nl: 'marker', zh: '记号笔', ja: 'マーカー', ru: 'маркер' },
        },
        {
          id: 'agricultura/planting/tools/mask',
          localImage: 'agricultura/planting/tools/mask',
          translations: { en: 'mask', es: 'mascarilla', pt: 'máscara', fr: 'masque', de: 'Maske', it: 'maschera', nl: 'masker', zh: '口罩', ja: 'マスク', ru: 'маска' },
        },
        {
          id: 'agricultura/planting/tools/measuring_cup',
          localImage: 'agricultura/planting/tools/measuring_cup',
          translations: { en: 'measuring cup', es: 'measuring cup', pt: 'measuring cup', fr: 'measuring cup', de: 'measuring cup', it: 'measuring cup', nl: 'maatbeker', zh: '量杯', ja: '計量カップ', ru: 'мерный стакан' },
        },
        {
          id: 'agricultura/planting/tools/moisture_meter',
          localImage: 'agricultura/planting/tools/moisture_meter',
          translations: { en: 'moisture meter', es: 'moisture meter', pt: 'moisture meter', fr: 'moisture meter', de: 'moisture meter', it: 'moisture meter', nl: 'vochtmeter', zh: '湿度计', ja: '水分計', ru: 'влагомер' },
        },
        {
          id: 'agricultura/planting/tools/pot',
          localImage: 'agricultura/planting/tools/pot',
          translations: { en: 'pot', es: 'pot', pt: 'pot', fr: 'pot', de: 'pot', it: 'pot', nl: 'pot', zh: '锅', ja: '鍋', ru: 'кастрюля' },
        },
        {
          id: 'agricultura/planting/tools/pump',
          localImage: 'agricultura/planting/tools/pump',
          translations: { en: 'pump', es: 'bomba', pt: 'bomba', fr: 'pompe', de: 'Pumpe', it: 'pompa', nl: 'pomp', zh: '泵', ja: 'ポンプ', ru: 'насос' },
        },
        {
          id: 'agricultura/planting/tools/rack',
          localImage: 'agricultura/planting/tools/rack',
          translations: { en: 'rack', es: 'estante', pt: 'prateleira', fr: 'étagère', de: 'Regal', it: 'scaffale', nl: 'rek', zh: '货架', ja: 'ラック', ru: 'стеллаж' },
        },
        {
          id: 'agricultura/planting/tools/rake',
          localImage: 'agricultura/planting/tools/rake',
          translations: { en: 'rake', es: 'rastrillo', pt: 'ancinho', fr: 'râteau', de: 'Rechen', it: 'rastrello', nl: 'hark', zh: '耙子', ja: '熊手', ru: 'грабли' },
        },
        {
          id: 'agricultura/planting/tools/rope',
          localImage: 'agricultura/planting/tools/rope',
          translations: { en: 'rope', es: 'cuerda', pt: 'corda', fr: 'corde', de: 'Seil', it: 'corda', nl: 'touw', zh: '绳子', ja: 'ロープ', ru: 'веревка' },
        },
        {
          id: 'agricultura/planting/tools/scissors',
          localImage: 'agricultura/planting/tools/scissors',
          translations: { en: 'scissors', es: 'tijeras', pt: 'tesoura', fr: 'ciseaux', de: 'Schere', it: 'forbici', nl: 'schaar', zh: '剪刀', ja: 'ハサミ', ru: 'ножницы' },
        },
        {
          id: 'agricultura/planting/tools/seed_drill',
          localImage: 'agricultura/planting/tools/seed_drill',
          translations: { en: 'seed drill', es: 'seed drill', pt: 'seed drill', fr: 'seed drill', de: 'seed drill', it: 'seed drill', nl: 'zaaimachine', zh: '播种机', ja: 'シードドリル', ru: 'сеялка' },
        },
        {
          id: 'agricultura/planting/tools/seed_tray',
          localImage: 'agricultura/planting/tools/seed_tray',
          translations: { en: 'seed tray', es: 'seed tray', pt: 'seed tray', fr: 'seed tray', de: 'seed tray', it: 'seed tray', nl: 'zaailade', zh: '育苗盘', ja: 'シードトレイ', ru: 'рассадный лоток' },
        },
        {
          id: 'agricultura/planting/tools/seeder',
          localImage: 'agricultura/planting/tools/seeder',
          translations: { en: 'seeder', es: 'seeder', pt: 'seeder', fr: 'seeder', de: 'seeder', it: 'seeder', nl: 'zaaimachine', zh: '播种机', ja: 'シーダー', ru: 'сеялка' },
        },
        {
          id: 'agricultura/planting/tools/shade_net',
          localImage: 'agricultura/planting/tools/shade_net',
          translations: { en: 'shade net', es: 'shade net', pt: 'shade net', fr: 'shade net', de: 'shade net', it: 'shade net', nl: 'schaduwdoek', zh: '遮阳网', ja: '遮光ネット', ru: 'затеняющая сетка' },
        },
        {
          id: 'agricultura/planting/tools/shears',
          localImage: 'agricultura/planting/tools/shears',
          translations: { en: 'shears', es: 'tijeras de podar', pt: 'tesoura de poda', fr: 'sécateur', de: 'Gartenschere', it: 'cesoie', nl: 'snoeischaar', zh: '大剪刀', ja: '剪定鋏', ru: 'ножницы для стрижки' },
        },
        {
          id: 'agricultura/planting/tools/shovel',
          localImage: 'agricultura/planting/tools/shovel',
          translations: { en: 'shovel', es: 'pala', pt: 'pá', fr: 'pelle', de: 'Schaufel', it: 'vanga', nl: 'schop', zh: '铲子', ja: 'シャベル', ru: 'лопата' },
        },
        {
          id: 'agricultura/planting/tools/soil_tester',
          localImage: 'agricultura/planting/tools/soil_tester',
          translations: { en: 'soil tester', es: 'soil tester', pt: 'soil tester', fr: 'soil tester', de: 'soil tester', it: 'soil tester', nl: 'bodemtester', zh: '土壤测试仪', ja: '土壌テスター', ru: 'анализатор почвы' },
        },
        {
          id: 'agricultura/planting/tools/spray_bottle',
          localImage: 'agricultura/planting/tools/spray_bottle',
          translations: { en: 'spray bottle', es: 'spray bottle', pt: 'spray bottle', fr: 'spray bottle', de: 'spray bottle', it: 'spray bottle', nl: 'sprayflacon', zh: '喷雾瓶', ja: 'スプレーボトル', ru: 'спрей-бутылка' },
        },
        {
          id: 'agricultura/planting/tools/spreader',
          localImage: 'agricultura/planting/tools/spreader',
          translations: { en: 'spreader', es: 'spreader', pt: 'spreader', fr: 'spreader', de: 'spreader', it: 'spreader', nl: 'spreider', zh: '撒播机', ja: 'スプレッダー', ru: 'разбрасыватель' },
        },
        {
          id: 'agricultura/planting/tools/sprinkler',
          localImage: 'agricultura/planting/tools/sprinkler',
          translations: { en: 'sprinkler', es: 'sprinkler', pt: 'sprinkler', fr: 'sprinkler', de: 'sprinkler', it: 'sprinkler', nl: 'sproeier', zh: '喷水器', ja: 'スプリンクラー', ru: 'разбрызгиватель' },
        },
        {
          id: 'agricultura/planting/tools/stakes',
          localImage: 'agricultura/planting/tools/stakes',
          translations: { en: 'stakes', es: 'stakes', pt: 'stakes', fr: 'stakes', de: 'stakes', it: 'stakes', nl: 'palen', zh: '桩', ja: '杭', ru: 'колышки' },
        },
        {
          id: 'agricultura/planting/tools/tank',
          localImage: 'agricultura/planting/tools/tank',
          translations: { en: 'tank', es: 'tanque', pt: 'tanque', fr: 'réservoir', de: 'Tank', it: 'serbatoio', nl: 'tank', zh: '容器', ja: 'タンク', ru: 'резервуар' },
        },
        {
          id: 'agricultura/planting/tools/timer',
          localImage: 'agricultura/planting/tools/timer',
          translations: { en: 'timer', es: 'timer', pt: 'timer', fr: 'timer', de: 'timer', it: 'timer', nl: 'timer', zh: '计时器', ja: 'タイマー', ru: 'таймер' },
        },
        {
          id: 'agricultura/planting/tools/tray',
          localImage: 'agricultura/planting/tools/tray',
          translations: { en: 'tray', es: 'bandeja', pt: 'bandeja', fr: 'plateau', de: 'Tablett', it: 'vassoio', nl: 'dienblad', zh: '托盘', ja: 'トレイ', ru: 'поднос' },
        },
        {
          id: 'agricultura/planting/tools/trowel',
          localImage: 'agricultura/planting/tools/trowel',
          translations: { en: 'trowel', es: 'llana', pt: 'colher de pedreiro', fr: 'truelle', de: 'Kelle', it: 'cazzuola', nl: 'truweel', zh: '抹刀', ja: 'コテ', ru: 'кельма' },
        },
        {
          id: 'agricultura/planting/tools/wheelbarrow',
          localImage: 'agricultura/planting/tools/wheelbarrow',
          translations: { en: 'wheelbarrow', es: 'carretilla', pt: 'carrinho de mão', fr: 'brouette', de: 'Schubkarre', it: 'carriola', nl: 'kruiwagen', zh: '手推车', ja: '一輪車', ru: 'тачка' },
        }
        ],
      },
      {
        id: 'materials',
        name: { en: 'Materials', es: 'Materiales', pt: 'Materiais', fr: 'Matériaux', de: 'Materialien', it: 'Materiali', nl: 'Materialen', zh: '材料', ja: '材料', ru: 'Материалы' },
        icon: '📦',
        items: [
        {
          id: 'agricultura/planting/materials/additives',
          localImage: 'agricultura/planting/materials/additives',
          translations: { en: 'additives', es: 'additives', pt: 'additives', fr: 'additives', de: 'additives', it: 'additives', nl: 'additieven', zh: '添加剂', ja: '添加剤', ru: 'добавки' },
        },
        {
          id: 'agricultura/planting/materials/compost',
          localImage: 'agricultura/planting/materials/compost',
          translations: { en: 'compost', es: 'compost', pt: 'composto', fr: 'compost', de: 'Kompost', it: 'compost', nl: 'compost', zh: '堆肥', ja: '堆肥', ru: 'компост' },
        },
        {
          id: 'agricultura/planting/materials/fertilizer',
          localImage: 'agricultura/planting/materials/fertilizer',
          translations: { en: 'fertilizer', es: 'fertilizante', pt: 'fertilizante', fr: 'engrais', de: 'Dünger', it: 'fertilizzante', nl: 'meststof', zh: '肥料', ja: '肥料', ru: 'удобрение' },
        },
        {
          id: 'agricultura/planting/materials/liquid',
          localImage: 'agricultura/planting/materials/liquid',
          translations: { en: 'liquid', es: 'liquid', pt: 'liquid', fr: 'liquid', de: 'liquid', it: 'liquid', nl: 'vloeistof', zh: '液体', ja: '液体', ru: 'жидкость' },
        },
        {
          id: 'agricultura/planting/materials/mix',
          localImage: 'agricultura/planting/materials/mix',
          translations: { en: 'mix', es: 'mix', pt: 'mix', fr: 'mix', de: 'mix', it: 'mix', nl: 'mengsel', zh: '混合物', ja: 'ミックス', ru: 'смесь' },
        },
        {
          id: 'agricultura/planting/materials/nutrients',
          localImage: 'agricultura/planting/materials/nutrients',
          translations: { en: 'nutrients', es: 'nutrients', pt: 'nutrients', fr: 'nutrients', de: 'nutrients', it: 'nutrients', nl: 'voedingsstoffen', zh: '营养素', ja: '栄養素', ru: 'питательные вещества' },
        },
        {
          id: 'agricultura/planting/materials/organic_mix',
          localImage: 'agricultura/planting/materials/organic_mix',
          translations: { en: 'organic mix', es: 'organic mix', pt: 'organic mix', fr: 'organic mix', de: 'organic mix', it: 'organic mix', nl: 'organisch mengsel', zh: '有机混合物', ja: '有機ミックス', ru: 'органическая смесь' },
        },
        {
          id: 'agricultura/planting/materials/powder',
          localImage: 'agricultura/planting/materials/powder',
          translations: { en: 'powder', es: 'powder', pt: 'powder', fr: 'powder', de: 'powder', it: 'powder', nl: 'poeder', zh: '粉末', ja: 'パウダー', ru: 'порошок' },
        },
        {
          id: 'agricultura/planting/materials/seeds',
          localImage: 'agricultura/planting/materials/seeds',
          translations: { en: 'seeds', es: 'semillas', pt: 'sementes', fr: 'graines', de: 'Samen', it: 'semi', nl: 'zaden', zh: '种子', ja: '種', ru: 'семена' },
        },
        {
          id: 'agricultura/planting/materials/soil',
          localImage: 'agricultura/planting/materials/soil',
          translations: { en: 'soil', es: 'tierra', pt: 'solo', fr: 'sol', de: 'Erde', it: 'terra', nl: 'aarde', zh: '土壤', ja: '土', ru: 'почва' },
        },
        {
          id: 'agricultura/planting/materials/soil_base',
          localImage: 'agricultura/planting/materials/soil_base',
          translations: { en: 'soil base', es: 'soil base', pt: 'soil base', fr: 'soil base', de: 'soil base', it: 'soil base', nl: 'bodembasis', zh: '土壤基础', ja: '土壌ベース', ru: 'основа почвы' },
        },
        {
          id: 'agricultura/planting/materials/solution',
          localImage: 'agricultura/planting/materials/solution',
          translations: { en: 'solution', es: 'solution', pt: 'solution', fr: 'solution', de: 'solution', it: 'solution', nl: 'oplossing', zh: '溶液', ja: '溶液', ru: 'раствор' },
        },
        {
          id: 'agricultura/planting/materials/substrate',
          localImage: 'agricultura/planting/materials/substrate',
          translations: { en: 'substrate', es: 'substrate', pt: 'substrate', fr: 'substrate', de: 'substrate', it: 'substrate', nl: 'substraat', zh: '基底', ja: '基質', ru: 'субстрат' },
        },
        {
          id: 'agricultura/planting/materials/water',
          localImage: 'agricultura/planting/materials/water',
          translations: { en: 'water', es: 'agua', pt: 'água', fr: 'eau', de: 'Wasser', it: 'acqua', nl: 'water', zh: '水', ja: '水', ru: 'вода' },
        }
        ],
      }
      ],
    }
    ],
  },
  {
    id: 'automotivo',
    name: { en: 'Automotive', es: 'Automotriz', pt: 'Automotivo', fr: 'Automobile', de: 'Automobil', it: 'Automotive', nl: 'Automotive', zh: '汽车', ja: '自動車', ru: 'Автомобильная отрасль' },
    icon: '🔧',
    imageUrl: 'https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?auto=compress&cs=tinysrgb&w=800',
    sectors: [
    {
      id: 'car_washer',
      name: { en: 'Car Washer', es: 'Lavador', pt: 'Lavador de Carros', fr: 'Laveur', de: 'Autowäscher', it: 'Lavacchine', nl: 'Autowasser', zh: '洗车工', ja: '洗車員', ru: 'Автомойщик' },
      icon: '🚗',
      roles: [
      {
        id: 'tools',
        name: { en: 'Tools', es: 'Herramientas', pt: 'Ferramentas', fr: 'Outils', de: 'Werkzeuge', it: 'Attrezzi', nl: 'Gereedschap', zh: '工具', ja: '道具', ru: 'Инструменты' },
        icon: '🔧',
        items: [
        {
          id: 'automotivo/car_washer/tools/blower',
          localImage: 'automotivo/car_washer/tools/blower',
          translations: { en: 'blower', es: 'sopladora', pt: 'soprador', fr: 'souffleur', de: 'Gebläse', it: 'soffiatore', nl: 'blazer', zh: '鼓风机', ja: 'ブロワー', ru: 'воздуходувка' },
        },
        {
          id: 'automotivo/car_washer/tools/brush',
          localImage: 'automotivo/car_washer/tools/brush',
          translations: { en: 'brush', es: 'cepillo', pt: 'escova', fr: 'brosse', de: 'Bürste', it: 'spazzola', nl: 'borstel', zh: '刷子', ja: 'ブラシ', ru: 'кисть' },
        },
        {
          id: 'automotivo/car_washer/tools/bucket',
          localImage: 'automotivo/car_washer/tools/bucket',
          translations: { en: 'bucket', es: 'cubo', pt: 'balde', fr: 'seau', de: 'Eimer', it: 'secchio', nl: 'emmer', zh: '水桶', ja: 'バケツ', ru: 'ведро' },
        },
        {
          id: 'automotivo/car_washer/tools/cleaner_tool',
          localImage: 'automotivo/car_washer/tools/cleaner_tool',
          translations: { en: 'cleaner tool', es: 'cleaner tool', pt: 'cleaner tool', fr: 'cleaner tool', de: 'cleaner tool', it: 'cleaner tool', nl: 'reinigingsgereedschap', zh: '清洁工具', ja: '洗浄ツール', ru: 'инструмент для уборки' },
        },
        {
          id: 'automotivo/car_washer/tools/cloth',
          localImage: 'automotivo/car_washer/tools/cloth',
          translations: { en: 'cloth', es: 'trapo', pt: 'pano', fr: 'chiffon', de: 'Tuch', it: 'panno', nl: 'doek', zh: '布', ja: '布', ru: 'ткань' },
        },
        {
          id: 'automotivo/car_washer/tools/dryer',
          localImage: 'automotivo/car_washer/tools/dryer',
          translations: { en: 'dryer', es: 'dryer', pt: 'dryer', fr: 'dryer', de: 'dryer', it: 'dryer', nl: 'droger', zh: '烘干机', ja: '乾燥機', ru: 'сушилка' },
        },
        {
          id: 'automotivo/car_washer/tools/fan',
          localImage: 'automotivo/car_washer/tools/fan',
          translations: { en: 'fan', es: 'fan', pt: 'fan', fr: 'fan', de: 'fan', it: 'fan', nl: 'ventilator', zh: '风扇', ja: 'ファン', ru: 'вентилятор' },
        },
        {
          id: 'automotivo/car_washer/tools/foam_gun',
          localImage: 'automotivo/car_washer/tools/foam_gun',
          translations: { en: 'foam gun', es: 'foam gun', pt: 'foam gun', fr: 'foam gun', de: 'foam gun', it: 'foam gun', nl: 'schuimpistool', zh: '泡沫枪', ja: 'フォームガン', ru: 'пистолет для пены' },
        },
        {
          id: 'automotivo/car_washer/tools/gun',
          localImage: 'automotivo/car_washer/tools/gun',
          translations: { en: 'spray gun', es: 'pistola de spray', pt: 'pistola de spray', fr: 'pistolet', de: 'Sprühpistole', it: 'pistola spray', nl: 'verfpistool', zh: '喷枪', ja: 'スプレーガン', ru: 'краскопульт' },
        },
        {
          id: 'automotivo/car_washer/tools/hose',
          localImage: 'automotivo/car_washer/tools/hose',
          translations: { en: 'hose', es: 'manguera', pt: 'mangueira', fr: 'tuyau', de: 'Schlauch', it: 'tubo', nl: 'slang', zh: '软管', ja: 'ホース', ru: 'шланг' },
        },
        {
          id: 'automotivo/car_washer/tools/mop',
          localImage: 'automotivo/car_washer/tools/mop',
          translations: { en: 'mop', es: 'fregona', pt: 'esfregão', fr: 'serpillière', de: 'Mop', it: 'mop', nl: 'zwabber', zh: '拖把', ja: 'モップ', ru: 'швабра' },
        },
        {
          id: 'automotivo/car_washer/tools/nozzle',
          localImage: 'automotivo/car_washer/tools/nozzle',
          translations: { en: 'nozzle', es: 'nozzle', pt: 'nozzle', fr: 'nozzle', de: 'nozzle', it: 'nozzle', nl: 'sproeikop', zh: '喷嘴', ja: 'ノズル', ru: 'форсунка' },
        },
        {
          id: 'automotivo/car_washer/tools/pad',
          localImage: 'automotivo/car_washer/tools/pad',
          translations: { en: 'pad', es: 'pad', pt: 'pad', fr: 'pad', de: 'pad', it: 'pad', nl: 'kussen', zh: '垫子', ja: 'パッド', ru: 'подушечка' },
        },
        {
          id: 'automotivo/car_washer/tools/pressure_washer',
          localImage: 'automotivo/car_washer/tools/pressure_washer',
          translations: { en: 'pressure washer', es: 'pressure washer', pt: 'pressure washer', fr: 'pressure washer', de: 'pressure washer', it: 'pressure washer', nl: 'hogedrukreiniger', zh: '高压清洗机', ja: '高圧洗浄機', ru: 'мойка высокого давления' },
        },
        {
          id: 'automotivo/car_washer/tools/roller',
          localImage: 'automotivo/car_washer/tools/roller',
          translations: { en: 'roller', es: 'rodillo', pt: 'rolo', fr: 'rouleau', de: 'Rolle', it: 'rullo', nl: 'roller', zh: '滚筒', ja: 'ローラー', ru: 'валик' },
        },
        {
          id: 'automotivo/car_washer/tools/scrubber',
          localImage: 'automotivo/car_washer/tools/scrubber',
          translations: { en: 'scrubber', es: 'scrubber', pt: 'scrubber', fr: 'scrubber', de: 'scrubber', it: 'scrubber', nl: 'schrobber', zh: '刷洗器', ja: 'スクラバー', ru: 'скруббер' },
        },
        {
          id: 'automotivo/car_washer/tools/sponge',
          localImage: 'automotivo/car_washer/tools/sponge',
          translations: { en: 'sponge', es: 'esponja', pt: 'esponja', fr: 'éponge', de: 'Schwamm', it: 'spugna', nl: 'spons', zh: '海绵', ja: 'スポンジ', ru: 'губка' },
        },
        {
          id: 'automotivo/car_washer/tools/sprayer',
          localImage: 'automotivo/car_washer/tools/sprayer',
          translations: { en: 'sprayer', es: 'pulverizador', pt: 'pulverizador', fr: 'pulvérisateur', de: 'Sprüher', it: 'spruzzatore', nl: 'sproeier', zh: '喷雾器', ja: 'スプレイヤー', ru: 'опрыскиватель' },
        },
        {
          id: 'automotivo/car_washer/tools/towel',
          localImage: 'automotivo/car_washer/tools/towel',
          translations: { en: 'towel', es: 'towel', pt: 'towel', fr: 'towel', de: 'towel', it: 'towel', nl: 'handdoek', zh: '毛巾', ja: 'タオル', ru: 'полотенце' },
        },
        {
          id: 'automotivo/car_washer/tools/vacuum',
          localImage: 'automotivo/car_washer/tools/vacuum',
          translations: { en: 'vacuum', es: 'vacuum', pt: 'vacuum', fr: 'vacuum', de: 'vacuum', it: 'vacuum', nl: 'stofzuiger', zh: '真空吸尘器', ja: '掃除機', ru: 'пылесос' },
        }
        ],
      },
      {
        id: 'materials',
        name: { en: 'Materials', es: 'Materiales', pt: 'Materiais', fr: 'Matériaux', de: 'Materialien', it: 'Materiali', nl: 'Materialen', zh: '材料', ja: '材料', ru: 'Материалы' },
        icon: '📦',
        items: [
        {
          id: 'automotivo/car_washer/materials/additive',
          localImage: 'automotivo/car_washer/materials/additive',
          translations: { en: 'additive', es: 'additive', pt: 'additive', fr: 'additive', de: 'additive', it: 'additive', nl: 'additief', zh: '添加剂', ja: '添加剤', ru: 'добавка' },
        },
        {
          id: 'automotivo/car_washer/materials/agent',
          localImage: 'automotivo/car_washer/materials/agent',
          translations: { en: 'agent', es: 'agent', pt: 'agent', fr: 'agent', de: 'agent', it: 'agent', nl: 'middel', zh: '试剂', ja: '薬剤', ru: 'агент' },
        },
        {
          id: 'automotivo/car_washer/materials/chemical',
          localImage: 'automotivo/car_washer/materials/chemical',
          translations: { en: 'chemical', es: 'chemical', pt: 'chemical', fr: 'chemical', de: 'chemical', it: 'chemical', nl: 'chemicalie', zh: '化学品', ja: '化学物質', ru: 'химическое вещество' },
        },
        {
          id: 'automotivo/car_washer/materials/cleaner',
          localImage: 'automotivo/car_washer/materials/cleaner',
          translations: { en: 'cleaner', es: 'cleaner', pt: 'cleaner', fr: 'cleaner', de: 'cleaner', it: 'cleaner', nl: 'reiniger', zh: '清洁剂', ja: '洗浄剤', ru: 'чистящее средство' },
        },
        {
          id: 'automotivo/car_washer/materials/coating',
          localImage: 'automotivo/car_washer/materials/coating',
          translations: { en: 'coating', es: 'coating', pt: 'coating', fr: 'coating', de: 'coating', it: 'coating', nl: 'coating', zh: '涂层', ja: 'コーティング', ru: 'покрытие' },
        },
        {
          id: 'automotivo/car_washer/materials/compound',
          localImage: 'automotivo/car_washer/materials/compound',
          translations: { en: 'compound', es: 'compound', pt: 'compound', fr: 'compound', de: 'compound', it: 'compound', nl: 'compound', zh: '化合物', ja: 'コンパウンド', ru: 'состав' },
        },
        {
          id: 'automotivo/car_washer/materials/conditioner',
          localImage: 'automotivo/car_washer/materials/conditioner',
          translations: { en: 'conditioner', es: 'conditioner', pt: 'conditioner', fr: 'conditioner', de: 'conditioner', it: 'conditioner', nl: 'conditioner', zh: '护发素', ja: 'コンディショナー', ru: 'кондиционер' },
        },
        {
          id: 'automotivo/car_washer/materials/degreaser',
          localImage: 'automotivo/car_washer/materials/degreaser',
          translations: { en: 'degreaser', es: 'degreaser', pt: 'degreaser', fr: 'degreaser', de: 'degreaser', it: 'degreaser', nl: 'ontvetter', zh: '脱脂剂', ja: '脱脂剤', ru: 'обезжириватель' },
        },
        {
          id: 'automotivo/car_washer/materials/detergent',
          localImage: 'automotivo/car_washer/materials/detergent',
          translations: { en: 'detergent', es: 'detergente', pt: 'detergente', fr: 'détergent', de: 'Reinigungsmittel', it: 'detergente', nl: 'wasmiddel', zh: '洗涤剂', ja: '洗剤', ru: 'моющее средство' },
        },
        {
          id: 'automotivo/car_washer/materials/finish',
          localImage: 'automotivo/car_washer/materials/finish',
          translations: { en: 'finish', es: 'finish', pt: 'finish', fr: 'finish', de: 'finish', it: 'finish', nl: 'afwerking', zh: '涂层', ja: '仕上げ', ru: 'отделочное покрытие' },
        },
        {
          id: 'automotivo/car_washer/materials/fluid',
          localImage: 'automotivo/car_washer/materials/fluid',
          translations: { en: 'fluid', es: 'fluid', pt: 'fluid', fr: 'fluid', de: 'fluid', it: 'fluid', nl: 'vloeistof', zh: '液体', ja: '液体', ru: 'жидкость' },
        },
        {
          id: 'automotivo/car_washer/materials/foam',
          localImage: 'automotivo/car_washer/materials/foam',
          translations: { en: 'foam', es: 'foam', pt: 'foam', fr: 'foam', de: 'foam', it: 'foam', nl: 'schuim', zh: '泡沫', ja: 'フォーム', ru: 'пена' },
        },
        {
          id: 'automotivo/car_washer/materials/foam_mix',
          localImage: 'automotivo/car_washer/materials/foam_mix',
          translations: { en: 'foam mix', es: 'foam mix', pt: 'foam mix', fr: 'foam mix', de: 'foam mix', it: 'foam mix', nl: 'schuimmengsel', zh: '泡沫混合物', ja: 'フォームミックス', ru: 'пенная смесь' },
        },
        {
          id: 'automotivo/car_washer/materials/gel',
          localImage: 'automotivo/car_washer/materials/gel',
          translations: { en: 'gel', es: 'gel', pt: 'gel', fr: 'gel', de: 'gel', it: 'gel', nl: 'gel', zh: '凝胶', ja: 'ジェル', ru: 'гель' },
        },
        {
          id: 'automotivo/car_washer/materials/liquid',
          localImage: 'automotivo/car_washer/materials/liquid',
          translations: { en: 'liquid', es: 'liquid', pt: 'liquid', fr: 'liquid', de: 'liquid', it: 'liquid', nl: 'vloeistof', zh: '液体', ja: '液体', ru: 'жидкость' },
        },
        {
          id: 'automotivo/car_washer/materials/mix',
          localImage: 'automotivo/car_washer/materials/mix',
          translations: { en: 'mix', es: 'mix', pt: 'mix', fr: 'mix', de: 'mix', it: 'mix', nl: 'mengsel', zh: '混合物', ja: 'ミックス', ru: 'смесь' },
        },
        {
          id: 'automotivo/car_washer/materials/paste',
          localImage: 'automotivo/car_washer/materials/paste',
          translations: { en: 'paste', es: 'paste', pt: 'paste', fr: 'paste', de: 'paste', it: 'paste', nl: 'pasta', zh: '糊', ja: 'ペースト', ru: 'паста' },
        },
        {
          id: 'automotivo/car_washer/materials/polish',
          localImage: 'automotivo/car_washer/materials/polish',
          translations: { en: 'polish', es: 'pulimento', pt: 'polimento', fr: 'polish', de: 'Politur', it: 'lucido', nl: 'poetsmiddel', zh: '抛光剂', ja: 'ポリッシュ', ru: 'полироль' },
        },
        {
          id: 'automotivo/car_washer/materials/polish_mix',
          localImage: 'automotivo/car_washer/materials/polish_mix',
          translations: { en: 'polish mix', es: 'polish mix', pt: 'polish mix', fr: 'polish mix', de: 'polish mix', it: 'polish mix', nl: 'poetsmengsel', zh: '抛光混合物', ja: 'ポリッシュミックス', ru: 'смесь для полировки' },
        },
        {
          id: 'automotivo/car_washer/materials/product',
          localImage: 'automotivo/car_washer/materials/product',
          translations: { en: 'product', es: 'product', pt: 'product', fr: 'product', de: 'product', it: 'product', nl: 'product', zh: '产品', ja: '製品', ru: 'продукт' },
        },
        {
          id: 'automotivo/car_washer/materials/remover',
          localImage: 'automotivo/car_washer/materials/remover',
          translations: { en: 'remover', es: 'remover', pt: 'remover', fr: 'remover', de: 'remover', it: 'remover', nl: 'verwijderaar', zh: '去除剂', ja: 'リムーバー', ru: 'средство для удаления' },
        },
        {
          id: 'automotivo/car_washer/materials/shampoo',
          localImage: 'automotivo/car_washer/materials/shampoo',
          translations: { en: 'shampoo', es: 'shampoo', pt: 'shampoo', fr: 'shampoo', de: 'shampoo', it: 'shampoo', nl: 'shampoo', zh: '洗发水', ja: 'シャンプー', ru: 'шампунь' },
        },
        {
          id: 'automotivo/car_washer/materials/shine',
          localImage: 'automotivo/car_washer/materials/shine',
          translations: { en: 'shine', es: 'shine', pt: 'shine', fr: 'shine', de: 'shine', it: 'shine', nl: 'glans', zh: '光泽', ja: 'シャイン', ru: 'блеск' },
        },
        {
          id: 'automotivo/car_washer/materials/soap',
          localImage: 'automotivo/car_washer/materials/soap',
          translations: { en: 'soap', es: 'jabón', pt: 'sabão', fr: 'savon', de: 'Seife', it: 'sapone', nl: 'zeep', zh: '肥皂', ja: '石鹸', ru: 'мыло' },
        },
        {
          id: 'automotivo/car_washer/materials/solution',
          localImage: 'automotivo/car_washer/materials/solution',
          translations: { en: 'solution', es: 'solution', pt: 'solution', fr: 'solution', de: 'solution', it: 'solution', nl: 'oplossing', zh: '溶液', ja: '溶液', ru: 'раствор' },
        },
        {
          id: 'automotivo/car_washer/materials/spray',
          localImage: 'automotivo/car_washer/materials/spray',
          translations: { en: 'spray', es: 'spray', pt: 'spray', fr: 'spray', de: 'Spray', it: 'spray', nl: 'spray', zh: '喷雾', ja: 'スプレー', ru: 'спрей' },
        },
        {
          id: 'automotivo/car_washer/materials/treatment',
          localImage: 'automotivo/car_washer/materials/treatment',
          translations: { en: 'treatment', es: 'treatment', pt: 'treatment', fr: 'treatment', de: 'treatment', it: 'treatment', nl: 'behandeling', zh: '处理剂', ja: 'トリートメント', ru: 'обработка' },
        },
        {
          id: 'automotivo/car_washer/materials/wash_mix',
          localImage: 'automotivo/car_washer/materials/wash_mix',
          translations: { en: 'wash mix', es: 'wash mix', pt: 'wash mix', fr: 'wash mix', de: 'wash mix', it: 'wash mix', nl: 'wasmengsel', zh: '洗涤混合物', ja: '洗浄ミックス', ru: 'моющий раствор' },
        },
        {
          id: 'automotivo/car_washer/materials/water',
          localImage: 'automotivo/car_washer/materials/water',
          translations: { en: 'water', es: 'agua', pt: 'água', fr: 'eau', de: 'Wasser', it: 'acqua', nl: 'water', zh: '水', ja: '水', ru: 'вода' },
        },
        {
          id: 'automotivo/car_washer/materials/wax',
          localImage: 'automotivo/car_washer/materials/wax',
          translations: { en: 'wax', es: 'cera', pt: 'cera', fr: 'cire', de: 'Wachs', it: 'cera', nl: 'was', zh: '蜡', ja: 'ワックス', ru: 'воск' },
        }
        ],
      }
      ],
    },
    {
      id: 'mechanic',
      name: { en: 'Mechanic', es: 'Mecánico', pt: 'Mecânico', fr: 'Mécanicien', de: 'Mechaniker', it: 'Meccanico', nl: 'Monteur', zh: '机械师', ja: '整備士', ru: 'Механик' },
      icon: '🔧',
      roles: [
      {
        id: 'machinery_equipment',
        name: { en: 'Machinery', es: 'Maquinaria', pt: 'Maquinário', fr: 'Machines', de: 'Maschinen', it: 'Macchinari', nl: 'Machines', zh: '机械', ja: '機械', ru: 'Машины' },
        icon: '⚙️',
        items: [
        {
          id: 'automotivo/machinery_equipment/tools/battery',
          localImage: 'automotivo/machinery_equipment/tools/battery',
          translations: { en: 'battery', es: 'battery', pt: 'battery', fr: 'battery', de: 'battery', it: 'battery', nl: 'batterij', zh: '电池', ja: 'バッテリー', ru: 'батарея' },
        },
        {
          id: 'automotivo/machinery_equipment/tools/boots',
          localImage: 'automotivo/machinery_equipment/tools/boots',
          translations: { en: 'boots', es: 'botas', pt: 'botas', fr: 'bottes', de: 'Stiefel', it: 'stivali', nl: 'laarzen', zh: '靴子', ja: 'ブーツ', ru: 'ботинки' },
        },
        {
          id: 'automotivo/machinery_equipment/tools/brake',
          localImage: 'automotivo/machinery_equipment/tools/brake',
          translations: { en: 'brake', es: 'brake', pt: 'brake', fr: 'brake', de: 'brake', it: 'brake', nl: 'rem', zh: '刹车', ja: 'ブレーキ', ru: 'тормоз' },
        },
        {
          id: 'automotivo/machinery_equipment/tools/cabin',
          localImage: 'automotivo/machinery_equipment/tools/cabin',
          translations: { en: 'cabin', es: 'cabin', pt: 'cabin', fr: 'cabin', de: 'cabin', it: 'cabin', nl: 'cabine', zh: '驾驶室', ja: 'キャビン', ru: 'кабина' },
        },
        {
          id: 'automotivo/machinery_equipment/tools/chain',
          localImage: 'automotivo/machinery_equipment/tools/chain',
          translations: { en: 'chain', es: 'cadena', pt: 'corrente', fr: 'chaîne', de: 'Kette', it: 'catena', nl: 'ketting', zh: '链条', ja: 'チェーン', ru: 'цепь' },
        },
        {
          id: 'automotivo/machinery_equipment/tools/cloth',
          localImage: 'automotivo/machinery_equipment/tools/cloth',
          translations: { en: 'cloth', es: 'trapo', pt: 'pano', fr: 'chiffon', de: 'Tuch', it: 'panno', nl: 'doek', zh: '布', ja: '布', ru: 'ткань' },
        },
        {
          id: 'automotivo/machinery_equipment/tools/compressor',
          localImage: 'automotivo/machinery_equipment/tools/compressor',
          translations: { en: 'compressor', es: 'compressor', pt: 'compressor', fr: 'compressor', de: 'compressor', it: 'compressor', nl: 'compressor', zh: '压缩机', ja: 'コンプレッサー', ru: 'компрессор' },
        },
        {
          id: 'automotivo/machinery_equipment/tools/cooling_system',
          localImage: 'automotivo/machinery_equipment/tools/cooling_system',
          translations: { en: 'cooling system', es: 'cooling system', pt: 'cooling system', fr: 'cooling system', de: 'cooling system', it: 'cooling system', nl: 'koelsysteem', zh: '冷却系统', ja: '冷却システム', ru: 'система охлаждения' },
        },
        {
          id: 'automotivo/machinery_equipment/tools/coupling',
          localImage: 'automotivo/machinery_equipment/tools/coupling',
          translations: { en: 'coupling', es: 'coupling', pt: 'coupling', fr: 'coupling', de: 'coupling', it: 'coupling', nl: 'koppeling', zh: '联轴器', ja: 'カップリング', ru: 'муфта' },
        },
        {
          id: 'automotivo/machinery_equipment/tools/engine',
          localImage: 'automotivo/machinery_equipment/tools/engine',
          translations: { en: 'engine', es: 'engine', pt: 'engine', fr: 'engine', de: 'engine', it: 'engine', nl: 'motor', zh: '发动机', ja: 'エンジン', ru: 'двигатель' },
        },
        {
          id: 'automotivo/machinery_equipment/tools/filter',
          localImage: 'automotivo/machinery_equipment/tools/filter',
          translations: { en: 'filter', es: 'filtro', pt: 'filtro', fr: 'filtre', de: 'Filter', it: 'filtro', nl: 'filter', zh: '过滤器', ja: 'フィルター', ru: 'фильтр' },
        },
        {
          id: 'automotivo/machinery_equipment/tools/gauge',
          localImage: 'automotivo/machinery_equipment/tools/gauge',
          translations: { en: 'gauge', es: 'medidor', pt: 'medidor', fr: 'jauge', de: 'Messgerät', it: 'calibro', nl: 'meter', zh: '仪表', ja: 'ゲージ', ru: 'манометр' },
        },
        {
          id: 'automotivo/machinery_equipment/tools/gear',
          localImage: 'automotivo/machinery_equipment/tools/gear',
          translations: { en: 'gear', es: 'gear', pt: 'gear', fr: 'gear', de: 'gear', it: 'gear', nl: 'tandwiel', zh: '齿轮', ja: 'ギア', ru: 'шестерня' },
        },
        {
          id: 'automotivo/machinery_equipment/tools/gloves',
          localImage: 'automotivo/machinery_equipment/tools/gloves',
          translations: { en: 'gloves', es: 'guantes', pt: 'luvas', fr: 'gants', de: 'Handschuhe', it: 'guanti', nl: 'handschoenen', zh: '手套', ja: '手袋', ru: 'перчатки' },
        },
        {
          id: 'automotivo/machinery_equipment/tools/gps',
          localImage: 'automotivo/machinery_equipment/tools/gps',
          translations: { en: 'gps', es: 'gps', pt: 'gps', fr: 'gps', de: 'gps', it: 'gps', nl: 'gps', zh: 'GPS导航', ja: 'GPS', ru: 'GPS навигатор' },
        },
        {
          id: 'automotivo/machinery_equipment/tools/grease_gun',
          localImage: 'automotivo/machinery_equipment/tools/grease_gun',
          translations: { en: 'grease gun', es: 'grease gun', pt: 'grease gun', fr: 'grease gun', de: 'grease gun', it: 'grease gun', nl: 'vetspuit', zh: '黄油枪', ja: 'グリースガン', ru: 'шприц-пресс' },
        },
        {
          id: 'automotivo/machinery_equipment/tools/hammer',
          localImage: 'automotivo/machinery_equipment/tools/hammer',
          translations: { en: 'hammer', es: 'martillo', pt: 'martelo', fr: 'marteau', de: 'Hammer', it: 'martello', nl: 'hamer', zh: '锤子', ja: 'ハンマー', ru: 'молоток' },
        },
        {
          id: 'automotivo/machinery_equipment/tools/harvester',
          localImage: 'automotivo/machinery_equipment/tools/harvester',
          translations: { en: 'harvester', es: 'harvester', pt: 'harvester', fr: 'harvester', de: 'harvester', it: 'harvester', nl: 'oogstmachine', zh: '收割机', ja: 'ハーベスター', ru: 'комбайн' },
        },
        {
          id: 'automotivo/machinery_equipment/tools/helmet',
          localImage: 'automotivo/machinery_equipment/tools/helmet',
          translations: { en: 'helmet', es: 'casco', pt: 'capacete', fr: 'casque', de: 'Helm', it: 'casco', nl: 'helm', zh: '安全帽', ja: 'ヘルメット', ru: 'каска' },
        },
        {
          id: 'automotivo/machinery_equipment/tools/hitch',
          localImage: 'automotivo/machinery_equipment/tools/hitch',
          translations: { en: 'hitch', es: 'hitch', pt: 'hitch', fr: 'hitch', de: 'hitch', it: 'hitch', nl: 'trekhaak', zh: '挂钩', ja: 'ヒッチ', ru: 'сцепное устройство' },
        },
        {
          id: 'automotivo/machinery_equipment/tools/hose',
          localImage: 'automotivo/machinery_equipment/tools/hose',
          translations: { en: 'hose', es: 'manguera', pt: 'mangueira', fr: 'tuyau', de: 'Schlauch', it: 'tubo', nl: 'slang', zh: '软管', ja: 'ホース', ru: 'шланг' },
        },
        {
          id: 'automotivo/machinery_equipment/tools/hydraulic',
          localImage: 'automotivo/machinery_equipment/tools/hydraulic',
          translations: { en: 'hydraulic', es: 'hydraulic', pt: 'hydraulic', fr: 'hydraulic', de: 'hydraulic', it: 'hydraulic', nl: 'hydraulisch', zh: '液压', ja: '油圧', ru: 'гидравлика' },
        },
        {
          id: 'automotivo/machinery_equipment/tools/jack',
          localImage: 'automotivo/machinery_equipment/tools/jack',
          translations: { en: 'jack', es: 'jack', pt: 'jack', fr: 'jack', de: 'jack', it: 'jack', nl: 'krik', zh: '千斤顶', ja: 'ジャッキ', ru: 'домкрат' },
        },
        {
          id: 'automotivo/machinery_equipment/tools/key',
          localImage: 'automotivo/machinery_equipment/tools/key',
          translations: { en: 'key', es: 'key', pt: 'key', fr: 'key', de: 'key', it: 'key', nl: 'sleutel', zh: '钥匙', ja: '鍵', ru: 'ключ' },
        },
        {
          id: 'automotivo/machinery_equipment/tools/kit',
          localImage: 'automotivo/machinery_equipment/tools/kit',
          translations: { en: 'kit', es: 'kit', pt: 'kit', fr: 'kit', de: 'kit', it: 'kit', nl: 'kit', zh: '套件', ja: 'キット', ru: 'набор' },
        },
        {
          id: 'automotivo/machinery_equipment/tools/lever',
          localImage: 'automotivo/machinery_equipment/tools/lever',
          translations: { en: 'lever', es: 'lever', pt: 'lever', fr: 'lever', de: 'lever', it: 'lever', nl: 'hefboom', zh: '杠杆', ja: 'レバー', ru: 'рычаг' },
        },
        {
          id: 'automotivo/machinery_equipment/tools/light',
          localImage: 'automotivo/machinery_equipment/tools/light',
          translations: { en: 'light', es: 'light', pt: 'light', fr: 'light', de: 'light', it: 'light', nl: 'lamp', zh: '灯光', ja: 'ライト', ru: 'свет' },
        },
        {
          id: 'automotivo/machinery_equipment/tools/mirror',
          localImage: 'automotivo/machinery_equipment/tools/mirror',
          translations: { en: 'mirror', es: 'mirror', pt: 'mirror', fr: 'mirror', de: 'mirror', it: 'mirror', nl: 'spiegel', zh: '镜子', ja: '鏡', ru: 'зеркало' },
        },
        {
          id: 'automotivo/machinery_equipment/tools/monitor',
          localImage: 'automotivo/machinery_equipment/tools/monitor',
          translations: { en: 'monitor', es: 'monitor', pt: 'monitor', fr: 'monitor', de: 'monitor', it: 'monitor', nl: 'monitor', zh: '显示器', ja: 'モニター', ru: 'монитор' },
        },
        {
          id: 'automotivo/machinery_equipment/tools/panel',
          localImage: 'automotivo/machinery_equipment/tools/panel',
          translations: { en: 'panel', es: 'panel', pt: 'panel', fr: 'panel', de: 'panel', it: 'panel', nl: 'paneel', zh: '面板', ja: 'パネル', ru: 'панель' },
        },
        {
          id: 'automotivo/machinery_equipment/tools/plow',
          localImage: 'automotivo/machinery_equipment/tools/plow',
          translations: { en: 'plow', es: 'plow', pt: 'plow', fr: 'plow', de: 'plow', it: 'plow', nl: 'ploeg', zh: '犁', ja: '鋤', ru: 'плуг' },
        },
        {
          id: 'automotivo/machinery_equipment/tools/pump',
          localImage: 'automotivo/machinery_equipment/tools/pump',
          translations: { en: 'pump', es: 'bomba', pt: 'bomba', fr: 'pompe', de: 'Pumpe', it: 'pompa', nl: 'pomp', zh: '泵', ja: 'ポンプ', ru: 'насос' },
        },
        {
          id: 'automotivo/machinery_equipment/tools/radiator',
          localImage: 'automotivo/machinery_equipment/tools/radiator',
          translations: { en: 'radiator', es: 'radiator', pt: 'radiator', fr: 'radiator', de: 'radiator', it: 'radiator', nl: 'radiator', zh: '散热器', ja: 'ラジエーター', ru: 'радиатор' },
        },
        {
          id: 'automotivo/machinery_equipment/tools/screen',
          localImage: 'automotivo/machinery_equipment/tools/screen',
          translations: { en: 'screen', es: 'screen', pt: 'screen', fr: 'screen', de: 'screen', it: 'screen', nl: 'scherm', zh: '屏幕', ja: 'スクリーン', ru: 'экран' },
        },
        {
          id: 'automotivo/machinery_equipment/tools/screwdriver',
          localImage: 'automotivo/machinery_equipment/tools/screwdriver',
          translations: { en: 'screwdriver', es: 'screwdriver', pt: 'screwdriver', fr: 'screwdriver', de: 'screwdriver', it: 'screwdriver', nl: 'schroevendraaier', zh: '螺丝刀', ja: 'ドライバー', ru: 'отвертка' },
        },
        {
          id: 'automotivo/machinery_equipment/tools/seatbelt',
          localImage: 'automotivo/machinery_equipment/tools/seatbelt',
          translations: { en: 'seatbelt', es: 'seatbelt', pt: 'seatbelt', fr: 'seatbelt', de: 'seatbelt', it: 'seatbelt', nl: 'veiligheidsgordel', zh: '安全带', ja: 'シートベルト', ru: 'ремень безопасности' },
        },
        {
          id: 'automotivo/machinery_equipment/tools/seeder',
          localImage: 'automotivo/machinery_equipment/tools/seeder',
          translations: { en: 'seeder', es: 'seeder', pt: 'seeder', fr: 'seeder', de: 'seeder', it: 'seeder', nl: 'zaaimachine', zh: '播种机', ja: 'シーダー', ru: 'сеялка' },
        },
        {
          id: 'automotivo/machinery_equipment/tools/starter',
          localImage: 'automotivo/machinery_equipment/tools/starter',
          translations: { en: 'starter', es: 'starter', pt: 'starter', fr: 'starter', de: 'starter', it: 'starter', nl: 'starter', zh: '起动机', ja: 'スターター', ru: 'стартер' },
        },
        {
          id: 'automotivo/machinery_equipment/tools/switch',
          localImage: 'automotivo/machinery_equipment/tools/switch',
          translations: { en: 'switch', es: 'switch', pt: 'switch', fr: 'switch', de: 'switch', it: 'switch', nl: 'schakelaar', zh: '开关', ja: 'スイッチ', ru: 'выключатель' },
        },
        {
          id: 'automotivo/machinery_equipment/tools/tire',
          localImage: 'automotivo/machinery_equipment/tools/tire',
          translations: { en: 'tire', es: 'tire', pt: 'tire', fr: 'tire', de: 'tire', it: 'tire', nl: 'band', zh: '轮胎', ja: 'タイヤ', ru: 'шина' },
        },
        {
          id: 'automotivo/machinery_equipment/tools/toolbox',
          localImage: 'automotivo/machinery_equipment/tools/toolbox',
          translations: { en: 'toolbox', es: 'toolbox', pt: 'toolbox', fr: 'toolbox', de: 'toolbox', it: 'toolbox', nl: 'gereedschapskist', zh: '工具箱', ja: 'ツールボックス', ru: 'ящик для инструментов' },
        },
        {
          id: 'automotivo/machinery_equipment/tools/tractor',
          localImage: 'automotivo/machinery_equipment/tools/tractor',
          translations: { en: 'tractor', es: 'tractor', pt: 'tractor', fr: 'tractor', de: 'tractor', it: 'tractor', nl: 'tractor', zh: '拖拉机', ja: 'トラクター', ru: 'трактор' },
        },
        {
          id: 'automotivo/machinery_equipment/tools/trailer',
          localImage: 'automotivo/machinery_equipment/tools/trailer',
          translations: { en: 'trailer', es: 'trailer', pt: 'trailer', fr: 'trailer', de: 'trailer', it: 'trailer', nl: 'aanhanger', zh: '拖车', ja: 'トレーラー', ru: 'прицеп' },
        },
        {
          id: 'automotivo/machinery_equipment/tools/vest',
          localImage: 'automotivo/machinery_equipment/tools/vest',
          translations: { en: 'vest', es: 'chaleco', pt: 'colete', fr: 'gilet', de: 'Weste', it: 'gilet', nl: 'vest', zh: '背心', ja: 'ベスト', ru: 'жилет' },
        },
        {
          id: 'automotivo/machinery_equipment/tools/wheel',
          localImage: 'automotivo/machinery_equipment/tools/wheel',
          translations: { en: 'wheel', es: 'wheel', pt: 'wheel', fr: 'wheel', de: 'wheel', it: 'wheel', nl: 'wiel', zh: '车轮', ja: 'ホイール', ru: 'колесо' },
        },
        {
          id: 'automotivo/machinery_equipment/tools/wrench',
          localImage: 'automotivo/machinery_equipment/tools/wrench',
          translations: { en: 'wrench', es: 'llave', pt: 'chave inglesa', fr: 'clé', de: 'Schraubenschlüssel', it: 'chiave', nl: 'moersleutel', zh: '扳手', ja: 'レンチ', ru: 'гаечный ключ' },
        },
        {
          id: 'automotivo/machinery_equipment/materials/coolant',
          localImage: 'automotivo/machinery_equipment/materials/coolant',
          translations: { en: 'coolant', es: 'coolant', pt: 'coolant', fr: 'coolant', de: 'coolant', it: 'coolant', nl: 'koelvloeistof', zh: '冷却液', ja: '冷却液', ru: 'охлаждающая жидкость' },
        },
        {
          id: 'automotivo/machinery_equipment/materials/filters',
          localImage: 'automotivo/machinery_equipment/materials/filters',
          translations: { en: 'filters', es: 'filters', pt: 'filters', fr: 'filters', de: 'filters', it: 'filters', nl: 'filters', zh: '过滤器', ja: 'フィルター', ru: 'фильтры' },
        },
        {
          id: 'automotivo/machinery_equipment/materials/fuel',
          localImage: 'automotivo/machinery_equipment/materials/fuel',
          translations: { en: 'fuel', es: 'fuel', pt: 'fuel', fr: 'fuel', de: 'fuel', it: 'fuel', nl: 'brandstof', zh: '燃料', ja: '燃料', ru: 'топливо' },
        },
        {
          id: 'automotivo/machinery_equipment/materials/grease',
          localImage: 'automotivo/machinery_equipment/materials/grease',
          translations: { en: 'grease', es: 'grease', pt: 'grease', fr: 'grease', de: 'grease', it: 'grease', nl: 'vet', zh: '润滑脂', ja: 'グリース', ru: 'смазка' },
        },
        {
          id: 'automotivo/machinery_equipment/materials/oil',
          localImage: 'automotivo/machinery_equipment/materials/oil',
          translations: { en: 'oil', es: 'oil', pt: 'oil', fr: 'oil', de: 'oil', it: 'oil', nl: 'olie', zh: '油', ja: 'オイル', ru: 'масло' },
        },
        {
          id: 'automotivo/machinery_equipment/materials/replacement_parts',
          localImage: 'automotivo/machinery_equipment/materials/replacement_parts',
          translations: { en: 'replacement parts', es: 'replacement parts', pt: 'replacement parts', fr: 'replacement parts', de: 'replacement parts', it: 'replacement parts', nl: 'reserveonderdelen', zh: '备件', ja: '交換部品', ru: 'запасные части' },
        }
        ],
      },
      {
        id: 'mechanic',
        name: { en: 'Mechanic Tools', es: 'Herramientas Mecánicas', pt: 'Ferramentas Mecânicas', fr: 'Outils Mécanicien', de: 'Mechaniker Werkzeug', it: 'Attrezzi Meccanico', nl: 'Gereedschap monteur', zh: '机械师工具', ja: '整備士工具', ru: 'Инструменты механика' },
        icon: '🔩',
        items: [
        {
          id: 'automotivo/mechanic/tools/bar',
          localImage: 'automotivo/mechanic/tools/bar',
          translations: { en: 'bar', es: 'bar', pt: 'bar', fr: 'bar', de: 'bar', it: 'bar', nl: 'bar', zh: '酒吧', ja: 'バー', ru: 'бар' },
        },
        {
          id: 'automotivo/mechanic/tools/clamp',
          localImage: 'automotivo/mechanic/tools/clamp',
          translations: { en: 'clamp', es: 'clamp', pt: 'clamp', fr: 'clamp', de: 'clamp', it: 'clamp', nl: 'klem', zh: '夹具', ja: 'クランプ', ru: 'зажим' },
        },
        {
          id: 'automotivo/mechanic/tools/compressor',
          localImage: 'automotivo/mechanic/tools/compressor',
          translations: { en: 'compressor', es: 'compressor', pt: 'compressor', fr: 'compressor', de: 'compressor', it: 'compressor', nl: 'compressor', zh: '压缩机', ja: 'コンプレッサー', ru: 'компрессор' },
        },
        {
          id: 'automotivo/mechanic/tools/cutter',
          localImage: 'automotivo/mechanic/tools/cutter',
          translations: { en: 'cutter', es: 'cortador', pt: 'cortador', fr: 'cutter', de: 'Cutter', it: 'taglierino', nl: 'snijder', zh: '切割机', ja: 'カッター', ru: 'резак' },
        },
        {
          id: 'automotivo/mechanic/tools/diagnostic_tool',
          localImage: 'automotivo/mechanic/tools/diagnostic_tool',
          translations: { en: 'diagnostic tool', es: 'diagnostic tool', pt: 'diagnostic tool', fr: 'diagnostic tool', de: 'diagnostic tool', it: 'diagnostic tool', nl: 'diagnostisch gereedschap', zh: '诊断工具', ja: '診断ツール', ru: 'диагностический инструмент' },
        },
        {
          id: 'automotivo/mechanic/tools/drill',
          localImage: 'automotivo/mechanic/tools/drill',
          translations: { en: 'drill', es: 'taladro', pt: 'furadeira', fr: 'perceuse', de: 'Bohrmaschine', it: 'trapano', nl: 'boor', zh: '钻头', ja: 'ドリル', ru: 'дрель' },
        },
        {
          id: 'automotivo/mechanic/tools/gun',
          localImage: 'automotivo/mechanic/tools/gun',
          translations: { en: 'spray gun', es: 'pistola de spray', pt: 'pistola de spray', fr: 'pistolet', de: 'Sprühpistole', it: 'pistola spray', nl: 'verfpistool', zh: '喷枪', ja: 'スプレーガン', ru: 'краскопульт' },
        },
        {
          id: 'automotivo/mechanic/tools/hammer',
          localImage: 'automotivo/mechanic/tools/hammer',
          translations: { en: 'hammer', es: 'martillo', pt: 'martelo', fr: 'marteau', de: 'Hammer', it: 'martello', nl: 'hamer', zh: '锤子', ja: 'ハンマー', ru: 'молоток' },
        },
        {
          id: 'automotivo/mechanic/tools/hook',
          localImage: 'automotivo/mechanic/tools/hook',
          translations: { en: 'hook', es: 'gancho', pt: 'gancho', fr: 'crochet', de: 'Haken', it: 'gancio', nl: 'haak', zh: '挂钩', ja: 'フック', ru: 'крюк' },
        },
        {
          id: 'automotivo/mechanic/tools/impact_wrench',
          localImage: 'automotivo/mechanic/tools/impact_wrench',
          translations: { en: 'impact wrench', es: 'impact wrench', pt: 'impact wrench', fr: 'impact wrench', de: 'impact wrench', it: 'impact wrench', nl: 'slagmoersleutel', zh: '冲击扳手', ja: 'インパクトレンチ', ru: 'ударный гайковерт' },
        },
        {
          id: 'automotivo/mechanic/tools/jack',
          localImage: 'automotivo/mechanic/tools/jack',
          translations: { en: 'jack', es: 'jack', pt: 'jack', fr: 'jack', de: 'jack', it: 'jack', nl: 'krik', zh: '千斤顶', ja: 'ジャッキ', ru: 'домкрат' },
        },
        {
          id: 'automotivo/mechanic/tools/lift',
          localImage: 'automotivo/mechanic/tools/lift',
          translations: { en: 'lift', es: 'lift', pt: 'lift', fr: 'lift', de: 'lift', it: 'lift', nl: 'lift', zh: '升降机', ja: 'リフト', ru: 'подъемник' },
        },
        {
          id: 'automotivo/mechanic/tools/pliers',
          localImage: 'automotivo/mechanic/tools/pliers',
          translations: { en: 'pliers', es: 'alicates', pt: 'alicate', fr: 'pinces', de: 'Zange', it: 'pinze', nl: 'tang', zh: '钳子', ja: 'プライヤー', ru: 'плоскогубцы' },
        },
        {
          id: 'automotivo/mechanic/tools/pump',
          localImage: 'automotivo/mechanic/tools/pump',
          translations: { en: 'pump', es: 'bomba', pt: 'bomba', fr: 'pompe', de: 'Pumpe', it: 'pompa', nl: 'pomp', zh: '泵', ja: 'ポンプ', ru: 'насос' },
        },
        {
          id: 'automotivo/mechanic/tools/ratchet',
          localImage: 'automotivo/mechanic/tools/ratchet',
          translations: { en: 'ratchet', es: 'ratchet', pt: 'ratchet', fr: 'ratchet', de: 'ratchet', it: 'ratchet', nl: 'ratelsleutel', zh: '棘轮扳手', ja: 'ラチェット', ru: 'трещотка' },
        },
        {
          id: 'automotivo/mechanic/tools/scanner',
          localImage: 'automotivo/mechanic/tools/scanner',
          translations: { en: 'scanner', es: 'escáner', pt: 'scanner', fr: 'scanner', de: 'Scanner', it: 'scanner', nl: 'scanner', zh: '扫描仪', ja: 'スキャナー', ru: 'сканер' },
        },
        {
          id: 'automotivo/mechanic/tools/screwdriver',
          localImage: 'automotivo/mechanic/tools/screwdriver',
          translations: { en: 'screwdriver', es: 'screwdriver', pt: 'screwdriver', fr: 'screwdriver', de: 'screwdriver', it: 'screwdriver', nl: 'schroevendraaier', zh: '螺丝刀', ja: 'ドライバー', ru: 'отвертка' },
        },
        {
          id: 'automotivo/mechanic/tools/socket_set',
          localImage: 'automotivo/mechanic/tools/socket_set',
          translations: { en: 'socket set', es: 'socket set', pt: 'socket set', fr: 'socket set', de: 'socket set', it: 'socket set', nl: 'doppenset', zh: '套筒扳手组', ja: 'ソケットセット', ru: 'набор головок' },
        },
        {
          id: 'automotivo/mechanic/tools/tester',
          localImage: 'automotivo/mechanic/tools/tester',
          translations: { en: 'tester', es: 'tester', pt: 'tester', fr: 'tester', de: 'tester', it: 'tester', nl: 'tester', zh: '测试仪', ja: 'テスター', ru: 'тестер' },
        },
        {
          id: 'automotivo/mechanic/tools/wrench',
          localImage: 'automotivo/mechanic/tools/wrench',
          translations: { en: 'wrench', es: 'llave', pt: 'chave inglesa', fr: 'clé', de: 'Schraubenschlüssel', it: 'chiave', nl: 'moersleutel', zh: '扳手', ja: 'レンチ', ru: 'гаечный ключ' },
        },
        {
          id: 'automotivo/mechanic/materials/additive',
          localImage: 'automotivo/mechanic/materials/additive',
          translations: { en: 'additive', es: 'additive', pt: 'additive', fr: 'additive', de: 'additive', it: 'additive', nl: 'additief', zh: '添加剂', ja: '添加剤', ru: 'добавка' },
        },
        {
          id: 'automotivo/mechanic/materials/additive_mix',
          localImage: 'automotivo/mechanic/materials/additive_mix',
          translations: { en: 'additive mix', es: 'additive mix', pt: 'additive mix', fr: 'additive mix', de: 'additive mix', it: 'additive mix', nl: 'additivenmix', zh: '添加剂混合物', ja: '添加剤ミックス', ru: 'смесь добавок' },
        },
        {
          id: 'automotivo/mechanic/materials/agent',
          localImage: 'automotivo/mechanic/materials/agent',
          translations: { en: 'agent', es: 'agent', pt: 'agent', fr: 'agent', de: 'agent', it: 'agent', nl: 'middel', zh: '试剂', ja: '薬剤', ru: 'агент' },
        },
        {
          id: 'automotivo/mechanic/materials/brake_fluid',
          localImage: 'automotivo/mechanic/materials/brake_fluid',
          translations: { en: 'brake fluid', es: 'brake fluid', pt: 'brake fluid', fr: 'brake fluid', de: 'brake fluid', it: 'brake fluid', nl: 'remvloeistof', zh: '刹车油', ja: 'ブレーキフルード', ru: 'тормозная жидкость' },
        },
        {
          id: 'automotivo/mechanic/materials/chemical',
          localImage: 'automotivo/mechanic/materials/chemical',
          translations: { en: 'chemical', es: 'chemical', pt: 'chemical', fr: 'chemical', de: 'chemical', it: 'chemical', nl: 'chemicalie', zh: '化学品', ja: '化学物質', ru: 'химическое вещество' },
        },
        {
          id: 'automotivo/mechanic/materials/cleaner',
          localImage: 'automotivo/mechanic/materials/cleaner',
          translations: { en: 'cleaner', es: 'cleaner', pt: 'cleaner', fr: 'cleaner', de: 'cleaner', it: 'cleaner', nl: 'reiniger', zh: '清洁剂', ja: '洗浄剤', ru: 'чистящее средство' },
        },
        {
          id: 'automotivo/mechanic/materials/coating',
          localImage: 'automotivo/mechanic/materials/coating',
          translations: { en: 'coating', es: 'coating', pt: 'coating', fr: 'coating', de: 'coating', it: 'coating', nl: 'coating', zh: '涂层', ja: 'コーティング', ru: 'покрытие' },
        },
        {
          id: 'automotivo/mechanic/materials/compound',
          localImage: 'automotivo/mechanic/materials/compound',
          translations: { en: 'compound', es: 'compound', pt: 'compound', fr: 'compound', de: 'compound', it: 'compound', nl: 'compound', zh: '化合物', ja: 'コンパウンド', ru: 'состав' },
        },
        {
          id: 'automotivo/mechanic/materials/coolant',
          localImage: 'automotivo/mechanic/materials/coolant',
          translations: { en: 'coolant', es: 'coolant', pt: 'coolant', fr: 'coolant', de: 'coolant', it: 'coolant', nl: 'koelvloeistof', zh: '冷却液', ja: '冷却液', ru: 'охлаждающая жидкость' },
        },
        {
          id: 'automotivo/mechanic/materials/coolant_mix',
          localImage: 'automotivo/mechanic/materials/coolant_mix',
          translations: { en: 'coolant mix', es: 'coolant mix', pt: 'coolant mix', fr: 'coolant mix', de: 'coolant mix', it: 'coolant mix', nl: 'koelmengsel', zh: '冷却液混合物', ja: '冷却液ミックス', ru: 'смесь охлаждающей жидкости' },
        },
        {
          id: 'automotivo/mechanic/materials/filter',
          localImage: 'automotivo/mechanic/materials/filter',
          translations: { en: 'filter', es: 'filtro', pt: 'filtro', fr: 'filtre', de: 'Filter', it: 'filtro', nl: 'filter', zh: '过滤器', ja: 'フィルター', ru: 'фильтр' },
        },
        {
          id: 'automotivo/mechanic/materials/fluid',
          localImage: 'automotivo/mechanic/materials/fluid',
          translations: { en: 'fluid', es: 'fluid', pt: 'fluid', fr: 'fluid', de: 'fluid', it: 'fluid', nl: 'vloeistof', zh: '液体', ja: '液体', ru: 'жидкость' },
        },
        {
          id: 'automotivo/mechanic/materials/fluid_mix',
          localImage: 'automotivo/mechanic/materials/fluid_mix',
          translations: { en: 'fluid mix', es: 'fluid mix', pt: 'fluid mix', fr: 'fluid mix', de: 'fluid mix', it: 'fluid mix', nl: 'vloeistofmengsel', zh: '液体混合物', ja: '液体ミックス', ru: 'смесь жидкостей' },
        },
        {
          id: 'automotivo/mechanic/materials/foam',
          localImage: 'automotivo/mechanic/materials/foam',
          translations: { en: 'foam', es: 'foam', pt: 'foam', fr: 'foam', de: 'foam', it: 'foam', nl: 'schuim', zh: '泡沫', ja: 'フォーム', ru: 'пена' },
        },
        {
          id: 'automotivo/mechanic/materials/fuel',
          localImage: 'automotivo/mechanic/materials/fuel',
          translations: { en: 'fuel', es: 'fuel', pt: 'fuel', fr: 'fuel', de: 'fuel', it: 'fuel', nl: 'brandstof', zh: '燃料', ja: '燃料', ru: 'топливо' },
        },
        {
          id: 'automotivo/mechanic/materials/gel',
          localImage: 'automotivo/mechanic/materials/gel',
          translations: { en: 'gel', es: 'gel', pt: 'gel', fr: 'gel', de: 'gel', it: 'gel', nl: 'gel', zh: '凝胶', ja: 'ジェル', ru: 'гель' },
        },
        {
          id: 'automotivo/mechanic/materials/grease',
          localImage: 'automotivo/mechanic/materials/grease',
          translations: { en: 'grease', es: 'grease', pt: 'grease', fr: 'grease', de: 'grease', it: 'grease', nl: 'vet', zh: '润滑脂', ja: 'グリース', ru: 'смазка' },
        },
        {
          id: 'automotivo/mechanic/materials/grease_mix',
          localImage: 'automotivo/mechanic/materials/grease_mix',
          translations: { en: 'grease mix', es: 'grease mix', pt: 'grease mix', fr: 'grease mix', de: 'grease mix', it: 'grease mix', nl: 'vetmengsel', zh: '润滑脂混合物', ja: 'グリースミックス', ru: 'смесь смазки' },
        },
        {
          id: 'automotivo/mechanic/materials/liquid',
          localImage: 'automotivo/mechanic/materials/liquid',
          translations: { en: 'liquid', es: 'liquid', pt: 'liquid', fr: 'liquid', de: 'liquid', it: 'liquid', nl: 'vloeistof', zh: '液体', ja: '液体', ru: 'жидкость' },
        },
        {
          id: 'automotivo/mechanic/materials/lubricant',
          localImage: 'automotivo/mechanic/materials/lubricant',
          translations: { en: 'lubricant', es: 'lubricant', pt: 'lubricant', fr: 'lubricant', de: 'lubricant', it: 'lubricant', nl: 'smeermiddel', zh: '润滑剂', ja: '潤滑剤', ru: 'смазочный материал' },
        },
        {
          id: 'automotivo/mechanic/materials/oil',
          localImage: 'automotivo/mechanic/materials/oil',
          translations: { en: 'oil', es: 'oil', pt: 'oil', fr: 'oil', de: 'oil', it: 'oil', nl: 'olie', zh: '油', ja: 'オイル', ru: 'масло' },
        },
        {
          id: 'automotivo/mechanic/materials/oil_mix',
          localImage: 'automotivo/mechanic/materials/oil_mix',
          translations: { en: 'oil mix', es: 'oil mix', pt: 'oil mix', fr: 'oil mix', de: 'oil mix', it: 'oil mix', nl: 'oliemengsel', zh: '油混合物', ja: 'オイルミックス', ru: 'масляная смесь' },
        },
        {
          id: 'automotivo/mechanic/materials/paste',
          localImage: 'automotivo/mechanic/materials/paste',
          translations: { en: 'paste', es: 'paste', pt: 'paste', fr: 'paste', de: 'paste', it: 'paste', nl: 'pasta', zh: '糊', ja: 'ペースト', ru: 'паста' },
        },
        {
          id: 'automotivo/mechanic/materials/polish',
          localImage: 'automotivo/mechanic/materials/polish',
          translations: { en: 'polish', es: 'pulimento', pt: 'polimento', fr: 'polish', de: 'Politur', it: 'lucido', nl: 'poetsmiddel', zh: '抛光剂', ja: 'ポリッシュ', ru: 'полироль' },
        },
        {
          id: 'automotivo/mechanic/materials/sealant',
          localImage: 'automotivo/mechanic/materials/sealant',
          translations: { en: 'sealant', es: 'sealant', pt: 'sealant', fr: 'sealant', de: 'sealant', it: 'sealant', nl: 'afdichtingsmiddel', zh: '密封剂', ja: 'シーラント', ru: 'герметик' },
        },
        {
          id: 'automotivo/mechanic/materials/solution',
          localImage: 'automotivo/mechanic/materials/solution',
          translations: { en: 'solution', es: 'solution', pt: 'solution', fr: 'solution', de: 'solution', it: 'solution', nl: 'oplossing', zh: '溶液', ja: '溶液', ru: 'раствор' },
        },
        {
          id: 'automotivo/mechanic/materials/solvent',
          localImage: 'automotivo/mechanic/materials/solvent',
          translations: { en: 'solvent', es: 'solvent', pt: 'solvent', fr: 'solvent', de: 'solvent', it: 'solvent', nl: 'oplosmiddel', zh: '溶剂', ja: '溶剤', ru: 'растворитель' },
        },
        {
          id: 'automotivo/mechanic/materials/spray',
          localImage: 'automotivo/mechanic/materials/spray',
          translations: { en: 'spray', es: 'spray', pt: 'spray', fr: 'spray', de: 'Spray', it: 'spray', nl: 'spray', zh: '喷雾', ja: 'スプレー', ru: 'спрей' },
        },
        {
          id: 'automotivo/mechanic/materials/treatment',
          localImage: 'automotivo/mechanic/materials/treatment',
          translations: { en: 'treatment', es: 'treatment', pt: 'treatment', fr: 'treatment', de: 'treatment', it: 'treatment', nl: 'behandeling', zh: '处理剂', ja: 'トリートメント', ru: 'обработка' },
        },
        {
          id: 'automotivo/mechanic/materials/wax',
          localImage: 'automotivo/mechanic/materials/wax',
          translations: { en: 'wax', es: 'cera', pt: 'cera', fr: 'cire', de: 'Wachs', it: 'cera', nl: 'was', zh: '蜡', ja: 'ワックス', ru: 'воск' },
        }
        ],
      }
      ],
    }
    ],
  },
  {
    id: 'Care',
    name: { en: 'Care', es: 'Cuidados', pt: 'Cuidados', fr: 'Soins', de: 'Pflege', it: 'Assistenza', nl: 'Zorg', zh: '护理', ja: '介護', ru: 'Уход' },
    icon: '🏥',
    imageUrl: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=800',
    sectors: [
    {
      id: 'care_assistant',
      name: { en: 'Care Assistant', es: 'Auxiliar de Cuidados', pt: 'Auxiliar de Cuidados', fr: 'Aide-soignant', de: 'Pflegehelfer', it: 'Assistente di Cura', nl: 'Zorgassistent', zh: '护理助理', ja: '介護助手', ru: 'Помощник по уходу' },
      icon: '🏥',
      roles: [
      {
        id: 'tools',
        name: { en: 'Tools', es: 'Herramientas', pt: 'Ferramentas', fr: 'Outils', de: 'Werkzeuge', it: 'Attrezzi', nl: 'Gereedschap', zh: '工具', ja: '道具', ru: 'Инструменты' },
        icon: '🔧',
        items: [
        {
          id: 'Care/care_assistant/tools/apron',
          localImage: 'Care/care_assistant/tools/apron',
          translations: { en: 'apron', es: 'delantal', pt: 'avental', fr: 'tablier', de: 'Schürze', it: 'grembiule', nl: 'schort', zh: '围裙', ja: 'エプロン', ru: 'фартук' },
        },
        {
          id: 'Care/care_assistant/tools/bandage',
          localImage: 'Care/care_assistant/tools/bandage',
          translations: { en: 'bandage', es: 'venda', pt: 'atadura', fr: 'bandage', de: 'Verband', it: 'benda', nl: 'verband', zh: '绷带', ja: '包帯', ru: 'бинт' },
        },
        {
          id: 'Care/care_assistant/tools/bed',
          localImage: 'Care/care_assistant/tools/bed',
          translations: { en: 'bed', es: 'cama', pt: 'cama', fr: 'lit', de: 'Bett', it: 'letto', nl: 'bed', zh: '床', ja: 'ベッド', ru: 'кровать' },
        },
        {
          id: 'Care/care_assistant/tools/bedside_table',
          localImage: 'Care/care_assistant/tools/bedside_table',
          translations: { en: 'bedside table', es: 'bedside table', pt: 'bedside table', fr: 'bedside table', de: 'bedside table', it: 'bedside table', nl: 'nachtkastje', zh: '床头柜', ja: 'ベッドサイドテーブル', ru: 'прикроватный столик' },
        },
        {
          id: 'Care/care_assistant/tools/blood_pressure_monitor',
          localImage: 'Care/care_assistant/tools/blood_pressure_monitor',
          translations: { en: 'blood pressure monitor', es: 'blood pressure monitor', pt: 'blood pressure monitor', fr: 'blood pressure monitor', de: 'blood pressure monitor', it: 'blood pressure monitor', nl: 'bloeddrukmeter', zh: '血压计', ja: '血圧計', ru: 'тонометр' },
        },
        {
          id: 'Care/care_assistant/tools/call_button',
          localImage: 'Care/care_assistant/tools/call_button',
          translations: { en: 'call button', es: 'call button', pt: 'call button', fr: 'call button', de: 'call button', it: 'call button', nl: 'oproepknop', zh: '呼叫按钮', ja: 'コールボタン', ru: 'кнопка вызова' },
        },
        {
          id: 'Care/care_assistant/tools/chart',
          localImage: 'Care/care_assistant/tools/chart',
          translations: { en: 'chart', es: 'chart', pt: 'chart', fr: 'chart', de: 'chart', it: 'chart', nl: 'grafiek', zh: '图表', ja: 'グラフ', ru: 'диаграмма' },
        },
        {
          id: 'Care/care_assistant/tools/clip',
          localImage: 'Care/care_assistant/tools/clip',
          translations: { en: 'clip', es: 'clip', pt: 'clip', fr: 'clip', de: 'clip', it: 'clip', nl: 'clip', zh: '夹子', ja: 'クリップ', ru: 'зажим' },
        },
        {
          id: 'Care/care_assistant/tools/clipboard',
          localImage: 'Care/care_assistant/tools/clipboard',
          translations: { en: 'clipboard', es: 'portapapeles', pt: 'prancheta', fr: 'planchette', de: 'Klemmbrett', it: 'appunti', nl: 'klembord', zh: '剪贴板', ja: 'クリップボード', ru: 'планшет для бумаг' },
        },
        {
          id: 'Care/care_assistant/tools/crutches',
          localImage: 'Care/care_assistant/tools/crutches',
          translations: { en: 'crutches', es: 'crutches', pt: 'crutches', fr: 'crutches', de: 'crutches', it: 'crutches', nl: 'krukken', zh: '拐杖', ja: '松葉杖', ru: 'костыли' },
        },
        {
          id: 'Care/care_assistant/tools/curtain',
          localImage: 'Care/care_assistant/tools/curtain',
          translations: { en: 'curtain', es: 'curtain', pt: 'curtain', fr: 'curtain', de: 'curtain', it: 'curtain', nl: 'gordijn', zh: '窗帘', ja: 'カーテン', ru: 'занавеска' },
        },
        {
          id: 'Care/care_assistant/tools/defibrillator',
          localImage: 'Care/care_assistant/tools/defibrillator',
          translations: { en: 'defibrillator', es: 'defibrillator', pt: 'defibrillator', fr: 'defibrillator', de: 'defibrillator', it: 'defibrillator', nl: 'defibrillator', zh: '除颤仪', ja: '除細動器', ru: 'дефибриллятор' },
        },
        {
          id: 'Care/care_assistant/tools/dressing',
          localImage: 'Care/care_assistant/tools/dressing',
          translations: { en: 'dressing', es: 'dressing', pt: 'dressing', fr: 'dressing', de: 'dressing', it: 'dressing', nl: 'wondverband', zh: '敷料', ja: 'ドレッシング', ru: 'перевязочный материал' },
        },
        {
          id: 'Care/care_assistant/tools/face_mask',
          localImage: 'Care/care_assistant/tools/face_mask',
          translations: { en: 'face mask', es: 'face mask', pt: 'face mask', fr: 'face mask', de: 'face mask', it: 'face mask', nl: 'mondmasker', zh: '口罩', ja: 'フェイスマスク', ru: 'маска для лица' },
        },
        {
          id: 'Care/care_assistant/tools/face_shield',
          localImage: 'Care/care_assistant/tools/face_shield',
          translations: { en: 'face shield', es: 'face shield', pt: 'face shield', fr: 'face shield', de: 'face shield', it: 'face shield', nl: 'gezichtsscherm', zh: '面罩', ja: 'フェイスシールド', ru: 'защитный щиток' },
        },
        {
          id: 'Care/care_assistant/tools/forceps',
          localImage: 'Care/care_assistant/tools/forceps',
          translations: { en: 'forceps', es: 'forceps', pt: 'forceps', fr: 'forceps', de: 'forceps', it: 'forceps', nl: 'pincet', zh: '钳子', ja: '鉗子', ru: 'щипцы' },
        },
        {
          id: 'Care/care_assistant/tools/gauze',
          localImage: 'Care/care_assistant/tools/gauze',
          translations: { en: 'gauze', es: 'gauze', pt: 'gauze', fr: 'gauze', de: 'gauze', it: 'gauze', nl: 'gaas', zh: '纱布', ja: 'ガーゼ', ru: 'марля' },
        },
        {
          id: 'Care/care_assistant/tools/gloves',
          localImage: 'Care/care_assistant/tools/gloves',
          translations: { en: 'gloves', es: 'guantes', pt: 'luvas', fr: 'gants', de: 'Handschuhe', it: 'guanti', nl: 'handschoenen', zh: '手套', ja: '手袋', ru: 'перчатки' },
        },
        {
          id: 'Care/care_assistant/tools/goggles',
          localImage: 'Care/care_assistant/tools/goggles',
          translations: { en: 'goggles', es: 'gafas protectoras', pt: 'óculos de proteção', fr: 'lunettes', de: 'Schutzbrille', it: 'occhiali', nl: 'veiligheidsbril', zh: '护目镜', ja: 'ゴーグル', ru: 'защитные очки' },
        },
        {
          id: 'Care/care_assistant/tools/gown',
          localImage: 'Care/care_assistant/tools/gown',
          translations: { en: 'gown', es: 'gown', pt: 'gown', fr: 'gown', de: 'gown', it: 'gown', nl: 'ziekenhuisjas', zh: '病号服', ja: 'ガウン', ru: 'халат' },
        },
        {
          id: 'Care/care_assistant/tools/hand_sanitizer',
          localImage: 'Care/care_assistant/tools/hand_sanitizer',
          translations: { en: 'hand sanitizer', es: 'hand sanitizer', pt: 'hand sanitizer', fr: 'hand sanitizer', de: 'hand sanitizer', it: 'hand sanitizer', nl: 'handdesinfectiemiddel', zh: '洗手液', ja: 'ハンドサニタイザー', ru: 'антисептик для рук' },
        },
        {
          id: 'Care/care_assistant/tools/infusion_pump',
          localImage: 'Care/care_assistant/tools/infusion_pump',
          translations: { en: 'infusion pump', es: 'infusion pump', pt: 'infusion pump', fr: 'infusion pump', de: 'infusion pump', it: 'infusion pump', nl: 'infuuspomp', zh: '输液泵', ja: '輸液ポンプ', ru: 'инфузионный насос' },
        },
        {
          id: 'Care/care_assistant/tools/iv_bag',
          localImage: 'Care/care_assistant/tools/iv_bag',
          translations: { en: 'iv bag', es: 'iv bag', pt: 'iv bag', fr: 'iv bag', de: 'iv bag', it: 'iv bag', nl: 'infuuszak', zh: '输液袋', ja: '点滴バッグ', ru: 'капельный мешок' },
        },
        {
          id: 'Care/care_assistant/tools/iv_stand',
          localImage: 'Care/care_assistant/tools/iv_stand',
          translations: { en: 'iv stand', es: 'iv stand', pt: 'iv stand', fr: 'iv stand', de: 'iv stand', it: 'iv stand', nl: 'infuusstandaard', zh: '输液架', ja: '点滴スタンド', ru: 'стойка для капельницы' },
        },
        {
          id: 'Care/care_assistant/tools/kidney_dish',
          localImage: 'Care/care_assistant/tools/kidney_dish',
          translations: { en: 'kidney dish', es: 'kidney dish', pt: 'kidney dish', fr: 'kidney dish', de: 'kidney dish', it: 'kidney dish', nl: 'niervormige schaal', zh: '肾形盘', ja: 'kidney皿', ru: 'лоток почкообразный' },
        },
        {
          id: 'Care/care_assistant/tools/label',
          localImage: 'Care/care_assistant/tools/label',
          translations: { en: 'label', es: 'etiqueta', pt: 'etiqueta', fr: 'étiquette', de: 'Etikett', it: 'etichetta', nl: 'etiket', zh: '标签', ja: 'ラベル', ru: 'этикетка' },
        },
        {
          id: 'Care/care_assistant/tools/medical_tray',
          localImage: 'Care/care_assistant/tools/medical_tray',
          translations: { en: 'medical tray', es: 'medical tray', pt: 'medical tray', fr: 'medical tray', de: 'medical tray', it: 'medical tray', nl: 'medisch dienblad', zh: '医疗托盘', ja: '医療トレイ', ru: 'медицинский лоток' },
        },
        {
          id: 'Care/care_assistant/tools/medicine_cart',
          localImage: 'Care/care_assistant/tools/medicine_cart',
          translations: { en: 'medicine cart', es: 'medicine cart', pt: 'medicine cart', fr: 'medicine cart', de: 'medicine cart', it: 'medicine cart', nl: 'medicijnkar', zh: '药车', ja: '薬品カート', ru: 'медицинская тележка' },
        },
        {
          id: 'Care/care_assistant/tools/needle',
          localImage: 'Care/care_assistant/tools/needle',
          translations: { en: 'needle', es: 'needle', pt: 'needle', fr: 'needle', de: 'needle', it: 'needle', nl: 'naald', zh: '针', ja: '針', ru: 'игла' },
        },
        {
          id: 'Care/care_assistant/tools/oxygen_mask',
          localImage: 'Care/care_assistant/tools/oxygen_mask',
          translations: { en: 'oxygen mask', es: 'oxygen mask', pt: 'oxygen mask', fr: 'oxygen mask', de: 'oxygen mask', it: 'oxygen mask', nl: 'zuurstofmasker', zh: '氧气面罩', ja: '酸素マスク', ru: 'кислородная маска' },
        },
        {
          id: 'Care/care_assistant/tools/oxygen_tank',
          localImage: 'Care/care_assistant/tools/oxygen_tank',
          translations: { en: 'oxygen tank', es: 'oxygen tank', pt: 'oxygen tank', fr: 'oxygen tank', de: 'oxygen tank', it: 'oxygen tank', nl: 'zuurstoftank', zh: '氧气瓶', ja: '酸素ボンベ', ru: 'баллон с кислородом' },
        },
        {
          id: 'Care/care_assistant/tools/pill_box',
          localImage: 'Care/care_assistant/tools/pill_box',
          translations: { en: 'pill box', es: 'pill box', pt: 'pill box', fr: 'pill box', de: 'pill box', it: 'pill box', nl: 'pillendoos', zh: '药盒', ja: 'ピルケース', ru: 'таблетница' },
        },
        {
          id: 'Care/care_assistant/tools/plaster',
          localImage: 'Care/care_assistant/tools/plaster',
          translations: { en: 'plaster', es: 'plaster', pt: 'plaster', fr: 'plaster', de: 'plaster', it: 'plaster', nl: 'gips', zh: '石膏', ja: 'プラスター', ru: 'штукатурка' },
        },
        {
          id: 'Care/care_assistant/tools/prescription_pad',
          localImage: 'Care/care_assistant/tools/prescription_pad',
          translations: { en: 'prescription pad', es: 'prescription pad', pt: 'prescription pad', fr: 'prescription pad', de: 'prescription pad', it: 'prescription pad', nl: 'receptenblok', zh: '处方本', ja: '処方箋用紙', ru: 'рецептурный бланк' },
        },
        {
          id: 'Care/care_assistant/tools/pulse_oximeter',
          localImage: 'Care/care_assistant/tools/pulse_oximeter',
          translations: { en: 'pulse oximeter', es: 'pulse oximeter', pt: 'pulse oximeter', fr: 'pulse oximeter', de: 'pulse oximeter', it: 'pulse oximeter', nl: 'saturatiemeter', zh: '血氧仪', ja: 'パルスオキシメーター', ru: 'пульсоксиметр' },
        },
        {
          id: 'Care/care_assistant/tools/scissors',
          localImage: 'Care/care_assistant/tools/scissors',
          translations: { en: 'scissors', es: 'tijeras', pt: 'tesoura', fr: 'ciseaux', de: 'Schere', it: 'forbici', nl: 'schaar', zh: '剪刀', ja: 'ハサミ', ru: 'ножницы' },
        },
        {
          id: 'Care/care_assistant/tools/sharps_container',
          localImage: 'Care/care_assistant/tools/sharps_container',
          translations: { en: 'sharps container', es: 'sharps container', pt: 'sharps container', fr: 'sharps container', de: 'sharps container', it: 'sharps container', nl: 'naaldcontainer', zh: '利器容器', ja: 'シャープスコンテナ', ru: 'контейнер для острых предметов' },
        },
        {
          id: 'Care/care_assistant/tools/specimen_container',
          localImage: 'Care/care_assistant/tools/specimen_container',
          translations: { en: 'specimen container', es: 'specimen container', pt: 'specimen container', fr: 'specimen container', de: 'specimen container', it: 'specimen container', nl: 'monsternemer', zh: '标本容器', ja: '検体容器', ru: 'контейнер для образцов' },
        },
        {
          id: 'Care/care_assistant/tools/stethoscope',
          localImage: 'Care/care_assistant/tools/stethoscope',
          translations: { en: 'stethoscope', es: 'stethoscope', pt: 'stethoscope', fr: 'stethoscope', de: 'stethoscope', it: 'stethoscope', nl: 'stethoscoop', zh: '听诊器', ja: '聴診器', ru: 'стетоскоп' },
        },
        {
          id: 'Care/care_assistant/tools/stretcher',
          localImage: 'Care/care_assistant/tools/stretcher',
          translations: { en: 'stretcher', es: 'stretcher', pt: 'stretcher', fr: 'stretcher', de: 'stretcher', it: 'stretcher', nl: 'brancard', zh: '担架', ja: 'ストレッチャー', ru: 'носилки' },
        },
        {
          id: 'Care/care_assistant/tools/syringe',
          localImage: 'Care/care_assistant/tools/syringe',
          translations: { en: 'syringe', es: 'jeringa', pt: 'seringa', fr: 'seringue', de: 'Spritze', it: 'siringa', nl: 'spuit', zh: '注射器', ja: '注射器', ru: 'шприц' },
        },
        {
          id: 'Care/care_assistant/tools/tape',
          localImage: 'Care/care_assistant/tools/tape',
          translations: { en: 'tape', es: 'cinta', pt: 'fita', fr: 'ruban', de: 'Klebeband', it: 'nastro', nl: 'tape', zh: '胶带', ja: 'テープ', ru: 'лента' },
        },
        {
          id: 'Care/care_assistant/tools/test_tube',
          localImage: 'Care/care_assistant/tools/test_tube',
          translations: { en: 'test tube', es: 'test tube', pt: 'test tube', fr: 'test tube', de: 'test tube', it: 'test tube', nl: 'reageerbuis', zh: '试管', ja: '試験管', ru: 'пробирка' },
        },
        {
          id: 'Care/care_assistant/tools/thermometer',
          localImage: 'Care/care_assistant/tools/thermometer',
          translations: { en: 'thermometer', es: 'termómetro', pt: 'termômetro', fr: 'thermomètre', de: 'Thermometer', it: 'termometro', nl: 'thermometer', zh: '温度计', ja: '体温計', ru: 'термометр' },
        },
        {
          id: 'Care/care_assistant/tools/tourniquet',
          localImage: 'Care/care_assistant/tools/tourniquet',
          translations: { en: 'tourniquet', es: 'tourniquet', pt: 'tourniquet', fr: 'tourniquet', de: 'tourniquet', it: 'tourniquet', nl: 'tourniquet', zh: '止血带', ja: '止血帯', ru: 'жгут' },
        },
        {
          id: 'Care/care_assistant/tools/tweezers',
          localImage: 'Care/care_assistant/tools/tweezers',
          translations: { en: 'tweezers', es: 'tweezers', pt: 'tweezers', fr: 'tweezers', de: 'tweezers', it: 'tweezers', nl: 'pincet', zh: '镊子', ja: 'ピンセット', ru: 'пинцет' },
        },
        {
          id: 'Care/care_assistant/tools/urine_bag',
          localImage: 'Care/care_assistant/tools/urine_bag',
          translations: { en: 'urine bag', es: 'urine bag', pt: 'urine bag', fr: 'urine bag', de: 'urine bag', it: 'urine bag', nl: 'urinezak', zh: '尿袋', ja: '尿袋', ru: 'мочевой мешок' },
        },
        {
          id: 'Care/care_assistant/tools/walker',
          localImage: 'Care/care_assistant/tools/walker',
          translations: { en: 'walker', es: 'walker', pt: 'walker', fr: 'walker', de: 'walker', it: 'walker', nl: 'rollator', zh: '助行器', ja: 'ウォーカー', ru: 'ходунки' },
        },
        {
          id: 'Care/care_assistant/tools/wheelchair',
          localImage: 'Care/care_assistant/tools/wheelchair',
          translations: { en: 'wheelchair', es: 'silla de ruedas', pt: 'cadeira de rodas', fr: 'fauteuil roulant', de: 'Rollstuhl', it: 'sedia a rotelle', nl: 'rolstoel', zh: '轮椅', ja: '車椅子', ru: 'инвалидная коляска' },
        },
        {
          id: 'Care/care_assistant/tools/wipes',
          localImage: 'Care/care_assistant/tools/wipes',
          translations: { en: 'wipes', es: 'wipes', pt: 'wipes', fr: 'wipes', de: 'wipes', it: 'wipes', nl: 'doekjes', zh: '湿巾', ja: 'ウェットティッシュ', ru: 'влажные салфетки' },
        }
        ],
      },
      {
        id: 'materials',
        name: { en: 'Materials', es: 'Materiales', pt: 'Materiais', fr: 'Matériaux', de: 'Materialien', it: 'Materiali', nl: 'Materialen', zh: '材料', ja: '材料', ru: 'Материалы' },
        icon: '📦',
        items: [
        {
          id: 'Care/care_assistant/materials/adhesive_tape',
          localImage: 'Care/care_assistant/materials/adhesive_tape',
          translations: { en: 'adhesive tape', es: 'adhesive tape', pt: 'adhesive tape', fr: 'adhesive tape', de: 'adhesive tape', it: 'adhesive tape', nl: 'plakband', zh: '胶带', ja: '接着テープ', ru: 'клейкая лента' },
        },
        {
          id: 'Care/care_assistant/materials/alcohol_wipes',
          localImage: 'Care/care_assistant/materials/alcohol_wipes',
          translations: { en: 'alcohol wipes', es: 'alcohol wipes', pt: 'alcohol wipes', fr: 'alcohol wipes', de: 'alcohol wipes', it: 'alcohol wipes', nl: 'alcoholdoekjes', zh: '酒精湿巾', ja: 'アルコールワイプ', ru: 'спиртовые салфетки' },
        },
        {
          id: 'Care/care_assistant/materials/antiseptic',
          localImage: 'Care/care_assistant/materials/antiseptic',
          translations: { en: 'antiseptic', es: 'antiseptic', pt: 'antiseptic', fr: 'antiseptic', de: 'antiseptic', it: 'antiseptic', nl: 'antisepticum', zh: '消毒剂', ja: '防腐剤', ru: 'антисептик' },
        },
        {
          id: 'Care/care_assistant/materials/aprons_disposable',
          localImage: 'Care/care_assistant/materials/aprons_disposable',
          translations: { en: 'aprons disposable', es: 'aprons disposable', pt: 'aprons disposable', fr: 'aprons disposable', de: 'aprons disposable', it: 'aprons disposable', nl: 'wegwerpschorten', zh: '一次性围裙', ja: '使い捨てエプロン', ru: 'одноразовые фартуки' },
        },
        {
          id: 'Care/care_assistant/materials/bandage_rolls',
          localImage: 'Care/care_assistant/materials/bandage_rolls',
          translations: { en: 'bandage rolls', es: 'bandage rolls', pt: 'bandage rolls', fr: 'bandage rolls', de: 'bandage rolls', it: 'bandage rolls', nl: 'verbandrol', zh: '绷带卷', ja: '包帯ロール', ru: 'рулонный бинт' },
        },
        {
          id: 'Care/care_assistant/materials/barcode_labels',
          localImage: 'Care/care_assistant/materials/barcode_labels',
          translations: { en: 'barcode labels', es: 'barcode labels', pt: 'barcode labels', fr: 'barcode labels', de: 'barcode labels', it: 'barcode labels', nl: 'streepjescode etiketten', zh: '条形码标签', ja: 'バーコードラベル', ru: 'этикетки со штрихкодом' },
        },
        {
          id: 'Care/care_assistant/materials/bed_sheets',
          localImage: 'Care/care_assistant/materials/bed_sheets',
          translations: { en: 'bed sheets', es: 'bed sheets', pt: 'bed sheets', fr: 'bed sheets', de: 'bed sheets', it: 'bed sheets', nl: 'beddenlakens', zh: '床单', ja: 'シーツ', ru: 'простыни' },
        },
        {
          id: 'Care/care_assistant/materials/blankets',
          localImage: 'Care/care_assistant/materials/blankets',
          translations: { en: 'blankets', es: 'blankets', pt: 'blankets', fr: 'blankets', de: 'blankets', it: 'blankets', nl: 'dekens', zh: '毯子', ja: 'ブランケット', ru: 'одеяла' },
        },
        {
          id: 'Care/care_assistant/materials/caps',
          localImage: 'Care/care_assistant/materials/caps',
          translations: { en: 'caps', es: 'caps', pt: 'caps', fr: 'caps', de: 'caps', it: 'caps', nl: 'doppen', zh: '帽子', ja: 'キャップ', ru: 'крышки' },
        },
        {
          id: 'Care/care_assistant/materials/capsules',
          localImage: 'Care/care_assistant/materials/capsules',
          translations: { en: 'capsules', es: 'capsules', pt: 'capsules', fr: 'capsules', de: 'capsules', it: 'capsules', nl: 'capsules', zh: '胶囊', ja: 'カプセル', ru: 'капсулы' },
        },
        {
          id: 'Care/care_assistant/materials/charts',
          localImage: 'Care/care_assistant/materials/charts',
          translations: { en: 'charts', es: 'charts', pt: 'charts', fr: 'charts', de: 'charts', it: 'charts', nl: 'grafieken', zh: '图表', ja: 'グラフ', ru: 'диаграммы' },
        },
        {
          id: 'Care/care_assistant/materials/cleaning_solution',
          localImage: 'Care/care_assistant/materials/cleaning_solution',
          translations: { en: 'cleaning solution', es: 'cleaning solution', pt: 'cleaning solution', fr: 'cleaning solution', de: 'cleaning solution', it: 'cleaning solution', nl: 'reinigingsoplossing', zh: '清洁液', ja: '洗浄液', ru: 'чистящий раствор' },
        },
        {
          id: 'Care/care_assistant/materials/containers',
          localImage: 'Care/care_assistant/materials/containers',
          translations: { en: 'containers', es: 'containers', pt: 'containers', fr: 'containers', de: 'containers', it: 'containers', nl: 'containers', zh: '容器', ja: 'コンテナ', ru: 'контейнеры' },
        },
        {
          id: 'Care/care_assistant/materials/cotton',
          localImage: 'Care/care_assistant/materials/cotton',
          translations: { en: 'cotton', es: 'algodón', pt: 'algodão', fr: 'coton', de: 'Watte', it: 'cotone', nl: 'katoen', zh: '棉花', ja: '綿', ru: 'хлопок' },
        },
        {
          id: 'Care/care_assistant/materials/cream',
          localImage: 'Care/care_assistant/materials/cream',
          translations: { en: 'cream', es: 'cream', pt: 'cream', fr: 'cream', de: 'cream', it: 'cream', nl: 'room', zh: '奶油', ja: 'クリーム', ru: 'крем' },
        },
        {
          id: 'Care/care_assistant/materials/disinfectant',
          localImage: 'Care/care_assistant/materials/disinfectant',
          translations: { en: 'disinfectant', es: 'desinfectante', pt: 'desinfetante', fr: 'désinfectant', de: 'Desinfektionsmittel', it: 'disinfettante', nl: 'ontsmettingsmiddel', zh: '消毒剂', ja: '消毒剤', ru: 'дезинфектант' },
        },
        {
          id: 'Care/care_assistant/materials/documents',
          localImage: 'Care/care_assistant/materials/documents',
          translations: { en: 'documents', es: 'documents', pt: 'documents', fr: 'documents', de: 'documents', it: 'documents', nl: 'documenten', zh: '文件', ja: '書類', ru: 'документы' },
        },
        {
          id: 'Care/care_assistant/materials/dressings',
          localImage: 'Care/care_assistant/materials/dressings',
          translations: { en: 'dressings', es: 'dressings', pt: 'dressings', fr: 'dressings', de: 'dressings', it: 'dressings', nl: 'verbanden', zh: '敷料', ja: 'ドレッシング', ru: 'перевязочные материалы' },
        },
        {
          id: 'Care/care_assistant/materials/drops',
          localImage: 'Care/care_assistant/materials/drops',
          translations: { en: 'drops', es: 'drops', pt: 'drops', fr: 'drops', de: 'drops', it: 'drops', nl: 'druppels', zh: '滴液', ja: 'ドロップ', ru: 'капли' },
        },
        {
          id: 'Care/care_assistant/materials/gauze_pads',
          localImage: 'Care/care_assistant/materials/gauze_pads',
          translations: { en: 'gauze pads', es: 'gauze pads', pt: 'gauze pads', fr: 'gauze pads', de: 'gauze pads', it: 'gauze pads', nl: 'gaaskompres', zh: '纱布垫', ja: 'ガーゼパッド', ru: 'марлевые тампоны' },
        },
        {
          id: 'Care/care_assistant/materials/gel',
          localImage: 'Care/care_assistant/materials/gel',
          translations: { en: 'gel', es: 'gel', pt: 'gel', fr: 'gel', de: 'gel', it: 'gel', nl: 'gel', zh: '凝胶', ja: 'ジェル', ru: 'гель' },
        },
        {
          id: 'Care/care_assistant/materials/gloves_disposable',
          localImage: 'Care/care_assistant/materials/gloves_disposable',
          translations: { en: 'gloves disposable', es: 'gloves disposable', pt: 'gloves disposable', fr: 'gloves disposable', de: 'gloves disposable', it: 'gloves disposable', nl: 'wegwerphandschoenen', zh: '一次性手套', ja: '使い捨て手袋', ru: 'одноразовые перчатки' },
        },
        {
          id: 'Care/care_assistant/materials/glucose_solution',
          localImage: 'Care/care_assistant/materials/glucose_solution',
          translations: { en: 'glucose solution', es: 'glucose solution', pt: 'glucose solution', fr: 'glucose solution', de: 'glucose solution', it: 'glucose solution', nl: 'glucoseoplossing', zh: '葡萄糖溶液', ja: 'ブドウ糖液', ru: 'раствор глюкозы' },
        },
        {
          id: 'Care/care_assistant/materials/gowns_disposable',
          localImage: 'Care/care_assistant/materials/gowns_disposable',
          translations: { en: 'gowns disposable', es: 'gowns disposable', pt: 'gowns disposable', fr: 'gowns disposable', de: 'gowns disposable', it: 'gowns disposable', nl: 'wegwerpjassen', zh: '一次性病号服', ja: '使い捨てガウン', ru: 'одноразовые халаты' },
        },
        {
          id: 'Care/care_assistant/materials/hand_gel',
          localImage: 'Care/care_assistant/materials/hand_gel',
          translations: { en: 'hand gel', es: 'hand gel', pt: 'hand gel', fr: 'hand gel', de: 'hand gel', it: 'hand gel', nl: 'handgel', zh: '洗手液', ja: 'ハンドジェル', ru: 'гель для рук' },
        },
        {
          id: 'Care/care_assistant/materials/injections',
          localImage: 'Care/care_assistant/materials/injections',
          translations: { en: 'injections', es: 'injections', pt: 'injections', fr: 'injections', de: 'injections', it: 'injections', nl: 'injecties', zh: '注射', ja: '注射', ru: 'инъекции' },
        },
        {
          id: 'Care/care_assistant/materials/iv_fluids',
          localImage: 'Care/care_assistant/materials/iv_fluids',
          translations: { en: 'iv fluids', es: 'iv fluids', pt: 'iv fluids', fr: 'iv fluids', de: 'iv fluids', it: 'iv fluids', nl: 'infuusvloeistoffen', zh: '输液', ja: '点滴液', ru: 'инфузионные растворы' },
        },
        {
          id: 'Care/care_assistant/materials/labels',
          localImage: 'Care/care_assistant/materials/labels',
          translations: { en: 'labels', es: 'labels', pt: 'labels', fr: 'labels', de: 'labels', it: 'labels', nl: 'etiketten', zh: '标签', ja: 'ラベル', ru: 'этикетки' },
        },
        {
          id: 'Care/care_assistant/materials/masks',
          localImage: 'Care/care_assistant/materials/masks',
          translations: { en: 'masks', es: 'masks', pt: 'masks', fr: 'masks', de: 'masks', it: 'masks', nl: 'maskers', zh: '口罩', ja: 'マスク', ru: 'маски' },
        },
        {
          id: 'Care/care_assistant/materials/medical_forms',
          localImage: 'Care/care_assistant/materials/medical_forms',
          translations: { en: 'medical forms', es: 'medical forms', pt: 'medical forms', fr: 'medical forms', de: 'medical forms', it: 'medical forms', nl: 'medische formulieren', zh: '医疗表格', ja: '医療フォーム', ru: 'медицинские бланки' },
        },
        {
          id: 'Care/care_assistant/materials/medicine',
          localImage: 'Care/care_assistant/materials/medicine',
          translations: { en: 'medicine', es: 'medicina', pt: 'medicamento', fr: 'médicament', de: 'Medizin', it: 'medicina', nl: 'medicijn', zh: '药物', ja: '薬', ru: 'лекарство' },
        },
        {
          id: 'Care/care_assistant/materials/ointment',
          localImage: 'Care/care_assistant/materials/ointment',
          translations: { en: 'ointment', es: 'ointment', pt: 'ointment', fr: 'ointment', de: 'ointment', it: 'ointment', nl: 'zalf', zh: '药膏', ja: '軟膏', ru: 'мазь' },
        },
        {
          id: 'Care/care_assistant/materials/pads',
          localImage: 'Care/care_assistant/materials/pads',
          translations: { en: 'pads', es: 'pads', pt: 'pads', fr: 'pads', de: 'pads', it: 'pads', nl: 'kussens', zh: '垫子', ja: 'パッド', ru: 'подушечки' },
        },
        {
          id: 'Care/care_assistant/materials/patient_records',
          localImage: 'Care/care_assistant/materials/patient_records',
          translations: { en: 'patient records', es: 'patient records', pt: 'patient records', fr: 'patient records', de: 'patient records', it: 'patient records', nl: 'patiëntendossiers', zh: '病历', ja: '患者記録', ru: 'медицинские карты' },
        },
        {
          id: 'Care/care_assistant/materials/pillow_covers',
          localImage: 'Care/care_assistant/materials/pillow_covers',
          translations: { en: 'pillow covers', es: 'pillow covers', pt: 'pillow covers', fr: 'pillow covers', de: 'pillow covers', it: 'pillow covers', nl: 'kussenslopen', zh: '枕套', ja: '枕カバー', ru: 'наволочки' },
        },
        {
          id: 'Care/care_assistant/materials/pills',
          localImage: 'Care/care_assistant/materials/pills',
          translations: { en: 'pills', es: 'pastillas', pt: 'comprimidos', fr: 'pilules', de: 'Tabletten', it: 'pillole', nl: 'pillen', zh: '药片', ja: '薬', ru: 'таблетки' },
        },
        {
          id: 'Care/care_assistant/materials/plasters',
          localImage: 'Care/care_assistant/materials/plasters',
          translations: { en: 'plasters', es: 'plasters', pt: 'plasters', fr: 'plasters', de: 'plasters', it: 'plasters', nl: 'pleisters', zh: '创可贴', ja: '絆創膏', ru: 'пластыри' },
        },
        {
          id: 'Care/care_assistant/materials/prescriptions',
          localImage: 'Care/care_assistant/materials/prescriptions',
          translations: { en: 'prescriptions', es: 'prescriptions', pt: 'prescriptions', fr: 'prescriptions', de: 'prescriptions', it: 'prescriptions', nl: 'recepten', zh: '处方', ja: '処方箋', ru: 'рецепты' },
        },
        {
          id: 'Care/care_assistant/materials/protective_sheets',
          localImage: 'Care/care_assistant/materials/protective_sheets',
          translations: { en: 'protective sheets', es: 'protective sheets', pt: 'protective sheets', fr: 'protective sheets', de: 'protective sheets', it: 'protective sheets', nl: 'beschermingsfolie', zh: '保护膜', ja: '保護シート', ru: 'защитные листы' },
        },
        {
          id: 'Care/care_assistant/materials/reports',
          localImage: 'Care/care_assistant/materials/reports',
          translations: { en: 'reports', es: 'reports', pt: 'reports', fr: 'reports', de: 'reports', it: 'reports', nl: 'rapporten', zh: '报告', ja: 'レポート', ru: 'отчеты' },
        },
        {
          id: 'Care/care_assistant/materials/saline_solution',
          localImage: 'Care/care_assistant/materials/saline_solution',
          translations: { en: 'saline solution', es: 'saline solution', pt: 'saline solution', fr: 'saline solution', de: 'saline solution', it: 'saline solution', nl: 'zoutoplossing', zh: '生理盐水', ja: '生理食塩水', ru: 'физраствор' },
        },
        {
          id: 'Care/care_assistant/materials/shoe_covers',
          localImage: 'Care/care_assistant/materials/shoe_covers',
          translations: { en: 'shoe covers', es: 'shoe covers', pt: 'shoe covers', fr: 'shoe covers', de: 'shoe covers', it: 'shoe covers', nl: 'schoenhoezen', zh: '鞋套', ja: 'シューカバー', ru: 'бахилы' },
        },
        {
          id: 'Care/care_assistant/materials/soap',
          localImage: 'Care/care_assistant/materials/soap',
          translations: { en: 'soap', es: 'jabón', pt: 'sabão', fr: 'savon', de: 'Seife', it: 'sapone', nl: 'zeep', zh: '肥皂', ja: '石鹸', ru: 'мыло' },
        },
        {
          id: 'Care/care_assistant/materials/sterilizing_solution',
          localImage: 'Care/care_assistant/materials/sterilizing_solution',
          translations: { en: 'sterilizing solution', es: 'sterilizing solution', pt: 'sterilizing solution', fr: 'sterilizing solution', de: 'sterilizing solution', it: 'sterilizing solution', nl: 'sterilisatieoplossing', zh: '消毒液', ja: '滅菌液', ru: 'стерилизующий раствор' },
        },
        {
          id: 'Care/care_assistant/materials/stickers',
          localImage: 'Care/care_assistant/materials/stickers',
          translations: { en: 'stickers', es: 'stickers', pt: 'stickers', fr: 'stickers', de: 'stickers', it: 'stickers', nl: 'stickers', zh: '贴纸', ja: 'ステッカー', ru: 'наклейки' },
        },
        {
          id: 'Care/care_assistant/materials/swabs',
          localImage: 'Care/care_assistant/materials/swabs',
          translations: { en: 'swabs', es: 'swabs', pt: 'swabs', fr: 'swabs', de: 'swabs', it: 'swabs', nl: 'wattenstaafjes', zh: '棉签', ja: '綿棒', ru: 'ватные палочки' },
        },
        {
          id: 'Care/care_assistant/materials/syrup',
          localImage: 'Care/care_assistant/materials/syrup',
          translations: { en: 'syrup', es: 'syrup', pt: 'syrup', fr: 'syrup', de: 'syrup', it: 'syrup', nl: 'siroop', zh: '糖浆', ja: 'シロップ', ru: 'сироп' },
        },
        {
          id: 'Care/care_assistant/materials/tablets',
          localImage: 'Care/care_assistant/materials/tablets',
          translations: { en: 'tablets', es: 'tablets', pt: 'tablets', fr: 'tablets', de: 'tablets', it: 'tablets', nl: 'tabletten', zh: '药片', ja: '錠剤', ru: 'таблетки' },
        },
        {
          id: 'Care/care_assistant/materials/tags',
          localImage: 'Care/care_assistant/materials/tags',
          translations: { en: 'tags', es: 'tags', pt: 'tags', fr: 'tags', de: 'tags', it: 'tags', nl: 'labels', zh: '标签', ja: 'タグ', ru: 'теги' },
        },
        {
          id: 'Care/care_assistant/materials/tissues',
          localImage: 'Care/care_assistant/materials/tissues',
          translations: { en: 'tissues', es: 'tissues', pt: 'tissues', fr: 'tissues', de: 'tissues', it: 'tissues', nl: 'tissues', zh: '纸巾', ja: 'ティッシュ', ru: 'салфетки' },
        },
        {
          id: 'Care/care_assistant/materials/wipes',
          localImage: 'Care/care_assistant/materials/wipes',
          translations: { en: 'wipes', es: 'wipes', pt: 'wipes', fr: 'wipes', de: 'wipes', it: 'wipes', nl: 'doekjes', zh: '湿巾', ja: 'ウェットティッシュ', ru: 'влажные салфетки' },
        }
        ],
      }
      ],
    }
    ],
  },
  {
    id: 'cleaning_maintenance',
    name: { en: 'Cleaning & Maintenance', es: 'Limpieza', pt: 'Limpeza', fr: 'Nettoyage', de: 'Reinigung', it: 'Pulizie', nl: 'Schoonmaak & Onderhoud', zh: '清洁与维护', ja: '清掃・メンテナンス', ru: 'Уборка и техобслуживание' },
    icon: '🧹',
    imageUrl: 'https://images.pexels.com/photos/4239146/pexels-photo-4239146.jpeg?auto=compress&cs=tinysrgb&w=800',
    sectors: [
    {
      id: 'cleaner',
      name: { en: 'Cleaner', es: 'Limpiador', pt: 'Limpador', fr: 'Agent de nettoyage', de: 'Reinigungskraft', it: 'Addetto pulizie', nl: 'Schoonmaker', zh: '清洁工', ja: '清掃員', ru: 'Уборщик' },
      icon: '🧹',
      roles: [
      {
        id: 'tools',
        name: { en: 'Tools', es: 'Herramientas', pt: 'Ferramentas', fr: 'Outils', de: 'Werkzeuge', it: 'Attrezzi', nl: 'Gereedschap', zh: '工具', ja: '道具', ru: 'Инструменты' },
        icon: '🔧',
        items: [
        {
          id: 'cleaning_maintenance/cleaner/tools/broom',
          localImage: 'cleaning_maintenance/cleaner/tools/broom',
          translations: { en: 'broom', es: 'escoba', pt: 'vassoura', fr: 'balai', de: 'Besen', it: 'scopa', nl: 'bezem', zh: '扫帚', ja: 'ほうき', ru: 'метла' },
        },
        {
          id: 'cleaning_maintenance/cleaner/tools/brush',
          localImage: 'cleaning_maintenance/cleaner/tools/brush',
          translations: { en: 'brush', es: 'cepillo', pt: 'escova', fr: 'brosse', de: 'Bürste', it: 'spazzola', nl: 'borstel', zh: '刷子', ja: 'ブラシ', ru: 'кисть' },
        },
        {
          id: 'cleaning_maintenance/cleaner/tools/bucket',
          localImage: 'cleaning_maintenance/cleaner/tools/bucket',
          translations: { en: 'bucket', es: 'cubo', pt: 'balde', fr: 'seau', de: 'Eimer', it: 'secchio', nl: 'emmer', zh: '水桶', ja: 'バケツ', ru: 'ведро' },
        },
        {
          id: 'cleaning_maintenance/cleaner/tools/cart',
          localImage: 'cleaning_maintenance/cleaner/tools/cart',
          translations: { en: 'cart', es: 'carrito', pt: 'carrinho', fr: 'chariot', de: 'Wagen', it: 'carrello', nl: 'kar', zh: '推车', ja: 'カート', ru: 'тележка' },
        },
        {
          id: 'cleaning_maintenance/cleaner/tools/cleaner_tool',
          localImage: 'cleaning_maintenance/cleaner/tools/cleaner_tool',
          translations: { en: 'cleaner tool', es: 'cleaner tool', pt: 'cleaner tool', fr: 'cleaner tool', de: 'cleaner tool', it: 'cleaner tool', nl: 'reinigingsgereedschap', zh: '清洁工具', ja: '洗浄ツール', ru: 'инструмент для уборки' },
        },
        {
          id: 'cleaning_maintenance/cleaner/tools/cloth',
          localImage: 'cleaning_maintenance/cleaner/tools/cloth',
          translations: { en: 'cloth', es: 'trapo', pt: 'pano', fr: 'chiffon', de: 'Tuch', it: 'panno', nl: 'doek', zh: '布', ja: '布', ru: 'ткань' },
        },
        {
          id: 'cleaning_maintenance/cleaner/tools/duster',
          localImage: 'cleaning_maintenance/cleaner/tools/duster',
          translations: { en: 'duster', es: 'duster', pt: 'duster', fr: 'duster', de: 'duster', it: 'duster', nl: 'stofdoek', zh: '掸子', ja: 'はたき', ru: 'метелка для пыли' },
        },
        {
          id: 'cleaning_maintenance/cleaner/tools/gloves',
          localImage: 'cleaning_maintenance/cleaner/tools/gloves',
          translations: { en: 'gloves', es: 'guantes', pt: 'luvas', fr: 'gants', de: 'Handschuhe', it: 'guanti', nl: 'handschoenen', zh: '手套', ja: '手袋', ru: 'перчатки' },
        },
        {
          id: 'cleaning_maintenance/cleaner/tools/handle',
          localImage: 'cleaning_maintenance/cleaner/tools/handle',
          translations: { en: 'handle', es: 'handle', pt: 'handle', fr: 'handle', de: 'handle', it: 'handle', nl: 'handvat', zh: '把手', ja: 'ハンドル', ru: 'рукоятка' },
        },
        {
          id: 'cleaning_maintenance/cleaner/tools/hose',
          localImage: 'cleaning_maintenance/cleaner/tools/hose',
          translations: { en: 'hose', es: 'manguera', pt: 'mangueira', fr: 'tuyau', de: 'Schlauch', it: 'tubo', nl: 'slang', zh: '软管', ja: 'ホース', ru: 'шланг' },
        },
        {
          id: 'cleaning_maintenance/cleaner/tools/mask',
          localImage: 'cleaning_maintenance/cleaner/tools/mask',
          translations: { en: 'mask', es: 'mascarilla', pt: 'máscara', fr: 'masque', de: 'Maske', it: 'maschera', nl: 'masker', zh: '口罩', ja: 'マスク', ru: 'маска' },
        },
        {
          id: 'cleaning_maintenance/cleaner/tools/mop',
          localImage: 'cleaning_maintenance/cleaner/tools/mop',
          translations: { en: 'mop', es: 'fregona', pt: 'esfregão', fr: 'serpillière', de: 'Mop', it: 'mop', nl: 'zwabber', zh: '拖把', ja: 'モップ', ru: 'швабра' },
        },
        {
          id: 'cleaning_maintenance/cleaner/tools/pad',
          localImage: 'cleaning_maintenance/cleaner/tools/pad',
          translations: { en: 'pad', es: 'pad', pt: 'pad', fr: 'pad', de: 'pad', it: 'pad', nl: 'kussen', zh: '垫子', ja: 'パッド', ru: 'подушечка' },
        },
        {
          id: 'cleaning_maintenance/cleaner/tools/roller',
          localImage: 'cleaning_maintenance/cleaner/tools/roller',
          translations: { en: 'roller', es: 'rodillo', pt: 'rolo', fr: 'rouleau', de: 'Rolle', it: 'rullo', nl: 'roller', zh: '滚筒', ja: 'ローラー', ru: 'валик' },
        },
        {
          id: 'cleaning_maintenance/cleaner/tools/scraper',
          localImage: 'cleaning_maintenance/cleaner/tools/scraper',
          translations: { en: 'scraper', es: 'scraper', pt: 'scraper', fr: 'scraper', de: 'scraper', it: 'scraper', nl: 'schraper', zh: '刮刀', ja: 'スクレーパー', ru: 'скребок' },
        },
        {
          id: 'cleaning_maintenance/cleaner/tools/sponge',
          localImage: 'cleaning_maintenance/cleaner/tools/sponge',
          translations: { en: 'sponge', es: 'esponja', pt: 'esponja', fr: 'éponge', de: 'Schwamm', it: 'spugna', nl: 'spons', zh: '海绵', ja: 'スポンジ', ru: 'губка' },
        },
        {
          id: 'cleaning_maintenance/cleaner/tools/sprayer',
          localImage: 'cleaning_maintenance/cleaner/tools/sprayer',
          translations: { en: 'sprayer', es: 'pulverizador', pt: 'pulverizador', fr: 'pulvérisateur', de: 'Sprüher', it: 'spruzzatore', nl: 'sproeier', zh: '喷雾器', ja: 'スプレイヤー', ru: 'опрыскиватель' },
        },
        {
          id: 'cleaning_maintenance/cleaner/tools/squeegee',
          localImage: 'cleaning_maintenance/cleaner/tools/squeegee',
          translations: { en: 'squeegee', es: 'squeegee', pt: 'squeegee', fr: 'squeegee', de: 'squeegee', it: 'squeegee', nl: 'trekker', zh: '刮水器', ja: 'スクイージー', ru: 'стеклоочиститель' },
        },
        {
          id: 'cleaning_maintenance/cleaner/tools/trolley',
          localImage: 'cleaning_maintenance/cleaner/tools/trolley',
          translations: { en: 'trolley', es: 'carrito', pt: 'carrinho', fr: 'chariot', de: 'Trolley', it: 'carrello', nl: 'trolley', zh: '手推车', ja: 'トロリー', ru: 'тележка' },
        },
        {
          id: 'cleaning_maintenance/cleaner/tools/vacuum',
          localImage: 'cleaning_maintenance/cleaner/tools/vacuum',
          translations: { en: 'vacuum', es: 'vacuum', pt: 'vacuum', fr: 'vacuum', de: 'vacuum', it: 'vacuum', nl: 'stofzuiger', zh: '真空吸尘器', ja: '掃除機', ru: 'пылесос' },
        }
        ],
      },
      {
        id: 'materials',
        name: { en: 'Materials', es: 'Materiales', pt: 'Materiais', fr: 'Matériaux', de: 'Materialien', it: 'Materiali', nl: 'Materialen', zh: '材料', ja: '材料', ru: 'Материалы' },
        icon: '📦',
        items: [
        {
          id: 'cleaning_maintenance/cleaner/materials/agent',
          localImage: 'cleaning_maintenance/cleaner/materials/agent',
          translations: { en: 'agent', es: 'agent', pt: 'agent', fr: 'agent', de: 'agent', it: 'agent', nl: 'middel', zh: '试剂', ja: '薬剤', ru: 'агент' },
        },
        {
          id: 'cleaning_maintenance/cleaner/materials/bleach',
          localImage: 'cleaning_maintenance/cleaner/materials/bleach',
          translations: { en: 'bleach', es: 'lejía', pt: 'alvejante', fr: 'eau de javel', de: 'Bleichmittel', it: 'candeggina', nl: 'bleekmiddel', zh: '漂白剂', ja: '漂白剤', ru: 'отбеливатель' },
        },
        {
          id: 'cleaning_maintenance/cleaner/materials/bleach_mix',
          localImage: 'cleaning_maintenance/cleaner/materials/bleach_mix',
          translations: { en: 'bleach mix', es: 'bleach mix', pt: 'bleach mix', fr: 'bleach mix', de: 'bleach mix', it: 'bleach mix', nl: 'bleekoplossing', zh: '漂白液', ja: '漂白剤ミックス', ru: 'раствор отбеливателя' },
        },
        {
          id: 'cleaning_maintenance/cleaner/materials/chemical',
          localImage: 'cleaning_maintenance/cleaner/materials/chemical',
          translations: { en: 'chemical', es: 'chemical', pt: 'chemical', fr: 'chemical', de: 'chemical', it: 'chemical', nl: 'chemicalie', zh: '化学品', ja: '化学物質', ru: 'химическое вещество' },
        },
        {
          id: 'cleaning_maintenance/cleaner/materials/chemical_mix',
          localImage: 'cleaning_maintenance/cleaner/materials/chemical_mix',
          translations: { en: 'chemical mix', es: 'chemical mix', pt: 'chemical mix', fr: 'chemical mix', de: 'chemical mix', it: 'chemical mix', nl: 'chemisch mengsel', zh: '化学混合物', ja: '化学物質ミックス', ru: 'химическая смесь' },
        },
        {
          id: 'cleaning_maintenance/cleaner/materials/cleaner_liquid',
          localImage: 'cleaning_maintenance/cleaner/materials/cleaner_liquid',
          translations: { en: 'cleaner liquid', es: 'cleaner liquid', pt: 'cleaner liquid', fr: 'cleaner liquid', de: 'cleaner liquid', it: 'cleaner liquid', nl: 'reinigingsvloeistof', zh: '清洁液', ja: '洗浄液', ru: 'жидкое чистящее средство' },
        },
        {
          id: 'cleaning_maintenance/cleaner/materials/cleaner_mix',
          localImage: 'cleaning_maintenance/cleaner/materials/cleaner_mix',
          translations: { en: 'cleaner mix', es: 'cleaner mix', pt: 'cleaner mix', fr: 'cleaner mix', de: 'cleaner mix', it: 'cleaner mix', nl: 'reinigingsmengsel', zh: '清洁混合物', ja: '洗浄ミックス', ru: 'чистящая смесь' },
        },
        {
          id: 'cleaning_maintenance/cleaner/materials/coating',
          localImage: 'cleaning_maintenance/cleaner/materials/coating',
          translations: { en: 'coating', es: 'coating', pt: 'coating', fr: 'coating', de: 'coating', it: 'coating', nl: 'coating', zh: '涂层', ja: 'コーティング', ru: 'покрытие' },
        },
        {
          id: 'cleaning_maintenance/cleaner/materials/compound',
          localImage: 'cleaning_maintenance/cleaner/materials/compound',
          translations: { en: 'compound', es: 'compound', pt: 'compound', fr: 'compound', de: 'compound', it: 'compound', nl: 'compound', zh: '化合物', ja: 'コンパウンド', ru: 'состав' },
        },
        {
          id: 'cleaning_maintenance/cleaner/materials/degreaser',
          localImage: 'cleaning_maintenance/cleaner/materials/degreaser',
          translations: { en: 'degreaser', es: 'degreaser', pt: 'degreaser', fr: 'degreaser', de: 'degreaser', it: 'degreaser', nl: 'ontvetter', zh: '脱脂剂', ja: '脱脂剤', ru: 'обезжириватель' },
        },
        {
          id: 'cleaning_maintenance/cleaner/materials/detergent',
          localImage: 'cleaning_maintenance/cleaner/materials/detergent',
          translations: { en: 'detergent', es: 'detergente', pt: 'detergente', fr: 'détergent', de: 'Reinigungsmittel', it: 'detergente', nl: 'wasmiddel', zh: '洗涤剂', ja: '洗剤', ru: 'моющее средство' },
        },
        {
          id: 'cleaning_maintenance/cleaner/materials/disinfectant',
          localImage: 'cleaning_maintenance/cleaner/materials/disinfectant',
          translations: { en: 'disinfectant', es: 'desinfectante', pt: 'desinfetante', fr: 'désinfectant', de: 'Desinfektionsmittel', it: 'disinfettante', nl: 'ontsmettingsmiddel', zh: '消毒剂', ja: '消毒剤', ru: 'дезинфектант' },
        },
        {
          id: 'cleaning_maintenance/cleaner/materials/disinfectant_mix',
          localImage: 'cleaning_maintenance/cleaner/materials/disinfectant_mix',
          translations: { en: 'disinfectant mix', es: 'disinfectant mix', pt: 'disinfectant mix', fr: 'disinfectant mix', de: 'disinfectant mix', it: 'disinfectant mix', nl: 'ontsmettingsmengsel', zh: '消毒液', ja: '消毒剤ミックス', ru: 'дезинфицирующий раствор' },
        },
        {
          id: 'cleaning_maintenance/cleaner/materials/floor_cleaner',
          localImage: 'cleaning_maintenance/cleaner/materials/floor_cleaner',
          translations: { en: 'floor cleaner', es: 'floor cleaner', pt: 'floor cleaner', fr: 'floor cleaner', de: 'floor cleaner', it: 'floor cleaner', nl: 'vloerreiniger', zh: '地板清洁剂', ja: '床洗浄剤', ru: 'очиститель для пола' },
        },
        {
          id: 'cleaning_maintenance/cleaner/materials/foam',
          localImage: 'cleaning_maintenance/cleaner/materials/foam',
          translations: { en: 'foam', es: 'foam', pt: 'foam', fr: 'foam', de: 'foam', it: 'foam', nl: 'schuim', zh: '泡沫', ja: 'フォーム', ru: 'пена' },
        },
        {
          id: 'cleaning_maintenance/cleaner/materials/gel',
          localImage: 'cleaning_maintenance/cleaner/materials/gel',
          translations: { en: 'gel', es: 'gel', pt: 'gel', fr: 'gel', de: 'gel', it: 'gel', nl: 'gel', zh: '凝胶', ja: 'ジェル', ru: 'гель' },
        },
        {
          id: 'cleaning_maintenance/cleaner/materials/glass_cleaner',
          localImage: 'cleaning_maintenance/cleaner/materials/glass_cleaner',
          translations: { en: 'glass cleaner', es: 'glass cleaner', pt: 'glass cleaner', fr: 'glass cleaner', de: 'glass cleaner', it: 'glass cleaner', nl: 'glasreiniger', zh: '玻璃清洁剂', ja: 'ガラスクリーナー', ru: 'очиститель для стекол' },
        },
        {
          id: 'cleaning_maintenance/cleaner/materials/liquid',
          localImage: 'cleaning_maintenance/cleaner/materials/liquid',
          translations: { en: 'liquid', es: 'liquid', pt: 'liquid', fr: 'liquid', de: 'liquid', it: 'liquid', nl: 'vloeistof', zh: '液体', ja: '液体', ru: 'жидкость' },
        },
        {
          id: 'cleaning_maintenance/cleaner/materials/paste',
          localImage: 'cleaning_maintenance/cleaner/materials/paste',
          translations: { en: 'paste', es: 'paste', pt: 'paste', fr: 'paste', de: 'paste', it: 'paste', nl: 'pasta', zh: '糊', ja: 'ペースト', ru: 'паста' },
        },
        {
          id: 'cleaning_maintenance/cleaner/materials/polish',
          localImage: 'cleaning_maintenance/cleaner/materials/polish',
          translations: { en: 'polish', es: 'pulimento', pt: 'polimento', fr: 'polish', de: 'Politur', it: 'lucido', nl: 'poetsmiddel', zh: '抛光剂', ja: 'ポリッシュ', ru: 'полироль' },
        },
        {
          id: 'cleaning_maintenance/cleaner/materials/powder',
          localImage: 'cleaning_maintenance/cleaner/materials/powder',
          translations: { en: 'powder', es: 'powder', pt: 'powder', fr: 'powder', de: 'powder', it: 'powder', nl: 'poeder', zh: '粉末', ja: 'パウダー', ru: 'порошок' },
        },
        {
          id: 'cleaning_maintenance/cleaner/materials/remover',
          localImage: 'cleaning_maintenance/cleaner/materials/remover',
          translations: { en: 'remover', es: 'remover', pt: 'remover', fr: 'remover', de: 'remover', it: 'remover', nl: 'verwijderaar', zh: '去除剂', ja: 'リムーバー', ru: 'средство для удаления' },
        },
        {
          id: 'cleaning_maintenance/cleaner/materials/sanitizer',
          localImage: 'cleaning_maintenance/cleaner/materials/sanitizer',
          translations: { en: 'sanitizer', es: 'sanitizer', pt: 'sanitizer', fr: 'sanitizer', de: 'sanitizer', it: 'sanitizer', nl: 'ontsmettingsmiddel', zh: '消毒液', ja: 'サニタイザー', ru: 'дезинфицирующее средство' },
        },
        {
          id: 'cleaning_maintenance/cleaner/materials/soap',
          localImage: 'cleaning_maintenance/cleaner/materials/soap',
          translations: { en: 'soap', es: 'jabón', pt: 'sabão', fr: 'savon', de: 'Seife', it: 'sapone', nl: 'zeep', zh: '肥皂', ja: '石鹸', ru: 'мыло' },
        },
        {
          id: 'cleaning_maintenance/cleaner/materials/soap_mix',
          localImage: 'cleaning_maintenance/cleaner/materials/soap_mix',
          translations: { en: 'soap mix', es: 'soap mix', pt: 'soap mix', fr: 'soap mix', de: 'soap mix', it: 'soap mix', nl: 'zeepmengsel', zh: '皂液', ja: 'ソープミックス', ru: 'мыльный раствор' },
        },
        {
          id: 'cleaning_maintenance/cleaner/materials/solution',
          localImage: 'cleaning_maintenance/cleaner/materials/solution',
          translations: { en: 'solution', es: 'solution', pt: 'solution', fr: 'solution', de: 'solution', it: 'solution', nl: 'oplossing', zh: '溶液', ja: '溶液', ru: 'раствор' },
        },
        {
          id: 'cleaning_maintenance/cleaner/materials/solution_mix',
          localImage: 'cleaning_maintenance/cleaner/materials/solution_mix',
          translations: { en: 'solution mix', es: 'solution mix', pt: 'solution mix', fr: 'solution mix', de: 'solution mix', it: 'solution mix', nl: 'oplossingsmengsel', zh: '溶液混合物', ja: '溶液ミックス', ru: 'смешанный раствор' },
        },
        {
          id: 'cleaning_maintenance/cleaner/materials/spray',
          localImage: 'cleaning_maintenance/cleaner/materials/spray',
          translations: { en: 'spray', es: 'spray', pt: 'spray', fr: 'spray', de: 'Spray', it: 'spray', nl: 'spray', zh: '喷雾', ja: 'スプレー', ru: 'спрей' },
        },
        {
          id: 'cleaning_maintenance/cleaner/materials/treatment',
          localImage: 'cleaning_maintenance/cleaner/materials/treatment',
          translations: { en: 'treatment', es: 'treatment', pt: 'treatment', fr: 'treatment', de: 'treatment', it: 'treatment', nl: 'behandeling', zh: '处理剂', ja: 'トリートメント', ru: 'обработка' },
        },
        {
          id: 'cleaning_maintenance/cleaner/materials/wax',
          localImage: 'cleaning_maintenance/cleaner/materials/wax',
          translations: { en: 'wax', es: 'cera', pt: 'cera', fr: 'cire', de: 'Wachs', it: 'cera', nl: 'was', zh: '蜡', ja: 'ワックス', ru: 'воск' },
        }
        ],
      }
      ],
    },
    {
      id: 'laundry_worker',
      name: { en: 'Laundry Worker', es: 'Lavandero', pt: 'Lavadeiro', fr: 'Blanchisseur', de: 'Wäschereimitarbeiter', it: 'Lavandaio', nl: 'Wasserijmedewerker', zh: '洗衣工', ja: '洗濯作業員', ru: 'Работник прачечной' },
      icon: '👕',
      roles: [
      {
        id: 'tools',
        name: { en: 'Tools', es: 'Herramientas', pt: 'Ferramentas', fr: 'Outils', de: 'Werkzeuge', it: 'Attrezzi', nl: 'Gereedschap', zh: '工具', ja: '道具', ru: 'Инструменты' },
        icon: '🔧',
        items: [
        {
          id: 'cleaning_maintenance/laundry_worker/tools/bag',
          localImage: 'cleaning_maintenance/laundry_worker/tools/bag',
          translations: { en: 'bag', es: 'bolsa', pt: 'saco', fr: 'sac', de: 'Tasche', it: 'borsa', nl: 'tas', zh: '袋子', ja: 'バッグ', ru: 'сумка' },
        },
        {
          id: 'cleaning_maintenance/laundry_worker/tools/basket',
          localImage: 'cleaning_maintenance/laundry_worker/tools/basket',
          translations: { en: 'basket', es: 'cesta', pt: 'cesto', fr: 'panier', de: 'Korb', it: 'cesto', nl: 'mand', zh: '篮子', ja: 'バスケット', ru: 'корзина' },
        },
        {
          id: 'cleaning_maintenance/laundry_worker/tools/bin',
          localImage: 'cleaning_maintenance/laundry_worker/tools/bin',
          translations: { en: 'bin', es: 'cubo de basura', pt: 'lixeira', fr: 'poubelle', de: 'Mülleimer', it: 'bidone', nl: 'prullenbak', zh: '垃圾桶', ja: 'ビン', ru: 'мусорное ведро' },
        },
        {
          id: 'cleaning_maintenance/laundry_worker/tools/brush',
          localImage: 'cleaning_maintenance/laundry_worker/tools/brush',
          translations: { en: 'brush', es: 'cepillo', pt: 'escova', fr: 'brosse', de: 'Bürste', it: 'spazzola', nl: 'borstel', zh: '刷子', ja: 'ブラシ', ru: 'кисть' },
        },
        {
          id: 'cleaning_maintenance/laundry_worker/tools/cart',
          localImage: 'cleaning_maintenance/laundry_worker/tools/cart',
          translations: { en: 'cart', es: 'carrito', pt: 'carrinho', fr: 'chariot', de: 'Wagen', it: 'carrello', nl: 'kar', zh: '推车', ja: 'カート', ru: 'тележка' },
        },
        {
          id: 'cleaning_maintenance/laundry_worker/tools/clip',
          localImage: 'cleaning_maintenance/laundry_worker/tools/clip',
          translations: { en: 'clip', es: 'clip', pt: 'clip', fr: 'clip', de: 'clip', it: 'clip', nl: 'clip', zh: '夹子', ja: 'クリップ', ru: 'зажим' },
        },
        {
          id: 'cleaning_maintenance/laundry_worker/tools/container',
          localImage: 'cleaning_maintenance/laundry_worker/tools/container',
          translations: { en: 'container', es: 'contenedor', pt: 'recipiente', fr: 'conteneur', de: 'Behälter', it: 'contenitore', nl: 'container', zh: '容器', ja: 'コンテナ', ru: 'контейнер' },
        },
        {
          id: 'cleaning_maintenance/laundry_worker/tools/dryer',
          localImage: 'cleaning_maintenance/laundry_worker/tools/dryer',
          translations: { en: 'dryer', es: 'dryer', pt: 'dryer', fr: 'dryer', de: 'dryer', it: 'dryer', nl: 'droger', zh: '烘干机', ja: '乾燥機', ru: 'сушилка' },
        },
        {
          id: 'cleaning_maintenance/laundry_worker/tools/folding_table',
          localImage: 'cleaning_maintenance/laundry_worker/tools/folding_table',
          translations: { en: 'folding table', es: 'folding table', pt: 'folding table', fr: 'folding table', de: 'folding table', it: 'folding table', nl: 'klaptafel', zh: '折叠桌', ja: '折りたたみテーブル', ru: 'складной стол' },
        },
        {
          id: 'cleaning_maintenance/laundry_worker/tools/hanger',
          localImage: 'cleaning_maintenance/laundry_worker/tools/hanger',
          translations: { en: 'hanger', es: 'hanger', pt: 'hanger', fr: 'hanger', de: 'hanger', it: 'hanger', nl: 'kleerhanger', zh: '衣架', ja: 'ハンガー', ru: 'вешалка' },
        },
        {
          id: 'cleaning_maintenance/laundry_worker/tools/iron',
          localImage: 'cleaning_maintenance/laundry_worker/tools/iron',
          translations: { en: 'iron', es: 'iron', pt: 'iron', fr: 'iron', de: 'iron', it: 'iron', nl: 'strijkijzer', zh: '熨斗', ja: 'アイロン', ru: 'утюг' },
        },
        {
          id: 'cleaning_maintenance/laundry_worker/tools/ironing_board',
          localImage: 'cleaning_maintenance/laundry_worker/tools/ironing_board',
          translations: { en: 'ironing board', es: 'ironing board', pt: 'ironing board', fr: 'ironing board', de: 'ironing board', it: 'ironing board', nl: 'strijkplank', zh: '熨衣板', ja: 'アイロン台', ru: 'гладильная доска' },
        },
        {
          id: 'cleaning_maintenance/laundry_worker/tools/net',
          localImage: 'cleaning_maintenance/laundry_worker/tools/net',
          translations: { en: 'net', es: 'red', pt: 'rede', fr: 'filet', de: 'Netz', it: 'rete', nl: 'net', zh: '网', ja: 'ネット', ru: 'сетка' },
        },
        {
          id: 'cleaning_maintenance/laundry_worker/tools/press_machine',
          localImage: 'cleaning_maintenance/laundry_worker/tools/press_machine',
          translations: { en: 'press machine', es: 'press machine', pt: 'press machine', fr: 'press machine', de: 'press machine', it: 'press machine', nl: 'persmachine', zh: '压力机', ja: 'プレス機', ru: 'прессовочная машина' },
        },
        {
          id: 'cleaning_maintenance/laundry_worker/tools/rack',
          localImage: 'cleaning_maintenance/laundry_worker/tools/rack',
          translations: { en: 'rack', es: 'estante', pt: 'prateleira', fr: 'étagère', de: 'Regal', it: 'scaffale', nl: 'rek', zh: '货架', ja: 'ラック', ru: 'стеллаж' },
        },
        {
          id: 'cleaning_maintenance/laundry_worker/tools/roller',
          localImage: 'cleaning_maintenance/laundry_worker/tools/roller',
          translations: { en: 'roller', es: 'rodillo', pt: 'rolo', fr: 'rouleau', de: 'Rolle', it: 'rullo', nl: 'roller', zh: '滚筒', ja: 'ローラー', ru: 'валик' },
        },
        {
          id: 'cleaning_maintenance/laundry_worker/tools/sorter',
          localImage: 'cleaning_maintenance/laundry_worker/tools/sorter',
          translations: { en: 'sorter', es: 'sorter', pt: 'sorter', fr: 'sorter', de: 'sorter', it: 'sorter', nl: 'sorteerder', zh: '分类机', ja: 'ソーター', ru: 'сортировщик' },
        },
        {
          id: 'cleaning_maintenance/laundry_worker/tools/steamer',
          localImage: 'cleaning_maintenance/laundry_worker/tools/steamer',
          translations: { en: 'steamer', es: 'steamer', pt: 'steamer', fr: 'steamer', de: 'steamer', it: 'steamer', nl: 'stomer', zh: '蒸锅', ja: 'スチーマー', ru: 'пароварка' },
        },
        {
          id: 'cleaning_maintenance/laundry_worker/tools/trolley',
          localImage: 'cleaning_maintenance/laundry_worker/tools/trolley',
          translations: { en: 'trolley', es: 'carrito', pt: 'carrinho', fr: 'chariot', de: 'Trolley', it: 'carrello', nl: 'trolley', zh: '手推车', ja: 'トロリー', ru: 'тележка' },
        },
        {
          id: 'cleaning_maintenance/laundry_worker/tools/washing_machine',
          localImage: 'cleaning_maintenance/laundry_worker/tools/washing_machine',
          translations: { en: 'washing machine', es: 'washing machine', pt: 'washing machine', fr: 'washing machine', de: 'washing machine', it: 'washing machine', nl: 'wasmachine', zh: '洗衣机', ja: '洗濯機', ru: 'стиральная машина' },
        }
        ],
      },
      {
        id: 'materials',
        name: { en: 'Materials', es: 'Materiales', pt: 'Materiais', fr: 'Matériaux', de: 'Materialien', it: 'Materiali', nl: 'Materialen', zh: '材料', ja: '材料', ru: 'Материалы' },
        icon: '📦',
        items: [
        {
          id: 'cleaning_maintenance/laundry_worker/materials/additive',
          localImage: 'cleaning_maintenance/laundry_worker/materials/additive',
          translations: { en: 'additive', es: 'additive', pt: 'additive', fr: 'additive', de: 'additive', it: 'additive', nl: 'additief', zh: '添加剂', ja: '添加剤', ru: 'добавка' },
        },
        {
          id: 'cleaning_maintenance/laundry_worker/materials/agent',
          localImage: 'cleaning_maintenance/laundry_worker/materials/agent',
          translations: { en: 'agent', es: 'agent', pt: 'agent', fr: 'agent', de: 'agent', it: 'agent', nl: 'middel', zh: '试剂', ja: '薬剤', ru: 'агент' },
        },
        {
          id: 'cleaning_maintenance/laundry_worker/materials/bleach',
          localImage: 'cleaning_maintenance/laundry_worker/materials/bleach',
          translations: { en: 'bleach', es: 'lejía', pt: 'alvejante', fr: 'eau de javel', de: 'Bleichmittel', it: 'candeggina', nl: 'bleekmiddel', zh: '漂白剂', ja: '漂白剤', ru: 'отбеливатель' },
        },
        {
          id: 'cleaning_maintenance/laundry_worker/materials/booster',
          localImage: 'cleaning_maintenance/laundry_worker/materials/booster',
          translations: { en: 'booster', es: 'booster', pt: 'booster', fr: 'booster', de: 'booster', it: 'booster', nl: 'booster', zh: '增压器', ja: 'ブースター', ru: 'бустер' },
        },
        {
          id: 'cleaning_maintenance/laundry_worker/materials/capsule',
          localImage: 'cleaning_maintenance/laundry_worker/materials/capsule',
          translations: { en: 'capsule', es: 'capsule', pt: 'capsule', fr: 'capsule', de: 'capsule', it: 'capsule', nl: 'capsule', zh: '胶囊', ja: 'カプセル', ru: 'капсула' },
        },
        {
          id: 'cleaning_maintenance/laundry_worker/materials/chemical',
          localImage: 'cleaning_maintenance/laundry_worker/materials/chemical',
          translations: { en: 'chemical', es: 'chemical', pt: 'chemical', fr: 'chemical', de: 'chemical', it: 'chemical', nl: 'chemicalie', zh: '化学品', ja: '化学物質', ru: 'химическое вещество' },
        },
        {
          id: 'cleaning_maintenance/laundry_worker/materials/cleaner',
          localImage: 'cleaning_maintenance/laundry_worker/materials/cleaner',
          translations: { en: 'cleaner', es: 'cleaner', pt: 'cleaner', fr: 'cleaner', de: 'cleaner', it: 'cleaner', nl: 'reiniger', zh: '清洁剂', ja: '洗浄剤', ru: 'чистящее средство' },
        },
        {
          id: 'cleaning_maintenance/laundry_worker/materials/conditioner',
          localImage: 'cleaning_maintenance/laundry_worker/materials/conditioner',
          translations: { en: 'conditioner', es: 'conditioner', pt: 'conditioner', fr: 'conditioner', de: 'conditioner', it: 'conditioner', nl: 'conditioner', zh: '护发素', ja: 'コンディショナー', ru: 'кондиционер' },
        },
        {
          id: 'cleaning_maintenance/laundry_worker/materials/detergent',
          localImage: 'cleaning_maintenance/laundry_worker/materials/detergent',
          translations: { en: 'detergent', es: 'detergente', pt: 'detergente', fr: 'détergent', de: 'Reinigungsmittel', it: 'detergente', nl: 'wasmiddel', zh: '洗涤剂', ja: '洗剤', ru: 'моющее средство' },
        },
        {
          id: 'cleaning_maintenance/laundry_worker/materials/enzyme',
          localImage: 'cleaning_maintenance/laundry_worker/materials/enzyme',
          translations: { en: 'enzyme', es: 'enzyme', pt: 'enzyme', fr: 'enzyme', de: 'enzyme', it: 'enzyme', nl: 'enzym', zh: '酶', ja: '酵素', ru: 'фермент' },
        },
        {
          id: 'cleaning_maintenance/laundry_worker/materials/fabric_softener',
          localImage: 'cleaning_maintenance/laundry_worker/materials/fabric_softener',
          translations: { en: 'fabric softener', es: 'fabric softener', pt: 'fabric softener', fr: 'fabric softener', de: 'fabric softener', it: 'fabric softener', nl: 'wasverzachter', zh: '织物柔顺剂', ja: '柔軟剤', ru: 'кондиционер для белья' },
        },
        {
          id: 'cleaning_maintenance/laundry_worker/materials/formula',
          localImage: 'cleaning_maintenance/laundry_worker/materials/formula',
          translations: { en: 'formula', es: 'formula', pt: 'formula', fr: 'formula', de: 'formula', it: 'formula', nl: 'formule', zh: '配方', ja: 'フォーミュラ', ru: 'формула' },
        },
        {
          id: 'cleaning_maintenance/laundry_worker/materials/fragrance',
          localImage: 'cleaning_maintenance/laundry_worker/materials/fragrance',
          translations: { en: 'fragrance', es: 'fragrance', pt: 'fragrance', fr: 'fragrance', de: 'fragrance', it: 'fragrance', nl: 'geur', zh: '香味', ja: 'フレグランス', ru: 'аромат' },
        },
        {
          id: 'cleaning_maintenance/laundry_worker/materials/gel',
          localImage: 'cleaning_maintenance/laundry_worker/materials/gel',
          translations: { en: 'gel', es: 'gel', pt: 'gel', fr: 'gel', de: 'gel', it: 'gel', nl: 'gel', zh: '凝胶', ja: 'ジェル', ru: 'гель' },
        },
        {
          id: 'cleaning_maintenance/laundry_worker/materials/liquid',
          localImage: 'cleaning_maintenance/laundry_worker/materials/liquid',
          translations: { en: 'liquid', es: 'liquid', pt: 'liquid', fr: 'liquid', de: 'liquid', it: 'liquid', nl: 'vloeistof', zh: '液体', ja: '液体', ru: 'жидкость' },
        },
        {
          id: 'cleaning_maintenance/laundry_worker/materials/mix',
          localImage: 'cleaning_maintenance/laundry_worker/materials/mix',
          translations: { en: 'mix', es: 'mix', pt: 'mix', fr: 'mix', de: 'mix', it: 'mix', nl: 'mengsel', zh: '混合物', ja: 'ミックス', ru: 'смесь' },
        },
        {
          id: 'cleaning_maintenance/laundry_worker/materials/powder',
          localImage: 'cleaning_maintenance/laundry_worker/materials/powder',
          translations: { en: 'powder', es: 'powder', pt: 'powder', fr: 'powder', de: 'powder', it: 'powder', nl: 'poeder', zh: '粉末', ja: 'パウダー', ru: 'порошок' },
        },
        {
          id: 'cleaning_maintenance/laundry_worker/materials/remover',
          localImage: 'cleaning_maintenance/laundry_worker/materials/remover',
          translations: { en: 'remover', es: 'remover', pt: 'remover', fr: 'remover', de: 'remover', it: 'remover', nl: 'verwijderaar', zh: '去除剂', ja: 'リムーバー', ru: 'средство для удаления' },
        },
        {
          id: 'cleaning_maintenance/laundry_worker/materials/rinse',
          localImage: 'cleaning_maintenance/laundry_worker/materials/rinse',
          translations: { en: 'rinse', es: 'rinse', pt: 'rinse', fr: 'rinse', de: 'rinse', it: 'rinse', nl: 'spoelmiddel', zh: '漂洗液', ja: 'リンス', ru: 'ополаскиватель' },
        },
        {
          id: 'cleaning_maintenance/laundry_worker/materials/sanitizer',
          localImage: 'cleaning_maintenance/laundry_worker/materials/sanitizer',
          translations: { en: 'sanitizer', es: 'sanitizer', pt: 'sanitizer', fr: 'sanitizer', de: 'sanitizer', it: 'sanitizer', nl: 'ontsmettingsmiddel', zh: '消毒液', ja: 'サニタイザー', ru: 'дезинфицирующее средство' },
        },
        {
          id: 'cleaning_maintenance/laundry_worker/materials/soap',
          localImage: 'cleaning_maintenance/laundry_worker/materials/soap',
          translations: { en: 'soap', es: 'jabón', pt: 'sabão', fr: 'savon', de: 'Seife', it: 'sapone', nl: 'zeep', zh: '肥皂', ja: '石鹸', ru: 'мыло' },
        },
        {
          id: 'cleaning_maintenance/laundry_worker/materials/softener',
          localImage: 'cleaning_maintenance/laundry_worker/materials/softener',
          translations: { en: 'softener', es: 'softener', pt: 'softener', fr: 'softener', de: 'softener', it: 'softener', nl: 'verzachter', zh: '软化剂', ja: 'ソフトナー', ru: 'смягчитель' },
        },
        {
          id: 'cleaning_maintenance/laundry_worker/materials/solution',
          localImage: 'cleaning_maintenance/laundry_worker/materials/solution',
          translations: { en: 'solution', es: 'solution', pt: 'solution', fr: 'solution', de: 'solution', it: 'solution', nl: 'oplossing', zh: '溶液', ja: '溶液', ru: 'раствор' },
        },
        {
          id: 'cleaning_maintenance/laundry_worker/materials/spray',
          localImage: 'cleaning_maintenance/laundry_worker/materials/spray',
          translations: { en: 'spray', es: 'spray', pt: 'spray', fr: 'spray', de: 'Spray', it: 'spray', nl: 'spray', zh: '喷雾', ja: 'スプレー', ru: 'спрей' },
        },
        {
          id: 'cleaning_maintenance/laundry_worker/materials/stain_remover',
          localImage: 'cleaning_maintenance/laundry_worker/materials/stain_remover',
          translations: { en: 'stain remover', es: 'stain remover', pt: 'stain remover', fr: 'stain remover', de: 'stain remover', it: 'stain remover', nl: 'vlekkenverwijderaar', zh: '去污剂', ja: '染み抜き', ru: 'пятновыводитель' },
        },
        {
          id: 'cleaning_maintenance/laundry_worker/materials/starch',
          localImage: 'cleaning_maintenance/laundry_worker/materials/starch',
          translations: { en: 'starch', es: 'starch', pt: 'starch', fr: 'starch', de: 'starch', it: 'starch', nl: 'stijfsel', zh: '淀粉', ja: 'デンプン', ru: 'крахмал' },
        },
        {
          id: 'cleaning_maintenance/laundry_worker/materials/tablet',
          localImage: 'cleaning_maintenance/laundry_worker/materials/tablet',
          translations: { en: 'tablet', es: 'tablet', pt: 'tablet', fr: 'tablet', de: 'tablet', it: 'tablet', nl: 'tablet', zh: '平板电脑', ja: 'タブレット', ru: 'планшет' },
        },
        {
          id: 'cleaning_maintenance/laundry_worker/materials/treatment',
          localImage: 'cleaning_maintenance/laundry_worker/materials/treatment',
          translations: { en: 'treatment', es: 'treatment', pt: 'treatment', fr: 'treatment', de: 'treatment', it: 'treatment', nl: 'behandeling', zh: '处理剂', ja: 'トリートメント', ru: 'обработка' },
        },
        {
          id: 'cleaning_maintenance/laundry_worker/materials/wash_liquid',
          localImage: 'cleaning_maintenance/laundry_worker/materials/wash_liquid',
          translations: { en: 'wash liquid', es: 'wash liquid', pt: 'wash liquid', fr: 'wash liquid', de: 'wash liquid', it: 'wash liquid', nl: 'wasvloeistof', zh: '洗涤液', ja: '洗浄液', ru: 'жидкость для мытья' },
        },
        {
          id: 'cleaning_maintenance/laundry_worker/materials/wash_mix',
          localImage: 'cleaning_maintenance/laundry_worker/materials/wash_mix',
          translations: { en: 'wash mix', es: 'wash mix', pt: 'wash mix', fr: 'wash mix', de: 'wash mix', it: 'wash mix', nl: 'wasmengsel', zh: '洗涤混合物', ja: '洗浄ミックス', ru: 'моющий раствор' },
        }
        ],
      }
      ],
    },
    {
      id: 'maintenance',
      name: { en: 'Maintenance', es: 'Mantenimiento', pt: 'Manutenção', fr: 'Maintenance', de: 'Wartung', it: 'Manutenzione', nl: 'Onderhoud', zh: '维护', ja: 'メンテナンス', ru: 'Техобслуживание' },
      icon: '🔧',
      roles: [
      {
        id: 'tools',
        name: { en: 'Tools', es: 'Herramientas', pt: 'Ferramentas', fr: 'Outils', de: 'Werkzeuge', it: 'Attrezzi', nl: 'Gereedschap', zh: '工具', ja: '道具', ru: 'Инструменты' },
        icon: '🔧',
        items: [
        {
          id: 'cleaning_maintenance/maintenance/tools/cable',
          localImage: 'cleaning_maintenance/maintenance/tools/cable',
          translations: { en: 'cable', es: 'cable', pt: 'cable', fr: 'cable', de: 'cable', it: 'cable', nl: 'kabel', zh: '电缆', ja: 'ケーブル', ru: 'кабель' },
        },
        {
          id: 'cleaning_maintenance/maintenance/tools/cart',
          localImage: 'cleaning_maintenance/maintenance/tools/cart',
          translations: { en: 'cart', es: 'carrito', pt: 'carrinho', fr: 'chariot', de: 'Wagen', it: 'carrello', nl: 'kar', zh: '推车', ja: 'カート', ru: 'тележка' },
        },
        {
          id: 'cleaning_maintenance/maintenance/tools/charger',
          localImage: 'cleaning_maintenance/maintenance/tools/charger',
          translations: { en: 'charger', es: 'charger', pt: 'charger', fr: 'charger', de: 'charger', it: 'charger', nl: 'oplader', zh: '充电器', ja: '充電器', ru: 'зарядное устройство' },
        },
        {
          id: 'cleaning_maintenance/maintenance/tools/compressor',
          localImage: 'cleaning_maintenance/maintenance/tools/compressor',
          translations: { en: 'compressor', es: 'compressor', pt: 'compressor', fr: 'compressor', de: 'compressor', it: 'compressor', nl: 'compressor', zh: '压缩机', ja: 'コンプレッサー', ru: 'компрессор' },
        },
        {
          id: 'cleaning_maintenance/maintenance/tools/cutter',
          localImage: 'cleaning_maintenance/maintenance/tools/cutter',
          translations: { en: 'cutter', es: 'cortador', pt: 'cortador', fr: 'cutter', de: 'Cutter', it: 'taglierino', nl: 'snijder', zh: '切割机', ja: 'カッター', ru: 'резак' },
        },
        {
          id: 'cleaning_maintenance/maintenance/tools/drill',
          localImage: 'cleaning_maintenance/maintenance/tools/drill',
          translations: { en: 'drill', es: 'taladro', pt: 'furadeira', fr: 'perceuse', de: 'Bohrmaschine', it: 'trapano', nl: 'boor', zh: '钻头', ja: 'ドリル', ru: 'дрель' },
        },
        {
          id: 'cleaning_maintenance/maintenance/tools/generator',
          localImage: 'cleaning_maintenance/maintenance/tools/generator',
          translations: { en: 'generator', es: 'generator', pt: 'generator', fr: 'generator', de: 'generator', it: 'generator', nl: 'generator', zh: '发电机', ja: '発電機', ru: 'генератор' },
        },
        {
          id: 'cleaning_maintenance/maintenance/tools/grinder',
          localImage: 'cleaning_maintenance/maintenance/tools/grinder',
          translations: { en: 'grinder', es: 'grinder', pt: 'grinder', fr: 'grinder', de: 'grinder', it: 'grinder', nl: 'slijpmachine', zh: '研磨机', ja: 'グラインダー', ru: 'шлифовальная машина' },
        },
        {
          id: 'cleaning_maintenance/maintenance/tools/hammer',
          localImage: 'cleaning_maintenance/maintenance/tools/hammer',
          translations: { en: 'hammer', es: 'martillo', pt: 'martelo', fr: 'marteau', de: 'Hammer', it: 'martello', nl: 'hamer', zh: '锤子', ja: 'ハンマー', ru: 'молоток' },
        },
        {
          id: 'cleaning_maintenance/maintenance/tools/ladder',
          localImage: 'cleaning_maintenance/maintenance/tools/ladder',
          translations: { en: 'ladder', es: 'escalera', pt: 'escada', fr: 'échelle', de: 'Leiter', it: 'scala', nl: 'ladder', zh: '梯子', ja: 'はしご', ru: 'лестница' },
        },
        {
          id: 'cleaning_maintenance/maintenance/tools/monitor',
          localImage: 'cleaning_maintenance/maintenance/tools/monitor',
          translations: { en: 'monitor', es: 'monitor', pt: 'monitor', fr: 'monitor', de: 'monitor', it: 'monitor', nl: 'monitor', zh: '显示器', ja: 'モニター', ru: 'монитор' },
        },
        {
          id: 'cleaning_maintenance/maintenance/tools/panel',
          localImage: 'cleaning_maintenance/maintenance/tools/panel',
          translations: { en: 'panel', es: 'panel', pt: 'panel', fr: 'panel', de: 'panel', it: 'panel', nl: 'paneel', zh: '面板', ja: 'パネル', ru: 'панель' },
        },
        {
          id: 'cleaning_maintenance/maintenance/tools/platform',
          localImage: 'cleaning_maintenance/maintenance/tools/platform',
          translations: { en: 'platform', es: 'platform', pt: 'platform', fr: 'platform', de: 'platform', it: 'platform', nl: 'platform', zh: '站台', ja: 'プラットフォーム', ru: 'платформа' },
        },
        {
          id: 'cleaning_maintenance/maintenance/tools/pump',
          localImage: 'cleaning_maintenance/maintenance/tools/pump',
          translations: { en: 'pump', es: 'bomba', pt: 'bomba', fr: 'pompe', de: 'Pumpe', it: 'pompa', nl: 'pomp', zh: '泵', ja: 'ポンプ', ru: 'насос' },
        },
        {
          id: 'cleaning_maintenance/maintenance/tools/screwdriver',
          localImage: 'cleaning_maintenance/maintenance/tools/screwdriver',
          translations: { en: 'screwdriver', es: 'screwdriver', pt: 'screwdriver', fr: 'screwdriver', de: 'screwdriver', it: 'screwdriver', nl: 'schroevendraaier', zh: '螺丝刀', ja: 'ドライバー', ru: 'отвертка' },
        },
        {
          id: 'cleaning_maintenance/maintenance/tools/sensor',
          localImage: 'cleaning_maintenance/maintenance/tools/sensor',
          translations: { en: 'sensor', es: 'sensor', pt: 'sensor', fr: 'sensor', de: 'sensor', it: 'sensor', nl: 'sensor', zh: '传感器', ja: 'センサー', ru: 'датчик' },
        },
        {
          id: 'cleaning_maintenance/maintenance/tools/switch',
          localImage: 'cleaning_maintenance/maintenance/tools/switch',
          translations: { en: 'switch', es: 'switch', pt: 'switch', fr: 'switch', de: 'switch', it: 'switch', nl: 'schakelaar', zh: '开关', ja: 'スイッチ', ru: 'выключатель' },
        },
        {
          id: 'cleaning_maintenance/maintenance/tools/tester',
          localImage: 'cleaning_maintenance/maintenance/tools/tester',
          translations: { en: 'tester', es: 'tester', pt: 'tester', fr: 'tester', de: 'tester', it: 'tester', nl: 'tester', zh: '测试仪', ja: 'テスター', ru: 'тестер' },
        },
        {
          id: 'cleaning_maintenance/maintenance/tools/toolbox',
          localImage: 'cleaning_maintenance/maintenance/tools/toolbox',
          translations: { en: 'toolbox', es: 'toolbox', pt: 'toolbox', fr: 'toolbox', de: 'toolbox', it: 'toolbox', nl: 'gereedschapskist', zh: '工具箱', ja: 'ツールボックス', ru: 'ящик для инструментов' },
        },
        {
          id: 'cleaning_maintenance/maintenance/tools/torch',
          localImage: 'cleaning_maintenance/maintenance/tools/torch',
          translations: { en: 'torch', es: 'torch', pt: 'torch', fr: 'torch', de: 'torch', it: 'torch', nl: 'lasbrander', zh: '焊炬', ja: 'トーチ', ru: 'горелка' },
        },
        {
          id: 'cleaning_maintenance/maintenance/tools/welder',
          localImage: 'cleaning_maintenance/maintenance/tools/welder',
          translations: { en: 'welder', es: 'welder', pt: 'welder', fr: 'welder', de: 'welder', it: 'welder', nl: 'lasmachine', zh: '焊接机', ja: '溶接機', ru: 'сварочный аппарат' },
        },
        {
          id: 'cleaning_maintenance/maintenance/tools/wrench',
          localImage: 'cleaning_maintenance/maintenance/tools/wrench',
          translations: { en: 'wrench', es: 'llave', pt: 'chave inglesa', fr: 'clé', de: 'Schraubenschlüssel', it: 'chiave', nl: 'moersleutel', zh: '扳手', ja: 'レンチ', ru: 'гаечный ключ' },
        }
        ],
      },
      {
        id: 'materials',
        name: { en: 'Materials', es: 'Materiales', pt: 'Materiais', fr: 'Matériaux', de: 'Materialien', it: 'Materiali', nl: 'Materialen', zh: '材料', ja: '材料', ru: 'Материалы' },
        icon: '📦',
        items: [
        {
          id: 'cleaning_maintenance/maintenance/materials/battery',
          localImage: 'cleaning_maintenance/maintenance/materials/battery',
          translations: { en: 'battery', es: 'battery', pt: 'battery', fr: 'battery', de: 'battery', it: 'battery', nl: 'batterij', zh: '电池', ja: 'バッテリー', ru: 'батарея' },
        },
        {
          id: 'cleaning_maintenance/maintenance/materials/bolt',
          localImage: 'cleaning_maintenance/maintenance/materials/bolt',
          translations: { en: 'bolt', es: 'bolt', pt: 'bolt', fr: 'bolt', de: 'bolt', it: 'bolt', nl: 'bout', zh: '螺栓', ja: 'ボルト', ru: 'болт' },
        },
        {
          id: 'cleaning_maintenance/maintenance/materials/boots',
          localImage: 'cleaning_maintenance/maintenance/materials/boots',
          translations: { en: 'boots', es: 'botas', pt: 'botas', fr: 'bottes', de: 'Stiefel', it: 'stivali', nl: 'laarzen', zh: '靴子', ja: 'ブーツ', ru: 'ботинки' },
        },
        {
          id: 'cleaning_maintenance/maintenance/materials/chain',
          localImage: 'cleaning_maintenance/maintenance/materials/chain',
          translations: { en: 'chain', es: 'cadena', pt: 'corrente', fr: 'chaîne', de: 'Kette', it: 'catena', nl: 'ketting', zh: '链条', ja: 'チェーン', ru: 'цепь' },
        },
        {
          id: 'cleaning_maintenance/maintenance/materials/clamp',
          localImage: 'cleaning_maintenance/maintenance/materials/clamp',
          translations: { en: 'clamp', es: 'clamp', pt: 'clamp', fr: 'clamp', de: 'clamp', it: 'clamp', nl: 'klem', zh: '夹具', ja: 'クランプ', ru: 'зажим' },
        },
        {
          id: 'cleaning_maintenance/maintenance/materials/cleaner',
          localImage: 'cleaning_maintenance/maintenance/materials/cleaner',
          translations: { en: 'cleaner', es: 'cleaner', pt: 'cleaner', fr: 'cleaner', de: 'cleaner', it: 'cleaner', nl: 'reiniger', zh: '清洁剂', ja: '洗浄剤', ru: 'чистящее средство' },
        },
        {
          id: 'cleaning_maintenance/maintenance/materials/filter',
          localImage: 'cleaning_maintenance/maintenance/materials/filter',
          translations: { en: 'filter', es: 'filtro', pt: 'filtro', fr: 'filtre', de: 'Filter', it: 'filtro', nl: 'filter', zh: '过滤器', ja: 'フィルター', ru: 'фильтр' },
        },
        {
          id: 'cleaning_maintenance/maintenance/materials/gloves',
          localImage: 'cleaning_maintenance/maintenance/materials/gloves',
          translations: { en: 'gloves', es: 'guantes', pt: 'luvas', fr: 'gants', de: 'Handschuhe', it: 'guanti', nl: 'handschoenen', zh: '手套', ja: '手袋', ru: 'перчатки' },
        },
        {
          id: 'cleaning_maintenance/maintenance/materials/glue',
          localImage: 'cleaning_maintenance/maintenance/materials/glue',
          translations: { en: 'glue', es: 'glue', pt: 'glue', fr: 'glue', de: 'glue', it: 'glue', nl: 'lijm', zh: '胶水', ja: '接着剤', ru: 'клей' },
        },
        {
          id: 'cleaning_maintenance/maintenance/materials/goggles',
          localImage: 'cleaning_maintenance/maintenance/materials/goggles',
          translations: { en: 'goggles', es: 'gafas protectoras', pt: 'óculos de proteção', fr: 'lunettes', de: 'Schutzbrille', it: 'occhiali', nl: 'veiligheidsbril', zh: '护目镜', ja: 'ゴーグル', ru: 'защитные очки' },
        },
        {
          id: 'cleaning_maintenance/maintenance/materials/grease',
          localImage: 'cleaning_maintenance/maintenance/materials/grease',
          translations: { en: 'grease', es: 'grease', pt: 'grease', fr: 'grease', de: 'grease', it: 'grease', nl: 'vet', zh: '润滑脂', ja: 'グリース', ru: 'смазка' },
        },
        {
          id: 'cleaning_maintenance/maintenance/materials/helmet',
          localImage: 'cleaning_maintenance/maintenance/materials/helmet',
          translations: { en: 'helmet', es: 'casco', pt: 'capacete', fr: 'casque', de: 'Helm', it: 'casco', nl: 'helm', zh: '安全帽', ja: 'ヘルメット', ru: 'каска' },
        },
        {
          id: 'cleaning_maintenance/maintenance/materials/hook',
          localImage: 'cleaning_maintenance/maintenance/materials/hook',
          translations: { en: 'hook', es: 'gancho', pt: 'gancho', fr: 'crochet', de: 'Haken', it: 'gancio', nl: 'haak', zh: '挂钩', ja: 'フック', ru: 'крюк' },
        },
        {
          id: 'cleaning_maintenance/maintenance/materials/hose',
          localImage: 'cleaning_maintenance/maintenance/materials/hose',
          translations: { en: 'hose', es: 'manguera', pt: 'mangueira', fr: 'tuyau', de: 'Schlauch', it: 'tubo', nl: 'slang', zh: '软管', ja: 'ホース', ru: 'шланг' },
        },
        {
          id: 'cleaning_maintenance/maintenance/materials/light',
          localImage: 'cleaning_maintenance/maintenance/materials/light',
          translations: { en: 'light', es: 'light', pt: 'light', fr: 'light', de: 'light', it: 'light', nl: 'lamp', zh: '灯光', ja: 'ライト', ru: 'свет' },
        },
        {
          id: 'cleaning_maintenance/maintenance/materials/mask',
          localImage: 'cleaning_maintenance/maintenance/materials/mask',
          translations: { en: 'mask', es: 'mascarilla', pt: 'máscara', fr: 'masque', de: 'Maske', it: 'maschera', nl: 'masker', zh: '口罩', ja: 'マスク', ru: 'маска' },
        },
        {
          id: 'cleaning_maintenance/maintenance/materials/nut',
          localImage: 'cleaning_maintenance/maintenance/materials/nut',
          translations: { en: 'nut', es: 'nut', pt: 'nut', fr: 'nut', de: 'nut', it: 'nut', nl: 'moer', zh: '螺母', ja: 'ナット', ru: 'гайка' },
        },
        {
          id: 'cleaning_maintenance/maintenance/materials/oil',
          localImage: 'cleaning_maintenance/maintenance/materials/oil',
          translations: { en: 'oil', es: 'oil', pt: 'oil', fr: 'oil', de: 'oil', it: 'oil', nl: 'olie', zh: '油', ja: 'オイル', ru: 'масло' },
        },
        {
          id: 'cleaning_maintenance/maintenance/materials/pipe',
          localImage: 'cleaning_maintenance/maintenance/materials/pipe',
          translations: { en: 'pipe', es: 'tubo', pt: 'cano', fr: 'tuyau', de: 'Rohr', it: 'tubo', nl: 'pijp', zh: '管道', ja: 'パイプ', ru: 'труба' },
        },
        {
          id: 'cleaning_maintenance/maintenance/materials/rope',
          localImage: 'cleaning_maintenance/maintenance/materials/rope',
          translations: { en: 'rope', es: 'cuerda', pt: 'corda', fr: 'corde', de: 'Seil', it: 'corda', nl: 'touw', zh: '绳子', ja: 'ロープ', ru: 'веревка' },
        },
        {
          id: 'cleaning_maintenance/maintenance/materials/screw',
          localImage: 'cleaning_maintenance/maintenance/materials/screw',
          translations: { en: 'screw', es: 'screw', pt: 'screw', fr: 'screw', de: 'screw', it: 'screw', nl: 'schroef', zh: '螺丝', ja: 'ネジ', ru: 'винт' },
        },
        {
          id: 'cleaning_maintenance/maintenance/materials/seal',
          localImage: 'cleaning_maintenance/maintenance/materials/seal',
          translations: { en: 'seal', es: 'seal', pt: 'seal', fr: 'seal', de: 'seal', it: 'seal', nl: 'afdichting', zh: '密封件', ja: 'シール', ru: 'уплотнение' },
        },
        {
          id: 'cleaning_maintenance/maintenance/materials/tape',
          localImage: 'cleaning_maintenance/maintenance/materials/tape',
          translations: { en: 'tape', es: 'cinta', pt: 'fita', fr: 'ruban', de: 'Klebeband', it: 'nastro', nl: 'tape', zh: '胶带', ja: 'テープ', ru: 'лента' },
        },
        {
          id: 'cleaning_maintenance/maintenance/materials/valve',
          localImage: 'cleaning_maintenance/maintenance/materials/valve',
          translations: { en: 'valve', es: 'valve', pt: 'valve', fr: 'valve', de: 'valve', it: 'valve', nl: 'klep', zh: '阀门', ja: 'バルブ', ru: 'клапан' },
        },
        {
          id: 'cleaning_maintenance/maintenance/materials/vest',
          localImage: 'cleaning_maintenance/maintenance/materials/vest',
          translations: { en: 'vest', es: 'chaleco', pt: 'colete', fr: 'gilet', de: 'Weste', it: 'gilet', nl: 'vest', zh: '背心', ja: 'ベスト', ru: 'жилет' },
        }
        ],
      }
      ],
    }
    ],
  },
  {
    id: 'construction',
    name: { en: 'Construction', es: 'Construcción', pt: 'Construção', fr: 'Construction', de: 'Bauwesen', it: 'Costruzione', nl: 'Bouw', zh: '建筑', ja: '建設', ru: 'Строительство' },
    icon: '🏗️',
    imageUrl: 'https://images.pexels.com/photos/1117452/pexels-photo-1117452.jpeg?auto=compress&cs=tinysrgb&w=800',
    sectors: [
    {
      id: 'bricklayer',
      name: { en: 'Bricklayer', es: 'Albañil', pt: 'Pedreiro', fr: 'Maçon', de: 'Maurer', it: 'Muratore', nl: 'Metselaar', zh: '砌砖工', ja: '左官', ru: 'Каменщик' },
      icon: '🧱',
      roles: [
      {
        id: 'tools',
        name: { en: 'Tools', es: 'Herramientas', pt: 'Ferramentas', fr: 'Outils', de: 'Werkzeuge', it: 'Attrezzi', nl: 'Gereedschap', zh: '工具', ja: '道具', ru: 'Инструменты' },
        icon: '🔧',
        items: [
        {
          id: 'construction/bricklayer/tools/brush',
          localImage: 'construction/bricklayer/tools/brush',
          translations: { en: 'brush', es: 'cepillo', pt: 'escova', fr: 'brosse', de: 'Bürste', it: 'spazzola', nl: 'borstel', zh: '刷子', ja: 'ブラシ', ru: 'кисть' },
        },
        {
          id: 'construction/bricklayer/tools/bucket',
          localImage: 'construction/bricklayer/tools/bucket',
          translations: { en: 'bucket', es: 'cubo', pt: 'balde', fr: 'seau', de: 'Eimer', it: 'secchio', nl: 'emmer', zh: '水桶', ja: 'バケツ', ru: 'ведро' },
        },
        {
          id: 'construction/bricklayer/tools/chisel',
          localImage: 'construction/bricklayer/tools/chisel',
          translations: { en: 'chisel', es: 'cincel', pt: 'cinzel', fr: 'ciseau', de: 'Meißel', it: 'scalpello', nl: 'beitel', zh: '凿子', ja: 'ノミ', ru: 'долото' },
        },
        {
          id: 'construction/bricklayer/tools/cutter',
          localImage: 'construction/bricklayer/tools/cutter',
          translations: { en: 'cutter', es: 'cortador', pt: 'cortador', fr: 'cutter', de: 'Cutter', it: 'taglierino', nl: 'snijder', zh: '切割机', ja: 'カッター', ru: 'резак' },
        },
        {
          id: 'construction/bricklayer/tools/float',
          localImage: 'construction/bricklayer/tools/float',
          translations: { en: 'float', es: 'llana flotante', pt: 'desempenadeira', fr: 'taloche', de: 'Reibebrett', it: 'frattazzo', nl: 'zwevend', zh: '浮子', ja: 'フロート', ru: 'поплавок' },
        },
        {
          id: 'construction/bricklayer/tools/hammer',
          localImage: 'construction/bricklayer/tools/hammer',
          translations: { en: 'hammer', es: 'martillo', pt: 'martelo', fr: 'marteau', de: 'Hammer', it: 'martello', nl: 'hamer', zh: '锤子', ja: 'ハンマー', ru: 'молоток' },
        },
        {
          id: 'construction/bricklayer/tools/hoe',
          localImage: 'construction/bricklayer/tools/hoe',
          translations: { en: 'hoe', es: 'azada', pt: 'enxada', fr: 'houe', de: 'Hacke', it: 'zappa', nl: 'schoffel', zh: '锄头', ja: '鍬', ru: 'мотыга' },
        },
        {
          id: 'construction/bricklayer/tools/jointer',
          localImage: 'construction/bricklayer/tools/jointer',
          translations: { en: 'jointer', es: 'jointer', pt: 'jointer', fr: 'jointer', de: 'jointer', it: 'jointer', nl: 'voegmachine', zh: '刨床', ja: 'ジョインター', ru: 'фуговальный станок' },
        },
        {
          id: 'construction/bricklayer/tools/level',
          localImage: 'construction/bricklayer/tools/level',
          translations: { en: 'level', es: 'nivel', pt: 'nível', fr: 'niveau', de: 'Wasserwaage', it: 'livella', nl: 'waterpas', zh: '水平仪', ja: '水平器', ru: 'уровень' },
        },
        {
          id: 'construction/bricklayer/tools/line',
          localImage: 'construction/bricklayer/tools/line',
          translations: { en: 'line', es: 'line', pt: 'line', fr: 'line', de: 'line', it: 'line', nl: 'lijn', zh: '线', ja: 'ライン', ru: 'линия' },
        },
        {
          id: 'construction/bricklayer/tools/mallet',
          localImage: 'construction/bricklayer/tools/mallet',
          translations: { en: 'mallet', es: 'mallet', pt: 'mallet', fr: 'mallet', de: 'mallet', it: 'mallet', nl: 'houten hamer', zh: '木槌', ja: 'マレット', ru: 'деревянный молоток' },
        },
        {
          id: 'construction/bricklayer/tools/mixer',
          localImage: 'construction/bricklayer/tools/mixer',
          translations: { en: 'mixer', es: 'mezclador', pt: 'betoneira', fr: 'mélangeur', de: 'Mischer', it: 'miscelatore', nl: 'mixer', zh: '搅拌机', ja: 'ミキサー', ru: 'миксер' },
        },
        {
          id: 'construction/bricklayer/tools/pliers',
          localImage: 'construction/bricklayer/tools/pliers',
          translations: { en: 'pliers', es: 'alicates', pt: 'alicate', fr: 'pinces', de: 'Zange', it: 'pinze', nl: 'tang', zh: '钳子', ja: 'プライヤー', ru: 'плоскогубцы' },
        },
        {
          id: 'construction/bricklayer/tools/saw',
          localImage: 'construction/bricklayer/tools/saw',
          translations: { en: 'saw', es: 'sierra', pt: 'serra', fr: 'scie', de: 'Säge', it: 'sega', nl: 'zaag', zh: '锯', ja: 'ノコギリ', ru: 'пила' },
        },
        {
          id: 'construction/bricklayer/tools/scraper',
          localImage: 'construction/bricklayer/tools/scraper',
          translations: { en: 'scraper', es: 'scraper', pt: 'scraper', fr: 'scraper', de: 'scraper', it: 'scraper', nl: 'schraper', zh: '刮刀', ja: 'スクレーパー', ru: 'скребок' },
        },
        {
          id: 'construction/bricklayer/tools/shovel',
          localImage: 'construction/bricklayer/tools/shovel',
          translations: { en: 'shovel', es: 'pala', pt: 'pá', fr: 'pelle', de: 'Schaufel', it: 'vanga', nl: 'schop', zh: '铲子', ja: 'シャベル', ru: 'лопата' },
        },
        {
          id: 'construction/bricklayer/tools/square',
          localImage: 'construction/bricklayer/tools/square',
          translations: { en: 'square', es: 'square', pt: 'square', fr: 'square', de: 'square', it: 'square', nl: 'winkelhaak', zh: '角尺', ja: 'スクエア', ru: 'угольник' },
        },
        {
          id: 'construction/bricklayer/tools/tape_measure',
          localImage: 'construction/bricklayer/tools/tape_measure',
          translations: { en: 'tape measure', es: 'tape measure', pt: 'tape measure', fr: 'tape measure', de: 'tape measure', it: 'tape measure', nl: 'meetlint', zh: '卷尺', ja: 'メジャー', ru: 'рулетка' },
        },
        {
          id: 'construction/bricklayer/tools/trowel',
          localImage: 'construction/bricklayer/tools/trowel',
          translations: { en: 'trowel', es: 'llana', pt: 'colher de pedreiro', fr: 'truelle', de: 'Kelle', it: 'cazzuola', nl: 'truweel', zh: '抹刀', ja: 'コテ', ru: 'кельма' },
        },
        {
          id: 'construction/bricklayer/tools/wheelbarrow',
          localImage: 'construction/bricklayer/tools/wheelbarrow',
          translations: { en: 'wheelbarrow', es: 'carretilla', pt: 'carrinho de mão', fr: 'brouette', de: 'Schubkarre', it: 'carriola', nl: 'kruiwagen', zh: '手推车', ja: '一輪車', ru: 'тачка' },
        }
        ],
      },
      {
        id: 'materials',
        name: { en: 'Materials', es: 'Materiales', pt: 'Materiais', fr: 'Matériaux', de: 'Materialien', it: 'Materiali', nl: 'Materialen', zh: '材料', ja: '材料', ru: 'Материалы' },
        icon: '📦',
        items: [
        {
          id: 'construction/bricklayer/materials/adhesive',
          localImage: 'construction/bricklayer/materials/adhesive',
          translations: { en: 'adhesive', es: 'adhesive', pt: 'adhesive', fr: 'adhesive', de: 'adhesive', it: 'adhesive', nl: 'lijm', zh: '粘合剂', ja: '接着剤', ru: 'клей' },
        },
        {
          id: 'construction/bricklayer/materials/base',
          localImage: 'construction/bricklayer/materials/base',
          translations: { en: 'base', es: 'base', pt: 'base', fr: 'base', de: 'base', it: 'base', nl: 'basis', zh: '底料', ja: 'ベース', ru: 'основа' },
        },
        {
          id: 'construction/bricklayer/materials/blocks',
          localImage: 'construction/bricklayer/materials/blocks',
          translations: { en: 'blocks', es: 'blocks', pt: 'blocks', fr: 'blocks', de: 'blocks', it: 'blocks', nl: 'blokken', zh: '砖块', ja: 'ブロック', ru: 'блоки' },
        },
        {
          id: 'construction/bricklayer/materials/bonding_agent',
          localImage: 'construction/bricklayer/materials/bonding_agent',
          translations: { en: 'bonding agent', es: 'bonding agent', pt: 'bonding agent', fr: 'bonding agent', de: 'bonding agent', it: 'bonding agent', nl: 'hechtmiddel', zh: '粘合剂', ja: '接着剤', ru: 'связующее вещество' },
        },
        {
          id: 'construction/bricklayer/materials/bricks',
          localImage: 'construction/bricklayer/materials/bricks',
          translations: { en: 'bricks', es: 'bricks', pt: 'bricks', fr: 'bricks', de: 'bricks', it: 'bricks', nl: 'stenen', zh: '砖块', ja: 'レンガ', ru: 'кирпичи' },
        },
        {
          id: 'construction/bricklayer/materials/cement',
          localImage: 'construction/bricklayer/materials/cement',
          translations: { en: 'cement', es: 'cement', pt: 'cement', fr: 'cement', de: 'cement', it: 'cement', nl: 'cement', zh: '水泥', ja: 'セメント', ru: 'цемент' },
        },
        {
          id: 'construction/bricklayer/materials/clay',
          localImage: 'construction/bricklayer/materials/clay',
          translations: { en: 'clay', es: 'clay', pt: 'clay', fr: 'clay', de: 'clay', it: 'clay', nl: 'klei', zh: '黏土', ja: '粘土', ru: 'глина' },
        },
        {
          id: 'construction/bricklayer/materials/coating',
          localImage: 'construction/bricklayer/materials/coating',
          translations: { en: 'coating', es: 'coating', pt: 'coating', fr: 'coating', de: 'coating', it: 'coating', nl: 'coating', zh: '涂层', ja: 'コーティング', ru: 'покрытие' },
        },
        {
          id: 'construction/bricklayer/materials/compound',
          localImage: 'construction/bricklayer/materials/compound',
          translations: { en: 'compound', es: 'compound', pt: 'compound', fr: 'compound', de: 'compound', it: 'compound', nl: 'compound', zh: '化合物', ja: 'コンパウンド', ru: 'состав' },
        },
        {
          id: 'construction/bricklayer/materials/concrete',
          localImage: 'construction/bricklayer/materials/concrete',
          translations: { en: 'concrete', es: 'concrete', pt: 'concrete', fr: 'concrete', de: 'concrete', it: 'concrete', nl: 'beton', zh: '混凝土', ja: 'コンクリート', ru: 'бетон' },
        },
        {
          id: 'construction/bricklayer/materials/dust',
          localImage: 'construction/bricklayer/materials/dust',
          translations: { en: 'dust', es: 'dust', pt: 'dust', fr: 'dust', de: 'dust', it: 'dust', nl: 'stof', zh: '灰尘', ja: '粉塵', ru: 'пыль' },
        },
        {
          id: 'construction/bricklayer/materials/filler',
          localImage: 'construction/bricklayer/materials/filler',
          translations: { en: 'filler', es: 'filler', pt: 'filler', fr: 'filler', de: 'filler', it: 'filler', nl: 'vulmiddel', zh: '填充物', ja: 'フィラー', ru: 'наполнитель' },
        },
        {
          id: 'construction/bricklayer/materials/foam',
          localImage: 'construction/bricklayer/materials/foam',
          translations: { en: 'foam', es: 'foam', pt: 'foam', fr: 'foam', de: 'foam', it: 'foam', nl: 'schuim', zh: '泡沫', ja: 'フォーム', ru: 'пена' },
        },
        {
          id: 'construction/bricklayer/materials/grout',
          localImage: 'construction/bricklayer/materials/grout',
          translations: { en: 'grout', es: 'grout', pt: 'grout', fr: 'grout', de: 'grout', it: 'grout', nl: 'voegmiddel', zh: '灌浆料', ja: 'グラウト', ru: 'затирка' },
        },
        {
          id: 'construction/bricklayer/materials/insulation',
          localImage: 'construction/bricklayer/materials/insulation',
          translations: { en: 'insulation', es: 'insulation', pt: 'insulation', fr: 'insulation', de: 'insulation', it: 'insulation', nl: 'isolatie', zh: '隔热材料', ja: '断熱材', ru: 'изоляция' },
        },
        {
          id: 'construction/bricklayer/materials/joint_mix',
          localImage: 'construction/bricklayer/materials/joint_mix',
          translations: { en: 'joint mix', es: 'joint mix', pt: 'joint mix', fr: 'joint mix', de: 'joint mix', it: 'joint mix', nl: 'voegmengsel', zh: '接缝混合物', ja: 'ジョイントミックス', ru: 'смесь для швов' },
        },
        {
          id: 'construction/bricklayer/materials/lime',
          localImage: 'construction/bricklayer/materials/lime',
          translations: { en: 'lime', es: 'lime', pt: 'lime', fr: 'lime', de: 'lime', it: 'lime', nl: 'kalk', zh: '石灰', ja: 'ライム', ru: 'известь' },
        },
        {
          id: 'construction/bricklayer/materials/mesh',
          localImage: 'construction/bricklayer/materials/mesh',
          translations: { en: 'mesh', es: 'mesh', pt: 'mesh', fr: 'mesh', de: 'mesh', it: 'mesh', nl: 'gaas', zh: '网', ja: 'メッシュ', ru: 'сетка' },
        },
        {
          id: 'construction/bricklayer/materials/mix',
          localImage: 'construction/bricklayer/materials/mix',
          translations: { en: 'mix', es: 'mix', pt: 'mix', fr: 'mix', de: 'mix', it: 'mix', nl: 'mengsel', zh: '混合物', ja: 'ミックス', ru: 'смесь' },
        },
        {
          id: 'construction/bricklayer/materials/mortar',
          localImage: 'construction/bricklayer/materials/mortar',
          translations: { en: 'mortar', es: 'mortar', pt: 'mortar', fr: 'mortar', de: 'mortar', it: 'mortar', nl: 'mortel', zh: '砂浆', ja: 'モルタル', ru: 'раствор' },
        },
        {
          id: 'construction/bricklayer/materials/paste',
          localImage: 'construction/bricklayer/materials/paste',
          translations: { en: 'paste', es: 'paste', pt: 'paste', fr: 'paste', de: 'paste', it: 'paste', nl: 'pasta', zh: '糊', ja: 'ペースト', ru: 'паста' },
        },
        {
          id: 'construction/bricklayer/materials/plaster',
          localImage: 'construction/bricklayer/materials/plaster',
          translations: { en: 'plaster', es: 'plaster', pt: 'plaster', fr: 'plaster', de: 'plaster', it: 'plaster', nl: 'gips', zh: '石膏', ja: 'プラスター', ru: 'штукатурка' },
        },
        {
          id: 'construction/bricklayer/materials/powder',
          localImage: 'construction/bricklayer/materials/powder',
          translations: { en: 'powder', es: 'powder', pt: 'powder', fr: 'powder', de: 'powder', it: 'powder', nl: 'poeder', zh: '粉末', ja: 'パウダー', ru: 'порошок' },
        },
        {
          id: 'construction/bricklayer/materials/render',
          localImage: 'construction/bricklayer/materials/render',
          translations: { en: 'render', es: 'render', pt: 'render', fr: 'render', de: 'render', it: 'render', nl: 'bepleistering', zh: '粉刷料', ja: 'レンダー', ru: 'штукатурный раствор' },
        },
        {
          id: 'construction/bricklayer/materials/resin',
          localImage: 'construction/bricklayer/materials/resin',
          translations: { en: 'resin', es: 'resin', pt: 'resin', fr: 'resin', de: 'resin', it: 'resin', nl: 'hars', zh: '树脂', ja: '樹脂', ru: 'смола' },
        },
        {
          id: 'construction/bricklayer/materials/sand',
          localImage: 'construction/bricklayer/materials/sand',
          translations: { en: 'sand', es: 'sand', pt: 'sand', fr: 'sand', de: 'sand', it: 'sand', nl: 'zand', zh: '沙子', ja: '砂', ru: 'песок' },
        },
        {
          id: 'construction/bricklayer/materials/sealant',
          localImage: 'construction/bricklayer/materials/sealant',
          translations: { en: 'sealant', es: 'sealant', pt: 'sealant', fr: 'sealant', de: 'sealant', it: 'sealant', nl: 'afdichtingsmiddel', zh: '密封剂', ja: 'シーラント', ru: 'герметик' },
        },
        {
          id: 'construction/bricklayer/materials/stone',
          localImage: 'construction/bricklayer/materials/stone',
          translations: { en: 'stone', es: 'stone', pt: 'stone', fr: 'stone', de: 'stone', it: 'stone', nl: 'steen', zh: '石头', ja: '石', ru: 'камень' },
        },
        {
          id: 'construction/bricklayer/materials/tiles',
          localImage: 'construction/bricklayer/materials/tiles',
          translations: { en: 'tiles', es: 'tiles', pt: 'tiles', fr: 'tiles', de: 'tiles', it: 'tiles', nl: 'tegels', zh: '瓷砖', ja: 'タイル', ru: 'плитка' },
        },
        {
          id: 'construction/bricklayer/materials/water',
          localImage: 'construction/bricklayer/materials/water',
          translations: { en: 'water', es: 'agua', pt: 'água', fr: 'eau', de: 'Wasser', it: 'acqua', nl: 'water', zh: '水', ja: '水', ru: 'вода' },
        }
        ],
      }
      ],
    },
    {
      id: 'carpenter',
      name: { en: 'Carpenter', es: 'Carpintero', pt: 'Carpinteiro', fr: 'Charpentier', de: 'Zimmermann', it: 'Falegname', nl: 'Timmerman', zh: '木匠', ja: '大工', ru: 'Плотник' },
      icon: '🪚',
      roles: [
      {
        id: 'tools',
        name: { en: 'Tools', es: 'Herramientas', pt: 'Ferramentas', fr: 'Outils', de: 'Werkzeuge', it: 'Attrezzi', nl: 'Gereedschap', zh: '工具', ja: '道具', ru: 'Инструменты' },
        icon: '🔧',
        items: [
        {
          id: 'construction/carpenter/tools/blade',
          localImage: 'construction/carpenter/tools/blade',
          translations: { en: 'blade', es: 'blade', pt: 'blade', fr: 'blade', de: 'blade', it: 'blade', nl: 'blad', zh: '刀片', ja: 'ブレード', ru: 'лезвие' },
        },
        {
          id: 'construction/carpenter/tools/chisel',
          localImage: 'construction/carpenter/tools/chisel',
          translations: { en: 'chisel', es: 'cincel', pt: 'cinzel', fr: 'ciseau', de: 'Meißel', it: 'scalpello', nl: 'beitel', zh: '凿子', ja: 'ノミ', ru: 'долото' },
        },
        {
          id: 'construction/carpenter/tools/clamp',
          localImage: 'construction/carpenter/tools/clamp',
          translations: { en: 'clamp', es: 'clamp', pt: 'clamp', fr: 'clamp', de: 'clamp', it: 'clamp', nl: 'klem', zh: '夹具', ja: 'クランプ', ru: 'зажим' },
        },
        {
          id: 'construction/carpenter/tools/cutter',
          localImage: 'construction/carpenter/tools/cutter',
          translations: { en: 'cutter', es: 'cortador', pt: 'cortador', fr: 'cutter', de: 'Cutter', it: 'taglierino', nl: 'snijder', zh: '切割机', ja: 'カッター', ru: 'резак' },
        },
        {
          id: 'construction/carpenter/tools/drill',
          localImage: 'construction/carpenter/tools/drill',
          translations: { en: 'drill', es: 'taladro', pt: 'furadeira', fr: 'perceuse', de: 'Bohrmaschine', it: 'trapano', nl: 'boor', zh: '钻头', ja: 'ドリル', ru: 'дрель' },
        },
        {
          id: 'construction/carpenter/tools/file',
          localImage: 'construction/carpenter/tools/file',
          translations: { en: 'file', es: 'file', pt: 'file', fr: 'file', de: 'file', it: 'file', nl: 'bestand', zh: '文件夹', ja: 'ファイル', ru: 'папка' },
        },
        {
          id: 'construction/carpenter/tools/grinder',
          localImage: 'construction/carpenter/tools/grinder',
          translations: { en: 'grinder', es: 'grinder', pt: 'grinder', fr: 'grinder', de: 'grinder', it: 'grinder', nl: 'slijpmachine', zh: '研磨机', ja: 'グラインダー', ru: 'шлифовальная машина' },
        },
        {
          id: 'construction/carpenter/tools/hammer',
          localImage: 'construction/carpenter/tools/hammer',
          translations: { en: 'hammer', es: 'martillo', pt: 'martelo', fr: 'marteau', de: 'Hammer', it: 'martello', nl: 'hamer', zh: '锤子', ja: 'ハンマー', ru: 'молоток' },
        },
        {
          id: 'construction/carpenter/tools/level',
          localImage: 'construction/carpenter/tools/level',
          translations: { en: 'level', es: 'nivel', pt: 'nível', fr: 'niveau', de: 'Wasserwaage', it: 'livella', nl: 'waterpas', zh: '水平仪', ja: '水平器', ru: 'уровень' },
        },
        {
          id: 'construction/carpenter/tools/mallet',
          localImage: 'construction/carpenter/tools/mallet',
          translations: { en: 'mallet', es: 'mallet', pt: 'mallet', fr: 'mallet', de: 'mallet', it: 'mallet', nl: 'houten hamer', zh: '木槌', ja: 'マレット', ru: 'деревянный молоток' },
        },
        {
          id: 'construction/carpenter/tools/measuring_tape',
          localImage: 'construction/carpenter/tools/measuring_tape',
          translations: { en: 'measuring tape', es: 'measuring tape', pt: 'measuring tape', fr: 'measuring tape', de: 'measuring tape', it: 'measuring tape', nl: 'meetlint', zh: '卷尺', ja: 'メジャー', ru: 'рулетка' },
        },
        {
          id: 'construction/carpenter/tools/nail_gun',
          localImage: 'construction/carpenter/tools/nail_gun',
          translations: { en: 'nail gun', es: 'nail gun', pt: 'nail gun', fr: 'nail gun', de: 'nail gun', it: 'nail gun', nl: 'spijkerpistool', zh: '气钉枪', ja: 'ネイルガン', ru: 'гвоздезабивной пистолет' },
        },
        {
          id: 'construction/carpenter/tools/plane',
          localImage: 'construction/carpenter/tools/plane',
          translations: { en: 'plane', es: 'plane', pt: 'plane', fr: 'plane', de: 'plane', it: 'plane', nl: 'schaaf', zh: '刨子', ja: 'カンナ', ru: 'рубанок' },
        },
        {
          id: 'construction/carpenter/tools/router',
          localImage: 'construction/carpenter/tools/router',
          translations: { en: 'router', es: 'router', pt: 'router', fr: 'router', de: 'router', it: 'router', nl: 'router', zh: '路由器', ja: 'ルーター', ru: 'маршрутизатор' },
        },
        {
          id: 'construction/carpenter/tools/sander',
          localImage: 'construction/carpenter/tools/sander',
          translations: { en: 'sander', es: 'sander', pt: 'sander', fr: 'sander', de: 'sander', it: 'sander', nl: 'schuurmachine', zh: '砂磨机', ja: 'サンダー', ru: 'шлифовальная машина' },
        },
        {
          id: 'construction/carpenter/tools/saw',
          localImage: 'construction/carpenter/tools/saw',
          translations: { en: 'saw', es: 'sierra', pt: 'serra', fr: 'scie', de: 'Säge', it: 'sega', nl: 'zaag', zh: '锯', ja: 'ノコギリ', ru: 'пила' },
        },
        {
          id: 'construction/carpenter/tools/screwdriver',
          localImage: 'construction/carpenter/tools/screwdriver',
          translations: { en: 'screwdriver', es: 'screwdriver', pt: 'screwdriver', fr: 'screwdriver', de: 'screwdriver', it: 'screwdriver', nl: 'schroevendraaier', zh: '螺丝刀', ja: 'ドライバー', ru: 'отвертка' },
        },
        {
          id: 'construction/carpenter/tools/square',
          localImage: 'construction/carpenter/tools/square',
          translations: { en: 'square', es: 'square', pt: 'square', fr: 'square', de: 'square', it: 'square', nl: 'winkelhaak', zh: '角尺', ja: 'スクエア', ru: 'угольник' },
        },
        {
          id: 'construction/carpenter/tools/vice',
          localImage: 'construction/carpenter/tools/vice',
          translations: { en: 'vice', es: 'vice', pt: 'vice', fr: 'vice', de: 'vice', it: 'vice', nl: 'bankschroef', zh: '虎钳', ja: 'バイス', ru: 'тиски' },
        },
        {
          id: 'construction/carpenter/tools/wrench',
          localImage: 'construction/carpenter/tools/wrench',
          translations: { en: 'wrench', es: 'llave', pt: 'chave inglesa', fr: 'clé', de: 'Schraubenschlüssel', it: 'chiave', nl: 'moersleutel', zh: '扳手', ja: 'レンチ', ru: 'гаечный ключ' },
        }
        ],
      },
      {
        id: 'materials',
        name: { en: 'Materials', es: 'Materiales', pt: 'Materiais', fr: 'Matériaux', de: 'Materialien', it: 'Materiali', nl: 'Materialen', zh: '材料', ja: '材料', ru: 'Материалы' },
        icon: '📦',
        items: [
        {
          id: 'construction/carpenter/materials/adhesive',
          localImage: 'construction/carpenter/materials/adhesive',
          translations: { en: 'adhesive', es: 'adhesive', pt: 'adhesive', fr: 'adhesive', de: 'adhesive', it: 'adhesive', nl: 'lijm', zh: '粘合剂', ja: '接着剤', ru: 'клей' },
        },
        {
          id: 'construction/carpenter/materials/beams',
          localImage: 'construction/carpenter/materials/beams',
          translations: { en: 'beams', es: 'beams', pt: 'beams', fr: 'beams', de: 'beams', it: 'beams', nl: 'balken', zh: '横梁', ja: '梁', ru: 'балки' },
        },
        {
          id: 'construction/carpenter/materials/boards',
          localImage: 'construction/carpenter/materials/boards',
          translations: { en: 'boards', es: 'boards', pt: 'boards', fr: 'boards', de: 'boards', it: 'boards', nl: 'planken', zh: '板子', ja: '板材', ru: 'доски' },
        },
        {
          id: 'construction/carpenter/materials/brackets',
          localImage: 'construction/carpenter/materials/brackets',
          translations: { en: 'brackets', es: 'brackets', pt: 'brackets', fr: 'brackets', de: 'brackets', it: 'brackets', nl: 'beugels', zh: '支架', ja: 'ブラケット', ru: 'скобы' },
        },
        {
          id: 'construction/carpenter/materials/coating',
          localImage: 'construction/carpenter/materials/coating',
          translations: { en: 'coating', es: 'coating', pt: 'coating', fr: 'coating', de: 'coating', it: 'coating', nl: 'coating', zh: '涂层', ja: 'コーティング', ru: 'покрытие' },
        },
        {
          id: 'construction/carpenter/materials/connectors',
          localImage: 'construction/carpenter/materials/connectors',
          translations: { en: 'connectors', es: 'connectors', pt: 'connectors', fr: 'connectors', de: 'connectors', it: 'connectors', nl: 'connectors', zh: '连接器', ja: 'コネクター', ru: 'разъемы' },
        },
        {
          id: 'construction/carpenter/materials/filler',
          localImage: 'construction/carpenter/materials/filler',
          translations: { en: 'filler', es: 'filler', pt: 'filler', fr: 'filler', de: 'filler', it: 'filler', nl: 'vulmiddel', zh: '填充物', ja: 'フィラー', ru: 'наполнитель' },
        },
        {
          id: 'construction/carpenter/materials/finish',
          localImage: 'construction/carpenter/materials/finish',
          translations: { en: 'finish', es: 'finish', pt: 'finish', fr: 'finish', de: 'finish', it: 'finish', nl: 'afwerking', zh: '涂层', ja: '仕上げ', ru: 'отделочное покрытие' },
        },
        {
          id: 'construction/carpenter/materials/foam',
          localImage: 'construction/carpenter/materials/foam',
          translations: { en: 'foam', es: 'foam', pt: 'foam', fr: 'foam', de: 'foam', it: 'foam', nl: 'schuim', zh: '泡沫', ja: 'フォーム', ru: 'пена' },
        },
        {
          id: 'construction/carpenter/materials/frames',
          localImage: 'construction/carpenter/materials/frames',
          translations: { en: 'frames', es: 'frames', pt: 'frames', fr: 'frames', de: 'frames', it: 'frames', nl: 'frames', zh: '框架', ja: 'フレーム', ru: 'рамы' },
        },
        {
          id: 'construction/carpenter/materials/glue',
          localImage: 'construction/carpenter/materials/glue',
          translations: { en: 'glue', es: 'glue', pt: 'glue', fr: 'glue', de: 'glue', it: 'glue', nl: 'lijm', zh: '胶水', ja: '接着剤', ru: 'клей' },
        },
        {
          id: 'construction/carpenter/materials/handles',
          localImage: 'construction/carpenter/materials/handles',
          translations: { en: 'handles', es: 'handles', pt: 'handles', fr: 'handles', de: 'handles', it: 'handles', nl: 'handvatten', zh: '把手', ja: 'ハンドル', ru: 'рукоятки' },
        },
        {
          id: 'construction/carpenter/materials/hinges',
          localImage: 'construction/carpenter/materials/hinges',
          translations: { en: 'hinges', es: 'hinges', pt: 'hinges', fr: 'hinges', de: 'hinges', it: 'hinges', nl: 'scharnieren', zh: '铰链', ja: 'ヒンジ', ru: 'петли' },
        },
        {
          id: 'construction/carpenter/materials/joints',
          localImage: 'construction/carpenter/materials/joints',
          translations: { en: 'joints', es: 'joints', pt: 'joints', fr: 'joints', de: 'joints', it: 'joints', nl: 'verbindingen', zh: '接头', ja: 'ジョイント', ru: 'соединения' },
        },
        {
          id: 'construction/carpenter/materials/laminate',
          localImage: 'construction/carpenter/materials/laminate',
          translations: { en: 'laminate', es: 'laminate', pt: 'laminate', fr: 'laminate', de: 'laminate', it: 'laminate', nl: 'laminaat', zh: '层压板', ja: 'ラミネート', ru: 'ламинат' },
        },
        {
          id: 'construction/carpenter/materials/nails',
          localImage: 'construction/carpenter/materials/nails',
          translations: { en: 'nails', es: 'nails', pt: 'nails', fr: 'nails', de: 'nails', it: 'nails', nl: 'spijkers', zh: '钉子', ja: '釘', ru: 'гвозди' },
        },
        {
          id: 'construction/carpenter/materials/paint',
          localImage: 'construction/carpenter/materials/paint',
          translations: { en: 'paint', es: 'paint', pt: 'paint', fr: 'paint', de: 'paint', it: 'paint', nl: 'verf', zh: '油漆', ja: 'ペンキ', ru: 'краска' },
        },
        {
          id: 'construction/carpenter/materials/panels',
          localImage: 'construction/carpenter/materials/panels',
          translations: { en: 'panels', es: 'panels', pt: 'panels', fr: 'panels', de: 'panels', it: 'panels', nl: 'panelen', zh: '面板', ja: 'パネル', ru: 'панели' },
        },
        {
          id: 'construction/carpenter/materials/planks',
          localImage: 'construction/carpenter/materials/planks',
          translations: { en: 'planks', es: 'planks', pt: 'planks', fr: 'planks', de: 'planks', it: 'planks', nl: 'planken', zh: '木板', ja: '板', ru: 'доски' },
        },
        {
          id: 'construction/carpenter/materials/plywood',
          localImage: 'construction/carpenter/materials/plywood',
          translations: { en: 'plywood', es: 'plywood', pt: 'plywood', fr: 'plywood', de: 'plywood', it: 'plywood', nl: 'multiplex', zh: '胶合板', ja: '合板', ru: 'фанера' },
        },
        {
          id: 'construction/carpenter/materials/polish',
          localImage: 'construction/carpenter/materials/polish',
          translations: { en: 'polish', es: 'pulimento', pt: 'polimento', fr: 'polish', de: 'Politur', it: 'lucido', nl: 'poetsmiddel', zh: '抛光剂', ja: 'ポリッシュ', ru: 'полироль' },
        },
        {
          id: 'construction/carpenter/materials/resin',
          localImage: 'construction/carpenter/materials/resin',
          translations: { en: 'resin', es: 'resin', pt: 'resin', fr: 'resin', de: 'resin', it: 'resin', nl: 'hars', zh: '树脂', ja: '樹脂', ru: 'смола' },
        },
        {
          id: 'construction/carpenter/materials/rods',
          localImage: 'construction/carpenter/materials/rods',
          translations: { en: 'rods', es: 'rods', pt: 'rods', fr: 'rods', de: 'rods', it: 'rods', nl: 'staven', zh: '杆', ja: 'ロッド', ru: 'прутки' },
        },
        {
          id: 'construction/carpenter/materials/screws',
          localImage: 'construction/carpenter/materials/screws',
          translations: { en: 'screws', es: 'screws', pt: 'screws', fr: 'screws', de: 'screws', it: 'screws', nl: 'schroeven', zh: '螺丝', ja: 'ネジ', ru: 'винты' },
        },
        {
          id: 'construction/carpenter/materials/sheets',
          localImage: 'construction/carpenter/materials/sheets',
          translations: { en: 'sheets', es: 'sheets', pt: 'sheets', fr: 'sheets', de: 'sheets', it: 'sheets', nl: 'lakens', zh: '床单', ja: 'シーツ', ru: 'простыни' },
        },
        {
          id: 'construction/carpenter/materials/strips',
          localImage: 'construction/carpenter/materials/strips',
          translations: { en: 'strips', es: 'strips', pt: 'strips', fr: 'strips', de: 'strips', it: 'strips', nl: 'stroken', zh: '条', ja: 'ストリップ', ru: 'полоски' },
        },
        {
          id: 'construction/carpenter/materials/tape',
          localImage: 'construction/carpenter/materials/tape',
          translations: { en: 'tape', es: 'cinta', pt: 'fita', fr: 'ruban', de: 'Klebeband', it: 'nastro', nl: 'tape', zh: '胶带', ja: 'テープ', ru: 'лента' },
        },
        {
          id: 'construction/carpenter/materials/timber',
          localImage: 'construction/carpenter/materials/timber',
          translations: { en: 'timber', es: 'timber', pt: 'timber', fr: 'timber', de: 'timber', it: 'timber', nl: 'hout', zh: '木材', ja: '木材', ru: 'пиломатериалы' },
        },
        {
          id: 'construction/carpenter/materials/varnish',
          localImage: 'construction/carpenter/materials/varnish',
          translations: { en: 'varnish', es: 'varnish', pt: 'varnish', fr: 'varnish', de: 'varnish', it: 'varnish', nl: 'vernis', zh: '清漆', ja: 'ニス', ru: 'лак' },
        },
        {
          id: 'construction/carpenter/materials/wood',
          localImage: 'construction/carpenter/materials/wood',
          translations: { en: 'wood', es: 'wood', pt: 'wood', fr: 'wood', de: 'wood', it: 'wood', nl: 'hout', zh: '木材', ja: '木材', ru: 'дерево' },
        }
        ],
      }
      ],
    },
    {
      id: 'electrician',
      name: { en: 'Electrician', es: 'Electricista', pt: 'Eletricista', fr: 'Électricien', de: 'Elektriker', it: 'Elettricista', nl: 'Elektricien', zh: '电工', ja: '電気技師', ru: 'Электрик' },
      icon: '⚡',
      roles: [
      {
        id: 'tools',
        name: { en: 'Tools', es: 'Herramientas', pt: 'Ferramentas', fr: 'Outils', de: 'Werkzeuge', it: 'Attrezzi', nl: 'Gereedschap', zh: '工具', ja: '道具', ru: 'Инструменты' },
        icon: '🔧',
        items: [
        {
          id: 'construction/electrician/tools/clamp_meter',
          localImage: 'construction/electrician/tools/clamp_meter',
          translations: { en: 'clamp meter', es: 'clamp meter', pt: 'clamp meter', fr: 'clamp meter', de: 'clamp meter', it: 'clamp meter', nl: 'stroomtang', zh: '钳形电流表', ja: 'クランプメーター', ru: 'токоизмерительные клещи' },
        },
        {
          id: 'construction/electrician/tools/crimper',
          localImage: 'construction/electrician/tools/crimper',
          translations: { en: 'crimper', es: 'crimper', pt: 'crimper', fr: 'crimper', de: 'crimper', it: 'crimper', nl: 'krimpgereedschap', zh: '压线钳', ja: 'クリンパー', ru: 'обжимной инструмент' },
        },
        {
          id: 'construction/electrician/tools/cutter',
          localImage: 'construction/electrician/tools/cutter',
          translations: { en: 'cutter', es: 'cortador', pt: 'cortador', fr: 'cutter', de: 'Cutter', it: 'taglierino', nl: 'snijder', zh: '切割机', ja: 'カッター', ru: 'резак' },
        },
        {
          id: 'construction/electrician/tools/drill',
          localImage: 'construction/electrician/tools/drill',
          translations: { en: 'drill', es: 'taladro', pt: 'furadeira', fr: 'perceuse', de: 'Bohrmaschine', it: 'trapano', nl: 'boor', zh: '钻头', ja: 'ドリル', ru: 'дрель' },
        },
        {
          id: 'construction/electrician/tools/fish_tape',
          localImage: 'construction/electrician/tools/fish_tape',
          translations: { en: 'fish tape', es: 'fish tape', pt: 'fish tape', fr: 'fish tape', de: 'fish tape', it: 'fish tape', nl: 'trekstaal', zh: '穿线器', ja: 'フィッシュテープ', ru: 'протяжка для кабеля' },
        },
        {
          id: 'construction/electrician/tools/knife',
          localImage: 'construction/electrician/tools/knife',
          translations: { en: 'knife', es: 'cuchillo', pt: 'faca', fr: 'couteau', de: 'Messer', it: 'coltello', nl: 'mes', zh: '刀', ja: 'ナイフ', ru: 'нож' },
        },
        {
          id: 'construction/electrician/tools/ladder',
          localImage: 'construction/electrician/tools/ladder',
          translations: { en: 'ladder', es: 'escalera', pt: 'escada', fr: 'échelle', de: 'Leiter', it: 'scala', nl: 'ladder', zh: '梯子', ja: 'はしご', ru: 'лестница' },
        },
        {
          id: 'construction/electrician/tools/level',
          localImage: 'construction/electrician/tools/level',
          translations: { en: 'level', es: 'nivel', pt: 'nível', fr: 'niveau', de: 'Wasserwaage', it: 'livella', nl: 'waterpas', zh: '水平仪', ja: '水平器', ru: 'уровень' },
        },
        {
          id: 'construction/electrician/tools/multimeter',
          localImage: 'construction/electrician/tools/multimeter',
          translations: { en: 'multimeter', es: 'multimeter', pt: 'multimeter', fr: 'multimeter', de: 'multimeter', it: 'multimeter', nl: 'multimeter', zh: '万用表', ja: 'マルチメーター', ru: 'мультиметр' },
        },
        {
          id: 'construction/electrician/tools/pliers',
          localImage: 'construction/electrician/tools/pliers',
          translations: { en: 'pliers', es: 'alicates', pt: 'alicate', fr: 'pinces', de: 'Zange', it: 'pinze', nl: 'tang', zh: '钳子', ja: 'プライヤー', ru: 'плоскогубцы' },
        },
        {
          id: 'construction/electrician/tools/punch_tool',
          localImage: 'construction/electrician/tools/punch_tool',
          translations: { en: 'punch tool', es: 'punch tool', pt: 'punch tool', fr: 'punch tool', de: 'punch tool', it: 'punch tool', nl: 'ponsstempel', zh: '冲孔工具', ja: 'パンチツール', ru: 'пробойник' },
        },
        {
          id: 'construction/electrician/tools/scissors',
          localImage: 'construction/electrician/tools/scissors',
          translations: { en: 'scissors', es: 'tijeras', pt: 'tesoura', fr: 'ciseaux', de: 'Schere', it: 'forbici', nl: 'schaar', zh: '剪刀', ja: 'ハサミ', ru: 'ножницы' },
        },
        {
          id: 'construction/electrician/tools/screwdriver',
          localImage: 'construction/electrician/tools/screwdriver',
          translations: { en: 'screwdriver', es: 'screwdriver', pt: 'screwdriver', fr: 'screwdriver', de: 'screwdriver', it: 'screwdriver', nl: 'schroevendraaier', zh: '螺丝刀', ja: 'ドライバー', ru: 'отвертка' },
        },
        {
          id: 'construction/electrician/tools/tape_measure',
          localImage: 'construction/electrician/tools/tape_measure',
          translations: { en: 'tape measure', es: 'tape measure', pt: 'tape measure', fr: 'tape measure', de: 'tape measure', it: 'tape measure', nl: 'meetlint', zh: '卷尺', ja: 'メジャー', ru: 'рулетка' },
        },
        {
          id: 'construction/electrician/tools/tester',
          localImage: 'construction/electrician/tools/tester',
          translations: { en: 'tester', es: 'tester', pt: 'tester', fr: 'tester', de: 'tester', it: 'tester', nl: 'tester', zh: '测试仪', ja: 'テスター', ru: 'тестер' },
        },
        {
          id: 'construction/electrician/tools/tool_belt',
          localImage: 'construction/electrician/tools/tool_belt',
          translations: { en: 'tool belt', es: 'tool belt', pt: 'tool belt', fr: 'tool belt', de: 'tool belt', it: 'tool belt', nl: 'gereedschapsriem', zh: '工具腰带', ja: 'ツールベルト', ru: 'поясная сумка для инструментов' },
        },
        {
          id: 'construction/electrician/tools/torch',
          localImage: 'construction/electrician/tools/torch',
          translations: { en: 'torch', es: 'torch', pt: 'torch', fr: 'torch', de: 'torch', it: 'torch', nl: 'lasbrander', zh: '焊炬', ja: 'トーチ', ru: 'горелка' },
        },
        {
          id: 'construction/electrician/tools/voltage_tester',
          localImage: 'construction/electrician/tools/voltage_tester',
          translations: { en: 'voltage tester', es: 'voltage tester', pt: 'voltage tester', fr: 'voltage tester', de: 'voltage tester', it: 'voltage tester', nl: 'spanningzoeker', zh: '电压测试仪', ja: '電圧テスター', ru: 'вольтметр' },
        },
        {
          id: 'construction/electrician/tools/wire_stripper',
          localImage: 'construction/electrician/tools/wire_stripper',
          translations: { en: 'wire stripper', es: 'wire stripper', pt: 'wire stripper', fr: 'wire stripper', de: 'wire stripper', it: 'wire stripper', nl: 'draadstripper', zh: '剥线钳', ja: 'ワイヤーストリッパー', ru: 'кабелерез' },
        },
        {
          id: 'construction/electrician/tools/wrench',
          localImage: 'construction/electrician/tools/wrench',
          translations: { en: 'wrench', es: 'llave', pt: 'chave inglesa', fr: 'clé', de: 'Schraubenschlüssel', it: 'chiave', nl: 'moersleutel', zh: '扳手', ja: 'レンチ', ru: 'гаечный ключ' },
        }
        ],
      },
      {
        id: 'materials',
        name: { en: 'Materials', es: 'Materiales', pt: 'Materiais', fr: 'Matériaux', de: 'Materialien', it: 'Materiali', nl: 'Materialen', zh: '材料', ja: '材料', ru: 'Материалы' },
        icon: '📦',
        items: [
        {
          id: 'construction/electrician/materials/adapters',
          localImage: 'construction/electrician/materials/adapters',
          translations: { en: 'adapters', es: 'adapters', pt: 'adapters', fr: 'adapters', de: 'adapters', it: 'adapters', nl: 'adapters', zh: '适配器', ja: 'アダプター', ru: 'адаптеры' },
        },
        {
          id: 'construction/electrician/materials/batteries',
          localImage: 'construction/electrician/materials/batteries',
          translations: { en: 'batteries', es: 'batteries', pt: 'batteries', fr: 'batteries', de: 'batteries', it: 'batteries', nl: 'batterijen', zh: '电池', ja: '電池', ru: 'батарейки' },
        },
        {
          id: 'construction/electrician/materials/boxes',
          localImage: 'construction/electrician/materials/boxes',
          translations: { en: 'boxes', es: 'boxes', pt: 'boxes', fr: 'boxes', de: 'boxes', it: 'boxes', nl: 'dozen', zh: '箱子', ja: 'ボックス', ru: 'коробки' },
        },
        {
          id: 'construction/electrician/materials/breakers',
          localImage: 'construction/electrician/materials/breakers',
          translations: { en: 'breakers', es: 'breakers', pt: 'breakers', fr: 'breakers', de: 'breakers', it: 'breakers', nl: 'brekers', zh: '断路器', ja: 'ブレーカー', ru: 'автоматические выключатели' },
        },
        {
          id: 'construction/electrician/materials/cables',
          localImage: 'construction/electrician/materials/cables',
          translations: { en: 'cables', es: 'cables', pt: 'cables', fr: 'cables', de: 'cables', it: 'cables', nl: 'kabels', zh: '电缆', ja: 'ケーブル', ru: 'кабели' },
        },
        {
          id: 'construction/electrician/materials/cables_set',
          localImage: 'construction/electrician/materials/cables_set',
          translations: { en: 'cables set', es: 'cables set', pt: 'cables set', fr: 'cables set', de: 'cables set', it: 'cables set', nl: 'kabelset', zh: '电缆套装', ja: 'ケーブルセット', ru: 'набор кабелей' },
        },
        {
          id: 'construction/electrician/materials/caps',
          localImage: 'construction/electrician/materials/caps',
          translations: { en: 'caps', es: 'caps', pt: 'caps', fr: 'caps', de: 'caps', it: 'caps', nl: 'doppen', zh: '帽子', ja: 'キャップ', ru: 'крышки' },
        },
        {
          id: 'construction/electrician/materials/circuits',
          localImage: 'construction/electrician/materials/circuits',
          translations: { en: 'circuits', es: 'circuits', pt: 'circuits', fr: 'circuits', de: 'circuits', it: 'circuits', nl: 'schakelingen', zh: '电路', ja: '回路', ru: 'схемы' },
        },
        {
          id: 'construction/electrician/materials/conduits',
          localImage: 'construction/electrician/materials/conduits',
          translations: { en: 'conduits', es: 'conduits', pt: 'conduits', fr: 'conduits', de: 'conduits', it: 'conduits', nl: 'leidingen', zh: '导管', ja: '導管', ru: 'трубопроводы' },
        },
        {
          id: 'construction/electrician/materials/connectors',
          localImage: 'construction/electrician/materials/connectors',
          translations: { en: 'connectors', es: 'connectors', pt: 'connectors', fr: 'connectors', de: 'connectors', it: 'connectors', nl: 'connectors', zh: '连接器', ja: 'コネクター', ru: 'разъемы' },
        },
        {
          id: 'construction/electrician/materials/covers',
          localImage: 'construction/electrician/materials/covers',
          translations: { en: 'covers', es: 'covers', pt: 'covers', fr: 'covers', de: 'covers', it: 'covers', nl: 'hoezen', zh: '盖子', ja: 'カバー', ru: 'крышки' },
        },
        {
          id: 'construction/electrician/materials/fuse',
          localImage: 'construction/electrician/materials/fuse',
          translations: { en: 'fuse', es: 'fuse', pt: 'fuse', fr: 'fuse', de: 'fuse', it: 'fuse', nl: 'zekering', zh: '保险丝', ja: 'ヒューズ', ru: 'предохранитель' },
        },
        {
          id: 'construction/electrician/materials/holders',
          localImage: 'construction/electrician/materials/holders',
          translations: { en: 'holders', es: 'holders', pt: 'holders', fr: 'holders', de: 'holders', it: 'holders', nl: 'houders', zh: '夹持器', ja: 'ホルダー', ru: 'держатели' },
        },
        {
          id: 'construction/electrician/materials/insulation',
          localImage: 'construction/electrician/materials/insulation',
          translations: { en: 'insulation', es: 'insulation', pt: 'insulation', fr: 'insulation', de: 'insulation', it: 'insulation', nl: 'isolatie', zh: '隔热材料', ja: '断熱材', ru: 'изоляция' },
        },
        {
          id: 'construction/electrician/materials/modules',
          localImage: 'construction/electrician/materials/modules',
          translations: { en: 'modules', es: 'modules', pt: 'modules', fr: 'modules', de: 'modules', it: 'modules', nl: 'modules', zh: '模块', ja: 'モジュール', ru: 'модули' },
        },
        {
          id: 'construction/electrician/materials/mounts',
          localImage: 'construction/electrician/materials/mounts',
          translations: { en: 'mounts', es: 'mounts', pt: 'mounts', fr: 'mounts', de: 'mounts', it: 'mounts', nl: 'montages', zh: '支架', ja: 'マウント', ru: 'кронштейны' },
        },
        {
          id: 'construction/electrician/materials/panels',
          localImage: 'construction/electrician/materials/panels',
          translations: { en: 'panels', es: 'panels', pt: 'panels', fr: 'panels', de: 'panels', it: 'panels', nl: 'panelen', zh: '面板', ja: 'パネル', ru: 'панели' },
        },
        {
          id: 'construction/electrician/materials/plugs',
          localImage: 'construction/electrician/materials/plugs',
          translations: { en: 'plugs', es: 'plugs', pt: 'plugs', fr: 'plugs', de: 'plugs', it: 'plugs', nl: 'pluggen', zh: '插头', ja: 'プラグ', ru: 'разъемы' },
        },
        {
          id: 'construction/electrician/materials/relays',
          localImage: 'construction/electrician/materials/relays',
          translations: { en: 'relays', es: 'relays', pt: 'relays', fr: 'relays', de: 'relays', it: 'relays', nl: 'relais', zh: '继电器', ja: 'リレー', ru: 'реле' },
        },
        {
          id: 'construction/electrician/materials/resistors',
          localImage: 'construction/electrician/materials/resistors',
          translations: { en: 'resistors', es: 'resistors', pt: 'resistors', fr: 'resistors', de: 'resistors', it: 'resistors', nl: 'weerstanden', zh: '电阻', ja: '抵抗器', ru: 'резисторы' },
        },
        {
          id: 'construction/electrician/materials/sensors',
          localImage: 'construction/electrician/materials/sensors',
          translations: { en: 'sensors', es: 'sensors', pt: 'sensors', fr: 'sensors', de: 'sensors', it: 'sensors', nl: 'sensoren', zh: '传感器', ja: 'センサー', ru: 'датчики' },
        },
        {
          id: 'construction/electrician/materials/shields',
          localImage: 'construction/electrician/materials/shields',
          translations: { en: 'shields', es: 'shields', pt: 'shields', fr: 'shields', de: 'shields', it: 'shields', nl: 'schilden', zh: '防护罩', ja: 'シールド', ru: 'щиты' },
        },
        {
          id: 'construction/electrician/materials/sleeves',
          localImage: 'construction/electrician/materials/sleeves',
          translations: { en: 'sleeves', es: 'sleeves', pt: 'sleeves', fr: 'sleeves', de: 'sleeves', it: 'sleeves', nl: 'mouwen', zh: '套管', ja: 'スリーブ', ru: 'рукава' },
        },
        {
          id: 'construction/electrician/materials/socket',
          localImage: 'construction/electrician/materials/socket',
          translations: { en: 'socket', es: 'socket', pt: 'socket', fr: 'socket', de: 'socket', it: 'socket', nl: 'stopcontact', zh: '插座', ja: 'ソケット', ru: 'розетка' },
        },
        {
          id: 'construction/electrician/materials/switch',
          localImage: 'construction/electrician/materials/switch',
          translations: { en: 'switch', es: 'switch', pt: 'switch', fr: 'switch', de: 'switch', it: 'switch', nl: 'schakelaar', zh: '开关', ja: 'スイッチ', ru: 'выключатель' },
        },
        {
          id: 'construction/electrician/materials/switches_set',
          localImage: 'construction/electrician/materials/switches_set',
          translations: { en: 'switches set', es: 'switches set', pt: 'switches set', fr: 'switches set', de: 'switches set', it: 'switches set', nl: 'schakelaarset', zh: '开关套装', ja: 'スイッチセット', ru: 'набор выключателей' },
        },
        {
          id: 'construction/electrician/materials/tape',
          localImage: 'construction/electrician/materials/tape',
          translations: { en: 'tape', es: 'cinta', pt: 'fita', fr: 'ruban', de: 'Klebeband', it: 'nastro', nl: 'tape', zh: '胶带', ja: 'テープ', ru: 'лента' },
        },
        {
          id: 'construction/electrician/materials/terminals',
          localImage: 'construction/electrician/materials/terminals',
          translations: { en: 'terminals', es: 'terminals', pt: 'terminals', fr: 'terminals', de: 'terminals', it: 'terminals', nl: 'terminals', zh: '终端', ja: 'ターミナル', ru: 'терминалы' },
        },
        {
          id: 'construction/electrician/materials/wires',
          localImage: 'construction/electrician/materials/wires',
          translations: { en: 'wires', es: 'wires', pt: 'wires', fr: 'wires', de: 'wires', it: 'wires', nl: 'draden', zh: '电线', ja: 'ワイヤー', ru: 'провода' },
        },
        {
          id: 'construction/electrician/materials/wraps',
          localImage: 'construction/electrician/materials/wraps',
          translations: { en: 'wraps', es: 'wraps', pt: 'wraps', fr: 'wraps', de: 'wraps', it: 'wraps', nl: 'wraps', zh: '包装', ja: 'ラップ', ru: 'обертки' },
        }
        ],
      }
      ],
    },
    {
      id: 'general_laborer',
      name: { en: 'General Laborer', es: 'Obrero General', pt: 'Peão', fr: 'Manœuvre', de: 'Hilfsarbeiter', it: 'Operaio', nl: 'Algemeen arbeider', zh: '普通工人', ja: '一般作業員', ru: 'Разнорабочий' },
      icon: '👷',
      roles: [
      {
        id: 'tools',
        name: { en: 'Tools', es: 'Herramientas', pt: 'Ferramentas', fr: 'Outils', de: 'Werkzeuge', it: 'Attrezzi', nl: 'Gereedschap', zh: '工具', ja: '道具', ru: 'Инструменты' },
        icon: '🔧',
        items: [
        {
          id: 'construction/general_laborer/tools/bucket',
          localImage: 'construction/general_laborer/tools/bucket',
          translations: { en: 'bucket', es: 'cubo', pt: 'balde', fr: 'seau', de: 'Eimer', it: 'secchio', nl: 'emmer', zh: '水桶', ja: 'バケツ', ru: 'ведро' },
        },
        {
          id: 'construction/general_laborer/tools/chisel',
          localImage: 'construction/general_laborer/tools/chisel',
          translations: { en: 'chisel', es: 'cincel', pt: 'cinzel', fr: 'ciseau', de: 'Meißel', it: 'scalpello', nl: 'beitel', zh: '凿子', ja: 'ノミ', ru: 'долото' },
        },
        {
          id: 'construction/general_laborer/tools/clamp',
          localImage: 'construction/general_laborer/tools/clamp',
          translations: { en: 'clamp', es: 'clamp', pt: 'clamp', fr: 'clamp', de: 'clamp', it: 'clamp', nl: 'klem', zh: '夹具', ja: 'クランプ', ru: 'зажим' },
        },
        {
          id: 'construction/general_laborer/tools/crowbar',
          localImage: 'construction/general_laborer/tools/crowbar',
          translations: { en: 'crowbar', es: 'crowbar', pt: 'crowbar', fr: 'crowbar', de: 'crowbar', it: 'crowbar', nl: 'koevoet', zh: '撬棒', ja: 'バール', ru: 'монтировка' },
        },
        {
          id: 'construction/general_laborer/tools/drill',
          localImage: 'construction/general_laborer/tools/drill',
          translations: { en: 'drill', es: 'taladro', pt: 'furadeira', fr: 'perceuse', de: 'Bohrmaschine', it: 'trapano', nl: 'boor', zh: '钻头', ja: 'ドリル', ru: 'дрель' },
        },
        {
          id: 'construction/general_laborer/tools/hammer',
          localImage: 'construction/general_laborer/tools/hammer',
          translations: { en: 'hammer', es: 'martillo', pt: 'martelo', fr: 'marteau', de: 'Hammer', it: 'martello', nl: 'hamer', zh: '锤子', ja: 'ハンマー', ru: 'молоток' },
        },
        {
          id: 'construction/general_laborer/tools/hoe',
          localImage: 'construction/general_laborer/tools/hoe',
          translations: { en: 'hoe', es: 'azada', pt: 'enxada', fr: 'houe', de: 'Hacke', it: 'zappa', nl: 'schoffel', zh: '锄头', ja: '鍬', ru: 'мотыга' },
        },
        {
          id: 'construction/general_laborer/tools/ladder',
          localImage: 'construction/general_laborer/tools/ladder',
          translations: { en: 'ladder', es: 'escalera', pt: 'escada', fr: 'échelle', de: 'Leiter', it: 'scala', nl: 'ladder', zh: '梯子', ja: 'はしご', ru: 'лестница' },
        },
        {
          id: 'construction/general_laborer/tools/level',
          localImage: 'construction/general_laborer/tools/level',
          translations: { en: 'level', es: 'nivel', pt: 'nível', fr: 'niveau', de: 'Wasserwaage', it: 'livella', nl: 'waterpas', zh: '水平仪', ja: '水平器', ru: 'уровень' },
        },
        {
          id: 'construction/general_laborer/tools/mallet',
          localImage: 'construction/general_laborer/tools/mallet',
          translations: { en: 'mallet', es: 'mallet', pt: 'mallet', fr: 'mallet', de: 'mallet', it: 'mallet', nl: 'houten hamer', zh: '木槌', ja: 'マレット', ru: 'деревянный молоток' },
        },
        {
          id: 'construction/general_laborer/tools/mixer',
          localImage: 'construction/general_laborer/tools/mixer',
          translations: { en: 'mixer', es: 'mezclador', pt: 'betoneira', fr: 'mélangeur', de: 'Mischer', it: 'miscelatore', nl: 'mixer', zh: '搅拌机', ja: 'ミキサー', ru: 'миксер' },
        },
        {
          id: 'construction/general_laborer/tools/pickaxe',
          localImage: 'construction/general_laborer/tools/pickaxe',
          translations: { en: 'pickaxe', es: 'pickaxe', pt: 'pickaxe', fr: 'pickaxe', de: 'pickaxe', it: 'pickaxe', nl: 'houweel', zh: '镐', ja: 'つるはし', ru: 'кирка' },
        },
        {
          id: 'construction/general_laborer/tools/pliers',
          localImage: 'construction/general_laborer/tools/pliers',
          translations: { en: 'pliers', es: 'alicates', pt: 'alicate', fr: 'pinces', de: 'Zange', it: 'pinze', nl: 'tang', zh: '钳子', ja: 'プライヤー', ru: 'плоскогубцы' },
        },
        {
          id: 'construction/general_laborer/tools/rake',
          localImage: 'construction/general_laborer/tools/rake',
          translations: { en: 'rake', es: 'rastrillo', pt: 'ancinho', fr: 'râteau', de: 'Rechen', it: 'rastrello', nl: 'hark', zh: '耙子', ja: '熊手', ru: 'грабли' },
        },
        {
          id: 'construction/general_laborer/tools/saw',
          localImage: 'construction/general_laborer/tools/saw',
          translations: { en: 'saw', es: 'sierra', pt: 'serra', fr: 'scie', de: 'Säge', it: 'sega', nl: 'zaag', zh: '锯', ja: 'ノコギリ', ru: 'пила' },
        },
        {
          id: 'construction/general_laborer/tools/screwdriver',
          localImage: 'construction/general_laborer/tools/screwdriver',
          translations: { en: 'screwdriver', es: 'screwdriver', pt: 'screwdriver', fr: 'screwdriver', de: 'screwdriver', it: 'screwdriver', nl: 'schroevendraaier', zh: '螺丝刀', ja: 'ドライバー', ru: 'отвертка' },
        },
        {
          id: 'construction/general_laborer/tools/shovel',
          localImage: 'construction/general_laborer/tools/shovel',
          translations: { en: 'shovel', es: 'pala', pt: 'pá', fr: 'pelle', de: 'Schaufel', it: 'vanga', nl: 'schop', zh: '铲子', ja: 'シャベル', ru: 'лопата' },
        },
        {
          id: 'construction/general_laborer/tools/tape_measure',
          localImage: 'construction/general_laborer/tools/tape_measure',
          translations: { en: 'tape measure', es: 'tape measure', pt: 'tape measure', fr: 'tape measure', de: 'tape measure', it: 'tape measure', nl: 'meetlint', zh: '卷尺', ja: 'メジャー', ru: 'рулетка' },
        },
        {
          id: 'construction/general_laborer/tools/wheelbarrow',
          localImage: 'construction/general_laborer/tools/wheelbarrow',
          translations: { en: 'wheelbarrow', es: 'carretilla', pt: 'carrinho de mão', fr: 'brouette', de: 'Schubkarre', it: 'carriola', nl: 'kruiwagen', zh: '手推车', ja: '一輪車', ru: 'тачка' },
        },
        {
          id: 'construction/general_laborer/tools/wrench',
          localImage: 'construction/general_laborer/tools/wrench',
          translations: { en: 'wrench', es: 'llave', pt: 'chave inglesa', fr: 'clé', de: 'Schraubenschlüssel', it: 'chiave', nl: 'moersleutel', zh: '扳手', ja: 'レンチ', ru: 'гаечный ключ' },
        }
        ],
      },
      {
        id: 'materials',
        name: { en: 'Materials', es: 'Materiales', pt: 'Materiais', fr: 'Matériaux', de: 'Materialien', it: 'Materiali', nl: 'Materialen', zh: '材料', ja: '材料', ru: 'Материалы' },
        icon: '📦',
        items: [
        {
          id: 'construction/general_laborer/materials/adhesive',
          localImage: 'construction/general_laborer/materials/adhesive',
          translations: { en: 'adhesive', es: 'adhesive', pt: 'adhesive', fr: 'adhesive', de: 'adhesive', it: 'adhesive', nl: 'lijm', zh: '粘合剂', ja: '接着剤', ru: 'клей' },
        },
        {
          id: 'construction/general_laborer/materials/boards',
          localImage: 'construction/general_laborer/materials/boards',
          translations: { en: 'boards', es: 'boards', pt: 'boards', fr: 'boards', de: 'boards', it: 'boards', nl: 'planken', zh: '板子', ja: '板材', ru: 'доски' },
        },
        {
          id: 'construction/general_laborer/materials/bricks',
          localImage: 'construction/general_laborer/materials/bricks',
          translations: { en: 'bricks', es: 'bricks', pt: 'bricks', fr: 'bricks', de: 'bricks', it: 'bricks', nl: 'stenen', zh: '砖块', ja: 'レンガ', ru: 'кирпичи' },
        },
        {
          id: 'construction/general_laborer/materials/cables',
          localImage: 'construction/general_laborer/materials/cables',
          translations: { en: 'cables', es: 'cables', pt: 'cables', fr: 'cables', de: 'cables', it: 'cables', nl: 'kabels', zh: '电缆', ja: 'ケーブル', ru: 'кабели' },
        },
        {
          id: 'construction/general_laborer/materials/cement',
          localImage: 'construction/general_laborer/materials/cement',
          translations: { en: 'cement', es: 'cement', pt: 'cement', fr: 'cement', de: 'cement', it: 'cement', nl: 'cement', zh: '水泥', ja: 'セメント', ru: 'цемент' },
        },
        {
          id: 'construction/general_laborer/materials/coating',
          localImage: 'construction/general_laborer/materials/coating',
          translations: { en: 'coating', es: 'coating', pt: 'coating', fr: 'coating', de: 'coating', it: 'coating', nl: 'coating', zh: '涂层', ja: 'コーティング', ru: 'покрытие' },
        },
        {
          id: 'construction/general_laborer/materials/compound',
          localImage: 'construction/general_laborer/materials/compound',
          translations: { en: 'compound', es: 'compound', pt: 'compound', fr: 'compound', de: 'compound', it: 'compound', nl: 'compound', zh: '化合物', ja: 'コンパウンド', ru: 'состав' },
        },
        {
          id: 'construction/general_laborer/materials/concrete',
          localImage: 'construction/general_laborer/materials/concrete',
          translations: { en: 'concrete', es: 'concrete', pt: 'concrete', fr: 'concrete', de: 'concrete', it: 'concrete', nl: 'beton', zh: '混凝土', ja: 'コンクリート', ru: 'бетон' },
        },
        {
          id: 'construction/general_laborer/materials/dust',
          localImage: 'construction/general_laborer/materials/dust',
          translations: { en: 'dust', es: 'dust', pt: 'dust', fr: 'dust', de: 'dust', it: 'dust', nl: 'stof', zh: '灰尘', ja: '粉塵', ru: 'пыль' },
        },
        {
          id: 'construction/general_laborer/materials/filler',
          localImage: 'construction/general_laborer/materials/filler',
          translations: { en: 'filler', es: 'filler', pt: 'filler', fr: 'filler', de: 'filler', it: 'filler', nl: 'vulmiddel', zh: '填充物', ja: 'フィラー', ru: 'наполнитель' },
        },
        {
          id: 'construction/general_laborer/materials/foam',
          localImage: 'construction/general_laborer/materials/foam',
          translations: { en: 'foam', es: 'foam', pt: 'foam', fr: 'foam', de: 'foam', it: 'foam', nl: 'schuim', zh: '泡沫', ja: 'フォーム', ru: 'пена' },
        },
        {
          id: 'construction/general_laborer/materials/glue',
          localImage: 'construction/general_laborer/materials/glue',
          translations: { en: 'glue', es: 'glue', pt: 'glue', fr: 'glue', de: 'glue', it: 'glue', nl: 'lijm', zh: '胶水', ja: '接着剤', ru: 'клей' },
        },
        {
          id: 'construction/general_laborer/materials/gravel',
          localImage: 'construction/general_laborer/materials/gravel',
          translations: { en: 'gravel', es: 'gravel', pt: 'gravel', fr: 'gravel', de: 'gravel', it: 'gravel', nl: 'grind', zh: '砾石', ja: '砂利', ru: 'гравий' },
        },
        {
          id: 'construction/general_laborer/materials/grit',
          localImage: 'construction/general_laborer/materials/grit',
          translations: { en: 'grit', es: 'grit', pt: 'grit', fr: 'grit', de: 'grit', it: 'grit', nl: 'schuurmiddel', zh: '砂粒', ja: 'グリット', ru: 'абразив' },
        },
        {
          id: 'construction/general_laborer/materials/insulation',
          localImage: 'construction/general_laborer/materials/insulation',
          translations: { en: 'insulation', es: 'insulation', pt: 'insulation', fr: 'insulation', de: 'insulation', it: 'insulation', nl: 'isolatie', zh: '隔热材料', ja: '断熱材', ru: 'изоляция' },
        },
        {
          id: 'construction/general_laborer/materials/mesh',
          localImage: 'construction/general_laborer/materials/mesh',
          translations: { en: 'mesh', es: 'mesh', pt: 'mesh', fr: 'mesh', de: 'mesh', it: 'mesh', nl: 'gaas', zh: '网', ja: 'メッシュ', ru: 'сетка' },
        },
        {
          id: 'construction/general_laborer/materials/metal',
          localImage: 'construction/general_laborer/materials/metal',
          translations: { en: 'metal', es: 'metal', pt: 'metal', fr: 'metal', de: 'metal', it: 'metal', nl: 'metaal', zh: '金属', ja: '金属', ru: 'металл' },
        },
        {
          id: 'construction/general_laborer/materials/mortar_mix',
          localImage: 'construction/general_laborer/materials/mortar_mix',
          translations: { en: 'mortar mix', es: 'mortar mix', pt: 'mortar mix', fr: 'mortar mix', de: 'mortar mix', it: 'mortar mix', nl: 'mortelmengsel', zh: '砂浆混合物', ja: 'モルタルミックス', ru: 'сухая смесь' },
        },
        {
          id: 'construction/general_laborer/materials/nails',
          localImage: 'construction/general_laborer/materials/nails',
          translations: { en: 'nails', es: 'nails', pt: 'nails', fr: 'nails', de: 'nails', it: 'nails', nl: 'spijkers', zh: '钉子', ja: '釘', ru: 'гвозди' },
        },
        {
          id: 'construction/general_laborer/materials/paint',
          localImage: 'construction/general_laborer/materials/paint',
          translations: { en: 'paint', es: 'paint', pt: 'paint', fr: 'paint', de: 'paint', it: 'paint', nl: 'verf', zh: '油漆', ja: 'ペンキ', ru: 'краска' },
        },
        {
          id: 'construction/general_laborer/materials/panels',
          localImage: 'construction/general_laborer/materials/panels',
          translations: { en: 'panels', es: 'panels', pt: 'panels', fr: 'panels', de: 'panels', it: 'panels', nl: 'panelen', zh: '面板', ja: 'パネル', ru: 'панели' },
        },
        {
          id: 'construction/general_laborer/materials/pipes',
          localImage: 'construction/general_laborer/materials/pipes',
          translations: { en: 'pipes', es: 'pipes', pt: 'pipes', fr: 'pipes', de: 'pipes', it: 'pipes', nl: 'pijpen', zh: '管道', ja: 'パイプ', ru: 'трубы' },
        },
        {
          id: 'construction/general_laborer/materials/plaster',
          localImage: 'construction/general_laborer/materials/plaster',
          translations: { en: 'plaster', es: 'plaster', pt: 'plaster', fr: 'plaster', de: 'plaster', it: 'plaster', nl: 'gips', zh: '石膏', ja: 'プラスター', ru: 'штукатурка' },
        },
        {
          id: 'construction/general_laborer/materials/resin',
          localImage: 'construction/general_laborer/materials/resin',
          translations: { en: 'resin', es: 'resin', pt: 'resin', fr: 'resin', de: 'resin', it: 'resin', nl: 'hars', zh: '树脂', ja: '樹脂', ru: 'смола' },
        },
        {
          id: 'construction/general_laborer/materials/sand',
          localImage: 'construction/general_laborer/materials/sand',
          translations: { en: 'sand', es: 'sand', pt: 'sand', fr: 'sand', de: 'sand', it: 'sand', nl: 'zand', zh: '沙子', ja: '砂', ru: 'песок' },
        },
        {
          id: 'construction/general_laborer/materials/screws',
          localImage: 'construction/general_laborer/materials/screws',
          translations: { en: 'screws', es: 'screws', pt: 'screws', fr: 'screws', de: 'screws', it: 'screws', nl: 'schroeven', zh: '螺丝', ja: 'ネジ', ru: 'винты' },
        },
        {
          id: 'construction/general_laborer/materials/sealant',
          localImage: 'construction/general_laborer/materials/sealant',
          translations: { en: 'sealant', es: 'sealant', pt: 'sealant', fr: 'sealant', de: 'sealant', it: 'sealant', nl: 'afdichtingsmiddel', zh: '密封剂', ja: 'シーラント', ru: 'герметик' },
        },
        {
          id: 'construction/general_laborer/materials/stone',
          localImage: 'construction/general_laborer/materials/stone',
          translations: { en: 'stone', es: 'stone', pt: 'stone', fr: 'stone', de: 'stone', it: 'stone', nl: 'steen', zh: '石头', ja: '石', ru: 'камень' },
        },
        {
          id: 'construction/general_laborer/materials/tiles',
          localImage: 'construction/general_laborer/materials/tiles',
          translations: { en: 'tiles', es: 'tiles', pt: 'tiles', fr: 'tiles', de: 'tiles', it: 'tiles', nl: 'tegels', zh: '瓷砖', ja: 'タイル', ru: 'плитка' },
        },
        {
          id: 'construction/general_laborer/materials/wood',
          localImage: 'construction/general_laborer/materials/wood',
          translations: { en: 'wood', es: 'wood', pt: 'wood', fr: 'wood', de: 'wood', it: 'wood', nl: 'hout', zh: '木材', ja: '木材', ru: 'дерево' },
        }
        ],
      }
      ],
    },
    {
      id: 'painter',
      name: { en: 'Painter', es: 'Pintor', pt: 'Pintor', fr: 'Peintre', de: 'Maler', it: 'Pittore', nl: 'Schilder', zh: '油漆工', ja: '塗装工', ru: 'Маляр' },
      icon: '🖌️',
      roles: [
      {
        id: 'tools',
        name: { en: 'Tools', es: 'Herramientas', pt: 'Ferramentas', fr: 'Outils', de: 'Werkzeuge', it: 'Attrezzi', nl: 'Gereedschap', zh: '工具', ja: '道具', ru: 'Инструменты' },
        icon: '🔧',
        items: [
        {
          id: 'construction/painter/tools/blade',
          localImage: 'construction/painter/tools/blade',
          translations: { en: 'blade', es: 'blade', pt: 'blade', fr: 'blade', de: 'blade', it: 'blade', nl: 'blad', zh: '刀片', ja: 'ブレード', ru: 'лезвие' },
        },
        {
          id: 'construction/painter/tools/brush',
          localImage: 'construction/painter/tools/brush',
          translations: { en: 'brush', es: 'cepillo', pt: 'escova', fr: 'brosse', de: 'Bürste', it: 'spazzola', nl: 'borstel', zh: '刷子', ja: 'ブラシ', ru: 'кисть' },
        },
        {
          id: 'construction/painter/tools/bucket',
          localImage: 'construction/painter/tools/bucket',
          translations: { en: 'bucket', es: 'cubo', pt: 'balde', fr: 'seau', de: 'Eimer', it: 'secchio', nl: 'emmer', zh: '水桶', ja: 'バケツ', ru: 'ведро' },
        },
        {
          id: 'construction/painter/tools/cloth',
          localImage: 'construction/painter/tools/cloth',
          translations: { en: 'cloth', es: 'trapo', pt: 'pano', fr: 'chiffon', de: 'Tuch', it: 'panno', nl: 'doek', zh: '布', ja: '布', ru: 'ткань' },
        },
        {
          id: 'construction/painter/tools/extension',
          localImage: 'construction/painter/tools/extension',
          translations: { en: 'extension', es: 'extension', pt: 'extension', fr: 'extension', de: 'extension', it: 'extension', nl: 'verlenging', zh: '延伸器', ja: '延長', ru: 'удлинитель' },
        },
        {
          id: 'construction/painter/tools/gun',
          localImage: 'construction/painter/tools/gun',
          translations: { en: 'spray gun', es: 'pistola de spray', pt: 'pistola de spray', fr: 'pistolet', de: 'Sprühpistole', it: 'pistola spray', nl: 'verfpistool', zh: '喷枪', ja: 'スプレーガン', ru: 'краскопульт' },
        },
        {
          id: 'construction/painter/tools/handle',
          localImage: 'construction/painter/tools/handle',
          translations: { en: 'handle', es: 'handle', pt: 'handle', fr: 'handle', de: 'handle', it: 'handle', nl: 'handvat', zh: '把手', ja: 'ハンドル', ru: 'рукоятка' },
        },
        {
          id: 'construction/painter/tools/knife',
          localImage: 'construction/painter/tools/knife',
          translations: { en: 'knife', es: 'cuchillo', pt: 'faca', fr: 'couteau', de: 'Messer', it: 'coltello', nl: 'mes', zh: '刀', ja: 'ナイフ', ru: 'нож' },
        },
        {
          id: 'construction/painter/tools/ladder',
          localImage: 'construction/painter/tools/ladder',
          translations: { en: 'ladder', es: 'escalera', pt: 'escada', fr: 'échelle', de: 'Leiter', it: 'scala', nl: 'ladder', zh: '梯子', ja: 'はしご', ru: 'лестница' },
        },
        {
          id: 'construction/painter/tools/mixer',
          localImage: 'construction/painter/tools/mixer',
          translations: { en: 'mixer', es: 'mezclador', pt: 'betoneira', fr: 'mélangeur', de: 'Mischer', it: 'miscelatore', nl: 'mixer', zh: '搅拌机', ja: 'ミキサー', ru: 'миксер' },
        },
        {
          id: 'construction/painter/tools/pad',
          localImage: 'construction/painter/tools/pad',
          translations: { en: 'pad', es: 'pad', pt: 'pad', fr: 'pad', de: 'pad', it: 'pad', nl: 'kussen', zh: '垫子', ja: 'パッド', ru: 'подушечка' },
        },
        {
          id: 'construction/painter/tools/pole',
          localImage: 'construction/painter/tools/pole',
          translations: { en: 'pole', es: 'pole', pt: 'pole', fr: 'pole', de: 'pole', it: 'pole', nl: 'paal', zh: '杆', ja: 'ポール', ru: 'шест' },
        },
        {
          id: 'construction/painter/tools/roller',
          localImage: 'construction/painter/tools/roller',
          translations: { en: 'roller', es: 'rodillo', pt: 'rolo', fr: 'rouleau', de: 'Rolle', it: 'rullo', nl: 'roller', zh: '滚筒', ja: 'ローラー', ru: 'валик' },
        },
        {
          id: 'construction/painter/tools/roller_frame',
          localImage: 'construction/painter/tools/roller_frame',
          translations: { en: 'roller frame', es: 'roller frame', pt: 'roller frame', fr: 'roller frame', de: 'roller frame', it: 'roller frame', nl: 'rollerframe', zh: '滚筒架', ja: 'ローラーフレーム', ru: 'рукоятка для валика' },
        },
        {
          id: 'construction/painter/tools/sander',
          localImage: 'construction/painter/tools/sander',
          translations: { en: 'sander', es: 'sander', pt: 'sander', fr: 'sander', de: 'sander', it: 'sander', nl: 'schuurmachine', zh: '砂磨机', ja: 'サンダー', ru: 'шлифовальная машина' },
        },
        {
          id: 'construction/painter/tools/scraper',
          localImage: 'construction/painter/tools/scraper',
          translations: { en: 'scraper', es: 'scraper', pt: 'scraper', fr: 'scraper', de: 'scraper', it: 'scraper', nl: 'schraper', zh: '刮刀', ja: 'スクレーパー', ru: 'скребок' },
        },
        {
          id: 'construction/painter/tools/sponge',
          localImage: 'construction/painter/tools/sponge',
          translations: { en: 'sponge', es: 'esponja', pt: 'esponja', fr: 'éponge', de: 'Schwamm', it: 'spugna', nl: 'spons', zh: '海绵', ja: 'スポンジ', ru: 'губка' },
        },
        {
          id: 'construction/painter/tools/spray_gun',
          localImage: 'construction/painter/tools/spray_gun',
          translations: { en: 'spray gun', es: 'spray gun', pt: 'spray gun', fr: 'spray gun', de: 'spray gun', it: 'spray gun', nl: 'verfpistool', zh: '喷枪', ja: 'スプレーガン', ru: 'краскопульт' },
        },
        {
          id: 'construction/painter/tools/tape',
          localImage: 'construction/painter/tools/tape',
          translations: { en: 'tape', es: 'cinta', pt: 'fita', fr: 'ruban', de: 'Klebeband', it: 'nastro', nl: 'tape', zh: '胶带', ja: 'テープ', ru: 'лента' },
        },
        {
          id: 'construction/painter/tools/tray',
          localImage: 'construction/painter/tools/tray',
          translations: { en: 'tray', es: 'bandeja', pt: 'bandeja', fr: 'plateau', de: 'Tablett', it: 'vassoio', nl: 'dienblad', zh: '托盘', ja: 'トレイ', ru: 'поднос' },
        }
        ],
      },
      {
        id: 'materials',
        name: { en: 'Materials', es: 'Materiales', pt: 'Materiais', fr: 'Matériaux', de: 'Materialien', it: 'Materiali', nl: 'Materialen', zh: '材料', ja: '材料', ru: 'Материалы' },
        icon: '📦',
        items: [
        {
          id: 'construction/painter/materials/base',
          localImage: 'construction/painter/materials/base',
          translations: { en: 'base', es: 'base', pt: 'base', fr: 'base', de: 'base', it: 'base', nl: 'basis', zh: '底料', ja: 'ベース', ru: 'основа' },
        },
        {
          id: 'construction/painter/materials/cleaner',
          localImage: 'construction/painter/materials/cleaner',
          translations: { en: 'cleaner', es: 'cleaner', pt: 'cleaner', fr: 'cleaner', de: 'cleaner', it: 'cleaner', nl: 'reiniger', zh: '清洁剂', ja: '洗浄剤', ru: 'чистящее средство' },
        },
        {
          id: 'construction/painter/materials/coating',
          localImage: 'construction/painter/materials/coating',
          translations: { en: 'coating', es: 'coating', pt: 'coating', fr: 'coating', de: 'coating', it: 'coating', nl: 'coating', zh: '涂层', ja: 'コーティング', ru: 'покрытие' },
        },
        {
          id: 'construction/painter/materials/coating_mix',
          localImage: 'construction/painter/materials/coating_mix',
          translations: { en: 'coating mix', es: 'coating mix', pt: 'coating mix', fr: 'coating mix', de: 'coating mix', it: 'coating mix', nl: 'coatingmengsel', zh: '涂层混合物', ja: 'コーティングミックス', ru: 'смесь для покрытия' },
        },
        {
          id: 'construction/painter/materials/compound',
          localImage: 'construction/painter/materials/compound',
          translations: { en: 'compound', es: 'compound', pt: 'compound', fr: 'compound', de: 'compound', it: 'compound', nl: 'compound', zh: '化合物', ja: 'コンパウンド', ru: 'состав' },
        },
        {
          id: 'construction/painter/materials/dye',
          localImage: 'construction/painter/materials/dye',
          translations: { en: 'dye', es: 'dye', pt: 'dye', fr: 'dye', de: 'dye', it: 'dye', nl: 'verf', zh: '染料', ja: '染料', ru: 'краситель' },
        },
        {
          id: 'construction/painter/materials/enamel',
          localImage: 'construction/painter/materials/enamel',
          translations: { en: 'enamel', es: 'enamel', pt: 'enamel', fr: 'enamel', de: 'enamel', it: 'enamel', nl: 'email', zh: '搪瓷', ja: 'エナメル', ru: 'эмаль' },
        },
        {
          id: 'construction/painter/materials/filler',
          localImage: 'construction/painter/materials/filler',
          translations: { en: 'filler', es: 'filler', pt: 'filler', fr: 'filler', de: 'filler', it: 'filler', nl: 'vulmiddel', zh: '填充物', ja: 'フィラー', ru: 'наполнитель' },
        },
        {
          id: 'construction/painter/materials/finish',
          localImage: 'construction/painter/materials/finish',
          translations: { en: 'finish', es: 'finish', pt: 'finish', fr: 'finish', de: 'finish', it: 'finish', nl: 'afwerking', zh: '涂层', ja: '仕上げ', ru: 'отделочное покрытие' },
        },
        {
          id: 'construction/painter/materials/gel',
          localImage: 'construction/painter/materials/gel',
          translations: { en: 'gel', es: 'gel', pt: 'gel', fr: 'gel', de: 'gel', it: 'gel', nl: 'gel', zh: '凝胶', ja: 'ジェル', ru: 'гель' },
        },
        {
          id: 'construction/painter/materials/gloss',
          localImage: 'construction/painter/materials/gloss',
          translations: { en: 'gloss', es: 'gloss', pt: 'gloss', fr: 'gloss', de: 'gloss', it: 'gloss', nl: 'glans', zh: '光泽漆', ja: 'グロス', ru: 'глянцевое покрытие' },
        },
        {
          id: 'construction/painter/materials/lacquer',
          localImage: 'construction/painter/materials/lacquer',
          translations: { en: 'lacquer', es: 'lacquer', pt: 'lacquer', fr: 'lacquer', de: 'lacquer', it: 'lacquer', nl: 'lak', zh: '漆', ja: 'ラッカー', ru: 'лак' },
        },
        {
          id: 'construction/painter/materials/liquid',
          localImage: 'construction/painter/materials/liquid',
          translations: { en: 'liquid', es: 'liquid', pt: 'liquid', fr: 'liquid', de: 'liquid', it: 'liquid', nl: 'vloeistof', zh: '液体', ja: '液体', ru: 'жидкость' },
        },
        {
          id: 'construction/painter/materials/matte',
          localImage: 'construction/painter/materials/matte',
          translations: { en: 'matte', es: 'matte', pt: 'matte', fr: 'matte', de: 'matte', it: 'matte', nl: 'mat', zh: '哑光漆', ja: 'マット', ru: 'матовое покрытие' },
        },
        {
          id: 'construction/painter/materials/oil',
          localImage: 'construction/painter/materials/oil',
          translations: { en: 'oil', es: 'oil', pt: 'oil', fr: 'oil', de: 'oil', it: 'oil', nl: 'olie', zh: '油', ja: 'オイル', ru: 'масло' },
        },
        {
          id: 'construction/painter/materials/paint',
          localImage: 'construction/painter/materials/paint',
          translations: { en: 'paint', es: 'paint', pt: 'paint', fr: 'paint', de: 'paint', it: 'paint', nl: 'verf', zh: '油漆', ja: 'ペンキ', ru: 'краска' },
        },
        {
          id: 'construction/painter/materials/paste',
          localImage: 'construction/painter/materials/paste',
          translations: { en: 'paste', es: 'paste', pt: 'paste', fr: 'paste', de: 'paste', it: 'paste', nl: 'pasta', zh: '糊', ja: 'ペースト', ru: 'паста' },
        },
        {
          id: 'construction/painter/materials/pigment',
          localImage: 'construction/painter/materials/pigment',
          translations: { en: 'pigment', es: 'pigment', pt: 'pigment', fr: 'pigment', de: 'pigment', it: 'pigment', nl: 'pigment', zh: '颜料', ja: '顔料', ru: 'пигмент' },
        },
        {
          id: 'construction/painter/materials/plaster',
          localImage: 'construction/painter/materials/plaster',
          translations: { en: 'plaster', es: 'plaster', pt: 'plaster', fr: 'plaster', de: 'plaster', it: 'plaster', nl: 'gips', zh: '石膏', ja: 'プラスター', ru: 'штукатурка' },
        },
        {
          id: 'construction/painter/materials/polish',
          localImage: 'construction/painter/materials/polish',
          translations: { en: 'polish', es: 'pulimento', pt: 'polimento', fr: 'polish', de: 'Politur', it: 'lucido', nl: 'poetsmiddel', zh: '抛光剂', ja: 'ポリッシュ', ru: 'полироль' },
        },
        {
          id: 'construction/painter/materials/primer',
          localImage: 'construction/painter/materials/primer',
          translations: { en: 'primer', es: 'primer', pt: 'primer', fr: 'primer', de: 'primer', it: 'primer', nl: 'primer', zh: '底漆', ja: 'プライマー', ru: 'грунтовка' },
        },
        {
          id: 'construction/painter/materials/remover',
          localImage: 'construction/painter/materials/remover',
          translations: { en: 'remover', es: 'remover', pt: 'remover', fr: 'remover', de: 'remover', it: 'remover', nl: 'verwijderaar', zh: '去除剂', ja: 'リムーバー', ru: 'средство для удаления' },
        },
        {
          id: 'construction/painter/materials/resin',
          localImage: 'construction/painter/materials/resin',
          translations: { en: 'resin', es: 'resin', pt: 'resin', fr: 'resin', de: 'resin', it: 'resin', nl: 'hars', zh: '树脂', ja: '樹脂', ru: 'смола' },
        },
        {
          id: 'construction/painter/materials/sealant',
          localImage: 'construction/painter/materials/sealant',
          translations: { en: 'sealant', es: 'sealant', pt: 'sealant', fr: 'sealant', de: 'sealant', it: 'sealant', nl: 'afdichtingsmiddel', zh: '密封剂', ja: 'シーラント', ru: 'герметик' },
        },
        {
          id: 'construction/painter/materials/solution',
          localImage: 'construction/painter/materials/solution',
          translations: { en: 'solution', es: 'solution', pt: 'solution', fr: 'solution', de: 'solution', it: 'solution', nl: 'oplossing', zh: '溶液', ja: '溶液', ru: 'раствор' },
        },
        {
          id: 'construction/painter/materials/solvent',
          localImage: 'construction/painter/materials/solvent',
          translations: { en: 'solvent', es: 'solvent', pt: 'solvent', fr: 'solvent', de: 'solvent', it: 'solvent', nl: 'oplosmiddel', zh: '溶剂', ja: '溶剤', ru: 'растворитель' },
        },
        {
          id: 'construction/painter/materials/spray',
          localImage: 'construction/painter/materials/spray',
          translations: { en: 'spray', es: 'spray', pt: 'spray', fr: 'spray', de: 'Spray', it: 'spray', nl: 'spray', zh: '喷雾', ja: 'スプレー', ru: 'спрей' },
        },
        {
          id: 'construction/painter/materials/thinner',
          localImage: 'construction/painter/materials/thinner',
          translations: { en: 'thinner', es: 'thinner', pt: 'thinner', fr: 'thinner', de: 'thinner', it: 'thinner', nl: 'verdunner', zh: '稀释剂', ja: 'シンナー', ru: 'растворитель' },
        },
        {
          id: 'construction/painter/materials/varnish',
          localImage: 'construction/painter/materials/varnish',
          translations: { en: 'varnish', es: 'varnish', pt: 'varnish', fr: 'varnish', de: 'varnish', it: 'varnish', nl: 'vernis', zh: '清漆', ja: 'ニス', ru: 'лак' },
        },
        {
          id: 'construction/painter/materials/water',
          localImage: 'construction/painter/materials/water',
          translations: { en: 'water', es: 'agua', pt: 'água', fr: 'eau', de: 'Wasser', it: 'acqua', nl: 'water', zh: '水', ja: '水', ru: 'вода' },
        }
        ],
      }
      ],
    },
    {
      id: 'plumber',
      name: { en: 'Plumber', es: 'Fontanero', pt: 'Encanador', fr: 'Plombier', de: 'Klempner', it: 'Idraulico', nl: 'Loodgieter', zh: '水管工', ja: '配管工', ru: 'Сантехник' },
      icon: '🪠',
      roles: [
      {
        id: 'tools',
        name: { en: 'Tools', es: 'Herramientas', pt: 'Ferramentas', fr: 'Outils', de: 'Werkzeuge', it: 'Attrezzi', nl: 'Gereedschap', zh: '工具', ja: '道具', ru: 'Инструменты' },
        icon: '🔧',
        items: [
        {
          id: 'construction/plumber/tools/adjustable_wrench',
          localImage: 'construction/plumber/tools/adjustable_wrench',
          translations: { en: 'adjustable wrench', es: 'adjustable wrench', pt: 'adjustable wrench', fr: 'adjustable wrench', de: 'adjustable wrench', it: 'adjustable wrench', nl: 'verstelbare sleutel', zh: '活动扳手', ja: 'モンキーレンチ', ru: 'разводной ключ' },
        },
        {
          id: 'construction/plumber/tools/auger',
          localImage: 'construction/plumber/tools/auger',
          translations: { en: 'auger', es: 'auger', pt: 'auger', fr: 'auger', de: 'auger', it: 'auger', nl: 'grondboor', zh: '螺旋钻', ja: 'オーガー', ru: 'бур' },
        },
        {
          id: 'construction/plumber/tools/clamp',
          localImage: 'construction/plumber/tools/clamp',
          translations: { en: 'clamp', es: 'clamp', pt: 'clamp', fr: 'clamp', de: 'clamp', it: 'clamp', nl: 'klem', zh: '夹具', ja: 'クランプ', ru: 'зажим' },
        },
        {
          id: 'construction/plumber/tools/crimper',
          localImage: 'construction/plumber/tools/crimper',
          translations: { en: 'crimper', es: 'crimper', pt: 'crimper', fr: 'crimper', de: 'crimper', it: 'crimper', nl: 'krimpgereedschap', zh: '压线钳', ja: 'クリンパー', ru: 'обжимной инструмент' },
        },
        {
          id: 'construction/plumber/tools/cutter',
          localImage: 'construction/plumber/tools/cutter',
          translations: { en: 'cutter', es: 'cortador', pt: 'cortador', fr: 'cutter', de: 'Cutter', it: 'taglierino', nl: 'snijder', zh: '切割机', ja: 'カッター', ru: 'резак' },
        },
        {
          id: 'construction/plumber/tools/drill',
          localImage: 'construction/plumber/tools/drill',
          translations: { en: 'drill', es: 'taladro', pt: 'furadeira', fr: 'perceuse', de: 'Bohrmaschine', it: 'trapano', nl: 'boor', zh: '钻头', ja: 'ドリル', ru: 'дрель' },
        },
        {
          id: 'construction/plumber/tools/hacksaw',
          localImage: 'construction/plumber/tools/hacksaw',
          translations: { en: 'hacksaw', es: 'hacksaw', pt: 'hacksaw', fr: 'hacksaw', de: 'hacksaw', it: 'hacksaw', nl: 'ijzerzaag', zh: '钢锯', ja: 'ハクソー', ru: 'ножовка по металлу' },
        },
        {
          id: 'construction/plumber/tools/knife',
          localImage: 'construction/plumber/tools/knife',
          translations: { en: 'knife', es: 'cuchillo', pt: 'faca', fr: 'couteau', de: 'Messer', it: 'coltello', nl: 'mes', zh: '刀', ja: 'ナイフ', ru: 'нож' },
        },
        {
          id: 'construction/plumber/tools/level',
          localImage: 'construction/plumber/tools/level',
          translations: { en: 'level', es: 'nivel', pt: 'nível', fr: 'niveau', de: 'Wasserwaage', it: 'livella', nl: 'waterpas', zh: '水平仪', ja: '水平器', ru: 'уровень' },
        },
        {
          id: 'construction/plumber/tools/pipe_cutter',
          localImage: 'construction/plumber/tools/pipe_cutter',
          translations: { en: 'pipe cutter', es: 'pipe cutter', pt: 'pipe cutter', fr: 'pipe cutter', de: 'pipe cutter', it: 'pipe cutter', nl: 'pijpsnijder', zh: '管道切割器', ja: 'パイプカッター', ru: 'труборез' },
        },
        {
          id: 'construction/plumber/tools/pipe_wrench',
          localImage: 'construction/plumber/tools/pipe_wrench',
          translations: { en: 'pipe wrench', es: 'pipe wrench', pt: 'pipe wrench', fr: 'pipe wrench', de: 'pipe wrench', it: 'pipe wrench', nl: 'pijpsleutel', zh: '管钳', ja: 'パイプレンチ', ru: 'трубный ключ' },
        },
        {
          id: 'construction/plumber/tools/pliers',
          localImage: 'construction/plumber/tools/pliers',
          translations: { en: 'pliers', es: 'alicates', pt: 'alicate', fr: 'pinces', de: 'Zange', it: 'pinze', nl: 'tang', zh: '钳子', ja: 'プライヤー', ru: 'плоскогубцы' },
        },
        {
          id: 'construction/plumber/tools/plunger',
          localImage: 'construction/plumber/tools/plunger',
          translations: { en: 'plunger', es: 'plunger', pt: 'plunger', fr: 'plunger', de: 'plunger', it: 'plunger', nl: 'entstopper', zh: '疏通器', ja: 'プランジャー', ru: 'вантуз' },
        },
        {
          id: 'construction/plumber/tools/screwdriver',
          localImage: 'construction/plumber/tools/screwdriver',
          translations: { en: 'screwdriver', es: 'screwdriver', pt: 'screwdriver', fr: 'screwdriver', de: 'screwdriver', it: 'screwdriver', nl: 'schroevendraaier', zh: '螺丝刀', ja: 'ドライバー', ru: 'отвертка' },
        },
        {
          id: 'construction/plumber/tools/snake',
          localImage: 'construction/plumber/tools/snake',
          translations: { en: 'snake', es: 'snake', pt: 'snake', fr: 'snake', de: 'snake', it: 'snake', nl: 'veerontslokker', zh: '疏通器', ja: 'スネーク', ru: 'сантехнический трос' },
        },
        {
          id: 'construction/plumber/tools/spanner',
          localImage: 'construction/plumber/tools/spanner',
          translations: { en: 'spanner', es: 'spanner', pt: 'spanner', fr: 'spanner', de: 'spanner', it: 'spanner', nl: 'steeksleutel', zh: '扳手', ja: 'スパナ', ru: 'гаечный ключ' },
        },
        {
          id: 'construction/plumber/tools/tape_measure',
          localImage: 'construction/plumber/tools/tape_measure',
          translations: { en: 'tape measure', es: 'tape measure', pt: 'tape measure', fr: 'tape measure', de: 'tape measure', it: 'tape measure', nl: 'meetlint', zh: '卷尺', ja: 'メジャー', ru: 'рулетка' },
        },
        {
          id: 'construction/plumber/tools/tester',
          localImage: 'construction/plumber/tools/tester',
          translations: { en: 'tester', es: 'tester', pt: 'tester', fr: 'tester', de: 'tester', it: 'tester', nl: 'tester', zh: '测试仪', ja: 'テスター', ru: 'тестер' },
        },
        {
          id: 'construction/plumber/tools/torch',
          localImage: 'construction/plumber/tools/torch',
          translations: { en: 'torch', es: 'torch', pt: 'torch', fr: 'torch', de: 'torch', it: 'torch', nl: 'lasbrander', zh: '焊炬', ja: 'トーチ', ru: 'горелка' },
        },
        {
          id: 'construction/plumber/tools/wrench_set',
          localImage: 'construction/plumber/tools/wrench_set',
          translations: { en: 'wrench set', es: 'wrench set', pt: 'wrench set', fr: 'wrench set', de: 'wrench set', it: 'wrench set', nl: 'moersleutelset', zh: '扳手套装', ja: 'レンチセット', ru: 'набор гаечных ключей' },
        }
        ],
      },
      {
        id: 'materials',
        name: { en: 'Materials', es: 'Materiales', pt: 'Materiais', fr: 'Matériaux', de: 'Materialien', it: 'Materiali', nl: 'Materialen', zh: '材料', ja: '材料', ru: 'Материалы' },
        icon: '📦',
        items: [
        {
          id: 'construction/plumber/materials/bolts',
          localImage: 'construction/plumber/materials/bolts',
          translations: { en: 'bolts', es: 'bolts', pt: 'bolts', fr: 'bolts', de: 'bolts', it: 'bolts', nl: 'bouten', zh: '螺栓', ja: 'ボルト', ru: 'болты' },
        },
        {
          id: 'construction/plumber/materials/caps',
          localImage: 'construction/plumber/materials/caps',
          translations: { en: 'caps', es: 'caps', pt: 'caps', fr: 'caps', de: 'caps', it: 'caps', nl: 'doppen', zh: '帽子', ja: 'キャップ', ru: 'крышки' },
        },
        {
          id: 'construction/plumber/materials/clips',
          localImage: 'construction/plumber/materials/clips',
          translations: { en: 'clips', es: 'clips', pt: 'clips', fr: 'clips', de: 'clips', it: 'clips', nl: 'clips', zh: '夹子', ja: 'クリップ', ru: 'зажимы' },
        },
        {
          id: 'construction/plumber/materials/connectors',
          localImage: 'construction/plumber/materials/connectors',
          translations: { en: 'connectors', es: 'connectors', pt: 'connectors', fr: 'connectors', de: 'connectors', it: 'connectors', nl: 'connectors', zh: '连接器', ja: 'コネクター', ru: 'разъемы' },
        },
        {
          id: 'construction/plumber/materials/couplings',
          localImage: 'construction/plumber/materials/couplings',
          translations: { en: 'couplings', es: 'couplings', pt: 'couplings', fr: 'couplings', de: 'couplings', it: 'couplings', nl: 'koppelingen', zh: '联轴器', ja: 'カップリング', ru: 'муфты' },
        },
        {
          id: 'construction/plumber/materials/covers',
          localImage: 'construction/plumber/materials/covers',
          translations: { en: 'covers', es: 'covers', pt: 'covers', fr: 'covers', de: 'covers', it: 'covers', nl: 'hoezen', zh: '盖子', ja: 'カバー', ru: 'крышки' },
        },
        {
          id: 'construction/plumber/materials/fasteners',
          localImage: 'construction/plumber/materials/fasteners',
          translations: { en: 'fasteners', es: 'fasteners', pt: 'fasteners', fr: 'fasteners', de: 'fasteners', it: 'fasteners', nl: 'bevestigingsmiddelen', zh: '紧固件', ja: 'ファスナー', ru: 'крепежные элементы' },
        },
        {
          id: 'construction/plumber/materials/filters',
          localImage: 'construction/plumber/materials/filters',
          translations: { en: 'filters', es: 'filters', pt: 'filters', fr: 'filters', de: 'filters', it: 'filters', nl: 'filters', zh: '过滤器', ja: 'フィルター', ru: 'фильтры' },
        },
        {
          id: 'construction/plumber/materials/fittings',
          localImage: 'construction/plumber/materials/fittings',
          translations: { en: 'fittings', es: 'fittings', pt: 'fittings', fr: 'fittings', de: 'fittings', it: 'fittings', nl: 'fittingen', zh: '配件', ja: 'フィッティング', ru: 'фитинги' },
        },
        {
          id: 'construction/plumber/materials/gaskets',
          localImage: 'construction/plumber/materials/gaskets',
          translations: { en: 'gaskets', es: 'gaskets', pt: 'gaskets', fr: 'gaskets', de: 'gaskets', it: 'gaskets', nl: 'pakkingen', zh: '垫圈', ja: 'ガスケット', ru: 'прокладки' },
        },
        {
          id: 'construction/plumber/materials/glue',
          localImage: 'construction/plumber/materials/glue',
          translations: { en: 'glue', es: 'glue', pt: 'glue', fr: 'glue', de: 'glue', it: 'glue', nl: 'lijm', zh: '胶水', ja: '接着剤', ru: 'клей' },
        },
        {
          id: 'construction/plumber/materials/hoses',
          localImage: 'construction/plumber/materials/hoses',
          translations: { en: 'hoses', es: 'hoses', pt: 'hoses', fr: 'hoses', de: 'hoses', it: 'hoses', nl: 'slangen', zh: '软管', ja: 'ホース', ru: 'шланги' },
        },
        {
          id: 'construction/plumber/materials/insulation',
          localImage: 'construction/plumber/materials/insulation',
          translations: { en: 'insulation', es: 'insulation', pt: 'insulation', fr: 'insulation', de: 'insulation', it: 'insulation', nl: 'isolatie', zh: '隔热材料', ja: '断熱材', ru: 'изоляция' },
        },
        {
          id: 'construction/plumber/materials/joints',
          localImage: 'construction/plumber/materials/joints',
          translations: { en: 'joints', es: 'joints', pt: 'joints', fr: 'joints', de: 'joints', it: 'joints', nl: 'verbindingen', zh: '接头', ja: 'ジョイント', ru: 'соединения' },
        },
        {
          id: 'construction/plumber/materials/joints_set',
          localImage: 'construction/plumber/materials/joints_set',
          translations: { en: 'joints set', es: 'joints set', pt: 'joints set', fr: 'joints set', de: 'joints set', it: 'joints set', nl: 'verbindingenset', zh: '接头套装', ja: 'ジョイントセット', ru: 'набор соединений' },
        },
        {
          id: 'construction/plumber/materials/liners',
          localImage: 'construction/plumber/materials/liners',
          translations: { en: 'liners', es: 'liners', pt: 'liners', fr: 'liners', de: 'liners', it: 'liners', nl: 'voering', zh: '内衬', ja: 'ライナー', ru: 'вкладыши' },
        },
        {
          id: 'construction/plumber/materials/metal',
          localImage: 'construction/plumber/materials/metal',
          translations: { en: 'metal', es: 'metal', pt: 'metal', fr: 'metal', de: 'metal', it: 'metal', nl: 'metaal', zh: '金属', ja: '金属', ru: 'металл' },
        },
        {
          id: 'construction/plumber/materials/nuts',
          localImage: 'construction/plumber/materials/nuts',
          translations: { en: 'nuts', es: 'nuts', pt: 'nuts', fr: 'nuts', de: 'nuts', it: 'nuts', nl: 'moeren', zh: '螺母', ja: 'ナット', ru: 'гайки' },
        },
        {
          id: 'construction/plumber/materials/pipes',
          localImage: 'construction/plumber/materials/pipes',
          translations: { en: 'pipes', es: 'pipes', pt: 'pipes', fr: 'pipes', de: 'pipes', it: 'pipes', nl: 'pijpen', zh: '管道', ja: 'パイプ', ru: 'трубы' },
        },
        {
          id: 'construction/plumber/materials/plastic',
          localImage: 'construction/plumber/materials/plastic',
          translations: { en: 'plastic', es: 'plastic', pt: 'plastic', fr: 'plastic', de: 'plastic', it: 'plastic', nl: 'plastic', zh: '塑料', ja: 'プラスチック', ru: 'пластик' },
        },
        {
          id: 'construction/plumber/materials/plugs',
          localImage: 'construction/plumber/materials/plugs',
          translations: { en: 'plugs', es: 'plugs', pt: 'plugs', fr: 'plugs', de: 'plugs', it: 'plugs', nl: 'pluggen', zh: '插头', ja: 'プラグ', ru: 'разъемы' },
        },
        {
          id: 'construction/plumber/materials/rings',
          localImage: 'construction/plumber/materials/rings',
          translations: { en: 'rings', es: 'rings', pt: 'rings', fr: 'rings', de: 'rings', it: 'rings', nl: 'ringen', zh: '戒指', ja: 'リング', ru: 'кольца' },
        },
        {
          id: 'construction/plumber/materials/rubber',
          localImage: 'construction/plumber/materials/rubber',
          translations: { en: 'rubber', es: 'rubber', pt: 'rubber', fr: 'rubber', de: 'rubber', it: 'rubber', nl: 'rubber', zh: '橡皮', ja: 'ゴム', ru: 'резина' },
        },
        {
          id: 'construction/plumber/materials/screws',
          localImage: 'construction/plumber/materials/screws',
          translations: { en: 'screws', es: 'screws', pt: 'screws', fr: 'screws', de: 'screws', it: 'screws', nl: 'schroeven', zh: '螺丝', ja: 'ネジ', ru: 'винты' },
        },
        {
          id: 'construction/plumber/materials/sealant',
          localImage: 'construction/plumber/materials/sealant',
          translations: { en: 'sealant', es: 'sealant', pt: 'sealant', fr: 'sealant', de: 'sealant', it: 'sealant', nl: 'afdichtingsmiddel', zh: '密封剂', ja: 'シーラント', ru: 'герметик' },
        },
        {
          id: 'construction/plumber/materials/seals',
          localImage: 'construction/plumber/materials/seals',
          translations: { en: 'seals', es: 'seals', pt: 'seals', fr: 'seals', de: 'seals', it: 'seals', nl: 'afdichtingen', zh: '密封件', ja: 'シール', ru: 'уплотнения' },
        },
        {
          id: 'construction/plumber/materials/sleeves',
          localImage: 'construction/plumber/materials/sleeves',
          translations: { en: 'sleeves', es: 'sleeves', pt: 'sleeves', fr: 'sleeves', de: 'sleeves', it: 'sleeves', nl: 'mouwen', zh: '套管', ja: 'スリーブ', ru: 'рукава' },
        },
        {
          id: 'construction/plumber/materials/tape',
          localImage: 'construction/plumber/materials/tape',
          translations: { en: 'tape', es: 'cinta', pt: 'fita', fr: 'ruban', de: 'Klebeband', it: 'nastro', nl: 'tape', zh: '胶带', ja: 'テープ', ru: 'лента' },
        },
        {
          id: 'construction/plumber/materials/valves',
          localImage: 'construction/plumber/materials/valves',
          translations: { en: 'valves', es: 'valves', pt: 'valves', fr: 'valves', de: 'valves', it: 'valves', nl: 'kleppen', zh: '阀门', ja: 'バルブ', ru: 'клапаны' },
        },
        {
          id: 'construction/plumber/materials/washers',
          localImage: 'construction/plumber/materials/washers',
          translations: { en: 'washers', es: 'washers', pt: 'washers', fr: 'washers', de: 'washers', it: 'washers', nl: 'sluitringen', zh: '垫圈', ja: 'ワッシャー', ru: 'шайбы' },
        }
        ],
      }
      ],
    },
    {
      id: 'roofer',
      name: { en: 'Roofer', es: 'Techador', pt: 'Telhadista', fr: 'Couvreur', de: 'Dachdecker', it: 'Tecchista', nl: 'Dakdekker', zh: '屋顶工', ja: '屋根工', ru: 'Кровельщик' },
      icon: '🏠',
      roles: [
      {
        id: 'tools',
        name: { en: 'Tools', es: 'Herramientas', pt: 'Ferramentas', fr: 'Outils', de: 'Werkzeuge', it: 'Attrezzi', nl: 'Gereedschap', zh: '工具', ja: '道具', ru: 'Инструменты' },
        icon: '🔧',
        items: [
        {
          id: 'construction/roofer/tools/bar',
          localImage: 'construction/roofer/tools/bar',
          translations: { en: 'bar', es: 'bar', pt: 'bar', fr: 'bar', de: 'bar', it: 'bar', nl: 'bar', zh: '酒吧', ja: 'バー', ru: 'бар' },
        },
        {
          id: 'construction/roofer/tools/broom',
          localImage: 'construction/roofer/tools/broom',
          translations: { en: 'broom', es: 'escoba', pt: 'vassoura', fr: 'balai', de: 'Besen', it: 'scopa', nl: 'bezem', zh: '扫帚', ja: 'ほうき', ru: 'метла' },
        },
        {
          id: 'construction/roofer/tools/brush',
          localImage: 'construction/roofer/tools/brush',
          translations: { en: 'brush', es: 'cepillo', pt: 'escova', fr: 'brosse', de: 'Bürste', it: 'spazzola', nl: 'borstel', zh: '刷子', ja: 'ブラシ', ru: 'кисть' },
        },
        {
          id: 'construction/roofer/tools/clamp',
          localImage: 'construction/roofer/tools/clamp',
          translations: { en: 'clamp', es: 'clamp', pt: 'clamp', fr: 'clamp', de: 'clamp', it: 'clamp', nl: 'klem', zh: '夹具', ja: 'クランプ', ru: 'зажим' },
        },
        {
          id: 'construction/roofer/tools/cutter',
          localImage: 'construction/roofer/tools/cutter',
          translations: { en: 'cutter', es: 'cortador', pt: 'cortador', fr: 'cutter', de: 'Cutter', it: 'taglierino', nl: 'snijder', zh: '切割机', ja: 'カッター', ru: 'резак' },
        },
        {
          id: 'construction/roofer/tools/drill',
          localImage: 'construction/roofer/tools/drill',
          translations: { en: 'drill', es: 'taladro', pt: 'furadeira', fr: 'perceuse', de: 'Bohrmaschine', it: 'trapano', nl: 'boor', zh: '钻头', ja: 'ドリル', ru: 'дрель' },
        },
        {
          id: 'construction/roofer/tools/gun',
          localImage: 'construction/roofer/tools/gun',
          translations: { en: 'spray gun', es: 'pistola de spray', pt: 'pistola de spray', fr: 'pistolet', de: 'Sprühpistole', it: 'pistola spray', nl: 'verfpistool', zh: '喷枪', ja: 'スプレーガン', ru: 'краскопульт' },
        },
        {
          id: 'construction/roofer/tools/hammer',
          localImage: 'construction/roofer/tools/hammer',
          translations: { en: 'hammer', es: 'martillo', pt: 'martelo', fr: 'marteau', de: 'Hammer', it: 'martello', nl: 'hamer', zh: '锤子', ja: 'ハンマー', ru: 'молоток' },
        },
        {
          id: 'construction/roofer/tools/hook',
          localImage: 'construction/roofer/tools/hook',
          translations: { en: 'hook', es: 'gancho', pt: 'gancho', fr: 'crochet', de: 'Haken', it: 'gancio', nl: 'haak', zh: '挂钩', ja: 'フック', ru: 'крюк' },
        },
        {
          id: 'construction/roofer/tools/knife',
          localImage: 'construction/roofer/tools/knife',
          translations: { en: 'knife', es: 'cuchillo', pt: 'faca', fr: 'couteau', de: 'Messer', it: 'coltello', nl: 'mes', zh: '刀', ja: 'ナイフ', ru: 'нож' },
        },
        {
          id: 'construction/roofer/tools/ladder',
          localImage: 'construction/roofer/tools/ladder',
          translations: { en: 'ladder', es: 'escalera', pt: 'escada', fr: 'échelle', de: 'Leiter', it: 'scala', nl: 'ladder', zh: '梯子', ja: 'はしご', ru: 'лестница' },
        },
        {
          id: 'construction/roofer/tools/level',
          localImage: 'construction/roofer/tools/level',
          translations: { en: 'level', es: 'nivel', pt: 'nível', fr: 'niveau', de: 'Wasserwaage', it: 'livella', nl: 'waterpas', zh: '水平仪', ja: '水平器', ru: 'уровень' },
        },
        {
          id: 'construction/roofer/tools/nail_gun',
          localImage: 'construction/roofer/tools/nail_gun',
          translations: { en: 'nail gun', es: 'nail gun', pt: 'nail gun', fr: 'nail gun', de: 'nail gun', it: 'nail gun', nl: 'spijkerpistool', zh: '气钉枪', ja: 'ネイルガン', ru: 'гвоздезабивной пистолет' },
        },
        {
          id: 'construction/roofer/tools/roller',
          localImage: 'construction/roofer/tools/roller',
          translations: { en: 'roller', es: 'rodillo', pt: 'rolo', fr: 'rouleau', de: 'Rolle', it: 'rullo', nl: 'roller', zh: '滚筒', ja: 'ローラー', ru: 'валик' },
        },
        {
          id: 'construction/roofer/tools/safety_harness',
          localImage: 'construction/roofer/tools/safety_harness',
          translations: { en: 'safety harness', es: 'safety harness', pt: 'safety harness', fr: 'safety harness', de: 'safety harness', it: 'safety harness', nl: 'veiligheidsharnas', zh: '安全带', ja: '安全ハーネス', ru: 'страховочная привязь' },
        },
        {
          id: 'construction/roofer/tools/scraper',
          localImage: 'construction/roofer/tools/scraper',
          translations: { en: 'scraper', es: 'scraper', pt: 'scraper', fr: 'scraper', de: 'scraper', it: 'scraper', nl: 'schraper', zh: '刮刀', ja: 'スクレーパー', ru: 'скребок' },
        },
        {
          id: 'construction/roofer/tools/shovel',
          localImage: 'construction/roofer/tools/shovel',
          translations: { en: 'shovel', es: 'pala', pt: 'pá', fr: 'pelle', de: 'Schaufel', it: 'vanga', nl: 'schop', zh: '铲子', ja: 'シャベル', ru: 'лопата' },
        },
        {
          id: 'construction/roofer/tools/tape_measure',
          localImage: 'construction/roofer/tools/tape_measure',
          translations: { en: 'tape measure', es: 'tape measure', pt: 'tape measure', fr: 'tape measure', de: 'tape measure', it: 'tape measure', nl: 'meetlint', zh: '卷尺', ja: 'メジャー', ru: 'рулетка' },
        },
        {
          id: 'construction/roofer/tools/torch',
          localImage: 'construction/roofer/tools/torch',
          translations: { en: 'torch', es: 'torch', pt: 'torch', fr: 'torch', de: 'torch', it: 'torch', nl: 'lasbrander', zh: '焊炬', ja: 'トーチ', ru: 'горелка' },
        },
        {
          id: 'construction/roofer/tools/wrench',
          localImage: 'construction/roofer/tools/wrench',
          translations: { en: 'wrench', es: 'llave', pt: 'chave inglesa', fr: 'clé', de: 'Schraubenschlüssel', it: 'chiave', nl: 'moersleutel', zh: '扳手', ja: 'レンチ', ru: 'гаечный ключ' },
        }
        ],
      },
      {
        id: 'materials',
        name: { en: 'Materials', es: 'Materiales', pt: 'Materiais', fr: 'Matériaux', de: 'Materialien', it: 'Materiali', nl: 'Materialen', zh: '材料', ja: '材料', ru: 'Материалы' },
        icon: '📦',
        items: [
        {
          id: 'construction/roofer/materials/adhesive',
          localImage: 'construction/roofer/materials/adhesive',
          translations: { en: 'adhesive', es: 'adhesive', pt: 'adhesive', fr: 'adhesive', de: 'adhesive', it: 'adhesive', nl: 'lijm', zh: '粘合剂', ja: '接着剤', ru: 'клей' },
        },
        {
          id: 'construction/roofer/materials/boards',
          localImage: 'construction/roofer/materials/boards',
          translations: { en: 'boards', es: 'boards', pt: 'boards', fr: 'boards', de: 'boards', it: 'boards', nl: 'planken', zh: '板子', ja: '板材', ru: 'доски' },
        },
        {
          id: 'construction/roofer/materials/cement',
          localImage: 'construction/roofer/materials/cement',
          translations: { en: 'cement', es: 'cement', pt: 'cement', fr: 'cement', de: 'cement', it: 'cement', nl: 'cement', zh: '水泥', ja: 'セメント', ru: 'цемент' },
        },
        {
          id: 'construction/roofer/materials/coating',
          localImage: 'construction/roofer/materials/coating',
          translations: { en: 'coating', es: 'coating', pt: 'coating', fr: 'coating', de: 'coating', it: 'coating', nl: 'coating', zh: '涂层', ja: 'コーティング', ru: 'покрытие' },
        },
        {
          id: 'construction/roofer/materials/compounds',
          localImage: 'construction/roofer/materials/compounds',
          translations: { en: 'compounds', es: 'compounds', pt: 'compounds', fr: 'compounds', de: 'compounds', it: 'compounds', nl: 'verbindingen', zh: '化合物', ja: '化合物', ru: 'соединения' },
        },
        {
          id: 'construction/roofer/materials/covers',
          localImage: 'construction/roofer/materials/covers',
          translations: { en: 'covers', es: 'covers', pt: 'covers', fr: 'covers', de: 'covers', it: 'covers', nl: 'hoezen', zh: '盖子', ja: 'カバー', ru: 'крышки' },
        },
        {
          id: 'construction/roofer/materials/felt',
          localImage: 'construction/roofer/materials/felt',
          translations: { en: 'felt', es: 'felt', pt: 'felt', fr: 'felt', de: 'felt', it: 'felt', nl: 'vilt', zh: '毡布', ja: 'フェルト', ru: 'войлок' },
        },
        {
          id: 'construction/roofer/materials/filler',
          localImage: 'construction/roofer/materials/filler',
          translations: { en: 'filler', es: 'filler', pt: 'filler', fr: 'filler', de: 'filler', it: 'filler', nl: 'vulmiddel', zh: '填充物', ja: 'フィラー', ru: 'наполнитель' },
        },
        {
          id: 'construction/roofer/materials/flashing',
          localImage: 'construction/roofer/materials/flashing',
          translations: { en: 'flashing', es: 'flashing', pt: 'flashing', fr: 'flashing', de: 'flashing', it: 'flashing', nl: 'dakrandafwerking', zh: '防水板', ja: 'フラッシング', ru: 'гидроизоляционный фартук' },
        },
        {
          id: 'construction/roofer/materials/foam',
          localImage: 'construction/roofer/materials/foam',
          translations: { en: 'foam', es: 'foam', pt: 'foam', fr: 'foam', de: 'foam', it: 'foam', nl: 'schuim', zh: '泡沫', ja: 'フォーム', ru: 'пена' },
        },
        {
          id: 'construction/roofer/materials/insulation',
          localImage: 'construction/roofer/materials/insulation',
          translations: { en: 'insulation', es: 'insulation', pt: 'insulation', fr: 'insulation', de: 'insulation', it: 'insulation', nl: 'isolatie', zh: '隔热材料', ja: '断熱材', ru: 'изоляция' },
        },
        {
          id: 'construction/roofer/materials/layers',
          localImage: 'construction/roofer/materials/layers',
          translations: { en: 'layers', es: 'layers', pt: 'layers', fr: 'layers', de: 'layers', it: 'layers', nl: 'lagen', zh: '层', ja: '層', ru: 'слои' },
        },
        {
          id: 'construction/roofer/materials/membrane',
          localImage: 'construction/roofer/materials/membrane',
          translations: { en: 'membrane', es: 'membrane', pt: 'membrane', fr: 'membrane', de: 'membrane', it: 'membrane', nl: 'membraan', zh: '膜', ja: 'メンブレン', ru: 'мембрана' },
        },
        {
          id: 'construction/roofer/materials/mesh',
          localImage: 'construction/roofer/materials/mesh',
          translations: { en: 'mesh', es: 'mesh', pt: 'mesh', fr: 'mesh', de: 'mesh', it: 'mesh', nl: 'gaas', zh: '网', ja: 'メッシュ', ru: 'сетка' },
        },
        {
          id: 'construction/roofer/materials/metal',
          localImage: 'construction/roofer/materials/metal',
          translations: { en: 'metal', es: 'metal', pt: 'metal', fr: 'metal', de: 'metal', it: 'metal', nl: 'metaal', zh: '金属', ja: '金属', ru: 'металл' },
        },
        {
          id: 'construction/roofer/materials/nails',
          localImage: 'construction/roofer/materials/nails',
          translations: { en: 'nails', es: 'nails', pt: 'nails', fr: 'nails', de: 'nails', it: 'nails', nl: 'spijkers', zh: '钉子', ja: '釘', ru: 'гвозди' },
        },
        {
          id: 'construction/roofer/materials/pads',
          localImage: 'construction/roofer/materials/pads',
          translations: { en: 'pads', es: 'pads', pt: 'pads', fr: 'pads', de: 'pads', it: 'pads', nl: 'kussens', zh: '垫子', ja: 'パッド', ru: 'подушечки' },
        },
        {
          id: 'construction/roofer/materials/panels',
          localImage: 'construction/roofer/materials/panels',
          translations: { en: 'panels', es: 'panels', pt: 'panels', fr: 'panels', de: 'panels', it: 'panels', nl: 'panelen', zh: '面板', ja: 'パネル', ru: 'панели' },
        },
        {
          id: 'construction/roofer/materials/paste',
          localImage: 'construction/roofer/materials/paste',
          translations: { en: 'paste', es: 'paste', pt: 'paste', fr: 'paste', de: 'paste', it: 'paste', nl: 'pasta', zh: '糊', ja: 'ペースト', ru: 'паста' },
        },
        {
          id: 'construction/roofer/materials/plastic',
          localImage: 'construction/roofer/materials/plastic',
          translations: { en: 'plastic', es: 'plastic', pt: 'plastic', fr: 'plastic', de: 'plastic', it: 'plastic', nl: 'plastic', zh: '塑料', ja: 'プラスチック', ru: 'пластик' },
        },
        {
          id: 'construction/roofer/materials/resin',
          localImage: 'construction/roofer/materials/resin',
          translations: { en: 'resin', es: 'resin', pt: 'resin', fr: 'resin', de: 'resin', it: 'resin', nl: 'hars', zh: '树脂', ja: '樹脂', ru: 'смола' },
        },
        {
          id: 'construction/roofer/materials/rubber',
          localImage: 'construction/roofer/materials/rubber',
          translations: { en: 'rubber', es: 'rubber', pt: 'rubber', fr: 'rubber', de: 'rubber', it: 'rubber', nl: 'rubber', zh: '橡皮', ja: 'ゴム', ru: 'резина' },
        },
        {
          id: 'construction/roofer/materials/screws',
          localImage: 'construction/roofer/materials/screws',
          translations: { en: 'screws', es: 'screws', pt: 'screws', fr: 'screws', de: 'screws', it: 'screws', nl: 'schroeven', zh: '螺丝', ja: 'ネジ', ru: 'винты' },
        },
        {
          id: 'construction/roofer/materials/sealant',
          localImage: 'construction/roofer/materials/sealant',
          translations: { en: 'sealant', es: 'sealant', pt: 'sealant', fr: 'sealant', de: 'sealant', it: 'sealant', nl: 'afdichtingsmiddel', zh: '密封剂', ja: 'シーラント', ru: 'герметик' },
        },
        {
          id: 'construction/roofer/materials/sheets',
          localImage: 'construction/roofer/materials/sheets',
          translations: { en: 'sheets', es: 'sheets', pt: 'sheets', fr: 'sheets', de: 'sheets', it: 'sheets', nl: 'lakens', zh: '床单', ja: 'シーツ', ru: 'простыни' },
        },
        {
          id: 'construction/roofer/materials/shingles',
          localImage: 'construction/roofer/materials/shingles',
          translations: { en: 'shingles', es: 'shingles', pt: 'shingles', fr: 'shingles', de: 'shingles', it: 'shingles', nl: 'dakpannen', zh: '屋面板', ja: '屋根板', ru: 'кровельная черепица' },
        },
        {
          id: 'construction/roofer/materials/strips',
          localImage: 'construction/roofer/materials/strips',
          translations: { en: 'strips', es: 'strips', pt: 'strips', fr: 'strips', de: 'strips', it: 'strips', nl: 'stroken', zh: '条', ja: 'ストリップ', ru: 'полоски' },
        },
        {
          id: 'construction/roofer/materials/tar',
          localImage: 'construction/roofer/materials/tar',
          translations: { en: 'tar', es: 'tar', pt: 'tar', fr: 'tar', de: 'tar', it: 'tar', nl: 'teer', zh: '沥青', ja: 'タール', ru: 'смола' },
        },
        {
          id: 'construction/roofer/materials/tiles',
          localImage: 'construction/roofer/materials/tiles',
          translations: { en: 'tiles', es: 'tiles', pt: 'tiles', fr: 'tiles', de: 'tiles', it: 'tiles', nl: 'tegels', zh: '瓷砖', ja: 'タイル', ru: 'плитка' },
        },
        {
          id: 'construction/roofer/materials/wraps',
          localImage: 'construction/roofer/materials/wraps',
          translations: { en: 'wraps', es: 'wraps', pt: 'wraps', fr: 'wraps', de: 'wraps', it: 'wraps', nl: 'wraps', zh: '包装', ja: 'ラップ', ru: 'обертки' },
        }
        ],
      }
      ],
    }
    ],
  },
  {
    id: 'delivery_logistic',
    name: { en: 'Delivery & Logistics', es: 'Logística', pt: 'Logística', fr: 'Logistique', de: 'Logistik', it: 'Logistica', nl: 'Bezorging & Logistiek', zh: '配送与物流', ja: '配送・物流', ru: 'Доставка и логистика' },
    icon: '📦',
    imageUrl: 'https://images.pexels.com/photos/4481259/pexels-photo-4481259.jpeg?auto=compress&cs=tinysrgb&w=800',
    sectors: [
    {
      id: 'food_delivery',
      name: { en: 'Food Delivery', es: 'Entrega de Comida', pt: 'Entrega de Comida', fr: 'Livraison Repas', de: 'Essenslieferung', it: 'Consegna Cibo', nl: 'Maaltijdbezorging', zh: '食品配送', ja: '料理配達', ru: 'Доставка еды' },
      icon: '🛵',
      roles: [
      {
        id: 'tools',
        name: { en: 'Tools', es: 'Herramientas', pt: 'Ferramentas', fr: 'Outils', de: 'Werkzeuge', it: 'Attrezzi', nl: 'Gereedschap', zh: '工具', ja: '道具', ru: 'Инструменты' },
        icon: '🔧',
        items: [
        {
          id: 'delivery_logistic/food_delivery/tools/app_device',
          localImage: 'delivery_logistic/food_delivery/tools/app_device',
          translations: { en: 'app device', es: 'app device', pt: 'app device', fr: 'app device', de: 'app device', it: 'app device', nl: 'app-apparaat', zh: '应用设备', ja: 'アプリデバイス', ru: 'устройство с приложением' },
        },
        {
          id: 'delivery_logistic/food_delivery/tools/backpack',
          localImage: 'delivery_logistic/food_delivery/tools/backpack',
          translations: { en: 'backpack', es: 'backpack', pt: 'backpack', fr: 'backpack', de: 'backpack', it: 'backpack', nl: 'rugzak', zh: '背包', ja: 'バックパック', ru: 'рюкзак' },
        },
        {
          id: 'delivery_logistic/food_delivery/tools/bell',
          localImage: 'delivery_logistic/food_delivery/tools/bell',
          translations: { en: 'bell', es: 'bell', pt: 'bell', fr: 'bell', de: 'bell', it: 'bell', nl: 'bel', zh: '铃', ja: 'ベル', ru: 'колокольчик' },
        },
        {
          id: 'delivery_logistic/food_delivery/tools/bicycle',
          localImage: 'delivery_logistic/food_delivery/tools/bicycle',
          translations: { en: 'bicycle', es: 'bicycle', pt: 'bicycle', fr: 'bicycle', de: 'bicycle', it: 'bicycle', nl: 'fiets', zh: '自行车', ja: '自転車', ru: 'велосипед' },
        },
        {
          id: 'delivery_logistic/food_delivery/tools/camera',
          localImage: 'delivery_logistic/food_delivery/tools/camera',
          translations: { en: 'camera', es: 'camera', pt: 'camera', fr: 'camera', de: 'camera', it: 'camera', nl: 'camera', zh: '摄像机', ja: 'カメラ', ru: 'камера' },
        },
        {
          id: 'delivery_logistic/food_delivery/tools/car',
          localImage: 'delivery_logistic/food_delivery/tools/car',
          translations: { en: 'car', es: 'car', pt: 'car', fr: 'car', de: 'car', it: 'car', nl: 'auto', zh: '汽车', ja: '車', ru: 'автомобиль' },
        },
        {
          id: 'delivery_logistic/food_delivery/tools/card_machine',
          localImage: 'delivery_logistic/food_delivery/tools/card_machine',
          translations: { en: 'card machine', es: 'card machine', pt: 'card machine', fr: 'card machine', de: 'card machine', it: 'card machine', nl: 'kaartlezer', zh: '刷卡机', ja: 'カードリーダー', ru: 'картридер' },
        },
        {
          id: 'delivery_logistic/food_delivery/tools/charger',
          localImage: 'delivery_logistic/food_delivery/tools/charger',
          translations: { en: 'charger', es: 'charger', pt: 'charger', fr: 'charger', de: 'charger', it: 'charger', nl: 'oplader', zh: '充电器', ja: '充電器', ru: 'зарядное устройство' },
        },
        {
          id: 'delivery_logistic/food_delivery/tools/clock',
          localImage: 'delivery_logistic/food_delivery/tools/clock',
          translations: { en: 'clock', es: 'clock', pt: 'clock', fr: 'clock', de: 'clock', it: 'clock', nl: 'klok', zh: '时钟', ja: '時計', ru: 'часы' },
        },
        {
          id: 'delivery_logistic/food_delivery/tools/delivery_bag',
          localImage: 'delivery_logistic/food_delivery/tools/delivery_bag',
          translations: { en: 'delivery bag', es: 'delivery bag', pt: 'delivery bag', fr: 'delivery bag', de: 'delivery bag', it: 'delivery bag', nl: 'bezorgtas', zh: '配送袋', ja: '配達バッグ', ru: 'сумка для доставки' },
        },
        {
          id: 'delivery_logistic/food_delivery/tools/flashlight',
          localImage: 'delivery_logistic/food_delivery/tools/flashlight',
          translations: { en: 'flashlight', es: 'flashlight', pt: 'flashlight', fr: 'flashlight', de: 'flashlight', it: 'flashlight', nl: 'zaklamp', zh: '手电筒', ja: '懐中電灯', ru: 'фонарик' },
        },
        {
          id: 'delivery_logistic/food_delivery/tools/gloves',
          localImage: 'delivery_logistic/food_delivery/tools/gloves',
          translations: { en: 'gloves', es: 'guantes', pt: 'luvas', fr: 'gants', de: 'Handschuhe', it: 'guanti', nl: 'handschoenen', zh: '手套', ja: '手袋', ru: 'перчатки' },
        },
        {
          id: 'delivery_logistic/food_delivery/tools/gps_device',
          localImage: 'delivery_logistic/food_delivery/tools/gps_device',
          translations: { en: 'gps device', es: 'gps device', pt: 'gps device', fr: 'gps device', de: 'gps device', it: 'gps device', nl: 'gps-apparaat', zh: 'GPS设备', ja: 'GPSデバイス', ru: 'GPS устройство' },
        },
        {
          id: 'delivery_logistic/food_delivery/tools/headset',
          localImage: 'delivery_logistic/food_delivery/tools/headset',
          translations: { en: 'headset', es: 'headset', pt: 'headset', fr: 'headset', de: 'headset', it: 'headset', nl: 'headset', zh: '耳机', ja: 'ヘッドセット', ru: 'гарнитура' },
        },
        {
          id: 'delivery_logistic/food_delivery/tools/helmet',
          localImage: 'delivery_logistic/food_delivery/tools/helmet',
          translations: { en: 'helmet', es: 'casco', pt: 'capacete', fr: 'casque', de: 'Helm', it: 'casco', nl: 'helm', zh: '安全帽', ja: 'ヘルメット', ru: 'каска' },
        },
        {
          id: 'delivery_logistic/food_delivery/tools/holder',
          localImage: 'delivery_logistic/food_delivery/tools/holder',
          translations: { en: 'holder', es: 'holder', pt: 'holder', fr: 'holder', de: 'holder', it: 'holder', nl: 'houder', zh: '夹持器', ja: 'ホルダー', ru: 'держатель' },
        },
        {
          id: 'delivery_logistic/food_delivery/tools/intercom',
          localImage: 'delivery_logistic/food_delivery/tools/intercom',
          translations: { en: 'intercom', es: 'intercom', pt: 'intercom', fr: 'intercom', de: 'intercom', it: 'intercom', nl: 'intercom', zh: '对讲机', ja: 'インターコム', ru: 'домофон' },
        },
        {
          id: 'delivery_logistic/food_delivery/tools/jacket',
          localImage: 'delivery_logistic/food_delivery/tools/jacket',
          translations: { en: 'jacket', es: 'jacket', pt: 'jacket', fr: 'jacket', de: 'jacket', it: 'jacket', nl: 'jas', zh: '夹克', ja: 'ジャケット', ru: 'куртка' },
        },
        {
          id: 'delivery_logistic/food_delivery/tools/key',
          localImage: 'delivery_logistic/food_delivery/tools/key',
          translations: { en: 'key', es: 'key', pt: 'key', fr: 'key', de: 'key', it: 'key', nl: 'sleutel', zh: '钥匙', ja: '鍵', ru: 'ключ' },
        },
        {
          id: 'delivery_logistic/food_delivery/tools/lock',
          localImage: 'delivery_logistic/food_delivery/tools/lock',
          translations: { en: 'lock', es: 'lock', pt: 'lock', fr: 'lock', de: 'lock', it: 'lock', nl: 'slot', zh: '锁', ja: '鍵', ru: 'замок' },
        },
        {
          id: 'delivery_logistic/food_delivery/tools/mount',
          localImage: 'delivery_logistic/food_delivery/tools/mount',
          translations: { en: 'mount', es: 'mount', pt: 'mount', fr: 'mount', de: 'mount', it: 'mount', nl: 'montage', zh: '支架', ja: 'マウント', ru: 'кронштейн' },
        },
        {
          id: 'delivery_logistic/food_delivery/tools/phone',
          localImage: 'delivery_logistic/food_delivery/tools/phone',
          translations: { en: 'phone', es: 'teléfono', pt: 'telefone', fr: 'téléphone', de: 'Telefon', it: 'telefono', nl: 'telefoon', zh: '手机', ja: '電話', ru: 'телефон' },
        },
        {
          id: 'delivery_logistic/food_delivery/tools/power_bank',
          localImage: 'delivery_logistic/food_delivery/tools/power_bank',
          translations: { en: 'power bank', es: 'power bank', pt: 'power bank', fr: 'power bank', de: 'power bank', it: 'power bank', nl: 'powerbank', zh: '充电宝', ja: 'モバイルバッテリー', ru: 'внешний аккумулятор' },
        },
        {
          id: 'delivery_logistic/food_delivery/tools/scooter',
          localImage: 'delivery_logistic/food_delivery/tools/scooter',
          translations: { en: 'scooter', es: 'scooter', pt: 'scooter', fr: 'scooter', de: 'scooter', it: 'scooter', nl: 'scooter', zh: '踏板车', ja: 'スクーター', ru: 'скутер' },
        },
        {
          id: 'delivery_logistic/food_delivery/tools/thermal_bag',
          localImage: 'delivery_logistic/food_delivery/tools/thermal_bag',
          translations: { en: 'thermal bag', es: 'thermal bag', pt: 'thermal bag', fr: 'thermal bag', de: 'thermal bag', it: 'thermal bag', nl: 'thermische tas', zh: '保温袋', ja: '保冷バッグ', ru: 'термосумка' },
        },
        {
          id: 'delivery_logistic/food_delivery/tools/timer',
          localImage: 'delivery_logistic/food_delivery/tools/timer',
          translations: { en: 'timer', es: 'timer', pt: 'timer', fr: 'timer', de: 'timer', it: 'timer', nl: 'timer', zh: '计时器', ja: 'タイマー', ru: 'таймер' },
        },
        {
          id: 'delivery_logistic/food_delivery/tools/wallet',
          localImage: 'delivery_logistic/food_delivery/tools/wallet',
          translations: { en: 'wallet', es: 'wallet', pt: 'wallet', fr: 'wallet', de: 'wallet', it: 'wallet', nl: 'portemonnee', zh: '钱包', ja: '財布', ru: 'кошелек' },
        }
        ],
      },
      {
        id: 'materials',
        name: { en: 'Materials', es: 'Materiales', pt: 'Materiais', fr: 'Matériaux', de: 'Materialien', it: 'Materiali', nl: 'Materialen', zh: '材料', ja: '材料', ru: 'Материалы' },
        icon: '📦',
        items: [
        {
          id: 'delivery_logistic/food_delivery/materials/cash',
          localImage: 'delivery_logistic/food_delivery/materials/cash',
          translations: { en: 'cash', es: 'efectivo', pt: 'dinheiro', fr: 'espèces', de: 'Bargeld', it: 'contanti', nl: 'contant geld', zh: '现金', ja: '現金', ru: 'наличные' },
        },
        {
          id: 'delivery_logistic/food_delivery/materials/drink_cup',
          localImage: 'delivery_logistic/food_delivery/materials/drink_cup',
          translations: { en: 'drink cup', es: 'drink cup', pt: 'drink cup', fr: 'drink cup', de: 'drink cup', it: 'drink cup', nl: 'drinkbeker', zh: '饮料杯', ja: 'ドリンクカップ', ru: 'стакан для напитков' },
        },
        {
          id: 'delivery_logistic/food_delivery/materials/food_container',
          localImage: 'delivery_logistic/food_delivery/materials/food_container',
          translations: { en: 'food container', es: 'food container', pt: 'food container', fr: 'food container', de: 'food container', it: 'food container', nl: 'voedselcontainer', zh: '食品容器', ja: '食品容器', ru: 'пищевой контейнер' },
        },
        {
          id: 'delivery_logistic/food_delivery/materials/label',
          localImage: 'delivery_logistic/food_delivery/materials/label',
          translations: { en: 'label', es: 'etiqueta', pt: 'etiqueta', fr: 'étiquette', de: 'Etikett', it: 'etichetta', nl: 'etiket', zh: '标签', ja: 'ラベル', ru: 'этикетка' },
        },
        {
          id: 'delivery_logistic/food_delivery/materials/lid',
          localImage: 'delivery_logistic/food_delivery/materials/lid',
          translations: { en: 'lid', es: 'lid', pt: 'lid', fr: 'lid', de: 'lid', it: 'lid', nl: 'deksel', zh: '盖子', ja: '蓋', ru: 'крышка' },
        },
        {
          id: 'delivery_logistic/food_delivery/materials/napkin',
          localImage: 'delivery_logistic/food_delivery/materials/napkin',
          translations: { en: 'napkin', es: 'napkin', pt: 'napkin', fr: 'napkin', de: 'napkin', it: 'napkin', nl: 'servet', zh: '餐巾', ja: 'ナプキン', ru: 'салфетка' },
        },
        {
          id: 'delivery_logistic/food_delivery/materials/order_receipt',
          localImage: 'delivery_logistic/food_delivery/materials/order_receipt',
          translations: { en: 'order receipt', es: 'order receipt', pt: 'order receipt', fr: 'order receipt', de: 'order receipt', it: 'order receipt', nl: 'orderbon', zh: '订单收据', ja: '注文レシート', ru: 'квитанция заказа' },
        },
        {
          id: 'delivery_logistic/food_delivery/materials/paper_bag',
          localImage: 'delivery_logistic/food_delivery/materials/paper_bag',
          translations: { en: 'paper bag', es: 'paper bag', pt: 'paper bag', fr: 'paper bag', de: 'paper bag', it: 'paper bag', nl: 'papieren tas', zh: '纸袋', ja: '紙袋', ru: 'бумажный пакет' },
        },
        {
          id: 'delivery_logistic/food_delivery/materials/plastic_bag',
          localImage: 'delivery_logistic/food_delivery/materials/plastic_bag',
          translations: { en: 'plastic bag', es: 'plastic bag', pt: 'plastic bag', fr: 'plastic bag', de: 'plastic bag', it: 'plastic bag', nl: 'plastic zak', zh: '塑料袋', ja: 'ビニール袋', ru: 'пластиковый пакет' },
        },
        {
          id: 'delivery_logistic/food_delivery/materials/receipt',
          localImage: 'delivery_logistic/food_delivery/materials/receipt',
          translations: { en: 'receipt', es: 'recibo', pt: 'recibo', fr: 'reçu', de: 'Quittung', it: 'ricevuta', nl: 'bon', zh: '收据', ja: 'レシート', ru: 'квитанция' },
        },
        {
          id: 'delivery_logistic/food_delivery/materials/seal',
          localImage: 'delivery_logistic/food_delivery/materials/seal',
          translations: { en: 'seal', es: 'seal', pt: 'seal', fr: 'seal', de: 'seal', it: 'seal', nl: 'afdichting', zh: '密封件', ja: 'シール', ru: 'уплотнение' },
        },
        {
          id: 'delivery_logistic/food_delivery/materials/sticker',
          localImage: 'delivery_logistic/food_delivery/materials/sticker',
          translations: { en: 'sticker', es: 'sticker', pt: 'sticker', fr: 'sticker', de: 'sticker', it: 'sticker', nl: 'sticker', zh: '贴纸', ja: 'ステッカー', ru: 'наклейка' },
        },
        {
          id: 'delivery_logistic/food_delivery/materials/straw',
          localImage: 'delivery_logistic/food_delivery/materials/straw',
          translations: { en: 'straw', es: 'straw', pt: 'straw', fr: 'straw', de: 'straw', it: 'straw', nl: 'rietje', zh: '吸管', ja: 'ストロー', ru: 'соломинка' },
        }
        ],
      }
      ],
    },
    {
      id: 'parcel_delivery',
      name: { en: 'Parcel Delivery', es: 'Mensajería', pt: 'Entrega de Encomendas', fr: 'Livraison Colis', de: 'Paketlieferung', it: 'Corriere', nl: 'Pakketbezorging', zh: '包裹配送', ja: '荷物配達', ru: 'Доставка посылок' },
      icon: '📬',
      roles: [
      {
        id: 'tools',
        name: { en: 'Tools', es: 'Herramientas', pt: 'Ferramentas', fr: 'Outils', de: 'Werkzeuge', it: 'Attrezzi', nl: 'Gereedschap', zh: '工具', ja: '道具', ru: 'Инструменты' },
        icon: '🔧',
        items: [
        {
          id: 'delivery_logistic/parcel_delivery/tools/app_device',
          localImage: 'delivery_logistic/parcel_delivery/tools/app_device',
          translations: { en: 'app device', es: 'app device', pt: 'app device', fr: 'app device', de: 'app device', it: 'app device', nl: 'app-apparaat', zh: '应用设备', ja: 'アプリデバイス', ru: 'устройство с приложением' },
        },
        {
          id: 'delivery_logistic/parcel_delivery/tools/bin',
          localImage: 'delivery_logistic/parcel_delivery/tools/storage_bins',
          translations: { en: 'bin', es: 'cubo de basura', pt: 'lixeira', fr: 'poubelle', de: 'Mülleimer', it: 'bidone', nl: 'prullenbak', zh: '垃圾桶', ja: 'ビン', ru: 'мусорное ведро' },
        },
        {
          id: 'delivery_logistic/parcel_delivery/tools/camera',
          localImage: 'delivery_logistic/food_delivery/tools/camera',
          translations: { en: 'camera', es: 'camera', pt: 'camera', fr: 'camera', de: 'camera', it: 'camera', nl: 'camera', zh: '摄像机', ja: 'カメラ', ru: 'камера' },
        },
        {
          id: 'delivery_logistic/parcel_delivery/tools/cart',
          localImage: 'delivery_logistic/parcel_delivery/tools/cart',
          translations: { en: 'cart', es: 'carrito', pt: 'carrinho', fr: 'chariot', de: 'Wagen', it: 'carrello', nl: 'kar', zh: '推车', ja: 'カート', ru: 'тележка' },
        },
        {
          id: 'delivery_logistic/parcel_delivery/tools/charger',
          localImage: 'delivery_logistic/parcel_delivery/tools/charger',
          translations: { en: 'charger', es: 'charger', pt: 'charger', fr: 'charger', de: 'charger', it: 'charger', nl: 'oplader', zh: '充电器', ja: '充電器', ru: 'зарядное устройство' },
        },
        {
          id: 'delivery_logistic/parcel_delivery/tools/clock',
          localImage: 'delivery_logistic/food_delivery/tools/clock',
          translations: { en: 'clock', es: 'clock', pt: 'clock', fr: 'clock', de: 'clock', it: 'clock', nl: 'klok', zh: '时钟', ja: '時計', ru: 'часы' },
        },
        {
          id: 'delivery_logistic/parcel_delivery/tools/container',
          localImage: 'delivery_logistic/stocker/tools/container',
          translations: { en: 'container', es: 'contenedor', pt: 'recipiente', fr: 'conteneur', de: 'Behälter', it: 'contenitore', nl: 'container', zh: '容器', ja: 'コンテナ', ru: 'контейнер' },
        },
        {
          id: 'delivery_logistic/parcel_delivery/tools/crate',
          localImage: 'delivery_logistic/stocker/materials/crates',
          translations: { en: 'crate', es: 'cajón', pt: 'engradado', fr: 'caisse', de: 'Kiste', it: 'cassa', nl: 'krat', zh: '板条箱', ja: 'クレート', ru: 'ящик' },
        },
        {
          id: 'delivery_logistic/parcel_delivery/tools/cutter',
          localImage: 'delivery_logistic/parcel_delivery/tools/box_cutter',
          translations: { en: 'cutter', es: 'cortador', pt: 'cortador', fr: 'cutter', de: 'Cutter', it: 'taglierino', nl: 'snijder', zh: '切割机', ja: 'カッター', ru: 'резак' },
        },
        {
          id: 'delivery_logistic/parcel_delivery/tools/flashlight',
          localImage: 'delivery_logistic/parcel_delivery/tools/flashlight',
          translations: { en: 'flashlight', es: 'flashlight', pt: 'flashlight', fr: 'flashlight', de: 'flashlight', it: 'flashlight', nl: 'zaklamp', zh: '手电筒', ja: '懐中電灯', ru: 'фонарик' },
        },
        {
          id: 'delivery_logistic/parcel_delivery/tools/gloves',
          localImage: 'delivery_logistic/parcel_delivery/tools/work_gloves',
          translations: { en: 'gloves', es: 'guantes', pt: 'luvas', fr: 'gants', de: 'Handschuhe', it: 'guanti', nl: 'handschoenen', zh: '手套', ja: '手袋', ru: 'перчатки' },
        },
        {
          id: 'delivery_logistic/parcel_delivery/tools/gps_device',
          localImage: 'delivery_logistic/parcel_delivery/tools/gps_device',
          translations: { en: 'gps device', es: 'gps device', pt: 'gps device', fr: 'gps device', de: 'gps device', it: 'gps device', nl: 'gps-apparaat', zh: 'GPS设备', ja: 'GPSデバイス', ru: 'GPS устройство' },
        },
        {
          id: 'delivery_logistic/parcel_delivery/tools/key',
          localImage: 'delivery_logistic/food_delivery/tools/key',
          translations: { en: 'key', es: 'key', pt: 'key', fr: 'key', de: 'key', it: 'key', nl: 'sleutel', zh: '钥匙', ja: '鍵', ru: 'ключ' },
        },
        {
          id: 'delivery_logistic/parcel_delivery/tools/knife',
          localImage: 'delivery_logistic/warehouse_worker/tools/cutter',
          translations: { en: 'knife', es: 'cuchillo', pt: 'faca', fr: 'couteau', de: 'Messer', it: 'coltello', nl: 'mes', zh: '刀', ja: 'ナイフ', ru: 'нож' },
        },
        {
          id: 'delivery_logistic/parcel_delivery/tools/lock',
          localImage: 'delivery_logistic/parcel_delivery/tools/padlock',
          translations: { en: 'lock', es: 'lock', pt: 'lock', fr: 'lock', de: 'lock', it: 'lock', nl: 'slot', zh: '锁', ja: '鍵', ru: 'замок' },
        },
        {
          id: 'delivery_logistic/parcel_delivery/tools/pallet',
          localImage: 'delivery_logistic/parcel_delivery/tools/pallet',
          translations: { en: 'pallet', es: 'palé', pt: 'palete', fr: 'palette', de: 'Palette', it: 'pallet', nl: 'pallet', zh: '托盘', ja: 'パレット', ru: 'паллет' },
        },
        {
          id: 'delivery_logistic/parcel_delivery/tools/phone',
          localImage: 'delivery_logistic/parcel_delivery/tools/phone',
          translations: { en: 'phone', es: 'teléfono', pt: 'telefone', fr: 'téléphone', de: 'Telefon', it: 'telefono', nl: 'telefoon', zh: '手机', ja: '電話', ru: 'телефон' },
        },
        {
          id: 'delivery_logistic/parcel_delivery/tools/rack',
          localImage: 'delivery_logistic/stocker/tools/rack',
          translations: { en: 'rack', es: 'estante', pt: 'prateleira', fr: 'étagère', de: 'Regal', it: 'scaffale', nl: 'rek', zh: '货架', ja: 'ラック', ru: 'стеллаж' },
        },
        {
          id: 'delivery_logistic/parcel_delivery/tools/scanner',
          localImage: 'delivery_logistic/parcel_delivery/tools/scanner',
          translations: { en: 'scanner', es: 'escáner', pt: 'scanner', fr: 'scanner', de: 'Scanner', it: 'scanner', nl: 'scanner', zh: '扫描仪', ja: 'スキャナー', ru: 'сканер' },
        },
        {
          id: 'delivery_logistic/parcel_delivery/tools/screen',
          localImage: 'delivery_logistic/parcel_delivery/tools/tablet',
          translations: { en: 'screen', es: 'screen', pt: 'screen', fr: 'screen', de: 'screen', it: 'screen', nl: 'scherm', zh: '屏幕', ja: 'スクリーン', ru: 'экран' },
        },
        {
          id: 'delivery_logistic/parcel_delivery/tools/shelf',
          localImage: 'delivery_logistic/stocker/tools/shelf_tool',
          translations: { en: 'shelf', es: 'shelf', pt: 'shelf', fr: 'shelf', de: 'shelf', it: 'shelf', nl: 'plank', zh: '架子', ja: '棚', ru: 'полка' },
        },
        {
          id: 'delivery_logistic/parcel_delivery/tools/timer',
          localImage: 'delivery_logistic/food_delivery/tools/timer',
          translations: { en: 'timer', es: 'timer', pt: 'timer', fr: 'timer', de: 'timer', it: 'timer', nl: 'timer', zh: '计时器', ja: 'タイマー', ru: 'таймер' },
        },
        {
          id: 'delivery_logistic/parcel_delivery/tools/trolley',
          localImage: 'delivery_logistic/parcel_delivery/tools/trolley',
          translations: { en: 'trolley', es: 'carrito', pt: 'carrinho', fr: 'chariot', de: 'Trolley', it: 'carrello', nl: 'trolley', zh: '手推车', ja: 'トロリー', ru: 'тележка' },
        },
        {
          id: 'delivery_logistic/parcel_delivery/tools/truck',
          localImage: 'delivery_logistic/parcel_delivery/tools/truck',
          translations: { en: 'truck', es: 'truck', pt: 'truck', fr: 'truck', de: 'truck', it: 'truck', nl: 'vrachtwagen', zh: '卡车', ja: 'トラック', ru: 'грузовик' },
        },
        {
          id: 'delivery_logistic/parcel_delivery/tools/uniform',
          localImage: 'delivery_logistic/food_delivery/tools/jacket',
          translations: { en: 'uniform', es: 'uniforme', pt: 'uniforme', fr: 'uniforme', de: 'Uniform', it: 'uniforme', nl: 'uniform', zh: '制服', ja: 'ユニフォーム', ru: 'форма' },
        },
        {
          id: 'delivery_logistic/parcel_delivery/tools/van',
          localImage: 'delivery_logistic/parcel_delivery/tools/van',
          translations: { en: 'van', es: 'van', pt: 'van', fr: 'van', de: 'van', it: 'van', nl: 'bestelwagen', zh: '货车', ja: 'バン', ru: 'фургон' },
        },
        {
          id: 'delivery_logistic/parcel_delivery/tools/vest',
          localImage: 'delivery_logistic/parcel_delivery/tools/high-visibility_vest',
          translations: { en: 'vest', es: 'chaleco', pt: 'colete', fr: 'gilet', de: 'Weste', it: 'gilet', nl: 'vest', zh: '背心', ja: 'ベスト', ru: 'жилет' },
        }
        ],
      },
      {
        id: 'materials',
        name: { en: 'Materials', es: 'Materiales', pt: 'Materiais', fr: 'Matériaux', de: 'Materialien', it: 'Materiali', nl: 'Materialen', zh: '材料', ja: '材料', ru: 'Материалы' },
        icon: '📦',
        items: [
        {
          id: 'delivery_logistic/parcel_delivery/materials/barcode',
          localImage: 'delivery_logistic/parcel_delivery/tools/barcode_scanner',
          translations: { en: 'barcode', es: 'código de barras', pt: 'código de barras', fr: 'code-barres', de: 'Barcode', it: 'codice a barre', nl: 'streepjescode', zh: '条形码', ja: 'バーコード', ru: 'штрихкод' },
        },
        {
          id: 'delivery_logistic/parcel_delivery/materials/box',
          localImage: 'delivery_logistic/parcel_delivery/tools/cardboard_boxes',
          translations: { en: 'box', es: 'caja', pt: 'caixa', fr: 'boîte', de: 'Kasten', it: 'scatola', nl: 'doos', zh: '箱子', ja: 'ボックス', ru: 'коробка' },
        },
        {
          id: 'delivery_logistic/parcel_delivery/materials/envelope',
          localImage: 'delivery_logistic/parcel_delivery/tools/padded_envelopes',
          translations: { en: 'envelope', es: 'envelope', pt: 'envelope', fr: 'envelope', de: 'envelope', it: 'envelope', nl: 'envelop', zh: '信封', ja: '封筒', ru: 'конверт' },
        },
        {
          id: 'delivery_logistic/parcel_delivery/materials/label',
          localImage: 'delivery_logistic/parcel_delivery/tools/shipping_labels',
          translations: { en: 'label', es: 'etiqueta', pt: 'etiqueta', fr: 'étiquette', de: 'Etikett', it: 'etichetta', nl: 'etiket', zh: '标签', ja: 'ラベル', ru: 'этикетка' },
        },
        {
          id: 'delivery_logistic/parcel_delivery/materials/marker',
          localImage: 'delivery_logistic/parcel_delivery/tools/permanent_marker',
          translations: { en: 'marker', es: 'marcador', pt: 'marcador', fr: 'marqueur', de: 'Marker', it: 'pennarello', nl: 'marker', zh: '记号笔', ja: 'マーカー', ru: 'маркер' },
        },
        {
          id: 'delivery_logistic/parcel_delivery/materials/package',
          localImage: 'delivery_logistic/warehouse_worker/materials/packages',
          translations: { en: 'package', es: 'package', pt: 'package', fr: 'package', de: 'package', it: 'package', nl: 'pakket', zh: '包裹', ja: 'パッケージ', ru: 'посылка' },
        },
        {
          id: 'delivery_logistic/parcel_delivery/materials/paper',
          localImage: 'delivery_logistic/parcel_delivery/tools/packing_paper',
          translations: { en: 'paper', es: 'papel', pt: 'papel', fr: 'papier', de: 'Papier', it: 'carta', nl: 'papier', zh: '纸', ja: '紙', ru: 'бумага' },
        },
        {
          id: 'delivery_logistic/parcel_delivery/materials/parcel',
          localImage: 'delivery_logistic/warehouse_worker/materials/parcels',
          translations: { en: 'parcel', es: 'parcel', pt: 'parcel', fr: 'parcel', de: 'parcel', it: 'parcel', nl: 'pakket', zh: '包裹', ja: '小包', ru: 'посылка' },
        },
        {
          id: 'delivery_logistic/parcel_delivery/materials/plastic',
          localImage: 'delivery_logistic/parcel_delivery/tools/stretch_film',
          translations: { en: 'plastic', es: 'plastic', pt: 'plastic', fr: 'plastic', de: 'plastic', it: 'plastic', nl: 'plastic', zh: '塑料', ja: 'プラスチック', ru: 'пластик' },
        },
        {
          id: 'delivery_logistic/parcel_delivery/materials/seal',
          localImage: 'delivery_logistic/parcel_delivery/tools/security_seals',
          translations: { en: 'seal', es: 'seal', pt: 'seal', fr: 'seal', de: 'seal', it: 'seal', nl: 'afdichting', zh: '密封件', ja: 'シール', ru: 'уплотнение' },
        },
        {
          id: 'delivery_logistic/parcel_delivery/materials/sticker',
          localImage: 'delivery_logistic/parcel_delivery/tools/shipping_labels',
          translations: { en: 'sticker', es: 'sticker', pt: 'sticker', fr: 'sticker', de: 'sticker', it: 'sticker', nl: 'sticker', zh: '贴纸', ja: 'ステッカー', ru: 'наклейка' },
        },
        {
          id: 'delivery_logistic/parcel_delivery/materials/strap',
          localImage: 'delivery_logistic/parcel_delivery/tools/ratchet_straps',
          translations: { en: 'strap', es: 'strap', pt: 'strap', fr: 'strap', de: 'strap', it: 'strap', nl: 'band', zh: '带子', ja: 'ストラップ', ru: 'ремень' },
        },
        {
          id: 'delivery_logistic/parcel_delivery/materials/tape',
          localImage: 'delivery_logistic/parcel_delivery/tools/packing_tape',
          translations: { en: 'tape', es: 'cinta', pt: 'fita', fr: 'ruban', de: 'Klebeband', it: 'nastro', nl: 'tape', zh: '胶带', ja: 'テープ', ru: 'лента' },
        },
        {
          id: 'delivery_logistic/parcel_delivery/materials/wrap',
          localImage: 'delivery_logistic/parcel_delivery/tools/bubble_wrap',
          translations: { en: 'wrap', es: 'wrap', pt: 'wrap', fr: 'wrap', de: 'wrap', it: 'wrap', nl: 'folie', zh: '包装', ja: 'ラップ', ru: 'обертка' },
        }
        ],
      }
      ],
    },
    {
      id: 'stocker',
      name: { en: 'Stocker', es: 'Reponedor', pt: 'Repositor', fr: 'Stockeur', de: 'Lagerist', it: 'Magazziniere', nl: 'Vakkenvuller', zh: '理货员', ja: '品出し員', ru: 'Сотрудник склада' },
      icon: '📦',
      roles: [
      {
        id: 'tools',
        name: { en: 'Tools', es: 'Herramientas', pt: 'Ferramentas', fr: 'Outils', de: 'Werkzeuge', it: 'Attrezzi', nl: 'Gereedschap', zh: '工具', ja: '道具', ru: 'Инструменты' },
        icon: '🔧',
        items: [
        {
          id: 'delivery_logistic/stocker/tools/bin',
          localImage: 'delivery_logistic/stocker/tools/bin',
          translations: { en: 'bin', es: 'cubo de basura', pt: 'lixeira', fr: 'poubelle', de: 'Mülleimer', it: 'bidone', nl: 'prullenbak', zh: '垃圾桶', ja: 'ビン', ru: 'мусорное ведро' },
        },
        {
          id: 'delivery_logistic/stocker/tools/box_cutter',
          localImage: 'delivery_logistic/stocker/tools/box_cutter',
          translations: { en: 'box cutter', es: 'box cutter', pt: 'box cutter', fr: 'box cutter', de: 'box cutter', it: 'box cutter', nl: 'stanleymes', zh: '美工刀', ja: 'カッターナイフ', ru: 'нож для бумаги' },
        },
        {
          id: 'delivery_logistic/stocker/tools/carrier',
          localImage: 'delivery_logistic/stocker/tools/carrier',
          translations: { en: 'carrier', es: 'carrier', pt: 'carrier', fr: 'carrier', de: 'carrier', it: 'carrier', nl: 'drager', zh: '载体', ja: 'キャリア', ru: 'носитель' },
        },
        {
          id: 'delivery_logistic/stocker/tools/cart',
          localImage: 'delivery_logistic/stocker/tools/cart',
          translations: { en: 'cart', es: 'carrito', pt: 'carrinho', fr: 'chariot', de: 'Wagen', it: 'carrello', nl: 'kar', zh: '推车', ja: 'カート', ru: 'тележка' },
        },
        {
          id: 'delivery_logistic/stocker/tools/container',
          localImage: 'delivery_logistic/stocker/tools/container',
          translations: { en: 'container', es: 'contenedor', pt: 'recipiente', fr: 'conteneur', de: 'Behälter', it: 'contenitore', nl: 'container', zh: '容器', ja: 'コンテナ', ru: 'контейнер' },
        },
        {
          id: 'delivery_logistic/stocker/tools/handler',
          localImage: 'delivery_logistic/stocker/tools/handler',
          translations: { en: 'handler', es: 'handler', pt: 'handler', fr: 'handler', de: 'handler', it: 'handler', nl: 'behandelaar', zh: '处理器', ja: 'ハンドラー', ru: 'манипулятор' },
        },
        {
          id: 'delivery_logistic/stocker/tools/hook',
          localImage: 'delivery_logistic/stocker/tools/hook',
          translations: { en: 'hook', es: 'gancho', pt: 'gancho', fr: 'crochet', de: 'Haken', it: 'gancio', nl: 'haak', zh: '挂钩', ja: 'フック', ru: 'крюк' },
        },
        {
          id: 'delivery_logistic/stocker/tools/ladder',
          localImage: 'delivery_logistic/stocker/tools/ladder',
          translations: { en: 'ladder', es: 'escalera', pt: 'escada', fr: 'échelle', de: 'Leiter', it: 'scala', nl: 'ladder', zh: '梯子', ja: 'はしご', ru: 'лестница' },
        },
        {
          id: 'delivery_logistic/stocker/tools/lift',
          localImage: 'delivery_logistic/stocker/tools/lift',
          translations: { en: 'lift', es: 'lift', pt: 'lift', fr: 'lift', de: 'lift', it: 'lift', nl: 'lift', zh: '升降机', ja: 'リフト', ru: 'подъемник' },
        },
        {
          id: 'delivery_logistic/stocker/tools/loader',
          localImage: 'delivery_logistic/stocker/tools/loader',
          translations: { en: 'loader', es: 'loader', pt: 'loader', fr: 'loader', de: 'loader', it: 'loader', nl: 'lader', zh: '装载机', ja: 'ローダー', ru: 'погрузчик' },
        },
        {
          id: 'delivery_logistic/stocker/tools/mover',
          localImage: 'delivery_logistic/stocker/tools/mover',
          translations: { en: 'mover', es: 'mover', pt: 'mover', fr: 'mover', de: 'mover', it: 'mover', nl: 'verhuizer', zh: '移动器', ja: 'ムーバー', ru: 'тележка для переноски' },
        },
        {
          id: 'delivery_logistic/stocker/tools/organizer',
          localImage: 'delivery_logistic/stocker/tools/organizer',
          translations: { en: 'organizer', es: 'organizer', pt: 'organizer', fr: 'organizer', de: 'organizer', it: 'organizer', nl: 'organizer', zh: '整理盒', ja: 'オーガナイザー', ru: 'органайзер' },
        },
        {
          id: 'delivery_logistic/stocker/tools/pallet_jack',
          localImage: 'delivery_logistic/stocker/tools/pallet_jack',
          translations: { en: 'pallet jack', es: 'pallet jack', pt: 'pallet jack', fr: 'pallet jack', de: 'pallet jack', it: 'pallet jack', nl: 'pallettruck', zh: '托盘搬运车', ja: 'パレットジャック', ru: 'гидравлическая тележка' },
        },
        {
          id: 'delivery_logistic/stocker/tools/rack',
          localImage: 'delivery_logistic/stocker/tools/rack',
          translations: { en: 'rack', es: 'estante', pt: 'prateleira', fr: 'étagère', de: 'Regal', it: 'scaffale', nl: 'rek', zh: '货架', ja: 'ラック', ru: 'стеллаж' },
        },
        {
          id: 'delivery_logistic/stocker/tools/scanner',
          localImage: 'delivery_logistic/stocker/tools/scanner',
          translations: { en: 'scanner', es: 'escáner', pt: 'scanner', fr: 'scanner', de: 'Scanner', it: 'scanner', nl: 'scanner', zh: '扫描仪', ja: 'スキャナー', ru: 'сканер' },
        },
        {
          id: 'delivery_logistic/stocker/tools/scanner_device',
          localImage: 'delivery_logistic/stocker/tools/scanner_device',
          translations: { en: 'scanner device', es: 'scanner device', pt: 'scanner device', fr: 'scanner device', de: 'scanner device', it: 'scanner device', nl: 'scannerapparaat', zh: '扫描设备', ja: 'スキャナーデバイス', ru: 'сканирующее устройство' },
        },
        {
          id: 'delivery_logistic/stocker/tools/shelf_tool',
          localImage: 'delivery_logistic/stocker/tools/shelf_tool',
          translations: { en: 'shelf tool', es: 'shelf tool', pt: 'shelf tool', fr: 'shelf tool', de: 'shelf tool', it: 'shelf tool', nl: 'plankgereedschap', zh: '货架工具', ja: '棚ツール', ru: 'инструмент для полок' },
        },
        {
          id: 'delivery_logistic/stocker/tools/sorter',
          localImage: 'delivery_logistic/stocker/tools/sorter',
          translations: { en: 'sorter', es: 'sorter', pt: 'sorter', fr: 'sorter', de: 'sorter', it: 'sorter', nl: 'sorteerder', zh: '分类机', ja: 'ソーター', ru: 'сортировщик' },
        },
        {
          id: 'delivery_logistic/stocker/tools/tape_gun',
          localImage: 'delivery_logistic/stocker/tools/tape_gun',
          translations: { en: 'tape gun', es: 'tape gun', pt: 'tape gun', fr: 'tape gun', de: 'tape gun', it: 'tape gun', nl: 'tapepistool', zh: '胶带枪', ja: 'テープガン', ru: 'пистолет для ленты' },
        },
        {
          id: 'delivery_logistic/stocker/tools/trolley',
          localImage: 'delivery_logistic/stocker/tools/trolley',
          translations: { en: 'trolley', es: 'carrito', pt: 'carrinho', fr: 'chariot', de: 'Trolley', it: 'carrello', nl: 'trolley', zh: '手推车', ja: 'トロリー', ru: 'тележка' },
        }
        ],
      },
      {
        id: 'materials',
        name: { en: 'Materials', es: 'Materiales', pt: 'Materiais', fr: 'Matériaux', de: 'Materialien', it: 'Materiali', nl: 'Materialen', zh: '材料', ja: '材料', ru: 'Материалы' },
        icon: '📦',
        items: [
        {
          id: 'delivery_logistic/stocker/materials/boxes',
          localImage: 'delivery_logistic/stocker/materials/boxes',
          translations: { en: 'boxes', es: 'boxes', pt: 'boxes', fr: 'boxes', de: 'boxes', it: 'boxes', nl: 'dozen', zh: '箱子', ja: 'ボックス', ru: 'коробки' },
        },
        {
          id: 'delivery_logistic/stocker/materials/bundles',
          localImage: 'delivery_logistic/stocker/materials/bundles',
          translations: { en: 'bundles', es: 'bundles', pt: 'bundles', fr: 'bundles', de: 'bundles', it: 'bundles', nl: 'bundels', zh: '捆', ja: 'バンドル', ru: 'связки' },
        },
        {
          id: 'delivery_logistic/stocker/materials/cargo',
          localImage: 'delivery_logistic/stocker/materials/cargo',
          translations: { en: 'cargo', es: 'cargo', pt: 'cargo', fr: 'cargo', de: 'cargo', it: 'cargo', nl: 'vracht', zh: '货物', ja: '貨物', ru: 'груз' },
        },
        {
          id: 'delivery_logistic/stocker/materials/cartons',
          localImage: 'delivery_logistic/stocker/materials/cartons',
          translations: { en: 'cartons', es: 'cartons', pt: 'cartons', fr: 'cartons', de: 'cartons', it: 'cartons', nl: 'kartons', zh: '纸板箱', ja: 'カートン', ru: 'картонные коробки' },
        },
        {
          id: 'delivery_logistic/stocker/materials/containers',
          localImage: 'delivery_logistic/stocker/materials/containers',
          translations: { en: 'containers', es: 'containers', pt: 'containers', fr: 'containers', de: 'containers', it: 'containers', nl: 'containers', zh: '容器', ja: 'コンテナ', ru: 'контейнеры' },
        },
        {
          id: 'delivery_logistic/stocker/materials/crates',
          localImage: 'delivery_logistic/stocker/materials/crates',
          translations: { en: 'crates', es: 'crates', pt: 'crates', fr: 'crates', de: 'crates', it: 'crates', nl: 'kratten', zh: '板条箱', ja: 'クレート', ru: 'ящики' },
        },
        {
          id: 'delivery_logistic/stocker/materials/deliveries',
          localImage: 'delivery_logistic/stocker/materials/deliveries',
          translations: { en: 'deliveries', es: 'deliveries', pt: 'deliveries', fr: 'deliveries', de: 'deliveries', it: 'deliveries', nl: 'leveringen', zh: '交货', ja: '配送物', ru: 'доставки' },
        },
        {
          id: 'delivery_logistic/stocker/materials/freight',
          localImage: 'delivery_logistic/stocker/materials/freight',
          translations: { en: 'freight', es: 'freight', pt: 'freight', fr: 'freight', de: 'freight', it: 'freight', nl: 'vracht', zh: '货物', ja: '貨物', ru: 'груз' },
        },
        {
          id: 'delivery_logistic/stocker/materials/goods',
          localImage: 'delivery_logistic/stocker/materials/goods',
          translations: { en: 'goods', es: 'goods', pt: 'goods', fr: 'goods', de: 'goods', it: 'goods', nl: 'goederen', zh: '货物', ja: '商品', ru: 'товары' },
        },
        {
          id: 'delivery_logistic/stocker/materials/goods_set',
          localImage: 'delivery_logistic/stocker/materials/goods_set',
          translations: { en: 'goods set', es: 'goods set', pt: 'goods set', fr: 'goods set', de: 'goods set', it: 'goods set', nl: 'goederenset', zh: '货物套装', ja: '商品セット', ru: 'набор товаров' },
        },
        {
          id: 'delivery_logistic/stocker/materials/inventory',
          localImage: 'delivery_logistic/stocker/materials/inventory',
          translations: { en: 'inventory', es: 'inventory', pt: 'inventory', fr: 'inventory', de: 'inventory', it: 'inventory', nl: 'inventaris', zh: '库存', ja: '在庫', ru: 'инвентарь' },
        },
        {
          id: 'delivery_logistic/stocker/materials/items',
          localImage: 'delivery_logistic/stocker/materials/items',
          translations: { en: 'items', es: 'items', pt: 'items', fr: 'items', de: 'items', it: 'items', nl: 'artikelen', zh: '物品', ja: 'アイテム', ru: 'предметы' },
        },
        {
          id: 'delivery_logistic/stocker/materials/labels',
          localImage: 'delivery_logistic/stocker/materials/labels',
          translations: { en: 'labels', es: 'labels', pt: 'labels', fr: 'labels', de: 'labels', it: 'labels', nl: 'etiketten', zh: '标签', ja: 'ラベル', ru: 'этикетки' },
        },
        {
          id: 'delivery_logistic/stocker/materials/materials',
          localImage: 'delivery_logistic/stocker/materials/materials',
          translations: { en: 'materials', es: 'materials', pt: 'materials', fr: 'materials', de: 'materials', it: 'materials', nl: 'materialen', zh: '材料', ja: '材料', ru: 'материалы' },
        },
        {
          id: 'delivery_logistic/stocker/materials/merchandise',
          localImage: 'delivery_logistic/stocker/materials/merchandise',
          translations: { en: 'merchandise', es: 'merchandise', pt: 'merchandise', fr: 'merchandise', de: 'merchandise', it: 'merchandise', nl: 'koopwaar', zh: '商品', ja: '商品', ru: 'товар' },
        },
        {
          id: 'delivery_logistic/stocker/materials/packaged_goods',
          localImage: 'delivery_logistic/stocker/materials/packaged_goods',
          translations: { en: 'packaged goods', es: 'packaged goods', pt: 'packaged goods', fr: 'packaged goods', de: 'packaged goods', it: 'packaged goods', nl: 'verpakte goederen', zh: '包装货物', ja: '梱包商品', ru: 'упакованные товары' },
        },
        {
          id: 'delivery_logistic/stocker/materials/packaging',
          localImage: 'delivery_logistic/stocker/materials/packaging',
          translations: { en: 'packaging', es: 'embalaje', pt: 'embalagem', fr: 'emballage', de: 'Verpackung', it: 'imballaggio', nl: 'verpakking', zh: '包装', ja: '梱包', ru: 'упаковка' },
        },
        {
          id: 'delivery_logistic/stocker/materials/packs',
          localImage: 'delivery_logistic/stocker/materials/packs',
          translations: { en: 'packs', es: 'packs', pt: 'packs', fr: 'packs', de: 'packs', it: 'packs', nl: 'pakken', zh: '包', ja: 'パック', ru: 'пакеты' },
        },
        {
          id: 'delivery_logistic/stocker/materials/pallets',
          localImage: 'delivery_logistic/stocker/materials/pallets',
          translations: { en: 'pallets', es: 'pallets', pt: 'pallets', fr: 'pallets', de: 'pallets', it: 'pallets', nl: 'pallets', zh: '托盘', ja: 'パレット', ru: 'паллеты' },
        },
        {
          id: 'delivery_logistic/stocker/materials/plastic',
          localImage: 'delivery_logistic/stocker/materials/plastic',
          translations: { en: 'plastic', es: 'plastic', pt: 'plastic', fr: 'plastic', de: 'plastic', it: 'plastic', nl: 'plastic', zh: '塑料', ja: 'プラスチック', ru: 'пластик' },
        },
        {
          id: 'delivery_logistic/stocker/materials/products',
          localImage: 'delivery_logistic/stocker/materials/products',
          translations: { en: 'products', es: 'products', pt: 'products', fr: 'products', de: 'products', it: 'products', nl: 'producten', zh: '产品', ja: '製品', ru: 'продукты' },
        },
        {
          id: 'delivery_logistic/stocker/materials/shipments',
          localImage: 'delivery_logistic/stocker/materials/shipments',
          translations: { en: 'shipments', es: 'shipments', pt: 'shipments', fr: 'shipments', de: 'shipments', it: 'shipments', nl: 'zendingen', zh: '货运', ja: '出荷物', ru: 'грузы' },
        },
        {
          id: 'delivery_logistic/stocker/materials/stock',
          localImage: 'delivery_logistic/stocker/materials/stock',
          translations: { en: 'stock', es: 'stock', pt: 'stock', fr: 'stock', de: 'stock', it: 'stock', nl: 'voorraad', zh: '库存', ja: '在庫', ru: 'запас' },
        },
        {
          id: 'delivery_logistic/stocker/materials/stock_items',
          localImage: 'delivery_logistic/stocker/materials/stock_items',
          translations: { en: 'stock items', es: 'stock items', pt: 'stock items', fr: 'stock items', de: 'stock items', it: 'stock items', nl: 'voorraadartikelen', zh: '库存商品', ja: '在庫アイテム', ru: 'складские единицы' },
        },
        {
          id: 'delivery_logistic/stocker/materials/storage_items',
          localImage: 'delivery_logistic/stocker/materials/storage_items',
          translations: { en: 'storage items', es: 'storage items', pt: 'storage items', fr: 'storage items', de: 'storage items', it: 'storage items', nl: 'opslagartikelen', zh: '储存物品', ja: '収納アイテム', ru: 'предметы хранения' },
        },
        {
          id: 'delivery_logistic/stocker/materials/supplies',
          localImage: 'delivery_logistic/stocker/materials/supplies',
          translations: { en: 'supplies', es: 'supplies', pt: 'supplies', fr: 'supplies', de: 'supplies', it: 'supplies', nl: 'benodigdheden', zh: '耗材', ja: '用品', ru: 'расходные материалы' },
        },
        {
          id: 'delivery_logistic/stocker/materials/supply_items',
          localImage: 'delivery_logistic/stocker/materials/supply_items',
          translations: { en: 'supply items', es: 'supply items', pt: 'supply items', fr: 'supply items', de: 'supply items', it: 'supply items', nl: 'voorraaditems', zh: '供应物品', ja: 'サプライアイテム', ru: 'предметы снабжения' },
        },
        {
          id: 'delivery_logistic/stocker/materials/tape',
          localImage: 'delivery_logistic/stocker/materials/tape',
          translations: { en: 'tape', es: 'cinta', pt: 'fita', fr: 'ruban', de: 'Klebeband', it: 'nastro', nl: 'tape', zh: '胶带', ja: 'テープ', ru: 'лента' },
        },
        {
          id: 'delivery_logistic/stocker/materials/units',
          localImage: 'delivery_logistic/stocker/materials/units',
          translations: { en: 'units', es: 'units', pt: 'units', fr: 'units', de: 'units', it: 'units', nl: 'eenheden', zh: '单元', ja: 'ユニット', ru: 'единицы' },
        },
        {
          id: 'delivery_logistic/stocker/materials/wrap',
          localImage: 'delivery_logistic/stocker/materials/wrap',
          translations: { en: 'wrap', es: 'wrap', pt: 'wrap', fr: 'wrap', de: 'wrap', it: 'wrap', nl: 'folie', zh: '包装', ja: 'ラップ', ru: 'обертка' },
        }
        ],
      }
      ],
    },
    {
      id: 'warehouse_worker',
      name: { en: 'Warehouse Worker', es: 'Almacenero', pt: 'Operador de Armazém', fr: 'Magasinier', de: 'Lagerarbeiter', it: 'Magazziniere', nl: 'Magazijnmedewerker', zh: '仓库工人', ja: '倉庫作業員', ru: 'Работник склада' },
      icon: '🏭',
      roles: [
      {
        id: 'tools',
        name: { en: 'Tools', es: 'Herramientas', pt: 'Ferramentas', fr: 'Outils', de: 'Werkzeuge', it: 'Attrezzi', nl: 'Gereedschap', zh: '工具', ja: '道具', ru: 'Инструменты' },
        icon: '🔧',
        items: [
        {
          id: 'delivery_logistic/warehouse_worker/tools/bin',
          localImage: 'delivery_logistic/warehouse_worker/tools/bin',
          translations: { en: 'bin', es: 'cubo de basura', pt: 'lixeira', fr: 'poubelle', de: 'Mülleimer', it: 'bidone', nl: 'prullenbak', zh: '垃圾桶', ja: 'ビン', ru: 'мусорное ведро' },
        },
        {
          id: 'delivery_logistic/warehouse_worker/tools/carrier',
          localImage: 'delivery_logistic/warehouse_worker/tools/carrier',
          translations: { en: 'carrier', es: 'carrier', pt: 'carrier', fr: 'carrier', de: 'carrier', it: 'carrier', nl: 'drager', zh: '载体', ja: 'キャリア', ru: 'носитель' },
        },
        {
          id: 'delivery_logistic/warehouse_worker/tools/cart',
          localImage: 'delivery_logistic/warehouse_worker/tools/cart',
          translations: { en: 'cart', es: 'carrito', pt: 'carrinho', fr: 'chariot', de: 'Wagen', it: 'carrello', nl: 'kar', zh: '推车', ja: 'カート', ru: 'тележка' },
        },
        {
          id: 'delivery_logistic/warehouse_worker/tools/conveyor',
          localImage: 'delivery_logistic/warehouse_worker/tools/conveyor',
          translations: { en: 'conveyor', es: 'conveyor', pt: 'conveyor', fr: 'conveyor', de: 'conveyor', it: 'conveyor', nl: 'transportband', zh: '传送带', ja: 'コンベア', ru: 'конвейер' },
        },
        {
          id: 'delivery_logistic/warehouse_worker/tools/cutter',
          localImage: 'delivery_logistic/warehouse_worker/tools/cutter',
          translations: { en: 'cutter', es: 'cortador', pt: 'cortador', fr: 'cutter', de: 'Cutter', it: 'taglierino', nl: 'snijder', zh: '切割机', ja: 'カッター', ru: 'резак' },
        },
        {
          id: 'delivery_logistic/warehouse_worker/tools/forklift',
          localImage: 'delivery_logistic/warehouse_worker/tools/forklift',
          translations: { en: 'forklift', es: 'forklift', pt: 'forklift', fr: 'forklift', de: 'forklift', it: 'forklift', nl: 'vorkheftruck', zh: '叉车', ja: 'フォークリフト', ru: 'вилочный погрузчик' },
        },
        {
          id: 'delivery_logistic/warehouse_worker/tools/gun',
          localImage: 'delivery_logistic/warehouse_worker/tools/gun',
          translations: { en: 'spray gun', es: 'pistola de spray', pt: 'pistola de spray', fr: 'pistolet', de: 'Sprühpistole', it: 'pistola spray', nl: 'verfpistool', zh: '喷枪', ja: 'スプレーガン', ru: 'краскопульт' },
        },
        {
          id: 'delivery_logistic/warehouse_worker/tools/handler',
          localImage: 'delivery_logistic/warehouse_worker/tools/handler',
          translations: { en: 'handler', es: 'handler', pt: 'handler', fr: 'handler', de: 'handler', it: 'handler', nl: 'behandelaar', zh: '处理器', ja: 'ハンドラー', ru: 'манипулятор' },
        },
        {
          id: 'delivery_logistic/warehouse_worker/tools/labeler',
          localImage: 'delivery_logistic/warehouse_worker/tools/labeler',
          translations: { en: 'labeler', es: 'labeler', pt: 'labeler', fr: 'labeler', de: 'labeler', it: 'labeler', nl: 'labelaar', zh: '贴标机', ja: 'ラベラー', ru: 'этикетировочная машина' },
        },
        {
          id: 'delivery_logistic/warehouse_worker/tools/lift',
          localImage: 'delivery_logistic/warehouse_worker/tools/lift',
          translations: { en: 'lift', es: 'lift', pt: 'lift', fr: 'lift', de: 'lift', it: 'lift', nl: 'lift', zh: '升降机', ja: 'リフト', ru: 'подъемник' },
        },
        {
          id: 'delivery_logistic/warehouse_worker/tools/loader',
          localImage: 'delivery_logistic/warehouse_worker/tools/loader',
          translations: { en: 'loader', es: 'loader', pt: 'loader', fr: 'loader', de: 'loader', it: 'loader', nl: 'lader', zh: '装载机', ja: 'ローダー', ru: 'погрузчик' },
        },
        {
          id: 'delivery_logistic/warehouse_worker/tools/pallet_jack',
          localImage: 'delivery_logistic/warehouse_worker/tools/pallet_jack',
          translations: { en: 'pallet jack', es: 'pallet jack', pt: 'pallet jack', fr: 'pallet jack', de: 'pallet jack', it: 'pallet jack', nl: 'pallettruck', zh: '托盘搬运车', ja: 'パレットジャック', ru: 'гидравлическая тележка' },
        },
        {
          id: 'delivery_logistic/warehouse_worker/tools/printer',
          localImage: 'delivery_logistic/warehouse_worker/tools/printer',
          translations: { en: 'printer', es: 'impresora', pt: 'impressora', fr: 'imprimante', de: 'Drucker', it: 'stampante', nl: 'printer', zh: '打印机', ja: 'プリンター', ru: 'принтер' },
        },
        {
          id: 'delivery_logistic/warehouse_worker/tools/rack',
          localImage: 'delivery_logistic/warehouse_worker/tools/rack',
          translations: { en: 'rack', es: 'estante', pt: 'prateleira', fr: 'étagère', de: 'Regal', it: 'scaffale', nl: 'rek', zh: '货架', ja: 'ラック', ru: 'стеллаж' },
        },
        {
          id: 'delivery_logistic/warehouse_worker/tools/scale',
          localImage: 'delivery_logistic/warehouse_worker/tools/scale',
          translations: { en: 'scale', es: 'báscula', pt: 'balança', fr: 'balance', de: 'Waage', it: 'bilancia', nl: 'weegschaal', zh: '秤', ja: 'スケール', ru: 'весы' },
        },
        {
          id: 'delivery_logistic/warehouse_worker/tools/scanner',
          localImage: 'delivery_logistic/warehouse_worker/tools/scanner',
          translations: { en: 'scanner', es: 'escáner', pt: 'scanner', fr: 'scanner', de: 'Scanner', it: 'scanner', nl: 'scanner', zh: '扫描仪', ja: 'スキャナー', ru: 'сканер' },
        },
        {
          id: 'delivery_logistic/warehouse_worker/tools/sorter',
          localImage: 'delivery_logistic/warehouse_worker/tools/sorter',
          translations: { en: 'sorter', es: 'sorter', pt: 'sorter', fr: 'sorter', de: 'sorter', it: 'sorter', nl: 'sorteerder', zh: '分类机', ja: 'ソーター', ru: 'сортировщик' },
        },
        {
          id: 'delivery_logistic/warehouse_worker/tools/tape',
          localImage: 'delivery_logistic/warehouse_worker/tools/tape',
          translations: { en: 'tape', es: 'cinta', pt: 'fita', fr: 'ruban', de: 'Klebeband', it: 'nastro', nl: 'tape', zh: '胶带', ja: 'テープ', ru: 'лента' },
        },
        {
          id: 'delivery_logistic/warehouse_worker/tools/trolley',
          localImage: 'delivery_logistic/warehouse_worker/tools/trolley',
          translations: { en: 'trolley', es: 'carrito', pt: 'carrinho', fr: 'chariot', de: 'Trolley', it: 'carrello', nl: 'trolley', zh: '手推车', ja: 'トロリー', ru: 'тележка' },
        },
        {
          id: 'delivery_logistic/warehouse_worker/tools/wrapper',
          localImage: 'delivery_logistic/warehouse_worker/tools/wrapper',
          translations: { en: 'wrapper', es: 'wrapper', pt: 'wrapper', fr: 'wrapper', de: 'wrapper', it: 'wrapper', nl: 'wikkel', zh: '包装纸', ja: 'ラッパー', ru: 'обертка' },
        }
        ],
      },
      {
        id: 'materials',
        name: { en: 'Materials', es: 'Materiales', pt: 'Materiais', fr: 'Matériaux', de: 'Materialien', it: 'Materiali', nl: 'Materialen', zh: '材料', ja: '材料', ru: 'Материалы' },
        icon: '📦',
        items: [
        {
          id: 'delivery_logistic/warehouse_worker/materials/boxed_goods',
          localImage: 'delivery_logistic/warehouse_worker/materials/boxed_goods',
          translations: { en: 'boxed goods', es: 'boxed goods', pt: 'boxed goods', fr: 'boxed goods', de: 'boxed goods', it: 'boxed goods', nl: 'verpakte goederen', zh: '盒装货物', ja: '箱入り商品', ru: 'товары в коробках' },
        },
        {
          id: 'delivery_logistic/warehouse_worker/materials/boxes',
          localImage: 'delivery_logistic/warehouse_worker/materials/boxes',
          translations: { en: 'boxes', es: 'boxes', pt: 'boxes', fr: 'boxes', de: 'boxes', it: 'boxes', nl: 'dozen', zh: '箱子', ja: 'ボックス', ru: 'коробки' },
        },
        {
          id: 'delivery_logistic/warehouse_worker/materials/bubble_wrap',
          localImage: 'delivery_logistic/warehouse_worker/materials/bubble_wrap',
          translations: { en: 'bubble wrap', es: 'bubble wrap', pt: 'bubble wrap', fr: 'bubble wrap', de: 'bubble wrap', it: 'bubble wrap', nl: 'noppenfolie', zh: '气泡膜', ja: 'プチプチ', ru: 'пузырчатая пленка' },
        },
        {
          id: 'delivery_logistic/warehouse_worker/materials/bundles',
          localImage: 'delivery_logistic/warehouse_worker/materials/bundles',
          translations: { en: 'bundles', es: 'bundles', pt: 'bundles', fr: 'bundles', de: 'bundles', it: 'bundles', nl: 'bundels', zh: '捆', ja: 'バンドル', ru: 'связки' },
        },
        {
          id: 'delivery_logistic/warehouse_worker/materials/cargo',
          localImage: 'delivery_logistic/warehouse_worker/materials/cargo',
          translations: { en: 'cargo', es: 'cargo', pt: 'cargo', fr: 'cargo', de: 'cargo', it: 'cargo', nl: 'vracht', zh: '货物', ja: '貨物', ru: 'груз' },
        },
        {
          id: 'delivery_logistic/warehouse_worker/materials/cartons',
          localImage: 'delivery_logistic/warehouse_worker/materials/cartons',
          translations: { en: 'cartons', es: 'cartons', pt: 'cartons', fr: 'cartons', de: 'cartons', it: 'cartons', nl: 'kartons', zh: '纸板箱', ja: 'カートン', ru: 'картонные коробки' },
        },
        {
          id: 'delivery_logistic/warehouse_worker/materials/containers',
          localImage: 'delivery_logistic/warehouse_worker/materials/containers',
          translations: { en: 'containers', es: 'containers', pt: 'containers', fr: 'containers', de: 'containers', it: 'containers', nl: 'containers', zh: '容器', ja: 'コンテナ', ru: 'контейнеры' },
        },
        {
          id: 'delivery_logistic/warehouse_worker/materials/crates',
          localImage: 'delivery_logistic/warehouse_worker/materials/crates',
          translations: { en: 'crates', es: 'crates', pt: 'crates', fr: 'crates', de: 'crates', it: 'crates', nl: 'kratten', zh: '板条箱', ja: 'クレート', ru: 'ящики' },
        },
        {
          id: 'delivery_logistic/warehouse_worker/materials/deliveries',
          localImage: 'delivery_logistic/warehouse_worker/materials/deliveries',
          translations: { en: 'deliveries', es: 'deliveries', pt: 'deliveries', fr: 'deliveries', de: 'deliveries', it: 'deliveries', nl: 'leveringen', zh: '交货', ja: '配送物', ru: 'доставки' },
        },
        {
          id: 'delivery_logistic/warehouse_worker/materials/freight',
          localImage: 'delivery_logistic/warehouse_worker/materials/freight',
          translations: { en: 'freight', es: 'freight', pt: 'freight', fr: 'freight', de: 'freight', it: 'freight', nl: 'vracht', zh: '货物', ja: '貨物', ru: 'груз' },
        },
        {
          id: 'delivery_logistic/warehouse_worker/materials/goods',
          localImage: 'delivery_logistic/warehouse_worker/materials/goods',
          translations: { en: 'goods', es: 'goods', pt: 'goods', fr: 'goods', de: 'goods', it: 'goods', nl: 'goederen', zh: '货物', ja: '商品', ru: 'товары' },
        },
        {
          id: 'delivery_logistic/warehouse_worker/materials/inventory',
          localImage: 'delivery_logistic/warehouse_worker/materials/inventory',
          translations: { en: 'inventory', es: 'inventory', pt: 'inventory', fr: 'inventory', de: 'inventory', it: 'inventory', nl: 'inventaris', zh: '库存', ja: '在庫', ru: 'инвентарь' },
        },
        {
          id: 'delivery_logistic/warehouse_worker/materials/items',
          localImage: 'delivery_logistic/warehouse_worker/materials/items',
          translations: { en: 'items', es: 'items', pt: 'items', fr: 'items', de: 'items', it: 'items', nl: 'artikelen', zh: '物品', ja: 'アイテム', ru: 'предметы' },
        },
        {
          id: 'delivery_logistic/warehouse_worker/materials/labels',
          localImage: 'delivery_logistic/warehouse_worker/materials/labels',
          translations: { en: 'labels', es: 'labels', pt: 'labels', fr: 'labels', de: 'labels', it: 'labels', nl: 'etiketten', zh: '标签', ja: 'ラベル', ru: 'этикетки' },
        },
        {
          id: 'delivery_logistic/warehouse_worker/materials/merchandise',
          localImage: 'delivery_logistic/warehouse_worker/materials/merchandise',
          translations: { en: 'merchandise', es: 'merchandise', pt: 'merchandise', fr: 'merchandise', de: 'merchandise', it: 'merchandise', nl: 'koopwaar', zh: '商品', ja: '商品', ru: 'товар' },
        },
        {
          id: 'delivery_logistic/warehouse_worker/materials/packages',
          localImage: 'delivery_logistic/warehouse_worker/materials/packages',
          translations: { en: 'packages', es: 'packages', pt: 'packages', fr: 'packages', de: 'packages', it: 'packages', nl: 'pakketten', zh: '包裹', ja: 'パッケージ', ru: 'посылки' },
        },
        {
          id: 'delivery_logistic/warehouse_worker/materials/packaging',
          localImage: 'delivery_logistic/warehouse_worker/materials/packaging',
          translations: { en: 'packaging', es: 'embalaje', pt: 'embalagem', fr: 'emballage', de: 'Verpackung', it: 'imballaggio', nl: 'verpakking', zh: '包装', ja: '梱包', ru: 'упаковка' },
        },
        {
          id: 'delivery_logistic/warehouse_worker/materials/packing_items',
          localImage: 'delivery_logistic/warehouse_worker/materials/packing_items',
          translations: { en: 'packing items', es: 'packing items', pt: 'packing items', fr: 'packing items', de: 'packing items', it: 'packing items', nl: 'verpakkingsartikelen', zh: '打包物品', ja: '梱包アイテム', ru: 'упаковочные материалы' },
        },
        {
          id: 'delivery_logistic/warehouse_worker/materials/packs',
          localImage: 'delivery_logistic/warehouse_worker/materials/packs',
          translations: { en: 'packs', es: 'packs', pt: 'packs', fr: 'packs', de: 'packs', it: 'packs', nl: 'pakken', zh: '包', ja: 'パック', ru: 'пакеты' },
        },
        {
          id: 'delivery_logistic/warehouse_worker/materials/pallet',
          localImage: 'delivery_logistic/warehouse_worker/materials/pallet',
          translations: { en: 'pallet', es: 'palé', pt: 'palete', fr: 'palette', de: 'Palette', it: 'pallet', nl: 'pallet', zh: '托盘', ja: 'パレット', ru: 'паллет' },
        },
        {
          id: 'delivery_logistic/warehouse_worker/materials/parcels',
          localImage: 'delivery_logistic/warehouse_worker/materials/parcels',
          translations: { en: 'parcels', es: 'parcels', pt: 'parcels', fr: 'parcels', de: 'parcels', it: 'parcels', nl: 'pakketten', zh: '包裹', ja: '小包', ru: 'посылки' },
        },
        {
          id: 'delivery_logistic/warehouse_worker/materials/plastic_wrap',
          localImage: 'delivery_logistic/warehouse_worker/materials/plastic_wrap',
          translations: { en: 'plastic wrap', es: 'plastic wrap', pt: 'plastic wrap', fr: 'plastic wrap', de: 'plastic wrap', it: 'plastic wrap', nl: 'plasticfolie', zh: '保鲜膜', ja: 'ラップ', ru: 'пищевая пленка' },
        },
        {
          id: 'delivery_logistic/warehouse_worker/materials/shipments',
          localImage: 'delivery_logistic/warehouse_worker/materials/shipments',
          translations: { en: 'shipments', es: 'shipments', pt: 'shipments', fr: 'shipments', de: 'shipments', it: 'shipments', nl: 'zendingen', zh: '货运', ja: '出荷物', ru: 'грузы' },
        },
        {
          id: 'delivery_logistic/warehouse_worker/materials/shipping_items',
          localImage: 'delivery_logistic/warehouse_worker/materials/shipping_items',
          translations: { en: 'shipping items', es: 'shipping items', pt: 'shipping items', fr: 'shipping items', de: 'shipping items', it: 'shipping items', nl: 'verzendartikelen', zh: '运输物品', ja: '配送アイテム', ru: 'товары для отправки' },
        },
        {
          id: 'delivery_logistic/warehouse_worker/materials/stock',
          localImage: 'delivery_logistic/warehouse_worker/materials/stock',
          translations: { en: 'stock', es: 'stock', pt: 'stock', fr: 'stock', de: 'stock', it: 'stock', nl: 'voorraad', zh: '库存', ja: '在庫', ru: 'запас' },
        },
        {
          id: 'delivery_logistic/warehouse_worker/materials/storage_items',
          localImage: 'delivery_logistic/warehouse_worker/materials/storage_items',
          translations: { en: 'storage items', es: 'storage items', pt: 'storage items', fr: 'storage items', de: 'storage items', it: 'storage items', nl: 'opslagartikelen', zh: '储存物品', ja: '収納アイテム', ru: 'предметы хранения' },
        },
        {
          id: 'delivery_logistic/warehouse_worker/materials/supplies',
          localImage: 'delivery_logistic/warehouse_worker/materials/supplies',
          translations: { en: 'supplies', es: 'supplies', pt: 'supplies', fr: 'supplies', de: 'supplies', it: 'supplies', nl: 'benodigdheden', zh: '耗材', ja: '用品', ru: 'расходные материалы' },
        },
        {
          id: 'delivery_logistic/warehouse_worker/materials/tape',
          localImage: 'delivery_logistic/warehouse_worker/materials/tape',
          translations: { en: 'tape', es: 'cinta', pt: 'fita', fr: 'ruban', de: 'Klebeband', it: 'nastro', nl: 'tape', zh: '胶带', ja: 'テープ', ru: 'лента' },
        },
        {
          id: 'delivery_logistic/warehouse_worker/materials/units',
          localImage: 'delivery_logistic/warehouse_worker/materials/units',
          translations: { en: 'units', es: 'units', pt: 'units', fr: 'units', de: 'units', it: 'units', nl: 'eenheden', zh: '单元', ja: 'ユニット', ru: 'единицы' },
        },
        {
          id: 'delivery_logistic/warehouse_worker/materials/wrapped_goods',
          localImage: 'delivery_logistic/warehouse_worker/materials/wrapped_goods',
          translations: { en: 'wrapped goods', es: 'wrapped goods', pt: 'wrapped goods', fr: 'wrapped goods', de: 'wrapped goods', it: 'wrapped goods', nl: 'verpakte goederen', zh: '包裹货物', ja: '包装商品', ru: 'завернутые товары' },
        }
        ],
      }
      ],
    }
    ],
  },
  {
    id: 'hospitality_restaurant',
    name: { en: 'Hospitality & Restaurant', es: 'Hostelería', pt: 'Hospitalidade', fr: 'Restauration', de: 'Gastronomie', it: 'Ristorazione', nl: 'Horeca', zh: '餐饮服务', ja: 'ホスピタリティ・レストラン', ru: 'Гостиничное дело и рестораны' },
    icon: '🍽️',
    imageUrl: 'https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&w=800',
    sectors: [
    {
      id: 'bartender',
      name: { en: 'Bartender', es: 'Bartender', pt: 'Barman', fr: 'Barman', de: 'Barkeeper', it: 'Barista', nl: 'Barman', zh: '调酒师', ja: 'バーテンダー', ru: 'Бармен' },
      icon: '🍸',
      roles: [
      {
        id: 'tools',
        name: { en: 'Tools', es: 'Herramientas', pt: 'Ferramentas', fr: 'Outils', de: 'Werkzeuge', it: 'Attrezzi', nl: 'Gereedschap', zh: '工具', ja: '道具', ru: 'Инструменты' },
        icon: '🔧',
        items: [
        {
          id: 'hospitality_restaurant/bartender/tools/bar_mat',
          localImage: 'hospitality_restaurant/bartender/tools/bar_mat',
          translations: { en: 'bar mat', es: 'bar mat', pt: 'bar mat', fr: 'bar mat', de: 'bar mat', it: 'bar mat', nl: 'barmat', zh: '酒吧垫', ja: 'バーマット', ru: 'барный коврик' },
        },
        {
          id: 'hospitality_restaurant/bartender/tools/bar_spoon',
          localImage: 'hospitality_restaurant/bartender/tools/bar_spoon',
          translations: { en: 'bar spoon', es: 'bar spoon', pt: 'bar spoon', fr: 'bar spoon', de: 'bar spoon', it: 'bar spoon', nl: 'barlepel', zh: '调酒勺', ja: 'バースプーン', ru: 'барная ложка' },
        },
        {
          id: 'hospitality_restaurant/bartender/tools/blender',
          localImage: 'hospitality_restaurant/bartender/tools/blender',
          translations: { en: 'blender', es: 'blender', pt: 'blender', fr: 'blender', de: 'blender', it: 'blender', nl: 'blender', zh: '搅拌机', ja: 'ブレンダー', ru: 'блендер' },
        },
        {
          id: 'hospitality_restaurant/bartender/tools/corkscrew',
          localImage: 'hospitality_restaurant/bartender/tools/corkscrew',
          translations: { en: 'corkscrew', es: 'corkscrew', pt: 'corkscrew', fr: 'corkscrew', de: 'corkscrew', it: 'corkscrew', nl: 'kurketrekker', zh: '开瓶器', ja: 'コルクスクリュー', ru: 'штопор' },
        },
        {
          id: 'hospitality_restaurant/bartender/tools/crusher',
          localImage: 'hospitality_restaurant/bartender/tools/crusher',
          translations: { en: 'crusher', es: 'crusher', pt: 'crusher', fr: 'crusher', de: 'crusher', it: 'crusher', nl: 'crusher', zh: '粉碎机', ja: 'クラッシャー', ru: 'дробилка' },
        },
        {
          id: 'hospitality_restaurant/bartender/tools/glass',
          localImage: 'hospitality_restaurant/bartender/tools/glass',
          translations: { en: 'glass', es: 'vaso', pt: 'copo', fr: 'verre', de: 'Glas', it: 'bicchiere', nl: 'glas', zh: '玻璃杯', ja: 'グラス', ru: 'стакан' },
        },
        {
          id: 'hospitality_restaurant/bartender/tools/ice_scoop',
          localImage: 'hospitality_restaurant/bartender/tools/ice_scoop',
          translations: { en: 'ice scoop', es: 'ice scoop', pt: 'ice scoop', fr: 'ice scoop', de: 'ice scoop', it: 'ice scoop', nl: 'ijsschep', zh: '冰勺', ja: 'アイススコップ', ru: 'ложка для льда' },
        },
        {
          id: 'hospitality_restaurant/bartender/tools/jigger',
          localImage: 'hospitality_restaurant/bartender/tools/jigger',
          translations: { en: 'jigger', es: 'jigger', pt: 'jigger', fr: 'jigger', de: 'jigger', it: 'jigger', nl: 'jigger', zh: '量酒器', ja: 'ジガー', ru: 'джиггер' },
        },
        {
          id: 'hospitality_restaurant/bartender/tools/knife',
          localImage: 'hospitality_restaurant/bartender/tools/knife',
          translations: { en: 'knife', es: 'cuchillo', pt: 'faca', fr: 'couteau', de: 'Messer', it: 'coltello', nl: 'mes', zh: '刀', ja: 'ナイフ', ru: 'нож' },
        },
        {
          id: 'hospitality_restaurant/bartender/tools/measure_cup',
          localImage: 'hospitality_restaurant/bartender/tools/measure_cup',
          translations: { en: 'measure cup', es: 'measure cup', pt: 'measure cup', fr: 'measure cup', de: 'measure cup', it: 'measure cup', nl: 'maatbeker', zh: '量杯', ja: '計量カップ', ru: 'мерный стакан' },
        },
        {
          id: 'hospitality_restaurant/bartender/tools/mixer',
          localImage: 'hospitality_restaurant/bartender/tools/mixer',
          translations: { en: 'mixer', es: 'mezclador', pt: 'betoneira', fr: 'mélangeur', de: 'Mischer', it: 'miscelatore', nl: 'mixer', zh: '搅拌机', ja: 'ミキサー', ru: 'миксер' },
        },
        {
          id: 'hospitality_restaurant/bartender/tools/muddler',
          localImage: 'hospitality_restaurant/bartender/tools/muddler',
          translations: { en: 'muddler', es: 'muddler', pt: 'muddler', fr: 'muddler', de: 'muddler', it: 'muddler', nl: 'stamper', zh: '搅棒', ja: 'マドラー', ru: 'мадлер' },
        },
        {
          id: 'hospitality_restaurant/bartender/tools/opener',
          localImage: 'hospitality_restaurant/bartender/tools/opener',
          translations: { en: 'opener', es: 'opener', pt: 'opener', fr: 'opener', de: 'opener', it: 'opener', nl: 'opener', zh: '开瓶器', ja: 'オープナー', ru: 'открывалка' },
        },
        {
          id: 'hospitality_restaurant/bartender/tools/pourer',
          localImage: 'hospitality_restaurant/bartender/tools/pourer',
          translations: { en: 'pourer', es: 'pourer', pt: 'pourer', fr: 'pourer', de: 'pourer', it: 'pourer', nl: 'schenker', zh: '倒酒器', ja: 'ポーラー', ru: 'дозатор' },
        },
        {
          id: 'hospitality_restaurant/bartender/tools/scoop',
          localImage: 'hospitality_restaurant/bartender/tools/scoop',
          translations: { en: 'scoop', es: 'cuchara de helado', pt: 'concha', fr: 'cuillère à glace', de: 'Eiskugel', it: 'paletta gelato', nl: 'schep', zh: '勺子', ja: 'スコップ', ru: 'совок' },
        },
        {
          id: 'hospitality_restaurant/bartender/tools/shaker',
          localImage: 'hospitality_restaurant/bartender/tools/shaker',
          translations: { en: 'shaker', es: 'shaker', pt: 'shaker', fr: 'shaker', de: 'shaker', it: 'shaker', nl: 'shaker', zh: '摇壶', ja: 'シェーカー', ru: 'шейкер' },
        },
        {
          id: 'hospitality_restaurant/bartender/tools/strainer',
          localImage: 'hospitality_restaurant/bartender/tools/strainer',
          translations: { en: 'strainer', es: 'strainer', pt: 'strainer', fr: 'strainer', de: 'strainer', it: 'strainer', nl: 'zeef', zh: '过滤器', ja: 'ストレーナー', ru: 'цедилка' },
        },
        {
          id: 'hospitality_restaurant/bartender/tools/strainer_tool',
          localImage: 'hospitality_restaurant/bartender/tools/strainer_tool',
          translations: { en: 'strainer tool', es: 'strainer tool', pt: 'strainer tool', fr: 'strainer tool', de: 'strainer tool', it: 'strainer tool', nl: 'zeefgereedschap', zh: '过滤工具', ja: 'ストレーナーツール', ru: 'инструмент для процеживания' },
        },
        {
          id: 'hospitality_restaurant/bartender/tools/tongs',
          localImage: 'hospitality_restaurant/bartender/tools/tongs',
          translations: { en: 'tongs', es: 'tongs', pt: 'tongs', fr: 'tongs', de: 'tongs', it: 'tongs', nl: 'tang', zh: '夹子', ja: 'トング', ru: 'щипцы' },
        },
        {
          id: 'hospitality_restaurant/bartender/tools/tray',
          localImage: 'hospitality_restaurant/bartender/tools/tray',
          translations: { en: 'tray', es: 'bandeja', pt: 'bandeja', fr: 'plateau', de: 'Tablett', it: 'vassoio', nl: 'dienblad', zh: '托盘', ja: 'トレイ', ru: 'поднос' },
        }
        ],
      },
      {
        id: 'materials',
        name: { en: 'Materials', es: 'Materiales', pt: 'Materiais', fr: 'Matériaux', de: 'Materialien', it: 'Materiali', nl: 'Materialen', zh: '材料', ja: '材料', ru: 'Материалы' },
        icon: '📦',
        items: [
        {
          id: 'hospitality_restaurant/bartender/materials/alcohol',
          localImage: 'hospitality_restaurant/bartender/materials/alcohol',
          translations: { en: 'alcohol', es: 'alcohol', pt: 'alcohol', fr: 'alcohol', de: 'alcohol', it: 'alcohol', nl: 'alcohol', zh: '酒精', ja: 'アルコール', ru: 'спирт' },
        },
        {
          id: 'hospitality_restaurant/bartender/materials/berries',
          localImage: 'hospitality_restaurant/bartender/materials/berries',
          translations: { en: 'berries', es: 'berries', pt: 'berries', fr: 'berries', de: 'berries', it: 'berries', nl: 'bessen', zh: '浆果', ja: 'ベリー', ru: 'ягоды' },
        },
        {
          id: 'hospitality_restaurant/bartender/materials/bitters',
          localImage: 'hospitality_restaurant/bartender/materials/bitters',
          translations: { en: 'bitters', es: 'bitters', pt: 'bitters', fr: 'bitters', de: 'bitters', it: 'bitters', nl: 'bitters', zh: '苦精', ja: 'ビターズ', ru: 'биттер' },
        },
        {
          id: 'hospitality_restaurant/bartender/materials/cocktail_mix',
          localImage: 'hospitality_restaurant/bartender/materials/cocktail_mix',
          translations: { en: 'cocktail mix', es: 'cocktail mix', pt: 'cocktail mix', fr: 'cocktail mix', de: 'cocktail mix', it: 'cocktail mix', nl: 'cocktailmix', zh: '鸡尾酒混合物', ja: 'カクテルミックス', ru: 'коктейльная смесь' },
        },
        {
          id: 'hospitality_restaurant/bartender/materials/cola',
          localImage: 'hospitality_restaurant/bartender/materials/cola',
          translations: { en: 'cola', es: 'cola', pt: 'cola', fr: 'cola', de: 'cola', it: 'cola', nl: 'cola', zh: '可乐', ja: 'コーラ', ru: 'кола' },
        },
        {
          id: 'hospitality_restaurant/bartender/materials/concentrate',
          localImage: 'hospitality_restaurant/bartender/materials/concentrate',
          translations: { en: 'concentrate', es: 'concentrate', pt: 'concentrate', fr: 'concentrate', de: 'concentrate', it: 'concentrate', nl: 'concentraat', zh: '浓缩液', ja: '濃縮液', ru: 'концентрат' },
        },
        {
          id: 'hospitality_restaurant/bartender/materials/cream',
          localImage: 'hospitality_restaurant/bartender/materials/cream',
          translations: { en: 'cream', es: 'cream', pt: 'cream', fr: 'cream', de: 'cream', it: 'cream', nl: 'room', zh: '奶油', ja: 'クリーム', ru: 'крем' },
        },
        {
          id: 'hospitality_restaurant/bartender/materials/crushed_ice',
          localImage: 'hospitality_restaurant/bartender/materials/crushed_ice',
          translations: { en: 'crushed ice', es: 'crushed ice', pt: 'crushed ice', fr: 'crushed ice', de: 'crushed ice', it: 'crushed ice', nl: 'crushed ice', zh: '碎冰', ja: 'クラッシュアイス', ru: 'колотый лед' },
        },
        {
          id: 'hospitality_restaurant/bartender/materials/energy_drink',
          localImage: 'hospitality_restaurant/bartender/materials/energy_drink',
          translations: { en: 'energy drink', es: 'energy drink', pt: 'energy drink', fr: 'energy drink', de: 'energy drink', it: 'energy drink', nl: 'energiedrank', zh: '能量饮料', ja: 'エナジードリンク', ru: 'энергетик' },
        },
        {
          id: 'hospitality_restaurant/bartender/materials/essence',
          localImage: 'hospitality_restaurant/bartender/materials/essence',
          translations: { en: 'essence', es: 'essence', pt: 'essence', fr: 'essence', de: 'essence', it: 'essence', nl: 'essence', zh: '精华', ja: 'エッセンス', ru: 'эссенция' },
        },
        {
          id: 'hospitality_restaurant/bartender/materials/extract',
          localImage: 'hospitality_restaurant/bartender/materials/extract',
          translations: { en: 'extract', es: 'extract', pt: 'extract', fr: 'extract', de: 'extract', it: 'extract', nl: 'extract', zh: '提取物', ja: 'エキス', ru: 'экстракт' },
        },
        {
          id: 'hospitality_restaurant/bartender/materials/flavoring',
          localImage: 'hospitality_restaurant/bartender/materials/flavoring',
          translations: { en: 'flavoring', es: 'flavoring', pt: 'flavoring', fr: 'flavoring', de: 'flavoring', it: 'flavoring', nl: 'smaakstof', zh: '香料', ja: 'フレーバリング', ru: 'ароматизатор' },
        },
        {
          id: 'hospitality_restaurant/bartender/materials/fruit',
          localImage: 'hospitality_restaurant/bartender/materials/fruit',
          translations: { en: 'fruit', es: 'fruit', pt: 'fruit', fr: 'fruit', de: 'fruit', it: 'fruit', nl: 'fruit', zh: '水果', ja: '果物', ru: 'фрукт' },
        },
        {
          id: 'hospitality_restaurant/bartender/materials/garnish',
          localImage: 'hospitality_restaurant/bartender/materials/garnish',
          translations: { en: 'garnish', es: 'garnish', pt: 'garnish', fr: 'garnish', de: 'garnish', it: 'garnish', nl: 'garnering', zh: '装饰', ja: 'ガーニッシュ', ru: 'украшение' },
        },
        {
          id: 'hospitality_restaurant/bartender/materials/ice',
          localImage: 'hospitality_restaurant/bartender/materials/ice',
          translations: { en: 'ice', es: 'hielo', pt: 'gelo', fr: 'glace', de: 'Eis', it: 'ghiaccio', nl: 'ijs', zh: '冰块', ja: '氷', ru: 'лед' },
        },
        {
          id: 'hospitality_restaurant/bartender/materials/ice_cubes',
          localImage: 'hospitality_restaurant/bartender/materials/ice_cubes',
          translations: { en: 'ice cubes', es: 'ice cubes', pt: 'ice cubes', fr: 'ice cubes', de: 'ice cubes', it: 'ice cubes', nl: 'ijsblokjes', zh: '冰块', ja: '氷', ru: 'кубики льда' },
        },
        {
          id: 'hospitality_restaurant/bartender/materials/infusion',
          localImage: 'hospitality_restaurant/bartender/materials/infusion',
          translations: { en: 'infusion', es: 'infusion', pt: 'infusion', fr: 'infusion', de: 'infusion', it: 'infusion', nl: 'infuus', zh: '输液', ja: '点滴', ru: 'инфузия' },
        },
        {
          id: 'hospitality_restaurant/bartender/materials/juice',
          localImage: 'hospitality_restaurant/bartender/materials/juice',
          translations: { en: 'juice', es: 'juice', pt: 'juice', fr: 'juice', de: 'juice', it: 'juice', nl: 'sap', zh: '果汁', ja: 'ジュース', ru: 'сок' },
        },
        {
          id: 'hospitality_restaurant/bartender/materials/lemon',
          localImage: 'hospitality_restaurant/bartender/materials/lemon',
          translations: { en: 'lemon', es: 'lemon', pt: 'lemon', fr: 'lemon', de: 'lemon', it: 'lemon', nl: 'citroen', zh: '柠檬', ja: 'レモン', ru: 'лимон' },
        },
        {
          id: 'hospitality_restaurant/bartender/materials/lime',
          localImage: 'hospitality_restaurant/bartender/materials/lime',
          translations: { en: 'lime', es: 'lime', pt: 'lime', fr: 'lime', de: 'lime', it: 'lime', nl: 'kalk', zh: '石灰', ja: 'ライム', ru: 'известь' },
        },
        {
          id: 'hospitality_restaurant/bartender/materials/liquid',
          localImage: 'hospitality_restaurant/bartender/materials/liquid',
          translations: { en: 'liquid', es: 'liquid', pt: 'liquid', fr: 'liquid', de: 'liquid', it: 'liquid', nl: 'vloeistof', zh: '液体', ja: '液体', ru: 'жидкость' },
        },
        {
          id: 'hospitality_restaurant/bartender/materials/mint',
          localImage: 'hospitality_restaurant/bartender/materials/mint',
          translations: { en: 'mint', es: 'mint', pt: 'mint', fr: 'mint', de: 'mint', it: 'mint', nl: 'munt', zh: '薄荷', ja: 'ミント', ru: 'мята' },
        },
        {
          id: 'hospitality_restaurant/bartender/materials/mixers',
          localImage: 'hospitality_restaurant/bartender/materials/mixers',
          translations: { en: 'mixers', es: 'mixers', pt: 'mixers', fr: 'mixers', de: 'mixers', it: 'mixers', nl: 'mixers', zh: '搅拌机', ja: 'ミキサー', ru: 'миксеры' },
        },
        {
          id: 'hospitality_restaurant/bartender/materials/puree',
          localImage: 'hospitality_restaurant/bartender/materials/puree',
          translations: { en: 'puree', es: 'puree', pt: 'puree', fr: 'puree', de: 'puree', it: 'puree', nl: 'puree', zh: '泥', ja: 'ピューレ', ru: 'пюре' },
        },
        {
          id: 'hospitality_restaurant/bartender/materials/salt',
          localImage: 'hospitality_restaurant/bartender/materials/salt',
          translations: { en: 'salt', es: 'salt', pt: 'salt', fr: 'salt', de: 'salt', it: 'salt', nl: 'zout', zh: '盐', ja: '塩', ru: 'соль' },
        },
        {
          id: 'hospitality_restaurant/bartender/materials/soda',
          localImage: 'hospitality_restaurant/bartender/materials/soda',
          translations: { en: 'soda', es: 'soda', pt: 'soda', fr: 'soda', de: 'soda', it: 'soda', nl: 'frisdrank', zh: '苏打水', ja: 'ソーダ', ru: 'газировка' },
        },
        {
          id: 'hospitality_restaurant/bartender/materials/sugar',
          localImage: 'hospitality_restaurant/bartender/materials/sugar',
          translations: { en: 'sugar', es: 'sugar', pt: 'sugar', fr: 'sugar', de: 'sugar', it: 'sugar', nl: 'suiker', zh: '糖', ja: '砂糖', ru: 'сахар' },
        },
        {
          id: 'hospitality_restaurant/bartender/materials/syrup',
          localImage: 'hospitality_restaurant/bartender/materials/syrup',
          translations: { en: 'syrup', es: 'syrup', pt: 'syrup', fr: 'syrup', de: 'syrup', it: 'syrup', nl: 'siroop', zh: '糖浆', ja: 'シロップ', ru: 'сироп' },
        },
        {
          id: 'hospitality_restaurant/bartender/materials/tonic',
          localImage: 'hospitality_restaurant/bartender/materials/tonic',
          translations: { en: 'tonic', es: 'tonic', pt: 'tonic', fr: 'tonic', de: 'tonic', it: 'tonic', nl: 'tonic', zh: '奎宁水', ja: 'トニック', ru: 'тоник' },
        },
        {
          id: 'hospitality_restaurant/bartender/materials/water',
          localImage: 'hospitality_restaurant/bartender/materials/water',
          translations: { en: 'water', es: 'agua', pt: 'água', fr: 'eau', de: 'Wasser', it: 'acqua', nl: 'water', zh: '水', ja: '水', ru: 'вода' },
        }
        ],
      }
      ],
    },
    {
      id: 'ice_cream_server',
      name: { en: 'Ice Cream Server', es: 'Heladero', pt: 'Sorveteiro', fr: 'Serveur de glaces', de: 'Eisverkäufer', it: 'Gelatiere', nl: 'IJsverkoper', zh: '冰淇淋服务员', ja: 'アイスクリーム販売員', ru: 'Продавец мороженого' },
      icon: '🍦',
      roles: [
      {
        id: 'tools',
        name: { en: 'Tools', es: 'Herramientas', pt: 'Ferramentas', fr: 'Outils', de: 'Werkzeuge', it: 'Attrezzi', nl: 'Gereedschap', zh: '工具', ja: '道具', ru: 'Инструменты' },
        icon: '🔧',
        items: [
        {
          id: 'hospitality_restaurant/ice_cream_server/tools/blender',
          localImage: 'hospitality_restaurant/ice_cream_server/tools/blender',
          translations: { en: 'blender', es: 'blender', pt: 'blender', fr: 'blender', de: 'blender', it: 'blender', nl: 'blender', zh: '搅拌机', ja: 'ブレンダー', ru: 'блендер' },
        },
        {
          id: 'hospitality_restaurant/ice_cream_server/tools/cone_holder',
          localImage: 'hospitality_restaurant/ice_cream_server/tools/cone_holder',
          translations: { en: 'cone holder', es: 'cone holder', pt: 'cone holder', fr: 'cone holder', de: 'cone holder', it: 'cone holder', nl: 'pionhouder', zh: '锥形架', ja: 'コーンホルダー', ru: 'держатель конусов' },
        },
        {
          id: 'hospitality_restaurant/ice_cream_server/tools/container',
          localImage: 'hospitality_restaurant/ice_cream_server/tools/container',
          translations: { en: 'container', es: 'contenedor', pt: 'recipiente', fr: 'conteneur', de: 'Behälter', it: 'contenitore', nl: 'container', zh: '容器', ja: 'コンテナ', ru: 'контейнер' },
        },
        {
          id: 'hospitality_restaurant/ice_cream_server/tools/cup_dispenser',
          localImage: 'hospitality_restaurant/ice_cream_server/tools/cup_dispenser',
          translations: { en: 'cup dispenser', es: 'cup dispenser', pt: 'cup dispenser', fr: 'cup dispenser', de: 'cup dispenser', it: 'cup dispenser', nl: 'bekerdispenser', zh: '杯子分配器', ja: 'カップディスペンサー', ru: 'диспенсер для стаканов' },
        },
        {
          id: 'hospitality_restaurant/ice_cream_server/tools/cutter',
          localImage: 'hospitality_restaurant/ice_cream_server/tools/cutter',
          translations: { en: 'cutter', es: 'cortador', pt: 'cortador', fr: 'cutter', de: 'Cutter', it: 'taglierino', nl: 'snijder', zh: '切割机', ja: 'カッター', ru: 'резак' },
        },
        {
          id: 'hospitality_restaurant/ice_cream_server/tools/dispenser',
          localImage: 'hospitality_restaurant/ice_cream_server/tools/dispenser',
          translations: { en: 'dispenser', es: 'dispenser', pt: 'dispenser', fr: 'dispenser', de: 'dispenser', it: 'dispenser', nl: 'dispenser', zh: '分配器', ja: 'ディスペンサー', ru: 'диспенсер' },
        },
        {
          id: 'hospitality_restaurant/ice_cream_server/tools/freezer',
          localImage: 'hospitality_restaurant/ice_cream_server/tools/freezer',
          translations: { en: 'freezer', es: 'congelador', pt: 'freezer', fr: 'congélateur', de: 'Gefriergerät', it: 'freezer', nl: 'vriezer', zh: '冷冻机', ja: '冷凍庫', ru: 'морозильник' },
        },
        {
          id: 'hospitality_restaurant/ice_cream_server/tools/holder',
          localImage: 'hospitality_restaurant/ice_cream_server/tools/holder',
          translations: { en: 'holder', es: 'holder', pt: 'holder', fr: 'holder', de: 'holder', it: 'holder', nl: 'houder', zh: '夹持器', ja: 'ホルダー', ru: 'держатель' },
        },
        {
          id: 'hospitality_restaurant/ice_cream_server/tools/ladle',
          localImage: 'hospitality_restaurant/ice_cream_server/tools/ladle',
          translations: { en: 'ladle', es: 'ladle', pt: 'ladle', fr: 'ladle', de: 'ladle', it: 'ladle', nl: 'soeplepel', zh: '汤勺', ja: 'お玉', ru: 'поварешка' },
        },
        {
          id: 'hospitality_restaurant/ice_cream_server/tools/machine',
          localImage: 'hospitality_restaurant/ice_cream_server/tools/machine',
          translations: { en: 'machine', es: 'machine', pt: 'machine', fr: 'machine', de: 'machine', it: 'machine', nl: 'machine', zh: '机器', ja: '機械', ru: 'машина' },
        },
        {
          id: 'hospitality_restaurant/ice_cream_server/tools/mixer',
          localImage: 'hospitality_restaurant/ice_cream_server/tools/mixer',
          translations: { en: 'mixer', es: 'mezclador', pt: 'betoneira', fr: 'mélangeur', de: 'Mischer', it: 'miscelatore', nl: 'mixer', zh: '搅拌机', ja: 'ミキサー', ru: 'миксер' },
        },
        {
          id: 'hospitality_restaurant/ice_cream_server/tools/scale',
          localImage: 'hospitality_restaurant/ice_cream_server/tools/scale',
          translations: { en: 'scale', es: 'báscula', pt: 'balança', fr: 'balance', de: 'Waage', it: 'bilancia', nl: 'weegschaal', zh: '秤', ja: 'スケール', ru: 'весы' },
        },
        {
          id: 'hospitality_restaurant/ice_cream_server/tools/scoop',
          localImage: 'hospitality_restaurant/ice_cream_server/tools/scoop',
          translations: { en: 'scoop', es: 'cuchara de helado', pt: 'concha', fr: 'cuillère à glace', de: 'Eiskugel', it: 'paletta gelato', nl: 'schep', zh: '勺子', ja: 'スコップ', ru: 'совок' },
        },
        {
          id: 'hospitality_restaurant/ice_cream_server/tools/scoop_tool',
          localImage: 'hospitality_restaurant/ice_cream_server/tools/scoop_tool',
          translations: { en: 'scoop tool', es: 'scoop tool', pt: 'scoop tool', fr: 'scoop tool', de: 'scoop tool', it: 'scoop tool', nl: 'schepgereedschap', zh: '勺形工具', ja: 'スコップツール', ru: 'совок-инструмент' },
        },
        {
          id: 'hospitality_restaurant/ice_cream_server/tools/scraper',
          localImage: 'hospitality_restaurant/ice_cream_server/tools/scraper',
          translations: { en: 'scraper', es: 'scraper', pt: 'scraper', fr: 'scraper', de: 'scraper', it: 'scraper', nl: 'schraper', zh: '刮刀', ja: 'スクレーパー', ru: 'скребок' },
        },
        {
          id: 'hospitality_restaurant/ice_cream_server/tools/serving_tool',
          localImage: 'hospitality_restaurant/ice_cream_server/tools/serving_tool',
          translations: { en: 'serving tool', es: 'serving tool', pt: 'serving tool', fr: 'serving tool', de: 'serving tool', it: 'serving tool', nl: 'opschepgereedschap', zh: '分餐工具', ja: 'サービングツール', ru: 'сервировочный инструмент' },
        },
        {
          id: 'hospitality_restaurant/ice_cream_server/tools/spatula',
          localImage: 'hospitality_restaurant/ice_cream_server/tools/spatula',
          translations: { en: 'spatula', es: 'spatula', pt: 'spatula', fr: 'spatula', de: 'spatula', it: 'spatula', nl: 'spatel', zh: '铲刀', ja: 'ヘラ', ru: 'шпатель' },
        },
        {
          id: 'hospitality_restaurant/ice_cream_server/tools/spoon',
          localImage: 'hospitality_restaurant/ice_cream_server/tools/spoon',
          translations: { en: 'spoon', es: 'spoon', pt: 'spoon', fr: 'spoon', de: 'spoon', it: 'spoon', nl: 'lepel', zh: '汤匙', ja: 'スプーン', ru: 'ложка' },
        },
        {
          id: 'hospitality_restaurant/ice_cream_server/tools/topping_dispenser',
          localImage: 'hospitality_restaurant/ice_cream_server/tools/topping_dispenser',
          translations: { en: 'topping dispenser', es: 'topping dispenser', pt: 'topping dispenser', fr: 'topping dispenser', de: 'topping dispenser', it: 'topping dispenser', nl: 'toppingdispenser', zh: '浇头分发器', ja: 'トッピングディスペンサー', ru: 'диспенсер топпинга' },
        },
        {
          id: 'hospitality_restaurant/ice_cream_server/tools/tray',
          localImage: 'hospitality_restaurant/ice_cream_server/tools/tray',
          translations: { en: 'tray', es: 'bandeja', pt: 'bandeja', fr: 'plateau', de: 'Tablett', it: 'vassoio', nl: 'dienblad', zh: '托盘', ja: 'トレイ', ru: 'поднос' },
        }
        ],
      },
      {
        id: 'materials',
        name: { en: 'Materials', es: 'Materiales', pt: 'Materiais', fr: 'Matériaux', de: 'Materialien', it: 'Materiali', nl: 'Materialen', zh: '材料', ja: '材料', ru: 'Материалы' },
        icon: '📦',
        items: [
        {
          id: 'hospitality_restaurant/ice_cream_server/materials/base',
          localImage: 'hospitality_restaurant/ice_cream_server/materials/base',
          translations: { en: 'base', es: 'base', pt: 'base', fr: 'base', de: 'base', it: 'base', nl: 'basis', zh: '底料', ja: 'ベース', ru: 'основа' },
        },
        {
          id: 'hospitality_restaurant/ice_cream_server/materials/biscuit',
          localImage: 'hospitality_restaurant/ice_cream_server/materials/biscuit',
          translations: { en: 'biscuit', es: 'biscuit', pt: 'biscuit', fr: 'biscuit', de: 'biscuit', it: 'biscuit', nl: 'koekje', zh: '饼干', ja: 'ビスケット', ru: 'печенье' },
        },
        {
          id: 'hospitality_restaurant/ice_cream_server/materials/candy',
          localImage: 'hospitality_restaurant/ice_cream_server/materials/candy',
          translations: { en: 'candy', es: 'candy', pt: 'candy', fr: 'candy', de: 'candy', it: 'candy', nl: 'snoep', zh: '糖果', ja: 'キャンディ', ru: 'конфеты' },
        },
        {
          id: 'hospitality_restaurant/ice_cream_server/materials/caramel',
          localImage: 'hospitality_restaurant/ice_cream_server/materials/caramel',
          translations: { en: 'caramel', es: 'caramel', pt: 'caramel', fr: 'caramel', de: 'caramel', it: 'caramel', nl: 'karamel', zh: '焦糖', ja: 'キャラメル', ru: 'карамель' },
        },
        {
          id: 'hospitality_restaurant/ice_cream_server/materials/chocolate',
          localImage: 'hospitality_restaurant/ice_cream_server/materials/chocolate',
          translations: { en: 'chocolate', es: 'chocolate', pt: 'chocolate', fr: 'chocolate', de: 'chocolate', it: 'chocolate', nl: 'chocolade', zh: '巧克力', ja: 'チョコレート', ru: 'шоколад' },
        },
        {
          id: 'hospitality_restaurant/ice_cream_server/materials/chocolate_chips',
          localImage: 'hospitality_restaurant/ice_cream_server/materials/chocolate_chips',
          translations: { en: 'chocolate chips', es: 'chocolate chips', pt: 'chocolate chips', fr: 'chocolate chips', de: 'chocolate chips', it: 'chocolate chips', nl: 'chocoladestukjes', zh: '巧克力碎片', ja: 'チョコチップ', ru: 'шоколадная крошка' },
        },
        {
          id: 'hospitality_restaurant/ice_cream_server/materials/coating',
          localImage: 'hospitality_restaurant/ice_cream_server/materials/coating',
          translations: { en: 'coating', es: 'coating', pt: 'coating', fr: 'coating', de: 'coating', it: 'coating', nl: 'coating', zh: '涂层', ja: 'コーティング', ru: 'покрытие' },
        },
        {
          id: 'hospitality_restaurant/ice_cream_server/materials/cones',
          localImage: 'hospitality_restaurant/ice_cream_server/materials/cones',
          translations: { en: 'cones', es: 'cones', pt: 'cones', fr: 'cones', de: 'cones', it: 'cones', nl: 'pionnen', zh: '锥桶', ja: 'コーン', ru: 'конусы' },
        },
        {
          id: 'hospitality_restaurant/ice_cream_server/materials/cream',
          localImage: 'hospitality_restaurant/ice_cream_server/materials/cream',
          translations: { en: 'cream', es: 'cream', pt: 'cream', fr: 'cream', de: 'cream', it: 'cream', nl: 'room', zh: '奶油', ja: 'クリーム', ru: 'крем' },
        },
        {
          id: 'hospitality_restaurant/ice_cream_server/materials/essence',
          localImage: 'hospitality_restaurant/ice_cream_server/materials/essence',
          translations: { en: 'essence', es: 'essence', pt: 'essence', fr: 'essence', de: 'essence', it: 'essence', nl: 'essence', zh: '精华', ja: 'エッセンス', ru: 'эссенция' },
        },
        {
          id: 'hospitality_restaurant/ice_cream_server/materials/filling',
          localImage: 'hospitality_restaurant/ice_cream_server/materials/filling',
          translations: { en: 'filling', es: 'filling', pt: 'filling', fr: 'filling', de: 'filling', it: 'filling', nl: 'vulling', zh: '填充物', ja: 'フィリング', ru: 'начинка' },
        },
        {
          id: 'hospitality_restaurant/ice_cream_server/materials/flavor',
          localImage: 'hospitality_restaurant/ice_cream_server/materials/flavor',
          translations: { en: 'flavor', es: 'flavor', pt: 'flavor', fr: 'flavor', de: 'flavor', it: 'flavor', nl: 'smaak', zh: '口味', ja: 'フレーバー', ru: 'вкус' },
        },
        {
          id: 'hospitality_restaurant/ice_cream_server/materials/flavor_mix',
          localImage: 'hospitality_restaurant/ice_cream_server/materials/flavor_mix',
          translations: { en: 'flavor mix', es: 'flavor mix', pt: 'flavor mix', fr: 'flavor mix', de: 'flavor mix', it: 'flavor mix', nl: 'smaaksmengsel', zh: '调味混合物', ja: 'フレーバーミックス', ru: 'смесь вкусов' },
        },
        {
          id: 'hospitality_restaurant/ice_cream_server/materials/fruits',
          localImage: 'hospitality_restaurant/ice_cream_server/materials/fruits',
          translations: { en: 'fruits', es: 'fruits', pt: 'fruits', fr: 'fruits', de: 'fruits', it: 'fruits', nl: 'fruit', zh: '水果', ja: '果物', ru: 'фрукты' },
        },
        {
          id: 'hospitality_restaurant/ice_cream_server/materials/gel',
          localImage: 'hospitality_restaurant/ice_cream_server/materials/gel',
          translations: { en: 'gel', es: 'gel', pt: 'gel', fr: 'gel', de: 'gel', it: 'gel', nl: 'gel', zh: '凝胶', ja: 'ジェル', ru: 'гель' },
        },
        {
          id: 'hospitality_restaurant/ice_cream_server/materials/ice_cream',
          localImage: 'hospitality_restaurant/ice_cream_server/materials/ice_cream',
          translations: { en: 'ice cream', es: 'helado', pt: 'sorvete', fr: 'glace', de: 'Eis', it: 'gelato', nl: 'ijs', zh: '冰淇淋', ja: 'アイスクリーム', ru: 'мороженое' },
        },
        {
          id: 'hospitality_restaurant/ice_cream_server/materials/liquid',
          localImage: 'hospitality_restaurant/ice_cream_server/materials/liquid',
          translations: { en: 'liquid', es: 'liquid', pt: 'liquid', fr: 'liquid', de: 'liquid', it: 'liquid', nl: 'vloeistof', zh: '液体', ja: '液体', ru: 'жидкость' },
        },
        {
          id: 'hospitality_restaurant/ice_cream_server/materials/marshmallow',
          localImage: 'hospitality_restaurant/ice_cream_server/materials/marshmallow',
          translations: { en: 'marshmallow', es: 'marshmallow', pt: 'marshmallow', fr: 'marshmallow', de: 'marshmallow', it: 'marshmallow', nl: 'marshmallow', zh: '棉花糖', ja: 'マシュマロ', ru: 'маршмеллоу' },
        },
        {
          id: 'hospitality_restaurant/ice_cream_server/materials/milk',
          localImage: 'hospitality_restaurant/ice_cream_server/materials/milk',
          translations: { en: 'milk', es: 'milk', pt: 'milk', fr: 'milk', de: 'milk', it: 'milk', nl: 'melk', zh: '牛奶', ja: 'ミルク', ru: 'молоко' },
        },
        {
          id: 'hospitality_restaurant/ice_cream_server/materials/mix',
          localImage: 'hospitality_restaurant/ice_cream_server/materials/mix',
          translations: { en: 'mix', es: 'mix', pt: 'mix', fr: 'mix', de: 'mix', it: 'mix', nl: 'mengsel', zh: '混合物', ja: 'ミックス', ru: 'смесь' },
        },
        {
          id: 'hospitality_restaurant/ice_cream_server/materials/nuts',
          localImage: 'hospitality_restaurant/ice_cream_server/materials/nuts',
          translations: { en: 'nuts', es: 'nuts', pt: 'nuts', fr: 'nuts', de: 'nuts', it: 'nuts', nl: 'moeren', zh: '螺母', ja: 'ナット', ru: 'гайки' },
        },
        {
          id: 'hospitality_restaurant/ice_cream_server/materials/paste',
          localImage: 'hospitality_restaurant/ice_cream_server/materials/paste',
          translations: { en: 'paste', es: 'paste', pt: 'paste', fr: 'paste', de: 'paste', it: 'paste', nl: 'pasta', zh: '糊', ja: 'ペースト', ru: 'паста' },
        },
        {
          id: 'hospitality_restaurant/ice_cream_server/materials/powder',
          localImage: 'hospitality_restaurant/ice_cream_server/materials/powder',
          translations: { en: 'powder', es: 'powder', pt: 'powder', fr: 'powder', de: 'powder', it: 'powder', nl: 'poeder', zh: '粉末', ja: 'パウダー', ru: 'порошок' },
        },
        {
          id: 'hospitality_restaurant/ice_cream_server/materials/sauce',
          localImage: 'hospitality_restaurant/ice_cream_server/materials/sauce',
          translations: { en: 'sauce', es: 'sauce', pt: 'sauce', fr: 'sauce', de: 'sauce', it: 'sauce', nl: 'saus', zh: '酱汁', ja: 'ソース', ru: 'соус' },
        },
        {
          id: 'hospitality_restaurant/ice_cream_server/materials/sprinkles',
          localImage: 'hospitality_restaurant/ice_cream_server/materials/sprinkles',
          translations: { en: 'sprinkles', es: 'sprinkles', pt: 'sprinkles', fr: 'sprinkles', de: 'sprinkles', it: 'sprinkles', nl: 'hagelslag', zh: '糖粒', ja: 'スプリンクル', ru: 'кондитерская посыпка' },
        },
        {
          id: 'hospitality_restaurant/ice_cream_server/materials/sugar',
          localImage: 'hospitality_restaurant/ice_cream_server/materials/sugar',
          translations: { en: 'sugar', es: 'sugar', pt: 'sugar', fr: 'sugar', de: 'sugar', it: 'sugar', nl: 'suiker', zh: '糖', ja: '砂糖', ru: 'сахар' },
        },
        {
          id: 'hospitality_restaurant/ice_cream_server/materials/syrup',
          localImage: 'hospitality_restaurant/ice_cream_server/materials/syrup',
          translations: { en: 'syrup', es: 'syrup', pt: 'syrup', fr: 'syrup', de: 'syrup', it: 'syrup', nl: 'siroop', zh: '糖浆', ja: 'シロップ', ru: 'сироп' },
        },
        {
          id: 'hospitality_restaurant/ice_cream_server/materials/topping_mix',
          localImage: 'hospitality_restaurant/ice_cream_server/materials/topping_mix',
          translations: { en: 'topping mix', es: 'topping mix', pt: 'topping mix', fr: 'topping mix', de: 'topping mix', it: 'topping mix', nl: 'toppingmengsel', zh: '浇头混合物', ja: 'トッピングミックス', ru: 'смесь топпинга' },
        },
        {
          id: 'hospitality_restaurant/ice_cream_server/materials/toppings',
          localImage: 'hospitality_restaurant/ice_cream_server/materials/toppings',
          translations: { en: 'toppings', es: 'toppings', pt: 'toppings', fr: 'toppings', de: 'toppings', it: 'toppings', nl: 'toppings', zh: '浇头', ja: 'トッピング', ru: 'топпинги' },
        },
        {
          id: 'hospitality_restaurant/ice_cream_server/materials/wafer',
          localImage: 'hospitality_restaurant/ice_cream_server/materials/wafer',
          translations: { en: 'wafer', es: 'wafer', pt: 'wafer', fr: 'wafer', de: 'wafer', it: 'wafer', nl: 'wafer', zh: '威化饼', ja: 'ウエハー', ru: 'вафля' },
        }
        ],
      }
      ],
    },
    {
      id: 'kitchen_assistant',
      name: { en: 'Kitchen Assistant', es: 'Ayudante de Cocina', pt: 'Auxiliar de Cozinha', fr: 'Commis de cuisine', de: 'Küchenhelfer', it: 'Aiuto Cuoco', nl: 'Keukenassistent', zh: '厨房助手', ja: 'キッチンアシスタント', ru: 'Помощник на кухне' },
      icon: '🍳',
      roles: [
      {
        id: 'tools',
        name: { en: 'Tools', es: 'Herramientas', pt: 'Ferramentas', fr: 'Outils', de: 'Werkzeuge', it: 'Attrezzi', nl: 'Gereedschap', zh: '工具', ja: '道具', ru: 'Инструменты' },
        icon: '🔧',
        items: [
        {
          id: 'hospitality_restaurant/kitchen_assistant/tools/baking_tray',
          localImage: 'hospitality_restaurant/kitchen_assistant/tools/baking_tray',
          translations: { en: 'baking tray', es: 'baking tray', pt: 'baking tray', fr: 'baking tray', de: 'baking tray', it: 'baking tray', nl: 'bakplaat', zh: '烤盘', ja: 'ベーキングトレイ', ru: 'противень' },
        },
        {
          id: 'hospitality_restaurant/kitchen_assistant/tools/blender',
          localImage: 'hospitality_restaurant/kitchen_assistant/tools/blender',
          translations: { en: 'blender', es: 'blender', pt: 'blender', fr: 'blender', de: 'blender', it: 'blender', nl: 'blender', zh: '搅拌机', ja: 'ブレンダー', ru: 'блендер' },
        },
        {
          id: 'hospitality_restaurant/kitchen_assistant/tools/colander',
          localImage: 'hospitality_restaurant/kitchen_assistant/tools/colander',
          translations: { en: 'colander', es: 'colander', pt: 'colander', fr: 'colander', de: 'colander', it: 'colander', nl: 'vergiet', zh: '滤锅', ja: 'コランダー', ru: 'дуршлаг' },
        },
        {
          id: 'hospitality_restaurant/kitchen_assistant/tools/cutting_board',
          localImage: 'hospitality_restaurant/kitchen_assistant/tools/cutting_board',
          translations: { en: 'cutting board', es: 'cutting board', pt: 'cutting board', fr: 'cutting board', de: 'cutting board', it: 'cutting board', nl: 'snijplank', zh: '切菜板', ja: 'まな板', ru: 'разделочная доска' },
        },
        {
          id: 'hospitality_restaurant/kitchen_assistant/tools/food_processor',
          localImage: 'hospitality_restaurant/kitchen_assistant/tools/food_processor',
          translations: { en: 'food processor', es: 'food processor', pt: 'food processor', fr: 'food processor', de: 'food processor', it: 'food processor', nl: 'keukenmachine', zh: '食品加工机', ja: 'フードプロセッサー', ru: 'кухонный комбайн' },
        },
        {
          id: 'hospitality_restaurant/kitchen_assistant/tools/fryer',
          localImage: 'hospitality_restaurant/kitchen_assistant/tools/fryer',
          translations: { en: 'fryer', es: 'fryer', pt: 'fryer', fr: 'fryer', de: 'fryer', it: 'fryer', nl: 'friteuse', zh: '油炸锅', ja: 'フライヤー', ru: 'фритюрница' },
        },
        {
          id: 'hospitality_restaurant/kitchen_assistant/tools/grater',
          localImage: 'hospitality_restaurant/kitchen_assistant/tools/grater',
          translations: { en: 'grater', es: 'grater', pt: 'grater', fr: 'grater', de: 'grater', it: 'grater', nl: 'rasp', zh: '擦丝板', ja: 'グレーター', ru: 'терка' },
        },
        {
          id: 'hospitality_restaurant/kitchen_assistant/tools/grill',
          localImage: 'hospitality_restaurant/kitchen_assistant/tools/grill',
          translations: { en: 'grill', es: 'grill', pt: 'grill', fr: 'grill', de: 'grill', it: 'grill', nl: 'grill', zh: '烤架', ja: 'グリル', ru: 'гриль' },
        },
        {
          id: 'hospitality_restaurant/kitchen_assistant/tools/knife',
          localImage: 'hospitality_restaurant/kitchen_assistant/tools/knife',
          translations: { en: 'knife', es: 'cuchillo', pt: 'faca', fr: 'couteau', de: 'Messer', it: 'coltello', nl: 'mes', zh: '刀', ja: 'ナイフ', ru: 'нож' },
        },
        {
          id: 'hospitality_restaurant/kitchen_assistant/tools/ladle',
          localImage: 'hospitality_restaurant/kitchen_assistant/tools/ladle',
          translations: { en: 'ladle', es: 'ladle', pt: 'ladle', fr: 'ladle', de: 'ladle', it: 'ladle', nl: 'soeplepel', zh: '汤勺', ja: 'お玉', ru: 'поварешка' },
        },
        {
          id: 'hospitality_restaurant/kitchen_assistant/tools/mixer',
          localImage: 'hospitality_restaurant/kitchen_assistant/tools/mixer',
          translations: { en: 'mixer', es: 'mezclador', pt: 'betoneira', fr: 'mélangeur', de: 'Mischer', it: 'miscelatore', nl: 'mixer', zh: '搅拌机', ja: 'ミキサー', ru: 'миксер' },
        },
        {
          id: 'hospitality_restaurant/kitchen_assistant/tools/oven',
          localImage: 'hospitality_restaurant/kitchen_assistant/tools/oven',
          translations: { en: 'oven', es: 'oven', pt: 'oven', fr: 'oven', de: 'oven', it: 'oven', nl: 'oven', zh: '烤箱', ja: 'オーブン', ru: 'духовка' },
        },
        {
          id: 'hospitality_restaurant/kitchen_assistant/tools/pan',
          localImage: 'hospitality_restaurant/kitchen_assistant/tools/pan',
          translations: { en: 'pan', es: 'pan', pt: 'pan', fr: 'pan', de: 'pan', it: 'pan', nl: 'pan', zh: '锅', ja: 'パン', ru: 'сковорода' },
        },
        {
          id: 'hospitality_restaurant/kitchen_assistant/tools/peeler',
          localImage: 'hospitality_restaurant/kitchen_assistant/tools/peeler',
          translations: { en: 'peeler', es: 'peeler', pt: 'peeler', fr: 'peeler', de: 'peeler', it: 'peeler', nl: 'schilmesje', zh: '削皮器', ja: 'ピーラー', ru: 'овощечистка' },
        },
        {
          id: 'hospitality_restaurant/kitchen_assistant/tools/sieve',
          localImage: 'hospitality_restaurant/kitchen_assistant/tools/sieve',
          translations: { en: 'sieve', es: 'sieve', pt: 'sieve', fr: 'sieve', de: 'sieve', it: 'sieve', nl: 'zeef', zh: '筛子', ja: 'ふるい', ru: 'сито' },
        },
        {
          id: 'hospitality_restaurant/kitchen_assistant/tools/spatula',
          localImage: 'hospitality_restaurant/kitchen_assistant/tools/spatula',
          translations: { en: 'spatula', es: 'spatula', pt: 'spatula', fr: 'spatula', de: 'spatula', it: 'spatula', nl: 'spatel', zh: '铲刀', ja: 'ヘラ', ru: 'шпатель' },
        },
        {
          id: 'hospitality_restaurant/kitchen_assistant/tools/stove',
          localImage: 'hospitality_restaurant/kitchen_assistant/tools/stove',
          translations: { en: 'stove', es: 'stove', pt: 'stove', fr: 'stove', de: 'stove', it: 'stove', nl: 'fornuis', zh: '炉子', ja: 'ストーブ', ru: 'плита' },
        },
        {
          id: 'hospitality_restaurant/kitchen_assistant/tools/tongs',
          localImage: 'hospitality_restaurant/kitchen_assistant/tools/tongs',
          translations: { en: 'tongs', es: 'tongs', pt: 'tongs', fr: 'tongs', de: 'tongs', it: 'tongs', nl: 'tang', zh: '夹子', ja: 'トング', ru: 'щипцы' },
        },
        {
          id: 'hospitality_restaurant/kitchen_assistant/tools/tray',
          localImage: 'hospitality_restaurant/kitchen_assistant/tools/tray',
          translations: { en: 'tray', es: 'bandeja', pt: 'bandeja', fr: 'plateau', de: 'Tablett', it: 'vassoio', nl: 'dienblad', zh: '托盘', ja: 'トレイ', ru: 'поднос' },
        },
        {
          id: 'hospitality_restaurant/kitchen_assistant/tools/whisk',
          localImage: 'hospitality_restaurant/kitchen_assistant/tools/whisk',
          translations: { en: 'whisk', es: 'whisk', pt: 'whisk', fr: 'whisk', de: 'whisk', it: 'whisk', nl: 'garde', zh: '搅拌器', ja: '泡立て器', ru: 'венчик' },
        }
        ],
      },
      {
        id: 'materials',
        name: { en: 'Materials', es: 'Materiales', pt: 'Materiais', fr: 'Matériaux', de: 'Materialien', it: 'Materiali', nl: 'Materialen', zh: '材料', ja: '材料', ru: 'Материалы' },
        icon: '📦',
        items: [
        {
          id: 'hospitality_restaurant/kitchen_assistant/materials/base',
          localImage: 'hospitality_restaurant/kitchen_assistant/materials/base',
          translations: { en: 'base', es: 'base', pt: 'base', fr: 'base', de: 'base', it: 'base', nl: 'basis', zh: '底料', ja: 'ベース', ru: 'основа' },
        },
        {
          id: 'hospitality_restaurant/kitchen_assistant/materials/batter',
          localImage: 'hospitality_restaurant/kitchen_assistant/materials/batter',
          translations: { en: 'batter', es: 'batter', pt: 'batter', fr: 'batter', de: 'batter', it: 'batter', nl: 'beslag', zh: '面糊', ja: 'バッター', ru: 'тесто' },
        },
        {
          id: 'hospitality_restaurant/kitchen_assistant/materials/broth',
          localImage: 'hospitality_restaurant/kitchen_assistant/materials/broth',
          translations: { en: 'broth', es: 'broth', pt: 'broth', fr: 'broth', de: 'broth', it: 'broth', nl: 'bouillon', zh: '肉汤', ja: 'ブロス', ru: 'бульон' },
        },
        {
          id: 'hospitality_restaurant/kitchen_assistant/materials/butter',
          localImage: 'hospitality_restaurant/kitchen_assistant/materials/butter',
          translations: { en: 'butter', es: 'butter', pt: 'butter', fr: 'butter', de: 'butter', it: 'butter', nl: 'boter', zh: '黄油', ja: 'バター', ru: 'масло' },
        },
        {
          id: 'hospitality_restaurant/kitchen_assistant/materials/cheese',
          localImage: 'hospitality_restaurant/kitchen_assistant/materials/cheese',
          translations: { en: 'cheese', es: 'cheese', pt: 'cheese', fr: 'cheese', de: 'cheese', it: 'cheese', nl: 'kaas', zh: '奶酪', ja: 'チーズ', ru: 'сыр' },
        },
        {
          id: 'hospitality_restaurant/kitchen_assistant/materials/cream',
          localImage: 'hospitality_restaurant/kitchen_assistant/materials/cream',
          translations: { en: 'cream', es: 'cream', pt: 'cream', fr: 'cream', de: 'cream', it: 'cream', nl: 'room', zh: '奶油', ja: 'クリーム', ru: 'крем' },
        },
        {
          id: 'hospitality_restaurant/kitchen_assistant/materials/dough',
          localImage: 'hospitality_restaurant/kitchen_assistant/materials/dough',
          translations: { en: 'dough', es: 'dough', pt: 'dough', fr: 'dough', de: 'dough', it: 'dough', nl: 'deeg', zh: '面团', ja: '生地', ru: 'тесто' },
        },
        {
          id: 'hospitality_restaurant/kitchen_assistant/materials/eggs',
          localImage: 'hospitality_restaurant/kitchen_assistant/materials/eggs',
          translations: { en: 'eggs', es: 'eggs', pt: 'eggs', fr: 'eggs', de: 'eggs', it: 'eggs', nl: 'eieren', zh: '鸡蛋', ja: '卵', ru: 'яйца' },
        },
        {
          id: 'hospitality_restaurant/kitchen_assistant/materials/filling',
          localImage: 'hospitality_restaurant/kitchen_assistant/materials/filling',
          translations: { en: 'filling', es: 'filling', pt: 'filling', fr: 'filling', de: 'filling', it: 'filling', nl: 'vulling', zh: '填充物', ja: 'フィリング', ru: 'начинка' },
        },
        {
          id: 'hospitality_restaurant/kitchen_assistant/materials/flour',
          localImage: 'hospitality_restaurant/kitchen_assistant/materials/flour',
          translations: { en: 'flour', es: 'flour', pt: 'flour', fr: 'flour', de: 'flour', it: 'flour', nl: 'bloem', zh: '面粉', ja: '小麦粉', ru: 'мука' },
        },
        {
          id: 'hospitality_restaurant/kitchen_assistant/materials/herbs',
          localImage: 'hospitality_restaurant/kitchen_assistant/materials/herbs',
          translations: { en: 'herbs', es: 'herbs', pt: 'herbs', fr: 'herbs', de: 'herbs', it: 'herbs', nl: 'kruiden', zh: '香草', ja: 'ハーブ', ru: 'травы' },
        },
        {
          id: 'hospitality_restaurant/kitchen_assistant/materials/ingredient',
          localImage: 'hospitality_restaurant/kitchen_assistant/materials/ingredient',
          translations: { en: 'ingredient', es: 'ingredient', pt: 'ingredient', fr: 'ingredient', de: 'ingredient', it: 'ingredient', nl: 'ingrediënt', zh: '原料', ja: '材料', ru: 'ингредиент' },
        },
        {
          id: 'hospitality_restaurant/kitchen_assistant/materials/marinade',
          localImage: 'hospitality_restaurant/kitchen_assistant/materials/marinade',
          translations: { en: 'marinade', es: 'marinade', pt: 'marinade', fr: 'marinade', de: 'marinade', it: 'marinade', nl: 'marinade', zh: '腌料', ja: 'マリネ', ru: 'маринад' },
        },
        {
          id: 'hospitality_restaurant/kitchen_assistant/materials/meat',
          localImage: 'hospitality_restaurant/kitchen_assistant/materials/meat',
          translations: { en: 'meat', es: 'meat', pt: 'meat', fr: 'meat', de: 'meat', it: 'meat', nl: 'vlees', zh: '肉', ja: '肉', ru: 'мясо' },
        },
        {
          id: 'hospitality_restaurant/kitchen_assistant/materials/milk',
          localImage: 'hospitality_restaurant/kitchen_assistant/materials/milk',
          translations: { en: 'milk', es: 'milk', pt: 'milk', fr: 'milk', de: 'milk', it: 'milk', nl: 'melk', zh: '牛奶', ja: 'ミルク', ru: 'молоко' },
        },
        {
          id: 'hospitality_restaurant/kitchen_assistant/materials/mixture',
          localImage: 'hospitality_restaurant/kitchen_assistant/materials/mixture',
          translations: { en: 'mixture', es: 'mixture', pt: 'mixture', fr: 'mixture', de: 'mixture', it: 'mixture', nl: 'mengsel', zh: '混合物', ja: 'ミクスチャー', ru: 'смесь' },
        },
        {
          id: 'hospitality_restaurant/kitchen_assistant/materials/oil',
          localImage: 'hospitality_restaurant/kitchen_assistant/materials/oil',
          translations: { en: 'oil', es: 'oil', pt: 'oil', fr: 'oil', de: 'oil', it: 'oil', nl: 'olie', zh: '油', ja: 'オイル', ru: 'масло' },
        },
        {
          id: 'hospitality_restaurant/kitchen_assistant/materials/pasta',
          localImage: 'hospitality_restaurant/kitchen_assistant/materials/pasta',
          translations: { en: 'pasta', es: 'pasta', pt: 'pasta', fr: 'pasta', de: 'pasta', it: 'pasta', nl: 'pasta', zh: '意大利面', ja: 'パスタ', ru: 'паста' },
        },
        {
          id: 'hospitality_restaurant/kitchen_assistant/materials/rice',
          localImage: 'hospitality_restaurant/kitchen_assistant/materials/rice',
          translations: { en: 'rice', es: 'rice', pt: 'rice', fr: 'rice', de: 'rice', it: 'rice', nl: 'rijst', zh: '大米', ja: 'ご飯', ru: 'рис' },
        },
        {
          id: 'hospitality_restaurant/kitchen_assistant/materials/salt',
          localImage: 'hospitality_restaurant/kitchen_assistant/materials/salt',
          translations: { en: 'salt', es: 'salt', pt: 'salt', fr: 'salt', de: 'salt', it: 'salt', nl: 'zout', zh: '盐', ja: '塩', ru: 'соль' },
        },
        {
          id: 'hospitality_restaurant/kitchen_assistant/materials/sauce',
          localImage: 'hospitality_restaurant/kitchen_assistant/materials/sauce',
          translations: { en: 'sauce', es: 'sauce', pt: 'sauce', fr: 'sauce', de: 'sauce', it: 'sauce', nl: 'saus', zh: '酱汁', ja: 'ソース', ru: 'соус' },
        },
        {
          id: 'hospitality_restaurant/kitchen_assistant/materials/seasoning',
          localImage: 'hospitality_restaurant/kitchen_assistant/materials/seasoning',
          translations: { en: 'seasoning', es: 'seasoning', pt: 'seasoning', fr: 'seasoning', de: 'seasoning', it: 'seasoning', nl: 'kruiden', zh: '调味料', ja: 'シーズニング', ru: 'приправа' },
        },
        {
          id: 'hospitality_restaurant/kitchen_assistant/materials/spices',
          localImage: 'hospitality_restaurant/kitchen_assistant/materials/spices',
          translations: { en: 'spices', es: 'spices', pt: 'spices', fr: 'spices', de: 'spices', it: 'spices', nl: 'kruiden', zh: '香料', ja: 'スパイス', ru: 'специи' },
        },
        {
          id: 'hospitality_restaurant/kitchen_assistant/materials/stock',
          localImage: 'hospitality_restaurant/kitchen_assistant/materials/stock',
          translations: { en: 'stock', es: 'stock', pt: 'stock', fr: 'stock', de: 'stock', it: 'stock', nl: 'voorraad', zh: '库存', ja: '在庫', ru: 'запас' },
        },
        {
          id: 'hospitality_restaurant/kitchen_assistant/materials/sugar',
          localImage: 'hospitality_restaurant/kitchen_assistant/materials/sugar',
          translations: { en: 'sugar', es: 'sugar', pt: 'sugar', fr: 'sugar', de: 'sugar', it: 'sugar', nl: 'suiker', zh: '糖', ja: '砂糖', ru: 'сахар' },
        },
        {
          id: 'hospitality_restaurant/kitchen_assistant/materials/syrup',
          localImage: 'hospitality_restaurant/kitchen_assistant/materials/syrup',
          translations: { en: 'syrup', es: 'syrup', pt: 'syrup', fr: 'syrup', de: 'syrup', it: 'syrup', nl: 'siroop', zh: '糖浆', ja: 'シロップ', ru: 'сироп' },
        },
        {
          id: 'hospitality_restaurant/kitchen_assistant/materials/topping',
          localImage: 'hospitality_restaurant/kitchen_assistant/materials/topping',
          translations: { en: 'topping', es: 'topping', pt: 'topping', fr: 'topping', de: 'topping', it: 'topping', nl: 'topping', zh: '浇头', ja: 'トッピング', ru: 'топпинг' },
        },
        {
          id: 'hospitality_restaurant/kitchen_assistant/materials/vegetables',
          localImage: 'hospitality_restaurant/kitchen_assistant/materials/vegetables',
          translations: { en: 'vegetables', es: 'vegetables', pt: 'vegetables', fr: 'vegetables', de: 'vegetables', it: 'vegetables', nl: 'groenten', zh: '蔬菜', ja: '野菜', ru: 'овощи' },
        },
        {
          id: 'hospitality_restaurant/kitchen_assistant/materials/vinegar',
          localImage: 'hospitality_restaurant/kitchen_assistant/materials/vinegar',
          translations: { en: 'vinegar', es: 'vinegar', pt: 'vinegar', fr: 'vinegar', de: 'vinegar', it: 'vinegar', nl: 'azijn', zh: '醋', ja: '酢', ru: 'уксус' },
        },
        {
          id: 'hospitality_restaurant/kitchen_assistant/materials/water',
          localImage: 'hospitality_restaurant/kitchen_assistant/materials/water',
          translations: { en: 'water', es: 'agua', pt: 'água', fr: 'eau', de: 'Wasser', it: 'acqua', nl: 'water', zh: '水', ja: '水', ru: 'вода' },
        }
        ],
      }
      ],
    },
    {
      id: 'waiter',
      name: { en: 'Waiter', es: 'Camarero', pt: 'Garçom', fr: 'Serveur', de: 'Kellner', it: 'Cameriere', nl: 'Ober', zh: '服务员', ja: 'ウェイター', ru: 'Официант' },
      icon: '🥗',
      roles: [
      {
        id: 'tools',
        name: { en: 'Tools', es: 'Herramientas', pt: 'Ferramentas', fr: 'Outils', de: 'Werkzeuge', it: 'Attrezzi', nl: 'Gereedschap', zh: '工具', ja: '道具', ru: 'Инструменты' },
        icon: '🔧',
        items: [
        {
          id: 'hospitality_restaurant/waiter/tools/bill_holder',
          localImage: 'hospitality_restaurant/waiter/tools/bill_holder',
          translations: { en: 'bill holder', es: 'bill holder', pt: 'bill holder', fr: 'bill holder', de: 'bill holder', it: 'bill holder', nl: 'rekninghouder', zh: '账单夹', ja: 'ビルホルダー', ru: 'держатель счетов' },
        },
        {
          id: 'hospitality_restaurant/waiter/tools/bottle_opener',
          localImage: 'hospitality_restaurant/waiter/tools/bottle_opener',
          translations: { en: 'bottle opener', es: 'bottle opener', pt: 'bottle opener', fr: 'bottle opener', de: 'bottle opener', it: 'bottle opener', nl: 'flesopener', zh: '开瓶器', ja: 'ボトルオープナー', ru: 'открывалка для бутылок' },
        },
        {
          id: 'hospitality_restaurant/waiter/tools/card_machine',
          localImage: 'hospitality_restaurant/waiter/tools/card_machine',
          translations: { en: 'card machine', es: 'card machine', pt: 'card machine', fr: 'card machine', de: 'card machine', it: 'card machine', nl: 'kaartlezer', zh: '刷卡机', ja: 'カードリーダー', ru: 'картридер' },
        },
        {
          id: 'hospitality_restaurant/waiter/tools/cash_register',
          localImage: 'hospitality_restaurant/waiter/tools/cash_register',
          translations: { en: 'cash register', es: 'cash register', pt: 'cash register', fr: 'cash register', de: 'cash register', it: 'cash register', nl: 'kassa', zh: '收银机', ja: 'レジスター', ru: 'кассовый аппарат' },
        },
        {
          id: 'hospitality_restaurant/waiter/tools/cloth',
          localImage: 'hospitality_restaurant/waiter/tools/cloth',
          translations: { en: 'cloth', es: 'trapo', pt: 'pano', fr: 'chiffon', de: 'Tuch', it: 'panno', nl: 'doek', zh: '布', ja: '布', ru: 'ткань' },
        },
        {
          id: 'hospitality_restaurant/waiter/tools/corkscrew',
          localImage: 'hospitality_restaurant/waiter/tools/corkscrew',
          translations: { en: 'corkscrew', es: 'corkscrew', pt: 'corkscrew', fr: 'corkscrew', de: 'corkscrew', it: 'corkscrew', nl: 'kurketrekker', zh: '开瓶器', ja: 'コルクスクリュー', ru: 'штопор' },
        },
        {
          id: 'hospitality_restaurant/waiter/tools/drink_tray',
          localImage: 'hospitality_restaurant/waiter/tools/drink_tray',
          translations: { en: 'drink tray', es: 'drink tray', pt: 'drink tray', fr: 'drink tray', de: 'drink tray', it: 'drink tray', nl: 'drankdienblad', zh: '饮料托盘', ja: 'ドリンクトレイ', ru: 'поднос для напитков' },
        },
        {
          id: 'hospitality_restaurant/waiter/tools/lighter',
          localImage: 'hospitality_restaurant/waiter/tools/lighter',
          translations: { en: 'lighter', es: 'lighter', pt: 'lighter', fr: 'lighter', de: 'lighter', it: 'lighter', nl: 'aansteker', zh: '打火机', ja: 'ライター', ru: 'зажигалка' },
        },
        {
          id: 'hospitality_restaurant/waiter/tools/menu_holder',
          localImage: 'hospitality_restaurant/waiter/tools/menu_holder',
          translations: { en: 'menu holder', es: 'menu holder', pt: 'menu holder', fr: 'menu holder', de: 'menu holder', it: 'menu holder', nl: 'menuhouder', zh: '菜单夹', ja: 'メニューホルダー', ru: 'держатель меню' },
        },
        {
          id: 'hospitality_restaurant/waiter/tools/napkin_holder',
          localImage: 'hospitality_restaurant/waiter/tools/napkin_holder',
          translations: { en: 'napkin holder', es: 'napkin holder', pt: 'napkin holder', fr: 'napkin holder', de: 'napkin holder', it: 'napkin holder', nl: 'servethouder', zh: '餐巾架', ja: 'ナプキンホルダー', ru: 'держатель салфеток' },
        },
        {
          id: 'hospitality_restaurant/waiter/tools/notepad',
          localImage: 'hospitality_restaurant/waiter/tools/notepad',
          translations: { en: 'notepad', es: 'notepad', pt: 'notepad', fr: 'notepad', de: 'notepad', it: 'notepad', nl: 'kladblok', zh: '便签本', ja: 'メモ帳', ru: 'блокнот' },
        },
        {
          id: 'hospitality_restaurant/waiter/tools/order_pad',
          localImage: 'hospitality_restaurant/waiter/tools/order_pad',
          translations: { en: 'order pad', es: 'order pad', pt: 'order pad', fr: 'order pad', de: 'order pad', it: 'order pad', nl: 'bestellijst', zh: '点餐本', ja: 'オーダーパッド', ru: 'блокнот для заказов' },
        },
        {
          id: 'hospitality_restaurant/waiter/tools/pen',
          localImage: 'hospitality_restaurant/waiter/tools/pen',
          translations: { en: 'pen', es: 'bolígrafo', pt: 'caneta', fr: 'stylo', de: 'Stift', it: 'penna', nl: 'pen', zh: '钢笔', ja: 'ペン', ru: 'ручка' },
        },
        {
          id: 'hospitality_restaurant/waiter/tools/pos_system',
          localImage: 'hospitality_restaurant/waiter/tools/pos_system',
          translations: { en: 'pos system', es: 'pos system', pt: 'pos system', fr: 'pos system', de: 'pos system', it: 'pos system', nl: 'kassasysteem', zh: '销售点系统', ja: 'POSシステム', ru: 'POS-система' },
        },
        {
          id: 'hospitality_restaurant/waiter/tools/printer',
          localImage: 'hospitality_restaurant/waiter/tools/printer',
          translations: { en: 'printer', es: 'impresora', pt: 'impressora', fr: 'imprimante', de: 'Drucker', it: 'stampante', nl: 'printer', zh: '打印机', ja: 'プリンター', ru: 'принтер' },
        },
        {
          id: 'hospitality_restaurant/waiter/tools/scanner',
          localImage: 'hospitality_restaurant/waiter/tools/scanner',
          translations: { en: 'scanner', es: 'escáner', pt: 'scanner', fr: 'scanner', de: 'Scanner', it: 'scanner', nl: 'scanner', zh: '扫描仪', ja: 'スキャナー', ru: 'сканер' },
        },
        {
          id: 'hospitality_restaurant/waiter/tools/service_tray',
          localImage: 'hospitality_restaurant/waiter/tools/service_tray',
          translations: { en: 'service tray', es: 'service tray', pt: 'service tray', fr: 'service tray', de: 'service tray', it: 'service tray', nl: 'bedieningsdienblad', zh: '服务托盘', ja: 'サービストレイ', ru: 'сервировочный поднос' },
        },
        {
          id: 'hospitality_restaurant/waiter/tools/tablet',
          localImage: 'hospitality_restaurant/waiter/tools/tablet',
          translations: { en: 'tablet', es: 'tablet', pt: 'tablet', fr: 'tablet', de: 'tablet', it: 'tablet', nl: 'tablet', zh: '平板电脑', ja: 'タブレット', ru: 'планшет' },
        },
        {
          id: 'hospitality_restaurant/waiter/tools/tray',
          localImage: 'hospitality_restaurant/waiter/tools/tray',
          translations: { en: 'tray', es: 'bandeja', pt: 'bandeja', fr: 'plateau', de: 'Tablett', it: 'vassoio', nl: 'dienblad', zh: '托盘', ja: 'トレイ', ru: 'поднос' },
        },
        {
          id: 'hospitality_restaurant/waiter/tools/tray_stand',
          localImage: 'hospitality_restaurant/waiter/tools/tray_stand',
          translations: { en: 'tray stand', es: 'tray stand', pt: 'tray stand', fr: 'tray stand', de: 'tray stand', it: 'tray stand', nl: 'dienblad standaard', zh: '托盘架', ja: 'トレイスタンド', ru: 'подставка для подносов' },
        }
        ],
      },
      {
        id: 'materials',
        name: { en: 'Materials', es: 'Materiales', pt: 'Materiais', fr: 'Matériaux', de: 'Materialien', it: 'Materiali', nl: 'Materialen', zh: '材料', ja: '材料', ru: 'Материалы' },
        icon: '📦',
        items: [
        {
          id: 'hospitality_restaurant/waiter/materials/beer',
          localImage: 'hospitality_restaurant/waiter/materials/beer',
          translations: { en: 'beer', es: 'beer', pt: 'beer', fr: 'beer', de: 'beer', it: 'beer', nl: 'bier', zh: '啤酒', ja: 'ビール', ru: 'пиво' },
        },
        {
          id: 'hospitality_restaurant/waiter/materials/bread',
          localImage: 'hospitality_restaurant/waiter/materials/bread',
          translations: { en: 'bread', es: 'bread', pt: 'bread', fr: 'bread', de: 'bread', it: 'bread', nl: 'brood', zh: '面包', ja: 'パン', ru: 'хлеб' },
        },
        {
          id: 'hospitality_restaurant/waiter/materials/cocktails',
          localImage: 'hospitality_restaurant/waiter/materials/cocktails',
          translations: { en: 'cocktails', es: 'cocktails', pt: 'cocktails', fr: 'cocktails', de: 'cocktails', it: 'cocktails', nl: 'cocktails', zh: '鸡尾酒', ja: 'カクテル', ru: 'коктейли' },
        },
        {
          id: 'hospitality_restaurant/waiter/materials/coffee',
          localImage: 'hospitality_restaurant/waiter/materials/coffee',
          translations: { en: 'coffee', es: 'coffee', pt: 'coffee', fr: 'coffee', de: 'coffee', it: 'coffee', nl: 'koffie', zh: '咖啡', ja: 'コーヒー', ru: 'кофе' },
        },
        {
          id: 'hospitality_restaurant/waiter/materials/condiments',
          localImage: 'hospitality_restaurant/waiter/materials/condiments',
          translations: { en: 'condiments', es: 'condiments', pt: 'condiments', fr: 'condiments', de: 'condiments', it: 'condiments', nl: 'smaakmakers', zh: '调味品', ja: '調味料', ru: 'приправы' },
        },
        {
          id: 'hospitality_restaurant/waiter/materials/cups',
          localImage: 'hospitality_restaurant/waiter/materials/cups',
          translations: { en: 'cups', es: 'cups', pt: 'cups', fr: 'cups', de: 'cups', it: 'cups', nl: 'bekers', zh: '杯子', ja: 'カップ', ru: 'стаканы' },
        },
        {
          id: 'hospitality_restaurant/waiter/materials/cutlery',
          localImage: 'hospitality_restaurant/waiter/materials/cutlery',
          translations: { en: 'cutlery', es: 'cutlery', pt: 'cutlery', fr: 'cutlery', de: 'cutlery', it: 'cutlery', nl: 'bestek', zh: '餐具', ja: 'カトラリー', ru: 'столовые приборы' },
        },
        {
          id: 'hospitality_restaurant/waiter/materials/desserts',
          localImage: 'hospitality_restaurant/waiter/materials/desserts',
          translations: { en: 'desserts', es: 'desserts', pt: 'desserts', fr: 'desserts', de: 'desserts', it: 'desserts', nl: 'desserts', zh: '甜点', ja: 'デザート', ru: 'десерты' },
        },
        {
          id: 'hospitality_restaurant/waiter/materials/drinks',
          localImage: 'hospitality_restaurant/waiter/materials/drinks',
          translations: { en: 'drinks', es: 'drinks', pt: 'drinks', fr: 'drinks', de: 'drinks', it: 'drinks', nl: 'drankjes', zh: '饮料', ja: 'ドリンク', ru: 'напитки' },
        },
        {
          id: 'hospitality_restaurant/waiter/materials/garnish',
          localImage: 'hospitality_restaurant/waiter/materials/garnish',
          translations: { en: 'garnish', es: 'garnish', pt: 'garnish', fr: 'garnish', de: 'garnish', it: 'garnish', nl: 'garnering', zh: '装饰', ja: 'ガーニッシュ', ru: 'украшение' },
        },
        {
          id: 'hospitality_restaurant/waiter/materials/glasses',
          localImage: 'hospitality_restaurant/waiter/materials/glasses',
          translations: { en: 'glasses', es: 'glasses', pt: 'glasses', fr: 'glasses', de: 'glasses', it: 'glasses', nl: 'glazen', zh: '眼镜', ja: 'グラス', ru: 'очки' },
        },
        {
          id: 'hospitality_restaurant/waiter/materials/ice',
          localImage: 'hospitality_restaurant/waiter/materials/ice',
          translations: { en: 'ice', es: 'hielo', pt: 'gelo', fr: 'glace', de: 'Eis', it: 'ghiaccio', nl: 'ijs', zh: '冰块', ja: '氷', ru: 'лед' },
        },
        {
          id: 'hospitality_restaurant/waiter/materials/juice',
          localImage: 'hospitality_restaurant/waiter/materials/juice',
          translations: { en: 'juice', es: 'juice', pt: 'juice', fr: 'juice', de: 'juice', it: 'juice', nl: 'sap', zh: '果汁', ja: 'ジュース', ru: 'сок' },
        },
        {
          id: 'hospitality_restaurant/waiter/materials/lemon',
          localImage: 'hospitality_restaurant/waiter/materials/lemon',
          translations: { en: 'lemon', es: 'lemon', pt: 'lemon', fr: 'lemon', de: 'lemon', it: 'lemon', nl: 'citroen', zh: '柠檬', ja: 'レモン', ru: 'лимон' },
        },
        {
          id: 'hospitality_restaurant/waiter/materials/lime',
          localImage: 'hospitality_restaurant/waiter/materials/lime',
          translations: { en: 'lime', es: 'lime', pt: 'lime', fr: 'lime', de: 'lime', it: 'lime', nl: 'kalk', zh: '石灰', ja: 'ライム', ru: 'известь' },
        },
        {
          id: 'hospitality_restaurant/waiter/materials/menu',
          localImage: 'hospitality_restaurant/waiter/materials/menu',
          translations: { en: 'menu', es: 'menú', pt: 'cardápio', fr: 'menu', de: 'Speisekarte', it: 'menu', nl: 'menu', zh: '菜单', ja: 'メニュー', ru: 'меню' },
        },
        {
          id: 'hospitality_restaurant/waiter/materials/mixer',
          localImage: 'hospitality_restaurant/waiter/materials/mixer',
          translations: { en: 'mixer', es: 'mezclador', pt: 'betoneira', fr: 'mélangeur', de: 'Mischer', it: 'miscelatore', nl: 'mixer', zh: '搅拌机', ja: 'ミキサー', ru: 'миксер' },
        },
        {
          id: 'hospitality_restaurant/waiter/materials/napkins',
          localImage: 'hospitality_restaurant/waiter/materials/napkins',
          translations: { en: 'napkins', es: 'napkins', pt: 'napkins', fr: 'napkins', de: 'napkins', it: 'napkins', nl: 'servetten', zh: '餐巾', ja: 'ナプキン', ru: 'салфетки' },
        },
        {
          id: 'hospitality_restaurant/waiter/materials/pepper',
          localImage: 'hospitality_restaurant/waiter/materials/pepper',
          translations: { en: 'pepper', es: 'pepper', pt: 'pepper', fr: 'pepper', de: 'pepper', it: 'pepper', nl: 'peper', zh: '胡椒', ja: 'コショウ', ru: 'перец' },
        },
        {
          id: 'hospitality_restaurant/waiter/materials/plates',
          localImage: 'hospitality_restaurant/waiter/materials/plates',
          translations: { en: 'plates', es: 'plates', pt: 'plates', fr: 'plates', de: 'plates', it: 'plates', nl: 'borden', zh: '盘子', ja: 'プレート', ru: 'тарелки' },
        },
        {
          id: 'hospitality_restaurant/waiter/materials/salt',
          localImage: 'hospitality_restaurant/waiter/materials/salt',
          translations: { en: 'salt', es: 'salt', pt: 'salt', fr: 'salt', de: 'salt', it: 'salt', nl: 'zout', zh: '盐', ja: '塩', ru: 'соль' },
        },
        {
          id: 'hospitality_restaurant/waiter/materials/sauces',
          localImage: 'hospitality_restaurant/waiter/materials/sauces',
          translations: { en: 'sauces', es: 'sauces', pt: 'sauces', fr: 'sauces', de: 'sauces', it: 'sauces', nl: 'sauzen', zh: '酱汁', ja: 'ソース', ru: 'соусы' },
        },
        {
          id: 'hospitality_restaurant/waiter/materials/soda',
          localImage: 'hospitality_restaurant/waiter/materials/soda',
          translations: { en: 'soda', es: 'soda', pt: 'soda', fr: 'soda', de: 'soda', it: 'soda', nl: 'frisdrank', zh: '苏打水', ja: 'ソーダ', ru: 'газировка' },
        },
        {
          id: 'hospitality_restaurant/waiter/materials/straws',
          localImage: 'hospitality_restaurant/waiter/materials/straws',
          translations: { en: 'straws', es: 'straws', pt: 'straws', fr: 'straws', de: 'straws', it: 'straws', nl: 'rietjes', zh: '吸管', ja: 'ストロー', ru: 'соломинки' },
        },
        {
          id: 'hospitality_restaurant/waiter/materials/sugar_packets',
          localImage: 'hospitality_restaurant/waiter/materials/sugar_packets',
          translations: { en: 'sugar packets', es: 'sugar packets', pt: 'sugar packets', fr: 'sugar packets', de: 'sugar packets', it: 'sugar packets', nl: 'suikerzakjes', zh: '糖包', ja: 'シュガーパケット', ru: 'пакетики с сахаром' },
        },
        {
          id: 'hospitality_restaurant/waiter/materials/tableware',
          localImage: 'hospitality_restaurant/waiter/materials/tableware',
          translations: { en: 'tableware', es: 'tableware', pt: 'tableware', fr: 'tableware', de: 'tableware', it: 'tableware', nl: 'tafelgerei', zh: '餐具', ja: 'テーブルウェア', ru: 'столовая посуда' },
        },
        {
          id: 'hospitality_restaurant/waiter/materials/tea',
          localImage: 'hospitality_restaurant/waiter/materials/tea',
          translations: { en: 'tea', es: 'tea', pt: 'tea', fr: 'tea', de: 'tea', it: 'tea', nl: 'thee', zh: '茶', ja: 'お茶', ru: 'чай' },
        },
        {
          id: 'hospitality_restaurant/waiter/materials/utensils',
          localImage: 'hospitality_restaurant/waiter/materials/utensils',
          translations: { en: 'utensils', es: 'utensils', pt: 'utensils', fr: 'utensils', de: 'utensils', it: 'utensils', nl: 'keukengerei', zh: '器具', ja: '調理器具', ru: 'посуда' },
        },
        {
          id: 'hospitality_restaurant/waiter/materials/water',
          localImage: 'hospitality_restaurant/waiter/materials/water',
          translations: { en: 'water', es: 'agua', pt: 'água', fr: 'eau', de: 'Wasser', it: 'acqua', nl: 'water', zh: '水', ja: '水', ru: 'вода' },
        },
        {
          id: 'hospitality_restaurant/waiter/materials/wine',
          localImage: 'hospitality_restaurant/waiter/materials/wine',
          translations: { en: 'wine', es: 'wine', pt: 'wine', fr: 'wine', de: 'wine', it: 'wine', nl: 'wijn', zh: '葡萄酒', ja: 'ワイン', ru: 'вино' },
        }
        ],
      }
      ],
    }
    ],
  },
  {
    id: 'industrial_processing',
    name: { en: 'Industrial Processing', es: 'Industria', pt: 'Indústria', fr: 'Industrie', de: 'Industrie', it: 'Industria', nl: 'Industriële verwerking', zh: '工业加工', ja: '工業加工', ru: 'Промышленная обработка' },
    icon: '🏭',
    imageUrl: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=800',
    sectors: [
    {
      id: 'fish_processing',
      name: { en: 'Fish Processing', es: 'Procesamiento de Pescado', pt: 'Peixe', fr: 'Poisson', de: 'Fischverarbeitung', it: 'Pesce', nl: 'Visverwerking', zh: '鱼类加工', ja: '魚類加工', ru: 'Рыбопереработка' },
      icon: '🐟',
      roles: [
      {
        id: 'tools',
        name: { en: 'Tools', es: 'Herramientas', pt: 'Ferramentas', fr: 'Outils', de: 'Werkzeuge', it: 'Attrezzi', nl: 'Gereedschap', zh: '工具', ja: '道具', ru: 'Инструменты' },
        icon: '🔧',
        items: [
        {
          id: 'industrial_processing/fish_processing/tools/box',
          localImage: 'industrial_processing/fish_processing/tools/box',
          translations: { en: 'box', es: 'caja', pt: 'caixa', fr: 'boîte', de: 'Kasten', it: 'scatola', nl: 'doos', zh: '箱子', ja: 'ボックス', ru: 'коробка' },
        },
        {
          id: 'industrial_processing/fish_processing/tools/brush',
          localImage: 'industrial_processing/fish_processing/tools/brush',
          translations: { en: 'brush', es: 'cepillo', pt: 'escova', fr: 'brosse', de: 'Bürste', it: 'spazzola', nl: 'borstel', zh: '刷子', ja: 'ブラシ', ru: 'кисть' },
        },
        {
          id: 'industrial_processing/fish_processing/tools/bucket',
          localImage: 'industrial_processing/fish_processing/tools/bucket',
          translations: { en: 'bucket', es: 'cubo', pt: 'balde', fr: 'seau', de: 'Eimer', it: 'secchio', nl: 'emmer', zh: '水桶', ja: 'バケツ', ru: 'ведро' },
        },
        {
          id: 'industrial_processing/fish_processing/tools/cart',
          localImage: 'industrial_processing/fish_processing/tools/cart',
          translations: { en: 'cart', es: 'carrito', pt: 'carrinho', fr: 'chariot', de: 'Wagen', it: 'carrello', nl: 'kar', zh: '推车', ja: 'カート', ru: 'тележка' },
        },
        {
          id: 'industrial_processing/fish_processing/tools/container',
          localImage: 'industrial_processing/fish_processing/tools/container',
          translations: { en: 'container', es: 'contenedor', pt: 'recipiente', fr: 'conteneur', de: 'Behälter', it: 'contenitore', nl: 'container', zh: '容器', ja: 'コンテナ', ru: 'контейнер' },
        },
        {
          id: 'industrial_processing/fish_processing/tools/cooling_box',
          localImage: 'industrial_processing/fish_processing/tools/cooling_box',
          translations: { en: 'cooling box', es: 'cooling box', pt: 'cooling box', fr: 'cooling box', de: 'cooling box', it: 'cooling box', nl: 'koelbox', zh: '冷却箱', ja: 'クーリングボックス', ru: 'холодильный ящик' },
        },
        {
          id: 'industrial_processing/fish_processing/tools/cutter',
          localImage: 'industrial_processing/fish_processing/tools/cutter',
          translations: { en: 'cutter', es: 'cortador', pt: 'cortador', fr: 'cutter', de: 'Cutter', it: 'taglierino', nl: 'snijder', zh: '切割机', ja: 'カッター', ru: 'резак' },
        },
        {
          id: 'industrial_processing/fish_processing/tools/cutting_board',
          localImage: 'industrial_processing/fish_processing/tools/cutting_board',
          translations: { en: 'cutting board', es: 'cutting board', pt: 'cutting board', fr: 'cutting board', de: 'cutting board', it: 'cutting board', nl: 'snijplank', zh: '切菜板', ja: 'まな板', ru: 'разделочная доска' },
        },
        {
          id: 'industrial_processing/fish_processing/tools/filter',
          localImage: 'industrial_processing/fish_processing/tools/filter',
          translations: { en: 'filter', es: 'filtro', pt: 'filtro', fr: 'filtre', de: 'Filter', it: 'filtro', nl: 'filter', zh: '过滤器', ja: 'フィルター', ru: 'фильтр' },
        },
        {
          id: 'industrial_processing/fish_processing/tools/freezer',
          localImage: 'industrial_processing/fish_processing/tools/freezer',
          translations: { en: 'freezer', es: 'congelador', pt: 'freezer', fr: 'congélateur', de: 'Gefriergerät', it: 'freezer', nl: 'vriezer', zh: '冷冻机', ja: '冷凍庫', ru: 'морозильник' },
        },
        {
          id: 'industrial_processing/fish_processing/tools/ice_box',
          localImage: 'industrial_processing/fish_processing/tools/ice_box',
          translations: { en: 'ice box', es: 'ice box', pt: 'ice box', fr: 'ice box', de: 'ice box', it: 'ice box', nl: 'koelbox', zh: '冰箱', ja: 'アイスボックス', ru: 'ящик со льдом' },
        },
        {
          id: 'industrial_processing/fish_processing/tools/ice_machine',
          localImage: 'industrial_processing/fish_processing/tools/ice_machine',
          translations: { en: 'ice machine', es: 'ice machine', pt: 'ice machine', fr: 'ice machine', de: 'ice machine', it: 'ice machine', nl: 'ijsmachine', zh: '制冰机', ja: '製氷機', ru: 'льдогенератор' },
        },
        {
          id: 'industrial_processing/fish_processing/tools/knife',
          localImage: 'industrial_processing/fish_processing/tools/knife',
          translations: { en: 'knife', es: 'cuchillo', pt: 'faca', fr: 'couteau', de: 'Messer', it: 'coltello', nl: 'mes', zh: '刀', ja: 'ナイフ', ru: 'нож' },
        },
        {
          id: 'industrial_processing/fish_processing/tools/machine',
          localImage: 'industrial_processing/fish_processing/tools/machine',
          translations: { en: 'machine', es: 'machine', pt: 'machine', fr: 'machine', de: 'machine', it: 'machine', nl: 'machine', zh: '机器', ja: '機械', ru: 'машина' },
        },
        {
          id: 'industrial_processing/fish_processing/tools/pallet',
          localImage: 'industrial_processing/fish_processing/tools/pallet',
          translations: { en: 'pallet', es: 'palé', pt: 'palete', fr: 'palette', de: 'Palette', it: 'pallet', nl: 'pallet', zh: '托盘', ja: 'パレット', ru: 'паллет' },
        },
        {
          id: 'industrial_processing/fish_processing/tools/pump',
          localImage: 'industrial_processing/fish_processing/tools/pump',
          translations: { en: 'pump', es: 'bomba', pt: 'bomba', fr: 'pompe', de: 'Pumpe', it: 'pompa', nl: 'pomp', zh: '泵', ja: 'ポンプ', ru: 'насос' },
        },
        {
          id: 'industrial_processing/fish_processing/tools/rack',
          localImage: 'industrial_processing/fish_processing/tools/rack',
          translations: { en: 'rack', es: 'estante', pt: 'prateleira', fr: 'étagère', de: 'Regal', it: 'scaffale', nl: 'rek', zh: '货架', ja: 'ラック', ru: 'стеллаж' },
        },
        {
          id: 'industrial_processing/fish_processing/tools/scale',
          localImage: 'industrial_processing/fish_processing/tools/scale',
          translations: { en: 'scale', es: 'báscula', pt: 'balança', fr: 'balance', de: 'Waage', it: 'bilancia', nl: 'weegschaal', zh: '秤', ja: 'スケール', ru: 'весы' },
        },
        {
          id: 'industrial_processing/fish_processing/tools/shelf',
          localImage: 'industrial_processing/fish_processing/tools/shelf',
          translations: { en: 'shelf', es: 'shelf', pt: 'shelf', fr: 'shelf', de: 'shelf', it: 'shelf', nl: 'plank', zh: '架子', ja: '棚', ru: 'полка' },
        },
        {
          id: 'industrial_processing/fish_processing/tools/sink',
          localImage: 'industrial_processing/fish_processing/tools/sink',
          translations: { en: 'sink', es: 'sink', pt: 'sink', fr: 'sink', de: 'sink', it: 'sink', nl: 'gootsteen', zh: '水槽', ja: 'シンク', ru: 'раковина' },
        },
        {
          id: 'industrial_processing/fish_processing/tools/spray',
          localImage: 'industrial_processing/fish_processing/tools/spray',
          translations: { en: 'spray', es: 'spray', pt: 'spray', fr: 'spray', de: 'Spray', it: 'spray', nl: 'spray', zh: '喷雾', ja: 'スプレー', ru: 'спрей' },
        },
        {
          id: 'industrial_processing/fish_processing/tools/storage',
          localImage: 'industrial_processing/fish_processing/tools/storage',
          translations: { en: 'storage', es: 'storage', pt: 'storage', fr: 'storage', de: 'storage', it: 'storage', nl: 'opslag', zh: '储存', ja: '保管', ru: 'хранение' },
        },
        {
          id: 'industrial_processing/fish_processing/tools/table',
          localImage: 'industrial_processing/fish_processing/tools/table',
          translations: { en: 'table', es: 'mesa', pt: 'mesa', fr: 'table', de: 'Tisch', it: 'tavolo', nl: 'tafel', zh: '桌子', ja: 'テーブル', ru: 'стол' },
        },
        {
          id: 'industrial_processing/fish_processing/tools/tank',
          localImage: 'industrial_processing/fish_processing/tools/tank',
          translations: { en: 'tank', es: 'tanque', pt: 'tanque', fr: 'réservoir', de: 'Tank', it: 'serbatoio', nl: 'tank', zh: '容器', ja: 'タンク', ru: 'резервуар' },
        },
        {
          id: 'industrial_processing/fish_processing/tools/tray',
          localImage: 'industrial_processing/fish_processing/tools/tray',
          translations: { en: 'tray', es: 'bandeja', pt: 'bandeja', fr: 'plateau', de: 'Tablett', it: 'vassoio', nl: 'dienblad', zh: '托盘', ja: 'トレイ', ru: 'поднос' },
        },
        {
          id: 'industrial_processing/fish_processing/tools/trolley',
          localImage: 'industrial_processing/fish_processing/tools/trolley',
          translations: { en: 'trolley', es: 'carrito', pt: 'carrinho', fr: 'chariot', de: 'Trolley', it: 'carrello', nl: 'trolley', zh: '手推车', ja: 'トロリー', ru: 'тележка' },
        },
        {
          id: 'industrial_processing/fish_processing/tools/water_hose',
          localImage: 'industrial_processing/fish_processing/tools/water_hose',
          translations: { en: 'water hose', es: 'water hose', pt: 'water hose', fr: 'water hose', de: 'water hose', it: 'water hose', nl: 'waterslang', zh: '水管', ja: '水ホース', ru: 'водяной шланг' },
        }
        ],
      },
      {
        id: 'materials',
        name: { en: 'Materials', es: 'Materiales', pt: 'Materiais', fr: 'Matériaux', de: 'Materialien', it: 'Materiali', nl: 'Materialen', zh: '材料', ja: '材料', ru: 'Материалы' },
        icon: '📦',
        items: [
        {
          id: 'industrial_processing/fish_processing/materials/apron',
          localImage: 'industrial_processing/fish_processing/materials/apron',
          translations: { en: 'apron', es: 'delantal', pt: 'avental', fr: 'tablier', de: 'Schürze', it: 'grembiule', nl: 'schort', zh: '围裙', ja: 'エプロン', ru: 'фартук' },
        },
        {
          id: 'industrial_processing/fish_processing/materials/bag',
          localImage: 'industrial_processing/fish_processing/materials/bag',
          translations: { en: 'bag', es: 'bolsa', pt: 'saco', fr: 'sac', de: 'Tasche', it: 'borsa', nl: 'tas', zh: '袋子', ja: 'バッグ', ru: 'сумка' },
        },
        {
          id: 'industrial_processing/fish_processing/materials/boots',
          localImage: 'industrial_processing/fish_processing/materials/boots',
          translations: { en: 'boots', es: 'botas', pt: 'botas', fr: 'bottes', de: 'Stiefel', it: 'stivali', nl: 'laarzen', zh: '靴子', ja: 'ブーツ', ru: 'ботинки' },
        },
        {
          id: 'industrial_processing/fish_processing/materials/cleaner',
          localImage: 'industrial_processing/fish_processing/materials/cleaner',
          translations: { en: 'cleaner', es: 'cleaner', pt: 'cleaner', fr: 'cleaner', de: 'cleaner', it: 'cleaner', nl: 'reiniger', zh: '清洁剂', ja: '洗浄剤', ru: 'чистящее средство' },
        },
        {
          id: 'industrial_processing/fish_processing/materials/cloth',
          localImage: 'industrial_processing/fish_processing/materials/cloth',
          translations: { en: 'cloth', es: 'trapo', pt: 'pano', fr: 'chiffon', de: 'Tuch', it: 'panno', nl: 'doek', zh: '布', ja: '布', ru: 'ткань' },
        },
        {
          id: 'industrial_processing/fish_processing/materials/gloves',
          localImage: 'industrial_processing/fish_processing/materials/gloves',
          translations: { en: 'gloves', es: 'guantes', pt: 'luvas', fr: 'gants', de: 'Handschuhe', it: 'guanti', nl: 'handschoenen', zh: '手套', ja: '手袋', ru: 'перчатки' },
        },
        {
          id: 'industrial_processing/fish_processing/materials/goggles',
          localImage: 'industrial_processing/fish_processing/materials/goggles',
          translations: { en: 'goggles', es: 'gafas protectoras', pt: 'óculos de proteção', fr: 'lunettes', de: 'Schutzbrille', it: 'occhiali', nl: 'veiligheidsbril', zh: '护目镜', ja: 'ゴーグル', ru: 'защитные очки' },
        },
        {
          id: 'industrial_processing/fish_processing/materials/helmet',
          localImage: 'industrial_processing/fish_processing/materials/helmet',
          translations: { en: 'helmet', es: 'casco', pt: 'capacete', fr: 'casque', de: 'Helm', it: 'casco', nl: 'helm', zh: '安全帽', ja: 'ヘルメット', ru: 'каска' },
        },
        {
          id: 'industrial_processing/fish_processing/materials/ice',
          localImage: 'industrial_processing/fish_processing/materials/ice',
          translations: { en: 'ice', es: 'hielo', pt: 'gelo', fr: 'glace', de: 'Eis', it: 'ghiaccio', nl: 'ijs', zh: '冰块', ja: '氷', ru: 'лед' },
        },
        {
          id: 'industrial_processing/fish_processing/materials/label',
          localImage: 'industrial_processing/fish_processing/materials/label',
          translations: { en: 'label', es: 'etiqueta', pt: 'etiqueta', fr: 'étiquette', de: 'Etikett', it: 'etichetta', nl: 'etiket', zh: '标签', ja: 'ラベル', ru: 'этикетка' },
        },
        {
          id: 'industrial_processing/fish_processing/materials/marker',
          localImage: 'industrial_processing/fish_processing/materials/marker',
          translations: { en: 'marker', es: 'marcador', pt: 'marcador', fr: 'marqueur', de: 'Marker', it: 'pennarello', nl: 'marker', zh: '记号笔', ja: 'マーカー', ru: 'маркер' },
        },
        {
          id: 'industrial_processing/fish_processing/materials/mask',
          localImage: 'industrial_processing/fish_processing/materials/mask',
          translations: { en: 'mask', es: 'mascarilla', pt: 'máscara', fr: 'masque', de: 'Maske', it: 'maschera', nl: 'masker', zh: '口罩', ja: 'マスク', ru: 'маска' },
        },
        {
          id: 'industrial_processing/fish_processing/materials/plastic',
          localImage: 'industrial_processing/fish_processing/materials/plastic',
          translations: { en: 'plastic', es: 'plastic', pt: 'plastic', fr: 'plastic', de: 'plastic', it: 'plastic', nl: 'plastic', zh: '塑料', ja: 'プラスチック', ru: 'пластик' },
        },
        {
          id: 'industrial_processing/fish_processing/materials/seal',
          localImage: 'industrial_processing/fish_processing/materials/seal',
          translations: { en: 'seal', es: 'seal', pt: 'seal', fr: 'seal', de: 'seal', it: 'seal', nl: 'afdichting', zh: '密封件', ja: 'シール', ru: 'уплотнение' },
        },
        {
          id: 'industrial_processing/fish_processing/materials/tape',
          localImage: 'industrial_processing/fish_processing/materials/tape',
          translations: { en: 'tape', es: 'cinta', pt: 'fita', fr: 'ruban', de: 'Klebeband', it: 'nastro', nl: 'tape', zh: '胶带', ja: 'テープ', ru: 'лента' },
        },
        {
          id: 'industrial_processing/fish_processing/materials/tool_kit',
          localImage: 'industrial_processing/fish_processing/materials/tool_kit',
          translations: { en: 'tool kit', es: 'tool kit', pt: 'tool kit', fr: 'tool kit', de: 'tool kit', it: 'tool kit', nl: 'gereedschapsset', zh: '工具套装', ja: 'ツールキット', ru: 'набор инструментов' },
        },
        {
          id: 'industrial_processing/fish_processing/materials/vest',
          localImage: 'industrial_processing/fish_processing/materials/vest',
          translations: { en: 'vest', es: 'chaleco', pt: 'colete', fr: 'gilet', de: 'Weste', it: 'gilet', nl: 'vest', zh: '背心', ja: 'ベスト', ru: 'жилет' },
        },
        {
          id: 'industrial_processing/fish_processing/materials/wrap',
          localImage: 'industrial_processing/fish_processing/materials/wrap',
          translations: { en: 'wrap', es: 'wrap', pt: 'wrap', fr: 'wrap', de: 'wrap', it: 'wrap', nl: 'folie', zh: '包装', ja: 'ラップ', ru: 'обертка' },
        }
        ],
      }
      ],
    },
    {
      id: 'mining_blasting',
      name: { en: 'Mining Blasting', es: 'Explosivos', pt: 'Explosivos', fr: 'Minage', de: 'Sprengung', it: 'Brillamento', nl: 'Mijnbouw springen', zh: '矿山爆破', ja: '採掘爆破', ru: 'Горнодобывающие взрывные работы' },
      icon: '💥',
      roles: [
      {
        id: 'tools',
        name: { en: 'Tools', es: 'Herramientas', pt: 'Ferramentas', fr: 'Outils', de: 'Werkzeuge', it: 'Attrezzi', nl: 'Gereedschap', zh: '工具', ja: '道具', ru: 'Инструменты' },
        icon: '🔧',
        items: [
        {
          id: 'industrial_processing/mining_blasting/tools/alarm',
          localImage: 'industrial_processing/mining_blasting/tools/alarm',
          translations: { en: 'alarm', es: 'alarm', pt: 'alarm', fr: 'alarm', de: 'alarm', it: 'alarm', nl: 'alarm', zh: '警报器', ja: 'アラーム', ru: 'сигнализация' },
        },
        {
          id: 'industrial_processing/mining_blasting/tools/battery',
          localImage: 'industrial_processing/mining_blasting/tools/battery',
          translations: { en: 'battery', es: 'battery', pt: 'battery', fr: 'battery', de: 'battery', it: 'battery', nl: 'batterij', zh: '电池', ja: 'バッテリー', ru: 'батарея' },
        },
        {
          id: 'industrial_processing/mining_blasting/tools/blasting_cap',
          localImage: 'industrial_processing/mining_blasting/tools/blasting_cap',
          translations: { en: 'blasting cap', es: 'blasting cap', pt: 'blasting cap', fr: 'blasting cap', de: 'blasting cap', it: 'blasting cap', nl: 'ontsteker', zh: '雷管', ja: '雷管', ru: 'детонатор' },
        },
        {
          id: 'industrial_processing/mining_blasting/tools/cable',
          localImage: 'industrial_processing/mining_blasting/tools/cable',
          translations: { en: 'cable', es: 'cable', pt: 'cable', fr: 'cable', de: 'cable', it: 'cable', nl: 'kabel', zh: '电缆', ja: 'ケーブル', ru: 'кабель' },
        },
        {
          id: 'industrial_processing/mining_blasting/tools/charger',
          localImage: 'industrial_processing/mining_blasting/tools/charger',
          translations: { en: 'charger', es: 'charger', pt: 'charger', fr: 'charger', de: 'charger', it: 'charger', nl: 'oplader', zh: '充电器', ja: '充電器', ru: 'зарядное устройство' },
        },
        {
          id: 'industrial_processing/mining_blasting/tools/clamp',
          localImage: 'industrial_processing/mining_blasting/tools/clamp',
          translations: { en: 'clamp', es: 'clamp', pt: 'clamp', fr: 'clamp', de: 'clamp', it: 'clamp', nl: 'klem', zh: '夹具', ja: 'クランプ', ru: 'зажим' },
        },
        {
          id: 'industrial_processing/mining_blasting/tools/container',
          localImage: 'industrial_processing/mining_blasting/tools/container',
          translations: { en: 'container', es: 'contenedor', pt: 'recipiente', fr: 'conteneur', de: 'Behälter', it: 'contenitore', nl: 'container', zh: '容器', ja: 'コンテナ', ru: 'контейнер' },
        },
        {
          id: 'industrial_processing/mining_blasting/tools/control_box',
          localImage: 'industrial_processing/mining_blasting/tools/control_box',
          translations: { en: 'control box', es: 'control box', pt: 'control box', fr: 'control box', de: 'control box', it: 'control box', nl: 'bedieningsdoos', zh: '控制箱', ja: 'コントロールボックス', ru: 'блок управления' },
        },
        {
          id: 'industrial_processing/mining_blasting/tools/detector',
          localImage: 'industrial_processing/mining_blasting/tools/detector',
          translations: { en: 'detector', es: 'detector', pt: 'detector', fr: 'detector', de: 'detector', it: 'detector', nl: 'detector', zh: '探测器', ja: 'ディテクター', ru: 'детектор' },
        },
        {
          id: 'industrial_processing/mining_blasting/tools/detonator',
          localImage: 'industrial_processing/mining_blasting/tools/detonator',
          translations: { en: 'detonator', es: 'detonator', pt: 'detonator', fr: 'detonator', de: 'detonator', it: 'detonator', nl: 'detonator', zh: '引爆器', ja: '起爆装置', ru: 'детонатор' },
        },
        {
          id: 'industrial_processing/mining_blasting/tools/dynamite',
          localImage: 'industrial_processing/mining_blasting/tools/dynamite',
          translations: { en: 'dynamite', es: 'dynamite', pt: 'dynamite', fr: 'dynamite', de: 'dynamite', it: 'dynamite', nl: 'dynamiet', zh: '炸药', ja: 'ダイナマイト', ru: 'динамит' },
        },
        {
          id: 'industrial_processing/mining_blasting/tools/explosive',
          localImage: 'industrial_processing/mining_blasting/tools/explosive',
          translations: { en: 'explosive', es: 'explosive', pt: 'explosive', fr: 'explosive', de: 'explosive', it: 'explosive', nl: 'explosief', zh: '炸药', ja: '爆発物', ru: 'взрывчатое вещество' },
        },
        {
          id: 'industrial_processing/mining_blasting/tools/fuse',
          localImage: 'industrial_processing/mining_blasting/tools/fuse',
          translations: { en: 'fuse', es: 'fuse', pt: 'fuse', fr: 'fuse', de: 'fuse', it: 'fuse', nl: 'zekering', zh: '保险丝', ja: 'ヒューズ', ru: 'предохранитель' },
        },
        {
          id: 'industrial_processing/mining_blasting/tools/gas_detector',
          localImage: 'industrial_processing/mining_blasting/tools/gas_detector',
          translations: { en: 'gas detector', es: 'gas detector', pt: 'gas detector', fr: 'gas detector', de: 'gas detector', it: 'gas detector', nl: 'gasdetector', zh: '气体探测器', ja: 'ガスディテクター', ru: 'газодетектор' },
        },
        {
          id: 'industrial_processing/mining_blasting/tools/igniter',
          localImage: 'industrial_processing/mining_blasting/tools/igniter',
          translations: { en: 'igniter', es: 'igniter', pt: 'igniter', fr: 'igniter', de: 'igniter', it: 'igniter', nl: 'ontsteker', zh: '点火器', ja: 'イグナイター', ru: 'запал' },
        },
        {
          id: 'industrial_processing/mining_blasting/tools/key',
          localImage: 'industrial_processing/mining_blasting/tools/key',
          translations: { en: 'key', es: 'key', pt: 'key', fr: 'key', de: 'key', it: 'key', nl: 'sleutel', zh: '钥匙', ja: '鍵', ru: 'ключ' },
        },
        {
          id: 'industrial_processing/mining_blasting/tools/label',
          localImage: 'industrial_processing/mining_blasting/tools/label',
          translations: { en: 'label', es: 'etiqueta', pt: 'etiqueta', fr: 'étiquette', de: 'Etikett', it: 'etichetta', nl: 'etiket', zh: '标签', ja: 'ラベル', ru: 'этикетка' },
        },
        {
          id: 'industrial_processing/mining_blasting/tools/level',
          localImage: 'industrial_processing/mining_blasting/tools/level',
          translations: { en: 'level', es: 'nivel', pt: 'nível', fr: 'niveau', de: 'Wasserwaage', it: 'livella', nl: 'waterpas', zh: '水平仪', ja: '水平器', ru: 'уровень' },
        },
        {
          id: 'industrial_processing/mining_blasting/tools/lock',
          localImage: 'industrial_processing/mining_blasting/tools/lock',
          translations: { en: 'lock', es: 'lock', pt: 'lock', fr: 'lock', de: 'lock', it: 'lock', nl: 'slot', zh: '锁', ja: '鍵', ru: 'замок' },
        },
        {
          id: 'industrial_processing/mining_blasting/tools/marker',
          localImage: 'industrial_processing/mining_blasting/tools/marker',
          translations: { en: 'marker', es: 'marcador', pt: 'marcador', fr: 'marqueur', de: 'Marker', it: 'pennarello', nl: 'marker', zh: '记号笔', ja: 'マーカー', ru: 'маркер' },
        },
        {
          id: 'industrial_processing/mining_blasting/tools/measuring_tape',
          localImage: 'industrial_processing/mining_blasting/tools/measuring_tape',
          translations: { en: 'measuring tape', es: 'measuring tape', pt: 'measuring tape', fr: 'measuring tape', de: 'measuring tape', it: 'measuring tape', nl: 'meetlint', zh: '卷尺', ja: 'メジャー', ru: 'рулетка' },
        },
        {
          id: 'industrial_processing/mining_blasting/tools/meter',
          localImage: 'industrial_processing/mining_blasting/tools/meter',
          translations: { en: 'meter', es: 'medidor', pt: 'medidor', fr: 'mètre', de: 'Messgerät', it: 'metro', nl: 'meter', zh: '仪表', ja: 'メーター', ru: 'счетчик' },
        },
        {
          id: 'industrial_processing/mining_blasting/tools/monitor',
          localImage: 'industrial_processing/mining_blasting/tools/monitor',
          translations: { en: 'monitor', es: 'monitor', pt: 'monitor', fr: 'monitor', de: 'monitor', it: 'monitor', nl: 'monitor', zh: '显示器', ja: 'モニター', ru: 'монитор' },
        },
        {
          id: 'industrial_processing/mining_blasting/tools/radio',
          localImage: 'industrial_processing/mining_blasting/tools/radio',
          translations: { en: 'radio', es: 'radio', pt: 'radio', fr: 'radio', de: 'radio', it: 'radio', nl: 'radio', zh: '收音机', ja: 'ラジオ', ru: 'радио' },
        },
        {
          id: 'industrial_processing/mining_blasting/tools/remote',
          localImage: 'industrial_processing/mining_blasting/tools/remote',
          translations: { en: 'remote', es: 'remote', pt: 'remote', fr: 'remote', de: 'remote', it: 'remote', nl: 'afstandsbediening', zh: '遥控器', ja: 'リモコン', ru: 'пульт управления' },
        },
        {
          id: 'industrial_processing/mining_blasting/tools/screwdriver',
          localImage: 'industrial_processing/mining_blasting/tools/screwdriver',
          translations: { en: 'screwdriver', es: 'screwdriver', pt: 'screwdriver', fr: 'screwdriver', de: 'screwdriver', it: 'screwdriver', nl: 'schroevendraaier', zh: '螺丝刀', ja: 'ドライバー', ru: 'отвертка' },
        },
        {
          id: 'industrial_processing/mining_blasting/tools/sensor',
          localImage: 'industrial_processing/mining_blasting/tools/sensor',
          translations: { en: 'sensor', es: 'sensor', pt: 'sensor', fr: 'sensor', de: 'sensor', it: 'sensor', nl: 'sensor', zh: '传感器', ja: 'センサー', ru: 'датчик' },
        },
        {
          id: 'industrial_processing/mining_blasting/tools/signal_device',
          localImage: 'industrial_processing/mining_blasting/tools/signal_device',
          translations: { en: 'signal device', es: 'signal device', pt: 'signal device', fr: 'signal device', de: 'signal device', it: 'signal device', nl: 'signaleringsapparaat', zh: '信号装置', ja: 'シグナルデバイス', ru: 'сигнальное устройство' },
        },
        {
          id: 'industrial_processing/mining_blasting/tools/siren',
          localImage: 'industrial_processing/mining_blasting/tools/siren',
          translations: { en: 'siren', es: 'siren', pt: 'siren', fr: 'siren', de: 'siren', it: 'siren', nl: 'sirene', zh: '警报器', ja: 'サイレン', ru: 'сирена' },
        },
        {
          id: 'industrial_processing/mining_blasting/tools/spray_paint',
          localImage: 'industrial_processing/mining_blasting/tools/spray_paint',
          translations: { en: 'spray paint', es: 'spray paint', pt: 'spray paint', fr: 'spray paint', de: 'spray paint', it: 'spray paint', nl: 'spuitverf', zh: '喷漆', ja: 'スプレーペイント', ru: 'аэрозольная краска' },
        },
        {
          id: 'industrial_processing/mining_blasting/tools/storage_box',
          localImage: 'industrial_processing/mining_blasting/tools/storage_box',
          translations: { en: 'storage box', es: 'storage box', pt: 'storage box', fr: 'storage box', de: 'storage box', it: 'storage box', nl: 'opslagdoos', zh: '储物箱', ja: '収納ボックス', ru: 'ящик для хранения' },
        },
        {
          id: 'industrial_processing/mining_blasting/tools/switch',
          localImage: 'industrial_processing/mining_blasting/tools/switch',
          translations: { en: 'switch', es: 'switch', pt: 'switch', fr: 'switch', de: 'switch', it: 'switch', nl: 'schakelaar', zh: '开关', ja: 'スイッチ', ru: 'выключатель' },
        },
        {
          id: 'industrial_processing/mining_blasting/tools/tape',
          localImage: 'industrial_processing/mining_blasting/tools/tape',
          translations: { en: 'tape', es: 'cinta', pt: 'fita', fr: 'ruban', de: 'Klebeband', it: 'nastro', nl: 'tape', zh: '胶带', ja: 'テープ', ru: 'лента' },
        },
        {
          id: 'industrial_processing/mining_blasting/tools/tester',
          localImage: 'industrial_processing/mining_blasting/tools/tester',
          translations: { en: 'tester', es: 'tester', pt: 'tester', fr: 'tester', de: 'tester', it: 'tester', nl: 'tester', zh: '测试仪', ja: 'テスター', ru: 'тестер' },
        },
        {
          id: 'industrial_processing/mining_blasting/tools/timer',
          localImage: 'industrial_processing/mining_blasting/tools/timer',
          translations: { en: 'timer', es: 'timer', pt: 'timer', fr: 'timer', de: 'timer', it: 'timer', nl: 'timer', zh: '计时器', ja: 'タイマー', ru: 'таймер' },
        },
        {
          id: 'industrial_processing/mining_blasting/tools/toolkit',
          localImage: 'industrial_processing/mining_blasting/tools/toolkit',
          translations: { en: 'toolkit', es: 'toolkit', pt: 'toolkit', fr: 'toolkit', de: 'toolkit', it: 'toolkit', nl: 'toolkit', zh: '工具组件', ja: 'ツールキット', ru: 'набор инструментов' },
        },
        {
          id: 'industrial_processing/mining_blasting/tools/trigger',
          localImage: 'industrial_processing/mining_blasting/tools/trigger',
          translations: { en: 'trigger', es: 'trigger', pt: 'trigger', fr: 'trigger', de: 'trigger', it: 'trigger', nl: 'trekker', zh: '扳机', ja: 'トリガー', ru: 'курок' },
        },
        {
          id: 'industrial_processing/mining_blasting/tools/wire',
          localImage: 'industrial_processing/mining_blasting/tools/wire',
          translations: { en: 'wire', es: 'wire', pt: 'wire', fr: 'wire', de: 'wire', it: 'wire', nl: 'draad', zh: '电线', ja: 'ワイヤー', ru: 'провод' },
        },
        {
          id: 'industrial_processing/mining_blasting/tools/wrench',
          localImage: 'industrial_processing/mining_blasting/tools/wrench',
          translations: { en: 'wrench', es: 'llave', pt: 'chave inglesa', fr: 'clé', de: 'Schraubenschlüssel', it: 'chiave', nl: 'moersleutel', zh: '扳手', ja: 'レンチ', ru: 'гаечный ключ' },
        }
        ],
      },
      {
        id: 'materials',
        name: { en: 'Materials', es: 'Materiales', pt: 'Materiais', fr: 'Matériaux', de: 'Materialien', it: 'Materiali', nl: 'Materialen', zh: '材料', ja: '材料', ru: 'Материалы' },
        icon: '📦',
        items: [
        {
          id: 'industrial_processing/mining_blasting/materials/explosives',
          localImage: 'industrial_processing/mining_blasting/materials/explosives',
          translations: { en: 'explosives', es: 'explosives', pt: 'explosives', fr: 'explosives', de: 'explosives', it: 'explosives', nl: 'explosieven', zh: '炸药', ja: '爆発物', ru: 'взрывчатые вещества' },
        },
        {
          id: 'industrial_processing/mining_blasting/materials/fuel',
          localImage: 'industrial_processing/mining_blasting/materials/fuel',
          translations: { en: 'fuel', es: 'fuel', pt: 'fuel', fr: 'fuel', de: 'fuel', it: 'fuel', nl: 'brandstof', zh: '燃料', ja: '燃料', ru: 'топливо' },
        },
        {
          id: 'industrial_processing/mining_blasting/materials/safety_materials',
          localImage: 'industrial_processing/mining_blasting/materials/safety_materials',
          translations: { en: 'safety materials', es: 'safety materials', pt: 'safety materials', fr: 'safety materials', de: 'safety materials', it: 'safety materials', nl: 'veiligheidsmaterialen', zh: '安全材料', ja: '安全材料', ru: 'защитные материалы' },
        },
        {
          id: 'industrial_processing/mining_blasting/materials/wires',
          localImage: 'industrial_processing/mining_blasting/materials/wires',
          translations: { en: 'wires', es: 'wires', pt: 'wires', fr: 'wires', de: 'wires', it: 'wires', nl: 'draden', zh: '电线', ja: 'ワイヤー', ru: 'провода' },
        }
        ],
      }
      ],
    },
    {
      id: 'mining_drilling',
      name: { en: 'Mining Drilling', es: 'Perforación', pt: 'Perfuração', fr: 'Forage', de: 'Bohren', it: 'Perforazione', nl: 'Mijnbouw boren', zh: '矿山钻探', ja: '採掘掘削', ru: 'Горнодобывающее бурение' },
      icon: '⛏️',
      roles: [
      {
        id: 'tools',
        name: { en: 'Tools', es: 'Herramientas', pt: 'Ferramentas', fr: 'Outils', de: 'Werkzeuge', it: 'Attrezzi', nl: 'Gereedschap', zh: '工具', ja: '道具', ru: 'Инструменты' },
        icon: '🔧',
        items: [
        {
          id: 'industrial_processing/mining_drilling/tools/air_hose',
          localImage: 'industrial_processing/mining_drilling/tools/air_hose',
          translations: { en: 'air hose', es: 'air hose', pt: 'air hose', fr: 'air hose', de: 'air hose', it: 'air hose', nl: 'luchtslang', zh: '气管', ja: 'エアホース', ru: 'воздушный шланг' },
        },
        {
          id: 'industrial_processing/mining_drilling/tools/battery',
          localImage: 'industrial_processing/mining_drilling/tools/battery',
          translations: { en: 'battery', es: 'battery', pt: 'battery', fr: 'battery', de: 'battery', it: 'battery', nl: 'batterij', zh: '电池', ja: 'バッテリー', ru: 'батарея' },
        },
        {
          id: 'industrial_processing/mining_drilling/tools/bolt',
          localImage: 'industrial_processing/mining_drilling/tools/bolt',
          translations: { en: 'bolt', es: 'bolt', pt: 'bolt', fr: 'bolt', de: 'bolt', it: 'bolt', nl: 'bout', zh: '螺栓', ja: 'ボルト', ru: 'болт' },
        },
        {
          id: 'industrial_processing/mining_drilling/tools/button',
          localImage: 'industrial_processing/mining_drilling/tools/button',
          translations: { en: 'button', es: 'button', pt: 'button', fr: 'button', de: 'button', it: 'button', nl: 'knop', zh: '按钮', ja: 'ボタン', ru: 'кнопка' },
        },
        {
          id: 'industrial_processing/mining_drilling/tools/cable',
          localImage: 'industrial_processing/mining_drilling/tools/cable',
          translations: { en: 'cable', es: 'cable', pt: 'cable', fr: 'cable', de: 'cable', it: 'cable', nl: 'kabel', zh: '电缆', ja: 'ケーブル', ru: 'кабель' },
        },
        {
          id: 'industrial_processing/mining_drilling/tools/charger',
          localImage: 'industrial_processing/mining_drilling/tools/charger',
          translations: { en: 'charger', es: 'charger', pt: 'charger', fr: 'charger', de: 'charger', it: 'charger', nl: 'oplader', zh: '充电器', ja: '充電器', ru: 'зарядное устройство' },
        },
        {
          id: 'industrial_processing/mining_drilling/tools/clamp',
          localImage: 'industrial_processing/mining_drilling/tools/clamp',
          translations: { en: 'clamp', es: 'clamp', pt: 'clamp', fr: 'clamp', de: 'clamp', it: 'clamp', nl: 'klem', zh: '夹具', ja: 'クランプ', ru: 'зажим' },
        },
        {
          id: 'industrial_processing/mining_drilling/tools/compressor',
          localImage: 'industrial_processing/mining_drilling/tools/compressor',
          translations: { en: 'compressor', es: 'compressor', pt: 'compressor', fr: 'compressor', de: 'compressor', it: 'compressor', nl: 'compressor', zh: '压缩机', ja: 'コンプレッサー', ru: 'компрессор' },
        },
        {
          id: 'industrial_processing/mining_drilling/tools/control_panel',
          localImage: 'industrial_processing/mining_drilling/tools/control_panel',
          translations: { en: 'control panel', es: 'control panel', pt: 'control panel', fr: 'control panel', de: 'control panel', it: 'control panel', nl: 'bedieningspaneel', zh: '控制面板', ja: 'コントロールパネル', ru: 'панель управления' },
        },
        {
          id: 'industrial_processing/mining_drilling/tools/core_drill',
          localImage: 'industrial_processing/mining_drilling/tools/core_drill',
          translations: { en: 'core drill', es: 'core drill', pt: 'core drill', fr: 'core drill', de: 'core drill', it: 'core drill', nl: 'kernboor', zh: '取芯钻', ja: 'コアドリル', ru: 'кернобур' },
        },
        {
          id: 'industrial_processing/mining_drilling/tools/coupling',
          localImage: 'industrial_processing/mining_drilling/tools/coupling',
          translations: { en: 'coupling', es: 'coupling', pt: 'coupling', fr: 'coupling', de: 'coupling', it: 'coupling', nl: 'koppeling', zh: '联轴器', ja: 'カップリング', ru: 'муфта' },
        },
        {
          id: 'industrial_processing/mining_drilling/tools/drill',
          localImage: 'industrial_processing/mining_drilling/tools/drill',
          translations: { en: 'drill', es: 'taladro', pt: 'furadeira', fr: 'perceuse', de: 'Bohrmaschine', it: 'trapano', nl: 'boor', zh: '钻头', ja: 'ドリル', ru: 'дрель' },
        },
        {
          id: 'industrial_processing/mining_drilling/tools/drill_bit',
          localImage: 'industrial_processing/mining_drilling/tools/drill_bit',
          translations: { en: 'drill bit', es: 'drill bit', pt: 'drill bit', fr: 'drill bit', de: 'drill bit', it: 'drill bit', nl: 'boorbit', zh: '钻头刀片', ja: 'ドリルビット', ru: 'сверло' },
        },
        {
          id: 'industrial_processing/mining_drilling/tools/drill_rod',
          localImage: 'industrial_processing/mining_drilling/tools/drill_rod',
          translations: { en: 'drill rod', es: 'drill rod', pt: 'drill rod', fr: 'drill rod', de: 'drill rod', it: 'drill rod', nl: 'boorstang', zh: '钻杆', ja: 'ドリルロッド', ru: 'буровая штанга' },
        },
        {
          id: 'industrial_processing/mining_drilling/tools/filter',
          localImage: 'industrial_processing/mining_drilling/tools/filter',
          translations: { en: 'filter', es: 'filtro', pt: 'filtro', fr: 'filtre', de: 'Filter', it: 'filtro', nl: 'filter', zh: '过滤器', ja: 'フィルター', ru: 'фильтр' },
        },
        {
          id: 'industrial_processing/mining_drilling/tools/fuel_tank',
          localImage: 'industrial_processing/mining_drilling/tools/fuel_tank',
          translations: { en: 'fuel tank', es: 'fuel tank', pt: 'fuel tank', fr: 'fuel tank', de: 'fuel tank', it: 'fuel tank', nl: 'brandstoftank', zh: '油箱', ja: '燃料タンク', ru: 'топливный бак' },
        },
        {
          id: 'industrial_processing/mining_drilling/tools/generator',
          localImage: 'industrial_processing/mining_drilling/tools/generator',
          translations: { en: 'generator', es: 'generator', pt: 'generator', fr: 'generator', de: 'generator', it: 'generator', nl: 'generator', zh: '发电机', ja: '発電機', ru: 'генератор' },
        },
        {
          id: 'industrial_processing/mining_drilling/tools/hammer_drill',
          localImage: 'industrial_processing/mining_drilling/tools/hammer_drill',
          translations: { en: 'hammer drill', es: 'hammer drill', pt: 'hammer drill', fr: 'hammer drill', de: 'hammer drill', it: 'hammer drill', nl: 'boorhamer', zh: '电锤', ja: 'ハンマードリル', ru: 'перфоратор' },
        },
        {
          id: 'industrial_processing/mining_drilling/tools/jackhammer',
          localImage: 'industrial_processing/mining_drilling/tools/jackhammer',
          translations: { en: 'jackhammer', es: 'jackhammer', pt: 'jackhammer', fr: 'jackhammer', de: 'jackhammer', it: 'jackhammer', nl: 'drilhamer', zh: '钻岩机', ja: 'ジャックハンマー', ru: 'отбойный молоток' },
        },
        {
          id: 'industrial_processing/mining_drilling/tools/level',
          localImage: 'industrial_processing/mining_drilling/tools/level',
          translations: { en: 'level', es: 'nivel', pt: 'nível', fr: 'niveau', de: 'Wasserwaage', it: 'livella', nl: 'waterpas', zh: '水平仪', ja: '水平器', ru: 'уровень' },
        },
        {
          id: 'industrial_processing/mining_drilling/tools/lever',
          localImage: 'industrial_processing/mining_drilling/tools/lever',
          translations: { en: 'lever', es: 'lever', pt: 'lever', fr: 'lever', de: 'lever', it: 'lever', nl: 'hefboom', zh: '杠杆', ja: 'レバー', ru: 'рычаг' },
        },
        {
          id: 'industrial_processing/mining_drilling/tools/marker',
          localImage: 'industrial_processing/mining_drilling/tools/marker',
          translations: { en: 'marker', es: 'marcador', pt: 'marcador', fr: 'marqueur', de: 'Marker', it: 'pennarello', nl: 'marker', zh: '记号笔', ja: 'マーカー', ru: 'маркер' },
        },
        {
          id: 'industrial_processing/mining_drilling/tools/measuring_tool',
          localImage: 'industrial_processing/mining_drilling/tools/measuring_tool',
          translations: { en: 'measuring tool', es: 'measuring tool', pt: 'measuring tool', fr: 'measuring tool', de: 'measuring tool', it: 'measuring tool', nl: 'meetgereedschap', zh: '测量工具', ja: '計測ツール', ru: 'измерительный инструмент' },
        },
        {
          id: 'industrial_processing/mining_drilling/tools/mining_drill',
          localImage: 'industrial_processing/mining_drilling/tools/mining_drill',
          translations: { en: 'mining drill', es: 'mining drill', pt: 'mining drill', fr: 'mining drill', de: 'mining drill', it: 'mining drill', nl: 'mijnbouwboor', zh: '矿山钻机', ja: '採掘ドリル', ru: 'буровой станок' },
        },
        {
          id: 'industrial_processing/mining_drilling/tools/monitor',
          localImage: 'industrial_processing/mining_drilling/tools/monitor',
          translations: { en: 'monitor', es: 'monitor', pt: 'monitor', fr: 'monitor', de: 'monitor', it: 'monitor', nl: 'monitor', zh: '显示器', ja: 'モニター', ru: 'монитор' },
        },
        {
          id: 'industrial_processing/mining_drilling/tools/nut',
          localImage: 'industrial_processing/mining_drilling/tools/nut',
          translations: { en: 'nut', es: 'nut', pt: 'nut', fr: 'nut', de: 'nut', it: 'nut', nl: 'moer', zh: '螺母', ja: 'ナット', ru: 'гайка' },
        },
        {
          id: 'industrial_processing/mining_drilling/tools/oil_container',
          localImage: 'industrial_processing/mining_drilling/tools/oil_container',
          translations: { en: 'oil container', es: 'oil container', pt: 'oil container', fr: 'oil container', de: 'oil container', it: 'oil container', nl: 'oliecontainer', zh: '油桶', ja: 'オイルコンテナ', ru: 'масляный контейнер' },
        },
        {
          id: 'industrial_processing/mining_drilling/tools/power_unit',
          localImage: 'industrial_processing/mining_drilling/tools/power_unit',
          translations: { en: 'power unit', es: 'power unit', pt: 'power unit', fr: 'power unit', de: 'power unit', it: 'power unit', nl: 'voedingseenheid', zh: '电源装置', ja: '電源ユニット', ru: 'блок питания' },
        },
        {
          id: 'industrial_processing/mining_drilling/tools/pump',
          localImage: 'industrial_processing/mining_drilling/tools/pump',
          translations: { en: 'pump', es: 'bomba', pt: 'bomba', fr: 'pompe', de: 'Pumpe', it: 'pompa', nl: 'pomp', zh: '泵', ja: 'ポンプ', ru: 'насос' },
        },
        {
          id: 'industrial_processing/mining_drilling/tools/rock_drill',
          localImage: 'industrial_processing/mining_drilling/tools/rock_drill',
          translations: { en: 'rock drill', es: 'rock drill', pt: 'rock drill', fr: 'rock drill', de: 'rock drill', it: 'rock drill', nl: 'steenboor', zh: '凿岩机', ja: 'ロックドリル', ru: 'перфоратор' },
        },
        {
          id: 'industrial_processing/mining_drilling/tools/screwdriver',
          localImage: 'industrial_processing/mining_drilling/tools/screwdriver',
          translations: { en: 'screwdriver', es: 'screwdriver', pt: 'screwdriver', fr: 'screwdriver', de: 'screwdriver', it: 'screwdriver', nl: 'schroevendraaier', zh: '螺丝刀', ja: 'ドライバー', ru: 'отвертка' },
        },
        {
          id: 'industrial_processing/mining_drilling/tools/sensor',
          localImage: 'industrial_processing/mining_drilling/tools/sensor',
          translations: { en: 'sensor', es: 'sensor', pt: 'sensor', fr: 'sensor', de: 'sensor', it: 'sensor', nl: 'sensor', zh: '传感器', ja: 'センサー', ru: 'датчик' },
        },
        {
          id: 'industrial_processing/mining_drilling/tools/spray_paint',
          localImage: 'industrial_processing/mining_drilling/tools/spray_paint',
          translations: { en: 'spray paint', es: 'spray paint', pt: 'spray paint', fr: 'spray paint', de: 'spray paint', it: 'spray paint', nl: 'spuitverf', zh: '喷漆', ja: 'スプレーペイント', ru: 'аэрозольная краска' },
        },
        {
          id: 'industrial_processing/mining_drilling/tools/switch',
          localImage: 'industrial_processing/mining_drilling/tools/switch',
          translations: { en: 'switch', es: 'switch', pt: 'switch', fr: 'switch', de: 'switch', it: 'switch', nl: 'schakelaar', zh: '开关', ja: 'スイッチ', ru: 'выключатель' },
        },
        {
          id: 'industrial_processing/mining_drilling/tools/tape',
          localImage: 'industrial_processing/mining_drilling/tools/tape',
          translations: { en: 'tape', es: 'cinta', pt: 'fita', fr: 'ruban', de: 'Klebeband', it: 'nastro', nl: 'tape', zh: '胶带', ja: 'テープ', ru: 'лента' },
        },
        {
          id: 'industrial_processing/mining_drilling/tools/toolbox',
          localImage: 'industrial_processing/mining_drilling/tools/toolbox',
          translations: { en: 'toolbox', es: 'toolbox', pt: 'toolbox', fr: 'toolbox', de: 'toolbox', it: 'toolbox', nl: 'gereedschapskist', zh: '工具箱', ja: 'ツールボックス', ru: 'ящик для инструментов' },
        },
        {
          id: 'industrial_processing/mining_drilling/tools/toolkit',
          localImage: 'industrial_processing/mining_drilling/tools/toolkit',
          translations: { en: 'toolkit', es: 'toolkit', pt: 'toolkit', fr: 'toolkit', de: 'toolkit', it: 'toolkit', nl: 'toolkit', zh: '工具组件', ja: 'ツールキット', ru: 'набор инструментов' },
        },
        {
          id: 'industrial_processing/mining_drilling/tools/trigger',
          localImage: 'industrial_processing/mining_drilling/tools/trigger',
          translations: { en: 'trigger', es: 'trigger', pt: 'trigger', fr: 'trigger', de: 'trigger', it: 'trigger', nl: 'trekker', zh: '扳机', ja: 'トリガー', ru: 'курок' },
        },
        {
          id: 'industrial_processing/mining_drilling/tools/valve',
          localImage: 'industrial_processing/mining_drilling/tools/valve',
          translations: { en: 'valve', es: 'valve', pt: 'valve', fr: 'valve', de: 'valve', it: 'valve', nl: 'klep', zh: '阀门', ja: 'バルブ', ru: 'клапан' },
        },
        {
          id: 'industrial_processing/mining_drilling/tools/wrench',
          localImage: 'industrial_processing/mining_drilling/tools/wrench',
          translations: { en: 'wrench', es: 'llave', pt: 'chave inglesa', fr: 'clé', de: 'Schraubenschlüssel', it: 'chiave', nl: 'moersleutel', zh: '扳手', ja: 'レンチ', ru: 'гаечный ключ' },
        }
        ],
      },
      {
        id: 'materials',
        name: { en: 'Materials', es: 'Materiales', pt: 'Materiais', fr: 'Matériaux', de: 'Materialien', it: 'Materiali', nl: 'Materialen', zh: '材料', ja: '材料', ru: 'Материалы' },
        icon: '📦',
        items: [
        {
          id: 'industrial_processing/mining_drilling/materials/filters',
          localImage: 'industrial_processing/mining_drilling/materials/filters',
          translations: { en: 'filters', es: 'filters', pt: 'filters', fr: 'filters', de: 'filters', it: 'filters', nl: 'filters', zh: '过滤器', ja: 'フィルター', ru: 'фильтры' },
        },
        {
          id: 'industrial_processing/mining_drilling/materials/fuel',
          localImage: 'industrial_processing/mining_drilling/materials/fuel',
          translations: { en: 'fuel', es: 'fuel', pt: 'fuel', fr: 'fuel', de: 'fuel', it: 'fuel', nl: 'brandstof', zh: '燃料', ja: '燃料', ru: 'топливо' },
        },
        {
          id: 'industrial_processing/mining_drilling/materials/lubricants',
          localImage: 'industrial_processing/mining_drilling/materials/lubricants',
          translations: { en: 'lubricants', es: 'lubricants', pt: 'lubricants', fr: 'lubricants', de: 'lubricants', it: 'lubricants', nl: 'smeermiddelen', zh: '润滑剂', ja: '潤滑剤', ru: 'смазочные материалы' },
        },
        {
          id: 'industrial_processing/mining_drilling/materials/oil',
          localImage: 'industrial_processing/mining_drilling/materials/oil',
          translations: { en: 'oil', es: 'oil', pt: 'oil', fr: 'oil', de: 'oil', it: 'oil', nl: 'olie', zh: '油', ja: 'オイル', ru: 'масло' },
        }
        ],
      }
      ],
    },
    {
      id: 'mining_loading_transport',
      name: { en: 'Mining Transport', es: 'Transporte Minero', pt: 'Transporte Mineiro', fr: 'Transport Minier', de: 'Bergbautransport', it: 'Trasporto', nl: 'Mijnbouw transport', zh: '矿山运输', ja: '採掘輸送', ru: 'Горнодобывающий транспорт' },
      icon: '🚛',
      roles: [
      {
        id: 'tools',
        name: { en: 'Tools', es: 'Herramientas', pt: 'Ferramentas', fr: 'Outils', de: 'Werkzeuge', it: 'Attrezzi', nl: 'Gereedschap', zh: '工具', ja: '道具', ru: 'Инструменты' },
        icon: '🔧',
        items: [
        {
          id: 'industrial_processing/mining_loading_transport/tools/alarm',
          localImage: 'industrial_processing/mining_loading_transport/tools/alarm',
          translations: { en: 'alarm', es: 'alarm', pt: 'alarm', fr: 'alarm', de: 'alarm', it: 'alarm', nl: 'alarm', zh: '警报器', ja: 'アラーム', ru: 'сигнализация' },
        },
        {
          id: 'industrial_processing/mining_loading_transport/tools/bin',
          localImage: 'industrial_processing/mining_loading_transport/tools/bin',
          translations: { en: 'bin', es: 'cubo de basura', pt: 'lixeira', fr: 'poubelle', de: 'Mülleimer', it: 'bidone', nl: 'prullenbak', zh: '垃圾桶', ja: 'ビン', ru: 'мусорное ведро' },
        },
        {
          id: 'industrial_processing/mining_loading_transport/tools/box',
          localImage: 'industrial_processing/mining_loading_transport/tools/box',
          translations: { en: 'box', es: 'caja', pt: 'caixa', fr: 'boîte', de: 'Kasten', it: 'scatola', nl: 'doos', zh: '箱子', ja: 'ボックス', ru: 'коробка' },
        },
        {
          id: 'industrial_processing/mining_loading_transport/tools/brake',
          localImage: 'industrial_processing/mining_loading_transport/tools/brake',
          translations: { en: 'brake', es: 'brake', pt: 'brake', fr: 'brake', de: 'brake', it: 'brake', nl: 'rem', zh: '刹车', ja: 'ブレーキ', ru: 'тормоз' },
        },
        {
          id: 'industrial_processing/mining_loading_transport/tools/bucket',
          localImage: 'industrial_processing/mining_loading_transport/tools/bucket',
          translations: { en: 'bucket', es: 'cubo', pt: 'balde', fr: 'seau', de: 'Eimer', it: 'secchio', nl: 'emmer', zh: '水桶', ja: 'バケツ', ru: 'ведро' },
        },
        {
          id: 'industrial_processing/mining_loading_transport/tools/camera',
          localImage: 'industrial_processing/mining_loading_transport/tools/camera',
          translations: { en: 'camera', es: 'camera', pt: 'camera', fr: 'camera', de: 'camera', it: 'camera', nl: 'camera', zh: '摄像机', ja: 'カメラ', ru: 'камера' },
        },
        {
          id: 'industrial_processing/mining_loading_transport/tools/cart',
          localImage: 'industrial_processing/mining_loading_transport/tools/cart',
          translations: { en: 'cart', es: 'carrito', pt: 'carrinho', fr: 'chariot', de: 'Wagen', it: 'carrello', nl: 'kar', zh: '推车', ja: 'カート', ru: 'тележка' },
        },
        {
          id: 'industrial_processing/mining_loading_transport/tools/chain',
          localImage: 'industrial_processing/mining_loading_transport/tools/chain',
          translations: { en: 'chain', es: 'cadena', pt: 'corrente', fr: 'chaîne', de: 'Kette', it: 'catena', nl: 'ketting', zh: '链条', ja: 'チェーン', ru: 'цепь' },
        },
        {
          id: 'industrial_processing/mining_loading_transport/tools/container',
          localImage: 'industrial_processing/mining_loading_transport/tools/container',
          translations: { en: 'container', es: 'contenedor', pt: 'recipiente', fr: 'conteneur', de: 'Behälter', it: 'contenitore', nl: 'container', zh: '容器', ja: 'コンテナ', ru: 'контейнер' },
        },
        {
          id: 'industrial_processing/mining_loading_transport/tools/control_panel',
          localImage: 'industrial_processing/mining_loading_transport/tools/control_panel',
          translations: { en: 'control panel', es: 'control panel', pt: 'control panel', fr: 'control panel', de: 'control panel', it: 'control panel', nl: 'bedieningspaneel', zh: '控制面板', ja: 'コントロールパネル', ru: 'панель управления' },
        },
        {
          id: 'industrial_processing/mining_loading_transport/tools/conveyor_belt',
          localImage: 'industrial_processing/mining_loading_transport/tools/conveyor_belt',
          translations: { en: 'conveyor belt', es: 'conveyor belt', pt: 'conveyor belt', fr: 'conveyor belt', de: 'conveyor belt', it: 'conveyor belt', nl: 'lopende band', zh: '输送带', ja: 'コンベアベルト', ru: 'конвейерная лента' },
        },
        {
          id: 'industrial_processing/mining_loading_transport/tools/crate',
          localImage: 'industrial_processing/mining_loading_transport/tools/crate',
          translations: { en: 'crate', es: 'cajón', pt: 'engradado', fr: 'caisse', de: 'Kiste', it: 'cassa', nl: 'krat', zh: '板条箱', ja: 'クレート', ru: 'ящик' },
        },
        {
          id: 'industrial_processing/mining_loading_transport/tools/dump_truck',
          localImage: 'industrial_processing/mining_loading_transport/tools/dump_truck',
          translations: { en: 'dump truck', es: 'dump truck', pt: 'dump truck', fr: 'dump truck', de: 'dump truck', it: 'dump truck', nl: 'kiepwagen', zh: '自卸车', ja: 'ダンプトラック', ru: 'самосвал' },
        },
        {
          id: 'industrial_processing/mining_loading_transport/tools/excavator',
          localImage: 'industrial_processing/mining_loading_transport/tools/excavator',
          translations: { en: 'excavator', es: 'excavator', pt: 'excavator', fr: 'excavator', de: 'excavator', it: 'excavator', nl: 'graafmachine', zh: '挖掘机', ja: '掘削機', ru: 'экскаватор' },
        },
        {
          id: 'industrial_processing/mining_loading_transport/tools/fork',
          localImage: 'industrial_processing/mining_loading_transport/tools/fork',
          translations: { en: 'fork', es: 'tenedor', pt: 'forcado', fr: 'fourche', de: 'Gabel', it: 'forca', nl: 'vork', zh: '叉子', ja: 'フォーク', ru: 'вилка' },
        },
        {
          id: 'industrial_processing/mining_loading_transport/tools/gear',
          localImage: 'industrial_processing/mining_loading_transport/tools/gear',
          translations: { en: 'gear', es: 'gear', pt: 'gear', fr: 'gear', de: 'gear', it: 'gear', nl: 'tandwiel', zh: '齿轮', ja: 'ギア', ru: 'шестерня' },
        },
        {
          id: 'industrial_processing/mining_loading_transport/tools/hook',
          localImage: 'industrial_processing/mining_loading_transport/tools/hook',
          translations: { en: 'hook', es: 'gancho', pt: 'gancho', fr: 'crochet', de: 'Haken', it: 'gancio', nl: 'haak', zh: '挂钩', ja: 'フック', ru: 'крюк' },
        },
        {
          id: 'industrial_processing/mining_loading_transport/tools/hydraulic_system',
          localImage: 'industrial_processing/mining_loading_transport/tools/hydraulic_system',
          translations: { en: 'hydraulic system', es: 'hydraulic system', pt: 'hydraulic system', fr: 'hydraulic system', de: 'hydraulic system', it: 'hydraulic system', nl: 'hydraulisch systeem', zh: '液压系统', ja: '油圧システム', ru: 'гидравлическая система' },
        },
        {
          id: 'industrial_processing/mining_loading_transport/tools/lever',
          localImage: 'industrial_processing/mining_loading_transport/tools/lever',
          translations: { en: 'lever', es: 'lever', pt: 'lever', fr: 'lever', de: 'lever', it: 'lever', nl: 'hefboom', zh: '杠杆', ja: 'レバー', ru: 'рычаг' },
        },
        {
          id: 'industrial_processing/mining_loading_transport/tools/loader',
          localImage: 'industrial_processing/mining_loading_transport/tools/loader',
          translations: { en: 'loader', es: 'loader', pt: 'loader', fr: 'loader', de: 'loader', it: 'loader', nl: 'lader', zh: '装载机', ja: 'ローダー', ru: 'погрузчик' },
        },
        {
          id: 'industrial_processing/mining_loading_transport/tools/mirror',
          localImage: 'industrial_processing/mining_loading_transport/tools/mirror',
          translations: { en: 'mirror', es: 'mirror', pt: 'mirror', fr: 'mirror', de: 'mirror', it: 'mirror', nl: 'spiegel', zh: '镜子', ja: '鏡', ru: 'зеркало' },
        },
        {
          id: 'industrial_processing/mining_loading_transport/tools/pallet',
          localImage: 'industrial_processing/mining_loading_transport/tools/pallet',
          translations: { en: 'pallet', es: 'palé', pt: 'palete', fr: 'palette', de: 'Palette', it: 'pallet', nl: 'pallet', zh: '托盘', ja: 'パレット', ru: 'паллет' },
        },
        {
          id: 'industrial_processing/mining_loading_transport/tools/rack',
          localImage: 'industrial_processing/mining_loading_transport/tools/rack',
          translations: { en: 'rack', es: 'estante', pt: 'prateleira', fr: 'étagère', de: 'Regal', it: 'scaffale', nl: 'rek', zh: '货架', ja: 'ラック', ru: 'стеллаж' },
        },
        {
          id: 'industrial_processing/mining_loading_transport/tools/rope',
          localImage: 'industrial_processing/mining_loading_transport/tools/rope',
          translations: { en: 'rope', es: 'cuerda', pt: 'corda', fr: 'corde', de: 'Seil', it: 'corda', nl: 'touw', zh: '绳子', ja: 'ロープ', ru: 'веревка' },
        },
        {
          id: 'industrial_processing/mining_loading_transport/tools/sensor',
          localImage: 'industrial_processing/mining_loading_transport/tools/sensor',
          translations: { en: 'sensor', es: 'sensor', pt: 'sensor', fr: 'sensor', de: 'sensor', it: 'sensor', nl: 'sensor', zh: '传感器', ja: 'センサー', ru: 'датчик' },
        },
        {
          id: 'industrial_processing/mining_loading_transport/tools/shovel',
          localImage: 'industrial_processing/mining_loading_transport/tools/shovel',
          translations: { en: 'shovel', es: 'pala', pt: 'pá', fr: 'pelle', de: 'Schaufel', it: 'vanga', nl: 'schop', zh: '铲子', ja: 'シャベル', ru: 'лопата' },
        },
        {
          id: 'industrial_processing/mining_loading_transport/tools/steering_wheel',
          localImage: 'industrial_processing/mining_loading_transport/tools/steering_wheel',
          translations: { en: 'steering wheel', es: 'steering wheel', pt: 'steering wheel', fr: 'steering wheel', de: 'steering wheel', it: 'steering wheel', nl: 'stuurwiel', zh: '方向盘', ja: 'ステアリングホイール', ru: 'руль' },
        },
        {
          id: 'industrial_processing/mining_loading_transport/tools/strap',
          localImage: 'industrial_processing/mining_loading_transport/tools/strap',
          translations: { en: 'strap', es: 'strap', pt: 'strap', fr: 'strap', de: 'strap', it: 'strap', nl: 'band', zh: '带子', ja: 'ストラップ', ru: 'ремень' },
        },
        {
          id: 'industrial_processing/mining_loading_transport/tools/trolley',
          localImage: 'industrial_processing/mining_loading_transport/tools/trolley',
          translations: { en: 'trolley', es: 'carrito', pt: 'carrinho', fr: 'chariot', de: 'Trolley', it: 'carrello', nl: 'trolley', zh: '手推车', ja: 'トロリー', ru: 'тележка' },
        },
        {
          id: 'industrial_processing/mining_loading_transport/tools/wheelbarrow',
          localImage: 'industrial_processing/mining_loading_transport/tools/wheelbarrow',
          translations: { en: 'wheelbarrow', es: 'carretilla', pt: 'carrinho de mão', fr: 'brouette', de: 'Schubkarre', it: 'carriola', nl: 'kruiwagen', zh: '手推车', ja: '一輪車', ru: 'тачка' },
        }
        ],
      },
      {
        id: 'materials',
        name: { en: 'Materials', es: 'Materiales', pt: 'Materiais', fr: 'Matériaux', de: 'Materialien', it: 'Materiali', nl: 'Materialen', zh: '材料', ja: '材料', ru: 'Материалы' },
        icon: '📦',
        items: [
        {
          id: 'industrial_processing/mining_loading_transport/materials/filters',
          localImage: 'industrial_processing/mining_loading_transport/materials/filters',
          translations: { en: 'filters', es: 'filters', pt: 'filters', fr: 'filters', de: 'filters', it: 'filters', nl: 'filters', zh: '过滤器', ja: 'フィルター', ru: 'фильтры' },
        },
        {
          id: 'industrial_processing/mining_loading_transport/materials/fuel',
          localImage: 'industrial_processing/mining_loading_transport/materials/fuel',
          translations: { en: 'fuel', es: 'fuel', pt: 'fuel', fr: 'fuel', de: 'fuel', it: 'fuel', nl: 'brandstof', zh: '燃料', ja: '燃料', ru: 'топливо' },
        },
        {
          id: 'industrial_processing/mining_loading_transport/materials/oil',
          localImage: 'industrial_processing/mining_loading_transport/materials/oil',
          translations: { en: 'oil', es: 'oil', pt: 'oil', fr: 'oil', de: 'oil', it: 'oil', nl: 'olie', zh: '油', ja: 'オイル', ru: 'масло' },
        },
        {
          id: 'industrial_processing/mining_loading_transport/materials/parts',
          localImage: 'industrial_processing/mining_loading_transport/materials/parts',
          translations: { en: 'parts', es: 'parts', pt: 'parts', fr: 'parts', de: 'parts', it: 'parts', nl: 'onderdelen', zh: '零件', ja: 'パーツ', ru: 'запчасти' },
        },
        {
          id: 'industrial_processing/mining_loading_transport/materials/tires',
          localImage: 'industrial_processing/mining_loading_transport/materials/tires',
          translations: { en: 'tires', es: 'tires', pt: 'tires', fr: 'tires', de: 'tires', it: 'tires', nl: 'banden', zh: '轮胎', ja: 'タイヤ', ru: 'шины' },
        }
        ],
      }
      ],
    },
    {
      id: 'mining_maintenance',
      name: { en: 'Mining Maintenance', es: 'Mantenimiento Minero', pt: 'Manutenção Mineira', fr: 'Maintenance Minière', de: 'Bergbau Wartung', it: 'Manutenzione', nl: 'Mijnbouw onderhoud', zh: '矿山维护', ja: '採掘メンテナンス', ru: 'Горнодобывающее техобслуживание' },
      icon: '🔩',
      roles: [
      {
        id: 'tools',
        name: { en: 'Tools', es: 'Herramientas', pt: 'Ferramentas', fr: 'Outils', de: 'Werkzeuge', it: 'Attrezzi', nl: 'Gereedschap', zh: '工具', ja: '道具', ru: 'Инструменты' },
        icon: '🔧',
        items: [
        {
          id: 'industrial_processing/mining_maintenance/tools/battery',
          localImage: 'industrial_processing/mining_maintenance/tools/battery',
          translations: { en: 'battery', es: 'battery', pt: 'battery', fr: 'battery', de: 'battery', it: 'battery', nl: 'batterij', zh: '电池', ja: 'バッテリー', ru: 'батарея' },
        },
        {
          id: 'industrial_processing/mining_maintenance/tools/cable',
          localImage: 'industrial_processing/mining_maintenance/tools/cable',
          translations: { en: 'cable', es: 'cable', pt: 'cable', fr: 'cable', de: 'cable', it: 'cable', nl: 'kabel', zh: '电缆', ja: 'ケーブル', ru: 'кабель' },
        },
        {
          id: 'industrial_processing/mining_maintenance/tools/cart',
          localImage: 'industrial_processing/mining_maintenance/tools/cart',
          translations: { en: 'cart', es: 'carrito', pt: 'carrinho', fr: 'chariot', de: 'Wagen', it: 'carrello', nl: 'kar', zh: '推车', ja: 'カート', ru: 'тележка' },
        },
        {
          id: 'industrial_processing/mining_maintenance/tools/charger',
          localImage: 'industrial_processing/mining_maintenance/tools/charger',
          translations: { en: 'charger', es: 'charger', pt: 'charger', fr: 'charger', de: 'charger', it: 'charger', nl: 'oplader', zh: '充电器', ja: '充電器', ru: 'зарядное устройство' },
        },
        {
          id: 'industrial_processing/mining_maintenance/tools/compressor',
          localImage: 'industrial_processing/mining_maintenance/tools/compressor',
          translations: { en: 'compressor', es: 'compressor', pt: 'compressor', fr: 'compressor', de: 'compressor', it: 'compressor', nl: 'compressor', zh: '压缩机', ja: 'コンプレッサー', ru: 'компрессор' },
        },
        {
          id: 'industrial_processing/mining_maintenance/tools/cutter',
          localImage: 'industrial_processing/mining_maintenance/tools/cutter',
          translations: { en: 'cutter', es: 'cortador', pt: 'cortador', fr: 'cutter', de: 'Cutter', it: 'taglierino', nl: 'snijder', zh: '切割机', ja: 'カッター', ru: 'резак' },
        },
        {
          id: 'industrial_processing/mining_maintenance/tools/drill',
          localImage: 'industrial_processing/mining_maintenance/tools/drill',
          translations: { en: 'drill', es: 'taladro', pt: 'furadeira', fr: 'perceuse', de: 'Bohrmaschine', it: 'trapano', nl: 'boor', zh: '钻头', ja: 'ドリル', ru: 'дрель' },
        },
        {
          id: 'industrial_processing/mining_maintenance/tools/generator',
          localImage: 'industrial_processing/mining_maintenance/tools/generator',
          translations: { en: 'generator', es: 'generator', pt: 'generator', fr: 'generator', de: 'generator', it: 'generator', nl: 'generator', zh: '发电机', ja: '発電機', ru: 'генератор' },
        },
        {
          id: 'industrial_processing/mining_maintenance/tools/grinder',
          localImage: 'industrial_processing/mining_maintenance/tools/grinder',
          translations: { en: 'grinder', es: 'grinder', pt: 'grinder', fr: 'grinder', de: 'grinder', it: 'grinder', nl: 'slijpmachine', zh: '研磨机', ja: 'グラインダー', ru: 'шлифовальная машина' },
        },
        {
          id: 'industrial_processing/mining_maintenance/tools/hammer',
          localImage: 'industrial_processing/mining_maintenance/tools/hammer',
          translations: { en: 'hammer', es: 'martillo', pt: 'martelo', fr: 'marteau', de: 'Hammer', it: 'martello', nl: 'hamer', zh: '锤子', ja: 'ハンマー', ru: 'молоток' },
        },
        {
          id: 'industrial_processing/mining_maintenance/tools/kit',
          localImage: 'industrial_processing/mining_maintenance/tools/kit',
          translations: { en: 'kit', es: 'kit', pt: 'kit', fr: 'kit', de: 'kit', it: 'kit', nl: 'kit', zh: '套件', ja: 'キット', ru: 'набор' },
        },
        {
          id: 'industrial_processing/mining_maintenance/tools/ladder',
          localImage: 'industrial_processing/mining_maintenance/tools/ladder',
          translations: { en: 'ladder', es: 'escalera', pt: 'escada', fr: 'échelle', de: 'Leiter', it: 'scala', nl: 'ladder', zh: '梯子', ja: 'はしご', ru: 'лестница' },
        },
        {
          id: 'industrial_processing/mining_maintenance/tools/monitor',
          localImage: 'industrial_processing/mining_maintenance/tools/monitor',
          translations: { en: 'monitor', es: 'monitor', pt: 'monitor', fr: 'monitor', de: 'monitor', it: 'monitor', nl: 'monitor', zh: '显示器', ja: 'モニター', ru: 'монитор' },
        },
        {
          id: 'industrial_processing/mining_maintenance/tools/panel',
          localImage: 'industrial_processing/mining_maintenance/tools/panel',
          translations: { en: 'panel', es: 'panel', pt: 'panel', fr: 'panel', de: 'panel', it: 'panel', nl: 'paneel', zh: '面板', ja: 'パネル', ru: 'панель' },
        },
        {
          id: 'industrial_processing/mining_maintenance/tools/platform',
          localImage: 'industrial_processing/mining_maintenance/tools/platform',
          translations: { en: 'platform', es: 'platform', pt: 'platform', fr: 'platform', de: 'platform', it: 'platform', nl: 'platform', zh: '站台', ja: 'プラットフォーム', ru: 'платформа' },
        },
        {
          id: 'industrial_processing/mining_maintenance/tools/screwdriver',
          localImage: 'industrial_processing/mining_maintenance/tools/screwdriver',
          translations: { en: 'screwdriver', es: 'screwdriver', pt: 'screwdriver', fr: 'screwdriver', de: 'screwdriver', it: 'screwdriver', nl: 'schroevendraaier', zh: '螺丝刀', ja: 'ドライバー', ru: 'отвертка' },
        },
        {
          id: 'industrial_processing/mining_maintenance/tools/sensor',
          localImage: 'industrial_processing/mining_maintenance/tools/sensor',
          translations: { en: 'sensor', es: 'sensor', pt: 'sensor', fr: 'sensor', de: 'sensor', it: 'sensor', nl: 'sensor', zh: '传感器', ja: 'センサー', ru: 'датчик' },
        },
        {
          id: 'industrial_processing/mining_maintenance/tools/switch',
          localImage: 'industrial_processing/mining_maintenance/tools/switch',
          translations: { en: 'switch', es: 'switch', pt: 'switch', fr: 'switch', de: 'switch', it: 'switch', nl: 'schakelaar', zh: '开关', ja: 'スイッチ', ru: 'выключатель' },
        },
        {
          id: 'industrial_processing/mining_maintenance/tools/tester',
          localImage: 'industrial_processing/mining_maintenance/tools/tester',
          translations: { en: 'tester', es: 'tester', pt: 'tester', fr: 'tester', de: 'tester', it: 'tester', nl: 'tester', zh: '测试仪', ja: 'テスター', ru: 'тестер' },
        },
        {
          id: 'industrial_processing/mining_maintenance/tools/toolbox',
          localImage: 'industrial_processing/mining_maintenance/tools/toolbox',
          translations: { en: 'toolbox', es: 'toolbox', pt: 'toolbox', fr: 'toolbox', de: 'toolbox', it: 'toolbox', nl: 'gereedschapskist', zh: '工具箱', ja: 'ツールボックス', ru: 'ящик для инструментов' },
        },
        {
          id: 'industrial_processing/mining_maintenance/tools/torch',
          localImage: 'industrial_processing/mining_maintenance/tools/torch',
          translations: { en: 'torch', es: 'torch', pt: 'torch', fr: 'torch', de: 'torch', it: 'torch', nl: 'lasbrander', zh: '焊炬', ja: 'トーチ', ru: 'горелка' },
        },
        {
          id: 'industrial_processing/mining_maintenance/tools/welder',
          localImage: 'industrial_processing/mining_maintenance/tools/welder',
          translations: { en: 'welder', es: 'welder', pt: 'welder', fr: 'welder', de: 'welder', it: 'welder', nl: 'lasmachine', zh: '焊接机', ja: '溶接機', ru: 'сварочный аппарат' },
        },
        {
          id: 'industrial_processing/mining_maintenance/tools/wrench',
          localImage: 'industrial_processing/mining_maintenance/tools/wrench',
          translations: { en: 'wrench', es: 'llave', pt: 'chave inglesa', fr: 'clé', de: 'Schraubenschlüssel', it: 'chiave', nl: 'moersleutel', zh: '扳手', ja: 'レンチ', ru: 'гаечный ключ' },
        }
        ],
      },
      {
        id: 'materials',
        name: { en: 'Materials', es: 'Materiales', pt: 'Materiais', fr: 'Matériaux', de: 'Materialien', it: 'Materiali', nl: 'Materialen', zh: '材料', ja: '材料', ru: 'Материалы' },
        icon: '📦',
        items: [
        {
          id: 'industrial_processing/mining_maintenance/materials/bolt',
          localImage: 'industrial_processing/mining_maintenance/materials/bolt',
          translations: { en: 'bolt', es: 'bolt', pt: 'bolt', fr: 'bolt', de: 'bolt', it: 'bolt', nl: 'bout', zh: '螺栓', ja: 'ボルト', ru: 'болт' },
        },
        {
          id: 'industrial_processing/mining_maintenance/materials/chain',
          localImage: 'industrial_processing/mining_maintenance/materials/chain',
          translations: { en: 'chain', es: 'cadena', pt: 'corrente', fr: 'chaîne', de: 'Kette', it: 'catena', nl: 'ketting', zh: '链条', ja: 'チェーン', ru: 'цепь' },
        },
        {
          id: 'industrial_processing/mining_maintenance/materials/clamp',
          localImage: 'industrial_processing/mining_maintenance/materials/clamp',
          translations: { en: 'clamp', es: 'clamp', pt: 'clamp', fr: 'clamp', de: 'clamp', it: 'clamp', nl: 'klem', zh: '夹具', ja: 'クランプ', ru: 'зажим' },
        },
        {
          id: 'industrial_processing/mining_maintenance/materials/cleaner',
          localImage: 'industrial_processing/mining_maintenance/materials/cleaner',
          translations: { en: 'cleaner', es: 'cleaner', pt: 'cleaner', fr: 'cleaner', de: 'cleaner', it: 'cleaner', nl: 'reiniger', zh: '清洁剂', ja: '洗浄剤', ru: 'чистящее средство' },
        },
        {
          id: 'industrial_processing/mining_maintenance/materials/container',
          localImage: 'industrial_processing/mining_maintenance/materials/container',
          translations: { en: 'container', es: 'contenedor', pt: 'recipiente', fr: 'conteneur', de: 'Behälter', it: 'contenitore', nl: 'container', zh: '容器', ja: 'コンテナ', ru: 'контейнер' },
        },
        {
          id: 'industrial_processing/mining_maintenance/materials/filter',
          localImage: 'industrial_processing/mining_maintenance/materials/filter',
          translations: { en: 'filter', es: 'filtro', pt: 'filtro', fr: 'filtre', de: 'Filter', it: 'filtro', nl: 'filter', zh: '过滤器', ja: 'フィルター', ru: 'фильтр' },
        },
        {
          id: 'industrial_processing/mining_maintenance/materials/glue',
          localImage: 'industrial_processing/mining_maintenance/materials/glue',
          translations: { en: 'glue', es: 'glue', pt: 'glue', fr: 'glue', de: 'glue', it: 'glue', nl: 'lijm', zh: '胶水', ja: '接着剤', ru: 'клей' },
        },
        {
          id: 'industrial_processing/mining_maintenance/materials/grease',
          localImage: 'industrial_processing/mining_maintenance/materials/grease',
          translations: { en: 'grease', es: 'grease', pt: 'grease', fr: 'grease', de: 'grease', it: 'grease', nl: 'vet', zh: '润滑脂', ja: 'グリース', ru: 'смазка' },
        },
        {
          id: 'industrial_processing/mining_maintenance/materials/hook',
          localImage: 'industrial_processing/mining_maintenance/materials/hook',
          translations: { en: 'hook', es: 'gancho', pt: 'gancho', fr: 'crochet', de: 'Haken', it: 'gancio', nl: 'haak', zh: '挂钩', ja: 'フック', ru: 'крюк' },
        },
        {
          id: 'industrial_processing/mining_maintenance/materials/hose',
          localImage: 'industrial_processing/mining_maintenance/materials/hose',
          translations: { en: 'hose', es: 'manguera', pt: 'mangueira', fr: 'tuyau', de: 'Schlauch', it: 'tubo', nl: 'slang', zh: '软管', ja: 'ホース', ru: 'шланг' },
        },
        {
          id: 'industrial_processing/mining_maintenance/materials/nut',
          localImage: 'industrial_processing/mining_maintenance/materials/nut',
          translations: { en: 'nut', es: 'nut', pt: 'nut', fr: 'nut', de: 'nut', it: 'nut', nl: 'moer', zh: '螺母', ja: 'ナット', ru: 'гайка' },
        },
        {
          id: 'industrial_processing/mining_maintenance/materials/oil',
          localImage: 'industrial_processing/mining_maintenance/materials/oil',
          translations: { en: 'oil', es: 'oil', pt: 'oil', fr: 'oil', de: 'oil', it: 'oil', nl: 'olie', zh: '油', ja: 'オイル', ru: 'масло' },
        },
        {
          id: 'industrial_processing/mining_maintenance/materials/pipe',
          localImage: 'industrial_processing/mining_maintenance/materials/pipe',
          translations: { en: 'pipe', es: 'tubo', pt: 'cano', fr: 'tuyau', de: 'Rohr', it: 'tubo', nl: 'pijp', zh: '管道', ja: 'パイプ', ru: 'труба' },
        },
        {
          id: 'industrial_processing/mining_maintenance/materials/rope',
          localImage: 'industrial_processing/mining_maintenance/materials/rope',
          translations: { en: 'rope', es: 'cuerda', pt: 'corda', fr: 'corde', de: 'Seil', it: 'corda', nl: 'touw', zh: '绳子', ja: 'ロープ', ru: 'веревка' },
        },
        {
          id: 'industrial_processing/mining_maintenance/materials/screw',
          localImage: 'industrial_processing/mining_maintenance/materials/screw',
          translations: { en: 'screw', es: 'screw', pt: 'screw', fr: 'screw', de: 'screw', it: 'screw', nl: 'schroef', zh: '螺丝', ja: 'ネジ', ru: 'винт' },
        },
        {
          id: 'industrial_processing/mining_maintenance/materials/seal',
          localImage: 'industrial_processing/mining_maintenance/materials/seal',
          translations: { en: 'seal', es: 'seal', pt: 'seal', fr: 'seal', de: 'seal', it: 'seal', nl: 'afdichting', zh: '密封件', ja: 'シール', ru: 'уплотнение' },
        },
        {
          id: 'industrial_processing/mining_maintenance/materials/tank',
          localImage: 'industrial_processing/mining_maintenance/materials/tank',
          translations: { en: 'tank', es: 'tanque', pt: 'tanque', fr: 'réservoir', de: 'Tank', it: 'serbatoio', nl: 'tank', zh: '容器', ja: 'タンク', ru: 'резервуар' },
        },
        {
          id: 'industrial_processing/mining_maintenance/materials/tape',
          localImage: 'industrial_processing/mining_maintenance/materials/tape',
          translations: { en: 'tape', es: 'cinta', pt: 'fita', fr: 'ruban', de: 'Klebeband', it: 'nastro', nl: 'tape', zh: '胶带', ja: 'テープ', ru: 'лента' },
        },
        {
          id: 'industrial_processing/mining_maintenance/materials/valve',
          localImage: 'industrial_processing/mining_maintenance/materials/valve',
          translations: { en: 'valve', es: 'valve', pt: 'valve', fr: 'valve', de: 'valve', it: 'valve', nl: 'klep', zh: '阀门', ja: 'バルブ', ru: 'клапан' },
        }
        ],
      }
      ],
    },
    {
      id: 'mining_processing',
      name: { en: 'Mining Processing', es: 'Procesamiento Minero', pt: 'Processamento', fr: 'Traitement', de: 'Bergbauverarbeitung', it: 'Lavorazione', nl: 'Mijnbouw verwerking', zh: '矿山加工', ja: '採掘加工', ru: 'Горнодобывающая обработка' },
      icon: '⚙️',
      roles: [
      {
        id: 'tools',
        name: { en: 'Tools', es: 'Herramientas', pt: 'Ferramentas', fr: 'Outils', de: 'Werkzeuge', it: 'Attrezzi', nl: 'Gereedschap', zh: '工具', ja: '道具', ru: 'Инструменты' },
        icon: '🔧',
        items: [
        {
          id: 'industrial_processing/mining_processing/tools/alarm',
          localImage: 'industrial_processing/mining_processing/tools/alarm',
          translations: { en: 'alarm', es: 'alarm', pt: 'alarm', fr: 'alarm', de: 'alarm', it: 'alarm', nl: 'alarm', zh: '警报器', ja: 'アラーム', ru: 'сигнализация' },
        },
        {
          id: 'industrial_processing/mining_processing/tools/belt',
          localImage: 'industrial_processing/mining_processing/tools/belt',
          translations: { en: 'belt', es: 'belt', pt: 'belt', fr: 'belt', de: 'belt', it: 'belt', nl: 'riem', zh: '皮带', ja: 'ベルト', ru: 'ремень' },
        },
        {
          id: 'industrial_processing/mining_processing/tools/bin',
          localImage: 'industrial_processing/mining_processing/tools/bin',
          translations: { en: 'bin', es: 'cubo de basura', pt: 'lixeira', fr: 'poubelle', de: 'Mülleimer', it: 'bidone', nl: 'prullenbak', zh: '垃圾桶', ja: 'ビン', ru: 'мусорное ведро' },
        },
        {
          id: 'industrial_processing/mining_processing/tools/box',
          localImage: 'industrial_processing/mining_processing/tools/box',
          translations: { en: 'box', es: 'caja', pt: 'caixa', fr: 'boîte', de: 'Kasten', it: 'scatola', nl: 'doos', zh: '箱子', ja: 'ボックス', ru: 'коробка' },
        },
        {
          id: 'industrial_processing/mining_processing/tools/bucket',
          localImage: 'industrial_processing/mining_processing/tools/bucket',
          translations: { en: 'bucket', es: 'cubo', pt: 'balde', fr: 'seau', de: 'Eimer', it: 'secchio', nl: 'emmer', zh: '水桶', ja: 'バケツ', ru: 'ведро' },
        },
        {
          id: 'industrial_processing/mining_processing/tools/button',
          localImage: 'industrial_processing/mining_processing/tools/button',
          translations: { en: 'button', es: 'button', pt: 'button', fr: 'button', de: 'button', it: 'button', nl: 'knop', zh: '按钮', ja: 'ボタン', ru: 'кнопка' },
        },
        {
          id: 'industrial_processing/mining_processing/tools/cart',
          localImage: 'industrial_processing/mining_processing/tools/cart',
          translations: { en: 'cart', es: 'carrito', pt: 'carrinho', fr: 'chariot', de: 'Wagen', it: 'carrello', nl: 'kar', zh: '推车', ja: 'カート', ru: 'тележка' },
        },
        {
          id: 'industrial_processing/mining_processing/tools/clamp',
          localImage: 'industrial_processing/mining_processing/tools/clamp',
          translations: { en: 'clamp', es: 'clamp', pt: 'clamp', fr: 'clamp', de: 'clamp', it: 'clamp', nl: 'klem', zh: '夹具', ja: 'クランプ', ru: 'зажим' },
        },
        {
          id: 'industrial_processing/mining_processing/tools/container',
          localImage: 'industrial_processing/mining_processing/tools/container',
          translations: { en: 'container', es: 'contenedor', pt: 'recipiente', fr: 'conteneur', de: 'Behälter', it: 'contenitore', nl: 'container', zh: '容器', ja: 'コンテナ', ru: 'контейнер' },
        },
        {
          id: 'industrial_processing/mining_processing/tools/control_panel',
          localImage: 'industrial_processing/mining_processing/tools/control_panel',
          translations: { en: 'control panel', es: 'control panel', pt: 'control panel', fr: 'control panel', de: 'control panel', it: 'control panel', nl: 'bedieningspaneel', zh: '控制面板', ja: 'コントロールパネル', ru: 'панель управления' },
        },
        {
          id: 'industrial_processing/mining_processing/tools/conveyor',
          localImage: 'industrial_processing/mining_processing/tools/conveyor',
          translations: { en: 'conveyor', es: 'conveyor', pt: 'conveyor', fr: 'conveyor', de: 'conveyor', it: 'conveyor', nl: 'transportband', zh: '传送带', ja: 'コンベア', ru: 'конвейер' },
        },
        {
          id: 'industrial_processing/mining_processing/tools/crusher',
          localImage: 'industrial_processing/mining_processing/tools/crusher',
          translations: { en: 'crusher', es: 'crusher', pt: 'crusher', fr: 'crusher', de: 'crusher', it: 'crusher', nl: 'crusher', zh: '粉碎机', ja: 'クラッシャー', ru: 'дробилка' },
        },
        {
          id: 'industrial_processing/mining_processing/tools/engine',
          localImage: 'industrial_processing/mining_processing/tools/engine',
          translations: { en: 'engine', es: 'engine', pt: 'engine', fr: 'engine', de: 'engine', it: 'engine', nl: 'motor', zh: '发动机', ja: 'エンジン', ru: 'двигатель' },
        },
        {
          id: 'industrial_processing/mining_processing/tools/filter',
          localImage: 'industrial_processing/mining_processing/tools/filter',
          translations: { en: 'filter', es: 'filtro', pt: 'filtro', fr: 'filtre', de: 'Filter', it: 'filtro', nl: 'filter', zh: '过滤器', ja: 'フィルター', ru: 'фильтр' },
        },
        {
          id: 'industrial_processing/mining_processing/tools/gauge',
          localImage: 'industrial_processing/mining_processing/tools/gauge',
          translations: { en: 'gauge', es: 'medidor', pt: 'medidor', fr: 'jauge', de: 'Messgerät', it: 'calibro', nl: 'meter', zh: '仪表', ja: 'ゲージ', ru: 'манометр' },
        },
        {
          id: 'industrial_processing/mining_processing/tools/grinder',
          localImage: 'industrial_processing/mining_processing/tools/grinder',
          translations: { en: 'grinder', es: 'grinder', pt: 'grinder', fr: 'grinder', de: 'grinder', it: 'grinder', nl: 'slijpmachine', zh: '研磨机', ja: 'グラインダー', ru: 'шлифовальная машина' },
        },
        {
          id: 'industrial_processing/mining_processing/tools/hammer',
          localImage: 'industrial_processing/mining_processing/tools/hammer',
          translations: { en: 'hammer', es: 'martillo', pt: 'martelo', fr: 'marteau', de: 'Hammer', it: 'martello', nl: 'hamer', zh: '锤子', ja: 'ハンマー', ru: 'молоток' },
        },
        {
          id: 'industrial_processing/mining_processing/tools/lever',
          localImage: 'industrial_processing/mining_processing/tools/lever',
          translations: { en: 'lever', es: 'lever', pt: 'lever', fr: 'lever', de: 'lever', it: 'lever', nl: 'hefboom', zh: '杠杆', ja: 'レバー', ru: 'рычаг' },
        },
        {
          id: 'industrial_processing/mining_processing/tools/meter',
          localImage: 'industrial_processing/mining_processing/tools/meter',
          translations: { en: 'meter', es: 'medidor', pt: 'medidor', fr: 'mètre', de: 'Messgerät', it: 'metro', nl: 'meter', zh: '仪表', ja: 'メーター', ru: 'счетчик' },
        },
        {
          id: 'industrial_processing/mining_processing/tools/mixer',
          localImage: 'industrial_processing/mining_processing/tools/mixer',
          translations: { en: 'mixer', es: 'mezclador', pt: 'betoneira', fr: 'mélangeur', de: 'Mischer', it: 'miscelatore', nl: 'mixer', zh: '搅拌机', ja: 'ミキサー', ru: 'миксер' },
        },
        {
          id: 'industrial_processing/mining_processing/tools/monitor',
          localImage: 'industrial_processing/mining_processing/tools/monitor',
          translations: { en: 'monitor', es: 'monitor', pt: 'monitor', fr: 'monitor', de: 'monitor', it: 'monitor', nl: 'monitor', zh: '显示器', ja: 'モニター', ru: 'монитор' },
        },
        {
          id: 'industrial_processing/mining_processing/tools/motor',
          localImage: 'industrial_processing/mining_processing/tools/motor',
          translations: { en: 'motor', es: 'motor', pt: 'motor', fr: 'motor', de: 'motor', it: 'motor', nl: 'motor', zh: '电机', ja: 'モーター', ru: 'мотор' },
        },
        {
          id: 'industrial_processing/mining_processing/tools/pallet',
          localImage: 'industrial_processing/mining_processing/tools/pallet',
          translations: { en: 'pallet', es: 'palé', pt: 'palete', fr: 'palette', de: 'Palette', it: 'pallet', nl: 'pallet', zh: '托盘', ja: 'パレット', ru: 'паллет' },
        },
        {
          id: 'industrial_processing/mining_processing/tools/pipe',
          localImage: 'industrial_processing/mining_processing/tools/pipe',
          translations: { en: 'pipe', es: 'tubo', pt: 'cano', fr: 'tuyau', de: 'Rohr', it: 'tubo', nl: 'pijp', zh: '管道', ja: 'パイプ', ru: 'труба' },
        },
        {
          id: 'industrial_processing/mining_processing/tools/pump',
          localImage: 'industrial_processing/mining_processing/tools/pump',
          translations: { en: 'pump', es: 'bomba', pt: 'bomba', fr: 'pompe', de: 'Pumpe', it: 'pompa', nl: 'pomp', zh: '泵', ja: 'ポンプ', ru: 'насос' },
        },
        {
          id: 'industrial_processing/mining_processing/tools/rack',
          localImage: 'industrial_processing/mining_processing/tools/rack',
          translations: { en: 'rack', es: 'estante', pt: 'prateleira', fr: 'étagère', de: 'Regal', it: 'scaffale', nl: 'rek', zh: '货架', ja: 'ラック', ru: 'стеллаж' },
        },
        {
          id: 'industrial_processing/mining_processing/tools/roller',
          localImage: 'industrial_processing/mining_processing/tools/roller',
          translations: { en: 'roller', es: 'rodillo', pt: 'rolo', fr: 'rouleau', de: 'Rolle', it: 'rullo', nl: 'roller', zh: '滚筒', ja: 'ローラー', ru: 'валик' },
        },
        {
          id: 'industrial_processing/mining_processing/tools/sampler',
          localImage: 'industrial_processing/mining_processing/tools/sampler',
          translations: { en: 'sampler', es: 'sampler', pt: 'sampler', fr: 'sampler', de: 'sampler', it: 'sampler', nl: 'sampler', zh: '取样器', ja: 'サンプラー', ru: 'пробоотборник' },
        },
        {
          id: 'industrial_processing/mining_processing/tools/scale',
          localImage: 'industrial_processing/mining_processing/tools/scale',
          translations: { en: 'scale', es: 'báscula', pt: 'balança', fr: 'balance', de: 'Waage', it: 'bilancia', nl: 'weegschaal', zh: '秤', ja: 'スケール', ru: 'весы' },
        },
        {
          id: 'industrial_processing/mining_processing/tools/screen',
          localImage: 'industrial_processing/mining_processing/tools/screen',
          translations: { en: 'screen', es: 'screen', pt: 'screen', fr: 'screen', de: 'screen', it: 'screen', nl: 'scherm', zh: '屏幕', ja: 'スクリーン', ru: 'экран' },
        },
        {
          id: 'industrial_processing/mining_processing/tools/screwdriver',
          localImage: 'industrial_processing/mining_processing/tools/screwdriver',
          translations: { en: 'screwdriver', es: 'screwdriver', pt: 'screwdriver', fr: 'screwdriver', de: 'screwdriver', it: 'screwdriver', nl: 'schroevendraaier', zh: '螺丝刀', ja: 'ドライバー', ru: 'отвертка' },
        },
        {
          id: 'industrial_processing/mining_processing/tools/sensor',
          localImage: 'industrial_processing/mining_processing/tools/sensor',
          translations: { en: 'sensor', es: 'sensor', pt: 'sensor', fr: 'sensor', de: 'sensor', it: 'sensor', nl: 'sensor', zh: '传感器', ja: 'センサー', ru: 'датчик' },
        },
        {
          id: 'industrial_processing/mining_processing/tools/separator',
          localImage: 'industrial_processing/mining_processing/tools/separator',
          translations: { en: 'separator', es: 'separator', pt: 'separator', fr: 'separator', de: 'separator', it: 'separator', nl: 'separator', zh: '分离器', ja: 'セパレーター', ru: 'сепаратор' },
        },
        {
          id: 'industrial_processing/mining_processing/tools/switch',
          localImage: 'industrial_processing/mining_processing/tools/switch',
          translations: { en: 'switch', es: 'switch', pt: 'switch', fr: 'switch', de: 'switch', it: 'switch', nl: 'schakelaar', zh: '开关', ja: 'スイッチ', ru: 'выключатель' },
        },
        {
          id: 'industrial_processing/mining_processing/tools/tank',
          localImage: 'industrial_processing/mining_processing/tools/tank',
          translations: { en: 'tank', es: 'tanque', pt: 'tanque', fr: 'réservoir', de: 'Tank', it: 'serbatoio', nl: 'tank', zh: '容器', ja: 'タンク', ru: 'резервуар' },
        },
        {
          id: 'industrial_processing/mining_processing/tools/tester',
          localImage: 'industrial_processing/mining_processing/tools/tester',
          translations: { en: 'tester', es: 'tester', pt: 'tester', fr: 'tester', de: 'tester', it: 'tester', nl: 'tester', zh: '测试仪', ja: 'テスター', ru: 'тестер' },
        },
        {
          id: 'industrial_processing/mining_processing/tools/tool',
          localImage: 'industrial_processing/mining_processing/tools/tool',
          translations: { en: 'tool', es: 'tool', pt: 'tool', fr: 'tool', de: 'tool', it: 'tool', nl: 'gereedschap', zh: '工具', ja: 'ツール', ru: 'инструмент' },
        },
        {
          id: 'industrial_processing/mining_processing/tools/trolley',
          localImage: 'industrial_processing/mining_processing/tools/trolley',
          translations: { en: 'trolley', es: 'carrito', pt: 'carrinho', fr: 'chariot', de: 'Trolley', it: 'carrello', nl: 'trolley', zh: '手推车', ja: 'トロリー', ru: 'тележка' },
        },
        {
          id: 'industrial_processing/mining_processing/tools/valve',
          localImage: 'industrial_processing/mining_processing/tools/valve',
          translations: { en: 'valve', es: 'valve', pt: 'valve', fr: 'valve', de: 'valve', it: 'valve', nl: 'klep', zh: '阀门', ja: 'バルブ', ru: 'клапан' },
        },
        {
          id: 'industrial_processing/mining_processing/tools/wrench',
          localImage: 'industrial_processing/mining_processing/tools/wrench',
          translations: { en: 'wrench', es: 'llave', pt: 'chave inglesa', fr: 'clé', de: 'Schraubenschlüssel', it: 'chiave', nl: 'moersleutel', zh: '扳手', ja: 'レンチ', ru: 'гаечный ключ' },
        }
        ],
      },
      {
        id: 'materials',
        name: { en: 'Materials', es: 'Materiales', pt: 'Materiais', fr: 'Matériaux', de: 'Materialien', it: 'Materiali', nl: 'Materialen', zh: '材料', ja: '材料', ru: 'Материалы' },
        icon: '📦',
        items: [
        {
          id: 'industrial_processing/mining_processing/materials/chemicals',
          localImage: 'industrial_processing/mining_processing/materials/chemicals',
          translations: { en: 'chemicals', es: 'chemicals', pt: 'chemicals', fr: 'chemicals', de: 'chemicals', it: 'chemicals', nl: 'chemicaliën', zh: '化学品', ja: '化学物質', ru: 'химические вещества' },
        },
        {
          id: 'industrial_processing/mining_processing/materials/ore',
          localImage: 'industrial_processing/mining_processing/materials/ore',
          translations: { en: 'ore', es: 'ore', pt: 'ore', fr: 'ore', de: 'ore', it: 'ore', nl: 'erts', zh: '矿石', ja: '鉱石', ru: 'руда' },
        },
        {
          id: 'industrial_processing/mining_processing/materials/processing_agents',
          localImage: 'industrial_processing/mining_processing/materials/processing_agents',
          translations: { en: 'processing agents', es: 'processing agents', pt: 'processing agents', fr: 'processing agents', de: 'processing agents', it: 'processing agents', nl: 'verwerkingsmiddelen', zh: '加工剂', ja: '加工剤', ru: 'технологические добавки' },
        },
        {
          id: 'industrial_processing/mining_processing/materials/water',
          localImage: 'industrial_processing/mining_processing/materials/water',
          translations: { en: 'water', es: 'agua', pt: 'água', fr: 'eau', de: 'Wasser', it: 'acqua', nl: 'water', zh: '水', ja: '水', ru: 'вода' },
        }
        ],
      }
      ],
    }
    ],
  },
  {
    id: 'office',
    name: { en: 'Office', es: 'Oficina', pt: 'Escritório', fr: 'Bureau', de: 'Büro', it: 'Ufficio', nl: 'Kantoor', zh: '办公室', ja: 'オフィス', ru: 'Офис' },
    icon: '💼',
    imageUrl: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800',
    sectors: [
    {
      id: 'office_assistant',
      name: { en: 'Office Assistant', es: 'Auxiliar Administrativo', pt: 'Auxiliar de Escritório', fr: 'Assistant de Bureau', de: 'Bürohilfe', it: 'Assistente Ufficio', nl: 'Kantoorassistent', zh: '办公室助理', ja: 'オフィスアシスタント', ru: 'Офисный помощник' },
      icon: '💼',
      roles: [
      {
        id: 'tools',
        name: { en: 'Tools', es: 'Herramientas', pt: 'Ferramentas', fr: 'Outils', de: 'Werkzeuge', it: 'Attrezzi', nl: 'Gereedschap', zh: '工具', ja: '道具', ru: 'Инструменты' },
        icon: '🔧',
        items: [
        {
          id: 'office_assistant/tools/access_card',
          localImage: 'office_assistant/tools/access_card',
          translations: { en: 'access card', es: 'access card', pt: 'access card', fr: 'access card', de: 'access card', it: 'access card', nl: 'toegangspas', zh: '门禁卡', ja: 'アクセスカード', ru: 'карта доступа' },
        },
        {
          id: 'office_assistant/tools/badge',
          localImage: 'office_assistant/tools/badge',
          translations: { en: 'badge', es: 'badge', pt: 'badge', fr: 'badge', de: 'badge', it: 'badge', nl: 'badge', zh: '徽章', ja: 'バッジ', ru: 'бейдж' },
        },
        {
          id: 'office_assistant/tools/binder',
          localImage: 'office_assistant/tools/binder',
          translations: { en: 'binder', es: 'binder', pt: 'binder', fr: 'binder', de: 'binder', it: 'binder', nl: 'ordner', zh: '活页夹', ja: 'バインダー', ru: 'папка' },
        },
        {
          id: 'office_assistant/tools/binder_clip',
          localImage: 'office_assistant/tools/binder_clip',
          translations: { en: 'binder clip', es: 'binder clip', pt: 'binder clip', fr: 'binder clip', de: 'binder clip', it: 'binder clip', nl: 'binder clip', zh: '长尾夹', ja: 'バインダークリップ', ru: 'зажим для бумаг' },
        },
        {
          id: 'office_assistant/tools/cabinet',
          localImage: 'office_assistant/tools/cabinet',
          translations: { en: 'cabinet', es: 'cabinet', pt: 'cabinet', fr: 'cabinet', de: 'cabinet', it: 'cabinet', nl: 'kast', zh: '柜子', ja: 'キャビネット', ru: 'шкаф' },
        },
        {
          id: 'office_assistant/tools/calculator',
          localImage: 'office_assistant/tools/calculator',
          translations: { en: 'calculator', es: 'calculator', pt: 'calculator', fr: 'calculator', de: 'calculator', it: 'calculator', nl: 'rekenmachine', zh: '计算器', ja: '電卓', ru: 'калькулятор' },
        },
        {
          id: 'office_assistant/tools/calendar',
          localImage: 'office_assistant/tools/calendar',
          translations: { en: 'calendar', es: 'calendar', pt: 'calendar', fr: 'calendar', de: 'calendar', it: 'calendar', nl: 'kalender', zh: '日历', ja: 'カレンダー', ru: 'календарь' },
        },
        {
          id: 'office_assistant/tools/chair',
          localImage: 'office_assistant/tools/chair',
          translations: { en: 'chair', es: 'silla', pt: 'cadeira', fr: 'chaise', de: 'Stuhl', it: 'sedia', nl: 'stoel', zh: '椅子', ja: '椅子', ru: 'стул' },
        },
        {
          id: 'office_assistant/tools/clock',
          localImage: 'office_assistant/tools/clock',
          translations: { en: 'clock', es: 'clock', pt: 'clock', fr: 'clock', de: 'clock', it: 'clock', nl: 'klok', zh: '时钟', ja: '時計', ru: 'часы' },
        },
        {
          id: 'office_assistant/tools/coffee_machine',
          localImage: 'office_assistant/tools/coffee_machine',
          translations: { en: 'coffee machine', es: 'coffee machine', pt: 'coffee machine', fr: 'coffee machine', de: 'coffee machine', it: 'coffee machine', nl: 'koffiemachine', zh: '咖啡机', ja: 'コーヒーメーカー', ru: 'кофемашина' },
        },
        {
          id: 'office_assistant/tools/computer',
          localImage: 'office_assistant/tools/computer',
          translations: { en: 'computer', es: 'computadora', pt: 'computador', fr: 'ordinateur', de: 'Computer', it: 'computer', nl: 'computer', zh: '电脑', ja: 'コンピューター', ru: 'компьютер' },
        },
        {
          id: 'office_assistant/tools/desk',
          localImage: 'office_assistant/tools/desk',
          translations: { en: 'desk', es: 'escritorio', pt: 'mesa', fr: 'bureau', de: 'Schreibtisch', it: 'scrivania', nl: 'bureau', zh: '办公桌', ja: 'デスク', ru: 'стол' },
        },
        {
          id: 'office_assistant/tools/desk_lamp',
          localImage: 'office_assistant/tools/desk_lamp',
          translations: { en: 'desk lamp', es: 'desk lamp', pt: 'desk lamp', fr: 'desk lamp', de: 'desk lamp', it: 'desk lamp', nl: 'bureaulamp', zh: '台灯', ja: 'デスクランプ', ru: 'настольная лампа' },
        },
        {
          id: 'office_assistant/tools/drawer',
          localImage: 'office_assistant/tools/drawer',
          translations: { en: 'drawer', es: 'drawer', pt: 'drawer', fr: 'drawer', de: 'drawer', it: 'drawer', nl: 'lade', zh: '抽屉', ja: '引き出し', ru: 'ящик' },
        },
        {
          id: 'office_assistant/tools/envelope',
          localImage: 'office_assistant/tools/envelope',
          translations: { en: 'envelope', es: 'envelope', pt: 'envelope', fr: 'envelope', de: 'envelope', it: 'envelope', nl: 'envelop', zh: '信封', ja: '封筒', ru: 'конверт' },
        },
        {
          id: 'office_assistant/tools/folder',
          localImage: 'office_assistant/tools/folder',
          translations: { en: 'folder', es: 'carpeta', pt: 'pasta', fr: 'dossier', de: 'Ordner', it: 'cartella', nl: 'map', zh: '文件夹', ja: 'フォルダー', ru: 'папка' },
        },
        {
          id: 'office_assistant/tools/hard_drive',
          localImage: 'office_assistant/tools/hard_drive',
          translations: { en: 'hard drive', es: 'hard drive', pt: 'hard drive', fr: 'hard drive', de: 'hard drive', it: 'hard drive', nl: 'harde schijf', zh: '硬盘', ja: 'ハードドライブ', ru: 'жесткий диск' },
        },
        {
          id: 'office_assistant/tools/headset',
          localImage: 'office_assistant/tools/headset',
          translations: { en: 'headset', es: 'headset', pt: 'headset', fr: 'headset', de: 'headset', it: 'headset', nl: 'headset', zh: '耳机', ja: 'ヘッドセット', ru: 'гарнитура' },
        },
        {
          id: 'office_assistant/tools/highlighter',
          localImage: 'office_assistant/tools/highlighter',
          translations: { en: 'highlighter', es: 'highlighter', pt: 'highlighter', fr: 'highlighter', de: 'highlighter', it: 'highlighter', nl: 'markeerstift', zh: '荧光笔', ja: 'ハイライター', ru: 'маркер-выделитель' },
        },
        {
          id: 'office_assistant/tools/hole_punch',
          localImage: 'office_assistant/tools/hole_punch',
          translations: { en: 'hole punch', es: 'hole punch', pt: 'hole punch', fr: 'hole punch', de: 'hole punch', it: 'hole punch', nl: 'perforator', zh: '打孔机', ja: 'ホールパンチ', ru: 'дырокол' },
        },
        {
          id: 'office_assistant/tools/id_card',
          localImage: 'office_assistant/tools/id_card',
          translations: { en: 'id card', es: 'id card', pt: 'id card', fr: 'id card', de: 'id card', it: 'id card', nl: 'identiteitskaart', zh: '身份证', ja: '身分証明書', ru: 'удостоверение личности' },
        },
        {
          id: 'office_assistant/tools/keyboard',
          localImage: 'office_assistant/tools/keyboard',
          translations: { en: 'keyboard', es: 'teclado', pt: 'teclado', fr: 'clavier', de: 'Tastatur', it: 'tastiera', nl: 'toetsenbord', zh: '键盘', ja: 'キーボード', ru: 'клавиатура' },
        },
        {
          id: 'office_assistant/tools/label_maker',
          localImage: 'office_assistant/tools/label_maker',
          translations: { en: 'label maker', es: 'label maker', pt: 'label maker', fr: 'label maker', de: 'label maker', it: 'label maker', nl: 'etiketmaker', zh: '标签打印机', ja: 'ラベルメーカー', ru: 'принтер для этикеток' },
        },
        {
          id: 'office_assistant/tools/laptop',
          localImage: 'office_assistant/tools/laptop',
          translations: { en: 'laptop', es: 'laptop', pt: 'laptop', fr: 'laptop', de: 'laptop', it: 'laptop', nl: 'laptop', zh: '笔记本电脑', ja: 'ノートパソコン', ru: 'ноутбук' },
        },
        {
          id: 'office_assistant/tools/marker',
          localImage: 'office_assistant/tools/marker',
          translations: { en: 'marker', es: 'marcador', pt: 'marcador', fr: 'marqueur', de: 'Marker', it: 'pennarello', nl: 'marker', zh: '记号笔', ja: 'マーカー', ru: 'маркер' },
        },
        {
          id: 'office_assistant/tools/modem',
          localImage: 'office_assistant/tools/modem',
          translations: { en: 'modem', es: 'modem', pt: 'modem', fr: 'modem', de: 'modem', it: 'modem', nl: 'modem', zh: '调制解调器', ja: 'モデム', ru: 'модем' },
        },
        {
          id: 'office_assistant/tools/monitor',
          localImage: 'office_assistant/tools/monitor',
          translations: { en: 'monitor', es: 'monitor', pt: 'monitor', fr: 'monitor', de: 'monitor', it: 'monitor', nl: 'monitor', zh: '显示器', ja: 'モニター', ru: 'монитор' },
        },
        {
          id: 'office_assistant/tools/mouse',
          localImage: 'office_assistant/tools/mouse',
          translations: { en: 'mouse', es: 'mouse', pt: 'mouse', fr: 'mouse', de: 'mouse', it: 'mouse', nl: 'muis', zh: '鼠标', ja: 'マウス', ru: 'мышь' },
        },
        {
          id: 'office_assistant/tools/notebook',
          localImage: 'office_assistant/tools/notebook',
          translations: { en: 'notebook', es: 'notebook', pt: 'notebook', fr: 'notebook', de: 'notebook', it: 'notebook', nl: 'notitieboekje', zh: '笔记本', ja: 'ノート', ru: 'блокнот' },
        },
        {
          id: 'office_assistant/tools/paper_clip',
          localImage: 'office_assistant/tools/paper_clip',
          translations: { en: 'paper clip', es: 'paper clip', pt: 'paper clip', fr: 'paper clip', de: 'paper clip', it: 'paper clip', nl: 'paperclip', zh: '回形针', ja: 'ペーパークリップ', ru: 'скрепка' },
        },
        {
          id: 'office_assistant/tools/pen',
          localImage: 'office_assistant/tools/pen',
          translations: { en: 'pen', es: 'bolígrafo', pt: 'caneta', fr: 'stylo', de: 'Stift', it: 'penna', nl: 'pen', zh: '钢笔', ja: 'ペン', ru: 'ручка' },
        },
        {
          id: 'office_assistant/tools/pencil',
          localImage: 'office_assistant/tools/pencil',
          translations: { en: 'pencil', es: 'pencil', pt: 'pencil', fr: 'pencil', de: 'pencil', it: 'pencil', nl: 'potlood', zh: '铅笔', ja: '鉛筆', ru: 'карандаш' },
        },
        {
          id: 'office_assistant/tools/phone',
          localImage: 'office_assistant/tools/phone',
          translations: { en: 'phone', es: 'teléfono', pt: 'telefone', fr: 'téléphone', de: 'Telefon', it: 'telefono', nl: 'telefoon', zh: '手机', ja: '電話', ru: 'телефон' },
        },
        {
          id: 'office_assistant/tools/power_strip',
          localImage: 'office_assistant/tools/power_strip',
          translations: { en: 'power strip', es: 'power strip', pt: 'power strip', fr: 'power strip', de: 'power strip', it: 'power strip', nl: 'verlengsnoer', zh: '电源插排', ja: '電源タップ', ru: 'удлинитель' },
        },
        {
          id: 'office_assistant/tools/printer',
          localImage: 'office_assistant/tools/printer',
          translations: { en: 'printer', es: 'impresora', pt: 'impressora', fr: 'imprimante', de: 'Drucker', it: 'stampante', nl: 'printer', zh: '打印机', ja: 'プリンター', ru: 'принтер' },
        },
        {
          id: 'office_assistant/tools/projector',
          localImage: 'office_assistant/tools/projector',
          translations: { en: 'projector', es: 'projector', pt: 'projector', fr: 'projector', de: 'projector', it: 'projector', nl: 'projector', zh: '投影仪', ja: 'プロジェクター', ru: 'проектор' },
        },
        {
          id: 'office_assistant/tools/recycling_bin',
          localImage: 'office_assistant/tools/recycling_bin',
          translations: { en: 'recycling bin', es: 'recycling bin', pt: 'recycling bin', fr: 'recycling bin', de: 'recycling bin', it: 'recycling bin', nl: 'recyclingbak', zh: '回收桶', ja: 'リサイクルビン', ru: 'мусорный контейнер' },
        },
        {
          id: 'office_assistant/tools/router',
          localImage: 'office_assistant/tools/router',
          translations: { en: 'router', es: 'router', pt: 'router', fr: 'router', de: 'router', it: 'router', nl: 'router', zh: '路由器', ja: 'ルーター', ru: 'маршрутизатор' },
        },
        {
          id: 'office_assistant/tools/scanner',
          localImage: 'office_assistant/tools/scanner',
          translations: { en: 'scanner', es: 'escáner', pt: 'scanner', fr: 'scanner', de: 'Scanner', it: 'scanner', nl: 'scanner', zh: '扫描仪', ja: 'スキャナー', ru: 'сканер' },
        },
        {
          id: 'office_assistant/tools/screen',
          localImage: 'office_assistant/tools/screen',
          translations: { en: 'screen', es: 'screen', pt: 'screen', fr: 'screen', de: 'screen', it: 'screen', nl: 'scherm', zh: '屏幕', ja: 'スクリーン', ru: 'экран' },
        },
        {
          id: 'office_assistant/tools/shelf',
          localImage: 'office_assistant/tools/shelf',
          translations: { en: 'shelf', es: 'shelf', pt: 'shelf', fr: 'shelf', de: 'shelf', it: 'shelf', nl: 'plank', zh: '架子', ja: '棚', ru: 'полка' },
        },
        {
          id: 'office_assistant/tools/shredder',
          localImage: 'office_assistant/tools/shredder',
          translations: { en: 'shredder', es: 'shredder', pt: 'shredder', fr: 'shredder', de: 'shredder', it: 'shredder', nl: 'versnipperaar', zh: '碎纸机', ja: 'シュレッダー', ru: 'шредер' },
        },
        {
          id: 'office_assistant/tools/stapler',
          localImage: 'office_assistant/tools/stapler',
          translations: { en: 'stapler', es: 'grapadora', pt: 'grampeador', fr: 'agrafeuse', de: 'Hefter', it: 'cucitrice', nl: 'nietmachine', zh: '订书机', ja: 'ホチキス', ru: 'степлер' },
        },
        {
          id: 'office_assistant/tools/tape_dispenser',
          localImage: 'office_assistant/tools/tape_dispenser',
          translations: { en: 'tape dispenser', es: 'tape dispenser', pt: 'tape dispenser', fr: 'tape dispenser', de: 'tape dispenser', it: 'tape dispenser', nl: 'plakbanddispenser', zh: '胶带分发器', ja: 'テープディスペンサー', ru: 'диспенсер для ленты' },
        },
        {
          id: 'office_assistant/tools/trash_bin',
          localImage: 'office_assistant/tools/trash_bin',
          translations: { en: 'trash bin', es: 'trash bin', pt: 'trash bin', fr: 'trash bin', de: 'trash bin', it: 'trash bin', nl: 'vuilnisbak', zh: '垃圾桶', ja: 'ゴミ箱', ru: 'мусорный бак' },
        },
        {
          id: 'office_assistant/tools/tray',
          localImage: 'office_assistant/tools/tray',
          translations: { en: 'tray', es: 'bandeja', pt: 'bandeja', fr: 'plateau', de: 'Tablett', it: 'vassoio', nl: 'dienblad', zh: '托盘', ja: 'トレイ', ru: 'поднос' },
        },
        {
          id: 'office_assistant/tools/usb_drive',
          localImage: 'office_assistant/tools/usb_drive',
          translations: { en: 'usb drive', es: 'usb drive', pt: 'usb drive', fr: 'usb drive', de: 'usb drive', it: 'usb drive', nl: 'usb-stick', zh: 'U盘', ja: 'USBドライブ', ru: 'флешка' },
        },
        {
          id: 'office_assistant/tools/water_dispenser',
          localImage: 'office_assistant/tools/water_dispenser',
          translations: { en: 'water dispenser', es: 'water dispenser', pt: 'water dispenser', fr: 'water dispenser', de: 'water dispenser', it: 'water dispenser', nl: 'waterkoeler', zh: '饮水机', ja: 'ウォーターディスペンサー', ru: 'кулер для воды' },
        },
        {
          id: 'office_assistant/tools/webcam',
          localImage: 'office_assistant/tools/webcam',
          translations: { en: 'webcam', es: 'webcam', pt: 'webcam', fr: 'webcam', de: 'webcam', it: 'webcam', nl: 'webcam', zh: '网络摄像头', ja: 'ウェブカメラ', ru: 'веб-камера' },
        },
        {
          id: 'office_assistant/tools/whiteboard',
          localImage: 'office_assistant/tools/whiteboard',
          translations: { en: 'whiteboard', es: 'whiteboard', pt: 'whiteboard', fr: 'whiteboard', de: 'whiteboard', it: 'whiteboard', nl: 'whiteboard', zh: '白板', ja: 'ホワイトボード', ru: 'доска для маркеров' },
        }
        ],
      },
      {
        id: 'materials',
        name: { en: 'Materials', es: 'Materiales', pt: 'Materiais', fr: 'Matériaux', de: 'Materialien', it: 'Materiali', nl: 'Materialen', zh: '材料', ja: '材料', ru: 'Материалы' },
        icon: '📦',
        items: [
        {
          id: 'office_assistant/materials/adapters',
          localImage: 'office_assistant/materials/adapters',
          translations: { en: 'adapters', es: 'adapters', pt: 'adapters', fr: 'adapters', de: 'adapters', it: 'adapters', nl: 'adapters', zh: '适配器', ja: 'アダプター', ru: 'адаптеры' },
        },
        {
          id: 'office_assistant/materials/batteries',
          localImage: 'office_assistant/materials/batteries',
          translations: { en: 'batteries', es: 'batteries', pt: 'batteries', fr: 'batteries', de: 'batteries', it: 'batteries', nl: 'batterijen', zh: '电池', ja: '電池', ru: 'батарейки' },
        },
        {
          id: 'office_assistant/materials/binder_clips',
          localImage: 'office_assistant/materials/binder_clips',
          translations: { en: 'binder clips', es: 'binder clips', pt: 'binder clips', fr: 'binder clips', de: 'binder clips', it: 'binder clips', nl: 'binder clips', zh: '长尾夹', ja: 'バインダークリップ', ru: 'зажимы для бумаг' },
        },
        {
          id: 'office_assistant/materials/boxes',
          localImage: 'office_assistant/materials/boxes',
          translations: { en: 'boxes', es: 'boxes', pt: 'boxes', fr: 'boxes', de: 'boxes', it: 'boxes', nl: 'dozen', zh: '箱子', ja: 'ボックス', ru: 'коробки' },
        },
        {
          id: 'office_assistant/materials/brochures',
          localImage: 'office_assistant/materials/brochures',
          translations: { en: 'brochures', es: 'brochures', pt: 'brochures', fr: 'brochures', de: 'brochures', it: 'brochures', nl: 'brochures', zh: '宣传册', ja: 'パンフレット', ru: 'брошюры' },
        },
        {
          id: 'office_assistant/materials/cables',
          localImage: 'office_assistant/materials/cables',
          translations: { en: 'cables', es: 'cables', pt: 'cables', fr: 'cables', de: 'cables', it: 'cables', nl: 'kabels', zh: '电缆', ja: 'ケーブル', ru: 'кабели' },
        },
        {
          id: 'office_assistant/materials/carbon_paper',
          localImage: 'office_assistant/materials/carbon_paper',
          translations: { en: 'carbon paper', es: 'carbon paper', pt: 'carbon paper', fr: 'carbon paper', de: 'carbon paper', it: 'carbon paper', nl: 'carbonpapier', zh: '复写纸', ja: 'カーボン紙', ru: 'копировальная бумага' },
        },
        {
          id: 'office_assistant/materials/chargers',
          localImage: 'office_assistant/materials/chargers',
          translations: { en: 'chargers', es: 'chargers', pt: 'chargers', fr: 'chargers', de: 'chargers', it: 'chargers', nl: 'opladers', zh: '充电器', ja: '充電器', ru: 'зарядные устройства' },
        },
        {
          id: 'office_assistant/materials/cleaning_spray',
          localImage: 'office_assistant/materials/cleaning_spray',
          translations: { en: 'cleaning spray', es: 'cleaning spray', pt: 'cleaning spray', fr: 'cleaning spray', de: 'cleaning spray', it: 'cleaning spray', nl: 'reinigingsspray', zh: '清洁喷雾', ja: '洗浄スプレー', ru: 'чистящий спрей' },
        },
        {
          id: 'office_assistant/materials/coffee',
          localImage: 'office_assistant/materials/coffee',
          translations: { en: 'coffee', es: 'coffee', pt: 'coffee', fr: 'coffee', de: 'coffee', it: 'coffee', nl: 'koffie', zh: '咖啡', ja: 'コーヒー', ru: 'кофе' },
        },
        {
          id: 'office_assistant/materials/connectors',
          localImage: 'office_assistant/materials/connectors',
          translations: { en: 'connectors', es: 'connectors', pt: 'connectors', fr: 'connectors', de: 'connectors', it: 'connectors', nl: 'connectors', zh: '连接器', ja: 'コネクター', ru: 'разъемы' },
        },
        {
          id: 'office_assistant/materials/contracts',
          localImage: 'office_assistant/materials/contracts',
          translations: { en: 'contracts', es: 'contracts', pt: 'contracts', fr: 'contracts', de: 'contracts', it: 'contracts', nl: 'contracten', zh: '合同', ja: '契約書', ru: 'контракты' },
        },
        {
          id: 'office_assistant/materials/cups',
          localImage: 'office_assistant/materials/cups',
          translations: { en: 'cups', es: 'cups', pt: 'cups', fr: 'cups', de: 'cups', it: 'cups', nl: 'bekers', zh: '杯子', ja: 'カップ', ru: 'стаканы' },
        },
        {
          id: 'office_assistant/materials/documents',
          localImage: 'office_assistant/materials/documents',
          translations: { en: 'documents', es: 'documents', pt: 'documents', fr: 'documents', de: 'documents', it: 'documents', nl: 'documenten', zh: '文件', ja: '書類', ru: 'документы' },
        },
        {
          id: 'office_assistant/materials/envelopes',
          localImage: 'office_assistant/materials/envelopes',
          translations: { en: 'envelopes', es: 'envelopes', pt: 'envelopes', fr: 'envelopes', de: 'envelopes', it: 'envelopes', nl: 'enveloppen', zh: '信封', ja: '封筒', ru: 'конверты' },
        },
        {
          id: 'office_assistant/materials/extension_cables',
          localImage: 'office_assistant/materials/extension_cables',
          translations: { en: 'extension cables', es: 'extension cables', pt: 'extension cables', fr: 'extension cables', de: 'extension cables', it: 'extension cables', nl: 'verlengkabels', zh: '延长线', ja: '延長ケーブル', ru: 'удлинительные кабели' },
        },
        {
          id: 'office_assistant/materials/files',
          localImage: 'office_assistant/materials/files',
          translations: { en: 'files', es: 'files', pt: 'files', fr: 'files', de: 'files', it: 'files', nl: 'bestanden', zh: '文件夹', ja: 'ファイル', ru: 'папки' },
        },
        {
          id: 'office_assistant/materials/folders',
          localImage: 'office_assistant/materials/folders',
          translations: { en: 'folders', es: 'folders', pt: 'folders', fr: 'folders', de: 'folders', it: 'folders', nl: 'mappen', zh: '文件夹', ja: 'フォルダー', ru: 'папки' },
        },
        {
          id: 'office_assistant/materials/forms',
          localImage: 'office_assistant/materials/forms',
          translations: { en: 'forms', es: 'forms', pt: 'forms', fr: 'forms', de: 'forms', it: 'forms', nl: 'formulieren', zh: '表格', ja: 'フォーム', ru: 'бланки' },
        },
        {
          id: 'office_assistant/materials/glue_sticks',
          localImage: 'office_assistant/materials/glue_sticks',
          translations: { en: 'glue sticks', es: 'glue sticks', pt: 'glue sticks', fr: 'glue sticks', de: 'glue sticks', it: 'glue sticks', nl: 'lijmstiften', zh: '胶棒', ja: 'グルースティック', ru: 'клеевые стержни' },
        },
        {
          id: 'office_assistant/materials/hand_sanitizer',
          localImage: 'office_assistant/materials/hand_sanitizer',
          translations: { en: 'hand sanitizer', es: 'hand sanitizer', pt: 'hand sanitizer', fr: 'hand sanitizer', de: 'hand sanitizer', it: 'hand sanitizer', nl: 'handdesinfectiemiddel', zh: '洗手液', ja: 'ハンドサニタイザー', ru: 'антисептик для рук' },
        },
        {
          id: 'office_assistant/materials/ink',
          localImage: 'office_assistant/materials/ink',
          translations: { en: 'ink', es: 'ink', pt: 'ink', fr: 'ink', de: 'ink', it: 'ink', nl: 'inkt', zh: '墨水', ja: 'インク', ru: 'чернила' },
        },
        {
          id: 'office_assistant/materials/invoices',
          localImage: 'office_assistant/materials/invoices',
          translations: { en: 'invoices', es: 'invoices', pt: 'invoices', fr: 'invoices', de: 'invoices', it: 'invoices', nl: 'facturen', zh: '发票', ja: '請求書', ru: 'счета-фактуры' },
        },
        {
          id: 'office_assistant/materials/labels',
          localImage: 'office_assistant/materials/labels',
          translations: { en: 'labels', es: 'labels', pt: 'labels', fr: 'labels', de: 'labels', it: 'labels', nl: 'etiketten', zh: '标签', ja: 'ラベル', ru: 'этикетки' },
        },
        {
          id: 'office_assistant/materials/manuals',
          localImage: 'office_assistant/materials/manuals',
          translations: { en: 'manuals', es: 'manuals', pt: 'manuals', fr: 'manuals', de: 'manuals', it: 'manuals', nl: 'handleidingen', zh: '手册', ja: 'マニュアル', ru: 'руководства' },
        },
        {
          id: 'office_assistant/materials/markers_ink',
          localImage: 'office_assistant/materials/markers_ink',
          translations: { en: 'markers ink', es: 'markers ink', pt: 'markers ink', fr: 'markers ink', de: 'markers ink', it: 'markers ink', nl: 'markerinkt', zh: '标记墨水', ja: 'マーカーインク', ru: 'чернила для маркера' },
        },
        {
          id: 'office_assistant/materials/milk',
          localImage: 'office_assistant/materials/milk',
          translations: { en: 'milk', es: 'milk', pt: 'milk', fr: 'milk', de: 'milk', it: 'milk', nl: 'melk', zh: '牛奶', ja: 'ミルク', ru: 'молоко' },
        },
        {
          id: 'office_assistant/materials/notebooks',
          localImage: 'office_assistant/materials/notebooks',
          translations: { en: 'notebooks', es: 'notebooks', pt: 'notebooks', fr: 'notebooks', de: 'notebooks', it: 'notebooks', nl: 'notitieboekjes', zh: '笔记本', ja: 'ノート', ru: 'блокноты' },
        },
        {
          id: 'office_assistant/materials/packaging',
          localImage: 'office_assistant/materials/packaging',
          translations: { en: 'packaging', es: 'embalaje', pt: 'embalagem', fr: 'emballage', de: 'Verpackung', it: 'imballaggio', nl: 'verpakking', zh: '包装', ja: '梱包', ru: 'упаковка' },
        },
        {
          id: 'office_assistant/materials/paper',
          localImage: 'office_assistant/materials/paper',
          translations: { en: 'paper', es: 'papel', pt: 'papel', fr: 'papier', de: 'Papier', it: 'carta', nl: 'papier', zh: '纸', ja: '紙', ru: 'бумага' },
        },
        {
          id: 'office_assistant/materials/paper_clips',
          localImage: 'office_assistant/materials/paper_clips',
          translations: { en: 'paper clips', es: 'paper clips', pt: 'paper clips', fr: 'paper clips', de: 'paper clips', it: 'paper clips', nl: 'paperclips', zh: '回形针', ja: 'ペーパークリップ', ru: 'скрепки' },
        },
        {
          id: 'office_assistant/materials/photo_paper',
          localImage: 'office_assistant/materials/photo_paper',
          translations: { en: 'photo paper', es: 'photo paper', pt: 'photo paper', fr: 'photo paper', de: 'photo paper', it: 'photo paper', nl: 'fotopapier', zh: '照片纸', ja: '写真用紙', ru: 'фотобумага' },
        },
        {
          id: 'office_assistant/materials/plugs',
          localImage: 'office_assistant/materials/plugs',
          translations: { en: 'plugs', es: 'plugs', pt: 'plugs', fr: 'plugs', de: 'plugs', it: 'plugs', nl: 'pluggen', zh: '插头', ja: 'プラグ', ru: 'разъемы' },
        },
        {
          id: 'office_assistant/materials/printer_paper',
          localImage: 'office_assistant/materials/printer_paper',
          translations: { en: 'printer paper', es: 'printer paper', pt: 'printer paper', fr: 'printer paper', de: 'printer paper', it: 'printer paper', nl: 'printerpapier', zh: '打印纸', ja: 'プリンター用紙', ru: 'бумага для принтера' },
        },
        {
          id: 'office_assistant/materials/receipts',
          localImage: 'office_assistant/materials/receipts',
          translations: { en: 'receipts', es: 'receipts', pt: 'receipts', fr: 'receipts', de: 'receipts', it: 'receipts', nl: 'bonnen', zh: '收据', ja: 'レシート', ru: 'квитанции' },
        },
        {
          id: 'office_assistant/materials/recycling_bags',
          localImage: 'office_assistant/materials/recycling_bags',
          translations: { en: 'recycling bags', es: 'recycling bags', pt: 'recycling bags', fr: 'recycling bags', de: 'recycling bags', it: 'recycling bags', nl: 'recyclingzakken', zh: '回收袋', ja: 'リサイクル袋', ru: 'пакеты для мусора' },
        },
        {
          id: 'office_assistant/materials/refill_ink',
          localImage: 'office_assistant/materials/refill_ink',
          translations: { en: 'refill ink', es: 'refill ink', pt: 'refill ink', fr: 'refill ink', de: 'refill ink', it: 'refill ink', nl: 'navulinkt', zh: '补充墨水', ja: '詰め替えインク', ru: 'сменные чернила' },
        },
        {
          id: 'office_assistant/materials/reports',
          localImage: 'office_assistant/materials/reports',
          translations: { en: 'reports', es: 'reports', pt: 'reports', fr: 'reports', de: 'reports', it: 'reports', nl: 'rapporten', zh: '报告', ja: 'レポート', ru: 'отчеты' },
        },
        {
          id: 'office_assistant/materials/rubber_bands',
          localImage: 'office_assistant/materials/rubber_bands',
          translations: { en: 'rubber bands', es: 'rubber bands', pt: 'rubber bands', fr: 'rubber bands', de: 'rubber bands', it: 'rubber bands', nl: 'elastiekjes', zh: '橡皮筋', ja: '輪ゴム', ru: 'резинки' },
        },
        {
          id: 'office_assistant/materials/sticky_notes',
          localImage: 'office_assistant/materials/sticky_notes',
          translations: { en: 'sticky notes', es: 'sticky notes', pt: 'sticky notes', fr: 'sticky notes', de: 'sticky notes', it: 'sticky notes', nl: 'plaknotities', zh: '便利贴', ja: '付箋', ru: 'стикеры' },
        },
        {
          id: 'office_assistant/materials/sugar',
          localImage: 'office_assistant/materials/sugar',
          translations: { en: 'sugar', es: 'sugar', pt: 'sugar', fr: 'sugar', de: 'sugar', it: 'sugar', nl: 'suiker', zh: '糖', ja: '砂糖', ru: 'сахар' },
        },
        {
          id: 'office_assistant/materials/tape_rolls',
          localImage: 'office_assistant/materials/tape_rolls',
          translations: { en: 'tape rolls', es: 'tape rolls', pt: 'tape rolls', fr: 'tape rolls', de: 'tape rolls', it: 'tape rolls', nl: 'taperolletjes', zh: '胶卷', ja: 'テープロール', ru: 'рулоны ленты' },
        },
        {
          id: 'office_assistant/materials/tea',
          localImage: 'office_assistant/materials/tea',
          translations: { en: 'tea', es: 'tea', pt: 'tea', fr: 'tea', de: 'tea', it: 'tea', nl: 'thee', zh: '茶', ja: 'お茶', ru: 'чай' },
        },
        {
          id: 'office_assistant/materials/tissues',
          localImage: 'office_assistant/materials/tissues',
          translations: { en: 'tissues', es: 'tissues', pt: 'tissues', fr: 'tissues', de: 'tissues', it: 'tissues', nl: 'tissues', zh: '纸巾', ja: 'ティッシュ', ru: 'салфетки' },
        },
        {
          id: 'office_assistant/materials/toner',
          localImage: 'office_assistant/materials/toner',
          translations: { en: 'toner', es: 'toner', pt: 'toner', fr: 'toner', de: 'toner', it: 'toner', nl: 'toner', zh: '墨粉', ja: 'トナー', ru: 'тонер' },
        },
        {
          id: 'office_assistant/materials/toner_cartridges',
          localImage: 'office_assistant/materials/toner_cartridges',
          translations: { en: 'toner cartridges', es: 'toner cartridges', pt: 'toner cartridges', fr: 'toner cartridges', de: 'toner cartridges', it: 'toner cartridges', nl: 'tonercartridges', zh: '墨盒', ja: 'トナーカートリッジ', ru: 'картриджи с тонером' },
        },
        {
          id: 'office_assistant/materials/trash_bags',
          localImage: 'office_assistant/materials/trash_bags',
          translations: { en: 'trash bags', es: 'trash bags', pt: 'trash bags', fr: 'trash bags', de: 'trash bags', it: 'trash bags', nl: 'vuilniszakken', zh: '垃圾袋', ja: 'ゴミ袋', ru: 'мусорные пакеты' },
        },
        {
          id: 'office_assistant/materials/usb_cables',
          localImage: 'office_assistant/materials/usb_cables',
          translations: { en: 'usb cables', es: 'usb cables', pt: 'usb cables', fr: 'usb cables', de: 'usb cables', it: 'usb cables', nl: 'usb-kabels', zh: 'USB线', ja: 'USBケーブル', ru: 'USB-кабели' },
        },
        {
          id: 'office_assistant/materials/water_bottles',
          localImage: 'office_assistant/materials/water_bottles',
          translations: { en: 'water bottles', es: 'water bottles', pt: 'water bottles', fr: 'water bottles', de: 'water bottles', it: 'water bottles', nl: 'waterflessen', zh: '水瓶', ja: 'ウォーターボトル', ru: 'бутылки воды' },
        },
        {
          id: 'office_assistant/materials/wipes',
          localImage: 'office_assistant/materials/wipes',
          translations: { en: 'wipes', es: 'wipes', pt: 'wipes', fr: 'wipes', de: 'wipes', it: 'wipes', nl: 'doekjes', zh: '湿巾', ja: 'ウェットティッシュ', ru: 'влажные салфетки' },
        }
        ],
      }
      ],
    }
    ],
  },
  {
    id: 'supermarket',
    name: { en: 'Supermarket', es: 'Supermercado', pt: 'Supermercado', fr: 'Supermarché', de: 'Supermarkt', it: 'Supermercato', nl: 'Supermarkt', zh: '超市', ja: 'スーパーマーケット', ru: 'Супермаркет' },
    icon: '🛒',
    imageUrl: 'https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=800',
    sectors: [
    {
      id: 'cashier',
      name: { en: 'Cashier', es: 'Cajero', pt: 'Caixa', fr: 'Caissier', de: 'Kassierer', it: 'Cassiere', nl: 'Cashier', zh: 'Cashier', ja: 'Cashier', ru: 'Cashier' },
      icon: '🛒',
      roles: [
      {
        id: 'tools',
        name: { en: 'Tools', es: 'Herramientas', pt: 'Ferramentas', fr: 'Outils', de: 'Werkzeuge', it: 'Attrezzi', nl: 'Gereedschap', zh: '工具', ja: '道具', ru: 'Инструменты' },
        icon: '🔧',
        items: [
        {
          id: 'supermarket/cashier/cash_register',
          localImage: 'supermarket/cashier/cash_register',
          translations: { en: 'cash register', es: 'caja registradora', pt: 'caixa registradora', fr: 'caisse enregistreuse', de: 'Registrierkasse', it: 'registratore di cassa', nl: 'kassa', zh: '收银机', ja: 'レジ', ru: 'кассовый аппарат' },
        },
        {
          id: 'supermarket/cashier/barcode_scanner',
          localImage: 'supermarket/cashier/barcode_scanner',
          translations: { en: 'barcode scanner', es: 'escáner de código de barras', pt: 'leitor de código de barras', fr: 'scanner de codes-barres', de: 'Barcode-Scanner', it: 'scanner codici a barre', nl: 'barcode-scanner', zh: '条码扫描仪', ja: 'バーコードスキャナー', ru: 'сканер штрихкодов' },
        },
        {
          id: 'supermarket/cashier/receipt_printer',
          localImage: 'supermarket/cashier/receipt_printer',
          translations: { en: 'receipt printer', es: 'impresora de recibos', pt: 'impressora de recibo', fr: 'imprimante de reçus', de: 'Bondrucker', it: 'stampante per ricevute', nl: 'bonprinter', zh: '收据打印机', ja: 'レシートプリンター', ru: 'принтер чеков' },
        },
        {
          id: 'supermarket/cashier/card_machine',
          localImage: 'supermarket/cashier/card_machine',
          translations: { en: 'card machine', es: 'terminal de pago', pt: 'máquina de cartão', fr: 'terminal de paiement', de: 'Kartenlesegerät', it: 'terminale POS', nl: 'betaalterminal', zh: '刷卡机', ja: 'カード決済端末', ru: 'терминал для карт' },
        },
        {
          id: 'supermarket/cashier/cash_drawer',
          localImage: 'supermarket/cashier/cash_drawer',
          translations: { en: 'cash drawer', es: 'cajón portamonedas', pt: 'gaveta de dinheiro', fr: 'tiroir-caisse', de: 'Kassenlade', it: 'cassetto del denaro', nl: 'kassalade', zh: '收银抽屉', ja: 'キャッシュドロワー', ru: 'денежный ящик' },
        },
        {
          id: 'supermarket/cashier/pos_system',
          localImage: 'supermarket/cashier/pos_system',
          translations: { en: 'pos system', es: 'sistema POS', pt: 'sistema POS', fr: 'système de point de vente', de: 'Kassensystem', it: 'sistema POS', nl: 'kassasysteem', zh: '销售点系统', ja: 'POSシステム', ru: 'POS-система' },
        },
        {
          id: 'supermarket/cashier/touch_screen_monitor',
          localImage: 'supermarket/cashier/touch_screen_monitor',
          translations: { en: 'touch screen monitor', es: 'monitor de pantalla táctil', pt: 'monitor de tela sensível ao toque', fr: 'écran tactile', de: 'Touchscreen-Monitor', it: 'monitor touchscreen', nl: 'touchscreen monitor', zh: '触摸屏显示器', ja: 'タッチスクリーンモニター', ru: 'сенсорный монитор' },
        },
        {
          id: 'supermarket/cashier/keyboard',
          localImage: 'supermarket/cashier/keyboard',
          translations: { en: 'keyboard', es: 'teclado', pt: 'teclado', fr: 'clavier', de: 'Tastatur', it: 'tastiera', nl: 'toetsenbord', zh: '键盘', ja: 'キーボード', ru: 'клавиатура' },
        },
        {
          id: 'supermarket/cashier/mouse',
          localImage: 'supermarket/cashier/mouse',
          translations: { en: 'mouse', es: 'ratón', pt: 'mouse', fr: 'souris', de: 'Maus', it: 'mouse', nl: 'muis', zh: '鼠标', ja: 'マウス', ru: 'мышь' },
        },
        {
          id: 'supermarket/cashier/receipt_paper',
          localImage: 'supermarket/cashier/receipt_paper',
          translations: { en: 'receipt paper', es: 'papel de recibo', pt: 'papel de recibo', fr: 'papier thermique', de: 'Kassenpapier', it: 'carta per ricevute', nl: 'kassarol', zh: '收据纸', ja: 'レシート用紙', ru: 'бумага для чеков' },
        },
        {
          id: 'supermarket/cashier/coin_tray',
          localImage: 'supermarket/cashier/coin_tray',
          translations: { en: 'coin tray', es: 'bandeja de monedas', pt: 'bandeja de moedas', fr: 'plateau à monnaie', de: 'Münzschale', it: 'vassoio monete', nl: 'muntenlade', zh: '硬币托盘', ja: 'コイントレー', ru: 'монетница' },
        },
        {
          id: 'supermarket/cashier/note_counter',
          localImage: 'supermarket/cashier/note_counter',
          translations: { en: 'note counter', es: 'contador de billetes', pt: 'contadora de cédulas', fr: 'compteur de billets', de: 'Geldscheinzähler', it: 'contacarte', nl: 'biljetteller', zh: '点钞机', ja: '紙幣計算機', ru: 'счётчик банкнот' },
        },
        {
          id: 'supermarket/cashier/coupon_scanner',
          localImage: 'supermarket/cashier/coupon_scanner',
          translations: { en: 'coupon scanner', es: 'escáner de cupones', pt: 'leitor de cupons', fr: 'scanner de coupons', de: 'Coupon-Scanner', it: 'scanner coupon', nl: 'couponscanner', zh: '优惠券扫描仪', ja: 'クーポンスキャナー', ru: 'сканер купонов' },
        },
        {
          id: 'supermarket/cashier/gift_card_reader',
          localImage: 'supermarket/cashier/gift_card_reader',
          translations: { en: 'gift card reader', es: 'lector de tarjetas regalo', pt: 'leitor de cartão presente', fr: 'lecteur de cartes cadeaux', de: 'Geschenkkarten-Leser', it: 'lettore carte regalo', nl: 'cadeaukaartlezer', zh: '礼品卡读卡器', ja: 'ギフトカードリーダー', ru: 'считыватель подарочных карт' },
        },
        {
          id: 'supermarket/cashier/nfc_reader',
          localImage: 'supermarket/cashier/nfc_reader',
          translations: { en: 'nfc reader', es: 'lector NFC', pt: 'leitor NFC', fr: 'lecteur NFC', de: 'NFC-Leser', it: 'lettore NFC', nl: 'NFC-lezer', zh: 'NFC读卡器', ja: 'NFCリーダー', ru: 'NFC-считыватель' },
        },
        {
          id: 'supermarket/cashier/scale',
          localImage: 'supermarket/cashier/scale',
          translations: { en: 'scale', es: 'báscula', pt: 'balança', fr: 'balance', de: 'Waage', it: 'bilancia', nl: 'weegschaal', zh: '秤', ja: 'はかり', ru: 'весы' },
        },
        {
          id: 'supermarket/cashier/security_tag_remover',
          localImage: 'supermarket/cashier/security_tag_remover',
          translations: { en: 'security tag remover', es: 'removedor de etiquetas de seguridad', pt: 'removedor de etiqueta de segurança', fr: 'désactivateur d\'antivol', de: 'Sicherheitsetikettenentferner', it: 'rimozione tag sicurezza', nl: 'beveiligingslabelfrees', zh: '安全标签去除器', ja: 'セキュリティタグリムーバー', ru: 'съёмник защитных этикеток' },
        },
        {
          id: 'supermarket/cashier/hand_sanitizer',
          localImage: 'supermarket/cashier/hand_sanitizer',
          translations: { en: 'hand sanitizer', es: 'desinfectante de manos', pt: 'desinfetante para mãos', fr: 'désinfectant pour les mains', de: 'Handdesinfektionsmittel', it: 'disinfettante per mani', nl: 'handdesinfectie', zh: '洗手液', ja: 'ハンドサニタイザー', ru: 'антисептик для рук' },
        },
        {
          id: 'supermarket/cashier/counter_mat',
          localImage: 'supermarket/cashier/counter_mat',
          translations: { en: 'counter mat', es: 'tapete de mostrador', pt: 'tapete de balcão', fr: 'tapis de comptoir', de: 'Thekenmatte', it: 'tappetino bancone', nl: 'countermat', zh: '柜台垫', ja: 'カウンターマット', ru: 'коврик для стойки' },
        },
        {
          id: 'supermarket/cashier/queue_barrier',
          localImage: 'supermarket/cashier/queue_barrier',
          translations: { en: 'queue barrier', es: 'barrera de cola', pt: 'separador de fila', fr: 'barrière de file', de: 'Warteschlangentrenner', it: 'barriera coda', nl: 'rijbegrenzer', zh: '排队护栏', ja: 'キューバリア', ru: 'ограждение очереди' },
        },
        {
          id: 'supermarket/cashier/price_checker',
          localImage: 'supermarket/cashier/price_checker',
          translations: { en: 'price checker', es: 'comprobador de precios', pt: 'verificador de preço', fr: 'vérificateur de prix', de: 'Preiskontroller', it: 'verificatore prezzi', nl: 'prijscontroleur', zh: '价格查询机', ja: '価格確認機', ru: 'проверщик цен' },
        },
        {
          id: 'supermarket/cashier/id_scanner',
          localImage: 'supermarket/cashier/id_scanner',
          translations: { en: 'id scanner', es: 'escáner de identidad', pt: 'leitor de identidade', fr: 'scanner d\'identité', de: 'Ausweis-Scanner', it: 'scanner ID', nl: 'ID-scanner', zh: '身份证扫描仪', ja: 'IDスキャナー', ru: 'сканер удостоверений' },
        },
        {
          id: 'supermarket/cashier/digital_display',
          localImage: 'supermarket/cashier/digital_display',
          translations: { en: 'digital display', es: 'pantalla digital', pt: 'display digital', fr: 'afficheur numérique', de: 'Digitalanzeige', it: 'display digitale', nl: 'digitaal display', zh: '数字显示屏', ja: 'デジタルディスプレイ', ru: 'цифровой дисплей' },
        },
        {
          id: 'supermarket/cashier/speaker_system',
          localImage: 'supermarket/cashier/speaker_system',
          translations: { en: 'speaker system', es: 'sistema de altavoces', pt: 'sistema de alto-falantes', fr: 'système de haut-parleurs', de: 'Lautsprechersystem', it: 'sistema altoparlanti', nl: 'luidsprekersysteem', zh: '扬声器系统', ja: 'スピーカーシステム', ru: 'акустическая система' },
        },
        {
          id: 'supermarket/cashier/headset',
          localImage: 'supermarket/cashier/headset',
          translations: { en: 'headset', es: 'auriculares', pt: 'fone de ouvido', fr: 'casque', de: 'Headset', it: 'auricolare', nl: 'headset', zh: '耳机', ja: 'ヘッドセット', ru: 'гарнитура' },
        },
        {
          id: 'supermarket/cashier/cash_bag',
          localImage: 'supermarket/cashier/cash_bag',
          translations: { en: 'cash bag', es: 'bolsa de efectivo', pt: 'bolsa de dinheiro', fr: 'sac à monnaie', de: 'Geldtasche', it: 'borsa contanti', nl: 'geldzak', zh: '现金袋', ja: '現金袋', ru: 'денежная сумка' },
        },
        {
          id: 'supermarket/cashier/safe_box',
          localImage: 'supermarket/cashier/safe_box',
          translations: { en: 'safe box', es: 'caja fuerte', pt: 'cofre', fr: 'coffre-fort', de: 'Tresor', it: 'cassaforte', nl: 'kluis', zh: '保险箱', ja: '金庫', ru: 'сейф' },
        },
        {
          id: 'supermarket/cashier/cleaning_wipes',
          localImage: 'supermarket/cashier/cleaning_wipes',
          translations: { en: 'cleaning wipes', es: 'toallitas de limpieza', pt: 'lenços de limpeza', fr: 'lingettes de nettoyage', de: 'Reinigungstücher', it: 'salviette detergenti', nl: 'reinigingsdoekjes', zh: '清洁湿巾', ja: '掃除シート', ru: 'чистящие салфетки' },
        },
        {
          id: 'supermarket/cashier/label_scanner',
          localImage: 'supermarket/cashier/label_scanner',
          translations: { en: 'label scanner', es: 'escáner de etiquetas', pt: 'leitor de etiquetas', fr: 'scanner d\'étiquettes', de: 'Etikett-Scanner', it: 'scanner etichette', nl: 'labelscanner', zh: '标签扫描仪', ja: 'ラベルスキャナー', ru: 'сканер этикеток' },
        },
        {
          id: 'supermarket/cashier/transaction_terminal',
          localImage: 'supermarket/cashier/transaction_terminal',
          translations: { en: 'transaction terminal', es: 'terminal de transacciones', pt: 'terminal de transação', fr: 'terminal de transactions', de: 'Transaktions-Terminal', it: 'terminale transazioni', nl: 'transactieterminal', zh: '交易终端', ja: '取引端末', ru: 'терминал транзакций' },
        },
        ],
      }
      ],
    },
    {
      id: 'bagger',
      name: { en: 'Bagger', es: 'Empacador', pt: 'Embalador', fr: 'Emballeur', de: 'Einpacker', it: 'Imballatore', nl: 'Bagger', zh: 'Bagger', ja: 'Bagger', ru: 'Bagger' },
      icon: '🛍️',
      roles: [
      {
        id: 'tools',
        name: { en: 'Tools', es: 'Herramientas', pt: 'Ferramentas', fr: 'Outils', de: 'Werkzeuge', it: 'Attrezzi', nl: 'Gereedschap', zh: '工具', ja: '道具', ru: 'Инструменты' },
        icon: '🔧',
        items: [
        {
          id: 'supermarket/bagger/shopping_bags',
          localImage: 'supermarket/bagger/shopping_bags',
          translations: { en: 'shopping bags', es: 'bolsas de compras', pt: 'sacolas de compras', fr: 'sacs de courses', de: 'Einkaufstaschen', it: 'borse della spesa', nl: 'boodschappentassen', zh: '购物袋', ja: '買い物袋', ru: 'пакеты для покупок' },
        },
        {
          id: 'supermarket/bagger/paper_bags',
          localImage: 'supermarket/bagger/paper_bags',
          translations: { en: 'paper bags', es: 'bolsas de papel', pt: 'sacolas de papel', fr: 'sacs en papier', de: 'Papiertüten', it: 'buste di carta', nl: 'papieren zakken', zh: '纸袋', ja: '紙袋', ru: 'бумажные пакеты' },
        },
        {
          id: 'supermarket/bagger/plastic_bags',
          localImage: 'supermarket/bagger/plastic_bags',
          translations: { en: 'plastic bags', es: 'bolsas de plástico', pt: 'sacolas plásticas', fr: 'sacs en plastique', de: 'Plastiktüten', it: 'buste di plastica', nl: 'plastic zakken', zh: '塑料袋', ja: 'ビニール袋', ru: 'пластиковые пакеты' },
        },
        {
          id: 'supermarket/bagger/reusable_bags',
          localImage: 'supermarket/bagger/reusable_bags',
          translations: { en: 'reusable bags', es: 'bolsas reutilizables', pt: 'sacolas reutilizáveis', fr: 'sacs réutilisables', de: 'wiederverwendbare Taschen', it: 'borse riutilizzabili', nl: 'herbruikbare tassen', zh: '可重复使用袋', ja: 'エコバッグ', ru: 'многоразовые пакеты' },
        },
        {
          id: 'supermarket/bagger/box',
          localImage: 'supermarket/bagger/box',
          translations: { en: 'box', es: 'caja', pt: 'caixa', fr: 'boîte', de: 'Karton', it: 'scatola', nl: 'doos', zh: '箱子', ja: '箱', ru: 'коробка' },
        },
        {
          id: 'supermarket/bagger/tape',
          localImage: 'supermarket/bagger/tape',
          translations: { en: 'tape', es: 'cinta adhesiva', pt: 'fita adesiva', fr: 'ruban adhésif', de: 'Klebeband', it: 'nastro adesivo', nl: 'plakband', zh: '胶带', ja: 'テープ', ru: 'скотч' },
        },
        {
          id: 'supermarket/bagger/scissors',
          localImage: 'supermarket/bagger/scissors',
          translations: { en: 'scissors', es: 'tijeras', pt: 'tesoura', fr: 'ciseaux', de: 'Schere', it: 'forbici', nl: 'schaar', zh: '剪刀', ja: 'ハサミ', ru: 'ножницы' },
        },
        {
          id: 'supermarket/bagger/stapler',
          localImage: 'supermarket/bagger/stapler',
          translations: { en: 'stapler', es: 'grapadora', pt: 'grampeador', fr: 'agrafeuse', de: 'Hefter', it: 'cucitrice', nl: 'nietermachine', zh: '订书机', ja: 'ホッチキス', ru: 'степлер' },
        },
        {
          id: 'supermarket/bagger/label',
          localImage: 'supermarket/bagger/label',
          translations: { en: 'label', es: 'etiqueta', pt: 'etiqueta', fr: 'étiquette', de: 'Etikett', it: 'etichetta', nl: 'label', zh: '标签', ja: 'ラベル', ru: 'этикетка' },
        },
        {
          id: 'supermarket/bagger/marker',
          localImage: 'supermarket/bagger/marker',
          translations: { en: 'marker', es: 'marcador', pt: 'marcador', fr: 'marqueur', de: 'Marker', it: 'pennarello', nl: 'stift', zh: '记号笔', ja: 'マーカー', ru: 'маркер' },
        },
        {
          id: 'supermarket/bagger/scale',
          localImage: 'supermarket/bagger/scale',
          translations: { en: 'scale', es: 'báscula', pt: 'balança', fr: 'balance', de: 'Waage', it: 'bilancia', nl: 'weegschaal', zh: '秤', ja: 'はかり', ru: 'весы' },
        },
        {
          id: 'supermarket/bagger/price_tag',
          localImage: 'supermarket/bagger/price_tag',
          translations: { en: 'price tag', es: 'etiqueta de precio', pt: 'etiqueta de preço', fr: 'étiquette de prix', de: 'Preisschild', it: 'cartellino del prezzo', nl: 'prijskaartje', zh: '价签', ja: '値札', ru: 'ценник' },
        },
        {
          id: 'supermarket/bagger/gloves',
          localImage: 'supermarket/bagger/gloves',
          translations: { en: 'gloves', es: 'guantes', pt: 'luvas', fr: 'gants', de: 'Handschuhe', it: 'guanti', nl: 'handschoenen', zh: '手套', ja: '手袋', ru: 'перчатки' },
        },
        {
          id: 'supermarket/bagger/apron',
          localImage: 'supermarket/bagger/apron',
          translations: { en: 'apron', es: 'delantal', pt: 'avental', fr: 'tablier', de: 'Schürze', it: 'grembiule', nl: 'schort', zh: '围裙', ja: 'エプロン', ru: 'фартук' },
        },
        {
          id: 'supermarket/bagger/name_tag',
          localImage: 'supermarket/bagger/name_tag',
          translations: { en: 'name tag', es: 'etiqueta de nombre', pt: 'crachá', fr: 'badge de nom', de: 'Namensschild', it: 'targhetta col nome', nl: 'naamplaatje', zh: '名牌', ja: '名札', ru: 'бейдж' },
        },
        {
          id: 'supermarket/bagger/packing_paper',
          localImage: 'supermarket/bagger/packing_paper',
          translations: { en: 'packing paper', es: 'papel de embalaje', pt: 'papel de embrulho', fr: 'papier d\'emballage', de: 'Packpapier', it: 'carta da imballaggio', nl: 'verpakkingspapier', zh: '包装纸', ja: '包装紙', ru: 'упаковочная бумага' },
        },
        {
          id: 'supermarket/bagger/bubble_wrap',
          localImage: 'supermarket/bagger/bubble_wrap',
          translations: { en: 'bubble wrap', es: 'papel burbuja', pt: 'plástico bolha', fr: 'film à bulles', de: 'Luftpolsterfolie', it: 'pluriball', nl: 'noppenfolie', zh: '气泡纸', ja: 'プチプチ', ru: 'пузырчатая плёнка' },
        },
        {
          id: 'supermarket/bagger/gift_wrap',
          localImage: 'supermarket/bagger/gift_wrap',
          translations: { en: 'gift wrap', es: 'papel de regalo', pt: 'papel de presente', fr: 'papier cadeau', de: 'Geschenkpapier', it: 'carta regalo', nl: 'cadeaupapier', zh: '礼品包装纸', ja: 'ギフトラッピング', ru: 'подарочная упаковка' },
        },
        {
          id: 'supermarket/bagger/ribbon',
          localImage: 'supermarket/bagger/ribbon',
          translations: { en: 'ribbon', es: 'cinta', pt: 'fita', fr: 'ruban', de: 'Band', it: 'nastro', nl: 'lint', zh: '丝带', ja: 'リボン', ru: 'лента' },
        },
        {
          id: 'supermarket/bagger/tape_dispenser',
          localImage: 'supermarket/bagger/tape_dispenser',
          translations: { en: 'tape dispenser', es: 'dispensador de cinta', pt: 'suporte de fita', fr: 'dévidoir de ruban', de: 'Abroller', it: 'porta-nastro', nl: 'plakbandhouder', zh: '胶带座', ja: 'テープカッター', ru: 'диспенсер для скотча' },
        },
        {
          id: 'supermarket/bagger/box_cutter',
          localImage: 'supermarket/bagger/box_cutter',
          translations: { en: 'box cutter', es: 'cúter', pt: 'estilete', fr: 'cutter', de: 'Teppichmesser', it: 'taglierino', nl: 'stanleymes', zh: '美工刀', ja: 'カッター', ru: 'нож для коробок' },
        },
        {
          id: 'supermarket/bagger/cart',
          localImage: 'supermarket/bagger/cart',
          translations: { en: 'cart', es: 'carrito', pt: 'carrinho', fr: 'chariot', de: 'Wagen', it: 'carrello', nl: 'winkelwagen', zh: '购物车', ja: 'カート', ru: 'тележка' },
        },
        {
          id: 'supermarket/bagger/hand_sanitizer',
          localImage: 'supermarket/bagger/hand_sanitizer',
          translations: { en: 'hand sanitizer', es: 'desinfectante de manos', pt: 'desinfetante para mãos', fr: 'désinfectant pour les mains', de: 'Handdesinfektionsmittel', it: 'disinfettante per mani', nl: 'handdesinfectie', zh: '洗手液', ja: 'ハンドサニタイザー', ru: 'антисептик для рук' },
        },
        {
          id: 'supermarket/bagger/pen',
          localImage: 'supermarket/bagger/pen',
          translations: { en: 'pen', es: 'bolígrafo', pt: 'caneta', fr: 'stylo', de: 'Stift', it: 'penna', nl: 'pen', zh: '钢笔', ja: 'ペン', ru: 'ручка' },
        },
        {
          id: 'supermarket/bagger/notepad',
          localImage: 'supermarket/bagger/notepad',
          translations: { en: 'notepad', es: 'bloc de notas', pt: 'bloco de notas', fr: 'bloc-notes', de: 'Notizblock', it: 'blocco note', nl: 'kladblok', zh: '记事本', ja: 'メモ帳', ru: 'блокнот' },
        },
        {
          id: 'supermarket/bagger/scanner',
          localImage: 'supermarket/bagger/scanner',
          translations: { en: 'scanner', es: 'escáner', pt: 'scanner', fr: 'scanner', de: 'Scanner', it: 'scanner', nl: 'scanner', zh: '扫描仪', ja: 'スキャナー', ru: 'сканер' },
        },
        {
          id: 'supermarket/bagger/counter_mat',
          localImage: 'supermarket/bagger/counter_mat',
          translations: { en: 'counter mat', es: 'tapete de mostrador', pt: 'tapete de balcão', fr: 'tapis de comptoir', de: 'Thekenmatte', it: 'tappetino bancone', nl: 'countermat', zh: '柜台垫', ja: 'カウンターマット', ru: 'коврик для стойки' },
        },
        {
          id: 'supermarket/bagger/bag_holder',
          localImage: 'supermarket/bagger/bag_holder',
          translations: { en: 'bag holder', es: 'soporte de bolsa', pt: 'suporte de sacola', fr: 'support à sac', de: 'Tütenhalter', it: 'porta sacchi', nl: 'zakhouder', zh: '袋架', ja: '袋ホルダー', ru: 'держатель пакетов' },
        },
        {
          id: 'supermarket/bagger/twist_ties',
          localImage: 'supermarket/bagger/twist_ties',
          translations: { en: 'twist ties', es: 'ataduras', pt: 'atilhos', fr: 'attaches torsadées', de: 'Drehverschlüsse', it: 'legacci', nl: 'broodclipjes', zh: '扭扭棒', ja: 'ツイストタイ', ru: 'скрутки для пакетов' },
        },
        {
          id: 'supermarket/bagger/receipt_printer',
          localImage: 'supermarket/bagger/receipt_printer',
          translations: { en: 'receipt printer', es: 'impresora de recibos', pt: 'impressora de recibo', fr: 'imprimante de reçus', de: 'Bondrucker', it: 'stampante per ricevute', nl: 'bonprinter', zh: '收据打印机', ja: 'レシートプリンター', ru: 'принтер чеков' },
        },
        ],
      }
      ],
    },
    {
      id: 'stockroom',
      name: { en: 'Stockroom', es: 'Almacén', pt: 'Almoxarifado', fr: 'Réserve', de: 'Lager', it: 'Magazzino', nl: 'Stockroom', zh: 'Stockroom', ja: 'Stockroom', ru: 'Stockroom' },
      icon: '📦',
      roles: [
      {
        id: 'tools',
        name: { en: 'Tools', es: 'Herramientas', pt: 'Ferramentas', fr: 'Outils', de: 'Werkzeuge', it: 'Attrezzi', nl: 'Gereedschap', zh: '工具', ja: '道具', ru: 'Инструменты' },
        icon: '🔧',
        items: [
        {
          id: 'supermarket/stockroom/pallet_jack',
          localImage: 'supermarket/stockroom/pallet_jack',
          translations: { en: 'pallet jack', es: 'transpaleta', pt: 'paleteiro', fr: 'transpalette', de: 'Hubwagen', it: 'transpallet', nl: 'palletwagen', zh: '搬运叉车', ja: 'パレットジャッキー', ru: 'гидравлическая тележка' },
        },
        {
          id: 'supermarket/stockroom/hand_truck',
          localImage: 'supermarket/stockroom/hand_truck',
          translations: { en: 'hand truck', es: 'carretilla de mano', pt: 'carrinho de mão', fr: 'diable', de: 'Sackkarre', it: 'carrello a mano', nl: 'steekwagen', zh: '手推车', ja: '手押し車', ru: 'ручная тележка' },
        },
        {
          id: 'supermarket/stockroom/folding_table',
          localImage: 'supermarket/stockroom/folding_table',
          translations: { en: 'folding table', es: 'mesa plegable', pt: 'mesa dobrável', fr: 'table pliante', de: 'Klapptisch', it: 'tavolo pieghevole', nl: 'klaptafel', zh: '折叠桌', ja: '折り畳みテーブル', ru: 'складной стол' },
        },
        {
          id: 'supermarket/stockroom/clipboard',
          localImage: 'supermarket/stockroom/clipboard',
          translations: { en: 'clipboard', es: 'portapapeles', pt: 'prancheta', fr: 'presse-papiers', de: 'Klemmbrett', it: 'portablocco', nl: 'klembord', zh: '写字板', ja: 'クリップボード', ru: 'планшет' },
        },
        {
          id: 'supermarket/stockroom/scanner',
          localImage: 'supermarket/stockroom/scanner',
          translations: { en: 'scanner', es: 'escáner', pt: 'scanner', fr: 'scanner', de: 'Scanner', it: 'scanner', nl: 'scanner', zh: '扫描仪', ja: 'スキャナー', ru: 'сканер' },
        },
        {
          id: 'supermarket/stockroom/inventory_pad',
          localImage: 'supermarket/stockroom/inventory_pad',
          translations: { en: 'inventory pad', es: 'bloc de inventario', pt: 'bloco de inventário', fr: 'bloc d\'inventaire', de: 'Inventurblock', it: 'blocco inventario', nl: 'inventarisatieboek', zh: '盘点本', ja: '棚卸しパッド', ru: 'блокнот для инвентаризации' },
        },
        {
          id: 'supermarket/stockroom/shelf',
          localImage: 'supermarket/stockroom/shelf',
          translations: { en: 'shelf', es: 'estante', pt: 'prateleira', fr: 'étagère', de: 'Regal', it: 'scaffale', nl: 'rek', zh: '货架', ja: '棚', ru: 'полка' },
        },
        {
          id: 'supermarket/stockroom/bin',
          localImage: 'supermarket/stockroom/bin',
          translations: { en: 'bin', es: 'contenedor', pt: 'caixa de armazenamento', fr: 'bac', de: 'Behälter', it: 'contenitore', nl: 'bak', zh: '储物箱', ja: '収納ビン', ru: 'контейнер' },
        },
        {
          id: 'supermarket/stockroom/label_maker',
          localImage: 'supermarket/stockroom/label_maker',
          translations: { en: 'label maker', es: 'etiquetadora', pt: 'rotulador', fr: 'étiqueteuse', de: 'Etikettendrucker', it: 'etichettatrice', nl: 'labelmaker', zh: '标签机', ja: 'ラベルメーカー', ru: 'принтер этикеток' },
        },
        {
          id: 'supermarket/stockroom/staple_gun',
          localImage: 'supermarket/stockroom/staple_gun',
          translations: { en: 'staple gun', es: 'grapadora de tapicero', pt: 'grampeador industrial', fr: 'agrafeuse industrielle', de: 'Heftpistole', it: 'pistola sparachiodi', nl: 'tacker', zh: '订书枪', ja: 'タッカー', ru: 'мебельный степлер' },
        },
        {
          id: 'supermarket/stockroom/tape_measure',
          localImage: 'supermarket/stockroom/tape_measure',
          translations: { en: 'tape measure', es: 'cinta métrica', pt: 'fita métrica', fr: 'mètre ruban', de: 'Maßband', it: 'metro a nastro', nl: 'meetlint', zh: '卷尺', ja: 'メジャー', ru: 'рулетка' },
        },
        {
          id: 'supermarket/stockroom/box_cutter',
          localImage: 'supermarket/stockroom/box_cutter',
          translations: { en: 'box cutter', es: 'cúter', pt: 'estilete', fr: 'cutter', de: 'Teppichmesser', it: 'taglierino', nl: 'stanleymes', zh: '美工刀', ja: 'カッター', ru: 'нож для коробок' },
        },
        {
          id: 'supermarket/stockroom/gloves',
          localImage: 'supermarket/stockroom/gloves',
          translations: { en: 'gloves', es: 'guantes', pt: 'luvas', fr: 'gants', de: 'Handschuhe', it: 'guanti', nl: 'handschoenen', zh: '手套', ja: '手袋', ru: 'перчатки' },
        },
        {
          id: 'supermarket/stockroom/safety_vest',
          localImage: 'supermarket/stockroom/safety_vest',
          translations: { en: 'safety vest', es: 'chaleco de seguridad', pt: 'colete de segurança', fr: 'gilet de sécurité', de: 'Warnweste', it: 'gilet di sicurezza', nl: 'veiligheidsvest', zh: '安全背心', ja: '安全ベスト', ru: 'сигнальный жилет' },
        },
        {
          id: 'supermarket/stockroom/hard_hat',
          localImage: 'supermarket/stockroom/hard_hat',
          translations: { en: 'hard hat', es: 'casco de seguridad', pt: 'capacete de segurança', fr: 'casque de sécurité', de: 'Schutzhelm', it: 'elmetto di sicurezza', nl: 'veiligheidshelm', zh: '安全帽', ja: 'ヘルメット', ru: 'защитная каска' },
        },
        {
          id: 'supermarket/stockroom/work_boots',
          localImage: 'supermarket/stockroom/work_boots',
          translations: { en: 'work boots', es: 'botas de trabajo', pt: 'botas de trabalho', fr: 'bottes de travail', de: 'Arbeitsschuhe', it: 'stivali da lavoro', nl: 'werkschoenen', zh: '工作靴', ja: '安全靴', ru: 'рабочие ботинки' },
        },
        {
          id: 'supermarket/stockroom/back_support',
          localImage: 'supermarket/stockroom/back_support',
          translations: { en: 'back support', es: 'soporte lumbar', pt: 'suporte lombar', fr: 'ceinture dorsale', de: 'Rückenstütze', it: 'supporto lombare', nl: 'rugsteun', zh: '腰部支撑', ja: '腰サポーター', ru: 'поясничный бандаж' },
        },
        {
          id: 'supermarket/stockroom/ear_plugs',
          localImage: 'supermarket/stockroom/ear_plugs',
          translations: { en: 'ear plugs', es: 'tapones para los oídos', pt: 'protetor auricular', fr: 'bouchons d\'oreille', de: 'Ohrenstöpsel', it: 'tappi per orecchie', nl: 'oordopjes', zh: '耳塞', ja: '耳栓', ru: 'беруши' },
        },
        {
          id: 'supermarket/stockroom/dolly',
          localImage: 'supermarket/stockroom/dolly',
          translations: { en: 'dolly', es: 'plataforma de transporte', pt: 'plataforma de carga', fr: 'plateau roulant', de: 'Rollwagen', it: 'piattaforma a ruote', nl: 'rolwagen', zh: '平板车', ja: '台車', ru: 'тележка-платформа' },
        },
        {
          id: 'supermarket/stockroom/strapping',
          localImage: 'supermarket/stockroom/strapping',
          translations: { en: 'strapping', es: 'fleje', pt: 'fita de amarração', fr: 'cerclage', de: 'Umreifungsband', it: 'reggetta', nl: 'omsnoeringsband', zh: '打包带', ja: 'バンド', ru: 'обвязочная лента' },
        },
        {
          id: 'supermarket/stockroom/packing_foam',
          localImage: 'supermarket/stockroom/packing_foam',
          translations: { en: 'packing foam', es: 'espuma de embalaje', pt: 'espuma de embalagem', fr: 'mousse d\'emballage', de: 'Verpackungsschaum', it: 'schiuma da imballaggio', nl: 'verpakkingsschuim', zh: '泡沫包装', ja: '梱包フォーム', ru: 'упаковочный поролон' },
        },
        {
          id: 'supermarket/stockroom/inventory_tags',
          localImage: 'supermarket/stockroom/inventory_tags',
          translations: { en: 'inventory tags', es: 'etiquetas de inventario', pt: 'etiquetas de inventário', fr: 'étiquettes d\'inventaire', de: 'Inventur-Etiketten', it: 'etichette inventario', nl: 'inventarisatielabels', zh: '库存标签', ja: '棚卸しタグ', ru: 'инвентаризационные ярлыки' },
        },
        {
          id: 'supermarket/stockroom/pallet',
          localImage: 'supermarket/stockroom/pallet',
          translations: { en: 'pallet', es: 'palé', pt: 'palete', fr: 'palette', de: 'Palette', it: 'pallet', nl: 'pallet', zh: '托盘', ja: 'パレット', ru: 'поддон' },
        },
        {
          id: 'supermarket/stockroom/stretch_wrap',
          localImage: 'supermarket/stockroom/stretch_wrap',
          translations: { en: 'stretch wrap', es: 'film estirable', pt: 'filme esticável', fr: 'film étirable', de: 'Stretchfolie', it: 'film estensibile', nl: 'rekfolie', zh: '拉伸膜', ja: 'ストレッチフィルム', ru: 'стрейч-плёнка' },
        },
        {
          id: 'supermarket/stockroom/utility_cart',
          localImage: 'supermarket/stockroom/utility_cart',
          translations: { en: 'utility cart', es: 'carro utilitario', pt: 'carrinho utilitário', fr: 'chariot utilitaire', de: 'Mehrzweckwagen', it: 'carrello multiuso', nl: 'multifunctionele kar', zh: '多功能推车', ja: 'ユーティリティカート', ru: 'многофункциональная тележка' },
        },
        {
          id: 'supermarket/stockroom/step_stool',
          localImage: 'supermarket/stockroom/step_stool',
          translations: { en: 'step stool', es: 'escalera de mano', pt: 'banquinho', fr: 'escabeau', de: 'Tritthocker', it: 'sgabello', nl: 'opstapje', zh: '脚踏凳', ja: '踏み台', ru: 'ступенька' },
        },
        {
          id: 'supermarket/stockroom/flashlight',
          localImage: 'supermarket/stockroom/flashlight',
          translations: { en: 'flashlight', es: 'linterna', pt: 'lanterna', fr: 'lampe de poche', de: 'Taschenlampe', it: 'torcia', nl: 'zaklamp', zh: '手电筒', ja: '懐中電灯', ru: 'фонарик' },
        },
        {
          id: 'supermarket/stockroom/walkie_talkie',
          localImage: 'supermarket/stockroom/walkie_talkie',
          translations: { en: 'walkie talkie', es: 'walkie-talkie', pt: 'walkie-talkie', fr: 'talkie-walkie', de: 'Walkie-Talkie', it: 'walkie-talkie', nl: 'walkie-talkie', zh: '对讲机', ja: 'トランシーバー', ru: 'рация' },
        },
        {
          id: 'supermarket/stockroom/lock',
          localImage: 'supermarket/stockroom/lock',
          translations: { en: 'lock', es: 'candado', pt: 'cadeado', fr: 'cadenas', de: 'Schloss', it: 'lucchetto', nl: 'slot', zh: '锁', ja: '錠', ru: 'замок' },
        },
        {
          id: 'supermarket/stockroom/first_aid_kit',
          localImage: 'supermarket/stockroom/first_aid_kit',
          translations: { en: 'first aid kit', es: 'botiquín de primeros auxilios', pt: 'kit de primeiros socorros', fr: 'trousse de premiers secours', de: 'Verbandskasten', it: 'kit di pronto soccorso', nl: 'EHBO-doos', zh: '急救箱', ja: '救急箱', ru: 'аптечка первой помощи' },
        },
        ],
      }
      ],
    },
    {
      id: 'stocker',
      name: { en: 'Stocker', es: 'Reponedor', pt: 'Repositor', fr: 'Réassortisseur', de: 'Auffüller', it: 'Rifornimento', nl: 'Stocker', zh: 'Stocker', ja: 'Stocker', ru: 'Stocker' },
      icon: '🗄️',
      roles: [
      {
        id: 'tools',
        name: { en: 'Tools', es: 'Herramientas', pt: 'Ferramentas', fr: 'Outils', de: 'Werkzeuge', it: 'Attrezzi', nl: 'Gereedschap', zh: '工具', ja: '道具', ru: 'Инструменты' },
        icon: '🔧',
        items: [
        {
          id: 'supermarket/stocker/trolley',
          localImage: 'supermarket/stocker/trolley',
          translations: { en: 'trolley', es: 'carrito', pt: 'carrinho', fr: 'chariot', de: 'Rollwagen', it: 'carrello', nl: 'trolley', zh: '手推车', ja: 'トロリー', ru: 'тележка' },
        },
        {
          id: 'supermarket/stocker/pallet',
          localImage: 'supermarket/stocker/pallet',
          translations: { en: 'pallet', es: 'palé', pt: 'palete', fr: 'palette', de: 'Palette', it: 'pallet', nl: 'pallet', zh: '托盘', ja: 'パレット', ru: 'поддон' },
        },
        {
          id: 'supermarket/stocker/hand_truck',
          localImage: 'supermarket/stocker/hand_truck',
          translations: { en: 'hand truck', es: 'carretilla de mano', pt: 'carrinho de mão', fr: 'diable', de: 'Sackkarre', it: 'carrello a mano', nl: 'steekwagen', zh: '手推车', ja: '手押し車', ru: 'ручная тележка' },
        },
        {
          id: 'supermarket/stocker/box_cutter',
          localImage: 'supermarket/stocker/box_cutter',
          translations: { en: 'box cutter', es: 'cúter', pt: 'estilete', fr: 'cutter', de: 'Teppichmesser', it: 'taglierino', nl: 'stanleymes', zh: '美工刀', ja: 'カッター', ru: 'нож для коробок' },
        },
        {
          id: 'supermarket/stocker/shelf_labels',
          localImage: 'supermarket/stocker/shelf_labels',
          translations: { en: 'shelf labels', es: 'etiquetas de estante', pt: 'etiquetas de prateleira', fr: 'étiquettes de rayon', de: 'Regaletiketten', it: 'etichette scaffale', nl: 'schaplabels', zh: '货架标签', ja: '棚ラベル', ru: 'ценники на полку' },
        },
        {
          id: 'supermarket/stocker/step_ladder',
          localImage: 'supermarket/stocker/step_ladder',
          translations: { en: 'step ladder', es: 'escalera de peldaños', pt: 'escada de degraus', fr: 'escabeau', de: 'Stufenleiter', it: 'scaletta', nl: 'trapladder', zh: '梯子', ja: '脚立', ru: 'стремянка' },
        },
        {
          id: 'supermarket/stocker/gloves',
          localImage: 'supermarket/stocker/gloves',
          translations: { en: 'gloves', es: 'guantes', pt: 'luvas', fr: 'gants', de: 'Handschuhe', it: 'guanti', nl: 'handschoenen', zh: '手套', ja: '手袋', ru: 'перчатки' },
        },
        {
          id: 'supermarket/stocker/price_gun',
          localImage: 'supermarket/stocker/price_gun',
          translations: { en: 'price gun', es: 'etiquetadora de precios', pt: 'pistola de etiquetas', fr: 'pistolet d\'étiquetage', de: 'Preisauszeichnungsgerät', it: 'pistola prezzi', nl: 'prijspistool', zh: '价格标签枪', ja: '値札ガン', ru: 'пистолет для этикеток' },
        },
        {
          id: 'supermarket/stocker/tape_gun',
          localImage: 'supermarket/stocker/tape_gun',
          translations: { en: 'tape gun', es: 'pistola de cinta', pt: 'suporte de fita', fr: 'pistolet à ruban', de: 'Abroller', it: 'pistola nastro', nl: 'tapegun', zh: '胶带枪', ja: 'テープガン', ru: 'пистолет для скотча' },
        },
        {
          id: 'supermarket/stocker/shrink_wrap',
          localImage: 'supermarket/stocker/shrink_wrap',
          translations: { en: 'shrink wrap', es: 'film retráctil', pt: 'filme retrátil', fr: 'film rétractable', de: 'Schrumpffolie', it: 'film termorestringente', nl: 'krimpfolie', zh: '热缩膜', ja: 'シュリンクフィルム', ru: 'термоусадочная плёнка' },
        },
        {
          id: 'supermarket/stocker/scanner',
          localImage: 'supermarket/stocker/scanner',
          translations: { en: 'scanner', es: 'escáner', pt: 'scanner', fr: 'scanner', de: 'Scanner', it: 'scanner', nl: 'scanner', zh: '扫描仪', ja: 'スキャナー', ru: 'сканер' },
        },
        {
          id: 'supermarket/stocker/inventory_device',
          localImage: 'supermarket/stocker/inventory_device',
          translations: { en: 'inventory device', es: 'dispositivo de inventario', pt: 'dispositivo de inventário', fr: 'terminal d\'inventaire', de: 'Inventur-Gerät', it: 'dispositivo inventario', nl: 'inventarisatieapparaat', zh: '盘点设备', ja: '在庫管理端末', ru: 'устройство для инвентаризации' },
        },
        {
          id: 'supermarket/stocker/cart',
          localImage: 'supermarket/stocker/cart',
          translations: { en: 'cart', es: 'carrito', pt: 'carrinho', fr: 'chariot', de: 'Wagen', it: 'carrello', nl: 'winkelwagen', zh: '购物车', ja: 'カート', ru: 'тележка' },
        },
        {
          id: 'supermarket/stocker/plastic_bins',
          localImage: 'supermarket/stocker/plastic_bins',
          translations: { en: 'plastic bins', es: 'bandejas de plástico', pt: 'caixas plásticas', fr: 'bacs en plastique', de: 'Kunststoffbehälter', it: 'vaschette di plastica', nl: 'plastic bakken', zh: '塑料箱', ja: 'プラスチックトレー', ru: 'пластиковые контейнеры' },
        },
        {
          id: 'supermarket/stocker/storage_boxes',
          localImage: 'supermarket/stocker/storage_boxes',
          translations: { en: 'storage boxes', es: 'cajas de almacenaje', pt: 'caixas de armazenamento', fr: 'boîtes de stockage', de: 'Aufbewahrungsboxen', it: 'scatole di stoccaggio', nl: 'opslagdozen', zh: '储存箱', ja: '収納ボックス', ru: 'коробки для хранения' },
        },
        {
          id: 'supermarket/stocker/marker_pen',
          localImage: 'supermarket/stocker/marker_pen',
          translations: { en: 'marker pen', es: 'rotulador', pt: 'caneta marcadora', fr: 'marqueur', de: 'Markierstift', it: 'pennarello', nl: 'markeerstift', zh: '记号笔', ja: 'マーカーペン', ru: 'маркер' },
        },
        {
          id: 'supermarket/stocker/clipboard',
          localImage: 'supermarket/stocker/clipboard',
          translations: { en: 'clipboard', es: 'portapapeles', pt: 'prancheta', fr: 'presse-papiers', de: 'Klemmbrett', it: 'portablocco', nl: 'klembord', zh: '写字板', ja: 'クリップボード', ru: 'планшет' },
        },
        {
          id: 'supermarket/stocker/safety_shoes',
          localImage: 'supermarket/stocker/safety_shoes',
          translations: { en: 'safety shoes', es: 'zapatos de seguridad', pt: 'sapatos de segurança', fr: 'chaussures de sécurité', de: 'Sicherheitsschuhe', it: 'scarpe antinfortunistiche', nl: 'veiligheidsschoenen', zh: '安全鞋', ja: '安全靴', ru: 'защитные ботинки' },
        },
        {
          id: 'supermarket/stocker/back_support_belt',
          localImage: 'supermarket/stocker/back_support_belt',
          translations: { en: 'back support belt', es: 'cinturón lumbar', pt: 'cinto lombar', fr: 'ceinture lombaire', de: 'Rückenstützgürtel', it: 'cintura lombare', nl: 'rugsteunriem', zh: '护腰带', ja: '腰サポートベルト', ru: 'пояс для спины' },
        },
        {
          id: 'supermarket/stocker/safety_vest',
          localImage: 'supermarket/stocker/safety_vest',
          translations: { en: 'safety vest', es: 'chaleco de seguridad', pt: 'colete de segurança', fr: 'gilet de sécurité', de: 'Warnweste', it: 'gilet di sicurezza', nl: 'veiligheidsvest', zh: '安全背心', ja: '安全ベスト', ru: 'сигнальный жилет' },
        },
        {
          id: 'supermarket/stocker/packing_tape',
          localImage: 'supermarket/stocker/packing_tape',
          translations: { en: 'packing tape', es: 'cinta de embalaje', pt: 'fita de embalagem', fr: 'ruban d\'emballage', de: 'Verpackungsband', it: 'nastro da imballaggio', nl: 'verpakkingstape', zh: '包装胶带', ja: '梱包テープ', ru: 'упаковочный скотч' },
        },
        {
          id: 'supermarket/stocker/stretch_wrap',
          localImage: 'supermarket/stocker/stretch_wrap',
          translations: { en: 'stretch wrap', es: 'film estirable', pt: 'filme esticável', fr: 'film étirable', de: 'Stretchfolie', it: 'film estensibile', nl: 'rekfolie', zh: '拉伸膜', ja: 'ストレッチフィルム', ru: 'стрейч-плёнка' },
        },
        {
          id: 'supermarket/stocker/utility_knife',
          localImage: 'supermarket/stocker/utility_knife',
          translations: { en: 'utility knife', es: 'cuchillo utilitario', pt: 'faca utilitária', fr: 'couteau utilitaire', de: 'Mehrzweckmesser', it: 'coltello multiuso', nl: 'zakmes', zh: '多功能刀', ja: 'ユーティリティナイフ', ru: 'нож универсальный' },
        },
        {
          id: 'supermarket/stocker/broom',
          localImage: 'supermarket/stocker/broom',
          translations: { en: 'broom', es: 'escoba', pt: 'vassoura', fr: 'balai', de: 'Besen', it: 'scopa', nl: 'bezem', zh: '扫帚', ja: 'ほうき', ru: 'метла' },
        },
        {
          id: 'supermarket/stocker/dustpan',
          localImage: 'supermarket/stocker/dustpan',
          translations: { en: 'dustpan', es: 'recogedor', pt: 'pá de lixo', fr: 'pelle à poussière', de: 'Kehrschaufel', it: 'paletta', nl: 'blik', zh: '簸箕', ja: 'ちりとり', ru: 'совок' },
        },
        {
          id: 'supermarket/stocker/apron',
          localImage: 'supermarket/stocker/apron',
          translations: { en: 'apron', es: 'delantal', pt: 'avental', fr: 'tablier', de: 'Schürze', it: 'grembiule', nl: 'schort', zh: '围裙', ja: 'エプロン', ru: 'фартук' },
        },
        {
          id: 'supermarket/stocker/walkie_talkie',
          localImage: 'supermarket/stocker/walkie_talkie',
          translations: { en: 'walkie talkie', es: 'walkie-talkie', pt: 'walkie-talkie', fr: 'talkie-walkie', de: 'Walkie-Talkie', it: 'walkie-talkie', nl: 'walkie-talkie', zh: '对讲机', ja: 'トランシーバー', ru: 'рация' },
        },
        {
          id: 'supermarket/stocker/work_gloves',
          localImage: 'supermarket/stocker/work_gloves',
          translations: { en: 'work gloves', es: 'guantes de trabajo', pt: 'luvas de trabalho', fr: 'gants de travail', de: 'Arbeitshandschuhe', it: 'guanti da lavoro', nl: 'werkhandschoenen', zh: '工作手套', ja: '作業用手袋', ru: 'рабочие перчатки' },
        },
        {
          id: 'supermarket/stocker/shelf_tag_holder',
          localImage: 'supermarket/stocker/shelf_tag_holder',
          translations: { en: 'shelf tag holder', es: 'soporte de etiqueta', pt: 'suporte de etiqueta', fr: 'porte-étiquette', de: 'Etikettenhalter', it: 'porta etichette', nl: 'labelhouder', zh: '货架标签支架', ja: '棚タグホルダー', ru: 'держатель ценника' },
        },
        {
          id: 'supermarket/stocker/shelving_unit',
          localImage: 'supermarket/stocker/shelving_unit',
          translations: { en: 'shelving unit', es: 'estantería', pt: 'estante', fr: 'étagère', de: 'Regaleinheit', it: 'scaffalatura', nl: 'stellingkast', zh: '货架单元', ja: '棚ユニット', ru: 'стеллаж' },
        },
        ],
      }
      ],
    },
    {
      id: 'butcher_tools',
      name: { en: 'Butcher', es: 'Carnicero', pt: 'Açougueiro', fr: 'Boucher', de: 'Metzger', it: 'Macellaio', nl: 'Butcher', zh: 'Butcher', ja: 'Butcher', ru: 'Butcher' },
      icon: '🥩',
      roles: [
      {
        id: 'tools',
        name: { en: 'Tools', es: 'Herramientas', pt: 'Ferramentas', fr: 'Outils', de: 'Werkzeuge', it: 'Attrezzi', nl: 'Gereedschap', zh: '工具', ja: '道具', ru: 'Инструменты' },
        icon: '🔧',
        items: [
        {
          id: 'supermarket/butcher_tools/cleaver',
          localImage: 'supermarket/butcher_tools/cleaver',
          translations: { en: 'cleaver', es: 'cuchillo de carnicero', pt: 'cutelo', fr: 'couperet', de: 'Hackmesser', it: 'mannaia', nl: 'hakmes', zh: '斩肉刀', ja: '肉切り包丁', ru: 'мясной топор' },
        },
        {
          id: 'supermarket/butcher_tools/boning_knife',
          localImage: 'supermarket/butcher_tools/boning_knife',
          translations: { en: 'boning knife', es: 'cuchillo deshuesador', pt: 'faca desossadora', fr: 'couteau à désosser', de: 'Ausbeinmesser', it: 'coltello disossatore', nl: 'uitbeenmes', zh: '剔骨刀', ja: '骨抜きナイフ', ru: 'нож для обвалки' },
        },
        {
          id: 'supermarket/butcher_tools/butcher_knife',
          localImage: 'supermarket/butcher_tools/butcher_knife',
          translations: { en: 'butcher knife', es: 'cuchillo de carnicero', pt: 'faca de açougue', fr: 'couteau de boucher', de: 'Fleischermesser', it: 'coltello da macellaio', nl: 'slagersmes', zh: '屠宰刀', ja: '精肉ナイフ', ru: 'нож мясника' },
        },
        {
          id: 'supermarket/butcher_tools/meat_saw',
          localImage: 'supermarket/butcher_tools/meat_saw',
          translations: { en: 'meat saw', es: 'sierra para carne', pt: 'serra de carne', fr: 'scie à viande', de: 'Fleischsäge', it: 'sega per carne', nl: 'vleesband', zh: '切肉锯', ja: '精肉ノコギリ', ru: 'мясная пила' },
        },
        {
          id: 'supermarket/butcher_tools/sharpening_steel',
          localImage: 'supermarket/butcher_tools/sharpening_steel',
          translations: { en: 'sharpening steel', es: 'afilador de acero', pt: 'chaira', fr: 'fusil à affûter', de: 'Wetzstahl', it: 'acciaino', nl: 'aanzetstaal', zh: '磨刀棒', ja: 'シャープナー', ru: 'мусат' },
        },
        {
          id: 'supermarket/butcher_tools/cutting_board',
          localImage: 'supermarket/butcher_tools/cutting_board',
          translations: { en: 'cutting board', es: 'tabla de cortar', pt: 'tábua de corte', fr: 'planche à découper', de: 'Schneidebrett', it: 'tagliere', nl: 'snijplank', zh: '砧板', ja: 'まな板', ru: 'разделочная доска' },
        },
        {
          id: 'supermarket/butcher_tools/meat_tenderizer',
          localImage: 'supermarket/butcher_tools/meat_tenderizer',
          translations: { en: 'meat tenderizer', es: 'ablandador de carne', pt: 'amaciador de carne', fr: 'attendrisseur de viande', de: 'Fleischklopfer', it: 'batticarne', nl: 'vleeshamer', zh: '肉锤', ja: 'ミートテンダライザー', ru: 'молоток для отбивной' },
        },
        {
          id: 'supermarket/butcher_tools/sausage_stuffer',
          localImage: 'supermarket/butcher_tools/sausage_stuffer',
          translations: { en: 'sausage stuffer', es: 'embutidora', pt: 'embutidora de linguiça', fr: 'poussoir à saucisses', de: 'Wurstfüller', it: 'insaccatrice', nl: 'worstenvuller', zh: '灌肠机', ja: 'ソーセージスタッファー', ru: 'шприц для колбас' },
        },
        {
          id: 'supermarket/butcher_tools/meat_grinder',
          localImage: 'supermarket/butcher_tools/meat_grinder',
          translations: { en: 'meat grinder', es: 'picadora de carne', pt: 'moedor de carne', fr: 'hachoir', de: 'Fleischwolf', it: 'tritacarne', nl: 'vleesmolen', zh: '绞肉机', ja: 'ミートグラインダー', ru: 'мясорубка' },
        },
        {
          id: 'supermarket/butcher_tools/butcher_block',
          localImage: 'supermarket/butcher_tools/butcher_block',
          translations: { en: 'butcher block', es: 'tajo de madera', pt: 'toco de açougue', fr: 'billot de boucher', de: 'Hackblock', it: 'ceppo da macellaio', nl: 'hakblok', zh: '屠宰砧板', ja: '肉屋のまな板', ru: 'разделочный блок мясника' },
        },
        {
          id: 'supermarket/butcher_tools/breaking_knife',
          localImage: 'supermarket/butcher_tools/breaking_knife',
          translations: { en: 'breaking knife', es: 'cuchillo de despiece', pt: 'faca de despiece', fr: 'couteau de coupe', de: 'Zerlegemesser', it: 'coltello per sezionamento', nl: 'braakmes', zh: '分割刀', ja: '部分取りナイフ', ru: 'нож для разделки' },
        },
        {
          id: 'supermarket/butcher_tools/fillet_knife',
          localImage: 'supermarket/butcher_tools/fillet_knife',
          translations: { en: 'fillet knife', es: 'cuchillo fileteador', pt: 'faca para filé', fr: 'couteau à filet', de: 'Filetiermesser', it: 'coltello per filettare', nl: 'fileteermes', zh: '片鱼刀', ja: 'フィレナイフ', ru: 'филейный нож' },
        },
        {
          id: 'supermarket/butcher_tools/skinning_knife',
          localImage: 'supermarket/butcher_tools/skinning_knife',
          translations: { en: 'skinning knife', es: 'cuchillo desollador', pt: 'faca de esfolar', fr: 'couteau à dépouiller', de: 'Schälmesser', it: 'coltello per spellare', nl: 'onthuidsmes', zh: '剥皮刀', ja: '皮むきナイフ', ru: 'нож для снятия шкуры' },
        },
        {
          id: 'supermarket/butcher_tools/butcher_twine',
          localImage: 'supermarket/butcher_tools/butcher_twine',
          translations: { en: 'butcher twine', es: 'cordel de carnicero', pt: 'barbante de açougue', fr: 'ficelle de boucher', de: 'Metzgergarn', it: 'spago da macellaio', nl: 'slagersgaren', zh: '肉用绳', ja: '精肉用たこ糸', ru: 'шпагат мясника' },
        },
        {
          id: 'supermarket/butcher_tools/meat_hook',
          localImage: 'supermarket/butcher_tools/meat_hook',
          translations: { en: 'meat hook', es: 'gancho de carne', pt: 'gancho de carne', fr: 'croc à viande', de: 'Fleischhaken', it: 'gancio per carne', nl: 'vleeshaak', zh: '肉钩', ja: '肉掛けフック', ru: 'мясной крюк' },
        },
        {
          id: 'supermarket/butcher_tools/steak_knife',
          localImage: 'supermarket/butcher_tools/steak_knife',
          translations: { en: 'steak knife', es: 'cuchillo de bistec', pt: 'faca de bife', fr: 'couteau à steak', de: 'Steakmesser', it: 'coltello da bistecca', nl: 'steakmes', zh: '牛排刀', ja: 'ステーキナイフ', ru: 'нож для стейка' },
        },
        {
          id: 'supermarket/butcher_tools/trimming_knife',
          localImage: 'supermarket/butcher_tools/trimming_knife',
          translations: { en: 'trimming knife', es: 'cuchillo de recorte', pt: 'faca de aparar', fr: 'couteau à parer', de: 'Putzermesser', it: 'coltello da rifinitura', nl: 'trimmesmes', zh: '修整刀', ja: 'トリミングナイフ', ru: 'нож для зачистки' },
        },
        {
          id: 'supermarket/butcher_tools/meat_slicer',
          localImage: 'supermarket/butcher_tools/meat_slicer',
          translations: { en: 'meat slicer', es: 'cortadora de carne', pt: 'fatiadora de carne', fr: 'trancheuse à viande', de: 'Aufschnittmaschine', it: 'affettatrice', nl: 'vleessnijmachine', zh: '切肉机', ja: 'スライサー', ru: 'слайсер для мяса' },
        },
        {
          id: 'supermarket/butcher_tools/band_saw_blade',
          localImage: 'supermarket/butcher_tools/band_saw_blade',
          translations: { en: 'band saw blade', es: 'hoja de sierra de cinta', pt: 'lâmina de serra fita', fr: 'lame de scie à ruban', de: 'Bandsägeblatt', it: 'lama per sega a nastro', nl: 'lintzaagblad', zh: '带锯片', ja: 'バンドソーブレード', ru: 'полотно ленточной пилы' },
        },
        {
          id: 'supermarket/butcher_tools/rib_cutter',
          localImage: 'supermarket/butcher_tools/rib_cutter',
          translations: { en: 'rib cutter', es: 'cortacostillas', pt: 'cortador de costelas', fr: 'coupe-côtes', de: 'Rippenschneider', it: 'tagliacostole', nl: 'ribbensnijder', zh: '排骨剪', ja: 'リブカッター', ru: 'нож для рёбер' },
        },
        {
          id: 'supermarket/butcher_tools/meat_mallet',
          localImage: 'supermarket/butcher_tools/meat_mallet',
          translations: { en: 'meat mallet', es: 'mazo de carne', pt: 'maço de carne', fr: 'maillet de viande', de: 'Fleischklopfer', it: 'mazzuolo', nl: 'vleeshamer', zh: '肉槌', ja: 'ミートマレット', ru: 'молоток для мяса' },
        },
        {
          id: 'supermarket/butcher_tools/bone_dust_scraper',
          localImage: 'supermarket/butcher_tools/bone_dust_scraper',
          translations: { en: 'bone dust scraper', es: 'raspador de polvo de hueso', pt: 'raspador de osso', fr: 'racloir à os', de: 'Knochenstaubschaber', it: 'raschietto ossa', nl: 'botrasper', zh: '骨粉刮刀', ja: '骨粉スクレーパー', ru: 'скребок для костной муки' },
        },
        {
          id: 'supermarket/butcher_tools/gambrel',
          localImage: 'supermarket/butcher_tools/gambrel',
          translations: { en: 'gambrel', es: 'gambrel', pt: 'gancho traseiro', fr: 'gambret', de: 'Schlachtgalgen', it: 'gambretto', nl: 'slachterhaak', zh: '开膛钩', ja: 'ギャンブレル', ru: 'разделочный крюк' },
        },
        {
          id: 'supermarket/butcher_tools/brisket_knife',
          localImage: 'supermarket/butcher_tools/brisket_knife',
          translations: { en: 'brisket knife', es: 'cuchillo para pecho', pt: 'faca para peito', fr: 'couteau à poitrine', de: 'Brustkernmesser', it: 'coltello per petto', nl: 'borststuk mes', zh: '胸肉刀', ja: 'ブリスケットナイフ', ru: 'нож для грудинки' },
        },
        {
          id: 'supermarket/butcher_tools/butcher_apron',
          localImage: 'supermarket/butcher_tools/butcher_apron',
          translations: { en: 'butcher apron', es: 'delantal de carnicero', pt: 'avental de açougue', fr: 'tablier de boucher', de: 'Fleischerschürze', it: 'grembiule da macellaio', nl: 'slagersschort', zh: '屠宰围裙', ja: '肉屋のエプロン', ru: 'фартук мясника' },
        },
        {
          id: 'supermarket/butcher_tools/chain_mail_glove',
          localImage: 'supermarket/butcher_tools/chain_mail_glove',
          translations: { en: 'chain mail glove', es: 'guante de malla de acero', pt: 'luva de malha de aço', fr: 'gant de mailles', de: 'Kettenpanzerhandschuh', it: 'guanto in maglia', nl: 'kettingmaliënhandschoen', zh: '钢丝手套', ja: 'チェーンメイルグローブ', ru: 'кольчужная перчатка' },
        },
        {
          id: 'supermarket/butcher_tools/meat_thermometer',
          localImage: 'supermarket/butcher_tools/meat_thermometer',
          translations: { en: 'meat thermometer', es: 'termómetro de carne', pt: 'termômetro de carne', fr: 'thermomètre à viande', de: 'Fleischthermometer', it: 'termometro per carne', nl: 'vleesthermometer', zh: '肉温度计', ja: '肉温度計', ru: 'термометр для мяса' },
        },
        {
          id: 'supermarket/butcher_tools/bacon_slicer',
          localImage: 'supermarket/butcher_tools/bacon_slicer',
          translations: { en: 'bacon slicer', es: 'cortadora de bacon', pt: 'fatiadora de bacon', fr: 'trancheuse à bacon', de: 'Speckschneider', it: 'affettatrice per pancetta', nl: 'baconsnijder', zh: '培根切片机', ja: 'ベーコンスライサー', ru: 'нарезчик бекона' },
        },
        {
          id: 'supermarket/butcher_tools/patty_maker',
          localImage: 'supermarket/butcher_tools/patty_maker',
          translations: { en: 'patty maker', es: 'molde para hamburguesas', pt: 'moldador de hambúrguer', fr: 'presse-steak', de: 'Frikadellenpresse', it: 'pressaburger', nl: 'burgerpers', zh: '汉堡肉饼模具', ja: 'パテメーカー', ru: 'форма для котлет' },
        },
        {
          id: 'supermarket/butcher_tools/marinade_injector',
          localImage: 'supermarket/butcher_tools/marinade_injector',
          translations: { en: 'marinade injector', es: 'inyector de marinada', pt: 'injetor de marinada', fr: 'injecteur de marinade', de: 'Marinadeninjektor', it: 'iniettore per marinatura', nl: 'marinade-injector', zh: '腌料注射器', ja: 'マリネインジェクター', ru: 'шприц для маринада' },
        },
        {
          id: 'supermarket/butcher_tools/larding_needle',
          localImage: 'supermarket/butcher_tools/larding_needle',
          translations: { en: 'larding needle', es: 'aguja de mechar', pt: 'agulha para lardar', fr: 'lardoire', de: 'Spicknadel', it: 'ago per lardellare', nl: 'speknaald', zh: '注油针', ja: 'ラーディングニードル', ru: 'игла для шпигования' },
        },
        {
          id: 'supermarket/butcher_tools/carving_fork',
          localImage: 'supermarket/butcher_tools/carving_fork',
          translations: { en: 'carving fork', es: 'tenedor trinchante', pt: 'garfo de trinchar', fr: 'fourchette à découper', de: 'Tranchiergabel', it: 'forchettone', nl: 'trancheerder', zh: '叉肉叉', ja: 'カービングフォーク', ru: 'вилка для разделки' },
        },
        {
          id: 'supermarket/butcher_tools/scabbard',
          localImage: 'supermarket/butcher_tools/scabbard',
          translations: { en: 'scabbard', es: 'funda de cuchillo', pt: 'bainha de faca', fr: 'fourreau', de: 'Messerscheide', it: 'fodero', nl: 'mesdoos', zh: '刀鞘', ja: 'ナイフケース', ru: 'ножны' },
        },
        {
          id: 'supermarket/butcher_tools/poultry_shears',
          localImage: 'supermarket/butcher_tools/poultry_shears',
          translations: { en: 'poultry shears', es: 'tijeras para aves', pt: 'tesoura para aves', fr: 'cisailles à volaille', de: 'Geflügelschere', it: 'forbici per pollame', nl: 'gevogelteschaar', zh: '家禽剪', ja: '家禽用ハサミ', ru: 'ножницы для птицы' },
        },
        {
          id: 'supermarket/butcher_tools/slicing_knife',
          localImage: 'supermarket/butcher_tools/slicing_knife',
          translations: { en: 'slicing knife', es: 'cuchillo rebanador', pt: 'faca de fatiar', fr: 'couteau à trancher', de: 'Schneidemesser', it: 'coltello affettatore', nl: 'snijmes', zh: '切片刀', ja: 'スライシングナイフ', ru: 'нож для нарезки' },
        },
        {
          id: 'supermarket/butcher_tools/curing_container',
          localImage: 'supermarket/butcher_tools/curing_container',
          translations: { en: 'curing container', es: 'recipiente de curado', pt: 'recipiente de cura', fr: 'récipient de salaison', de: 'Salzungsbehälter', it: 'contenitore per stagionatura', nl: 'zouttrommel', zh: '腌制容器', ja: '塩漬け容器', ru: 'ёмкость для засолки' },
        },
        {
          id: 'supermarket/butcher_tools/smoke_gun',
          localImage: 'supermarket/butcher_tools/smoke_gun',
          translations: { en: 'smoke gun', es: 'pistola de humo', pt: 'defumador', fr: 'pistolet à fumée', de: 'Rauchpistole', it: 'pistola per affumicatura', nl: 'rookgun', zh: '烟熏枪', ja: 'スモークガン', ru: 'дымовой пистолет' },
        },
        {
          id: 'supermarket/butcher_tools/vacuum_sealer',
          localImage: 'supermarket/butcher_tools/vacuum_sealer',
          translations: { en: 'vacuum sealer', es: 'selladora al vacío', pt: 'seladora a vácuo', fr: 'machine sous vide', de: 'Vakuumierer', it: 'sigillatrice sottovuoto', nl: 'vacuümsealer', zh: '真空封装机', ja: '真空パック機', ru: 'вакуумный упаковщик' },
        },
        {
          id: 'supermarket/butcher_tools/meat_lug',
          localImage: 'supermarket/butcher_tools/meat_lug',
          translations: { en: 'meat lug', es: 'bandeja para carne', pt: 'bandeja de carne', fr: 'bac à viande', de: 'Fleischwanne', it: 'vasca per carne', nl: 'vleesbak', zh: '肉盘', ja: '精肉バット', ru: 'лоток для мяса' },
        },
        {
          id: 'supermarket/butcher_tools/scale',
          localImage: 'supermarket/butcher_tools/scale',
          translations: { en: 'scale', es: 'báscula', pt: 'balança', fr: 'balance', de: 'Waage', it: 'bilancia', nl: 'weegschaal', zh: '秤', ja: 'はかり', ru: 'весы' },
        },
        {
          id: 'supermarket/butcher_tools/price_gun',
          localImage: 'supermarket/butcher_tools/price_gun',
          translations: { en: 'price gun', es: 'etiquetadora de precios', pt: 'pistola de etiquetas', fr: 'pistolet d\'étiquetage', de: 'Preisauszeichnungsgerät', it: 'pistola prezzi', nl: 'prijspistool', zh: '价格标签枪', ja: '値札ガン', ru: 'пистолет для этикеток' },
        },
        {
          id: 'supermarket/butcher_tools/paper_dispenser',
          localImage: 'supermarket/butcher_tools/paper_dispenser',
          translations: { en: 'paper dispenser', es: 'dispensador de papel', pt: 'dispensador de papel', fr: 'distributeur de papier', de: 'Papierhalter', it: 'distributore di carta', nl: 'papierhouder', zh: '纸张分配器', ja: '紙ディスペンサー', ru: 'диспенсер для бумаги' },
        },
        {
          id: 'supermarket/butcher_tools/label_printer',
          localImage: 'supermarket/butcher_tools/label_printer',
          translations: { en: 'label printer', es: 'impresora de etiquetas', pt: 'impressora de etiquetas', fr: 'imprimante d\'étiquettes', de: 'Etikettendrucker', it: 'stampante etichette', nl: 'labelprinter', zh: '标签打印机', ja: 'ラベルプリンター', ru: 'принтер этикеток' },
        },
        {
          id: 'supermarket/butcher_tools/bone_saw',
          localImage: 'supermarket/butcher_tools/bone_saw',
          translations: { en: 'bone saw', es: 'sierra de huesos', pt: 'serra de osso', fr: 'scie à os', de: 'Knochensäge', it: 'sega per ossa', nl: 'bottensnijder', zh: '截骨锯', ja: '骨用ノコギリ', ru: 'пила для костей' },
        },
        {
          id: 'supermarket/butcher_tools/lug_cart',
          localImage: 'supermarket/butcher_tools/lug_cart',
          translations: { en: 'lug cart', es: 'carro de bandejas', pt: 'carrinho de bandeja', fr: 'chariot à bacs', de: 'Wannenwagen', it: 'carrello vasca', nl: 'wastewagen', zh: '托盘推车', ja: 'バット台車', ru: 'тележка для лотков' },
        },
        {
          id: 'supermarket/butcher_tools/blade_tenderizer',
          localImage: 'supermarket/butcher_tools/blade_tenderizer',
          translations: { en: 'blade tenderizer', es: 'ablandador de hojas', pt: 'amaciador de lâminas', fr: 'attendrisseur à lames', de: 'Klingenzartmacher', it: 'tenderizzatore a lame', nl: 'lametenderizer', zh: '刀片嫩肉机', ja: 'ブレードテンダライザー', ru: 'тендерайзер с лезвиями' },
        },
        {
          id: 'supermarket/butcher_tools/replacement_blade',
          localImage: 'supermarket/butcher_tools/replacement_blade',
          translations: { en: 'replacement blade', es: 'hoja de repuesto', pt: 'lâmina de substituição', fr: 'lame de rechange', de: 'Ersatzklinge', it: 'lama di ricambio', nl: 'vervangingsblad', zh: '替换刀片', ja: '交換用ブレード', ru: 'сменное лезвие' },
        },
        {
          id: 'supermarket/butcher_tools/meat_mixer',
          localImage: 'supermarket/butcher_tools/meat_mixer',
          translations: { en: 'meat mixer', es: 'mezcladora de carne', pt: 'misturador de carne', fr: 'mélangeur de viande', de: 'Fleischmischer', it: 'miscelatore per carne', nl: 'vleesmenger', zh: '搅肉机', ja: 'ミートミキサー', ru: 'мешалка для мяса' },
        },
        {
          id: 'supermarket/butcher_tools/hog_ring_plier',
          localImage: 'supermarket/butcher_tools/hog_ring_plier',
          translations: { en: 'hog ring plier', es: 'alicate para anillar', pt: 'alicate para anilhos', fr: 'pince à colliers', de: 'Schellenzange', it: 'pinze per anelli', nl: 'hogringstang', zh: '环形卡钳', ja: 'ホグリングプライヤー', ru: 'плоскогубцы для колец' },
        },
        {
          id: 'supermarket/butcher_tools/electric_tenderizer',
          localImage: 'supermarket/butcher_tools/electric_tenderizer',
          translations: { en: 'electric tenderizer', es: 'ablandador eléctrico', pt: 'amaciador elétrico', fr: 'attendrisseur électrique', de: 'elektrischer Fleischmürber', it: 'tenerizzatore elettrico', nl: 'elektrische tenderizer', zh: '电动嫩肉机', ja: '電動テンダライザー', ru: 'электрический тендерайзер' },
        },
        ],
      }
      ],
    },
    {
      id: 'baker_tools',
      name: { en: 'Baker', es: 'Panadero', pt: 'Padeiro', fr: 'Boulanger', de: 'Bäcker', it: 'Fornaio', nl: 'Baker', zh: 'Baker', ja: 'Baker', ru: 'Baker' },
      icon: '🍞',
      roles: [
      {
        id: 'tools',
        name: { en: 'Tools', es: 'Herramientas', pt: 'Ferramentas', fr: 'Outils', de: 'Werkzeuge', it: 'Attrezzi', nl: 'Gereedschap', zh: '工具', ja: '道具', ru: 'Инструменты' },
        icon: '🔧',
        items: [
        {
          id: 'supermarket/baker_tools/rolling_pin',
          localImage: 'supermarket/baker_tools/rolling_pin',
          translations: { en: 'rolling pin', es: 'rodillo', pt: 'rolo de massa', fr: 'rouleau à pâtisserie', de: 'Nudelholz', it: 'matterello', nl: 'deegroller', zh: '擀面杖', ja: '麵棒', ru: 'скалка' },
        },
        {
          id: 'supermarket/baker_tools/pastry_brush',
          localImage: 'supermarket/baker_tools/pastry_brush',
          translations: { en: 'pastry brush', es: 'pincel de repostería', pt: 'pincel de confeitaria', fr: 'pinceau à pâtisserie', de: 'Backpinsel', it: 'pennello da pasticceria', nl: 'deegkwast', zh: '糕点刷', ja: 'ペストリーブラシ', ru: 'кулинарная кисть' },
        },
        {
          id: 'supermarket/baker_tools/bread_lame',
          localImage: 'supermarket/baker_tools/bread_lame',
          translations: { en: 'bread lame', es: 'cuchilla de pan', pt: 'lâmina de pão', fr: 'lame à pain', de: 'Brotmesser', it: 'lama per pane', nl: 'broodsnijder', zh: '割包刀', ja: 'ブレードライム', ru: 'лезвие для надрезки хлеба' },
        },
        {
          id: 'supermarket/baker_tools/dough_scraper',
          localImage: 'supermarket/baker_tools/dough_scraper',
          translations: { en: 'dough scraper', es: 'rasqueta de masa', pt: 'raspador de massa', fr: 'coupe-pâte', de: 'Teigschaber', it: 'raschia pasta', nl: 'deegschraper', zh: '刮面团刀', ja: '生地スケッパー', ru: 'скребок для теста' },
        },
        {
          id: 'supermarket/baker_tools/proofing_basket',
          localImage: 'supermarket/baker_tools/proofing_basket',
          translations: { en: 'proofing basket', es: 'cesta de fermentación', pt: 'cesta de fermentação', fr: 'banneton', de: 'Gärkorb', it: 'cestino per la lievitazione', nl: 'rijsmandje', zh: '发酵篮', ja: '発酵かご', ru: 'корзина для расстойки' },
        },
        {
          id: 'supermarket/baker_tools/pastry_cutter',
          localImage: 'supermarket/baker_tools/pastry_cutter',
          translations: { en: 'pastry cutter', es: 'cortador de repostería', pt: 'cortador de massa', fr: 'coupe-pâte', de: 'Teigrädchen', it: 'tagliapasta', nl: 'deegsnijder', zh: '糕点切割器', ja: 'ペストリーカッター', ru: 'нож для теста' },
        },
        {
          id: 'supermarket/baker_tools/bread_pan',
          localImage: 'supermarket/baker_tools/bread_pan',
          translations: { en: 'bread pan', es: 'molde de pan', pt: 'forma de pão', fr: 'moule à pain', de: 'Brotform', it: 'stampo per pane', nl: 'broodvorm', zh: '面包模具', ja: 'パン型', ru: 'форма для хлеба' },
        },
        {
          id: 'supermarket/baker_tools/cake_pan',
          localImage: 'supermarket/baker_tools/cake_pan',
          translations: { en: 'cake pan', es: 'molde para pastel', pt: 'forma de bolo', fr: 'moule à gâteau', de: 'Kuchenform', it: 'stampo per torte', nl: 'cakevorm', zh: '蛋糕模具', ja: 'ケーキ型', ru: 'форма для торта' },
        },
        {
          id: 'supermarket/baker_tools/muffin_tin',
          localImage: 'supermarket/baker_tools/muffin_tin',
          translations: { en: 'muffin tin', es: 'molde para muffins', pt: 'forma para muffins', fr: 'moule à muffins', de: 'Muffinform', it: 'stampo per muffin', nl: 'muffinvorm', zh: '松糕模具', ja: 'マフィン型', ru: 'форма для маффинов' },
        },
        {
          id: 'supermarket/baker_tools/baking_sheet',
          localImage: 'supermarket/baker_tools/baking_sheet',
          translations: { en: 'baking sheet', es: 'bandeja de hornear', pt: 'assadeira', fr: 'plaque de cuisson', de: 'Backblech', it: 'teglia da forno', nl: 'bakplaat', zh: '烤盘', ja: '天板', ru: 'противень' },
        },
        {
          id: 'supermarket/baker_tools/cooling_rack',
          localImage: 'supermarket/baker_tools/cooling_rack',
          translations: { en: 'cooling rack', es: 'rejilla para enfriar', pt: 'grade de resfriamento', fr: 'grille de refroidissement', de: 'Kuchenrost', it: 'griglia di raffreddamento', nl: 'afkoelrooster', zh: '冷却架', ja: '冷却ラック', ru: 'решётка для охлаждения' },
        },
        {
          id: 'supermarket/baker_tools/piping_bag',
          localImage: 'supermarket/baker_tools/piping_bag',
          translations: { en: 'piping bag', es: 'manga pastelera', pt: 'saco de confeitar', fr: 'poche à douille', de: 'Spritzbeutel', it: 'sac à poche', nl: 'spuitzak', zh: '裱花袋', ja: '絞り袋', ru: 'кондитерский мешок' },
        },
        {
          id: 'supermarket/baker_tools/icing_spatula',
          localImage: 'supermarket/baker_tools/icing_spatula',
          translations: { en: 'icing spatula', es: 'espátula de glaseado', pt: 'espátula de glacê', fr: 'spatule à glaçage', de: 'Glasurspatel', it: 'spatola per glassatura', nl: 'glazuurspatel', zh: '糖霜抹刀', ja: 'アイシングスパチュラ', ru: 'лопатка для глазури' },
        },
        {
          id: 'supermarket/baker_tools/dough_whisk',
          localImage: 'supermarket/baker_tools/dough_whisk',
          translations: { en: 'dough whisk', es: 'batidor de masa', pt: 'batedor de massa', fr: 'fouet à pâte', de: 'Teigschneebesen', it: 'frusta per impasto', nl: 'deegklopper', zh: '打面团打蛋器', ja: '生地ウィスク', ru: 'венчик для теста' },
        },
        {
          id: 'supermarket/baker_tools/bread_knife',
          localImage: 'supermarket/baker_tools/bread_knife',
          translations: { en: 'bread knife', es: 'cuchillo de pan', pt: 'faca de pão', fr: 'couteau à pain', de: 'Brotmesser', it: 'coltello da pane', nl: 'broodmes', zh: '面包刀', ja: 'パンナイフ', ru: 'хлебный нож' },
        },
        {
          id: 'supermarket/baker_tools/kitchen_scale',
          localImage: 'supermarket/baker_tools/kitchen_scale',
          translations: { en: 'kitchen scale', es: 'báscula de cocina', pt: 'balança de cozinha', fr: 'balance de cuisine', de: 'Küchenwaage', it: 'bilancia da cucina', nl: 'keukenweegschaal', zh: '厨房秤', ja: 'キッチンスケール', ru: 'кухонные весы' },
        },
        {
          id: 'supermarket/baker_tools/measuring_cups',
          localImage: 'supermarket/baker_tools/measuring_cups',
          translations: { en: 'measuring cups', es: 'tazas medidoras', pt: 'copos medidores', fr: 'tasses à mesurer', de: 'Messbecher', it: 'tazze misuratici', nl: 'maatbekers', zh: '量杯', ja: '計量カップ', ru: 'мерные стаканы' },
        },
        {
          id: 'supermarket/baker_tools/measuring_spoons',
          localImage: 'supermarket/baker_tools/measuring_spoons',
          translations: { en: 'measuring spoons', es: 'cucharas medidoras', pt: 'colheres medidoras', fr: 'cuillères à mesurer', de: 'Messlöffel', it: 'cucchiai dosatori', nl: 'maatlepels', zh: '量匙', ja: '計量スプーン', ru: 'мерные ложки' },
        },
        {
          id: 'supermarket/baker_tools/mixing_bowl',
          localImage: 'supermarket/baker_tools/mixing_bowl',
          translations: { en: 'mixing bowl', es: 'cuenco para mezclar', pt: 'tigela para misturar', fr: 'bol mélangeur', de: 'Rührschüssel', it: 'ciotola per mescolare', nl: 'mengkom', zh: '搅拌碗', ja: 'ミキシングボウル', ru: 'миска для смешивания' },
        },
        {
          id: 'supermarket/baker_tools/stand_mixer',
          localImage: 'supermarket/baker_tools/stand_mixer',
          translations: { en: 'stand mixer', es: 'batidora de pie', pt: 'batedeira planetária', fr: 'batteur sur socle', de: 'Küchenmaschine', it: 'impastatrice', nl: 'standmixer', zh: '厨师机', ja: 'スタンドミキサー', ru: 'стационарный миксер' },
        },
        {
          id: 'supermarket/baker_tools/flour_sifter',
          localImage: 'supermarket/baker_tools/flour_sifter',
          translations: { en: 'flour sifter', es: 'tamiz de harina', pt: 'peneira de farinha', fr: 'tamis à farine', de: 'Mehlsieb', it: 'setaccio per farina', nl: 'meelzeef', zh: '面粉筛', ja: '粉ふるい', ru: 'сито для муки' },
        },
        {
          id: 'supermarket/baker_tools/dough_docker',
          localImage: 'supermarket/baker_tools/dough_docker',
          translations: { en: 'dough docker', es: 'rodillo de pinchos', pt: 'rolo picador de massa', fr: 'pique-vite', de: 'Teigrädchen', it: 'bucaformi', nl: 'dough docker', zh: '打孔滚轮', ja: 'ドッカー', ru: 'игольчатый ролик' },
        },
        {
          id: 'supermarket/baker_tools/bread_stamp',
          localImage: 'supermarket/baker_tools/bread_stamp',
          translations: { en: 'bread stamp', es: 'sello de pan', pt: 'carimbo de pão', fr: 'tampon à pain', de: 'Brotstempel', it: 'timbro per pane', nl: 'broodstempel', zh: '面包印章', ja: 'パンスタンプ', ru: 'штамп для хлеба' },
        },
        {
          id: 'supermarket/baker_tools/oven_peel',
          localImage: 'supermarket/baker_tools/oven_peel',
          translations: { en: 'oven peel', es: 'pala de horno', pt: 'pá de forno', fr: 'pelle à four', de: 'Backschaufel', it: 'pala da forno', nl: 'broodschep', zh: '烤炉铲', ja: 'オーブンピール', ru: 'хлебная лопата' },
        },
        {
          id: 'supermarket/baker_tools/oven_thermometer',
          localImage: 'supermarket/baker_tools/oven_thermometer',
          translations: { en: 'oven thermometer', es: 'termómetro de horno', pt: 'termômetro de forno', fr: 'thermomètre de four', de: 'Ofenthermometer', it: 'termometro per forno', nl: 'oventhermometer', zh: '烤箱温度计', ja: 'オーブン温度計', ru: 'термометр для духовки' },
        },
        {
          id: 'supermarket/baker_tools/kitchen_timer',
          localImage: 'supermarket/baker_tools/kitchen_timer',
          translations: { en: 'kitchen timer', es: 'temporizador de cocina', pt: 'timer de cozinha', fr: 'minuterie de cuisine', de: 'Küchentimer', it: 'timer da cucina', nl: 'kookwekker', zh: '厨房定时器', ja: 'キッチンタイマー', ru: 'кухонный таймер' },
        },
        {
          id: 'supermarket/baker_tools/pastry_wheel',
          localImage: 'supermarket/baker_tools/pastry_wheel',
          translations: { en: 'pastry wheel', es: 'rueda de repostería', pt: 'roda de massa', fr: 'roulette à pâtisserie', de: 'Teigrädchen', it: 'rotella da pasticceria', nl: 'deegwieltje', zh: '糕点切轮', ja: 'ペストリーホイール', ru: 'колесо для теста' },
        },
        {
          id: 'supermarket/baker_tools/biscuit_cutters',
          localImage: 'supermarket/baker_tools/biscuit_cutters',
          translations: { en: 'biscuit cutters', es: 'cortadores de galletas', pt: 'cortadores de biscoitos', fr: 'emporte-pièces', de: 'Keksausstecher', it: 'tagliabiscotti', nl: 'koekjesvorm', zh: '饼干模具', ja: 'クッキー型', ru: 'формочки для печенья' },
        },
        {
          id: 'supermarket/baker_tools/pie_dish',
          localImage: 'supermarket/baker_tools/pie_dish',
          translations: { en: 'pie dish', es: 'molde de tarta', pt: 'forma de torta', fr: 'plat à tarte', de: 'Pieform', it: 'tortiera', nl: 'taartvorm', zh: '馅饼盘', ja: 'パイ皿', ru: 'форма для пирога' },
        },
        {
          id: 'supermarket/baker_tools/bundt_pan',
          localImage: 'supermarket/baker_tools/bundt_pan',
          translations: { en: 'bundt pan', es: 'molde bundt', pt: 'forma de bolo com furo', fr: 'moule à kouglof', de: 'Gugelhupfform', it: 'stampo a ciambella', nl: 'tulbandvorm', zh: '戚风蛋糕模具', ja: 'バントパン', ru: 'форма для кугельхопфа' },
        },
        {
          id: 'supermarket/baker_tools/silicone_mat',
          localImage: 'supermarket/baker_tools/silicone_mat',
          translations: { en: 'silicone mat', es: 'tapete de silicona', pt: 'tapete de silicone', fr: 'tapis en silicone', de: 'Silikonmatte', it: 'tappetino in silicone', nl: 'siliconenmat', zh: '硅胶烤垫', ja: 'シリコンマット', ru: 'силиконовый коврик' },
        },
        {
          id: 'supermarket/baker_tools/parchment_paper',
          localImage: 'supermarket/baker_tools/parchment_paper',
          translations: { en: 'parchment paper', es: 'papel pergamino', pt: 'papel manteiga', fr: 'papier sulfurisé', de: 'Backpapier', it: 'carta forno', nl: 'bakpapier', zh: '烘焙纸', ja: 'クッキングシート', ru: 'пергаментная бумага' },
        },
        {
          id: 'supermarket/baker_tools/balloon_whisk',
          localImage: 'supermarket/baker_tools/balloon_whisk',
          translations: { en: 'balloon whisk', es: 'batidor de globo', pt: 'batedor de balão', fr: 'fouet ballon', de: 'Schneebesen', it: 'frusta a palloncino', nl: 'balloniklopper', zh: '球形打蛋器', ja: 'バルーンウィスク', ru: 'венчик-баллон' },
        },
        {
          id: 'supermarket/baker_tools/wooden_spoon',
          localImage: 'supermarket/baker_tools/wooden_spoon',
          translations: { en: 'wooden spoon', es: 'cuchara de madera', pt: 'colher de pau', fr: 'cuillère en bois', de: 'Holzlöffel', it: 'cucchiaio di legno', nl: 'houten lepel', zh: '木勺', ja: '木のスプーン', ru: 'деревянная ложка' },
        },
        {
          id: 'supermarket/baker_tools/proofing_box',
          localImage: 'supermarket/baker_tools/proofing_box',
          translations: { en: 'proofing box', es: 'caja de fermentación', pt: 'caixa de fermentação', fr: 'chambre de pousse', de: 'Gärbox', it: 'camera di lievitazione', nl: 'rijskast', zh: '发酵箱', ja: '発酵ボックス', ru: 'расстоечный шкаф' },
        },
        {
          id: 'supermarket/baker_tools/spray_bottle',
          localImage: 'supermarket/baker_tools/spray_bottle',
          translations: { en: 'spray bottle', es: 'botella spray', pt: 'borrifador', fr: 'flacon pulvérisateur', de: 'Sprühflasche', it: 'flacone spray', nl: 'sprayflacon', zh: '喷雾瓶', ja: 'スプレーボトル', ru: 'пульверизатор' },
        },
        {
          id: 'supermarket/baker_tools/grain_mill',
          localImage: 'supermarket/baker_tools/grain_mill',
          translations: { en: 'grain mill', es: 'molino de granos', pt: 'moinho de grãos', fr: 'moulin à grains', de: 'Getreidemühle', it: 'mulino per cereali', nl: 'graanmolen', zh: '磨粉机', ja: '穀物ミル', ru: 'мельница для зерна' },
        },
        {
          id: 'supermarket/baker_tools/blowtorch',
          localImage: 'supermarket/baker_tools/blowtorch',
          translations: { en: 'blowtorch', es: 'soplete', pt: 'maçarico', fr: 'chalumeau', de: 'Bunsenbrenner', it: 'cannello', nl: 'gasbrander', zh: '喷枪', ja: 'バーナー', ru: 'кулинарная горелка' },
        },
        {
          id: 'supermarket/baker_tools/cake_turntable',
          localImage: 'supermarket/baker_tools/cake_turntable',
          translations: { en: 'cake turntable', es: 'plato giratorio para pastel', pt: 'prato giratório para bolo', fr: 'plateau tournant', de: 'Drehteller', it: 'piatto rotante', nl: 'taartstandaard', zh: '蛋糕转台', ja: 'ケーキターンテーブル', ru: 'поворотный стол для торта' },
        },
        {
          id: 'supermarket/baker_tools/offset_spatula',
          localImage: 'supermarket/baker_tools/offset_spatula',
          translations: { en: 'offset spatula', es: 'espátula offset', pt: 'espátula de cotovelo', fr: 'spatule coudée', de: 'Winkelpalette', it: 'spatola angolata', nl: 'haakspatel', zh: '曲柄抹刀', ja: 'オフセットスパチュラ', ru: 'изогнутая лопатка' },
        },
        {
          id: 'supermarket/baker_tools/bench_knife',
          localImage: 'supermarket/baker_tools/bench_knife',
          translations: { en: 'bench knife', es: 'cuchillo de banco', pt: 'raspa de bancada', fr: 'coupe-pâte de table', de: 'Teigmesser', it: 'coltello da banco', nl: 'bankmes', zh: '台面刮板', ja: 'ベンチナイフ', ru: 'скребок кондитера' },
        },
        {
          id: 'supermarket/baker_tools/couche_cloth',
          localImage: 'supermarket/baker_tools/couche_cloth',
          translations: { en: 'couche cloth', es: 'tela para fermentación', pt: 'pano de fermentação', fr: 'couche de boulanger', de: 'Bäckerleinwand', it: 'telo per lievitazione', nl: 'rijsdoek', zh: '发酵布', ja: '発酵クロス', ru: 'льняная расстоечная ткань' },
        },
        {
          id: 'supermarket/baker_tools/banneton_liner',
          localImage: 'supermarket/baker_tools/banneton_liner',
          translations: { en: 'banneton liner', es: 'forro de cesta', pt: 'forro de cesta', fr: 'chemise de banneton', de: 'Gärkorbeinsatz', it: 'fodera per cestino', nl: 'rijsmandvoering', zh: '发酵篮衬布', ja: 'バネトンライナー', ru: 'вкладыш для корзины' },
        },
        {
          id: 'supermarket/baker_tools/dough_bucket',
          localImage: 'supermarket/baker_tools/dough_bucket',
          translations: { en: 'dough bucket', es: 'cubo de masa', pt: 'balde de massa', fr: 'seau à pâte', de: 'Teigwanne', it: 'secchio per impasto', nl: 'deegbak', zh: '面团桶', ja: 'ドウバケツ', ru: 'контейнер для теста' },
        },
        {
          id: 'supermarket/baker_tools/glazing_brush',
          localImage: 'supermarket/baker_tools/glazing_brush',
          translations: { en: 'glazing brush', es: 'pincel de glasear', pt: 'pincel de glacear', fr: 'pinceau à napper', de: 'Glasurpinsel', it: 'pennello da glassatura', nl: 'glacuurkwast', zh: '糖浆刷', ja: 'グレーズブラシ', ru: 'кисть для глазировки' },
        },
        {
          id: 'supermarket/baker_tools/bread_bag',
          localImage: 'supermarket/baker_tools/bread_bag',
          translations: { en: 'bread bag', es: 'bolsa de pan', pt: 'saco de pão', fr: 'sac à pain', de: 'Brottüte', it: 'sacchetto per pane', nl: 'broodsak', zh: '面包袋', ja: 'パン袋', ru: 'мешок для хлеба' },
        },
        {
          id: 'supermarket/baker_tools/bowl_scraper',
          localImage: 'supermarket/baker_tools/bowl_scraper',
          translations: { en: 'bowl scraper', es: 'raspador de bol', pt: 'raspador de tigela', fr: 'racloir de bol', de: 'Schüsselschaber', it: 'raschietto per ciotola', nl: 'komschraper', zh: '碗刮刀', ja: 'ボウルスクレーパー', ru: 'скребок для миски' },
        },
        {
          id: 'supermarket/baker_tools/piping_tips',
          localImage: 'supermarket/baker_tools/piping_tips',
          translations: { en: 'piping tips', es: 'boquillas', pt: 'bicos de confeitar', fr: 'douilles', de: 'Aufsätze', it: 'bocchette', nl: 'spuitmondjes', zh: '裱花嘴', ja: '絞り口金', ru: 'насадки кондитерского мешка' },
        },
        {
          id: 'supermarket/baker_tools/flour_dredge',
          localImage: 'supermarket/baker_tools/flour_dredge',
          translations: { en: 'flour dredge', es: 'espolvoreador de harina', pt: 'polvilhador de farinha', fr: 'saupoudroir à farine', de: 'Mehlstreuer', it: 'spolvero farina', nl: 'meelstrooier', zh: '撒粉器', ja: '粉フリッカー', ru: 'мучница' },
        },
        {
          id: 'supermarket/baker_tools/palette_knife',
          localImage: 'supermarket/baker_tools/palette_knife',
          translations: { en: 'palette knife', es: 'paleta', pt: 'espátula de confeiteiro', fr: 'couteau palette', de: 'Palettenmesser', it: 'coltello a palette', nl: 'paletmes', zh: '调色刀', ja: 'パレットナイフ', ru: 'нож-лопатка' },
        },
        ],
      }
      ],
    },
    {
      id: 'cleaner',
      name: { en: 'Cleaner', es: 'Limpiador', pt: 'Limpador', fr: 'Nettoyeur', de: 'Reiniger', it: 'Addetto alle pulizie', nl: 'Cleaner', zh: 'Cleaner', ja: 'Cleaner', ru: 'Cleaner' },
      icon: '🧹',
      roles: [
      {
        id: 'tools',
        name: { en: 'Tools', es: 'Herramientas', pt: 'Ferramentas', fr: 'Outils', de: 'Werkzeuge', it: 'Attrezzi', nl: 'Gereedschap', zh: '工具', ja: '道具', ru: 'Инструменты' },
        icon: '🔧',
        items: [
        {
          id: 'supermarket/cleaner/mop',
          localImage: 'supermarket/cleaner/mop',
          translations: { en: 'mop', es: 'fregona', pt: 'esfregão', fr: 'serpillière', de: 'Wischmop', it: 'mocio', nl: 'dweil', zh: '拖把', ja: 'モップ', ru: 'швабра' },
        },
        {
          id: 'supermarket/cleaner/bucket',
          localImage: 'supermarket/cleaner/bucket',
          translations: { en: 'bucket', es: 'cubo', pt: 'balde', fr: 'seau', de: 'Eimer', it: 'secchio', nl: 'emmer', zh: '桶', ja: 'バケツ', ru: 'ведро' },
        },
        {
          id: 'supermarket/cleaner/cleaning_cloth',
          localImage: 'supermarket/cleaner/cleaning_cloth',
          translations: { en: 'cleaning cloth', es: 'paño de limpieza', pt: 'pano de limpeza', fr: 'chiffon de nettoyage', de: 'Putztuch', it: 'strofinaccio', nl: 'poetsdoek', zh: '清洁布', ja: '雑巾', ru: 'тряпка' },
        },
        {
          id: 'supermarket/cleaner/detergent',
          localImage: 'supermarket/cleaner/detergent',
          translations: { en: 'detergent', es: 'detergente', pt: 'detergente', fr: 'détergent', de: 'Reinigungsmittel', it: 'detersivo', nl: 'schoonmaakmiddel', zh: '洗涤剂', ja: '洗剤', ru: 'моющее средство' },
        },
        {
          id: 'supermarket/cleaner/disinfectant',
          localImage: 'supermarket/cleaner/disinfectant',
          translations: { en: 'disinfectant', es: 'desinfectante', pt: 'desinfetante', fr: 'désinfectant', de: 'Desinfektionsmittel', it: 'disinfettante', nl: 'desinfectant', zh: '消毒剂', ja: '消毒薬', ru: 'дезинфектант' },
        },
        {
          id: 'supermarket/cleaner/wet_floor_sign',
          localImage: 'supermarket/cleaner/wet_floor_sign',
          translations: { en: 'wet floor sign', es: 'señal de suelo mojado', pt: 'placa de piso molhado', fr: 'panneau sol mouillé', de: 'Nasser Boden Schild', it: 'cartello pavimento bagnato', nl: 'nat-vloerbord', zh: '湿地板警示牌', ja: '床注意サイン', ru: 'знак «Мокрый пол»' },
        },
        {
          id: 'supermarket/cleaner/trash_bag',
          localImage: 'supermarket/cleaner/trash_bag',
          translations: { en: 'trash bag', es: 'bolsa de basura', pt: 'saco de lixo', fr: 'sac poubelle', de: 'Müllbeutel', it: 'sacco della spazzatura', nl: 'vuilniszak', zh: '垃圾袋', ja: 'ゴミ袋', ru: 'мусорный пакет' },
        },
        {
          id: 'supermarket/cleaner/scrub_brush',
          localImage: 'supermarket/cleaner/scrub_brush',
          translations: { en: 'scrub brush', es: 'cepillo de fregar', pt: 'escova de esfregar', fr: 'brosse à récurer', de: 'Scheuerbürste', it: 'spazzola da sfregamento', nl: 'schrobber', zh: '擦洗刷', ja: 'タワシ', ru: 'щётка для мытья' },
        },
        {
          id: 'supermarket/cleaner/sponge',
          localImage: 'supermarket/cleaner/sponge',
          translations: { en: 'sponge', es: 'esponja', pt: 'esponja', fr: 'éponge', de: 'Schwamm', it: 'spugna', nl: 'spons', zh: '海绵', ja: 'スポンジ', ru: 'губка' },
        },
        {
          id: 'supermarket/cleaner/glass_cleaner',
          localImage: 'supermarket/cleaner/glass_cleaner',
          translations: { en: 'glass cleaner', es: 'limpiador de vidrios', pt: 'limpa-vidros', fr: 'nettoyant pour vitres', de: 'Glasreiniger', it: 'puliscivetri', nl: 'glasreiniger', zh: '玻璃清洁剂', ja: 'ガラスクリーナー', ru: 'средство для стёкол' },
        },
        {
          id: 'supermarket/cleaner/floor_polisher',
          localImage: 'supermarket/cleaner/floor_polisher',
          translations: { en: 'floor polisher', es: 'pulidora de suelos', pt: 'enceradeira', fr: 'polisseuse de sol', de: 'Bodenpolierer', it: 'lucidatrice per pavimenti', nl: 'vloerwasser', zh: '地板抛光机', ja: 'フロアポリッシャー', ru: 'полировщик полов' },
        },
        {
          id: 'supermarket/cleaner/vacuum_cleaner',
          localImage: 'supermarket/cleaner/vacuum_cleaner',
          translations: { en: 'vacuum cleaner', es: 'aspiradora', pt: 'aspirador', fr: 'aspirateur', de: 'Staubsauger', it: 'aspirapolvere', nl: 'stofzuiger', zh: '吸尘器', ja: '掃除機', ru: 'пылесос' },
        },
        {
          id: 'supermarket/cleaner/microfiber_cloth',
          localImage: 'supermarket/cleaner/microfiber_cloth',
          translations: { en: 'microfiber cloth', es: 'paño de microfibra', pt: 'pano de microfibra', fr: 'chiffon microfibres', de: 'Mikrofasertuch', it: 'panno in microfibra', nl: 'microvezeldoek', zh: '超细纤维布', ja: 'マイクロファイバークロス', ru: 'салфетка из микрофибры' },
        },
        {
          id: 'supermarket/cleaner/squeegee',
          localImage: 'supermarket/cleaner/squeegee',
          translations: { en: 'squeegee', es: 'escobilla de goma', pt: 'rodo', fr: 'raclette', de: 'Abzieher', it: 'tiravetro', nl: 'trekker', zh: '橡胶刮水器', ja: 'スクイジー', ru: 'резиновый сгон' },
        },
        {
          id: 'supermarket/cleaner/toilet_brush',
          localImage: 'supermarket/cleaner/toilet_brush',
          translations: { en: 'toilet brush', es: 'escobilla de baño', pt: 'escova sanitária', fr: 'brosse de toilette', de: 'Toilettenbürste', it: 'scopino WC', nl: 'toiletborstel', zh: '马桶刷', ja: 'トイレブラシ', ru: 'туалетный ёршик' },
        },
        {
          id: 'supermarket/cleaner/gloves',
          localImage: 'supermarket/cleaner/gloves',
          translations: { en: 'gloves', es: 'guantes', pt: 'luvas', fr: 'gants', de: 'Handschuhe', it: 'guanti', nl: 'handschoenen', zh: '手套', ja: '手袋', ru: 'перчатки' },
        },
        {
          id: 'supermarket/cleaner/apron',
          localImage: 'supermarket/cleaner/apron',
          translations: { en: 'apron', es: 'delantal', pt: 'avental', fr: 'tablier', de: 'Schürze', it: 'grembiule', nl: 'schort', zh: '围裙', ja: 'エプロン', ru: 'фартук' },
        },
        {
          id: 'supermarket/cleaner/face_mask',
          localImage: 'supermarket/cleaner/face_mask',
          translations: { en: 'face mask', es: 'mascarilla', pt: 'máscara de proteção', fr: 'masque de protection', de: 'Schutzmaske', it: 'mascherina', nl: 'mondmasker', zh: '口罩', ja: 'マスク', ru: 'маска' },
        },
        {
          id: 'supermarket/cleaner/bleach',
          localImage: 'supermarket/cleaner/bleach',
          translations: { en: 'bleach', es: 'lejía', pt: 'água sanitária', fr: 'eau de Javel', de: 'Bleichmittel', it: 'candeggina', nl: 'bleekwater', zh: '漂白剂', ja: '漂白剤', ru: 'отбеливатель' },
        },
        {
          id: 'supermarket/cleaner/air_freshener',
          localImage: 'supermarket/cleaner/air_freshener',
          translations: { en: 'air freshener', es: 'ambientador', pt: 'desodorizador', fr: 'désodorisant', de: 'Lufterfrischer', it: 'deodorante ambiente', nl: 'luchtverfrisser', zh: '空气清新剂', ja: '芳香剤', ru: 'освежитель воздуха' },
        },
        {
          id: 'supermarket/cleaner/paper_towel',
          localImage: 'supermarket/cleaner/paper_towel',
          translations: { en: 'paper towel', es: 'toalla de papel', pt: 'toalha de papel', fr: 'essuie-tout', de: 'Papiertuch', it: 'carta assorbente', nl: 'keukenpapier', zh: '纸巾', ja: 'ペーパータオル', ru: 'бумажное полотенце' },
        },
        {
          id: 'supermarket/cleaner/hand_soap',
          localImage: 'supermarket/cleaner/hand_soap',
          translations: { en: 'hand soap', es: 'jabón de manos', pt: 'sabonete de mãos', fr: 'savon pour les mains', de: 'Handseife', it: 'sapone per mani', nl: 'handzeep', zh: '洗手液', ja: 'ハンドソープ', ru: 'жидкое мыло для рук' },
        },
        {
          id: 'supermarket/cleaner/sanitizer',
          localImage: 'supermarket/cleaner/sanitizer',
          translations: { en: 'sanitizer', es: 'sanitizador', pt: 'sanitizador', fr: 'assainissant', de: 'Desinfektionsmittel', it: 'sanificante', nl: 'desinfectiemiddel', zh: '卫生消毒液', ja: '消毒液', ru: 'дезинфицирующее средство' },
        },
        {
          id: 'supermarket/cleaner/dust_mop',
          localImage: 'supermarket/cleaner/dust_mop',
          translations: { en: 'dust mop', es: 'mopa de polvo', pt: 'mop de pó', fr: 'balai à poussière', de: 'Staubmop', it: 'mopa antistatica', nl: 'stofdweil', zh: '除尘拖把', ja: 'ダストモップ', ru: 'пыльная швабра' },
        },
        {
          id: 'supermarket/cleaner/caddy',
          localImage: 'supermarket/cleaner/caddy',
          translations: { en: 'caddy', es: 'carrito de limpieza', pt: 'caddy de limpeza', fr: 'caddie de ménage', de: 'Reinigungskorb', it: 'carrellino', nl: 'schoonmaakcaddy', zh: '清洁工具车', ja: '清掃カート', ru: 'ведёрко для уборки' },
        },
        {
          id: 'supermarket/cleaner/steam_cleaner',
          localImage: 'supermarket/cleaner/steam_cleaner',
          translations: { en: 'steam cleaner', es: 'limpiadora a vapor', pt: 'limpador a vapor', fr: 'nettoyeur vapeur', de: 'Dampfreiniger', it: 'pulitrice a vapore', nl: 'stoomreiniger', zh: '蒸汽清洁机', ja: 'スチームクリーナー', ru: 'паровой очиститель' },
        },
        {
          id: 'supermarket/cleaner/pressure_washer',
          localImage: 'supermarket/cleaner/pressure_washer',
          translations: { en: 'pressure washer', es: 'hidrolimpiadora', pt: 'lavadora de alta pressão', fr: 'nettoyeur haute pression', de: 'Hochdruckreiniger', it: 'idropulitrice', nl: 'hogedrukreiniger', zh: '高压清洗机', ja: '高圧洗浄機', ru: 'мойка высокого давления' },
        },
        {
          id: 'supermarket/cleaner/odor_eliminator',
          localImage: 'supermarket/cleaner/odor_eliminator',
          translations: { en: 'odor eliminator', es: 'eliminador de olores', pt: 'eliminador de odores', fr: 'désodorisant', de: 'Geruchsbeseitiger', it: 'elimina-odori', nl: 'geurverdrijver', zh: '除臭剂', ja: '消臭剤', ru: 'нейтрализатор запаха' },
        },
        {
          id: 'supermarket/cleaner/waste_bin',
          localImage: 'supermarket/cleaner/waste_bin',
          translations: { en: 'waste bin', es: 'papelera', pt: 'lixeira', fr: 'poubelle', de: 'Mülleimer', it: 'cestino dei rifiuti', nl: 'prullenbak', zh: '垃圾桶', ja: 'ゴミ箱', ru: 'мусорное ведро' },
        },
        {
          id: 'supermarket/cleaner/caution_tape',
          localImage: 'supermarket/cleaner/caution_tape',
          translations: { en: 'caution tape', es: 'cinta de advertencia', pt: 'fita de advertência', fr: 'ruban de signalisation', de: 'Absperrband', it: 'nastro di segnalazione', nl: 'afzetlint', zh: '警示胶带', ja: '注意テープ', ru: 'предупредительная лента' },
        },
        ],
      }
      ],
    },
    {
      id: 'produce',
      name: { en: 'Produce', es: 'Verdulería', pt: 'Hortifrúti', fr: 'Rayon fruits et légumes', de: 'Obst und Gemüse', it: 'Reparto frutta e verdura', nl: 'Produce', zh: 'Produce', ja: 'Produce', ru: 'Produce' },
      icon: '🥬',
      roles: [
      {
        id: 'tools',
        name: { en: 'Tools', es: 'Herramientas', pt: 'Ferramentas', fr: 'Outils', de: 'Werkzeuge', it: 'Attrezzi', nl: 'Gereedschap', zh: '工具', ja: '道具', ru: 'Инструменты' },
        icon: '🔧',
        items: [
        {
          id: 'supermarket/produce/apron',
          localImage: 'supermarket/produce/apron',
          translations: { en: 'apron', es: 'delantal', pt: 'avental', fr: 'tablier', de: 'Schürze', it: 'grembiule', nl: 'schort', zh: '围裙', ja: 'エプロン', ru: 'фартук' },
        },
        {
          id: 'supermarket/produce/gloves',
          localImage: 'supermarket/produce/gloves',
          translations: { en: 'gloves', es: 'guantes', pt: 'luvas', fr: 'gants', de: 'Handschuhe', it: 'guanti', nl: 'handschoenen', zh: '手套', ja: '手袋', ru: 'перчатки' },
        },
        {
          id: 'supermarket/produce/sprayer',
          localImage: 'supermarket/produce/sprayer',
          translations: { en: 'sprayer', es: 'pulverizador', pt: 'pulverizador', fr: 'pulvérisateur', de: 'Sprühgerät', it: 'spruzzatore', nl: 'sproeier', zh: '喷雾器', ja: 'スプレーヤー', ru: 'пульверизатор' },
        },
        {
          id: 'supermarket/produce/misting_bottle',
          localImage: 'supermarket/produce/misting_bottle',
          translations: { en: 'misting bottle', es: 'botella nebulizadora', pt: 'frasco borrifador', fr: 'vaporisateur', de: 'Sprühflasche', it: 'flacone nebulizzatore', nl: 'misterfles', zh: '喷雾瓶', ja: 'ミスト瓶', ru: 'распрыскиватель' },
        },
        {
          id: 'supermarket/produce/scale',
          localImage: 'supermarket/produce/scale',
          translations: { en: 'scale', es: 'báscula', pt: 'balança', fr: 'balance', de: 'Waage', it: 'bilancia', nl: 'weegschaal', zh: '秤', ja: 'はかり', ru: 'весы' },
        },
        {
          id: 'supermarket/produce/price_gun',
          localImage: 'supermarket/produce/price_gun',
          translations: { en: 'price gun', es: 'etiquetadora de precios', pt: 'pistola de etiquetas', fr: 'pistolet d\'étiquetage', de: 'Preisauszeichnungsgerät', it: 'pistola prezzi', nl: 'prijspistool', zh: '价格标签枪', ja: '値札ガン', ru: 'пистолет для этикеток' },
        },
        {
          id: 'supermarket/produce/trimming_shears',
          localImage: 'supermarket/produce/trimming_shears',
          translations: { en: 'trimming shears', es: 'tijeras de recorte', pt: 'tesoura de poda', fr: 'sécateur de parage', de: 'Beschneideschere', it: 'cesoie per rifinitura', nl: 'snoeischaar', zh: '修枝剪', ja: 'トリミングシアー', ru: 'ножницы для обрезки' },
        },
        {
          id: 'supermarket/produce/produce_bags',
          localImage: 'supermarket/produce/produce_bags',
          translations: { en: 'produce bags', es: 'bolsas de producto', pt: 'sacolas de hortifrúti', fr: 'sacs à fruits et légumes', de: 'Obstbeutel', it: 'sacchetti per ortofrutta', nl: 'producezakjes', zh: '蔬果袋', ja: '野菜・果物袋', ru: 'пакеты для продуктов' },
        },
        {
          id: 'supermarket/produce/twist_ties',
          localImage: 'supermarket/produce/twist_ties',
          translations: { en: 'twist ties', es: 'ataduras', pt: 'atilhos', fr: 'attaches torsadées', de: 'Drehverschlüsse', it: 'legacci', nl: 'broodclipjes', zh: '扭扭棒', ja: 'ツイストタイ', ru: 'скрутки для пакетов' },
        },
        {
          id: 'supermarket/produce/display_tray',
          localImage: 'supermarket/produce/display_tray',
          translations: { en: 'display tray', es: 'bandeja de exhibición', pt: 'bandeja de exposição', fr: 'plateau de présentation', de: 'Auslagenschale', it: 'vassoio espositivo', nl: 'presentatiebak', zh: '展示托盘', ja: 'ディスプレイトレー', ru: 'лоток для выкладки' },
        },
        {
          id: 'supermarket/produce/watering_can',
          localImage: 'supermarket/produce/watering_can',
          translations: { en: 'watering can', es: 'regadera', pt: 'regador', fr: 'arrosoir', de: 'Gießkanne', it: 'annaffiatoio', nl: 'gieter', zh: '浇水壶', ja: 'じょうろ', ru: 'лейка' },
        },
        {
          id: 'supermarket/produce/knife',
          localImage: 'supermarket/produce/knife',
          translations: { en: 'knife', es: 'cuchillo', pt: 'faca', fr: 'couteau', de: 'Messer', it: 'coltello', nl: 'mes', zh: '刀', ja: 'ナイフ', ru: 'нож' },
        },
        {
          id: 'supermarket/produce/cutting_board',
          localImage: 'supermarket/produce/cutting_board',
          translations: { en: 'cutting board', es: 'tabla de cortar', pt: 'tábua de corte', fr: 'planche à découper', de: 'Schneidebrett', it: 'tagliere', nl: 'snijplank', zh: '砧板', ja: 'まな板', ru: 'разделочная доска' },
        },
        {
          id: 'supermarket/produce/label',
          localImage: 'supermarket/produce/label',
          translations: { en: 'label', es: 'etiqueta', pt: 'etiqueta', fr: 'étiquette', de: 'Etikett', it: 'etichetta', nl: 'label', zh: '标签', ja: 'ラベル', ru: 'этикетка' },
        },
        {
          id: 'supermarket/produce/sticker',
          localImage: 'supermarket/produce/sticker',
          translations: { en: 'sticker', es: 'etiqueta adhesiva', pt: 'adesivo', fr: 'autocollant', de: 'Aufkleber', it: 'adesivo', nl: 'sticker', zh: '贴纸', ja: 'シール', ru: 'наклейка' },
        },
        {
          id: 'supermarket/produce/sign_holder',
          localImage: 'supermarket/produce/sign_holder',
          translations: { en: 'sign holder', es: 'soporte de señal', pt: 'suporte de sinal', fr: 'porte-affiche', de: 'Schildhalter', it: 'porta insegna', nl: 'bordhouder', zh: '价格牌架', ja: 'サインホルダー', ru: 'держатель для ценника' },
        },
        {
          id: 'supermarket/produce/cold_storage_thermometer',
          localImage: 'supermarket/produce/cold_storage_thermometer',
          translations: { en: 'cold storage thermometer', es: 'termómetro de cámara fría', pt: 'termômetro de câmara fria', fr: 'thermomètre de chambre froide', de: 'Kühlraumthermometer', it: 'termometro cella frigorifera', nl: 'koelcelthermometer', zh: '冷库温度计', ja: '冷蔵庫温度計', ru: 'термометр для холодильника' },
        },
        {
          id: 'supermarket/produce/humidity_meter',
          localImage: 'supermarket/produce/humidity_meter',
          translations: { en: 'humidity meter', es: 'higrómetro', pt: 'higrômetro', fr: 'hygromètre', de: 'Feuchtigkeitsmessgerät', it: 'igrometro', nl: 'vochtigheidsmeter', zh: '湿度计', ja: '湿度計', ru: 'гигрометр' },
        },
        {
          id: 'supermarket/produce/ice_scoop',
          localImage: 'supermarket/produce/ice_scoop',
          translations: { en: 'ice scoop', es: 'pala para hielo', pt: 'pá de gelo', fr: 'pelle à glace', de: 'Eisschaufel', it: 'paletta per il ghiaccio', nl: 'ijsschep', zh: '冰铲', ja: 'アイスすくい', ru: 'совок для льда' },
        },
        {
          id: 'supermarket/produce/drain_pad',
          localImage: 'supermarket/produce/drain_pad',
          translations: { en: 'drain pad', es: 'tapete de drenaje', pt: 'tapete de dreno', fr: 'tapis de drainage', de: 'Ablaufmatte', it: 'tappetino di drenaggio', nl: 'afvoermat', zh: '排水垫', ja: 'ドレインパッド', ru: 'коврик для слива' },
        },
        {
          id: 'supermarket/produce/rotating_display',
          localImage: 'supermarket/produce/rotating_display',
          translations: { en: 'rotating display', es: 'expositor giratorio', pt: 'expositor giratório', fr: 'présentoir rotatif', de: 'Drehständer', it: 'espositore rotante', nl: 'draaibare display', zh: '旋转展示架', ja: 'ローテーティングディスプレイ', ru: 'вращающийся стенд' },
        },
        {
          id: 'supermarket/produce/produce_box',
          localImage: 'supermarket/produce/produce_box',
          translations: { en: 'produce box', es: 'caja de producto', pt: 'caixa de produto', fr: 'caisse de fruits et légumes', de: 'Gemüsekiste', it: 'cassa per ortofrutta', nl: 'producedoos', zh: '蔬果箱', ja: '野菜・果物箱', ru: 'ящик для продуктов' },
        },
        {
          id: 'supermarket/produce/wax_paper',
          localImage: 'supermarket/produce/wax_paper',
          translations: { en: 'wax paper', es: 'papel encerado', pt: 'papel encerado', fr: 'papier ciré', de: 'Wachspapier', it: 'carta cerata', nl: 'waspapier', zh: '蜡纸', ja: 'ワックスペーパー', ru: 'вощёная бумага' },
        },
        {
          id: 'supermarket/produce/tongs',
          localImage: 'supermarket/produce/tongs',
          translations: { en: 'tongs', es: 'pinzas', pt: 'pegador', fr: 'pinces', de: 'Zange', it: 'pinze', nl: 'tang', zh: '夹子', ja: 'トング', ru: 'щипцы' },
        },
        {
          id: 'supermarket/produce/food_safety_sign',
          localImage: 'supermarket/produce/food_safety_sign',
          translations: { en: 'food safety sign', es: 'señal de seguridad alimentaria', pt: 'sinal de segurança alimentar', fr: 'panneau de sécurité alimentaire', de: 'Lebensmittelsicherheitsschild', it: 'cartello sicurezza alimentare', nl: 'voedselveiligheidsbord', zh: '食品安全标志', ja: '食品安全サイン', ru: 'знак безопасности пищи' },
        },
        {
          id: 'supermarket/produce/sanitizer_wipes',
          localImage: 'supermarket/produce/sanitizer_wipes',
          translations: { en: 'sanitizer wipes', es: 'toallitas desinfectantes', pt: 'lenços sanitizantes', fr: 'lingettes désinfectantes', de: 'Desinfektionstücher', it: 'salviette igienizzanti', nl: 'desinfectiedoekjes', zh: '消毒湿巾', ja: '消毒ウエットティッシュ', ru: 'дезинфицирующие салфетки' },
        },
        {
          id: 'supermarket/produce/trash_bin',
          localImage: 'supermarket/produce/trash_bin',
          translations: { en: 'trash bin', es: 'papelera', pt: 'lixeira', fr: 'poubelle', de: 'Mülleimer', it: 'cestino', nl: 'prullenbak', zh: '垃圾桶', ja: 'ゴミ箱', ru: 'мусорное ведро' },
        },
        {
          id: 'supermarket/produce/box_cutter',
          localImage: 'supermarket/produce/box_cutter',
          translations: { en: 'box cutter', es: 'cúter', pt: 'estilete', fr: 'cutter', de: 'Teppichmesser', it: 'taglierino', nl: 'stanleymes', zh: '美工刀', ja: 'カッター', ru: 'нож для коробок' },
        },
        {
          id: 'supermarket/produce/cart',
          localImage: 'supermarket/produce/cart',
          translations: { en: 'cart', es: 'carrito', pt: 'carrinho', fr: 'chariot', de: 'Wagen', it: 'carrello', nl: 'winkelwagen', zh: '购物车', ja: 'カート', ru: 'тележка' },
        },
        {
          id: 'supermarket/produce/hair_net',
          localImage: 'supermarket/produce/hair_net',
          translations: { en: 'hair net', es: 'redecilla para el cabello', pt: 'touca de proteção', fr: 'filet à cheveux', de: 'Haarnetz', it: 'reticella per capelli', nl: 'haarnet', zh: '发网', ja: 'ヘアネット', ru: 'сетка для волос' },
        },
        ],
      }
      ],
    },
    ],
  },
];
