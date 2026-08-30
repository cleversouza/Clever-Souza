import { pageMetadata } from "../../metadata";
import { NutrientCategoryPage } from "../nutrient-library";

export const metadata = pageMetadata(
  "Ácidos graxos essenciais: ômega-3 e ômega-6",
  "Guias sobre ácido alfa-linolênico ômega-3 e ácido linoleico ômega-6, fontes, conversão e referências nutricionais.",
  "/nutricao/acidos-graxos",
  ["ácidos graxos essenciais", "ômega 3", "ômega 6", "ALA", "ácido linoleico"],
);

export default function Page() {
  return <NutrientCategoryPage category="acidos-graxos" />;
}

