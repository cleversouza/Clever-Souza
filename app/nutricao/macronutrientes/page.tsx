import { pageMetadata } from "../../metadata";
import { NutrientCategoryPage } from "../nutrient-library";

export const metadata = pageMetadata(
  "Macronutrientes: carboidratos, proteínas e gorduras",
  "Guias aprofundados sobre carboidratos, proteínas e gorduras: funções, fontes, referências, qualidade e segurança.",
  "/nutricao/macronutrientes",
  ["macronutrientes", "carboidratos", "proteínas", "gorduras"],
);

export default function Page() {
  return <NutrientCategoryPage category="macronutrientes" />;
}

