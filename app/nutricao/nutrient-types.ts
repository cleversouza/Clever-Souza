export type NutrientCategoryKey =
  | "macronutrientes"
  | "minerais"
  | "aminoacidos"
  | "acidos-graxos"
  | "outros-nutrientes";

export type NutrientReference = {
  title: string;
  url: string;
  detail: string;
};

export type NutrientData = {
  category: NutrientCategoryKey;
  slug: string;
  name: string;
  shortName?: string;
  kicker: string;
  accent: string;
  deck: string;
  lead: string;
  readingTime: string;
  labelReference: string;
  labelReferenceNote: string;
  quickFacts: string[];
  forms: Array<[string, string]>;
  functions: Array<[string, string]>;
  sources: Array<[string, string, string]>;
  physiology: string[];
  referenceRows: Array<[string, string, string]>;
  inadequacy: string[];
  riskGroups: string[];
  excess: string[];
  evidenceTitle: string;
  evidenceBody: string[];
  practicalChecklist: string[];
  interactions: string[];
  faqs: Array<[string, string]>;
  references: NutrientReference[];
};

export type NutrientSummary = Pick<
  NutrientData,
  "category" | "slug" | "name" | "shortName" | "kicker" | "accent" | "deck"
>;

