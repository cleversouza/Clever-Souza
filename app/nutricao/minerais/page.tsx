import { pageMetadata } from "../../metadata";
import { NutrientCategoryPage } from "../nutrient-library";

export const metadata = pageMetadata(
  "Minerais e eletrólitos",
  "Biblioteca sobre cálcio, ferro, magnésio, sódio, potássio, zinco e todos os minerais com referências nutricionais.",
  "/nutricao/minerais",
  ["minerais", "eletrólitos", "cálcio", "ferro", "magnésio", "zinco"],
);

export default function Page() {
  return <NutrientCategoryPage category="minerais" />;
}

