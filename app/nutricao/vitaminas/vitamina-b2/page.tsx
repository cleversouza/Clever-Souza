import { pageMetadata } from "../../../metadata";
import { BVitaminPage } from "../../b-vitamins";

export const metadata = pageMetadata(
  "Vitamina B2 (riboflavina): funções e fontes",
  "Entenda vitamina B2 ou riboflavina: FAD e FMN, fontes, VDR no Brasil, deficiência, sensibilidade à luz e suplementação.",
  "/nutricao/vitaminas/vitamina-b2",
  ["vitamina B2", "riboflavina", "alimentos com vitamina B2", "deficiência de riboflavina", "FAD FMN"],
);

export default function Page() {
  return <BVitaminPage vitamin="b2" />;
}
