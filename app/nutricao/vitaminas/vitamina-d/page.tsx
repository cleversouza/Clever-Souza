import { pageMetadata } from "../../../metadata";
import { FatSolubleVitaminPage } from "../../vitamins-dek";

export const metadata = pageMetadata(
  "Vitamina D: fontes, sol e suplementação",
  "Entenda vitamina D2 e D3, síntese pela pele, fontes, VDR no Brasil, avaliação por 25(OH)D, deficiência, excesso e suplementos.",
  "/nutricao/vitaminas/vitamina-d",
  [
    "vitamina D",
    "para que serve vitamina D",
    "alimentos com vitamina D",
    "vitamina D2 e D3",
    "vitamina D e sol",
    "25-hidroxivitamina D",
    "deficiência de vitamina D",
    "excesso de vitamina D",
    "vitamina D valor diário",
    "suplemento de vitamina D",
  ],
);

export default function Page() {
  return <FatSolubleVitaminPage vitamin="d" />;
}
