import { pageMetadata } from "../../../metadata";
import { BVitaminPage } from "../../b-vitamins";

export const metadata = pageMetadata(
  "Vitamina B7 (biotina): fontes e cuidados",
  "Entenda vitamina B7 ou biotina: funções, fontes, VDR, deficiência rara, evidência para cabelo e interferência em exames.",
  "/nutricao/vitaminas/vitamina-b7",
  ["vitamina B7", "biotina", "alimentos com biotina", "biotina cabelo", "biotina exames laboratoriais"],
);

export default function Page() {
  return <BVitaminPage vitamin="b7" />;
}
