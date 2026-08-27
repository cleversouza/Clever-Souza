import { pageMetadata } from "../../../metadata";
import { BVitaminPage } from "../../b-vitamins";

export const metadata = pageMetadata(
  "Vitamina B6: funções, fontes e excesso",
  "Entenda vitamina B6: piridoxina, PLP, funções, fontes, VDR, deficiência, neuropatia por excesso e cuidados com suplementos.",
  "/nutricao/vitaminas/vitamina-b6",
  ["vitamina B6", "piridoxina", "PLP", "alimentos com vitamina B6", "excesso de vitamina B6", "neuropatia"],
);

export default function Page() {
  return <BVitaminPage vitamin="b6" />;
}
