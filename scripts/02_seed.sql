-- ============================================================
-- BeeFluent Vocabulary Seed Data
-- Run this AFTER 01_schema.sql in the Supabase SQL Editor
-- ============================================================

BEGIN;

-- Clear existing data (safe to re-run)
TRUNCATE public.vocabulary_items, public.roles, public.sectors, public.jobs CASCADE;

INSERT INTO public.jobs (id, name, icon, image_url, sort_order) VALUES (
  'agricultura', '{"en":"Agriculture","es":"Agricultura","pt":"Agricultura","fr":"Agriculture","de":"Landwirtschaft","it":"Agricoltura","nl":"Landbouw","zh":"农业","ja":"農業","ru":"Сельское хозяйство"}', '🌾', 'https://images.pexels.com/photos/2132227/pexels-photo-2132227.jpeg?auto=compress&cs=tinysrgb&w=800', 0
);

INSERT INTO public.sectors (id, job_id, name, icon, sort_order) VALUES (
  'gardener', 'agricultura', '{"en":"Gardener","es":"Jardinero","pt":"Jardineiro","fr":"Jardinier","de":"Gärtner","it":"Giardiniere","nl":"Tuinier","zh":"园丁","ja":"庭師","ru":"Садовник"}', '🌿', 0
);
INSERT INTO public.roles (id, job_id, sector_id, name, icon, sort_order) VALUES (
  'tools', 'agricultura', 'gardener', '{"en":"Tools","es":"Herramientas","pt":"Ferramentas","fr":"Outils","de":"Werkzeuge","it":"Attrezzi","nl":"Gereedschap","zh":"工具","ja":"道具","ru":"Инструменты"}', '🔧', 0
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'agricultura/gardener/tools/blower', 'agricultura', 'gardener', 'tools', 'agricultura/gardener/tools/blower', NULL, '{"en":"blower","es":"sopladora","pt":"soprador","fr":"souffleur","de":"Gebläse","it":"soffiatore","nl":"blazer","zh":"鼓风机","ja":"ブロワー","ru":"воздуходувка"}', 0
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'agricultura/gardener/tools/cutter', 'agricultura', 'gardener', 'tools', 'agricultura/gardener/tools/cutter', NULL, '{"en":"cutter","es":"cortador","pt":"cortador","fr":"cutter","de":"Cutter","it":"taglierino","nl":"snijder","zh":"切割机","ja":"カッター","ru":"резак"}', 2
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'agricultura/gardener/tools/edger', 'agricultura', 'gardener', 'tools', 'agricultura/gardener/tools/edger', NULL, '{"en":"edger","es":"bordeadora","pt":"aparador de borda","fr":"bordureuse","de":"Randschneider","it":"bordatrice","nl":"kantenmaaier","zh":"修边机","ja":"エッジャー","ru":"кромкорез"}', 4
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'agricultura/gardener/tools/fork', 'agricultura', 'gardener', 'tools', 'agricultura/gardener/tools/fork', NULL, '{"en":"fork","es":"tenedor","pt":"forcado","fr":"fourche","de":"Gabel","it":"forca","nl":"vork","zh":"叉子","ja":"フォーク","ru":"вилка"}', 6
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'agricultura/gardener/tools/hedge_trimmer', 'agricultura', 'gardener', 'tools', 'agricultura/gardener/tools/hedge_trimmer', NULL, '{"en":"hedge trimmer","es":"cortasetos","pt":"podador de cerca","fr":"taille-haie","de":"Heckenschere","it":"tagliasiepi","nl":"hegenschaar","zh":"绿篱机","ja":"ヘッジトリマー","ru":"кусторез"}', 8
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'agricultura/gardener/tools/hoe', 'agricultura', 'gardener', 'tools', 'agricultura/gardener/tools/hoe', NULL, '{"en":"hoe","es":"azada","pt":"enxada","fr":"houe","de":"Hacke","it":"zappa","nl":"schoffel","zh":"锄头","ja":"鍬","ru":"мотыга"}', 10
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'agricultura/gardener/tools/hose', 'agricultura', 'gardener', 'tools', 'agricultura/gardener/tools/hose', NULL, '{"en":"hose","es":"manguera","pt":"mangueira","fr":"tuyau","de":"Schlauch","it":"tubo","nl":"slang","zh":"软管","ja":"ホース","ru":"шланг"}', 12
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'agricultura/gardener/tools/knife', 'agricultura', 'gardener', 'tools', 'agricultura/gardener/tools/knife', NULL, '{"en":"knife","es":"cuchillo","pt":"faca","fr":"couteau","de":"Messer","it":"coltello","nl":"mes","zh":"刀","ja":"ナイフ","ru":"нож"}', 14
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'agricultura/gardener/tools/lawn_mower', 'agricultura', 'gardener', 'tools', 'agricultura/gardener/tools/lawn_mower', NULL, '{"en":"lawn mower","es":"cortacésped","pt":"cortador de grama","fr":"tondeuse","de":"Rasenmäher","it":"tagliaerba","nl":"grasmaaier","zh":"割草机","ja":"芝刈り機","ru":"газонокосилка"}', 16
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'agricultura/gardener/tools/leaf_blower', 'agricultura', 'gardener', 'tools', 'agricultura/gardener/tools/leaf_blower', NULL, '{"en":"leaf blower","es":"soplador de hojas","pt":"soprador de folhas","fr":"souffleur de feuilles","de":"Laubbläser","it":"soffiafoglie","nl":"bladblazer","zh":"吹叶机","ja":"葉っぱブロワー","ru":"воздуходувка для листьев"}', 18
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'agricultura/gardener/tools/pruner', 'agricultura', 'gardener', 'tools', 'agricultura/gardener/tools/pruner', NULL, '{"en":"pruner","es":"podadora","pt":"podadora","fr":"sécateur","de":"Astschere","it":"potatrice","nl":"snoeischaar","zh":"修剪器","ja":"プルーナー","ru":"секатор"}', 20
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'agricultura/gardener/tools/rake', 'agricultura', 'gardener', 'tools', 'agricultura/gardener/tools/rake', NULL, '{"en":"rake","es":"rastrillo","pt":"ancinho","fr":"râteau","de":"Rechen","it":"rastrello","nl":"hark","zh":"耙子","ja":"熊手","ru":"грабли"}', 22
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'agricultura/gardener/tools/scissors', 'agricultura', 'gardener', 'tools', 'agricultura/gardener/tools/scissors', NULL, '{"en":"scissors","es":"tijeras","pt":"tesoura","fr":"ciseaux","de":"Schere","it":"forbici","nl":"schaar","zh":"剪刀","ja":"ハサミ","ru":"ножницы"}', 24
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'agricultura/gardener/tools/shears', 'agricultura', 'gardener', 'tools', 'agricultura/gardener/tools/shears', NULL, '{"en":"shears","es":"tijeras de podar","pt":"tesoura de poda","fr":"sécateur","de":"Gartenschere","it":"cesoie","nl":"snoeischaar","zh":"大剪刀","ja":"剪定鋏","ru":"ножницы для стрижки"}', 26
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'agricultura/gardener/tools/shovel', 'agricultura', 'gardener', 'tools', 'agricultura/gardener/tools/shovel', NULL, '{"en":"shovel","es":"pala","pt":"pá","fr":"pelle","de":"Schaufel","it":"vanga","nl":"schop","zh":"铲子","ja":"シャベル","ru":"лопата"}', 28
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'agricultura/gardener/tools/spade', 'agricultura', 'gardener', 'tools', 'agricultura/gardener/tools/spade', NULL, '{"en":"spade","es":"laya","pt":"pá de bico","fr":"bêche","de":"Spaten","it":"vanga","nl":"spade","zh":"铁锹","ja":"スペード","ru":"штыковая лопата"}', 30
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'agricultura/gardener/tools/sprayer', 'agricultura', 'gardener', 'tools', 'agricultura/gardener/tools/sprayer', NULL, '{"en":"sprayer","es":"pulverizador","pt":"pulverizador","fr":"pulvérisateur","de":"Sprüher","it":"spruzzatore","nl":"sproeier","zh":"喷雾器","ja":"スプレイヤー","ru":"опрыскиватель"}', 32
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'agricultura/gardener/tools/trimmer', 'agricultura', 'gardener', 'tools', 'agricultura/gardener/tools/trimmer', NULL, '{"en":"trimmer","es":"bordeadora","pt":"aparador","fr":"débroussailleuse","de":"Trimmer","it":"decespugliatore","nl":"trimmer","zh":"修剪机","ja":"トリマー","ru":"триммер"}', 34
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'agricultura/gardener/tools/watering_can', 'agricultura', 'gardener', 'tools', 'agricultura/gardener/tools/watering_can', NULL, '{"en":"watering can","es":"regadera","pt":"regador","fr":"arrosoir","de":"Gießkanne","it":"annaffiatoio","nl":"gieter","zh":"浇水壶","ja":"じょうろ","ru":"лейка"}', 36
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'agricultura/gardener/tools/wheelbarrow', 'agricultura', 'gardener', 'tools', 'agricultura/gardener/tools/wheelbarrow', NULL, '{"en":"wheelbarrow","es":"carretilla","pt":"carrinho de mão","fr":"brouette","de":"Schubkarre","it":"carriola","nl":"kruiwagen","zh":"手推车","ja":"一輪車","ru":"тачка"}', 38
);
INSERT INTO public.roles (id, job_id, sector_id, name, icon, sort_order) VALUES (
  'materials', 'agricultura', 'gardener', '{"en":"Materials","es":"Materiales","pt":"Materiais","fr":"Matériaux","de":"Materialien","it":"Materiali","nl":"Materialen","zh":"材料","ja":"材料","ru":"Материалы"}', '📦', 1
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'agricultura/gardener/materials/additive', 'agricultura', 'gardener', 'materials', 'agricultura/gardener/materials/additive', NULL, '{"en":"additive","es":"additive","pt":"additive","fr":"additive","de":"additive","it":"additive","nl":"additief","zh":"添加剂","ja":"添加剤","ru":"добавка"}', 0
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'agricultura/gardener/materials/bark', 'agricultura', 'gardener', 'materials', 'agricultura/gardener/materials/bark', NULL, '{"en":"bark","es":"bark","pt":"bark","fr":"bark","de":"bark","it":"bark","nl":"bast","zh":"树皮","ja":"樹皮","ru":"кора"}', 2
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'agricultura/gardener/materials/clay', 'agricultura', 'gardener', 'materials', 'agricultura/gardener/materials/clay', NULL, '{"en":"clay","es":"clay","pt":"clay","fr":"clay","de":"clay","it":"clay","nl":"klei","zh":"黏土","ja":"粘土","ru":"глина"}', 4
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'agricultura/gardener/materials/compost', 'agricultura', 'gardener', 'materials', 'agricultura/gardener/materials/compost', NULL, '{"en":"compost","es":"compost","pt":"composto","fr":"compost","de":"Kompost","it":"compost","nl":"compost","zh":"堆肥","ja":"堆肥","ru":"компост"}', 6
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'agricultura/gardener/materials/compost_mix', 'agricultura', 'gardener', 'materials', 'agricultura/gardener/materials/compost_mix', NULL, '{"en":"compost mix","es":"compost mix","pt":"compost mix","fr":"compost mix","de":"compost mix","it":"compost mix","nl":"compostmengsel","zh":"堆肥混合物","ja":"堆肥ミックス","ru":"компостная смесь"}', 8
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'agricultura/gardener/materials/conditioner', 'agricultura', 'gardener', 'materials', 'agricultura/gardener/materials/conditioner', NULL, '{"en":"conditioner","es":"conditioner","pt":"conditioner","fr":"conditioner","de":"conditioner","it":"conditioner","nl":"conditioner","zh":"护发素","ja":"コンディショナー","ru":"кондиционер"}', 10
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'agricultura/gardener/materials/dressing', 'agricultura', 'gardener', 'materials', 'agricultura/gardener/materials/dressing', NULL, '{"en":"dressing","es":"dressing","pt":"dressing","fr":"dressing","de":"dressing","it":"dressing","nl":"wondverband","zh":"敷料","ja":"ドレッシング","ru":"перевязочный материал"}', 12
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'agricultura/gardener/materials/feed', 'agricultura', 'gardener', 'materials', 'agricultura/gardener/materials/feed', NULL, '{"en":"feed","es":"feed","pt":"feed","fr":"feed","de":"feed","it":"feed","nl":"voer","zh":"饲料","ja":"飼料","ru":"корм"}', 14
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'agricultura/gardener/materials/fertilizer', 'agricultura', 'gardener', 'materials', 'agricultura/gardener/materials/fertilizer', NULL, '{"en":"fertilizer","es":"fertilizante","pt":"fertilizante","fr":"engrais","de":"Dünger","it":"fertilizzante","nl":"meststof","zh":"肥料","ja":"肥料","ru":"удобрение"}', 16
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'agricultura/gardener/materials/gravel', 'agricultura', 'gardener', 'materials', 'agricultura/gardener/materials/gravel', NULL, '{"en":"gravel","es":"gravel","pt":"gravel","fr":"gravel","de":"gravel","it":"gravel","nl":"grind","zh":"砾石","ja":"砂利","ru":"гравий"}', 18
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'agricultura/gardener/materials/herbicide', 'agricultura', 'gardener', 'materials', 'agricultura/gardener/materials/herbicide', NULL, '{"en":"herbicide","es":"herbicide","pt":"herbicide","fr":"herbicide","de":"herbicide","it":"herbicide","nl":"herbicide","zh":"除草剂","ja":"除草剤","ru":"гербицид"}', 20
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'agricultura/gardener/materials/liquid_feed', 'agricultura', 'gardener', 'materials', 'agricultura/gardener/materials/liquid_feed', NULL, '{"en":"liquid feed","es":"liquid feed","pt":"liquid feed","fr":"liquid feed","de":"liquid feed","it":"liquid feed","nl":"vloeibare voeding","zh":"液体饲料","ja":"液体飼料","ru":"жидкий корм"}', 22
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'agricultura/gardener/materials/mix', 'agricultura', 'gardener', 'materials', 'agricultura/gardener/materials/mix', NULL, '{"en":"mix","es":"mix","pt":"mix","fr":"mix","de":"mix","it":"mix","nl":"mengsel","zh":"混合物","ja":"ミックス","ru":"смесь"}', 24
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'agricultura/gardener/materials/moss', 'agricultura', 'gardener', 'materials', 'agricultura/gardener/materials/moss', NULL, '{"en":"moss","es":"moss","pt":"moss","fr":"moss","de":"moss","it":"moss","nl":"mos","zh":"苔藓","ja":"苔","ru":"мох"}', 26
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'agricultura/gardener/materials/mulch', 'agricultura', 'gardener', 'materials', 'agricultura/gardener/materials/mulch', NULL, '{"en":"mulch","es":"mulch","pt":"mulch","fr":"mulch","de":"mulch","it":"mulch","nl":"mulch","zh":"覆盖物","ja":"マルチ","ru":"мульча"}', 28
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'agricultura/gardener/materials/nutrients', 'agricultura', 'gardener', 'materials', 'agricultura/gardener/materials/nutrients', NULL, '{"en":"nutrients","es":"nutrients","pt":"nutrients","fr":"nutrients","de":"nutrients","it":"nutrients","nl":"voedingsstoffen","zh":"营养素","ja":"栄養素","ru":"питательные вещества"}', 30
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'agricultura/gardener/materials/organic_mix', 'agricultura', 'gardener', 'materials', 'agricultura/gardener/materials/organic_mix', NULL, '{"en":"organic mix","es":"organic mix","pt":"organic mix","fr":"organic mix","de":"organic mix","it":"organic mix","nl":"organisch mengsel","zh":"有机混合物","ja":"有機ミックス","ru":"органическая смесь"}', 32
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'agricultura/gardener/materials/pellets', 'agricultura', 'gardener', 'materials', 'agricultura/gardener/materials/pellets', NULL, '{"en":"pellets","es":"pellets","pt":"pellets","fr":"pellets","de":"pellets","it":"pellets","nl":"pellets","zh":"颗粒","ja":"ペレット","ru":"гранулы"}', 34
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'agricultura/gardener/materials/pesticides', 'agricultura', 'gardener', 'materials', 'agricultura/gardener/materials/pesticides', NULL, '{"en":"pesticides","es":"pesticides","pt":"pesticides","fr":"pesticides","de":"pesticides","it":"pesticides","nl":"pesticiden","zh":"农药","ja":"農薬","ru":"пестициды"}', 36
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'agricultura/gardener/materials/plants', 'agricultura', 'gardener', 'materials', 'agricultura/gardener/materials/plants', NULL, '{"en":"plants","es":"plants","pt":"plants","fr":"plants","de":"plants","it":"plants","nl":"planten","zh":"植物","ja":"植物","ru":"растения"}', 38
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'agricultura/gardener/materials/powder', 'agricultura', 'gardener', 'materials', 'agricultura/gardener/materials/powder', NULL, '{"en":"powder","es":"powder","pt":"powder","fr":"powder","de":"powder","it":"powder","nl":"poeder","zh":"粉末","ja":"パウダー","ru":"порошок"}', 40
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'agricultura/gardener/materials/sand', 'agricultura', 'gardener', 'materials', 'agricultura/gardener/materials/sand', NULL, '{"en":"sand","es":"sand","pt":"sand","fr":"sand","de":"sand","it":"sand","nl":"zand","zh":"沙子","ja":"砂","ru":"песок"}', 42
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'agricultura/gardener/materials/seeds', 'agricultura', 'gardener', 'materials', 'agricultura/gardener/materials/seeds', NULL, '{"en":"seeds","es":"semillas","pt":"sementes","fr":"graines","de":"Samen","it":"semi","nl":"zaden","zh":"种子","ja":"種","ru":"семена"}', 44
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'agricultura/gardener/materials/soil', 'agricultura', 'gardener', 'materials', 'agricultura/gardener/materials/soil', NULL, '{"en":"soil","es":"tierra","pt":"solo","fr":"sol","de":"Erde","it":"terra","nl":"aarde","zh":"土壤","ja":"土","ru":"почва"}', 46
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'agricultura/gardener/materials/soil_base', 'agricultura', 'gardener', 'materials', 'agricultura/gardener/materials/soil_base', NULL, '{"en":"soil base","es":"soil base","pt":"soil base","fr":"soil base","de":"soil base","it":"soil base","nl":"bodembasis","zh":"土壤基础","ja":"土壌ベース","ru":"основа почвы"}', 48
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'agricultura/gardener/materials/solution', 'agricultura', 'gardener', 'materials', 'agricultura/gardener/materials/solution', NULL, '{"en":"solution","es":"solution","pt":"solution","fr":"solution","de":"solution","it":"solution","nl":"oplossing","zh":"溶液","ja":"溶液","ru":"раствор"}', 50
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'agricultura/gardener/materials/stones', 'agricultura', 'gardener', 'materials', 'agricultura/gardener/materials/stones', NULL, '{"en":"stones","es":"stones","pt":"stones","fr":"stones","de":"stones","it":"stones","nl":"stenen","zh":"石头","ja":"石","ru":"камни"}', 52
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'agricultura/gardener/materials/substrate', 'agricultura', 'gardener', 'materials', 'agricultura/gardener/materials/substrate', NULL, '{"en":"substrate","es":"substrate","pt":"substrate","fr":"substrate","de":"substrate","it":"substrate","nl":"substraat","zh":"基底","ja":"基質","ru":"субстрат"}', 54
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'agricultura/gardener/materials/topping', 'agricultura', 'gardener', 'materials', 'agricultura/gardener/materials/topping', NULL, '{"en":"topping","es":"topping","pt":"topping","fr":"topping","de":"topping","it":"topping","nl":"topping","zh":"浇头","ja":"トッピング","ru":"топпинг"}', 56
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'agricultura/gardener/materials/water', 'agricultura', 'gardener', 'materials', 'agricultura/gardener/materials/water', NULL, '{"en":"water","es":"agua","pt":"água","fr":"eau","de":"Wasser","it":"acqua","nl":"water","zh":"水","ja":"水","ru":"вода"}', 58
);

INSERT INTO public.sectors (id, job_id, name, icon, sort_order) VALUES (
  'harvesting', 'agricultura', '{"en":"Harvesting","es":"Cosecha","pt":"Colheita","fr":"Récolte","de":"Ernte","it":"Raccolta","nl":"Oogsten","zh":"收割","ja":"収穫","ru":"Уборка урожая"}', '🌾', 1
);
INSERT INTO public.roles (id, job_id, sector_id, name, icon, sort_order) VALUES (
  'tools', 'agricultura', 'harvesting', '{"en":"Tools","es":"Herramientas","pt":"Ferramentas","fr":"Outils","de":"Werkzeuge","it":"Attrezzi","nl":"Gereedschap","zh":"工具","ja":"道具","ru":"Инструменты"}', '🔧', 0
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'agricultura/harvesting/tools/barcode', 'agricultura', 'harvesting', 'tools', 'agricultura/harvesting/tools/barcode', NULL, '{"en":"barcode","es":"código de barras","pt":"código de barras","fr":"code-barres","de":"Barcode","it":"codice a barre","nl":"streepjescode","zh":"条形码","ja":"バーコード","ru":"штрихкод"}', 0
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'agricultura/harvesting/tools/basket', 'agricultura', 'harvesting', 'tools', 'agricultura/harvesting/tools/basket', NULL, '{"en":"basket","es":"cesta","pt":"cesto","fr":"panier","de":"Korb","it":"cesto","nl":"mand","zh":"篮子","ja":"バスケット","ru":"корзина"}', 2
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'agricultura/harvesting/tools/bin', 'agricultura', 'harvesting', 'tools', 'agricultura/harvesting/tools/bin', NULL, '{"en":"bin","es":"cubo de basura","pt":"lixeira","fr":"poubelle","de":"Mülleimer","it":"bidone","nl":"prullenbak","zh":"垃圾桶","ja":"ビン","ru":"мусорное ведро"}', 4
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'agricultura/harvesting/tools/box', 'agricultura', 'harvesting', 'tools', 'agricultura/harvesting/tools/box', NULL, '{"en":"box","es":"caja","pt":"caixa","fr":"boîte","de":"Kasten","it":"scatola","nl":"doos","zh":"箱子","ja":"ボックス","ru":"коробка"}', 6
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'agricultura/harvesting/tools/brush', 'agricultura', 'harvesting', 'tools', 'agricultura/harvesting/tools/brush', NULL, '{"en":"brush","es":"cepillo","pt":"escova","fr":"brosse","de":"Bürste","it":"spazzola","nl":"borstel","zh":"刷子","ja":"ブラシ","ru":"кисть"}', 8
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'agricultura/harvesting/tools/bucket', 'agricultura', 'harvesting', 'tools', 'agricultura/harvesting/tools/bucket', NULL, '{"en":"bucket","es":"cubo","pt":"balde","fr":"seau","de":"Eimer","it":"secchio","nl":"emmer","zh":"水桶","ja":"バケツ","ru":"ведро"}', 10
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'agricultura/harvesting/tools/cart', 'agricultura', 'harvesting', 'tools', 'agricultura/harvesting/tools/cart', NULL, '{"en":"cart","es":"carrito","pt":"carrinho","fr":"chariot","de":"Wagen","it":"carrello","nl":"kar","zh":"推车","ja":"カート","ru":"тележка"}', 12
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'agricultura/harvesting/tools/cloth', 'agricultura', 'harvesting', 'tools', 'agricultura/harvesting/tools/cloth', NULL, '{"en":"cloth","es":"trapo","pt":"pano","fr":"chiffon","de":"Tuch","it":"panno","nl":"doek","zh":"布","ja":"布","ru":"ткань"}', 14
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'agricultura/harvesting/tools/container', 'agricultura', 'harvesting', 'tools', 'agricultura/harvesting/tools/container', NULL, '{"en":"container","es":"contenedor","pt":"recipiente","fr":"conteneur","de":"Behälter","it":"contenitore","nl":"container","zh":"容器","ja":"コンテナ","ru":"контейнер"}', 16
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'agricultura/harvesting/tools/conveyor', 'agricultura', 'harvesting', 'tools', 'agricultura/harvesting/tools/conveyor', NULL, '{"en":"conveyor","es":"conveyor","pt":"conveyor","fr":"conveyor","de":"conveyor","it":"conveyor","nl":"transportband","zh":"传送带","ja":"コンベア","ru":"конвейер"}', 18
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'agricultura/harvesting/tools/cooling_box', 'agricultura', 'harvesting', 'tools', 'agricultura/harvesting/tools/cooling_box', NULL, '{"en":"cooling box","es":"cooling box","pt":"cooling box","fr":"cooling box","de":"cooling box","it":"cooling box","nl":"koelbox","zh":"冷却箱","ja":"クーリングボックス","ru":"холодильный ящик"}', 20
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'agricultura/harvesting/tools/crate', 'agricultura', 'harvesting', 'tools', 'agricultura/harvesting/tools/crate', NULL, '{"en":"crate","es":"cajón","pt":"engradado","fr":"caisse","de":"Kiste","it":"cassa","nl":"krat","zh":"板条箱","ja":"クレート","ru":"ящик"}', 22
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'agricultura/harvesting/tools/fork', 'agricultura', 'harvesting', 'tools', 'agricultura/harvesting/tools/fork', NULL, '{"en":"fork","es":"tenedor","pt":"forcado","fr":"fourche","de":"Gabel","it":"forca","nl":"vork","zh":"叉子","ja":"フォーク","ru":"вилка"}', 24
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'agricultura/harvesting/tools/gloves', 'agricultura', 'harvesting', 'tools', 'agricultura/harvesting/tools/gloves', NULL, '{"en":"gloves","es":"guantes","pt":"luvas","fr":"gants","de":"Handschuhe","it":"guanti","nl":"handschoenen","zh":"手套","ja":"手袋","ru":"перчатки"}', 26
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'agricultura/harvesting/tools/hand_truck', 'agricultura', 'harvesting', 'tools', 'agricultura/harvesting/tools/hand_truck', NULL, '{"en":"hand truck","es":"hand truck","pt":"hand truck","fr":"hand truck","de":"hand truck","it":"hand truck","nl":"steekwagen","zh":"手推车","ja":"ハンドトラック","ru":"ручная тележка"}', 28
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'agricultura/harvesting/tools/harvest_knife', 'agricultura', 'harvesting', 'tools', 'agricultura/harvesting/tools/harvest_knife', NULL, '{"en":"harvest knife","es":"harvest knife","pt":"harvest knife","fr":"harvest knife","de":"harvest knife","it":"harvest knife","nl":"oogstmes","zh":"收割刀","ja":"収穫ナイフ","ru":"нож для уборки урожая"}', 30
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'agricultura/harvesting/tools/hook', 'agricultura', 'harvesting', 'tools', 'agricultura/harvesting/tools/hook', NULL, '{"en":"hook","es":"gancho","pt":"gancho","fr":"crochet","de":"Haken","it":"gancio","nl":"haak","zh":"挂钩","ja":"フック","ru":"крюк"}', 32
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'agricultura/harvesting/tools/ice_box', 'agricultura', 'harvesting', 'tools', 'agricultura/harvesting/tools/ice_box', NULL, '{"en":"ice box","es":"ice box","pt":"ice box","fr":"ice box","de":"ice box","it":"ice box","nl":"koelbox","zh":"冰箱","ja":"アイスボックス","ru":"ящик со льдом"}', 34
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'agricultura/harvesting/tools/knife', 'agricultura', 'harvesting', 'tools', 'agricultura/harvesting/tools/knife', NULL, '{"en":"knife","es":"cuchillo","pt":"faca","fr":"couteau","de":"Messer","it":"coltello","nl":"mes","zh":"刀","ja":"ナイフ","ru":"нож"}', 36
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'agricultura/harvesting/tools/label', 'agricultura', 'harvesting', 'tools', 'agricultura/harvesting/tools/label', NULL, '{"en":"label","es":"etiqueta","pt":"etiqueta","fr":"étiquette","de":"Etikett","it":"etichetta","nl":"etiket","zh":"标签","ja":"ラベル","ru":"этикетка"}', 38
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'agricultura/harvesting/tools/ladder', 'agricultura', 'harvesting', 'tools', 'agricultura/harvesting/tools/ladder', NULL, '{"en":"ladder","es":"escalera","pt":"escada","fr":"échelle","de":"Leiter","it":"scala","nl":"ladder","zh":"梯子","ja":"はしご","ru":"лестница"}', 40
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'agricultura/harvesting/tools/marker', 'agricultura', 'harvesting', 'tools', 'agricultura/harvesting/tools/marker', NULL, '{"en":"marker","es":"marcador","pt":"marcador","fr":"marqueur","de":"Marker","it":"pennarello","nl":"marker","zh":"记号笔","ja":"マーカー","ru":"маркер"}', 42
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'agricultura/harvesting/tools/net', 'agricultura', 'harvesting', 'tools', 'agricultura/harvesting/tools/net', NULL, '{"en":"net","es":"red","pt":"rede","fr":"filet","de":"Netz","it":"rete","nl":"net","zh":"网","ja":"ネット","ru":"сетка"}', 44
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'agricultura/harvesting/tools/packing_machine', 'agricultura', 'harvesting', 'tools', 'agricultura/harvesting/tools/packing_machine', NULL, '{"en":"packing machine","es":"packing machine","pt":"packing machine","fr":"packing machine","de":"packing machine","it":"packing machine","nl":"verpakkingsmachine","zh":"打包机","ja":"梱包機","ru":"упаковочная машина"}', 46
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'agricultura/harvesting/tools/pallet', 'agricultura', 'harvesting', 'tools', 'agricultura/harvesting/tools/pallet', NULL, '{"en":"pallet","es":"palé","pt":"palete","fr":"palette","de":"Palette","it":"pallet","nl":"pallet","zh":"托盘","ja":"パレット","ru":"паллет"}', 48
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'agricultura/harvesting/tools/picker', 'agricultura', 'harvesting', 'tools', 'agricultura/harvesting/tools/picker', NULL, '{"en":"picker","es":"picker","pt":"picker","fr":"picker","de":"picker","it":"picker","nl":"plukker","zh":"采摘器","ja":"ピッカー","ru":"сборщик"}', 50
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'agricultura/harvesting/tools/picking_bag', 'agricultura', 'harvesting', 'tools', 'agricultura/harvesting/tools/picking_bag', NULL, '{"en":"picking bag","es":"picking bag","pt":"picking bag","fr":"picking bag","de":"picking bag","it":"picking bag","nl":"plukzak","zh":"采摘袋","ja":"収穫袋","ru":"мешок для сбора урожая"}', 52
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'agricultura/harvesting/tools/pole_picker', 'agricultura', 'harvesting', 'tools', 'agricultura/harvesting/tools/pole_picker', NULL, '{"en":"pole picker","es":"pole picker","pt":"pole picker","fr":"pole picker","de":"pole picker","it":"pole picker","nl":"staafplukker","zh":"杆式采摘器","ja":"ポールピッカー","ru":"шестовой съемщик"}', 54
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'agricultura/harvesting/tools/rack', 'agricultura', 'harvesting', 'tools', 'agricultura/harvesting/tools/rack', NULL, '{"en":"rack","es":"estante","pt":"prateleira","fr":"étagère","de":"Regal","it":"scaffale","nl":"rek","zh":"货架","ja":"ラック","ru":"стеллаж"}', 56
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'agricultura/harvesting/tools/rope', 'agricultura', 'harvesting', 'tools', 'agricultura/harvesting/tools/rope', NULL, '{"en":"rope","es":"cuerda","pt":"corda","fr":"corde","de":"Seil","it":"corda","nl":"touw","zh":"绳子","ja":"ロープ","ru":"веревка"}', 58
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'agricultura/harvesting/tools/sack', 'agricultura', 'harvesting', 'tools', 'agricultura/harvesting/tools/sack', NULL, '{"en":"sack","es":"sack","pt":"sack","fr":"sack","de":"sack","it":"sack","nl":"zak","zh":"麻袋","ja":"袋","ru":"мешок"}', 60
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'agricultura/harvesting/tools/scale', 'agricultura', 'harvesting', 'tools', 'agricultura/harvesting/tools/scale', NULL, '{"en":"scale","es":"báscula","pt":"balança","fr":"balance","de":"Waage","it":"bilancia","nl":"weegschaal","zh":"秤","ja":"スケール","ru":"весы"}', 62
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'agricultura/harvesting/tools/scanner', 'agricultura', 'harvesting', 'tools', 'agricultura/harvesting/tools/scanner', NULL, '{"en":"scanner","es":"escáner","pt":"scanner","fr":"scanner","de":"Scanner","it":"scanner","nl":"scanner","zh":"扫描仪","ja":"スキャナー","ru":"сканер"}', 64
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'agricultura/harvesting/tools/scissors', 'agricultura', 'harvesting', 'tools', 'agricultura/harvesting/tools/scissors', NULL, '{"en":"scissors","es":"tijeras","pt":"tesoura","fr":"ciseaux","de":"Schere","it":"forbici","nl":"schaar","zh":"剪刀","ja":"ハサミ","ru":"ножницы"}', 66
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'agricultura/harvesting/tools/shears', 'agricultura', 'harvesting', 'tools', 'agricultura/harvesting/tools/shears', NULL, '{"en":"shears","es":"tijeras de podar","pt":"tesoura de poda","fr":"sécateur","de":"Gartenschere","it":"cesoie","nl":"snoeischaar","zh":"大剪刀","ja":"剪定鋏","ru":"ножницы для стрижки"}', 68
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'agricultura/harvesting/tools/sorting_machine', 'agricultura', 'harvesting', 'tools', 'agricultura/harvesting/tools/sorting_machine', NULL, '{"en":"sorting machine","es":"sorting machine","pt":"sorting machine","fr":"sorting machine","de":"sorting machine","it":"sorting machine","nl":"sorteermachine","zh":"分拣机","ja":"ソーティングマシン","ru":"сортировочная машина"}', 70
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'agricultura/harvesting/tools/strap', 'agricultura', 'harvesting', 'tools', 'agricultura/harvesting/tools/strap', NULL, '{"en":"strap","es":"strap","pt":"strap","fr":"strap","de":"strap","it":"strap","nl":"band","zh":"带子","ja":"ストラップ","ru":"ремень"}', 72
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'agricultura/harvesting/tools/table', 'agricultura', 'harvesting', 'tools', 'agricultura/harvesting/tools/table', NULL, '{"en":"table","es":"mesa","pt":"mesa","fr":"table","de":"Tisch","it":"tavolo","nl":"tafel","zh":"桌子","ja":"テーブル","ru":"стол"}', 74
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'agricultura/harvesting/tools/tape', 'agricultura', 'harvesting', 'tools', 'agricultura/harvesting/tools/tape', NULL, '{"en":"tape","es":"cinta","pt":"fita","fr":"ruban","de":"Klebeband","it":"nastro","nl":"tape","zh":"胶带","ja":"テープ","ru":"лента"}', 76
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'agricultura/harvesting/tools/tray', 'agricultura', 'harvesting', 'tools', 'agricultura/harvesting/tools/tray', NULL, '{"en":"tray","es":"bandeja","pt":"bandeja","fr":"plateau","de":"Tablett","it":"vassoio","nl":"dienblad","zh":"托盘","ja":"トレイ","ru":"поднос"}', 78
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'agricultura/harvesting/tools/trolley', 'agricultura', 'harvesting', 'tools', 'agricultura/harvesting/tools/trolley', NULL, '{"en":"trolley","es":"carrito","pt":"carrinho","fr":"chariot","de":"Trolley","it":"carrello","nl":"trolley","zh":"手推车","ja":"トロリー","ru":"тележка"}', 80
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'agricultura/harvesting/tools/wheelbarrow', 'agricultura', 'harvesting', 'tools', 'agricultura/harvesting/tools/wheelbarrow', NULL, '{"en":"wheelbarrow","es":"carretilla","pt":"carrinho de mão","fr":"brouette","de":"Schubkarre","it":"carriola","nl":"kruiwagen","zh":"手推车","ja":"一輪車","ru":"тачка"}', 82
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'agricultura/harvesting/tools/wrap', 'agricultura', 'harvesting', 'tools', 'agricultura/harvesting/tools/wrap', NULL, '{"en":"wrap","es":"wrap","pt":"wrap","fr":"wrap","de":"wrap","it":"wrap","nl":"folie","zh":"包装","ja":"ラップ","ru":"обертка"}', 84
);
INSERT INTO public.roles (id, job_id, sector_id, name, icon, sort_order) VALUES (
  'materials', 'agricultura', 'harvesting', '{"en":"Materials","es":"Materiales","pt":"Materiais","fr":"Matériaux","de":"Materialien","it":"Materiali","nl":"Materialen","zh":"材料","ja":"材料","ru":"Материалы"}', '📦', 1
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'agricultura/harvesting/materials/crops', 'agricultura', 'harvesting', 'materials', 'agricultura/harvesting/materials/crops', NULL, '{"en":"crops","es":"crops","pt":"crops","fr":"crops","de":"crops","it":"crops","nl":"gewassen","zh":"农作物","ja":"作物","ru":"урожай"}', 0
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'agricultura/harvesting/materials/fruits', 'agricultura', 'harvesting', 'materials', 'agricultura/harvesting/materials/fruits', NULL, '{"en":"fruits","es":"fruits","pt":"fruits","fr":"fruits","de":"fruits","it":"fruits","nl":"fruit","zh":"水果","ja":"果物","ru":"фрукты"}', 2
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'agricultura/harvesting/materials/ice', 'agricultura', 'harvesting', 'materials', 'agricultura/harvesting/materials/ice', NULL, '{"en":"ice","es":"hielo","pt":"gelo","fr":"glace","de":"Eis","it":"ghiaccio","nl":"ijs","zh":"冰块","ja":"氷","ru":"лед"}', 4
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'agricultura/harvesting/materials/labels', 'agricultura', 'harvesting', 'materials', 'agricultura/harvesting/materials/labels', NULL, '{"en":"labels","es":"labels","pt":"labels","fr":"labels","de":"labels","it":"labels","nl":"etiketten","zh":"标签","ja":"ラベル","ru":"этикетки"}', 6
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'agricultura/harvesting/materials/packaging', 'agricultura', 'harvesting', 'materials', 'agricultura/harvesting/materials/packaging', NULL, '{"en":"packaging","es":"embalaje","pt":"embalagem","fr":"emballage","de":"Verpackung","it":"imballaggio","nl":"verpakking","zh":"包装","ja":"梱包","ru":"упаковка"}', 8
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'agricultura/harvesting/materials/storage_materials', 'agricultura', 'harvesting', 'materials', 'agricultura/harvesting/materials/storage_materials', NULL, '{"en":"storage materials","es":"storage materials","pt":"storage materials","fr":"storage materials","de":"storage materials","it":"storage materials","nl":"opslagmaterialen","zh":"储存材料","ja":"収納材料","ru":"материалы для хранения"}', 10
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'agricultura/harvesting/materials/vegetables', 'agricultura', 'harvesting', 'materials', 'agricultura/harvesting/materials/vegetables', NULL, '{"en":"vegetables","es":"vegetables","pt":"vegetables","fr":"vegetables","de":"vegetables","it":"vegetables","nl":"groenten","zh":"蔬菜","ja":"野菜","ru":"овощи"}', 12
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'agricultura/harvesting/materials/wrap', 'agricultura', 'harvesting', 'materials', 'agricultura/harvesting/materials/wrap', NULL, '{"en":"wrap","es":"wrap","pt":"wrap","fr":"wrap","de":"wrap","it":"wrap","nl":"folie","zh":"包装","ja":"ラップ","ru":"обертка"}', 14
);

INSERT INTO public.sectors (id, job_id, name, icon, sort_order) VALUES (
  'livestock', 'agricultura', '{"en":"Livestock","es":"Ganadería","pt":"Pecuária","fr":"Élevage","de":"Viehzucht","it":"Allevamento","nl":"Vee","zh":"牲畜","ja":"家畜","ru":"Животноводство"}', '🐄', 2
);
INSERT INTO public.roles (id, job_id, sector_id, name, icon, sort_order) VALUES (
  'tools', 'agricultura', 'livestock', '{"en":"Tools","es":"Herramientas","pt":"Ferramentas","fr":"Outils","de":"Werkzeuge","it":"Attrezzi","nl":"Gereedschap","zh":"工具","ja":"道具","ru":"Инструменты"}', '🔧', 0
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'agricultura/livestock/tools/bell', 'agricultura', 'livestock', 'tools', 'agricultura/livestock/tools/bell', NULL, '{"en":"bell","es":"bell","pt":"bell","fr":"bell","de":"bell","it":"bell","nl":"bel","zh":"铃","ja":"ベル","ru":"колокольчик"}', 0
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'agricultura/livestock/tools/bin', 'agricultura', 'livestock', 'tools', 'agricultura/livestock/tools/bin', NULL, '{"en":"bin","es":"cubo de basura","pt":"lixeira","fr":"poubelle","de":"Mülleimer","it":"bidone","nl":"prullenbak","zh":"垃圾桶","ja":"ビン","ru":"мусорное ведро"}', 2
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'agricultura/livestock/tools/boots', 'agricultura', 'livestock', 'tools', 'agricultura/livestock/tools/boots', NULL, '{"en":"boots","es":"botas","pt":"botas","fr":"bottes","de":"Stiefel","it":"stivali","nl":"laarzen","zh":"靴子","ja":"ブーツ","ru":"ботинки"}', 4
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'agricultura/livestock/tools/bottle', 'agricultura', 'livestock', 'tools', 'agricultura/livestock/tools/bottle', NULL, '{"en":"bottle","es":"botella","pt":"garrafa","fr":"bouteille","de":"Flasche","it":"bottiglia","nl":"fles","zh":"瓶子","ja":"ボトル","ru":"бутылка"}', 6
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'agricultura/livestock/tools/brush', 'agricultura', 'livestock', 'tools', 'agricultura/livestock/tools/brush', NULL, '{"en":"brush","es":"cepillo","pt":"escova","fr":"brosse","de":"Bürste","it":"spazzola","nl":"borstel","zh":"刷子","ja":"ブラシ","ru":"кисть"}', 8
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'agricultura/livestock/tools/bucket', 'agricultura', 'livestock', 'tools', 'agricultura/livestock/tools/bucket', NULL, '{"en":"bucket","es":"cubo","pt":"balde","fr":"seau","de":"Eimer","it":"secchio","nl":"emmer","zh":"水桶","ja":"バケツ","ru":"ведро"}', 10
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'agricultura/livestock/tools/cage', 'agricultura', 'livestock', 'tools', 'agricultura/livestock/tools/cage', NULL, '{"en":"cage","es":"cage","pt":"cage","fr":"cage","de":"cage","it":"cage","nl":"kooi","zh":"笼子","ja":"ケージ","ru":"клетка"}', 12
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'agricultura/livestock/tools/chain', 'agricultura', 'livestock', 'tools', 'agricultura/livestock/tools/chain', NULL, '{"en":"chain","es":"cadena","pt":"corrente","fr":"chaîne","de":"Kette","it":"catena","nl":"ketting","zh":"链条","ja":"チェーン","ru":"цепь"}', 14
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'agricultura/livestock/tools/cleaner', 'agricultura', 'livestock', 'tools', 'agricultura/livestock/tools/cleaner', NULL, '{"en":"cleaner","es":"cleaner","pt":"cleaner","fr":"cleaner","de":"cleaner","it":"cleaner","nl":"reiniger","zh":"清洁剂","ja":"洗浄剤","ru":"чистящее средство"}', 16
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'agricultura/livestock/tools/clip', 'agricultura', 'livestock', 'tools', 'agricultura/livestock/tools/clip', NULL, '{"en":"clip","es":"clip","pt":"clip","fr":"clip","de":"clip","it":"clip","nl":"clip","zh":"夹子","ja":"クリップ","ru":"зажим"}', 18
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'agricultura/livestock/tools/container', 'agricultura', 'livestock', 'tools', 'agricultura/livestock/tools/container', NULL, '{"en":"container","es":"contenedor","pt":"recipiente","fr":"conteneur","de":"Behälter","it":"contenitore","nl":"container","zh":"容器","ja":"コンテナ","ru":"контейнер"}', 20
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'agricultura/livestock/tools/cooling_tank', 'agricultura', 'livestock', 'tools', 'agricultura/livestock/tools/cooling_tank', NULL, '{"en":"cooling tank","es":"cooling tank","pt":"cooling tank","fr":"cooling tank","de":"cooling tank","it":"cooling tank","nl":"koeltank","zh":"冷却罐","ja":"冷却タンク","ru":"охладительный резервуар"}', 22
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'agricultura/livestock/tools/crate', 'agricultura', 'livestock', 'tools', 'agricultura/livestock/tools/crate', NULL, '{"en":"crate","es":"cajón","pt":"engradado","fr":"caisse","de":"Kiste","it":"cassa","nl":"krat","zh":"板条箱","ja":"クレート","ru":"ящик"}', 24
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'agricultura/livestock/tools/disinfectant', 'agricultura', 'livestock', 'tools', 'agricultura/livestock/tools/disinfectant', NULL, '{"en":"disinfectant","es":"desinfectante","pt":"desinfetante","fr":"désinfectant","de":"Desinfektionsmittel","it":"disinfettante","nl":"ontsmettingsmiddel","zh":"消毒剂","ja":"消毒剤","ru":"дезинфектант"}', 26
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'agricultura/livestock/tools/feed_bag', 'agricultura', 'livestock', 'tools', 'agricultura/livestock/tools/feed_bag', NULL, '{"en":"feed bag","es":"feed bag","pt":"feed bag","fr":"feed bag","de":"feed bag","it":"feed bag","nl":"voederzak","zh":"饲料袋","ja":"飼料袋","ru":"мешок с кормом"}', 28
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'agricultura/livestock/tools/fence', 'agricultura', 'livestock', 'tools', 'agricultura/livestock/tools/fence', NULL, '{"en":"fence","es":"fence","pt":"fence","fr":"fence","de":"fence","it":"fence","nl":"hek","zh":"围栏","ja":"フェンス","ru":"забор"}', 30
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'agricultura/livestock/tools/fork', 'agricultura', 'livestock', 'tools', 'agricultura/livestock/tools/fork', NULL, '{"en":"fork","es":"tenedor","pt":"forcado","fr":"fourche","de":"Gabel","it":"forca","nl":"vork","zh":"叉子","ja":"フォーク","ru":"вилка"}', 32
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'agricultura/livestock/tools/gate', 'agricultura', 'livestock', 'tools', 'agricultura/livestock/tools/gate', NULL, '{"en":"gate","es":"gate","pt":"gate","fr":"gate","de":"gate","it":"gate","nl":"hek","zh":"闸门","ja":"ゲート","ru":"ворота"}', 34
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'agricultura/livestock/tools/gloves', 'agricultura', 'livestock', 'tools', 'agricultura/livestock/tools/gloves', NULL, '{"en":"gloves","es":"guantes","pt":"luvas","fr":"gants","de":"Handschuhe","it":"guanti","nl":"handschoenen","zh":"手套","ja":"手袋","ru":"перчатки"}', 36
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'agricultura/livestock/tools/heat_lamp', 'agricultura', 'livestock', 'tools', 'agricultura/livestock/tools/heat_lamp', NULL, '{"en":"heat lamp","es":"heat lamp","pt":"heat lamp","fr":"heat lamp","de":"heat lamp","it":"heat lamp","nl":"warmtelamp","zh":"加热灯","ja":"ヒートランプ","ru":"тепловая лампа"}', 38
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'agricultura/livestock/tools/hook', 'agricultura', 'livestock', 'tools', 'agricultura/livestock/tools/hook', NULL, '{"en":"hook","es":"gancho","pt":"gancho","fr":"crochet","de":"Haken","it":"gancio","nl":"haak","zh":"挂钩","ja":"フック","ru":"крюк"}', 40
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'agricultura/livestock/tools/hose', 'agricultura', 'livestock', 'tools', 'agricultura/livestock/tools/hose', NULL, '{"en":"hose","es":"manguera","pt":"mangueira","fr":"tuyau","de":"Schlauch","it":"tubo","nl":"slang","zh":"软管","ja":"ホース","ru":"шланг"}', 42
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'agricultura/livestock/tools/injector', 'agricultura', 'livestock', 'tools', 'agricultura/livestock/tools/injector', NULL, '{"en":"injector","es":"injector","pt":"injector","fr":"injector","de":"injector","it":"injector","nl":"injector","zh":"喷油嘴","ja":"インジェクター","ru":"форсунка"}', 44
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'agricultura/livestock/tools/lamp', 'agricultura', 'livestock', 'tools', 'agricultura/livestock/tools/lamp', NULL, '{"en":"lamp","es":"lamp","pt":"lamp","fr":"lamp","de":"lamp","it":"lamp","nl":"lamp","zh":"灯","ja":"ランプ","ru":"лампа"}', 46
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'agricultura/livestock/tools/milk_tank', 'agricultura', 'livestock', 'tools', 'agricultura/livestock/tools/milk_tank', NULL, '{"en":"milk tank","es":"milk tank","pt":"milk tank","fr":"milk tank","de":"milk tank","it":"milk tank","nl":"melktank","zh":"牛奶罐","ja":"ミルクタンク","ru":"молочный резервуар"}', 48
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'agricultura/livestock/tools/milking_machine', 'agricultura', 'livestock', 'tools', 'agricultura/livestock/tools/milking_machine', NULL, '{"en":"milking machine","es":"milking machine","pt":"milking machine","fr":"milking machine","de":"milking machine","it":"milking machine","nl":"melkmachine","zh":"挤奶机","ja":"搾乳機","ru":"доильный аппарат"}', 50
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'agricultura/livestock/tools/net', 'agricultura', 'livestock', 'tools', 'agricultura/livestock/tools/net', NULL, '{"en":"net","es":"red","pt":"rede","fr":"filet","de":"Netz","it":"rete","nl":"net","zh":"网","ja":"ネット","ru":"сетка"}', 52
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'agricultura/livestock/tools/rake', 'agricultura', 'livestock', 'tools', 'agricultura/livestock/tools/rake', NULL, '{"en":"rake","es":"rastrillo","pt":"ancinho","fr":"râteau","de":"Rechen","it":"rastrello","nl":"hark","zh":"耙子","ja":"熊手","ru":"грабли"}', 54
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'agricultura/livestock/tools/rope', 'agricultura', 'livestock', 'tools', 'agricultura/livestock/tools/rope', NULL, '{"en":"rope","es":"cuerda","pt":"corda","fr":"corde","de":"Seil","it":"corda","nl":"touw","zh":"绳子","ja":"ロープ","ru":"веревка"}', 56
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'agricultura/livestock/tools/scoop', 'agricultura', 'livestock', 'tools', 'agricultura/livestock/tools/scoop', NULL, '{"en":"scoop","es":"cuchara de helado","pt":"concha","fr":"cuillère à glace","de":"Eiskugel","it":"paletta gelato","nl":"schep","zh":"勺子","ja":"スコップ","ru":"совок"}', 58
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'agricultura/livestock/tools/shovel', 'agricultura', 'livestock', 'tools', 'agricultura/livestock/tools/shovel', NULL, '{"en":"shovel","es":"pala","pt":"pá","fr":"pelle","de":"Schaufel","it":"vanga","nl":"schop","zh":"铲子","ja":"シャベル","ru":"лопата"}', 60
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'agricultura/livestock/tools/spray', 'agricultura', 'livestock', 'tools', 'agricultura/livestock/tools/spray', NULL, '{"en":"spray","es":"spray","pt":"spray","fr":"spray","de":"Spray","it":"spray","nl":"spray","zh":"喷雾","ja":"スプレー","ru":"спрей"}', 62
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'agricultura/livestock/tools/stick', 'agricultura', 'livestock', 'tools', 'agricultura/livestock/tools/stick', NULL, '{"en":"stick","es":"stick","pt":"stick","fr":"stick","de":"stick","it":"stick","nl":"stok","zh":"棒","ja":"スティック","ru":"палка"}', 64
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'agricultura/livestock/tools/stool', 'agricultura', 'livestock', 'tools', 'agricultura/livestock/tools/stool', NULL, '{"en":"stool","es":"taburete","pt":"banqueta","fr":"tabouret","de":"Hocker","it":"sgabello","nl":"kruk","zh":"凳子","ja":"スツール","ru":"табурет"}', 66
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'agricultura/livestock/tools/syringe', 'agricultura', 'livestock', 'tools', 'agricultura/livestock/tools/syringe', NULL, '{"en":"syringe","es":"jeringa","pt":"seringa","fr":"seringue","de":"Spritze","it":"siringa","nl":"spuit","zh":"注射器","ja":"注射器","ru":"шприц"}', 68
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'agricultura/livestock/tools/tag', 'agricultura', 'livestock', 'tools', 'agricultura/livestock/tools/tag', NULL, '{"en":"tag","es":"tag","pt":"tag","fr":"tag","de":"tag","it":"tag","nl":"label","zh":"标签","ja":"タグ","ru":"тег"}', 70
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'agricultura/livestock/tools/tag_tool', 'agricultura', 'livestock', 'tools', 'agricultura/livestock/tools/tag_tool', NULL, '{"en":"tag tool","es":"tag tool","pt":"tag tool","fr":"tag tool","de":"tag tool","it":"tag tool","nl":"labelgereedschap","zh":"标签工具","ja":"タグツール","ru":"инструмент для маркировки"}', 72
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'agricultura/livestock/tools/tank', 'agricultura', 'livestock', 'tools', 'agricultura/livestock/tools/tank', NULL, '{"en":"tank","es":"tanque","pt":"tanque","fr":"réservoir","de":"Tank","it":"serbatoio","nl":"tank","zh":"容器","ja":"タンク","ru":"резервуар"}', 74
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'agricultura/livestock/tools/thermometer', 'agricultura', 'livestock', 'tools', 'agricultura/livestock/tools/thermometer', NULL, '{"en":"thermometer","es":"termómetro","pt":"termômetro","fr":"thermomètre","de":"Thermometer","it":"termometro","nl":"thermometer","zh":"温度计","ja":"体温計","ru":"термометр"}', 76
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'agricultura/livestock/tools/towel', 'agricultura', 'livestock', 'tools', 'agricultura/livestock/tools/towel', NULL, '{"en":"towel","es":"towel","pt":"towel","fr":"towel","de":"towel","it":"towel","nl":"handdoek","zh":"毛巾","ja":"タオル","ru":"полотенце"}', 78
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'agricultura/livestock/tools/trailer', 'agricultura', 'livestock', 'tools', 'agricultura/livestock/tools/trailer', NULL, '{"en":"trailer","es":"trailer","pt":"trailer","fr":"trailer","de":"trailer","it":"trailer","nl":"aanhanger","zh":"拖车","ja":"トレーラー","ru":"прицеп"}', 80
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'agricultura/livestock/tools/wheelbarrow', 'agricultura', 'livestock', 'tools', 'agricultura/livestock/tools/wheelbarrow', NULL, '{"en":"wheelbarrow","es":"carretilla","pt":"carrinho de mão","fr":"brouette","de":"Schubkarre","it":"carriola","nl":"kruiwagen","zh":"手推车","ja":"一輪車","ru":"тачка"}', 82
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'agricultura/livestock/tools/whistle', 'agricultura', 'livestock', 'tools', 'agricultura/livestock/tools/whistle', NULL, '{"en":"whistle","es":"whistle","pt":"whistle","fr":"whistle","de":"whistle","it":"whistle","nl":"fluitje","zh":"口哨","ja":"笛","ru":"свисток"}', 84
);
INSERT INTO public.roles (id, job_id, sector_id, name, icon, sort_order) VALUES (
  'materials', 'agricultura', 'livestock', '{"en":"Materials","es":"Materiales","pt":"Materiais","fr":"Matériaux","de":"Materialien","it":"Materiali","nl":"Materialen","zh":"材料","ja":"材料","ru":"Материалы"}', '📦', 1
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'agricultura/livestock/materials/disinfectant', 'agricultura', 'livestock', 'materials', 'agricultura/livestock/materials/disinfectant', NULL, '{"en":"disinfectant","es":"desinfectante","pt":"desinfetante","fr":"désinfectant","de":"Desinfektionsmittel","it":"disinfettante","nl":"ontsmettingsmiddel","zh":"消毒剂","ja":"消毒剤","ru":"дезинфектант"}', 0
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'agricultura/livestock/materials/feed', 'agricultura', 'livestock', 'materials', 'agricultura/livestock/materials/feed', NULL, '{"en":"feed","es":"feed","pt":"feed","fr":"feed","de":"feed","it":"feed","nl":"voer","zh":"饲料","ja":"飼料","ru":"корм"}', 2
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'agricultura/livestock/materials/medicine', 'agricultura', 'livestock', 'materials', 'agricultura/livestock/materials/medicine', NULL, '{"en":"medicine","es":"medicina","pt":"medicamento","fr":"médicament","de":"Medizin","it":"medicina","nl":"medicijn","zh":"药物","ja":"薬","ru":"лекарство"}', 4
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'agricultura/livestock/materials/supplements', 'agricultura', 'livestock', 'materials', 'agricultura/livestock/materials/supplements', NULL, '{"en":"supplements","es":"supplements","pt":"supplements","fr":"supplements","de":"supplements","it":"supplements","nl":"supplementen","zh":"补充剂","ja":"サプリメント","ru":"добавки"}', 6
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'agricultura/livestock/materials/water', 'agricultura', 'livestock', 'materials', 'agricultura/livestock/materials/water', NULL, '{"en":"water","es":"agua","pt":"água","fr":"eau","de":"Wasser","it":"acqua","nl":"water","zh":"水","ja":"水","ru":"вода"}', 8
);

INSERT INTO public.sectors (id, job_id, name, icon, sort_order) VALUES (
  'maintenance', 'agricultura', '{"en":"Maintenance","es":"Mantenimiento","pt":"Manutenção","fr":"Maintenance","de":"Wartung","it":"Manutenzione","nl":"Onderhoud","zh":"维护","ja":"メンテナンス","ru":"Техобслуживание"}', '🔧', 3
);
INSERT INTO public.roles (id, job_id, sector_id, name, icon, sort_order) VALUES (
  'tools', 'agricultura', 'maintenance', '{"en":"Tools","es":"Herramientas","pt":"Ferramentas","fr":"Outils","de":"Werkzeuge","it":"Attrezzi","nl":"Gereedschap","zh":"工具","ja":"道具","ru":"Инструменты"}', '🔧', 0
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'agricultura/maintenance/tools/backpack_sprayer', 'agricultura', 'maintenance', 'tools', 'agricultura/maintenance/tools/backpack_sprayer', NULL, '{"en":"backpack sprayer","es":"backpack sprayer","pt":"backpack sprayer","fr":"backpack sprayer","de":"backpack sprayer","it":"backpack sprayer","nl":"rugsproeier","zh":"背负式喷雾器","ja":"背負い式噴霧器","ru":"ранцевый опрыскиватель"}', 0
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'agricultura/maintenance/tools/bin', 'agricultura', 'maintenance', 'tools', 'agricultura/maintenance/tools/bin', NULL, '{"en":"bin","es":"cubo de basura","pt":"lixeira","fr":"poubelle","de":"Mülleimer","it":"bidone","nl":"prullenbak","zh":"垃圾桶","ja":"ビン","ru":"мусорное ведро"}', 2
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'agricultura/maintenance/tools/boots', 'agricultura', 'maintenance', 'tools', 'agricultura/maintenance/tools/boots', NULL, '{"en":"boots","es":"botas","pt":"botas","fr":"bottes","de":"Stiefel","it":"stivali","nl":"laarzen","zh":"靴子","ja":"ブーツ","ru":"ботинки"}', 4
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'agricultura/maintenance/tools/box', 'agricultura', 'maintenance', 'tools', 'agricultura/maintenance/tools/box', NULL, '{"en":"box","es":"caja","pt":"caixa","fr":"boîte","de":"Kasten","it":"scatola","nl":"doos","zh":"箱子","ja":"ボックス","ru":"коробка"}', 6
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'agricultura/maintenance/tools/brush', 'agricultura', 'maintenance', 'tools', 'agricultura/maintenance/tools/brush', NULL, '{"en":"brush","es":"cepillo","pt":"escova","fr":"brosse","de":"Bürste","it":"spazzola","nl":"borstel","zh":"刷子","ja":"ブラシ","ru":"кисть"}', 8
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'agricultura/maintenance/tools/bucket', 'agricultura', 'maintenance', 'tools', 'agricultura/maintenance/tools/bucket', NULL, '{"en":"bucket","es":"cubo","pt":"balde","fr":"seau","de":"Eimer","it":"secchio","nl":"emmer","zh":"水桶","ja":"バケツ","ru":"ведро"}', 10
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'agricultura/maintenance/tools/cart', 'agricultura', 'maintenance', 'tools', 'agricultura/maintenance/tools/cart', NULL, '{"en":"cart","es":"carrito","pt":"carrinho","fr":"chariot","de":"Wagen","it":"carrello","nl":"kar","zh":"推车","ja":"カート","ru":"тележка"}', 12
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'agricultura/maintenance/tools/clips', 'agricultura', 'maintenance', 'tools', 'agricultura/maintenance/tools/clips', NULL, '{"en":"clips","es":"clips","pt":"clips","fr":"clips","de":"clips","it":"clips","nl":"clips","zh":"夹子","ja":"クリップ","ru":"зажимы"}', 14
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'agricultura/maintenance/tools/cloth', 'agricultura', 'maintenance', 'tools', 'agricultura/maintenance/tools/cloth', NULL, '{"en":"cloth","es":"trapo","pt":"pano","fr":"chiffon","de":"Tuch","it":"panno","nl":"doek","zh":"布","ja":"布","ru":"ткань"}', 16
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'agricultura/maintenance/tools/connector', 'agricultura', 'maintenance', 'tools', 'agricultura/maintenance/tools/connector', NULL, '{"en":"connector","es":"connector","pt":"connector","fr":"connector","de":"connector","it":"connector","nl":"connector","zh":"连接器","ja":"コネクター","ru":"разъем"}', 18
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'agricultura/maintenance/tools/container', 'agricultura', 'maintenance', 'tools', 'agricultura/maintenance/tools/container', NULL, '{"en":"container","es":"contenedor","pt":"recipiente","fr":"conteneur","de":"Behälter","it":"contenitore","nl":"container","zh":"容器","ja":"コンテナ","ru":"контейнер"}', 20
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'agricultura/maintenance/tools/cup', 'agricultura', 'maintenance', 'tools', 'agricultura/maintenance/tools/cup', NULL, '{"en":"cup","es":"cup","pt":"cup","fr":"cup","de":"cup","it":"cup","nl":"beker","zh":"杯子","ja":"カップ","ru":"стакан"}', 22
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'agricultura/maintenance/tools/drip_line', 'agricultura', 'maintenance', 'tools', 'agricultura/maintenance/tools/drip_line', NULL, '{"en":"drip line","es":"drip line","pt":"drip line","fr":"drip line","de":"drip line","it":"drip line","nl":"druppellijn","zh":"滴管","ja":"点滴ライン","ru":"капельная линия"}', 24
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'agricultura/maintenance/tools/fence', 'agricultura', 'maintenance', 'tools', 'agricultura/maintenance/tools/fence', NULL, '{"en":"fence","es":"fence","pt":"fence","fr":"fence","de":"fence","it":"fence","nl":"hek","zh":"围栏","ja":"フェンス","ru":"забор"}', 26
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'agricultura/maintenance/tools/filter', 'agricultura', 'maintenance', 'tools', 'agricultura/maintenance/tools/filter', NULL, '{"en":"filter","es":"filtro","pt":"filtro","fr":"filtre","de":"Filter","it":"filtro","nl":"filter","zh":"过滤器","ja":"フィルター","ru":"фильтр"}', 28
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'agricultura/maintenance/tools/gauge', 'agricultura', 'maintenance', 'tools', 'agricultura/maintenance/tools/gauge', NULL, '{"en":"gauge","es":"medidor","pt":"medidor","fr":"jauge","de":"Messgerät","it":"calibro","nl":"meter","zh":"仪表","ja":"ゲージ","ru":"манометр"}', 30
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'agricultura/maintenance/tools/gloves', 'agricultura', 'maintenance', 'tools', 'agricultura/maintenance/tools/gloves', NULL, '{"en":"gloves","es":"guantes","pt":"luvas","fr":"gants","de":"Handschuhe","it":"guanti","nl":"handschoenen","zh":"手套","ja":"手袋","ru":"перчатки"}', 32
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'agricultura/maintenance/tools/goggles', 'agricultura', 'maintenance', 'tools', 'agricultura/maintenance/tools/goggles', NULL, '{"en":"goggles","es":"gafas protectoras","pt":"óculos de proteção","fr":"lunettes","de":"Schutzbrille","it":"occhiali","nl":"veiligheidsbril","zh":"护目镜","ja":"ゴーグル","ru":"защитные очки"}', 34
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'agricultura/maintenance/tools/hose', 'agricultura', 'maintenance', 'tools', 'agricultura/maintenance/tools/hose', NULL, '{"en":"hose","es":"manguera","pt":"mangueira","fr":"tuyau","de":"Schlauch","it":"tubo","nl":"slang","zh":"软管","ja":"ホース","ru":"шланг"}', 36
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'agricultura/maintenance/tools/irrigation', 'agricultura', 'maintenance', 'tools', 'agricultura/maintenance/tools/irrigation', NULL, '{"en":"irrigation","es":"irrigation","pt":"irrigation","fr":"irrigation","de":"irrigation","it":"irrigation","nl":"irrigatie","zh":"灌溉","ja":"灌漑","ru":"ирригация"}', 38
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'agricultura/maintenance/tools/knife', 'agricultura', 'maintenance', 'tools', 'agricultura/maintenance/tools/knife', NULL, '{"en":"knife","es":"cuchillo","pt":"faca","fr":"couteau","de":"Messer","it":"coltello","nl":"mes","zh":"刀","ja":"ナイフ","ru":"нож"}', 40
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'agricultura/maintenance/tools/label', 'agricultura', 'maintenance', 'tools', 'agricultura/maintenance/tools/label', NULL, '{"en":"label","es":"etiqueta","pt":"etiqueta","fr":"étiquette","de":"Etikett","it":"etichetta","nl":"etiket","zh":"标签","ja":"ラベル","ru":"этикетка"}', 42
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'agricultura/maintenance/tools/ladder', 'agricultura', 'maintenance', 'tools', 'agricultura/maintenance/tools/ladder', NULL, '{"en":"ladder","es":"escalera","pt":"escada","fr":"échelle","de":"Leiter","it":"scala","nl":"ladder","zh":"梯子","ja":"はしご","ru":"лестница"}', 44
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'agricultura/maintenance/tools/marker', 'agricultura', 'maintenance', 'tools', 'agricultura/maintenance/tools/marker', NULL, '{"en":"marker","es":"marcador","pt":"marcador","fr":"marqueur","de":"Marker","it":"pennarello","nl":"marker","zh":"记号笔","ja":"マーカー","ru":"маркер"}', 46
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'agricultura/maintenance/tools/mask', 'agricultura', 'maintenance', 'tools', 'agricultura/maintenance/tools/mask', NULL, '{"en":"mask","es":"mascarilla","pt":"máscara","fr":"masque","de":"Maske","it":"maschera","nl":"masker","zh":"口罩","ja":"マスク","ru":"маска"}', 48
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'agricultura/maintenance/tools/meter', 'agricultura', 'maintenance', 'tools', 'agricultura/maintenance/tools/meter', NULL, '{"en":"meter","es":"medidor","pt":"medidor","fr":"mètre","de":"Messgerät","it":"metro","nl":"meter","zh":"仪表","ja":"メーター","ru":"счетчик"}', 50
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'agricultura/maintenance/tools/net', 'agricultura', 'maintenance', 'tools', 'agricultura/maintenance/tools/net', NULL, '{"en":"net","es":"red","pt":"rede","fr":"filet","de":"Netz","it":"rete","nl":"net","zh":"网","ja":"ネット","ru":"сетка"}', 52
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'agricultura/maintenance/tools/pipe', 'agricultura', 'maintenance', 'tools', 'agricultura/maintenance/tools/pipe', NULL, '{"en":"pipe","es":"tubo","pt":"cano","fr":"tuyau","de":"Rohr","it":"tubo","nl":"pijp","zh":"管道","ja":"パイプ","ru":"труба"}', 54
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'agricultura/maintenance/tools/rope', 'agricultura', 'maintenance', 'tools', 'agricultura/maintenance/tools/rope', NULL, '{"en":"rope","es":"cuerda","pt":"corda","fr":"corde","de":"Seil","it":"corda","nl":"touw","zh":"绳子","ja":"ロープ","ru":"веревка"}', 56
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'agricultura/maintenance/tools/rump', 'agricultura', 'maintenance', 'tools', 'agricultura/maintenance/tools/rump', NULL, '{"en":"rump","es":"rump","pt":"rump","fr":"rump","de":"rump","it":"rump","nl":"staartstuk","zh":"臀肉","ja":"ランプ","ru":"кострец"}', 58
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'agricultura/maintenance/tools/scale', 'agricultura', 'maintenance', 'tools', 'agricultura/maintenance/tools/scale', NULL, '{"en":"scale","es":"báscula","pt":"balança","fr":"balance","de":"Waage","it":"bilancia","nl":"weegschaal","zh":"秤","ja":"スケール","ru":"весы"}', 60
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'agricultura/maintenance/tools/scissors', 'agricultura', 'maintenance', 'tools', 'agricultura/maintenance/tools/scissors', NULL, '{"en":"scissors","es":"tijeras","pt":"tesoura","fr":"ciseaux","de":"Schere","it":"forbici","nl":"schaar","zh":"剪刀","ja":"ハサミ","ru":"ножницы"}', 62
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'agricultura/maintenance/tools/shears', 'agricultura', 'maintenance', 'tools', 'agricultura/maintenance/tools/shears', NULL, '{"en":"shears","es":"tijeras de podar","pt":"tesoura de poda","fr":"sécateur","de":"Gartenschere","it":"cesoie","nl":"snoeischaar","zh":"大剪刀","ja":"剪定鋏","ru":"ножницы для стрижки"}', 64
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'agricultura/maintenance/tools/sprayer', 'agricultura', 'maintenance', 'tools', 'agricultura/maintenance/tools/sprayer', NULL, '{"en":"sprayer","es":"pulverizador","pt":"pulverizador","fr":"pulvérisateur","de":"Sprüher","it":"spruzzatore","nl":"sproeier","zh":"喷雾器","ja":"スプレイヤー","ru":"опрыскиватель"}', 66
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'agricultura/maintenance/tools/spreader', 'agricultura', 'maintenance', 'tools', 'agricultura/maintenance/tools/spreader', NULL, '{"en":"spreader","es":"spreader","pt":"spreader","fr":"spreader","de":"spreader","it":"spreader","nl":"spreider","zh":"撒播机","ja":"スプレッダー","ru":"разбрасыватель"}', 68
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'agricultura/maintenance/tools/sprinkler', 'agricultura', 'maintenance', 'tools', 'agricultura/maintenance/tools/sprinkler', NULL, '{"en":"sprinkler","es":"sprinkler","pt":"sprinkler","fr":"sprinkler","de":"sprinkler","it":"sprinkler","nl":"sproeier","zh":"喷水器","ja":"スプリンクラー","ru":"разбрызгиватель"}', 70
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'agricultura/maintenance/tools/stakes', 'agricultura', 'maintenance', 'tools', 'agricultura/maintenance/tools/stakes', NULL, '{"en":"stakes","es":"stakes","pt":"stakes","fr":"stakes","de":"stakes","it":"stakes","nl":"palen","zh":"桩","ja":"杭","ru":"колышки"}', 72
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'agricultura/maintenance/tools/tank', 'agricultura', 'maintenance', 'tools', 'agricultura/maintenance/tools/tank', NULL, '{"en":"tank","es":"tanque","pt":"tanque","fr":"réservoir","de":"Tank","it":"serbatoio","nl":"tank","zh":"容器","ja":"タンク","ru":"резервуар"}', 74
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'agricultura/maintenance/tools/tape', 'agricultura', 'maintenance', 'tools', 'agricultura/maintenance/tools/tape', NULL, '{"en":"tape","es":"cinta","pt":"fita","fr":"ruban","de":"Klebeband","it":"nastro","nl":"tape","zh":"胶带","ja":"テープ","ru":"лента"}', 76
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'agricultura/maintenance/tools/tester', 'agricultura', 'maintenance', 'tools', 'agricultura/maintenance/tools/tester', NULL, '{"en":"tester","es":"tester","pt":"tester","fr":"tester","de":"tester","it":"tester","nl":"tester","zh":"测试仪","ja":"テスター","ru":"тестер"}', 78
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'agricultura/maintenance/tools/timer', 'agricultura', 'maintenance', 'tools', 'agricultura/maintenance/tools/timer', NULL, '{"en":"timer","es":"timer","pt":"timer","fr":"timer","de":"timer","it":"timer","nl":"timer","zh":"计时器","ja":"タイマー","ru":"таймер"}', 80
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'agricultura/maintenance/tools/toolbox', 'agricultura', 'maintenance', 'tools', 'agricultura/maintenance/tools/toolbox', NULL, '{"en":"toolbox","es":"toolbox","pt":"toolbox","fr":"toolbox","de":"toolbox","it":"toolbox","nl":"gereedschapskist","zh":"工具箱","ja":"ツールボックス","ru":"ящик для инструментов"}', 82
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'agricultura/maintenance/tools/trolley', 'agricultura', 'maintenance', 'tools', 'agricultura/maintenance/tools/trolley', NULL, '{"en":"trolley","es":"carrito","pt":"carrinho","fr":"chariot","de":"Trolley","it":"carrello","nl":"trolley","zh":"手推车","ja":"トロリー","ru":"тележка"}', 84
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'agricultura/maintenance/tools/valve', 'agricultura', 'maintenance', 'tools', 'agricultura/maintenance/tools/valve', NULL, '{"en":"valve","es":"valve","pt":"valve","fr":"valve","de":"valve","it":"valve","nl":"klep","zh":"阀门","ja":"バルブ","ru":"клапан"}', 86
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'agricultura/maintenance/tools/wheelbarrow', 'agricultura', 'maintenance', 'tools', 'agricultura/maintenance/tools/wheelbarrow', NULL, '{"en":"wheelbarrow","es":"carretilla","pt":"carrinho de mão","fr":"brouette","de":"Schubkarre","it":"carriola","nl":"kruiwagen","zh":"手推车","ja":"一輪車","ru":"тачка"}', 88
);
INSERT INTO public.roles (id, job_id, sector_id, name, icon, sort_order) VALUES (
  'materials', 'agricultura', 'maintenance', '{"en":"Materials","es":"Materiales","pt":"Materiais","fr":"Matériaux","de":"Materialien","it":"Materiali","nl":"Materialen","zh":"材料","ja":"材料","ru":"Материалы"}', '📦', 1
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'agricultura/maintenance/materials/chemicals', 'agricultura', 'maintenance', 'materials', 'agricultura/maintenance/materials/chemicals', NULL, '{"en":"chemicals","es":"chemicals","pt":"chemicals","fr":"chemicals","de":"chemicals","it":"chemicals","nl":"chemicaliën","zh":"化学品","ja":"化学物質","ru":"химические вещества"}', 0
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'agricultura/maintenance/materials/cleaning_products', 'agricultura', 'maintenance', 'materials', 'agricultura/maintenance/materials/cleaning_products', NULL, '{"en":"cleaning products","es":"cleaning products","pt":"cleaning products","fr":"cleaning products","de":"cleaning products","it":"cleaning products","nl":"schoonmaakproducten","zh":"清洁产品","ja":"洗浄製品","ru":"чистящие средства"}', 2
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'agricultura/maintenance/materials/fertilizer', 'agricultura', 'maintenance', 'materials', 'agricultura/maintenance/materials/fertilizer', NULL, '{"en":"fertilizer","es":"fertilizante","pt":"fertilizante","fr":"engrais","de":"Dünger","it":"fertilizzante","nl":"meststof","zh":"肥料","ja":"肥料","ru":"удобрение"}', 4
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'agricultura/maintenance/materials/repair_materials', 'agricultura', 'maintenance', 'materials', 'agricultura/maintenance/materials/repair_materials', NULL, '{"en":"repair materials","es":"repair materials","pt":"repair materials","fr":"repair materials","de":"repair materials","it":"repair materials","nl":"reparatiematerialen","zh":"修理材料","ja":"修理材料","ru":"ремонтные материалы"}', 6
);

INSERT INTO public.sectors (id, job_id, name, icon, sort_order) VALUES (
  'planting', 'agricultura', '{"en":"Planting","es":"Siembra","pt":"Plantio","fr":"Plantation","de":"Pflanzung","it":"Semina","nl":"Planten","zh":"种植","ja":"植え付け","ru":"Посадка"}', '🌱', 4
);
INSERT INTO public.roles (id, job_id, sector_id, name, icon, sort_order) VALUES (
  'tools', 'agricultura', 'planting', '{"en":"Tools","es":"Herramientas","pt":"Ferramentas","fr":"Outils","de":"Werkzeuge","it":"Attrezzi","nl":"Gereedschap","zh":"工具","ja":"道具","ru":"Инструменты"}', '🔧', 0
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'agricultura/planting/tools/apron', 'agricultura', 'planting', 'tools', 'agricultura/planting/tools/apron', NULL, '{"en":"apron","es":"delantal","pt":"avental","fr":"tablier","de":"Schürze","it":"grembiule","nl":"schort","zh":"围裙","ja":"エプロン","ru":"фартук"}', 0
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'agricultura/planting/tools/backpack_sprayer', 'agricultura', 'planting', 'tools', 'agricultura/planting/tools/backpack_sprayer', NULL, '{"en":"backpack sprayer","es":"backpack sprayer","pt":"backpack sprayer","fr":"backpack sprayer","de":"backpack sprayer","it":"backpack sprayer","nl":"rugsproeier","zh":"背负式喷雾器","ja":"背負い式噴霧器","ru":"ранцевый опрыскиватель"}', 2
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'agricultura/planting/tools/boots', 'agricultura', 'planting', 'tools', 'agricultura/planting/tools/boots', NULL, '{"en":"boots","es":"botas","pt":"botas","fr":"bottes","de":"Stiefel","it":"stivali","nl":"laarzen","zh":"靴子","ja":"ブーツ","ru":"ботинки"}', 4
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'agricultura/planting/tools/box', 'agricultura', 'planting', 'tools', 'agricultura/planting/tools/box', NULL, '{"en":"box","es":"caja","pt":"caixa","fr":"boîte","de":"Kasten","it":"scatola","nl":"doos","zh":"箱子","ja":"ボックス","ru":"коробка"}', 6
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'agricultura/planting/tools/bucket', 'agricultura', 'planting', 'tools', 'agricultura/planting/tools/bucket', NULL, '{"en":"bucket","es":"cubo","pt":"balde","fr":"seau","de":"Eimer","it":"secchio","nl":"emmer","zh":"水桶","ja":"バケツ","ru":"ведро"}', 8
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'agricultura/planting/tools/connector', 'agricultura', 'planting', 'tools', 'agricultura/planting/tools/connector', NULL, '{"en":"connector","es":"connector","pt":"connector","fr":"connector","de":"connector","it":"connector","nl":"connector","zh":"连接器","ja":"コネクター","ru":"разъем"}', 10
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'agricultura/planting/tools/container', 'agricultura', 'planting', 'tools', 'agricultura/planting/tools/container', NULL, '{"en":"container","es":"contenedor","pt":"recipiente","fr":"conteneur","de":"Behälter","it":"contenitore","nl":"container","zh":"容器","ja":"コンテナ","ru":"контейнер"}', 12
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'agricultura/planting/tools/drip_line', 'agricultura', 'planting', 'tools', 'agricultura/planting/tools/drip_line', NULL, '{"en":"drip line","es":"drip line","pt":"drip line","fr":"drip line","de":"drip line","it":"drip line","nl":"druppellijn","zh":"滴管","ja":"点滴ライン","ru":"капельная линия"}', 14
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'agricultura/planting/tools/fork', 'agricultura', 'planting', 'tools', 'agricultura/planting/tools/fork', NULL, '{"en":"fork","es":"tenedor","pt":"forcado","fr":"fourche","de":"Gabel","it":"forca","nl":"vork","zh":"叉子","ja":"フォーク","ru":"вилка"}', 16
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'agricultura/planting/tools/gloves', 'agricultura', 'planting', 'tools', 'agricultura/planting/tools/gloves', NULL, '{"en":"gloves","es":"guantes","pt":"luvas","fr":"gants","de":"Handschuhe","it":"guanti","nl":"handschoenen","zh":"手套","ja":"手袋","ru":"перчатки"}', 18
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'agricultura/planting/tools/grow_light', 'agricultura', 'planting', 'tools', 'agricultura/planting/tools/grow_light', NULL, '{"en":"grow light","es":"grow light","pt":"grow light","fr":"grow light","de":"grow light","it":"grow light","nl":"groeilamp","zh":"植物灯","ja":"グロウライト","ru":"лампа для растений"}', 20
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'agricultura/planting/tools/hoe', 'agricultura', 'planting', 'tools', 'agricultura/planting/tools/hoe', NULL, '{"en":"hoe","es":"azada","pt":"enxada","fr":"houe","de":"Hacke","it":"zappa","nl":"schoffel","zh":"锄头","ja":"鍬","ru":"мотыга"}', 22
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'agricultura/planting/tools/hose', 'agricultura', 'planting', 'tools', 'agricultura/planting/tools/hose', NULL, '{"en":"hose","es":"manguera","pt":"mangueira","fr":"tuyau","de":"Schlauch","it":"tubo","nl":"slang","zh":"软管","ja":"ホース","ru":"шланг"}', 24
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'agricultura/planting/tools/hose_reel', 'agricultura', 'planting', 'tools', 'agricultura/planting/tools/hose_reel', NULL, '{"en":"hose reel","es":"hose reel","pt":"hose reel","fr":"hose reel","de":"hose reel","it":"hose reel","nl":"slanghaspel","zh":"软管卷轴","ja":"ホースリール","ru":"катушка для шланга"}', 26
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'agricultura/planting/tools/irrigation_system', 'agricultura', 'planting', 'tools', 'agricultura/planting/tools/irrigation_system', NULL, '{"en":"irrigation system","es":"irrigation system","pt":"irrigation system","fr":"irrigation system","de":"irrigation system","it":"irrigation system","nl":"irrigatiesysteem","zh":"灌溉系统","ja":"灌漑システム","ru":"ирригационная система"}', 28
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'agricultura/planting/tools/knife', 'agricultura', 'planting', 'tools', 'agricultura/planting/tools/knife', NULL, '{"en":"knife","es":"cuchillo","pt":"faca","fr":"couteau","de":"Messer","it":"coltello","nl":"mes","zh":"刀","ja":"ナイフ","ru":"нож"}', 30
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'agricultura/planting/tools/labels', 'agricultura', 'planting', 'tools', 'agricultura/planting/tools/labels', NULL, '{"en":"labels","es":"labels","pt":"labels","fr":"labels","de":"labels","it":"labels","nl":"etiketten","zh":"标签","ja":"ラベル","ru":"этикетки"}', 32
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'agricultura/planting/tools/marker', 'agricultura', 'planting', 'tools', 'agricultura/planting/tools/marker', NULL, '{"en":"marker","es":"marcador","pt":"marcador","fr":"marqueur","de":"Marker","it":"pennarello","nl":"marker","zh":"记号笔","ja":"マーカー","ru":"маркер"}', 34
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'agricultura/planting/tools/mask', 'agricultura', 'planting', 'tools', 'agricultura/planting/tools/mask', NULL, '{"en":"mask","es":"mascarilla","pt":"máscara","fr":"masque","de":"Maske","it":"maschera","nl":"masker","zh":"口罩","ja":"マスク","ru":"маска"}', 36
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'agricultura/planting/tools/measuring_cup', 'agricultura', 'planting', 'tools', 'agricultura/planting/tools/measuring_cup', NULL, '{"en":"measuring cup","es":"measuring cup","pt":"measuring cup","fr":"measuring cup","de":"measuring cup","it":"measuring cup","nl":"maatbeker","zh":"量杯","ja":"計量カップ","ru":"мерный стакан"}', 38
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'agricultura/planting/tools/moisture_meter', 'agricultura', 'planting', 'tools', 'agricultura/planting/tools/moisture_meter', NULL, '{"en":"moisture meter","es":"moisture meter","pt":"moisture meter","fr":"moisture meter","de":"moisture meter","it":"moisture meter","nl":"vochtmeter","zh":"湿度计","ja":"水分計","ru":"влагомер"}', 40
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'agricultura/planting/tools/pot', 'agricultura', 'planting', 'tools', 'agricultura/planting/tools/pot', NULL, '{"en":"pot","es":"pot","pt":"pot","fr":"pot","de":"pot","it":"pot","nl":"pot","zh":"锅","ja":"鍋","ru":"кастрюля"}', 42
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'agricultura/planting/tools/pump', 'agricultura', 'planting', 'tools', 'agricultura/planting/tools/pump', NULL, '{"en":"pump","es":"bomba","pt":"bomba","fr":"pompe","de":"Pumpe","it":"pompa","nl":"pomp","zh":"泵","ja":"ポンプ","ru":"насос"}', 44
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'agricultura/planting/tools/rack', 'agricultura', 'planting', 'tools', 'agricultura/planting/tools/rack', NULL, '{"en":"rack","es":"estante","pt":"prateleira","fr":"étagère","de":"Regal","it":"scaffale","nl":"rek","zh":"货架","ja":"ラック","ru":"стеллаж"}', 46
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'agricultura/planting/tools/rake', 'agricultura', 'planting', 'tools', 'agricultura/planting/tools/rake', NULL, '{"en":"rake","es":"rastrillo","pt":"ancinho","fr":"râteau","de":"Rechen","it":"rastrello","nl":"hark","zh":"耙子","ja":"熊手","ru":"грабли"}', 48
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'agricultura/planting/tools/rope', 'agricultura', 'planting', 'tools', 'agricultura/planting/tools/rope', NULL, '{"en":"rope","es":"cuerda","pt":"corda","fr":"corde","de":"Seil","it":"corda","nl":"touw","zh":"绳子","ja":"ロープ","ru":"веревка"}', 50
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'agricultura/planting/tools/scissors', 'agricultura', 'planting', 'tools', 'agricultura/planting/tools/scissors', NULL, '{"en":"scissors","es":"tijeras","pt":"tesoura","fr":"ciseaux","de":"Schere","it":"forbici","nl":"schaar","zh":"剪刀","ja":"ハサミ","ru":"ножницы"}', 52
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'agricultura/planting/tools/seed_drill', 'agricultura', 'planting', 'tools', 'agricultura/planting/tools/seed_drill', NULL, '{"en":"seed drill","es":"seed drill","pt":"seed drill","fr":"seed drill","de":"seed drill","it":"seed drill","nl":"zaaimachine","zh":"播种机","ja":"シードドリル","ru":"сеялка"}', 54
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'agricultura/planting/tools/seed_tray', 'agricultura', 'planting', 'tools', 'agricultura/planting/tools/seed_tray', NULL, '{"en":"seed tray","es":"seed tray","pt":"seed tray","fr":"seed tray","de":"seed tray","it":"seed tray","nl":"zaailade","zh":"育苗盘","ja":"シードトレイ","ru":"рассадный лоток"}', 56
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'agricultura/planting/tools/seeder', 'agricultura', 'planting', 'tools', 'agricultura/planting/tools/seeder', NULL, '{"en":"seeder","es":"seeder","pt":"seeder","fr":"seeder","de":"seeder","it":"seeder","nl":"zaaimachine","zh":"播种机","ja":"シーダー","ru":"сеялка"}', 58
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'agricultura/planting/tools/shade_net', 'agricultura', 'planting', 'tools', 'agricultura/planting/tools/shade_net', NULL, '{"en":"shade net","es":"shade net","pt":"shade net","fr":"shade net","de":"shade net","it":"shade net","nl":"schaduwdoek","zh":"遮阳网","ja":"遮光ネット","ru":"затеняющая сетка"}', 60
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'agricultura/planting/tools/shears', 'agricultura', 'planting', 'tools', 'agricultura/planting/tools/shears', NULL, '{"en":"shears","es":"tijeras de podar","pt":"tesoura de poda","fr":"sécateur","de":"Gartenschere","it":"cesoie","nl":"snoeischaar","zh":"大剪刀","ja":"剪定鋏","ru":"ножницы для стрижки"}', 62
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'agricultura/planting/tools/shovel', 'agricultura', 'planting', 'tools', 'agricultura/planting/tools/shovel', NULL, '{"en":"shovel","es":"pala","pt":"pá","fr":"pelle","de":"Schaufel","it":"vanga","nl":"schop","zh":"铲子","ja":"シャベル","ru":"лопата"}', 64
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'agricultura/planting/tools/soil_tester', 'agricultura', 'planting', 'tools', 'agricultura/planting/tools/soil_tester', NULL, '{"en":"soil tester","es":"soil tester","pt":"soil tester","fr":"soil tester","de":"soil tester","it":"soil tester","nl":"bodemtester","zh":"土壤测试仪","ja":"土壌テスター","ru":"анализатор почвы"}', 66
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'agricultura/planting/tools/spray_bottle', 'agricultura', 'planting', 'tools', 'agricultura/planting/tools/spray_bottle', NULL, '{"en":"spray bottle","es":"spray bottle","pt":"spray bottle","fr":"spray bottle","de":"spray bottle","it":"spray bottle","nl":"sprayflacon","zh":"喷雾瓶","ja":"スプレーボトル","ru":"спрей-бутылка"}', 68
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'agricultura/planting/tools/spreader', 'agricultura', 'planting', 'tools', 'agricultura/planting/tools/spreader', NULL, '{"en":"spreader","es":"spreader","pt":"spreader","fr":"spreader","de":"spreader","it":"spreader","nl":"spreider","zh":"撒播机","ja":"スプレッダー","ru":"разбрасыватель"}', 70
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'agricultura/planting/tools/sprinkler', 'agricultura', 'planting', 'tools', 'agricultura/planting/tools/sprinkler', NULL, '{"en":"sprinkler","es":"sprinkler","pt":"sprinkler","fr":"sprinkler","de":"sprinkler","it":"sprinkler","nl":"sproeier","zh":"喷水器","ja":"スプリンクラー","ru":"разбрызгиватель"}', 72
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'agricultura/planting/tools/stakes', 'agricultura', 'planting', 'tools', 'agricultura/planting/tools/stakes', NULL, '{"en":"stakes","es":"stakes","pt":"stakes","fr":"stakes","de":"stakes","it":"stakes","nl":"palen","zh":"桩","ja":"杭","ru":"колышки"}', 74
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'agricultura/planting/tools/tank', 'agricultura', 'planting', 'tools', 'agricultura/planting/tools/tank', NULL, '{"en":"tank","es":"tanque","pt":"tanque","fr":"réservoir","de":"Tank","it":"serbatoio","nl":"tank","zh":"容器","ja":"タンク","ru":"резервуар"}', 76
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'agricultura/planting/tools/timer', 'agricultura', 'planting', 'tools', 'agricultura/planting/tools/timer', NULL, '{"en":"timer","es":"timer","pt":"timer","fr":"timer","de":"timer","it":"timer","nl":"timer","zh":"计时器","ja":"タイマー","ru":"таймер"}', 78
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'agricultura/planting/tools/tray', 'agricultura', 'planting', 'tools', 'agricultura/planting/tools/tray', NULL, '{"en":"tray","es":"bandeja","pt":"bandeja","fr":"plateau","de":"Tablett","it":"vassoio","nl":"dienblad","zh":"托盘","ja":"トレイ","ru":"поднос"}', 80
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'agricultura/planting/tools/trowel', 'agricultura', 'planting', 'tools', 'agricultura/planting/tools/trowel', NULL, '{"en":"trowel","es":"llana","pt":"colher de pedreiro","fr":"truelle","de":"Kelle","it":"cazzuola","nl":"truweel","zh":"抹刀","ja":"コテ","ru":"кельма"}', 82
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'agricultura/planting/tools/wheelbarrow', 'agricultura', 'planting', 'tools', 'agricultura/planting/tools/wheelbarrow', NULL, '{"en":"wheelbarrow","es":"carretilla","pt":"carrinho de mão","fr":"brouette","de":"Schubkarre","it":"carriola","nl":"kruiwagen","zh":"手推车","ja":"一輪車","ru":"тачка"}', 84
);
INSERT INTO public.roles (id, job_id, sector_id, name, icon, sort_order) VALUES (
  'materials', 'agricultura', 'planting', '{"en":"Materials","es":"Materiales","pt":"Materiais","fr":"Matériaux","de":"Materialien","it":"Materiali","nl":"Materialen","zh":"材料","ja":"材料","ru":"Материалы"}', '📦', 1
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'agricultura/planting/materials/additives', 'agricultura', 'planting', 'materials', 'agricultura/planting/materials/additives', NULL, '{"en":"additives","es":"additives","pt":"additives","fr":"additives","de":"additives","it":"additives","nl":"additieven","zh":"添加剂","ja":"添加剤","ru":"добавки"}', 0
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'agricultura/planting/materials/compost', 'agricultura', 'planting', 'materials', 'agricultura/planting/materials/compost', NULL, '{"en":"compost","es":"compost","pt":"composto","fr":"compost","de":"Kompost","it":"compost","nl":"compost","zh":"堆肥","ja":"堆肥","ru":"компост"}', 2
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'agricultura/planting/materials/fertilizer', 'agricultura', 'planting', 'materials', 'agricultura/planting/materials/fertilizer', NULL, '{"en":"fertilizer","es":"fertilizante","pt":"fertilizante","fr":"engrais","de":"Dünger","it":"fertilizzante","nl":"meststof","zh":"肥料","ja":"肥料","ru":"удобрение"}', 4
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'agricultura/planting/materials/liquid', 'agricultura', 'planting', 'materials', 'agricultura/planting/materials/liquid', NULL, '{"en":"liquid","es":"liquid","pt":"liquid","fr":"liquid","de":"liquid","it":"liquid","nl":"vloeistof","zh":"液体","ja":"液体","ru":"жидкость"}', 6
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'agricultura/planting/materials/mix', 'agricultura', 'planting', 'materials', 'agricultura/planting/materials/mix', NULL, '{"en":"mix","es":"mix","pt":"mix","fr":"mix","de":"mix","it":"mix","nl":"mengsel","zh":"混合物","ja":"ミックス","ru":"смесь"}', 8
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'agricultura/planting/materials/nutrients', 'agricultura', 'planting', 'materials', 'agricultura/planting/materials/nutrients', NULL, '{"en":"nutrients","es":"nutrients","pt":"nutrients","fr":"nutrients","de":"nutrients","it":"nutrients","nl":"voedingsstoffen","zh":"营养素","ja":"栄養素","ru":"питательные вещества"}', 10
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'agricultura/planting/materials/organic_mix', 'agricultura', 'planting', 'materials', 'agricultura/planting/materials/organic_mix', NULL, '{"en":"organic mix","es":"organic mix","pt":"organic mix","fr":"organic mix","de":"organic mix","it":"organic mix","nl":"organisch mengsel","zh":"有机混合物","ja":"有機ミックス","ru":"органическая смесь"}', 12
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'agricultura/planting/materials/powder', 'agricultura', 'planting', 'materials', 'agricultura/planting/materials/powder', NULL, '{"en":"powder","es":"powder","pt":"powder","fr":"powder","de":"powder","it":"powder","nl":"poeder","zh":"粉末","ja":"パウダー","ru":"порошок"}', 14
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'agricultura/planting/materials/seeds', 'agricultura', 'planting', 'materials', 'agricultura/planting/materials/seeds', NULL, '{"en":"seeds","es":"semillas","pt":"sementes","fr":"graines","de":"Samen","it":"semi","nl":"zaden","zh":"种子","ja":"種","ru":"семена"}', 16
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'agricultura/planting/materials/soil', 'agricultura', 'planting', 'materials', 'agricultura/planting/materials/soil', NULL, '{"en":"soil","es":"tierra","pt":"solo","fr":"sol","de":"Erde","it":"terra","nl":"aarde","zh":"土壤","ja":"土","ru":"почва"}', 18
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'agricultura/planting/materials/soil_base', 'agricultura', 'planting', 'materials', 'agricultura/planting/materials/soil_base', NULL, '{"en":"soil base","es":"soil base","pt":"soil base","fr":"soil base","de":"soil base","it":"soil base","nl":"bodembasis","zh":"土壤基础","ja":"土壌ベース","ru":"основа почвы"}', 20
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'agricultura/planting/materials/solution', 'agricultura', 'planting', 'materials', 'agricultura/planting/materials/solution', NULL, '{"en":"solution","es":"solution","pt":"solution","fr":"solution","de":"solution","it":"solution","nl":"oplossing","zh":"溶液","ja":"溶液","ru":"раствор"}', 22
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'agricultura/planting/materials/substrate', 'agricultura', 'planting', 'materials', 'agricultura/planting/materials/substrate', NULL, '{"en":"substrate","es":"substrate","pt":"substrate","fr":"substrate","de":"substrate","it":"substrate","nl":"substraat","zh":"基底","ja":"基質","ru":"субстрат"}', 24
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'agricultura/planting/materials/water', 'agricultura', 'planting', 'materials', 'agricultura/planting/materials/water', NULL, '{"en":"water","es":"agua","pt":"água","fr":"eau","de":"Wasser","it":"acqua","nl":"water","zh":"水","ja":"水","ru":"вода"}', 26
);

INSERT INTO public.jobs (id, name, icon, image_url, sort_order) VALUES (
  'automotivo', '{"en":"Automotive","es":"Automotriz","pt":"Automotivo","fr":"Automobile","de":"Automobil","it":"Automotive","nl":"Automotive","zh":"汽车","ja":"自動車","ru":"Автомобильная отрасль"}', '🔧', 'https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?auto=compress&cs=tinysrgb&w=800', 1
);

INSERT INTO public.sectors (id, job_id, name, icon, sort_order) VALUES (
  'car_washer', 'automotivo', '{"en":"Car Washer","es":"Lavador","pt":"Lavador de Carros","fr":"Laveur","de":"Autowäscher","it":"Lavacchine","nl":"Autowasser","zh":"洗车工","ja":"洗車員","ru":"Автомойщик"}', '🚗', 0
);
INSERT INTO public.roles (id, job_id, sector_id, name, icon, sort_order) VALUES (
  'tools', 'automotivo', 'car_washer', '{"en":"Tools","es":"Herramientas","pt":"Ferramentas","fr":"Outils","de":"Werkzeuge","it":"Attrezzi","nl":"Gereedschap","zh":"工具","ja":"道具","ru":"Инструменты"}', '🔧', 0
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'automotivo/car_washer/tools/blower', 'automotivo', 'car_washer', 'tools', 'automotivo/car_washer/tools/blower', NULL, '{"en":"blower","es":"sopladora","pt":"soprador","fr":"souffleur","de":"Gebläse","it":"soffiatore","nl":"blazer","zh":"鼓风机","ja":"ブロワー","ru":"воздуходувка"}', 0
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'automotivo/car_washer/tools/brush', 'automotivo', 'car_washer', 'tools', 'automotivo/car_washer/tools/brush', NULL, '{"en":"brush","es":"cepillo","pt":"escova","fr":"brosse","de":"Bürste","it":"spazzola","nl":"borstel","zh":"刷子","ja":"ブラシ","ru":"кисть"}', 2
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'automotivo/car_washer/tools/bucket', 'automotivo', 'car_washer', 'tools', 'automotivo/car_washer/tools/bucket', NULL, '{"en":"bucket","es":"cubo","pt":"balde","fr":"seau","de":"Eimer","it":"secchio","nl":"emmer","zh":"水桶","ja":"バケツ","ru":"ведро"}', 4
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'automotivo/car_washer/tools/cleaner_tool', 'automotivo', 'car_washer', 'tools', 'automotivo/car_washer/tools/cleaner_tool', NULL, '{"en":"cleaner tool","es":"cleaner tool","pt":"cleaner tool","fr":"cleaner tool","de":"cleaner tool","it":"cleaner tool","nl":"reinigingsgereedschap","zh":"清洁工具","ja":"洗浄ツール","ru":"инструмент для уборки"}', 6
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'automotivo/car_washer/tools/cloth', 'automotivo', 'car_washer', 'tools', 'automotivo/car_washer/tools/cloth', NULL, '{"en":"cloth","es":"trapo","pt":"pano","fr":"chiffon","de":"Tuch","it":"panno","nl":"doek","zh":"布","ja":"布","ru":"ткань"}', 8
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'automotivo/car_washer/tools/dryer', 'automotivo', 'car_washer', 'tools', 'automotivo/car_washer/tools/dryer', NULL, '{"en":"dryer","es":"dryer","pt":"dryer","fr":"dryer","de":"dryer","it":"dryer","nl":"droger","zh":"烘干机","ja":"乾燥機","ru":"сушилка"}', 10
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'automotivo/car_washer/tools/fan', 'automotivo', 'car_washer', 'tools', 'automotivo/car_washer/tools/fan', NULL, '{"en":"fan","es":"fan","pt":"fan","fr":"fan","de":"fan","it":"fan","nl":"ventilator","zh":"风扇","ja":"ファン","ru":"вентилятор"}', 12
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'automotivo/car_washer/tools/foam_gun', 'automotivo', 'car_washer', 'tools', 'automotivo/car_washer/tools/foam_gun', NULL, '{"en":"foam gun","es":"foam gun","pt":"foam gun","fr":"foam gun","de":"foam gun","it":"foam gun","nl":"schuimpistool","zh":"泡沫枪","ja":"フォームガン","ru":"пистолет для пены"}', 14
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'automotivo/car_washer/tools/gun', 'automotivo', 'car_washer', 'tools', 'automotivo/car_washer/tools/gun', NULL, '{"en":"spray gun","es":"pistola de spray","pt":"pistola de spray","fr":"pistolet","de":"Sprühpistole","it":"pistola spray","nl":"verfpistool","zh":"喷枪","ja":"スプレーガン","ru":"краскопульт"}', 16
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'automotivo/car_washer/tools/hose', 'automotivo', 'car_washer', 'tools', 'automotivo/car_washer/tools/hose', NULL, '{"en":"hose","es":"manguera","pt":"mangueira","fr":"tuyau","de":"Schlauch","it":"tubo","nl":"slang","zh":"软管","ja":"ホース","ru":"шланг"}', 18
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'automotivo/car_washer/tools/mop', 'automotivo', 'car_washer', 'tools', 'automotivo/car_washer/tools/mop', NULL, '{"en":"mop","es":"fregona","pt":"esfregão","fr":"serpillière","de":"Mop","it":"mop","nl":"zwabber","zh":"拖把","ja":"モップ","ru":"швабра"}', 20
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'automotivo/car_washer/tools/nozzle', 'automotivo', 'car_washer', 'tools', 'automotivo/car_washer/tools/nozzle', NULL, '{"en":"nozzle","es":"nozzle","pt":"nozzle","fr":"nozzle","de":"nozzle","it":"nozzle","nl":"sproeikop","zh":"喷嘴","ja":"ノズル","ru":"форсунка"}', 22
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'automotivo/car_washer/tools/pad', 'automotivo', 'car_washer', 'tools', 'automotivo/car_washer/tools/pad', NULL, '{"en":"pad","es":"pad","pt":"pad","fr":"pad","de":"pad","it":"pad","nl":"kussen","zh":"垫子","ja":"パッド","ru":"подушечка"}', 24
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'automotivo/car_washer/tools/pressure_washer', 'automotivo', 'car_washer', 'tools', 'automotivo/car_washer/tools/pressure_washer', NULL, '{"en":"pressure washer","es":"pressure washer","pt":"pressure washer","fr":"pressure washer","de":"pressure washer","it":"pressure washer","nl":"hogedrukreiniger","zh":"高压清洗机","ja":"高圧洗浄機","ru":"мойка высокого давления"}', 26
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'automotivo/car_washer/tools/roller', 'automotivo', 'car_washer', 'tools', 'automotivo/car_washer/tools/roller', NULL, '{"en":"roller","es":"rodillo","pt":"rolo","fr":"rouleau","de":"Rolle","it":"rullo","nl":"roller","zh":"滚筒","ja":"ローラー","ru":"валик"}', 28
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'automotivo/car_washer/tools/scrubber', 'automotivo', 'car_washer', 'tools', 'automotivo/car_washer/tools/scrubber', NULL, '{"en":"scrubber","es":"scrubber","pt":"scrubber","fr":"scrubber","de":"scrubber","it":"scrubber","nl":"schrobber","zh":"刷洗器","ja":"スクラバー","ru":"скруббер"}', 30
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'automotivo/car_washer/tools/sponge', 'automotivo', 'car_washer', 'tools', 'automotivo/car_washer/tools/sponge', NULL, '{"en":"sponge","es":"esponja","pt":"esponja","fr":"éponge","de":"Schwamm","it":"spugna","nl":"spons","zh":"海绵","ja":"スポンジ","ru":"губка"}', 32
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'automotivo/car_washer/tools/sprayer', 'automotivo', 'car_washer', 'tools', 'automotivo/car_washer/tools/sprayer', NULL, '{"en":"sprayer","es":"pulverizador","pt":"pulverizador","fr":"pulvérisateur","de":"Sprüher","it":"spruzzatore","nl":"sproeier","zh":"喷雾器","ja":"スプレイヤー","ru":"опрыскиватель"}', 34
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'automotivo/car_washer/tools/towel', 'automotivo', 'car_washer', 'tools', 'automotivo/car_washer/tools/towel', NULL, '{"en":"towel","es":"towel","pt":"towel","fr":"towel","de":"towel","it":"towel","nl":"handdoek","zh":"毛巾","ja":"タオル","ru":"полотенце"}', 36
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'automotivo/car_washer/tools/vacuum', 'automotivo', 'car_washer', 'tools', 'automotivo/car_washer/tools/vacuum', NULL, '{"en":"vacuum","es":"vacuum","pt":"vacuum","fr":"vacuum","de":"vacuum","it":"vacuum","nl":"stofzuiger","zh":"真空吸尘器","ja":"掃除機","ru":"пылесос"}', 38
);
INSERT INTO public.roles (id, job_id, sector_id, name, icon, sort_order) VALUES (
  'materials', 'automotivo', 'car_washer', '{"en":"Materials","es":"Materiales","pt":"Materiais","fr":"Matériaux","de":"Materialien","it":"Materiali","nl":"Materialen","zh":"材料","ja":"材料","ru":"Материалы"}', '📦', 1
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'automotivo/car_washer/materials/additive', 'automotivo', 'car_washer', 'materials', 'automotivo/car_washer/materials/additive', NULL, '{"en":"additive","es":"additive","pt":"additive","fr":"additive","de":"additive","it":"additive","nl":"additief","zh":"添加剂","ja":"添加剤","ru":"добавка"}', 0
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'automotivo/car_washer/materials/agent', 'automotivo', 'car_washer', 'materials', 'automotivo/car_washer/materials/agent', NULL, '{"en":"agent","es":"agent","pt":"agent","fr":"agent","de":"agent","it":"agent","nl":"middel","zh":"试剂","ja":"薬剤","ru":"агент"}', 2
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'automotivo/car_washer/materials/chemical', 'automotivo', 'car_washer', 'materials', 'automotivo/car_washer/materials/chemical', NULL, '{"en":"chemical","es":"chemical","pt":"chemical","fr":"chemical","de":"chemical","it":"chemical","nl":"chemicalie","zh":"化学品","ja":"化学物質","ru":"химическое вещество"}', 4
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'automotivo/car_washer/materials/cleaner', 'automotivo', 'car_washer', 'materials', 'automotivo/car_washer/materials/cleaner', NULL, '{"en":"cleaner","es":"cleaner","pt":"cleaner","fr":"cleaner","de":"cleaner","it":"cleaner","nl":"reiniger","zh":"清洁剂","ja":"洗浄剤","ru":"чистящее средство"}', 6
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'automotivo/car_washer/materials/coating', 'automotivo', 'car_washer', 'materials', 'automotivo/car_washer/materials/coating', NULL, '{"en":"coating","es":"coating","pt":"coating","fr":"coating","de":"coating","it":"coating","nl":"coating","zh":"涂层","ja":"コーティング","ru":"покрытие"}', 8
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'automotivo/car_washer/materials/compound', 'automotivo', 'car_washer', 'materials', 'automotivo/car_washer/materials/compound', NULL, '{"en":"compound","es":"compound","pt":"compound","fr":"compound","de":"compound","it":"compound","nl":"compound","zh":"化合物","ja":"コンパウンド","ru":"состав"}', 10
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'automotivo/car_washer/materials/conditioner', 'automotivo', 'car_washer', 'materials', 'automotivo/car_washer/materials/conditioner', NULL, '{"en":"conditioner","es":"conditioner","pt":"conditioner","fr":"conditioner","de":"conditioner","it":"conditioner","nl":"conditioner","zh":"护发素","ja":"コンディショナー","ru":"кондиционер"}', 12
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'automotivo/car_washer/materials/degreaser', 'automotivo', 'car_washer', 'materials', 'automotivo/car_washer/materials/degreaser', NULL, '{"en":"degreaser","es":"degreaser","pt":"degreaser","fr":"degreaser","de":"degreaser","it":"degreaser","nl":"ontvetter","zh":"脱脂剂","ja":"脱脂剤","ru":"обезжириватель"}', 14
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'automotivo/car_washer/materials/detergent', 'automotivo', 'car_washer', 'materials', 'automotivo/car_washer/materials/detergent', NULL, '{"en":"detergent","es":"detergente","pt":"detergente","fr":"détergent","de":"Reinigungsmittel","it":"detergente","nl":"wasmiddel","zh":"洗涤剂","ja":"洗剤","ru":"моющее средство"}', 16
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'automotivo/car_washer/materials/finish', 'automotivo', 'car_washer', 'materials', 'automotivo/car_washer/materials/finish', NULL, '{"en":"finish","es":"finish","pt":"finish","fr":"finish","de":"finish","it":"finish","nl":"afwerking","zh":"涂层","ja":"仕上げ","ru":"отделочное покрытие"}', 18
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'automotivo/car_washer/materials/fluid', 'automotivo', 'car_washer', 'materials', 'automotivo/car_washer/materials/fluid', NULL, '{"en":"fluid","es":"fluid","pt":"fluid","fr":"fluid","de":"fluid","it":"fluid","nl":"vloeistof","zh":"液体","ja":"液体","ru":"жидкость"}', 20
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'automotivo/car_washer/materials/foam', 'automotivo', 'car_washer', 'materials', 'automotivo/car_washer/materials/foam', NULL, '{"en":"foam","es":"foam","pt":"foam","fr":"foam","de":"foam","it":"foam","nl":"schuim","zh":"泡沫","ja":"フォーム","ru":"пена"}', 22
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'automotivo/car_washer/materials/foam_mix', 'automotivo', 'car_washer', 'materials', 'automotivo/car_washer/materials/foam_mix', NULL, '{"en":"foam mix","es":"foam mix","pt":"foam mix","fr":"foam mix","de":"foam mix","it":"foam mix","nl":"schuimmengsel","zh":"泡沫混合物","ja":"フォームミックス","ru":"пенная смесь"}', 24
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'automotivo/car_washer/materials/gel', 'automotivo', 'car_washer', 'materials', 'automotivo/car_washer/materials/gel', NULL, '{"en":"gel","es":"gel","pt":"gel","fr":"gel","de":"gel","it":"gel","nl":"gel","zh":"凝胶","ja":"ジェル","ru":"гель"}', 26
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'automotivo/car_washer/materials/liquid', 'automotivo', 'car_washer', 'materials', 'automotivo/car_washer/materials/liquid', NULL, '{"en":"liquid","es":"liquid","pt":"liquid","fr":"liquid","de":"liquid","it":"liquid","nl":"vloeistof","zh":"液体","ja":"液体","ru":"жидкость"}', 28
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'automotivo/car_washer/materials/mix', 'automotivo', 'car_washer', 'materials', 'automotivo/car_washer/materials/mix', NULL, '{"en":"mix","es":"mix","pt":"mix","fr":"mix","de":"mix","it":"mix","nl":"mengsel","zh":"混合物","ja":"ミックス","ru":"смесь"}', 30
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'automotivo/car_washer/materials/paste', 'automotivo', 'car_washer', 'materials', 'automotivo/car_washer/materials/paste', NULL, '{"en":"paste","es":"paste","pt":"paste","fr":"paste","de":"paste","it":"paste","nl":"pasta","zh":"糊","ja":"ペースト","ru":"паста"}', 32
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'automotivo/car_washer/materials/polish', 'automotivo', 'car_washer', 'materials', 'automotivo/car_washer/materials/polish', NULL, '{"en":"polish","es":"pulimento","pt":"polimento","fr":"polish","de":"Politur","it":"lucido","nl":"poetsmiddel","zh":"抛光剂","ja":"ポリッシュ","ru":"полироль"}', 34
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'automotivo/car_washer/materials/polish_mix', 'automotivo', 'car_washer', 'materials', 'automotivo/car_washer/materials/polish_mix', NULL, '{"en":"polish mix","es":"polish mix","pt":"polish mix","fr":"polish mix","de":"polish mix","it":"polish mix","nl":"poetsmengsel","zh":"抛光混合物","ja":"ポリッシュミックス","ru":"смесь для полировки"}', 36
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'automotivo/car_washer/materials/product', 'automotivo', 'car_washer', 'materials', 'automotivo/car_washer/materials/product', NULL, '{"en":"product","es":"product","pt":"product","fr":"product","de":"product","it":"product","nl":"product","zh":"产品","ja":"製品","ru":"продукт"}', 38
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'automotivo/car_washer/materials/remover', 'automotivo', 'car_washer', 'materials', 'automotivo/car_washer/materials/remover', NULL, '{"en":"remover","es":"remover","pt":"remover","fr":"remover","de":"remover","it":"remover","nl":"verwijderaar","zh":"去除剂","ja":"リムーバー","ru":"средство для удаления"}', 40
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'automotivo/car_washer/materials/shampoo', 'automotivo', 'car_washer', 'materials', 'automotivo/car_washer/materials/shampoo', NULL, '{"en":"shampoo","es":"shampoo","pt":"shampoo","fr":"shampoo","de":"shampoo","it":"shampoo","nl":"shampoo","zh":"洗发水","ja":"シャンプー","ru":"шампунь"}', 42
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'automotivo/car_washer/materials/shine', 'automotivo', 'car_washer', 'materials', 'automotivo/car_washer/materials/shine', NULL, '{"en":"shine","es":"shine","pt":"shine","fr":"shine","de":"shine","it":"shine","nl":"glans","zh":"光泽","ja":"シャイン","ru":"блеск"}', 44
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'automotivo/car_washer/materials/soap', 'automotivo', 'car_washer', 'materials', 'automotivo/car_washer/materials/soap', NULL, '{"en":"soap","es":"jabón","pt":"sabão","fr":"savon","de":"Seife","it":"sapone","nl":"zeep","zh":"肥皂","ja":"石鹸","ru":"мыло"}', 46
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'automotivo/car_washer/materials/solution', 'automotivo', 'car_washer', 'materials', 'automotivo/car_washer/materials/solution', NULL, '{"en":"solution","es":"solution","pt":"solution","fr":"solution","de":"solution","it":"solution","nl":"oplossing","zh":"溶液","ja":"溶液","ru":"раствор"}', 48
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'automotivo/car_washer/materials/spray', 'automotivo', 'car_washer', 'materials', 'automotivo/car_washer/materials/spray', NULL, '{"en":"spray","es":"spray","pt":"spray","fr":"spray","de":"Spray","it":"spray","nl":"spray","zh":"喷雾","ja":"スプレー","ru":"спрей"}', 50
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'automotivo/car_washer/materials/treatment', 'automotivo', 'car_washer', 'materials', 'automotivo/car_washer/materials/treatment', NULL, '{"en":"treatment","es":"treatment","pt":"treatment","fr":"treatment","de":"treatment","it":"treatment","nl":"behandeling","zh":"处理剂","ja":"トリートメント","ru":"обработка"}', 52
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'automotivo/car_washer/materials/wash_mix', 'automotivo', 'car_washer', 'materials', 'automotivo/car_washer/materials/wash_mix', NULL, '{"en":"wash mix","es":"wash mix","pt":"wash mix","fr":"wash mix","de":"wash mix","it":"wash mix","nl":"wasmengsel","zh":"洗涤混合物","ja":"洗浄ミックス","ru":"моющий раствор"}', 54
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'automotivo/car_washer/materials/water', 'automotivo', 'car_washer', 'materials', 'automotivo/car_washer/materials/water', NULL, '{"en":"water","es":"agua","pt":"água","fr":"eau","de":"Wasser","it":"acqua","nl":"water","zh":"水","ja":"水","ru":"вода"}', 56
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'automotivo/car_washer/materials/wax', 'automotivo', 'car_washer', 'materials', 'automotivo/car_washer/materials/wax', NULL, '{"en":"wax","es":"cera","pt":"cera","fr":"cire","de":"Wachs","it":"cera","nl":"was","zh":"蜡","ja":"ワックス","ru":"воск"}', 58
);

INSERT INTO public.sectors (id, job_id, name, icon, sort_order) VALUES (
  'mechanic', 'automotivo', '{"en":"Mechanic","es":"Mecánico","pt":"Mecânico","fr":"Mécanicien","de":"Mechaniker","it":"Meccanico","nl":"Monteur","zh":"机械师","ja":"整備士","ru":"Механик"}', '🔧', 1
);
INSERT INTO public.roles (id, job_id, sector_id, name, icon, sort_order) VALUES (
  'machinery_equipment', 'automotivo', 'mechanic', '{"en":"Machinery","es":"Maquinaria","pt":"Maquinário","fr":"Machines","de":"Maschinen","it":"Macchinari","nl":"Machines","zh":"机械","ja":"機械","ru":"Машины"}', '⚙️', 0
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'automotivo/mechanic/machinery_equipment/tools/battery', 'automotivo', 'mechanic', 'machinery_equipment', 'automotivo/mechanic/machinery_equipment/tools/battery', NULL, '{"en":"battery","es":"battery","pt":"battery","fr":"battery","de":"battery","it":"battery","nl":"batterij","zh":"电池","ja":"バッテリー","ru":"батарея"}', 0
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'automotivo/mechanic/machinery_equipment/tools/boots', 'automotivo', 'mechanic', 'machinery_equipment', 'automotivo/mechanic/machinery_equipment/tools/boots', NULL, '{"en":"boots","es":"botas","pt":"botas","fr":"bottes","de":"Stiefel","it":"stivali","nl":"laarzen","zh":"靴子","ja":"ブーツ","ru":"ботинки"}', 2
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'automotivo/mechanic/machinery_equipment/tools/brake', 'automotivo', 'mechanic', 'machinery_equipment', 'automotivo/mechanic/machinery_equipment/tools/brake', NULL, '{"en":"brake","es":"brake","pt":"brake","fr":"brake","de":"brake","it":"brake","nl":"rem","zh":"刹车","ja":"ブレーキ","ru":"тормоз"}', 4
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'automotivo/mechanic/machinery_equipment/tools/cabin', 'automotivo', 'mechanic', 'machinery_equipment', 'automotivo/mechanic/machinery_equipment/tools/cabin', NULL, '{"en":"cabin","es":"cabin","pt":"cabin","fr":"cabin","de":"cabin","it":"cabin","nl":"cabine","zh":"驾驶室","ja":"キャビン","ru":"кабина"}', 6
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'automotivo/mechanic/machinery_equipment/tools/chain', 'automotivo', 'mechanic', 'machinery_equipment', 'automotivo/mechanic/machinery_equipment/tools/chain', NULL, '{"en":"chain","es":"cadena","pt":"corrente","fr":"chaîne","de":"Kette","it":"catena","nl":"ketting","zh":"链条","ja":"チェーン","ru":"цепь"}', 8
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'automotivo/mechanic/machinery_equipment/tools/cloth', 'automotivo', 'mechanic', 'machinery_equipment', 'automotivo/mechanic/machinery_equipment/tools/cloth', NULL, '{"en":"cloth","es":"trapo","pt":"pano","fr":"chiffon","de":"Tuch","it":"panno","nl":"doek","zh":"布","ja":"布","ru":"ткань"}', 10
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'automotivo/mechanic/machinery_equipment/tools/compressor', 'automotivo', 'mechanic', 'machinery_equipment', 'automotivo/mechanic/machinery_equipment/tools/compressor', NULL, '{"en":"compressor","es":"compressor","pt":"compressor","fr":"compressor","de":"compressor","it":"compressor","nl":"compressor","zh":"压缩机","ja":"コンプレッサー","ru":"компрессор"}', 12
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'automotivo/mechanic/machinery_equipment/tools/cooling_system', 'automotivo', 'mechanic', 'machinery_equipment', 'automotivo/mechanic/machinery_equipment/tools/cooling_system', NULL, '{"en":"cooling system","es":"cooling system","pt":"cooling system","fr":"cooling system","de":"cooling system","it":"cooling system","nl":"koelsysteem","zh":"冷却系统","ja":"冷却システム","ru":"система охлаждения"}', 14
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'automotivo/mechanic/machinery_equipment/tools/coupling', 'automotivo', 'mechanic', 'machinery_equipment', 'automotivo/mechanic/machinery_equipment/tools/coupling', NULL, '{"en":"coupling","es":"coupling","pt":"coupling","fr":"coupling","de":"coupling","it":"coupling","nl":"koppeling","zh":"联轴器","ja":"カップリング","ru":"муфта"}', 16
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'automotivo/mechanic/machinery_equipment/tools/engine', 'automotivo', 'mechanic', 'machinery_equipment', 'automotivo/mechanic/machinery_equipment/tools/engine', NULL, '{"en":"engine","es":"engine","pt":"engine","fr":"engine","de":"engine","it":"engine","nl":"motor","zh":"发动机","ja":"エンジン","ru":"двигатель"}', 18
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'automotivo/mechanic/machinery_equipment/tools/filter', 'automotivo', 'mechanic', 'machinery_equipment', 'automotivo/mechanic/machinery_equipment/tools/filter', NULL, '{"en":"filter","es":"filtro","pt":"filtro","fr":"filtre","de":"Filter","it":"filtro","nl":"filter","zh":"过滤器","ja":"フィルター","ru":"фильтр"}', 20
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'automotivo/mechanic/machinery_equipment/tools/gauge', 'automotivo', 'mechanic', 'machinery_equipment', 'automotivo/mechanic/machinery_equipment/tools/gauge', NULL, '{"en":"gauge","es":"medidor","pt":"medidor","fr":"jauge","de":"Messgerät","it":"calibro","nl":"meter","zh":"仪表","ja":"ゲージ","ru":"манометр"}', 22
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'automotivo/mechanic/machinery_equipment/tools/gear', 'automotivo', 'mechanic', 'machinery_equipment', 'automotivo/mechanic/machinery_equipment/tools/gear', NULL, '{"en":"gear","es":"gear","pt":"gear","fr":"gear","de":"gear","it":"gear","nl":"tandwiel","zh":"齿轮","ja":"ギア","ru":"шестерня"}', 24
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'automotivo/mechanic/machinery_equipment/tools/gloves', 'automotivo', 'mechanic', 'machinery_equipment', 'automotivo/mechanic/machinery_equipment/tools/gloves', NULL, '{"en":"gloves","es":"guantes","pt":"luvas","fr":"gants","de":"Handschuhe","it":"guanti","nl":"handschoenen","zh":"手套","ja":"手袋","ru":"перчатки"}', 26
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'automotivo/mechanic/machinery_equipment/tools/gps', 'automotivo', 'mechanic', 'machinery_equipment', 'automotivo/mechanic/machinery_equipment/tools/gps', NULL, '{"en":"gps","es":"gps","pt":"gps","fr":"gps","de":"gps","it":"gps","nl":"gps","zh":"GPS导航","ja":"GPS","ru":"GPS навигатор"}', 28
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'automotivo/mechanic/machinery_equipment/tools/grease_gun', 'automotivo', 'mechanic', 'machinery_equipment', 'automotivo/mechanic/machinery_equipment/tools/grease_gun', NULL, '{"en":"grease gun","es":"grease gun","pt":"grease gun","fr":"grease gun","de":"grease gun","it":"grease gun","nl":"vetspuit","zh":"黄油枪","ja":"グリースガン","ru":"шприц-пресс"}', 30
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'automotivo/mechanic/machinery_equipment/tools/hammer', 'automotivo', 'mechanic', 'machinery_equipment', 'automotivo/mechanic/machinery_equipment/tools/hammer', NULL, '{"en":"hammer","es":"martillo","pt":"martelo","fr":"marteau","de":"Hammer","it":"martello","nl":"hamer","zh":"锤子","ja":"ハンマー","ru":"молоток"}', 32
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'automotivo/mechanic/machinery_equipment/tools/harvester', 'automotivo', 'mechanic', 'machinery_equipment', 'automotivo/mechanic/machinery_equipment/tools/harvester', NULL, '{"en":"harvester","es":"harvester","pt":"harvester","fr":"harvester","de":"harvester","it":"harvester","nl":"oogstmachine","zh":"收割机","ja":"ハーベスター","ru":"комбайн"}', 34
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'automotivo/mechanic/machinery_equipment/tools/helmet', 'automotivo', 'mechanic', 'machinery_equipment', 'automotivo/mechanic/machinery_equipment/tools/helmet', NULL, '{"en":"helmet","es":"casco","pt":"capacete","fr":"casque","de":"Helm","it":"casco","nl":"helm","zh":"安全帽","ja":"ヘルメット","ru":"каска"}', 36
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'automotivo/mechanic/machinery_equipment/tools/hitch', 'automotivo', 'mechanic', 'machinery_equipment', 'automotivo/mechanic/machinery_equipment/tools/hitch', NULL, '{"en":"hitch","es":"hitch","pt":"hitch","fr":"hitch","de":"hitch","it":"hitch","nl":"trekhaak","zh":"挂钩","ja":"ヒッチ","ru":"сцепное устройство"}', 38
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'automotivo/mechanic/machinery_equipment/tools/hose', 'automotivo', 'mechanic', 'machinery_equipment', 'automotivo/mechanic/machinery_equipment/tools/hose', NULL, '{"en":"hose","es":"manguera","pt":"mangueira","fr":"tuyau","de":"Schlauch","it":"tubo","nl":"slang","zh":"软管","ja":"ホース","ru":"шланг"}', 40
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'automotivo/mechanic/machinery_equipment/tools/hydraulic', 'automotivo', 'mechanic', 'machinery_equipment', 'automotivo/mechanic/machinery_equipment/tools/hydraulic', NULL, '{"en":"hydraulic","es":"hydraulic","pt":"hydraulic","fr":"hydraulic","de":"hydraulic","it":"hydraulic","nl":"hydraulisch","zh":"液压","ja":"油圧","ru":"гидравлика"}', 42
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'automotivo/mechanic/machinery_equipment/tools/jack', 'automotivo', 'mechanic', 'machinery_equipment', 'automotivo/mechanic/machinery_equipment/tools/jack', NULL, '{"en":"jack","es":"jack","pt":"jack","fr":"jack","de":"jack","it":"jack","nl":"krik","zh":"千斤顶","ja":"ジャッキ","ru":"домкрат"}', 44
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'automotivo/mechanic/machinery_equipment/tools/key', 'automotivo', 'mechanic', 'machinery_equipment', 'automotivo/mechanic/machinery_equipment/tools/key', NULL, '{"en":"key","es":"key","pt":"key","fr":"key","de":"key","it":"key","nl":"sleutel","zh":"钥匙","ja":"鍵","ru":"ключ"}', 46
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'automotivo/mechanic/machinery_equipment/tools/kit', 'automotivo', 'mechanic', 'machinery_equipment', 'automotivo/mechanic/machinery_equipment/tools/kit', NULL, '{"en":"kit","es":"kit","pt":"kit","fr":"kit","de":"kit","it":"kit","nl":"kit","zh":"套件","ja":"キット","ru":"набор"}', 48
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'automotivo/mechanic/machinery_equipment/tools/lever', 'automotivo', 'mechanic', 'machinery_equipment', 'automotivo/mechanic/machinery_equipment/tools/lever', NULL, '{"en":"lever","es":"lever","pt":"lever","fr":"lever","de":"lever","it":"lever","nl":"hefboom","zh":"杠杆","ja":"レバー","ru":"рычаг"}', 50
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'automotivo/mechanic/machinery_equipment/tools/light', 'automotivo', 'mechanic', 'machinery_equipment', 'automotivo/mechanic/machinery_equipment/tools/light', NULL, '{"en":"light","es":"light","pt":"light","fr":"light","de":"light","it":"light","nl":"lamp","zh":"灯光","ja":"ライト","ru":"свет"}', 52
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'automotivo/mechanic/machinery_equipment/tools/mirror', 'automotivo', 'mechanic', 'machinery_equipment', 'automotivo/mechanic/machinery_equipment/tools/mirror', NULL, '{"en":"mirror","es":"mirror","pt":"mirror","fr":"mirror","de":"mirror","it":"mirror","nl":"spiegel","zh":"镜子","ja":"鏡","ru":"зеркало"}', 54
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'automotivo/mechanic/machinery_equipment/tools/monitor', 'automotivo', 'mechanic', 'machinery_equipment', 'automotivo/mechanic/machinery_equipment/tools/monitor', NULL, '{"en":"monitor","es":"monitor","pt":"monitor","fr":"monitor","de":"monitor","it":"monitor","nl":"monitor","zh":"显示器","ja":"モニター","ru":"монитор"}', 56
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'automotivo/mechanic/machinery_equipment/tools/panel', 'automotivo', 'mechanic', 'machinery_equipment', 'automotivo/mechanic/machinery_equipment/tools/panel', NULL, '{"en":"panel","es":"panel","pt":"panel","fr":"panel","de":"panel","it":"panel","nl":"paneel","zh":"面板","ja":"パネル","ru":"панель"}', 58
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'automotivo/mechanic/machinery_equipment/tools/plow', 'automotivo', 'mechanic', 'machinery_equipment', 'automotivo/mechanic/machinery_equipment/tools/plow', NULL, '{"en":"plow","es":"plow","pt":"plow","fr":"plow","de":"plow","it":"plow","nl":"ploeg","zh":"犁","ja":"鋤","ru":"плуг"}', 60
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'automotivo/mechanic/machinery_equipment/tools/pump', 'automotivo', 'mechanic', 'machinery_equipment', 'automotivo/mechanic/machinery_equipment/tools/pump', NULL, '{"en":"pump","es":"bomba","pt":"bomba","fr":"pompe","de":"Pumpe","it":"pompa","nl":"pomp","zh":"泵","ja":"ポンプ","ru":"насос"}', 62
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'automotivo/mechanic/machinery_equipment/tools/radiator', 'automotivo', 'mechanic', 'machinery_equipment', 'automotivo/mechanic/machinery_equipment/tools/radiator', NULL, '{"en":"radiator","es":"radiator","pt":"radiator","fr":"radiator","de":"radiator","it":"radiator","nl":"radiator","zh":"散热器","ja":"ラジエーター","ru":"радиатор"}', 64
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'automotivo/mechanic/machinery_equipment/tools/screen', 'automotivo', 'mechanic', 'machinery_equipment', 'automotivo/mechanic/machinery_equipment/tools/screen', NULL, '{"en":"screen","es":"screen","pt":"screen","fr":"screen","de":"screen","it":"screen","nl":"scherm","zh":"屏幕","ja":"スクリーン","ru":"экран"}', 66
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'automotivo/mechanic/machinery_equipment/tools/screwdriver', 'automotivo', 'mechanic', 'machinery_equipment', 'automotivo/mechanic/machinery_equipment/tools/screwdriver', NULL, '{"en":"screwdriver","es":"screwdriver","pt":"screwdriver","fr":"screwdriver","de":"screwdriver","it":"screwdriver","nl":"schroevendraaier","zh":"螺丝刀","ja":"ドライバー","ru":"отвертка"}', 68
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'automotivo/mechanic/machinery_equipment/tools/seatbelt', 'automotivo', 'mechanic', 'machinery_equipment', 'automotivo/mechanic/machinery_equipment/tools/seatbelt', NULL, '{"en":"seatbelt","es":"seatbelt","pt":"seatbelt","fr":"seatbelt","de":"seatbelt","it":"seatbelt","nl":"veiligheidsgordel","zh":"安全带","ja":"シートベルト","ru":"ремень безопасности"}', 70
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'automotivo/mechanic/machinery_equipment/tools/seeder', 'automotivo', 'mechanic', 'machinery_equipment', 'automotivo/mechanic/machinery_equipment/tools/seeder', NULL, '{"en":"seeder","es":"seeder","pt":"seeder","fr":"seeder","de":"seeder","it":"seeder","nl":"zaaimachine","zh":"播种机","ja":"シーダー","ru":"сеялка"}', 72
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'automotivo/mechanic/machinery_equipment/tools/starter', 'automotivo', 'mechanic', 'machinery_equipment', 'automotivo/mechanic/machinery_equipment/tools/starter', NULL, '{"en":"starter","es":"starter","pt":"starter","fr":"starter","de":"starter","it":"starter","nl":"starter","zh":"起动机","ja":"スターター","ru":"стартер"}', 74
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'automotivo/mechanic/machinery_equipment/tools/switch', 'automotivo', 'mechanic', 'machinery_equipment', 'automotivo/mechanic/machinery_equipment/tools/switch', NULL, '{"en":"switch","es":"switch","pt":"switch","fr":"switch","de":"switch","it":"switch","nl":"schakelaar","zh":"开关","ja":"スイッチ","ru":"выключатель"}', 76
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'automotivo/mechanic/machinery_equipment/tools/tire', 'automotivo', 'mechanic', 'machinery_equipment', 'automotivo/mechanic/machinery_equipment/tools/tire', NULL, '{"en":"tire","es":"tire","pt":"tire","fr":"tire","de":"tire","it":"tire","nl":"band","zh":"轮胎","ja":"タイヤ","ru":"шина"}', 78
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'automotivo/mechanic/machinery_equipment/tools/toolbox', 'automotivo', 'mechanic', 'machinery_equipment', 'automotivo/mechanic/machinery_equipment/tools/toolbox', NULL, '{"en":"toolbox","es":"toolbox","pt":"toolbox","fr":"toolbox","de":"toolbox","it":"toolbox","nl":"gereedschapskist","zh":"工具箱","ja":"ツールボックス","ru":"ящик для инструментов"}', 80
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'automotivo/mechanic/machinery_equipment/tools/tractor', 'automotivo', 'mechanic', 'machinery_equipment', 'automotivo/mechanic/machinery_equipment/tools/tractor', NULL, '{"en":"tractor","es":"tractor","pt":"tractor","fr":"tractor","de":"tractor","it":"tractor","nl":"tractor","zh":"拖拉机","ja":"トラクター","ru":"трактор"}', 82
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'automotivo/mechanic/machinery_equipment/tools/trailer', 'automotivo', 'mechanic', 'machinery_equipment', 'automotivo/mechanic/machinery_equipment/tools/trailer', NULL, '{"en":"trailer","es":"trailer","pt":"trailer","fr":"trailer","de":"trailer","it":"trailer","nl":"aanhanger","zh":"拖车","ja":"トレーラー","ru":"прицеп"}', 84
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'automotivo/mechanic/machinery_equipment/tools/vest', 'automotivo', 'mechanic', 'machinery_equipment', 'automotivo/mechanic/machinery_equipment/tools/vest', NULL, '{"en":"vest","es":"chaleco","pt":"colete","fr":"gilet","de":"Weste","it":"gilet","nl":"vest","zh":"背心","ja":"ベスト","ru":"жилет"}', 86
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'automotivo/mechanic/machinery_equipment/tools/wheel', 'automotivo', 'mechanic', 'machinery_equipment', 'automotivo/mechanic/machinery_equipment/tools/wheel', NULL, '{"en":"wheel","es":"wheel","pt":"wheel","fr":"wheel","de":"wheel","it":"wheel","nl":"wiel","zh":"车轮","ja":"ホイール","ru":"колесо"}', 88
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'automotivo/mechanic/machinery_equipment/tools/wrench', 'automotivo', 'mechanic', 'machinery_equipment', 'automotivo/mechanic/machinery_equipment/tools/wrench', NULL, '{"en":"wrench","es":"llave","pt":"chave inglesa","fr":"clé","de":"Schraubenschlüssel","it":"chiave","nl":"moersleutel","zh":"扳手","ja":"レンチ","ru":"гаечный ключ"}', 90
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'automotivo/mechanic/machinery_equipment/materials/coolant', 'automotivo', 'mechanic', 'machinery_equipment', 'automotivo/mechanic/machinery_equipment/materials/coolant', NULL, '{"en":"coolant","es":"coolant","pt":"coolant","fr":"coolant","de":"coolant","it":"coolant","nl":"koelvloeistof","zh":"冷却液","ja":"冷却液","ru":"охлаждающая жидкость"}', 92
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'automotivo/mechanic/machinery_equipment/materials/filters', 'automotivo', 'mechanic', 'machinery_equipment', 'automotivo/mechanic/machinery_equipment/materials/filters', NULL, '{"en":"filters","es":"filters","pt":"filters","fr":"filters","de":"filters","it":"filters","nl":"filters","zh":"过滤器","ja":"フィルター","ru":"фильтры"}', 94
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'automotivo/mechanic/machinery_equipment/materials/fuel', 'automotivo', 'mechanic', 'machinery_equipment', 'automotivo/mechanic/machinery_equipment/materials/fuel', NULL, '{"en":"fuel","es":"fuel","pt":"fuel","fr":"fuel","de":"fuel","it":"fuel","nl":"brandstof","zh":"燃料","ja":"燃料","ru":"топливо"}', 96
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'automotivo/mechanic/machinery_equipment/materials/grease', 'automotivo', 'mechanic', 'machinery_equipment', 'automotivo/mechanic/machinery_equipment/materials/grease', NULL, '{"en":"grease","es":"grease","pt":"grease","fr":"grease","de":"grease","it":"grease","nl":"vet","zh":"润滑脂","ja":"グリース","ru":"смазка"}', 98
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'automotivo/mechanic/machinery_equipment/materials/oil', 'automotivo', 'mechanic', 'machinery_equipment', 'automotivo/mechanic/machinery_equipment/materials/oil', NULL, '{"en":"oil","es":"oil","pt":"oil","fr":"oil","de":"oil","it":"oil","nl":"olie","zh":"油","ja":"オイル","ru":"масло"}', 100
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'automotivo/mechanic/machinery_equipment/materials/replacement_parts', 'automotivo', 'mechanic', 'machinery_equipment', 'automotivo/mechanic/machinery_equipment/materials/replacement_parts', NULL, '{"en":"replacement parts","es":"replacement parts","pt":"replacement parts","fr":"replacement parts","de":"replacement parts","it":"replacement parts","nl":"reserveonderdelen","zh":"备件","ja":"交換部品","ru":"запасные части"}', 102
);
INSERT INTO public.roles (id, job_id, sector_id, name, icon, sort_order) VALUES (
  'mechanic', 'automotivo', 'mechanic', '{"en":"Mechanic Tools","es":"Herramientas Mecánicas","pt":"Ferramentas Mecânicas","fr":"Outils Mécanicien","de":"Mechaniker Werkzeug","it":"Attrezzi Meccanico","nl":"Gereedschap monteur","zh":"机械师工具","ja":"整備士工具","ru":"Инструменты механика"}', '🔩', 1
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'automotivo/mechanic/mechanic/tools/bar', 'automotivo', 'mechanic', 'mechanic', 'automotivo/mechanic/mechanic/tools/bar', NULL, '{"en":"bar","es":"bar","pt":"bar","fr":"bar","de":"bar","it":"bar","nl":"bar","zh":"酒吧","ja":"バー","ru":"бар"}', 0
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'automotivo/mechanic/mechanic/tools/clamp', 'automotivo', 'mechanic', 'mechanic', 'automotivo/mechanic/mechanic/tools/clamp', NULL, '{"en":"clamp","es":"clamp","pt":"clamp","fr":"clamp","de":"clamp","it":"clamp","nl":"klem","zh":"夹具","ja":"クランプ","ru":"зажим"}', 2
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'automotivo/mechanic/mechanic/tools/compressor', 'automotivo', 'mechanic', 'mechanic', 'automotivo/mechanic/mechanic/tools/compressor', NULL, '{"en":"compressor","es":"compressor","pt":"compressor","fr":"compressor","de":"compressor","it":"compressor","nl":"compressor","zh":"压缩机","ja":"コンプレッサー","ru":"компрессор"}', 4
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'automotivo/mechanic/mechanic/tools/cutter', 'automotivo', 'mechanic', 'mechanic', 'automotivo/mechanic/mechanic/tools/cutter', NULL, '{"en":"cutter","es":"cortador","pt":"cortador","fr":"cutter","de":"Cutter","it":"taglierino","nl":"snijder","zh":"切割机","ja":"カッター","ru":"резак"}', 6
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'automotivo/mechanic/mechanic/tools/diagnostic_tool', 'automotivo', 'mechanic', 'mechanic', 'automotivo/mechanic/mechanic/tools/diagnostic_tool', NULL, '{"en":"diagnostic tool","es":"diagnostic tool","pt":"diagnostic tool","fr":"diagnostic tool","de":"diagnostic tool","it":"diagnostic tool","nl":"diagnostisch gereedschap","zh":"诊断工具","ja":"診断ツール","ru":"диагностический инструмент"}', 8
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'automotivo/mechanic/mechanic/tools/drill', 'automotivo', 'mechanic', 'mechanic', 'automotivo/mechanic/mechanic/tools/drill', NULL, '{"en":"drill","es":"taladro","pt":"furadeira","fr":"perceuse","de":"Bohrmaschine","it":"trapano","nl":"boor","zh":"钻头","ja":"ドリル","ru":"дрель"}', 10
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'automotivo/mechanic/mechanic/tools/gun', 'automotivo', 'mechanic', 'mechanic', 'automotivo/mechanic/mechanic/tools/gun', NULL, '{"en":"spray gun","es":"pistola de spray","pt":"pistola de spray","fr":"pistolet","de":"Sprühpistole","it":"pistola spray","nl":"verfpistool","zh":"喷枪","ja":"スプレーガン","ru":"краскопульт"}', 12
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'automotivo/mechanic/mechanic/tools/hammer', 'automotivo', 'mechanic', 'mechanic', 'automotivo/mechanic/mechanic/tools/hammer', NULL, '{"en":"hammer","es":"martillo","pt":"martelo","fr":"marteau","de":"Hammer","it":"martello","nl":"hamer","zh":"锤子","ja":"ハンマー","ru":"молоток"}', 14
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'automotivo/mechanic/mechanic/tools/hook', 'automotivo', 'mechanic', 'mechanic', 'automotivo/mechanic/mechanic/tools/hook', NULL, '{"en":"hook","es":"gancho","pt":"gancho","fr":"crochet","de":"Haken","it":"gancio","nl":"haak","zh":"挂钩","ja":"フック","ru":"крюк"}', 16
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'automotivo/mechanic/mechanic/tools/impact_wrench', 'automotivo', 'mechanic', 'mechanic', 'automotivo/mechanic/mechanic/tools/impact_wrench', NULL, '{"en":"impact wrench","es":"impact wrench","pt":"impact wrench","fr":"impact wrench","de":"impact wrench","it":"impact wrench","nl":"slagmoersleutel","zh":"冲击扳手","ja":"インパクトレンチ","ru":"ударный гайковерт"}', 18
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'automotivo/mechanic/mechanic/tools/jack', 'automotivo', 'mechanic', 'mechanic', 'automotivo/mechanic/mechanic/tools/jack', NULL, '{"en":"jack","es":"jack","pt":"jack","fr":"jack","de":"jack","it":"jack","nl":"krik","zh":"千斤顶","ja":"ジャッキ","ru":"домкрат"}', 20
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'automotivo/mechanic/mechanic/tools/lift', 'automotivo', 'mechanic', 'mechanic', 'automotivo/mechanic/mechanic/tools/lift', NULL, '{"en":"lift","es":"lift","pt":"lift","fr":"lift","de":"lift","it":"lift","nl":"lift","zh":"升降机","ja":"リフト","ru":"подъемник"}', 22
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'automotivo/mechanic/mechanic/tools/pliers', 'automotivo', 'mechanic', 'mechanic', 'automotivo/mechanic/mechanic/tools/pliers', NULL, '{"en":"pliers","es":"alicates","pt":"alicate","fr":"pinces","de":"Zange","it":"pinze","nl":"tang","zh":"钳子","ja":"プライヤー","ru":"плоскогубцы"}', 24
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'automotivo/mechanic/mechanic/tools/pump', 'automotivo', 'mechanic', 'mechanic', 'automotivo/mechanic/mechanic/tools/pump', NULL, '{"en":"pump","es":"bomba","pt":"bomba","fr":"pompe","de":"Pumpe","it":"pompa","nl":"pomp","zh":"泵","ja":"ポンプ","ru":"насос"}', 26
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'automotivo/mechanic/mechanic/tools/ratchet', 'automotivo', 'mechanic', 'mechanic', 'automotivo/mechanic/mechanic/tools/ratchet', NULL, '{"en":"ratchet","es":"ratchet","pt":"ratchet","fr":"ratchet","de":"ratchet","it":"ratchet","nl":"ratelsleutel","zh":"棘轮扳手","ja":"ラチェット","ru":"трещотка"}', 28
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'automotivo/mechanic/mechanic/tools/scanner', 'automotivo', 'mechanic', 'mechanic', 'automotivo/mechanic/mechanic/tools/scanner', NULL, '{"en":"scanner","es":"escáner","pt":"scanner","fr":"scanner","de":"Scanner","it":"scanner","nl":"scanner","zh":"扫描仪","ja":"スキャナー","ru":"сканер"}', 30
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'automotivo/mechanic/mechanic/tools/screwdriver', 'automotivo', 'mechanic', 'mechanic', 'automotivo/mechanic/mechanic/tools/screwdriver', NULL, '{"en":"screwdriver","es":"screwdriver","pt":"screwdriver","fr":"screwdriver","de":"screwdriver","it":"screwdriver","nl":"schroevendraaier","zh":"螺丝刀","ja":"ドライバー","ru":"отвертка"}', 32
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'automotivo/mechanic/mechanic/tools/socket_set', 'automotivo', 'mechanic', 'mechanic', 'automotivo/mechanic/mechanic/tools/socket_set', NULL, '{"en":"socket set","es":"socket set","pt":"socket set","fr":"socket set","de":"socket set","it":"socket set","nl":"doppenset","zh":"套筒扳手组","ja":"ソケットセット","ru":"набор головок"}', 34
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'automotivo/mechanic/mechanic/tools/tester', 'automotivo', 'mechanic', 'mechanic', 'automotivo/mechanic/mechanic/tools/tester', NULL, '{"en":"tester","es":"tester","pt":"tester","fr":"tester","de":"tester","it":"tester","nl":"tester","zh":"测试仪","ja":"テスター","ru":"тестер"}', 36
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'automotivo/mechanic/mechanic/tools/wrench', 'automotivo', 'mechanic', 'mechanic', 'automotivo/mechanic/mechanic/tools/wrench', NULL, '{"en":"wrench","es":"llave","pt":"chave inglesa","fr":"clé","de":"Schraubenschlüssel","it":"chiave","nl":"moersleutel","zh":"扳手","ja":"レンチ","ru":"гаечный ключ"}', 38
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'automotivo/mechanic/mechanic/materials/additive', 'automotivo', 'mechanic', 'mechanic', 'automotivo/mechanic/mechanic/materials/additive', NULL, '{"en":"additive","es":"additive","pt":"additive","fr":"additive","de":"additive","it":"additive","nl":"additief","zh":"添加剂","ja":"添加剤","ru":"добавка"}', 40
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'automotivo/mechanic/mechanic/materials/additive_mix', 'automotivo', 'mechanic', 'mechanic', 'automotivo/mechanic/mechanic/materials/additive_mix', NULL, '{"en":"additive mix","es":"additive mix","pt":"additive mix","fr":"additive mix","de":"additive mix","it":"additive mix","nl":"additivenmix","zh":"添加剂混合物","ja":"添加剤ミックス","ru":"смесь добавок"}', 42
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'automotivo/mechanic/mechanic/materials/agent', 'automotivo', 'mechanic', 'mechanic', 'automotivo/mechanic/mechanic/materials/agent', NULL, '{"en":"agent","es":"agent","pt":"agent","fr":"agent","de":"agent","it":"agent","nl":"middel","zh":"试剂","ja":"薬剤","ru":"агент"}', 44
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'automotivo/mechanic/mechanic/materials/brake_fluid', 'automotivo', 'mechanic', 'mechanic', 'automotivo/mechanic/mechanic/materials/brake_fluid', NULL, '{"en":"brake fluid","es":"brake fluid","pt":"brake fluid","fr":"brake fluid","de":"brake fluid","it":"brake fluid","nl":"remvloeistof","zh":"刹车油","ja":"ブレーキフルード","ru":"тормозная жидкость"}', 46
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'automotivo/mechanic/mechanic/materials/chemical', 'automotivo', 'mechanic', 'mechanic', 'automotivo/mechanic/mechanic/materials/chemical', NULL, '{"en":"chemical","es":"chemical","pt":"chemical","fr":"chemical","de":"chemical","it":"chemical","nl":"chemicalie","zh":"化学品","ja":"化学物質","ru":"химическое вещество"}', 48
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'automotivo/mechanic/mechanic/materials/cleaner', 'automotivo', 'mechanic', 'mechanic', 'automotivo/mechanic/mechanic/materials/cleaner', NULL, '{"en":"cleaner","es":"cleaner","pt":"cleaner","fr":"cleaner","de":"cleaner","it":"cleaner","nl":"reiniger","zh":"清洁剂","ja":"洗浄剤","ru":"чистящее средство"}', 50
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'automotivo/mechanic/mechanic/materials/coating', 'automotivo', 'mechanic', 'mechanic', 'automotivo/mechanic/mechanic/materials/coating', NULL, '{"en":"coating","es":"coating","pt":"coating","fr":"coating","de":"coating","it":"coating","nl":"coating","zh":"涂层","ja":"コーティング","ru":"покрытие"}', 52
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'automotivo/mechanic/mechanic/materials/compound', 'automotivo', 'mechanic', 'mechanic', 'automotivo/mechanic/mechanic/materials/compound', NULL, '{"en":"compound","es":"compound","pt":"compound","fr":"compound","de":"compound","it":"compound","nl":"compound","zh":"化合物","ja":"コンパウンド","ru":"состав"}', 54
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'automotivo/mechanic/mechanic/materials/coolant', 'automotivo', 'mechanic', 'mechanic', 'automotivo/mechanic/mechanic/materials/coolant', NULL, '{"en":"coolant","es":"coolant","pt":"coolant","fr":"coolant","de":"coolant","it":"coolant","nl":"koelvloeistof","zh":"冷却液","ja":"冷却液","ru":"охлаждающая жидкость"}', 56
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'automotivo/mechanic/mechanic/materials/coolant_mix', 'automotivo', 'mechanic', 'mechanic', 'automotivo/mechanic/mechanic/materials/coolant_mix', NULL, '{"en":"coolant mix","es":"coolant mix","pt":"coolant mix","fr":"coolant mix","de":"coolant mix","it":"coolant mix","nl":"koelmengsel","zh":"冷却液混合物","ja":"冷却液ミックス","ru":"смесь охлаждающей жидкости"}', 58
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'automotivo/mechanic/mechanic/materials/filter', 'automotivo', 'mechanic', 'mechanic', 'automotivo/mechanic/mechanic/materials/filter', NULL, '{"en":"filter","es":"filtro","pt":"filtro","fr":"filtre","de":"Filter","it":"filtro","nl":"filter","zh":"过滤器","ja":"フィルター","ru":"фильтр"}', 60
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'automotivo/mechanic/mechanic/materials/fluid', 'automotivo', 'mechanic', 'mechanic', 'automotivo/mechanic/mechanic/materials/fluid', NULL, '{"en":"fluid","es":"fluid","pt":"fluid","fr":"fluid","de":"fluid","it":"fluid","nl":"vloeistof","zh":"液体","ja":"液体","ru":"жидкость"}', 62
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'automotivo/mechanic/mechanic/materials/fluid_mix', 'automotivo', 'mechanic', 'mechanic', 'automotivo/mechanic/mechanic/materials/fluid_mix', NULL, '{"en":"fluid mix","es":"fluid mix","pt":"fluid mix","fr":"fluid mix","de":"fluid mix","it":"fluid mix","nl":"vloeistofmengsel","zh":"液体混合物","ja":"液体ミックス","ru":"смесь жидкостей"}', 64
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'automotivo/mechanic/mechanic/materials/foam', 'automotivo', 'mechanic', 'mechanic', 'automotivo/mechanic/mechanic/materials/foam', NULL, '{"en":"foam","es":"foam","pt":"foam","fr":"foam","de":"foam","it":"foam","nl":"schuim","zh":"泡沫","ja":"フォーム","ru":"пена"}', 66
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'automotivo/mechanic/mechanic/materials/fuel', 'automotivo', 'mechanic', 'mechanic', 'automotivo/mechanic/mechanic/materials/fuel', NULL, '{"en":"fuel","es":"fuel","pt":"fuel","fr":"fuel","de":"fuel","it":"fuel","nl":"brandstof","zh":"燃料","ja":"燃料","ru":"топливо"}', 68
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'automotivo/mechanic/mechanic/materials/gel', 'automotivo', 'mechanic', 'mechanic', 'automotivo/mechanic/mechanic/materials/gel', NULL, '{"en":"gel","es":"gel","pt":"gel","fr":"gel","de":"gel","it":"gel","nl":"gel","zh":"凝胶","ja":"ジェル","ru":"гель"}', 70
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'automotivo/mechanic/mechanic/materials/grease', 'automotivo', 'mechanic', 'mechanic', 'automotivo/mechanic/mechanic/materials/grease', NULL, '{"en":"grease","es":"grease","pt":"grease","fr":"grease","de":"grease","it":"grease","nl":"vet","zh":"润滑脂","ja":"グリース","ru":"смазка"}', 72
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'automotivo/mechanic/mechanic/materials/grease_mix', 'automotivo', 'mechanic', 'mechanic', 'automotivo/mechanic/mechanic/materials/grease_mix', NULL, '{"en":"grease mix","es":"grease mix","pt":"grease mix","fr":"grease mix","de":"grease mix","it":"grease mix","nl":"vetmengsel","zh":"润滑脂混合物","ja":"グリースミックス","ru":"смесь смазки"}', 74
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'automotivo/mechanic/mechanic/materials/liquid', 'automotivo', 'mechanic', 'mechanic', 'automotivo/mechanic/mechanic/materials/liquid', NULL, '{"en":"liquid","es":"liquid","pt":"liquid","fr":"liquid","de":"liquid","it":"liquid","nl":"vloeistof","zh":"液体","ja":"液体","ru":"жидкость"}', 76
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'automotivo/mechanic/mechanic/materials/lubricant', 'automotivo', 'mechanic', 'mechanic', 'automotivo/mechanic/mechanic/materials/lubricant', NULL, '{"en":"lubricant","es":"lubricant","pt":"lubricant","fr":"lubricant","de":"lubricant","it":"lubricant","nl":"smeermiddel","zh":"润滑剂","ja":"潤滑剤","ru":"смазочный материал"}', 78
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'automotivo/mechanic/mechanic/materials/oil', 'automotivo', 'mechanic', 'mechanic', 'automotivo/mechanic/mechanic/materials/oil', NULL, '{"en":"oil","es":"oil","pt":"oil","fr":"oil","de":"oil","it":"oil","nl":"olie","zh":"油","ja":"オイル","ru":"масло"}', 80
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'automotivo/mechanic/mechanic/materials/oil_mix', 'automotivo', 'mechanic', 'mechanic', 'automotivo/mechanic/mechanic/materials/oil_mix', NULL, '{"en":"oil mix","es":"oil mix","pt":"oil mix","fr":"oil mix","de":"oil mix","it":"oil mix","nl":"oliemengsel","zh":"油混合物","ja":"オイルミックス","ru":"масляная смесь"}', 82
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'automotivo/mechanic/mechanic/materials/paste', 'automotivo', 'mechanic', 'mechanic', 'automotivo/mechanic/mechanic/materials/paste', NULL, '{"en":"paste","es":"paste","pt":"paste","fr":"paste","de":"paste","it":"paste","nl":"pasta","zh":"糊","ja":"ペースト","ru":"паста"}', 84
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'automotivo/mechanic/mechanic/materials/polish', 'automotivo', 'mechanic', 'mechanic', 'automotivo/mechanic/mechanic/materials/polish', NULL, '{"en":"polish","es":"pulimento","pt":"polimento","fr":"polish","de":"Politur","it":"lucido","nl":"poetsmiddel","zh":"抛光剂","ja":"ポリッシュ","ru":"полироль"}', 86
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'automotivo/mechanic/mechanic/materials/sealant', 'automotivo', 'mechanic', 'mechanic', 'automotivo/mechanic/mechanic/materials/sealant', NULL, '{"en":"sealant","es":"sealant","pt":"sealant","fr":"sealant","de":"sealant","it":"sealant","nl":"afdichtingsmiddel","zh":"密封剂","ja":"シーラント","ru":"герметик"}', 88
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'automotivo/mechanic/mechanic/materials/solution', 'automotivo', 'mechanic', 'mechanic', 'automotivo/mechanic/mechanic/materials/solution', NULL, '{"en":"solution","es":"solution","pt":"solution","fr":"solution","de":"solution","it":"solution","nl":"oplossing","zh":"溶液","ja":"溶液","ru":"раствор"}', 90
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'automotivo/mechanic/mechanic/materials/solvent', 'automotivo', 'mechanic', 'mechanic', 'automotivo/mechanic/mechanic/materials/solvent', NULL, '{"en":"solvent","es":"solvent","pt":"solvent","fr":"solvent","de":"solvent","it":"solvent","nl":"oplosmiddel","zh":"溶剂","ja":"溶剤","ru":"растворитель"}', 92
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'automotivo/mechanic/mechanic/materials/spray', 'automotivo', 'mechanic', 'mechanic', 'automotivo/mechanic/mechanic/materials/spray', NULL, '{"en":"spray","es":"spray","pt":"spray","fr":"spray","de":"Spray","it":"spray","nl":"spray","zh":"喷雾","ja":"スプレー","ru":"спрей"}', 94
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'automotivo/mechanic/mechanic/materials/treatment', 'automotivo', 'mechanic', 'mechanic', 'automotivo/mechanic/mechanic/materials/treatment', NULL, '{"en":"treatment","es":"treatment","pt":"treatment","fr":"treatment","de":"treatment","it":"treatment","nl":"behandeling","zh":"处理剂","ja":"トリートメント","ru":"обработка"}', 96
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'automotivo/mechanic/mechanic/materials/wax', 'automotivo', 'mechanic', 'mechanic', 'automotivo/mechanic/mechanic/materials/wax', NULL, '{"en":"wax","es":"cera","pt":"cera","fr":"cire","de":"Wachs","it":"cera","nl":"was","zh":"蜡","ja":"ワックス","ru":"воск"}', 98
);

INSERT INTO public.jobs (id, name, icon, image_url, sort_order) VALUES (
  'Care', '{"en":"Care","es":"Cuidados","pt":"Cuidados","fr":"Soins","de":"Pflege","it":"Assistenza","nl":"Zorg","zh":"护理","ja":"介護","ru":"Уход"}', '🏥', 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=800', 2
);

INSERT INTO public.sectors (id, job_id, name, icon, sort_order) VALUES (
  'care_assistant', 'Care', '{"en":"Care Assistant","es":"Auxiliar de Cuidados","pt":"Auxiliar de Cuidados","fr":"Aide-soignant","de":"Pflegehelfer","it":"Assistente di Cura","nl":"Zorgassistent","zh":"护理助理","ja":"介護助手","ru":"Помощник по уходу"}', '🏥', 0
);
INSERT INTO public.roles (id, job_id, sector_id, name, icon, sort_order) VALUES (
  'tools', 'Care', 'care_assistant', '{"en":"Tools","es":"Herramientas","pt":"Ferramentas","fr":"Outils","de":"Werkzeuge","it":"Attrezzi","nl":"Gereedschap","zh":"工具","ja":"道具","ru":"Инструменты"}', '🔧', 0
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'Care/care_assistant/tools/apron', 'Care', 'care_assistant', 'tools', 'Care/care_assistant/tools/apron', NULL, '{"en":"apron","es":"delantal","pt":"avental","fr":"tablier","de":"Schürze","it":"grembiule","nl":"schort","zh":"围裙","ja":"エプロン","ru":"фартук"}', 0
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'Care/care_assistant/tools/bandage', 'Care', 'care_assistant', 'tools', 'Care/care_assistant/tools/bandage', NULL, '{"en":"bandage","es":"venda","pt":"atadura","fr":"bandage","de":"Verband","it":"benda","nl":"verband","zh":"绷带","ja":"包帯","ru":"бинт"}', 2
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'Care/care_assistant/tools/bed', 'Care', 'care_assistant', 'tools', 'Care/care_assistant/tools/bed', NULL, '{"en":"bed","es":"cama","pt":"cama","fr":"lit","de":"Bett","it":"letto","nl":"bed","zh":"床","ja":"ベッド","ru":"кровать"}', 4
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'Care/care_assistant/tools/bedside_table', 'Care', 'care_assistant', 'tools', 'Care/care_assistant/tools/bedside_table', NULL, '{"en":"bedside table","es":"bedside table","pt":"bedside table","fr":"bedside table","de":"bedside table","it":"bedside table","nl":"nachtkastje","zh":"床头柜","ja":"ベッドサイドテーブル","ru":"прикроватный столик"}', 6
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'Care/care_assistant/tools/blood_pressure_monitor', 'Care', 'care_assistant', 'tools', 'Care/care_assistant/tools/blood_pressure_monitor', NULL, '{"en":"blood pressure monitor","es":"blood pressure monitor","pt":"blood pressure monitor","fr":"blood pressure monitor","de":"blood pressure monitor","it":"blood pressure monitor","nl":"bloeddrukmeter","zh":"血压计","ja":"血圧計","ru":"тонометр"}', 8
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'Care/care_assistant/tools/call_button', 'Care', 'care_assistant', 'tools', 'Care/care_assistant/tools/call_button', NULL, '{"en":"call button","es":"call button","pt":"call button","fr":"call button","de":"call button","it":"call button","nl":"oproepknop","zh":"呼叫按钮","ja":"コールボタン","ru":"кнопка вызова"}', 10
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'Care/care_assistant/tools/chart', 'Care', 'care_assistant', 'tools', 'Care/care_assistant/tools/chart', NULL, '{"en":"chart","es":"chart","pt":"chart","fr":"chart","de":"chart","it":"chart","nl":"grafiek","zh":"图表","ja":"グラフ","ru":"диаграмма"}', 12
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'Care/care_assistant/tools/clip', 'Care', 'care_assistant', 'tools', 'Care/care_assistant/tools/clip', NULL, '{"en":"clip","es":"clip","pt":"clip","fr":"clip","de":"clip","it":"clip","nl":"clip","zh":"夹子","ja":"クリップ","ru":"зажим"}', 14
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'Care/care_assistant/tools/clipboard', 'Care', 'care_assistant', 'tools', 'Care/care_assistant/tools/clipboard', NULL, '{"en":"clipboard","es":"portapapeles","pt":"prancheta","fr":"planchette","de":"Klemmbrett","it":"appunti","nl":"klembord","zh":"剪贴板","ja":"クリップボード","ru":"планшет для бумаг"}', 16
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'Care/care_assistant/tools/crutches', 'Care', 'care_assistant', 'tools', 'Care/care_assistant/tools/crutches', NULL, '{"en":"crutches","es":"crutches","pt":"crutches","fr":"crutches","de":"crutches","it":"crutches","nl":"krukken","zh":"拐杖","ja":"松葉杖","ru":"костыли"}', 18
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'Care/care_assistant/tools/curtain', 'Care', 'care_assistant', 'tools', 'Care/care_assistant/tools/curtain', NULL, '{"en":"curtain","es":"curtain","pt":"curtain","fr":"curtain","de":"curtain","it":"curtain","nl":"gordijn","zh":"窗帘","ja":"カーテン","ru":"занавеска"}', 20
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'Care/care_assistant/tools/defibrillator', 'Care', 'care_assistant', 'tools', 'Care/care_assistant/tools/defibrillator', NULL, '{"en":"defibrillator","es":"defibrillator","pt":"defibrillator","fr":"defibrillator","de":"defibrillator","it":"defibrillator","nl":"defibrillator","zh":"除颤仪","ja":"除細動器","ru":"дефибриллятор"}', 22
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'Care/care_assistant/tools/dressing', 'Care', 'care_assistant', 'tools', 'Care/care_assistant/tools/dressing', NULL, '{"en":"dressing","es":"dressing","pt":"dressing","fr":"dressing","de":"dressing","it":"dressing","nl":"wondverband","zh":"敷料","ja":"ドレッシング","ru":"перевязочный материал"}', 24
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'Care/care_assistant/tools/face_mask', 'Care', 'care_assistant', 'tools', 'Care/care_assistant/tools/face_mask', NULL, '{"en":"face mask","es":"face mask","pt":"face mask","fr":"face mask","de":"face mask","it":"face mask","nl":"mondmasker","zh":"口罩","ja":"フェイスマスク","ru":"маска для лица"}', 26
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'Care/care_assistant/tools/face_shield', 'Care', 'care_assistant', 'tools', 'Care/care_assistant/tools/face_shield', NULL, '{"en":"face shield","es":"face shield","pt":"face shield","fr":"face shield","de":"face shield","it":"face shield","nl":"gezichtsscherm","zh":"面罩","ja":"フェイスシールド","ru":"защитный щиток"}', 28
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'Care/care_assistant/tools/forceps', 'Care', 'care_assistant', 'tools', 'Care/care_assistant/tools/forceps', NULL, '{"en":"forceps","es":"forceps","pt":"forceps","fr":"forceps","de":"forceps","it":"forceps","nl":"pincet","zh":"钳子","ja":"鉗子","ru":"щипцы"}', 30
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'Care/care_assistant/tools/gauze', 'Care', 'care_assistant', 'tools', 'Care/care_assistant/tools/gauze', NULL, '{"en":"gauze","es":"gauze","pt":"gauze","fr":"gauze","de":"gauze","it":"gauze","nl":"gaas","zh":"纱布","ja":"ガーゼ","ru":"марля"}', 32
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'Care/care_assistant/tools/gloves', 'Care', 'care_assistant', 'tools', 'Care/care_assistant/tools/gloves', NULL, '{"en":"gloves","es":"guantes","pt":"luvas","fr":"gants","de":"Handschuhe","it":"guanti","nl":"handschoenen","zh":"手套","ja":"手袋","ru":"перчатки"}', 34
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'Care/care_assistant/tools/goggles', 'Care', 'care_assistant', 'tools', 'Care/care_assistant/tools/goggles', NULL, '{"en":"goggles","es":"gafas protectoras","pt":"óculos de proteção","fr":"lunettes","de":"Schutzbrille","it":"occhiali","nl":"veiligheidsbril","zh":"护目镜","ja":"ゴーグル","ru":"защитные очки"}', 36
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'Care/care_assistant/tools/gown', 'Care', 'care_assistant', 'tools', 'Care/care_assistant/tools/gown', NULL, '{"en":"gown","es":"gown","pt":"gown","fr":"gown","de":"gown","it":"gown","nl":"ziekenhuisjas","zh":"病号服","ja":"ガウン","ru":"халат"}', 38
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'Care/care_assistant/tools/hand_sanitizer', 'Care', 'care_assistant', 'tools', 'Care/care_assistant/tools/hand_sanitizer', NULL, '{"en":"hand sanitizer","es":"hand sanitizer","pt":"hand sanitizer","fr":"hand sanitizer","de":"hand sanitizer","it":"hand sanitizer","nl":"handdesinfectiemiddel","zh":"洗手液","ja":"ハンドサニタイザー","ru":"антисептик для рук"}', 40
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'Care/care_assistant/tools/infusion_pump', 'Care', 'care_assistant', 'tools', 'Care/care_assistant/tools/infusion_pump', NULL, '{"en":"infusion pump","es":"infusion pump","pt":"infusion pump","fr":"infusion pump","de":"infusion pump","it":"infusion pump","nl":"infuuspomp","zh":"输液泵","ja":"輸液ポンプ","ru":"инфузионный насос"}', 42
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'Care/care_assistant/tools/iv_bag', 'Care', 'care_assistant', 'tools', 'Care/care_assistant/tools/iv_bag', NULL, '{"en":"iv bag","es":"iv bag","pt":"iv bag","fr":"iv bag","de":"iv bag","it":"iv bag","nl":"infuuszak","zh":"输液袋","ja":"点滴バッグ","ru":"капельный мешок"}', 44
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'Care/care_assistant/tools/iv_stand', 'Care', 'care_assistant', 'tools', 'Care/care_assistant/tools/iv_stand', NULL, '{"en":"iv stand","es":"iv stand","pt":"iv stand","fr":"iv stand","de":"iv stand","it":"iv stand","nl":"infuusstandaard","zh":"输液架","ja":"点滴スタンド","ru":"стойка для капельницы"}', 46
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'Care/care_assistant/tools/kidney_dish', 'Care', 'care_assistant', 'tools', 'Care/care_assistant/tools/kidney_dish', NULL, '{"en":"kidney dish","es":"kidney dish","pt":"kidney dish","fr":"kidney dish","de":"kidney dish","it":"kidney dish","nl":"niervormige schaal","zh":"肾形盘","ja":"kidney皿","ru":"лоток почкообразный"}', 48
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'Care/care_assistant/tools/label', 'Care', 'care_assistant', 'tools', 'Care/care_assistant/tools/label', NULL, '{"en":"label","es":"etiqueta","pt":"etiqueta","fr":"étiquette","de":"Etikett","it":"etichetta","nl":"etiket","zh":"标签","ja":"ラベル","ru":"этикетка"}', 50
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'Care/care_assistant/tools/medical_tray', 'Care', 'care_assistant', 'tools', 'Care/care_assistant/tools/medical_tray', NULL, '{"en":"medical tray","es":"medical tray","pt":"medical tray","fr":"medical tray","de":"medical tray","it":"medical tray","nl":"medisch dienblad","zh":"医疗托盘","ja":"医療トレイ","ru":"медицинский лоток"}', 52
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'Care/care_assistant/tools/medicine_cart', 'Care', 'care_assistant', 'tools', 'Care/care_assistant/tools/medicine_cart', NULL, '{"en":"medicine cart","es":"medicine cart","pt":"medicine cart","fr":"medicine cart","de":"medicine cart","it":"medicine cart","nl":"medicijnkar","zh":"药车","ja":"薬品カート","ru":"медицинская тележка"}', 54
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'Care/care_assistant/tools/needle', 'Care', 'care_assistant', 'tools', 'Care/care_assistant/tools/needle', NULL, '{"en":"needle","es":"needle","pt":"needle","fr":"needle","de":"needle","it":"needle","nl":"naald","zh":"针","ja":"針","ru":"игла"}', 56
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'Care/care_assistant/tools/oxygen_mask', 'Care', 'care_assistant', 'tools', 'Care/care_assistant/tools/oxygen_mask', NULL, '{"en":"oxygen mask","es":"oxygen mask","pt":"oxygen mask","fr":"oxygen mask","de":"oxygen mask","it":"oxygen mask","nl":"zuurstofmasker","zh":"氧气面罩","ja":"酸素マスク","ru":"кислородная маска"}', 58
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'Care/care_assistant/tools/oxygen_tank', 'Care', 'care_assistant', 'tools', 'Care/care_assistant/tools/oxygen_tank', NULL, '{"en":"oxygen tank","es":"oxygen tank","pt":"oxygen tank","fr":"oxygen tank","de":"oxygen tank","it":"oxygen tank","nl":"zuurstoftank","zh":"氧气瓶","ja":"酸素ボンベ","ru":"баллон с кислородом"}', 60
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'Care/care_assistant/tools/pill_box', 'Care', 'care_assistant', 'tools', 'Care/care_assistant/tools/pill_box', NULL, '{"en":"pill box","es":"pill box","pt":"pill box","fr":"pill box","de":"pill box","it":"pill box","nl":"pillendoos","zh":"药盒","ja":"ピルケース","ru":"таблетница"}', 62
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'Care/care_assistant/tools/plaster', 'Care', 'care_assistant', 'tools', 'Care/care_assistant/tools/plaster', NULL, '{"en":"plaster","es":"plaster","pt":"plaster","fr":"plaster","de":"plaster","it":"plaster","nl":"gips","zh":"石膏","ja":"プラスター","ru":"штукатурка"}', 64
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'Care/care_assistant/tools/prescription_pad', 'Care', 'care_assistant', 'tools', 'Care/care_assistant/tools/prescription_pad', NULL, '{"en":"prescription pad","es":"prescription pad","pt":"prescription pad","fr":"prescription pad","de":"prescription pad","it":"prescription pad","nl":"receptenblok","zh":"处方本","ja":"処方箋用紙","ru":"рецептурный бланк"}', 66
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'Care/care_assistant/tools/pulse_oximeter', 'Care', 'care_assistant', 'tools', 'Care/care_assistant/tools/pulse_oximeter', NULL, '{"en":"pulse oximeter","es":"pulse oximeter","pt":"pulse oximeter","fr":"pulse oximeter","de":"pulse oximeter","it":"pulse oximeter","nl":"saturatiemeter","zh":"血氧仪","ja":"パルスオキシメーター","ru":"пульсоксиметр"}', 68
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'Care/care_assistant/tools/scissors', 'Care', 'care_assistant', 'tools', 'Care/care_assistant/tools/scissors', NULL, '{"en":"scissors","es":"tijeras","pt":"tesoura","fr":"ciseaux","de":"Schere","it":"forbici","nl":"schaar","zh":"剪刀","ja":"ハサミ","ru":"ножницы"}', 70
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'Care/care_assistant/tools/sharps_container', 'Care', 'care_assistant', 'tools', 'Care/care_assistant/tools/sharps_container', NULL, '{"en":"sharps container","es":"sharps container","pt":"sharps container","fr":"sharps container","de":"sharps container","it":"sharps container","nl":"naaldcontainer","zh":"利器容器","ja":"シャープスコンテナ","ru":"контейнер для острых предметов"}', 72
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'Care/care_assistant/tools/specimen_container', 'Care', 'care_assistant', 'tools', 'Care/care_assistant/tools/specimen_container', NULL, '{"en":"specimen container","es":"specimen container","pt":"specimen container","fr":"specimen container","de":"specimen container","it":"specimen container","nl":"monsternemer","zh":"标本容器","ja":"検体容器","ru":"контейнер для образцов"}', 74
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'Care/care_assistant/tools/stethoscope', 'Care', 'care_assistant', 'tools', 'Care/care_assistant/tools/stethoscope', NULL, '{"en":"stethoscope","es":"stethoscope","pt":"stethoscope","fr":"stethoscope","de":"stethoscope","it":"stethoscope","nl":"stethoscoop","zh":"听诊器","ja":"聴診器","ru":"стетоскоп"}', 76
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'Care/care_assistant/tools/stretcher', 'Care', 'care_assistant', 'tools', 'Care/care_assistant/tools/stretcher', NULL, '{"en":"stretcher","es":"stretcher","pt":"stretcher","fr":"stretcher","de":"stretcher","it":"stretcher","nl":"brancard","zh":"担架","ja":"ストレッチャー","ru":"носилки"}', 78
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'Care/care_assistant/tools/syringe', 'Care', 'care_assistant', 'tools', 'Care/care_assistant/tools/syringe', NULL, '{"en":"syringe","es":"jeringa","pt":"seringa","fr":"seringue","de":"Spritze","it":"siringa","nl":"spuit","zh":"注射器","ja":"注射器","ru":"шприц"}', 80
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'Care/care_assistant/tools/tape', 'Care', 'care_assistant', 'tools', 'Care/care_assistant/tools/tape', NULL, '{"en":"tape","es":"cinta","pt":"fita","fr":"ruban","de":"Klebeband","it":"nastro","nl":"tape","zh":"胶带","ja":"テープ","ru":"лента"}', 82
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'Care/care_assistant/tools/test_tube', 'Care', 'care_assistant', 'tools', 'Care/care_assistant/tools/test_tube', NULL, '{"en":"test tube","es":"test tube","pt":"test tube","fr":"test tube","de":"test tube","it":"test tube","nl":"reageerbuis","zh":"试管","ja":"試験管","ru":"пробирка"}', 84
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'Care/care_assistant/tools/thermometer', 'Care', 'care_assistant', 'tools', 'Care/care_assistant/tools/thermometer', NULL, '{"en":"thermometer","es":"termómetro","pt":"termômetro","fr":"thermomètre","de":"Thermometer","it":"termometro","nl":"thermometer","zh":"温度计","ja":"体温計","ru":"термометр"}', 86
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'Care/care_assistant/tools/tourniquet', 'Care', 'care_assistant', 'tools', 'Care/care_assistant/tools/tourniquet', NULL, '{"en":"tourniquet","es":"tourniquet","pt":"tourniquet","fr":"tourniquet","de":"tourniquet","it":"tourniquet","nl":"tourniquet","zh":"止血带","ja":"止血帯","ru":"жгут"}', 88
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'Care/care_assistant/tools/tweezers', 'Care', 'care_assistant', 'tools', 'Care/care_assistant/tools/tweezers', NULL, '{"en":"tweezers","es":"tweezers","pt":"tweezers","fr":"tweezers","de":"tweezers","it":"tweezers","nl":"pincet","zh":"镊子","ja":"ピンセット","ru":"пинцет"}', 90
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'Care/care_assistant/tools/urine_bag', 'Care', 'care_assistant', 'tools', 'Care/care_assistant/tools/urine_bag', NULL, '{"en":"urine bag","es":"urine bag","pt":"urine bag","fr":"urine bag","de":"urine bag","it":"urine bag","nl":"urinezak","zh":"尿袋","ja":"尿袋","ru":"мочевой мешок"}', 92
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'Care/care_assistant/tools/walker', 'Care', 'care_assistant', 'tools', 'Care/care_assistant/tools/walker', NULL, '{"en":"walker","es":"walker","pt":"walker","fr":"walker","de":"walker","it":"walker","nl":"rollator","zh":"助行器","ja":"ウォーカー","ru":"ходунки"}', 94
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'Care/care_assistant/tools/wheelchair', 'Care', 'care_assistant', 'tools', 'Care/care_assistant/tools/wheelchair', NULL, '{"en":"wheelchair","es":"silla de ruedas","pt":"cadeira de rodas","fr":"fauteuil roulant","de":"Rollstuhl","it":"sedia a rotelle","nl":"rolstoel","zh":"轮椅","ja":"車椅子","ru":"инвалидная коляска"}', 96
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'Care/care_assistant/tools/wipes', 'Care', 'care_assistant', 'tools', 'Care/care_assistant/tools/wipes', NULL, '{"en":"wipes","es":"wipes","pt":"wipes","fr":"wipes","de":"wipes","it":"wipes","nl":"doekjes","zh":"湿巾","ja":"ウェットティッシュ","ru":"влажные салфетки"}', 98
);
INSERT INTO public.roles (id, job_id, sector_id, name, icon, sort_order) VALUES (
  'materials', 'Care', 'care_assistant', '{"en":"Materials","es":"Materiales","pt":"Materiais","fr":"Matériaux","de":"Materialien","it":"Materiali","nl":"Materialen","zh":"材料","ja":"材料","ru":"Материалы"}', '📦', 1
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'Care/care_assistant/materials/adhesive_tape', 'Care', 'care_assistant', 'materials', 'Care/care_assistant/materials/adhesive_tape', NULL, '{"en":"adhesive tape","es":"adhesive tape","pt":"adhesive tape","fr":"adhesive tape","de":"adhesive tape","it":"adhesive tape","nl":"plakband","zh":"胶带","ja":"接着テープ","ru":"клейкая лента"}', 0
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'Care/care_assistant/materials/alcohol_wipes', 'Care', 'care_assistant', 'materials', 'Care/care_assistant/materials/alcohol_wipes', NULL, '{"en":"alcohol wipes","es":"alcohol wipes","pt":"alcohol wipes","fr":"alcohol wipes","de":"alcohol wipes","it":"alcohol wipes","nl":"alcoholdoekjes","zh":"酒精湿巾","ja":"アルコールワイプ","ru":"спиртовые салфетки"}', 2
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'Care/care_assistant/materials/antiseptic', 'Care', 'care_assistant', 'materials', 'Care/care_assistant/materials/antiseptic', NULL, '{"en":"antiseptic","es":"antiseptic","pt":"antiseptic","fr":"antiseptic","de":"antiseptic","it":"antiseptic","nl":"antisepticum","zh":"消毒剂","ja":"防腐剤","ru":"антисептик"}', 4
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'Care/care_assistant/materials/aprons_disposable', 'Care', 'care_assistant', 'materials', 'Care/care_assistant/materials/aprons_disposable', NULL, '{"en":"aprons disposable","es":"aprons disposable","pt":"aprons disposable","fr":"aprons disposable","de":"aprons disposable","it":"aprons disposable","nl":"wegwerpschorten","zh":"一次性围裙","ja":"使い捨てエプロン","ru":"одноразовые фартуки"}', 6
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'Care/care_assistant/materials/bandage_rolls', 'Care', 'care_assistant', 'materials', 'Care/care_assistant/materials/bandage_rolls', NULL, '{"en":"bandage rolls","es":"bandage rolls","pt":"bandage rolls","fr":"bandage rolls","de":"bandage rolls","it":"bandage rolls","nl":"verbandrol","zh":"绷带卷","ja":"包帯ロール","ru":"рулонный бинт"}', 8
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'Care/care_assistant/materials/barcode_labels', 'Care', 'care_assistant', 'materials', 'Care/care_assistant/materials/barcode_labels', NULL, '{"en":"barcode labels","es":"barcode labels","pt":"barcode labels","fr":"barcode labels","de":"barcode labels","it":"barcode labels","nl":"streepjescode etiketten","zh":"条形码标签","ja":"バーコードラベル","ru":"этикетки со штрихкодом"}', 10
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'Care/care_assistant/materials/bed_sheets', 'Care', 'care_assistant', 'materials', 'Care/care_assistant/materials/bed_sheets', NULL, '{"en":"bed sheets","es":"bed sheets","pt":"bed sheets","fr":"bed sheets","de":"bed sheets","it":"bed sheets","nl":"beddenlakens","zh":"床单","ja":"シーツ","ru":"простыни"}', 12
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'Care/care_assistant/materials/blankets', 'Care', 'care_assistant', 'materials', 'Care/care_assistant/materials/blankets', NULL, '{"en":"blankets","es":"blankets","pt":"blankets","fr":"blankets","de":"blankets","it":"blankets","nl":"dekens","zh":"毯子","ja":"ブランケット","ru":"одеяла"}', 14
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'Care/care_assistant/materials/caps', 'Care', 'care_assistant', 'materials', 'Care/care_assistant/materials/caps', NULL, '{"en":"caps","es":"caps","pt":"caps","fr":"caps","de":"caps","it":"caps","nl":"doppen","zh":"帽子","ja":"キャップ","ru":"крышки"}', 16
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'Care/care_assistant/materials/capsules', 'Care', 'care_assistant', 'materials', 'Care/care_assistant/materials/capsules', NULL, '{"en":"capsules","es":"capsules","pt":"capsules","fr":"capsules","de":"capsules","it":"capsules","nl":"capsules","zh":"胶囊","ja":"カプセル","ru":"капсулы"}', 18
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'Care/care_assistant/materials/charts', 'Care', 'care_assistant', 'materials', 'Care/care_assistant/materials/charts', NULL, '{"en":"charts","es":"charts","pt":"charts","fr":"charts","de":"charts","it":"charts","nl":"grafieken","zh":"图表","ja":"グラフ","ru":"диаграммы"}', 20
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'Care/care_assistant/materials/cleaning_solution', 'Care', 'care_assistant', 'materials', 'Care/care_assistant/materials/cleaning_solution', NULL, '{"en":"cleaning solution","es":"cleaning solution","pt":"cleaning solution","fr":"cleaning solution","de":"cleaning solution","it":"cleaning solution","nl":"reinigingsoplossing","zh":"清洁液","ja":"洗浄液","ru":"чистящий раствор"}', 22
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'Care/care_assistant/materials/containers', 'Care', 'care_assistant', 'materials', 'Care/care_assistant/materials/containers', NULL, '{"en":"containers","es":"containers","pt":"containers","fr":"containers","de":"containers","it":"containers","nl":"containers","zh":"容器","ja":"コンテナ","ru":"контейнеры"}', 24
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'Care/care_assistant/materials/cotton', 'Care', 'care_assistant', 'materials', 'Care/care_assistant/materials/cotton', NULL, '{"en":"cotton","es":"algodón","pt":"algodão","fr":"coton","de":"Watte","it":"cotone","nl":"katoen","zh":"棉花","ja":"綿","ru":"хлопок"}', 26
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'Care/care_assistant/materials/cream', 'Care', 'care_assistant', 'materials', 'Care/care_assistant/materials/cream', NULL, '{"en":"cream","es":"cream","pt":"cream","fr":"cream","de":"cream","it":"cream","nl":"room","zh":"奶油","ja":"クリーム","ru":"крем"}', 28
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'Care/care_assistant/materials/disinfectant', 'Care', 'care_assistant', 'materials', 'Care/care_assistant/materials/disinfectant', NULL, '{"en":"disinfectant","es":"desinfectante","pt":"desinfetante","fr":"désinfectant","de":"Desinfektionsmittel","it":"disinfettante","nl":"ontsmettingsmiddel","zh":"消毒剂","ja":"消毒剤","ru":"дезинфектант"}', 30
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'Care/care_assistant/materials/documents', 'Care', 'care_assistant', 'materials', 'Care/care_assistant/materials/documents', NULL, '{"en":"documents","es":"documents","pt":"documents","fr":"documents","de":"documents","it":"documents","nl":"documenten","zh":"文件","ja":"書類","ru":"документы"}', 32
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'Care/care_assistant/materials/dressings', 'Care', 'care_assistant', 'materials', 'Care/care_assistant/materials/dressings', NULL, '{"en":"dressings","es":"dressings","pt":"dressings","fr":"dressings","de":"dressings","it":"dressings","nl":"verbanden","zh":"敷料","ja":"ドレッシング","ru":"перевязочные материалы"}', 34
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'Care/care_assistant/materials/drops', 'Care', 'care_assistant', 'materials', 'Care/care_assistant/materials/drops', NULL, '{"en":"drops","es":"drops","pt":"drops","fr":"drops","de":"drops","it":"drops","nl":"druppels","zh":"滴液","ja":"ドロップ","ru":"капли"}', 36
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'Care/care_assistant/materials/gauze_pads', 'Care', 'care_assistant', 'materials', 'Care/care_assistant/materials/gauze_pads', NULL, '{"en":"gauze pads","es":"gauze pads","pt":"gauze pads","fr":"gauze pads","de":"gauze pads","it":"gauze pads","nl":"gaaskompres","zh":"纱布垫","ja":"ガーゼパッド","ru":"марлевые тампоны"}', 38
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'Care/care_assistant/materials/gel', 'Care', 'care_assistant', 'materials', 'Care/care_assistant/materials/gel', NULL, '{"en":"gel","es":"gel","pt":"gel","fr":"gel","de":"gel","it":"gel","nl":"gel","zh":"凝胶","ja":"ジェル","ru":"гель"}', 40
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'Care/care_assistant/materials/gloves_disposable', 'Care', 'care_assistant', 'materials', 'Care/care_assistant/materials/gloves_disposable', NULL, '{"en":"gloves disposable","es":"gloves disposable","pt":"gloves disposable","fr":"gloves disposable","de":"gloves disposable","it":"gloves disposable","nl":"wegwerphandschoenen","zh":"一次性手套","ja":"使い捨て手袋","ru":"одноразовые перчатки"}', 42
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'Care/care_assistant/materials/glucose_solution', 'Care', 'care_assistant', 'materials', 'Care/care_assistant/materials/glucose_solution', NULL, '{"en":"glucose solution","es":"glucose solution","pt":"glucose solution","fr":"glucose solution","de":"glucose solution","it":"glucose solution","nl":"glucoseoplossing","zh":"葡萄糖溶液","ja":"ブドウ糖液","ru":"раствор глюкозы"}', 44
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'Care/care_assistant/materials/gowns_disposable', 'Care', 'care_assistant', 'materials', 'Care/care_assistant/materials/gowns_disposable', NULL, '{"en":"gowns disposable","es":"gowns disposable","pt":"gowns disposable","fr":"gowns disposable","de":"gowns disposable","it":"gowns disposable","nl":"wegwerpjassen","zh":"一次性病号服","ja":"使い捨てガウン","ru":"одноразовые халаты"}', 46
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'Care/care_assistant/materials/hand_gel', 'Care', 'care_assistant', 'materials', 'Care/care_assistant/materials/hand_gel', NULL, '{"en":"hand gel","es":"hand gel","pt":"hand gel","fr":"hand gel","de":"hand gel","it":"hand gel","nl":"handgel","zh":"洗手液","ja":"ハンドジェル","ru":"гель для рук"}', 48
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'Care/care_assistant/materials/injections', 'Care', 'care_assistant', 'materials', 'Care/care_assistant/materials/injections', NULL, '{"en":"injections","es":"injections","pt":"injections","fr":"injections","de":"injections","it":"injections","nl":"injecties","zh":"注射","ja":"注射","ru":"инъекции"}', 50
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'Care/care_assistant/materials/iv_fluids', 'Care', 'care_assistant', 'materials', 'Care/care_assistant/materials/iv_fluids', NULL, '{"en":"iv fluids","es":"iv fluids","pt":"iv fluids","fr":"iv fluids","de":"iv fluids","it":"iv fluids","nl":"infuusvloeistoffen","zh":"输液","ja":"点滴液","ru":"инфузионные растворы"}', 52
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'Care/care_assistant/materials/labels', 'Care', 'care_assistant', 'materials', 'Care/care_assistant/materials/labels', NULL, '{"en":"labels","es":"labels","pt":"labels","fr":"labels","de":"labels","it":"labels","nl":"etiketten","zh":"标签","ja":"ラベル","ru":"этикетки"}', 54
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'Care/care_assistant/materials/masks', 'Care', 'care_assistant', 'materials', 'Care/care_assistant/materials/masks', NULL, '{"en":"masks","es":"masks","pt":"masks","fr":"masks","de":"masks","it":"masks","nl":"maskers","zh":"口罩","ja":"マスク","ru":"маски"}', 56
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'Care/care_assistant/materials/medical_forms', 'Care', 'care_assistant', 'materials', 'Care/care_assistant/materials/medical_forms', NULL, '{"en":"medical forms","es":"medical forms","pt":"medical forms","fr":"medical forms","de":"medical forms","it":"medical forms","nl":"medische formulieren","zh":"医疗表格","ja":"医療フォーム","ru":"медицинские бланки"}', 58
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'Care/care_assistant/materials/medicine', 'Care', 'care_assistant', 'materials', 'Care/care_assistant/materials/medicine', NULL, '{"en":"medicine","es":"medicina","pt":"medicamento","fr":"médicament","de":"Medizin","it":"medicina","nl":"medicijn","zh":"药物","ja":"薬","ru":"лекарство"}', 60
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'Care/care_assistant/materials/ointment', 'Care', 'care_assistant', 'materials', 'Care/care_assistant/materials/ointment', NULL, '{"en":"ointment","es":"ointment","pt":"ointment","fr":"ointment","de":"ointment","it":"ointment","nl":"zalf","zh":"药膏","ja":"軟膏","ru":"мазь"}', 62
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'Care/care_assistant/materials/pads', 'Care', 'care_assistant', 'materials', 'Care/care_assistant/materials/pads', NULL, '{"en":"pads","es":"pads","pt":"pads","fr":"pads","de":"pads","it":"pads","nl":"kussens","zh":"垫子","ja":"パッド","ru":"подушечки"}', 64
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'Care/care_assistant/materials/patient_records', 'Care', 'care_assistant', 'materials', 'Care/care_assistant/materials/patient_records', NULL, '{"en":"patient records","es":"patient records","pt":"patient records","fr":"patient records","de":"patient records","it":"patient records","nl":"patiëntendossiers","zh":"病历","ja":"患者記録","ru":"медицинские карты"}', 66
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'Care/care_assistant/materials/pillow_covers', 'Care', 'care_assistant', 'materials', 'Care/care_assistant/materials/pillow_covers', NULL, '{"en":"pillow covers","es":"pillow covers","pt":"pillow covers","fr":"pillow covers","de":"pillow covers","it":"pillow covers","nl":"kussenslopen","zh":"枕套","ja":"枕カバー","ru":"наволочки"}', 68
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'Care/care_assistant/materials/pills', 'Care', 'care_assistant', 'materials', 'Care/care_assistant/materials/pills', NULL, '{"en":"pills","es":"pastillas","pt":"comprimidos","fr":"pilules","de":"Tabletten","it":"pillole","nl":"pillen","zh":"药片","ja":"薬","ru":"таблетки"}', 70
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'Care/care_assistant/materials/plasters', 'Care', 'care_assistant', 'materials', 'Care/care_assistant/materials/plasters', NULL, '{"en":"plasters","es":"plasters","pt":"plasters","fr":"plasters","de":"plasters","it":"plasters","nl":"pleisters","zh":"创可贴","ja":"絆創膏","ru":"пластыри"}', 72
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'Care/care_assistant/materials/prescriptions', 'Care', 'care_assistant', 'materials', 'Care/care_assistant/materials/prescriptions', NULL, '{"en":"prescriptions","es":"prescriptions","pt":"prescriptions","fr":"prescriptions","de":"prescriptions","it":"prescriptions","nl":"recepten","zh":"处方","ja":"処方箋","ru":"рецепты"}', 74
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'Care/care_assistant/materials/protective_sheets', 'Care', 'care_assistant', 'materials', 'Care/care_assistant/materials/protective_sheets', NULL, '{"en":"protective sheets","es":"protective sheets","pt":"protective sheets","fr":"protective sheets","de":"protective sheets","it":"protective sheets","nl":"beschermingsfolie","zh":"保护膜","ja":"保護シート","ru":"защитные листы"}', 76
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'Care/care_assistant/materials/reports', 'Care', 'care_assistant', 'materials', 'Care/care_assistant/materials/reports', NULL, '{"en":"reports","es":"reports","pt":"reports","fr":"reports","de":"reports","it":"reports","nl":"rapporten","zh":"报告","ja":"レポート","ru":"отчеты"}', 78
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'Care/care_assistant/materials/saline_solution', 'Care', 'care_assistant', 'materials', 'Care/care_assistant/materials/saline_solution', NULL, '{"en":"saline solution","es":"saline solution","pt":"saline solution","fr":"saline solution","de":"saline solution","it":"saline solution","nl":"zoutoplossing","zh":"生理盐水","ja":"生理食塩水","ru":"физраствор"}', 80
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'Care/care_assistant/materials/shoe_covers', 'Care', 'care_assistant', 'materials', 'Care/care_assistant/materials/shoe_covers', NULL, '{"en":"shoe covers","es":"shoe covers","pt":"shoe covers","fr":"shoe covers","de":"shoe covers","it":"shoe covers","nl":"schoenhoezen","zh":"鞋套","ja":"シューカバー","ru":"бахилы"}', 82
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'Care/care_assistant/materials/soap', 'Care', 'care_assistant', 'materials', 'Care/care_assistant/materials/soap', NULL, '{"en":"soap","es":"jabón","pt":"sabão","fr":"savon","de":"Seife","it":"sapone","nl":"zeep","zh":"肥皂","ja":"石鹸","ru":"мыло"}', 84
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'Care/care_assistant/materials/sterilizing_solution', 'Care', 'care_assistant', 'materials', 'Care/care_assistant/materials/sterilizing_solution', NULL, '{"en":"sterilizing solution","es":"sterilizing solution","pt":"sterilizing solution","fr":"sterilizing solution","de":"sterilizing solution","it":"sterilizing solution","nl":"sterilisatieoplossing","zh":"消毒液","ja":"滅菌液","ru":"стерилизующий раствор"}', 86
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'Care/care_assistant/materials/stickers', 'Care', 'care_assistant', 'materials', 'Care/care_assistant/materials/stickers', NULL, '{"en":"stickers","es":"stickers","pt":"stickers","fr":"stickers","de":"stickers","it":"stickers","nl":"stickers","zh":"贴纸","ja":"ステッカー","ru":"наклейки"}', 88
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'Care/care_assistant/materials/swabs', 'Care', 'care_assistant', 'materials', 'Care/care_assistant/materials/swabs', NULL, '{"en":"swabs","es":"swabs","pt":"swabs","fr":"swabs","de":"swabs","it":"swabs","nl":"wattenstaafjes","zh":"棉签","ja":"綿棒","ru":"ватные палочки"}', 90
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'Care/care_assistant/materials/syrup', 'Care', 'care_assistant', 'materials', 'Care/care_assistant/materials/syrup', NULL, '{"en":"syrup","es":"syrup","pt":"syrup","fr":"syrup","de":"syrup","it":"syrup","nl":"siroop","zh":"糖浆","ja":"シロップ","ru":"сироп"}', 92
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'Care/care_assistant/materials/tablets', 'Care', 'care_assistant', 'materials', 'Care/care_assistant/materials/tablets', NULL, '{"en":"tablets","es":"tablets","pt":"tablets","fr":"tablets","de":"tablets","it":"tablets","nl":"tabletten","zh":"药片","ja":"錠剤","ru":"таблетки"}', 94
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'Care/care_assistant/materials/tags', 'Care', 'care_assistant', 'materials', 'Care/care_assistant/materials/tags', NULL, '{"en":"tags","es":"tags","pt":"tags","fr":"tags","de":"tags","it":"tags","nl":"labels","zh":"标签","ja":"タグ","ru":"теги"}', 96
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'Care/care_assistant/materials/tissues', 'Care', 'care_assistant', 'materials', 'Care/care_assistant/materials/tissues', NULL, '{"en":"tissues","es":"tissues","pt":"tissues","fr":"tissues","de":"tissues","it":"tissues","nl":"tissues","zh":"纸巾","ja":"ティッシュ","ru":"салфетки"}', 98
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'Care/care_assistant/materials/wipes', 'Care', 'care_assistant', 'materials', 'Care/care_assistant/materials/wipes', NULL, '{"en":"wipes","es":"wipes","pt":"wipes","fr":"wipes","de":"wipes","it":"wipes","nl":"doekjes","zh":"湿巾","ja":"ウェットティッシュ","ru":"влажные салфетки"}', 100
);

INSERT INTO public.jobs (id, name, icon, image_url, sort_order) VALUES (
  'cleaning_maintenance', '{"en":"Cleaning & Maintenance","es":"Limpieza","pt":"Limpeza","fr":"Nettoyage","de":"Reinigung","it":"Pulizie","nl":"Schoonmaak & Onderhoud","zh":"清洁与维护","ja":"清掃・メンテナンス","ru":"Уборка и техобслуживание"}', '🧹', 'https://images.pexels.com/photos/4239146/pexels-photo-4239146.jpeg?auto=compress&cs=tinysrgb&w=800', 3
);

INSERT INTO public.sectors (id, job_id, name, icon, sort_order) VALUES (
  'cleaner', 'cleaning_maintenance', '{"en":"Cleaner","es":"Limpiador","pt":"Limpador","fr":"Agent de nettoyage","de":"Reinigungskraft","it":"Addetto pulizie","nl":"Schoonmaker","zh":"清洁工","ja":"清掃員","ru":"Уборщик"}', '🧹', 0
);
INSERT INTO public.roles (id, job_id, sector_id, name, icon, sort_order) VALUES (
  'tools', 'cleaning_maintenance', 'cleaner', '{"en":"Tools","es":"Herramientas","pt":"Ferramentas","fr":"Outils","de":"Werkzeuge","it":"Attrezzi","nl":"Gereedschap","zh":"工具","ja":"道具","ru":"Инструменты"}', '🔧', 0
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'cleaning_maintenance/cleaner/tools/broom', 'cleaning_maintenance', 'cleaner', 'tools', 'cleaning_maintenance/cleaner/tools/broom', NULL, '{"en":"broom","es":"escoba","pt":"vassoura","fr":"balai","de":"Besen","it":"scopa","nl":"bezem","zh":"扫帚","ja":"ほうき","ru":"метла"}', 0
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'cleaning_maintenance/cleaner/tools/brush', 'cleaning_maintenance', 'cleaner', 'tools', 'cleaning_maintenance/cleaner/tools/brush', NULL, '{"en":"brush","es":"cepillo","pt":"escova","fr":"brosse","de":"Bürste","it":"spazzola","nl":"borstel","zh":"刷子","ja":"ブラシ","ru":"кисть"}', 2
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'cleaning_maintenance/cleaner/tools/bucket', 'cleaning_maintenance', 'cleaner', 'tools', 'cleaning_maintenance/cleaner/tools/bucket', NULL, '{"en":"bucket","es":"cubo","pt":"balde","fr":"seau","de":"Eimer","it":"secchio","nl":"emmer","zh":"水桶","ja":"バケツ","ru":"ведро"}', 4
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'cleaning_maintenance/cleaner/tools/cart', 'cleaning_maintenance', 'cleaner', 'tools', 'cleaning_maintenance/cleaner/tools/cart', NULL, '{"en":"cart","es":"carrito","pt":"carrinho","fr":"chariot","de":"Wagen","it":"carrello","nl":"kar","zh":"推车","ja":"カート","ru":"тележка"}', 6
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'cleaning_maintenance/cleaner/tools/cleaner_tool', 'cleaning_maintenance', 'cleaner', 'tools', 'cleaning_maintenance/cleaner/tools/cleaner_tool', NULL, '{"en":"cleaner tool","es":"cleaner tool","pt":"cleaner tool","fr":"cleaner tool","de":"cleaner tool","it":"cleaner tool","nl":"reinigingsgereedschap","zh":"清洁工具","ja":"洗浄ツール","ru":"инструмент для уборки"}', 8
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'cleaning_maintenance/cleaner/tools/cloth', 'cleaning_maintenance', 'cleaner', 'tools', 'cleaning_maintenance/cleaner/tools/cloth', NULL, '{"en":"cloth","es":"trapo","pt":"pano","fr":"chiffon","de":"Tuch","it":"panno","nl":"doek","zh":"布","ja":"布","ru":"ткань"}', 10
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'cleaning_maintenance/cleaner/tools/duster', 'cleaning_maintenance', 'cleaner', 'tools', 'cleaning_maintenance/cleaner/tools/duster', NULL, '{"en":"duster","es":"duster","pt":"duster","fr":"duster","de":"duster","it":"duster","nl":"stofdoek","zh":"掸子","ja":"はたき","ru":"метелка для пыли"}', 12
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'cleaning_maintenance/cleaner/tools/gloves', 'cleaning_maintenance', 'cleaner', 'tools', 'cleaning_maintenance/cleaner/tools/gloves', NULL, '{"en":"gloves","es":"guantes","pt":"luvas","fr":"gants","de":"Handschuhe","it":"guanti","nl":"handschoenen","zh":"手套","ja":"手袋","ru":"перчатки"}', 14
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'cleaning_maintenance/cleaner/tools/handle', 'cleaning_maintenance', 'cleaner', 'tools', 'cleaning_maintenance/cleaner/tools/handle', NULL, '{"en":"handle","es":"handle","pt":"handle","fr":"handle","de":"handle","it":"handle","nl":"handvat","zh":"把手","ja":"ハンドル","ru":"рукоятка"}', 16
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'cleaning_maintenance/cleaner/tools/hose', 'cleaning_maintenance', 'cleaner', 'tools', 'cleaning_maintenance/cleaner/tools/hose', NULL, '{"en":"hose","es":"manguera","pt":"mangueira","fr":"tuyau","de":"Schlauch","it":"tubo","nl":"slang","zh":"软管","ja":"ホース","ru":"шланг"}', 18
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'cleaning_maintenance/cleaner/tools/mask', 'cleaning_maintenance', 'cleaner', 'tools', 'cleaning_maintenance/cleaner/tools/mask', NULL, '{"en":"mask","es":"mascarilla","pt":"máscara","fr":"masque","de":"Maske","it":"maschera","nl":"masker","zh":"口罩","ja":"マスク","ru":"маска"}', 20
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'cleaning_maintenance/cleaner/tools/mop', 'cleaning_maintenance', 'cleaner', 'tools', 'cleaning_maintenance/cleaner/tools/mop', NULL, '{"en":"mop","es":"fregona","pt":"esfregão","fr":"serpillière","de":"Mop","it":"mop","nl":"zwabber","zh":"拖把","ja":"モップ","ru":"швабра"}', 22
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'cleaning_maintenance/cleaner/tools/pad', 'cleaning_maintenance', 'cleaner', 'tools', 'cleaning_maintenance/cleaner/tools/pad', NULL, '{"en":"pad","es":"pad","pt":"pad","fr":"pad","de":"pad","it":"pad","nl":"kussen","zh":"垫子","ja":"パッド","ru":"подушечка"}', 24
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'cleaning_maintenance/cleaner/tools/roller', 'cleaning_maintenance', 'cleaner', 'tools', 'cleaning_maintenance/cleaner/tools/roller', NULL, '{"en":"roller","es":"rodillo","pt":"rolo","fr":"rouleau","de":"Rolle","it":"rullo","nl":"roller","zh":"滚筒","ja":"ローラー","ru":"валик"}', 26
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'cleaning_maintenance/cleaner/tools/scraper', 'cleaning_maintenance', 'cleaner', 'tools', 'cleaning_maintenance/cleaner/tools/scraper', NULL, '{"en":"scraper","es":"scraper","pt":"scraper","fr":"scraper","de":"scraper","it":"scraper","nl":"schraper","zh":"刮刀","ja":"スクレーパー","ru":"скребок"}', 28
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'cleaning_maintenance/cleaner/tools/sponge', 'cleaning_maintenance', 'cleaner', 'tools', 'cleaning_maintenance/cleaner/tools/sponge', NULL, '{"en":"sponge","es":"esponja","pt":"esponja","fr":"éponge","de":"Schwamm","it":"spugna","nl":"spons","zh":"海绵","ja":"スポンジ","ru":"губка"}', 30
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'cleaning_maintenance/cleaner/tools/sprayer', 'cleaning_maintenance', 'cleaner', 'tools', 'cleaning_maintenance/cleaner/tools/sprayer', NULL, '{"en":"sprayer","es":"pulverizador","pt":"pulverizador","fr":"pulvérisateur","de":"Sprüher","it":"spruzzatore","nl":"sproeier","zh":"喷雾器","ja":"スプレイヤー","ru":"опрыскиватель"}', 32
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'cleaning_maintenance/cleaner/tools/squeegee', 'cleaning_maintenance', 'cleaner', 'tools', 'cleaning_maintenance/cleaner/tools/squeegee', NULL, '{"en":"squeegee","es":"squeegee","pt":"squeegee","fr":"squeegee","de":"squeegee","it":"squeegee","nl":"trekker","zh":"刮水器","ja":"スクイージー","ru":"стеклоочиститель"}', 34
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'cleaning_maintenance/cleaner/tools/trolley', 'cleaning_maintenance', 'cleaner', 'tools', 'cleaning_maintenance/cleaner/tools/trolley', NULL, '{"en":"trolley","es":"carrito","pt":"carrinho","fr":"chariot","de":"Trolley","it":"carrello","nl":"trolley","zh":"手推车","ja":"トロリー","ru":"тележка"}', 36
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'cleaning_maintenance/cleaner/tools/vacuum', 'cleaning_maintenance', 'cleaner', 'tools', 'cleaning_maintenance/cleaner/tools/vacuum', NULL, '{"en":"vacuum","es":"vacuum","pt":"vacuum","fr":"vacuum","de":"vacuum","it":"vacuum","nl":"stofzuiger","zh":"真空吸尘器","ja":"掃除機","ru":"пылесос"}', 38
);
INSERT INTO public.roles (id, job_id, sector_id, name, icon, sort_order) VALUES (
  'materials', 'cleaning_maintenance', 'cleaner', '{"en":"Materials","es":"Materiales","pt":"Materiais","fr":"Matériaux","de":"Materialien","it":"Materiali","nl":"Materialen","zh":"材料","ja":"材料","ru":"Материалы"}', '📦', 1
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'cleaning_maintenance/cleaner/materials/agent', 'cleaning_maintenance', 'cleaner', 'materials', 'cleaning_maintenance/cleaner/materials/agent', NULL, '{"en":"agent","es":"agent","pt":"agent","fr":"agent","de":"agent","it":"agent","nl":"middel","zh":"试剂","ja":"薬剤","ru":"агент"}', 0
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'cleaning_maintenance/cleaner/materials/bleach', 'cleaning_maintenance', 'cleaner', 'materials', 'cleaning_maintenance/cleaner/materials/bleach', NULL, '{"en":"bleach","es":"lejía","pt":"alvejante","fr":"eau de javel","de":"Bleichmittel","it":"candeggina","nl":"bleekmiddel","zh":"漂白剂","ja":"漂白剤","ru":"отбеливатель"}', 2
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'cleaning_maintenance/cleaner/materials/bleach_mix', 'cleaning_maintenance', 'cleaner', 'materials', 'cleaning_maintenance/cleaner/materials/bleach_mix', NULL, '{"en":"bleach mix","es":"bleach mix","pt":"bleach mix","fr":"bleach mix","de":"bleach mix","it":"bleach mix","nl":"bleekoplossing","zh":"漂白液","ja":"漂白剤ミックス","ru":"раствор отбеливателя"}', 4
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'cleaning_maintenance/cleaner/materials/chemical', 'cleaning_maintenance', 'cleaner', 'materials', 'cleaning_maintenance/cleaner/materials/chemical', NULL, '{"en":"chemical","es":"chemical","pt":"chemical","fr":"chemical","de":"chemical","it":"chemical","nl":"chemicalie","zh":"化学品","ja":"化学物質","ru":"химическое вещество"}', 6
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'cleaning_maintenance/cleaner/materials/chemical_mix', 'cleaning_maintenance', 'cleaner', 'materials', 'cleaning_maintenance/cleaner/materials/chemical_mix', NULL, '{"en":"chemical mix","es":"chemical mix","pt":"chemical mix","fr":"chemical mix","de":"chemical mix","it":"chemical mix","nl":"chemisch mengsel","zh":"化学混合物","ja":"化学物質ミックス","ru":"химическая смесь"}', 8
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'cleaning_maintenance/cleaner/materials/cleaner_liquid', 'cleaning_maintenance', 'cleaner', 'materials', 'cleaning_maintenance/cleaner/materials/cleaner_liquid', NULL, '{"en":"cleaner liquid","es":"cleaner liquid","pt":"cleaner liquid","fr":"cleaner liquid","de":"cleaner liquid","it":"cleaner liquid","nl":"reinigingsvloeistof","zh":"清洁液","ja":"洗浄液","ru":"жидкое чистящее средство"}', 10
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'cleaning_maintenance/cleaner/materials/cleaner_mix', 'cleaning_maintenance', 'cleaner', 'materials', 'cleaning_maintenance/cleaner/materials/cleaner_mix', NULL, '{"en":"cleaner mix","es":"cleaner mix","pt":"cleaner mix","fr":"cleaner mix","de":"cleaner mix","it":"cleaner mix","nl":"reinigingsmengsel","zh":"清洁混合物","ja":"洗浄ミックス","ru":"чистящая смесь"}', 12
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'cleaning_maintenance/cleaner/materials/coating', 'cleaning_maintenance', 'cleaner', 'materials', 'cleaning_maintenance/cleaner/materials/coating', NULL, '{"en":"coating","es":"coating","pt":"coating","fr":"coating","de":"coating","it":"coating","nl":"coating","zh":"涂层","ja":"コーティング","ru":"покрытие"}', 14
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'cleaning_maintenance/cleaner/materials/compound', 'cleaning_maintenance', 'cleaner', 'materials', 'cleaning_maintenance/cleaner/materials/compound', NULL, '{"en":"compound","es":"compound","pt":"compound","fr":"compound","de":"compound","it":"compound","nl":"compound","zh":"化合物","ja":"コンパウンド","ru":"состав"}', 16
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'cleaning_maintenance/cleaner/materials/degreaser', 'cleaning_maintenance', 'cleaner', 'materials', 'cleaning_maintenance/cleaner/materials/degreaser', NULL, '{"en":"degreaser","es":"degreaser","pt":"degreaser","fr":"degreaser","de":"degreaser","it":"degreaser","nl":"ontvetter","zh":"脱脂剂","ja":"脱脂剤","ru":"обезжириватель"}', 18
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'cleaning_maintenance/cleaner/materials/detergent', 'cleaning_maintenance', 'cleaner', 'materials', 'cleaning_maintenance/cleaner/materials/detergent', NULL, '{"en":"detergent","es":"detergente","pt":"detergente","fr":"détergent","de":"Reinigungsmittel","it":"detergente","nl":"wasmiddel","zh":"洗涤剂","ja":"洗剤","ru":"моющее средство"}', 20
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'cleaning_maintenance/cleaner/materials/disinfectant', 'cleaning_maintenance', 'cleaner', 'materials', 'cleaning_maintenance/cleaner/materials/disinfectant', NULL, '{"en":"disinfectant","es":"desinfectante","pt":"desinfetante","fr":"désinfectant","de":"Desinfektionsmittel","it":"disinfettante","nl":"ontsmettingsmiddel","zh":"消毒剂","ja":"消毒剤","ru":"дезинфектант"}', 22
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'cleaning_maintenance/cleaner/materials/disinfectant_mix', 'cleaning_maintenance', 'cleaner', 'materials', 'cleaning_maintenance/cleaner/materials/disinfectant_mix', NULL, '{"en":"disinfectant mix","es":"disinfectant mix","pt":"disinfectant mix","fr":"disinfectant mix","de":"disinfectant mix","it":"disinfectant mix","nl":"ontsmettingsmengsel","zh":"消毒液","ja":"消毒剤ミックス","ru":"дезинфицирующий раствор"}', 24
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'cleaning_maintenance/cleaner/materials/floor_cleaner', 'cleaning_maintenance', 'cleaner', 'materials', 'cleaning_maintenance/cleaner/materials/floor_cleaner', NULL, '{"en":"floor cleaner","es":"floor cleaner","pt":"floor cleaner","fr":"floor cleaner","de":"floor cleaner","it":"floor cleaner","nl":"vloerreiniger","zh":"地板清洁剂","ja":"床洗浄剤","ru":"очиститель для пола"}', 26
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'cleaning_maintenance/cleaner/materials/foam', 'cleaning_maintenance', 'cleaner', 'materials', 'cleaning_maintenance/cleaner/materials/foam', NULL, '{"en":"foam","es":"foam","pt":"foam","fr":"foam","de":"foam","it":"foam","nl":"schuim","zh":"泡沫","ja":"フォーム","ru":"пена"}', 28
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'cleaning_maintenance/cleaner/materials/gel', 'cleaning_maintenance', 'cleaner', 'materials', 'cleaning_maintenance/cleaner/materials/gel', NULL, '{"en":"gel","es":"gel","pt":"gel","fr":"gel","de":"gel","it":"gel","nl":"gel","zh":"凝胶","ja":"ジェル","ru":"гель"}', 30
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'cleaning_maintenance/cleaner/materials/glass_cleaner', 'cleaning_maintenance', 'cleaner', 'materials', 'cleaning_maintenance/cleaner/materials/glass_cleaner', NULL, '{"en":"glass cleaner","es":"glass cleaner","pt":"glass cleaner","fr":"glass cleaner","de":"glass cleaner","it":"glass cleaner","nl":"glasreiniger","zh":"玻璃清洁剂","ja":"ガラスクリーナー","ru":"очиститель для стекол"}', 32
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'cleaning_maintenance/cleaner/materials/liquid', 'cleaning_maintenance', 'cleaner', 'materials', 'cleaning_maintenance/cleaner/materials/liquid', NULL, '{"en":"liquid","es":"liquid","pt":"liquid","fr":"liquid","de":"liquid","it":"liquid","nl":"vloeistof","zh":"液体","ja":"液体","ru":"жидкость"}', 34
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'cleaning_maintenance/cleaner/materials/paste', 'cleaning_maintenance', 'cleaner', 'materials', 'cleaning_maintenance/cleaner/materials/paste', NULL, '{"en":"paste","es":"paste","pt":"paste","fr":"paste","de":"paste","it":"paste","nl":"pasta","zh":"糊","ja":"ペースト","ru":"паста"}', 36
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'cleaning_maintenance/cleaner/materials/polish', 'cleaning_maintenance', 'cleaner', 'materials', 'cleaning_maintenance/cleaner/materials/polish', NULL, '{"en":"polish","es":"pulimento","pt":"polimento","fr":"polish","de":"Politur","it":"lucido","nl":"poetsmiddel","zh":"抛光剂","ja":"ポリッシュ","ru":"полироль"}', 38
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'cleaning_maintenance/cleaner/materials/powder', 'cleaning_maintenance', 'cleaner', 'materials', 'cleaning_maintenance/cleaner/materials/powder', NULL, '{"en":"powder","es":"powder","pt":"powder","fr":"powder","de":"powder","it":"powder","nl":"poeder","zh":"粉末","ja":"パウダー","ru":"порошок"}', 40
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'cleaning_maintenance/cleaner/materials/remover', 'cleaning_maintenance', 'cleaner', 'materials', 'cleaning_maintenance/cleaner/materials/remover', NULL, '{"en":"remover","es":"remover","pt":"remover","fr":"remover","de":"remover","it":"remover","nl":"verwijderaar","zh":"去除剂","ja":"リムーバー","ru":"средство для удаления"}', 42
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'cleaning_maintenance/cleaner/materials/sanitizer', 'cleaning_maintenance', 'cleaner', 'materials', 'cleaning_maintenance/cleaner/materials/sanitizer', NULL, '{"en":"sanitizer","es":"sanitizer","pt":"sanitizer","fr":"sanitizer","de":"sanitizer","it":"sanitizer","nl":"ontsmettingsmiddel","zh":"消毒液","ja":"サニタイザー","ru":"дезинфицирующее средство"}', 44
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'cleaning_maintenance/cleaner/materials/soap', 'cleaning_maintenance', 'cleaner', 'materials', 'cleaning_maintenance/cleaner/materials/soap', NULL, '{"en":"soap","es":"jabón","pt":"sabão","fr":"savon","de":"Seife","it":"sapone","nl":"zeep","zh":"肥皂","ja":"石鹸","ru":"мыло"}', 46
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'cleaning_maintenance/cleaner/materials/soap_mix', 'cleaning_maintenance', 'cleaner', 'materials', 'cleaning_maintenance/cleaner/materials/soap_mix', NULL, '{"en":"soap mix","es":"soap mix","pt":"soap mix","fr":"soap mix","de":"soap mix","it":"soap mix","nl":"zeepmengsel","zh":"皂液","ja":"ソープミックス","ru":"мыльный раствор"}', 48
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'cleaning_maintenance/cleaner/materials/solution', 'cleaning_maintenance', 'cleaner', 'materials', 'cleaning_maintenance/cleaner/materials/solution', NULL, '{"en":"solution","es":"solution","pt":"solution","fr":"solution","de":"solution","it":"solution","nl":"oplossing","zh":"溶液","ja":"溶液","ru":"раствор"}', 50
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'cleaning_maintenance/cleaner/materials/solution_mix', 'cleaning_maintenance', 'cleaner', 'materials', 'cleaning_maintenance/cleaner/materials/solution_mix', NULL, '{"en":"solution mix","es":"solution mix","pt":"solution mix","fr":"solution mix","de":"solution mix","it":"solution mix","nl":"oplossingsmengsel","zh":"溶液混合物","ja":"溶液ミックス","ru":"смешанный раствор"}', 52
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'cleaning_maintenance/cleaner/materials/spray', 'cleaning_maintenance', 'cleaner', 'materials', 'cleaning_maintenance/cleaner/materials/spray', NULL, '{"en":"spray","es":"spray","pt":"spray","fr":"spray","de":"Spray","it":"spray","nl":"spray","zh":"喷雾","ja":"スプレー","ru":"спрей"}', 54
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'cleaning_maintenance/cleaner/materials/treatment', 'cleaning_maintenance', 'cleaner', 'materials', 'cleaning_maintenance/cleaner/materials/treatment', NULL, '{"en":"treatment","es":"treatment","pt":"treatment","fr":"treatment","de":"treatment","it":"treatment","nl":"behandeling","zh":"处理剂","ja":"トリートメント","ru":"обработка"}', 56
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'cleaning_maintenance/cleaner/materials/wax', 'cleaning_maintenance', 'cleaner', 'materials', 'cleaning_maintenance/cleaner/materials/wax', NULL, '{"en":"wax","es":"cera","pt":"cera","fr":"cire","de":"Wachs","it":"cera","nl":"was","zh":"蜡","ja":"ワックス","ru":"воск"}', 58
);

INSERT INTO public.sectors (id, job_id, name, icon, sort_order) VALUES (
  'laundry_worker', 'cleaning_maintenance', '{"en":"Laundry Worker","es":"Lavandero","pt":"Lavadeiro","fr":"Blanchisseur","de":"Wäschereimitarbeiter","it":"Lavandaio","nl":"Wasserijmedewerker","zh":"洗衣工","ja":"洗濯作業員","ru":"Работник прачечной"}', '👕', 1
);
INSERT INTO public.roles (id, job_id, sector_id, name, icon, sort_order) VALUES (
  'tools', 'cleaning_maintenance', 'laundry_worker', '{"en":"Tools","es":"Herramientas","pt":"Ferramentas","fr":"Outils","de":"Werkzeuge","it":"Attrezzi","nl":"Gereedschap","zh":"工具","ja":"道具","ru":"Инструменты"}', '🔧', 0
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'cleaning_maintenance/laundry_worker/tools/bag', 'cleaning_maintenance', 'laundry_worker', 'tools', 'cleaning_maintenance/laundry_worker/tools/bag', NULL, '{"en":"bag","es":"bolsa","pt":"saco","fr":"sac","de":"Tasche","it":"borsa","nl":"tas","zh":"袋子","ja":"バッグ","ru":"сумка"}', 0
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'cleaning_maintenance/laundry_worker/tools/basket', 'cleaning_maintenance', 'laundry_worker', 'tools', 'cleaning_maintenance/laundry_worker/tools/basket', NULL, '{"en":"basket","es":"cesta","pt":"cesto","fr":"panier","de":"Korb","it":"cesto","nl":"mand","zh":"篮子","ja":"バスケット","ru":"корзина"}', 2
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'cleaning_maintenance/laundry_worker/tools/bin', 'cleaning_maintenance', 'laundry_worker', 'tools', 'cleaning_maintenance/laundry_worker/tools/bin', NULL, '{"en":"bin","es":"cubo de basura","pt":"lixeira","fr":"poubelle","de":"Mülleimer","it":"bidone","nl":"prullenbak","zh":"垃圾桶","ja":"ビン","ru":"мусорное ведро"}', 4
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'cleaning_maintenance/laundry_worker/tools/brush', 'cleaning_maintenance', 'laundry_worker', 'tools', 'cleaning_maintenance/laundry_worker/tools/brush', NULL, '{"en":"brush","es":"cepillo","pt":"escova","fr":"brosse","de":"Bürste","it":"spazzola","nl":"borstel","zh":"刷子","ja":"ブラシ","ru":"кисть"}', 6
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'cleaning_maintenance/laundry_worker/tools/cart', 'cleaning_maintenance', 'laundry_worker', 'tools', 'cleaning_maintenance/laundry_worker/tools/cart', NULL, '{"en":"cart","es":"carrito","pt":"carrinho","fr":"chariot","de":"Wagen","it":"carrello","nl":"kar","zh":"推车","ja":"カート","ru":"тележка"}', 8
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'cleaning_maintenance/laundry_worker/tools/clip', 'cleaning_maintenance', 'laundry_worker', 'tools', 'cleaning_maintenance/laundry_worker/tools/clip', NULL, '{"en":"clip","es":"clip","pt":"clip","fr":"clip","de":"clip","it":"clip","nl":"clip","zh":"夹子","ja":"クリップ","ru":"зажим"}', 10
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'cleaning_maintenance/laundry_worker/tools/container', 'cleaning_maintenance', 'laundry_worker', 'tools', 'cleaning_maintenance/laundry_worker/tools/container', NULL, '{"en":"container","es":"contenedor","pt":"recipiente","fr":"conteneur","de":"Behälter","it":"contenitore","nl":"container","zh":"容器","ja":"コンテナ","ru":"контейнер"}', 12
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'cleaning_maintenance/laundry_worker/tools/dryer', 'cleaning_maintenance', 'laundry_worker', 'tools', 'cleaning_maintenance/laundry_worker/tools/dryer', NULL, '{"en":"dryer","es":"dryer","pt":"dryer","fr":"dryer","de":"dryer","it":"dryer","nl":"droger","zh":"烘干机","ja":"乾燥機","ru":"сушилка"}', 14
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'cleaning_maintenance/laundry_worker/tools/folding_table', 'cleaning_maintenance', 'laundry_worker', 'tools', 'cleaning_maintenance/laundry_worker/tools/folding_table', NULL, '{"en":"folding table","es":"folding table","pt":"folding table","fr":"folding table","de":"folding table","it":"folding table","nl":"klaptafel","zh":"折叠桌","ja":"折りたたみテーブル","ru":"складной стол"}', 16
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'cleaning_maintenance/laundry_worker/tools/hanger', 'cleaning_maintenance', 'laundry_worker', 'tools', 'cleaning_maintenance/laundry_worker/tools/hanger', NULL, '{"en":"hanger","es":"hanger","pt":"hanger","fr":"hanger","de":"hanger","it":"hanger","nl":"kleerhanger","zh":"衣架","ja":"ハンガー","ru":"вешалка"}', 18
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'cleaning_maintenance/laundry_worker/tools/iron', 'cleaning_maintenance', 'laundry_worker', 'tools', 'cleaning_maintenance/laundry_worker/tools/iron', NULL, '{"en":"iron","es":"iron","pt":"iron","fr":"iron","de":"iron","it":"iron","nl":"strijkijzer","zh":"熨斗","ja":"アイロン","ru":"утюг"}', 20
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'cleaning_maintenance/laundry_worker/tools/ironing_board', 'cleaning_maintenance', 'laundry_worker', 'tools', 'cleaning_maintenance/laundry_worker/tools/ironing_board', NULL, '{"en":"ironing board","es":"ironing board","pt":"ironing board","fr":"ironing board","de":"ironing board","it":"ironing board","nl":"strijkplank","zh":"熨衣板","ja":"アイロン台","ru":"гладильная доска"}', 22
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'cleaning_maintenance/laundry_worker/tools/net', 'cleaning_maintenance', 'laundry_worker', 'tools', 'cleaning_maintenance/laundry_worker/tools/net', NULL, '{"en":"net","es":"red","pt":"rede","fr":"filet","de":"Netz","it":"rete","nl":"net","zh":"网","ja":"ネット","ru":"сетка"}', 24
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'cleaning_maintenance/laundry_worker/tools/press_machine', 'cleaning_maintenance', 'laundry_worker', 'tools', 'cleaning_maintenance/laundry_worker/tools/press_machine', NULL, '{"en":"press machine","es":"press machine","pt":"press machine","fr":"press machine","de":"press machine","it":"press machine","nl":"persmachine","zh":"压力机","ja":"プレス機","ru":"прессовочная машина"}', 26
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'cleaning_maintenance/laundry_worker/tools/rack', 'cleaning_maintenance', 'laundry_worker', 'tools', 'cleaning_maintenance/laundry_worker/tools/rack', NULL, '{"en":"rack","es":"estante","pt":"prateleira","fr":"étagère","de":"Regal","it":"scaffale","nl":"rek","zh":"货架","ja":"ラック","ru":"стеллаж"}', 28
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'cleaning_maintenance/laundry_worker/tools/roller', 'cleaning_maintenance', 'laundry_worker', 'tools', 'cleaning_maintenance/laundry_worker/tools/roller', NULL, '{"en":"roller","es":"rodillo","pt":"rolo","fr":"rouleau","de":"Rolle","it":"rullo","nl":"roller","zh":"滚筒","ja":"ローラー","ru":"валик"}', 30
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'cleaning_maintenance/laundry_worker/tools/sorter', 'cleaning_maintenance', 'laundry_worker', 'tools', 'cleaning_maintenance/laundry_worker/tools/sorter', NULL, '{"en":"sorter","es":"sorter","pt":"sorter","fr":"sorter","de":"sorter","it":"sorter","nl":"sorteerder","zh":"分类机","ja":"ソーター","ru":"сортировщик"}', 32
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'cleaning_maintenance/laundry_worker/tools/steamer', 'cleaning_maintenance', 'laundry_worker', 'tools', 'cleaning_maintenance/laundry_worker/tools/steamer', NULL, '{"en":"steamer","es":"steamer","pt":"steamer","fr":"steamer","de":"steamer","it":"steamer","nl":"stomer","zh":"蒸锅","ja":"スチーマー","ru":"пароварка"}', 34
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'cleaning_maintenance/laundry_worker/tools/trolley', 'cleaning_maintenance', 'laundry_worker', 'tools', 'cleaning_maintenance/laundry_worker/tools/trolley', NULL, '{"en":"trolley","es":"carrito","pt":"carrinho","fr":"chariot","de":"Trolley","it":"carrello","nl":"trolley","zh":"手推车","ja":"トロリー","ru":"тележка"}', 36
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'cleaning_maintenance/laundry_worker/tools/washing_machine', 'cleaning_maintenance', 'laundry_worker', 'tools', 'cleaning_maintenance/laundry_worker/tools/washing_machine', NULL, '{"en":"washing machine","es":"washing machine","pt":"washing machine","fr":"washing machine","de":"washing machine","it":"washing machine","nl":"wasmachine","zh":"洗衣机","ja":"洗濯機","ru":"стиральная машина"}', 38
);
INSERT INTO public.roles (id, job_id, sector_id, name, icon, sort_order) VALUES (
  'materials', 'cleaning_maintenance', 'laundry_worker', '{"en":"Materials","es":"Materiales","pt":"Materiais","fr":"Matériaux","de":"Materialien","it":"Materiali","nl":"Materialen","zh":"材料","ja":"材料","ru":"Материалы"}', '📦', 1
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'cleaning_maintenance/laundry_worker/materials/additive', 'cleaning_maintenance', 'laundry_worker', 'materials', 'cleaning_maintenance/laundry_worker/materials/additive', NULL, '{"en":"additive","es":"additive","pt":"additive","fr":"additive","de":"additive","it":"additive","nl":"additief","zh":"添加剂","ja":"添加剤","ru":"добавка"}', 0
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'cleaning_maintenance/laundry_worker/materials/agent', 'cleaning_maintenance', 'laundry_worker', 'materials', 'cleaning_maintenance/laundry_worker/materials/agent', NULL, '{"en":"agent","es":"agent","pt":"agent","fr":"agent","de":"agent","it":"agent","nl":"middel","zh":"试剂","ja":"薬剤","ru":"агент"}', 2
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'cleaning_maintenance/laundry_worker/materials/bleach', 'cleaning_maintenance', 'laundry_worker', 'materials', 'cleaning_maintenance/laundry_worker/materials/bleach', NULL, '{"en":"bleach","es":"lejía","pt":"alvejante","fr":"eau de javel","de":"Bleichmittel","it":"candeggina","nl":"bleekmiddel","zh":"漂白剂","ja":"漂白剤","ru":"отбеливатель"}', 4
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'cleaning_maintenance/laundry_worker/materials/booster', 'cleaning_maintenance', 'laundry_worker', 'materials', 'cleaning_maintenance/laundry_worker/materials/booster', NULL, '{"en":"booster","es":"booster","pt":"booster","fr":"booster","de":"booster","it":"booster","nl":"booster","zh":"增压器","ja":"ブースター","ru":"бустер"}', 6
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'cleaning_maintenance/laundry_worker/materials/capsule', 'cleaning_maintenance', 'laundry_worker', 'materials', 'cleaning_maintenance/laundry_worker/materials/capsule', NULL, '{"en":"capsule","es":"capsule","pt":"capsule","fr":"capsule","de":"capsule","it":"capsule","nl":"capsule","zh":"胶囊","ja":"カプセル","ru":"капсула"}', 8
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'cleaning_maintenance/laundry_worker/materials/chemical', 'cleaning_maintenance', 'laundry_worker', 'materials', 'cleaning_maintenance/laundry_worker/materials/chemical', NULL, '{"en":"chemical","es":"chemical","pt":"chemical","fr":"chemical","de":"chemical","it":"chemical","nl":"chemicalie","zh":"化学品","ja":"化学物質","ru":"химическое вещество"}', 10
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'cleaning_maintenance/laundry_worker/materials/cleaner', 'cleaning_maintenance', 'laundry_worker', 'materials', 'cleaning_maintenance/laundry_worker/materials/cleaner', NULL, '{"en":"cleaner","es":"cleaner","pt":"cleaner","fr":"cleaner","de":"cleaner","it":"cleaner","nl":"reiniger","zh":"清洁剂","ja":"洗浄剤","ru":"чистящее средство"}', 12
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'cleaning_maintenance/laundry_worker/materials/conditioner', 'cleaning_maintenance', 'laundry_worker', 'materials', 'cleaning_maintenance/laundry_worker/materials/conditioner', NULL, '{"en":"conditioner","es":"conditioner","pt":"conditioner","fr":"conditioner","de":"conditioner","it":"conditioner","nl":"conditioner","zh":"护发素","ja":"コンディショナー","ru":"кондиционер"}', 14
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'cleaning_maintenance/laundry_worker/materials/detergent', 'cleaning_maintenance', 'laundry_worker', 'materials', 'cleaning_maintenance/laundry_worker/materials/detergent', NULL, '{"en":"detergent","es":"detergente","pt":"detergente","fr":"détergent","de":"Reinigungsmittel","it":"detergente","nl":"wasmiddel","zh":"洗涤剂","ja":"洗剤","ru":"моющее средство"}', 16
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'cleaning_maintenance/laundry_worker/materials/enzyme', 'cleaning_maintenance', 'laundry_worker', 'materials', 'cleaning_maintenance/laundry_worker/materials/enzyme', NULL, '{"en":"enzyme","es":"enzyme","pt":"enzyme","fr":"enzyme","de":"enzyme","it":"enzyme","nl":"enzym","zh":"酶","ja":"酵素","ru":"фермент"}', 18
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'cleaning_maintenance/laundry_worker/materials/fabric_softener', 'cleaning_maintenance', 'laundry_worker', 'materials', 'cleaning_maintenance/laundry_worker/materials/fabric_softener', NULL, '{"en":"fabric softener","es":"fabric softener","pt":"fabric softener","fr":"fabric softener","de":"fabric softener","it":"fabric softener","nl":"wasverzachter","zh":"织物柔顺剂","ja":"柔軟剤","ru":"кондиционер для белья"}', 20
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'cleaning_maintenance/laundry_worker/materials/formula', 'cleaning_maintenance', 'laundry_worker', 'materials', 'cleaning_maintenance/laundry_worker/materials/formula', NULL, '{"en":"formula","es":"formula","pt":"formula","fr":"formula","de":"formula","it":"formula","nl":"formule","zh":"配方","ja":"フォーミュラ","ru":"формула"}', 22
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'cleaning_maintenance/laundry_worker/materials/fragrance', 'cleaning_maintenance', 'laundry_worker', 'materials', 'cleaning_maintenance/laundry_worker/materials/fragrance', NULL, '{"en":"fragrance","es":"fragrance","pt":"fragrance","fr":"fragrance","de":"fragrance","it":"fragrance","nl":"geur","zh":"香味","ja":"フレグランス","ru":"аромат"}', 24
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'cleaning_maintenance/laundry_worker/materials/gel', 'cleaning_maintenance', 'laundry_worker', 'materials', 'cleaning_maintenance/laundry_worker/materials/gel', NULL, '{"en":"gel","es":"gel","pt":"gel","fr":"gel","de":"gel","it":"gel","nl":"gel","zh":"凝胶","ja":"ジェル","ru":"гель"}', 26
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'cleaning_maintenance/laundry_worker/materials/liquid', 'cleaning_maintenance', 'laundry_worker', 'materials', 'cleaning_maintenance/laundry_worker/materials/liquid', NULL, '{"en":"liquid","es":"liquid","pt":"liquid","fr":"liquid","de":"liquid","it":"liquid","nl":"vloeistof","zh":"液体","ja":"液体","ru":"жидкость"}', 28
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'cleaning_maintenance/laundry_worker/materials/mix', 'cleaning_maintenance', 'laundry_worker', 'materials', 'cleaning_maintenance/laundry_worker/materials/mix', NULL, '{"en":"mix","es":"mix","pt":"mix","fr":"mix","de":"mix","it":"mix","nl":"mengsel","zh":"混合物","ja":"ミックス","ru":"смесь"}', 30
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'cleaning_maintenance/laundry_worker/materials/powder', 'cleaning_maintenance', 'laundry_worker', 'materials', 'cleaning_maintenance/laundry_worker/materials/powder', NULL, '{"en":"powder","es":"powder","pt":"powder","fr":"powder","de":"powder","it":"powder","nl":"poeder","zh":"粉末","ja":"パウダー","ru":"порошок"}', 32
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'cleaning_maintenance/laundry_worker/materials/remover', 'cleaning_maintenance', 'laundry_worker', 'materials', 'cleaning_maintenance/laundry_worker/materials/remover', NULL, '{"en":"remover","es":"remover","pt":"remover","fr":"remover","de":"remover","it":"remover","nl":"verwijderaar","zh":"去除剂","ja":"リムーバー","ru":"средство для удаления"}', 34
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'cleaning_maintenance/laundry_worker/materials/rinse', 'cleaning_maintenance', 'laundry_worker', 'materials', 'cleaning_maintenance/laundry_worker/materials/rinse', NULL, '{"en":"rinse","es":"rinse","pt":"rinse","fr":"rinse","de":"rinse","it":"rinse","nl":"spoelmiddel","zh":"漂洗液","ja":"リンス","ru":"ополаскиватель"}', 36
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'cleaning_maintenance/laundry_worker/materials/sanitizer', 'cleaning_maintenance', 'laundry_worker', 'materials', 'cleaning_maintenance/laundry_worker/materials/sanitizer', NULL, '{"en":"sanitizer","es":"sanitizer","pt":"sanitizer","fr":"sanitizer","de":"sanitizer","it":"sanitizer","nl":"ontsmettingsmiddel","zh":"消毒液","ja":"サニタイザー","ru":"дезинфицирующее средство"}', 38
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'cleaning_maintenance/laundry_worker/materials/soap', 'cleaning_maintenance', 'laundry_worker', 'materials', 'cleaning_maintenance/laundry_worker/materials/soap', NULL, '{"en":"soap","es":"jabón","pt":"sabão","fr":"savon","de":"Seife","it":"sapone","nl":"zeep","zh":"肥皂","ja":"石鹸","ru":"мыло"}', 40
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'cleaning_maintenance/laundry_worker/materials/softener', 'cleaning_maintenance', 'laundry_worker', 'materials', 'cleaning_maintenance/laundry_worker/materials/softener', NULL, '{"en":"softener","es":"softener","pt":"softener","fr":"softener","de":"softener","it":"softener","nl":"verzachter","zh":"软化剂","ja":"ソフトナー","ru":"смягчитель"}', 42
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'cleaning_maintenance/laundry_worker/materials/solution', 'cleaning_maintenance', 'laundry_worker', 'materials', 'cleaning_maintenance/laundry_worker/materials/solution', NULL, '{"en":"solution","es":"solution","pt":"solution","fr":"solution","de":"solution","it":"solution","nl":"oplossing","zh":"溶液","ja":"溶液","ru":"раствор"}', 44
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'cleaning_maintenance/laundry_worker/materials/spray', 'cleaning_maintenance', 'laundry_worker', 'materials', 'cleaning_maintenance/laundry_worker/materials/spray', NULL, '{"en":"spray","es":"spray","pt":"spray","fr":"spray","de":"Spray","it":"spray","nl":"spray","zh":"喷雾","ja":"スプレー","ru":"спрей"}', 46
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'cleaning_maintenance/laundry_worker/materials/stain_remover', 'cleaning_maintenance', 'laundry_worker', 'materials', 'cleaning_maintenance/laundry_worker/materials/stain_remover', NULL, '{"en":"stain remover","es":"stain remover","pt":"stain remover","fr":"stain remover","de":"stain remover","it":"stain remover","nl":"vlekkenverwijderaar","zh":"去污剂","ja":"染み抜き","ru":"пятновыводитель"}', 48
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'cleaning_maintenance/laundry_worker/materials/starch', 'cleaning_maintenance', 'laundry_worker', 'materials', 'cleaning_maintenance/laundry_worker/materials/starch', NULL, '{"en":"starch","es":"starch","pt":"starch","fr":"starch","de":"starch","it":"starch","nl":"stijfsel","zh":"淀粉","ja":"デンプン","ru":"крахмал"}', 50
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'cleaning_maintenance/laundry_worker/materials/tablet', 'cleaning_maintenance', 'laundry_worker', 'materials', 'cleaning_maintenance/laundry_worker/materials/tablet', NULL, '{"en":"tablet","es":"tablet","pt":"tablet","fr":"tablet","de":"tablet","it":"tablet","nl":"tablet","zh":"平板电脑","ja":"タブレット","ru":"планшет"}', 52
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'cleaning_maintenance/laundry_worker/materials/treatment', 'cleaning_maintenance', 'laundry_worker', 'materials', 'cleaning_maintenance/laundry_worker/materials/treatment', NULL, '{"en":"treatment","es":"treatment","pt":"treatment","fr":"treatment","de":"treatment","it":"treatment","nl":"behandeling","zh":"处理剂","ja":"トリートメント","ru":"обработка"}', 54
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'cleaning_maintenance/laundry_worker/materials/wash_liquid', 'cleaning_maintenance', 'laundry_worker', 'materials', 'cleaning_maintenance/laundry_worker/materials/wash_liquid', NULL, '{"en":"wash liquid","es":"wash liquid","pt":"wash liquid","fr":"wash liquid","de":"wash liquid","it":"wash liquid","nl":"wasvloeistof","zh":"洗涤液","ja":"洗浄液","ru":"жидкость для мытья"}', 56
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'cleaning_maintenance/laundry_worker/materials/wash_mix', 'cleaning_maintenance', 'laundry_worker', 'materials', 'cleaning_maintenance/laundry_worker/materials/wash_mix', NULL, '{"en":"wash mix","es":"wash mix","pt":"wash mix","fr":"wash mix","de":"wash mix","it":"wash mix","nl":"wasmengsel","zh":"洗涤混合物","ja":"洗浄ミックス","ru":"моющий раствор"}', 58
);

INSERT INTO public.sectors (id, job_id, name, icon, sort_order) VALUES (
  'maintenance', 'cleaning_maintenance', '{"en":"Maintenance","es":"Mantenimiento","pt":"Manutenção","fr":"Maintenance","de":"Wartung","it":"Manutenzione","nl":"Onderhoud","zh":"维护","ja":"メンテナンス","ru":"Техобслуживание"}', '🔧', 2
);
INSERT INTO public.roles (id, job_id, sector_id, name, icon, sort_order) VALUES (
  'tools', 'cleaning_maintenance', 'maintenance', '{"en":"Tools","es":"Herramientas","pt":"Ferramentas","fr":"Outils","de":"Werkzeuge","it":"Attrezzi","nl":"Gereedschap","zh":"工具","ja":"道具","ru":"Инструменты"}', '🔧', 0
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'cleaning_maintenance/maintenance/tools/cable', 'cleaning_maintenance', 'maintenance', 'tools', 'cleaning_maintenance/maintenance/tools/cable', NULL, '{"en":"cable","es":"cable","pt":"cable","fr":"cable","de":"cable","it":"cable","nl":"kabel","zh":"电缆","ja":"ケーブル","ru":"кабель"}', 0
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'cleaning_maintenance/maintenance/tools/cart', 'cleaning_maintenance', 'maintenance', 'tools', 'cleaning_maintenance/maintenance/tools/cart', NULL, '{"en":"cart","es":"carrito","pt":"carrinho","fr":"chariot","de":"Wagen","it":"carrello","nl":"kar","zh":"推车","ja":"カート","ru":"тележка"}', 2
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'cleaning_maintenance/maintenance/tools/charger', 'cleaning_maintenance', 'maintenance', 'tools', 'cleaning_maintenance/maintenance/tools/charger', NULL, '{"en":"charger","es":"charger","pt":"charger","fr":"charger","de":"charger","it":"charger","nl":"oplader","zh":"充电器","ja":"充電器","ru":"зарядное устройство"}', 4
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'cleaning_maintenance/maintenance/tools/compressor', 'cleaning_maintenance', 'maintenance', 'tools', 'cleaning_maintenance/maintenance/tools/compressor', NULL, '{"en":"compressor","es":"compressor","pt":"compressor","fr":"compressor","de":"compressor","it":"compressor","nl":"compressor","zh":"压缩机","ja":"コンプレッサー","ru":"компрессор"}', 6
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'cleaning_maintenance/maintenance/tools/cutter', 'cleaning_maintenance', 'maintenance', 'tools', 'cleaning_maintenance/maintenance/tools/cutter', NULL, '{"en":"cutter","es":"cortador","pt":"cortador","fr":"cutter","de":"Cutter","it":"taglierino","nl":"snijder","zh":"切割机","ja":"カッター","ru":"резак"}', 8
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'cleaning_maintenance/maintenance/tools/drill', 'cleaning_maintenance', 'maintenance', 'tools', 'cleaning_maintenance/maintenance/tools/drill', NULL, '{"en":"drill","es":"taladro","pt":"furadeira","fr":"perceuse","de":"Bohrmaschine","it":"trapano","nl":"boor","zh":"钻头","ja":"ドリル","ru":"дрель"}', 10
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'cleaning_maintenance/maintenance/tools/generator', 'cleaning_maintenance', 'maintenance', 'tools', 'cleaning_maintenance/maintenance/tools/generator', NULL, '{"en":"generator","es":"generator","pt":"generator","fr":"generator","de":"generator","it":"generator","nl":"generator","zh":"发电机","ja":"発電機","ru":"генератор"}', 12
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'cleaning_maintenance/maintenance/tools/grinder', 'cleaning_maintenance', 'maintenance', 'tools', 'cleaning_maintenance/maintenance/tools/grinder', NULL, '{"en":"grinder","es":"grinder","pt":"grinder","fr":"grinder","de":"grinder","it":"grinder","nl":"slijpmachine","zh":"研磨机","ja":"グラインダー","ru":"шлифовальная машина"}', 14
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'cleaning_maintenance/maintenance/tools/hammer', 'cleaning_maintenance', 'maintenance', 'tools', 'cleaning_maintenance/maintenance/tools/hammer', NULL, '{"en":"hammer","es":"martillo","pt":"martelo","fr":"marteau","de":"Hammer","it":"martello","nl":"hamer","zh":"锤子","ja":"ハンマー","ru":"молоток"}', 16
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'cleaning_maintenance/maintenance/tools/ladder', 'cleaning_maintenance', 'maintenance', 'tools', 'cleaning_maintenance/maintenance/tools/ladder', NULL, '{"en":"ladder","es":"escalera","pt":"escada","fr":"échelle","de":"Leiter","it":"scala","nl":"ladder","zh":"梯子","ja":"はしご","ru":"лестница"}', 18
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'cleaning_maintenance/maintenance/tools/monitor', 'cleaning_maintenance', 'maintenance', 'tools', 'cleaning_maintenance/maintenance/tools/monitor', NULL, '{"en":"monitor","es":"monitor","pt":"monitor","fr":"monitor","de":"monitor","it":"monitor","nl":"monitor","zh":"显示器","ja":"モニター","ru":"монитор"}', 20
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'cleaning_maintenance/maintenance/tools/panel', 'cleaning_maintenance', 'maintenance', 'tools', 'cleaning_maintenance/maintenance/tools/panel', NULL, '{"en":"panel","es":"panel","pt":"panel","fr":"panel","de":"panel","it":"panel","nl":"paneel","zh":"面板","ja":"パネル","ru":"панель"}', 22
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'cleaning_maintenance/maintenance/tools/platform', 'cleaning_maintenance', 'maintenance', 'tools', 'cleaning_maintenance/maintenance/tools/platform', NULL, '{"en":"platform","es":"platform","pt":"platform","fr":"platform","de":"platform","it":"platform","nl":"platform","zh":"站台","ja":"プラットフォーム","ru":"платформа"}', 24
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'cleaning_maintenance/maintenance/tools/pump', 'cleaning_maintenance', 'maintenance', 'tools', 'cleaning_maintenance/maintenance/tools/pump', NULL, '{"en":"pump","es":"bomba","pt":"bomba","fr":"pompe","de":"Pumpe","it":"pompa","nl":"pomp","zh":"泵","ja":"ポンプ","ru":"насос"}', 26
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'cleaning_maintenance/maintenance/tools/screwdriver', 'cleaning_maintenance', 'maintenance', 'tools', 'cleaning_maintenance/maintenance/tools/screwdriver', NULL, '{"en":"screwdriver","es":"screwdriver","pt":"screwdriver","fr":"screwdriver","de":"screwdriver","it":"screwdriver","nl":"schroevendraaier","zh":"螺丝刀","ja":"ドライバー","ru":"отвертка"}', 28
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'cleaning_maintenance/maintenance/tools/sensor', 'cleaning_maintenance', 'maintenance', 'tools', 'cleaning_maintenance/maintenance/tools/sensor', NULL, '{"en":"sensor","es":"sensor","pt":"sensor","fr":"sensor","de":"sensor","it":"sensor","nl":"sensor","zh":"传感器","ja":"センサー","ru":"датчик"}', 30
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'cleaning_maintenance/maintenance/tools/switch', 'cleaning_maintenance', 'maintenance', 'tools', 'cleaning_maintenance/maintenance/tools/switch', NULL, '{"en":"switch","es":"switch","pt":"switch","fr":"switch","de":"switch","it":"switch","nl":"schakelaar","zh":"开关","ja":"スイッチ","ru":"выключатель"}', 32
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'cleaning_maintenance/maintenance/tools/tester', 'cleaning_maintenance', 'maintenance', 'tools', 'cleaning_maintenance/maintenance/tools/tester', NULL, '{"en":"tester","es":"tester","pt":"tester","fr":"tester","de":"tester","it":"tester","nl":"tester","zh":"测试仪","ja":"テスター","ru":"тестер"}', 34
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'cleaning_maintenance/maintenance/tools/toolbox', 'cleaning_maintenance', 'maintenance', 'tools', 'cleaning_maintenance/maintenance/tools/toolbox', NULL, '{"en":"toolbox","es":"toolbox","pt":"toolbox","fr":"toolbox","de":"toolbox","it":"toolbox","nl":"gereedschapskist","zh":"工具箱","ja":"ツールボックス","ru":"ящик для инструментов"}', 36
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'cleaning_maintenance/maintenance/tools/torch', 'cleaning_maintenance', 'maintenance', 'tools', 'cleaning_maintenance/maintenance/tools/torch', NULL, '{"en":"torch","es":"torch","pt":"torch","fr":"torch","de":"torch","it":"torch","nl":"lasbrander","zh":"焊炬","ja":"トーチ","ru":"горелка"}', 38
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'cleaning_maintenance/maintenance/tools/welder', 'cleaning_maintenance', 'maintenance', 'tools', 'cleaning_maintenance/maintenance/tools/welder', NULL, '{"en":"welder","es":"welder","pt":"welder","fr":"welder","de":"welder","it":"welder","nl":"lasmachine","zh":"焊接机","ja":"溶接機","ru":"сварочный аппарат"}', 40
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'cleaning_maintenance/maintenance/tools/wrench', 'cleaning_maintenance', 'maintenance', 'tools', 'cleaning_maintenance/maintenance/tools/wrench', NULL, '{"en":"wrench","es":"llave","pt":"chave inglesa","fr":"clé","de":"Schraubenschlüssel","it":"chiave","nl":"moersleutel","zh":"扳手","ja":"レンチ","ru":"гаечный ключ"}', 42
);
INSERT INTO public.roles (id, job_id, sector_id, name, icon, sort_order) VALUES (
  'materials', 'cleaning_maintenance', 'maintenance', '{"en":"Materials","es":"Materiales","pt":"Materiais","fr":"Matériaux","de":"Materialien","it":"Materiali","nl":"Materialen","zh":"材料","ja":"材料","ru":"Материалы"}', '📦', 1
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'cleaning_maintenance/maintenance/materials/battery', 'cleaning_maintenance', 'maintenance', 'materials', 'cleaning_maintenance/maintenance/materials/battery', NULL, '{"en":"battery","es":"battery","pt":"battery","fr":"battery","de":"battery","it":"battery","nl":"batterij","zh":"电池","ja":"バッテリー","ru":"батарея"}', 0
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'cleaning_maintenance/maintenance/materials/bolt', 'cleaning_maintenance', 'maintenance', 'materials', 'cleaning_maintenance/maintenance/materials/bolt', NULL, '{"en":"bolt","es":"bolt","pt":"bolt","fr":"bolt","de":"bolt","it":"bolt","nl":"bout","zh":"螺栓","ja":"ボルト","ru":"болт"}', 2
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'cleaning_maintenance/maintenance/materials/boots', 'cleaning_maintenance', 'maintenance', 'materials', 'cleaning_maintenance/maintenance/materials/boots', NULL, '{"en":"boots","es":"botas","pt":"botas","fr":"bottes","de":"Stiefel","it":"stivali","nl":"laarzen","zh":"靴子","ja":"ブーツ","ru":"ботинки"}', 4
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'cleaning_maintenance/maintenance/materials/chain', 'cleaning_maintenance', 'maintenance', 'materials', 'cleaning_maintenance/maintenance/materials/chain', NULL, '{"en":"chain","es":"cadena","pt":"corrente","fr":"chaîne","de":"Kette","it":"catena","nl":"ketting","zh":"链条","ja":"チェーン","ru":"цепь"}', 6
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'cleaning_maintenance/maintenance/materials/clamp', 'cleaning_maintenance', 'maintenance', 'materials', 'cleaning_maintenance/maintenance/materials/clamp', NULL, '{"en":"clamp","es":"clamp","pt":"clamp","fr":"clamp","de":"clamp","it":"clamp","nl":"klem","zh":"夹具","ja":"クランプ","ru":"зажим"}', 8
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'cleaning_maintenance/maintenance/materials/cleaner', 'cleaning_maintenance', 'maintenance', 'materials', 'cleaning_maintenance/maintenance/materials/cleaner', NULL, '{"en":"cleaner","es":"cleaner","pt":"cleaner","fr":"cleaner","de":"cleaner","it":"cleaner","nl":"reiniger","zh":"清洁剂","ja":"洗浄剤","ru":"чистящее средство"}', 10
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'cleaning_maintenance/maintenance/materials/filter', 'cleaning_maintenance', 'maintenance', 'materials', 'cleaning_maintenance/maintenance/materials/filter', NULL, '{"en":"filter","es":"filtro","pt":"filtro","fr":"filtre","de":"Filter","it":"filtro","nl":"filter","zh":"过滤器","ja":"フィルター","ru":"фильтр"}', 12
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'cleaning_maintenance/maintenance/materials/gloves', 'cleaning_maintenance', 'maintenance', 'materials', 'cleaning_maintenance/maintenance/materials/gloves', NULL, '{"en":"gloves","es":"guantes","pt":"luvas","fr":"gants","de":"Handschuhe","it":"guanti","nl":"handschoenen","zh":"手套","ja":"手袋","ru":"перчатки"}', 14
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'cleaning_maintenance/maintenance/materials/glue', 'cleaning_maintenance', 'maintenance', 'materials', 'cleaning_maintenance/maintenance/materials/glue', NULL, '{"en":"glue","es":"glue","pt":"glue","fr":"glue","de":"glue","it":"glue","nl":"lijm","zh":"胶水","ja":"接着剤","ru":"клей"}', 16
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'cleaning_maintenance/maintenance/materials/goggles', 'cleaning_maintenance', 'maintenance', 'materials', 'cleaning_maintenance/maintenance/materials/goggles', NULL, '{"en":"goggles","es":"gafas protectoras","pt":"óculos de proteção","fr":"lunettes","de":"Schutzbrille","it":"occhiali","nl":"veiligheidsbril","zh":"护目镜","ja":"ゴーグル","ru":"защитные очки"}', 18
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'cleaning_maintenance/maintenance/materials/grease', 'cleaning_maintenance', 'maintenance', 'materials', 'cleaning_maintenance/maintenance/materials/grease', NULL, '{"en":"grease","es":"grease","pt":"grease","fr":"grease","de":"grease","it":"grease","nl":"vet","zh":"润滑脂","ja":"グリース","ru":"смазка"}', 20
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'cleaning_maintenance/maintenance/materials/helmet', 'cleaning_maintenance', 'maintenance', 'materials', 'cleaning_maintenance/maintenance/materials/helmet', NULL, '{"en":"helmet","es":"casco","pt":"capacete","fr":"casque","de":"Helm","it":"casco","nl":"helm","zh":"安全帽","ja":"ヘルメット","ru":"каска"}', 22
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'cleaning_maintenance/maintenance/materials/hook', 'cleaning_maintenance', 'maintenance', 'materials', 'cleaning_maintenance/maintenance/materials/hook', NULL, '{"en":"hook","es":"gancho","pt":"gancho","fr":"crochet","de":"Haken","it":"gancio","nl":"haak","zh":"挂钩","ja":"フック","ru":"крюк"}', 24
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'cleaning_maintenance/maintenance/materials/hose', 'cleaning_maintenance', 'maintenance', 'materials', 'cleaning_maintenance/maintenance/materials/hose', NULL, '{"en":"hose","es":"manguera","pt":"mangueira","fr":"tuyau","de":"Schlauch","it":"tubo","nl":"slang","zh":"软管","ja":"ホース","ru":"шланг"}', 26
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'cleaning_maintenance/maintenance/materials/light', 'cleaning_maintenance', 'maintenance', 'materials', 'cleaning_maintenance/maintenance/materials/light', NULL, '{"en":"light","es":"light","pt":"light","fr":"light","de":"light","it":"light","nl":"lamp","zh":"灯光","ja":"ライト","ru":"свет"}', 28
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'cleaning_maintenance/maintenance/materials/mask', 'cleaning_maintenance', 'maintenance', 'materials', 'cleaning_maintenance/maintenance/materials/mask', NULL, '{"en":"mask","es":"mascarilla","pt":"máscara","fr":"masque","de":"Maske","it":"maschera","nl":"masker","zh":"口罩","ja":"マスク","ru":"маска"}', 30
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'cleaning_maintenance/maintenance/materials/nut', 'cleaning_maintenance', 'maintenance', 'materials', 'cleaning_maintenance/maintenance/materials/nut', NULL, '{"en":"nut","es":"nut","pt":"nut","fr":"nut","de":"nut","it":"nut","nl":"moer","zh":"螺母","ja":"ナット","ru":"гайка"}', 32
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'cleaning_maintenance/maintenance/materials/oil', 'cleaning_maintenance', 'maintenance', 'materials', 'cleaning_maintenance/maintenance/materials/oil', NULL, '{"en":"oil","es":"oil","pt":"oil","fr":"oil","de":"oil","it":"oil","nl":"olie","zh":"油","ja":"オイル","ru":"масло"}', 34
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'cleaning_maintenance/maintenance/materials/pipe', 'cleaning_maintenance', 'maintenance', 'materials', 'cleaning_maintenance/maintenance/materials/pipe', NULL, '{"en":"pipe","es":"tubo","pt":"cano","fr":"tuyau","de":"Rohr","it":"tubo","nl":"pijp","zh":"管道","ja":"パイプ","ru":"труба"}', 36
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'cleaning_maintenance/maintenance/materials/rope', 'cleaning_maintenance', 'maintenance', 'materials', 'cleaning_maintenance/maintenance/materials/rope', NULL, '{"en":"rope","es":"cuerda","pt":"corda","fr":"corde","de":"Seil","it":"corda","nl":"touw","zh":"绳子","ja":"ロープ","ru":"веревка"}', 38
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'cleaning_maintenance/maintenance/materials/screw', 'cleaning_maintenance', 'maintenance', 'materials', 'cleaning_maintenance/maintenance/materials/screw', NULL, '{"en":"screw","es":"screw","pt":"screw","fr":"screw","de":"screw","it":"screw","nl":"schroef","zh":"螺丝","ja":"ネジ","ru":"винт"}', 40
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'cleaning_maintenance/maintenance/materials/seal', 'cleaning_maintenance', 'maintenance', 'materials', 'cleaning_maintenance/maintenance/materials/seal', NULL, '{"en":"seal","es":"seal","pt":"seal","fr":"seal","de":"seal","it":"seal","nl":"afdichting","zh":"密封件","ja":"シール","ru":"уплотнение"}', 42
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'cleaning_maintenance/maintenance/materials/tape', 'cleaning_maintenance', 'maintenance', 'materials', 'cleaning_maintenance/maintenance/materials/tape', NULL, '{"en":"tape","es":"cinta","pt":"fita","fr":"ruban","de":"Klebeband","it":"nastro","nl":"tape","zh":"胶带","ja":"テープ","ru":"лента"}', 44
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'cleaning_maintenance/maintenance/materials/valve', 'cleaning_maintenance', 'maintenance', 'materials', 'cleaning_maintenance/maintenance/materials/valve', NULL, '{"en":"valve","es":"valve","pt":"valve","fr":"valve","de":"valve","it":"valve","nl":"klep","zh":"阀门","ja":"バルブ","ru":"клапан"}', 46
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'cleaning_maintenance/maintenance/materials/vest', 'cleaning_maintenance', 'maintenance', 'materials', 'cleaning_maintenance/maintenance/materials/vest', NULL, '{"en":"vest","es":"chaleco","pt":"colete","fr":"gilet","de":"Weste","it":"gilet","nl":"vest","zh":"背心","ja":"ベスト","ru":"жилет"}', 48
);

INSERT INTO public.jobs (id, name, icon, image_url, sort_order) VALUES (
  'construction', '{"en":"Construction","es":"Construcción","pt":"Construção","fr":"Construction","de":"Bauwesen","it":"Costruzione","nl":"Bouw","zh":"建筑","ja":"建設","ru":"Строительство"}', '🏗️', 'https://images.pexels.com/photos/1117452/pexels-photo-1117452.jpeg?auto=compress&cs=tinysrgb&w=800', 4
);

INSERT INTO public.sectors (id, job_id, name, icon, sort_order) VALUES (
  'bricklayer', 'construction', '{"en":"Bricklayer","es":"Albañil","pt":"Pedreiro","fr":"Maçon","de":"Maurer","it":"Muratore","nl":"Metselaar","zh":"砌砖工","ja":"左官","ru":"Каменщик"}', '🧱', 0
);
INSERT INTO public.roles (id, job_id, sector_id, name, icon, sort_order) VALUES (
  'tools', 'construction', 'bricklayer', '{"en":"Tools","es":"Herramientas","pt":"Ferramentas","fr":"Outils","de":"Werkzeuge","it":"Attrezzi","nl":"Gereedschap","zh":"工具","ja":"道具","ru":"Инструменты"}', '🔧', 0
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/bricklayer/tools/brush', 'construction', 'bricklayer', 'tools', 'construction/bricklayer/tools/brush', NULL, '{"en":"brush","es":"cepillo","pt":"escova","fr":"brosse","de":"Bürste","it":"spazzola","nl":"borstel","zh":"刷子","ja":"ブラシ","ru":"кисть"}', 0
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/bricklayer/tools/bucket', 'construction', 'bricklayer', 'tools', 'construction/bricklayer/tools/bucket', NULL, '{"en":"bucket","es":"cubo","pt":"balde","fr":"seau","de":"Eimer","it":"secchio","nl":"emmer","zh":"水桶","ja":"バケツ","ru":"ведро"}', 2
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/bricklayer/tools/chisel', 'construction', 'bricklayer', 'tools', 'construction/bricklayer/tools/chisel', NULL, '{"en":"chisel","es":"cincel","pt":"cinzel","fr":"ciseau","de":"Meißel","it":"scalpello","nl":"beitel","zh":"凿子","ja":"ノミ","ru":"долото"}', 4
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/bricklayer/tools/cutter', 'construction', 'bricklayer', 'tools', 'construction/bricklayer/tools/cutter', NULL, '{"en":"cutter","es":"cortador","pt":"cortador","fr":"cutter","de":"Cutter","it":"taglierino","nl":"snijder","zh":"切割机","ja":"カッター","ru":"резак"}', 6
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/bricklayer/tools/float', 'construction', 'bricklayer', 'tools', 'construction/bricklayer/tools/float', NULL, '{"en":"float","es":"llana flotante","pt":"desempenadeira","fr":"taloche","de":"Reibebrett","it":"frattazzo","nl":"zwevend","zh":"浮子","ja":"フロート","ru":"поплавок"}', 8
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/bricklayer/tools/hammer', 'construction', 'bricklayer', 'tools', 'construction/bricklayer/tools/hammer', NULL, '{"en":"hammer","es":"martillo","pt":"martelo","fr":"marteau","de":"Hammer","it":"martello","nl":"hamer","zh":"锤子","ja":"ハンマー","ru":"молоток"}', 10
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/bricklayer/tools/hoe', 'construction', 'bricklayer', 'tools', 'construction/bricklayer/tools/hoe', NULL, '{"en":"hoe","es":"azada","pt":"enxada","fr":"houe","de":"Hacke","it":"zappa","nl":"schoffel","zh":"锄头","ja":"鍬","ru":"мотыга"}', 12
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/bricklayer/tools/jointer', 'construction', 'bricklayer', 'tools', 'construction/bricklayer/tools/jointer', NULL, '{"en":"jointer","es":"jointer","pt":"jointer","fr":"jointer","de":"jointer","it":"jointer","nl":"voegmachine","zh":"刨床","ja":"ジョインター","ru":"фуговальный станок"}', 14
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/bricklayer/tools/level', 'construction', 'bricklayer', 'tools', 'construction/bricklayer/tools/level', NULL, '{"en":"level","es":"nivel","pt":"nível","fr":"niveau","de":"Wasserwaage","it":"livella","nl":"waterpas","zh":"水平仪","ja":"水平器","ru":"уровень"}', 16
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/bricklayer/tools/line', 'construction', 'bricklayer', 'tools', 'construction/bricklayer/tools/line', NULL, '{"en":"line","es":"line","pt":"line","fr":"line","de":"line","it":"line","nl":"lijn","zh":"线","ja":"ライン","ru":"линия"}', 18
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/bricklayer/tools/mallet', 'construction', 'bricklayer', 'tools', 'construction/bricklayer/tools/mallet', NULL, '{"en":"mallet","es":"mallet","pt":"mallet","fr":"mallet","de":"mallet","it":"mallet","nl":"houten hamer","zh":"木槌","ja":"マレット","ru":"деревянный молоток"}', 20
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/bricklayer/tools/mixer', 'construction', 'bricklayer', 'tools', 'construction/bricklayer/tools/mixer', NULL, '{"en":"mixer","es":"mezclador","pt":"betoneira","fr":"mélangeur","de":"Mischer","it":"miscelatore","nl":"mixer","zh":"搅拌机","ja":"ミキサー","ru":"миксер"}', 22
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/bricklayer/tools/pliers', 'construction', 'bricklayer', 'tools', 'construction/bricklayer/tools/pliers', NULL, '{"en":"pliers","es":"alicates","pt":"alicate","fr":"pinces","de":"Zange","it":"pinze","nl":"tang","zh":"钳子","ja":"プライヤー","ru":"плоскогубцы"}', 24
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/bricklayer/tools/saw', 'construction', 'bricklayer', 'tools', 'construction/bricklayer/tools/saw', NULL, '{"en":"saw","es":"sierra","pt":"serra","fr":"scie","de":"Säge","it":"sega","nl":"zaag","zh":"锯","ja":"ノコギリ","ru":"пила"}', 26
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/bricklayer/tools/scraper', 'construction', 'bricklayer', 'tools', 'construction/bricklayer/tools/scraper', NULL, '{"en":"scraper","es":"scraper","pt":"scraper","fr":"scraper","de":"scraper","it":"scraper","nl":"schraper","zh":"刮刀","ja":"スクレーパー","ru":"скребок"}', 28
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/bricklayer/tools/shovel', 'construction', 'bricklayer', 'tools', 'construction/bricklayer/tools/shovel', NULL, '{"en":"shovel","es":"pala","pt":"pá","fr":"pelle","de":"Schaufel","it":"vanga","nl":"schop","zh":"铲子","ja":"シャベル","ru":"лопата"}', 30
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/bricklayer/tools/square', 'construction', 'bricklayer', 'tools', 'construction/bricklayer/tools/square', NULL, '{"en":"square","es":"square","pt":"square","fr":"square","de":"square","it":"square","nl":"winkelhaak","zh":"角尺","ja":"スクエア","ru":"угольник"}', 32
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/bricklayer/tools/tape_measure', 'construction', 'bricklayer', 'tools', 'construction/bricklayer/tools/tape_measure', NULL, '{"en":"tape measure","es":"tape measure","pt":"tape measure","fr":"tape measure","de":"tape measure","it":"tape measure","nl":"meetlint","zh":"卷尺","ja":"メジャー","ru":"рулетка"}', 34
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/bricklayer/tools/trowel', 'construction', 'bricklayer', 'tools', 'construction/bricklayer/tools/trowel', NULL, '{"en":"trowel","es":"llana","pt":"colher de pedreiro","fr":"truelle","de":"Kelle","it":"cazzuola","nl":"truweel","zh":"抹刀","ja":"コテ","ru":"кельма"}', 36
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/bricklayer/tools/wheelbarrow', 'construction', 'bricklayer', 'tools', 'construction/bricklayer/tools/wheelbarrow', NULL, '{"en":"wheelbarrow","es":"carretilla","pt":"carrinho de mão","fr":"brouette","de":"Schubkarre","it":"carriola","nl":"kruiwagen","zh":"手推车","ja":"一輪車","ru":"тачка"}', 38
);
INSERT INTO public.roles (id, job_id, sector_id, name, icon, sort_order) VALUES (
  'materials', 'construction', 'bricklayer', '{"en":"Materials","es":"Materiales","pt":"Materiais","fr":"Matériaux","de":"Materialien","it":"Materiali","nl":"Materialen","zh":"材料","ja":"材料","ru":"Материалы"}', '📦', 1
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/bricklayer/materials/adhesive', 'construction', 'bricklayer', 'materials', 'construction/bricklayer/materials/adhesive', NULL, '{"en":"adhesive","es":"adhesive","pt":"adhesive","fr":"adhesive","de":"adhesive","it":"adhesive","nl":"lijm","zh":"粘合剂","ja":"接着剤","ru":"клей"}', 0
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/bricklayer/materials/base', 'construction', 'bricklayer', 'materials', 'construction/bricklayer/materials/base', NULL, '{"en":"base","es":"base","pt":"base","fr":"base","de":"base","it":"base","nl":"basis","zh":"底料","ja":"ベース","ru":"основа"}', 2
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/bricklayer/materials/blocks', 'construction', 'bricklayer', 'materials', 'construction/bricklayer/materials/blocks', NULL, '{"en":"blocks","es":"blocks","pt":"blocks","fr":"blocks","de":"blocks","it":"blocks","nl":"blokken","zh":"砖块","ja":"ブロック","ru":"блоки"}', 4
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/bricklayer/materials/bonding_agent', 'construction', 'bricklayer', 'materials', 'construction/bricklayer/materials/bonding_agent', NULL, '{"en":"bonding agent","es":"bonding agent","pt":"bonding agent","fr":"bonding agent","de":"bonding agent","it":"bonding agent","nl":"hechtmiddel","zh":"粘合剂","ja":"接着剤","ru":"связующее вещество"}', 6
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/bricklayer/materials/bricks', 'construction', 'bricklayer', 'materials', 'construction/bricklayer/materials/bricks', NULL, '{"en":"bricks","es":"bricks","pt":"bricks","fr":"bricks","de":"bricks","it":"bricks","nl":"stenen","zh":"砖块","ja":"レンガ","ru":"кирпичи"}', 8
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/bricklayer/materials/cement', 'construction', 'bricklayer', 'materials', 'construction/bricklayer/materials/cement', NULL, '{"en":"cement","es":"cement","pt":"cement","fr":"cement","de":"cement","it":"cement","nl":"cement","zh":"水泥","ja":"セメント","ru":"цемент"}', 10
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/bricklayer/materials/clay', 'construction', 'bricklayer', 'materials', 'construction/bricklayer/materials/clay', NULL, '{"en":"clay","es":"clay","pt":"clay","fr":"clay","de":"clay","it":"clay","nl":"klei","zh":"黏土","ja":"粘土","ru":"глина"}', 12
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/bricklayer/materials/coating', 'construction', 'bricklayer', 'materials', 'construction/bricklayer/materials/coating', NULL, '{"en":"coating","es":"coating","pt":"coating","fr":"coating","de":"coating","it":"coating","nl":"coating","zh":"涂层","ja":"コーティング","ru":"покрытие"}', 14
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/bricklayer/materials/compound', 'construction', 'bricklayer', 'materials', 'construction/bricklayer/materials/compound', NULL, '{"en":"compound","es":"compound","pt":"compound","fr":"compound","de":"compound","it":"compound","nl":"compound","zh":"化合物","ja":"コンパウンド","ru":"состав"}', 16
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/bricklayer/materials/concrete', 'construction', 'bricklayer', 'materials', 'construction/bricklayer/materials/concrete', NULL, '{"en":"concrete","es":"concrete","pt":"concrete","fr":"concrete","de":"concrete","it":"concrete","nl":"beton","zh":"混凝土","ja":"コンクリート","ru":"бетон"}', 18
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/bricklayer/materials/dust', 'construction', 'bricklayer', 'materials', 'construction/bricklayer/materials/dust', NULL, '{"en":"dust","es":"dust","pt":"dust","fr":"dust","de":"dust","it":"dust","nl":"stof","zh":"灰尘","ja":"粉塵","ru":"пыль"}', 20
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/bricklayer/materials/filler', 'construction', 'bricklayer', 'materials', 'construction/bricklayer/materials/filler', NULL, '{"en":"filler","es":"filler","pt":"filler","fr":"filler","de":"filler","it":"filler","nl":"vulmiddel","zh":"填充物","ja":"フィラー","ru":"наполнитель"}', 22
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/bricklayer/materials/foam', 'construction', 'bricklayer', 'materials', 'construction/bricklayer/materials/foam', NULL, '{"en":"foam","es":"foam","pt":"foam","fr":"foam","de":"foam","it":"foam","nl":"schuim","zh":"泡沫","ja":"フォーム","ru":"пена"}', 24
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/bricklayer/materials/grout', 'construction', 'bricklayer', 'materials', 'construction/bricklayer/materials/grout', NULL, '{"en":"grout","es":"grout","pt":"grout","fr":"grout","de":"grout","it":"grout","nl":"voegmiddel","zh":"灌浆料","ja":"グラウト","ru":"затирка"}', 26
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/bricklayer/materials/insulation', 'construction', 'bricklayer', 'materials', 'construction/bricklayer/materials/insulation', NULL, '{"en":"insulation","es":"insulation","pt":"insulation","fr":"insulation","de":"insulation","it":"insulation","nl":"isolatie","zh":"隔热材料","ja":"断熱材","ru":"изоляция"}', 28
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/bricklayer/materials/joint_mix', 'construction', 'bricklayer', 'materials', 'construction/bricklayer/materials/joint_mix', NULL, '{"en":"joint mix","es":"joint mix","pt":"joint mix","fr":"joint mix","de":"joint mix","it":"joint mix","nl":"voegmengsel","zh":"接缝混合物","ja":"ジョイントミックス","ru":"смесь для швов"}', 30
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/bricklayer/materials/lime', 'construction', 'bricklayer', 'materials', 'construction/bricklayer/materials/lime', NULL, '{"en":"lime","es":"lime","pt":"lime","fr":"lime","de":"lime","it":"lime","nl":"kalk","zh":"石灰","ja":"ライム","ru":"известь"}', 32
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/bricklayer/materials/mesh', 'construction', 'bricklayer', 'materials', 'construction/bricklayer/materials/mesh', NULL, '{"en":"mesh","es":"mesh","pt":"mesh","fr":"mesh","de":"mesh","it":"mesh","nl":"gaas","zh":"网","ja":"メッシュ","ru":"сетка"}', 34
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/bricklayer/materials/mix', 'construction', 'bricklayer', 'materials', 'construction/bricklayer/materials/mix', NULL, '{"en":"mix","es":"mix","pt":"mix","fr":"mix","de":"mix","it":"mix","nl":"mengsel","zh":"混合物","ja":"ミックス","ru":"смесь"}', 36
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/bricklayer/materials/mortar', 'construction', 'bricklayer', 'materials', 'construction/bricklayer/materials/mortar', NULL, '{"en":"mortar","es":"mortar","pt":"mortar","fr":"mortar","de":"mortar","it":"mortar","nl":"mortel","zh":"砂浆","ja":"モルタル","ru":"раствор"}', 38
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/bricklayer/materials/paste', 'construction', 'bricklayer', 'materials', 'construction/bricklayer/materials/paste', NULL, '{"en":"paste","es":"paste","pt":"paste","fr":"paste","de":"paste","it":"paste","nl":"pasta","zh":"糊","ja":"ペースト","ru":"паста"}', 40
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/bricklayer/materials/plaster', 'construction', 'bricklayer', 'materials', 'construction/bricklayer/materials/plaster', NULL, '{"en":"plaster","es":"plaster","pt":"plaster","fr":"plaster","de":"plaster","it":"plaster","nl":"gips","zh":"石膏","ja":"プラスター","ru":"штукатурка"}', 42
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/bricklayer/materials/powder', 'construction', 'bricklayer', 'materials', 'construction/bricklayer/materials/powder', NULL, '{"en":"powder","es":"powder","pt":"powder","fr":"powder","de":"powder","it":"powder","nl":"poeder","zh":"粉末","ja":"パウダー","ru":"порошок"}', 44
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/bricklayer/materials/render', 'construction', 'bricklayer', 'materials', 'construction/bricklayer/materials/render', NULL, '{"en":"render","es":"render","pt":"render","fr":"render","de":"render","it":"render","nl":"bepleistering","zh":"粉刷料","ja":"レンダー","ru":"штукатурный раствор"}', 46
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/bricklayer/materials/resin', 'construction', 'bricklayer', 'materials', 'construction/bricklayer/materials/resin', NULL, '{"en":"resin","es":"resin","pt":"resin","fr":"resin","de":"resin","it":"resin","nl":"hars","zh":"树脂","ja":"樹脂","ru":"смола"}', 48
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/bricklayer/materials/sand', 'construction', 'bricklayer', 'materials', 'construction/bricklayer/materials/sand', NULL, '{"en":"sand","es":"sand","pt":"sand","fr":"sand","de":"sand","it":"sand","nl":"zand","zh":"沙子","ja":"砂","ru":"песок"}', 50
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/bricklayer/materials/sealant', 'construction', 'bricklayer', 'materials', 'construction/bricklayer/materials/sealant', NULL, '{"en":"sealant","es":"sealant","pt":"sealant","fr":"sealant","de":"sealant","it":"sealant","nl":"afdichtingsmiddel","zh":"密封剂","ja":"シーラント","ru":"герметик"}', 52
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/bricklayer/materials/stone', 'construction', 'bricklayer', 'materials', 'construction/bricklayer/materials/stone', NULL, '{"en":"stone","es":"stone","pt":"stone","fr":"stone","de":"stone","it":"stone","nl":"steen","zh":"石头","ja":"石","ru":"камень"}', 54
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/bricklayer/materials/tiles', 'construction', 'bricklayer', 'materials', 'construction/bricklayer/materials/tiles', NULL, '{"en":"tiles","es":"tiles","pt":"tiles","fr":"tiles","de":"tiles","it":"tiles","nl":"tegels","zh":"瓷砖","ja":"タイル","ru":"плитка"}', 56
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/bricklayer/materials/water', 'construction', 'bricklayer', 'materials', 'construction/bricklayer/materials/water', NULL, '{"en":"water","es":"agua","pt":"água","fr":"eau","de":"Wasser","it":"acqua","nl":"water","zh":"水","ja":"水","ru":"вода"}', 58
);

INSERT INTO public.sectors (id, job_id, name, icon, sort_order) VALUES (
  'carpenter', 'construction', '{"en":"Carpenter","es":"Carpintero","pt":"Carpinteiro","fr":"Charpentier","de":"Zimmermann","it":"Falegname","nl":"Timmerman","zh":"木匠","ja":"大工","ru":"Плотник"}', '🪚', 1
);
INSERT INTO public.roles (id, job_id, sector_id, name, icon, sort_order) VALUES (
  'tools', 'construction', 'carpenter', '{"en":"Tools","es":"Herramientas","pt":"Ferramentas","fr":"Outils","de":"Werkzeuge","it":"Attrezzi","nl":"Gereedschap","zh":"工具","ja":"道具","ru":"Инструменты"}', '🔧', 0
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/carpenter/tools/blade', 'construction', 'carpenter', 'tools', 'construction/carpenter/tools/blade', NULL, '{"en":"blade","es":"blade","pt":"blade","fr":"blade","de":"blade","it":"blade","nl":"blad","zh":"刀片","ja":"ブレード","ru":"лезвие"}', 0
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/carpenter/tools/chisel', 'construction', 'carpenter', 'tools', 'construction/carpenter/tools/chisel', NULL, '{"en":"chisel","es":"cincel","pt":"cinzel","fr":"ciseau","de":"Meißel","it":"scalpello","nl":"beitel","zh":"凿子","ja":"ノミ","ru":"долото"}', 2
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/carpenter/tools/clamp', 'construction', 'carpenter', 'tools', 'construction/carpenter/tools/clamp', NULL, '{"en":"clamp","es":"clamp","pt":"clamp","fr":"clamp","de":"clamp","it":"clamp","nl":"klem","zh":"夹具","ja":"クランプ","ru":"зажим"}', 4
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/carpenter/tools/cutter', 'construction', 'carpenter', 'tools', 'construction/carpenter/tools/cutter', NULL, '{"en":"cutter","es":"cortador","pt":"cortador","fr":"cutter","de":"Cutter","it":"taglierino","nl":"snijder","zh":"切割机","ja":"カッター","ru":"резак"}', 6
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/carpenter/tools/drill', 'construction', 'carpenter', 'tools', 'construction/carpenter/tools/drill', NULL, '{"en":"drill","es":"taladro","pt":"furadeira","fr":"perceuse","de":"Bohrmaschine","it":"trapano","nl":"boor","zh":"钻头","ja":"ドリル","ru":"дрель"}', 8
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/carpenter/tools/file', 'construction', 'carpenter', 'tools', 'construction/carpenter/tools/file', NULL, '{"en":"file","es":"file","pt":"file","fr":"file","de":"file","it":"file","nl":"bestand","zh":"文件夹","ja":"ファイル","ru":"папка"}', 10
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/carpenter/tools/grinder', 'construction', 'carpenter', 'tools', 'construction/carpenter/tools/grinder', NULL, '{"en":"grinder","es":"grinder","pt":"grinder","fr":"grinder","de":"grinder","it":"grinder","nl":"slijpmachine","zh":"研磨机","ja":"グラインダー","ru":"шлифовальная машина"}', 12
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/carpenter/tools/hammer', 'construction', 'carpenter', 'tools', 'construction/carpenter/tools/hammer', NULL, '{"en":"hammer","es":"martillo","pt":"martelo","fr":"marteau","de":"Hammer","it":"martello","nl":"hamer","zh":"锤子","ja":"ハンマー","ru":"молоток"}', 14
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/carpenter/tools/level', 'construction', 'carpenter', 'tools', 'construction/carpenter/tools/level', NULL, '{"en":"level","es":"nivel","pt":"nível","fr":"niveau","de":"Wasserwaage","it":"livella","nl":"waterpas","zh":"水平仪","ja":"水平器","ru":"уровень"}', 16
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/carpenter/tools/mallet', 'construction', 'carpenter', 'tools', 'construction/carpenter/tools/mallet', NULL, '{"en":"mallet","es":"mallet","pt":"mallet","fr":"mallet","de":"mallet","it":"mallet","nl":"houten hamer","zh":"木槌","ja":"マレット","ru":"деревянный молоток"}', 18
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/carpenter/tools/measuring_tape', 'construction', 'carpenter', 'tools', 'construction/carpenter/tools/measuring_tape', NULL, '{"en":"measuring tape","es":"measuring tape","pt":"measuring tape","fr":"measuring tape","de":"measuring tape","it":"measuring tape","nl":"meetlint","zh":"卷尺","ja":"メジャー","ru":"рулетка"}', 20
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/carpenter/tools/nail_gun', 'construction', 'carpenter', 'tools', 'construction/carpenter/tools/nail_gun', NULL, '{"en":"nail gun","es":"nail gun","pt":"nail gun","fr":"nail gun","de":"nail gun","it":"nail gun","nl":"spijkerpistool","zh":"气钉枪","ja":"ネイルガン","ru":"гвоздезабивной пистолет"}', 22
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/carpenter/tools/plane', 'construction', 'carpenter', 'tools', 'construction/carpenter/tools/plane', NULL, '{"en":"plane","es":"plane","pt":"plane","fr":"plane","de":"plane","it":"plane","nl":"schaaf","zh":"刨子","ja":"カンナ","ru":"рубанок"}', 24
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/carpenter/tools/router', 'construction', 'carpenter', 'tools', 'construction/carpenter/tools/router', NULL, '{"en":"router","es":"router","pt":"router","fr":"router","de":"router","it":"router","nl":"router","zh":"路由器","ja":"ルーター","ru":"маршрутизатор"}', 26
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/carpenter/tools/sander', 'construction', 'carpenter', 'tools', 'construction/carpenter/tools/sander', NULL, '{"en":"sander","es":"sander","pt":"sander","fr":"sander","de":"sander","it":"sander","nl":"schuurmachine","zh":"砂磨机","ja":"サンダー","ru":"шлифовальная машина"}', 28
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/carpenter/tools/saw', 'construction', 'carpenter', 'tools', 'construction/carpenter/tools/saw', NULL, '{"en":"saw","es":"sierra","pt":"serra","fr":"scie","de":"Säge","it":"sega","nl":"zaag","zh":"锯","ja":"ノコギリ","ru":"пила"}', 30
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/carpenter/tools/screwdriver', 'construction', 'carpenter', 'tools', 'construction/carpenter/tools/screwdriver', NULL, '{"en":"screwdriver","es":"screwdriver","pt":"screwdriver","fr":"screwdriver","de":"screwdriver","it":"screwdriver","nl":"schroevendraaier","zh":"螺丝刀","ja":"ドライバー","ru":"отвертка"}', 32
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/carpenter/tools/square', 'construction', 'carpenter', 'tools', 'construction/carpenter/tools/square', NULL, '{"en":"square","es":"square","pt":"square","fr":"square","de":"square","it":"square","nl":"winkelhaak","zh":"角尺","ja":"スクエア","ru":"угольник"}', 34
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/carpenter/tools/vice', 'construction', 'carpenter', 'tools', 'construction/carpenter/tools/vice', NULL, '{"en":"vice","es":"vice","pt":"vice","fr":"vice","de":"vice","it":"vice","nl":"bankschroef","zh":"虎钳","ja":"バイス","ru":"тиски"}', 36
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/carpenter/tools/wrench', 'construction', 'carpenter', 'tools', 'construction/carpenter/tools/wrench', NULL, '{"en":"wrench","es":"llave","pt":"chave inglesa","fr":"clé","de":"Schraubenschlüssel","it":"chiave","nl":"moersleutel","zh":"扳手","ja":"レンチ","ru":"гаечный ключ"}', 38
);
INSERT INTO public.roles (id, job_id, sector_id, name, icon, sort_order) VALUES (
  'materials', 'construction', 'carpenter', '{"en":"Materials","es":"Materiales","pt":"Materiais","fr":"Matériaux","de":"Materialien","it":"Materiali","nl":"Materialen","zh":"材料","ja":"材料","ru":"Материалы"}', '📦', 1
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/carpenter/materials/adhesive', 'construction', 'carpenter', 'materials', 'construction/carpenter/materials/adhesive', NULL, '{"en":"adhesive","es":"adhesive","pt":"adhesive","fr":"adhesive","de":"adhesive","it":"adhesive","nl":"lijm","zh":"粘合剂","ja":"接着剤","ru":"клей"}', 0
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/carpenter/materials/beams', 'construction', 'carpenter', 'materials', 'construction/carpenter/materials/beams', NULL, '{"en":"beams","es":"beams","pt":"beams","fr":"beams","de":"beams","it":"beams","nl":"balken","zh":"横梁","ja":"梁","ru":"балки"}', 2
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/carpenter/materials/boards', 'construction', 'carpenter', 'materials', 'construction/carpenter/materials/boards', NULL, '{"en":"boards","es":"boards","pt":"boards","fr":"boards","de":"boards","it":"boards","nl":"planken","zh":"板子","ja":"板材","ru":"доски"}', 4
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/carpenter/materials/brackets', 'construction', 'carpenter', 'materials', 'construction/carpenter/materials/brackets', NULL, '{"en":"brackets","es":"brackets","pt":"brackets","fr":"brackets","de":"brackets","it":"brackets","nl":"beugels","zh":"支架","ja":"ブラケット","ru":"скобы"}', 6
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/carpenter/materials/coating', 'construction', 'carpenter', 'materials', 'construction/carpenter/materials/coating', NULL, '{"en":"coating","es":"coating","pt":"coating","fr":"coating","de":"coating","it":"coating","nl":"coating","zh":"涂层","ja":"コーティング","ru":"покрытие"}', 8
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/carpenter/materials/connectors', 'construction', 'carpenter', 'materials', 'construction/carpenter/materials/connectors', NULL, '{"en":"connectors","es":"connectors","pt":"connectors","fr":"connectors","de":"connectors","it":"connectors","nl":"connectors","zh":"连接器","ja":"コネクター","ru":"разъемы"}', 10
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/carpenter/materials/filler', 'construction', 'carpenter', 'materials', 'construction/carpenter/materials/filler', NULL, '{"en":"filler","es":"filler","pt":"filler","fr":"filler","de":"filler","it":"filler","nl":"vulmiddel","zh":"填充物","ja":"フィラー","ru":"наполнитель"}', 12
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/carpenter/materials/finish', 'construction', 'carpenter', 'materials', 'construction/carpenter/materials/finish', NULL, '{"en":"finish","es":"finish","pt":"finish","fr":"finish","de":"finish","it":"finish","nl":"afwerking","zh":"涂层","ja":"仕上げ","ru":"отделочное покрытие"}', 14
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/carpenter/materials/foam', 'construction', 'carpenter', 'materials', 'construction/carpenter/materials/foam', NULL, '{"en":"foam","es":"foam","pt":"foam","fr":"foam","de":"foam","it":"foam","nl":"schuim","zh":"泡沫","ja":"フォーム","ru":"пена"}', 16
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/carpenter/materials/frames', 'construction', 'carpenter', 'materials', 'construction/carpenter/materials/frames', NULL, '{"en":"frames","es":"frames","pt":"frames","fr":"frames","de":"frames","it":"frames","nl":"frames","zh":"框架","ja":"フレーム","ru":"рамы"}', 18
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/carpenter/materials/glue', 'construction', 'carpenter', 'materials', 'construction/carpenter/materials/glue', NULL, '{"en":"glue","es":"glue","pt":"glue","fr":"glue","de":"glue","it":"glue","nl":"lijm","zh":"胶水","ja":"接着剤","ru":"клей"}', 20
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/carpenter/materials/handles', 'construction', 'carpenter', 'materials', 'construction/carpenter/materials/handles', NULL, '{"en":"handles","es":"handles","pt":"handles","fr":"handles","de":"handles","it":"handles","nl":"handvatten","zh":"把手","ja":"ハンドル","ru":"рукоятки"}', 22
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/carpenter/materials/hinges', 'construction', 'carpenter', 'materials', 'construction/carpenter/materials/hinges', NULL, '{"en":"hinges","es":"hinges","pt":"hinges","fr":"hinges","de":"hinges","it":"hinges","nl":"scharnieren","zh":"铰链","ja":"ヒンジ","ru":"петли"}', 24
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/carpenter/materials/joints', 'construction', 'carpenter', 'materials', 'construction/carpenter/materials/joints', NULL, '{"en":"joints","es":"joints","pt":"joints","fr":"joints","de":"joints","it":"joints","nl":"verbindingen","zh":"接头","ja":"ジョイント","ru":"соединения"}', 26
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/carpenter/materials/laminate', 'construction', 'carpenter', 'materials', 'construction/carpenter/materials/laminate', NULL, '{"en":"laminate","es":"laminate","pt":"laminate","fr":"laminate","de":"laminate","it":"laminate","nl":"laminaat","zh":"层压板","ja":"ラミネート","ru":"ламинат"}', 28
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/carpenter/materials/nails', 'construction', 'carpenter', 'materials', 'construction/carpenter/materials/nails', NULL, '{"en":"nails","es":"nails","pt":"nails","fr":"nails","de":"nails","it":"nails","nl":"spijkers","zh":"钉子","ja":"釘","ru":"гвозди"}', 30
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/carpenter/materials/paint', 'construction', 'carpenter', 'materials', 'construction/carpenter/materials/paint', NULL, '{"en":"paint","es":"paint","pt":"paint","fr":"paint","de":"paint","it":"paint","nl":"verf","zh":"油漆","ja":"ペンキ","ru":"краска"}', 32
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/carpenter/materials/panels', 'construction', 'carpenter', 'materials', 'construction/carpenter/materials/panels', NULL, '{"en":"panels","es":"panels","pt":"panels","fr":"panels","de":"panels","it":"panels","nl":"panelen","zh":"面板","ja":"パネル","ru":"панели"}', 34
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/carpenter/materials/planks', 'construction', 'carpenter', 'materials', 'construction/carpenter/materials/planks', NULL, '{"en":"planks","es":"planks","pt":"planks","fr":"planks","de":"planks","it":"planks","nl":"planken","zh":"木板","ja":"板","ru":"доски"}', 36
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/carpenter/materials/plywood', 'construction', 'carpenter', 'materials', 'construction/carpenter/materials/plywood', NULL, '{"en":"plywood","es":"plywood","pt":"plywood","fr":"plywood","de":"plywood","it":"plywood","nl":"multiplex","zh":"胶合板","ja":"合板","ru":"фанера"}', 38
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/carpenter/materials/polish', 'construction', 'carpenter', 'materials', 'construction/carpenter/materials/polish', NULL, '{"en":"polish","es":"pulimento","pt":"polimento","fr":"polish","de":"Politur","it":"lucido","nl":"poetsmiddel","zh":"抛光剂","ja":"ポリッシュ","ru":"полироль"}', 40
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/carpenter/materials/resin', 'construction', 'carpenter', 'materials', 'construction/carpenter/materials/resin', NULL, '{"en":"resin","es":"resin","pt":"resin","fr":"resin","de":"resin","it":"resin","nl":"hars","zh":"树脂","ja":"樹脂","ru":"смола"}', 42
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/carpenter/materials/rods', 'construction', 'carpenter', 'materials', 'construction/carpenter/materials/rods', NULL, '{"en":"rods","es":"rods","pt":"rods","fr":"rods","de":"rods","it":"rods","nl":"staven","zh":"杆","ja":"ロッド","ru":"прутки"}', 44
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/carpenter/materials/screws', 'construction', 'carpenter', 'materials', 'construction/carpenter/materials/screws', NULL, '{"en":"screws","es":"screws","pt":"screws","fr":"screws","de":"screws","it":"screws","nl":"schroeven","zh":"螺丝","ja":"ネジ","ru":"винты"}', 46
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/carpenter/materials/sheets', 'construction', 'carpenter', 'materials', 'construction/carpenter/materials/sheets', NULL, '{"en":"sheets","es":"sheets","pt":"sheets","fr":"sheets","de":"sheets","it":"sheets","nl":"lakens","zh":"床单","ja":"シーツ","ru":"простыни"}', 48
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/carpenter/materials/strips', 'construction', 'carpenter', 'materials', 'construction/carpenter/materials/strips', NULL, '{"en":"strips","es":"strips","pt":"strips","fr":"strips","de":"strips","it":"strips","nl":"stroken","zh":"条","ja":"ストリップ","ru":"полоски"}', 50
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/carpenter/materials/tape', 'construction', 'carpenter', 'materials', 'construction/carpenter/materials/tape', NULL, '{"en":"tape","es":"cinta","pt":"fita","fr":"ruban","de":"Klebeband","it":"nastro","nl":"tape","zh":"胶带","ja":"テープ","ru":"лента"}', 52
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/carpenter/materials/timber', 'construction', 'carpenter', 'materials', 'construction/carpenter/materials/timber', NULL, '{"en":"timber","es":"timber","pt":"timber","fr":"timber","de":"timber","it":"timber","nl":"hout","zh":"木材","ja":"木材","ru":"пиломатериалы"}', 54
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/carpenter/materials/varnish', 'construction', 'carpenter', 'materials', 'construction/carpenter/materials/varnish', NULL, '{"en":"varnish","es":"varnish","pt":"varnish","fr":"varnish","de":"varnish","it":"varnish","nl":"vernis","zh":"清漆","ja":"ニス","ru":"лак"}', 56
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/carpenter/materials/wood', 'construction', 'carpenter', 'materials', 'construction/carpenter/materials/wood', NULL, '{"en":"wood","es":"wood","pt":"wood","fr":"wood","de":"wood","it":"wood","nl":"hout","zh":"木材","ja":"木材","ru":"дерево"}', 58
);

INSERT INTO public.sectors (id, job_id, name, icon, sort_order) VALUES (
  'electrician', 'construction', '{"en":"Electrician","es":"Electricista","pt":"Eletricista","fr":"Électricien","de":"Elektriker","it":"Elettricista","nl":"Elektricien","zh":"电工","ja":"電気技師","ru":"Электрик"}', '⚡', 2
);
INSERT INTO public.roles (id, job_id, sector_id, name, icon, sort_order) VALUES (
  'tools', 'construction', 'electrician', '{"en":"Tools","es":"Herramientas","pt":"Ferramentas","fr":"Outils","de":"Werkzeuge","it":"Attrezzi","nl":"Gereedschap","zh":"工具","ja":"道具","ru":"Инструменты"}', '🔧', 0
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/electrician/tools/clamp_meter', 'construction', 'electrician', 'tools', 'construction/electrician/tools/clamp_meter', NULL, '{"en":"clamp meter","es":"clamp meter","pt":"clamp meter","fr":"clamp meter","de":"clamp meter","it":"clamp meter","nl":"stroomtang","zh":"钳形电流表","ja":"クランプメーター","ru":"токоизмерительные клещи"}', 0
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/electrician/tools/crimper', 'construction', 'electrician', 'tools', 'construction/electrician/tools/crimper', NULL, '{"en":"crimper","es":"crimper","pt":"crimper","fr":"crimper","de":"crimper","it":"crimper","nl":"krimpgereedschap","zh":"压线钳","ja":"クリンパー","ru":"обжимной инструмент"}', 2
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/electrician/tools/cutter', 'construction', 'electrician', 'tools', 'construction/electrician/tools/cutter', NULL, '{"en":"cutter","es":"cortador","pt":"cortador","fr":"cutter","de":"Cutter","it":"taglierino","nl":"snijder","zh":"切割机","ja":"カッター","ru":"резак"}', 4
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/electrician/tools/drill', 'construction', 'electrician', 'tools', 'construction/electrician/tools/drill', NULL, '{"en":"drill","es":"taladro","pt":"furadeira","fr":"perceuse","de":"Bohrmaschine","it":"trapano","nl":"boor","zh":"钻头","ja":"ドリル","ru":"дрель"}', 6
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/electrician/tools/fish_tape', 'construction', 'electrician', 'tools', 'construction/electrician/tools/fish_tape', NULL, '{"en":"fish tape","es":"fish tape","pt":"fish tape","fr":"fish tape","de":"fish tape","it":"fish tape","nl":"trekstaal","zh":"穿线器","ja":"フィッシュテープ","ru":"протяжка для кабеля"}', 8
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/electrician/tools/knife', 'construction', 'electrician', 'tools', 'construction/electrician/tools/knife', NULL, '{"en":"knife","es":"cuchillo","pt":"faca","fr":"couteau","de":"Messer","it":"coltello","nl":"mes","zh":"刀","ja":"ナイフ","ru":"нож"}', 10
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/electrician/tools/ladder', 'construction', 'electrician', 'tools', 'construction/electrician/tools/ladder', NULL, '{"en":"ladder","es":"escalera","pt":"escada","fr":"échelle","de":"Leiter","it":"scala","nl":"ladder","zh":"梯子","ja":"はしご","ru":"лестница"}', 12
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/electrician/tools/level', 'construction', 'electrician', 'tools', 'construction/electrician/tools/level', NULL, '{"en":"level","es":"nivel","pt":"nível","fr":"niveau","de":"Wasserwaage","it":"livella","nl":"waterpas","zh":"水平仪","ja":"水平器","ru":"уровень"}', 14
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/electrician/tools/multimeter', 'construction', 'electrician', 'tools', 'construction/electrician/tools/multimeter', NULL, '{"en":"multimeter","es":"multimeter","pt":"multimeter","fr":"multimeter","de":"multimeter","it":"multimeter","nl":"multimeter","zh":"万用表","ja":"マルチメーター","ru":"мультиметр"}', 16
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/electrician/tools/pliers', 'construction', 'electrician', 'tools', 'construction/electrician/tools/pliers', NULL, '{"en":"pliers","es":"alicates","pt":"alicate","fr":"pinces","de":"Zange","it":"pinze","nl":"tang","zh":"钳子","ja":"プライヤー","ru":"плоскогубцы"}', 18
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/electrician/tools/punch_tool', 'construction', 'electrician', 'tools', 'construction/electrician/tools/punch_tool', NULL, '{"en":"punch tool","es":"punch tool","pt":"punch tool","fr":"punch tool","de":"punch tool","it":"punch tool","nl":"ponsstempel","zh":"冲孔工具","ja":"パンチツール","ru":"пробойник"}', 20
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/electrician/tools/scissors', 'construction', 'electrician', 'tools', 'construction/electrician/tools/scissors', NULL, '{"en":"scissors","es":"tijeras","pt":"tesoura","fr":"ciseaux","de":"Schere","it":"forbici","nl":"schaar","zh":"剪刀","ja":"ハサミ","ru":"ножницы"}', 22
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/electrician/tools/screwdriver', 'construction', 'electrician', 'tools', 'construction/electrician/tools/screwdriver', NULL, '{"en":"screwdriver","es":"screwdriver","pt":"screwdriver","fr":"screwdriver","de":"screwdriver","it":"screwdriver","nl":"schroevendraaier","zh":"螺丝刀","ja":"ドライバー","ru":"отвертка"}', 24
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/electrician/tools/tape_measure', 'construction', 'electrician', 'tools', 'construction/electrician/tools/tape_measure', NULL, '{"en":"tape measure","es":"tape measure","pt":"tape measure","fr":"tape measure","de":"tape measure","it":"tape measure","nl":"meetlint","zh":"卷尺","ja":"メジャー","ru":"рулетка"}', 26
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/electrician/tools/tester', 'construction', 'electrician', 'tools', 'construction/electrician/tools/tester', NULL, '{"en":"tester","es":"tester","pt":"tester","fr":"tester","de":"tester","it":"tester","nl":"tester","zh":"测试仪","ja":"テスター","ru":"тестер"}', 28
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/electrician/tools/tool_belt', 'construction', 'electrician', 'tools', 'construction/electrician/tools/tool_belt', NULL, '{"en":"tool belt","es":"tool belt","pt":"tool belt","fr":"tool belt","de":"tool belt","it":"tool belt","nl":"gereedschapsriem","zh":"工具腰带","ja":"ツールベルト","ru":"поясная сумка для инструментов"}', 30
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/electrician/tools/torch', 'construction', 'electrician', 'tools', 'construction/electrician/tools/torch', NULL, '{"en":"torch","es":"torch","pt":"torch","fr":"torch","de":"torch","it":"torch","nl":"lasbrander","zh":"焊炬","ja":"トーチ","ru":"горелка"}', 32
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/electrician/tools/voltage_tester', 'construction', 'electrician', 'tools', 'construction/electrician/tools/voltage_tester', NULL, '{"en":"voltage tester","es":"voltage tester","pt":"voltage tester","fr":"voltage tester","de":"voltage tester","it":"voltage tester","nl":"spanningzoeker","zh":"电压测试仪","ja":"電圧テスター","ru":"вольтметр"}', 34
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/electrician/tools/wire_stripper', 'construction', 'electrician', 'tools', 'construction/electrician/tools/wire_stripper', NULL, '{"en":"wire stripper","es":"wire stripper","pt":"wire stripper","fr":"wire stripper","de":"wire stripper","it":"wire stripper","nl":"draadstripper","zh":"剥线钳","ja":"ワイヤーストリッパー","ru":"кабелерез"}', 36
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/electrician/tools/wrench', 'construction', 'electrician', 'tools', 'construction/electrician/tools/wrench', NULL, '{"en":"wrench","es":"llave","pt":"chave inglesa","fr":"clé","de":"Schraubenschlüssel","it":"chiave","nl":"moersleutel","zh":"扳手","ja":"レンチ","ru":"гаечный ключ"}', 38
);
INSERT INTO public.roles (id, job_id, sector_id, name, icon, sort_order) VALUES (
  'materials', 'construction', 'electrician', '{"en":"Materials","es":"Materiales","pt":"Materiais","fr":"Matériaux","de":"Materialien","it":"Materiali","nl":"Materialen","zh":"材料","ja":"材料","ru":"Материалы"}', '📦', 1
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/electrician/materials/adapters', 'construction', 'electrician', 'materials', 'construction/electrician/materials/adapters', NULL, '{"en":"adapters","es":"adapters","pt":"adapters","fr":"adapters","de":"adapters","it":"adapters","nl":"adapters","zh":"适配器","ja":"アダプター","ru":"адаптеры"}', 0
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/electrician/materials/batteries', 'construction', 'electrician', 'materials', 'construction/electrician/materials/batteries', NULL, '{"en":"batteries","es":"batteries","pt":"batteries","fr":"batteries","de":"batteries","it":"batteries","nl":"batterijen","zh":"电池","ja":"電池","ru":"батарейки"}', 2
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/electrician/materials/boxes', 'construction', 'electrician', 'materials', 'construction/electrician/materials/boxes', NULL, '{"en":"boxes","es":"boxes","pt":"boxes","fr":"boxes","de":"boxes","it":"boxes","nl":"dozen","zh":"箱子","ja":"ボックス","ru":"коробки"}', 4
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/electrician/materials/breakers', 'construction', 'electrician', 'materials', 'construction/electrician/materials/breakers', NULL, '{"en":"breakers","es":"breakers","pt":"breakers","fr":"breakers","de":"breakers","it":"breakers","nl":"brekers","zh":"断路器","ja":"ブレーカー","ru":"автоматические выключатели"}', 6
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/electrician/materials/cables', 'construction', 'electrician', 'materials', 'construction/electrician/materials/cables', NULL, '{"en":"cables","es":"cables","pt":"cables","fr":"cables","de":"cables","it":"cables","nl":"kabels","zh":"电缆","ja":"ケーブル","ru":"кабели"}', 8
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/electrician/materials/cables_set', 'construction', 'electrician', 'materials', 'construction/electrician/materials/cables_set', NULL, '{"en":"cables set","es":"cables set","pt":"cables set","fr":"cables set","de":"cables set","it":"cables set","nl":"kabelset","zh":"电缆套装","ja":"ケーブルセット","ru":"набор кабелей"}', 10
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/electrician/materials/caps', 'construction', 'electrician', 'materials', 'construction/electrician/materials/caps', NULL, '{"en":"caps","es":"caps","pt":"caps","fr":"caps","de":"caps","it":"caps","nl":"doppen","zh":"帽子","ja":"キャップ","ru":"крышки"}', 12
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/electrician/materials/circuits', 'construction', 'electrician', 'materials', 'construction/electrician/materials/circuits', NULL, '{"en":"circuits","es":"circuits","pt":"circuits","fr":"circuits","de":"circuits","it":"circuits","nl":"schakelingen","zh":"电路","ja":"回路","ru":"схемы"}', 14
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/electrician/materials/conduits', 'construction', 'electrician', 'materials', 'construction/electrician/materials/conduits', NULL, '{"en":"conduits","es":"conduits","pt":"conduits","fr":"conduits","de":"conduits","it":"conduits","nl":"leidingen","zh":"导管","ja":"導管","ru":"трубопроводы"}', 16
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/electrician/materials/connectors', 'construction', 'electrician', 'materials', 'construction/electrician/materials/connectors', NULL, '{"en":"connectors","es":"connectors","pt":"connectors","fr":"connectors","de":"connectors","it":"connectors","nl":"connectors","zh":"连接器","ja":"コネクター","ru":"разъемы"}', 18
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/electrician/materials/covers', 'construction', 'electrician', 'materials', 'construction/electrician/materials/covers', NULL, '{"en":"covers","es":"covers","pt":"covers","fr":"covers","de":"covers","it":"covers","nl":"hoezen","zh":"盖子","ja":"カバー","ru":"крышки"}', 20
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/electrician/materials/fuse', 'construction', 'electrician', 'materials', 'construction/electrician/materials/fuse', NULL, '{"en":"fuse","es":"fuse","pt":"fuse","fr":"fuse","de":"fuse","it":"fuse","nl":"zekering","zh":"保险丝","ja":"ヒューズ","ru":"предохранитель"}', 22
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/electrician/materials/holders', 'construction', 'electrician', 'materials', 'construction/electrician/materials/holders', NULL, '{"en":"holders","es":"holders","pt":"holders","fr":"holders","de":"holders","it":"holders","nl":"houders","zh":"夹持器","ja":"ホルダー","ru":"держатели"}', 24
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/electrician/materials/insulation', 'construction', 'electrician', 'materials', 'construction/electrician/materials/insulation', NULL, '{"en":"insulation","es":"insulation","pt":"insulation","fr":"insulation","de":"insulation","it":"insulation","nl":"isolatie","zh":"隔热材料","ja":"断熱材","ru":"изоляция"}', 26
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/electrician/materials/modules', 'construction', 'electrician', 'materials', 'construction/electrician/materials/modules', NULL, '{"en":"modules","es":"modules","pt":"modules","fr":"modules","de":"modules","it":"modules","nl":"modules","zh":"模块","ja":"モジュール","ru":"модули"}', 28
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/electrician/materials/mounts', 'construction', 'electrician', 'materials', 'construction/electrician/materials/mounts', NULL, '{"en":"mounts","es":"mounts","pt":"mounts","fr":"mounts","de":"mounts","it":"mounts","nl":"montages","zh":"支架","ja":"マウント","ru":"кронштейны"}', 30
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/electrician/materials/panels', 'construction', 'electrician', 'materials', 'construction/electrician/materials/panels', NULL, '{"en":"panels","es":"panels","pt":"panels","fr":"panels","de":"panels","it":"panels","nl":"panelen","zh":"面板","ja":"パネル","ru":"панели"}', 32
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/electrician/materials/plugs', 'construction', 'electrician', 'materials', 'construction/electrician/materials/plugs', NULL, '{"en":"plugs","es":"plugs","pt":"plugs","fr":"plugs","de":"plugs","it":"plugs","nl":"pluggen","zh":"插头","ja":"プラグ","ru":"разъемы"}', 34
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/electrician/materials/relays', 'construction', 'electrician', 'materials', 'construction/electrician/materials/relays', NULL, '{"en":"relays","es":"relays","pt":"relays","fr":"relays","de":"relays","it":"relays","nl":"relais","zh":"继电器","ja":"リレー","ru":"реле"}', 36
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/electrician/materials/resistors', 'construction', 'electrician', 'materials', 'construction/electrician/materials/resistors', NULL, '{"en":"resistors","es":"resistors","pt":"resistors","fr":"resistors","de":"resistors","it":"resistors","nl":"weerstanden","zh":"电阻","ja":"抵抗器","ru":"резисторы"}', 38
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/electrician/materials/sensors', 'construction', 'electrician', 'materials', 'construction/electrician/materials/sensors', NULL, '{"en":"sensors","es":"sensors","pt":"sensors","fr":"sensors","de":"sensors","it":"sensors","nl":"sensoren","zh":"传感器","ja":"センサー","ru":"датчики"}', 40
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/electrician/materials/shields', 'construction', 'electrician', 'materials', 'construction/electrician/materials/shields', NULL, '{"en":"shields","es":"shields","pt":"shields","fr":"shields","de":"shields","it":"shields","nl":"schilden","zh":"防护罩","ja":"シールド","ru":"щиты"}', 42
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/electrician/materials/sleeves', 'construction', 'electrician', 'materials', 'construction/electrician/materials/sleeves', NULL, '{"en":"sleeves","es":"sleeves","pt":"sleeves","fr":"sleeves","de":"sleeves","it":"sleeves","nl":"mouwen","zh":"套管","ja":"スリーブ","ru":"рукава"}', 44
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/electrician/materials/socket', 'construction', 'electrician', 'materials', 'construction/electrician/materials/socket', NULL, '{"en":"socket","es":"socket","pt":"socket","fr":"socket","de":"socket","it":"socket","nl":"stopcontact","zh":"插座","ja":"ソケット","ru":"розетка"}', 46
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/electrician/materials/switch', 'construction', 'electrician', 'materials', 'construction/electrician/materials/switch', NULL, '{"en":"switch","es":"switch","pt":"switch","fr":"switch","de":"switch","it":"switch","nl":"schakelaar","zh":"开关","ja":"スイッチ","ru":"выключатель"}', 48
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/electrician/materials/switches_set', 'construction', 'electrician', 'materials', 'construction/electrician/materials/switches_set', NULL, '{"en":"switches set","es":"switches set","pt":"switches set","fr":"switches set","de":"switches set","it":"switches set","nl":"schakelaarset","zh":"开关套装","ja":"スイッチセット","ru":"набор выключателей"}', 50
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/electrician/materials/tape', 'construction', 'electrician', 'materials', 'construction/electrician/materials/tape', NULL, '{"en":"tape","es":"cinta","pt":"fita","fr":"ruban","de":"Klebeband","it":"nastro","nl":"tape","zh":"胶带","ja":"テープ","ru":"лента"}', 52
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/electrician/materials/terminals', 'construction', 'electrician', 'materials', 'construction/electrician/materials/terminals', NULL, '{"en":"terminals","es":"terminals","pt":"terminals","fr":"terminals","de":"terminals","it":"terminals","nl":"terminals","zh":"终端","ja":"ターミナル","ru":"терминалы"}', 54
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/electrician/materials/wires', 'construction', 'electrician', 'materials', 'construction/electrician/materials/wires', NULL, '{"en":"wires","es":"wires","pt":"wires","fr":"wires","de":"wires","it":"wires","nl":"draden","zh":"电线","ja":"ワイヤー","ru":"провода"}', 56
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/electrician/materials/wraps', 'construction', 'electrician', 'materials', 'construction/electrician/materials/wraps', NULL, '{"en":"wraps","es":"wraps","pt":"wraps","fr":"wraps","de":"wraps","it":"wraps","nl":"wraps","zh":"包装","ja":"ラップ","ru":"обертки"}', 58
);

INSERT INTO public.sectors (id, job_id, name, icon, sort_order) VALUES (
  'general_laborer', 'construction', '{"en":"General Laborer","es":"Obrero General","pt":"Peão","fr":"Manœuvre","de":"Hilfsarbeiter","it":"Operaio","nl":"Algemeen arbeider","zh":"普通工人","ja":"一般作業員","ru":"Разнорабочий"}', '👷', 3
);
INSERT INTO public.roles (id, job_id, sector_id, name, icon, sort_order) VALUES (
  'tools', 'construction', 'general_laborer', '{"en":"Tools","es":"Herramientas","pt":"Ferramentas","fr":"Outils","de":"Werkzeuge","it":"Attrezzi","nl":"Gereedschap","zh":"工具","ja":"道具","ru":"Инструменты"}', '🔧', 0
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/general_laborer/tools/bucket', 'construction', 'general_laborer', 'tools', 'construction/general_laborer/tools/bucket', NULL, '{"en":"bucket","es":"cubo","pt":"balde","fr":"seau","de":"Eimer","it":"secchio","nl":"emmer","zh":"水桶","ja":"バケツ","ru":"ведро"}', 0
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/general_laborer/tools/chisel', 'construction', 'general_laborer', 'tools', 'construction/general_laborer/tools/chisel', NULL, '{"en":"chisel","es":"cincel","pt":"cinzel","fr":"ciseau","de":"Meißel","it":"scalpello","nl":"beitel","zh":"凿子","ja":"ノミ","ru":"долото"}', 2
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/general_laborer/tools/clamp', 'construction', 'general_laborer', 'tools', 'construction/general_laborer/tools/clamp', NULL, '{"en":"clamp","es":"clamp","pt":"clamp","fr":"clamp","de":"clamp","it":"clamp","nl":"klem","zh":"夹具","ja":"クランプ","ru":"зажим"}', 4
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/general_laborer/tools/crowbar', 'construction', 'general_laborer', 'tools', 'construction/general_laborer/tools/crowbar', NULL, '{"en":"crowbar","es":"crowbar","pt":"crowbar","fr":"crowbar","de":"crowbar","it":"crowbar","nl":"koevoet","zh":"撬棒","ja":"バール","ru":"монтировка"}', 6
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/general_laborer/tools/drill', 'construction', 'general_laborer', 'tools', 'construction/general_laborer/tools/drill', NULL, '{"en":"drill","es":"taladro","pt":"furadeira","fr":"perceuse","de":"Bohrmaschine","it":"trapano","nl":"boor","zh":"钻头","ja":"ドリル","ru":"дрель"}', 8
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/general_laborer/tools/hammer', 'construction', 'general_laborer', 'tools', 'construction/general_laborer/tools/hammer', NULL, '{"en":"hammer","es":"martillo","pt":"martelo","fr":"marteau","de":"Hammer","it":"martello","nl":"hamer","zh":"锤子","ja":"ハンマー","ru":"молоток"}', 10
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/general_laborer/tools/hoe', 'construction', 'general_laborer', 'tools', 'construction/general_laborer/tools/hoe', NULL, '{"en":"hoe","es":"azada","pt":"enxada","fr":"houe","de":"Hacke","it":"zappa","nl":"schoffel","zh":"锄头","ja":"鍬","ru":"мотыга"}', 12
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/general_laborer/tools/ladder', 'construction', 'general_laborer', 'tools', 'construction/general_laborer/tools/ladder', NULL, '{"en":"ladder","es":"escalera","pt":"escada","fr":"échelle","de":"Leiter","it":"scala","nl":"ladder","zh":"梯子","ja":"はしご","ru":"лестница"}', 14
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/general_laborer/tools/level', 'construction', 'general_laborer', 'tools', 'construction/general_laborer/tools/level', NULL, '{"en":"level","es":"nivel","pt":"nível","fr":"niveau","de":"Wasserwaage","it":"livella","nl":"waterpas","zh":"水平仪","ja":"水平器","ru":"уровень"}', 16
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/general_laborer/tools/mallet', 'construction', 'general_laborer', 'tools', 'construction/general_laborer/tools/mallet', NULL, '{"en":"mallet","es":"mallet","pt":"mallet","fr":"mallet","de":"mallet","it":"mallet","nl":"houten hamer","zh":"木槌","ja":"マレット","ru":"деревянный молоток"}', 18
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/general_laborer/tools/mixer', 'construction', 'general_laborer', 'tools', 'construction/general_laborer/tools/mixer', NULL, '{"en":"mixer","es":"mezclador","pt":"betoneira","fr":"mélangeur","de":"Mischer","it":"miscelatore","nl":"mixer","zh":"搅拌机","ja":"ミキサー","ru":"миксер"}', 20
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/general_laborer/tools/pickaxe', 'construction', 'general_laborer', 'tools', 'construction/general_laborer/tools/pickaxe', NULL, '{"en":"pickaxe","es":"pickaxe","pt":"pickaxe","fr":"pickaxe","de":"pickaxe","it":"pickaxe","nl":"houweel","zh":"镐","ja":"つるはし","ru":"кирка"}', 22
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/general_laborer/tools/pliers', 'construction', 'general_laborer', 'tools', 'construction/general_laborer/tools/pliers', NULL, '{"en":"pliers","es":"alicates","pt":"alicate","fr":"pinces","de":"Zange","it":"pinze","nl":"tang","zh":"钳子","ja":"プライヤー","ru":"плоскогубцы"}', 24
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/general_laborer/tools/rake', 'construction', 'general_laborer', 'tools', 'construction/general_laborer/tools/rake', NULL, '{"en":"rake","es":"rastrillo","pt":"ancinho","fr":"râteau","de":"Rechen","it":"rastrello","nl":"hark","zh":"耙子","ja":"熊手","ru":"грабли"}', 26
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/general_laborer/tools/saw', 'construction', 'general_laborer', 'tools', 'construction/general_laborer/tools/saw', NULL, '{"en":"saw","es":"sierra","pt":"serra","fr":"scie","de":"Säge","it":"sega","nl":"zaag","zh":"锯","ja":"ノコギリ","ru":"пила"}', 28
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/general_laborer/tools/screwdriver', 'construction', 'general_laborer', 'tools', 'construction/general_laborer/tools/screwdriver', NULL, '{"en":"screwdriver","es":"screwdriver","pt":"screwdriver","fr":"screwdriver","de":"screwdriver","it":"screwdriver","nl":"schroevendraaier","zh":"螺丝刀","ja":"ドライバー","ru":"отвертка"}', 30
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/general_laborer/tools/shovel', 'construction', 'general_laborer', 'tools', 'construction/general_laborer/tools/shovel', NULL, '{"en":"shovel","es":"pala","pt":"pá","fr":"pelle","de":"Schaufel","it":"vanga","nl":"schop","zh":"铲子","ja":"シャベル","ru":"лопата"}', 32
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/general_laborer/tools/tape_measure', 'construction', 'general_laborer', 'tools', 'construction/general_laborer/tools/tape_measure', NULL, '{"en":"tape measure","es":"tape measure","pt":"tape measure","fr":"tape measure","de":"tape measure","it":"tape measure","nl":"meetlint","zh":"卷尺","ja":"メジャー","ru":"рулетка"}', 34
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/general_laborer/tools/wheelbarrow', 'construction', 'general_laborer', 'tools', 'construction/general_laborer/tools/wheelbarrow', NULL, '{"en":"wheelbarrow","es":"carretilla","pt":"carrinho de mão","fr":"brouette","de":"Schubkarre","it":"carriola","nl":"kruiwagen","zh":"手推车","ja":"一輪車","ru":"тачка"}', 36
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/general_laborer/tools/wrench', 'construction', 'general_laborer', 'tools', 'construction/general_laborer/tools/wrench', NULL, '{"en":"wrench","es":"llave","pt":"chave inglesa","fr":"clé","de":"Schraubenschlüssel","it":"chiave","nl":"moersleutel","zh":"扳手","ja":"レンチ","ru":"гаечный ключ"}', 38
);
INSERT INTO public.roles (id, job_id, sector_id, name, icon, sort_order) VALUES (
  'materials', 'construction', 'general_laborer', '{"en":"Materials","es":"Materiales","pt":"Materiais","fr":"Matériaux","de":"Materialien","it":"Materiali","nl":"Materialen","zh":"材料","ja":"材料","ru":"Материалы"}', '📦', 1
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/general_laborer/materials/adhesive', 'construction', 'general_laborer', 'materials', 'construction/general_laborer/materials/adhesive', NULL, '{"en":"adhesive","es":"adhesive","pt":"adhesive","fr":"adhesive","de":"adhesive","it":"adhesive","nl":"lijm","zh":"粘合剂","ja":"接着剤","ru":"клей"}', 0
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/general_laborer/materials/boards', 'construction', 'general_laborer', 'materials', 'construction/general_laborer/materials/boards', NULL, '{"en":"boards","es":"boards","pt":"boards","fr":"boards","de":"boards","it":"boards","nl":"planken","zh":"板子","ja":"板材","ru":"доски"}', 2
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/general_laborer/materials/bricks', 'construction', 'general_laborer', 'materials', 'construction/general_laborer/materials/bricks', NULL, '{"en":"bricks","es":"bricks","pt":"bricks","fr":"bricks","de":"bricks","it":"bricks","nl":"stenen","zh":"砖块","ja":"レンガ","ru":"кирпичи"}', 4
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/general_laborer/materials/cables', 'construction', 'general_laborer', 'materials', 'construction/general_laborer/materials/cables', NULL, '{"en":"cables","es":"cables","pt":"cables","fr":"cables","de":"cables","it":"cables","nl":"kabels","zh":"电缆","ja":"ケーブル","ru":"кабели"}', 6
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/general_laborer/materials/cement', 'construction', 'general_laborer', 'materials', 'construction/general_laborer/materials/cement', NULL, '{"en":"cement","es":"cement","pt":"cement","fr":"cement","de":"cement","it":"cement","nl":"cement","zh":"水泥","ja":"セメント","ru":"цемент"}', 8
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/general_laborer/materials/coating', 'construction', 'general_laborer', 'materials', 'construction/general_laborer/materials/coating', NULL, '{"en":"coating","es":"coating","pt":"coating","fr":"coating","de":"coating","it":"coating","nl":"coating","zh":"涂层","ja":"コーティング","ru":"покрытие"}', 10
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/general_laborer/materials/compound', 'construction', 'general_laborer', 'materials', 'construction/general_laborer/materials/compound', NULL, '{"en":"compound","es":"compound","pt":"compound","fr":"compound","de":"compound","it":"compound","nl":"compound","zh":"化合物","ja":"コンパウンド","ru":"состав"}', 12
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/general_laborer/materials/concrete', 'construction', 'general_laborer', 'materials', 'construction/general_laborer/materials/concrete', NULL, '{"en":"concrete","es":"concrete","pt":"concrete","fr":"concrete","de":"concrete","it":"concrete","nl":"beton","zh":"混凝土","ja":"コンクリート","ru":"бетон"}', 14
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/general_laborer/materials/dust', 'construction', 'general_laborer', 'materials', 'construction/general_laborer/materials/dust', NULL, '{"en":"dust","es":"dust","pt":"dust","fr":"dust","de":"dust","it":"dust","nl":"stof","zh":"灰尘","ja":"粉塵","ru":"пыль"}', 16
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/general_laborer/materials/filler', 'construction', 'general_laborer', 'materials', 'construction/general_laborer/materials/filler', NULL, '{"en":"filler","es":"filler","pt":"filler","fr":"filler","de":"filler","it":"filler","nl":"vulmiddel","zh":"填充物","ja":"フィラー","ru":"наполнитель"}', 18
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/general_laborer/materials/foam', 'construction', 'general_laborer', 'materials', 'construction/general_laborer/materials/foam', NULL, '{"en":"foam","es":"foam","pt":"foam","fr":"foam","de":"foam","it":"foam","nl":"schuim","zh":"泡沫","ja":"フォーム","ru":"пена"}', 20
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/general_laborer/materials/glue', 'construction', 'general_laborer', 'materials', 'construction/general_laborer/materials/glue', NULL, '{"en":"glue","es":"glue","pt":"glue","fr":"glue","de":"glue","it":"glue","nl":"lijm","zh":"胶水","ja":"接着剤","ru":"клей"}', 22
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/general_laborer/materials/gravel', 'construction', 'general_laborer', 'materials', 'construction/general_laborer/materials/gravel', NULL, '{"en":"gravel","es":"gravel","pt":"gravel","fr":"gravel","de":"gravel","it":"gravel","nl":"grind","zh":"砾石","ja":"砂利","ru":"гравий"}', 24
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/general_laborer/materials/grit', 'construction', 'general_laborer', 'materials', 'construction/general_laborer/materials/grit', NULL, '{"en":"grit","es":"grit","pt":"grit","fr":"grit","de":"grit","it":"grit","nl":"schuurmiddel","zh":"砂粒","ja":"グリット","ru":"абразив"}', 26
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/general_laborer/materials/insulation', 'construction', 'general_laborer', 'materials', 'construction/general_laborer/materials/insulation', NULL, '{"en":"insulation","es":"insulation","pt":"insulation","fr":"insulation","de":"insulation","it":"insulation","nl":"isolatie","zh":"隔热材料","ja":"断熱材","ru":"изоляция"}', 28
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/general_laborer/materials/mesh', 'construction', 'general_laborer', 'materials', 'construction/general_laborer/materials/mesh', NULL, '{"en":"mesh","es":"mesh","pt":"mesh","fr":"mesh","de":"mesh","it":"mesh","nl":"gaas","zh":"网","ja":"メッシュ","ru":"сетка"}', 30
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/general_laborer/materials/metal', 'construction', 'general_laborer', 'materials', 'construction/general_laborer/materials/metal', NULL, '{"en":"metal","es":"metal","pt":"metal","fr":"metal","de":"metal","it":"metal","nl":"metaal","zh":"金属","ja":"金属","ru":"металл"}', 32
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/general_laborer/materials/mortar_mix', 'construction', 'general_laborer', 'materials', 'construction/general_laborer/materials/mortar_mix', NULL, '{"en":"mortar mix","es":"mortar mix","pt":"mortar mix","fr":"mortar mix","de":"mortar mix","it":"mortar mix","nl":"mortelmengsel","zh":"砂浆混合物","ja":"モルタルミックス","ru":"сухая смесь"}', 34
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/general_laborer/materials/nails', 'construction', 'general_laborer', 'materials', 'construction/general_laborer/materials/nails', NULL, '{"en":"nails","es":"nails","pt":"nails","fr":"nails","de":"nails","it":"nails","nl":"spijkers","zh":"钉子","ja":"釘","ru":"гвозди"}', 36
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/general_laborer/materials/paint', 'construction', 'general_laborer', 'materials', 'construction/general_laborer/materials/paint', NULL, '{"en":"paint","es":"paint","pt":"paint","fr":"paint","de":"paint","it":"paint","nl":"verf","zh":"油漆","ja":"ペンキ","ru":"краска"}', 38
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/general_laborer/materials/panels', 'construction', 'general_laborer', 'materials', 'construction/general_laborer/materials/panels', NULL, '{"en":"panels","es":"panels","pt":"panels","fr":"panels","de":"panels","it":"panels","nl":"panelen","zh":"面板","ja":"パネル","ru":"панели"}', 40
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/general_laborer/materials/pipes', 'construction', 'general_laborer', 'materials', 'construction/general_laborer/materials/pipes', NULL, '{"en":"pipes","es":"pipes","pt":"pipes","fr":"pipes","de":"pipes","it":"pipes","nl":"pijpen","zh":"管道","ja":"パイプ","ru":"трубы"}', 42
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/general_laborer/materials/plaster', 'construction', 'general_laborer', 'materials', 'construction/general_laborer/materials/plaster', NULL, '{"en":"plaster","es":"plaster","pt":"plaster","fr":"plaster","de":"plaster","it":"plaster","nl":"gips","zh":"石膏","ja":"プラスター","ru":"штукатурка"}', 44
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/general_laborer/materials/resin', 'construction', 'general_laborer', 'materials', 'construction/general_laborer/materials/resin', NULL, '{"en":"resin","es":"resin","pt":"resin","fr":"resin","de":"resin","it":"resin","nl":"hars","zh":"树脂","ja":"樹脂","ru":"смола"}', 46
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/general_laborer/materials/sand', 'construction', 'general_laborer', 'materials', 'construction/general_laborer/materials/sand', NULL, '{"en":"sand","es":"sand","pt":"sand","fr":"sand","de":"sand","it":"sand","nl":"zand","zh":"沙子","ja":"砂","ru":"песок"}', 48
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/general_laborer/materials/screws', 'construction', 'general_laborer', 'materials', 'construction/general_laborer/materials/screws', NULL, '{"en":"screws","es":"screws","pt":"screws","fr":"screws","de":"screws","it":"screws","nl":"schroeven","zh":"螺丝","ja":"ネジ","ru":"винты"}', 50
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/general_laborer/materials/sealant', 'construction', 'general_laborer', 'materials', 'construction/general_laborer/materials/sealant', NULL, '{"en":"sealant","es":"sealant","pt":"sealant","fr":"sealant","de":"sealant","it":"sealant","nl":"afdichtingsmiddel","zh":"密封剂","ja":"シーラント","ru":"герметик"}', 52
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/general_laborer/materials/stone', 'construction', 'general_laborer', 'materials', 'construction/general_laborer/materials/stone', NULL, '{"en":"stone","es":"stone","pt":"stone","fr":"stone","de":"stone","it":"stone","nl":"steen","zh":"石头","ja":"石","ru":"камень"}', 54
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/general_laborer/materials/tiles', 'construction', 'general_laborer', 'materials', 'construction/general_laborer/materials/tiles', NULL, '{"en":"tiles","es":"tiles","pt":"tiles","fr":"tiles","de":"tiles","it":"tiles","nl":"tegels","zh":"瓷砖","ja":"タイル","ru":"плитка"}', 56
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/general_laborer/materials/wood', 'construction', 'general_laborer', 'materials', 'construction/general_laborer/materials/wood', NULL, '{"en":"wood","es":"wood","pt":"wood","fr":"wood","de":"wood","it":"wood","nl":"hout","zh":"木材","ja":"木材","ru":"дерево"}', 58
);

INSERT INTO public.sectors (id, job_id, name, icon, sort_order) VALUES (
  'painter', 'construction', '{"en":"Painter","es":"Pintor","pt":"Pintor","fr":"Peintre","de":"Maler","it":"Pittore","nl":"Schilder","zh":"油漆工","ja":"塗装工","ru":"Маляр"}', '🖌️', 4
);
INSERT INTO public.roles (id, job_id, sector_id, name, icon, sort_order) VALUES (
  'tools', 'construction', 'painter', '{"en":"Tools","es":"Herramientas","pt":"Ferramentas","fr":"Outils","de":"Werkzeuge","it":"Attrezzi","nl":"Gereedschap","zh":"工具","ja":"道具","ru":"Инструменты"}', '🔧', 0
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/painter/tools/blade', 'construction', 'painter', 'tools', 'construction/painter/tools/blade', NULL, '{"en":"blade","es":"blade","pt":"blade","fr":"blade","de":"blade","it":"blade","nl":"blad","zh":"刀片","ja":"ブレード","ru":"лезвие"}', 0
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/painter/tools/brush', 'construction', 'painter', 'tools', 'construction/painter/tools/brush', NULL, '{"en":"brush","es":"cepillo","pt":"escova","fr":"brosse","de":"Bürste","it":"spazzola","nl":"borstel","zh":"刷子","ja":"ブラシ","ru":"кисть"}', 2
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/painter/tools/bucket', 'construction', 'painter', 'tools', 'construction/painter/tools/bucket', NULL, '{"en":"bucket","es":"cubo","pt":"balde","fr":"seau","de":"Eimer","it":"secchio","nl":"emmer","zh":"水桶","ja":"バケツ","ru":"ведро"}', 4
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/painter/tools/cloth', 'construction', 'painter', 'tools', 'construction/painter/tools/cloth', NULL, '{"en":"cloth","es":"trapo","pt":"pano","fr":"chiffon","de":"Tuch","it":"panno","nl":"doek","zh":"布","ja":"布","ru":"ткань"}', 6
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/painter/tools/extension', 'construction', 'painter', 'tools', 'construction/painter/tools/extension', NULL, '{"en":"extension","es":"extension","pt":"extension","fr":"extension","de":"extension","it":"extension","nl":"verlenging","zh":"延伸器","ja":"延長","ru":"удлинитель"}', 8
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/painter/tools/gun', 'construction', 'painter', 'tools', 'construction/painter/tools/gun', NULL, '{"en":"spray gun","es":"pistola de spray","pt":"pistola de spray","fr":"pistolet","de":"Sprühpistole","it":"pistola spray","nl":"verfpistool","zh":"喷枪","ja":"スプレーガン","ru":"краскопульт"}', 10
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/painter/tools/handle', 'construction', 'painter', 'tools', 'construction/painter/tools/handle', NULL, '{"en":"handle","es":"handle","pt":"handle","fr":"handle","de":"handle","it":"handle","nl":"handvat","zh":"把手","ja":"ハンドル","ru":"рукоятка"}', 12
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/painter/tools/knife', 'construction', 'painter', 'tools', 'construction/painter/tools/knife', NULL, '{"en":"knife","es":"cuchillo","pt":"faca","fr":"couteau","de":"Messer","it":"coltello","nl":"mes","zh":"刀","ja":"ナイフ","ru":"нож"}', 14
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/painter/tools/ladder', 'construction', 'painter', 'tools', 'construction/painter/tools/ladder', NULL, '{"en":"ladder","es":"escalera","pt":"escada","fr":"échelle","de":"Leiter","it":"scala","nl":"ladder","zh":"梯子","ja":"はしご","ru":"лестница"}', 16
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/painter/tools/mixer', 'construction', 'painter', 'tools', 'construction/painter/tools/mixer', NULL, '{"en":"mixer","es":"mezclador","pt":"betoneira","fr":"mélangeur","de":"Mischer","it":"miscelatore","nl":"mixer","zh":"搅拌机","ja":"ミキサー","ru":"миксер"}', 18
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/painter/tools/pad', 'construction', 'painter', 'tools', 'construction/painter/tools/pad', NULL, '{"en":"pad","es":"pad","pt":"pad","fr":"pad","de":"pad","it":"pad","nl":"kussen","zh":"垫子","ja":"パッド","ru":"подушечка"}', 20
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/painter/tools/pole', 'construction', 'painter', 'tools', 'construction/painter/tools/pole', NULL, '{"en":"pole","es":"pole","pt":"pole","fr":"pole","de":"pole","it":"pole","nl":"paal","zh":"杆","ja":"ポール","ru":"шест"}', 22
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/painter/tools/roller', 'construction', 'painter', 'tools', 'construction/painter/tools/roller', NULL, '{"en":"roller","es":"rodillo","pt":"rolo","fr":"rouleau","de":"Rolle","it":"rullo","nl":"roller","zh":"滚筒","ja":"ローラー","ru":"валик"}', 24
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/painter/tools/roller_frame', 'construction', 'painter', 'tools', 'construction/painter/tools/roller_frame', NULL, '{"en":"roller frame","es":"roller frame","pt":"roller frame","fr":"roller frame","de":"roller frame","it":"roller frame","nl":"rollerframe","zh":"滚筒架","ja":"ローラーフレーム","ru":"рукоятка для валика"}', 26
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/painter/tools/sander', 'construction', 'painter', 'tools', 'construction/painter/tools/sander', NULL, '{"en":"sander","es":"sander","pt":"sander","fr":"sander","de":"sander","it":"sander","nl":"schuurmachine","zh":"砂磨机","ja":"サンダー","ru":"шлифовальная машина"}', 28
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/painter/tools/scraper', 'construction', 'painter', 'tools', 'construction/painter/tools/scraper', NULL, '{"en":"scraper","es":"scraper","pt":"scraper","fr":"scraper","de":"scraper","it":"scraper","nl":"schraper","zh":"刮刀","ja":"スクレーパー","ru":"скребок"}', 30
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/painter/tools/sponge', 'construction', 'painter', 'tools', 'construction/painter/tools/sponge', NULL, '{"en":"sponge","es":"esponja","pt":"esponja","fr":"éponge","de":"Schwamm","it":"spugna","nl":"spons","zh":"海绵","ja":"スポンジ","ru":"губка"}', 32
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/painter/tools/spray_gun', 'construction', 'painter', 'tools', 'construction/painter/tools/spray_gun', NULL, '{"en":"spray gun","es":"spray gun","pt":"spray gun","fr":"spray gun","de":"spray gun","it":"spray gun","nl":"verfpistool","zh":"喷枪","ja":"スプレーガン","ru":"краскопульт"}', 34
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/painter/tools/tape', 'construction', 'painter', 'tools', 'construction/painter/tools/tape', NULL, '{"en":"tape","es":"cinta","pt":"fita","fr":"ruban","de":"Klebeband","it":"nastro","nl":"tape","zh":"胶带","ja":"テープ","ru":"лента"}', 36
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/painter/tools/tray', 'construction', 'painter', 'tools', 'construction/painter/tools/tray', NULL, '{"en":"tray","es":"bandeja","pt":"bandeja","fr":"plateau","de":"Tablett","it":"vassoio","nl":"dienblad","zh":"托盘","ja":"トレイ","ru":"поднос"}', 38
);
INSERT INTO public.roles (id, job_id, sector_id, name, icon, sort_order) VALUES (
  'materials', 'construction', 'painter', '{"en":"Materials","es":"Materiales","pt":"Materiais","fr":"Matériaux","de":"Materialien","it":"Materiali","nl":"Materialen","zh":"材料","ja":"材料","ru":"Материалы"}', '📦', 1
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/painter/materials/base', 'construction', 'painter', 'materials', 'construction/painter/materials/base', NULL, '{"en":"base","es":"base","pt":"base","fr":"base","de":"base","it":"base","nl":"basis","zh":"底料","ja":"ベース","ru":"основа"}', 0
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/painter/materials/cleaner', 'construction', 'painter', 'materials', 'construction/painter/materials/cleaner', NULL, '{"en":"cleaner","es":"cleaner","pt":"cleaner","fr":"cleaner","de":"cleaner","it":"cleaner","nl":"reiniger","zh":"清洁剂","ja":"洗浄剤","ru":"чистящее средство"}', 2
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/painter/materials/coating', 'construction', 'painter', 'materials', 'construction/painter/materials/coating', NULL, '{"en":"coating","es":"coating","pt":"coating","fr":"coating","de":"coating","it":"coating","nl":"coating","zh":"涂层","ja":"コーティング","ru":"покрытие"}', 4
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/painter/materials/coating_mix', 'construction', 'painter', 'materials', 'construction/painter/materials/coating_mix', NULL, '{"en":"coating mix","es":"coating mix","pt":"coating mix","fr":"coating mix","de":"coating mix","it":"coating mix","nl":"coatingmengsel","zh":"涂层混合物","ja":"コーティングミックス","ru":"смесь для покрытия"}', 6
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/painter/materials/compound', 'construction', 'painter', 'materials', 'construction/painter/materials/compound', NULL, '{"en":"compound","es":"compound","pt":"compound","fr":"compound","de":"compound","it":"compound","nl":"compound","zh":"化合物","ja":"コンパウンド","ru":"состав"}', 8
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/painter/materials/dye', 'construction', 'painter', 'materials', 'construction/painter/materials/dye', NULL, '{"en":"dye","es":"dye","pt":"dye","fr":"dye","de":"dye","it":"dye","nl":"verf","zh":"染料","ja":"染料","ru":"краситель"}', 10
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/painter/materials/enamel', 'construction', 'painter', 'materials', 'construction/painter/materials/enamel', NULL, '{"en":"enamel","es":"enamel","pt":"enamel","fr":"enamel","de":"enamel","it":"enamel","nl":"email","zh":"搪瓷","ja":"エナメル","ru":"эмаль"}', 12
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/painter/materials/filler', 'construction', 'painter', 'materials', 'construction/painter/materials/filler', NULL, '{"en":"filler","es":"filler","pt":"filler","fr":"filler","de":"filler","it":"filler","nl":"vulmiddel","zh":"填充物","ja":"フィラー","ru":"наполнитель"}', 14
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/painter/materials/finish', 'construction', 'painter', 'materials', 'construction/painter/materials/finish', NULL, '{"en":"finish","es":"finish","pt":"finish","fr":"finish","de":"finish","it":"finish","nl":"afwerking","zh":"涂层","ja":"仕上げ","ru":"отделочное покрытие"}', 16
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/painter/materials/gel', 'construction', 'painter', 'materials', 'construction/painter/materials/gel', NULL, '{"en":"gel","es":"gel","pt":"gel","fr":"gel","de":"gel","it":"gel","nl":"gel","zh":"凝胶","ja":"ジェル","ru":"гель"}', 18
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/painter/materials/gloss', 'construction', 'painter', 'materials', 'construction/painter/materials/gloss', NULL, '{"en":"gloss","es":"gloss","pt":"gloss","fr":"gloss","de":"gloss","it":"gloss","nl":"glans","zh":"光泽漆","ja":"グロス","ru":"глянцевое покрытие"}', 20
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/painter/materials/lacquer', 'construction', 'painter', 'materials', 'construction/painter/materials/lacquer', NULL, '{"en":"lacquer","es":"lacquer","pt":"lacquer","fr":"lacquer","de":"lacquer","it":"lacquer","nl":"lak","zh":"漆","ja":"ラッカー","ru":"лак"}', 22
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/painter/materials/liquid', 'construction', 'painter', 'materials', 'construction/painter/materials/liquid', NULL, '{"en":"liquid","es":"liquid","pt":"liquid","fr":"liquid","de":"liquid","it":"liquid","nl":"vloeistof","zh":"液体","ja":"液体","ru":"жидкость"}', 24
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/painter/materials/matte', 'construction', 'painter', 'materials', 'construction/painter/materials/matte', NULL, '{"en":"matte","es":"matte","pt":"matte","fr":"matte","de":"matte","it":"matte","nl":"mat","zh":"哑光漆","ja":"マット","ru":"матовое покрытие"}', 26
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/painter/materials/oil', 'construction', 'painter', 'materials', 'construction/painter/materials/oil', NULL, '{"en":"oil","es":"oil","pt":"oil","fr":"oil","de":"oil","it":"oil","nl":"olie","zh":"油","ja":"オイル","ru":"масло"}', 28
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/painter/materials/paint', 'construction', 'painter', 'materials', 'construction/painter/materials/paint', NULL, '{"en":"paint","es":"paint","pt":"paint","fr":"paint","de":"paint","it":"paint","nl":"verf","zh":"油漆","ja":"ペンキ","ru":"краска"}', 30
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/painter/materials/paste', 'construction', 'painter', 'materials', 'construction/painter/materials/paste', NULL, '{"en":"paste","es":"paste","pt":"paste","fr":"paste","de":"paste","it":"paste","nl":"pasta","zh":"糊","ja":"ペースト","ru":"паста"}', 32
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/painter/materials/pigment', 'construction', 'painter', 'materials', 'construction/painter/materials/pigment', NULL, '{"en":"pigment","es":"pigment","pt":"pigment","fr":"pigment","de":"pigment","it":"pigment","nl":"pigment","zh":"颜料","ja":"顔料","ru":"пигмент"}', 34
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/painter/materials/plaster', 'construction', 'painter', 'materials', 'construction/painter/materials/plaster', NULL, '{"en":"plaster","es":"plaster","pt":"plaster","fr":"plaster","de":"plaster","it":"plaster","nl":"gips","zh":"石膏","ja":"プラスター","ru":"штукатурка"}', 36
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/painter/materials/polish', 'construction', 'painter', 'materials', 'construction/painter/materials/polish', NULL, '{"en":"polish","es":"pulimento","pt":"polimento","fr":"polish","de":"Politur","it":"lucido","nl":"poetsmiddel","zh":"抛光剂","ja":"ポリッシュ","ru":"полироль"}', 38
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/painter/materials/primer', 'construction', 'painter', 'materials', 'construction/painter/materials/primer', NULL, '{"en":"primer","es":"primer","pt":"primer","fr":"primer","de":"primer","it":"primer","nl":"primer","zh":"底漆","ja":"プライマー","ru":"грунтовка"}', 40
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/painter/materials/remover', 'construction', 'painter', 'materials', 'construction/painter/materials/remover', NULL, '{"en":"remover","es":"remover","pt":"remover","fr":"remover","de":"remover","it":"remover","nl":"verwijderaar","zh":"去除剂","ja":"リムーバー","ru":"средство для удаления"}', 42
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/painter/materials/resin', 'construction', 'painter', 'materials', 'construction/painter/materials/resin', NULL, '{"en":"resin","es":"resin","pt":"resin","fr":"resin","de":"resin","it":"resin","nl":"hars","zh":"树脂","ja":"樹脂","ru":"смола"}', 44
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/painter/materials/sealant', 'construction', 'painter', 'materials', 'construction/painter/materials/sealant', NULL, '{"en":"sealant","es":"sealant","pt":"sealant","fr":"sealant","de":"sealant","it":"sealant","nl":"afdichtingsmiddel","zh":"密封剂","ja":"シーラント","ru":"герметик"}', 46
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/painter/materials/solution', 'construction', 'painter', 'materials', 'construction/painter/materials/solution', NULL, '{"en":"solution","es":"solution","pt":"solution","fr":"solution","de":"solution","it":"solution","nl":"oplossing","zh":"溶液","ja":"溶液","ru":"раствор"}', 48
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/painter/materials/solvent', 'construction', 'painter', 'materials', 'construction/painter/materials/solvent', NULL, '{"en":"solvent","es":"solvent","pt":"solvent","fr":"solvent","de":"solvent","it":"solvent","nl":"oplosmiddel","zh":"溶剂","ja":"溶剤","ru":"растворитель"}', 50
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/painter/materials/spray', 'construction', 'painter', 'materials', 'construction/painter/materials/spray', NULL, '{"en":"spray","es":"spray","pt":"spray","fr":"spray","de":"Spray","it":"spray","nl":"spray","zh":"喷雾","ja":"スプレー","ru":"спрей"}', 52
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/painter/materials/thinner', 'construction', 'painter', 'materials', 'construction/painter/materials/thinner', NULL, '{"en":"thinner","es":"thinner","pt":"thinner","fr":"thinner","de":"thinner","it":"thinner","nl":"verdunner","zh":"稀释剂","ja":"シンナー","ru":"растворитель"}', 54
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/painter/materials/varnish', 'construction', 'painter', 'materials', 'construction/painter/materials/varnish', NULL, '{"en":"varnish","es":"varnish","pt":"varnish","fr":"varnish","de":"varnish","it":"varnish","nl":"vernis","zh":"清漆","ja":"ニス","ru":"лак"}', 56
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/painter/materials/water', 'construction', 'painter', 'materials', 'construction/painter/materials/water', NULL, '{"en":"water","es":"agua","pt":"água","fr":"eau","de":"Wasser","it":"acqua","nl":"water","zh":"水","ja":"水","ru":"вода"}', 58
);

INSERT INTO public.sectors (id, job_id, name, icon, sort_order) VALUES (
  'plumber', 'construction', '{"en":"Plumber","es":"Fontanero","pt":"Encanador","fr":"Plombier","de":"Klempner","it":"Idraulico","nl":"Loodgieter","zh":"水管工","ja":"配管工","ru":"Сантехник"}', '🪠', 5
);
INSERT INTO public.roles (id, job_id, sector_id, name, icon, sort_order) VALUES (
  'tools', 'construction', 'plumber', '{"en":"Tools","es":"Herramientas","pt":"Ferramentas","fr":"Outils","de":"Werkzeuge","it":"Attrezzi","nl":"Gereedschap","zh":"工具","ja":"道具","ru":"Инструменты"}', '🔧', 0
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/plumber/tools/adjustable_wrench', 'construction', 'plumber', 'tools', 'construction/plumber/tools/adjustable_wrench', NULL, '{"en":"adjustable wrench","es":"adjustable wrench","pt":"adjustable wrench","fr":"adjustable wrench","de":"adjustable wrench","it":"adjustable wrench","nl":"verstelbare sleutel","zh":"活动扳手","ja":"モンキーレンチ","ru":"разводной ключ"}', 0
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/plumber/tools/auger', 'construction', 'plumber', 'tools', 'construction/plumber/tools/auger', NULL, '{"en":"auger","es":"auger","pt":"auger","fr":"auger","de":"auger","it":"auger","nl":"grondboor","zh":"螺旋钻","ja":"オーガー","ru":"бур"}', 2
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/plumber/tools/clamp', 'construction', 'plumber', 'tools', 'construction/plumber/tools/clamp', NULL, '{"en":"clamp","es":"clamp","pt":"clamp","fr":"clamp","de":"clamp","it":"clamp","nl":"klem","zh":"夹具","ja":"クランプ","ru":"зажим"}', 4
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/plumber/tools/crimper', 'construction', 'plumber', 'tools', 'construction/plumber/tools/crimper', NULL, '{"en":"crimper","es":"crimper","pt":"crimper","fr":"crimper","de":"crimper","it":"crimper","nl":"krimpgereedschap","zh":"压线钳","ja":"クリンパー","ru":"обжимной инструмент"}', 6
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/plumber/tools/cutter', 'construction', 'plumber', 'tools', 'construction/plumber/tools/cutter', NULL, '{"en":"cutter","es":"cortador","pt":"cortador","fr":"cutter","de":"Cutter","it":"taglierino","nl":"snijder","zh":"切割机","ja":"カッター","ru":"резак"}', 8
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/plumber/tools/drill', 'construction', 'plumber', 'tools', 'construction/plumber/tools/drill', NULL, '{"en":"drill","es":"taladro","pt":"furadeira","fr":"perceuse","de":"Bohrmaschine","it":"trapano","nl":"boor","zh":"钻头","ja":"ドリル","ru":"дрель"}', 10
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/plumber/tools/hacksaw', 'construction', 'plumber', 'tools', 'construction/plumber/tools/hacksaw', NULL, '{"en":"hacksaw","es":"hacksaw","pt":"hacksaw","fr":"hacksaw","de":"hacksaw","it":"hacksaw","nl":"ijzerzaag","zh":"钢锯","ja":"ハクソー","ru":"ножовка по металлу"}', 12
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/plumber/tools/knife', 'construction', 'plumber', 'tools', 'construction/plumber/tools/knife', NULL, '{"en":"knife","es":"cuchillo","pt":"faca","fr":"couteau","de":"Messer","it":"coltello","nl":"mes","zh":"刀","ja":"ナイフ","ru":"нож"}', 14
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/plumber/tools/level', 'construction', 'plumber', 'tools', 'construction/plumber/tools/level', NULL, '{"en":"level","es":"nivel","pt":"nível","fr":"niveau","de":"Wasserwaage","it":"livella","nl":"waterpas","zh":"水平仪","ja":"水平器","ru":"уровень"}', 16
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/plumber/tools/pipe_cutter', 'construction', 'plumber', 'tools', 'construction/plumber/tools/pipe_cutter', NULL, '{"en":"pipe cutter","es":"pipe cutter","pt":"pipe cutter","fr":"pipe cutter","de":"pipe cutter","it":"pipe cutter","nl":"pijpsnijder","zh":"管道切割器","ja":"パイプカッター","ru":"труборез"}', 18
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/plumber/tools/pipe_wrench', 'construction', 'plumber', 'tools', 'construction/plumber/tools/pipe_wrench', NULL, '{"en":"pipe wrench","es":"pipe wrench","pt":"pipe wrench","fr":"pipe wrench","de":"pipe wrench","it":"pipe wrench","nl":"pijpsleutel","zh":"管钳","ja":"パイプレンチ","ru":"трубный ключ"}', 20
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/plumber/tools/pliers', 'construction', 'plumber', 'tools', 'construction/plumber/tools/pliers', NULL, '{"en":"pliers","es":"alicates","pt":"alicate","fr":"pinces","de":"Zange","it":"pinze","nl":"tang","zh":"钳子","ja":"プライヤー","ru":"плоскогубцы"}', 22
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/plumber/tools/plunger', 'construction', 'plumber', 'tools', 'construction/plumber/tools/plunger', NULL, '{"en":"plunger","es":"plunger","pt":"plunger","fr":"plunger","de":"plunger","it":"plunger","nl":"entstopper","zh":"疏通器","ja":"プランジャー","ru":"вантуз"}', 24
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/plumber/tools/screwdriver', 'construction', 'plumber', 'tools', 'construction/plumber/tools/screwdriver', NULL, '{"en":"screwdriver","es":"screwdriver","pt":"screwdriver","fr":"screwdriver","de":"screwdriver","it":"screwdriver","nl":"schroevendraaier","zh":"螺丝刀","ja":"ドライバー","ru":"отвертка"}', 26
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/plumber/tools/snake', 'construction', 'plumber', 'tools', 'construction/plumber/tools/snake', NULL, '{"en":"snake","es":"snake","pt":"snake","fr":"snake","de":"snake","it":"snake","nl":"veerontslokker","zh":"疏通器","ja":"スネーク","ru":"сантехнический трос"}', 28
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/plumber/tools/spanner', 'construction', 'plumber', 'tools', 'construction/plumber/tools/spanner', NULL, '{"en":"spanner","es":"spanner","pt":"spanner","fr":"spanner","de":"spanner","it":"spanner","nl":"steeksleutel","zh":"扳手","ja":"スパナ","ru":"гаечный ключ"}', 30
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/plumber/tools/tape_measure', 'construction', 'plumber', 'tools', 'construction/plumber/tools/tape_measure', NULL, '{"en":"tape measure","es":"tape measure","pt":"tape measure","fr":"tape measure","de":"tape measure","it":"tape measure","nl":"meetlint","zh":"卷尺","ja":"メジャー","ru":"рулетка"}', 32
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/plumber/tools/tester', 'construction', 'plumber', 'tools', 'construction/plumber/tools/tester', NULL, '{"en":"tester","es":"tester","pt":"tester","fr":"tester","de":"tester","it":"tester","nl":"tester","zh":"测试仪","ja":"テスター","ru":"тестер"}', 34
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/plumber/tools/torch', 'construction', 'plumber', 'tools', 'construction/plumber/tools/torch', NULL, '{"en":"torch","es":"torch","pt":"torch","fr":"torch","de":"torch","it":"torch","nl":"lasbrander","zh":"焊炬","ja":"トーチ","ru":"горелка"}', 36
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/plumber/tools/wrench_set', 'construction', 'plumber', 'tools', 'construction/plumber/tools/wrench_set', NULL, '{"en":"wrench set","es":"wrench set","pt":"wrench set","fr":"wrench set","de":"wrench set","it":"wrench set","nl":"moersleutelset","zh":"扳手套装","ja":"レンチセット","ru":"набор гаечных ключей"}', 38
);
INSERT INTO public.roles (id, job_id, sector_id, name, icon, sort_order) VALUES (
  'materials', 'construction', 'plumber', '{"en":"Materials","es":"Materiales","pt":"Materiais","fr":"Matériaux","de":"Materialien","it":"Materiali","nl":"Materialen","zh":"材料","ja":"材料","ru":"Материалы"}', '📦', 1
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/plumber/materials/bolts', 'construction', 'plumber', 'materials', 'construction/plumber/materials/bolts', NULL, '{"en":"bolts","es":"bolts","pt":"bolts","fr":"bolts","de":"bolts","it":"bolts","nl":"bouten","zh":"螺栓","ja":"ボルト","ru":"болты"}', 0
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/plumber/materials/caps', 'construction', 'plumber', 'materials', 'construction/plumber/materials/caps', NULL, '{"en":"caps","es":"caps","pt":"caps","fr":"caps","de":"caps","it":"caps","nl":"doppen","zh":"帽子","ja":"キャップ","ru":"крышки"}', 2
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/plumber/materials/clips', 'construction', 'plumber', 'materials', 'construction/plumber/materials/clips', NULL, '{"en":"clips","es":"clips","pt":"clips","fr":"clips","de":"clips","it":"clips","nl":"clips","zh":"夹子","ja":"クリップ","ru":"зажимы"}', 4
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/plumber/materials/connectors', 'construction', 'plumber', 'materials', 'construction/plumber/materials/connectors', NULL, '{"en":"connectors","es":"connectors","pt":"connectors","fr":"connectors","de":"connectors","it":"connectors","nl":"connectors","zh":"连接器","ja":"コネクター","ru":"разъемы"}', 6
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/plumber/materials/couplings', 'construction', 'plumber', 'materials', 'construction/plumber/materials/couplings', NULL, '{"en":"couplings","es":"couplings","pt":"couplings","fr":"couplings","de":"couplings","it":"couplings","nl":"koppelingen","zh":"联轴器","ja":"カップリング","ru":"муфты"}', 8
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/plumber/materials/covers', 'construction', 'plumber', 'materials', 'construction/plumber/materials/covers', NULL, '{"en":"covers","es":"covers","pt":"covers","fr":"covers","de":"covers","it":"covers","nl":"hoezen","zh":"盖子","ja":"カバー","ru":"крышки"}', 10
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/plumber/materials/fasteners', 'construction', 'plumber', 'materials', 'construction/plumber/materials/fasteners', NULL, '{"en":"fasteners","es":"fasteners","pt":"fasteners","fr":"fasteners","de":"fasteners","it":"fasteners","nl":"bevestigingsmiddelen","zh":"紧固件","ja":"ファスナー","ru":"крепежные элементы"}', 12
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/plumber/materials/filters', 'construction', 'plumber', 'materials', 'construction/plumber/materials/filters', NULL, '{"en":"filters","es":"filters","pt":"filters","fr":"filters","de":"filters","it":"filters","nl":"filters","zh":"过滤器","ja":"フィルター","ru":"фильтры"}', 14
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/plumber/materials/fittings', 'construction', 'plumber', 'materials', 'construction/plumber/materials/fittings', NULL, '{"en":"fittings","es":"fittings","pt":"fittings","fr":"fittings","de":"fittings","it":"fittings","nl":"fittingen","zh":"配件","ja":"フィッティング","ru":"фитинги"}', 16
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/plumber/materials/gaskets', 'construction', 'plumber', 'materials', 'construction/plumber/materials/gaskets', NULL, '{"en":"gaskets","es":"gaskets","pt":"gaskets","fr":"gaskets","de":"gaskets","it":"gaskets","nl":"pakkingen","zh":"垫圈","ja":"ガスケット","ru":"прокладки"}', 18
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/plumber/materials/glue', 'construction', 'plumber', 'materials', 'construction/plumber/materials/glue', NULL, '{"en":"glue","es":"glue","pt":"glue","fr":"glue","de":"glue","it":"glue","nl":"lijm","zh":"胶水","ja":"接着剤","ru":"клей"}', 20
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/plumber/materials/hoses', 'construction', 'plumber', 'materials', 'construction/plumber/materials/hoses', NULL, '{"en":"hoses","es":"hoses","pt":"hoses","fr":"hoses","de":"hoses","it":"hoses","nl":"slangen","zh":"软管","ja":"ホース","ru":"шланги"}', 22
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/plumber/materials/insulation', 'construction', 'plumber', 'materials', 'construction/plumber/materials/insulation', NULL, '{"en":"insulation","es":"insulation","pt":"insulation","fr":"insulation","de":"insulation","it":"insulation","nl":"isolatie","zh":"隔热材料","ja":"断熱材","ru":"изоляция"}', 24
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/plumber/materials/joints', 'construction', 'plumber', 'materials', 'construction/plumber/materials/joints', NULL, '{"en":"joints","es":"joints","pt":"joints","fr":"joints","de":"joints","it":"joints","nl":"verbindingen","zh":"接头","ja":"ジョイント","ru":"соединения"}', 26
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/plumber/materials/joints_set', 'construction', 'plumber', 'materials', 'construction/plumber/materials/joints_set', NULL, '{"en":"joints set","es":"joints set","pt":"joints set","fr":"joints set","de":"joints set","it":"joints set","nl":"verbindingenset","zh":"接头套装","ja":"ジョイントセット","ru":"набор соединений"}', 28
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/plumber/materials/liners', 'construction', 'plumber', 'materials', 'construction/plumber/materials/liners', NULL, '{"en":"liners","es":"liners","pt":"liners","fr":"liners","de":"liners","it":"liners","nl":"voering","zh":"内衬","ja":"ライナー","ru":"вкладыши"}', 30
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/plumber/materials/metal', 'construction', 'plumber', 'materials', 'construction/plumber/materials/metal', NULL, '{"en":"metal","es":"metal","pt":"metal","fr":"metal","de":"metal","it":"metal","nl":"metaal","zh":"金属","ja":"金属","ru":"металл"}', 32
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/plumber/materials/nuts', 'construction', 'plumber', 'materials', 'construction/plumber/materials/nuts', NULL, '{"en":"nuts","es":"nuts","pt":"nuts","fr":"nuts","de":"nuts","it":"nuts","nl":"moeren","zh":"螺母","ja":"ナット","ru":"гайки"}', 34
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/plumber/materials/pipes', 'construction', 'plumber', 'materials', 'construction/plumber/materials/pipes', NULL, '{"en":"pipes","es":"pipes","pt":"pipes","fr":"pipes","de":"pipes","it":"pipes","nl":"pijpen","zh":"管道","ja":"パイプ","ru":"трубы"}', 36
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/plumber/materials/plastic', 'construction', 'plumber', 'materials', 'construction/plumber/materials/plastic', NULL, '{"en":"plastic","es":"plastic","pt":"plastic","fr":"plastic","de":"plastic","it":"plastic","nl":"plastic","zh":"塑料","ja":"プラスチック","ru":"пластик"}', 38
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/plumber/materials/plugs', 'construction', 'plumber', 'materials', 'construction/plumber/materials/plugs', NULL, '{"en":"plugs","es":"plugs","pt":"plugs","fr":"plugs","de":"plugs","it":"plugs","nl":"pluggen","zh":"插头","ja":"プラグ","ru":"разъемы"}', 40
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/plumber/materials/rings', 'construction', 'plumber', 'materials', 'construction/plumber/materials/rings', NULL, '{"en":"rings","es":"rings","pt":"rings","fr":"rings","de":"rings","it":"rings","nl":"ringen","zh":"戒指","ja":"リング","ru":"кольца"}', 42
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/plumber/materials/rubber', 'construction', 'plumber', 'materials', 'construction/plumber/materials/rubber', NULL, '{"en":"rubber","es":"rubber","pt":"rubber","fr":"rubber","de":"rubber","it":"rubber","nl":"rubber","zh":"橡皮","ja":"ゴム","ru":"резина"}', 44
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/plumber/materials/screws', 'construction', 'plumber', 'materials', 'construction/plumber/materials/screws', NULL, '{"en":"screws","es":"screws","pt":"screws","fr":"screws","de":"screws","it":"screws","nl":"schroeven","zh":"螺丝","ja":"ネジ","ru":"винты"}', 46
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/plumber/materials/sealant', 'construction', 'plumber', 'materials', 'construction/plumber/materials/sealant', NULL, '{"en":"sealant","es":"sealant","pt":"sealant","fr":"sealant","de":"sealant","it":"sealant","nl":"afdichtingsmiddel","zh":"密封剂","ja":"シーラント","ru":"герметик"}', 48
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/plumber/materials/seals', 'construction', 'plumber', 'materials', 'construction/plumber/materials/seals', NULL, '{"en":"seals","es":"seals","pt":"seals","fr":"seals","de":"seals","it":"seals","nl":"afdichtingen","zh":"密封件","ja":"シール","ru":"уплотнения"}', 50
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/plumber/materials/sleeves', 'construction', 'plumber', 'materials', 'construction/plumber/materials/sleeves', NULL, '{"en":"sleeves","es":"sleeves","pt":"sleeves","fr":"sleeves","de":"sleeves","it":"sleeves","nl":"mouwen","zh":"套管","ja":"スリーブ","ru":"рукава"}', 52
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/plumber/materials/tape', 'construction', 'plumber', 'materials', 'construction/plumber/materials/tape', NULL, '{"en":"tape","es":"cinta","pt":"fita","fr":"ruban","de":"Klebeband","it":"nastro","nl":"tape","zh":"胶带","ja":"テープ","ru":"лента"}', 54
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/plumber/materials/valves', 'construction', 'plumber', 'materials', 'construction/plumber/materials/valves', NULL, '{"en":"valves","es":"valves","pt":"valves","fr":"valves","de":"valves","it":"valves","nl":"kleppen","zh":"阀门","ja":"バルブ","ru":"клапаны"}', 56
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/plumber/materials/washers', 'construction', 'plumber', 'materials', 'construction/plumber/materials/washers', NULL, '{"en":"washers","es":"washers","pt":"washers","fr":"washers","de":"washers","it":"washers","nl":"sluitringen","zh":"垫圈","ja":"ワッシャー","ru":"шайбы"}', 58
);

INSERT INTO public.sectors (id, job_id, name, icon, sort_order) VALUES (
  'roofer', 'construction', '{"en":"Roofer","es":"Techador","pt":"Telhadista","fr":"Couvreur","de":"Dachdecker","it":"Tecchista","nl":"Dakdekker","zh":"屋顶工","ja":"屋根工","ru":"Кровельщик"}', '🏠', 6
);
INSERT INTO public.roles (id, job_id, sector_id, name, icon, sort_order) VALUES (
  'tools', 'construction', 'roofer', '{"en":"Tools","es":"Herramientas","pt":"Ferramentas","fr":"Outils","de":"Werkzeuge","it":"Attrezzi","nl":"Gereedschap","zh":"工具","ja":"道具","ru":"Инструменты"}', '🔧', 0
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/roofer/tools/bar', 'construction', 'roofer', 'tools', 'construction/roofer/tools/bar', NULL, '{"en":"bar","es":"bar","pt":"bar","fr":"bar","de":"bar","it":"bar","nl":"bar","zh":"酒吧","ja":"バー","ru":"бар"}', 0
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/roofer/tools/broom', 'construction', 'roofer', 'tools', 'construction/roofer/tools/broom', NULL, '{"en":"broom","es":"escoba","pt":"vassoura","fr":"balai","de":"Besen","it":"scopa","nl":"bezem","zh":"扫帚","ja":"ほうき","ru":"метла"}', 2
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/roofer/tools/brush', 'construction', 'roofer', 'tools', 'construction/roofer/tools/brush', NULL, '{"en":"brush","es":"cepillo","pt":"escova","fr":"brosse","de":"Bürste","it":"spazzola","nl":"borstel","zh":"刷子","ja":"ブラシ","ru":"кисть"}', 4
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/roofer/tools/clamp', 'construction', 'roofer', 'tools', 'construction/roofer/tools/clamp', NULL, '{"en":"clamp","es":"clamp","pt":"clamp","fr":"clamp","de":"clamp","it":"clamp","nl":"klem","zh":"夹具","ja":"クランプ","ru":"зажим"}', 6
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/roofer/tools/cutter', 'construction', 'roofer', 'tools', 'construction/roofer/tools/cutter', NULL, '{"en":"cutter","es":"cortador","pt":"cortador","fr":"cutter","de":"Cutter","it":"taglierino","nl":"snijder","zh":"切割机","ja":"カッター","ru":"резак"}', 8
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/roofer/tools/drill', 'construction', 'roofer', 'tools', 'construction/roofer/tools/drill', NULL, '{"en":"drill","es":"taladro","pt":"furadeira","fr":"perceuse","de":"Bohrmaschine","it":"trapano","nl":"boor","zh":"钻头","ja":"ドリル","ru":"дрель"}', 10
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/roofer/tools/gun', 'construction', 'roofer', 'tools', 'construction/roofer/tools/gun', NULL, '{"en":"spray gun","es":"pistola de spray","pt":"pistola de spray","fr":"pistolet","de":"Sprühpistole","it":"pistola spray","nl":"verfpistool","zh":"喷枪","ja":"スプレーガン","ru":"краскопульт"}', 12
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/roofer/tools/hammer', 'construction', 'roofer', 'tools', 'construction/roofer/tools/hammer', NULL, '{"en":"hammer","es":"martillo","pt":"martelo","fr":"marteau","de":"Hammer","it":"martello","nl":"hamer","zh":"锤子","ja":"ハンマー","ru":"молоток"}', 14
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/roofer/tools/hook', 'construction', 'roofer', 'tools', 'construction/roofer/tools/hook', NULL, '{"en":"hook","es":"gancho","pt":"gancho","fr":"crochet","de":"Haken","it":"gancio","nl":"haak","zh":"挂钩","ja":"フック","ru":"крюк"}', 16
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/roofer/tools/knife', 'construction', 'roofer', 'tools', 'construction/roofer/tools/knife', NULL, '{"en":"knife","es":"cuchillo","pt":"faca","fr":"couteau","de":"Messer","it":"coltello","nl":"mes","zh":"刀","ja":"ナイフ","ru":"нож"}', 18
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/roofer/tools/ladder', 'construction', 'roofer', 'tools', 'construction/roofer/tools/ladder', NULL, '{"en":"ladder","es":"escalera","pt":"escada","fr":"échelle","de":"Leiter","it":"scala","nl":"ladder","zh":"梯子","ja":"はしご","ru":"лестница"}', 20
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/roofer/tools/level', 'construction', 'roofer', 'tools', 'construction/roofer/tools/level', NULL, '{"en":"level","es":"nivel","pt":"nível","fr":"niveau","de":"Wasserwaage","it":"livella","nl":"waterpas","zh":"水平仪","ja":"水平器","ru":"уровень"}', 22
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/roofer/tools/nail_gun', 'construction', 'roofer', 'tools', 'construction/roofer/tools/nail_gun', NULL, '{"en":"nail gun","es":"nail gun","pt":"nail gun","fr":"nail gun","de":"nail gun","it":"nail gun","nl":"spijkerpistool","zh":"气钉枪","ja":"ネイルガン","ru":"гвоздезабивной пистолет"}', 24
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/roofer/tools/roller', 'construction', 'roofer', 'tools', 'construction/roofer/tools/roller', NULL, '{"en":"roller","es":"rodillo","pt":"rolo","fr":"rouleau","de":"Rolle","it":"rullo","nl":"roller","zh":"滚筒","ja":"ローラー","ru":"валик"}', 26
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/roofer/tools/safety_harness', 'construction', 'roofer', 'tools', 'construction/roofer/tools/safety_harness', NULL, '{"en":"safety harness","es":"safety harness","pt":"safety harness","fr":"safety harness","de":"safety harness","it":"safety harness","nl":"veiligheidsharnas","zh":"安全带","ja":"安全ハーネス","ru":"страховочная привязь"}', 28
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/roofer/tools/scraper', 'construction', 'roofer', 'tools', 'construction/roofer/tools/scraper', NULL, '{"en":"scraper","es":"scraper","pt":"scraper","fr":"scraper","de":"scraper","it":"scraper","nl":"schraper","zh":"刮刀","ja":"スクレーパー","ru":"скребок"}', 30
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/roofer/tools/shovel', 'construction', 'roofer', 'tools', 'construction/roofer/tools/shovel', NULL, '{"en":"shovel","es":"pala","pt":"pá","fr":"pelle","de":"Schaufel","it":"vanga","nl":"schop","zh":"铲子","ja":"シャベル","ru":"лопата"}', 32
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/roofer/tools/tape_measure', 'construction', 'roofer', 'tools', 'construction/roofer/tools/tape_measure', NULL, '{"en":"tape measure","es":"tape measure","pt":"tape measure","fr":"tape measure","de":"tape measure","it":"tape measure","nl":"meetlint","zh":"卷尺","ja":"メジャー","ru":"рулетка"}', 34
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/roofer/tools/torch', 'construction', 'roofer', 'tools', 'construction/roofer/tools/torch', NULL, '{"en":"torch","es":"torch","pt":"torch","fr":"torch","de":"torch","it":"torch","nl":"lasbrander","zh":"焊炬","ja":"トーチ","ru":"горелка"}', 36
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/roofer/tools/wrench', 'construction', 'roofer', 'tools', 'construction/roofer/tools/wrench', NULL, '{"en":"wrench","es":"llave","pt":"chave inglesa","fr":"clé","de":"Schraubenschlüssel","it":"chiave","nl":"moersleutel","zh":"扳手","ja":"レンチ","ru":"гаечный ключ"}', 38
);
INSERT INTO public.roles (id, job_id, sector_id, name, icon, sort_order) VALUES (
  'materials', 'construction', 'roofer', '{"en":"Materials","es":"Materiales","pt":"Materiais","fr":"Matériaux","de":"Materialien","it":"Materiali","nl":"Materialen","zh":"材料","ja":"材料","ru":"Материалы"}', '📦', 1
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/roofer/materials/adhesive', 'construction', 'roofer', 'materials', 'construction/roofer/materials/adhesive', NULL, '{"en":"adhesive","es":"adhesive","pt":"adhesive","fr":"adhesive","de":"adhesive","it":"adhesive","nl":"lijm","zh":"粘合剂","ja":"接着剤","ru":"клей"}', 0
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/roofer/materials/boards', 'construction', 'roofer', 'materials', 'construction/roofer/materials/boards', NULL, '{"en":"boards","es":"boards","pt":"boards","fr":"boards","de":"boards","it":"boards","nl":"planken","zh":"板子","ja":"板材","ru":"доски"}', 2
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/roofer/materials/cement', 'construction', 'roofer', 'materials', 'construction/roofer/materials/cement', NULL, '{"en":"cement","es":"cement","pt":"cement","fr":"cement","de":"cement","it":"cement","nl":"cement","zh":"水泥","ja":"セメント","ru":"цемент"}', 4
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/roofer/materials/coating', 'construction', 'roofer', 'materials', 'construction/roofer/materials/coating', NULL, '{"en":"coating","es":"coating","pt":"coating","fr":"coating","de":"coating","it":"coating","nl":"coating","zh":"涂层","ja":"コーティング","ru":"покрытие"}', 6
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/roofer/materials/compounds', 'construction', 'roofer', 'materials', 'construction/roofer/materials/compounds', NULL, '{"en":"compounds","es":"compounds","pt":"compounds","fr":"compounds","de":"compounds","it":"compounds","nl":"verbindingen","zh":"化合物","ja":"化合物","ru":"соединения"}', 8
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/roofer/materials/covers', 'construction', 'roofer', 'materials', 'construction/roofer/materials/covers', NULL, '{"en":"covers","es":"covers","pt":"covers","fr":"covers","de":"covers","it":"covers","nl":"hoezen","zh":"盖子","ja":"カバー","ru":"крышки"}', 10
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/roofer/materials/felt', 'construction', 'roofer', 'materials', 'construction/roofer/materials/felt', NULL, '{"en":"felt","es":"felt","pt":"felt","fr":"felt","de":"felt","it":"felt","nl":"vilt","zh":"毡布","ja":"フェルト","ru":"войлок"}', 12
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/roofer/materials/filler', 'construction', 'roofer', 'materials', 'construction/roofer/materials/filler', NULL, '{"en":"filler","es":"filler","pt":"filler","fr":"filler","de":"filler","it":"filler","nl":"vulmiddel","zh":"填充物","ja":"フィラー","ru":"наполнитель"}', 14
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/roofer/materials/flashing', 'construction', 'roofer', 'materials', 'construction/roofer/materials/flashing', NULL, '{"en":"flashing","es":"flashing","pt":"flashing","fr":"flashing","de":"flashing","it":"flashing","nl":"dakrandafwerking","zh":"防水板","ja":"フラッシング","ru":"гидроизоляционный фартук"}', 16
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/roofer/materials/foam', 'construction', 'roofer', 'materials', 'construction/roofer/materials/foam', NULL, '{"en":"foam","es":"foam","pt":"foam","fr":"foam","de":"foam","it":"foam","nl":"schuim","zh":"泡沫","ja":"フォーム","ru":"пена"}', 18
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/roofer/materials/insulation', 'construction', 'roofer', 'materials', 'construction/roofer/materials/insulation', NULL, '{"en":"insulation","es":"insulation","pt":"insulation","fr":"insulation","de":"insulation","it":"insulation","nl":"isolatie","zh":"隔热材料","ja":"断熱材","ru":"изоляция"}', 20
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/roofer/materials/layers', 'construction', 'roofer', 'materials', 'construction/roofer/materials/layers', NULL, '{"en":"layers","es":"layers","pt":"layers","fr":"layers","de":"layers","it":"layers","nl":"lagen","zh":"层","ja":"層","ru":"слои"}', 22
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/roofer/materials/membrane', 'construction', 'roofer', 'materials', 'construction/roofer/materials/membrane', NULL, '{"en":"membrane","es":"membrane","pt":"membrane","fr":"membrane","de":"membrane","it":"membrane","nl":"membraan","zh":"膜","ja":"メンブレン","ru":"мембрана"}', 24
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/roofer/materials/mesh', 'construction', 'roofer', 'materials', 'construction/roofer/materials/mesh', NULL, '{"en":"mesh","es":"mesh","pt":"mesh","fr":"mesh","de":"mesh","it":"mesh","nl":"gaas","zh":"网","ja":"メッシュ","ru":"сетка"}', 26
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/roofer/materials/metal', 'construction', 'roofer', 'materials', 'construction/roofer/materials/metal', NULL, '{"en":"metal","es":"metal","pt":"metal","fr":"metal","de":"metal","it":"metal","nl":"metaal","zh":"金属","ja":"金属","ru":"металл"}', 28
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/roofer/materials/nails', 'construction', 'roofer', 'materials', 'construction/roofer/materials/nails', NULL, '{"en":"nails","es":"nails","pt":"nails","fr":"nails","de":"nails","it":"nails","nl":"spijkers","zh":"钉子","ja":"釘","ru":"гвозди"}', 30
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/roofer/materials/pads', 'construction', 'roofer', 'materials', 'construction/roofer/materials/pads', NULL, '{"en":"pads","es":"pads","pt":"pads","fr":"pads","de":"pads","it":"pads","nl":"kussens","zh":"垫子","ja":"パッド","ru":"подушечки"}', 32
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/roofer/materials/panels', 'construction', 'roofer', 'materials', 'construction/roofer/materials/panels', NULL, '{"en":"panels","es":"panels","pt":"panels","fr":"panels","de":"panels","it":"panels","nl":"panelen","zh":"面板","ja":"パネル","ru":"панели"}', 34
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/roofer/materials/paste', 'construction', 'roofer', 'materials', 'construction/roofer/materials/paste', NULL, '{"en":"paste","es":"paste","pt":"paste","fr":"paste","de":"paste","it":"paste","nl":"pasta","zh":"糊","ja":"ペースト","ru":"паста"}', 36
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/roofer/materials/plastic', 'construction', 'roofer', 'materials', 'construction/roofer/materials/plastic', NULL, '{"en":"plastic","es":"plastic","pt":"plastic","fr":"plastic","de":"plastic","it":"plastic","nl":"plastic","zh":"塑料","ja":"プラスチック","ru":"пластик"}', 38
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/roofer/materials/resin', 'construction', 'roofer', 'materials', 'construction/roofer/materials/resin', NULL, '{"en":"resin","es":"resin","pt":"resin","fr":"resin","de":"resin","it":"resin","nl":"hars","zh":"树脂","ja":"樹脂","ru":"смола"}', 40
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/roofer/materials/rubber', 'construction', 'roofer', 'materials', 'construction/roofer/materials/rubber', NULL, '{"en":"rubber","es":"rubber","pt":"rubber","fr":"rubber","de":"rubber","it":"rubber","nl":"rubber","zh":"橡皮","ja":"ゴム","ru":"резина"}', 42
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/roofer/materials/screws', 'construction', 'roofer', 'materials', 'construction/roofer/materials/screws', NULL, '{"en":"screws","es":"screws","pt":"screws","fr":"screws","de":"screws","it":"screws","nl":"schroeven","zh":"螺丝","ja":"ネジ","ru":"винты"}', 44
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/roofer/materials/sealant', 'construction', 'roofer', 'materials', 'construction/roofer/materials/sealant', NULL, '{"en":"sealant","es":"sealant","pt":"sealant","fr":"sealant","de":"sealant","it":"sealant","nl":"afdichtingsmiddel","zh":"密封剂","ja":"シーラント","ru":"герметик"}', 46
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/roofer/materials/sheets', 'construction', 'roofer', 'materials', 'construction/roofer/materials/sheets', NULL, '{"en":"sheets","es":"sheets","pt":"sheets","fr":"sheets","de":"sheets","it":"sheets","nl":"lakens","zh":"床单","ja":"シーツ","ru":"простыни"}', 48
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/roofer/materials/shingles', 'construction', 'roofer', 'materials', 'construction/roofer/materials/shingles', NULL, '{"en":"shingles","es":"shingles","pt":"shingles","fr":"shingles","de":"shingles","it":"shingles","nl":"dakpannen","zh":"屋面板","ja":"屋根板","ru":"кровельная черепица"}', 50
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/roofer/materials/strips', 'construction', 'roofer', 'materials', 'construction/roofer/materials/strips', NULL, '{"en":"strips","es":"strips","pt":"strips","fr":"strips","de":"strips","it":"strips","nl":"stroken","zh":"条","ja":"ストリップ","ru":"полоски"}', 52
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/roofer/materials/tar', 'construction', 'roofer', 'materials', 'construction/roofer/materials/tar', NULL, '{"en":"tar","es":"tar","pt":"tar","fr":"tar","de":"tar","it":"tar","nl":"teer","zh":"沥青","ja":"タール","ru":"смола"}', 54
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/roofer/materials/tiles', 'construction', 'roofer', 'materials', 'construction/roofer/materials/tiles', NULL, '{"en":"tiles","es":"tiles","pt":"tiles","fr":"tiles","de":"tiles","it":"tiles","nl":"tegels","zh":"瓷砖","ja":"タイル","ru":"плитка"}', 56
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'construction/roofer/materials/wraps', 'construction', 'roofer', 'materials', 'construction/roofer/materials/wraps', NULL, '{"en":"wraps","es":"wraps","pt":"wraps","fr":"wraps","de":"wraps","it":"wraps","nl":"wraps","zh":"包装","ja":"ラップ","ru":"обертки"}', 58
);

INSERT INTO public.jobs (id, name, icon, image_url, sort_order) VALUES (
  'delivery_logistic', '{"en":"Delivery & Logistics","es":"Logística","pt":"Logística","fr":"Logistique","de":"Logistik","it":"Logistica","nl":"Bezorging & Logistiek","zh":"配送与物流","ja":"配送・物流","ru":"Доставка и логистика"}', '📦', 'https://images.pexels.com/photos/4481259/pexels-photo-4481259.jpeg?auto=compress&cs=tinysrgb&w=800', 5
);

INSERT INTO public.sectors (id, job_id, name, icon, sort_order) VALUES (
  'food_delivery', 'delivery_logistic', '{"en":"Food Delivery","es":"Entrega de Comida","pt":"Entrega de Comida","fr":"Livraison Repas","de":"Essenslieferung","it":"Consegna Cibo","nl":"Maaltijdbezorging","zh":"食品配送","ja":"料理配達","ru":"Доставка еды"}', '🛵', 0
);
INSERT INTO public.roles (id, job_id, sector_id, name, icon, sort_order) VALUES (
  'tools', 'delivery_logistic', 'food_delivery', '{"en":"Tools","es":"Herramientas","pt":"Ferramentas","fr":"Outils","de":"Werkzeuge","it":"Attrezzi","nl":"Gereedschap","zh":"工具","ja":"道具","ru":"Инструменты"}', '🔧', 0
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'delivery_logistic/food_delivery/tools/app_device', 'delivery_logistic', 'food_delivery', 'tools', 'delivery_logistic/food_delivery/tools/app_device', NULL, '{"en":"app device","es":"app device","pt":"app device","fr":"app device","de":"app device","it":"app device","nl":"app-apparaat","zh":"应用设备","ja":"アプリデバイス","ru":"устройство с приложением"}', 0
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'delivery_logistic/food_delivery/tools/backpack', 'delivery_logistic', 'food_delivery', 'tools', 'delivery_logistic/food_delivery/tools/backpack', NULL, '{"en":"backpack","es":"backpack","pt":"backpack","fr":"backpack","de":"backpack","it":"backpack","nl":"rugzak","zh":"背包","ja":"バックパック","ru":"рюкзак"}', 2
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'delivery_logistic/food_delivery/tools/bell', 'delivery_logistic', 'food_delivery', 'tools', 'delivery_logistic/food_delivery/tools/bell', NULL, '{"en":"bell","es":"bell","pt":"bell","fr":"bell","de":"bell","it":"bell","nl":"bel","zh":"铃","ja":"ベル","ru":"колокольчик"}', 4
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'delivery_logistic/food_delivery/tools/bicycle', 'delivery_logistic', 'food_delivery', 'tools', 'delivery_logistic/food_delivery/tools/bicycle', NULL, '{"en":"bicycle","es":"bicycle","pt":"bicycle","fr":"bicycle","de":"bicycle","it":"bicycle","nl":"fiets","zh":"自行车","ja":"自転車","ru":"велосипед"}', 6
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'delivery_logistic/food_delivery/tools/camera', 'delivery_logistic', 'food_delivery', 'tools', 'delivery_logistic/food_delivery/tools/camera', NULL, '{"en":"camera","es":"camera","pt":"camera","fr":"camera","de":"camera","it":"camera","nl":"camera","zh":"摄像机","ja":"カメラ","ru":"камера"}', 8
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'delivery_logistic/food_delivery/tools/car', 'delivery_logistic', 'food_delivery', 'tools', 'delivery_logistic/food_delivery/tools/car', NULL, '{"en":"car","es":"car","pt":"car","fr":"car","de":"car","it":"car","nl":"auto","zh":"汽车","ja":"車","ru":"автомобиль"}', 10
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'delivery_logistic/food_delivery/tools/card_machine', 'delivery_logistic', 'food_delivery', 'tools', 'delivery_logistic/food_delivery/tools/card_machine', NULL, '{"en":"card machine","es":"card machine","pt":"card machine","fr":"card machine","de":"card machine","it":"card machine","nl":"kaartlezer","zh":"刷卡机","ja":"カードリーダー","ru":"картридер"}', 12
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'delivery_logistic/food_delivery/tools/charger', 'delivery_logistic', 'food_delivery', 'tools', 'delivery_logistic/food_delivery/tools/charger', NULL, '{"en":"charger","es":"charger","pt":"charger","fr":"charger","de":"charger","it":"charger","nl":"oplader","zh":"充电器","ja":"充電器","ru":"зарядное устройство"}', 14
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'delivery_logistic/food_delivery/tools/clock', 'delivery_logistic', 'food_delivery', 'tools', 'delivery_logistic/food_delivery/tools/clock', NULL, '{"en":"clock","es":"clock","pt":"clock","fr":"clock","de":"clock","it":"clock","nl":"klok","zh":"时钟","ja":"時計","ru":"часы"}', 16
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'delivery_logistic/food_delivery/tools/delivery_bag', 'delivery_logistic', 'food_delivery', 'tools', 'delivery_logistic/food_delivery/tools/delivery_bag', NULL, '{"en":"delivery bag","es":"delivery bag","pt":"delivery bag","fr":"delivery bag","de":"delivery bag","it":"delivery bag","nl":"bezorgtas","zh":"配送袋","ja":"配達バッグ","ru":"сумка для доставки"}', 18
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'delivery_logistic/food_delivery/tools/flashlight', 'delivery_logistic', 'food_delivery', 'tools', 'delivery_logistic/food_delivery/tools/flashlight', NULL, '{"en":"flashlight","es":"flashlight","pt":"flashlight","fr":"flashlight","de":"flashlight","it":"flashlight","nl":"zaklamp","zh":"手电筒","ja":"懐中電灯","ru":"фонарик"}', 20
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'delivery_logistic/food_delivery/tools/gloves', 'delivery_logistic', 'food_delivery', 'tools', 'delivery_logistic/food_delivery/tools/gloves', NULL, '{"en":"gloves","es":"guantes","pt":"luvas","fr":"gants","de":"Handschuhe","it":"guanti","nl":"handschoenen","zh":"手套","ja":"手袋","ru":"перчатки"}', 22
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'delivery_logistic/food_delivery/tools/gps_device', 'delivery_logistic', 'food_delivery', 'tools', 'delivery_logistic/food_delivery/tools/gps_device', NULL, '{"en":"gps device","es":"gps device","pt":"gps device","fr":"gps device","de":"gps device","it":"gps device","nl":"gps-apparaat","zh":"GPS设备","ja":"GPSデバイス","ru":"GPS устройство"}', 24
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'delivery_logistic/food_delivery/tools/headset', 'delivery_logistic', 'food_delivery', 'tools', 'delivery_logistic/food_delivery/tools/headset', NULL, '{"en":"headset","es":"headset","pt":"headset","fr":"headset","de":"headset","it":"headset","nl":"headset","zh":"耳机","ja":"ヘッドセット","ru":"гарнитура"}', 26
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'delivery_logistic/food_delivery/tools/helmet', 'delivery_logistic', 'food_delivery', 'tools', 'delivery_logistic/food_delivery/tools/helmet', NULL, '{"en":"helmet","es":"casco","pt":"capacete","fr":"casque","de":"Helm","it":"casco","nl":"helm","zh":"安全帽","ja":"ヘルメット","ru":"каска"}', 28
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'delivery_logistic/food_delivery/tools/holder', 'delivery_logistic', 'food_delivery', 'tools', 'delivery_logistic/food_delivery/tools/holder', NULL, '{"en":"holder","es":"holder","pt":"holder","fr":"holder","de":"holder","it":"holder","nl":"houder","zh":"夹持器","ja":"ホルダー","ru":"держатель"}', 30
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'delivery_logistic/food_delivery/tools/intercom', 'delivery_logistic', 'food_delivery', 'tools', 'delivery_logistic/food_delivery/tools/intercom', NULL, '{"en":"intercom","es":"intercom","pt":"intercom","fr":"intercom","de":"intercom","it":"intercom","nl":"intercom","zh":"对讲机","ja":"インターコム","ru":"домофон"}', 32
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'delivery_logistic/food_delivery/tools/jacket', 'delivery_logistic', 'food_delivery', 'tools', 'delivery_logistic/food_delivery/tools/jacket', NULL, '{"en":"jacket","es":"jacket","pt":"jacket","fr":"jacket","de":"jacket","it":"jacket","nl":"jas","zh":"夹克","ja":"ジャケット","ru":"куртка"}', 34
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'delivery_logistic/food_delivery/tools/key', 'delivery_logistic', 'food_delivery', 'tools', 'delivery_logistic/food_delivery/tools/key', NULL, '{"en":"key","es":"key","pt":"key","fr":"key","de":"key","it":"key","nl":"sleutel","zh":"钥匙","ja":"鍵","ru":"ключ"}', 36
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'delivery_logistic/food_delivery/tools/lock', 'delivery_logistic', 'food_delivery', 'tools', 'delivery_logistic/food_delivery/tools/lock', NULL, '{"en":"lock","es":"lock","pt":"lock","fr":"lock","de":"lock","it":"lock","nl":"slot","zh":"锁","ja":"鍵","ru":"замок"}', 38
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'delivery_logistic/food_delivery/tools/mount', 'delivery_logistic', 'food_delivery', 'tools', 'delivery_logistic/food_delivery/tools/mount', NULL, '{"en":"mount","es":"mount","pt":"mount","fr":"mount","de":"mount","it":"mount","nl":"montage","zh":"支架","ja":"マウント","ru":"кронштейн"}', 40
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'delivery_logistic/food_delivery/tools/phone', 'delivery_logistic', 'food_delivery', 'tools', 'delivery_logistic/food_delivery/tools/phone', NULL, '{"en":"phone","es":"teléfono","pt":"telefone","fr":"téléphone","de":"Telefon","it":"telefono","nl":"telefoon","zh":"手机","ja":"電話","ru":"телефон"}', 42
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'delivery_logistic/food_delivery/tools/power_bank', 'delivery_logistic', 'food_delivery', 'tools', 'delivery_logistic/food_delivery/tools/power_bank', NULL, '{"en":"power bank","es":"power bank","pt":"power bank","fr":"power bank","de":"power bank","it":"power bank","nl":"powerbank","zh":"充电宝","ja":"モバイルバッテリー","ru":"внешний аккумулятор"}', 44
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'delivery_logistic/food_delivery/tools/scooter', 'delivery_logistic', 'food_delivery', 'tools', 'delivery_logistic/food_delivery/tools/scooter', NULL, '{"en":"scooter","es":"scooter","pt":"scooter","fr":"scooter","de":"scooter","it":"scooter","nl":"scooter","zh":"踏板车","ja":"スクーター","ru":"скутер"}', 46
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'delivery_logistic/food_delivery/tools/thermal_bag', 'delivery_logistic', 'food_delivery', 'tools', 'delivery_logistic/food_delivery/tools/thermal_bag', NULL, '{"en":"thermal bag","es":"thermal bag","pt":"thermal bag","fr":"thermal bag","de":"thermal bag","it":"thermal bag","nl":"thermische tas","zh":"保温袋","ja":"保冷バッグ","ru":"термосумка"}', 48
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'delivery_logistic/food_delivery/tools/timer', 'delivery_logistic', 'food_delivery', 'tools', 'delivery_logistic/food_delivery/tools/timer', NULL, '{"en":"timer","es":"timer","pt":"timer","fr":"timer","de":"timer","it":"timer","nl":"timer","zh":"计时器","ja":"タイマー","ru":"таймер"}', 50
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'delivery_logistic/food_delivery/tools/wallet', 'delivery_logistic', 'food_delivery', 'tools', 'delivery_logistic/food_delivery/tools/wallet', NULL, '{"en":"wallet","es":"wallet","pt":"wallet","fr":"wallet","de":"wallet","it":"wallet","nl":"portemonnee","zh":"钱包","ja":"財布","ru":"кошелек"}', 52
);
INSERT INTO public.roles (id, job_id, sector_id, name, icon, sort_order) VALUES (
  'materials', 'delivery_logistic', 'food_delivery', '{"en":"Materials","es":"Materiales","pt":"Materiais","fr":"Matériaux","de":"Materialien","it":"Materiali","nl":"Materialen","zh":"材料","ja":"材料","ru":"Материалы"}', '📦', 1
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'delivery_logistic/food_delivery/materials/cash', 'delivery_logistic', 'food_delivery', 'materials', 'delivery_logistic/food_delivery/materials/cash', NULL, '{"en":"cash","es":"efectivo","pt":"dinheiro","fr":"espèces","de":"Bargeld","it":"contanti","nl":"contant geld","zh":"现金","ja":"現金","ru":"наличные"}', 0
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'delivery_logistic/food_delivery/materials/drink_cup', 'delivery_logistic', 'food_delivery', 'materials', 'delivery_logistic/food_delivery/materials/drink_cup', NULL, '{"en":"drink cup","es":"drink cup","pt":"drink cup","fr":"drink cup","de":"drink cup","it":"drink cup","nl":"drinkbeker","zh":"饮料杯","ja":"ドリンクカップ","ru":"стакан для напитков"}', 2
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'delivery_logistic/food_delivery/materials/food_container', 'delivery_logistic', 'food_delivery', 'materials', 'delivery_logistic/food_delivery/materials/food_container', NULL, '{"en":"food container","es":"food container","pt":"food container","fr":"food container","de":"food container","it":"food container","nl":"voedselcontainer","zh":"食品容器","ja":"食品容器","ru":"пищевой контейнер"}', 4
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'delivery_logistic/food_delivery/materials/label', 'delivery_logistic', 'food_delivery', 'materials', 'delivery_logistic/food_delivery/materials/label', NULL, '{"en":"label","es":"etiqueta","pt":"etiqueta","fr":"étiquette","de":"Etikett","it":"etichetta","nl":"etiket","zh":"标签","ja":"ラベル","ru":"этикетка"}', 6
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'delivery_logistic/food_delivery/materials/lid', 'delivery_logistic', 'food_delivery', 'materials', 'delivery_logistic/food_delivery/materials/lid', NULL, '{"en":"lid","es":"lid","pt":"lid","fr":"lid","de":"lid","it":"lid","nl":"deksel","zh":"盖子","ja":"蓋","ru":"крышка"}', 8
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'delivery_logistic/food_delivery/materials/napkin', 'delivery_logistic', 'food_delivery', 'materials', 'delivery_logistic/food_delivery/materials/napkin', NULL, '{"en":"napkin","es":"napkin","pt":"napkin","fr":"napkin","de":"napkin","it":"napkin","nl":"servet","zh":"餐巾","ja":"ナプキン","ru":"салфетка"}', 10
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'delivery_logistic/food_delivery/materials/order_receipt', 'delivery_logistic', 'food_delivery', 'materials', 'delivery_logistic/food_delivery/materials/order_receipt', NULL, '{"en":"order receipt","es":"order receipt","pt":"order receipt","fr":"order receipt","de":"order receipt","it":"order receipt","nl":"orderbon","zh":"订单收据","ja":"注文レシート","ru":"квитанция заказа"}', 12
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'delivery_logistic/food_delivery/materials/paper_bag', 'delivery_logistic', 'food_delivery', 'materials', 'delivery_logistic/food_delivery/materials/paper_bag', NULL, '{"en":"paper bag","es":"paper bag","pt":"paper bag","fr":"paper bag","de":"paper bag","it":"paper bag","nl":"papieren tas","zh":"纸袋","ja":"紙袋","ru":"бумажный пакет"}', 14
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'delivery_logistic/food_delivery/materials/plastic_bag', 'delivery_logistic', 'food_delivery', 'materials', 'delivery_logistic/food_delivery/materials/plastic_bag', NULL, '{"en":"plastic bag","es":"plastic bag","pt":"plastic bag","fr":"plastic bag","de":"plastic bag","it":"plastic bag","nl":"plastic zak","zh":"塑料袋","ja":"ビニール袋","ru":"пластиковый пакет"}', 16
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'delivery_logistic/food_delivery/materials/receipt', 'delivery_logistic', 'food_delivery', 'materials', 'delivery_logistic/food_delivery/materials/receipt', NULL, '{"en":"receipt","es":"recibo","pt":"recibo","fr":"reçu","de":"Quittung","it":"ricevuta","nl":"bon","zh":"收据","ja":"レシート","ru":"квитанция"}', 18
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'delivery_logistic/food_delivery/materials/seal', 'delivery_logistic', 'food_delivery', 'materials', 'delivery_logistic/food_delivery/materials/seal', NULL, '{"en":"seal","es":"seal","pt":"seal","fr":"seal","de":"seal","it":"seal","nl":"afdichting","zh":"密封件","ja":"シール","ru":"уплотнение"}', 20
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'delivery_logistic/food_delivery/materials/sticker', 'delivery_logistic', 'food_delivery', 'materials', 'delivery_logistic/food_delivery/materials/sticker', NULL, '{"en":"sticker","es":"sticker","pt":"sticker","fr":"sticker","de":"sticker","it":"sticker","nl":"sticker","zh":"贴纸","ja":"ステッカー","ru":"наклейка"}', 22
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'delivery_logistic/food_delivery/materials/straw', 'delivery_logistic', 'food_delivery', 'materials', 'delivery_logistic/food_delivery/materials/straw', NULL, '{"en":"straw","es":"straw","pt":"straw","fr":"straw","de":"straw","it":"straw","nl":"rietje","zh":"吸管","ja":"ストロー","ru":"соломинка"}', 24
);

INSERT INTO public.sectors (id, job_id, name, icon, sort_order) VALUES (
  'parcel_delivery', 'delivery_logistic', '{"en":"Parcel Delivery","es":"Mensajería","pt":"Entrega de Encomendas","fr":"Livraison Colis","de":"Paketlieferung","it":"Corriere","nl":"Pakketbezorging","zh":"包裹配送","ja":"荷物配達","ru":"Доставка посылок"}', '📬', 1
);
INSERT INTO public.roles (id, job_id, sector_id, name, icon, sort_order) VALUES (
  'tools', 'delivery_logistic', 'parcel_delivery', '{"en":"Tools","es":"Herramientas","pt":"Ferramentas","fr":"Outils","de":"Werkzeuge","it":"Attrezzi","nl":"Gereedschap","zh":"工具","ja":"道具","ru":"Инструменты"}', '🔧', 0
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'delivery_logistic/parcel_delivery/tools/app_device', 'delivery_logistic', 'parcel_delivery', 'tools', 'delivery_logistic/parcel_delivery/tools/app_device', NULL, '{"en":"app device","es":"app device","pt":"app device","fr":"app device","de":"app device","it":"app device","nl":"app-apparaat","zh":"应用设备","ja":"アプリデバイス","ru":"устройство с приложением"}', 0
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'delivery_logistic/parcel_delivery/tools/bin', 'delivery_logistic', 'parcel_delivery', 'tools', 'delivery_logistic/parcel_delivery/tools/bin', NULL, '{"en":"bin","es":"cubo de basura","pt":"lixeira","fr":"poubelle","de":"Mülleimer","it":"bidone","nl":"prullenbak","zh":"垃圾桶","ja":"ビン","ru":"мусорное ведро"}', 2
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'delivery_logistic/parcel_delivery/tools/camera', 'delivery_logistic', 'parcel_delivery', 'tools', 'delivery_logistic/parcel_delivery/tools/camera', NULL, '{"en":"camera","es":"camera","pt":"camera","fr":"camera","de":"camera","it":"camera","nl":"camera","zh":"摄像机","ja":"カメラ","ru":"камера"}', 4
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'delivery_logistic/parcel_delivery/tools/cart', 'delivery_logistic', 'parcel_delivery', 'tools', 'delivery_logistic/parcel_delivery/tools/cart', NULL, '{"en":"cart","es":"carrito","pt":"carrinho","fr":"chariot","de":"Wagen","it":"carrello","nl":"kar","zh":"推车","ja":"カート","ru":"тележка"}', 6
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'delivery_logistic/parcel_delivery/tools/charger', 'delivery_logistic', 'parcel_delivery', 'tools', 'delivery_logistic/parcel_delivery/tools/charger', NULL, '{"en":"charger","es":"charger","pt":"charger","fr":"charger","de":"charger","it":"charger","nl":"oplader","zh":"充电器","ja":"充電器","ru":"зарядное устройство"}', 8
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'delivery_logistic/parcel_delivery/tools/clock', 'delivery_logistic', 'parcel_delivery', 'tools', 'delivery_logistic/parcel_delivery/tools/clock', NULL, '{"en":"clock","es":"clock","pt":"clock","fr":"clock","de":"clock","it":"clock","nl":"klok","zh":"时钟","ja":"時計","ru":"часы"}', 10
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'delivery_logistic/parcel_delivery/tools/container', 'delivery_logistic', 'parcel_delivery', 'tools', 'delivery_logistic/parcel_delivery/tools/container', NULL, '{"en":"container","es":"contenedor","pt":"recipiente","fr":"conteneur","de":"Behälter","it":"contenitore","nl":"container","zh":"容器","ja":"コンテナ","ru":"контейнер"}', 12
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'delivery_logistic/parcel_delivery/tools/crate', 'delivery_logistic', 'parcel_delivery', 'tools', 'delivery_logistic/parcel_delivery/tools/crate', NULL, '{"en":"crate","es":"cajón","pt":"engradado","fr":"caisse","de":"Kiste","it":"cassa","nl":"krat","zh":"板条箱","ja":"クレート","ru":"ящик"}', 14
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'delivery_logistic/parcel_delivery/tools/cutter', 'delivery_logistic', 'parcel_delivery', 'tools', 'delivery_logistic/parcel_delivery/tools/cutter', NULL, '{"en":"cutter","es":"cortador","pt":"cortador","fr":"cutter","de":"Cutter","it":"taglierino","nl":"snijder","zh":"切割机","ja":"カッター","ru":"резак"}', 16
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'delivery_logistic/parcel_delivery/tools/flashlight', 'delivery_logistic', 'parcel_delivery', 'tools', 'delivery_logistic/parcel_delivery/tools/flashlight', NULL, '{"en":"flashlight","es":"flashlight","pt":"flashlight","fr":"flashlight","de":"flashlight","it":"flashlight","nl":"zaklamp","zh":"手电筒","ja":"懐中電灯","ru":"фонарик"}', 18
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'delivery_logistic/parcel_delivery/tools/gloves', 'delivery_logistic', 'parcel_delivery', 'tools', 'delivery_logistic/parcel_delivery/tools/gloves', NULL, '{"en":"gloves","es":"guantes","pt":"luvas","fr":"gants","de":"Handschuhe","it":"guanti","nl":"handschoenen","zh":"手套","ja":"手袋","ru":"перчатки"}', 20
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'delivery_logistic/parcel_delivery/tools/gps_device', 'delivery_logistic', 'parcel_delivery', 'tools', 'delivery_logistic/parcel_delivery/tools/gps_device', NULL, '{"en":"gps device","es":"gps device","pt":"gps device","fr":"gps device","de":"gps device","it":"gps device","nl":"gps-apparaat","zh":"GPS设备","ja":"GPSデバイス","ru":"GPS устройство"}', 22
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'delivery_logistic/parcel_delivery/tools/key', 'delivery_logistic', 'parcel_delivery', 'tools', 'delivery_logistic/parcel_delivery/tools/key', NULL, '{"en":"key","es":"key","pt":"key","fr":"key","de":"key","it":"key","nl":"sleutel","zh":"钥匙","ja":"鍵","ru":"ключ"}', 24
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'delivery_logistic/parcel_delivery/tools/knife', 'delivery_logistic', 'parcel_delivery', 'tools', 'delivery_logistic/parcel_delivery/tools/knife', NULL, '{"en":"knife","es":"cuchillo","pt":"faca","fr":"couteau","de":"Messer","it":"coltello","nl":"mes","zh":"刀","ja":"ナイフ","ru":"нож"}', 26
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'delivery_logistic/parcel_delivery/tools/lock', 'delivery_logistic', 'parcel_delivery', 'tools', 'delivery_logistic/parcel_delivery/tools/lock', NULL, '{"en":"lock","es":"lock","pt":"lock","fr":"lock","de":"lock","it":"lock","nl":"slot","zh":"锁","ja":"鍵","ru":"замок"}', 28
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'delivery_logistic/parcel_delivery/tools/pallet', 'delivery_logistic', 'parcel_delivery', 'tools', 'delivery_logistic/parcel_delivery/tools/pallet', NULL, '{"en":"pallet","es":"palé","pt":"palete","fr":"palette","de":"Palette","it":"pallet","nl":"pallet","zh":"托盘","ja":"パレット","ru":"паллет"}', 30
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'delivery_logistic/parcel_delivery/tools/phone', 'delivery_logistic', 'parcel_delivery', 'tools', 'delivery_logistic/parcel_delivery/tools/phone', NULL, '{"en":"phone","es":"teléfono","pt":"telefone","fr":"téléphone","de":"Telefon","it":"telefono","nl":"telefoon","zh":"手机","ja":"電話","ru":"телефон"}', 32
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'delivery_logistic/parcel_delivery/tools/rack', 'delivery_logistic', 'parcel_delivery', 'tools', 'delivery_logistic/parcel_delivery/tools/rack', NULL, '{"en":"rack","es":"estante","pt":"prateleira","fr":"étagère","de":"Regal","it":"scaffale","nl":"rek","zh":"货架","ja":"ラック","ru":"стеллаж"}', 34
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'delivery_logistic/parcel_delivery/tools/scanner', 'delivery_logistic', 'parcel_delivery', 'tools', 'delivery_logistic/parcel_delivery/tools/scanner', NULL, '{"en":"scanner","es":"escáner","pt":"scanner","fr":"scanner","de":"Scanner","it":"scanner","nl":"scanner","zh":"扫描仪","ja":"スキャナー","ru":"сканер"}', 36
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'delivery_logistic/parcel_delivery/tools/screen', 'delivery_logistic', 'parcel_delivery', 'tools', 'delivery_logistic/parcel_delivery/tools/screen', NULL, '{"en":"screen","es":"screen","pt":"screen","fr":"screen","de":"screen","it":"screen","nl":"scherm","zh":"屏幕","ja":"スクリーン","ru":"экран"}', 38
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'delivery_logistic/parcel_delivery/tools/shelf', 'delivery_logistic', 'parcel_delivery', 'tools', 'delivery_logistic/parcel_delivery/tools/shelf', NULL, '{"en":"shelf","es":"shelf","pt":"shelf","fr":"shelf","de":"shelf","it":"shelf","nl":"plank","zh":"架子","ja":"棚","ru":"полка"}', 40
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'delivery_logistic/parcel_delivery/tools/timer', 'delivery_logistic', 'parcel_delivery', 'tools', 'delivery_logistic/parcel_delivery/tools/timer', NULL, '{"en":"timer","es":"timer","pt":"timer","fr":"timer","de":"timer","it":"timer","nl":"timer","zh":"计时器","ja":"タイマー","ru":"таймер"}', 42
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'delivery_logistic/parcel_delivery/tools/trolley', 'delivery_logistic', 'parcel_delivery', 'tools', 'delivery_logistic/parcel_delivery/tools/trolley', NULL, '{"en":"trolley","es":"carrito","pt":"carrinho","fr":"chariot","de":"Trolley","it":"carrello","nl":"trolley","zh":"手推车","ja":"トロリー","ru":"тележка"}', 44
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'delivery_logistic/parcel_delivery/tools/truck', 'delivery_logistic', 'parcel_delivery', 'tools', 'delivery_logistic/parcel_delivery/tools/truck', NULL, '{"en":"truck","es":"truck","pt":"truck","fr":"truck","de":"truck","it":"truck","nl":"vrachtwagen","zh":"卡车","ja":"トラック","ru":"грузовик"}', 46
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'delivery_logistic/parcel_delivery/tools/uniform', 'delivery_logistic', 'parcel_delivery', 'tools', 'delivery_logistic/parcel_delivery/tools/uniform', NULL, '{"en":"uniform","es":"uniforme","pt":"uniforme","fr":"uniforme","de":"Uniform","it":"uniforme","nl":"uniform","zh":"制服","ja":"ユニフォーム","ru":"форма"}', 48
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'delivery_logistic/parcel_delivery/tools/van', 'delivery_logistic', 'parcel_delivery', 'tools', 'delivery_logistic/parcel_delivery/tools/van', NULL, '{"en":"van","es":"van","pt":"van","fr":"van","de":"van","it":"van","nl":"bestelwagen","zh":"货车","ja":"バン","ru":"фургон"}', 50
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'delivery_logistic/parcel_delivery/tools/vest', 'delivery_logistic', 'parcel_delivery', 'tools', 'delivery_logistic/parcel_delivery/tools/vest', NULL, '{"en":"vest","es":"chaleco","pt":"colete","fr":"gilet","de":"Weste","it":"gilet","nl":"vest","zh":"背心","ja":"ベスト","ru":"жилет"}', 52
);
INSERT INTO public.roles (id, job_id, sector_id, name, icon, sort_order) VALUES (
  'materials', 'delivery_logistic', 'parcel_delivery', '{"en":"Materials","es":"Materiales","pt":"Materiais","fr":"Matériaux","de":"Materialien","it":"Materiali","nl":"Materialen","zh":"材料","ja":"材料","ru":"Материалы"}', '📦', 1
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'delivery_logistic/parcel_delivery/materials/barcode', 'delivery_logistic', 'parcel_delivery', 'materials', 'delivery_logistic/parcel_delivery/materials/barcode', NULL, '{"en":"barcode","es":"código de barras","pt":"código de barras","fr":"code-barres","de":"Barcode","it":"codice a barre","nl":"streepjescode","zh":"条形码","ja":"バーコード","ru":"штрихкод"}', 0
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'delivery_logistic/parcel_delivery/materials/box', 'delivery_logistic', 'parcel_delivery', 'materials', 'delivery_logistic/parcel_delivery/materials/box', NULL, '{"en":"box","es":"caja","pt":"caixa","fr":"boîte","de":"Kasten","it":"scatola","nl":"doos","zh":"箱子","ja":"ボックス","ru":"коробка"}', 2
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'delivery_logistic/parcel_delivery/materials/envelope', 'delivery_logistic', 'parcel_delivery', 'materials', 'delivery_logistic/parcel_delivery/materials/envelope', NULL, '{"en":"envelope","es":"envelope","pt":"envelope","fr":"envelope","de":"envelope","it":"envelope","nl":"envelop","zh":"信封","ja":"封筒","ru":"конверт"}', 4
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'delivery_logistic/parcel_delivery/materials/label', 'delivery_logistic', 'parcel_delivery', 'materials', 'delivery_logistic/parcel_delivery/materials/label', NULL, '{"en":"label","es":"etiqueta","pt":"etiqueta","fr":"étiquette","de":"Etikett","it":"etichetta","nl":"etiket","zh":"标签","ja":"ラベル","ru":"этикетка"}', 6
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'delivery_logistic/parcel_delivery/materials/marker', 'delivery_logistic', 'parcel_delivery', 'materials', 'delivery_logistic/parcel_delivery/materials/marker', NULL, '{"en":"marker","es":"marcador","pt":"marcador","fr":"marqueur","de":"Marker","it":"pennarello","nl":"marker","zh":"记号笔","ja":"マーカー","ru":"маркер"}', 8
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'delivery_logistic/parcel_delivery/materials/package', 'delivery_logistic', 'parcel_delivery', 'materials', 'delivery_logistic/parcel_delivery/materials/package', NULL, '{"en":"package","es":"package","pt":"package","fr":"package","de":"package","it":"package","nl":"pakket","zh":"包裹","ja":"パッケージ","ru":"посылка"}', 10
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'delivery_logistic/parcel_delivery/materials/paper', 'delivery_logistic', 'parcel_delivery', 'materials', 'delivery_logistic/parcel_delivery/materials/paper', NULL, '{"en":"paper","es":"papel","pt":"papel","fr":"papier","de":"Papier","it":"carta","nl":"papier","zh":"纸","ja":"紙","ru":"бумага"}', 12
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'delivery_logistic/parcel_delivery/materials/parcel', 'delivery_logistic', 'parcel_delivery', 'materials', 'delivery_logistic/parcel_delivery/materials/parcel', NULL, '{"en":"parcel","es":"parcel","pt":"parcel","fr":"parcel","de":"parcel","it":"parcel","nl":"pakket","zh":"包裹","ja":"小包","ru":"посылка"}', 14
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'delivery_logistic/parcel_delivery/materials/plastic', 'delivery_logistic', 'parcel_delivery', 'materials', 'delivery_logistic/parcel_delivery/materials/plastic', NULL, '{"en":"plastic","es":"plastic","pt":"plastic","fr":"plastic","de":"plastic","it":"plastic","nl":"plastic","zh":"塑料","ja":"プラスチック","ru":"пластик"}', 16
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'delivery_logistic/parcel_delivery/materials/seal', 'delivery_logistic', 'parcel_delivery', 'materials', 'delivery_logistic/parcel_delivery/materials/seal', NULL, '{"en":"seal","es":"seal","pt":"seal","fr":"seal","de":"seal","it":"seal","nl":"afdichting","zh":"密封件","ja":"シール","ru":"уплотнение"}', 18
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'delivery_logistic/parcel_delivery/materials/sticker', 'delivery_logistic', 'parcel_delivery', 'materials', 'delivery_logistic/parcel_delivery/materials/sticker', NULL, '{"en":"sticker","es":"sticker","pt":"sticker","fr":"sticker","de":"sticker","it":"sticker","nl":"sticker","zh":"贴纸","ja":"ステッカー","ru":"наклейка"}', 20
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'delivery_logistic/parcel_delivery/materials/strap', 'delivery_logistic', 'parcel_delivery', 'materials', 'delivery_logistic/parcel_delivery/materials/strap', NULL, '{"en":"strap","es":"strap","pt":"strap","fr":"strap","de":"strap","it":"strap","nl":"band","zh":"带子","ja":"ストラップ","ru":"ремень"}', 22
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'delivery_logistic/parcel_delivery/materials/tape', 'delivery_logistic', 'parcel_delivery', 'materials', 'delivery_logistic/parcel_delivery/materials/tape', NULL, '{"en":"tape","es":"cinta","pt":"fita","fr":"ruban","de":"Klebeband","it":"nastro","nl":"tape","zh":"胶带","ja":"テープ","ru":"лента"}', 24
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'delivery_logistic/parcel_delivery/materials/wrap', 'delivery_logistic', 'parcel_delivery', 'materials', 'delivery_logistic/parcel_delivery/materials/wrap', NULL, '{"en":"wrap","es":"wrap","pt":"wrap","fr":"wrap","de":"wrap","it":"wrap","nl":"folie","zh":"包装","ja":"ラップ","ru":"обертка"}', 26
);

INSERT INTO public.sectors (id, job_id, name, icon, sort_order) VALUES (
  'stocker', 'delivery_logistic', '{"en":"Stocker","es":"Reponedor","pt":"Repositor","fr":"Stockeur","de":"Lagerist","it":"Magazziniere","nl":"Vakkenvuller","zh":"理货员","ja":"品出し員","ru":"Сотрудник склада"}', '📦', 2
);
INSERT INTO public.roles (id, job_id, sector_id, name, icon, sort_order) VALUES (
  'tools', 'delivery_logistic', 'stocker', '{"en":"Tools","es":"Herramientas","pt":"Ferramentas","fr":"Outils","de":"Werkzeuge","it":"Attrezzi","nl":"Gereedschap","zh":"工具","ja":"道具","ru":"Инструменты"}', '🔧', 0
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'delivery_logistic/stocker/tools/bin', 'delivery_logistic', 'stocker', 'tools', 'delivery_logistic/stocker/tools/bin', NULL, '{"en":"bin","es":"cubo de basura","pt":"lixeira","fr":"poubelle","de":"Mülleimer","it":"bidone","nl":"prullenbak","zh":"垃圾桶","ja":"ビン","ru":"мусорное ведро"}', 0
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'delivery_logistic/stocker/tools/box_cutter', 'delivery_logistic', 'stocker', 'tools', 'delivery_logistic/stocker/tools/box_cutter', NULL, '{"en":"box cutter","es":"box cutter","pt":"box cutter","fr":"box cutter","de":"box cutter","it":"box cutter","nl":"stanleymes","zh":"美工刀","ja":"カッターナイフ","ru":"нож для бумаги"}', 2
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'delivery_logistic/stocker/tools/carrier', 'delivery_logistic', 'stocker', 'tools', 'delivery_logistic/stocker/tools/carrier', NULL, '{"en":"carrier","es":"carrier","pt":"carrier","fr":"carrier","de":"carrier","it":"carrier","nl":"drager","zh":"载体","ja":"キャリア","ru":"носитель"}', 4
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'delivery_logistic/stocker/tools/cart', 'delivery_logistic', 'stocker', 'tools', 'delivery_logistic/stocker/tools/cart', NULL, '{"en":"cart","es":"carrito","pt":"carrinho","fr":"chariot","de":"Wagen","it":"carrello","nl":"kar","zh":"推车","ja":"カート","ru":"тележка"}', 6
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'delivery_logistic/stocker/tools/container', 'delivery_logistic', 'stocker', 'tools', 'delivery_logistic/stocker/tools/container', NULL, '{"en":"container","es":"contenedor","pt":"recipiente","fr":"conteneur","de":"Behälter","it":"contenitore","nl":"container","zh":"容器","ja":"コンテナ","ru":"контейнер"}', 8
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'delivery_logistic/stocker/tools/handler', 'delivery_logistic', 'stocker', 'tools', 'delivery_logistic/stocker/tools/handler', NULL, '{"en":"handler","es":"handler","pt":"handler","fr":"handler","de":"handler","it":"handler","nl":"behandelaar","zh":"处理器","ja":"ハンドラー","ru":"манипулятор"}', 10
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'delivery_logistic/stocker/tools/hook', 'delivery_logistic', 'stocker', 'tools', 'delivery_logistic/stocker/tools/hook', NULL, '{"en":"hook","es":"gancho","pt":"gancho","fr":"crochet","de":"Haken","it":"gancio","nl":"haak","zh":"挂钩","ja":"フック","ru":"крюк"}', 12
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'delivery_logistic/stocker/tools/ladder', 'delivery_logistic', 'stocker', 'tools', 'delivery_logistic/stocker/tools/ladder', NULL, '{"en":"ladder","es":"escalera","pt":"escada","fr":"échelle","de":"Leiter","it":"scala","nl":"ladder","zh":"梯子","ja":"はしご","ru":"лестница"}', 14
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'delivery_logistic/stocker/tools/lift', 'delivery_logistic', 'stocker', 'tools', 'delivery_logistic/stocker/tools/lift', NULL, '{"en":"lift","es":"lift","pt":"lift","fr":"lift","de":"lift","it":"lift","nl":"lift","zh":"升降机","ja":"リフト","ru":"подъемник"}', 16
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'delivery_logistic/stocker/tools/loader', 'delivery_logistic', 'stocker', 'tools', 'delivery_logistic/stocker/tools/loader', NULL, '{"en":"loader","es":"loader","pt":"loader","fr":"loader","de":"loader","it":"loader","nl":"lader","zh":"装载机","ja":"ローダー","ru":"погрузчик"}', 18
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'delivery_logistic/stocker/tools/mover', 'delivery_logistic', 'stocker', 'tools', 'delivery_logistic/stocker/tools/mover', NULL, '{"en":"mover","es":"mover","pt":"mover","fr":"mover","de":"mover","it":"mover","nl":"verhuizer","zh":"移动器","ja":"ムーバー","ru":"тележка для переноски"}', 20
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'delivery_logistic/stocker/tools/organizer', 'delivery_logistic', 'stocker', 'tools', 'delivery_logistic/stocker/tools/organizer', NULL, '{"en":"organizer","es":"organizer","pt":"organizer","fr":"organizer","de":"organizer","it":"organizer","nl":"organizer","zh":"整理盒","ja":"オーガナイザー","ru":"органайзер"}', 22
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'delivery_logistic/stocker/tools/pallet_jack', 'delivery_logistic', 'stocker', 'tools', 'delivery_logistic/stocker/tools/pallet_jack', NULL, '{"en":"pallet jack","es":"pallet jack","pt":"pallet jack","fr":"pallet jack","de":"pallet jack","it":"pallet jack","nl":"pallettruck","zh":"托盘搬运车","ja":"パレットジャック","ru":"гидравлическая тележка"}', 24
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'delivery_logistic/stocker/tools/rack', 'delivery_logistic', 'stocker', 'tools', 'delivery_logistic/stocker/tools/rack', NULL, '{"en":"rack","es":"estante","pt":"prateleira","fr":"étagère","de":"Regal","it":"scaffale","nl":"rek","zh":"货架","ja":"ラック","ru":"стеллаж"}', 26
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'delivery_logistic/stocker/tools/scanner', 'delivery_logistic', 'stocker', 'tools', 'delivery_logistic/stocker/tools/scanner', NULL, '{"en":"scanner","es":"escáner","pt":"scanner","fr":"scanner","de":"Scanner","it":"scanner","nl":"scanner","zh":"扫描仪","ja":"スキャナー","ru":"сканер"}', 28
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'delivery_logistic/stocker/tools/scanner_device', 'delivery_logistic', 'stocker', 'tools', 'delivery_logistic/stocker/tools/scanner_device', NULL, '{"en":"scanner device","es":"scanner device","pt":"scanner device","fr":"scanner device","de":"scanner device","it":"scanner device","nl":"scannerapparaat","zh":"扫描设备","ja":"スキャナーデバイス","ru":"сканирующее устройство"}', 30
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'delivery_logistic/stocker/tools/shelf_tool', 'delivery_logistic', 'stocker', 'tools', 'delivery_logistic/stocker/tools/shelf_tool', NULL, '{"en":"shelf tool","es":"shelf tool","pt":"shelf tool","fr":"shelf tool","de":"shelf tool","it":"shelf tool","nl":"plankgereedschap","zh":"货架工具","ja":"棚ツール","ru":"инструмент для полок"}', 32
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'delivery_logistic/stocker/tools/sorter', 'delivery_logistic', 'stocker', 'tools', 'delivery_logistic/stocker/tools/sorter', NULL, '{"en":"sorter","es":"sorter","pt":"sorter","fr":"sorter","de":"sorter","it":"sorter","nl":"sorteerder","zh":"分类机","ja":"ソーター","ru":"сортировщик"}', 34
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'delivery_logistic/stocker/tools/tape_gun', 'delivery_logistic', 'stocker', 'tools', 'delivery_logistic/stocker/tools/tape_gun', NULL, '{"en":"tape gun","es":"tape gun","pt":"tape gun","fr":"tape gun","de":"tape gun","it":"tape gun","nl":"tapepistool","zh":"胶带枪","ja":"テープガン","ru":"пистолет для ленты"}', 36
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'delivery_logistic/stocker/tools/trolley', 'delivery_logistic', 'stocker', 'tools', 'delivery_logistic/stocker/tools/trolley', NULL, '{"en":"trolley","es":"carrito","pt":"carrinho","fr":"chariot","de":"Trolley","it":"carrello","nl":"trolley","zh":"手推车","ja":"トロリー","ru":"тележка"}', 38
);
INSERT INTO public.roles (id, job_id, sector_id, name, icon, sort_order) VALUES (
  'materials', 'delivery_logistic', 'stocker', '{"en":"Materials","es":"Materiales","pt":"Materiais","fr":"Matériaux","de":"Materialien","it":"Materiali","nl":"Materialen","zh":"材料","ja":"材料","ru":"Материалы"}', '📦', 1
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'delivery_logistic/stocker/materials/boxes', 'delivery_logistic', 'stocker', 'materials', 'delivery_logistic/stocker/materials/boxes', NULL, '{"en":"boxes","es":"boxes","pt":"boxes","fr":"boxes","de":"boxes","it":"boxes","nl":"dozen","zh":"箱子","ja":"ボックス","ru":"коробки"}', 0
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'delivery_logistic/stocker/materials/bundles', 'delivery_logistic', 'stocker', 'materials', 'delivery_logistic/stocker/materials/bundles', NULL, '{"en":"bundles","es":"bundles","pt":"bundles","fr":"bundles","de":"bundles","it":"bundles","nl":"bundels","zh":"捆","ja":"バンドル","ru":"связки"}', 2
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'delivery_logistic/stocker/materials/cargo', 'delivery_logistic', 'stocker', 'materials', 'delivery_logistic/stocker/materials/cargo', NULL, '{"en":"cargo","es":"cargo","pt":"cargo","fr":"cargo","de":"cargo","it":"cargo","nl":"vracht","zh":"货物","ja":"貨物","ru":"груз"}', 4
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'delivery_logistic/stocker/materials/cartons', 'delivery_logistic', 'stocker', 'materials', 'delivery_logistic/stocker/materials/cartons', NULL, '{"en":"cartons","es":"cartons","pt":"cartons","fr":"cartons","de":"cartons","it":"cartons","nl":"kartons","zh":"纸板箱","ja":"カートン","ru":"картонные коробки"}', 6
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'delivery_logistic/stocker/materials/containers', 'delivery_logistic', 'stocker', 'materials', 'delivery_logistic/stocker/materials/containers', NULL, '{"en":"containers","es":"containers","pt":"containers","fr":"containers","de":"containers","it":"containers","nl":"containers","zh":"容器","ja":"コンテナ","ru":"контейнеры"}', 8
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'delivery_logistic/stocker/materials/crates', 'delivery_logistic', 'stocker', 'materials', 'delivery_logistic/stocker/materials/crates', NULL, '{"en":"crates","es":"crates","pt":"crates","fr":"crates","de":"crates","it":"crates","nl":"kratten","zh":"板条箱","ja":"クレート","ru":"ящики"}', 10
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'delivery_logistic/stocker/materials/deliveries', 'delivery_logistic', 'stocker', 'materials', 'delivery_logistic/stocker/materials/deliveries', NULL, '{"en":"deliveries","es":"deliveries","pt":"deliveries","fr":"deliveries","de":"deliveries","it":"deliveries","nl":"leveringen","zh":"交货","ja":"配送物","ru":"доставки"}', 12
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'delivery_logistic/stocker/materials/freight', 'delivery_logistic', 'stocker', 'materials', 'delivery_logistic/stocker/materials/freight', NULL, '{"en":"freight","es":"freight","pt":"freight","fr":"freight","de":"freight","it":"freight","nl":"vracht","zh":"货物","ja":"貨物","ru":"груз"}', 14
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'delivery_logistic/stocker/materials/goods', 'delivery_logistic', 'stocker', 'materials', 'delivery_logistic/stocker/materials/goods', NULL, '{"en":"goods","es":"goods","pt":"goods","fr":"goods","de":"goods","it":"goods","nl":"goederen","zh":"货物","ja":"商品","ru":"товары"}', 16
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'delivery_logistic/stocker/materials/goods_set', 'delivery_logistic', 'stocker', 'materials', 'delivery_logistic/stocker/materials/goods_set', NULL, '{"en":"goods set","es":"goods set","pt":"goods set","fr":"goods set","de":"goods set","it":"goods set","nl":"goederenset","zh":"货物套装","ja":"商品セット","ru":"набор товаров"}', 18
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'delivery_logistic/stocker/materials/inventory', 'delivery_logistic', 'stocker', 'materials', 'delivery_logistic/stocker/materials/inventory', NULL, '{"en":"inventory","es":"inventory","pt":"inventory","fr":"inventory","de":"inventory","it":"inventory","nl":"inventaris","zh":"库存","ja":"在庫","ru":"инвентарь"}', 20
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'delivery_logistic/stocker/materials/items', 'delivery_logistic', 'stocker', 'materials', 'delivery_logistic/stocker/materials/items', NULL, '{"en":"items","es":"items","pt":"items","fr":"items","de":"items","it":"items","nl":"artikelen","zh":"物品","ja":"アイテム","ru":"предметы"}', 22
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'delivery_logistic/stocker/materials/labels', 'delivery_logistic', 'stocker', 'materials', 'delivery_logistic/stocker/materials/labels', NULL, '{"en":"labels","es":"labels","pt":"labels","fr":"labels","de":"labels","it":"labels","nl":"etiketten","zh":"标签","ja":"ラベル","ru":"этикетки"}', 24
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'delivery_logistic/stocker/materials/materials', 'delivery_logistic', 'stocker', 'materials', 'delivery_logistic/stocker/materials/materials', NULL, '{"en":"materials","es":"materials","pt":"materials","fr":"materials","de":"materials","it":"materials","nl":"materialen","zh":"材料","ja":"材料","ru":"материалы"}', 26
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'delivery_logistic/stocker/materials/merchandise', 'delivery_logistic', 'stocker', 'materials', 'delivery_logistic/stocker/materials/merchandise', NULL, '{"en":"merchandise","es":"merchandise","pt":"merchandise","fr":"merchandise","de":"merchandise","it":"merchandise","nl":"koopwaar","zh":"商品","ja":"商品","ru":"товар"}', 28
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'delivery_logistic/stocker/materials/packaged_goods', 'delivery_logistic', 'stocker', 'materials', 'delivery_logistic/stocker/materials/packaged_goods', NULL, '{"en":"packaged goods","es":"packaged goods","pt":"packaged goods","fr":"packaged goods","de":"packaged goods","it":"packaged goods","nl":"verpakte goederen","zh":"包装货物","ja":"梱包商品","ru":"упакованные товары"}', 30
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'delivery_logistic/stocker/materials/packaging', 'delivery_logistic', 'stocker', 'materials', 'delivery_logistic/stocker/materials/packaging', NULL, '{"en":"packaging","es":"embalaje","pt":"embalagem","fr":"emballage","de":"Verpackung","it":"imballaggio","nl":"verpakking","zh":"包装","ja":"梱包","ru":"упаковка"}', 32
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'delivery_logistic/stocker/materials/packs', 'delivery_logistic', 'stocker', 'materials', 'delivery_logistic/stocker/materials/packs', NULL, '{"en":"packs","es":"packs","pt":"packs","fr":"packs","de":"packs","it":"packs","nl":"pakken","zh":"包","ja":"パック","ru":"пакеты"}', 34
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'delivery_logistic/stocker/materials/pallets', 'delivery_logistic', 'stocker', 'materials', 'delivery_logistic/stocker/materials/pallets', NULL, '{"en":"pallets","es":"pallets","pt":"pallets","fr":"pallets","de":"pallets","it":"pallets","nl":"pallets","zh":"托盘","ja":"パレット","ru":"паллеты"}', 36
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'delivery_logistic/stocker/materials/plastic', 'delivery_logistic', 'stocker', 'materials', 'delivery_logistic/stocker/materials/plastic', NULL, '{"en":"plastic","es":"plastic","pt":"plastic","fr":"plastic","de":"plastic","it":"plastic","nl":"plastic","zh":"塑料","ja":"プラスチック","ru":"пластик"}', 38
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'delivery_logistic/stocker/materials/products', 'delivery_logistic', 'stocker', 'materials', 'delivery_logistic/stocker/materials/products', NULL, '{"en":"products","es":"products","pt":"products","fr":"products","de":"products","it":"products","nl":"producten","zh":"产品","ja":"製品","ru":"продукты"}', 40
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'delivery_logistic/stocker/materials/shipments', 'delivery_logistic', 'stocker', 'materials', 'delivery_logistic/stocker/materials/shipments', NULL, '{"en":"shipments","es":"shipments","pt":"shipments","fr":"shipments","de":"shipments","it":"shipments","nl":"zendingen","zh":"货运","ja":"出荷物","ru":"грузы"}', 42
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'delivery_logistic/stocker/materials/stock', 'delivery_logistic', 'stocker', 'materials', 'delivery_logistic/stocker/materials/stock', NULL, '{"en":"stock","es":"stock","pt":"stock","fr":"stock","de":"stock","it":"stock","nl":"voorraad","zh":"库存","ja":"在庫","ru":"запас"}', 44
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'delivery_logistic/stocker/materials/stock_items', 'delivery_logistic', 'stocker', 'materials', 'delivery_logistic/stocker/materials/stock_items', NULL, '{"en":"stock items","es":"stock items","pt":"stock items","fr":"stock items","de":"stock items","it":"stock items","nl":"voorraadartikelen","zh":"库存商品","ja":"在庫アイテム","ru":"складские единицы"}', 46
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'delivery_logistic/stocker/materials/storage_items', 'delivery_logistic', 'stocker', 'materials', 'delivery_logistic/stocker/materials/storage_items', NULL, '{"en":"storage items","es":"storage items","pt":"storage items","fr":"storage items","de":"storage items","it":"storage items","nl":"opslagartikelen","zh":"储存物品","ja":"収納アイテム","ru":"предметы хранения"}', 48
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'delivery_logistic/stocker/materials/supplies', 'delivery_logistic', 'stocker', 'materials', 'delivery_logistic/stocker/materials/supplies', NULL, '{"en":"supplies","es":"supplies","pt":"supplies","fr":"supplies","de":"supplies","it":"supplies","nl":"benodigdheden","zh":"耗材","ja":"用品","ru":"расходные материалы"}', 50
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'delivery_logistic/stocker/materials/supply_items', 'delivery_logistic', 'stocker', 'materials', 'delivery_logistic/stocker/materials/supply_items', NULL, '{"en":"supply items","es":"supply items","pt":"supply items","fr":"supply items","de":"supply items","it":"supply items","nl":"voorraaditems","zh":"供应物品","ja":"サプライアイテム","ru":"предметы снабжения"}', 52
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'delivery_logistic/stocker/materials/tape', 'delivery_logistic', 'stocker', 'materials', 'delivery_logistic/stocker/materials/tape', NULL, '{"en":"tape","es":"cinta","pt":"fita","fr":"ruban","de":"Klebeband","it":"nastro","nl":"tape","zh":"胶带","ja":"テープ","ru":"лента"}', 54
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'delivery_logistic/stocker/materials/units', 'delivery_logistic', 'stocker', 'materials', 'delivery_logistic/stocker/materials/units', NULL, '{"en":"units","es":"units","pt":"units","fr":"units","de":"units","it":"units","nl":"eenheden","zh":"单元","ja":"ユニット","ru":"единицы"}', 56
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'delivery_logistic/stocker/materials/wrap', 'delivery_logistic', 'stocker', 'materials', 'delivery_logistic/stocker/materials/wrap', NULL, '{"en":"wrap","es":"wrap","pt":"wrap","fr":"wrap","de":"wrap","it":"wrap","nl":"folie","zh":"包装","ja":"ラップ","ru":"обертка"}', 58
);

INSERT INTO public.sectors (id, job_id, name, icon, sort_order) VALUES (
  'warehouse_worker', 'delivery_logistic', '{"en":"Warehouse Worker","es":"Almacenero","pt":"Operador de Armazém","fr":"Magasinier","de":"Lagerarbeiter","it":"Magazziniere","nl":"Magazijnmedewerker","zh":"仓库工人","ja":"倉庫作業員","ru":"Работник склада"}', '🏭', 3
);
INSERT INTO public.roles (id, job_id, sector_id, name, icon, sort_order) VALUES (
  'tools', 'delivery_logistic', 'warehouse_worker', '{"en":"Tools","es":"Herramientas","pt":"Ferramentas","fr":"Outils","de":"Werkzeuge","it":"Attrezzi","nl":"Gereedschap","zh":"工具","ja":"道具","ru":"Инструменты"}', '🔧', 0
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'delivery_logistic/warehouse_worker/tools/bin', 'delivery_logistic', 'warehouse_worker', 'tools', 'delivery_logistic/warehouse_worker/tools/bin', NULL, '{"en":"bin","es":"cubo de basura","pt":"lixeira","fr":"poubelle","de":"Mülleimer","it":"bidone","nl":"prullenbak","zh":"垃圾桶","ja":"ビン","ru":"мусорное ведро"}', 0
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'delivery_logistic/warehouse_worker/tools/carrier', 'delivery_logistic', 'warehouse_worker', 'tools', 'delivery_logistic/warehouse_worker/tools/carrier', NULL, '{"en":"carrier","es":"carrier","pt":"carrier","fr":"carrier","de":"carrier","it":"carrier","nl":"drager","zh":"载体","ja":"キャリア","ru":"носитель"}', 2
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'delivery_logistic/warehouse_worker/tools/cart', 'delivery_logistic', 'warehouse_worker', 'tools', 'delivery_logistic/warehouse_worker/tools/cart', NULL, '{"en":"cart","es":"carrito","pt":"carrinho","fr":"chariot","de":"Wagen","it":"carrello","nl":"kar","zh":"推车","ja":"カート","ru":"тележка"}', 4
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'delivery_logistic/warehouse_worker/tools/conveyor', 'delivery_logistic', 'warehouse_worker', 'tools', 'delivery_logistic/warehouse_worker/tools/conveyor', NULL, '{"en":"conveyor","es":"conveyor","pt":"conveyor","fr":"conveyor","de":"conveyor","it":"conveyor","nl":"transportband","zh":"传送带","ja":"コンベア","ru":"конвейер"}', 6
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'delivery_logistic/warehouse_worker/tools/cutter', 'delivery_logistic', 'warehouse_worker', 'tools', 'delivery_logistic/warehouse_worker/tools/cutter', NULL, '{"en":"cutter","es":"cortador","pt":"cortador","fr":"cutter","de":"Cutter","it":"taglierino","nl":"snijder","zh":"切割机","ja":"カッター","ru":"резак"}', 8
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'delivery_logistic/warehouse_worker/tools/forklift', 'delivery_logistic', 'warehouse_worker', 'tools', 'delivery_logistic/warehouse_worker/tools/forklift', NULL, '{"en":"forklift","es":"forklift","pt":"forklift","fr":"forklift","de":"forklift","it":"forklift","nl":"vorkheftruck","zh":"叉车","ja":"フォークリフト","ru":"вилочный погрузчик"}', 10
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'delivery_logistic/warehouse_worker/tools/gun', 'delivery_logistic', 'warehouse_worker', 'tools', 'delivery_logistic/warehouse_worker/tools/gun', NULL, '{"en":"spray gun","es":"pistola de spray","pt":"pistola de spray","fr":"pistolet","de":"Sprühpistole","it":"pistola spray","nl":"verfpistool","zh":"喷枪","ja":"スプレーガン","ru":"краскопульт"}', 12
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'delivery_logistic/warehouse_worker/tools/handler', 'delivery_logistic', 'warehouse_worker', 'tools', 'delivery_logistic/warehouse_worker/tools/handler', NULL, '{"en":"handler","es":"handler","pt":"handler","fr":"handler","de":"handler","it":"handler","nl":"behandelaar","zh":"处理器","ja":"ハンドラー","ru":"манипулятор"}', 14
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'delivery_logistic/warehouse_worker/tools/labeler', 'delivery_logistic', 'warehouse_worker', 'tools', 'delivery_logistic/warehouse_worker/tools/labeler', NULL, '{"en":"labeler","es":"labeler","pt":"labeler","fr":"labeler","de":"labeler","it":"labeler","nl":"labelaar","zh":"贴标机","ja":"ラベラー","ru":"этикетировочная машина"}', 16
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'delivery_logistic/warehouse_worker/tools/lift', 'delivery_logistic', 'warehouse_worker', 'tools', 'delivery_logistic/warehouse_worker/tools/lift', NULL, '{"en":"lift","es":"lift","pt":"lift","fr":"lift","de":"lift","it":"lift","nl":"lift","zh":"升降机","ja":"リフト","ru":"подъемник"}', 18
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'delivery_logistic/warehouse_worker/tools/loader', 'delivery_logistic', 'warehouse_worker', 'tools', 'delivery_logistic/warehouse_worker/tools/loader', NULL, '{"en":"loader","es":"loader","pt":"loader","fr":"loader","de":"loader","it":"loader","nl":"lader","zh":"装载机","ja":"ローダー","ru":"погрузчик"}', 20
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'delivery_logistic/warehouse_worker/tools/pallet_jack', 'delivery_logistic', 'warehouse_worker', 'tools', 'delivery_logistic/warehouse_worker/tools/pallet_jack', NULL, '{"en":"pallet jack","es":"pallet jack","pt":"pallet jack","fr":"pallet jack","de":"pallet jack","it":"pallet jack","nl":"pallettruck","zh":"托盘搬运车","ja":"パレットジャック","ru":"гидравлическая тележка"}', 22
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'delivery_logistic/warehouse_worker/tools/printer', 'delivery_logistic', 'warehouse_worker', 'tools', 'delivery_logistic/warehouse_worker/tools/printer', NULL, '{"en":"printer","es":"impresora","pt":"impressora","fr":"imprimante","de":"Drucker","it":"stampante","nl":"printer","zh":"打印机","ja":"プリンター","ru":"принтер"}', 24
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'delivery_logistic/warehouse_worker/tools/rack', 'delivery_logistic', 'warehouse_worker', 'tools', 'delivery_logistic/warehouse_worker/tools/rack', NULL, '{"en":"rack","es":"estante","pt":"prateleira","fr":"étagère","de":"Regal","it":"scaffale","nl":"rek","zh":"货架","ja":"ラック","ru":"стеллаж"}', 26
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'delivery_logistic/warehouse_worker/tools/scale', 'delivery_logistic', 'warehouse_worker', 'tools', 'delivery_logistic/warehouse_worker/tools/scale', NULL, '{"en":"scale","es":"báscula","pt":"balança","fr":"balance","de":"Waage","it":"bilancia","nl":"weegschaal","zh":"秤","ja":"スケール","ru":"весы"}', 28
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'delivery_logistic/warehouse_worker/tools/scanner', 'delivery_logistic', 'warehouse_worker', 'tools', 'delivery_logistic/warehouse_worker/tools/scanner', NULL, '{"en":"scanner","es":"escáner","pt":"scanner","fr":"scanner","de":"Scanner","it":"scanner","nl":"scanner","zh":"扫描仪","ja":"スキャナー","ru":"сканер"}', 30
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'delivery_logistic/warehouse_worker/tools/sorter', 'delivery_logistic', 'warehouse_worker', 'tools', 'delivery_logistic/warehouse_worker/tools/sorter', NULL, '{"en":"sorter","es":"sorter","pt":"sorter","fr":"sorter","de":"sorter","it":"sorter","nl":"sorteerder","zh":"分类机","ja":"ソーター","ru":"сортировщик"}', 32
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'delivery_logistic/warehouse_worker/tools/tape', 'delivery_logistic', 'warehouse_worker', 'tools', 'delivery_logistic/warehouse_worker/tools/tape', NULL, '{"en":"tape","es":"cinta","pt":"fita","fr":"ruban","de":"Klebeband","it":"nastro","nl":"tape","zh":"胶带","ja":"テープ","ru":"лента"}', 34
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'delivery_logistic/warehouse_worker/tools/trolley', 'delivery_logistic', 'warehouse_worker', 'tools', 'delivery_logistic/warehouse_worker/tools/trolley', NULL, '{"en":"trolley","es":"carrito","pt":"carrinho","fr":"chariot","de":"Trolley","it":"carrello","nl":"trolley","zh":"手推车","ja":"トロリー","ru":"тележка"}', 36
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'delivery_logistic/warehouse_worker/tools/wrapper', 'delivery_logistic', 'warehouse_worker', 'tools', 'delivery_logistic/warehouse_worker/tools/wrapper', NULL, '{"en":"wrapper","es":"wrapper","pt":"wrapper","fr":"wrapper","de":"wrapper","it":"wrapper","nl":"wikkel","zh":"包装纸","ja":"ラッパー","ru":"обертка"}', 38
);
INSERT INTO public.roles (id, job_id, sector_id, name, icon, sort_order) VALUES (
  'materials', 'delivery_logistic', 'warehouse_worker', '{"en":"Materials","es":"Materiales","pt":"Materiais","fr":"Matériaux","de":"Materialien","it":"Materiali","nl":"Materialen","zh":"材料","ja":"材料","ru":"Материалы"}', '📦', 1
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'delivery_logistic/warehouse_worker/materials/boxed_goods', 'delivery_logistic', 'warehouse_worker', 'materials', 'delivery_logistic/warehouse_worker/materials/boxed_goods', NULL, '{"en":"boxed goods","es":"boxed goods","pt":"boxed goods","fr":"boxed goods","de":"boxed goods","it":"boxed goods","nl":"verpakte goederen","zh":"盒装货物","ja":"箱入り商品","ru":"товары в коробках"}', 0
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'delivery_logistic/warehouse_worker/materials/boxes', 'delivery_logistic', 'warehouse_worker', 'materials', 'delivery_logistic/warehouse_worker/materials/boxes', NULL, '{"en":"boxes","es":"boxes","pt":"boxes","fr":"boxes","de":"boxes","it":"boxes","nl":"dozen","zh":"箱子","ja":"ボックス","ru":"коробки"}', 2
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'delivery_logistic/warehouse_worker/materials/bubble_wrap', 'delivery_logistic', 'warehouse_worker', 'materials', 'delivery_logistic/warehouse_worker/materials/bubble_wrap', NULL, '{"en":"bubble wrap","es":"bubble wrap","pt":"bubble wrap","fr":"bubble wrap","de":"bubble wrap","it":"bubble wrap","nl":"noppenfolie","zh":"气泡膜","ja":"プチプチ","ru":"пузырчатая пленка"}', 4
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'delivery_logistic/warehouse_worker/materials/bundles', 'delivery_logistic', 'warehouse_worker', 'materials', 'delivery_logistic/warehouse_worker/materials/bundles', NULL, '{"en":"bundles","es":"bundles","pt":"bundles","fr":"bundles","de":"bundles","it":"bundles","nl":"bundels","zh":"捆","ja":"バンドル","ru":"связки"}', 6
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'delivery_logistic/warehouse_worker/materials/cargo', 'delivery_logistic', 'warehouse_worker', 'materials', 'delivery_logistic/warehouse_worker/materials/cargo', NULL, '{"en":"cargo","es":"cargo","pt":"cargo","fr":"cargo","de":"cargo","it":"cargo","nl":"vracht","zh":"货物","ja":"貨物","ru":"груз"}', 8
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'delivery_logistic/warehouse_worker/materials/cartons', 'delivery_logistic', 'warehouse_worker', 'materials', 'delivery_logistic/warehouse_worker/materials/cartons', NULL, '{"en":"cartons","es":"cartons","pt":"cartons","fr":"cartons","de":"cartons","it":"cartons","nl":"kartons","zh":"纸板箱","ja":"カートン","ru":"картонные коробки"}', 10
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'delivery_logistic/warehouse_worker/materials/containers', 'delivery_logistic', 'warehouse_worker', 'materials', 'delivery_logistic/warehouse_worker/materials/containers', NULL, '{"en":"containers","es":"containers","pt":"containers","fr":"containers","de":"containers","it":"containers","nl":"containers","zh":"容器","ja":"コンテナ","ru":"контейнеры"}', 12
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'delivery_logistic/warehouse_worker/materials/crates', 'delivery_logistic', 'warehouse_worker', 'materials', 'delivery_logistic/warehouse_worker/materials/crates', NULL, '{"en":"crates","es":"crates","pt":"crates","fr":"crates","de":"crates","it":"crates","nl":"kratten","zh":"板条箱","ja":"クレート","ru":"ящики"}', 14
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'delivery_logistic/warehouse_worker/materials/deliveries', 'delivery_logistic', 'warehouse_worker', 'materials', 'delivery_logistic/warehouse_worker/materials/deliveries', NULL, '{"en":"deliveries","es":"deliveries","pt":"deliveries","fr":"deliveries","de":"deliveries","it":"deliveries","nl":"leveringen","zh":"交货","ja":"配送物","ru":"доставки"}', 16
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'delivery_logistic/warehouse_worker/materials/freight', 'delivery_logistic', 'warehouse_worker', 'materials', 'delivery_logistic/warehouse_worker/materials/freight', NULL, '{"en":"freight","es":"freight","pt":"freight","fr":"freight","de":"freight","it":"freight","nl":"vracht","zh":"货物","ja":"貨物","ru":"груз"}', 18
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'delivery_logistic/warehouse_worker/materials/goods', 'delivery_logistic', 'warehouse_worker', 'materials', 'delivery_logistic/warehouse_worker/materials/goods', NULL, '{"en":"goods","es":"goods","pt":"goods","fr":"goods","de":"goods","it":"goods","nl":"goederen","zh":"货物","ja":"商品","ru":"товары"}', 20
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'delivery_logistic/warehouse_worker/materials/inventory', 'delivery_logistic', 'warehouse_worker', 'materials', 'delivery_logistic/warehouse_worker/materials/inventory', NULL, '{"en":"inventory","es":"inventory","pt":"inventory","fr":"inventory","de":"inventory","it":"inventory","nl":"inventaris","zh":"库存","ja":"在庫","ru":"инвентарь"}', 22
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'delivery_logistic/warehouse_worker/materials/items', 'delivery_logistic', 'warehouse_worker', 'materials', 'delivery_logistic/warehouse_worker/materials/items', NULL, '{"en":"items","es":"items","pt":"items","fr":"items","de":"items","it":"items","nl":"artikelen","zh":"物品","ja":"アイテム","ru":"предметы"}', 24
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'delivery_logistic/warehouse_worker/materials/labels', 'delivery_logistic', 'warehouse_worker', 'materials', 'delivery_logistic/warehouse_worker/materials/labels', NULL, '{"en":"labels","es":"labels","pt":"labels","fr":"labels","de":"labels","it":"labels","nl":"etiketten","zh":"标签","ja":"ラベル","ru":"этикетки"}', 26
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'delivery_logistic/warehouse_worker/materials/merchandise', 'delivery_logistic', 'warehouse_worker', 'materials', 'delivery_logistic/warehouse_worker/materials/merchandise', NULL, '{"en":"merchandise","es":"merchandise","pt":"merchandise","fr":"merchandise","de":"merchandise","it":"merchandise","nl":"koopwaar","zh":"商品","ja":"商品","ru":"товар"}', 28
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'delivery_logistic/warehouse_worker/materials/packages', 'delivery_logistic', 'warehouse_worker', 'materials', 'delivery_logistic/warehouse_worker/materials/packages', NULL, '{"en":"packages","es":"packages","pt":"packages","fr":"packages","de":"packages","it":"packages","nl":"pakketten","zh":"包裹","ja":"パッケージ","ru":"посылки"}', 30
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'delivery_logistic/warehouse_worker/materials/packaging', 'delivery_logistic', 'warehouse_worker', 'materials', 'delivery_logistic/warehouse_worker/materials/packaging', NULL, '{"en":"packaging","es":"embalaje","pt":"embalagem","fr":"emballage","de":"Verpackung","it":"imballaggio","nl":"verpakking","zh":"包装","ja":"梱包","ru":"упаковка"}', 32
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'delivery_logistic/warehouse_worker/materials/packing_items', 'delivery_logistic', 'warehouse_worker', 'materials', 'delivery_logistic/warehouse_worker/materials/packing_items', NULL, '{"en":"packing items","es":"packing items","pt":"packing items","fr":"packing items","de":"packing items","it":"packing items","nl":"verpakkingsartikelen","zh":"打包物品","ja":"梱包アイテム","ru":"упаковочные материалы"}', 34
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'delivery_logistic/warehouse_worker/materials/packs', 'delivery_logistic', 'warehouse_worker', 'materials', 'delivery_logistic/warehouse_worker/materials/packs', NULL, '{"en":"packs","es":"packs","pt":"packs","fr":"packs","de":"packs","it":"packs","nl":"pakken","zh":"包","ja":"パック","ru":"пакеты"}', 36
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'delivery_logistic/warehouse_worker/materials/pallet', 'delivery_logistic', 'warehouse_worker', 'materials', 'delivery_logistic/warehouse_worker/materials/pallet', NULL, '{"en":"pallet","es":"palé","pt":"palete","fr":"palette","de":"Palette","it":"pallet","nl":"pallet","zh":"托盘","ja":"パレット","ru":"паллет"}', 38
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'delivery_logistic/warehouse_worker/materials/parcels', 'delivery_logistic', 'warehouse_worker', 'materials', 'delivery_logistic/warehouse_worker/materials/parcels', NULL, '{"en":"parcels","es":"parcels","pt":"parcels","fr":"parcels","de":"parcels","it":"parcels","nl":"pakketten","zh":"包裹","ja":"小包","ru":"посылки"}', 40
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'delivery_logistic/warehouse_worker/materials/plastic_wrap', 'delivery_logistic', 'warehouse_worker', 'materials', 'delivery_logistic/warehouse_worker/materials/plastic_wrap', NULL, '{"en":"plastic wrap","es":"plastic wrap","pt":"plastic wrap","fr":"plastic wrap","de":"plastic wrap","it":"plastic wrap","nl":"plasticfolie","zh":"保鲜膜","ja":"ラップ","ru":"пищевая пленка"}', 42
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'delivery_logistic/warehouse_worker/materials/shipments', 'delivery_logistic', 'warehouse_worker', 'materials', 'delivery_logistic/warehouse_worker/materials/shipments', NULL, '{"en":"shipments","es":"shipments","pt":"shipments","fr":"shipments","de":"shipments","it":"shipments","nl":"zendingen","zh":"货运","ja":"出荷物","ru":"грузы"}', 44
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'delivery_logistic/warehouse_worker/materials/shipping_items', 'delivery_logistic', 'warehouse_worker', 'materials', 'delivery_logistic/warehouse_worker/materials/shipping_items', NULL, '{"en":"shipping items","es":"shipping items","pt":"shipping items","fr":"shipping items","de":"shipping items","it":"shipping items","nl":"verzendartikelen","zh":"运输物品","ja":"配送アイテム","ru":"товары для отправки"}', 46
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'delivery_logistic/warehouse_worker/materials/stock', 'delivery_logistic', 'warehouse_worker', 'materials', 'delivery_logistic/warehouse_worker/materials/stock', NULL, '{"en":"stock","es":"stock","pt":"stock","fr":"stock","de":"stock","it":"stock","nl":"voorraad","zh":"库存","ja":"在庫","ru":"запас"}', 48
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'delivery_logistic/warehouse_worker/materials/storage_items', 'delivery_logistic', 'warehouse_worker', 'materials', 'delivery_logistic/warehouse_worker/materials/storage_items', NULL, '{"en":"storage items","es":"storage items","pt":"storage items","fr":"storage items","de":"storage items","it":"storage items","nl":"opslagartikelen","zh":"储存物品","ja":"収納アイテム","ru":"предметы хранения"}', 50
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'delivery_logistic/warehouse_worker/materials/supplies', 'delivery_logistic', 'warehouse_worker', 'materials', 'delivery_logistic/warehouse_worker/materials/supplies', NULL, '{"en":"supplies","es":"supplies","pt":"supplies","fr":"supplies","de":"supplies","it":"supplies","nl":"benodigdheden","zh":"耗材","ja":"用品","ru":"расходные материалы"}', 52
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'delivery_logistic/warehouse_worker/materials/tape', 'delivery_logistic', 'warehouse_worker', 'materials', 'delivery_logistic/warehouse_worker/materials/tape', NULL, '{"en":"tape","es":"cinta","pt":"fita","fr":"ruban","de":"Klebeband","it":"nastro","nl":"tape","zh":"胶带","ja":"テープ","ru":"лента"}', 54
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'delivery_logistic/warehouse_worker/materials/units', 'delivery_logistic', 'warehouse_worker', 'materials', 'delivery_logistic/warehouse_worker/materials/units', NULL, '{"en":"units","es":"units","pt":"units","fr":"units","de":"units","it":"units","nl":"eenheden","zh":"单元","ja":"ユニット","ru":"единицы"}', 56
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'delivery_logistic/warehouse_worker/materials/wrapped_goods', 'delivery_logistic', 'warehouse_worker', 'materials', 'delivery_logistic/warehouse_worker/materials/wrapped_goods', NULL, '{"en":"wrapped goods","es":"wrapped goods","pt":"wrapped goods","fr":"wrapped goods","de":"wrapped goods","it":"wrapped goods","nl":"verpakte goederen","zh":"包裹货物","ja":"包装商品","ru":"завернутые товары"}', 58
);

INSERT INTO public.jobs (id, name, icon, image_url, sort_order) VALUES (
  'hospitality_restaurant', '{"en":"Hospitality & Restaurant","es":"Hostelería","pt":"Hospitalidade","fr":"Restauration","de":"Gastronomie","it":"Ristorazione","nl":"Horeca","zh":"餐饮服务","ja":"ホスピタリティ・レストラン","ru":"Гостиничное дело и рестораны"}', '🍽️', 'https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&w=800', 6
);

INSERT INTO public.sectors (id, job_id, name, icon, sort_order) VALUES (
  'bartender', 'hospitality_restaurant', '{"en":"Bartender","es":"Bartender","pt":"Barman","fr":"Barman","de":"Barkeeper","it":"Barista","nl":"Barman","zh":"调酒师","ja":"バーテンダー","ru":"Бармен"}', '🍸', 0
);
INSERT INTO public.roles (id, job_id, sector_id, name, icon, sort_order) VALUES (
  'tools', 'hospitality_restaurant', 'bartender', '{"en":"Tools","es":"Herramientas","pt":"Ferramentas","fr":"Outils","de":"Werkzeuge","it":"Attrezzi","nl":"Gereedschap","zh":"工具","ja":"道具","ru":"Инструменты"}', '🔧', 0
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'hospitality_restaurant/bartender/tools/bar_mat', 'hospitality_restaurant', 'bartender', 'tools', 'hospitality_restaurant/bartender/tools/bar_mat', NULL, '{"en":"bar mat","es":"bar mat","pt":"bar mat","fr":"bar mat","de":"bar mat","it":"bar mat","nl":"barmat","zh":"酒吧垫","ja":"バーマット","ru":"барный коврик"}', 0
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'hospitality_restaurant/bartender/tools/bar_spoon', 'hospitality_restaurant', 'bartender', 'tools', 'hospitality_restaurant/bartender/tools/bar_spoon', NULL, '{"en":"bar spoon","es":"bar spoon","pt":"bar spoon","fr":"bar spoon","de":"bar spoon","it":"bar spoon","nl":"barlepel","zh":"调酒勺","ja":"バースプーン","ru":"барная ложка"}', 2
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'hospitality_restaurant/bartender/tools/blender', 'hospitality_restaurant', 'bartender', 'tools', 'hospitality_restaurant/bartender/tools/blender', NULL, '{"en":"blender","es":"blender","pt":"blender","fr":"blender","de":"blender","it":"blender","nl":"blender","zh":"搅拌机","ja":"ブレンダー","ru":"блендер"}', 4
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'hospitality_restaurant/bartender/tools/corkscrew', 'hospitality_restaurant', 'bartender', 'tools', 'hospitality_restaurant/bartender/tools/corkscrew', NULL, '{"en":"corkscrew","es":"corkscrew","pt":"corkscrew","fr":"corkscrew","de":"corkscrew","it":"corkscrew","nl":"kurketrekker","zh":"开瓶器","ja":"コルクスクリュー","ru":"штопор"}', 6
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'hospitality_restaurant/bartender/tools/crusher', 'hospitality_restaurant', 'bartender', 'tools', 'hospitality_restaurant/bartender/tools/crusher', NULL, '{"en":"crusher","es":"crusher","pt":"crusher","fr":"crusher","de":"crusher","it":"crusher","nl":"crusher","zh":"粉碎机","ja":"クラッシャー","ru":"дробилка"}', 8
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'hospitality_restaurant/bartender/tools/glass', 'hospitality_restaurant', 'bartender', 'tools', 'hospitality_restaurant/bartender/tools/glass', NULL, '{"en":"glass","es":"vaso","pt":"copo","fr":"verre","de":"Glas","it":"bicchiere","nl":"glas","zh":"玻璃杯","ja":"グラス","ru":"стакан"}', 10
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'hospitality_restaurant/bartender/tools/ice_scoop', 'hospitality_restaurant', 'bartender', 'tools', 'hospitality_restaurant/bartender/tools/ice_scoop', NULL, '{"en":"ice scoop","es":"ice scoop","pt":"ice scoop","fr":"ice scoop","de":"ice scoop","it":"ice scoop","nl":"ijsschep","zh":"冰勺","ja":"アイススコップ","ru":"ложка для льда"}', 12
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'hospitality_restaurant/bartender/tools/jigger', 'hospitality_restaurant', 'bartender', 'tools', 'hospitality_restaurant/bartender/tools/jigger', NULL, '{"en":"jigger","es":"jigger","pt":"jigger","fr":"jigger","de":"jigger","it":"jigger","nl":"jigger","zh":"量酒器","ja":"ジガー","ru":"джиггер"}', 14
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'hospitality_restaurant/bartender/tools/knife', 'hospitality_restaurant', 'bartender', 'tools', 'hospitality_restaurant/bartender/tools/knife', NULL, '{"en":"knife","es":"cuchillo","pt":"faca","fr":"couteau","de":"Messer","it":"coltello","nl":"mes","zh":"刀","ja":"ナイフ","ru":"нож"}', 16
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'hospitality_restaurant/bartender/tools/measure_cup', 'hospitality_restaurant', 'bartender', 'tools', 'hospitality_restaurant/bartender/tools/measure_cup', NULL, '{"en":"measure cup","es":"measure cup","pt":"measure cup","fr":"measure cup","de":"measure cup","it":"measure cup","nl":"maatbeker","zh":"量杯","ja":"計量カップ","ru":"мерный стакан"}', 18
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'hospitality_restaurant/bartender/tools/mixer', 'hospitality_restaurant', 'bartender', 'tools', 'hospitality_restaurant/bartender/tools/mixer', NULL, '{"en":"mixer","es":"mezclador","pt":"betoneira","fr":"mélangeur","de":"Mischer","it":"miscelatore","nl":"mixer","zh":"搅拌机","ja":"ミキサー","ru":"миксер"}', 20
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'hospitality_restaurant/bartender/tools/muddler', 'hospitality_restaurant', 'bartender', 'tools', 'hospitality_restaurant/bartender/tools/muddler', NULL, '{"en":"muddler","es":"muddler","pt":"muddler","fr":"muddler","de":"muddler","it":"muddler","nl":"stamper","zh":"搅棒","ja":"マドラー","ru":"мадлер"}', 22
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'hospitality_restaurant/bartender/tools/opener', 'hospitality_restaurant', 'bartender', 'tools', 'hospitality_restaurant/bartender/tools/opener', NULL, '{"en":"opener","es":"opener","pt":"opener","fr":"opener","de":"opener","it":"opener","nl":"opener","zh":"开瓶器","ja":"オープナー","ru":"открывалка"}', 24
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'hospitality_restaurant/bartender/tools/pourer', 'hospitality_restaurant', 'bartender', 'tools', 'hospitality_restaurant/bartender/tools/pourer', NULL, '{"en":"pourer","es":"pourer","pt":"pourer","fr":"pourer","de":"pourer","it":"pourer","nl":"schenker","zh":"倒酒器","ja":"ポーラー","ru":"дозатор"}', 26
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'hospitality_restaurant/bartender/tools/scoop', 'hospitality_restaurant', 'bartender', 'tools', 'hospitality_restaurant/bartender/tools/scoop', NULL, '{"en":"scoop","es":"cuchara de helado","pt":"concha","fr":"cuillère à glace","de":"Eiskugel","it":"paletta gelato","nl":"schep","zh":"勺子","ja":"スコップ","ru":"совок"}', 28
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'hospitality_restaurant/bartender/tools/shaker', 'hospitality_restaurant', 'bartender', 'tools', 'hospitality_restaurant/bartender/tools/shaker', NULL, '{"en":"shaker","es":"shaker","pt":"shaker","fr":"shaker","de":"shaker","it":"shaker","nl":"shaker","zh":"摇壶","ja":"シェーカー","ru":"шейкер"}', 30
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'hospitality_restaurant/bartender/tools/strainer', 'hospitality_restaurant', 'bartender', 'tools', 'hospitality_restaurant/bartender/tools/strainer', NULL, '{"en":"strainer","es":"strainer","pt":"strainer","fr":"strainer","de":"strainer","it":"strainer","nl":"zeef","zh":"过滤器","ja":"ストレーナー","ru":"цедилка"}', 32
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'hospitality_restaurant/bartender/tools/strainer_tool', 'hospitality_restaurant', 'bartender', 'tools', 'hospitality_restaurant/bartender/tools/strainer_tool', NULL, '{"en":"strainer tool","es":"strainer tool","pt":"strainer tool","fr":"strainer tool","de":"strainer tool","it":"strainer tool","nl":"zeefgereedschap","zh":"过滤工具","ja":"ストレーナーツール","ru":"инструмент для процеживания"}', 34
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'hospitality_restaurant/bartender/tools/tongs', 'hospitality_restaurant', 'bartender', 'tools', 'hospitality_restaurant/bartender/tools/tongs', NULL, '{"en":"tongs","es":"tongs","pt":"tongs","fr":"tongs","de":"tongs","it":"tongs","nl":"tang","zh":"夹子","ja":"トング","ru":"щипцы"}', 36
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'hospitality_restaurant/bartender/tools/tray', 'hospitality_restaurant', 'bartender', 'tools', 'hospitality_restaurant/bartender/tools/tray', NULL, '{"en":"tray","es":"bandeja","pt":"bandeja","fr":"plateau","de":"Tablett","it":"vassoio","nl":"dienblad","zh":"托盘","ja":"トレイ","ru":"поднос"}', 38
);
INSERT INTO public.roles (id, job_id, sector_id, name, icon, sort_order) VALUES (
  'materials', 'hospitality_restaurant', 'bartender', '{"en":"Materials","es":"Materiales","pt":"Materiais","fr":"Matériaux","de":"Materialien","it":"Materiali","nl":"Materialen","zh":"材料","ja":"材料","ru":"Материалы"}', '📦', 1
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'hospitality_restaurant/bartender/materials/alcohol', 'hospitality_restaurant', 'bartender', 'materials', 'hospitality_restaurant/bartender/materials/alcohol', NULL, '{"en":"alcohol","es":"alcohol","pt":"alcohol","fr":"alcohol","de":"alcohol","it":"alcohol","nl":"alcohol","zh":"酒精","ja":"アルコール","ru":"спирт"}', 0
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'hospitality_restaurant/bartender/materials/berries', 'hospitality_restaurant', 'bartender', 'materials', 'hospitality_restaurant/bartender/materials/berries', NULL, '{"en":"berries","es":"berries","pt":"berries","fr":"berries","de":"berries","it":"berries","nl":"bessen","zh":"浆果","ja":"ベリー","ru":"ягоды"}', 2
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'hospitality_restaurant/bartender/materials/bitters', 'hospitality_restaurant', 'bartender', 'materials', 'hospitality_restaurant/bartender/materials/bitters', NULL, '{"en":"bitters","es":"bitters","pt":"bitters","fr":"bitters","de":"bitters","it":"bitters","nl":"bitters","zh":"苦精","ja":"ビターズ","ru":"биттер"}', 4
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'hospitality_restaurant/bartender/materials/cocktail_mix', 'hospitality_restaurant', 'bartender', 'materials', 'hospitality_restaurant/bartender/materials/cocktail_mix', NULL, '{"en":"cocktail mix","es":"cocktail mix","pt":"cocktail mix","fr":"cocktail mix","de":"cocktail mix","it":"cocktail mix","nl":"cocktailmix","zh":"鸡尾酒混合物","ja":"カクテルミックス","ru":"коктейльная смесь"}', 6
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'hospitality_restaurant/bartender/materials/cola', 'hospitality_restaurant', 'bartender', 'materials', 'hospitality_restaurant/bartender/materials/cola', NULL, '{"en":"cola","es":"cola","pt":"cola","fr":"cola","de":"cola","it":"cola","nl":"cola","zh":"可乐","ja":"コーラ","ru":"кола"}', 8
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'hospitality_restaurant/bartender/materials/concentrate', 'hospitality_restaurant', 'bartender', 'materials', 'hospitality_restaurant/bartender/materials/concentrate', NULL, '{"en":"concentrate","es":"concentrate","pt":"concentrate","fr":"concentrate","de":"concentrate","it":"concentrate","nl":"concentraat","zh":"浓缩液","ja":"濃縮液","ru":"концентрат"}', 10
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'hospitality_restaurant/bartender/materials/cream', 'hospitality_restaurant', 'bartender', 'materials', 'hospitality_restaurant/bartender/materials/cream', NULL, '{"en":"cream","es":"cream","pt":"cream","fr":"cream","de":"cream","it":"cream","nl":"room","zh":"奶油","ja":"クリーム","ru":"крем"}', 12
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'hospitality_restaurant/bartender/materials/crushed_ice', 'hospitality_restaurant', 'bartender', 'materials', 'hospitality_restaurant/bartender/materials/crushed_ice', NULL, '{"en":"crushed ice","es":"crushed ice","pt":"crushed ice","fr":"crushed ice","de":"crushed ice","it":"crushed ice","nl":"crushed ice","zh":"碎冰","ja":"クラッシュアイス","ru":"колотый лед"}', 14
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'hospitality_restaurant/bartender/materials/energy_drink', 'hospitality_restaurant', 'bartender', 'materials', 'hospitality_restaurant/bartender/materials/energy_drink', NULL, '{"en":"energy drink","es":"energy drink","pt":"energy drink","fr":"energy drink","de":"energy drink","it":"energy drink","nl":"energiedrank","zh":"能量饮料","ja":"エナジードリンク","ru":"энергетик"}', 16
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'hospitality_restaurant/bartender/materials/essence', 'hospitality_restaurant', 'bartender', 'materials', 'hospitality_restaurant/bartender/materials/essence', NULL, '{"en":"essence","es":"essence","pt":"essence","fr":"essence","de":"essence","it":"essence","nl":"essence","zh":"精华","ja":"エッセンス","ru":"эссенция"}', 18
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'hospitality_restaurant/bartender/materials/extract', 'hospitality_restaurant', 'bartender', 'materials', 'hospitality_restaurant/bartender/materials/extract', NULL, '{"en":"extract","es":"extract","pt":"extract","fr":"extract","de":"extract","it":"extract","nl":"extract","zh":"提取物","ja":"エキス","ru":"экстракт"}', 20
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'hospitality_restaurant/bartender/materials/flavoring', 'hospitality_restaurant', 'bartender', 'materials', 'hospitality_restaurant/bartender/materials/flavoring', NULL, '{"en":"flavoring","es":"flavoring","pt":"flavoring","fr":"flavoring","de":"flavoring","it":"flavoring","nl":"smaakstof","zh":"香料","ja":"フレーバリング","ru":"ароматизатор"}', 22
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'hospitality_restaurant/bartender/materials/fruit', 'hospitality_restaurant', 'bartender', 'materials', 'hospitality_restaurant/bartender/materials/fruit', NULL, '{"en":"fruit","es":"fruit","pt":"fruit","fr":"fruit","de":"fruit","it":"fruit","nl":"fruit","zh":"水果","ja":"果物","ru":"фрукт"}', 24
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'hospitality_restaurant/bartender/materials/garnish', 'hospitality_restaurant', 'bartender', 'materials', 'hospitality_restaurant/bartender/materials/garnish', NULL, '{"en":"garnish","es":"garnish","pt":"garnish","fr":"garnish","de":"garnish","it":"garnish","nl":"garnering","zh":"装饰","ja":"ガーニッシュ","ru":"украшение"}', 26
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'hospitality_restaurant/bartender/materials/ice', 'hospitality_restaurant', 'bartender', 'materials', 'hospitality_restaurant/bartender/materials/ice', NULL, '{"en":"ice","es":"hielo","pt":"gelo","fr":"glace","de":"Eis","it":"ghiaccio","nl":"ijs","zh":"冰块","ja":"氷","ru":"лед"}', 28
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'hospitality_restaurant/bartender/materials/ice_cubes', 'hospitality_restaurant', 'bartender', 'materials', 'hospitality_restaurant/bartender/materials/ice_cubes', NULL, '{"en":"ice cubes","es":"ice cubes","pt":"ice cubes","fr":"ice cubes","de":"ice cubes","it":"ice cubes","nl":"ijsblokjes","zh":"冰块","ja":"氷","ru":"кубики льда"}', 30
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'hospitality_restaurant/bartender/materials/infusion', 'hospitality_restaurant', 'bartender', 'materials', 'hospitality_restaurant/bartender/materials/infusion', NULL, '{"en":"infusion","es":"infusion","pt":"infusion","fr":"infusion","de":"infusion","it":"infusion","nl":"infuus","zh":"输液","ja":"点滴","ru":"инфузия"}', 32
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'hospitality_restaurant/bartender/materials/juice', 'hospitality_restaurant', 'bartender', 'materials', 'hospitality_restaurant/bartender/materials/juice', NULL, '{"en":"juice","es":"juice","pt":"juice","fr":"juice","de":"juice","it":"juice","nl":"sap","zh":"果汁","ja":"ジュース","ru":"сок"}', 34
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'hospitality_restaurant/bartender/materials/lemon', 'hospitality_restaurant', 'bartender', 'materials', 'hospitality_restaurant/bartender/materials/lemon', NULL, '{"en":"lemon","es":"lemon","pt":"lemon","fr":"lemon","de":"lemon","it":"lemon","nl":"citroen","zh":"柠檬","ja":"レモン","ru":"лимон"}', 36
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'hospitality_restaurant/bartender/materials/lime', 'hospitality_restaurant', 'bartender', 'materials', 'hospitality_restaurant/bartender/materials/lime', NULL, '{"en":"lime","es":"lime","pt":"lime","fr":"lime","de":"lime","it":"lime","nl":"kalk","zh":"石灰","ja":"ライム","ru":"известь"}', 38
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'hospitality_restaurant/bartender/materials/liquid', 'hospitality_restaurant', 'bartender', 'materials', 'hospitality_restaurant/bartender/materials/liquid', NULL, '{"en":"liquid","es":"liquid","pt":"liquid","fr":"liquid","de":"liquid","it":"liquid","nl":"vloeistof","zh":"液体","ja":"液体","ru":"жидкость"}', 40
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'hospitality_restaurant/bartender/materials/mint', 'hospitality_restaurant', 'bartender', 'materials', 'hospitality_restaurant/bartender/materials/mint', NULL, '{"en":"mint","es":"mint","pt":"mint","fr":"mint","de":"mint","it":"mint","nl":"munt","zh":"薄荷","ja":"ミント","ru":"мята"}', 42
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'hospitality_restaurant/bartender/materials/mixers', 'hospitality_restaurant', 'bartender', 'materials', 'hospitality_restaurant/bartender/materials/mixers', NULL, '{"en":"mixers","es":"mixers","pt":"mixers","fr":"mixers","de":"mixers","it":"mixers","nl":"mixers","zh":"搅拌机","ja":"ミキサー","ru":"миксеры"}', 44
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'hospitality_restaurant/bartender/materials/puree', 'hospitality_restaurant', 'bartender', 'materials', 'hospitality_restaurant/bartender/materials/puree', NULL, '{"en":"puree","es":"puree","pt":"puree","fr":"puree","de":"puree","it":"puree","nl":"puree","zh":"泥","ja":"ピューレ","ru":"пюре"}', 46
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'hospitality_restaurant/bartender/materials/salt', 'hospitality_restaurant', 'bartender', 'materials', 'hospitality_restaurant/bartender/materials/salt', NULL, '{"en":"salt","es":"salt","pt":"salt","fr":"salt","de":"salt","it":"salt","nl":"zout","zh":"盐","ja":"塩","ru":"соль"}', 48
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'hospitality_restaurant/bartender/materials/soda', 'hospitality_restaurant', 'bartender', 'materials', 'hospitality_restaurant/bartender/materials/soda', NULL, '{"en":"soda","es":"soda","pt":"soda","fr":"soda","de":"soda","it":"soda","nl":"frisdrank","zh":"苏打水","ja":"ソーダ","ru":"газировка"}', 50
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'hospitality_restaurant/bartender/materials/sugar', 'hospitality_restaurant', 'bartender', 'materials', 'hospitality_restaurant/bartender/materials/sugar', NULL, '{"en":"sugar","es":"sugar","pt":"sugar","fr":"sugar","de":"sugar","it":"sugar","nl":"suiker","zh":"糖","ja":"砂糖","ru":"сахар"}', 52
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'hospitality_restaurant/bartender/materials/syrup', 'hospitality_restaurant', 'bartender', 'materials', 'hospitality_restaurant/bartender/materials/syrup', NULL, '{"en":"syrup","es":"syrup","pt":"syrup","fr":"syrup","de":"syrup","it":"syrup","nl":"siroop","zh":"糖浆","ja":"シロップ","ru":"сироп"}', 54
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'hospitality_restaurant/bartender/materials/tonic', 'hospitality_restaurant', 'bartender', 'materials', 'hospitality_restaurant/bartender/materials/tonic', NULL, '{"en":"tonic","es":"tonic","pt":"tonic","fr":"tonic","de":"tonic","it":"tonic","nl":"tonic","zh":"奎宁水","ja":"トニック","ru":"тоник"}', 56
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'hospitality_restaurant/bartender/materials/water', 'hospitality_restaurant', 'bartender', 'materials', 'hospitality_restaurant/bartender/materials/water', NULL, '{"en":"water","es":"agua","pt":"água","fr":"eau","de":"Wasser","it":"acqua","nl":"water","zh":"水","ja":"水","ru":"вода"}', 58
);

INSERT INTO public.sectors (id, job_id, name, icon, sort_order) VALUES (
  'ice_cream_server', 'hospitality_restaurant', '{"en":"Ice Cream Server","es":"Heladero","pt":"Sorveteiro","fr":"Serveur de glaces","de":"Eisverkäufer","it":"Gelatiere","nl":"IJsverkoper","zh":"冰淇淋服务员","ja":"アイスクリーム販売員","ru":"Продавец мороженого"}', '🍦', 1
);
INSERT INTO public.roles (id, job_id, sector_id, name, icon, sort_order) VALUES (
  'tools', 'hospitality_restaurant', 'ice_cream_server', '{"en":"Tools","es":"Herramientas","pt":"Ferramentas","fr":"Outils","de":"Werkzeuge","it":"Attrezzi","nl":"Gereedschap","zh":"工具","ja":"道具","ru":"Инструменты"}', '🔧', 0
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'hospitality_restaurant/ice_cream_server/tools/blender', 'hospitality_restaurant', 'ice_cream_server', 'tools', 'hospitality_restaurant/ice_cream_server/tools/blender', NULL, '{"en":"blender","es":"blender","pt":"blender","fr":"blender","de":"blender","it":"blender","nl":"blender","zh":"搅拌机","ja":"ブレンダー","ru":"блендер"}', 0
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'hospitality_restaurant/ice_cream_server/tools/cone_holder', 'hospitality_restaurant', 'ice_cream_server', 'tools', 'hospitality_restaurant/ice_cream_server/tools/cone_holder', NULL, '{"en":"cone holder","es":"cone holder","pt":"cone holder","fr":"cone holder","de":"cone holder","it":"cone holder","nl":"pionhouder","zh":"锥形架","ja":"コーンホルダー","ru":"держатель конусов"}', 2
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'hospitality_restaurant/ice_cream_server/tools/container', 'hospitality_restaurant', 'ice_cream_server', 'tools', 'hospitality_restaurant/ice_cream_server/tools/container', NULL, '{"en":"container","es":"contenedor","pt":"recipiente","fr":"conteneur","de":"Behälter","it":"contenitore","nl":"container","zh":"容器","ja":"コンテナ","ru":"контейнер"}', 4
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'hospitality_restaurant/ice_cream_server/tools/cup_dispenser', 'hospitality_restaurant', 'ice_cream_server', 'tools', 'hospitality_restaurant/ice_cream_server/tools/cup_dispenser', NULL, '{"en":"cup dispenser","es":"cup dispenser","pt":"cup dispenser","fr":"cup dispenser","de":"cup dispenser","it":"cup dispenser","nl":"bekerdispenser","zh":"杯子分配器","ja":"カップディスペンサー","ru":"диспенсер для стаканов"}', 6
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'hospitality_restaurant/ice_cream_server/tools/cutter', 'hospitality_restaurant', 'ice_cream_server', 'tools', 'hospitality_restaurant/ice_cream_server/tools/cutter', NULL, '{"en":"cutter","es":"cortador","pt":"cortador","fr":"cutter","de":"Cutter","it":"taglierino","nl":"snijder","zh":"切割机","ja":"カッター","ru":"резак"}', 8
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'hospitality_restaurant/ice_cream_server/tools/dispenser', 'hospitality_restaurant', 'ice_cream_server', 'tools', 'hospitality_restaurant/ice_cream_server/tools/dispenser', NULL, '{"en":"dispenser","es":"dispenser","pt":"dispenser","fr":"dispenser","de":"dispenser","it":"dispenser","nl":"dispenser","zh":"分配器","ja":"ディスペンサー","ru":"диспенсер"}', 10
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'hospitality_restaurant/ice_cream_server/tools/freezer', 'hospitality_restaurant', 'ice_cream_server', 'tools', 'hospitality_restaurant/ice_cream_server/tools/freezer', NULL, '{"en":"freezer","es":"congelador","pt":"freezer","fr":"congélateur","de":"Gefriergerät","it":"freezer","nl":"vriezer","zh":"冷冻机","ja":"冷凍庫","ru":"морозильник"}', 12
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'hospitality_restaurant/ice_cream_server/tools/holder', 'hospitality_restaurant', 'ice_cream_server', 'tools', 'hospitality_restaurant/ice_cream_server/tools/holder', NULL, '{"en":"holder","es":"holder","pt":"holder","fr":"holder","de":"holder","it":"holder","nl":"houder","zh":"夹持器","ja":"ホルダー","ru":"держатель"}', 14
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'hospitality_restaurant/ice_cream_server/tools/ladle', 'hospitality_restaurant', 'ice_cream_server', 'tools', 'hospitality_restaurant/ice_cream_server/tools/ladle', NULL, '{"en":"ladle","es":"ladle","pt":"ladle","fr":"ladle","de":"ladle","it":"ladle","nl":"soeplepel","zh":"汤勺","ja":"お玉","ru":"поварешка"}', 16
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'hospitality_restaurant/ice_cream_server/tools/machine', 'hospitality_restaurant', 'ice_cream_server', 'tools', 'hospitality_restaurant/ice_cream_server/tools/machine', NULL, '{"en":"machine","es":"machine","pt":"machine","fr":"machine","de":"machine","it":"machine","nl":"machine","zh":"机器","ja":"機械","ru":"машина"}', 18
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'hospitality_restaurant/ice_cream_server/tools/mixer', 'hospitality_restaurant', 'ice_cream_server', 'tools', 'hospitality_restaurant/ice_cream_server/tools/mixer', NULL, '{"en":"mixer","es":"mezclador","pt":"betoneira","fr":"mélangeur","de":"Mischer","it":"miscelatore","nl":"mixer","zh":"搅拌机","ja":"ミキサー","ru":"миксер"}', 20
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'hospitality_restaurant/ice_cream_server/tools/scale', 'hospitality_restaurant', 'ice_cream_server', 'tools', 'hospitality_restaurant/ice_cream_server/tools/scale', NULL, '{"en":"scale","es":"báscula","pt":"balança","fr":"balance","de":"Waage","it":"bilancia","nl":"weegschaal","zh":"秤","ja":"スケール","ru":"весы"}', 22
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'hospitality_restaurant/ice_cream_server/tools/scoop', 'hospitality_restaurant', 'ice_cream_server', 'tools', 'hospitality_restaurant/ice_cream_server/tools/scoop', NULL, '{"en":"scoop","es":"cuchara de helado","pt":"concha","fr":"cuillère à glace","de":"Eiskugel","it":"paletta gelato","nl":"schep","zh":"勺子","ja":"スコップ","ru":"совок"}', 24
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'hospitality_restaurant/ice_cream_server/tools/scoop_tool', 'hospitality_restaurant', 'ice_cream_server', 'tools', 'hospitality_restaurant/ice_cream_server/tools/scoop_tool', NULL, '{"en":"scoop tool","es":"scoop tool","pt":"scoop tool","fr":"scoop tool","de":"scoop tool","it":"scoop tool","nl":"schepgereedschap","zh":"勺形工具","ja":"スコップツール","ru":"совок-инструмент"}', 26
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'hospitality_restaurant/ice_cream_server/tools/scraper', 'hospitality_restaurant', 'ice_cream_server', 'tools', 'hospitality_restaurant/ice_cream_server/tools/scraper', NULL, '{"en":"scraper","es":"scraper","pt":"scraper","fr":"scraper","de":"scraper","it":"scraper","nl":"schraper","zh":"刮刀","ja":"スクレーパー","ru":"скребок"}', 28
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'hospitality_restaurant/ice_cream_server/tools/serving_tool', 'hospitality_restaurant', 'ice_cream_server', 'tools', 'hospitality_restaurant/ice_cream_server/tools/serving_tool', NULL, '{"en":"serving tool","es":"serving tool","pt":"serving tool","fr":"serving tool","de":"serving tool","it":"serving tool","nl":"opschepgereedschap","zh":"分餐工具","ja":"サービングツール","ru":"сервировочный инструмент"}', 30
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'hospitality_restaurant/ice_cream_server/tools/spatula', 'hospitality_restaurant', 'ice_cream_server', 'tools', 'hospitality_restaurant/ice_cream_server/tools/spatula', NULL, '{"en":"spatula","es":"spatula","pt":"spatula","fr":"spatula","de":"spatula","it":"spatula","nl":"spatel","zh":"铲刀","ja":"ヘラ","ru":"шпатель"}', 32
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'hospitality_restaurant/ice_cream_server/tools/spoon', 'hospitality_restaurant', 'ice_cream_server', 'tools', 'hospitality_restaurant/ice_cream_server/tools/spoon', NULL, '{"en":"spoon","es":"spoon","pt":"spoon","fr":"spoon","de":"spoon","it":"spoon","nl":"lepel","zh":"汤匙","ja":"スプーン","ru":"ложка"}', 34
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'hospitality_restaurant/ice_cream_server/tools/topping_dispenser', 'hospitality_restaurant', 'ice_cream_server', 'tools', 'hospitality_restaurant/ice_cream_server/tools/topping_dispenser', NULL, '{"en":"topping dispenser","es":"topping dispenser","pt":"topping dispenser","fr":"topping dispenser","de":"topping dispenser","it":"topping dispenser","nl":"toppingdispenser","zh":"浇头分发器","ja":"トッピングディスペンサー","ru":"диспенсер топпинга"}', 36
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'hospitality_restaurant/ice_cream_server/tools/tray', 'hospitality_restaurant', 'ice_cream_server', 'tools', 'hospitality_restaurant/ice_cream_server/tools/tray', NULL, '{"en":"tray","es":"bandeja","pt":"bandeja","fr":"plateau","de":"Tablett","it":"vassoio","nl":"dienblad","zh":"托盘","ja":"トレイ","ru":"поднос"}', 38
);
INSERT INTO public.roles (id, job_id, sector_id, name, icon, sort_order) VALUES (
  'materials', 'hospitality_restaurant', 'ice_cream_server', '{"en":"Materials","es":"Materiales","pt":"Materiais","fr":"Matériaux","de":"Materialien","it":"Materiali","nl":"Materialen","zh":"材料","ja":"材料","ru":"Материалы"}', '📦', 1
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'hospitality_restaurant/ice_cream_server/materials/base', 'hospitality_restaurant', 'ice_cream_server', 'materials', 'hospitality_restaurant/ice_cream_server/materials/base', NULL, '{"en":"base","es":"base","pt":"base","fr":"base","de":"base","it":"base","nl":"basis","zh":"底料","ja":"ベース","ru":"основа"}', 0
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'hospitality_restaurant/ice_cream_server/materials/biscuit', 'hospitality_restaurant', 'ice_cream_server', 'materials', 'hospitality_restaurant/ice_cream_server/materials/biscuit', NULL, '{"en":"biscuit","es":"biscuit","pt":"biscuit","fr":"biscuit","de":"biscuit","it":"biscuit","nl":"koekje","zh":"饼干","ja":"ビスケット","ru":"печенье"}', 2
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'hospitality_restaurant/ice_cream_server/materials/candy', 'hospitality_restaurant', 'ice_cream_server', 'materials', 'hospitality_restaurant/ice_cream_server/materials/candy', NULL, '{"en":"candy","es":"candy","pt":"candy","fr":"candy","de":"candy","it":"candy","nl":"snoep","zh":"糖果","ja":"キャンディ","ru":"конфеты"}', 4
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'hospitality_restaurant/ice_cream_server/materials/caramel', 'hospitality_restaurant', 'ice_cream_server', 'materials', 'hospitality_restaurant/ice_cream_server/materials/caramel', NULL, '{"en":"caramel","es":"caramel","pt":"caramel","fr":"caramel","de":"caramel","it":"caramel","nl":"karamel","zh":"焦糖","ja":"キャラメル","ru":"карамель"}', 6
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'hospitality_restaurant/ice_cream_server/materials/chocolate', 'hospitality_restaurant', 'ice_cream_server', 'materials', 'hospitality_restaurant/ice_cream_server/materials/chocolate', NULL, '{"en":"chocolate","es":"chocolate","pt":"chocolate","fr":"chocolate","de":"chocolate","it":"chocolate","nl":"chocolade","zh":"巧克力","ja":"チョコレート","ru":"шоколад"}', 8
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'hospitality_restaurant/ice_cream_server/materials/chocolate_chips', 'hospitality_restaurant', 'ice_cream_server', 'materials', 'hospitality_restaurant/ice_cream_server/materials/chocolate_chips', NULL, '{"en":"chocolate chips","es":"chocolate chips","pt":"chocolate chips","fr":"chocolate chips","de":"chocolate chips","it":"chocolate chips","nl":"chocoladestukjes","zh":"巧克力碎片","ja":"チョコチップ","ru":"шоколадная крошка"}', 10
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'hospitality_restaurant/ice_cream_server/materials/coating', 'hospitality_restaurant', 'ice_cream_server', 'materials', 'hospitality_restaurant/ice_cream_server/materials/coating', NULL, '{"en":"coating","es":"coating","pt":"coating","fr":"coating","de":"coating","it":"coating","nl":"coating","zh":"涂层","ja":"コーティング","ru":"покрытие"}', 12
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'hospitality_restaurant/ice_cream_server/materials/cones', 'hospitality_restaurant', 'ice_cream_server', 'materials', 'hospitality_restaurant/ice_cream_server/materials/cones', NULL, '{"en":"cones","es":"cones","pt":"cones","fr":"cones","de":"cones","it":"cones","nl":"pionnen","zh":"锥桶","ja":"コーン","ru":"конусы"}', 14
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'hospitality_restaurant/ice_cream_server/materials/cream', 'hospitality_restaurant', 'ice_cream_server', 'materials', 'hospitality_restaurant/ice_cream_server/materials/cream', NULL, '{"en":"cream","es":"cream","pt":"cream","fr":"cream","de":"cream","it":"cream","nl":"room","zh":"奶油","ja":"クリーム","ru":"крем"}', 16
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'hospitality_restaurant/ice_cream_server/materials/essence', 'hospitality_restaurant', 'ice_cream_server', 'materials', 'hospitality_restaurant/ice_cream_server/materials/essence', NULL, '{"en":"essence","es":"essence","pt":"essence","fr":"essence","de":"essence","it":"essence","nl":"essence","zh":"精华","ja":"エッセンス","ru":"эссенция"}', 18
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'hospitality_restaurant/ice_cream_server/materials/filling', 'hospitality_restaurant', 'ice_cream_server', 'materials', 'hospitality_restaurant/ice_cream_server/materials/filling', NULL, '{"en":"filling","es":"filling","pt":"filling","fr":"filling","de":"filling","it":"filling","nl":"vulling","zh":"填充物","ja":"フィリング","ru":"начинка"}', 20
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'hospitality_restaurant/ice_cream_server/materials/flavor', 'hospitality_restaurant', 'ice_cream_server', 'materials', 'hospitality_restaurant/ice_cream_server/materials/flavor', NULL, '{"en":"flavor","es":"flavor","pt":"flavor","fr":"flavor","de":"flavor","it":"flavor","nl":"smaak","zh":"口味","ja":"フレーバー","ru":"вкус"}', 22
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'hospitality_restaurant/ice_cream_server/materials/flavor_mix', 'hospitality_restaurant', 'ice_cream_server', 'materials', 'hospitality_restaurant/ice_cream_server/materials/flavor_mix', NULL, '{"en":"flavor mix","es":"flavor mix","pt":"flavor mix","fr":"flavor mix","de":"flavor mix","it":"flavor mix","nl":"smaaksmengsel","zh":"调味混合物","ja":"フレーバーミックス","ru":"смесь вкусов"}', 24
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'hospitality_restaurant/ice_cream_server/materials/fruits', 'hospitality_restaurant', 'ice_cream_server', 'materials', 'hospitality_restaurant/ice_cream_server/materials/fruits', NULL, '{"en":"fruits","es":"fruits","pt":"fruits","fr":"fruits","de":"fruits","it":"fruits","nl":"fruit","zh":"水果","ja":"果物","ru":"фрукты"}', 26
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'hospitality_restaurant/ice_cream_server/materials/gel', 'hospitality_restaurant', 'ice_cream_server', 'materials', 'hospitality_restaurant/ice_cream_server/materials/gel', NULL, '{"en":"gel","es":"gel","pt":"gel","fr":"gel","de":"gel","it":"gel","nl":"gel","zh":"凝胶","ja":"ジェル","ru":"гель"}', 28
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'hospitality_restaurant/ice_cream_server/materials/ice_cream', 'hospitality_restaurant', 'ice_cream_server', 'materials', 'hospitality_restaurant/ice_cream_server/materials/ice_cream', NULL, '{"en":"ice cream","es":"helado","pt":"sorvete","fr":"glace","de":"Eis","it":"gelato","nl":"ijs","zh":"冰淇淋","ja":"アイスクリーム","ru":"мороженое"}', 30
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'hospitality_restaurant/ice_cream_server/materials/liquid', 'hospitality_restaurant', 'ice_cream_server', 'materials', 'hospitality_restaurant/ice_cream_server/materials/liquid', NULL, '{"en":"liquid","es":"liquid","pt":"liquid","fr":"liquid","de":"liquid","it":"liquid","nl":"vloeistof","zh":"液体","ja":"液体","ru":"жидкость"}', 32
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'hospitality_restaurant/ice_cream_server/materials/marshmallow', 'hospitality_restaurant', 'ice_cream_server', 'materials', 'hospitality_restaurant/ice_cream_server/materials/marshmallow', NULL, '{"en":"marshmallow","es":"marshmallow","pt":"marshmallow","fr":"marshmallow","de":"marshmallow","it":"marshmallow","nl":"marshmallow","zh":"棉花糖","ja":"マシュマロ","ru":"маршмеллоу"}', 34
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'hospitality_restaurant/ice_cream_server/materials/milk', 'hospitality_restaurant', 'ice_cream_server', 'materials', 'hospitality_restaurant/ice_cream_server/materials/milk', NULL, '{"en":"milk","es":"milk","pt":"milk","fr":"milk","de":"milk","it":"milk","nl":"melk","zh":"牛奶","ja":"ミルク","ru":"молоко"}', 36
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'hospitality_restaurant/ice_cream_server/materials/mix', 'hospitality_restaurant', 'ice_cream_server', 'materials', 'hospitality_restaurant/ice_cream_server/materials/mix', NULL, '{"en":"mix","es":"mix","pt":"mix","fr":"mix","de":"mix","it":"mix","nl":"mengsel","zh":"混合物","ja":"ミックス","ru":"смесь"}', 38
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'hospitality_restaurant/ice_cream_server/materials/nuts', 'hospitality_restaurant', 'ice_cream_server', 'materials', 'hospitality_restaurant/ice_cream_server/materials/nuts', NULL, '{"en":"nuts","es":"nuts","pt":"nuts","fr":"nuts","de":"nuts","it":"nuts","nl":"moeren","zh":"螺母","ja":"ナット","ru":"гайки"}', 40
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'hospitality_restaurant/ice_cream_server/materials/paste', 'hospitality_restaurant', 'ice_cream_server', 'materials', 'hospitality_restaurant/ice_cream_server/materials/paste', NULL, '{"en":"paste","es":"paste","pt":"paste","fr":"paste","de":"paste","it":"paste","nl":"pasta","zh":"糊","ja":"ペースト","ru":"паста"}', 42
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'hospitality_restaurant/ice_cream_server/materials/powder', 'hospitality_restaurant', 'ice_cream_server', 'materials', 'hospitality_restaurant/ice_cream_server/materials/powder', NULL, '{"en":"powder","es":"powder","pt":"powder","fr":"powder","de":"powder","it":"powder","nl":"poeder","zh":"粉末","ja":"パウダー","ru":"порошок"}', 44
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'hospitality_restaurant/ice_cream_server/materials/sauce', 'hospitality_restaurant', 'ice_cream_server', 'materials', 'hospitality_restaurant/ice_cream_server/materials/sauce', NULL, '{"en":"sauce","es":"sauce","pt":"sauce","fr":"sauce","de":"sauce","it":"sauce","nl":"saus","zh":"酱汁","ja":"ソース","ru":"соус"}', 46
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'hospitality_restaurant/ice_cream_server/materials/sprinkles', 'hospitality_restaurant', 'ice_cream_server', 'materials', 'hospitality_restaurant/ice_cream_server/materials/sprinkles', NULL, '{"en":"sprinkles","es":"sprinkles","pt":"sprinkles","fr":"sprinkles","de":"sprinkles","it":"sprinkles","nl":"hagelslag","zh":"糖粒","ja":"スプリンクル","ru":"кондитерская посыпка"}', 48
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'hospitality_restaurant/ice_cream_server/materials/sugar', 'hospitality_restaurant', 'ice_cream_server', 'materials', 'hospitality_restaurant/ice_cream_server/materials/sugar', NULL, '{"en":"sugar","es":"sugar","pt":"sugar","fr":"sugar","de":"sugar","it":"sugar","nl":"suiker","zh":"糖","ja":"砂糖","ru":"сахар"}', 50
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'hospitality_restaurant/ice_cream_server/materials/syrup', 'hospitality_restaurant', 'ice_cream_server', 'materials', 'hospitality_restaurant/ice_cream_server/materials/syrup', NULL, '{"en":"syrup","es":"syrup","pt":"syrup","fr":"syrup","de":"syrup","it":"syrup","nl":"siroop","zh":"糖浆","ja":"シロップ","ru":"сироп"}', 52
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'hospitality_restaurant/ice_cream_server/materials/topping_mix', 'hospitality_restaurant', 'ice_cream_server', 'materials', 'hospitality_restaurant/ice_cream_server/materials/topping_mix', NULL, '{"en":"topping mix","es":"topping mix","pt":"topping mix","fr":"topping mix","de":"topping mix","it":"topping mix","nl":"toppingmengsel","zh":"浇头混合物","ja":"トッピングミックス","ru":"смесь топпинга"}', 54
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'hospitality_restaurant/ice_cream_server/materials/toppings', 'hospitality_restaurant', 'ice_cream_server', 'materials', 'hospitality_restaurant/ice_cream_server/materials/toppings', NULL, '{"en":"toppings","es":"toppings","pt":"toppings","fr":"toppings","de":"toppings","it":"toppings","nl":"toppings","zh":"浇头","ja":"トッピング","ru":"топпинги"}', 56
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'hospitality_restaurant/ice_cream_server/materials/wafer', 'hospitality_restaurant', 'ice_cream_server', 'materials', 'hospitality_restaurant/ice_cream_server/materials/wafer', NULL, '{"en":"wafer","es":"wafer","pt":"wafer","fr":"wafer","de":"wafer","it":"wafer","nl":"wafer","zh":"威化饼","ja":"ウエハー","ru":"вафля"}', 58
);

INSERT INTO public.sectors (id, job_id, name, icon, sort_order) VALUES (
  'kitchen_assistant', 'hospitality_restaurant', '{"en":"Kitchen Assistant","es":"Ayudante de Cocina","pt":"Auxiliar de Cozinha","fr":"Commis de cuisine","de":"Küchenhelfer","it":"Aiuto Cuoco","nl":"Keukenassistent","zh":"厨房助手","ja":"キッチンアシスタント","ru":"Помощник на кухне"}', '🍳', 2
);
INSERT INTO public.roles (id, job_id, sector_id, name, icon, sort_order) VALUES (
  'tools', 'hospitality_restaurant', 'kitchen_assistant', '{"en":"Tools","es":"Herramientas","pt":"Ferramentas","fr":"Outils","de":"Werkzeuge","it":"Attrezzi","nl":"Gereedschap","zh":"工具","ja":"道具","ru":"Инструменты"}', '🔧', 0
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'hospitality_restaurant/kitchen_assistant/tools/baking_tray', 'hospitality_restaurant', 'kitchen_assistant', 'tools', 'hospitality_restaurant/kitchen_assistant/tools/baking_tray', NULL, '{"en":"baking tray","es":"baking tray","pt":"baking tray","fr":"baking tray","de":"baking tray","it":"baking tray","nl":"bakplaat","zh":"烤盘","ja":"ベーキングトレイ","ru":"противень"}', 0
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'hospitality_restaurant/kitchen_assistant/tools/blender', 'hospitality_restaurant', 'kitchen_assistant', 'tools', 'hospitality_restaurant/kitchen_assistant/tools/blender', NULL, '{"en":"blender","es":"blender","pt":"blender","fr":"blender","de":"blender","it":"blender","nl":"blender","zh":"搅拌机","ja":"ブレンダー","ru":"блендер"}', 2
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'hospitality_restaurant/kitchen_assistant/tools/colander', 'hospitality_restaurant', 'kitchen_assistant', 'tools', 'hospitality_restaurant/kitchen_assistant/tools/colander', NULL, '{"en":"colander","es":"colander","pt":"colander","fr":"colander","de":"colander","it":"colander","nl":"vergiet","zh":"滤锅","ja":"コランダー","ru":"дуршлаг"}', 4
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'hospitality_restaurant/kitchen_assistant/tools/cutting_board', 'hospitality_restaurant', 'kitchen_assistant', 'tools', 'hospitality_restaurant/kitchen_assistant/tools/cutting_board', NULL, '{"en":"cutting board","es":"cutting board","pt":"cutting board","fr":"cutting board","de":"cutting board","it":"cutting board","nl":"snijplank","zh":"切菜板","ja":"まな板","ru":"разделочная доска"}', 6
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'hospitality_restaurant/kitchen_assistant/tools/food_processor', 'hospitality_restaurant', 'kitchen_assistant', 'tools', 'hospitality_restaurant/kitchen_assistant/tools/food_processor', NULL, '{"en":"food processor","es":"food processor","pt":"food processor","fr":"food processor","de":"food processor","it":"food processor","nl":"keukenmachine","zh":"食品加工机","ja":"フードプロセッサー","ru":"кухонный комбайн"}', 8
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'hospitality_restaurant/kitchen_assistant/tools/fryer', 'hospitality_restaurant', 'kitchen_assistant', 'tools', 'hospitality_restaurant/kitchen_assistant/tools/fryer', NULL, '{"en":"fryer","es":"fryer","pt":"fryer","fr":"fryer","de":"fryer","it":"fryer","nl":"friteuse","zh":"油炸锅","ja":"フライヤー","ru":"фритюрница"}', 10
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'hospitality_restaurant/kitchen_assistant/tools/grater', 'hospitality_restaurant', 'kitchen_assistant', 'tools', 'hospitality_restaurant/kitchen_assistant/tools/grater', NULL, '{"en":"grater","es":"grater","pt":"grater","fr":"grater","de":"grater","it":"grater","nl":"rasp","zh":"擦丝板","ja":"グレーター","ru":"терка"}', 12
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'hospitality_restaurant/kitchen_assistant/tools/grill', 'hospitality_restaurant', 'kitchen_assistant', 'tools', 'hospitality_restaurant/kitchen_assistant/tools/grill', NULL, '{"en":"grill","es":"grill","pt":"grill","fr":"grill","de":"grill","it":"grill","nl":"grill","zh":"烤架","ja":"グリル","ru":"гриль"}', 14
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'hospitality_restaurant/kitchen_assistant/tools/knife', 'hospitality_restaurant', 'kitchen_assistant', 'tools', 'hospitality_restaurant/kitchen_assistant/tools/knife', NULL, '{"en":"knife","es":"cuchillo","pt":"faca","fr":"couteau","de":"Messer","it":"coltello","nl":"mes","zh":"刀","ja":"ナイフ","ru":"нож"}', 16
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'hospitality_restaurant/kitchen_assistant/tools/ladle', 'hospitality_restaurant', 'kitchen_assistant', 'tools', 'hospitality_restaurant/kitchen_assistant/tools/ladle', NULL, '{"en":"ladle","es":"ladle","pt":"ladle","fr":"ladle","de":"ladle","it":"ladle","nl":"soeplepel","zh":"汤勺","ja":"お玉","ru":"поварешка"}', 18
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'hospitality_restaurant/kitchen_assistant/tools/mixer', 'hospitality_restaurant', 'kitchen_assistant', 'tools', 'hospitality_restaurant/kitchen_assistant/tools/mixer', NULL, '{"en":"mixer","es":"mezclador","pt":"betoneira","fr":"mélangeur","de":"Mischer","it":"miscelatore","nl":"mixer","zh":"搅拌机","ja":"ミキサー","ru":"миксер"}', 20
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'hospitality_restaurant/kitchen_assistant/tools/oven', 'hospitality_restaurant', 'kitchen_assistant', 'tools', 'hospitality_restaurant/kitchen_assistant/tools/oven', NULL, '{"en":"oven","es":"oven","pt":"oven","fr":"oven","de":"oven","it":"oven","nl":"oven","zh":"烤箱","ja":"オーブン","ru":"духовка"}', 22
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'hospitality_restaurant/kitchen_assistant/tools/pan', 'hospitality_restaurant', 'kitchen_assistant', 'tools', 'hospitality_restaurant/kitchen_assistant/tools/pan', NULL, '{"en":"pan","es":"pan","pt":"pan","fr":"pan","de":"pan","it":"pan","nl":"pan","zh":"锅","ja":"パン","ru":"сковорода"}', 24
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'hospitality_restaurant/kitchen_assistant/tools/peeler', 'hospitality_restaurant', 'kitchen_assistant', 'tools', 'hospitality_restaurant/kitchen_assistant/tools/peeler', NULL, '{"en":"peeler","es":"peeler","pt":"peeler","fr":"peeler","de":"peeler","it":"peeler","nl":"schilmesje","zh":"削皮器","ja":"ピーラー","ru":"овощечистка"}', 26
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'hospitality_restaurant/kitchen_assistant/tools/sieve', 'hospitality_restaurant', 'kitchen_assistant', 'tools', 'hospitality_restaurant/kitchen_assistant/tools/sieve', NULL, '{"en":"sieve","es":"sieve","pt":"sieve","fr":"sieve","de":"sieve","it":"sieve","nl":"zeef","zh":"筛子","ja":"ふるい","ru":"сито"}', 28
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'hospitality_restaurant/kitchen_assistant/tools/spatula', 'hospitality_restaurant', 'kitchen_assistant', 'tools', 'hospitality_restaurant/kitchen_assistant/tools/spatula', NULL, '{"en":"spatula","es":"spatula","pt":"spatula","fr":"spatula","de":"spatula","it":"spatula","nl":"spatel","zh":"铲刀","ja":"ヘラ","ru":"шпатель"}', 30
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'hospitality_restaurant/kitchen_assistant/tools/stove', 'hospitality_restaurant', 'kitchen_assistant', 'tools', 'hospitality_restaurant/kitchen_assistant/tools/stove', NULL, '{"en":"stove","es":"stove","pt":"stove","fr":"stove","de":"stove","it":"stove","nl":"fornuis","zh":"炉子","ja":"ストーブ","ru":"плита"}', 32
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'hospitality_restaurant/kitchen_assistant/tools/tongs', 'hospitality_restaurant', 'kitchen_assistant', 'tools', 'hospitality_restaurant/kitchen_assistant/tools/tongs', NULL, '{"en":"tongs","es":"tongs","pt":"tongs","fr":"tongs","de":"tongs","it":"tongs","nl":"tang","zh":"夹子","ja":"トング","ru":"щипцы"}', 34
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'hospitality_restaurant/kitchen_assistant/tools/tray', 'hospitality_restaurant', 'kitchen_assistant', 'tools', 'hospitality_restaurant/kitchen_assistant/tools/tray', NULL, '{"en":"tray","es":"bandeja","pt":"bandeja","fr":"plateau","de":"Tablett","it":"vassoio","nl":"dienblad","zh":"托盘","ja":"トレイ","ru":"поднос"}', 36
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'hospitality_restaurant/kitchen_assistant/tools/whisk', 'hospitality_restaurant', 'kitchen_assistant', 'tools', 'hospitality_restaurant/kitchen_assistant/tools/whisk', NULL, '{"en":"whisk","es":"whisk","pt":"whisk","fr":"whisk","de":"whisk","it":"whisk","nl":"garde","zh":"搅拌器","ja":"泡立て器","ru":"венчик"}', 38
);
INSERT INTO public.roles (id, job_id, sector_id, name, icon, sort_order) VALUES (
  'materials', 'hospitality_restaurant', 'kitchen_assistant', '{"en":"Materials","es":"Materiales","pt":"Materiais","fr":"Matériaux","de":"Materialien","it":"Materiali","nl":"Materialen","zh":"材料","ja":"材料","ru":"Материалы"}', '📦', 1
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'hospitality_restaurant/kitchen_assistant/materials/base', 'hospitality_restaurant', 'kitchen_assistant', 'materials', 'hospitality_restaurant/kitchen_assistant/materials/base', NULL, '{"en":"base","es":"base","pt":"base","fr":"base","de":"base","it":"base","nl":"basis","zh":"底料","ja":"ベース","ru":"основа"}', 0
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'hospitality_restaurant/kitchen_assistant/materials/batter', 'hospitality_restaurant', 'kitchen_assistant', 'materials', 'hospitality_restaurant/kitchen_assistant/materials/batter', NULL, '{"en":"batter","es":"batter","pt":"batter","fr":"batter","de":"batter","it":"batter","nl":"beslag","zh":"面糊","ja":"バッター","ru":"тесто"}', 2
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'hospitality_restaurant/kitchen_assistant/materials/broth', 'hospitality_restaurant', 'kitchen_assistant', 'materials', 'hospitality_restaurant/kitchen_assistant/materials/broth', NULL, '{"en":"broth","es":"broth","pt":"broth","fr":"broth","de":"broth","it":"broth","nl":"bouillon","zh":"肉汤","ja":"ブロス","ru":"бульон"}', 4
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'hospitality_restaurant/kitchen_assistant/materials/butter', 'hospitality_restaurant', 'kitchen_assistant', 'materials', 'hospitality_restaurant/kitchen_assistant/materials/butter', NULL, '{"en":"butter","es":"butter","pt":"butter","fr":"butter","de":"butter","it":"butter","nl":"boter","zh":"黄油","ja":"バター","ru":"масло"}', 6
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'hospitality_restaurant/kitchen_assistant/materials/cheese', 'hospitality_restaurant', 'kitchen_assistant', 'materials', 'hospitality_restaurant/kitchen_assistant/materials/cheese', NULL, '{"en":"cheese","es":"cheese","pt":"cheese","fr":"cheese","de":"cheese","it":"cheese","nl":"kaas","zh":"奶酪","ja":"チーズ","ru":"сыр"}', 8
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'hospitality_restaurant/kitchen_assistant/materials/cream', 'hospitality_restaurant', 'kitchen_assistant', 'materials', 'hospitality_restaurant/kitchen_assistant/materials/cream', NULL, '{"en":"cream","es":"cream","pt":"cream","fr":"cream","de":"cream","it":"cream","nl":"room","zh":"奶油","ja":"クリーム","ru":"крем"}', 10
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'hospitality_restaurant/kitchen_assistant/materials/dough', 'hospitality_restaurant', 'kitchen_assistant', 'materials', 'hospitality_restaurant/kitchen_assistant/materials/dough', NULL, '{"en":"dough","es":"dough","pt":"dough","fr":"dough","de":"dough","it":"dough","nl":"deeg","zh":"面团","ja":"生地","ru":"тесто"}', 12
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'hospitality_restaurant/kitchen_assistant/materials/eggs', 'hospitality_restaurant', 'kitchen_assistant', 'materials', 'hospitality_restaurant/kitchen_assistant/materials/eggs', NULL, '{"en":"eggs","es":"eggs","pt":"eggs","fr":"eggs","de":"eggs","it":"eggs","nl":"eieren","zh":"鸡蛋","ja":"卵","ru":"яйца"}', 14
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'hospitality_restaurant/kitchen_assistant/materials/filling', 'hospitality_restaurant', 'kitchen_assistant', 'materials', 'hospitality_restaurant/kitchen_assistant/materials/filling', NULL, '{"en":"filling","es":"filling","pt":"filling","fr":"filling","de":"filling","it":"filling","nl":"vulling","zh":"填充物","ja":"フィリング","ru":"начинка"}', 16
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'hospitality_restaurant/kitchen_assistant/materials/flour', 'hospitality_restaurant', 'kitchen_assistant', 'materials', 'hospitality_restaurant/kitchen_assistant/materials/flour', NULL, '{"en":"flour","es":"flour","pt":"flour","fr":"flour","de":"flour","it":"flour","nl":"bloem","zh":"面粉","ja":"小麦粉","ru":"мука"}', 18
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'hospitality_restaurant/kitchen_assistant/materials/herbs', 'hospitality_restaurant', 'kitchen_assistant', 'materials', 'hospitality_restaurant/kitchen_assistant/materials/herbs', NULL, '{"en":"herbs","es":"herbs","pt":"herbs","fr":"herbs","de":"herbs","it":"herbs","nl":"kruiden","zh":"香草","ja":"ハーブ","ru":"травы"}', 20
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'hospitality_restaurant/kitchen_assistant/materials/ingredient', 'hospitality_restaurant', 'kitchen_assistant', 'materials', 'hospitality_restaurant/kitchen_assistant/materials/ingredient', NULL, '{"en":"ingredient","es":"ingredient","pt":"ingredient","fr":"ingredient","de":"ingredient","it":"ingredient","nl":"ingrediënt","zh":"原料","ja":"材料","ru":"ингредиент"}', 22
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'hospitality_restaurant/kitchen_assistant/materials/marinade', 'hospitality_restaurant', 'kitchen_assistant', 'materials', 'hospitality_restaurant/kitchen_assistant/materials/marinade', NULL, '{"en":"marinade","es":"marinade","pt":"marinade","fr":"marinade","de":"marinade","it":"marinade","nl":"marinade","zh":"腌料","ja":"マリネ","ru":"маринад"}', 24
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'hospitality_restaurant/kitchen_assistant/materials/meat', 'hospitality_restaurant', 'kitchen_assistant', 'materials', 'hospitality_restaurant/kitchen_assistant/materials/meat', NULL, '{"en":"meat","es":"meat","pt":"meat","fr":"meat","de":"meat","it":"meat","nl":"vlees","zh":"肉","ja":"肉","ru":"мясо"}', 26
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'hospitality_restaurant/kitchen_assistant/materials/milk', 'hospitality_restaurant', 'kitchen_assistant', 'materials', 'hospitality_restaurant/kitchen_assistant/materials/milk', NULL, '{"en":"milk","es":"milk","pt":"milk","fr":"milk","de":"milk","it":"milk","nl":"melk","zh":"牛奶","ja":"ミルク","ru":"молоко"}', 28
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'hospitality_restaurant/kitchen_assistant/materials/mixture', 'hospitality_restaurant', 'kitchen_assistant', 'materials', 'hospitality_restaurant/kitchen_assistant/materials/mixture', NULL, '{"en":"mixture","es":"mixture","pt":"mixture","fr":"mixture","de":"mixture","it":"mixture","nl":"mengsel","zh":"混合物","ja":"ミクスチャー","ru":"смесь"}', 30
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'hospitality_restaurant/kitchen_assistant/materials/oil', 'hospitality_restaurant', 'kitchen_assistant', 'materials', 'hospitality_restaurant/kitchen_assistant/materials/oil', NULL, '{"en":"oil","es":"oil","pt":"oil","fr":"oil","de":"oil","it":"oil","nl":"olie","zh":"油","ja":"オイル","ru":"масло"}', 32
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'hospitality_restaurant/kitchen_assistant/materials/pasta', 'hospitality_restaurant', 'kitchen_assistant', 'materials', 'hospitality_restaurant/kitchen_assistant/materials/pasta', NULL, '{"en":"pasta","es":"pasta","pt":"pasta","fr":"pasta","de":"pasta","it":"pasta","nl":"pasta","zh":"意大利面","ja":"パスタ","ru":"паста"}', 34
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'hospitality_restaurant/kitchen_assistant/materials/rice', 'hospitality_restaurant', 'kitchen_assistant', 'materials', 'hospitality_restaurant/kitchen_assistant/materials/rice', NULL, '{"en":"rice","es":"rice","pt":"rice","fr":"rice","de":"rice","it":"rice","nl":"rijst","zh":"大米","ja":"ご飯","ru":"рис"}', 36
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'hospitality_restaurant/kitchen_assistant/materials/salt', 'hospitality_restaurant', 'kitchen_assistant', 'materials', 'hospitality_restaurant/kitchen_assistant/materials/salt', NULL, '{"en":"salt","es":"salt","pt":"salt","fr":"salt","de":"salt","it":"salt","nl":"zout","zh":"盐","ja":"塩","ru":"соль"}', 38
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'hospitality_restaurant/kitchen_assistant/materials/sauce', 'hospitality_restaurant', 'kitchen_assistant', 'materials', 'hospitality_restaurant/kitchen_assistant/materials/sauce', NULL, '{"en":"sauce","es":"sauce","pt":"sauce","fr":"sauce","de":"sauce","it":"sauce","nl":"saus","zh":"酱汁","ja":"ソース","ru":"соус"}', 40
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'hospitality_restaurant/kitchen_assistant/materials/seasoning', 'hospitality_restaurant', 'kitchen_assistant', 'materials', 'hospitality_restaurant/kitchen_assistant/materials/seasoning', NULL, '{"en":"seasoning","es":"seasoning","pt":"seasoning","fr":"seasoning","de":"seasoning","it":"seasoning","nl":"kruiden","zh":"调味料","ja":"シーズニング","ru":"приправа"}', 42
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'hospitality_restaurant/kitchen_assistant/materials/spices', 'hospitality_restaurant', 'kitchen_assistant', 'materials', 'hospitality_restaurant/kitchen_assistant/materials/spices', NULL, '{"en":"spices","es":"spices","pt":"spices","fr":"spices","de":"spices","it":"spices","nl":"kruiden","zh":"香料","ja":"スパイス","ru":"специи"}', 44
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'hospitality_restaurant/kitchen_assistant/materials/stock', 'hospitality_restaurant', 'kitchen_assistant', 'materials', 'hospitality_restaurant/kitchen_assistant/materials/stock', NULL, '{"en":"stock","es":"stock","pt":"stock","fr":"stock","de":"stock","it":"stock","nl":"voorraad","zh":"库存","ja":"在庫","ru":"запас"}', 46
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'hospitality_restaurant/kitchen_assistant/materials/sugar', 'hospitality_restaurant', 'kitchen_assistant', 'materials', 'hospitality_restaurant/kitchen_assistant/materials/sugar', NULL, '{"en":"sugar","es":"sugar","pt":"sugar","fr":"sugar","de":"sugar","it":"sugar","nl":"suiker","zh":"糖","ja":"砂糖","ru":"сахар"}', 48
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'hospitality_restaurant/kitchen_assistant/materials/syrup', 'hospitality_restaurant', 'kitchen_assistant', 'materials', 'hospitality_restaurant/kitchen_assistant/materials/syrup', NULL, '{"en":"syrup","es":"syrup","pt":"syrup","fr":"syrup","de":"syrup","it":"syrup","nl":"siroop","zh":"糖浆","ja":"シロップ","ru":"сироп"}', 50
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'hospitality_restaurant/kitchen_assistant/materials/topping', 'hospitality_restaurant', 'kitchen_assistant', 'materials', 'hospitality_restaurant/kitchen_assistant/materials/topping', NULL, '{"en":"topping","es":"topping","pt":"topping","fr":"topping","de":"topping","it":"topping","nl":"topping","zh":"浇头","ja":"トッピング","ru":"топпинг"}', 52
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'hospitality_restaurant/kitchen_assistant/materials/vegetables', 'hospitality_restaurant', 'kitchen_assistant', 'materials', 'hospitality_restaurant/kitchen_assistant/materials/vegetables', NULL, '{"en":"vegetables","es":"vegetables","pt":"vegetables","fr":"vegetables","de":"vegetables","it":"vegetables","nl":"groenten","zh":"蔬菜","ja":"野菜","ru":"овощи"}', 54
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'hospitality_restaurant/kitchen_assistant/materials/vinegar', 'hospitality_restaurant', 'kitchen_assistant', 'materials', 'hospitality_restaurant/kitchen_assistant/materials/vinegar', NULL, '{"en":"vinegar","es":"vinegar","pt":"vinegar","fr":"vinegar","de":"vinegar","it":"vinegar","nl":"azijn","zh":"醋","ja":"酢","ru":"уксус"}', 56
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'hospitality_restaurant/kitchen_assistant/materials/water', 'hospitality_restaurant', 'kitchen_assistant', 'materials', 'hospitality_restaurant/kitchen_assistant/materials/water', NULL, '{"en":"water","es":"agua","pt":"água","fr":"eau","de":"Wasser","it":"acqua","nl":"water","zh":"水","ja":"水","ru":"вода"}', 58
);

INSERT INTO public.sectors (id, job_id, name, icon, sort_order) VALUES (
  'waiter', 'hospitality_restaurant', '{"en":"Waiter","es":"Camarero","pt":"Garçom","fr":"Serveur","de":"Kellner","it":"Cameriere","nl":"Ober","zh":"服务员","ja":"ウェイター","ru":"Официант"}', '🥗', 3
);
INSERT INTO public.roles (id, job_id, sector_id, name, icon, sort_order) VALUES (
  'tools', 'hospitality_restaurant', 'waiter', '{"en":"Tools","es":"Herramientas","pt":"Ferramentas","fr":"Outils","de":"Werkzeuge","it":"Attrezzi","nl":"Gereedschap","zh":"工具","ja":"道具","ru":"Инструменты"}', '🔧', 0
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'hospitality_restaurant/waiter/tools/bill_holder', 'hospitality_restaurant', 'waiter', 'tools', 'hospitality_restaurant/waiter/tools/bill_holder', NULL, '{"en":"bill holder","es":"bill holder","pt":"bill holder","fr":"bill holder","de":"bill holder","it":"bill holder","nl":"rekninghouder","zh":"账单夹","ja":"ビルホルダー","ru":"держатель счетов"}', 0
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'hospitality_restaurant/waiter/tools/bottle_opener', 'hospitality_restaurant', 'waiter', 'tools', 'hospitality_restaurant/waiter/tools/bottle_opener', NULL, '{"en":"bottle opener","es":"bottle opener","pt":"bottle opener","fr":"bottle opener","de":"bottle opener","it":"bottle opener","nl":"flesopener","zh":"开瓶器","ja":"ボトルオープナー","ru":"открывалка для бутылок"}', 2
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'hospitality_restaurant/waiter/tools/card_machine', 'hospitality_restaurant', 'waiter', 'tools', 'hospitality_restaurant/waiter/tools/card_machine', NULL, '{"en":"card machine","es":"card machine","pt":"card machine","fr":"card machine","de":"card machine","it":"card machine","nl":"kaartlezer","zh":"刷卡机","ja":"カードリーダー","ru":"картридер"}', 4
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'hospitality_restaurant/waiter/tools/cash_register', 'hospitality_restaurant', 'waiter', 'tools', 'hospitality_restaurant/waiter/tools/cash_register', NULL, '{"en":"cash register","es":"cash register","pt":"cash register","fr":"cash register","de":"cash register","it":"cash register","nl":"kassa","zh":"收银机","ja":"レジスター","ru":"кассовый аппарат"}', 6
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'hospitality_restaurant/waiter/tools/cloth', 'hospitality_restaurant', 'waiter', 'tools', 'hospitality_restaurant/waiter/tools/cloth', NULL, '{"en":"cloth","es":"trapo","pt":"pano","fr":"chiffon","de":"Tuch","it":"panno","nl":"doek","zh":"布","ja":"布","ru":"ткань"}', 8
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'hospitality_restaurant/waiter/tools/corkscrew', 'hospitality_restaurant', 'waiter', 'tools', 'hospitality_restaurant/waiter/tools/corkscrew', NULL, '{"en":"corkscrew","es":"corkscrew","pt":"corkscrew","fr":"corkscrew","de":"corkscrew","it":"corkscrew","nl":"kurketrekker","zh":"开瓶器","ja":"コルクスクリュー","ru":"штопор"}', 10
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'hospitality_restaurant/waiter/tools/drink_tray', 'hospitality_restaurant', 'waiter', 'tools', 'hospitality_restaurant/waiter/tools/drink_tray', NULL, '{"en":"drink tray","es":"drink tray","pt":"drink tray","fr":"drink tray","de":"drink tray","it":"drink tray","nl":"drankdienblad","zh":"饮料托盘","ja":"ドリンクトレイ","ru":"поднос для напитков"}', 12
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'hospitality_restaurant/waiter/tools/lighter', 'hospitality_restaurant', 'waiter', 'tools', 'hospitality_restaurant/waiter/tools/lighter', NULL, '{"en":"lighter","es":"lighter","pt":"lighter","fr":"lighter","de":"lighter","it":"lighter","nl":"aansteker","zh":"打火机","ja":"ライター","ru":"зажигалка"}', 14
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'hospitality_restaurant/waiter/tools/menu_holder', 'hospitality_restaurant', 'waiter', 'tools', 'hospitality_restaurant/waiter/tools/menu_holder', NULL, '{"en":"menu holder","es":"menu holder","pt":"menu holder","fr":"menu holder","de":"menu holder","it":"menu holder","nl":"menuhouder","zh":"菜单夹","ja":"メニューホルダー","ru":"держатель меню"}', 16
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'hospitality_restaurant/waiter/tools/napkin_holder', 'hospitality_restaurant', 'waiter', 'tools', 'hospitality_restaurant/waiter/tools/napkin_holder', NULL, '{"en":"napkin holder","es":"napkin holder","pt":"napkin holder","fr":"napkin holder","de":"napkin holder","it":"napkin holder","nl":"servethouder","zh":"餐巾架","ja":"ナプキンホルダー","ru":"держатель салфеток"}', 18
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'hospitality_restaurant/waiter/tools/notepad', 'hospitality_restaurant', 'waiter', 'tools', 'hospitality_restaurant/waiter/tools/notepad', NULL, '{"en":"notepad","es":"notepad","pt":"notepad","fr":"notepad","de":"notepad","it":"notepad","nl":"kladblok","zh":"便签本","ja":"メモ帳","ru":"блокнот"}', 20
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'hospitality_restaurant/waiter/tools/order_pad', 'hospitality_restaurant', 'waiter', 'tools', 'hospitality_restaurant/waiter/tools/order_pad', NULL, '{"en":"order pad","es":"order pad","pt":"order pad","fr":"order pad","de":"order pad","it":"order pad","nl":"bestellijst","zh":"点餐本","ja":"オーダーパッド","ru":"блокнот для заказов"}', 22
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'hospitality_restaurant/waiter/tools/pen', 'hospitality_restaurant', 'waiter', 'tools', 'hospitality_restaurant/waiter/tools/pen', NULL, '{"en":"pen","es":"bolígrafo","pt":"caneta","fr":"stylo","de":"Stift","it":"penna","nl":"pen","zh":"钢笔","ja":"ペン","ru":"ручка"}', 24
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'hospitality_restaurant/waiter/tools/pos_system', 'hospitality_restaurant', 'waiter', 'tools', 'hospitality_restaurant/waiter/tools/pos_system', NULL, '{"en":"pos system","es":"pos system","pt":"pos system","fr":"pos system","de":"pos system","it":"pos system","nl":"kassasysteem","zh":"销售点系统","ja":"POSシステム","ru":"POS-система"}', 26
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'hospitality_restaurant/waiter/tools/printer', 'hospitality_restaurant', 'waiter', 'tools', 'hospitality_restaurant/waiter/tools/printer', NULL, '{"en":"printer","es":"impresora","pt":"impressora","fr":"imprimante","de":"Drucker","it":"stampante","nl":"printer","zh":"打印机","ja":"プリンター","ru":"принтер"}', 28
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'hospitality_restaurant/waiter/tools/scanner', 'hospitality_restaurant', 'waiter', 'tools', 'hospitality_restaurant/waiter/tools/scanner', NULL, '{"en":"scanner","es":"escáner","pt":"scanner","fr":"scanner","de":"Scanner","it":"scanner","nl":"scanner","zh":"扫描仪","ja":"スキャナー","ru":"сканер"}', 30
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'hospitality_restaurant/waiter/tools/service_tray', 'hospitality_restaurant', 'waiter', 'tools', 'hospitality_restaurant/waiter/tools/service_tray', NULL, '{"en":"service tray","es":"service tray","pt":"service tray","fr":"service tray","de":"service tray","it":"service tray","nl":"bedieningsdienblad","zh":"服务托盘","ja":"サービストレイ","ru":"сервировочный поднос"}', 32
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'hospitality_restaurant/waiter/tools/tablet', 'hospitality_restaurant', 'waiter', 'tools', 'hospitality_restaurant/waiter/tools/tablet', NULL, '{"en":"tablet","es":"tablet","pt":"tablet","fr":"tablet","de":"tablet","it":"tablet","nl":"tablet","zh":"平板电脑","ja":"タブレット","ru":"планшет"}', 34
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'hospitality_restaurant/waiter/tools/tray', 'hospitality_restaurant', 'waiter', 'tools', 'hospitality_restaurant/waiter/tools/tray', NULL, '{"en":"tray","es":"bandeja","pt":"bandeja","fr":"plateau","de":"Tablett","it":"vassoio","nl":"dienblad","zh":"托盘","ja":"トレイ","ru":"поднос"}', 36
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'hospitality_restaurant/waiter/tools/tray_stand', 'hospitality_restaurant', 'waiter', 'tools', 'hospitality_restaurant/waiter/tools/tray_stand', NULL, '{"en":"tray stand","es":"tray stand","pt":"tray stand","fr":"tray stand","de":"tray stand","it":"tray stand","nl":"dienblad standaard","zh":"托盘架","ja":"トレイスタンド","ru":"подставка для подносов"}', 38
);
INSERT INTO public.roles (id, job_id, sector_id, name, icon, sort_order) VALUES (
  'materials', 'hospitality_restaurant', 'waiter', '{"en":"Materials","es":"Materiales","pt":"Materiais","fr":"Matériaux","de":"Materialien","it":"Materiali","nl":"Materialen","zh":"材料","ja":"材料","ru":"Материалы"}', '📦', 1
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'hospitality_restaurant/waiter/materials/beer', 'hospitality_restaurant', 'waiter', 'materials', 'hospitality_restaurant/waiter/materials/beer', NULL, '{"en":"beer","es":"beer","pt":"beer","fr":"beer","de":"beer","it":"beer","nl":"bier","zh":"啤酒","ja":"ビール","ru":"пиво"}', 0
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'hospitality_restaurant/waiter/materials/bread', 'hospitality_restaurant', 'waiter', 'materials', 'hospitality_restaurant/waiter/materials/bread', NULL, '{"en":"bread","es":"bread","pt":"bread","fr":"bread","de":"bread","it":"bread","nl":"brood","zh":"面包","ja":"パン","ru":"хлеб"}', 2
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'hospitality_restaurant/waiter/materials/cocktails', 'hospitality_restaurant', 'waiter', 'materials', 'hospitality_restaurant/waiter/materials/cocktails', NULL, '{"en":"cocktails","es":"cocktails","pt":"cocktails","fr":"cocktails","de":"cocktails","it":"cocktails","nl":"cocktails","zh":"鸡尾酒","ja":"カクテル","ru":"коктейли"}', 4
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'hospitality_restaurant/waiter/materials/coffee', 'hospitality_restaurant', 'waiter', 'materials', 'hospitality_restaurant/waiter/materials/coffee', NULL, '{"en":"coffee","es":"coffee","pt":"coffee","fr":"coffee","de":"coffee","it":"coffee","nl":"koffie","zh":"咖啡","ja":"コーヒー","ru":"кофе"}', 6
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'hospitality_restaurant/waiter/materials/condiments', 'hospitality_restaurant', 'waiter', 'materials', 'hospitality_restaurant/waiter/materials/condiments', NULL, '{"en":"condiments","es":"condiments","pt":"condiments","fr":"condiments","de":"condiments","it":"condiments","nl":"smaakmakers","zh":"调味品","ja":"調味料","ru":"приправы"}', 8
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'hospitality_restaurant/waiter/materials/cups', 'hospitality_restaurant', 'waiter', 'materials', 'hospitality_restaurant/waiter/materials/cups', NULL, '{"en":"cups","es":"cups","pt":"cups","fr":"cups","de":"cups","it":"cups","nl":"bekers","zh":"杯子","ja":"カップ","ru":"стаканы"}', 10
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'hospitality_restaurant/waiter/materials/cutlery', 'hospitality_restaurant', 'waiter', 'materials', 'hospitality_restaurant/waiter/materials/cutlery', NULL, '{"en":"cutlery","es":"cutlery","pt":"cutlery","fr":"cutlery","de":"cutlery","it":"cutlery","nl":"bestek","zh":"餐具","ja":"カトラリー","ru":"столовые приборы"}', 12
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'hospitality_restaurant/waiter/materials/desserts', 'hospitality_restaurant', 'waiter', 'materials', 'hospitality_restaurant/waiter/materials/desserts', NULL, '{"en":"desserts","es":"desserts","pt":"desserts","fr":"desserts","de":"desserts","it":"desserts","nl":"desserts","zh":"甜点","ja":"デザート","ru":"десерты"}', 14
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'hospitality_restaurant/waiter/materials/drinks', 'hospitality_restaurant', 'waiter', 'materials', 'hospitality_restaurant/waiter/materials/drinks', NULL, '{"en":"drinks","es":"drinks","pt":"drinks","fr":"drinks","de":"drinks","it":"drinks","nl":"drankjes","zh":"饮料","ja":"ドリンク","ru":"напитки"}', 16
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'hospitality_restaurant/waiter/materials/garnish', 'hospitality_restaurant', 'waiter', 'materials', 'hospitality_restaurant/waiter/materials/garnish', NULL, '{"en":"garnish","es":"garnish","pt":"garnish","fr":"garnish","de":"garnish","it":"garnish","nl":"garnering","zh":"装饰","ja":"ガーニッシュ","ru":"украшение"}', 18
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'hospitality_restaurant/waiter/materials/glasses', 'hospitality_restaurant', 'waiter', 'materials', 'hospitality_restaurant/waiter/materials/glasses', NULL, '{"en":"glasses","es":"glasses","pt":"glasses","fr":"glasses","de":"glasses","it":"glasses","nl":"glazen","zh":"眼镜","ja":"グラス","ru":"очки"}', 20
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'hospitality_restaurant/waiter/materials/ice', 'hospitality_restaurant', 'waiter', 'materials', 'hospitality_restaurant/waiter/materials/ice', NULL, '{"en":"ice","es":"hielo","pt":"gelo","fr":"glace","de":"Eis","it":"ghiaccio","nl":"ijs","zh":"冰块","ja":"氷","ru":"лед"}', 22
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'hospitality_restaurant/waiter/materials/juice', 'hospitality_restaurant', 'waiter', 'materials', 'hospitality_restaurant/waiter/materials/juice', NULL, '{"en":"juice","es":"juice","pt":"juice","fr":"juice","de":"juice","it":"juice","nl":"sap","zh":"果汁","ja":"ジュース","ru":"сок"}', 24
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'hospitality_restaurant/waiter/materials/lemon', 'hospitality_restaurant', 'waiter', 'materials', 'hospitality_restaurant/waiter/materials/lemon', NULL, '{"en":"lemon","es":"lemon","pt":"lemon","fr":"lemon","de":"lemon","it":"lemon","nl":"citroen","zh":"柠檬","ja":"レモン","ru":"лимон"}', 26
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'hospitality_restaurant/waiter/materials/lime', 'hospitality_restaurant', 'waiter', 'materials', 'hospitality_restaurant/waiter/materials/lime', NULL, '{"en":"lime","es":"lime","pt":"lime","fr":"lime","de":"lime","it":"lime","nl":"kalk","zh":"石灰","ja":"ライム","ru":"известь"}', 28
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'hospitality_restaurant/waiter/materials/menu', 'hospitality_restaurant', 'waiter', 'materials', 'hospitality_restaurant/waiter/materials/menu', NULL, '{"en":"menu","es":"menú","pt":"cardápio","fr":"menu","de":"Speisekarte","it":"menu","nl":"menu","zh":"菜单","ja":"メニュー","ru":"меню"}', 30
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'hospitality_restaurant/waiter/materials/mixer', 'hospitality_restaurant', 'waiter', 'materials', 'hospitality_restaurant/waiter/materials/mixer', NULL, '{"en":"mixer","es":"mezclador","pt":"betoneira","fr":"mélangeur","de":"Mischer","it":"miscelatore","nl":"mixer","zh":"搅拌机","ja":"ミキサー","ru":"миксер"}', 32
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'hospitality_restaurant/waiter/materials/napkins', 'hospitality_restaurant', 'waiter', 'materials', 'hospitality_restaurant/waiter/materials/napkins', NULL, '{"en":"napkins","es":"napkins","pt":"napkins","fr":"napkins","de":"napkins","it":"napkins","nl":"servetten","zh":"餐巾","ja":"ナプキン","ru":"салфетки"}', 34
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'hospitality_restaurant/waiter/materials/pepper', 'hospitality_restaurant', 'waiter', 'materials', 'hospitality_restaurant/waiter/materials/pepper', NULL, '{"en":"pepper","es":"pepper","pt":"pepper","fr":"pepper","de":"pepper","it":"pepper","nl":"peper","zh":"胡椒","ja":"コショウ","ru":"перец"}', 36
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'hospitality_restaurant/waiter/materials/plates', 'hospitality_restaurant', 'waiter', 'materials', 'hospitality_restaurant/waiter/materials/plates', NULL, '{"en":"plates","es":"plates","pt":"plates","fr":"plates","de":"plates","it":"plates","nl":"borden","zh":"盘子","ja":"プレート","ru":"тарелки"}', 38
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'hospitality_restaurant/waiter/materials/salt', 'hospitality_restaurant', 'waiter', 'materials', 'hospitality_restaurant/waiter/materials/salt', NULL, '{"en":"salt","es":"salt","pt":"salt","fr":"salt","de":"salt","it":"salt","nl":"zout","zh":"盐","ja":"塩","ru":"соль"}', 40
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'hospitality_restaurant/waiter/materials/sauces', 'hospitality_restaurant', 'waiter', 'materials', 'hospitality_restaurant/waiter/materials/sauces', NULL, '{"en":"sauces","es":"sauces","pt":"sauces","fr":"sauces","de":"sauces","it":"sauces","nl":"sauzen","zh":"酱汁","ja":"ソース","ru":"соусы"}', 42
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'hospitality_restaurant/waiter/materials/soda', 'hospitality_restaurant', 'waiter', 'materials', 'hospitality_restaurant/waiter/materials/soda', NULL, '{"en":"soda","es":"soda","pt":"soda","fr":"soda","de":"soda","it":"soda","nl":"frisdrank","zh":"苏打水","ja":"ソーダ","ru":"газировка"}', 44
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'hospitality_restaurant/waiter/materials/straws', 'hospitality_restaurant', 'waiter', 'materials', 'hospitality_restaurant/waiter/materials/straws', NULL, '{"en":"straws","es":"straws","pt":"straws","fr":"straws","de":"straws","it":"straws","nl":"rietjes","zh":"吸管","ja":"ストロー","ru":"соломинки"}', 46
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'hospitality_restaurant/waiter/materials/sugar_packets', 'hospitality_restaurant', 'waiter', 'materials', 'hospitality_restaurant/waiter/materials/sugar_packets', NULL, '{"en":"sugar packets","es":"sugar packets","pt":"sugar packets","fr":"sugar packets","de":"sugar packets","it":"sugar packets","nl":"suikerzakjes","zh":"糖包","ja":"シュガーパケット","ru":"пакетики с сахаром"}', 48
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'hospitality_restaurant/waiter/materials/tableware', 'hospitality_restaurant', 'waiter', 'materials', 'hospitality_restaurant/waiter/materials/tableware', NULL, '{"en":"tableware","es":"tableware","pt":"tableware","fr":"tableware","de":"tableware","it":"tableware","nl":"tafelgerei","zh":"餐具","ja":"テーブルウェア","ru":"столовая посуда"}', 50
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'hospitality_restaurant/waiter/materials/tea', 'hospitality_restaurant', 'waiter', 'materials', 'hospitality_restaurant/waiter/materials/tea', NULL, '{"en":"tea","es":"tea","pt":"tea","fr":"tea","de":"tea","it":"tea","nl":"thee","zh":"茶","ja":"お茶","ru":"чай"}', 52
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'hospitality_restaurant/waiter/materials/utensils', 'hospitality_restaurant', 'waiter', 'materials', 'hospitality_restaurant/waiter/materials/utensils', NULL, '{"en":"utensils","es":"utensils","pt":"utensils","fr":"utensils","de":"utensils","it":"utensils","nl":"keukengerei","zh":"器具","ja":"調理器具","ru":"посуда"}', 54
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'hospitality_restaurant/waiter/materials/water', 'hospitality_restaurant', 'waiter', 'materials', 'hospitality_restaurant/waiter/materials/water', NULL, '{"en":"water","es":"agua","pt":"água","fr":"eau","de":"Wasser","it":"acqua","nl":"water","zh":"水","ja":"水","ru":"вода"}', 56
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'hospitality_restaurant/waiter/materials/wine', 'hospitality_restaurant', 'waiter', 'materials', 'hospitality_restaurant/waiter/materials/wine', NULL, '{"en":"wine","es":"wine","pt":"wine","fr":"wine","de":"wine","it":"wine","nl":"wijn","zh":"葡萄酒","ja":"ワイン","ru":"вино"}', 58
);

INSERT INTO public.jobs (id, name, icon, image_url, sort_order) VALUES (
  'industrial_processing', '{"en":"Industrial Processing","es":"Industria","pt":"Indústria","fr":"Industrie","de":"Industrie","it":"Industria","nl":"Industriële verwerking","zh":"工业加工","ja":"工業加工","ru":"Промышленная обработка"}', '🏭', 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=800', 7
);

INSERT INTO public.sectors (id, job_id, name, icon, sort_order) VALUES (
  'fish_processing', 'industrial_processing', '{"en":"Fish Processing","es":"Procesamiento de Pescado","pt":"Peixe","fr":"Poisson","de":"Fischverarbeitung","it":"Pesce","nl":"Visverwerking","zh":"鱼类加工","ja":"魚類加工","ru":"Рыбопереработка"}', '🐟', 0
);
INSERT INTO public.roles (id, job_id, sector_id, name, icon, sort_order) VALUES (
  'tools', 'industrial_processing', 'fish_processing', '{"en":"Tools","es":"Herramientas","pt":"Ferramentas","fr":"Outils","de":"Werkzeuge","it":"Attrezzi","nl":"Gereedschap","zh":"工具","ja":"道具","ru":"Инструменты"}', '🔧', 0
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'industrial_processing/fish_processing/tools/box', 'industrial_processing', 'fish_processing', 'tools', 'industrial_processing/fish_processing/tools/box', NULL, '{"en":"box","es":"caja","pt":"caixa","fr":"boîte","de":"Kasten","it":"scatola","nl":"doos","zh":"箱子","ja":"ボックス","ru":"коробка"}', 0
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'industrial_processing/fish_processing/tools/brush', 'industrial_processing', 'fish_processing', 'tools', 'industrial_processing/fish_processing/tools/brush', NULL, '{"en":"brush","es":"cepillo","pt":"escova","fr":"brosse","de":"Bürste","it":"spazzola","nl":"borstel","zh":"刷子","ja":"ブラシ","ru":"кисть"}', 2
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'industrial_processing/fish_processing/tools/bucket', 'industrial_processing', 'fish_processing', 'tools', 'industrial_processing/fish_processing/tools/bucket', NULL, '{"en":"bucket","es":"cubo","pt":"balde","fr":"seau","de":"Eimer","it":"secchio","nl":"emmer","zh":"水桶","ja":"バケツ","ru":"ведро"}', 4
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'industrial_processing/fish_processing/tools/cart', 'industrial_processing', 'fish_processing', 'tools', 'industrial_processing/fish_processing/tools/cart', NULL, '{"en":"cart","es":"carrito","pt":"carrinho","fr":"chariot","de":"Wagen","it":"carrello","nl":"kar","zh":"推车","ja":"カート","ru":"тележка"}', 6
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'industrial_processing/fish_processing/tools/container', 'industrial_processing', 'fish_processing', 'tools', 'industrial_processing/fish_processing/tools/container', NULL, '{"en":"container","es":"contenedor","pt":"recipiente","fr":"conteneur","de":"Behälter","it":"contenitore","nl":"container","zh":"容器","ja":"コンテナ","ru":"контейнер"}', 8
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'industrial_processing/fish_processing/tools/cooling_box', 'industrial_processing', 'fish_processing', 'tools', 'industrial_processing/fish_processing/tools/cooling_box', NULL, '{"en":"cooling box","es":"cooling box","pt":"cooling box","fr":"cooling box","de":"cooling box","it":"cooling box","nl":"koelbox","zh":"冷却箱","ja":"クーリングボックス","ru":"холодильный ящик"}', 10
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'industrial_processing/fish_processing/tools/cutter', 'industrial_processing', 'fish_processing', 'tools', 'industrial_processing/fish_processing/tools/cutter', NULL, '{"en":"cutter","es":"cortador","pt":"cortador","fr":"cutter","de":"Cutter","it":"taglierino","nl":"snijder","zh":"切割机","ja":"カッター","ru":"резак"}', 12
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'industrial_processing/fish_processing/tools/cutting_board', 'industrial_processing', 'fish_processing', 'tools', 'industrial_processing/fish_processing/tools/cutting_board', NULL, '{"en":"cutting board","es":"cutting board","pt":"cutting board","fr":"cutting board","de":"cutting board","it":"cutting board","nl":"snijplank","zh":"切菜板","ja":"まな板","ru":"разделочная доска"}', 14
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'industrial_processing/fish_processing/tools/filter', 'industrial_processing', 'fish_processing', 'tools', 'industrial_processing/fish_processing/tools/filter', NULL, '{"en":"filter","es":"filtro","pt":"filtro","fr":"filtre","de":"Filter","it":"filtro","nl":"filter","zh":"过滤器","ja":"フィルター","ru":"фильтр"}', 16
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'industrial_processing/fish_processing/tools/freezer', 'industrial_processing', 'fish_processing', 'tools', 'industrial_processing/fish_processing/tools/freezer', NULL, '{"en":"freezer","es":"congelador","pt":"freezer","fr":"congélateur","de":"Gefriergerät","it":"freezer","nl":"vriezer","zh":"冷冻机","ja":"冷凍庫","ru":"морозильник"}', 18
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'industrial_processing/fish_processing/tools/ice_box', 'industrial_processing', 'fish_processing', 'tools', 'industrial_processing/fish_processing/tools/ice_box', NULL, '{"en":"ice box","es":"ice box","pt":"ice box","fr":"ice box","de":"ice box","it":"ice box","nl":"koelbox","zh":"冰箱","ja":"アイスボックス","ru":"ящик со льдом"}', 20
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'industrial_processing/fish_processing/tools/ice_machine', 'industrial_processing', 'fish_processing', 'tools', 'industrial_processing/fish_processing/tools/ice_machine', NULL, '{"en":"ice machine","es":"ice machine","pt":"ice machine","fr":"ice machine","de":"ice machine","it":"ice machine","nl":"ijsmachine","zh":"制冰机","ja":"製氷機","ru":"льдогенератор"}', 22
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'industrial_processing/fish_processing/tools/knife', 'industrial_processing', 'fish_processing', 'tools', 'industrial_processing/fish_processing/tools/knife', NULL, '{"en":"knife","es":"cuchillo","pt":"faca","fr":"couteau","de":"Messer","it":"coltello","nl":"mes","zh":"刀","ja":"ナイフ","ru":"нож"}', 24
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'industrial_processing/fish_processing/tools/machine', 'industrial_processing', 'fish_processing', 'tools', 'industrial_processing/fish_processing/tools/machine', NULL, '{"en":"machine","es":"machine","pt":"machine","fr":"machine","de":"machine","it":"machine","nl":"machine","zh":"机器","ja":"機械","ru":"машина"}', 26
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'industrial_processing/fish_processing/tools/pallet', 'industrial_processing', 'fish_processing', 'tools', 'industrial_processing/fish_processing/tools/pallet', NULL, '{"en":"pallet","es":"palé","pt":"palete","fr":"palette","de":"Palette","it":"pallet","nl":"pallet","zh":"托盘","ja":"パレット","ru":"паллет"}', 28
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'industrial_processing/fish_processing/tools/pump', 'industrial_processing', 'fish_processing', 'tools', 'industrial_processing/fish_processing/tools/pump', NULL, '{"en":"pump","es":"bomba","pt":"bomba","fr":"pompe","de":"Pumpe","it":"pompa","nl":"pomp","zh":"泵","ja":"ポンプ","ru":"насос"}', 30
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'industrial_processing/fish_processing/tools/rack', 'industrial_processing', 'fish_processing', 'tools', 'industrial_processing/fish_processing/tools/rack', NULL, '{"en":"rack","es":"estante","pt":"prateleira","fr":"étagère","de":"Regal","it":"scaffale","nl":"rek","zh":"货架","ja":"ラック","ru":"стеллаж"}', 32
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'industrial_processing/fish_processing/tools/scale', 'industrial_processing', 'fish_processing', 'tools', 'industrial_processing/fish_processing/tools/scale', NULL, '{"en":"scale","es":"báscula","pt":"balança","fr":"balance","de":"Waage","it":"bilancia","nl":"weegschaal","zh":"秤","ja":"スケール","ru":"весы"}', 34
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'industrial_processing/fish_processing/tools/shelf', 'industrial_processing', 'fish_processing', 'tools', 'industrial_processing/fish_processing/tools/shelf', NULL, '{"en":"shelf","es":"shelf","pt":"shelf","fr":"shelf","de":"shelf","it":"shelf","nl":"plank","zh":"架子","ja":"棚","ru":"полка"}', 36
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'industrial_processing/fish_processing/tools/sink', 'industrial_processing', 'fish_processing', 'tools', 'industrial_processing/fish_processing/tools/sink', NULL, '{"en":"sink","es":"sink","pt":"sink","fr":"sink","de":"sink","it":"sink","nl":"gootsteen","zh":"水槽","ja":"シンク","ru":"раковина"}', 38
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'industrial_processing/fish_processing/tools/spray', 'industrial_processing', 'fish_processing', 'tools', 'industrial_processing/fish_processing/tools/spray', NULL, '{"en":"spray","es":"spray","pt":"spray","fr":"spray","de":"Spray","it":"spray","nl":"spray","zh":"喷雾","ja":"スプレー","ru":"спрей"}', 40
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'industrial_processing/fish_processing/tools/storage', 'industrial_processing', 'fish_processing', 'tools', 'industrial_processing/fish_processing/tools/storage', NULL, '{"en":"storage","es":"storage","pt":"storage","fr":"storage","de":"storage","it":"storage","nl":"opslag","zh":"储存","ja":"保管","ru":"хранение"}', 42
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'industrial_processing/fish_processing/tools/table', 'industrial_processing', 'fish_processing', 'tools', 'industrial_processing/fish_processing/tools/table', NULL, '{"en":"table","es":"mesa","pt":"mesa","fr":"table","de":"Tisch","it":"tavolo","nl":"tafel","zh":"桌子","ja":"テーブル","ru":"стол"}', 44
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'industrial_processing/fish_processing/tools/tank', 'industrial_processing', 'fish_processing', 'tools', 'industrial_processing/fish_processing/tools/tank', NULL, '{"en":"tank","es":"tanque","pt":"tanque","fr":"réservoir","de":"Tank","it":"serbatoio","nl":"tank","zh":"容器","ja":"タンク","ru":"резервуар"}', 46
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'industrial_processing/fish_processing/tools/tray', 'industrial_processing', 'fish_processing', 'tools', 'industrial_processing/fish_processing/tools/tray', NULL, '{"en":"tray","es":"bandeja","pt":"bandeja","fr":"plateau","de":"Tablett","it":"vassoio","nl":"dienblad","zh":"托盘","ja":"トレイ","ru":"поднос"}', 48
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'industrial_processing/fish_processing/tools/trolley', 'industrial_processing', 'fish_processing', 'tools', 'industrial_processing/fish_processing/tools/trolley', NULL, '{"en":"trolley","es":"carrito","pt":"carrinho","fr":"chariot","de":"Trolley","it":"carrello","nl":"trolley","zh":"手推车","ja":"トロリー","ru":"тележка"}', 50
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'industrial_processing/fish_processing/tools/water_hose', 'industrial_processing', 'fish_processing', 'tools', 'industrial_processing/fish_processing/tools/water_hose', NULL, '{"en":"water hose","es":"water hose","pt":"water hose","fr":"water hose","de":"water hose","it":"water hose","nl":"waterslang","zh":"水管","ja":"水ホース","ru":"водяной шланг"}', 52
);
INSERT INTO public.roles (id, job_id, sector_id, name, icon, sort_order) VALUES (
  'materials', 'industrial_processing', 'fish_processing', '{"en":"Materials","es":"Materiales","pt":"Materiais","fr":"Matériaux","de":"Materialien","it":"Materiali","nl":"Materialen","zh":"材料","ja":"材料","ru":"Материалы"}', '📦', 1
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'industrial_processing/fish_processing/materials/apron', 'industrial_processing', 'fish_processing', 'materials', 'industrial_processing/fish_processing/materials/apron', NULL, '{"en":"apron","es":"delantal","pt":"avental","fr":"tablier","de":"Schürze","it":"grembiule","nl":"schort","zh":"围裙","ja":"エプロン","ru":"фартук"}', 0
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'industrial_processing/fish_processing/materials/bag', 'industrial_processing', 'fish_processing', 'materials', 'industrial_processing/fish_processing/materials/bag', NULL, '{"en":"bag","es":"bolsa","pt":"saco","fr":"sac","de":"Tasche","it":"borsa","nl":"tas","zh":"袋子","ja":"バッグ","ru":"сумка"}', 2
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'industrial_processing/fish_processing/materials/boots', 'industrial_processing', 'fish_processing', 'materials', 'industrial_processing/fish_processing/materials/boots', NULL, '{"en":"boots","es":"botas","pt":"botas","fr":"bottes","de":"Stiefel","it":"stivali","nl":"laarzen","zh":"靴子","ja":"ブーツ","ru":"ботинки"}', 4
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'industrial_processing/fish_processing/materials/cleaner', 'industrial_processing', 'fish_processing', 'materials', 'industrial_processing/fish_processing/materials/cleaner', NULL, '{"en":"cleaner","es":"cleaner","pt":"cleaner","fr":"cleaner","de":"cleaner","it":"cleaner","nl":"reiniger","zh":"清洁剂","ja":"洗浄剤","ru":"чистящее средство"}', 6
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'industrial_processing/fish_processing/materials/cloth', 'industrial_processing', 'fish_processing', 'materials', 'industrial_processing/fish_processing/materials/cloth', NULL, '{"en":"cloth","es":"trapo","pt":"pano","fr":"chiffon","de":"Tuch","it":"panno","nl":"doek","zh":"布","ja":"布","ru":"ткань"}', 8
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'industrial_processing/fish_processing/materials/gloves', 'industrial_processing', 'fish_processing', 'materials', 'industrial_processing/fish_processing/materials/gloves', NULL, '{"en":"gloves","es":"guantes","pt":"luvas","fr":"gants","de":"Handschuhe","it":"guanti","nl":"handschoenen","zh":"手套","ja":"手袋","ru":"перчатки"}', 10
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'industrial_processing/fish_processing/materials/goggles', 'industrial_processing', 'fish_processing', 'materials', 'industrial_processing/fish_processing/materials/goggles', NULL, '{"en":"goggles","es":"gafas protectoras","pt":"óculos de proteção","fr":"lunettes","de":"Schutzbrille","it":"occhiali","nl":"veiligheidsbril","zh":"护目镜","ja":"ゴーグル","ru":"защитные очки"}', 12
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'industrial_processing/fish_processing/materials/helmet', 'industrial_processing', 'fish_processing', 'materials', 'industrial_processing/fish_processing/materials/helmet', NULL, '{"en":"helmet","es":"casco","pt":"capacete","fr":"casque","de":"Helm","it":"casco","nl":"helm","zh":"安全帽","ja":"ヘルメット","ru":"каска"}', 14
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'industrial_processing/fish_processing/materials/ice', 'industrial_processing', 'fish_processing', 'materials', 'industrial_processing/fish_processing/materials/ice', NULL, '{"en":"ice","es":"hielo","pt":"gelo","fr":"glace","de":"Eis","it":"ghiaccio","nl":"ijs","zh":"冰块","ja":"氷","ru":"лед"}', 16
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'industrial_processing/fish_processing/materials/label', 'industrial_processing', 'fish_processing', 'materials', 'industrial_processing/fish_processing/materials/label', NULL, '{"en":"label","es":"etiqueta","pt":"etiqueta","fr":"étiquette","de":"Etikett","it":"etichetta","nl":"etiket","zh":"标签","ja":"ラベル","ru":"этикетка"}', 18
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'industrial_processing/fish_processing/materials/marker', 'industrial_processing', 'fish_processing', 'materials', 'industrial_processing/fish_processing/materials/marker', NULL, '{"en":"marker","es":"marcador","pt":"marcador","fr":"marqueur","de":"Marker","it":"pennarello","nl":"marker","zh":"记号笔","ja":"マーカー","ru":"маркер"}', 20
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'industrial_processing/fish_processing/materials/mask', 'industrial_processing', 'fish_processing', 'materials', 'industrial_processing/fish_processing/materials/mask', NULL, '{"en":"mask","es":"mascarilla","pt":"máscara","fr":"masque","de":"Maske","it":"maschera","nl":"masker","zh":"口罩","ja":"マスク","ru":"маска"}', 22
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'industrial_processing/fish_processing/materials/plastic', 'industrial_processing', 'fish_processing', 'materials', 'industrial_processing/fish_processing/materials/plastic', NULL, '{"en":"plastic","es":"plastic","pt":"plastic","fr":"plastic","de":"plastic","it":"plastic","nl":"plastic","zh":"塑料","ja":"プラスチック","ru":"пластик"}', 24
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'industrial_processing/fish_processing/materials/seal', 'industrial_processing', 'fish_processing', 'materials', 'industrial_processing/fish_processing/materials/seal', NULL, '{"en":"seal","es":"seal","pt":"seal","fr":"seal","de":"seal","it":"seal","nl":"afdichting","zh":"密封件","ja":"シール","ru":"уплотнение"}', 26
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'industrial_processing/fish_processing/materials/tape', 'industrial_processing', 'fish_processing', 'materials', 'industrial_processing/fish_processing/materials/tape', NULL, '{"en":"tape","es":"cinta","pt":"fita","fr":"ruban","de":"Klebeband","it":"nastro","nl":"tape","zh":"胶带","ja":"テープ","ru":"лента"}', 28
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'industrial_processing/fish_processing/materials/tool_kit', 'industrial_processing', 'fish_processing', 'materials', 'industrial_processing/fish_processing/materials/tool_kit', NULL, '{"en":"tool kit","es":"tool kit","pt":"tool kit","fr":"tool kit","de":"tool kit","it":"tool kit","nl":"gereedschapsset","zh":"工具套装","ja":"ツールキット","ru":"набор инструментов"}', 30
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'industrial_processing/fish_processing/materials/vest', 'industrial_processing', 'fish_processing', 'materials', 'industrial_processing/fish_processing/materials/vest', NULL, '{"en":"vest","es":"chaleco","pt":"colete","fr":"gilet","de":"Weste","it":"gilet","nl":"vest","zh":"背心","ja":"ベスト","ru":"жилет"}', 32
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'industrial_processing/fish_processing/materials/wrap', 'industrial_processing', 'fish_processing', 'materials', 'industrial_processing/fish_processing/materials/wrap', NULL, '{"en":"wrap","es":"wrap","pt":"wrap","fr":"wrap","de":"wrap","it":"wrap","nl":"folie","zh":"包装","ja":"ラップ","ru":"обертка"}', 34
);

INSERT INTO public.sectors (id, job_id, name, icon, sort_order) VALUES (
  'mining_blasting', 'industrial_processing', '{"en":"Mining Blasting","es":"Explosivos","pt":"Explosivos","fr":"Minage","de":"Sprengung","it":"Brillamento","nl":"Mijnbouw springen","zh":"矿山爆破","ja":"採掘爆破","ru":"Горнодобывающие взрывные работы"}', '💥', 1
);
INSERT INTO public.roles (id, job_id, sector_id, name, icon, sort_order) VALUES (
  'tools', 'industrial_processing', 'mining_blasting', '{"en":"Tools","es":"Herramientas","pt":"Ferramentas","fr":"Outils","de":"Werkzeuge","it":"Attrezzi","nl":"Gereedschap","zh":"工具","ja":"道具","ru":"Инструменты"}', '🔧', 0
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'industrial_processing/mining_blasting/tools/alarm', 'industrial_processing', 'mining_blasting', 'tools', 'industrial_processing/mining_blasting/tools/alarm', NULL, '{"en":"alarm","es":"alarm","pt":"alarm","fr":"alarm","de":"alarm","it":"alarm","nl":"alarm","zh":"警报器","ja":"アラーム","ru":"сигнализация"}', 0
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'industrial_processing/mining_blasting/tools/battery', 'industrial_processing', 'mining_blasting', 'tools', 'industrial_processing/mining_blasting/tools/battery', NULL, '{"en":"battery","es":"battery","pt":"battery","fr":"battery","de":"battery","it":"battery","nl":"batterij","zh":"电池","ja":"バッテリー","ru":"батарея"}', 2
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'industrial_processing/mining_blasting/tools/blasting_cap', 'industrial_processing', 'mining_blasting', 'tools', 'industrial_processing/mining_blasting/tools/blasting_cap', NULL, '{"en":"blasting cap","es":"blasting cap","pt":"blasting cap","fr":"blasting cap","de":"blasting cap","it":"blasting cap","nl":"ontsteker","zh":"雷管","ja":"雷管","ru":"детонатор"}', 4
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'industrial_processing/mining_blasting/tools/cable', 'industrial_processing', 'mining_blasting', 'tools', 'industrial_processing/mining_blasting/tools/cable', NULL, '{"en":"cable","es":"cable","pt":"cable","fr":"cable","de":"cable","it":"cable","nl":"kabel","zh":"电缆","ja":"ケーブル","ru":"кабель"}', 6
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'industrial_processing/mining_blasting/tools/charger', 'industrial_processing', 'mining_blasting', 'tools', 'industrial_processing/mining_blasting/tools/charger', NULL, '{"en":"charger","es":"charger","pt":"charger","fr":"charger","de":"charger","it":"charger","nl":"oplader","zh":"充电器","ja":"充電器","ru":"зарядное устройство"}', 8
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'industrial_processing/mining_blasting/tools/clamp', 'industrial_processing', 'mining_blasting', 'tools', 'industrial_processing/mining_blasting/tools/clamp', NULL, '{"en":"clamp","es":"clamp","pt":"clamp","fr":"clamp","de":"clamp","it":"clamp","nl":"klem","zh":"夹具","ja":"クランプ","ru":"зажим"}', 10
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'industrial_processing/mining_blasting/tools/container', 'industrial_processing', 'mining_blasting', 'tools', 'industrial_processing/mining_blasting/tools/container', NULL, '{"en":"container","es":"contenedor","pt":"recipiente","fr":"conteneur","de":"Behälter","it":"contenitore","nl":"container","zh":"容器","ja":"コンテナ","ru":"контейнер"}', 12
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'industrial_processing/mining_blasting/tools/control_box', 'industrial_processing', 'mining_blasting', 'tools', 'industrial_processing/mining_blasting/tools/control_box', NULL, '{"en":"control box","es":"control box","pt":"control box","fr":"control box","de":"control box","it":"control box","nl":"bedieningsdoos","zh":"控制箱","ja":"コントロールボックス","ru":"блок управления"}', 14
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'industrial_processing/mining_blasting/tools/detector', 'industrial_processing', 'mining_blasting', 'tools', 'industrial_processing/mining_blasting/tools/detector', NULL, '{"en":"detector","es":"detector","pt":"detector","fr":"detector","de":"detector","it":"detector","nl":"detector","zh":"探测器","ja":"ディテクター","ru":"детектор"}', 16
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'industrial_processing/mining_blasting/tools/detonator', 'industrial_processing', 'mining_blasting', 'tools', 'industrial_processing/mining_blasting/tools/detonator', NULL, '{"en":"detonator","es":"detonator","pt":"detonator","fr":"detonator","de":"detonator","it":"detonator","nl":"detonator","zh":"引爆器","ja":"起爆装置","ru":"детонатор"}', 18
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'industrial_processing/mining_blasting/tools/dynamite', 'industrial_processing', 'mining_blasting', 'tools', 'industrial_processing/mining_blasting/tools/dynamite', NULL, '{"en":"dynamite","es":"dynamite","pt":"dynamite","fr":"dynamite","de":"dynamite","it":"dynamite","nl":"dynamiet","zh":"炸药","ja":"ダイナマイト","ru":"динамит"}', 20
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'industrial_processing/mining_blasting/tools/explosive', 'industrial_processing', 'mining_blasting', 'tools', 'industrial_processing/mining_blasting/tools/explosive', NULL, '{"en":"explosive","es":"explosive","pt":"explosive","fr":"explosive","de":"explosive","it":"explosive","nl":"explosief","zh":"炸药","ja":"爆発物","ru":"взрывчатое вещество"}', 22
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'industrial_processing/mining_blasting/tools/fuse', 'industrial_processing', 'mining_blasting', 'tools', 'industrial_processing/mining_blasting/tools/fuse', NULL, '{"en":"fuse","es":"fuse","pt":"fuse","fr":"fuse","de":"fuse","it":"fuse","nl":"zekering","zh":"保险丝","ja":"ヒューズ","ru":"предохранитель"}', 24
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'industrial_processing/mining_blasting/tools/gas_detector', 'industrial_processing', 'mining_blasting', 'tools', 'industrial_processing/mining_blasting/tools/gas_detector', NULL, '{"en":"gas detector","es":"gas detector","pt":"gas detector","fr":"gas detector","de":"gas detector","it":"gas detector","nl":"gasdetector","zh":"气体探测器","ja":"ガスディテクター","ru":"газодетектор"}', 26
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'industrial_processing/mining_blasting/tools/igniter', 'industrial_processing', 'mining_blasting', 'tools', 'industrial_processing/mining_blasting/tools/igniter', NULL, '{"en":"igniter","es":"igniter","pt":"igniter","fr":"igniter","de":"igniter","it":"igniter","nl":"ontsteker","zh":"点火器","ja":"イグナイター","ru":"запал"}', 28
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'industrial_processing/mining_blasting/tools/key', 'industrial_processing', 'mining_blasting', 'tools', 'industrial_processing/mining_blasting/tools/key', NULL, '{"en":"key","es":"key","pt":"key","fr":"key","de":"key","it":"key","nl":"sleutel","zh":"钥匙","ja":"鍵","ru":"ключ"}', 30
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'industrial_processing/mining_blasting/tools/label', 'industrial_processing', 'mining_blasting', 'tools', 'industrial_processing/mining_blasting/tools/label', NULL, '{"en":"label","es":"etiqueta","pt":"etiqueta","fr":"étiquette","de":"Etikett","it":"etichetta","nl":"etiket","zh":"标签","ja":"ラベル","ru":"этикетка"}', 32
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'industrial_processing/mining_blasting/tools/level', 'industrial_processing', 'mining_blasting', 'tools', 'industrial_processing/mining_blasting/tools/level', NULL, '{"en":"level","es":"nivel","pt":"nível","fr":"niveau","de":"Wasserwaage","it":"livella","nl":"waterpas","zh":"水平仪","ja":"水平器","ru":"уровень"}', 34
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'industrial_processing/mining_blasting/tools/lock', 'industrial_processing', 'mining_blasting', 'tools', 'industrial_processing/mining_blasting/tools/lock', NULL, '{"en":"lock","es":"lock","pt":"lock","fr":"lock","de":"lock","it":"lock","nl":"slot","zh":"锁","ja":"鍵","ru":"замок"}', 36
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'industrial_processing/mining_blasting/tools/marker', 'industrial_processing', 'mining_blasting', 'tools', 'industrial_processing/mining_blasting/tools/marker', NULL, '{"en":"marker","es":"marcador","pt":"marcador","fr":"marqueur","de":"Marker","it":"pennarello","nl":"marker","zh":"记号笔","ja":"マーカー","ru":"маркер"}', 38
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'industrial_processing/mining_blasting/tools/measuring_tape', 'industrial_processing', 'mining_blasting', 'tools', 'industrial_processing/mining_blasting/tools/measuring_tape', NULL, '{"en":"measuring tape","es":"measuring tape","pt":"measuring tape","fr":"measuring tape","de":"measuring tape","it":"measuring tape","nl":"meetlint","zh":"卷尺","ja":"メジャー","ru":"рулетка"}', 40
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'industrial_processing/mining_blasting/tools/meter', 'industrial_processing', 'mining_blasting', 'tools', 'industrial_processing/mining_blasting/tools/meter', NULL, '{"en":"meter","es":"medidor","pt":"medidor","fr":"mètre","de":"Messgerät","it":"metro","nl":"meter","zh":"仪表","ja":"メーター","ru":"счетчик"}', 42
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'industrial_processing/mining_blasting/tools/monitor', 'industrial_processing', 'mining_blasting', 'tools', 'industrial_processing/mining_blasting/tools/monitor', NULL, '{"en":"monitor","es":"monitor","pt":"monitor","fr":"monitor","de":"monitor","it":"monitor","nl":"monitor","zh":"显示器","ja":"モニター","ru":"монитор"}', 44
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'industrial_processing/mining_blasting/tools/radio', 'industrial_processing', 'mining_blasting', 'tools', 'industrial_processing/mining_blasting/tools/radio', NULL, '{"en":"radio","es":"radio","pt":"radio","fr":"radio","de":"radio","it":"radio","nl":"radio","zh":"收音机","ja":"ラジオ","ru":"радио"}', 46
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'industrial_processing/mining_blasting/tools/remote', 'industrial_processing', 'mining_blasting', 'tools', 'industrial_processing/mining_blasting/tools/remote', NULL, '{"en":"remote","es":"remote","pt":"remote","fr":"remote","de":"remote","it":"remote","nl":"afstandsbediening","zh":"遥控器","ja":"リモコン","ru":"пульт управления"}', 48
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'industrial_processing/mining_blasting/tools/screwdriver', 'industrial_processing', 'mining_blasting', 'tools', 'industrial_processing/mining_blasting/tools/screwdriver', NULL, '{"en":"screwdriver","es":"screwdriver","pt":"screwdriver","fr":"screwdriver","de":"screwdriver","it":"screwdriver","nl":"schroevendraaier","zh":"螺丝刀","ja":"ドライバー","ru":"отвертка"}', 50
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'industrial_processing/mining_blasting/tools/sensor', 'industrial_processing', 'mining_blasting', 'tools', 'industrial_processing/mining_blasting/tools/sensor', NULL, '{"en":"sensor","es":"sensor","pt":"sensor","fr":"sensor","de":"sensor","it":"sensor","nl":"sensor","zh":"传感器","ja":"センサー","ru":"датчик"}', 52
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'industrial_processing/mining_blasting/tools/signal_device', 'industrial_processing', 'mining_blasting', 'tools', 'industrial_processing/mining_blasting/tools/signal_device', NULL, '{"en":"signal device","es":"signal device","pt":"signal device","fr":"signal device","de":"signal device","it":"signal device","nl":"signaleringsapparaat","zh":"信号装置","ja":"シグナルデバイス","ru":"сигнальное устройство"}', 54
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'industrial_processing/mining_blasting/tools/siren', 'industrial_processing', 'mining_blasting', 'tools', 'industrial_processing/mining_blasting/tools/siren', NULL, '{"en":"siren","es":"siren","pt":"siren","fr":"siren","de":"siren","it":"siren","nl":"sirene","zh":"警报器","ja":"サイレン","ru":"сирена"}', 56
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'industrial_processing/mining_blasting/tools/spray_paint', 'industrial_processing', 'mining_blasting', 'tools', 'industrial_processing/mining_blasting/tools/spray_paint', NULL, '{"en":"spray paint","es":"spray paint","pt":"spray paint","fr":"spray paint","de":"spray paint","it":"spray paint","nl":"spuitverf","zh":"喷漆","ja":"スプレーペイント","ru":"аэрозольная краска"}', 58
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'industrial_processing/mining_blasting/tools/storage_box', 'industrial_processing', 'mining_blasting', 'tools', 'industrial_processing/mining_blasting/tools/storage_box', NULL, '{"en":"storage box","es":"storage box","pt":"storage box","fr":"storage box","de":"storage box","it":"storage box","nl":"opslagdoos","zh":"储物箱","ja":"収納ボックス","ru":"ящик для хранения"}', 60
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'industrial_processing/mining_blasting/tools/switch', 'industrial_processing', 'mining_blasting', 'tools', 'industrial_processing/mining_blasting/tools/switch', NULL, '{"en":"switch","es":"switch","pt":"switch","fr":"switch","de":"switch","it":"switch","nl":"schakelaar","zh":"开关","ja":"スイッチ","ru":"выключатель"}', 62
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'industrial_processing/mining_blasting/tools/tape', 'industrial_processing', 'mining_blasting', 'tools', 'industrial_processing/mining_blasting/tools/tape', NULL, '{"en":"tape","es":"cinta","pt":"fita","fr":"ruban","de":"Klebeband","it":"nastro","nl":"tape","zh":"胶带","ja":"テープ","ru":"лента"}', 64
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'industrial_processing/mining_blasting/tools/tester', 'industrial_processing', 'mining_blasting', 'tools', 'industrial_processing/mining_blasting/tools/tester', NULL, '{"en":"tester","es":"tester","pt":"tester","fr":"tester","de":"tester","it":"tester","nl":"tester","zh":"测试仪","ja":"テスター","ru":"тестер"}', 66
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'industrial_processing/mining_blasting/tools/timer', 'industrial_processing', 'mining_blasting', 'tools', 'industrial_processing/mining_blasting/tools/timer', NULL, '{"en":"timer","es":"timer","pt":"timer","fr":"timer","de":"timer","it":"timer","nl":"timer","zh":"计时器","ja":"タイマー","ru":"таймер"}', 68
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'industrial_processing/mining_blasting/tools/toolkit', 'industrial_processing', 'mining_blasting', 'tools', 'industrial_processing/mining_blasting/tools/toolkit', NULL, '{"en":"toolkit","es":"toolkit","pt":"toolkit","fr":"toolkit","de":"toolkit","it":"toolkit","nl":"toolkit","zh":"工具组件","ja":"ツールキット","ru":"набор инструментов"}', 70
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'industrial_processing/mining_blasting/tools/trigger', 'industrial_processing', 'mining_blasting', 'tools', 'industrial_processing/mining_blasting/tools/trigger', NULL, '{"en":"trigger","es":"trigger","pt":"trigger","fr":"trigger","de":"trigger","it":"trigger","nl":"trekker","zh":"扳机","ja":"トリガー","ru":"курок"}', 72
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'industrial_processing/mining_blasting/tools/wire', 'industrial_processing', 'mining_blasting', 'tools', 'industrial_processing/mining_blasting/tools/wire', NULL, '{"en":"wire","es":"wire","pt":"wire","fr":"wire","de":"wire","it":"wire","nl":"draad","zh":"电线","ja":"ワイヤー","ru":"провод"}', 74
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'industrial_processing/mining_blasting/tools/wrench', 'industrial_processing', 'mining_blasting', 'tools', 'industrial_processing/mining_blasting/tools/wrench', NULL, '{"en":"wrench","es":"llave","pt":"chave inglesa","fr":"clé","de":"Schraubenschlüssel","it":"chiave","nl":"moersleutel","zh":"扳手","ja":"レンチ","ru":"гаечный ключ"}', 76
);
INSERT INTO public.roles (id, job_id, sector_id, name, icon, sort_order) VALUES (
  'materials', 'industrial_processing', 'mining_blasting', '{"en":"Materials","es":"Materiales","pt":"Materiais","fr":"Matériaux","de":"Materialien","it":"Materiali","nl":"Materialen","zh":"材料","ja":"材料","ru":"Материалы"}', '📦', 1
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'industrial_processing/mining_blasting/materials/explosives', 'industrial_processing', 'mining_blasting', 'materials', 'industrial_processing/mining_blasting/materials/explosives', NULL, '{"en":"explosives","es":"explosives","pt":"explosives","fr":"explosives","de":"explosives","it":"explosives","nl":"explosieven","zh":"炸药","ja":"爆発物","ru":"взрывчатые вещества"}', 0
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'industrial_processing/mining_blasting/materials/fuel', 'industrial_processing', 'mining_blasting', 'materials', 'industrial_processing/mining_blasting/materials/fuel', NULL, '{"en":"fuel","es":"fuel","pt":"fuel","fr":"fuel","de":"fuel","it":"fuel","nl":"brandstof","zh":"燃料","ja":"燃料","ru":"топливо"}', 2
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'industrial_processing/mining_blasting/materials/safety_materials', 'industrial_processing', 'mining_blasting', 'materials', 'industrial_processing/mining_blasting/materials/safety_materials', NULL, '{"en":"safety materials","es":"safety materials","pt":"safety materials","fr":"safety materials","de":"safety materials","it":"safety materials","nl":"veiligheidsmaterialen","zh":"安全材料","ja":"安全材料","ru":"защитные материалы"}', 4
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'industrial_processing/mining_blasting/materials/wires', 'industrial_processing', 'mining_blasting', 'materials', 'industrial_processing/mining_blasting/materials/wires', NULL, '{"en":"wires","es":"wires","pt":"wires","fr":"wires","de":"wires","it":"wires","nl":"draden","zh":"电线","ja":"ワイヤー","ru":"провода"}', 6
);

INSERT INTO public.sectors (id, job_id, name, icon, sort_order) VALUES (
  'mining_drilling', 'industrial_processing', '{"en":"Mining Drilling","es":"Perforación","pt":"Perfuração","fr":"Forage","de":"Bohren","it":"Perforazione","nl":"Mijnbouw boren","zh":"矿山钻探","ja":"採掘掘削","ru":"Горнодобывающее бурение"}', '⛏️', 2
);
INSERT INTO public.roles (id, job_id, sector_id, name, icon, sort_order) VALUES (
  'tools', 'industrial_processing', 'mining_drilling', '{"en":"Tools","es":"Herramientas","pt":"Ferramentas","fr":"Outils","de":"Werkzeuge","it":"Attrezzi","nl":"Gereedschap","zh":"工具","ja":"道具","ru":"Инструменты"}', '🔧', 0
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'industrial_processing/mining_drilling/tools/air_hose', 'industrial_processing', 'mining_drilling', 'tools', 'industrial_processing/mining_drilling/tools/air_hose', NULL, '{"en":"air hose","es":"air hose","pt":"air hose","fr":"air hose","de":"air hose","it":"air hose","nl":"luchtslang","zh":"气管","ja":"エアホース","ru":"воздушный шланг"}', 0
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'industrial_processing/mining_drilling/tools/battery', 'industrial_processing', 'mining_drilling', 'tools', 'industrial_processing/mining_drilling/tools/battery', NULL, '{"en":"battery","es":"battery","pt":"battery","fr":"battery","de":"battery","it":"battery","nl":"batterij","zh":"电池","ja":"バッテリー","ru":"батарея"}', 2
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'industrial_processing/mining_drilling/tools/bolt', 'industrial_processing', 'mining_drilling', 'tools', 'industrial_processing/mining_drilling/tools/bolt', NULL, '{"en":"bolt","es":"bolt","pt":"bolt","fr":"bolt","de":"bolt","it":"bolt","nl":"bout","zh":"螺栓","ja":"ボルト","ru":"болт"}', 4
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'industrial_processing/mining_drilling/tools/button', 'industrial_processing', 'mining_drilling', 'tools', 'industrial_processing/mining_drilling/tools/button', NULL, '{"en":"button","es":"button","pt":"button","fr":"button","de":"button","it":"button","nl":"knop","zh":"按钮","ja":"ボタン","ru":"кнопка"}', 6
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'industrial_processing/mining_drilling/tools/cable', 'industrial_processing', 'mining_drilling', 'tools', 'industrial_processing/mining_drilling/tools/cable', NULL, '{"en":"cable","es":"cable","pt":"cable","fr":"cable","de":"cable","it":"cable","nl":"kabel","zh":"电缆","ja":"ケーブル","ru":"кабель"}', 8
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'industrial_processing/mining_drilling/tools/charger', 'industrial_processing', 'mining_drilling', 'tools', 'industrial_processing/mining_drilling/tools/charger', NULL, '{"en":"charger","es":"charger","pt":"charger","fr":"charger","de":"charger","it":"charger","nl":"oplader","zh":"充电器","ja":"充電器","ru":"зарядное устройство"}', 10
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'industrial_processing/mining_drilling/tools/clamp', 'industrial_processing', 'mining_drilling', 'tools', 'industrial_processing/mining_drilling/tools/clamp', NULL, '{"en":"clamp","es":"clamp","pt":"clamp","fr":"clamp","de":"clamp","it":"clamp","nl":"klem","zh":"夹具","ja":"クランプ","ru":"зажим"}', 12
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'industrial_processing/mining_drilling/tools/compressor', 'industrial_processing', 'mining_drilling', 'tools', 'industrial_processing/mining_drilling/tools/compressor', NULL, '{"en":"compressor","es":"compressor","pt":"compressor","fr":"compressor","de":"compressor","it":"compressor","nl":"compressor","zh":"压缩机","ja":"コンプレッサー","ru":"компрессор"}', 14
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'industrial_processing/mining_drilling/tools/control_panel', 'industrial_processing', 'mining_drilling', 'tools', 'industrial_processing/mining_drilling/tools/control_panel', NULL, '{"en":"control panel","es":"control panel","pt":"control panel","fr":"control panel","de":"control panel","it":"control panel","nl":"bedieningspaneel","zh":"控制面板","ja":"コントロールパネル","ru":"панель управления"}', 16
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'industrial_processing/mining_drilling/tools/core_drill', 'industrial_processing', 'mining_drilling', 'tools', 'industrial_processing/mining_drilling/tools/core_drill', NULL, '{"en":"core drill","es":"core drill","pt":"core drill","fr":"core drill","de":"core drill","it":"core drill","nl":"kernboor","zh":"取芯钻","ja":"コアドリル","ru":"кернобур"}', 18
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'industrial_processing/mining_drilling/tools/coupling', 'industrial_processing', 'mining_drilling', 'tools', 'industrial_processing/mining_drilling/tools/coupling', NULL, '{"en":"coupling","es":"coupling","pt":"coupling","fr":"coupling","de":"coupling","it":"coupling","nl":"koppeling","zh":"联轴器","ja":"カップリング","ru":"муфта"}', 20
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'industrial_processing/mining_drilling/tools/drill', 'industrial_processing', 'mining_drilling', 'tools', 'industrial_processing/mining_drilling/tools/drill', NULL, '{"en":"drill","es":"taladro","pt":"furadeira","fr":"perceuse","de":"Bohrmaschine","it":"trapano","nl":"boor","zh":"钻头","ja":"ドリル","ru":"дрель"}', 22
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'industrial_processing/mining_drilling/tools/drill_bit', 'industrial_processing', 'mining_drilling', 'tools', 'industrial_processing/mining_drilling/tools/drill_bit', NULL, '{"en":"drill bit","es":"drill bit","pt":"drill bit","fr":"drill bit","de":"drill bit","it":"drill bit","nl":"boorbit","zh":"钻头刀片","ja":"ドリルビット","ru":"сверло"}', 24
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'industrial_processing/mining_drilling/tools/drill_rod', 'industrial_processing', 'mining_drilling', 'tools', 'industrial_processing/mining_drilling/tools/drill_rod', NULL, '{"en":"drill rod","es":"drill rod","pt":"drill rod","fr":"drill rod","de":"drill rod","it":"drill rod","nl":"boorstang","zh":"钻杆","ja":"ドリルロッド","ru":"буровая штанга"}', 26
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'industrial_processing/mining_drilling/tools/filter', 'industrial_processing', 'mining_drilling', 'tools', 'industrial_processing/mining_drilling/tools/filter', NULL, '{"en":"filter","es":"filtro","pt":"filtro","fr":"filtre","de":"Filter","it":"filtro","nl":"filter","zh":"过滤器","ja":"フィルター","ru":"фильтр"}', 28
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'industrial_processing/mining_drilling/tools/fuel_tank', 'industrial_processing', 'mining_drilling', 'tools', 'industrial_processing/mining_drilling/tools/fuel_tank', NULL, '{"en":"fuel tank","es":"fuel tank","pt":"fuel tank","fr":"fuel tank","de":"fuel tank","it":"fuel tank","nl":"brandstoftank","zh":"油箱","ja":"燃料タンク","ru":"топливный бак"}', 30
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'industrial_processing/mining_drilling/tools/generator', 'industrial_processing', 'mining_drilling', 'tools', 'industrial_processing/mining_drilling/tools/generator', NULL, '{"en":"generator","es":"generator","pt":"generator","fr":"generator","de":"generator","it":"generator","nl":"generator","zh":"发电机","ja":"発電機","ru":"генератор"}', 32
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'industrial_processing/mining_drilling/tools/hammer_drill', 'industrial_processing', 'mining_drilling', 'tools', 'industrial_processing/mining_drilling/tools/hammer_drill', NULL, '{"en":"hammer drill","es":"hammer drill","pt":"hammer drill","fr":"hammer drill","de":"hammer drill","it":"hammer drill","nl":"boorhamer","zh":"电锤","ja":"ハンマードリル","ru":"перфоратор"}', 34
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'industrial_processing/mining_drilling/tools/jackhammer', 'industrial_processing', 'mining_drilling', 'tools', 'industrial_processing/mining_drilling/tools/jackhammer', NULL, '{"en":"jackhammer","es":"jackhammer","pt":"jackhammer","fr":"jackhammer","de":"jackhammer","it":"jackhammer","nl":"drilhamer","zh":"钻岩机","ja":"ジャックハンマー","ru":"отбойный молоток"}', 36
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'industrial_processing/mining_drilling/tools/level', 'industrial_processing', 'mining_drilling', 'tools', 'industrial_processing/mining_drilling/tools/level', NULL, '{"en":"level","es":"nivel","pt":"nível","fr":"niveau","de":"Wasserwaage","it":"livella","nl":"waterpas","zh":"水平仪","ja":"水平器","ru":"уровень"}', 38
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'industrial_processing/mining_drilling/tools/lever', 'industrial_processing', 'mining_drilling', 'tools', 'industrial_processing/mining_drilling/tools/lever', NULL, '{"en":"lever","es":"lever","pt":"lever","fr":"lever","de":"lever","it":"lever","nl":"hefboom","zh":"杠杆","ja":"レバー","ru":"рычаг"}', 40
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'industrial_processing/mining_drilling/tools/marker', 'industrial_processing', 'mining_drilling', 'tools', 'industrial_processing/mining_drilling/tools/marker', NULL, '{"en":"marker","es":"marcador","pt":"marcador","fr":"marqueur","de":"Marker","it":"pennarello","nl":"marker","zh":"记号笔","ja":"マーカー","ru":"маркер"}', 42
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'industrial_processing/mining_drilling/tools/measuring_tool', 'industrial_processing', 'mining_drilling', 'tools', 'industrial_processing/mining_drilling/tools/measuring_tool', NULL, '{"en":"measuring tool","es":"measuring tool","pt":"measuring tool","fr":"measuring tool","de":"measuring tool","it":"measuring tool","nl":"meetgereedschap","zh":"测量工具","ja":"計測ツール","ru":"измерительный инструмент"}', 44
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'industrial_processing/mining_drilling/tools/mining_drill', 'industrial_processing', 'mining_drilling', 'tools', 'industrial_processing/mining_drilling/tools/mining_drill', NULL, '{"en":"mining drill","es":"mining drill","pt":"mining drill","fr":"mining drill","de":"mining drill","it":"mining drill","nl":"mijnbouwboor","zh":"矿山钻机","ja":"採掘ドリル","ru":"буровой станок"}', 46
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'industrial_processing/mining_drilling/tools/monitor', 'industrial_processing', 'mining_drilling', 'tools', 'industrial_processing/mining_drilling/tools/monitor', NULL, '{"en":"monitor","es":"monitor","pt":"monitor","fr":"monitor","de":"monitor","it":"monitor","nl":"monitor","zh":"显示器","ja":"モニター","ru":"монитор"}', 48
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'industrial_processing/mining_drilling/tools/nut', 'industrial_processing', 'mining_drilling', 'tools', 'industrial_processing/mining_drilling/tools/nut', NULL, '{"en":"nut","es":"nut","pt":"nut","fr":"nut","de":"nut","it":"nut","nl":"moer","zh":"螺母","ja":"ナット","ru":"гайка"}', 50
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'industrial_processing/mining_drilling/tools/oil_container', 'industrial_processing', 'mining_drilling', 'tools', 'industrial_processing/mining_drilling/tools/oil_container', NULL, '{"en":"oil container","es":"oil container","pt":"oil container","fr":"oil container","de":"oil container","it":"oil container","nl":"oliecontainer","zh":"油桶","ja":"オイルコンテナ","ru":"масляный контейнер"}', 52
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'industrial_processing/mining_drilling/tools/power_unit', 'industrial_processing', 'mining_drilling', 'tools', 'industrial_processing/mining_drilling/tools/power_unit', NULL, '{"en":"power unit","es":"power unit","pt":"power unit","fr":"power unit","de":"power unit","it":"power unit","nl":"voedingseenheid","zh":"电源装置","ja":"電源ユニット","ru":"блок питания"}', 54
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'industrial_processing/mining_drilling/tools/pump', 'industrial_processing', 'mining_drilling', 'tools', 'industrial_processing/mining_drilling/tools/pump', NULL, '{"en":"pump","es":"bomba","pt":"bomba","fr":"pompe","de":"Pumpe","it":"pompa","nl":"pomp","zh":"泵","ja":"ポンプ","ru":"насос"}', 56
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'industrial_processing/mining_drilling/tools/rock_drill', 'industrial_processing', 'mining_drilling', 'tools', 'industrial_processing/mining_drilling/tools/rock_drill', NULL, '{"en":"rock drill","es":"rock drill","pt":"rock drill","fr":"rock drill","de":"rock drill","it":"rock drill","nl":"steenboor","zh":"凿岩机","ja":"ロックドリル","ru":"перфоратор"}', 58
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'industrial_processing/mining_drilling/tools/screwdriver', 'industrial_processing', 'mining_drilling', 'tools', 'industrial_processing/mining_drilling/tools/screwdriver', NULL, '{"en":"screwdriver","es":"screwdriver","pt":"screwdriver","fr":"screwdriver","de":"screwdriver","it":"screwdriver","nl":"schroevendraaier","zh":"螺丝刀","ja":"ドライバー","ru":"отвертка"}', 60
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'industrial_processing/mining_drilling/tools/sensor', 'industrial_processing', 'mining_drilling', 'tools', 'industrial_processing/mining_drilling/tools/sensor', NULL, '{"en":"sensor","es":"sensor","pt":"sensor","fr":"sensor","de":"sensor","it":"sensor","nl":"sensor","zh":"传感器","ja":"センサー","ru":"датчик"}', 62
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'industrial_processing/mining_drilling/tools/spray_paint', 'industrial_processing', 'mining_drilling', 'tools', 'industrial_processing/mining_drilling/tools/spray_paint', NULL, '{"en":"spray paint","es":"spray paint","pt":"spray paint","fr":"spray paint","de":"spray paint","it":"spray paint","nl":"spuitverf","zh":"喷漆","ja":"スプレーペイント","ru":"аэрозольная краска"}', 64
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'industrial_processing/mining_drilling/tools/switch', 'industrial_processing', 'mining_drilling', 'tools', 'industrial_processing/mining_drilling/tools/switch', NULL, '{"en":"switch","es":"switch","pt":"switch","fr":"switch","de":"switch","it":"switch","nl":"schakelaar","zh":"开关","ja":"スイッチ","ru":"выключатель"}', 66
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'industrial_processing/mining_drilling/tools/tape', 'industrial_processing', 'mining_drilling', 'tools', 'industrial_processing/mining_drilling/tools/tape', NULL, '{"en":"tape","es":"cinta","pt":"fita","fr":"ruban","de":"Klebeband","it":"nastro","nl":"tape","zh":"胶带","ja":"テープ","ru":"лента"}', 68
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'industrial_processing/mining_drilling/tools/toolbox', 'industrial_processing', 'mining_drilling', 'tools', 'industrial_processing/mining_drilling/tools/toolbox', NULL, '{"en":"toolbox","es":"toolbox","pt":"toolbox","fr":"toolbox","de":"toolbox","it":"toolbox","nl":"gereedschapskist","zh":"工具箱","ja":"ツールボックス","ru":"ящик для инструментов"}', 70
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'industrial_processing/mining_drilling/tools/toolkit', 'industrial_processing', 'mining_drilling', 'tools', 'industrial_processing/mining_drilling/tools/toolkit', NULL, '{"en":"toolkit","es":"toolkit","pt":"toolkit","fr":"toolkit","de":"toolkit","it":"toolkit","nl":"toolkit","zh":"工具组件","ja":"ツールキット","ru":"набор инструментов"}', 72
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'industrial_processing/mining_drilling/tools/trigger', 'industrial_processing', 'mining_drilling', 'tools', 'industrial_processing/mining_drilling/tools/trigger', NULL, '{"en":"trigger","es":"trigger","pt":"trigger","fr":"trigger","de":"trigger","it":"trigger","nl":"trekker","zh":"扳机","ja":"トリガー","ru":"курок"}', 74
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'industrial_processing/mining_drilling/tools/valve', 'industrial_processing', 'mining_drilling', 'tools', 'industrial_processing/mining_drilling/tools/valve', NULL, '{"en":"valve","es":"valve","pt":"valve","fr":"valve","de":"valve","it":"valve","nl":"klep","zh":"阀门","ja":"バルブ","ru":"клапан"}', 76
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'industrial_processing/mining_drilling/tools/wrench', 'industrial_processing', 'mining_drilling', 'tools', 'industrial_processing/mining_drilling/tools/wrench', NULL, '{"en":"wrench","es":"llave","pt":"chave inglesa","fr":"clé","de":"Schraubenschlüssel","it":"chiave","nl":"moersleutel","zh":"扳手","ja":"レンチ","ru":"гаечный ключ"}', 78
);
INSERT INTO public.roles (id, job_id, sector_id, name, icon, sort_order) VALUES (
  'materials', 'industrial_processing', 'mining_drilling', '{"en":"Materials","es":"Materiales","pt":"Materiais","fr":"Matériaux","de":"Materialien","it":"Materiali","nl":"Materialen","zh":"材料","ja":"材料","ru":"Материалы"}', '📦', 1
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'industrial_processing/mining_drilling/materials/filters', 'industrial_processing', 'mining_drilling', 'materials', 'industrial_processing/mining_drilling/materials/filters', NULL, '{"en":"filters","es":"filters","pt":"filters","fr":"filters","de":"filters","it":"filters","nl":"filters","zh":"过滤器","ja":"フィルター","ru":"фильтры"}', 0
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'industrial_processing/mining_drilling/materials/fuel', 'industrial_processing', 'mining_drilling', 'materials', 'industrial_processing/mining_drilling/materials/fuel', NULL, '{"en":"fuel","es":"fuel","pt":"fuel","fr":"fuel","de":"fuel","it":"fuel","nl":"brandstof","zh":"燃料","ja":"燃料","ru":"топливо"}', 2
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'industrial_processing/mining_drilling/materials/lubricants', 'industrial_processing', 'mining_drilling', 'materials', 'industrial_processing/mining_drilling/materials/lubricants', NULL, '{"en":"lubricants","es":"lubricants","pt":"lubricants","fr":"lubricants","de":"lubricants","it":"lubricants","nl":"smeermiddelen","zh":"润滑剂","ja":"潤滑剤","ru":"смазочные материалы"}', 4
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'industrial_processing/mining_drilling/materials/oil', 'industrial_processing', 'mining_drilling', 'materials', 'industrial_processing/mining_drilling/materials/oil', NULL, '{"en":"oil","es":"oil","pt":"oil","fr":"oil","de":"oil","it":"oil","nl":"olie","zh":"油","ja":"オイル","ru":"масло"}', 6
);

INSERT INTO public.sectors (id, job_id, name, icon, sort_order) VALUES (
  'mining_loading_transport', 'industrial_processing', '{"en":"Mining Transport","es":"Transporte Minero","pt":"Transporte Mineiro","fr":"Transport Minier","de":"Bergbautransport","it":"Trasporto","nl":"Mijnbouw transport","zh":"矿山运输","ja":"採掘輸送","ru":"Горнодобывающий транспорт"}', '🚛', 3
);
INSERT INTO public.roles (id, job_id, sector_id, name, icon, sort_order) VALUES (
  'tools', 'industrial_processing', 'mining_loading_transport', '{"en":"Tools","es":"Herramientas","pt":"Ferramentas","fr":"Outils","de":"Werkzeuge","it":"Attrezzi","nl":"Gereedschap","zh":"工具","ja":"道具","ru":"Инструменты"}', '🔧', 0
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'industrial_processing/mining_loading_transport/tools/alarm', 'industrial_processing', 'mining_loading_transport', 'tools', 'industrial_processing/mining_loading_transport/tools/alarm', NULL, '{"en":"alarm","es":"alarm","pt":"alarm","fr":"alarm","de":"alarm","it":"alarm","nl":"alarm","zh":"警报器","ja":"アラーム","ru":"сигнализация"}', 0
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'industrial_processing/mining_loading_transport/tools/bin', 'industrial_processing', 'mining_loading_transport', 'tools', 'industrial_processing/mining_loading_transport/tools/bin', NULL, '{"en":"bin","es":"cubo de basura","pt":"lixeira","fr":"poubelle","de":"Mülleimer","it":"bidone","nl":"prullenbak","zh":"垃圾桶","ja":"ビン","ru":"мусорное ведро"}', 2
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'industrial_processing/mining_loading_transport/tools/box', 'industrial_processing', 'mining_loading_transport', 'tools', 'industrial_processing/mining_loading_transport/tools/box', NULL, '{"en":"box","es":"caja","pt":"caixa","fr":"boîte","de":"Kasten","it":"scatola","nl":"doos","zh":"箱子","ja":"ボックス","ru":"коробка"}', 4
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'industrial_processing/mining_loading_transport/tools/brake', 'industrial_processing', 'mining_loading_transport', 'tools', 'industrial_processing/mining_loading_transport/tools/brake', NULL, '{"en":"brake","es":"brake","pt":"brake","fr":"brake","de":"brake","it":"brake","nl":"rem","zh":"刹车","ja":"ブレーキ","ru":"тормоз"}', 6
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'industrial_processing/mining_loading_transport/tools/bucket', 'industrial_processing', 'mining_loading_transport', 'tools', 'industrial_processing/mining_loading_transport/tools/bucket', NULL, '{"en":"bucket","es":"cubo","pt":"balde","fr":"seau","de":"Eimer","it":"secchio","nl":"emmer","zh":"水桶","ja":"バケツ","ru":"ведро"}', 8
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'industrial_processing/mining_loading_transport/tools/camera', 'industrial_processing', 'mining_loading_transport', 'tools', 'industrial_processing/mining_loading_transport/tools/camera', NULL, '{"en":"camera","es":"camera","pt":"camera","fr":"camera","de":"camera","it":"camera","nl":"camera","zh":"摄像机","ja":"カメラ","ru":"камера"}', 10
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'industrial_processing/mining_loading_transport/tools/cart', 'industrial_processing', 'mining_loading_transport', 'tools', 'industrial_processing/mining_loading_transport/tools/cart', NULL, '{"en":"cart","es":"carrito","pt":"carrinho","fr":"chariot","de":"Wagen","it":"carrello","nl":"kar","zh":"推车","ja":"カート","ru":"тележка"}', 12
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'industrial_processing/mining_loading_transport/tools/chain', 'industrial_processing', 'mining_loading_transport', 'tools', 'industrial_processing/mining_loading_transport/tools/chain', NULL, '{"en":"chain","es":"cadena","pt":"corrente","fr":"chaîne","de":"Kette","it":"catena","nl":"ketting","zh":"链条","ja":"チェーン","ru":"цепь"}', 14
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'industrial_processing/mining_loading_transport/tools/container', 'industrial_processing', 'mining_loading_transport', 'tools', 'industrial_processing/mining_loading_transport/tools/container', NULL, '{"en":"container","es":"contenedor","pt":"recipiente","fr":"conteneur","de":"Behälter","it":"contenitore","nl":"container","zh":"容器","ja":"コンテナ","ru":"контейнер"}', 16
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'industrial_processing/mining_loading_transport/tools/control_panel', 'industrial_processing', 'mining_loading_transport', 'tools', 'industrial_processing/mining_loading_transport/tools/control_panel', NULL, '{"en":"control panel","es":"control panel","pt":"control panel","fr":"control panel","de":"control panel","it":"control panel","nl":"bedieningspaneel","zh":"控制面板","ja":"コントロールパネル","ru":"панель управления"}', 18
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'industrial_processing/mining_loading_transport/tools/conveyor_belt', 'industrial_processing', 'mining_loading_transport', 'tools', 'industrial_processing/mining_loading_transport/tools/conveyor_belt', NULL, '{"en":"conveyor belt","es":"conveyor belt","pt":"conveyor belt","fr":"conveyor belt","de":"conveyor belt","it":"conveyor belt","nl":"lopende band","zh":"输送带","ja":"コンベアベルト","ru":"конвейерная лента"}', 20
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'industrial_processing/mining_loading_transport/tools/crate', 'industrial_processing', 'mining_loading_transport', 'tools', 'industrial_processing/mining_loading_transport/tools/crate', NULL, '{"en":"crate","es":"cajón","pt":"engradado","fr":"caisse","de":"Kiste","it":"cassa","nl":"krat","zh":"板条箱","ja":"クレート","ru":"ящик"}', 22
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'industrial_processing/mining_loading_transport/tools/dump_truck', 'industrial_processing', 'mining_loading_transport', 'tools', 'industrial_processing/mining_loading_transport/tools/dump_truck', NULL, '{"en":"dump truck","es":"dump truck","pt":"dump truck","fr":"dump truck","de":"dump truck","it":"dump truck","nl":"kiepwagen","zh":"自卸车","ja":"ダンプトラック","ru":"самосвал"}', 24
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'industrial_processing/mining_loading_transport/tools/excavator', 'industrial_processing', 'mining_loading_transport', 'tools', 'industrial_processing/mining_loading_transport/tools/excavator', NULL, '{"en":"excavator","es":"excavator","pt":"excavator","fr":"excavator","de":"excavator","it":"excavator","nl":"graafmachine","zh":"挖掘机","ja":"掘削機","ru":"экскаватор"}', 26
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'industrial_processing/mining_loading_transport/tools/fork', 'industrial_processing', 'mining_loading_transport', 'tools', 'industrial_processing/mining_loading_transport/tools/fork', NULL, '{"en":"fork","es":"tenedor","pt":"forcado","fr":"fourche","de":"Gabel","it":"forca","nl":"vork","zh":"叉子","ja":"フォーク","ru":"вилка"}', 28
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'industrial_processing/mining_loading_transport/tools/gear', 'industrial_processing', 'mining_loading_transport', 'tools', 'industrial_processing/mining_loading_transport/tools/gear', NULL, '{"en":"gear","es":"gear","pt":"gear","fr":"gear","de":"gear","it":"gear","nl":"tandwiel","zh":"齿轮","ja":"ギア","ru":"шестерня"}', 30
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'industrial_processing/mining_loading_transport/tools/hook', 'industrial_processing', 'mining_loading_transport', 'tools', 'industrial_processing/mining_loading_transport/tools/hook', NULL, '{"en":"hook","es":"gancho","pt":"gancho","fr":"crochet","de":"Haken","it":"gancio","nl":"haak","zh":"挂钩","ja":"フック","ru":"крюк"}', 32
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'industrial_processing/mining_loading_transport/tools/hydraulic_system', 'industrial_processing', 'mining_loading_transport', 'tools', 'industrial_processing/mining_loading_transport/tools/hydraulic_system', NULL, '{"en":"hydraulic system","es":"hydraulic system","pt":"hydraulic system","fr":"hydraulic system","de":"hydraulic system","it":"hydraulic system","nl":"hydraulisch systeem","zh":"液压系统","ja":"油圧システム","ru":"гидравлическая система"}', 34
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'industrial_processing/mining_loading_transport/tools/lever', 'industrial_processing', 'mining_loading_transport', 'tools', 'industrial_processing/mining_loading_transport/tools/lever', NULL, '{"en":"lever","es":"lever","pt":"lever","fr":"lever","de":"lever","it":"lever","nl":"hefboom","zh":"杠杆","ja":"レバー","ru":"рычаг"}', 36
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'industrial_processing/mining_loading_transport/tools/loader', 'industrial_processing', 'mining_loading_transport', 'tools', 'industrial_processing/mining_loading_transport/tools/loader', NULL, '{"en":"loader","es":"loader","pt":"loader","fr":"loader","de":"loader","it":"loader","nl":"lader","zh":"装载机","ja":"ローダー","ru":"погрузчик"}', 38
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'industrial_processing/mining_loading_transport/tools/mirror', 'industrial_processing', 'mining_loading_transport', 'tools', 'industrial_processing/mining_loading_transport/tools/mirror', NULL, '{"en":"mirror","es":"mirror","pt":"mirror","fr":"mirror","de":"mirror","it":"mirror","nl":"spiegel","zh":"镜子","ja":"鏡","ru":"зеркало"}', 40
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'industrial_processing/mining_loading_transport/tools/pallet', 'industrial_processing', 'mining_loading_transport', 'tools', 'industrial_processing/mining_loading_transport/tools/pallet', NULL, '{"en":"pallet","es":"palé","pt":"palete","fr":"palette","de":"Palette","it":"pallet","nl":"pallet","zh":"托盘","ja":"パレット","ru":"паллет"}', 42
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'industrial_processing/mining_loading_transport/tools/rack', 'industrial_processing', 'mining_loading_transport', 'tools', 'industrial_processing/mining_loading_transport/tools/rack', NULL, '{"en":"rack","es":"estante","pt":"prateleira","fr":"étagère","de":"Regal","it":"scaffale","nl":"rek","zh":"货架","ja":"ラック","ru":"стеллаж"}', 44
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'industrial_processing/mining_loading_transport/tools/rope', 'industrial_processing', 'mining_loading_transport', 'tools', 'industrial_processing/mining_loading_transport/tools/rope', NULL, '{"en":"rope","es":"cuerda","pt":"corda","fr":"corde","de":"Seil","it":"corda","nl":"touw","zh":"绳子","ja":"ロープ","ru":"веревка"}', 46
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'industrial_processing/mining_loading_transport/tools/sensor', 'industrial_processing', 'mining_loading_transport', 'tools', 'industrial_processing/mining_loading_transport/tools/sensor', NULL, '{"en":"sensor","es":"sensor","pt":"sensor","fr":"sensor","de":"sensor","it":"sensor","nl":"sensor","zh":"传感器","ja":"センサー","ru":"датчик"}', 48
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'industrial_processing/mining_loading_transport/tools/shovel', 'industrial_processing', 'mining_loading_transport', 'tools', 'industrial_processing/mining_loading_transport/tools/shovel', NULL, '{"en":"shovel","es":"pala","pt":"pá","fr":"pelle","de":"Schaufel","it":"vanga","nl":"schop","zh":"铲子","ja":"シャベル","ru":"лопата"}', 50
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'industrial_processing/mining_loading_transport/tools/steering_wheel', 'industrial_processing', 'mining_loading_transport', 'tools', 'industrial_processing/mining_loading_transport/tools/steering_wheel', NULL, '{"en":"steering wheel","es":"steering wheel","pt":"steering wheel","fr":"steering wheel","de":"steering wheel","it":"steering wheel","nl":"stuurwiel","zh":"方向盘","ja":"ステアリングホイール","ru":"руль"}', 52
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'industrial_processing/mining_loading_transport/tools/strap', 'industrial_processing', 'mining_loading_transport', 'tools', 'industrial_processing/mining_loading_transport/tools/strap', NULL, '{"en":"strap","es":"strap","pt":"strap","fr":"strap","de":"strap","it":"strap","nl":"band","zh":"带子","ja":"ストラップ","ru":"ремень"}', 54
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'industrial_processing/mining_loading_transport/tools/trolley', 'industrial_processing', 'mining_loading_transport', 'tools', 'industrial_processing/mining_loading_transport/tools/trolley', NULL, '{"en":"trolley","es":"carrito","pt":"carrinho","fr":"chariot","de":"Trolley","it":"carrello","nl":"trolley","zh":"手推车","ja":"トロリー","ru":"тележка"}', 56
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'industrial_processing/mining_loading_transport/tools/wheelbarrow', 'industrial_processing', 'mining_loading_transport', 'tools', 'industrial_processing/mining_loading_transport/tools/wheelbarrow', NULL, '{"en":"wheelbarrow","es":"carretilla","pt":"carrinho de mão","fr":"brouette","de":"Schubkarre","it":"carriola","nl":"kruiwagen","zh":"手推车","ja":"一輪車","ru":"тачка"}', 58
);
INSERT INTO public.roles (id, job_id, sector_id, name, icon, sort_order) VALUES (
  'materials', 'industrial_processing', 'mining_loading_transport', '{"en":"Materials","es":"Materiales","pt":"Materiais","fr":"Matériaux","de":"Materialien","it":"Materiali","nl":"Materialen","zh":"材料","ja":"材料","ru":"Материалы"}', '📦', 1
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'industrial_processing/mining_loading_transport/materials/filters', 'industrial_processing', 'mining_loading_transport', 'materials', 'industrial_processing/mining_loading_transport/materials/filters', NULL, '{"en":"filters","es":"filters","pt":"filters","fr":"filters","de":"filters","it":"filters","nl":"filters","zh":"过滤器","ja":"フィルター","ru":"фильтры"}', 0
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'industrial_processing/mining_loading_transport/materials/fuel', 'industrial_processing', 'mining_loading_transport', 'materials', 'industrial_processing/mining_loading_transport/materials/fuel', NULL, '{"en":"fuel","es":"fuel","pt":"fuel","fr":"fuel","de":"fuel","it":"fuel","nl":"brandstof","zh":"燃料","ja":"燃料","ru":"топливо"}', 2
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'industrial_processing/mining_loading_transport/materials/oil', 'industrial_processing', 'mining_loading_transport', 'materials', 'industrial_processing/mining_loading_transport/materials/oil', NULL, '{"en":"oil","es":"oil","pt":"oil","fr":"oil","de":"oil","it":"oil","nl":"olie","zh":"油","ja":"オイル","ru":"масло"}', 4
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'industrial_processing/mining_loading_transport/materials/parts', 'industrial_processing', 'mining_loading_transport', 'materials', 'industrial_processing/mining_loading_transport/materials/parts', NULL, '{"en":"parts","es":"parts","pt":"parts","fr":"parts","de":"parts","it":"parts","nl":"onderdelen","zh":"零件","ja":"パーツ","ru":"запчасти"}', 6
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'industrial_processing/mining_loading_transport/materials/tires', 'industrial_processing', 'mining_loading_transport', 'materials', 'industrial_processing/mining_loading_transport/materials/tires', NULL, '{"en":"tires","es":"tires","pt":"tires","fr":"tires","de":"tires","it":"tires","nl":"banden","zh":"轮胎","ja":"タイヤ","ru":"шины"}', 8
);

INSERT INTO public.sectors (id, job_id, name, icon, sort_order) VALUES (
  'mining_maintenance', 'industrial_processing', '{"en":"Mining Maintenance","es":"Mantenimiento Minero","pt":"Manutenção Mineira","fr":"Maintenance Minière","de":"Bergbau Wartung","it":"Manutenzione","nl":"Mijnbouw onderhoud","zh":"矿山维护","ja":"採掘メンテナンス","ru":"Горнодобывающее техобслуживание"}', '🔩', 4
);
INSERT INTO public.roles (id, job_id, sector_id, name, icon, sort_order) VALUES (
  'tools', 'industrial_processing', 'mining_maintenance', '{"en":"Tools","es":"Herramientas","pt":"Ferramentas","fr":"Outils","de":"Werkzeuge","it":"Attrezzi","nl":"Gereedschap","zh":"工具","ja":"道具","ru":"Инструменты"}', '🔧', 0
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'industrial_processing/mining_maintenance/tools/battery', 'industrial_processing', 'mining_maintenance', 'tools', 'industrial_processing/mining_maintenance/tools/battery', NULL, '{"en":"battery","es":"battery","pt":"battery","fr":"battery","de":"battery","it":"battery","nl":"batterij","zh":"电池","ja":"バッテリー","ru":"батарея"}', 0
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'industrial_processing/mining_maintenance/tools/cable', 'industrial_processing', 'mining_maintenance', 'tools', 'industrial_processing/mining_maintenance/tools/cable', NULL, '{"en":"cable","es":"cable","pt":"cable","fr":"cable","de":"cable","it":"cable","nl":"kabel","zh":"电缆","ja":"ケーブル","ru":"кабель"}', 2
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'industrial_processing/mining_maintenance/tools/cart', 'industrial_processing', 'mining_maintenance', 'tools', 'industrial_processing/mining_maintenance/tools/cart', NULL, '{"en":"cart","es":"carrito","pt":"carrinho","fr":"chariot","de":"Wagen","it":"carrello","nl":"kar","zh":"推车","ja":"カート","ru":"тележка"}', 4
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'industrial_processing/mining_maintenance/tools/charger', 'industrial_processing', 'mining_maintenance', 'tools', 'industrial_processing/mining_maintenance/tools/charger', NULL, '{"en":"charger","es":"charger","pt":"charger","fr":"charger","de":"charger","it":"charger","nl":"oplader","zh":"充电器","ja":"充電器","ru":"зарядное устройство"}', 6
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'industrial_processing/mining_maintenance/tools/compressor', 'industrial_processing', 'mining_maintenance', 'tools', 'industrial_processing/mining_maintenance/tools/compressor', NULL, '{"en":"compressor","es":"compressor","pt":"compressor","fr":"compressor","de":"compressor","it":"compressor","nl":"compressor","zh":"压缩机","ja":"コンプレッサー","ru":"компрессор"}', 8
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'industrial_processing/mining_maintenance/tools/cutter', 'industrial_processing', 'mining_maintenance', 'tools', 'industrial_processing/mining_maintenance/tools/cutter', NULL, '{"en":"cutter","es":"cortador","pt":"cortador","fr":"cutter","de":"Cutter","it":"taglierino","nl":"snijder","zh":"切割机","ja":"カッター","ru":"резак"}', 10
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'industrial_processing/mining_maintenance/tools/drill', 'industrial_processing', 'mining_maintenance', 'tools', 'industrial_processing/mining_maintenance/tools/drill', NULL, '{"en":"drill","es":"taladro","pt":"furadeira","fr":"perceuse","de":"Bohrmaschine","it":"trapano","nl":"boor","zh":"钻头","ja":"ドリル","ru":"дрель"}', 12
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'industrial_processing/mining_maintenance/tools/generator', 'industrial_processing', 'mining_maintenance', 'tools', 'industrial_processing/mining_maintenance/tools/generator', NULL, '{"en":"generator","es":"generator","pt":"generator","fr":"generator","de":"generator","it":"generator","nl":"generator","zh":"发电机","ja":"発電機","ru":"генератор"}', 14
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'industrial_processing/mining_maintenance/tools/grinder', 'industrial_processing', 'mining_maintenance', 'tools', 'industrial_processing/mining_maintenance/tools/grinder', NULL, '{"en":"grinder","es":"grinder","pt":"grinder","fr":"grinder","de":"grinder","it":"grinder","nl":"slijpmachine","zh":"研磨机","ja":"グラインダー","ru":"шлифовальная машина"}', 16
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'industrial_processing/mining_maintenance/tools/hammer', 'industrial_processing', 'mining_maintenance', 'tools', 'industrial_processing/mining_maintenance/tools/hammer', NULL, '{"en":"hammer","es":"martillo","pt":"martelo","fr":"marteau","de":"Hammer","it":"martello","nl":"hamer","zh":"锤子","ja":"ハンマー","ru":"молоток"}', 18
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'industrial_processing/mining_maintenance/tools/kit', 'industrial_processing', 'mining_maintenance', 'tools', 'industrial_processing/mining_maintenance/tools/kit', NULL, '{"en":"kit","es":"kit","pt":"kit","fr":"kit","de":"kit","it":"kit","nl":"kit","zh":"套件","ja":"キット","ru":"набор"}', 20
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'industrial_processing/mining_maintenance/tools/ladder', 'industrial_processing', 'mining_maintenance', 'tools', 'industrial_processing/mining_maintenance/tools/ladder', NULL, '{"en":"ladder","es":"escalera","pt":"escada","fr":"échelle","de":"Leiter","it":"scala","nl":"ladder","zh":"梯子","ja":"はしご","ru":"лестница"}', 22
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'industrial_processing/mining_maintenance/tools/monitor', 'industrial_processing', 'mining_maintenance', 'tools', 'industrial_processing/mining_maintenance/tools/monitor', NULL, '{"en":"monitor","es":"monitor","pt":"monitor","fr":"monitor","de":"monitor","it":"monitor","nl":"monitor","zh":"显示器","ja":"モニター","ru":"монитор"}', 24
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'industrial_processing/mining_maintenance/tools/panel', 'industrial_processing', 'mining_maintenance', 'tools', 'industrial_processing/mining_maintenance/tools/panel', NULL, '{"en":"panel","es":"panel","pt":"panel","fr":"panel","de":"panel","it":"panel","nl":"paneel","zh":"面板","ja":"パネル","ru":"панель"}', 26
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'industrial_processing/mining_maintenance/tools/platform', 'industrial_processing', 'mining_maintenance', 'tools', 'industrial_processing/mining_maintenance/tools/platform', NULL, '{"en":"platform","es":"platform","pt":"platform","fr":"platform","de":"platform","it":"platform","nl":"platform","zh":"站台","ja":"プラットフォーム","ru":"платформа"}', 28
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'industrial_processing/mining_maintenance/tools/screwdriver', 'industrial_processing', 'mining_maintenance', 'tools', 'industrial_processing/mining_maintenance/tools/screwdriver', NULL, '{"en":"screwdriver","es":"screwdriver","pt":"screwdriver","fr":"screwdriver","de":"screwdriver","it":"screwdriver","nl":"schroevendraaier","zh":"螺丝刀","ja":"ドライバー","ru":"отвертка"}', 30
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'industrial_processing/mining_maintenance/tools/sensor', 'industrial_processing', 'mining_maintenance', 'tools', 'industrial_processing/mining_maintenance/tools/sensor', NULL, '{"en":"sensor","es":"sensor","pt":"sensor","fr":"sensor","de":"sensor","it":"sensor","nl":"sensor","zh":"传感器","ja":"センサー","ru":"датчик"}', 32
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'industrial_processing/mining_maintenance/tools/switch', 'industrial_processing', 'mining_maintenance', 'tools', 'industrial_processing/mining_maintenance/tools/switch', NULL, '{"en":"switch","es":"switch","pt":"switch","fr":"switch","de":"switch","it":"switch","nl":"schakelaar","zh":"开关","ja":"スイッチ","ru":"выключатель"}', 34
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'industrial_processing/mining_maintenance/tools/tester', 'industrial_processing', 'mining_maintenance', 'tools', 'industrial_processing/mining_maintenance/tools/tester', NULL, '{"en":"tester","es":"tester","pt":"tester","fr":"tester","de":"tester","it":"tester","nl":"tester","zh":"测试仪","ja":"テスター","ru":"тестер"}', 36
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'industrial_processing/mining_maintenance/tools/toolbox', 'industrial_processing', 'mining_maintenance', 'tools', 'industrial_processing/mining_maintenance/tools/toolbox', NULL, '{"en":"toolbox","es":"toolbox","pt":"toolbox","fr":"toolbox","de":"toolbox","it":"toolbox","nl":"gereedschapskist","zh":"工具箱","ja":"ツールボックス","ru":"ящик для инструментов"}', 38
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'industrial_processing/mining_maintenance/tools/torch', 'industrial_processing', 'mining_maintenance', 'tools', 'industrial_processing/mining_maintenance/tools/torch', NULL, '{"en":"torch","es":"torch","pt":"torch","fr":"torch","de":"torch","it":"torch","nl":"lasbrander","zh":"焊炬","ja":"トーチ","ru":"горелка"}', 40
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'industrial_processing/mining_maintenance/tools/welder', 'industrial_processing', 'mining_maintenance', 'tools', 'industrial_processing/mining_maintenance/tools/welder', NULL, '{"en":"welder","es":"welder","pt":"welder","fr":"welder","de":"welder","it":"welder","nl":"lasmachine","zh":"焊接机","ja":"溶接機","ru":"сварочный аппарат"}', 42
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'industrial_processing/mining_maintenance/tools/wrench', 'industrial_processing', 'mining_maintenance', 'tools', 'industrial_processing/mining_maintenance/tools/wrench', NULL, '{"en":"wrench","es":"llave","pt":"chave inglesa","fr":"clé","de":"Schraubenschlüssel","it":"chiave","nl":"moersleutel","zh":"扳手","ja":"レンチ","ru":"гаечный ключ"}', 44
);
INSERT INTO public.roles (id, job_id, sector_id, name, icon, sort_order) VALUES (
  'materials', 'industrial_processing', 'mining_maintenance', '{"en":"Materials","es":"Materiales","pt":"Materiais","fr":"Matériaux","de":"Materialien","it":"Materiali","nl":"Materialen","zh":"材料","ja":"材料","ru":"Материалы"}', '📦', 1
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'industrial_processing/mining_maintenance/materials/bolt', 'industrial_processing', 'mining_maintenance', 'materials', 'industrial_processing/mining_maintenance/materials/bolt', NULL, '{"en":"bolt","es":"bolt","pt":"bolt","fr":"bolt","de":"bolt","it":"bolt","nl":"bout","zh":"螺栓","ja":"ボルト","ru":"болт"}', 0
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'industrial_processing/mining_maintenance/materials/chain', 'industrial_processing', 'mining_maintenance', 'materials', 'industrial_processing/mining_maintenance/materials/chain', NULL, '{"en":"chain","es":"cadena","pt":"corrente","fr":"chaîne","de":"Kette","it":"catena","nl":"ketting","zh":"链条","ja":"チェーン","ru":"цепь"}', 2
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'industrial_processing/mining_maintenance/materials/clamp', 'industrial_processing', 'mining_maintenance', 'materials', 'industrial_processing/mining_maintenance/materials/clamp', NULL, '{"en":"clamp","es":"clamp","pt":"clamp","fr":"clamp","de":"clamp","it":"clamp","nl":"klem","zh":"夹具","ja":"クランプ","ru":"зажим"}', 4
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'industrial_processing/mining_maintenance/materials/cleaner', 'industrial_processing', 'mining_maintenance', 'materials', 'industrial_processing/mining_maintenance/materials/cleaner', NULL, '{"en":"cleaner","es":"cleaner","pt":"cleaner","fr":"cleaner","de":"cleaner","it":"cleaner","nl":"reiniger","zh":"清洁剂","ja":"洗浄剤","ru":"чистящее средство"}', 6
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'industrial_processing/mining_maintenance/materials/container', 'industrial_processing', 'mining_maintenance', 'materials', 'industrial_processing/mining_maintenance/materials/container', NULL, '{"en":"container","es":"contenedor","pt":"recipiente","fr":"conteneur","de":"Behälter","it":"contenitore","nl":"container","zh":"容器","ja":"コンテナ","ru":"контейнер"}', 8
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'industrial_processing/mining_maintenance/materials/filter', 'industrial_processing', 'mining_maintenance', 'materials', 'industrial_processing/mining_maintenance/materials/filter', NULL, '{"en":"filter","es":"filtro","pt":"filtro","fr":"filtre","de":"Filter","it":"filtro","nl":"filter","zh":"过滤器","ja":"フィルター","ru":"фильтр"}', 10
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'industrial_processing/mining_maintenance/materials/glue', 'industrial_processing', 'mining_maintenance', 'materials', 'industrial_processing/mining_maintenance/materials/glue', NULL, '{"en":"glue","es":"glue","pt":"glue","fr":"glue","de":"glue","it":"glue","nl":"lijm","zh":"胶水","ja":"接着剤","ru":"клей"}', 12
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'industrial_processing/mining_maintenance/materials/grease', 'industrial_processing', 'mining_maintenance', 'materials', 'industrial_processing/mining_maintenance/materials/grease', NULL, '{"en":"grease","es":"grease","pt":"grease","fr":"grease","de":"grease","it":"grease","nl":"vet","zh":"润滑脂","ja":"グリース","ru":"смазка"}', 14
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'industrial_processing/mining_maintenance/materials/hook', 'industrial_processing', 'mining_maintenance', 'materials', 'industrial_processing/mining_maintenance/materials/hook', NULL, '{"en":"hook","es":"gancho","pt":"gancho","fr":"crochet","de":"Haken","it":"gancio","nl":"haak","zh":"挂钩","ja":"フック","ru":"крюк"}', 16
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'industrial_processing/mining_maintenance/materials/hose', 'industrial_processing', 'mining_maintenance', 'materials', 'industrial_processing/mining_maintenance/materials/hose', NULL, '{"en":"hose","es":"manguera","pt":"mangueira","fr":"tuyau","de":"Schlauch","it":"tubo","nl":"slang","zh":"软管","ja":"ホース","ru":"шланг"}', 18
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'industrial_processing/mining_maintenance/materials/nut', 'industrial_processing', 'mining_maintenance', 'materials', 'industrial_processing/mining_maintenance/materials/nut', NULL, '{"en":"nut","es":"nut","pt":"nut","fr":"nut","de":"nut","it":"nut","nl":"moer","zh":"螺母","ja":"ナット","ru":"гайка"}', 20
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'industrial_processing/mining_maintenance/materials/oil', 'industrial_processing', 'mining_maintenance', 'materials', 'industrial_processing/mining_maintenance/materials/oil', NULL, '{"en":"oil","es":"oil","pt":"oil","fr":"oil","de":"oil","it":"oil","nl":"olie","zh":"油","ja":"オイル","ru":"масло"}', 22
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'industrial_processing/mining_maintenance/materials/pipe', 'industrial_processing', 'mining_maintenance', 'materials', 'industrial_processing/mining_maintenance/materials/pipe', NULL, '{"en":"pipe","es":"tubo","pt":"cano","fr":"tuyau","de":"Rohr","it":"tubo","nl":"pijp","zh":"管道","ja":"パイプ","ru":"труба"}', 24
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'industrial_processing/mining_maintenance/materials/rope', 'industrial_processing', 'mining_maintenance', 'materials', 'industrial_processing/mining_maintenance/materials/rope', NULL, '{"en":"rope","es":"cuerda","pt":"corda","fr":"corde","de":"Seil","it":"corda","nl":"touw","zh":"绳子","ja":"ロープ","ru":"веревка"}', 26
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'industrial_processing/mining_maintenance/materials/screw', 'industrial_processing', 'mining_maintenance', 'materials', 'industrial_processing/mining_maintenance/materials/screw', NULL, '{"en":"screw","es":"screw","pt":"screw","fr":"screw","de":"screw","it":"screw","nl":"schroef","zh":"螺丝","ja":"ネジ","ru":"винт"}', 28
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'industrial_processing/mining_maintenance/materials/seal', 'industrial_processing', 'mining_maintenance', 'materials', 'industrial_processing/mining_maintenance/materials/seal', NULL, '{"en":"seal","es":"seal","pt":"seal","fr":"seal","de":"seal","it":"seal","nl":"afdichting","zh":"密封件","ja":"シール","ru":"уплотнение"}', 30
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'industrial_processing/mining_maintenance/materials/tank', 'industrial_processing', 'mining_maintenance', 'materials', 'industrial_processing/mining_maintenance/materials/tank', NULL, '{"en":"tank","es":"tanque","pt":"tanque","fr":"réservoir","de":"Tank","it":"serbatoio","nl":"tank","zh":"容器","ja":"タンク","ru":"резервуар"}', 32
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'industrial_processing/mining_maintenance/materials/tape', 'industrial_processing', 'mining_maintenance', 'materials', 'industrial_processing/mining_maintenance/materials/tape', NULL, '{"en":"tape","es":"cinta","pt":"fita","fr":"ruban","de":"Klebeband","it":"nastro","nl":"tape","zh":"胶带","ja":"テープ","ru":"лента"}', 34
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'industrial_processing/mining_maintenance/materials/valve', 'industrial_processing', 'mining_maintenance', 'materials', 'industrial_processing/mining_maintenance/materials/valve', NULL, '{"en":"valve","es":"valve","pt":"valve","fr":"valve","de":"valve","it":"valve","nl":"klep","zh":"阀门","ja":"バルブ","ru":"клапан"}', 36
);

INSERT INTO public.sectors (id, job_id, name, icon, sort_order) VALUES (
  'mining_processing', 'industrial_processing', '{"en":"Mining Processing","es":"Procesamiento Minero","pt":"Processamento","fr":"Traitement","de":"Bergbauverarbeitung","it":"Lavorazione","nl":"Mijnbouw verwerking","zh":"矿山加工","ja":"採掘加工","ru":"Горнодобывающая обработка"}', '⚙️', 5
);
INSERT INTO public.roles (id, job_id, sector_id, name, icon, sort_order) VALUES (
  'tools', 'industrial_processing', 'mining_processing', '{"en":"Tools","es":"Herramientas","pt":"Ferramentas","fr":"Outils","de":"Werkzeuge","it":"Attrezzi","nl":"Gereedschap","zh":"工具","ja":"道具","ru":"Инструменты"}', '🔧', 0
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'industrial_processing/mining_processing/tools/alarm', 'industrial_processing', 'mining_processing', 'tools', 'industrial_processing/mining_processing/tools/alarm', NULL, '{"en":"alarm","es":"alarm","pt":"alarm","fr":"alarm","de":"alarm","it":"alarm","nl":"alarm","zh":"警报器","ja":"アラーム","ru":"сигнализация"}', 0
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'industrial_processing/mining_processing/tools/belt', 'industrial_processing', 'mining_processing', 'tools', 'industrial_processing/mining_processing/tools/belt', NULL, '{"en":"belt","es":"belt","pt":"belt","fr":"belt","de":"belt","it":"belt","nl":"riem","zh":"皮带","ja":"ベルト","ru":"ремень"}', 2
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'industrial_processing/mining_processing/tools/bin', 'industrial_processing', 'mining_processing', 'tools', 'industrial_processing/mining_processing/tools/bin', NULL, '{"en":"bin","es":"cubo de basura","pt":"lixeira","fr":"poubelle","de":"Mülleimer","it":"bidone","nl":"prullenbak","zh":"垃圾桶","ja":"ビン","ru":"мусорное ведро"}', 4
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'industrial_processing/mining_processing/tools/box', 'industrial_processing', 'mining_processing', 'tools', 'industrial_processing/mining_processing/tools/box', NULL, '{"en":"box","es":"caja","pt":"caixa","fr":"boîte","de":"Kasten","it":"scatola","nl":"doos","zh":"箱子","ja":"ボックス","ru":"коробка"}', 6
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'industrial_processing/mining_processing/tools/bucket', 'industrial_processing', 'mining_processing', 'tools', 'industrial_processing/mining_processing/tools/bucket', NULL, '{"en":"bucket","es":"cubo","pt":"balde","fr":"seau","de":"Eimer","it":"secchio","nl":"emmer","zh":"水桶","ja":"バケツ","ru":"ведро"}', 8
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'industrial_processing/mining_processing/tools/button', 'industrial_processing', 'mining_processing', 'tools', 'industrial_processing/mining_processing/tools/button', NULL, '{"en":"button","es":"button","pt":"button","fr":"button","de":"button","it":"button","nl":"knop","zh":"按钮","ja":"ボタン","ru":"кнопка"}', 10
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'industrial_processing/mining_processing/tools/cart', 'industrial_processing', 'mining_processing', 'tools', 'industrial_processing/mining_processing/tools/cart', NULL, '{"en":"cart","es":"carrito","pt":"carrinho","fr":"chariot","de":"Wagen","it":"carrello","nl":"kar","zh":"推车","ja":"カート","ru":"тележка"}', 12
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'industrial_processing/mining_processing/tools/clamp', 'industrial_processing', 'mining_processing', 'tools', 'industrial_processing/mining_processing/tools/clamp', NULL, '{"en":"clamp","es":"clamp","pt":"clamp","fr":"clamp","de":"clamp","it":"clamp","nl":"klem","zh":"夹具","ja":"クランプ","ru":"зажим"}', 14
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'industrial_processing/mining_processing/tools/container', 'industrial_processing', 'mining_processing', 'tools', 'industrial_processing/mining_processing/tools/container', NULL, '{"en":"container","es":"contenedor","pt":"recipiente","fr":"conteneur","de":"Behälter","it":"contenitore","nl":"container","zh":"容器","ja":"コンテナ","ru":"контейнер"}', 16
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'industrial_processing/mining_processing/tools/control_panel', 'industrial_processing', 'mining_processing', 'tools', 'industrial_processing/mining_processing/tools/control_panel', NULL, '{"en":"control panel","es":"control panel","pt":"control panel","fr":"control panel","de":"control panel","it":"control panel","nl":"bedieningspaneel","zh":"控制面板","ja":"コントロールパネル","ru":"панель управления"}', 18
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'industrial_processing/mining_processing/tools/conveyor', 'industrial_processing', 'mining_processing', 'tools', 'industrial_processing/mining_processing/tools/conveyor', NULL, '{"en":"conveyor","es":"conveyor","pt":"conveyor","fr":"conveyor","de":"conveyor","it":"conveyor","nl":"transportband","zh":"传送带","ja":"コンベア","ru":"конвейер"}', 20
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'industrial_processing/mining_processing/tools/crusher', 'industrial_processing', 'mining_processing', 'tools', 'industrial_processing/mining_processing/tools/crusher', NULL, '{"en":"crusher","es":"crusher","pt":"crusher","fr":"crusher","de":"crusher","it":"crusher","nl":"crusher","zh":"粉碎机","ja":"クラッシャー","ru":"дробилка"}', 22
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'industrial_processing/mining_processing/tools/engine', 'industrial_processing', 'mining_processing', 'tools', 'industrial_processing/mining_processing/tools/engine', NULL, '{"en":"engine","es":"engine","pt":"engine","fr":"engine","de":"engine","it":"engine","nl":"motor","zh":"发动机","ja":"エンジン","ru":"двигатель"}', 24
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'industrial_processing/mining_processing/tools/filter', 'industrial_processing', 'mining_processing', 'tools', 'industrial_processing/mining_processing/tools/filter', NULL, '{"en":"filter","es":"filtro","pt":"filtro","fr":"filtre","de":"Filter","it":"filtro","nl":"filter","zh":"过滤器","ja":"フィルター","ru":"фильтр"}', 26
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'industrial_processing/mining_processing/tools/gauge', 'industrial_processing', 'mining_processing', 'tools', 'industrial_processing/mining_processing/tools/gauge', NULL, '{"en":"gauge","es":"medidor","pt":"medidor","fr":"jauge","de":"Messgerät","it":"calibro","nl":"meter","zh":"仪表","ja":"ゲージ","ru":"манометр"}', 28
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'industrial_processing/mining_processing/tools/grinder', 'industrial_processing', 'mining_processing', 'tools', 'industrial_processing/mining_processing/tools/grinder', NULL, '{"en":"grinder","es":"grinder","pt":"grinder","fr":"grinder","de":"grinder","it":"grinder","nl":"slijpmachine","zh":"研磨机","ja":"グラインダー","ru":"шлифовальная машина"}', 30
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'industrial_processing/mining_processing/tools/hammer', 'industrial_processing', 'mining_processing', 'tools', 'industrial_processing/mining_processing/tools/hammer', NULL, '{"en":"hammer","es":"martillo","pt":"martelo","fr":"marteau","de":"Hammer","it":"martello","nl":"hamer","zh":"锤子","ja":"ハンマー","ru":"молоток"}', 32
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'industrial_processing/mining_processing/tools/lever', 'industrial_processing', 'mining_processing', 'tools', 'industrial_processing/mining_processing/tools/lever', NULL, '{"en":"lever","es":"lever","pt":"lever","fr":"lever","de":"lever","it":"lever","nl":"hefboom","zh":"杠杆","ja":"レバー","ru":"рычаг"}', 34
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'industrial_processing/mining_processing/tools/meter', 'industrial_processing', 'mining_processing', 'tools', 'industrial_processing/mining_processing/tools/meter', NULL, '{"en":"meter","es":"medidor","pt":"medidor","fr":"mètre","de":"Messgerät","it":"metro","nl":"meter","zh":"仪表","ja":"メーター","ru":"счетчик"}', 36
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'industrial_processing/mining_processing/tools/mixer', 'industrial_processing', 'mining_processing', 'tools', 'industrial_processing/mining_processing/tools/mixer', NULL, '{"en":"mixer","es":"mezclador","pt":"betoneira","fr":"mélangeur","de":"Mischer","it":"miscelatore","nl":"mixer","zh":"搅拌机","ja":"ミキサー","ru":"миксер"}', 38
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'industrial_processing/mining_processing/tools/monitor', 'industrial_processing', 'mining_processing', 'tools', 'industrial_processing/mining_processing/tools/monitor', NULL, '{"en":"monitor","es":"monitor","pt":"monitor","fr":"monitor","de":"monitor","it":"monitor","nl":"monitor","zh":"显示器","ja":"モニター","ru":"монитор"}', 40
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'industrial_processing/mining_processing/tools/motor', 'industrial_processing', 'mining_processing', 'tools', 'industrial_processing/mining_processing/tools/motor', NULL, '{"en":"motor","es":"motor","pt":"motor","fr":"motor","de":"motor","it":"motor","nl":"motor","zh":"电机","ja":"モーター","ru":"мотор"}', 42
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'industrial_processing/mining_processing/tools/pallet', 'industrial_processing', 'mining_processing', 'tools', 'industrial_processing/mining_processing/tools/pallet', NULL, '{"en":"pallet","es":"palé","pt":"palete","fr":"palette","de":"Palette","it":"pallet","nl":"pallet","zh":"托盘","ja":"パレット","ru":"паллет"}', 44
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'industrial_processing/mining_processing/tools/pipe', 'industrial_processing', 'mining_processing', 'tools', 'industrial_processing/mining_processing/tools/pipe', NULL, '{"en":"pipe","es":"tubo","pt":"cano","fr":"tuyau","de":"Rohr","it":"tubo","nl":"pijp","zh":"管道","ja":"パイプ","ru":"труба"}', 46
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'industrial_processing/mining_processing/tools/pump', 'industrial_processing', 'mining_processing', 'tools', 'industrial_processing/mining_processing/tools/pump', NULL, '{"en":"pump","es":"bomba","pt":"bomba","fr":"pompe","de":"Pumpe","it":"pompa","nl":"pomp","zh":"泵","ja":"ポンプ","ru":"насос"}', 48
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'industrial_processing/mining_processing/tools/rack', 'industrial_processing', 'mining_processing', 'tools', 'industrial_processing/mining_processing/tools/rack', NULL, '{"en":"rack","es":"estante","pt":"prateleira","fr":"étagère","de":"Regal","it":"scaffale","nl":"rek","zh":"货架","ja":"ラック","ru":"стеллаж"}', 50
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'industrial_processing/mining_processing/tools/roller', 'industrial_processing', 'mining_processing', 'tools', 'industrial_processing/mining_processing/tools/roller', NULL, '{"en":"roller","es":"rodillo","pt":"rolo","fr":"rouleau","de":"Rolle","it":"rullo","nl":"roller","zh":"滚筒","ja":"ローラー","ru":"валик"}', 52
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'industrial_processing/mining_processing/tools/sampler', 'industrial_processing', 'mining_processing', 'tools', 'industrial_processing/mining_processing/tools/sampler', NULL, '{"en":"sampler","es":"sampler","pt":"sampler","fr":"sampler","de":"sampler","it":"sampler","nl":"sampler","zh":"取样器","ja":"サンプラー","ru":"пробоотборник"}', 54
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'industrial_processing/mining_processing/tools/scale', 'industrial_processing', 'mining_processing', 'tools', 'industrial_processing/mining_processing/tools/scale', NULL, '{"en":"scale","es":"báscula","pt":"balança","fr":"balance","de":"Waage","it":"bilancia","nl":"weegschaal","zh":"秤","ja":"スケール","ru":"весы"}', 56
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'industrial_processing/mining_processing/tools/screen', 'industrial_processing', 'mining_processing', 'tools', 'industrial_processing/mining_processing/tools/screen', NULL, '{"en":"screen","es":"screen","pt":"screen","fr":"screen","de":"screen","it":"screen","nl":"scherm","zh":"屏幕","ja":"スクリーン","ru":"экран"}', 58
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'industrial_processing/mining_processing/tools/screwdriver', 'industrial_processing', 'mining_processing', 'tools', 'industrial_processing/mining_processing/tools/screwdriver', NULL, '{"en":"screwdriver","es":"screwdriver","pt":"screwdriver","fr":"screwdriver","de":"screwdriver","it":"screwdriver","nl":"schroevendraaier","zh":"螺丝刀","ja":"ドライバー","ru":"отвертка"}', 60
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'industrial_processing/mining_processing/tools/sensor', 'industrial_processing', 'mining_processing', 'tools', 'industrial_processing/mining_processing/tools/sensor', NULL, '{"en":"sensor","es":"sensor","pt":"sensor","fr":"sensor","de":"sensor","it":"sensor","nl":"sensor","zh":"传感器","ja":"センサー","ru":"датчик"}', 62
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'industrial_processing/mining_processing/tools/separator', 'industrial_processing', 'mining_processing', 'tools', 'industrial_processing/mining_processing/tools/separator', NULL, '{"en":"separator","es":"separator","pt":"separator","fr":"separator","de":"separator","it":"separator","nl":"separator","zh":"分离器","ja":"セパレーター","ru":"сепаратор"}', 64
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'industrial_processing/mining_processing/tools/switch', 'industrial_processing', 'mining_processing', 'tools', 'industrial_processing/mining_processing/tools/switch', NULL, '{"en":"switch","es":"switch","pt":"switch","fr":"switch","de":"switch","it":"switch","nl":"schakelaar","zh":"开关","ja":"スイッチ","ru":"выключатель"}', 66
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'industrial_processing/mining_processing/tools/tank', 'industrial_processing', 'mining_processing', 'tools', 'industrial_processing/mining_processing/tools/tank', NULL, '{"en":"tank","es":"tanque","pt":"tanque","fr":"réservoir","de":"Tank","it":"serbatoio","nl":"tank","zh":"容器","ja":"タンク","ru":"резервуар"}', 68
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'industrial_processing/mining_processing/tools/tester', 'industrial_processing', 'mining_processing', 'tools', 'industrial_processing/mining_processing/tools/tester', NULL, '{"en":"tester","es":"tester","pt":"tester","fr":"tester","de":"tester","it":"tester","nl":"tester","zh":"测试仪","ja":"テスター","ru":"тестер"}', 70
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'industrial_processing/mining_processing/tools/tool', 'industrial_processing', 'mining_processing', 'tools', 'industrial_processing/mining_processing/tools/tool', NULL, '{"en":"tool","es":"tool","pt":"tool","fr":"tool","de":"tool","it":"tool","nl":"gereedschap","zh":"工具","ja":"ツール","ru":"инструмент"}', 72
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'industrial_processing/mining_processing/tools/trolley', 'industrial_processing', 'mining_processing', 'tools', 'industrial_processing/mining_processing/tools/trolley', NULL, '{"en":"trolley","es":"carrito","pt":"carrinho","fr":"chariot","de":"Trolley","it":"carrello","nl":"trolley","zh":"手推车","ja":"トロリー","ru":"тележка"}', 74
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'industrial_processing/mining_processing/tools/valve', 'industrial_processing', 'mining_processing', 'tools', 'industrial_processing/mining_processing/tools/valve', NULL, '{"en":"valve","es":"valve","pt":"valve","fr":"valve","de":"valve","it":"valve","nl":"klep","zh":"阀门","ja":"バルブ","ru":"клапан"}', 76
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'industrial_processing/mining_processing/tools/wrench', 'industrial_processing', 'mining_processing', 'tools', 'industrial_processing/mining_processing/tools/wrench', NULL, '{"en":"wrench","es":"llave","pt":"chave inglesa","fr":"clé","de":"Schraubenschlüssel","it":"chiave","nl":"moersleutel","zh":"扳手","ja":"レンチ","ru":"гаечный ключ"}', 78
);
INSERT INTO public.roles (id, job_id, sector_id, name, icon, sort_order) VALUES (
  'materials', 'industrial_processing', 'mining_processing', '{"en":"Materials","es":"Materiales","pt":"Materiais","fr":"Matériaux","de":"Materialien","it":"Materiali","nl":"Materialen","zh":"材料","ja":"材料","ru":"Материалы"}', '📦', 1
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'industrial_processing/mining_processing/materials/chemicals', 'industrial_processing', 'mining_processing', 'materials', 'industrial_processing/mining_processing/materials/chemicals', NULL, '{"en":"chemicals","es":"chemicals","pt":"chemicals","fr":"chemicals","de":"chemicals","it":"chemicals","nl":"chemicaliën","zh":"化学品","ja":"化学物質","ru":"химические вещества"}', 0
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'industrial_processing/mining_processing/materials/ore', 'industrial_processing', 'mining_processing', 'materials', 'industrial_processing/mining_processing/materials/ore', NULL, '{"en":"ore","es":"ore","pt":"ore","fr":"ore","de":"ore","it":"ore","nl":"erts","zh":"矿石","ja":"鉱石","ru":"руда"}', 2
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'industrial_processing/mining_processing/materials/processing_agents', 'industrial_processing', 'mining_processing', 'materials', 'industrial_processing/mining_processing/materials/processing_agents', NULL, '{"en":"processing agents","es":"processing agents","pt":"processing agents","fr":"processing agents","de":"processing agents","it":"processing agents","nl":"verwerkingsmiddelen","zh":"加工剂","ja":"加工剤","ru":"технологические добавки"}', 4
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'industrial_processing/mining_processing/materials/water', 'industrial_processing', 'mining_processing', 'materials', 'industrial_processing/mining_processing/materials/water', NULL, '{"en":"water","es":"agua","pt":"água","fr":"eau","de":"Wasser","it":"acqua","nl":"water","zh":"水","ja":"水","ru":"вода"}', 6
);

INSERT INTO public.jobs (id, name, icon, image_url, sort_order) VALUES (
  'office', '{"en":"Office","es":"Oficina","pt":"Escritório","fr":"Bureau","de":"Büro","it":"Ufficio","nl":"Kantoor","zh":"办公室","ja":"オフィス","ru":"Офис"}', '💼', 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800', 8
);

INSERT INTO public.sectors (id, job_id, name, icon, sort_order) VALUES (
  'office_assistant', 'office', '{"en":"Office Assistant","es":"Auxiliar Administrativo","pt":"Auxiliar de Escritório","fr":"Assistant de Bureau","de":"Bürohilfe","it":"Assistente Ufficio","nl":"Kantoorassistent","zh":"办公室助理","ja":"オフィスアシスタント","ru":"Офисный помощник"}', '💼', 0
);
INSERT INTO public.roles (id, job_id, sector_id, name, icon, sort_order) VALUES (
  'tools', 'office', 'office_assistant', '{"en":"Tools","es":"Herramientas","pt":"Ferramentas","fr":"Outils","de":"Werkzeuge","it":"Attrezzi","nl":"Gereedschap","zh":"工具","ja":"道具","ru":"Инструменты"}', '🔧', 0
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'office/office_assistant/tools/access_card', 'office', 'office_assistant', 'tools', 'office/office_assistant/tools/access_card', NULL, '{"en":"access card","es":"access card","pt":"access card","fr":"access card","de":"access card","it":"access card","nl":"toegangspas","zh":"门禁卡","ja":"アクセスカード","ru":"карта доступа"}', 0
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'office/office_assistant/tools/badge', 'office', 'office_assistant', 'tools', 'office/office_assistant/tools/badge', NULL, '{"en":"badge","es":"badge","pt":"badge","fr":"badge","de":"badge","it":"badge","nl":"badge","zh":"徽章","ja":"バッジ","ru":"бейдж"}', 2
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'office/office_assistant/tools/binder', 'office', 'office_assistant', 'tools', 'office/office_assistant/tools/binder', NULL, '{"en":"binder","es":"binder","pt":"binder","fr":"binder","de":"binder","it":"binder","nl":"ordner","zh":"活页夹","ja":"バインダー","ru":"папка"}', 4
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'office/office_assistant/tools/binder_clip', 'office', 'office_assistant', 'tools', 'office/office_assistant/tools/binder_clip', NULL, '{"en":"binder clip","es":"binder clip","pt":"binder clip","fr":"binder clip","de":"binder clip","it":"binder clip","nl":"binder clip","zh":"长尾夹","ja":"バインダークリップ","ru":"зажим для бумаг"}', 6
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'office/office_assistant/tools/cabinet', 'office', 'office_assistant', 'tools', 'office/office_assistant/tools/cabinet', NULL, '{"en":"cabinet","es":"cabinet","pt":"cabinet","fr":"cabinet","de":"cabinet","it":"cabinet","nl":"kast","zh":"柜子","ja":"キャビネット","ru":"шкаф"}', 8
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'office/office_assistant/tools/calculator', 'office', 'office_assistant', 'tools', 'office/office_assistant/tools/calculator', NULL, '{"en":"calculator","es":"calculator","pt":"calculator","fr":"calculator","de":"calculator","it":"calculator","nl":"rekenmachine","zh":"计算器","ja":"電卓","ru":"калькулятор"}', 10
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'office/office_assistant/tools/calendar', 'office', 'office_assistant', 'tools', 'office/office_assistant/tools/calendar', NULL, '{"en":"calendar","es":"calendar","pt":"calendar","fr":"calendar","de":"calendar","it":"calendar","nl":"kalender","zh":"日历","ja":"カレンダー","ru":"календарь"}', 12
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'office/office_assistant/tools/chair', 'office', 'office_assistant', 'tools', 'office/office_assistant/tools/chair', NULL, '{"en":"chair","es":"silla","pt":"cadeira","fr":"chaise","de":"Stuhl","it":"sedia","nl":"stoel","zh":"椅子","ja":"椅子","ru":"стул"}', 14
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'office/office_assistant/tools/clock', 'office', 'office_assistant', 'tools', 'office/office_assistant/tools/clock', NULL, '{"en":"clock","es":"clock","pt":"clock","fr":"clock","de":"clock","it":"clock","nl":"klok","zh":"时钟","ja":"時計","ru":"часы"}', 16
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'office/office_assistant/tools/coffee_machine', 'office', 'office_assistant', 'tools', 'office/office_assistant/tools/coffee_machine', NULL, '{"en":"coffee machine","es":"coffee machine","pt":"coffee machine","fr":"coffee machine","de":"coffee machine","it":"coffee machine","nl":"koffiemachine","zh":"咖啡机","ja":"コーヒーメーカー","ru":"кофемашина"}', 18
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'office/office_assistant/tools/computer', 'office', 'office_assistant', 'tools', 'office/office_assistant/tools/computer', NULL, '{"en":"computer","es":"computadora","pt":"computador","fr":"ordinateur","de":"Computer","it":"computer","nl":"computer","zh":"电脑","ja":"コンピューター","ru":"компьютер"}', 20
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'office/office_assistant/tools/desk', 'office', 'office_assistant', 'tools', 'office/office_assistant/tools/desk', NULL, '{"en":"desk","es":"escritorio","pt":"mesa","fr":"bureau","de":"Schreibtisch","it":"scrivania","nl":"bureau","zh":"办公桌","ja":"デスク","ru":"стол"}', 22
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'office/office_assistant/tools/desk_lamp', 'office', 'office_assistant', 'tools', 'office/office_assistant/tools/desk_lamp', NULL, '{"en":"desk lamp","es":"desk lamp","pt":"desk lamp","fr":"desk lamp","de":"desk lamp","it":"desk lamp","nl":"bureaulamp","zh":"台灯","ja":"デスクランプ","ru":"настольная лампа"}', 24
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'office/office_assistant/tools/drawer', 'office', 'office_assistant', 'tools', 'office/office_assistant/tools/drawer', NULL, '{"en":"drawer","es":"drawer","pt":"drawer","fr":"drawer","de":"drawer","it":"drawer","nl":"lade","zh":"抽屉","ja":"引き出し","ru":"ящик"}', 26
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'office/office_assistant/tools/envelope', 'office', 'office_assistant', 'tools', 'office/office_assistant/tools/envelope', NULL, '{"en":"envelope","es":"envelope","pt":"envelope","fr":"envelope","de":"envelope","it":"envelope","nl":"envelop","zh":"信封","ja":"封筒","ru":"конверт"}', 28
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'office/office_assistant/tools/folder', 'office', 'office_assistant', 'tools', 'office/office_assistant/tools/folder', NULL, '{"en":"folder","es":"carpeta","pt":"pasta","fr":"dossier","de":"Ordner","it":"cartella","nl":"map","zh":"文件夹","ja":"フォルダー","ru":"папка"}', 30
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'office/office_assistant/tools/hard_drive', 'office', 'office_assistant', 'tools', 'office/office_assistant/tools/hard_drive', NULL, '{"en":"hard drive","es":"hard drive","pt":"hard drive","fr":"hard drive","de":"hard drive","it":"hard drive","nl":"harde schijf","zh":"硬盘","ja":"ハードドライブ","ru":"жесткий диск"}', 32
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'office/office_assistant/tools/headset', 'office', 'office_assistant', 'tools', 'office/office_assistant/tools/headset', NULL, '{"en":"headset","es":"headset","pt":"headset","fr":"headset","de":"headset","it":"headset","nl":"headset","zh":"耳机","ja":"ヘッドセット","ru":"гарнитура"}', 34
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'office/office_assistant/tools/highlighter', 'office', 'office_assistant', 'tools', 'office/office_assistant/tools/highlighter', NULL, '{"en":"highlighter","es":"highlighter","pt":"highlighter","fr":"highlighter","de":"highlighter","it":"highlighter","nl":"markeerstift","zh":"荧光笔","ja":"ハイライター","ru":"маркер-выделитель"}', 36
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'office/office_assistant/tools/hole_punch', 'office', 'office_assistant', 'tools', 'office/office_assistant/tools/hole_punch', NULL, '{"en":"hole punch","es":"hole punch","pt":"hole punch","fr":"hole punch","de":"hole punch","it":"hole punch","nl":"perforator","zh":"打孔机","ja":"ホールパンチ","ru":"дырокол"}', 38
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'office/office_assistant/tools/id_card', 'office', 'office_assistant', 'tools', 'office/office_assistant/tools/id_card', NULL, '{"en":"id card","es":"id card","pt":"id card","fr":"id card","de":"id card","it":"id card","nl":"identiteitskaart","zh":"身份证","ja":"身分証明書","ru":"удостоверение личности"}', 40
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'office/office_assistant/tools/keyboard', 'office', 'office_assistant', 'tools', 'office/office_assistant/tools/keyboard', NULL, '{"en":"keyboard","es":"teclado","pt":"teclado","fr":"clavier","de":"Tastatur","it":"tastiera","nl":"toetsenbord","zh":"键盘","ja":"キーボード","ru":"клавиатура"}', 42
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'office/office_assistant/tools/label_maker', 'office', 'office_assistant', 'tools', 'office/office_assistant/tools/label_maker', NULL, '{"en":"label maker","es":"label maker","pt":"label maker","fr":"label maker","de":"label maker","it":"label maker","nl":"etiketmaker","zh":"标签打印机","ja":"ラベルメーカー","ru":"принтер для этикеток"}', 44
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'office/office_assistant/tools/laptop', 'office', 'office_assistant', 'tools', 'office/office_assistant/tools/laptop', NULL, '{"en":"laptop","es":"laptop","pt":"laptop","fr":"laptop","de":"laptop","it":"laptop","nl":"laptop","zh":"笔记本电脑","ja":"ノートパソコン","ru":"ноутбук"}', 46
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'office/office_assistant/tools/marker', 'office', 'office_assistant', 'tools', 'office/office_assistant/tools/marker', NULL, '{"en":"marker","es":"marcador","pt":"marcador","fr":"marqueur","de":"Marker","it":"pennarello","nl":"marker","zh":"记号笔","ja":"マーカー","ru":"маркер"}', 48
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'office/office_assistant/tools/modem', 'office', 'office_assistant', 'tools', 'office/office_assistant/tools/modem', NULL, '{"en":"modem","es":"modem","pt":"modem","fr":"modem","de":"modem","it":"modem","nl":"modem","zh":"调制解调器","ja":"モデム","ru":"модем"}', 50
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'office/office_assistant/tools/monitor', 'office', 'office_assistant', 'tools', 'office/office_assistant/tools/monitor', NULL, '{"en":"monitor","es":"monitor","pt":"monitor","fr":"monitor","de":"monitor","it":"monitor","nl":"monitor","zh":"显示器","ja":"モニター","ru":"монитор"}', 52
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'office/office_assistant/tools/mouse', 'office', 'office_assistant', 'tools', 'office/office_assistant/tools/mouse', NULL, '{"en":"mouse","es":"mouse","pt":"mouse","fr":"mouse","de":"mouse","it":"mouse","nl":"muis","zh":"鼠标","ja":"マウス","ru":"мышь"}', 54
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'office/office_assistant/tools/notebook', 'office', 'office_assistant', 'tools', 'office/office_assistant/tools/notebook', NULL, '{"en":"notebook","es":"notebook","pt":"notebook","fr":"notebook","de":"notebook","it":"notebook","nl":"notitieboekje","zh":"笔记本","ja":"ノート","ru":"блокнот"}', 56
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'office/office_assistant/tools/paper_clip', 'office', 'office_assistant', 'tools', 'office/office_assistant/tools/paper_clip', NULL, '{"en":"paper clip","es":"paper clip","pt":"paper clip","fr":"paper clip","de":"paper clip","it":"paper clip","nl":"paperclip","zh":"回形针","ja":"ペーパークリップ","ru":"скрепка"}', 58
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'office/office_assistant/tools/pen', 'office', 'office_assistant', 'tools', 'office/office_assistant/tools/pen', NULL, '{"en":"pen","es":"bolígrafo","pt":"caneta","fr":"stylo","de":"Stift","it":"penna","nl":"pen","zh":"钢笔","ja":"ペン","ru":"ручка"}', 60
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'office/office_assistant/tools/pencil', 'office', 'office_assistant', 'tools', 'office/office_assistant/tools/pencil', NULL, '{"en":"pencil","es":"pencil","pt":"pencil","fr":"pencil","de":"pencil","it":"pencil","nl":"potlood","zh":"铅笔","ja":"鉛筆","ru":"карандаш"}', 62
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'office/office_assistant/tools/phone', 'office', 'office_assistant', 'tools', 'office/office_assistant/tools/phone', NULL, '{"en":"phone","es":"teléfono","pt":"telefone","fr":"téléphone","de":"Telefon","it":"telefono","nl":"telefoon","zh":"手机","ja":"電話","ru":"телефон"}', 64
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'office/office_assistant/tools/power_strip', 'office', 'office_assistant', 'tools', 'office/office_assistant/tools/power_strip', NULL, '{"en":"power strip","es":"power strip","pt":"power strip","fr":"power strip","de":"power strip","it":"power strip","nl":"verlengsnoer","zh":"电源插排","ja":"電源タップ","ru":"удлинитель"}', 66
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'office/office_assistant/tools/printer', 'office', 'office_assistant', 'tools', 'office/office_assistant/tools/printer', NULL, '{"en":"printer","es":"impresora","pt":"impressora","fr":"imprimante","de":"Drucker","it":"stampante","nl":"printer","zh":"打印机","ja":"プリンター","ru":"принтер"}', 68
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'office/office_assistant/tools/projector', 'office', 'office_assistant', 'tools', 'office/office_assistant/tools/projector', NULL, '{"en":"projector","es":"projector","pt":"projector","fr":"projector","de":"projector","it":"projector","nl":"projector","zh":"投影仪","ja":"プロジェクター","ru":"проектор"}', 70
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'office/office_assistant/tools/recycling_bin', 'office', 'office_assistant', 'tools', 'office/office_assistant/tools/recycling_bin', NULL, '{"en":"recycling bin","es":"recycling bin","pt":"recycling bin","fr":"recycling bin","de":"recycling bin","it":"recycling bin","nl":"recyclingbak","zh":"回收桶","ja":"リサイクルビン","ru":"мусорный контейнер"}', 72
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'office/office_assistant/tools/router', 'office', 'office_assistant', 'tools', 'office/office_assistant/tools/router', NULL, '{"en":"router","es":"router","pt":"router","fr":"router","de":"router","it":"router","nl":"router","zh":"路由器","ja":"ルーター","ru":"маршрутизатор"}', 74
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'office/office_assistant/tools/scanner', 'office', 'office_assistant', 'tools', 'office/office_assistant/tools/scanner', NULL, '{"en":"scanner","es":"escáner","pt":"scanner","fr":"scanner","de":"Scanner","it":"scanner","nl":"scanner","zh":"扫描仪","ja":"スキャナー","ru":"сканер"}', 76
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'office/office_assistant/tools/screen', 'office', 'office_assistant', 'tools', 'office/office_assistant/tools/screen', NULL, '{"en":"screen","es":"screen","pt":"screen","fr":"screen","de":"screen","it":"screen","nl":"scherm","zh":"屏幕","ja":"スクリーン","ru":"экран"}', 78
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'office/office_assistant/tools/shelf', 'office', 'office_assistant', 'tools', 'office/office_assistant/tools/shelf', NULL, '{"en":"shelf","es":"shelf","pt":"shelf","fr":"shelf","de":"shelf","it":"shelf","nl":"plank","zh":"架子","ja":"棚","ru":"полка"}', 80
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'office/office_assistant/tools/shredder', 'office', 'office_assistant', 'tools', 'office/office_assistant/tools/shredder', NULL, '{"en":"shredder","es":"shredder","pt":"shredder","fr":"shredder","de":"shredder","it":"shredder","nl":"versnipperaar","zh":"碎纸机","ja":"シュレッダー","ru":"шредер"}', 82
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'office/office_assistant/tools/stapler', 'office', 'office_assistant', 'tools', 'office/office_assistant/tools/stapler', NULL, '{"en":"stapler","es":"grapadora","pt":"grampeador","fr":"agrafeuse","de":"Hefter","it":"cucitrice","nl":"nietmachine","zh":"订书机","ja":"ホチキス","ru":"степлер"}', 84
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'office/office_assistant/tools/tape_dispenser', 'office', 'office_assistant', 'tools', 'office/office_assistant/tools/tape_dispenser', NULL, '{"en":"tape dispenser","es":"tape dispenser","pt":"tape dispenser","fr":"tape dispenser","de":"tape dispenser","it":"tape dispenser","nl":"plakbanddispenser","zh":"胶带分发器","ja":"テープディスペンサー","ru":"диспенсер для ленты"}', 86
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'office/office_assistant/tools/trash_bin', 'office', 'office_assistant', 'tools', 'office/office_assistant/tools/trash_bin', NULL, '{"en":"trash bin","es":"trash bin","pt":"trash bin","fr":"trash bin","de":"trash bin","it":"trash bin","nl":"vuilnisbak","zh":"垃圾桶","ja":"ゴミ箱","ru":"мусорный бак"}', 88
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'office/office_assistant/tools/tray', 'office', 'office_assistant', 'tools', 'office/office_assistant/tools/tray', NULL, '{"en":"tray","es":"bandeja","pt":"bandeja","fr":"plateau","de":"Tablett","it":"vassoio","nl":"dienblad","zh":"托盘","ja":"トレイ","ru":"поднос"}', 90
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'office/office_assistant/tools/usb_drive', 'office', 'office_assistant', 'tools', 'office/office_assistant/tools/usb_drive', NULL, '{"en":"usb drive","es":"usb drive","pt":"usb drive","fr":"usb drive","de":"usb drive","it":"usb drive","nl":"usb-stick","zh":"U盘","ja":"USBドライブ","ru":"флешка"}', 92
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'office/office_assistant/tools/water_dispenser', 'office', 'office_assistant', 'tools', 'office/office_assistant/tools/water_dispenser', NULL, '{"en":"water dispenser","es":"water dispenser","pt":"water dispenser","fr":"water dispenser","de":"water dispenser","it":"water dispenser","nl":"waterkoeler","zh":"饮水机","ja":"ウォーターディスペンサー","ru":"кулер для воды"}', 94
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'office/office_assistant/tools/webcam', 'office', 'office_assistant', 'tools', 'office/office_assistant/tools/webcam', NULL, '{"en":"webcam","es":"webcam","pt":"webcam","fr":"webcam","de":"webcam","it":"webcam","nl":"webcam","zh":"网络摄像头","ja":"ウェブカメラ","ru":"веб-камера"}', 96
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'office/office_assistant/tools/whiteboard', 'office', 'office_assistant', 'tools', 'office/office_assistant/tools/whiteboard', NULL, '{"en":"whiteboard","es":"whiteboard","pt":"whiteboard","fr":"whiteboard","de":"whiteboard","it":"whiteboard","nl":"whiteboard","zh":"白板","ja":"ホワイトボード","ru":"доска для маркеров"}', 98
);
INSERT INTO public.roles (id, job_id, sector_id, name, icon, sort_order) VALUES (
  'materials', 'office', 'office_assistant', '{"en":"Materials","es":"Materiales","pt":"Materiais","fr":"Matériaux","de":"Materialien","it":"Materiali","nl":"Materialen","zh":"材料","ja":"材料","ru":"Материалы"}', '📦', 1
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'office/office_assistant/materials/adapters', 'office', 'office_assistant', 'materials', 'office/office_assistant/materials/adapters', NULL, '{"en":"adapters","es":"adapters","pt":"adapters","fr":"adapters","de":"adapters","it":"adapters","nl":"adapters","zh":"适配器","ja":"アダプター","ru":"адаптеры"}', 0
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'office/office_assistant/materials/batteries', 'office', 'office_assistant', 'materials', 'office/office_assistant/materials/batteries', NULL, '{"en":"batteries","es":"batteries","pt":"batteries","fr":"batteries","de":"batteries","it":"batteries","nl":"batterijen","zh":"电池","ja":"電池","ru":"батарейки"}', 2
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'office/office_assistant/materials/binder_clips', 'office', 'office_assistant', 'materials', 'office/office_assistant/materials/binder_clips', NULL, '{"en":"binder clips","es":"binder clips","pt":"binder clips","fr":"binder clips","de":"binder clips","it":"binder clips","nl":"binder clips","zh":"长尾夹","ja":"バインダークリップ","ru":"зажимы для бумаг"}', 4
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'office/office_assistant/materials/boxes', 'office', 'office_assistant', 'materials', 'office/office_assistant/materials/boxes', NULL, '{"en":"boxes","es":"boxes","pt":"boxes","fr":"boxes","de":"boxes","it":"boxes","nl":"dozen","zh":"箱子","ja":"ボックス","ru":"коробки"}', 6
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'office/office_assistant/materials/brochures', 'office', 'office_assistant', 'materials', 'office/office_assistant/materials/brochures', NULL, '{"en":"brochures","es":"brochures","pt":"brochures","fr":"brochures","de":"brochures","it":"brochures","nl":"brochures","zh":"宣传册","ja":"パンフレット","ru":"брошюры"}', 8
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'office/office_assistant/materials/cables', 'office', 'office_assistant', 'materials', 'office/office_assistant/materials/cables', NULL, '{"en":"cables","es":"cables","pt":"cables","fr":"cables","de":"cables","it":"cables","nl":"kabels","zh":"电缆","ja":"ケーブル","ru":"кабели"}', 10
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'office/office_assistant/materials/carbon_paper', 'office', 'office_assistant', 'materials', 'office/office_assistant/materials/carbon_paper', NULL, '{"en":"carbon paper","es":"carbon paper","pt":"carbon paper","fr":"carbon paper","de":"carbon paper","it":"carbon paper","nl":"carbonpapier","zh":"复写纸","ja":"カーボン紙","ru":"копировальная бумага"}', 12
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'office/office_assistant/materials/chargers', 'office', 'office_assistant', 'materials', 'office/office_assistant/materials/chargers', NULL, '{"en":"chargers","es":"chargers","pt":"chargers","fr":"chargers","de":"chargers","it":"chargers","nl":"opladers","zh":"充电器","ja":"充電器","ru":"зарядные устройства"}', 14
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'office/office_assistant/materials/cleaning_spray', 'office', 'office_assistant', 'materials', 'office/office_assistant/materials/cleaning_spray', NULL, '{"en":"cleaning spray","es":"cleaning spray","pt":"cleaning spray","fr":"cleaning spray","de":"cleaning spray","it":"cleaning spray","nl":"reinigingsspray","zh":"清洁喷雾","ja":"洗浄スプレー","ru":"чистящий спрей"}', 16
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'office/office_assistant/materials/coffee', 'office', 'office_assistant', 'materials', 'office/office_assistant/materials/coffee', NULL, '{"en":"coffee","es":"coffee","pt":"coffee","fr":"coffee","de":"coffee","it":"coffee","nl":"koffie","zh":"咖啡","ja":"コーヒー","ru":"кофе"}', 18
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'office/office_assistant/materials/connectors', 'office', 'office_assistant', 'materials', 'office/office_assistant/materials/connectors', NULL, '{"en":"connectors","es":"connectors","pt":"connectors","fr":"connectors","de":"connectors","it":"connectors","nl":"connectors","zh":"连接器","ja":"コネクター","ru":"разъемы"}', 20
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'office/office_assistant/materials/contracts', 'office', 'office_assistant', 'materials', 'office/office_assistant/materials/contracts', NULL, '{"en":"contracts","es":"contracts","pt":"contracts","fr":"contracts","de":"contracts","it":"contracts","nl":"contracten","zh":"合同","ja":"契約書","ru":"контракты"}', 22
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'office/office_assistant/materials/cups', 'office', 'office_assistant', 'materials', 'office/office_assistant/materials/cups', NULL, '{"en":"cups","es":"cups","pt":"cups","fr":"cups","de":"cups","it":"cups","nl":"bekers","zh":"杯子","ja":"カップ","ru":"стаканы"}', 24
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'office/office_assistant/materials/documents', 'office', 'office_assistant', 'materials', 'office/office_assistant/materials/documents', NULL, '{"en":"documents","es":"documents","pt":"documents","fr":"documents","de":"documents","it":"documents","nl":"documenten","zh":"文件","ja":"書類","ru":"документы"}', 26
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'office/office_assistant/materials/envelopes', 'office', 'office_assistant', 'materials', 'office/office_assistant/materials/envelopes', NULL, '{"en":"envelopes","es":"envelopes","pt":"envelopes","fr":"envelopes","de":"envelopes","it":"envelopes","nl":"enveloppen","zh":"信封","ja":"封筒","ru":"конверты"}', 28
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'office/office_assistant/materials/extension_cables', 'office', 'office_assistant', 'materials', 'office/office_assistant/materials/extension_cables', NULL, '{"en":"extension cables","es":"extension cables","pt":"extension cables","fr":"extension cables","de":"extension cables","it":"extension cables","nl":"verlengkabels","zh":"延长线","ja":"延長ケーブル","ru":"удлинительные кабели"}', 30
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'office/office_assistant/materials/files', 'office', 'office_assistant', 'materials', 'office/office_assistant/materials/files', NULL, '{"en":"files","es":"files","pt":"files","fr":"files","de":"files","it":"files","nl":"bestanden","zh":"文件夹","ja":"ファイル","ru":"папки"}', 32
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'office/office_assistant/materials/folders', 'office', 'office_assistant', 'materials', 'office/office_assistant/materials/folders', NULL, '{"en":"folders","es":"folders","pt":"folders","fr":"folders","de":"folders","it":"folders","nl":"mappen","zh":"文件夹","ja":"フォルダー","ru":"папки"}', 34
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'office/office_assistant/materials/forms', 'office', 'office_assistant', 'materials', 'office/office_assistant/materials/forms', NULL, '{"en":"forms","es":"forms","pt":"forms","fr":"forms","de":"forms","it":"forms","nl":"formulieren","zh":"表格","ja":"フォーム","ru":"бланки"}', 36
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'office/office_assistant/materials/glue_sticks', 'office', 'office_assistant', 'materials', 'office/office_assistant/materials/glue_sticks', NULL, '{"en":"glue sticks","es":"glue sticks","pt":"glue sticks","fr":"glue sticks","de":"glue sticks","it":"glue sticks","nl":"lijmstiften","zh":"胶棒","ja":"グルースティック","ru":"клеевые стержни"}', 38
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'office/office_assistant/materials/hand_sanitizer', 'office', 'office_assistant', 'materials', 'office/office_assistant/materials/hand_sanitizer', NULL, '{"en":"hand sanitizer","es":"hand sanitizer","pt":"hand sanitizer","fr":"hand sanitizer","de":"hand sanitizer","it":"hand sanitizer","nl":"handdesinfectiemiddel","zh":"洗手液","ja":"ハンドサニタイザー","ru":"антисептик для рук"}', 40
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'office/office_assistant/materials/ink', 'office', 'office_assistant', 'materials', 'office/office_assistant/materials/ink', NULL, '{"en":"ink","es":"ink","pt":"ink","fr":"ink","de":"ink","it":"ink","nl":"inkt","zh":"墨水","ja":"インク","ru":"чернила"}', 42
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'office/office_assistant/materials/invoices', 'office', 'office_assistant', 'materials', 'office/office_assistant/materials/invoices', NULL, '{"en":"invoices","es":"invoices","pt":"invoices","fr":"invoices","de":"invoices","it":"invoices","nl":"facturen","zh":"发票","ja":"請求書","ru":"счета-фактуры"}', 44
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'office/office_assistant/materials/labels', 'office', 'office_assistant', 'materials', 'office/office_assistant/materials/labels', NULL, '{"en":"labels","es":"labels","pt":"labels","fr":"labels","de":"labels","it":"labels","nl":"etiketten","zh":"标签","ja":"ラベル","ru":"этикетки"}', 46
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'office/office_assistant/materials/manuals', 'office', 'office_assistant', 'materials', 'office/office_assistant/materials/manuals', NULL, '{"en":"manuals","es":"manuals","pt":"manuals","fr":"manuals","de":"manuals","it":"manuals","nl":"handleidingen","zh":"手册","ja":"マニュアル","ru":"руководства"}', 48
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'office/office_assistant/materials/markers_ink', 'office', 'office_assistant', 'materials', 'office/office_assistant/materials/markers_ink', NULL, '{"en":"markers ink","es":"markers ink","pt":"markers ink","fr":"markers ink","de":"markers ink","it":"markers ink","nl":"markerinkt","zh":"标记墨水","ja":"マーカーインク","ru":"чернила для маркера"}', 50
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'office/office_assistant/materials/milk', 'office', 'office_assistant', 'materials', 'office/office_assistant/materials/milk', NULL, '{"en":"milk","es":"milk","pt":"milk","fr":"milk","de":"milk","it":"milk","nl":"melk","zh":"牛奶","ja":"ミルク","ru":"молоко"}', 52
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'office/office_assistant/materials/notebooks', 'office', 'office_assistant', 'materials', 'office/office_assistant/materials/notebooks', NULL, '{"en":"notebooks","es":"notebooks","pt":"notebooks","fr":"notebooks","de":"notebooks","it":"notebooks","nl":"notitieboekjes","zh":"笔记本","ja":"ノート","ru":"блокноты"}', 54
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'office/office_assistant/materials/packaging', 'office', 'office_assistant', 'materials', 'office/office_assistant/materials/packaging', NULL, '{"en":"packaging","es":"embalaje","pt":"embalagem","fr":"emballage","de":"Verpackung","it":"imballaggio","nl":"verpakking","zh":"包装","ja":"梱包","ru":"упаковка"}', 56
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'office/office_assistant/materials/paper', 'office', 'office_assistant', 'materials', 'office/office_assistant/materials/paper', NULL, '{"en":"paper","es":"papel","pt":"papel","fr":"papier","de":"Papier","it":"carta","nl":"papier","zh":"纸","ja":"紙","ru":"бумага"}', 58
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'office/office_assistant/materials/paper_clips', 'office', 'office_assistant', 'materials', 'office/office_assistant/materials/paper_clips', NULL, '{"en":"paper clips","es":"paper clips","pt":"paper clips","fr":"paper clips","de":"paper clips","it":"paper clips","nl":"paperclips","zh":"回形针","ja":"ペーパークリップ","ru":"скрепки"}', 60
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'office/office_assistant/materials/photo_paper', 'office', 'office_assistant', 'materials', 'office/office_assistant/materials/photo_paper', NULL, '{"en":"photo paper","es":"photo paper","pt":"photo paper","fr":"photo paper","de":"photo paper","it":"photo paper","nl":"fotopapier","zh":"照片纸","ja":"写真用紙","ru":"фотобумага"}', 62
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'office/office_assistant/materials/plugs', 'office', 'office_assistant', 'materials', 'office/office_assistant/materials/plugs', NULL, '{"en":"plugs","es":"plugs","pt":"plugs","fr":"plugs","de":"plugs","it":"plugs","nl":"pluggen","zh":"插头","ja":"プラグ","ru":"разъемы"}', 64
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'office/office_assistant/materials/printer_paper', 'office', 'office_assistant', 'materials', 'office/office_assistant/materials/printer_paper', NULL, '{"en":"printer paper","es":"printer paper","pt":"printer paper","fr":"printer paper","de":"printer paper","it":"printer paper","nl":"printerpapier","zh":"打印纸","ja":"プリンター用紙","ru":"бумага для принтера"}', 66
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'office/office_assistant/materials/receipts', 'office', 'office_assistant', 'materials', 'office/office_assistant/materials/receipts', NULL, '{"en":"receipts","es":"receipts","pt":"receipts","fr":"receipts","de":"receipts","it":"receipts","nl":"bonnen","zh":"收据","ja":"レシート","ru":"квитанции"}', 68
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'office/office_assistant/materials/recycling_bags', 'office', 'office_assistant', 'materials', 'office/office_assistant/materials/recycling_bags', NULL, '{"en":"recycling bags","es":"recycling bags","pt":"recycling bags","fr":"recycling bags","de":"recycling bags","it":"recycling bags","nl":"recyclingzakken","zh":"回收袋","ja":"リサイクル袋","ru":"пакеты для мусора"}', 70
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'office/office_assistant/materials/refill_ink', 'office', 'office_assistant', 'materials', 'office/office_assistant/materials/refill_ink', NULL, '{"en":"refill ink","es":"refill ink","pt":"refill ink","fr":"refill ink","de":"refill ink","it":"refill ink","nl":"navulinkt","zh":"补充墨水","ja":"詰め替えインク","ru":"сменные чернила"}', 72
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'office/office_assistant/materials/reports', 'office', 'office_assistant', 'materials', 'office/office_assistant/materials/reports', NULL, '{"en":"reports","es":"reports","pt":"reports","fr":"reports","de":"reports","it":"reports","nl":"rapporten","zh":"报告","ja":"レポート","ru":"отчеты"}', 74
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'office/office_assistant/materials/rubber_bands', 'office', 'office_assistant', 'materials', 'office/office_assistant/materials/rubber_bands', NULL, '{"en":"rubber bands","es":"rubber bands","pt":"rubber bands","fr":"rubber bands","de":"rubber bands","it":"rubber bands","nl":"elastiekjes","zh":"橡皮筋","ja":"輪ゴム","ru":"резинки"}', 76
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'office/office_assistant/materials/sticky_notes', 'office', 'office_assistant', 'materials', 'office/office_assistant/materials/sticky_notes', NULL, '{"en":"sticky notes","es":"sticky notes","pt":"sticky notes","fr":"sticky notes","de":"sticky notes","it":"sticky notes","nl":"plaknotities","zh":"便利贴","ja":"付箋","ru":"стикеры"}', 78
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'office/office_assistant/materials/sugar', 'office', 'office_assistant', 'materials', 'office/office_assistant/materials/sugar', NULL, '{"en":"sugar","es":"sugar","pt":"sugar","fr":"sugar","de":"sugar","it":"sugar","nl":"suiker","zh":"糖","ja":"砂糖","ru":"сахар"}', 80
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'office/office_assistant/materials/tape_rolls', 'office', 'office_assistant', 'materials', 'office/office_assistant/materials/tape_rolls', NULL, '{"en":"tape rolls","es":"tape rolls","pt":"tape rolls","fr":"tape rolls","de":"tape rolls","it":"tape rolls","nl":"taperolletjes","zh":"胶卷","ja":"テープロール","ru":"рулоны ленты"}', 82
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'office/office_assistant/materials/tea', 'office', 'office_assistant', 'materials', 'office/office_assistant/materials/tea', NULL, '{"en":"tea","es":"tea","pt":"tea","fr":"tea","de":"tea","it":"tea","nl":"thee","zh":"茶","ja":"お茶","ru":"чай"}', 84
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'office/office_assistant/materials/tissues', 'office', 'office_assistant', 'materials', 'office/office_assistant/materials/tissues', NULL, '{"en":"tissues","es":"tissues","pt":"tissues","fr":"tissues","de":"tissues","it":"tissues","nl":"tissues","zh":"纸巾","ja":"ティッシュ","ru":"салфетки"}', 86
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'office/office_assistant/materials/toner', 'office', 'office_assistant', 'materials', 'office/office_assistant/materials/toner', NULL, '{"en":"toner","es":"toner","pt":"toner","fr":"toner","de":"toner","it":"toner","nl":"toner","zh":"墨粉","ja":"トナー","ru":"тонер"}', 88
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'office/office_assistant/materials/toner_cartridges', 'office', 'office_assistant', 'materials', 'office/office_assistant/materials/toner_cartridges', NULL, '{"en":"toner cartridges","es":"toner cartridges","pt":"toner cartridges","fr":"toner cartridges","de":"toner cartridges","it":"toner cartridges","nl":"tonercartridges","zh":"墨盒","ja":"トナーカートリッジ","ru":"картриджи с тонером"}', 90
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'office/office_assistant/materials/trash_bags', 'office', 'office_assistant', 'materials', 'office/office_assistant/materials/trash_bags', NULL, '{"en":"trash bags","es":"trash bags","pt":"trash bags","fr":"trash bags","de":"trash bags","it":"trash bags","nl":"vuilniszakken","zh":"垃圾袋","ja":"ゴミ袋","ru":"мусорные пакеты"}', 92
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'office/office_assistant/materials/usb_cables', 'office', 'office_assistant', 'materials', 'office/office_assistant/materials/usb_cables', NULL, '{"en":"usb cables","es":"usb cables","pt":"usb cables","fr":"usb cables","de":"usb cables","it":"usb cables","nl":"usb-kabels","zh":"USB线","ja":"USBケーブル","ru":"USB-кабели"}', 94
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'office/office_assistant/materials/water_bottles', 'office', 'office_assistant', 'materials', 'office/office_assistant/materials/water_bottles', NULL, '{"en":"water bottles","es":"water bottles","pt":"water bottles","fr":"water bottles","de":"water bottles","it":"water bottles","nl":"waterflessen","zh":"水瓶","ja":"ウォーターボトル","ru":"бутылки воды"}', 96
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'office/office_assistant/materials/wipes', 'office', 'office_assistant', 'materials', 'office/office_assistant/materials/wipes', NULL, '{"en":"wipes","es":"wipes","pt":"wipes","fr":"wipes","de":"wipes","it":"wipes","nl":"doekjes","zh":"湿巾","ja":"ウェットティッシュ","ru":"влажные салфетки"}', 98
);

INSERT INTO public.jobs (id, name, icon, image_url, sort_order) VALUES (
  'supermarket', '{"en":"Supermarket","es":"Supermercado","pt":"Supermercado","fr":"Supermarché","de":"Supermarkt","it":"Supermercato","nl":"Supermarkt","zh":"超市","ja":"スーパーマーケット","ru":"Супермаркет"}', '🛒', 'https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=800', 9
);

INSERT INTO public.sectors (id, job_id, name, icon, sort_order) VALUES (
  'cashier', 'supermarket', '{"en":"Cashier","es":"Cajero","pt":"Caixa","fr":"Caissier","de":"Kassierer","it":"Cassiere","nl":"Cashier","zh":"Cashier","ja":"Cashier","ru":"Cashier"}', '🛒', 0
);
INSERT INTO public.roles (id, job_id, sector_id, name, icon, sort_order) VALUES (
  'tools', 'supermarket', 'cashier', '{"en":"Tools","es":"Herramientas","pt":"Ferramentas","fr":"Outils","de":"Werkzeuge","it":"Attrezzi","nl":"Gereedschap","zh":"工具","ja":"道具","ru":"Инструменты"}', '🔧', 0
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/cashier/cash_register', 'supermarket', 'cashier', 'tools', 'supermarket/cashier/cash_register', NULL, '{"en":"cash register","es":"caja registradora","pt":"caixa registradora","fr":"caisse enregistreuse","de":"Registrierkasse","it":"registratore di cassa","nl":"kassa","zh":"收银机","ja":"レジ","ru":"кассовый аппарат"}', 0
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/cashier/barcode_scanner', 'supermarket', 'cashier', 'tools', 'supermarket/cashier/barcode_scanner', NULL, '{"en":"barcode scanner","es":"escáner de código de barras","pt":"leitor de código de barras","fr":"scanner de codes-barres","de":"Barcode-Scanner","it":"scanner codici a barre","nl":"barcode-scanner","zh":"条码扫描仪","ja":"バーコードスキャナー","ru":"сканер штрихкодов"}', 2
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/cashier/receipt_printer', 'supermarket', 'cashier', 'tools', 'supermarket/cashier/receipt_printer', NULL, '{"en":"receipt printer","es":"impresora de recibos","pt":"impressora de recibo","fr":"imprimante de reçus","de":"Bondrucker","it":"stampante per ricevute","nl":"bonprinter","zh":"收据打印机","ja":"レシートプリンター","ru":"принтер чеков"}', 4
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/cashier/card_machine', 'supermarket', 'cashier', 'tools', 'supermarket/cashier/card_machine', NULL, '{"en":"card machine","es":"terminal de pago","pt":"máquina de cartão","fr":"terminal de paiement","de":"Kartenlesegerät","it":"terminale POS","nl":"betaalterminal","zh":"刷卡机","ja":"カード決済端末","ru":"терминал для карт"}', 6
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/cashier/cash_drawer', 'supermarket', 'cashier', 'tools', 'supermarket/cashier/cash_drawer', NULL, '{"en":"cash drawer","es":"cajón portamonedas","pt":"gaveta de dinheiro","fr":"tiroir-caisse","de":"Kassenlade","it":"cassetto del denaro","nl":"kassalade","zh":"收银抽屉","ja":"キャッシュドロワー","ru":"денежный ящик"}', 8
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/cashier/pos_system', 'supermarket', 'cashier', 'tools', 'supermarket/cashier/pos_system', NULL, '{"en":"pos system","es":"sistema POS","pt":"sistema POS","fr":"système de point de vente","de":"Kassensystem","it":"sistema POS","nl":"kassasysteem","zh":"销售点系统","ja":"POSシステム","ru":"POS-система"}', 10
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/cashier/touch_screen_monitor', 'supermarket', 'cashier', 'tools', 'supermarket/cashier/touch_screen_monitor', NULL, '{"en":"touch screen monitor","es":"monitor de pantalla táctil","pt":"monitor de tela sensível ao toque","fr":"écran tactile","de":"Touchscreen-Monitor","it":"monitor touchscreen","nl":"touchscreen monitor","zh":"触摸屏显示器","ja":"タッチスクリーンモニター","ru":"сенсорный монитор"}', 12
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/cashier/keyboard', 'supermarket', 'cashier', 'tools', 'supermarket/cashier/keyboard', NULL, '{"en":"keyboard","es":"teclado","pt":"teclado","fr":"clavier","de":"Tastatur","it":"tastiera","nl":"toetsenbord","zh":"键盘","ja":"キーボード","ru":"клавиатура"}', 14
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/cashier/mouse', 'supermarket', 'cashier', 'tools', 'supermarket/cashier/mouse', NULL, '{"en":"mouse","es":"ratón","pt":"mouse","fr":"souris","de":"Maus","it":"mouse","nl":"muis","zh":"鼠标","ja":"マウス","ru":"мышь"}', 16
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/cashier/receipt_paper', 'supermarket', 'cashier', 'tools', 'supermarket/cashier/receipt_paper', NULL, '{"en":"receipt paper","es":"papel de recibo","pt":"papel de recibo","fr":"papier thermique","de":"Kassenpapier","it":"carta per ricevute","nl":"kassarol","zh":"收据纸","ja":"レシート用紙","ru":"бумага для чеков"}', 18
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/cashier/coin_tray', 'supermarket', 'cashier', 'tools', 'supermarket/cashier/coin_tray', NULL, '{"en":"coin tray","es":"bandeja de monedas","pt":"bandeja de moedas","fr":"plateau à monnaie","de":"Münzschale","it":"vassoio monete","nl":"muntenlade","zh":"硬币托盘","ja":"コイントレー","ru":"монетница"}', 20
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/cashier/note_counter', 'supermarket', 'cashier', 'tools', 'supermarket/cashier/note_counter', NULL, '{"en":"note counter","es":"contador de billetes","pt":"contadora de cédulas","fr":"compteur de billets","de":"Geldscheinzähler","it":"contacarte","nl":"biljetteller","zh":"点钞机","ja":"紙幣計算機","ru":"счётчик банкнот"}', 22
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/cashier/coupon_scanner', 'supermarket', 'cashier', 'tools', 'supermarket/cashier/coupon_scanner', NULL, '{"en":"coupon scanner","es":"escáner de cupones","pt":"leitor de cupons","fr":"scanner de coupons","de":"Coupon-Scanner","it":"scanner coupon","nl":"couponscanner","zh":"优惠券扫描仪","ja":"クーポンスキャナー","ru":"сканер купонов"}', 24
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/cashier/gift_card_reader', 'supermarket', 'cashier', 'tools', 'supermarket/cashier/gift_card_reader', NULL, '{"en":"gift card reader","es":"lector de tarjetas regalo","pt":"leitor de cartão presente","fr":"lecteur de cartes cadeaux","de":"Geschenkkarten-Leser","it":"lettore carte regalo","nl":"cadeaukaartlezer","zh":"礼品卡读卡器","ja":"ギフトカードリーダー","ru":"считыватель подарочных карт"}', 26
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/cashier/nfc_reader', 'supermarket', 'cashier', 'tools', 'supermarket/cashier/nfc_reader', NULL, '{"en":"nfc reader","es":"lector NFC","pt":"leitor NFC","fr":"lecteur NFC","de":"NFC-Leser","it":"lettore NFC","nl":"NFC-lezer","zh":"NFC读卡器","ja":"NFCリーダー","ru":"NFC-считыватель"}', 28
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/cashier/scale', 'supermarket', 'cashier', 'tools', 'supermarket/cashier/scale', NULL, '{"en":"scale","es":"báscula","pt":"balança","fr":"balance","de":"Waage","it":"bilancia","nl":"weegschaal","zh":"秤","ja":"はかり","ru":"весы"}', 30
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/cashier/security_tag_remover', 'supermarket', 'cashier', 'tools', 'supermarket/cashier/security_tag_remover', NULL, '{"en":"security tag remover","es":"removedor de etiquetas de seguridad","pt":"removedor de etiqueta de segurança","fr":"désactivateur d''antivol","de":"Sicherheitsetikettenentferner","it":"rimozione tag sicurezza","nl":"beveiligingslabelfrees","zh":"安全标签去除器","ja":"セキュリティタグリムーバー","ru":"съёмник защитных этикеток"}', 32
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/cashier/hand_sanitizer', 'supermarket', 'cashier', 'tools', 'supermarket/cashier/hand_sanitizer', NULL, '{"en":"hand sanitizer","es":"desinfectante de manos","pt":"desinfetante para mãos","fr":"désinfectant pour les mains","de":"Handdesinfektionsmittel","it":"disinfettante per mani","nl":"handdesinfectie","zh":"洗手液","ja":"ハンドサニタイザー","ru":"антисептик для рук"}', 34
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/cashier/counter_mat', 'supermarket', 'cashier', 'tools', 'supermarket/cashier/counter_mat', NULL, '{"en":"counter mat","es":"tapete de mostrador","pt":"tapete de balcão","fr":"tapis de comptoir","de":"Thekenmatte","it":"tappetino bancone","nl":"countermat","zh":"柜台垫","ja":"カウンターマット","ru":"коврик для стойки"}', 36
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/cashier/queue_barrier', 'supermarket', 'cashier', 'tools', 'supermarket/cashier/queue_barrier', NULL, '{"en":"queue barrier","es":"barrera de cola","pt":"separador de fila","fr":"barrière de file","de":"Warteschlangentrenner","it":"barriera coda","nl":"rijbegrenzer","zh":"排队护栏","ja":"キューバリア","ru":"ограждение очереди"}', 38
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/cashier/price_checker', 'supermarket', 'cashier', 'tools', 'supermarket/cashier/price_checker', NULL, '{"en":"price checker","es":"comprobador de precios","pt":"verificador de preço","fr":"vérificateur de prix","de":"Preiskontroller","it":"verificatore prezzi","nl":"prijscontroleur","zh":"价格查询机","ja":"価格確認機","ru":"проверщик цен"}', 40
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/cashier/id_scanner', 'supermarket', 'cashier', 'tools', 'supermarket/cashier/id_scanner', NULL, '{"en":"id scanner","es":"escáner de identidad","pt":"leitor de identidade","fr":"scanner d''identité","de":"Ausweis-Scanner","it":"scanner ID","nl":"ID-scanner","zh":"身份证扫描仪","ja":"IDスキャナー","ru":"сканер удостоверений"}', 42
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/cashier/digital_display', 'supermarket', 'cashier', 'tools', 'supermarket/cashier/digital_display', NULL, '{"en":"digital display","es":"pantalla digital","pt":"display digital","fr":"afficheur numérique","de":"Digitalanzeige","it":"display digitale","nl":"digitaal display","zh":"数字显示屏","ja":"デジタルディスプレイ","ru":"цифровой дисплей"}', 44
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/cashier/speaker_system', 'supermarket', 'cashier', 'tools', 'supermarket/cashier/speaker_system', NULL, '{"en":"speaker system","es":"sistema de altavoces","pt":"sistema de alto-falantes","fr":"système de haut-parleurs","de":"Lautsprechersystem","it":"sistema altoparlanti","nl":"luidsprekersysteem","zh":"扬声器系统","ja":"スピーカーシステム","ru":"акустическая система"}', 46
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/cashier/headset', 'supermarket', 'cashier', 'tools', 'supermarket/cashier/headset', NULL, '{"en":"headset","es":"auriculares","pt":"fone de ouvido","fr":"casque","de":"Headset","it":"auricolare","nl":"headset","zh":"耳机","ja":"ヘッドセット","ru":"гарнитура"}', 48
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/cashier/cash_bag', 'supermarket', 'cashier', 'tools', 'supermarket/cashier/cash_bag', NULL, '{"en":"cash bag","es":"bolsa de efectivo","pt":"bolsa de dinheiro","fr":"sac à monnaie","de":"Geldtasche","it":"borsa contanti","nl":"geldzak","zh":"现金袋","ja":"現金袋","ru":"денежная сумка"}', 50
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/cashier/safe_box', 'supermarket', 'cashier', 'tools', 'supermarket/cashier/safe_box', NULL, '{"en":"safe box","es":"caja fuerte","pt":"cofre","fr":"coffre-fort","de":"Tresor","it":"cassaforte","nl":"kluis","zh":"保险箱","ja":"金庫","ru":"сейф"}', 52
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/cashier/cleaning_wipes', 'supermarket', 'cashier', 'tools', 'supermarket/cashier/cleaning_wipes', NULL, '{"en":"cleaning wipes","es":"toallitas de limpieza","pt":"lenços de limpeza","fr":"lingettes de nettoyage","de":"Reinigungstücher","it":"salviette detergenti","nl":"reinigingsdoekjes","zh":"清洁湿巾","ja":"掃除シート","ru":"чистящие салфетки"}', 54
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/cashier/label_scanner', 'supermarket', 'cashier', 'tools', 'supermarket/cashier/label_scanner', NULL, '{"en":"label scanner","es":"escáner de etiquetas","pt":"leitor de etiquetas","fr":"scanner d''étiquettes","de":"Etikett-Scanner","it":"scanner etichette","nl":"labelscanner","zh":"标签扫描仪","ja":"ラベルスキャナー","ru":"сканер этикеток"}', 56
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/cashier/transaction_terminal', 'supermarket', 'cashier', 'tools', 'supermarket/cashier/transaction_terminal', NULL, '{"en":"transaction terminal","es":"terminal de transacciones","pt":"terminal de transação","fr":"terminal de transactions","de":"Transaktions-Terminal","it":"terminale transazioni","nl":"transactieterminal","zh":"交易终端","ja":"取引端末","ru":"терминал транзакций"}', 58
);

INSERT INTO public.sectors (id, job_id, name, icon, sort_order) VALUES (
  'bagger', 'supermarket', '{"en":"Bagger","es":"Empacador","pt":"Embalador","fr":"Emballeur","de":"Einpacker","it":"Imballatore","nl":"Bagger","zh":"Bagger","ja":"Bagger","ru":"Bagger"}', '🛍️', 1
);
INSERT INTO public.roles (id, job_id, sector_id, name, icon, sort_order) VALUES (
  'tools', 'supermarket', 'bagger', '{"en":"Tools","es":"Herramientas","pt":"Ferramentas","fr":"Outils","de":"Werkzeuge","it":"Attrezzi","nl":"Gereedschap","zh":"工具","ja":"道具","ru":"Инструменты"}', '🔧', 0
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/bagger/shopping_bags', 'supermarket', 'bagger', 'tools', 'supermarket/bagger/shopping_bags', NULL, '{"en":"shopping bags","es":"bolsas de compras","pt":"sacolas de compras","fr":"sacs de courses","de":"Einkaufstaschen","it":"borse della spesa","nl":"boodschappentassen","zh":"购物袋","ja":"買い物袋","ru":"пакеты для покупок"}', 0
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/bagger/paper_bags', 'supermarket', 'bagger', 'tools', 'supermarket/bagger/paper_bags', NULL, '{"en":"paper bags","es":"bolsas de papel","pt":"sacolas de papel","fr":"sacs en papier","de":"Papiertüten","it":"buste di carta","nl":"papieren zakken","zh":"纸袋","ja":"紙袋","ru":"бумажные пакеты"}', 2
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/bagger/plastic_bags', 'supermarket', 'bagger', 'tools', 'supermarket/bagger/plastic_bags', NULL, '{"en":"plastic bags","es":"bolsas de plástico","pt":"sacolas plásticas","fr":"sacs en plastique","de":"Plastiktüten","it":"buste di plastica","nl":"plastic zakken","zh":"塑料袋","ja":"ビニール袋","ru":"пластиковые пакеты"}', 4
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/bagger/reusable_bags', 'supermarket', 'bagger', 'tools', 'supermarket/bagger/reusable_bags', NULL, '{"en":"reusable bags","es":"bolsas reutilizables","pt":"sacolas reutilizáveis","fr":"sacs réutilisables","de":"wiederverwendbare Taschen","it":"borse riutilizzabili","nl":"herbruikbare tassen","zh":"可重复使用袋","ja":"エコバッグ","ru":"многоразовые пакеты"}', 6
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/bagger/box', 'supermarket', 'bagger', 'tools', 'supermarket/bagger/box', NULL, '{"en":"box","es":"caja","pt":"caixa","fr":"boîte","de":"Karton","it":"scatola","nl":"doos","zh":"箱子","ja":"箱","ru":"коробка"}', 8
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/bagger/tape', 'supermarket', 'bagger', 'tools', 'supermarket/bagger/tape', NULL, '{"en":"tape","es":"cinta adhesiva","pt":"fita adesiva","fr":"ruban adhésif","de":"Klebeband","it":"nastro adesivo","nl":"plakband","zh":"胶带","ja":"テープ","ru":"скотч"}', 10
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/bagger/scissors', 'supermarket', 'bagger', 'tools', 'supermarket/bagger/scissors', NULL, '{"en":"scissors","es":"tijeras","pt":"tesoura","fr":"ciseaux","de":"Schere","it":"forbici","nl":"schaar","zh":"剪刀","ja":"ハサミ","ru":"ножницы"}', 12
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/bagger/stapler', 'supermarket', 'bagger', 'tools', 'supermarket/bagger/stapler', NULL, '{"en":"stapler","es":"grapadora","pt":"grampeador","fr":"agrafeuse","de":"Hefter","it":"cucitrice","nl":"nietermachine","zh":"订书机","ja":"ホッチキス","ru":"степлер"}', 14
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/bagger/label', 'supermarket', 'bagger', 'tools', 'supermarket/bagger/label', NULL, '{"en":"label","es":"etiqueta","pt":"etiqueta","fr":"étiquette","de":"Etikett","it":"etichetta","nl":"label","zh":"标签","ja":"ラベル","ru":"этикетка"}', 16
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/bagger/marker', 'supermarket', 'bagger', 'tools', 'supermarket/bagger/marker', NULL, '{"en":"marker","es":"marcador","pt":"marcador","fr":"marqueur","de":"Marker","it":"pennarello","nl":"stift","zh":"记号笔","ja":"マーカー","ru":"маркер"}', 18
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/bagger/scale', 'supermarket', 'bagger', 'tools', 'supermarket/bagger/scale', NULL, '{"en":"scale","es":"báscula","pt":"balança","fr":"balance","de":"Waage","it":"bilancia","nl":"weegschaal","zh":"秤","ja":"はかり","ru":"весы"}', 20
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/bagger/price_tag', 'supermarket', 'bagger', 'tools', 'supermarket/bagger/price_tag', NULL, '{"en":"price tag","es":"etiqueta de precio","pt":"etiqueta de preço","fr":"étiquette de prix","de":"Preisschild","it":"cartellino del prezzo","nl":"prijskaartje","zh":"价签","ja":"値札","ru":"ценник"}', 22
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/bagger/gloves', 'supermarket', 'bagger', 'tools', 'supermarket/bagger/gloves', NULL, '{"en":"gloves","es":"guantes","pt":"luvas","fr":"gants","de":"Handschuhe","it":"guanti","nl":"handschoenen","zh":"手套","ja":"手袋","ru":"перчатки"}', 24
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/bagger/apron', 'supermarket', 'bagger', 'tools', 'supermarket/bagger/apron', NULL, '{"en":"apron","es":"delantal","pt":"avental","fr":"tablier","de":"Schürze","it":"grembiule","nl":"schort","zh":"围裙","ja":"エプロン","ru":"фартук"}', 26
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/bagger/name_tag', 'supermarket', 'bagger', 'tools', 'supermarket/bagger/name_tag', NULL, '{"en":"name tag","es":"etiqueta de nombre","pt":"crachá","fr":"badge de nom","de":"Namensschild","it":"targhetta col nome","nl":"naamplaatje","zh":"名牌","ja":"名札","ru":"бейдж"}', 28
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/bagger/packing_paper', 'supermarket', 'bagger', 'tools', 'supermarket/bagger/packing_paper', NULL, '{"en":"packing paper","es":"papel de embalaje","pt":"papel de embrulho","fr":"papier d''emballage","de":"Packpapier","it":"carta da imballaggio","nl":"verpakkingspapier","zh":"包装纸","ja":"包装紙","ru":"упаковочная бумага"}', 30
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/bagger/bubble_wrap', 'supermarket', 'bagger', 'tools', 'supermarket/bagger/bubble_wrap', NULL, '{"en":"bubble wrap","es":"papel burbuja","pt":"plástico bolha","fr":"film à bulles","de":"Luftpolsterfolie","it":"pluriball","nl":"noppenfolie","zh":"气泡纸","ja":"プチプチ","ru":"пузырчатая плёнка"}', 32
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/bagger/gift_wrap', 'supermarket', 'bagger', 'tools', 'supermarket/bagger/gift_wrap', NULL, '{"en":"gift wrap","es":"papel de regalo","pt":"papel de presente","fr":"papier cadeau","de":"Geschenkpapier","it":"carta regalo","nl":"cadeaupapier","zh":"礼品包装纸","ja":"ギフトラッピング","ru":"подарочная упаковка"}', 34
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/bagger/ribbon', 'supermarket', 'bagger', 'tools', 'supermarket/bagger/ribbon', NULL, '{"en":"ribbon","es":"cinta","pt":"fita","fr":"ruban","de":"Band","it":"nastro","nl":"lint","zh":"丝带","ja":"リボン","ru":"лента"}', 36
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/bagger/tape_dispenser', 'supermarket', 'bagger', 'tools', 'supermarket/bagger/tape_dispenser', NULL, '{"en":"tape dispenser","es":"dispensador de cinta","pt":"suporte de fita","fr":"dévidoir de ruban","de":"Abroller","it":"porta-nastro","nl":"plakbandhouder","zh":"胶带座","ja":"テープカッター","ru":"диспенсер для скотча"}', 38
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/bagger/box_cutter', 'supermarket', 'bagger', 'tools', 'supermarket/bagger/box_cutter', NULL, '{"en":"box cutter","es":"cúter","pt":"estilete","fr":"cutter","de":"Teppichmesser","it":"taglierino","nl":"stanleymes","zh":"美工刀","ja":"カッター","ru":"нож для коробок"}', 40
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/bagger/cart', 'supermarket', 'bagger', 'tools', 'supermarket/bagger/cart', NULL, '{"en":"cart","es":"carrito","pt":"carrinho","fr":"chariot","de":"Wagen","it":"carrello","nl":"winkelwagen","zh":"购物车","ja":"カート","ru":"тележка"}', 42
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/bagger/hand_sanitizer', 'supermarket', 'bagger', 'tools', 'supermarket/bagger/hand_sanitizer', NULL, '{"en":"hand sanitizer","es":"desinfectante de manos","pt":"desinfetante para mãos","fr":"désinfectant pour les mains","de":"Handdesinfektionsmittel","it":"disinfettante per mani","nl":"handdesinfectie","zh":"洗手液","ja":"ハンドサニタイザー","ru":"антисептик для рук"}', 44
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/bagger/pen', 'supermarket', 'bagger', 'tools', 'supermarket/bagger/pen', NULL, '{"en":"pen","es":"bolígrafo","pt":"caneta","fr":"stylo","de":"Stift","it":"penna","nl":"pen","zh":"钢笔","ja":"ペン","ru":"ручка"}', 46
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/bagger/notepad', 'supermarket', 'bagger', 'tools', 'supermarket/bagger/notepad', NULL, '{"en":"notepad","es":"bloc de notas","pt":"bloco de notas","fr":"bloc-notes","de":"Notizblock","it":"blocco note","nl":"kladblok","zh":"记事本","ja":"メモ帳","ru":"блокнот"}', 48
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/bagger/scanner', 'supermarket', 'bagger', 'tools', 'supermarket/bagger/scanner', NULL, '{"en":"scanner","es":"escáner","pt":"scanner","fr":"scanner","de":"Scanner","it":"scanner","nl":"scanner","zh":"扫描仪","ja":"スキャナー","ru":"сканер"}', 50
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/bagger/counter_mat', 'supermarket', 'bagger', 'tools', 'supermarket/bagger/counter_mat', NULL, '{"en":"counter mat","es":"tapete de mostrador","pt":"tapete de balcão","fr":"tapis de comptoir","de":"Thekenmatte","it":"tappetino bancone","nl":"countermat","zh":"柜台垫","ja":"カウンターマット","ru":"коврик для стойки"}', 52
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/bagger/bag_holder', 'supermarket', 'bagger', 'tools', 'supermarket/bagger/bag_holder', NULL, '{"en":"bag holder","es":"soporte de bolsa","pt":"suporte de sacola","fr":"support à sac","de":"Tütenhalter","it":"porta sacchi","nl":"zakhouder","zh":"袋架","ja":"袋ホルダー","ru":"держатель пакетов"}', 54
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/bagger/twist_ties', 'supermarket', 'bagger', 'tools', 'supermarket/bagger/twist_ties', NULL, '{"en":"twist ties","es":"ataduras","pt":"atilhos","fr":"attaches torsadées","de":"Drehverschlüsse","it":"legacci","nl":"broodclipjes","zh":"扭扭棒","ja":"ツイストタイ","ru":"скрутки для пакетов"}', 56
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/bagger/receipt_printer', 'supermarket', 'bagger', 'tools', 'supermarket/bagger/receipt_printer', NULL, '{"en":"receipt printer","es":"impresora de recibos","pt":"impressora de recibo","fr":"imprimante de reçus","de":"Bondrucker","it":"stampante per ricevute","nl":"bonprinter","zh":"收据打印机","ja":"レシートプリンター","ru":"принтер чеков"}', 58
);

INSERT INTO public.sectors (id, job_id, name, icon, sort_order) VALUES (
  'stockroom', 'supermarket', '{"en":"Stockroom","es":"Almacén","pt":"Almoxarifado","fr":"Réserve","de":"Lager","it":"Magazzino","nl":"Stockroom","zh":"Stockroom","ja":"Stockroom","ru":"Stockroom"}', '📦', 2
);
INSERT INTO public.roles (id, job_id, sector_id, name, icon, sort_order) VALUES (
  'tools', 'supermarket', 'stockroom', '{"en":"Tools","es":"Herramientas","pt":"Ferramentas","fr":"Outils","de":"Werkzeuge","it":"Attrezzi","nl":"Gereedschap","zh":"工具","ja":"道具","ru":"Инструменты"}', '🔧', 0
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/stockroom/pallet_jack', 'supermarket', 'stockroom', 'tools', 'supermarket/stockroom/pallet_jack', NULL, '{"en":"pallet jack","es":"transpaleta","pt":"paleteiro","fr":"transpalette","de":"Hubwagen","it":"transpallet","nl":"palletwagen","zh":"搬运叉车","ja":"パレットジャッキー","ru":"гидравлическая тележка"}', 0
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/stockroom/hand_truck', 'supermarket', 'stockroom', 'tools', 'supermarket/stockroom/hand_truck', NULL, '{"en":"hand truck","es":"carretilla de mano","pt":"carrinho de mão","fr":"diable","de":"Sackkarre","it":"carrello a mano","nl":"steekwagen","zh":"手推车","ja":"手押し車","ru":"ручная тележка"}', 2
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/stockroom/folding_table', 'supermarket', 'stockroom', 'tools', 'supermarket/stockroom/folding_table', NULL, '{"en":"folding table","es":"mesa plegable","pt":"mesa dobrável","fr":"table pliante","de":"Klapptisch","it":"tavolo pieghevole","nl":"klaptafel","zh":"折叠桌","ja":"折り畳みテーブル","ru":"складной стол"}', 4
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/stockroom/clipboard', 'supermarket', 'stockroom', 'tools', 'supermarket/stockroom/clipboard', NULL, '{"en":"clipboard","es":"portapapeles","pt":"prancheta","fr":"presse-papiers","de":"Klemmbrett","it":"portablocco","nl":"klembord","zh":"写字板","ja":"クリップボード","ru":"планшет"}', 6
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/stockroom/scanner', 'supermarket', 'stockroom', 'tools', 'supermarket/stockroom/scanner', NULL, '{"en":"scanner","es":"escáner","pt":"scanner","fr":"scanner","de":"Scanner","it":"scanner","nl":"scanner","zh":"扫描仪","ja":"スキャナー","ru":"сканер"}', 8
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/stockroom/inventory_pad', 'supermarket', 'stockroom', 'tools', 'supermarket/stockroom/inventory_pad', NULL, '{"en":"inventory pad","es":"bloc de inventario","pt":"bloco de inventário","fr":"bloc d''inventaire","de":"Inventurblock","it":"blocco inventario","nl":"inventarisatieboek","zh":"盘点本","ja":"棚卸しパッド","ru":"блокнот для инвентаризации"}', 10
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/stockroom/shelf', 'supermarket', 'stockroom', 'tools', 'supermarket/stockroom/shelf', NULL, '{"en":"shelf","es":"estante","pt":"prateleira","fr":"étagère","de":"Regal","it":"scaffale","nl":"rek","zh":"货架","ja":"棚","ru":"полка"}', 12
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/stockroom/bin', 'supermarket', 'stockroom', 'tools', 'supermarket/stockroom/bin', NULL, '{"en":"bin","es":"contenedor","pt":"caixa de armazenamento","fr":"bac","de":"Behälter","it":"contenitore","nl":"bak","zh":"储物箱","ja":"収納ビン","ru":"контейнер"}', 14
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/stockroom/label_maker', 'supermarket', 'stockroom', 'tools', 'supermarket/stockroom/label_maker', NULL, '{"en":"label maker","es":"etiquetadora","pt":"rotulador","fr":"étiqueteuse","de":"Etikettendrucker","it":"etichettatrice","nl":"labelmaker","zh":"标签机","ja":"ラベルメーカー","ru":"принтер этикеток"}', 16
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/stockroom/staple_gun', 'supermarket', 'stockroom', 'tools', 'supermarket/stockroom/staple_gun', NULL, '{"en":"staple gun","es":"grapadora de tapicero","pt":"grampeador industrial","fr":"agrafeuse industrielle","de":"Heftpistole","it":"pistola sparachiodi","nl":"tacker","zh":"订书枪","ja":"タッカー","ru":"мебельный степлер"}', 18
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/stockroom/tape_measure', 'supermarket', 'stockroom', 'tools', 'supermarket/stockroom/tape_measure', NULL, '{"en":"tape measure","es":"cinta métrica","pt":"fita métrica","fr":"mètre ruban","de":"Maßband","it":"metro a nastro","nl":"meetlint","zh":"卷尺","ja":"メジャー","ru":"рулетка"}', 20
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/stockroom/box_cutter', 'supermarket', 'stockroom', 'tools', 'supermarket/stockroom/box_cutter', NULL, '{"en":"box cutter","es":"cúter","pt":"estilete","fr":"cutter","de":"Teppichmesser","it":"taglierino","nl":"stanleymes","zh":"美工刀","ja":"カッター","ru":"нож для коробок"}', 22
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/stockroom/gloves', 'supermarket', 'stockroom', 'tools', 'supermarket/stockroom/gloves', NULL, '{"en":"gloves","es":"guantes","pt":"luvas","fr":"gants","de":"Handschuhe","it":"guanti","nl":"handschoenen","zh":"手套","ja":"手袋","ru":"перчатки"}', 24
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/stockroom/safety_vest', 'supermarket', 'stockroom', 'tools', 'supermarket/stockroom/safety_vest', NULL, '{"en":"safety vest","es":"chaleco de seguridad","pt":"colete de segurança","fr":"gilet de sécurité","de":"Warnweste","it":"gilet di sicurezza","nl":"veiligheidsvest","zh":"安全背心","ja":"安全ベスト","ru":"сигнальный жилет"}', 26
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/stockroom/hard_hat', 'supermarket', 'stockroom', 'tools', 'supermarket/stockroom/hard_hat', NULL, '{"en":"hard hat","es":"casco de seguridad","pt":"capacete de segurança","fr":"casque de sécurité","de":"Schutzhelm","it":"elmetto di sicurezza","nl":"veiligheidshelm","zh":"安全帽","ja":"ヘルメット","ru":"защитная каска"}', 28
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/stockroom/work_boots', 'supermarket', 'stockroom', 'tools', 'supermarket/stockroom/work_boots', NULL, '{"en":"work boots","es":"botas de trabajo","pt":"botas de trabalho","fr":"bottes de travail","de":"Arbeitsschuhe","it":"stivali da lavoro","nl":"werkschoenen","zh":"工作靴","ja":"安全靴","ru":"рабочие ботинки"}', 30
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/stockroom/back_support', 'supermarket', 'stockroom', 'tools', 'supermarket/stockroom/back_support', NULL, '{"en":"back support","es":"soporte lumbar","pt":"suporte lombar","fr":"ceinture dorsale","de":"Rückenstütze","it":"supporto lombare","nl":"rugsteun","zh":"腰部支撑","ja":"腰サポーター","ru":"поясничный бандаж"}', 32
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/stockroom/ear_plugs', 'supermarket', 'stockroom', 'tools', 'supermarket/stockroom/ear_plugs', NULL, '{"en":"ear plugs","es":"tapones para los oídos","pt":"protetor auricular","fr":"bouchons d''oreille","de":"Ohrenstöpsel","it":"tappi per orecchie","nl":"oordopjes","zh":"耳塞","ja":"耳栓","ru":"беруши"}', 34
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/stockroom/dolly', 'supermarket', 'stockroom', 'tools', 'supermarket/stockroom/dolly', NULL, '{"en":"dolly","es":"plataforma de transporte","pt":"plataforma de carga","fr":"plateau roulant","de":"Rollwagen","it":"piattaforma a ruote","nl":"rolwagen","zh":"平板车","ja":"台車","ru":"тележка-платформа"}', 36
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/stockroom/strapping', 'supermarket', 'stockroom', 'tools', 'supermarket/stockroom/strapping', NULL, '{"en":"strapping","es":"fleje","pt":"fita de amarração","fr":"cerclage","de":"Umreifungsband","it":"reggetta","nl":"omsnoeringsband","zh":"打包带","ja":"バンド","ru":"обвязочная лента"}', 38
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/stockroom/packing_foam', 'supermarket', 'stockroom', 'tools', 'supermarket/stockroom/packing_foam', NULL, '{"en":"packing foam","es":"espuma de embalaje","pt":"espuma de embalagem","fr":"mousse d''emballage","de":"Verpackungsschaum","it":"schiuma da imballaggio","nl":"verpakkingsschuim","zh":"泡沫包装","ja":"梱包フォーム","ru":"упаковочный поролон"}', 40
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/stockroom/inventory_tags', 'supermarket', 'stockroom', 'tools', 'supermarket/stockroom/inventory_tags', NULL, '{"en":"inventory tags","es":"etiquetas de inventario","pt":"etiquetas de inventário","fr":"étiquettes d''inventaire","de":"Inventur-Etiketten","it":"etichette inventario","nl":"inventarisatielabels","zh":"库存标签","ja":"棚卸しタグ","ru":"инвентаризационные ярлыки"}', 42
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/stockroom/pallet', 'supermarket', 'stockroom', 'tools', 'supermarket/stockroom/pallet', NULL, '{"en":"pallet","es":"palé","pt":"palete","fr":"palette","de":"Palette","it":"pallet","nl":"pallet","zh":"托盘","ja":"パレット","ru":"поддон"}', 44
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/stockroom/stretch_wrap', 'supermarket', 'stockroom', 'tools', 'supermarket/stockroom/stretch_wrap', NULL, '{"en":"stretch wrap","es":"film estirable","pt":"filme esticável","fr":"film étirable","de":"Stretchfolie","it":"film estensibile","nl":"rekfolie","zh":"拉伸膜","ja":"ストレッチフィルム","ru":"стрейч-плёнка"}', 46
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/stockroom/utility_cart', 'supermarket', 'stockroom', 'tools', 'supermarket/stockroom/utility_cart', NULL, '{"en":"utility cart","es":"carro utilitario","pt":"carrinho utilitário","fr":"chariot utilitaire","de":"Mehrzweckwagen","it":"carrello multiuso","nl":"multifunctionele kar","zh":"多功能推车","ja":"ユーティリティカート","ru":"многофункциональная тележка"}', 48
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/stockroom/step_stool', 'supermarket', 'stockroom', 'tools', 'supermarket/stockroom/step_stool', NULL, '{"en":"step stool","es":"escalera de mano","pt":"banquinho","fr":"escabeau","de":"Tritthocker","it":"sgabello","nl":"opstapje","zh":"脚踏凳","ja":"踏み台","ru":"ступенька"}', 50
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/stockroom/flashlight', 'supermarket', 'stockroom', 'tools', 'supermarket/stockroom/flashlight', NULL, '{"en":"flashlight","es":"linterna","pt":"lanterna","fr":"lampe de poche","de":"Taschenlampe","it":"torcia","nl":"zaklamp","zh":"手电筒","ja":"懐中電灯","ru":"фонарик"}', 52
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/stockroom/walkie_talkie', 'supermarket', 'stockroom', 'tools', 'supermarket/stockroom/walkie_talkie', NULL, '{"en":"walkie talkie","es":"walkie-talkie","pt":"walkie-talkie","fr":"talkie-walkie","de":"Walkie-Talkie","it":"walkie-talkie","nl":"walkie-talkie","zh":"对讲机","ja":"トランシーバー","ru":"рация"}', 54
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/stockroom/lock', 'supermarket', 'stockroom', 'tools', 'supermarket/stockroom/lock', NULL, '{"en":"lock","es":"candado","pt":"cadeado","fr":"cadenas","de":"Schloss","it":"lucchetto","nl":"slot","zh":"锁","ja":"錠","ru":"замок"}', 56
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/stockroom/first_aid_kit', 'supermarket', 'stockroom', 'tools', 'supermarket/stockroom/first_aid_kit', NULL, '{"en":"first aid kit","es":"botiquín de primeros auxilios","pt":"kit de primeiros socorros","fr":"trousse de premiers secours","de":"Verbandskasten","it":"kit di pronto soccorso","nl":"EHBO-doos","zh":"急救箱","ja":"救急箱","ru":"аптечка первой помощи"}', 58
);

INSERT INTO public.sectors (id, job_id, name, icon, sort_order) VALUES (
  'stocker', 'supermarket', '{"en":"Stocker","es":"Reponedor","pt":"Repositor","fr":"Réassortisseur","de":"Auffüller","it":"Rifornimento","nl":"Stocker","zh":"Stocker","ja":"Stocker","ru":"Stocker"}', '🗄️', 3
);
INSERT INTO public.roles (id, job_id, sector_id, name, icon, sort_order) VALUES (
  'tools', 'supermarket', 'stocker', '{"en":"Tools","es":"Herramientas","pt":"Ferramentas","fr":"Outils","de":"Werkzeuge","it":"Attrezzi","nl":"Gereedschap","zh":"工具","ja":"道具","ru":"Инструменты"}', '🔧', 0
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/stocker/trolley', 'supermarket', 'stocker', 'tools', 'supermarket/stocker/trolley', NULL, '{"en":"trolley","es":"carrito","pt":"carrinho","fr":"chariot","de":"Rollwagen","it":"carrello","nl":"trolley","zh":"手推车","ja":"トロリー","ru":"тележка"}', 0
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/stocker/pallet', 'supermarket', 'stocker', 'tools', 'supermarket/stocker/pallet', NULL, '{"en":"pallet","es":"palé","pt":"palete","fr":"palette","de":"Palette","it":"pallet","nl":"pallet","zh":"托盘","ja":"パレット","ru":"поддон"}', 2
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/stocker/hand_truck', 'supermarket', 'stocker', 'tools', 'supermarket/stocker/hand_truck', NULL, '{"en":"hand truck","es":"carretilla de mano","pt":"carrinho de mão","fr":"diable","de":"Sackkarre","it":"carrello a mano","nl":"steekwagen","zh":"手推车","ja":"手押し車","ru":"ручная тележка"}', 4
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/stocker/box_cutter', 'supermarket', 'stocker', 'tools', 'supermarket/stocker/box_cutter', NULL, '{"en":"box cutter","es":"cúter","pt":"estilete","fr":"cutter","de":"Teppichmesser","it":"taglierino","nl":"stanleymes","zh":"美工刀","ja":"カッター","ru":"нож для коробок"}', 6
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/stocker/shelf_labels', 'supermarket', 'stocker', 'tools', 'supermarket/stocker/shelf_labels', NULL, '{"en":"shelf labels","es":"etiquetas de estante","pt":"etiquetas de prateleira","fr":"étiquettes de rayon","de":"Regaletiketten","it":"etichette scaffale","nl":"schaplabels","zh":"货架标签","ja":"棚ラベル","ru":"ценники на полку"}', 8
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/stocker/step_ladder', 'supermarket', 'stocker', 'tools', 'supermarket/stocker/step_ladder', NULL, '{"en":"step ladder","es":"escalera de peldaños","pt":"escada de degraus","fr":"escabeau","de":"Stufenleiter","it":"scaletta","nl":"trapladder","zh":"梯子","ja":"脚立","ru":"стремянка"}', 10
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/stocker/gloves', 'supermarket', 'stocker', 'tools', 'supermarket/stocker/gloves', NULL, '{"en":"gloves","es":"guantes","pt":"luvas","fr":"gants","de":"Handschuhe","it":"guanti","nl":"handschoenen","zh":"手套","ja":"手袋","ru":"перчатки"}', 12
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/stocker/price_gun', 'supermarket', 'stocker', 'tools', 'supermarket/stocker/price_gun', NULL, '{"en":"price gun","es":"etiquetadora de precios","pt":"pistola de etiquetas","fr":"pistolet d''étiquetage","de":"Preisauszeichnungsgerät","it":"pistola prezzi","nl":"prijspistool","zh":"价格标签枪","ja":"値札ガン","ru":"пистолет для этикеток"}', 14
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/stocker/tape_gun', 'supermarket', 'stocker', 'tools', 'supermarket/stocker/tape_gun', NULL, '{"en":"tape gun","es":"pistola de cinta","pt":"suporte de fita","fr":"pistolet à ruban","de":"Abroller","it":"pistola nastro","nl":"tapegun","zh":"胶带枪","ja":"テープガン","ru":"пистолет для скотча"}', 16
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/stocker/shrink_wrap', 'supermarket', 'stocker', 'tools', 'supermarket/stocker/shrink_wrap', NULL, '{"en":"shrink wrap","es":"film retráctil","pt":"filme retrátil","fr":"film rétractable","de":"Schrumpffolie","it":"film termorestringente","nl":"krimpfolie","zh":"热缩膜","ja":"シュリンクフィルム","ru":"термоусадочная плёнка"}', 18
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/stocker/scanner', 'supermarket', 'stocker', 'tools', 'supermarket/stocker/scanner', NULL, '{"en":"scanner","es":"escáner","pt":"scanner","fr":"scanner","de":"Scanner","it":"scanner","nl":"scanner","zh":"扫描仪","ja":"スキャナー","ru":"сканер"}', 20
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/stocker/inventory_device', 'supermarket', 'stocker', 'tools', 'supermarket/stocker/inventory_device', NULL, '{"en":"inventory device","es":"dispositivo de inventario","pt":"dispositivo de inventário","fr":"terminal d''inventaire","de":"Inventur-Gerät","it":"dispositivo inventario","nl":"inventarisatieapparaat","zh":"盘点设备","ja":"在庫管理端末","ru":"устройство для инвентаризации"}', 22
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/stocker/cart', 'supermarket', 'stocker', 'tools', 'supermarket/stocker/cart', NULL, '{"en":"cart","es":"carrito","pt":"carrinho","fr":"chariot","de":"Wagen","it":"carrello","nl":"winkelwagen","zh":"购物车","ja":"カート","ru":"тележка"}', 24
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/stocker/plastic_bins', 'supermarket', 'stocker', 'tools', 'supermarket/stocker/plastic_bins', NULL, '{"en":"plastic bins","es":"bandejas de plástico","pt":"caixas plásticas","fr":"bacs en plastique","de":"Kunststoffbehälter","it":"vaschette di plastica","nl":"plastic bakken","zh":"塑料箱","ja":"プラスチックトレー","ru":"пластиковые контейнеры"}', 26
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/stocker/storage_boxes', 'supermarket', 'stocker', 'tools', 'supermarket/stocker/storage_boxes', NULL, '{"en":"storage boxes","es":"cajas de almacenaje","pt":"caixas de armazenamento","fr":"boîtes de stockage","de":"Aufbewahrungsboxen","it":"scatole di stoccaggio","nl":"opslagdozen","zh":"储存箱","ja":"収納ボックス","ru":"коробки для хранения"}', 28
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/stocker/marker_pen', 'supermarket', 'stocker', 'tools', 'supermarket/stocker/marker_pen', NULL, '{"en":"marker pen","es":"rotulador","pt":"caneta marcadora","fr":"marqueur","de":"Markierstift","it":"pennarello","nl":"markeerstift","zh":"记号笔","ja":"マーカーペン","ru":"маркер"}', 30
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/stocker/clipboard', 'supermarket', 'stocker', 'tools', 'supermarket/stocker/clipboard', NULL, '{"en":"clipboard","es":"portapapeles","pt":"prancheta","fr":"presse-papiers","de":"Klemmbrett","it":"portablocco","nl":"klembord","zh":"写字板","ja":"クリップボード","ru":"планшет"}', 32
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/stocker/safety_shoes', 'supermarket', 'stocker', 'tools', 'supermarket/stocker/safety_shoes', NULL, '{"en":"safety shoes","es":"zapatos de seguridad","pt":"sapatos de segurança","fr":"chaussures de sécurité","de":"Sicherheitsschuhe","it":"scarpe antinfortunistiche","nl":"veiligheidsschoenen","zh":"安全鞋","ja":"安全靴","ru":"защитные ботинки"}', 34
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/stocker/back_support_belt', 'supermarket', 'stocker', 'tools', 'supermarket/stocker/back_support_belt', NULL, '{"en":"back support belt","es":"cinturón lumbar","pt":"cinto lombar","fr":"ceinture lombaire","de":"Rückenstützgürtel","it":"cintura lombare","nl":"rugsteunriem","zh":"护腰带","ja":"腰サポートベルト","ru":"пояс для спины"}', 36
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/stocker/safety_vest', 'supermarket', 'stocker', 'tools', 'supermarket/stocker/safety_vest', NULL, '{"en":"safety vest","es":"chaleco de seguridad","pt":"colete de segurança","fr":"gilet de sécurité","de":"Warnweste","it":"gilet di sicurezza","nl":"veiligheidsvest","zh":"安全背心","ja":"安全ベスト","ru":"сигнальный жилет"}', 38
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/stocker/packing_tape', 'supermarket', 'stocker', 'tools', 'supermarket/stocker/packing_tape', NULL, '{"en":"packing tape","es":"cinta de embalaje","pt":"fita de embalagem","fr":"ruban d''emballage","de":"Verpackungsband","it":"nastro da imballaggio","nl":"verpakkingstape","zh":"包装胶带","ja":"梱包テープ","ru":"упаковочный скотч"}', 40
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/stocker/stretch_wrap', 'supermarket', 'stocker', 'tools', 'supermarket/stocker/stretch_wrap', NULL, '{"en":"stretch wrap","es":"film estirable","pt":"filme esticável","fr":"film étirable","de":"Stretchfolie","it":"film estensibile","nl":"rekfolie","zh":"拉伸膜","ja":"ストレッチフィルム","ru":"стрейч-плёнка"}', 42
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/stocker/utility_knife', 'supermarket', 'stocker', 'tools', 'supermarket/stocker/utility_knife', NULL, '{"en":"utility knife","es":"cuchillo utilitario","pt":"faca utilitária","fr":"couteau utilitaire","de":"Mehrzweckmesser","it":"coltello multiuso","nl":"zakmes","zh":"多功能刀","ja":"ユーティリティナイフ","ru":"нож универсальный"}', 44
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/stocker/broom', 'supermarket', 'stocker', 'tools', 'supermarket/stocker/broom', NULL, '{"en":"broom","es":"escoba","pt":"vassoura","fr":"balai","de":"Besen","it":"scopa","nl":"bezem","zh":"扫帚","ja":"ほうき","ru":"метла"}', 46
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/stocker/dustpan', 'supermarket', 'stocker', 'tools', 'supermarket/stocker/dustpan', NULL, '{"en":"dustpan","es":"recogedor","pt":"pá de lixo","fr":"pelle à poussière","de":"Kehrschaufel","it":"paletta","nl":"blik","zh":"簸箕","ja":"ちりとり","ru":"совок"}', 48
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/stocker/apron', 'supermarket', 'stocker', 'tools', 'supermarket/stocker/apron', NULL, '{"en":"apron","es":"delantal","pt":"avental","fr":"tablier","de":"Schürze","it":"grembiule","nl":"schort","zh":"围裙","ja":"エプロン","ru":"фартук"}', 50
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/stocker/walkie_talkie', 'supermarket', 'stocker', 'tools', 'supermarket/stocker/walkie_talkie', NULL, '{"en":"walkie talkie","es":"walkie-talkie","pt":"walkie-talkie","fr":"talkie-walkie","de":"Walkie-Talkie","it":"walkie-talkie","nl":"walkie-talkie","zh":"对讲机","ja":"トランシーバー","ru":"рация"}', 52
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/stocker/work_gloves', 'supermarket', 'stocker', 'tools', 'supermarket/stocker/work_gloves', NULL, '{"en":"work gloves","es":"guantes de trabajo","pt":"luvas de trabalho","fr":"gants de travail","de":"Arbeitshandschuhe","it":"guanti da lavoro","nl":"werkhandschoenen","zh":"工作手套","ja":"作業用手袋","ru":"рабочие перчатки"}', 54
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/stocker/shelf_tag_holder', 'supermarket', 'stocker', 'tools', 'supermarket/stocker/shelf_tag_holder', NULL, '{"en":"shelf tag holder","es":"soporte de etiqueta","pt":"suporte de etiqueta","fr":"porte-étiquette","de":"Etikettenhalter","it":"porta etichette","nl":"labelhouder","zh":"货架标签支架","ja":"棚タグホルダー","ru":"держатель ценника"}', 56
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/stocker/shelving_unit', 'supermarket', 'stocker', 'tools', 'supermarket/stocker/shelving_unit', NULL, '{"en":"shelving unit","es":"estantería","pt":"estante","fr":"étagère","de":"Regaleinheit","it":"scaffalatura","nl":"stellingkast","zh":"货架单元","ja":"棚ユニット","ru":"стеллаж"}', 58
);

INSERT INTO public.sectors (id, job_id, name, icon, sort_order) VALUES (
  'butcher_tools', 'supermarket', '{"en":"Butcher","es":"Carnicero","pt":"Açougueiro","fr":"Boucher","de":"Metzger","it":"Macellaio","nl":"Butcher","zh":"Butcher","ja":"Butcher","ru":"Butcher"}', '🥩', 4
);
INSERT INTO public.roles (id, job_id, sector_id, name, icon, sort_order) VALUES (
  'tools', 'supermarket', 'butcher_tools', '{"en":"Tools","es":"Herramientas","pt":"Ferramentas","fr":"Outils","de":"Werkzeuge","it":"Attrezzi","nl":"Gereedschap","zh":"工具","ja":"道具","ru":"Инструменты"}', '🔧', 0
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/butcher_tools/cleaver', 'supermarket', 'butcher_tools', 'tools', 'supermarket/butcher_tools/cleaver', NULL, '{"en":"cleaver","es":"cuchillo de carnicero","pt":"cutelo","fr":"couperet","de":"Hackmesser","it":"mannaia","nl":"hakmes","zh":"斩肉刀","ja":"肉切り包丁","ru":"мясной топор"}', 0
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/butcher_tools/boning_knife', 'supermarket', 'butcher_tools', 'tools', 'supermarket/butcher_tools/boning_knife', NULL, '{"en":"boning knife","es":"cuchillo deshuesador","pt":"faca desossadora","fr":"couteau à désosser","de":"Ausbeinmesser","it":"coltello disossatore","nl":"uitbeenmes","zh":"剔骨刀","ja":"骨抜きナイフ","ru":"нож для обвалки"}', 2
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/butcher_tools/butcher_knife', 'supermarket', 'butcher_tools', 'tools', 'supermarket/butcher_tools/butcher_knife', NULL, '{"en":"butcher knife","es":"cuchillo de carnicero","pt":"faca de açougue","fr":"couteau de boucher","de":"Fleischermesser","it":"coltello da macellaio","nl":"slagersmes","zh":"屠宰刀","ja":"精肉ナイフ","ru":"нож мясника"}', 4
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/butcher_tools/meat_saw', 'supermarket', 'butcher_tools', 'tools', 'supermarket/butcher_tools/meat_saw', NULL, '{"en":"meat saw","es":"sierra para carne","pt":"serra de carne","fr":"scie à viande","de":"Fleischsäge","it":"sega per carne","nl":"vleesband","zh":"切肉锯","ja":"精肉ノコギリ","ru":"мясная пила"}', 6
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/butcher_tools/sharpening_steel', 'supermarket', 'butcher_tools', 'tools', 'supermarket/butcher_tools/sharpening_steel', NULL, '{"en":"sharpening steel","es":"afilador de acero","pt":"chaira","fr":"fusil à affûter","de":"Wetzstahl","it":"acciaino","nl":"aanzetstaal","zh":"磨刀棒","ja":"シャープナー","ru":"мусат"}', 8
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/butcher_tools/cutting_board', 'supermarket', 'butcher_tools', 'tools', 'supermarket/butcher_tools/cutting_board', NULL, '{"en":"cutting board","es":"tabla de cortar","pt":"tábua de corte","fr":"planche à découper","de":"Schneidebrett","it":"tagliere","nl":"snijplank","zh":"砧板","ja":"まな板","ru":"разделочная доска"}', 10
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/butcher_tools/meat_tenderizer', 'supermarket', 'butcher_tools', 'tools', 'supermarket/butcher_tools/meat_tenderizer', NULL, '{"en":"meat tenderizer","es":"ablandador de carne","pt":"amaciador de carne","fr":"attendrisseur de viande","de":"Fleischklopfer","it":"batticarne","nl":"vleeshamer","zh":"肉锤","ja":"ミートテンダライザー","ru":"молоток для отбивной"}', 12
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/butcher_tools/sausage_stuffer', 'supermarket', 'butcher_tools', 'tools', 'supermarket/butcher_tools/sausage_stuffer', NULL, '{"en":"sausage stuffer","es":"embutidora","pt":"embutidora de linguiça","fr":"poussoir à saucisses","de":"Wurstfüller","it":"insaccatrice","nl":"worstenvuller","zh":"灌肠机","ja":"ソーセージスタッファー","ru":"шприц для колбас"}', 14
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/butcher_tools/meat_grinder', 'supermarket', 'butcher_tools', 'tools', 'supermarket/butcher_tools/meat_grinder', NULL, '{"en":"meat grinder","es":"picadora de carne","pt":"moedor de carne","fr":"hachoir","de":"Fleischwolf","it":"tritacarne","nl":"vleesmolen","zh":"绞肉机","ja":"ミートグラインダー","ru":"мясорубка"}', 16
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/butcher_tools/butcher_block', 'supermarket', 'butcher_tools', 'tools', 'supermarket/butcher_tools/butcher_block', NULL, '{"en":"butcher block","es":"tajo de madera","pt":"toco de açougue","fr":"billot de boucher","de":"Hackblock","it":"ceppo da macellaio","nl":"hakblok","zh":"屠宰砧板","ja":"肉屋のまな板","ru":"разделочный блок мясника"}', 18
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/butcher_tools/breaking_knife', 'supermarket', 'butcher_tools', 'tools', 'supermarket/butcher_tools/breaking_knife', NULL, '{"en":"breaking knife","es":"cuchillo de despiece","pt":"faca de despiece","fr":"couteau de coupe","de":"Zerlegemesser","it":"coltello per sezionamento","nl":"braakmes","zh":"分割刀","ja":"部分取りナイフ","ru":"нож для разделки"}', 20
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/butcher_tools/fillet_knife', 'supermarket', 'butcher_tools', 'tools', 'supermarket/butcher_tools/fillet_knife', NULL, '{"en":"fillet knife","es":"cuchillo fileteador","pt":"faca para filé","fr":"couteau à filet","de":"Filetiermesser","it":"coltello per filettare","nl":"fileteermes","zh":"片鱼刀","ja":"フィレナイフ","ru":"филейный нож"}', 22
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/butcher_tools/skinning_knife', 'supermarket', 'butcher_tools', 'tools', 'supermarket/butcher_tools/skinning_knife', NULL, '{"en":"skinning knife","es":"cuchillo desollador","pt":"faca de esfolar","fr":"couteau à dépouiller","de":"Schälmesser","it":"coltello per spellare","nl":"onthuidsmes","zh":"剥皮刀","ja":"皮むきナイフ","ru":"нож для снятия шкуры"}', 24
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/butcher_tools/butcher_twine', 'supermarket', 'butcher_tools', 'tools', 'supermarket/butcher_tools/butcher_twine', NULL, '{"en":"butcher twine","es":"cordel de carnicero","pt":"barbante de açougue","fr":"ficelle de boucher","de":"Metzgergarn","it":"spago da macellaio","nl":"slagersgaren","zh":"肉用绳","ja":"精肉用たこ糸","ru":"шпагат мясника"}', 26
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/butcher_tools/meat_hook', 'supermarket', 'butcher_tools', 'tools', 'supermarket/butcher_tools/meat_hook', NULL, '{"en":"meat hook","es":"gancho de carne","pt":"gancho de carne","fr":"croc à viande","de":"Fleischhaken","it":"gancio per carne","nl":"vleeshaak","zh":"肉钩","ja":"肉掛けフック","ru":"мясной крюк"}', 28
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/butcher_tools/steak_knife', 'supermarket', 'butcher_tools', 'tools', 'supermarket/butcher_tools/steak_knife', NULL, '{"en":"steak knife","es":"cuchillo de bistec","pt":"faca de bife","fr":"couteau à steak","de":"Steakmesser","it":"coltello da bistecca","nl":"steakmes","zh":"牛排刀","ja":"ステーキナイフ","ru":"нож для стейка"}', 30
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/butcher_tools/trimming_knife', 'supermarket', 'butcher_tools', 'tools', 'supermarket/butcher_tools/trimming_knife', NULL, '{"en":"trimming knife","es":"cuchillo de recorte","pt":"faca de aparar","fr":"couteau à parer","de":"Putzermesser","it":"coltello da rifinitura","nl":"trimmesmes","zh":"修整刀","ja":"トリミングナイフ","ru":"нож для зачистки"}', 32
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/butcher_tools/meat_slicer', 'supermarket', 'butcher_tools', 'tools', 'supermarket/butcher_tools/meat_slicer', NULL, '{"en":"meat slicer","es":"cortadora de carne","pt":"fatiadora de carne","fr":"trancheuse à viande","de":"Aufschnittmaschine","it":"affettatrice","nl":"vleessnijmachine","zh":"切肉机","ja":"スライサー","ru":"слайсер для мяса"}', 34
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/butcher_tools/band_saw_blade', 'supermarket', 'butcher_tools', 'tools', 'supermarket/butcher_tools/band_saw_blade', NULL, '{"en":"band saw blade","es":"hoja de sierra de cinta","pt":"lâmina de serra fita","fr":"lame de scie à ruban","de":"Bandsägeblatt","it":"lama per sega a nastro","nl":"lintzaagblad","zh":"带锯片","ja":"バンドソーブレード","ru":"полотно ленточной пилы"}', 36
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/butcher_tools/rib_cutter', 'supermarket', 'butcher_tools', 'tools', 'supermarket/butcher_tools/rib_cutter', NULL, '{"en":"rib cutter","es":"cortacostillas","pt":"cortador de costelas","fr":"coupe-côtes","de":"Rippenschneider","it":"tagliacostole","nl":"ribbensnijder","zh":"排骨剪","ja":"リブカッター","ru":"нож для рёбер"}', 38
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/butcher_tools/meat_mallet', 'supermarket', 'butcher_tools', 'tools', 'supermarket/butcher_tools/meat_mallet', NULL, '{"en":"meat mallet","es":"mazo de carne","pt":"maço de carne","fr":"maillet de viande","de":"Fleischklopfer","it":"mazzuolo","nl":"vleeshamer","zh":"肉槌","ja":"ミートマレット","ru":"молоток для мяса"}', 40
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/butcher_tools/bone_dust_scraper', 'supermarket', 'butcher_tools', 'tools', 'supermarket/butcher_tools/bone_dust_scraper', NULL, '{"en":"bone dust scraper","es":"raspador de polvo de hueso","pt":"raspador de osso","fr":"racloir à os","de":"Knochenstaubschaber","it":"raschietto ossa","nl":"botrasper","zh":"骨粉刮刀","ja":"骨粉スクレーパー","ru":"скребок для костной муки"}', 42
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/butcher_tools/gambrel', 'supermarket', 'butcher_tools', 'tools', 'supermarket/butcher_tools/gambrel', NULL, '{"en":"gambrel","es":"gambrel","pt":"gancho traseiro","fr":"gambret","de":"Schlachtgalgen","it":"gambretto","nl":"slachterhaak","zh":"开膛钩","ja":"ギャンブレル","ru":"разделочный крюк"}', 44
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/butcher_tools/brisket_knife', 'supermarket', 'butcher_tools', 'tools', 'supermarket/butcher_tools/brisket_knife', NULL, '{"en":"brisket knife","es":"cuchillo para pecho","pt":"faca para peito","fr":"couteau à poitrine","de":"Brustkernmesser","it":"coltello per petto","nl":"borststuk mes","zh":"胸肉刀","ja":"ブリスケットナイフ","ru":"нож для грудинки"}', 46
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/butcher_tools/butcher_apron', 'supermarket', 'butcher_tools', 'tools', 'supermarket/butcher_tools/butcher_apron', NULL, '{"en":"butcher apron","es":"delantal de carnicero","pt":"avental de açougue","fr":"tablier de boucher","de":"Fleischerschürze","it":"grembiule da macellaio","nl":"slagersschort","zh":"屠宰围裙","ja":"肉屋のエプロン","ru":"фартук мясника"}', 48
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/butcher_tools/chain_mail_glove', 'supermarket', 'butcher_tools', 'tools', 'supermarket/butcher_tools/chain_mail_glove', NULL, '{"en":"chain mail glove","es":"guante de malla de acero","pt":"luva de malha de aço","fr":"gant de mailles","de":"Kettenpanzerhandschuh","it":"guanto in maglia","nl":"kettingmaliënhandschoen","zh":"钢丝手套","ja":"チェーンメイルグローブ","ru":"кольчужная перчатка"}', 50
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/butcher_tools/meat_thermometer', 'supermarket', 'butcher_tools', 'tools', 'supermarket/butcher_tools/meat_thermometer', NULL, '{"en":"meat thermometer","es":"termómetro de carne","pt":"termômetro de carne","fr":"thermomètre à viande","de":"Fleischthermometer","it":"termometro per carne","nl":"vleesthermometer","zh":"肉温度计","ja":"肉温度計","ru":"термометр для мяса"}', 52
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/butcher_tools/bacon_slicer', 'supermarket', 'butcher_tools', 'tools', 'supermarket/butcher_tools/bacon_slicer', NULL, '{"en":"bacon slicer","es":"cortadora de bacon","pt":"fatiadora de bacon","fr":"trancheuse à bacon","de":"Speckschneider","it":"affettatrice per pancetta","nl":"baconsnijder","zh":"培根切片机","ja":"ベーコンスライサー","ru":"нарезчик бекона"}', 54
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/butcher_tools/patty_maker', 'supermarket', 'butcher_tools', 'tools', 'supermarket/butcher_tools/patty_maker', NULL, '{"en":"patty maker","es":"molde para hamburguesas","pt":"moldador de hambúrguer","fr":"presse-steak","de":"Frikadellenpresse","it":"pressaburger","nl":"burgerpers","zh":"汉堡肉饼模具","ja":"パテメーカー","ru":"форма для котлет"}', 56
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/butcher_tools/marinade_injector', 'supermarket', 'butcher_tools', 'tools', 'supermarket/butcher_tools/marinade_injector', NULL, '{"en":"marinade injector","es":"inyector de marinada","pt":"injetor de marinada","fr":"injecteur de marinade","de":"Marinadeninjektor","it":"iniettore per marinatura","nl":"marinade-injector","zh":"腌料注射器","ja":"マリネインジェクター","ru":"шприц для маринада"}', 58
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/butcher_tools/larding_needle', 'supermarket', 'butcher_tools', 'tools', 'supermarket/butcher_tools/larding_needle', NULL, '{"en":"larding needle","es":"aguja de mechar","pt":"agulha para lardar","fr":"lardoire","de":"Spicknadel","it":"ago per lardellare","nl":"speknaald","zh":"注油针","ja":"ラーディングニードル","ru":"игла для шпигования"}', 60
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/butcher_tools/carving_fork', 'supermarket', 'butcher_tools', 'tools', 'supermarket/butcher_tools/carving_fork', NULL, '{"en":"carving fork","es":"tenedor trinchante","pt":"garfo de trinchar","fr":"fourchette à découper","de":"Tranchiergabel","it":"forchettone","nl":"trancheerder","zh":"叉肉叉","ja":"カービングフォーク","ru":"вилка для разделки"}', 62
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/butcher_tools/scabbard', 'supermarket', 'butcher_tools', 'tools', 'supermarket/butcher_tools/scabbard', NULL, '{"en":"scabbard","es":"funda de cuchillo","pt":"bainha de faca","fr":"fourreau","de":"Messerscheide","it":"fodero","nl":"mesdoos","zh":"刀鞘","ja":"ナイフケース","ru":"ножны"}', 64
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/butcher_tools/poultry_shears', 'supermarket', 'butcher_tools', 'tools', 'supermarket/butcher_tools/poultry_shears', NULL, '{"en":"poultry shears","es":"tijeras para aves","pt":"tesoura para aves","fr":"cisailles à volaille","de":"Geflügelschere","it":"forbici per pollame","nl":"gevogelteschaar","zh":"家禽剪","ja":"家禽用ハサミ","ru":"ножницы для птицы"}', 66
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/butcher_tools/slicing_knife', 'supermarket', 'butcher_tools', 'tools', 'supermarket/butcher_tools/slicing_knife', NULL, '{"en":"slicing knife","es":"cuchillo rebanador","pt":"faca de fatiar","fr":"couteau à trancher","de":"Schneidemesser","it":"coltello affettatore","nl":"snijmes","zh":"切片刀","ja":"スライシングナイフ","ru":"нож для нарезки"}', 68
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/butcher_tools/curing_container', 'supermarket', 'butcher_tools', 'tools', 'supermarket/butcher_tools/curing_container', NULL, '{"en":"curing container","es":"recipiente de curado","pt":"recipiente de cura","fr":"récipient de salaison","de":"Salzungsbehälter","it":"contenitore per stagionatura","nl":"zouttrommel","zh":"腌制容器","ja":"塩漬け容器","ru":"ёмкость для засолки"}', 70
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/butcher_tools/smoke_gun', 'supermarket', 'butcher_tools', 'tools', 'supermarket/butcher_tools/smoke_gun', NULL, '{"en":"smoke gun","es":"pistola de humo","pt":"defumador","fr":"pistolet à fumée","de":"Rauchpistole","it":"pistola per affumicatura","nl":"rookgun","zh":"烟熏枪","ja":"スモークガン","ru":"дымовой пистолет"}', 72
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/butcher_tools/vacuum_sealer', 'supermarket', 'butcher_tools', 'tools', 'supermarket/butcher_tools/vacuum_sealer', NULL, '{"en":"vacuum sealer","es":"selladora al vacío","pt":"seladora a vácuo","fr":"machine sous vide","de":"Vakuumierer","it":"sigillatrice sottovuoto","nl":"vacuümsealer","zh":"真空封装机","ja":"真空パック機","ru":"вакуумный упаковщик"}', 74
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/butcher_tools/meat_lug', 'supermarket', 'butcher_tools', 'tools', 'supermarket/butcher_tools/meat_lug', NULL, '{"en":"meat lug","es":"bandeja para carne","pt":"bandeja de carne","fr":"bac à viande","de":"Fleischwanne","it":"vasca per carne","nl":"vleesbak","zh":"肉盘","ja":"精肉バット","ru":"лоток для мяса"}', 76
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/butcher_tools/scale', 'supermarket', 'butcher_tools', 'tools', 'supermarket/butcher_tools/scale', NULL, '{"en":"scale","es":"báscula","pt":"balança","fr":"balance","de":"Waage","it":"bilancia","nl":"weegschaal","zh":"秤","ja":"はかり","ru":"весы"}', 78
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/butcher_tools/price_gun', 'supermarket', 'butcher_tools', 'tools', 'supermarket/butcher_tools/price_gun', NULL, '{"en":"price gun","es":"etiquetadora de precios","pt":"pistola de etiquetas","fr":"pistolet d''étiquetage","de":"Preisauszeichnungsgerät","it":"pistola prezzi","nl":"prijspistool","zh":"价格标签枪","ja":"値札ガン","ru":"пистолет для этикеток"}', 80
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/butcher_tools/paper_dispenser', 'supermarket', 'butcher_tools', 'tools', 'supermarket/butcher_tools/paper_dispenser', NULL, '{"en":"paper dispenser","es":"dispensador de papel","pt":"dispensador de papel","fr":"distributeur de papier","de":"Papierhalter","it":"distributore di carta","nl":"papierhouder","zh":"纸张分配器","ja":"紙ディスペンサー","ru":"диспенсер для бумаги"}', 82
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/butcher_tools/label_printer', 'supermarket', 'butcher_tools', 'tools', 'supermarket/butcher_tools/label_printer', NULL, '{"en":"label printer","es":"impresora de etiquetas","pt":"impressora de etiquetas","fr":"imprimante d''étiquettes","de":"Etikettendrucker","it":"stampante etichette","nl":"labelprinter","zh":"标签打印机","ja":"ラベルプリンター","ru":"принтер этикеток"}', 84
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/butcher_tools/bone_saw', 'supermarket', 'butcher_tools', 'tools', 'supermarket/butcher_tools/bone_saw', NULL, '{"en":"bone saw","es":"sierra de huesos","pt":"serra de osso","fr":"scie à os","de":"Knochensäge","it":"sega per ossa","nl":"bottensnijder","zh":"截骨锯","ja":"骨用ノコギリ","ru":"пила для костей"}', 86
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/butcher_tools/lug_cart', 'supermarket', 'butcher_tools', 'tools', 'supermarket/butcher_tools/lug_cart', NULL, '{"en":"lug cart","es":"carro de bandejas","pt":"carrinho de bandeja","fr":"chariot à bacs","de":"Wannenwagen","it":"carrello vasca","nl":"wastewagen","zh":"托盘推车","ja":"バット台車","ru":"тележка для лотков"}', 88
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/butcher_tools/blade_tenderizer', 'supermarket', 'butcher_tools', 'tools', 'supermarket/butcher_tools/blade_tenderizer', NULL, '{"en":"blade tenderizer","es":"ablandador de hojas","pt":"amaciador de lâminas","fr":"attendrisseur à lames","de":"Klingenzartmacher","it":"tenderizzatore a lame","nl":"lametenderizer","zh":"刀片嫩肉机","ja":"ブレードテンダライザー","ru":"тендерайзер с лезвиями"}', 90
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/butcher_tools/replacement_blade', 'supermarket', 'butcher_tools', 'tools', 'supermarket/butcher_tools/replacement_blade', NULL, '{"en":"replacement blade","es":"hoja de repuesto","pt":"lâmina de substituição","fr":"lame de rechange","de":"Ersatzklinge","it":"lama di ricambio","nl":"vervangingsblad","zh":"替换刀片","ja":"交換用ブレード","ru":"сменное лезвие"}', 92
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/butcher_tools/meat_mixer', 'supermarket', 'butcher_tools', 'tools', 'supermarket/butcher_tools/meat_mixer', NULL, '{"en":"meat mixer","es":"mezcladora de carne","pt":"misturador de carne","fr":"mélangeur de viande","de":"Fleischmischer","it":"miscelatore per carne","nl":"vleesmenger","zh":"搅肉机","ja":"ミートミキサー","ru":"мешалка для мяса"}', 94
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/butcher_tools/hog_ring_plier', 'supermarket', 'butcher_tools', 'tools', 'supermarket/butcher_tools/hog_ring_plier', NULL, '{"en":"hog ring plier","es":"alicate para anillar","pt":"alicate para anilhos","fr":"pince à colliers","de":"Schellenzange","it":"pinze per anelli","nl":"hogringstang","zh":"环形卡钳","ja":"ホグリングプライヤー","ru":"плоскогубцы для колец"}', 96
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/butcher_tools/electric_tenderizer', 'supermarket', 'butcher_tools', 'tools', 'supermarket/butcher_tools/electric_tenderizer', NULL, '{"en":"electric tenderizer","es":"ablandador eléctrico","pt":"amaciador elétrico","fr":"attendrisseur électrique","de":"elektrischer Fleischmürber","it":"tenerizzatore elettrico","nl":"elektrische tenderizer","zh":"电动嫩肉机","ja":"電動テンダライザー","ru":"электрический тендерайзер"}', 98
);

INSERT INTO public.sectors (id, job_id, name, icon, sort_order) VALUES (
  'baker_tools', 'supermarket', '{"en":"Baker","es":"Panadero","pt":"Padeiro","fr":"Boulanger","de":"Bäcker","it":"Fornaio","nl":"Baker","zh":"Baker","ja":"Baker","ru":"Baker"}', '🍞', 5
);
INSERT INTO public.roles (id, job_id, sector_id, name, icon, sort_order) VALUES (
  'tools', 'supermarket', 'baker_tools', '{"en":"Tools","es":"Herramientas","pt":"Ferramentas","fr":"Outils","de":"Werkzeuge","it":"Attrezzi","nl":"Gereedschap","zh":"工具","ja":"道具","ru":"Инструменты"}', '🔧', 0
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/baker_tools/rolling_pin', 'supermarket', 'baker_tools', 'tools', 'supermarket/baker_tools/rolling_pin', NULL, '{"en":"rolling pin","es":"rodillo","pt":"rolo de massa","fr":"rouleau à pâtisserie","de":"Nudelholz","it":"matterello","nl":"deegroller","zh":"擀面杖","ja":"麵棒","ru":"скалка"}', 0
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/baker_tools/pastry_brush', 'supermarket', 'baker_tools', 'tools', 'supermarket/baker_tools/pastry_brush', NULL, '{"en":"pastry brush","es":"pincel de repostería","pt":"pincel de confeitaria","fr":"pinceau à pâtisserie","de":"Backpinsel","it":"pennello da pasticceria","nl":"deegkwast","zh":"糕点刷","ja":"ペストリーブラシ","ru":"кулинарная кисть"}', 2
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/baker_tools/bread_lame', 'supermarket', 'baker_tools', 'tools', 'supermarket/baker_tools/bread_lame', NULL, '{"en":"bread lame","es":"cuchilla de pan","pt":"lâmina de pão","fr":"lame à pain","de":"Brotmesser","it":"lama per pane","nl":"broodsnijder","zh":"割包刀","ja":"ブレードライム","ru":"лезвие для надрезки хлеба"}', 4
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/baker_tools/dough_scraper', 'supermarket', 'baker_tools', 'tools', 'supermarket/baker_tools/dough_scraper', NULL, '{"en":"dough scraper","es":"rasqueta de masa","pt":"raspador de massa","fr":"coupe-pâte","de":"Teigschaber","it":"raschia pasta","nl":"deegschraper","zh":"刮面团刀","ja":"生地スケッパー","ru":"скребок для теста"}', 6
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/baker_tools/proofing_basket', 'supermarket', 'baker_tools', 'tools', 'supermarket/baker_tools/proofing_basket', NULL, '{"en":"proofing basket","es":"cesta de fermentación","pt":"cesta de fermentação","fr":"banneton","de":"Gärkorb","it":"cestino per la lievitazione","nl":"rijsmandje","zh":"发酵篮","ja":"発酵かご","ru":"корзина для расстойки"}', 8
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/baker_tools/pastry_cutter', 'supermarket', 'baker_tools', 'tools', 'supermarket/baker_tools/pastry_cutter', NULL, '{"en":"pastry cutter","es":"cortador de repostería","pt":"cortador de massa","fr":"coupe-pâte","de":"Teigrädchen","it":"tagliapasta","nl":"deegsnijder","zh":"糕点切割器","ja":"ペストリーカッター","ru":"нож для теста"}', 10
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/baker_tools/bread_pan', 'supermarket', 'baker_tools', 'tools', 'supermarket/baker_tools/bread_pan', NULL, '{"en":"bread pan","es":"molde de pan","pt":"forma de pão","fr":"moule à pain","de":"Brotform","it":"stampo per pane","nl":"broodvorm","zh":"面包模具","ja":"パン型","ru":"форма для хлеба"}', 12
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/baker_tools/cake_pan', 'supermarket', 'baker_tools', 'tools', 'supermarket/baker_tools/cake_pan', NULL, '{"en":"cake pan","es":"molde para pastel","pt":"forma de bolo","fr":"moule à gâteau","de":"Kuchenform","it":"stampo per torte","nl":"cakevorm","zh":"蛋糕模具","ja":"ケーキ型","ru":"форма для торта"}', 14
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/baker_tools/muffin_tin', 'supermarket', 'baker_tools', 'tools', 'supermarket/baker_tools/muffin_tin', NULL, '{"en":"muffin tin","es":"molde para muffins","pt":"forma para muffins","fr":"moule à muffins","de":"Muffinform","it":"stampo per muffin","nl":"muffinvorm","zh":"松糕模具","ja":"マフィン型","ru":"форма для маффинов"}', 16
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/baker_tools/baking_sheet', 'supermarket', 'baker_tools', 'tools', 'supermarket/baker_tools/baking_sheet', NULL, '{"en":"baking sheet","es":"bandeja de hornear","pt":"assadeira","fr":"plaque de cuisson","de":"Backblech","it":"teglia da forno","nl":"bakplaat","zh":"烤盘","ja":"天板","ru":"противень"}', 18
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/baker_tools/cooling_rack', 'supermarket', 'baker_tools', 'tools', 'supermarket/baker_tools/cooling_rack', NULL, '{"en":"cooling rack","es":"rejilla para enfriar","pt":"grade de resfriamento","fr":"grille de refroidissement","de":"Kuchenrost","it":"griglia di raffreddamento","nl":"afkoelrooster","zh":"冷却架","ja":"冷却ラック","ru":"решётка для охлаждения"}', 20
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/baker_tools/piping_bag', 'supermarket', 'baker_tools', 'tools', 'supermarket/baker_tools/piping_bag', NULL, '{"en":"piping bag","es":"manga pastelera","pt":"saco de confeitar","fr":"poche à douille","de":"Spritzbeutel","it":"sac à poche","nl":"spuitzak","zh":"裱花袋","ja":"絞り袋","ru":"кондитерский мешок"}', 22
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/baker_tools/icing_spatula', 'supermarket', 'baker_tools', 'tools', 'supermarket/baker_tools/icing_spatula', NULL, '{"en":"icing spatula","es":"espátula de glaseado","pt":"espátula de glacê","fr":"spatule à glaçage","de":"Glasurspatel","it":"spatola per glassatura","nl":"glazuurspatel","zh":"糖霜抹刀","ja":"アイシングスパチュラ","ru":"лопатка для глазури"}', 24
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/baker_tools/dough_whisk', 'supermarket', 'baker_tools', 'tools', 'supermarket/baker_tools/dough_whisk', NULL, '{"en":"dough whisk","es":"batidor de masa","pt":"batedor de massa","fr":"fouet à pâte","de":"Teigschneebesen","it":"frusta per impasto","nl":"deegklopper","zh":"打面团打蛋器","ja":"生地ウィスク","ru":"венчик для теста"}', 26
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/baker_tools/bread_knife', 'supermarket', 'baker_tools', 'tools', 'supermarket/baker_tools/bread_knife', NULL, '{"en":"bread knife","es":"cuchillo de pan","pt":"faca de pão","fr":"couteau à pain","de":"Brotmesser","it":"coltello da pane","nl":"broodmes","zh":"面包刀","ja":"パンナイフ","ru":"хлебный нож"}', 28
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/baker_tools/kitchen_scale', 'supermarket', 'baker_tools', 'tools', 'supermarket/baker_tools/kitchen_scale', NULL, '{"en":"kitchen scale","es":"báscula de cocina","pt":"balança de cozinha","fr":"balance de cuisine","de":"Küchenwaage","it":"bilancia da cucina","nl":"keukenweegschaal","zh":"厨房秤","ja":"キッチンスケール","ru":"кухонные весы"}', 30
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/baker_tools/measuring_cups', 'supermarket', 'baker_tools', 'tools', 'supermarket/baker_tools/measuring_cups', NULL, '{"en":"measuring cups","es":"tazas medidoras","pt":"copos medidores","fr":"tasses à mesurer","de":"Messbecher","it":"tazze misuratici","nl":"maatbekers","zh":"量杯","ja":"計量カップ","ru":"мерные стаканы"}', 32
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/baker_tools/measuring_spoons', 'supermarket', 'baker_tools', 'tools', 'supermarket/baker_tools/measuring_spoons', NULL, '{"en":"measuring spoons","es":"cucharas medidoras","pt":"colheres medidoras","fr":"cuillères à mesurer","de":"Messlöffel","it":"cucchiai dosatori","nl":"maatlepels","zh":"量匙","ja":"計量スプーン","ru":"мерные ложки"}', 34
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/baker_tools/mixing_bowl', 'supermarket', 'baker_tools', 'tools', 'supermarket/baker_tools/mixing_bowl', NULL, '{"en":"mixing bowl","es":"cuenco para mezclar","pt":"tigela para misturar","fr":"bol mélangeur","de":"Rührschüssel","it":"ciotola per mescolare","nl":"mengkom","zh":"搅拌碗","ja":"ミキシングボウル","ru":"миска для смешивания"}', 36
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/baker_tools/stand_mixer', 'supermarket', 'baker_tools', 'tools', 'supermarket/baker_tools/stand_mixer', NULL, '{"en":"stand mixer","es":"batidora de pie","pt":"batedeira planetária","fr":"batteur sur socle","de":"Küchenmaschine","it":"impastatrice","nl":"standmixer","zh":"厨师机","ja":"スタンドミキサー","ru":"стационарный миксер"}', 38
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/baker_tools/flour_sifter', 'supermarket', 'baker_tools', 'tools', 'supermarket/baker_tools/flour_sifter', NULL, '{"en":"flour sifter","es":"tamiz de harina","pt":"peneira de farinha","fr":"tamis à farine","de":"Mehlsieb","it":"setaccio per farina","nl":"meelzeef","zh":"面粉筛","ja":"粉ふるい","ru":"сито для муки"}', 40
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/baker_tools/dough_docker', 'supermarket', 'baker_tools', 'tools', 'supermarket/baker_tools/dough_docker', NULL, '{"en":"dough docker","es":"rodillo de pinchos","pt":"rolo picador de massa","fr":"pique-vite","de":"Teigrädchen","it":"bucaformi","nl":"dough docker","zh":"打孔滚轮","ja":"ドッカー","ru":"игольчатый ролик"}', 42
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/baker_tools/bread_stamp', 'supermarket', 'baker_tools', 'tools', 'supermarket/baker_tools/bread_stamp', NULL, '{"en":"bread stamp","es":"sello de pan","pt":"carimbo de pão","fr":"tampon à pain","de":"Brotstempel","it":"timbro per pane","nl":"broodstempel","zh":"面包印章","ja":"パンスタンプ","ru":"штамп для хлеба"}', 44
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/baker_tools/oven_peel', 'supermarket', 'baker_tools', 'tools', 'supermarket/baker_tools/oven_peel', NULL, '{"en":"oven peel","es":"pala de horno","pt":"pá de forno","fr":"pelle à four","de":"Backschaufel","it":"pala da forno","nl":"broodschep","zh":"烤炉铲","ja":"オーブンピール","ru":"хлебная лопата"}', 46
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/baker_tools/oven_thermometer', 'supermarket', 'baker_tools', 'tools', 'supermarket/baker_tools/oven_thermometer', NULL, '{"en":"oven thermometer","es":"termómetro de horno","pt":"termômetro de forno","fr":"thermomètre de four","de":"Ofenthermometer","it":"termometro per forno","nl":"oventhermometer","zh":"烤箱温度计","ja":"オーブン温度計","ru":"термометр для духовки"}', 48
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/baker_tools/kitchen_timer', 'supermarket', 'baker_tools', 'tools', 'supermarket/baker_tools/kitchen_timer', NULL, '{"en":"kitchen timer","es":"temporizador de cocina","pt":"timer de cozinha","fr":"minuterie de cuisine","de":"Küchentimer","it":"timer da cucina","nl":"kookwekker","zh":"厨房定时器","ja":"キッチンタイマー","ru":"кухонный таймер"}', 50
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/baker_tools/pastry_wheel', 'supermarket', 'baker_tools', 'tools', 'supermarket/baker_tools/pastry_wheel', NULL, '{"en":"pastry wheel","es":"rueda de repostería","pt":"roda de massa","fr":"roulette à pâtisserie","de":"Teigrädchen","it":"rotella da pasticceria","nl":"deegwieltje","zh":"糕点切轮","ja":"ペストリーホイール","ru":"колесо для теста"}', 52
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/baker_tools/biscuit_cutters', 'supermarket', 'baker_tools', 'tools', 'supermarket/baker_tools/biscuit_cutters', NULL, '{"en":"biscuit cutters","es":"cortadores de galletas","pt":"cortadores de biscoitos","fr":"emporte-pièces","de":"Keksausstecher","it":"tagliabiscotti","nl":"koekjesvorm","zh":"饼干模具","ja":"クッキー型","ru":"формочки для печенья"}', 54
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/baker_tools/pie_dish', 'supermarket', 'baker_tools', 'tools', 'supermarket/baker_tools/pie_dish', NULL, '{"en":"pie dish","es":"molde de tarta","pt":"forma de torta","fr":"plat à tarte","de":"Pieform","it":"tortiera","nl":"taartvorm","zh":"馅饼盘","ja":"パイ皿","ru":"форма для пирога"}', 56
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/baker_tools/bundt_pan', 'supermarket', 'baker_tools', 'tools', 'supermarket/baker_tools/bundt_pan', NULL, '{"en":"bundt pan","es":"molde bundt","pt":"forma de bolo com furo","fr":"moule à kouglof","de":"Gugelhupfform","it":"stampo a ciambella","nl":"tulbandvorm","zh":"戚风蛋糕模具","ja":"バントパン","ru":"форма для кугельхопфа"}', 58
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/baker_tools/silicone_mat', 'supermarket', 'baker_tools', 'tools', 'supermarket/baker_tools/silicone_mat', NULL, '{"en":"silicone mat","es":"tapete de silicona","pt":"tapete de silicone","fr":"tapis en silicone","de":"Silikonmatte","it":"tappetino in silicone","nl":"siliconenmat","zh":"硅胶烤垫","ja":"シリコンマット","ru":"силиконовый коврик"}', 60
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/baker_tools/parchment_paper', 'supermarket', 'baker_tools', 'tools', 'supermarket/baker_tools/parchment_paper', NULL, '{"en":"parchment paper","es":"papel pergamino","pt":"papel manteiga","fr":"papier sulfurisé","de":"Backpapier","it":"carta forno","nl":"bakpapier","zh":"烘焙纸","ja":"クッキングシート","ru":"пергаментная бумага"}', 62
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/baker_tools/balloon_whisk', 'supermarket', 'baker_tools', 'tools', 'supermarket/baker_tools/balloon_whisk', NULL, '{"en":"balloon whisk","es":"batidor de globo","pt":"batedor de balão","fr":"fouet ballon","de":"Schneebesen","it":"frusta a palloncino","nl":"balloniklopper","zh":"球形打蛋器","ja":"バルーンウィスク","ru":"венчик-баллон"}', 64
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/baker_tools/wooden_spoon', 'supermarket', 'baker_tools', 'tools', 'supermarket/baker_tools/wooden_spoon', NULL, '{"en":"wooden spoon","es":"cuchara de madera","pt":"colher de pau","fr":"cuillère en bois","de":"Holzlöffel","it":"cucchiaio di legno","nl":"houten lepel","zh":"木勺","ja":"木のスプーン","ru":"деревянная ложка"}', 66
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/baker_tools/proofing_box', 'supermarket', 'baker_tools', 'tools', 'supermarket/baker_tools/proofing_box', NULL, '{"en":"proofing box","es":"caja de fermentación","pt":"caixa de fermentação","fr":"chambre de pousse","de":"Gärbox","it":"camera di lievitazione","nl":"rijskast","zh":"发酵箱","ja":"発酵ボックス","ru":"расстоечный шкаф"}', 68
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/baker_tools/spray_bottle', 'supermarket', 'baker_tools', 'tools', 'supermarket/baker_tools/spray_bottle', NULL, '{"en":"spray bottle","es":"botella spray","pt":"borrifador","fr":"flacon pulvérisateur","de":"Sprühflasche","it":"flacone spray","nl":"sprayflacon","zh":"喷雾瓶","ja":"スプレーボトル","ru":"пульверизатор"}', 70
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/baker_tools/grain_mill', 'supermarket', 'baker_tools', 'tools', 'supermarket/baker_tools/grain_mill', NULL, '{"en":"grain mill","es":"molino de granos","pt":"moinho de grãos","fr":"moulin à grains","de":"Getreidemühle","it":"mulino per cereali","nl":"graanmolen","zh":"磨粉机","ja":"穀物ミル","ru":"мельница для зерна"}', 72
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/baker_tools/blowtorch', 'supermarket', 'baker_tools', 'tools', 'supermarket/baker_tools/blowtorch', NULL, '{"en":"blowtorch","es":"soplete","pt":"maçarico","fr":"chalumeau","de":"Bunsenbrenner","it":"cannello","nl":"gasbrander","zh":"喷枪","ja":"バーナー","ru":"кулинарная горелка"}', 74
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/baker_tools/cake_turntable', 'supermarket', 'baker_tools', 'tools', 'supermarket/baker_tools/cake_turntable', NULL, '{"en":"cake turntable","es":"plato giratorio para pastel","pt":"prato giratório para bolo","fr":"plateau tournant","de":"Drehteller","it":"piatto rotante","nl":"taartstandaard","zh":"蛋糕转台","ja":"ケーキターンテーブル","ru":"поворотный стол для торта"}', 76
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/baker_tools/offset_spatula', 'supermarket', 'baker_tools', 'tools', 'supermarket/baker_tools/offset_spatula', NULL, '{"en":"offset spatula","es":"espátula offset","pt":"espátula de cotovelo","fr":"spatule coudée","de":"Winkelpalette","it":"spatola angolata","nl":"haakspatel","zh":"曲柄抹刀","ja":"オフセットスパチュラ","ru":"изогнутая лопатка"}', 78
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/baker_tools/bench_knife', 'supermarket', 'baker_tools', 'tools', 'supermarket/baker_tools/bench_knife', NULL, '{"en":"bench knife","es":"cuchillo de banco","pt":"raspa de bancada","fr":"coupe-pâte de table","de":"Teigmesser","it":"coltello da banco","nl":"bankmes","zh":"台面刮板","ja":"ベンチナイフ","ru":"скребок кондитера"}', 80
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/baker_tools/couche_cloth', 'supermarket', 'baker_tools', 'tools', 'supermarket/baker_tools/couche_cloth', NULL, '{"en":"couche cloth","es":"tela para fermentación","pt":"pano de fermentação","fr":"couche de boulanger","de":"Bäckerleinwand","it":"telo per lievitazione","nl":"rijsdoek","zh":"发酵布","ja":"発酵クロス","ru":"льняная расстоечная ткань"}', 82
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/baker_tools/banneton_liner', 'supermarket', 'baker_tools', 'tools', 'supermarket/baker_tools/banneton_liner', NULL, '{"en":"banneton liner","es":"forro de cesta","pt":"forro de cesta","fr":"chemise de banneton","de":"Gärkorbeinsatz","it":"fodera per cestino","nl":"rijsmandvoering","zh":"发酵篮衬布","ja":"バネトンライナー","ru":"вкладыш для корзины"}', 84
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/baker_tools/dough_bucket', 'supermarket', 'baker_tools', 'tools', 'supermarket/baker_tools/dough_bucket', NULL, '{"en":"dough bucket","es":"cubo de masa","pt":"balde de massa","fr":"seau à pâte","de":"Teigwanne","it":"secchio per impasto","nl":"deegbak","zh":"面团桶","ja":"ドウバケツ","ru":"контейнер для теста"}', 86
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/baker_tools/glazing_brush', 'supermarket', 'baker_tools', 'tools', 'supermarket/baker_tools/glazing_brush', NULL, '{"en":"glazing brush","es":"pincel de glasear","pt":"pincel de glacear","fr":"pinceau à napper","de":"Glasurpinsel","it":"pennello da glassatura","nl":"glacuurkwast","zh":"糖浆刷","ja":"グレーズブラシ","ru":"кисть для глазировки"}', 88
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/baker_tools/bread_bag', 'supermarket', 'baker_tools', 'tools', 'supermarket/baker_tools/bread_bag', NULL, '{"en":"bread bag","es":"bolsa de pan","pt":"saco de pão","fr":"sac à pain","de":"Brottüte","it":"sacchetto per pane","nl":"broodsak","zh":"面包袋","ja":"パン袋","ru":"мешок для хлеба"}', 90
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/baker_tools/bowl_scraper', 'supermarket', 'baker_tools', 'tools', 'supermarket/baker_tools/bowl_scraper', NULL, '{"en":"bowl scraper","es":"raspador de bol","pt":"raspador de tigela","fr":"racloir de bol","de":"Schüsselschaber","it":"raschietto per ciotola","nl":"komschraper","zh":"碗刮刀","ja":"ボウルスクレーパー","ru":"скребок для миски"}', 92
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/baker_tools/piping_tips', 'supermarket', 'baker_tools', 'tools', 'supermarket/baker_tools/piping_tips', NULL, '{"en":"piping tips","es":"boquillas","pt":"bicos de confeitar","fr":"douilles","de":"Aufsätze","it":"bocchette","nl":"spuitmondjes","zh":"裱花嘴","ja":"絞り口金","ru":"насадки кондитерского мешка"}', 94
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/baker_tools/flour_dredge', 'supermarket', 'baker_tools', 'tools', 'supermarket/baker_tools/flour_dredge', NULL, '{"en":"flour dredge","es":"espolvoreador de harina","pt":"polvilhador de farinha","fr":"saupoudroir à farine","de":"Mehlstreuer","it":"spolvero farina","nl":"meelstrooier","zh":"撒粉器","ja":"粉フリッカー","ru":"мучница"}', 96
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/baker_tools/palette_knife', 'supermarket', 'baker_tools', 'tools', 'supermarket/baker_tools/palette_knife', NULL, '{"en":"palette knife","es":"paleta","pt":"espátula de confeiteiro","fr":"couteau palette","de":"Palettenmesser","it":"coltello a palette","nl":"paletmes","zh":"调色刀","ja":"パレットナイフ","ru":"нож-лопатка"}', 98
);

INSERT INTO public.sectors (id, job_id, name, icon, sort_order) VALUES (
  'cleaner', 'supermarket', '{"en":"Cleaner","es":"Limpiador","pt":"Limpador","fr":"Nettoyeur","de":"Reiniger","it":"Addetto alle pulizie","nl":"Cleaner","zh":"Cleaner","ja":"Cleaner","ru":"Cleaner"}', '🧹', 6
);
INSERT INTO public.roles (id, job_id, sector_id, name, icon, sort_order) VALUES (
  'tools', 'supermarket', 'cleaner', '{"en":"Tools","es":"Herramientas","pt":"Ferramentas","fr":"Outils","de":"Werkzeuge","it":"Attrezzi","nl":"Gereedschap","zh":"工具","ja":"道具","ru":"Инструменты"}', '🔧', 0
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/cleaner/mop', 'supermarket', 'cleaner', 'tools', 'supermarket/cleaner/mop', NULL, '{"en":"mop","es":"fregona","pt":"esfregão","fr":"serpillière","de":"Wischmop","it":"mocio","nl":"dweil","zh":"拖把","ja":"モップ","ru":"швабра"}', 0
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/cleaner/bucket', 'supermarket', 'cleaner', 'tools', 'supermarket/cleaner/bucket', NULL, '{"en":"bucket","es":"cubo","pt":"balde","fr":"seau","de":"Eimer","it":"secchio","nl":"emmer","zh":"桶","ja":"バケツ","ru":"ведро"}', 2
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/cleaner/cleaning_cloth', 'supermarket', 'cleaner', 'tools', 'supermarket/cleaner/cleaning_cloth', NULL, '{"en":"cleaning cloth","es":"paño de limpieza","pt":"pano de limpeza","fr":"chiffon de nettoyage","de":"Putztuch","it":"strofinaccio","nl":"poetsdoek","zh":"清洁布","ja":"雑巾","ru":"тряпка"}', 4
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/cleaner/detergent', 'supermarket', 'cleaner', 'tools', 'supermarket/cleaner/detergent', NULL, '{"en":"detergent","es":"detergente","pt":"detergente","fr":"détergent","de":"Reinigungsmittel","it":"detersivo","nl":"schoonmaakmiddel","zh":"洗涤剂","ja":"洗剤","ru":"моющее средство"}', 6
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/cleaner/disinfectant', 'supermarket', 'cleaner', 'tools', 'supermarket/cleaner/disinfectant', NULL, '{"en":"disinfectant","es":"desinfectante","pt":"desinfetante","fr":"désinfectant","de":"Desinfektionsmittel","it":"disinfettante","nl":"desinfectant","zh":"消毒剂","ja":"消毒薬","ru":"дезинфектант"}', 8
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/cleaner/wet_floor_sign', 'supermarket', 'cleaner', 'tools', 'supermarket/cleaner/wet_floor_sign', NULL, '{"en":"wet floor sign","es":"señal de suelo mojado","pt":"placa de piso molhado","fr":"panneau sol mouillé","de":"Nasser Boden Schild","it":"cartello pavimento bagnato","nl":"nat-vloerbord","zh":"湿地板警示牌","ja":"床注意サイン","ru":"знак «Мокрый пол»"}', 10
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/cleaner/trash_bag', 'supermarket', 'cleaner', 'tools', 'supermarket/cleaner/trash_bag', NULL, '{"en":"trash bag","es":"bolsa de basura","pt":"saco de lixo","fr":"sac poubelle","de":"Müllbeutel","it":"sacco della spazzatura","nl":"vuilniszak","zh":"垃圾袋","ja":"ゴミ袋","ru":"мусорный пакет"}', 12
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/cleaner/scrub_brush', 'supermarket', 'cleaner', 'tools', 'supermarket/cleaner/scrub_brush', NULL, '{"en":"scrub brush","es":"cepillo de fregar","pt":"escova de esfregar","fr":"brosse à récurer","de":"Scheuerbürste","it":"spazzola da sfregamento","nl":"schrobber","zh":"擦洗刷","ja":"タワシ","ru":"щётка для мытья"}', 14
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/cleaner/sponge', 'supermarket', 'cleaner', 'tools', 'supermarket/cleaner/sponge', NULL, '{"en":"sponge","es":"esponja","pt":"esponja","fr":"éponge","de":"Schwamm","it":"spugna","nl":"spons","zh":"海绵","ja":"スポンジ","ru":"губка"}', 16
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/cleaner/glass_cleaner', 'supermarket', 'cleaner', 'tools', 'supermarket/cleaner/glass_cleaner', NULL, '{"en":"glass cleaner","es":"limpiador de vidrios","pt":"limpa-vidros","fr":"nettoyant pour vitres","de":"Glasreiniger","it":"puliscivetri","nl":"glasreiniger","zh":"玻璃清洁剂","ja":"ガラスクリーナー","ru":"средство для стёкол"}', 18
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/cleaner/floor_polisher', 'supermarket', 'cleaner', 'tools', 'supermarket/cleaner/floor_polisher', NULL, '{"en":"floor polisher","es":"pulidora de suelos","pt":"enceradeira","fr":"polisseuse de sol","de":"Bodenpolierer","it":"lucidatrice per pavimenti","nl":"vloerwasser","zh":"地板抛光机","ja":"フロアポリッシャー","ru":"полировщик полов"}', 20
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/cleaner/vacuum_cleaner', 'supermarket', 'cleaner', 'tools', 'supermarket/cleaner/vacuum_cleaner', NULL, '{"en":"vacuum cleaner","es":"aspiradora","pt":"aspirador","fr":"aspirateur","de":"Staubsauger","it":"aspirapolvere","nl":"stofzuiger","zh":"吸尘器","ja":"掃除機","ru":"пылесос"}', 22
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/cleaner/microfiber_cloth', 'supermarket', 'cleaner', 'tools', 'supermarket/cleaner/microfiber_cloth', NULL, '{"en":"microfiber cloth","es":"paño de microfibra","pt":"pano de microfibra","fr":"chiffon microfibres","de":"Mikrofasertuch","it":"panno in microfibra","nl":"microvezeldoek","zh":"超细纤维布","ja":"マイクロファイバークロス","ru":"салфетка из микрофибры"}', 24
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/cleaner/squeegee', 'supermarket', 'cleaner', 'tools', 'supermarket/cleaner/squeegee', NULL, '{"en":"squeegee","es":"escobilla de goma","pt":"rodo","fr":"raclette","de":"Abzieher","it":"tiravetro","nl":"trekker","zh":"橡胶刮水器","ja":"スクイジー","ru":"резиновый сгон"}', 26
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/cleaner/toilet_brush', 'supermarket', 'cleaner', 'tools', 'supermarket/cleaner/toilet_brush', NULL, '{"en":"toilet brush","es":"escobilla de baño","pt":"escova sanitária","fr":"brosse de toilette","de":"Toilettenbürste","it":"scopino WC","nl":"toiletborstel","zh":"马桶刷","ja":"トイレブラシ","ru":"туалетный ёршик"}', 28
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/cleaner/gloves', 'supermarket', 'cleaner', 'tools', 'supermarket/cleaner/gloves', NULL, '{"en":"gloves","es":"guantes","pt":"luvas","fr":"gants","de":"Handschuhe","it":"guanti","nl":"handschoenen","zh":"手套","ja":"手袋","ru":"перчатки"}', 30
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/cleaner/apron', 'supermarket', 'cleaner', 'tools', 'supermarket/cleaner/apron', NULL, '{"en":"apron","es":"delantal","pt":"avental","fr":"tablier","de":"Schürze","it":"grembiule","nl":"schort","zh":"围裙","ja":"エプロン","ru":"фартук"}', 32
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/cleaner/face_mask', 'supermarket', 'cleaner', 'tools', 'supermarket/cleaner/face_mask', NULL, '{"en":"face mask","es":"mascarilla","pt":"máscara de proteção","fr":"masque de protection","de":"Schutzmaske","it":"mascherina","nl":"mondmasker","zh":"口罩","ja":"マスク","ru":"маска"}', 34
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/cleaner/bleach', 'supermarket', 'cleaner', 'tools', 'supermarket/cleaner/bleach', NULL, '{"en":"bleach","es":"lejía","pt":"água sanitária","fr":"eau de Javel","de":"Bleichmittel","it":"candeggina","nl":"bleekwater","zh":"漂白剂","ja":"漂白剤","ru":"отбеливатель"}', 36
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/cleaner/air_freshener', 'supermarket', 'cleaner', 'tools', 'supermarket/cleaner/air_freshener', NULL, '{"en":"air freshener","es":"ambientador","pt":"desodorizador","fr":"désodorisant","de":"Lufterfrischer","it":"deodorante ambiente","nl":"luchtverfrisser","zh":"空气清新剂","ja":"芳香剤","ru":"освежитель воздуха"}', 38
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/cleaner/paper_towel', 'supermarket', 'cleaner', 'tools', 'supermarket/cleaner/paper_towel', NULL, '{"en":"paper towel","es":"toalla de papel","pt":"toalha de papel","fr":"essuie-tout","de":"Papiertuch","it":"carta assorbente","nl":"keukenpapier","zh":"纸巾","ja":"ペーパータオル","ru":"бумажное полотенце"}', 40
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/cleaner/hand_soap', 'supermarket', 'cleaner', 'tools', 'supermarket/cleaner/hand_soap', NULL, '{"en":"hand soap","es":"jabón de manos","pt":"sabonete de mãos","fr":"savon pour les mains","de":"Handseife","it":"sapone per mani","nl":"handzeep","zh":"洗手液","ja":"ハンドソープ","ru":"жидкое мыло для рук"}', 42
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/cleaner/sanitizer', 'supermarket', 'cleaner', 'tools', 'supermarket/cleaner/sanitizer', NULL, '{"en":"sanitizer","es":"sanitizador","pt":"sanitizador","fr":"assainissant","de":"Desinfektionsmittel","it":"sanificante","nl":"desinfectiemiddel","zh":"卫生消毒液","ja":"消毒液","ru":"дезинфицирующее средство"}', 44
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/cleaner/dust_mop', 'supermarket', 'cleaner', 'tools', 'supermarket/cleaner/dust_mop', NULL, '{"en":"dust mop","es":"mopa de polvo","pt":"mop de pó","fr":"balai à poussière","de":"Staubmop","it":"mopa antistatica","nl":"stofdweil","zh":"除尘拖把","ja":"ダストモップ","ru":"пыльная швабра"}', 46
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/cleaner/caddy', 'supermarket', 'cleaner', 'tools', 'supermarket/cleaner/caddy', NULL, '{"en":"caddy","es":"carrito de limpieza","pt":"caddy de limpeza","fr":"caddie de ménage","de":"Reinigungskorb","it":"carrellino","nl":"schoonmaakcaddy","zh":"清洁工具车","ja":"清掃カート","ru":"ведёрко для уборки"}', 48
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/cleaner/steam_cleaner', 'supermarket', 'cleaner', 'tools', 'supermarket/cleaner/steam_cleaner', NULL, '{"en":"steam cleaner","es":"limpiadora a vapor","pt":"limpador a vapor","fr":"nettoyeur vapeur","de":"Dampfreiniger","it":"pulitrice a vapore","nl":"stoomreiniger","zh":"蒸汽清洁机","ja":"スチームクリーナー","ru":"паровой очиститель"}', 50
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/cleaner/pressure_washer', 'supermarket', 'cleaner', 'tools', 'supermarket/cleaner/pressure_washer', NULL, '{"en":"pressure washer","es":"hidrolimpiadora","pt":"lavadora de alta pressão","fr":"nettoyeur haute pression","de":"Hochdruckreiniger","it":"idropulitrice","nl":"hogedrukreiniger","zh":"高压清洗机","ja":"高圧洗浄機","ru":"мойка высокого давления"}', 52
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/cleaner/odor_eliminator', 'supermarket', 'cleaner', 'tools', 'supermarket/cleaner/odor_eliminator', NULL, '{"en":"odor eliminator","es":"eliminador de olores","pt":"eliminador de odores","fr":"désodorisant","de":"Geruchsbeseitiger","it":"elimina-odori","nl":"geurverdrijver","zh":"除臭剂","ja":"消臭剤","ru":"нейтрализатор запаха"}', 54
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/cleaner/waste_bin', 'supermarket', 'cleaner', 'tools', 'supermarket/cleaner/waste_bin', NULL, '{"en":"waste bin","es":"papelera","pt":"lixeira","fr":"poubelle","de":"Mülleimer","it":"cestino dei rifiuti","nl":"prullenbak","zh":"垃圾桶","ja":"ゴミ箱","ru":"мусорное ведро"}', 56
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/cleaner/caution_tape', 'supermarket', 'cleaner', 'tools', 'supermarket/cleaner/caution_tape', NULL, '{"en":"caution tape","es":"cinta de advertencia","pt":"fita de advertência","fr":"ruban de signalisation","de":"Absperrband","it":"nastro di segnalazione","nl":"afzetlint","zh":"警示胶带","ja":"注意テープ","ru":"предупредительная лента"}', 58
);

INSERT INTO public.sectors (id, job_id, name, icon, sort_order) VALUES (
  'produce', 'supermarket', '{"en":"Produce","es":"Verdulería","pt":"Hortifrúti","fr":"Rayon fruits et légumes","de":"Obst und Gemüse","it":"Reparto frutta e verdura","nl":"Produce","zh":"Produce","ja":"Produce","ru":"Produce"}', '🥬', 7
);
INSERT INTO public.roles (id, job_id, sector_id, name, icon, sort_order) VALUES (
  'tools', 'supermarket', 'produce', '{"en":"Tools","es":"Herramientas","pt":"Ferramentas","fr":"Outils","de":"Werkzeuge","it":"Attrezzi","nl":"Gereedschap","zh":"工具","ja":"道具","ru":"Инструменты"}', '🔧', 0
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/produce/apron', 'supermarket', 'produce', 'tools', 'supermarket/produce/apron', NULL, '{"en":"apron","es":"delantal","pt":"avental","fr":"tablier","de":"Schürze","it":"grembiule","nl":"schort","zh":"围裙","ja":"エプロン","ru":"фартук"}', 0
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/produce/gloves', 'supermarket', 'produce', 'tools', 'supermarket/produce/gloves', NULL, '{"en":"gloves","es":"guantes","pt":"luvas","fr":"gants","de":"Handschuhe","it":"guanti","nl":"handschoenen","zh":"手套","ja":"手袋","ru":"перчатки"}', 2
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/produce/sprayer', 'supermarket', 'produce', 'tools', 'supermarket/produce/sprayer', NULL, '{"en":"sprayer","es":"pulverizador","pt":"pulverizador","fr":"pulvérisateur","de":"Sprühgerät","it":"spruzzatore","nl":"sproeier","zh":"喷雾器","ja":"スプレーヤー","ru":"пульверизатор"}', 4
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/produce/misting_bottle', 'supermarket', 'produce', 'tools', 'supermarket/produce/misting_bottle', NULL, '{"en":"misting bottle","es":"botella nebulizadora","pt":"frasco borrifador","fr":"vaporisateur","de":"Sprühflasche","it":"flacone nebulizzatore","nl":"misterfles","zh":"喷雾瓶","ja":"ミスト瓶","ru":"распрыскиватель"}', 6
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/produce/scale', 'supermarket', 'produce', 'tools', 'supermarket/produce/scale', NULL, '{"en":"scale","es":"báscula","pt":"balança","fr":"balance","de":"Waage","it":"bilancia","nl":"weegschaal","zh":"秤","ja":"はかり","ru":"весы"}', 8
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/produce/price_gun', 'supermarket', 'produce', 'tools', 'supermarket/produce/price_gun', NULL, '{"en":"price gun","es":"etiquetadora de precios","pt":"pistola de etiquetas","fr":"pistolet d''étiquetage","de":"Preisauszeichnungsgerät","it":"pistola prezzi","nl":"prijspistool","zh":"价格标签枪","ja":"値札ガン","ru":"пистолет для этикеток"}', 10
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/produce/trimming_shears', 'supermarket', 'produce', 'tools', 'supermarket/produce/trimming_shears', NULL, '{"en":"trimming shears","es":"tijeras de recorte","pt":"tesoura de poda","fr":"sécateur de parage","de":"Beschneideschere","it":"cesoie per rifinitura","nl":"snoeischaar","zh":"修枝剪","ja":"トリミングシアー","ru":"ножницы для обрезки"}', 12
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/produce/produce_bags', 'supermarket', 'produce', 'tools', 'supermarket/produce/produce_bags', NULL, '{"en":"produce bags","es":"bolsas de producto","pt":"sacolas de hortifrúti","fr":"sacs à fruits et légumes","de":"Obstbeutel","it":"sacchetti per ortofrutta","nl":"producezakjes","zh":"蔬果袋","ja":"野菜・果物袋","ru":"пакеты для продуктов"}', 14
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/produce/twist_ties', 'supermarket', 'produce', 'tools', 'supermarket/produce/twist_ties', NULL, '{"en":"twist ties","es":"ataduras","pt":"atilhos","fr":"attaches torsadées","de":"Drehverschlüsse","it":"legacci","nl":"broodclipjes","zh":"扭扭棒","ja":"ツイストタイ","ru":"скрутки для пакетов"}', 16
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/produce/display_tray', 'supermarket', 'produce', 'tools', 'supermarket/produce/display_tray', NULL, '{"en":"display tray","es":"bandeja de exhibición","pt":"bandeja de exposição","fr":"plateau de présentation","de":"Auslagenschale","it":"vassoio espositivo","nl":"presentatiebak","zh":"展示托盘","ja":"ディスプレイトレー","ru":"лоток для выкладки"}', 18
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/produce/watering_can', 'supermarket', 'produce', 'tools', 'supermarket/produce/watering_can', NULL, '{"en":"watering can","es":"regadera","pt":"regador","fr":"arrosoir","de":"Gießkanne","it":"annaffiatoio","nl":"gieter","zh":"浇水壶","ja":"じょうろ","ru":"лейка"}', 20
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/produce/knife', 'supermarket', 'produce', 'tools', 'supermarket/produce/knife', NULL, '{"en":"knife","es":"cuchillo","pt":"faca","fr":"couteau","de":"Messer","it":"coltello","nl":"mes","zh":"刀","ja":"ナイフ","ru":"нож"}', 22
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/produce/cutting_board', 'supermarket', 'produce', 'tools', 'supermarket/produce/cutting_board', NULL, '{"en":"cutting board","es":"tabla de cortar","pt":"tábua de corte","fr":"planche à découper","de":"Schneidebrett","it":"tagliere","nl":"snijplank","zh":"砧板","ja":"まな板","ru":"разделочная доска"}', 24
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/produce/label', 'supermarket', 'produce', 'tools', 'supermarket/produce/label', NULL, '{"en":"label","es":"etiqueta","pt":"etiqueta","fr":"étiquette","de":"Etikett","it":"etichetta","nl":"label","zh":"标签","ja":"ラベル","ru":"этикетка"}', 26
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/produce/sticker', 'supermarket', 'produce', 'tools', 'supermarket/produce/sticker', NULL, '{"en":"sticker","es":"etiqueta adhesiva","pt":"adesivo","fr":"autocollant","de":"Aufkleber","it":"adesivo","nl":"sticker","zh":"贴纸","ja":"シール","ru":"наклейка"}', 28
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/produce/sign_holder', 'supermarket', 'produce', 'tools', 'supermarket/produce/sign_holder', NULL, '{"en":"sign holder","es":"soporte de señal","pt":"suporte de sinal","fr":"porte-affiche","de":"Schildhalter","it":"porta insegna","nl":"bordhouder","zh":"价格牌架","ja":"サインホルダー","ru":"держатель для ценника"}', 30
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/produce/cold_storage_thermometer', 'supermarket', 'produce', 'tools', 'supermarket/produce/cold_storage_thermometer', NULL, '{"en":"cold storage thermometer","es":"termómetro de cámara fría","pt":"termômetro de câmara fria","fr":"thermomètre de chambre froide","de":"Kühlraumthermometer","it":"termometro cella frigorifera","nl":"koelcelthermometer","zh":"冷库温度计","ja":"冷蔵庫温度計","ru":"термометр для холодильника"}', 32
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/produce/humidity_meter', 'supermarket', 'produce', 'tools', 'supermarket/produce/humidity_meter', NULL, '{"en":"humidity meter","es":"higrómetro","pt":"higrômetro","fr":"hygromètre","de":"Feuchtigkeitsmessgerät","it":"igrometro","nl":"vochtigheidsmeter","zh":"湿度计","ja":"湿度計","ru":"гигрометр"}', 34
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/produce/ice_scoop', 'supermarket', 'produce', 'tools', 'supermarket/produce/ice_scoop', NULL, '{"en":"ice scoop","es":"pala para hielo","pt":"pá de gelo","fr":"pelle à glace","de":"Eisschaufel","it":"paletta per il ghiaccio","nl":"ijsschep","zh":"冰铲","ja":"アイスすくい","ru":"совок для льда"}', 36
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/produce/drain_pad', 'supermarket', 'produce', 'tools', 'supermarket/produce/drain_pad', NULL, '{"en":"drain pad","es":"tapete de drenaje","pt":"tapete de dreno","fr":"tapis de drainage","de":"Ablaufmatte","it":"tappetino di drenaggio","nl":"afvoermat","zh":"排水垫","ja":"ドレインパッド","ru":"коврик для слива"}', 38
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/produce/rotating_display', 'supermarket', 'produce', 'tools', 'supermarket/produce/rotating_display', NULL, '{"en":"rotating display","es":"expositor giratorio","pt":"expositor giratório","fr":"présentoir rotatif","de":"Drehständer","it":"espositore rotante","nl":"draaibare display","zh":"旋转展示架","ja":"ローテーティングディスプレイ","ru":"вращающийся стенд"}', 40
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/produce/produce_box', 'supermarket', 'produce', 'tools', 'supermarket/produce/produce_box', NULL, '{"en":"produce box","es":"caja de producto","pt":"caixa de produto","fr":"caisse de fruits et légumes","de":"Gemüsekiste","it":"cassa per ortofrutta","nl":"producedoos","zh":"蔬果箱","ja":"野菜・果物箱","ru":"ящик для продуктов"}', 42
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/produce/wax_paper', 'supermarket', 'produce', 'tools', 'supermarket/produce/wax_paper', NULL, '{"en":"wax paper","es":"papel encerado","pt":"papel encerado","fr":"papier ciré","de":"Wachspapier","it":"carta cerata","nl":"waspapier","zh":"蜡纸","ja":"ワックスペーパー","ru":"вощёная бумага"}', 44
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/produce/tongs', 'supermarket', 'produce', 'tools', 'supermarket/produce/tongs', NULL, '{"en":"tongs","es":"pinzas","pt":"pegador","fr":"pinces","de":"Zange","it":"pinze","nl":"tang","zh":"夹子","ja":"トング","ru":"щипцы"}', 46
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/produce/food_safety_sign', 'supermarket', 'produce', 'tools', 'supermarket/produce/food_safety_sign', NULL, '{"en":"food safety sign","es":"señal de seguridad alimentaria","pt":"sinal de segurança alimentar","fr":"panneau de sécurité alimentaire","de":"Lebensmittelsicherheitsschild","it":"cartello sicurezza alimentare","nl":"voedselveiligheidsbord","zh":"食品安全标志","ja":"食品安全サイン","ru":"знак безопасности пищи"}', 48
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/produce/sanitizer_wipes', 'supermarket', 'produce', 'tools', 'supermarket/produce/sanitizer_wipes', NULL, '{"en":"sanitizer wipes","es":"toallitas desinfectantes","pt":"lenços sanitizantes","fr":"lingettes désinfectantes","de":"Desinfektionstücher","it":"salviette igienizzanti","nl":"desinfectiedoekjes","zh":"消毒湿巾","ja":"消毒ウエットティッシュ","ru":"дезинфицирующие салфетки"}', 50
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/produce/trash_bin', 'supermarket', 'produce', 'tools', 'supermarket/produce/trash_bin', NULL, '{"en":"trash bin","es":"papelera","pt":"lixeira","fr":"poubelle","de":"Mülleimer","it":"cestino","nl":"prullenbak","zh":"垃圾桶","ja":"ゴミ箱","ru":"мусорное ведро"}', 52
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/produce/box_cutter', 'supermarket', 'produce', 'tools', 'supermarket/produce/box_cutter', NULL, '{"en":"box cutter","es":"cúter","pt":"estilete","fr":"cutter","de":"Teppichmesser","it":"taglierino","nl":"stanleymes","zh":"美工刀","ja":"カッター","ru":"нож для коробок"}', 54
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/produce/cart', 'supermarket', 'produce', 'tools', 'supermarket/produce/cart', NULL, '{"en":"cart","es":"carrito","pt":"carrinho","fr":"chariot","de":"Wagen","it":"carrello","nl":"winkelwagen","zh":"购物车","ja":"カート","ru":"тележка"}', 56
);
INSERT INTO public.vocabulary_items (id, job_id, sector_id, role_id, local_image, image_url, translations, sort_order) VALUES (
  'supermarket/produce/hair_net', 'supermarket', 'produce', 'tools', 'supermarket/produce/hair_net', NULL, '{"en":"hair net","es":"redecilla para el cabello","pt":"touca de proteção","fr":"filet à cheveux","de":"Haarnetz","it":"reticella per capelli","nl":"haarnet","zh":"发网","ja":"ヘアネット","ru":"сетка для волос"}', 58
);

COMMIT;

-- Done: 10 jobs, 41 sectors