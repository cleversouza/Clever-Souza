import { pageMetadata } from "../../metadata";
import { NutrientCategoryPage } from "../nutrient-library";

export const metadata = pageMetadata(
  "Água, fibras e colina",
  "Guias aprofundados sobre hidratação, fibras alimentares e colina, com funções, fontes, referências e segurança.",
  "/nutricao/outros-nutrientes",
  ["água", "hidratação", "fibras alimentares", "colina"],
);

export default function Page() {
  return <NutrientCategoryPage category="outros-nutrientes" />;
}

