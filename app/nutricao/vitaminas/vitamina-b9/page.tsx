import { pageMetadata } from "../../../metadata";
import { BVitaminPage } from "../../b-vitamins";

export const metadata = pageMetadata(
  "Vitamina B9: folato, ácido fólico e DFE",
  "Entenda vitamina B9: folato, ácido fólico, DFE, fontes, VDR, deficiência, gravidez, excesso e suplementação responsável.",
  "/nutricao/vitaminas/vitamina-b9",
  ["vitamina B9", "folato", "ácido fólico", "DFE", "alimentos com folato", "folato gravidez"],
);

export default function Page() {
  return <BVitaminPage vitamin="b9" />;
}
