// Real pricing and technical data transcribed from the source site's
// "Cenová nabídka" product pages (Carrier AW, 30AW, 30RQ).

export type TechRow = {
  label: string;
  unit?: string;
  values: string[];
};

export type TechTable = {
  title: string;
  columns: string[];
  rows: TechRow[];
  note?: string;
};

export type Product = {
  slug: string;
  navTitle: string;
  subtitle: string;
  excerpt: string;
  description: string;
  bullets?: string[];
  image: string;
  imageAlt: string;
  techDiagram?: { image: string; alt: string; caption: string };
  pricingTitle: string;
  pricingHeaders: string[];
  pricingRows: { label: string; values: string[]; highlight?: boolean }[];
  pricingNote?: string;
  techTables: TechTable[];
  tuvTable?: { title: string; rows: { label: string; spirala: string; price: string }[] };
};

export const products: Product[] = [
  {
    slug: "",
    navTitle: "NOVÉ sestavy Carrier AW",
    subtitle: "Carrier AW topný výkon 6 - 14 kW",
    excerpt:
      "Společnost Carrier dodává tepelná čerpadla špičkové výroby u kterých se podařilo dosáhnout maximálního topného výkonu s minimálními…",
    description:
      "Společnost Carrier dodává tepelná čerpadla špičkové výroby, u kterých se podařilo dosáhnout maximálního topného výkonu s minimálními finančními náklady, a to především díky invertorové XPower technice, kde dochází k okamžitému výkonu tak, aby bylo dosaženo požadované teploty v co nejkratší možné době. Při získání požadované teploty kompresor upraví otáčky na konstantní hodnoty (modrá linka), a tak dochází ke snížení nákladů spotřeby elektrické energie až o 40 % oproti ostatním čerpadlům. Díky tomuto systému dochází i k šetření samotného agregátu.",
    bullets: [
      "Nová tepelná čerpadla dodávají při venkovní teplotě -10 °C vodu do otopného systému o teplotě +60 °C.",
      "V těchto nových jednotkách je vestavěný samostatný elektrický dotop s možností výběru výkonu 3, 6, 9 kW. Díky této technologii již v domě s naším tepelným čerpadlem systém vzduch–voda nepotřebujete žádný jiný záložní topný zdroj.",
      "Nově zabudováno přímé napojení na TUV (teplá užitková voda). Nově cenová nabídka TUV zásobníků viz níže.",
      "Zcela nové ovládání umožňuje až týdenní načasování.",
      "Ještě nižší spotřeba elektrické energie.",
    ],
    image: "/produkty/aw-xpower-unit.jpg",
    imageAlt: "Carrier XPower Inverter – venkovní a vnitřní jednotka tepelného čerpadla",
    techDiagram: {
      image: "/produkty/aw-xpower-diagram.jpg",
      alt: "Diagram XPower Inverter – konstantní teplota systému Convert oproti kolísavé teplotě tradičních systémů, úspora až 40 % energie",
      caption:
        "Systém Convert udržuje konstantní teplotu (modrá) místo kolísání u tradičních systémů (černá) – úspora až 40 % energie.",
    },
    pricingTitle: "Cenová nabídka kompletních NOVÝCH sestav Carrier AW",
    pricingHeaders: ["AW (6kW)", "AW (8kW)", "AW (11kW)", "AW (14kW)"],
    pricingRows: [
      { label: "Kompletní sestava vnitřní a vnější jednotky TČ", values: ["137 000 Kč", "159 000 Kč", "175 000 Kč", "210 000 Kč"] },
      { label: "Montáž, konfigurace, spuštění", values: ["10 000 Kč", "10 000 Kč", "10 000 Kč", "10 000 Kč"] },
      { label: "Cena celkem", values: ["147 000 Kč", "169 000 Kč", "185 000 Kč", "220 000 Kč"], highlight: true },
    ],
    pricingNote: "Cu propojení venkovní TČ – vnitřní modul .................. 800 Kč/bm",
    techTables: [
      {
        title: "Technické parametry – venkovní jednotka TČ (velikost)",
        columns: ["38AW050", "38AW065", "38AW090", "38AW115"],
        rows: [
          { label: "Jmenovitý topný výkon *", unit: "kW", values: ["5", "6,5", "9,1", "11,5"] },
          { label: "Minimální topný výkon", unit: "kW", values: ["1,5", "1,3", "3,6", "3,5"] },
          { label: "Maximální topný výkon", unit: "kW", values: ["5,9", "7,8", "11,1", "13,86"] },
          { label: "Maximální el. příkon", unit: "kW", values: ["1,22", "1,59", "2,17", "2,81"] },
          { label: "Typ invertoru", values: ["PAM+PWM", "PAM+PWM", "PAM+PWM", "PAM+PWM"] },
          { label: "Chladivo", values: ["R-410A", "R-410A", "R-410A", "R-410A"] },
          { label: "Typ kompresoru", values: ["Dvojitý rotační", "Dvojitý rotační", "Dvojitý rotační", "Dvojitý rotační"] },
          { label: "Maximální délka potrubí", unit: "m", values: ["50", "30", "70", "70"] },
          { label: "Maximální převýšení", unit: "m", values: ["30", "30", "30", "30"] },
          { label: "Průtok vzduchu (min. / max.)", unit: "l/sec", values: ["728", "783", "1658", "1767"] },
          { label: "Průtok vzduchu (min. / max.)", unit: "m³/h", values: ["2620", "2820", "5970", "6360"] },
          { label: "Akustický tlak (režim vytápění)", unit: "dB(A)", values: ["44", "48", "49", "50"] },
          { label: "Hladina akustického výkonu", unit: "dB(A)", values: ["64", "68", "69", "70"] },
          { label: "Rozměry (v × d × hl)", unit: "mm", values: ["690×900×320", "820×900×320", "1360×900×320", "1360×900×320"] },
          { label: "Hmotnost", unit: "kg", values: ["49", "51", "88", "88"] },
          { label: "Chladivové připojení", values: ["1/4”–1/2”", "3/8”–5/8”", "3/8”–5/8”", "3/8”–5/8”"] },
          { label: "Napájení", unit: "V-ph-Hz", values: ["230-1-50", "230-1-50", "230-1-50", "230-1-50"] },
        ],
        note: "* Nominální topný výkon je v souladu s EN 14511, teplota vody 35 °C/30 °C, teplota vzduchu 7 °C/6 °C. Hladina akustického tlaku měřena v poloprostoru ve vzdálenosti 4 m.",
      },
      {
        title: "Technické parametry – vnitřní modul (velikost)",
        columns: ["AW", "AW", "AW", "AW"],
        rows: [
          { label: "Rozměry (v × d × hl)", unit: "mm", values: ["784×448×329", "784×448×329", "784×448×329", "784×448×329"] },
          { label: "Hmotnost", unit: "kg", values: ["39", "39", "39", "39"] },
          { label: "Výměník", values: ["ALFA LAVAL", "ALFA LAVAL", "ALFA LAVAL", "ALFA LAVAL"] },
          { label: "Chladivové připojení", values: ["1/4”–1/2”", "3/8”–5/8”", "3/8”–5/8”", "3/8”–5/8”"] },
          { label: "Vodní připojení", values: ["1\"", "1\"", "1\"", "1\""] },
          { label: "Oběhové čerpadlo", unit: "ks", values: ["1", "1", "1", "1"] },
          { label: "Napájení (z CDU)", unit: "V-ph-Hz", values: ["230-1-50", "230-1-50", "230-1-50", "230-1-50"] },
        ],
        note: "Provozní limity tepelného čerpadla XP ENERGY: systém je schopen pracovat v extrémních teplotních podmínkách – teplota venkovního vzduchu −10 °C, teplota vody do otopného systému +60 °C.",
      },
    ],
    tuvTable: {
      title: "Zásobníky TUV pro sestavy Carrier AW",
      rows: [
        { label: "TUV 200 lt", spirala: "1 spirála", price: "24 900 Kč" },
        { label: "TUV 300 lt", spirala: "1 spirála", price: "29 900 Kč" },
        { label: "TUV 200 lt", spirala: "2 spirály", price: "28 900 Kč" },
        { label: "TUV 300 lt", spirala: "2 spirály", price: "33 900 Kč" },
      ],
    },
  },
  {
    slug: "30-aw",
    navTitle: "Tepelná čerpadla s revoluční úsporou vnitřního prostoru",
    subtitle: "30 AW topný výkon 6 - 13 kW",
    excerpt:
      "Tepelná čerpadla 30 AW obsahují veškeré komponenty ve vnějším modulu. Uvnitř domu zůstává pouze pokojová regulace. Díky tomu převratnému řešení…",
    description:
      "Tepelná čerpadla 30 AW obsahují veškeré komponenty ve vnějším modulu. Uvnitř domu zůstává pouze pokojová regulace. Díky tomuto převratnému řešení mohou být tepelná čerpadla montována i do domácností s malým technickým zázemím.",
    image: "/realizace/bezdruzice.jpg",
    imageAlt: "Instalace tepelného čerpadla Carrier AquaSnap, Bezdružice",
    pricingTitle: "Cenová nabídka kompletních sestav 30 AW",
    pricingHeaders: ["30AW (6kW)", "30AW (7,5kW)", "30AW (13kW)"],
    pricingRows: [
      { label: "Kompletní sestava TČ – 30AW", values: ["130 000 Kč", "145 000 Kč", "175 000 Kč"] },
      { label: "Montáž", values: ["10 000 Kč", "10 000 Kč", "10 000 Kč"] },
      { label: "Cena celkem bez DPH 15 %", values: ["140 000 Kč", "155 000 Kč", "185 000 Kč"], highlight: true },
    ],
    pricingNote: "Cu propojení venkovní TČ – vnitřní modul .................. 800 Kč/bm",
    techTables: [
      {
        title: "Technické parametry – 30AW",
        columns: ["30AW", "30AW", "30AW"],
        rows: [
          { label: "EUROVENT LCP/A/AC **", values: ["", "", ""] },
          { label: "Jmenovitý topný výkon *", unit: "kW", values: ["5,8", "7,4", "12,9"] },
          { label: "Příkon", unit: "kW", values: ["1,9", "2,32", "4,26"] },
          { label: "COP *", unit: "kW/kW", values: ["3,6", "3,18", "3,03"] },
          { label: "Třída EUROVENT, topení", values: ["B", "B", "B"] },
          { label: "Jmenovitý chladící výkon", unit: "kW", values: ["4,7", "5,8", "10,2"] },
          { label: "Příkon", unit: "kW", values: ["1,6", "1,97", "3,46"] },
          { label: "EER", unit: "kW/kW", values: ["2,95", "2,95", "2,96"] },
          { label: "ESEER při částečném zatížení – celoroční", unit: "kW/kW", values: ["4,6", "4,4", "4,3"] },
          { label: "Třída EUROVENT, chlazení", values: ["B", "B", "B"] },
          { label: "Provozní váha – jednotka bez hydromodulu", unit: "kg", values: ["58", "68", "99"] },
          { label: "Provozní váha – jednotka s hydromodulem", unit: "kg", values: ["61", "71", "105"] },
          { label: "Chladivo", values: ["R-410A", "R-410A", "R-410A"] },
          { label: "Kompresor", values: ["stejnosměrný, dvojitý rotační", "stejnosměrný, dvojitý rotační", "stejnosměrný, dvojitý rotační"] },
          { label: "Expanzní ventil – elektronický", values: ["PMV", "PMV", "PMV"] },
          { label: "Hydromodul – čistý objem vody", unit: "l", values: ["0,8", "1", "2,3"] },
          { label: "Hydromodul – objem expanzní nádoby", unit: "l", values: ["2", "2", "3"] },
          { label: "Maximální provozní tlak na straně vody", unit: "kPa", values: ["300", "300", "300"] },
          { label: "Tlaková ztráta verze X (CHF)", unit: "kPa", values: ["9,5", "14,5", "26"] },
          { label: "Dosažitelný statický tlak, verze H (AC)", unit: "kPa", values: ["43", "40", "45"] },
          { label: "Přípoje vody, vstup/výstup (G MPT)", unit: "in", values: ["1", "1", "1"] },
          { label: "Ventilátory – množství / průměr", unit: "mm", values: ["1/495", "1/495", "2/495"] },
          { label: "Ventilátory – počet lopatek", values: ["3", "3", "3"] },
          { label: "Úroveň akustického výkonu, topení", unit: "dB(A)", values: ["62", "64", "67"] },
          { label: "Úroveň akustického výkonu, chlazení", unit: "dB(A)", values: ["64", "65", "68"] },
          { label: "Úroveň akustického tlaku, topení", unit: "dB(A)", values: ["42", "44", "47"] },
          { label: "Úroveň akustického tlaku, chlazení", unit: "dB(A)", values: ["42", "45", "48"] },
        ],
        note: "* Podmínky normy Eurovent LCP/A/AC v režimu topení: teplota ve výměníku vstupující/vystupující 40 °C/45 °C, teplota venkovního vzduchu 7 °C suchý teploměr / 6 °C vlhký teploměr.",
      },
    ],
  },
  {
    slug: "30-rq",
    navTitle: "Tepelná čerpadla RQ pro ještě větší topný výkon 17-33KW",
    subtitle: "30 RQ topný výkon 17 - 33 kW",
    excerpt:
      "Tepelná čerpadla 30 RQ dosahují ještě větších topných výkonů pro vytápění větších rodinných domů, bytových domů a komerčních objektů.",
    description:
      "Tepelná čerpadla 30 RQ dosahují ještě větších topných výkonů pro vytápění větších rodinných domů, bytových domů a komerčních objektů.",
    image: "/realizace/doudlevce-plzen.jpg",
    imageAlt: "Instalace tepelného čerpadla Carrier, Doudlevce – Plzeň",
    pricingTitle: "Cenová nabídka kompletních sestav 30RQ",
    pricingHeaders: ["30RQ (17kW)", "30RQ (21kW)", "30RQ (26kW)", "30RQ (33kW)"],
    pricingRows: [
      { label: "Kompletní sestava TČ – RQ", values: ["205 000 Kč", "225 000 Kč", "245 000 Kč", "265 000 Kč"] },
      { label: "Montáž", values: ["10 000 Kč", "10 000 Kč", "10 000 Kč", "10 000 Kč"] },
      { label: "Cena celkem bez DPH 15 %", values: ["215 000 Kč", "235 000 Kč", "255 000 Kč", "275 000 Kč"], highlight: true },
    ],
    pricingNote: "Cu propojení venkovní TČ – vnitřní modul .................. 800 Kč/bm",
    techTables: [
      {
        title: "Technické parametry – 30RQ (výkonnové řady)",
        columns: ["17", "21", "26", "33"],
        rows: [
          { label: "Jmenovitý chladící výkon *", unit: "kW", values: ["16,1", "20,4", "27", "33"] },
          { label: "EER *", unit: "kW/kW", values: ["3,28", "3,24", "3,13", "3,36"] },
          { label: "Třída EUROVENT, chlazení *", values: ["A", "A", "A", "A"] },
          { label: "ESEER", values: ["3,76", "3,6", "3,51", "3,76"] },
          { label: "Jmenovitý topný výkon *", unit: "kW", values: ["16,8", "21,4", "29,6", "33"] },
          { label: "COP *", unit: "kW/kW", values: ["3,24", "3,35", "3,27", "3,26"] },
          { label: "Třída EUROVENT, topení *", values: ["A", "A", "A", "A"] },
          { label: "Jmenovitý chladící výkon **", unit: "kW", values: ["22,5", "27,7", "34,7", "44,1"] },
          { label: "EER **", unit: "kW/kW", values: ["4,27", "4", "3,84", "4,25"] },
          { label: "Třída EUROVENT, chlazení **", values: ["A", "A", "A", "A"] },
          { label: "Jmenovitý topný výkon **", unit: "kW", values: ["17,4", "22", "30,7", "34,3"] },
          { label: "COP **", unit: "kW/kW", values: ["4,1", "4,1", "4,1", "4,1"] },
          { label: "Třída EUROVENT, topení **", values: ["A", "A", "A", "A"] },
          { label: "Délka", unit: "mm", values: ["522", "522", "824", "824"] },
          { label: "Šířka", unit: "mm", values: ["1136", "1136", "1002", "1002"] },
          { label: "Výška", unit: "mm", values: ["1580", "1580", "1790", "1790"] },
          { label: "Provozní hmotnost (s 1 vodním modulem)", unit: "kg", values: ["206", "223", "280", "295"] },
          { label: "Akustická hladina zvuku", unit: "dB(A)", values: ["72", "74", "78", "78"] },
        ],
        note: "* Podmínky EUROVENT (fn coil): chlazení – teplota vody výparníku na výstupu 12/7 °C, teplota venkovního vzduchu 35 °C; topení – teplota vody na vstupu/výstupu výměníku 40/45 °C, teplota venkovního vzduchu 7/6 °C. ** Podmínky EUROVENT (pro podlahové topení): chlazení 23/18 °C při 35 °C venku; topení 30/35 °C při 7/6 °C venku.",
      },
    ],
  },
];

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}
