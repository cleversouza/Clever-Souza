import { pageMetadata } from "../../../metadata";
import { BVitaminPage } from "../../b-vitamins";

export const metadata = pageMetadata(
  "Vitamina B5: ácido pantotênico e fontes",
  "Entenda vitamina B5 ou ácido pantotênico: coenzima A, funções, fontes, VDR, deficiência rara, segurança e suplementação.",
  "/nutricao/vitaminas/vitamina-b5",
  ["vitamina B5", "ácido pantotênico", "coenzima A", "alimentos com vitamina B5", "deficiência de B5"],
);

export default function Page() {
  return <BVitaminPage vitamin="b5" />;
}
