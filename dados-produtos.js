/* ==========================================================================
   DADOS DOS PRODUTOS — fonte única, usada pela Home (produtos em destaque)
   e pelo Catálogo completo (catalogo.html).

   Cada foto é vitrine/<n>.jpg. "nome", "categoria" e "marca" vêm do que está
   escrito na própria embalagem, fotografada na loja — nada é inventado.
   Quando a foto mostra uma prateleira com vários produtos misturados, ou é
   um reflexo/vitrine sem um produto único e legível, "nome" fica null e a
   categoria vira "Diversos": é mais honesto do que atribuir um nome que a
   foto não confirma.

   Trocar o número do WhatsApp aqui atualiza a Home e o Catálogo de uma vez.
   ========================================================================== */
var NUMERO_WHATSAPP = '553534093030';

var TODOS_PRODUTOS = [
  { n: 1,   nome: 'Redragon Zeus Lite H510-LT', categoria: 'Headset Gamer', marca: 'Redragon' },
  { n: 2,   nome: 'Multi HUB USB Tipo-C 5 em 1', categoria: 'Hub USB', marca: 'Multilaser' },
  { n: 3,   nome: 'TP-Link USB 3.0 7-Port Hub UH700', categoria: 'Hub USB', marca: 'TP-Link' },
  { n: 4,   nome: 'Logitech C920e', categoria: 'Webcam Full HD', marca: 'Logitech' },
  { n: 5,   nome: 'Warrior Mine Pro', categoria: 'Controle Bluetooth', marca: 'Warrior' },
  { n: 6,   nome: 'Rapoo K2800', categoria: 'Teclado', marca: 'Rapoo' },
  { n: 7,   nome: null, categoria: 'Diversos', marca: null },
  { n: 8,   nome: 'C3Tech Apresentador AP-400', categoria: 'Apresentador com Laser', marca: 'C3Tech' },
  { n: 9,   nome: 'Multi Leitor de Código de Barras 1D', categoria: 'Leitor de Código de Barras', marca: 'Multilaser' },
  { n: 10,  nome: 'Intelbras TC 20', categoria: 'Telefone com Fio', marca: 'Intelbras' },
  { n: 11,  nome: null, categoria: 'Diversos', marca: null },
  { n: 12,  nome: 'Intelbras Mibo', categoria: 'Câmera de Segurança', marca: 'Intelbras' },
  { n: 13,  nome: 'HP DeskJet 2975', categoria: 'Impressora Multifuncional', marca: 'HP' },
  { n: 14,  nome: 'C3Tech MG-10', categoria: 'Mouse Gamer', marca: 'C3Tech' },
  { n: 15,  nome: 'Fonte ATX550W', categoria: 'Fonte de Alimentação', marca: 'BrazilPC' },
  { n: 16,  nome: 'Redragon Shiva', categoria: 'Teclado Mecânico Gamer', marca: 'Redragon' },
  { n: 17,  nome: null, categoria: 'Diversos', marca: null },
  { n: 18,  nome: 'Multi Leitor de Cartão Universal', categoria: 'Leitor de Cartão', marca: 'Multilaser' },
  { n: 19,  nome: 'Targus Chill Mat Plus', categoria: 'Suporte para Notebook', marca: 'Targus' },
  { n: 20,  nome: 'Intelbras Switch Não Gerenciável', categoria: 'Switch de Rede', marca: 'Intelbras' },
  { n: 21,  nome: 'SanDisk Ultra microSDXC 256GB', categoria: 'Cartão de Memória', marca: 'SanDisk' },
  { n: 22,  nome: 'Redmi Buds 6 Active', categoria: 'Fone de Ouvido Bluetooth', marca: 'Redmi' },
  { n: 23,  nome: 'C3Tech F9-L660RGB', categoria: 'Kit Cooler Fan', marca: 'C3Tech' },
  { n: 24,  nome: 'Redmi Pad 2', categoria: 'Tablet', marca: 'Redmi' },
  { n: 25,  nome: 'TP-Link Archer T3U AC1300', categoria: 'Adaptador Wi-Fi USB', marca: 'TP-Link' },
  { n: 26,  nome: 'C3Tech HU-L200', categoria: 'Hub USB com Leitor de Cartão', marca: 'C3Tech' },
  { n: 27,  nome: 'PC Gamer Montado', categoria: 'PC Gamer', marca: null },
  { n: 28,  nome: null, categoria: 'Diversos', marca: null },
  { n: 29,  nome: 'C3Tech NBC-11', categoria: 'Base Refrigerada para Notebook', marca: 'C3Tech' },
  { n: 30,  nome: 'C3Tech PH-360', categoria: 'Headset com Microfone', marca: 'C3Tech' },
  { n: 31,  nome: 'C3Tech Kit LED Fan ARGB AASA', categoria: 'Ventoinha/Cooler', marca: 'C3Tech' },
  { n: 32,  nome: 'Pulse Multi Buds Touch PH413', categoria: 'Fone de Ouvido Bluetooth', marca: 'Pulse' },
  { n: 33,  nome: 'Targus Multi-Device Midsize', categoria: 'Teclado Bluetooth', marca: 'Targus' },
  { n: 34,  nome: 'Multi Fragmentadora Basic', categoria: 'Fragmentadora de Papel', marca: 'Multilaser' },
  { n: 35,  nome: 'SMS Nobreak Lite', categoria: 'Nobreak', marca: 'SMS' },
  { n: 36,  nome: 'Redragon Fizz Pro', categoria: 'Teclado Mecânico Gamer', marca: 'Redragon' },
  { n: 37,  nome: 'Notebook Lenovo', categoria: 'Notebook', marca: 'Lenovo' },
  { n: 38,  nome: 'Capa de Silicone para Antena Starlink', categoria: 'Acessório para Antena', marca: null },
  { n: 39,  nome: 'Canon GI-190', categoria: 'Tinta para Impressora', marca: 'Canon' },
  { n: 40,  nome: 'Microsoft Wired 600 Desktop', categoria: 'Kit Teclado e Mouse', marca: 'Microsoft' },
  { n: 41,  nome: 'C3Tech WB-100', categoria: 'Webcam', marca: 'C3Tech' },
  { n: 42,  nome: 'Redragon Cobra FPS', categoria: 'Mouse Gamer', marca: 'Redragon' },
  { n: 43,  nome: 'Carregador de Notebook MY-120W', categoria: 'Carregador para Notebook', marca: null },
  { n: 44,  nome: 'TP-Link TL-SG1024D', categoria: 'Switch de Rede', marca: 'TP-Link' },
  { n: 45,  nome: 'Intelbras Tok Fácil', categoria: 'Telefone com Fio', marca: 'Intelbras' },
  { n: 46,  nome: 'Hrebos CRG-233CC 30W', categoria: 'Carregador', marca: 'Hrebos' },
  { n: 47,  nome: 'Notebook Lenovo Ryzen 7', categoria: 'Notebook', marca: 'Lenovo' },
  { n: 48,  nome: 'Warrior Drugi TC238', categoria: 'Teclado Gamer One Hand', marca: 'Warrior' },
  { n: 49,  nome: 'C3Tech M-BT30', categoria: 'Mouse sem Fio', marca: 'C3Tech' },
  { n: 50,  nome: 'Intelbras AP 310/AP 360', categoria: 'Access Point Wi-Fi', marca: 'Intelbras' },
  { n: 51,  nome: 'C3Tech KN-12', categoria: 'Teclado Numérico', marca: 'C3Tech' },
  { n: 52,  nome: 'Bingo Pendrive', categoria: 'Pen Drive', marca: 'Bingo' },
  { n: 53,  nome: 'Pulse Multi WB300', categoria: 'Fone de Ouvido', marca: 'Pulse' },
  { n: 54,  nome: 'MiniMen MM-H300', categoria: 'Repetidor Wi-Fi', marca: 'MiniMen' },
  { n: 55,  nome: 'C3Tech EP-07', categoria: 'Fone de Ouvido Intra-auricular', marca: 'C3Tech' },
  { n: 56,  nome: 'Redragon Lakshmi RGB', categoria: 'Teclado Mecânico', marca: 'Redragon' },
  { n: 57,  nome: 'Hrebos Neo Charge CRG-232i 20W', categoria: 'Carregador', marca: 'Hrebos' },
  { n: 58,  nome: 'C3Tech Water Cooler FC-W360', categoria: 'Water Cooler', marca: 'C3Tech' },
  { n: 59,  nome: 'TP-Link USB 3.0 to Gigabit Ethernet', categoria: 'Adaptador de Rede', marca: 'TP-Link' },
  { n: 60,  nome: 'Multilaser Charger Kit 4 Pilhas AA', categoria: 'Carregador de Pilhas', marca: 'Multilaser' },
  { n: 61,  nome: 'Knup Anúbis MU018', categoria: 'Mouse Gamer', marca: 'Knup' },
  { n: 62,  nome: 'Logitech G Pro Wireless', categoria: 'Mouse Gamer', marca: 'Logitech' },
  { n: 63,  nome: 'Logitech M90', categoria: 'Mouse', marca: 'Logitech' },
  { n: 64,  nome: null, categoria: 'Diversos', marca: null },
  { n: 65,  nome: 'Sony DualSense', categoria: 'Controle PS5', marca: 'Sony' },
  { n: 66,  nome: 'Logitech C270', categoria: 'Webcam', marca: 'Logitech' },
  { n: 67,  nome: 'HP 122', categoria: 'Cartucho de Tinta', marca: 'HP' },
  { n: 68,  nome: 'PIX HDMI 4K Ultra HD', categoria: 'Cabo HDMI', marca: 'PIX' },
  { n: 69,  nome: 'HP Ink Advantage 668 Tricolor', categoria: 'Cartucho de Tinta', marca: 'HP' },
  { n: 70,  nome: 'Multi TS400', categoria: 'Teclado sem Fio', marca: 'Multilaser' },
  { n: 71,  nome: 'Xiaomi Power Bank 10000', categoria: 'Carregador Portátil', marca: 'Xiaomi' },
  { n: 72,  nome: 'C3Tech PH-300', categoria: 'Fone com Microfone', marca: 'C3Tech' },
  { n: 73,  nome: 'Redmi Buds 6 Play', categoria: 'Fone Bluetooth', marca: 'Redmi' },
  { n: 74,  nome: 'Intelbras THS 40', categoria: 'Headset USB', marca: 'Intelbras' },
  { n: 75,  nome: 'Multilaser Charger Kit 2 Pilhas AA', categoria: 'Carregador de Pilhas', marca: 'Multilaser' },
  { n: 76,  nome: 'Mercusys MR30G AC1200', categoria: 'Roteador Wi-Fi', marca: 'Mercusys' },
  { n: 77,  nome: 'C3Tech HU-C230', categoria: 'Hub USB', marca: 'C3Tech' },
  { n: 78,  nome: 'Logitech MX Keys Mini', categoria: 'Teclado sem Fio', marca: 'Logitech' },
  { n: 79,  nome: 'SanDisk Ultra microSDXC', categoria: 'Cartão de Memória', marca: 'SanDisk' },
  { n: 80,  nome: 'Warrior MADS', categoria: 'Microfone Gamer', marca: 'Warrior' },
  { n: 81,  nome: 'DT3 Sports', categoria: 'Cadeira Gamer', marca: 'DT3 Sports' },
  { n: 82,  nome: 'C3Tech HU-LAN1000', categoria: 'Hub USB com Rede', marca: 'C3Tech' },
  { n: 83,  nome: 'Redmi Buds 6 Play', categoria: 'Fone Bluetooth', marca: 'Redmi' },
  { n: 84,  nome: 'Logitech Silent Wireless Combo MK295', categoria: 'Kit Teclado e Mouse', marca: 'Logitech' },
  { n: 85,  nome: 'TP-Link LiteWave LS1008G', categoria: 'Switch de Rede', marca: 'TP-Link' },
  { n: 86,  nome: 'HP Ink Advantage 662 Colorido', categoria: 'Cartucho de Tinta', marca: 'HP' },
  { n: 87,  nome: 'Intelbras TS 3110', categoria: 'Telefone sem Fio', marca: 'Intelbras' },
  { n: 88,  nome: 'Multi Smartwatch M2', categoria: 'Smartwatch', marca: 'Multilaser' },
  { n: 89,  nome: 'Monitor LG', categoria: 'Monitor', marca: 'LG' },
  { n: 90,  nome: null, categoria: 'Diversos', marca: null },
  { n: 91,  nome: null, categoria: 'Diversos', marca: null },
  { n: 92,  nome: 'Notebook Lenovo', categoria: 'Notebook', marca: 'Lenovo' },
  { n: 93,  nome: 'Enterprise Projetor H3', categoria: 'Projetor', marca: 'Enterprise' },
  { n: 94,  nome: 'Acer eMachines EAK040', categoria: 'Kit Teclado e Mouse', marca: 'Acer' },
  { n: 95,  nome: 'Redragon Akali', categoria: 'Teclado Mecânico', marca: 'Redragon' },
  { n: 96,  nome: 'Oberon OR-SP253', categoria: 'Suporte para Notebook', marca: 'Oberon' },
  { n: 97,  nome: 'Masterprint Bulk Ink', categoria: 'Tinta para Impressora', marca: 'Masterprint' },
  { n: 98,  nome: 'Microsoft Wired 600 Keyboard', categoria: 'Teclado', marca: 'Microsoft' },
  { n: 99,  nome: 'Amazon Echo Dot', categoria: 'Caixa de Som Inteligente', marca: 'Amazon' },
  { n: 100, nome: 'Multi TS100', categoria: 'Teclado sem Fio', marca: 'Multilaser' },
  { n: 101, nome: 'Multilaser Mouse Híbrido', categoria: 'Mouse sem Fio', marca: 'Multilaser' },
  { n: 102, nome: 'C3Tech LB-140', categoria: 'Leitor de Código de Barras', marca: 'C3Tech' },
  { n: 103, nome: 'C3Tech M-BT60', categoria: 'Mouse sem Fio', marca: 'C3Tech' },
  { n: 104, nome: 'JBL Tune 110', categoria: 'Fone de Ouvido', marca: 'JBL' },
  { n: 105, nome: 'Revenger Tiger Chroma', categoria: 'Mouse Gamer', marca: 'Revenger' },
  { n: 106, nome: 'Logitech M190', categoria: 'Mouse sem Fio', marca: 'Logitech' },
  { n: 107, nome: 'Multi CS400', categoria: 'Kit Teclado e Mouse', marca: 'Multilaser' },
  { n: 108, nome: 'HP 60 Preto', categoria: 'Cartucho de Tinta', marca: 'HP' },
  { n: 109, nome: 'Lecoo EH104', categoria: 'Fone de Ouvido', marca: 'Lecoo' },
  { n: 110, nome: 'Hrebos Neo Charge CRG-232C 20W', categoria: 'Carregador', marca: 'Hrebos' },
  { n: 111, nome: 'HP Ink Advantage 664XL Colorido', categoria: 'Cartucho de Tinta', marca: 'HP' },
  { n: 112, nome: 'Lecoo KW204', categoria: 'Kit Teclado e Mouse', marca: 'Lecoo' },
  { n: 113, nome: 'HP Ink Advantage 667 Preto', categoria: 'Cartucho de Tinta', marca: 'HP' },
  { n: 114, nome: 'Lecoo KW204', categoria: 'Kit Teclado e Mouse', marca: 'Lecoo' },
  { n: 115, nome: 'Multi Clear Tank', categoria: 'Umidificador de Ar', marca: 'Multilaser' },
  { n: 116, nome: 'Coletek Bem Ligado', categoria: 'Estabilizador', marca: 'Coletek' },
  { n: 117, nome: 'Logitech K120', categoria: 'Teclado com Fio', marca: 'Logitech' },
  { n: 118, nome: null, categoria: 'Diversos', marca: null },
  { n: 119, nome: 'Targus Bluetooth Keyboard', categoria: 'Teclado Bluetooth', marca: 'Targus' },
  { n: 120, nome: 'HP Ink Advantage 662XL Colorido', categoria: 'Cartucho de Tinta', marca: 'HP' },
  { n: 121, nome: 'Logitech C920s Pro', categoria: 'Webcam', marca: 'Logitech' },
  { n: 122, nome: 'C3Tech LB-W300', categoria: 'Leitor de Código de Barras sem Fio', marca: 'C3Tech' },
  { n: 123, nome: 'Multi Hub USB Tipo-C 5 em 1', categoria: 'Hub USB', marca: 'Multilaser' },
  { n: 124, nome: 'HP Gaming Mouse G360', categoria: 'Mouse Gamer', marca: 'HP' },
  { n: 125, nome: 'Multilaser Carregador Notebook Universal', categoria: 'Carregador para Notebook', marca: 'Multilaser' },
  { n: 126, nome: 'Multilaser Mouse com Fio', categoria: 'Mouse', marca: 'Multilaser' },
  { n: 127, nome: 'Logitech H390', categoria: 'Headset USB', marca: 'Logitech' },
  { n: 128, nome: 'Logitech M170', categoria: 'Mouse sem Fio', marca: 'Logitech' },
  { n: 129, nome: 'Acer Aspire 5', categoria: 'Notebook', marca: 'Acer' },
  { n: 130, nome: 'WD Green', categoria: 'SSD', marca: 'WD' },
  { n: 131, nome: 'Intelbras Pleno', categoria: 'Telefone com Fio', marca: 'Intelbras' },
  { n: 132, nome: 'C3Tech K-W71', categoria: 'Kit Teclado e Mouse', marca: 'C3Tech' },
  { n: 133, nome: 'Logitech R400', categoria: 'Apresentador com Laser', marca: 'Logitech' },
  { n: 134, nome: 'TP-Link RE200 AC750', categoria: 'Extensor de Wi-Fi', marca: 'TP-Link' },
  { n: 135, nome: 'HP Ink Advantage 122XL Colorido', categoria: 'Cartucho de Tinta', marca: 'HP' },
  { n: 136, nome: 'Xbox Robot White', categoria: 'Controle de Videogame', marca: 'Xbox' },
  { n: 137, nome: 'Epson 664', categoria: 'Tinta para Impressora', marca: 'Epson' },
  { n: 138, nome: 'HP Gaming Headset H500GS', categoria: 'Headset Gamer', marca: 'HP' },
  { n: 139, nome: 'HP Ink Advantage 664 Preto', categoria: 'Cartucho de Tinta', marca: 'HP' },
  { n: 140, nome: 'C3Tech HU-C500', categoria: 'Hub USB', marca: 'C3Tech' },
  { n: 141, nome: 'Xiaomi Mi TV Stick', categoria: 'TV Box / Streaming', marca: 'Xiaomi' },
  { n: 142, nome: 'PCI Cabos HDMI 2.0', categoria: 'Cabo HDMI', marca: 'PCI Cabos' },
  { n: 143, nome: 'Intelbras Combo CSI 50', categoria: 'Kit Teclado e Mouse', marca: 'Intelbras' },
  { n: 144, nome: 'DT3 Sports', categoria: 'Cadeira Gamer', marca: 'DT3 Sports' },
  { n: 145, nome: null, categoria: 'Cadeira de Escritório', marca: null }
];

/* Quantidade real, calculada a partir dos dados — nunca escreva um
   número fixo em nenhuma tela; use sempre TODOS_PRODUTOS.length. */
var TOTAL_PRODUTOS = TODOS_PRODUTOS.length;

/* Agrupamento em categorias amplas para a navegação do catálogo.
   A "categoria" específica continua sendo o que aparece no card;
   este mapa só decide em qual grupo de navegação cada uma cai.
   Qualquer categoria não mapeada aqui cai em "Diversos" — não em erro. */
var GRUPOS_CATEGORIA = {
  'notebook': 'Notebooks e Tablets',
  'tablet': 'Notebooks e Tablets',

  'mouse': 'Periféricos', 'mouse gamer': 'Periféricos', 'mouse sem fio': 'Periféricos',
  'teclado': 'Periféricos', 'teclado sem fio': 'Periféricos', 'teclado com fio': 'Periféricos',
  'teclado bluetooth': 'Periféricos', 'teclado mecânico': 'Periféricos', 'teclado mecânico gamer': 'Periféricos',
  'teclado gamer one hand': 'Periféricos', 'teclado numérico': 'Periféricos',
  'kit teclado e mouse': 'Periféricos', 'webcam': 'Periféricos', 'webcam full hd': 'Periféricos',
  'apresentador com laser': 'Periféricos', 'apresentador': 'Periféricos',
  'suporte para notebook': 'Periféricos', 'base refrigerada para notebook': 'Periféricos',
  'leitor de cartão': 'Periféricos',

  'fone de ouvido': 'Áudio', 'fone de ouvido bluetooth': 'Áudio', 'fone bluetooth': 'Áudio',
  'fone de ouvido intra-auricular': 'Áudio', 'fone com microfone': 'Áudio',
  'headset': 'Áudio', 'headset gamer': 'Áudio', 'headset com microfone': 'Áudio', 'headset usb': 'Áudio',
  'microfone gamer': 'Áudio', 'caixa de som inteligente': 'Áudio',

  'controle bluetooth': 'Videogames', 'controle ps5': 'Videogames', 'controle de videogame': 'Videogames',
  'cadeira gamer': 'Videogames', 'pc gamer': 'Videogames',

  'roteador wi-fi': 'Redes e Conectividade', 'access point wi-fi': 'Redes e Conectividade',
  'repetidor wi-fi': 'Redes e Conectividade', 'extensor de wi-fi': 'Redes e Conectividade',
  'switch de rede': 'Redes e Conectividade', 'adaptador wi-fi usb': 'Redes e Conectividade',
  'adaptador de rede': 'Redes e Conectividade', 'hub usb': 'Redes e Conectividade',
  'hub usb com leitor de cartão': 'Redes e Conectividade', 'hub usb com rede': 'Redes e Conectividade',
  'cabo hdmi': 'Redes e Conectividade',

  'impressora multifuncional': 'Impressão', 'cartucho de tinta': 'Impressão',
  'tinta para impressora': 'Impressão',

  'fonte de alimentação': 'Energia', 'nobreak': 'Energia', 'estabilizador': 'Energia',
  'carregador': 'Energia', 'carregador portátil': 'Energia', 'carregador para notebook': 'Energia',
  'carregador de pilhas': 'Energia', 'ventoinha/cooler': 'Energia', 'kit cooler fan': 'Energia',
  'water cooler': 'Energia',

  'pen drive': 'Armazenamento', 'cartão de memória': 'Armazenamento', 'ssd': 'Armazenamento',

  'monitor': 'Monitores e Projeção', 'projetor': 'Monitores e Projeção',
  'tv box / streaming': 'Monitores e Projeção',

  'telefone com fio': 'Telefonia', 'telefone sem fio': 'Telefonia',

  'diversos': 'Diversos', 'câmera de segurança': 'Diversos', 'leitor de código de barras': 'Diversos',
  'leitor de código de barras sem fio': 'Diversos', 'fragmentadora de papel': 'Diversos',
  'acessório para antena': 'Diversos', 'umidificador de ar': 'Diversos',
  'cadeira de escritório': 'Diversos', 'smartwatch': 'Diversos'
};

function grupoDoProduto(categoria){
  var chave = (categoria || '').toLowerCase().trim();
  return GRUPOS_CATEGORIA[chave] || 'Diversos';
}
