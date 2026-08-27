import { pageMetadata } from "../../../metadata";
import { BVitaminPage } from "../../b-vitamins";

export const metadata = pageMetadata(
  "Vitamina B1 (tiamina): funções e fontes",
  "Entenda vitamina B1 ou tiamina: funções, fontes, VDR no Brasil, deficiência, risco com álcool e cirurgia bariátrica e suplementação.",
  "/nutricao/vitaminas/vitamina-b1",
  ["vitamina B1", "tiamina", "alimentos com vitamina B1", "deficiência de tiamina", "beribéri"],
);

export default function Page() {
  return <BVitaminPage vitamin="b1" />;
}
