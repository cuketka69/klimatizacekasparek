// Content sourced from the current site (tepelnacerpadlakaspar.cz) where available;
// figures noted as "orientační" are illustrative placeholders for the new copy.

export const company = {
  name: "Tepelná čerpadla Kašpar s.r.o.",
  shortName: "Tepelná čerpadla Kašpar",
  street: "Losiná 462",
  city: "332 04 Plzeň",
  ico: "29093589",
  dic: "CZ29093589",
  phone: "608 22 00 10",
  phoneHref: "+420608220010",
  email: "info@tepelnacerpadlakaspar.cz",
  partner: "Carrier",
};

export const nav = [
  { href: "/#uvod", label: "Úvod" },
  { href: "/#cerpadla", label: "Tepelná čerpadla" },
  { href: "/cenova-nabidka", label: "Ceník" },
  { href: "/naklady-a-princip", label: "Náklady a princip" },
  { href: "/#realizace", label: "Realizace" },
  { href: "/#kontakt", label: "Kontakt" },
];

export const serviceAreas = [
  "Plzeň",
  "Rokycany",
  "Beroun",
  "Klatovy",
  "Sušice",
];

export const howItWorks = [
  {
    title: "Odebírá teplo z okolí",
    text: "Čerpadlo využívá energii z venkovního vzduchu pomocí chladiva, které se ve výparníku odpaří i při velmi nízkých teplotách.",
  },
  {
    title: "Zvyšuje jeho teplotu",
    text: "Kompresor nasaje plynné chladivo a stlačí ho – tím se zvýší jeho tlak i teplota na úroveň využitelnou pro vytápění.",
  },
  {
    title: "Předává teplo do domu",
    text: "V kondenzátoru chladivo předá získané teplo do topného systému, zkapalní a v expanzním ventilu se vrátí na původní tlak.",
  },
  {
    title: "Snižuje spotřebu energie",
    text: "Díky principu čerpadla tvoří energie ze sítě jen asi 25 % potřeby, zbylých 75 % čerpadlo získá zdarma ze vzduchu.",
  },
];

// Based on the real "Náklady & princip" page: investment comparison gas boiler vs.
// heat pump (Carrier), ~9kW loss family house, incl. approx. 20 000 Kč/year savings.
export const costRows = [
  { type: "Tepelné čerpadlo", cost: "18 000 Kč", highlight: true },
  { type: "Plynový kotel", cost: "36 000 Kč", highlight: false },
  { type: "Elektrokotel", cost: "52 000 Kč", highlight: false },
];

// Real investment-cost comparison from the source site's "Náklady & princip" page:
// gas boiler vs. heat pump (Carrier), family house with ~9kW heat loss.
export const investmentRows = [
  { label: "zařízení", gas: "45–50 000 Kč", diff: "", pump: "139 000 Kč" },
  { label: "odkouření", gas: "5 000 Kč", diff: "", pump: "" },
  { label: "pl. pilířek", gas: "5 000 Kč", diff: "", pump: "" },
  { label: "přípojka k domu cca 15 m", gas: "22 000 Kč", diff: "", pump: "" },
  { label: "montáž", gas: "10 000 Kč", diff: "", pump: "10 000 Kč" },
];

export const investmentTotals = {
  soucet: { gas: "92 000 Kč", diff: "57 000 Kč", pump: "149 000 Kč" },
  dotace: { gas: "0 Kč", diff: "", pump: "0 Kč" },
  final: { gas: "92 000 Kč", diff: "57 000 Kč", pump: "149 000 Kč" },
};

export const principleSteps = [
  "V chladícím okruhu tepelného čerpadla cirkuluje pracovní médium – chladivo, které cyklicky mění své skupenství.",
  "Cirkulaci chladiva zajišťuje kompresor.",
  "Ve výparníku chladivo o nízkém tlaku odebere teplo z okolního prostředí využitím skupenského tepla při odpařování.",
  "Chladivo tak i při velmi nízkých teplotách přejde z kapalného do plynného stavu.",
  "Chladivo v plynném stavu je nasáto kompresorem a stlačeno. Při zvýšení tlaku stoupne také jeho teplota.",
  "Elektrická energie potřebná pro pohon kompresoru zvýší tepelný potenciál pracovního média.",
  "To pak při průtoku kondenzátorem předá využitelné teplo do topného systému, ochladí se a zkapalní.",
  "V expanzním ventilu se seškrtí na původní nižší tlak a celý cyklus se opakuje.",
];

export const processSubtitle =
  "Od první konzultace až po dlouhodobý servis vás provedeme celým procesem jednoduše a přehledně.";

export const processBadge = "Úsporné řešení. Čistá energie. Klid na mnoho let.";

export const process = [
  {
    step: "1",
    title: "Konzultace",
    text: "Probereme vaše potřeby, zjistíme možnosti a navrhneme nejvhodnější řešení pro váš dům.",
  },
  {
    step: "2",
    title: "Návrh řešení",
    text: "Připravíme návrh systému a cenovou nabídku na míru vašemu domu i rozpočtu.",
  },
  {
    step: "3",
    title: "Montáž",
    text: "Profesionálně nainstalujeme tepelné čerpadlo Carrier s důrazem na kvalitu a detaily.",
  },
  {
    step: "4",
    title: "Servis",
    text: "Postaráme se o pravidelnou údržbu a spolehlivý provoz po celé roky.",
  },
];

export const solutions = [
  {
    title: "Vzduch–voda",
    text: "Nejrozšířenější řešení pro rodinné domy – jednotky Carrier AW o výkonu 6–14 kW, snadná instalace, nízké provozní náklady.",
    href: "/cenova-nabidka",
    image: "/produkty/vzduch-voda.webp",
  },
  {
    title: "Vzduch–voda RQ",
    text: "Pro větší výkon 17–33 kW – vhodné pro vytápění větších rodinných domů, bytových domů i komerčních objektů.",
    href: "/cenova-nabidka/30-rq",
    image: "/produkty/vzduch-voda-rq.webp",
  },
  {
    title: "Ohřev vody",
    text: "Tepelné čerpadlo efektivně zajistí i ohřev teplé užitkové vody pro celou domácnost.",
    href: "/cenova-nabidka",
    image: "/produkty/ohrev-vody.webp",
  },
];

// Real installations and photos from the source site's "Reference" page.
export const realizace = [
  { title: "Vzduch–voda Carrier, inverter", place: "Horní Kozolupy", image: "/realizace/horni-kozolupy.jpg" },
  { title: "Vzduch–voda Carrier, inverter", place: "Žákava", image: "/realizace/zakava.jpg" },
  { title: "Vzduch–voda Carrier, inverter", place: "Milínov", image: "/realizace/milinov.jpg" },
  { title: "Vzduch–voda Carrier, inverter", place: "Bezdružice", image: "/realizace/bezdruzice.jpg" },
  { title: "Vzduch–voda Carrier, dvojdům", place: "Losiná", image: "/realizace/losina.jpg" },
  { title: "Vzduch–voda Carrier, inverter", place: "Břežany", image: "/realizace/brezany.jpg" },
  { title: "Vzduch–voda Carrier + TUV 200l", place: "Lochousice", image: "/realizace/lochousice.jpg" },
  { title: "Vzduch–voda Carrier, inverter", place: "Šťáhlavy", image: "/realizace/stahlavy.jpg" },
  { title: "Carrier 38AW 16kW Inverter", place: "Plzeň – Bory", image: "/realizace/plzen-bory.jpg" },
  { title: "Vzduch–voda Carrier, inverter", place: "Doudlevce – Plzeň", image: "/realizace/doudlevce-plzen.jpg" },
  { title: "Vzduch–voda Carrier, inverter", place: "Starý Plzenec", image: "/realizace/star-plzenec.jpg" },
  { title: "Carrier 38AW 16kW Inverter", place: "Mladá Boleslav", image: "/realizace/mlada-boleslav.jpg" },
];

export const additionalServices = [
  {
    title: "Topení",
    text: "Návrh a realizace otopné soustavy vhodné pro provoz s tepelným čerpadlem.",
    image: "/sluzby/topeni.webp",
  },
  {
    title: "Zateplení",
    text: "Doporučíme a zajistíme zateplení domu pro maximální účinnost vytápění.",
    image: "/sluzby/zatepleni.webp",
  },
  {
    title: "Elektroinstalace",
    text: "Kompletní elektroinstalační práce spojené s instalací tepelného čerpadla.",
    image: "/sluzby/elektroinstalace.webp",
  },
];

export const trustPoints = [
  "Odborný návrh přímo pro váš dům a potřeby",
  "Certifikovaná montáž od partnera značky Carrier",
  "Záruční i pozáruční servis",
  "Pomoc s dotacemi Zelená úsporám",
];

export type Article = {
  slug: string;
  title: string;
  text: string;
  image: string;
  intro: string;
  sections: { heading: string; paragraphs: string[] }[];
};

export const articles: Article[] = [
  {
    slug: "jak-vybrat-tepelne-cerpadlo",
    title: "Jak vybrat tepelné čerpadlo",
    text: "Poradíme, podle čeho vybrat správný typ čerpadla pro váš dům a potřeby.",
    image: "/blog/jak-vybrat.webp",
    intro:
      "Výběr tepelného čerpadla ovlivní vaše náklady na vytápění na mnoho let dopředu. Shrnujeme nejdůležitější body, na které se při rozhodování zaměřit.",
    sections: [
      {
        heading: "Typ tepelného čerpadla",
        paragraphs: [
          "Nejrozšířenější je systém vzduch–voda, který získává teplo z venkovního vzduchu. Je cenově dostupný, snadno se instaluje a pro většinu rodinných domů představuje ideální kompromis mezi cenou a výkonem.",
          "Systémy země–voda a voda–voda dosahují vyšší účinnosti, ale vyžadují vrty nebo zemní kolektory, a tím i vyšší počáteční investici. Vyplatí se u větších objektů nebo tam, kde je k dispozici vhodný pozemek.",
        ],
      },
      {
        heading: "Topný výkon a velikost domu",
        paragraphs: [
          "Čerpadlo je potřeba správně nadimenzovat podle tepelné ztráty domu. Poddimenzovaná jednotka nestíhá vytápět v mrazech, předimenzovaná zbytečně cyklování a opotřebovává se.",
          "Pro rodinné domy se nejčastěji volí jednotky o výkonu 6–14 kW. Přesný výpočet vám rádi připravíme na míru vašemu domu.",
        ],
      },
      {
        heading: "Topný faktor (COP / SCOP)",
        paragraphs: [
          "Topný faktor udává, kolik tepla čerpadlo vyrobí z jedné jednotky elektrické energie. Čím vyšší hodnota, tím nižší provozní náklady. Sledujte především sezónní topný faktor SCOP, který zohledňuje účinnost během celého roku.",
        ],
      },
      {
        heading: "Hlučnost a umístění",
        paragraphs: [
          "Venkovní jednotka by měla být umístěná tak, aby nerušila vás ani sousedy. Moderní invertorová čerpadla Carrier patří k nejtišším na trhu a jejich umístění vám pomůžeme navrhnout.",
        ],
      },
    ],
  },
  {
    slug: "naklady-na-provoz",
    title: "Náklady na provoz",
    text: "Přehled nákladů a úspor v praxi – kolik můžete tepelným čerpadlem skutečně ušetřit.",
    image: "/blog/naklady-na-provoz.webp",
    intro:
      "Tepelné čerpadlo je dnes nejúspornějším způsobem vytápění rodinného domu. Podívejme se, z čeho se provozní náklady skládají a kolik reálně ušetříte.",
    sections: [
      {
        heading: "Srovnání s plynem a elektřinou",
        paragraphs: [
          "Oproti plynovému kotli i přímotopné elektřině dokáže tepelné čerpadlo snížit náklady na vytápění klidně o 50–70 %. Z jedné kilowatthodiny elektřiny vyrobí tři až pět kilowatthodin tepla.",
          "U typického rodinného domu o ploše 150 m² se roční náklady na vytápění pohybují řádově v jednotkách tisíc korun měsíčně nižší než u plynu.",
        ],
      },
      {
        heading: "Co ovlivňuje spotřebu",
        paragraphs: [
          "Výslednou spotřebu ovlivňuje zateplení domu, teplota topné vody, typ otopné soustavy (podlahové topení je úspornější než radiátory) a nastavení ekvitermní regulace.",
          "Důležitá je také kvalita instalace a správné nadimenzování – i nejlepší čerpadlo špatně nainstalované ušetří méně, než by mohlo.",
        ],
      },
      {
        heading: "Návratnost investice",
        paragraphs: [
          "Díky nízkým provozním nákladům a dostupným dotacím se investice do tepelného čerpadla obvykle vrátí v řádu jednotek let. Poté už jen šetříte.",
        ],
      },
    ],
  },
  {
    slug: "dotace-zelena-usporam",
    title: "Dotace Zelená úsporám",
    text: "Aktuální informace o dotacích na tepelná čerpadla a jak o ně požádat.",
    image: "/realizace/lochousice.jpg",
    intro:
      "Na pořízení tepelného čerpadla můžete čerpat státní dotaci z programu Nová zelená úsporám. Ta výrazně sníží počáteční investici.",
    sections: [
      {
        heading: "Co program pokrývá",
        paragraphs: [
          "Program Nová zelená úsporám podporuje výměnu neekologických zdrojů vytápění za tepelné čerpadlo. Dotace se vztahuje na pořízení i instalaci a její výše závisí na typu čerpadla.",
        ],
      },
      {
        heading: "Kdo může žádat",
        paragraphs: [
          "O dotaci mohou žádat vlastníci rodinných i bytových domů. Podmínkou je, že se jedná o stávající objekt a že nový zdroj nahrazuje starší, méně ekologické vytápění.",
        ],
      },
      {
        heading: "Jak požádat a jak vám pomůžeme",
        paragraphs: [
          "Žádost se podává elektronicky, obvykle ji lze podat i zpětně po realizaci. Součástí je odborný posudek a doklady o instalaci.",
          "S celým procesem vám pomůžeme – od návrhu vhodného řešení přes potřebnou dokumentaci až po podání žádosti. Ozvěte se nám a provedeme vás tím krok za krokem.",
        ],
      },
    ],
  },
];

export function getArticle(slug: string) {
  return articles.find((a) => a.slug === slug);
}
