import { pageMetadata } from "../../metadata";
import { NutrientCategoryPage } from "../nutrient-library";

export const metadata = pageMetadata(
  "Aminoácidos essenciais ou indispensáveis",
  "Guias sobre os nove aminoácidos indispensáveis: funções, fontes, necessidades por peso, qualidade proteica e suplementação.",
  "/nutricao/aminoacidos",
  ["aminoácidos essenciais", "aminoácidos indispensáveis", "BCAA", "proteínas"],
);

export default function Page() {
  return <NutrientCategoryPage category="aminoacidos" />;
}

