import { AMINO_ACID_NUTRIENTS } from "./nutrient-data-amino";
import { CORE_NUTRIENTS } from "./nutrient-data-core";
import { MINERAL_NUTRIENTS } from "./nutrient-data-minerals";
import type { NutrientCategoryKey, NutrientData } from "./nutrient-types";

export const NUTRIENT_CATEGORIES: Record<
  NutrientCategoryKey,
  {
    name: string;
    shortName: string;
    description: string;
    eyebrow: string;
    image?: string;
    alt?: string;
    accent: string;
  }
> = {
  macronutrientes: {
    name: "Macronutrientes",
    shortName: "Macronutrientes",
    description:
      "Carboidratos, proteínas e gorduras: energia, estrutura, qualidade alimentar e referências que não cabem em slogans.",
    eyebrow: "Energia, estrutura e renovação",
    image: "/nutricao/macro-nutrientes.webp",
    alt: "Aveia, arroz integral, lentilha, feijão, pão integral, ovos, peixe, azeite, abacate e sementes como exemplos de fontes de macronutrientes",
    accent: "#9c6a3e",
  },
  minerais: {
    name: "Minerais e eletrólitos",
    shortName: "Minerais",
    description:
      "Quinze guias sobre elementos essenciais ou de interesse nutricional, com funções, fontes, VDR, absorção, deficiência e excesso.",
    eyebrow: "Do cálcio ao zinco",
    image: "/nutricao/minerais-eletrolitos.webp",
    alt: "Folhas verde-escuras, feijões, sementes, castanhas-do-pará, iogurte, peixe, banana, cogumelos e sal como exemplos variados de fontes minerais",
    accent: "#657b73",
  },
  aminoacidos: {
    name: "Aminoácidos indispensáveis",
    shortName: "Aminoácidos",
    description:
      "Os nove aminoácidos que adultos precisam obter pela alimentação — dentro da proteína total, não como uma prateleira de cápsulas.",
    eyebrow: "Nove blocos indispensáveis",
    image: "/nutricao/aminoacidos-gorduras.webp",
    alt: "Leguminosas, quinoa, tofu, ovos, peixe, nozes, linhaça, chia e azeite como fontes de proteínas e ácidos graxos",
    accent: "#65658c",
  },
  "acidos-graxos": {
    name: "Ácidos graxos essenciais",
    shortName: "Ácidos graxos",
    description:
      "Ácido linoleico ômega-6 e ácido alfa-linolênico ômega-3: o que é essencial, o que pode ser convertido e o que o marketing simplifica.",
    eyebrow: "Ômega-6 e ômega-3 essenciais",
    image: "/nutricao/aminoacidos-gorduras.webp",
    alt: "Nozes, linhaça, chia, azeite, peixe e outros alimentos que ajudam a contextualizar fontes de ácidos graxos",
    accent: "#4f7d77",
  },
  "outros-nutrientes": {
    name: "Água, fibras e colina",
    shortName: "Água, fibras e colina",
    description:
      "Três guias que completam o mapa: equilíbrio hídrico, propriedades das fibras e uma substância essencial que não é vitamina.",
    eyebrow: "O que completa a biblioteca",
    accent: "#4a7892",
  },
};

export const ALL_NON_VITAMIN_NUTRIENTS: NutrientData[] = [
  ...CORE_NUTRIENTS,
  ...MINERAL_NUTRIENTS,
  ...AMINO_ACID_NUTRIENTS,
];

const dataByRoute = new Map(
  ALL_NON_VITAMIN_NUTRIENTS.map((item) => [
    `${item.category}/${item.slug}`,
    item,
  ]),
);

export function getNutrient(category: string, slug: string) {
  return dataByRoute.get(`${category}/${slug}`);
}

export function getNutrientsByCategory(category: NutrientCategoryKey) {
  return ALL_NON_VITAMIN_NUTRIENTS.filter((item) => item.category === category);
}

export function nutrientPath(item: Pick<NutrientData, "category" | "slug">) {
  return `/nutricao/${item.category}/${item.slug}`;
}

