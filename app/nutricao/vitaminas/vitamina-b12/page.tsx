import { pageMetadata } from "../../../metadata";
import { BVitaminPage } from "../../b-vitamins";

export const metadata = pageMetadata(
  "Vitamina B12: funções, fontes e absorção",
  "Entenda vitamina B12 ou cobalamina: funções, fontes, absorção, VDR, deficiência, dietas veganas, excesso e suplementação.",
  "/nutricao/vitaminas/vitamina-b12",
  ["vitamina B12", "cobalamina", "alimentos com vitamina B12", "deficiência de B12", "B12 veganos"],
);

export default function Page() {
  return <BVitaminPage vitamin="b12" />;
}
