import { pageMetadata } from "../metadata";
import { NutritionHubPage } from "./nutrition";

export const metadata = pageMetadata(
  "Nutrição",
  "Biblioteca editorial sobre nutrientes, alimentação, rótulos e suplementação com clareza, contexto e fontes confiáveis.",
  "/nutricao",
  ["nutrição", "nutrientes", "vitaminas", "alimentação", "suplementação"],
);

export default function Page() {
  return <NutritionHubPage />;
}
