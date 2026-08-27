import { pageMetadata } from "../../../metadata";
import { BVitaminPage } from "../../b-vitamins";

export const metadata = pageMetadata(
  "Vitamina B3 (niacina): funções e limites",
  "Entenda vitamina B3 ou niacina: ácido nicotínico, nicotinamida, fontes, equivalentes de niacina, flushing, deficiência e excesso.",
  "/nutricao/vitaminas/vitamina-b3",
  ["vitamina B3", "niacina", "ácido nicotínico", "nicotinamida", "alimentos com niacina", "excesso de niacina"],
);

export default function Page() {
  return <BVitaminPage vitamin="b3" />;
}
