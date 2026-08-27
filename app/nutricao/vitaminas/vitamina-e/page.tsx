import { pageMetadata } from "../../../metadata";
import { FatSolubleVitaminPage } from "../../vitamins-dek";

export const metadata = pageMetadata(
  "Vitamina E: funções, fontes e segurança",
  "Entenda alfa-tocoferol, ação antioxidante, fontes alimentares, VDR no Brasil, deficiência, excesso, interações e suplementos de vitamina E.",
  "/nutricao/vitaminas/vitamina-e",
  [
    "vitamina E",
    "para que serve vitamina E",
    "alimentos com vitamina E",
    "alfa-tocoferol",
    "vitamina E antioxidante",
    "deficiência de vitamina E",
    "excesso de vitamina E",
    "vitamina E valor diário",
    "suplemento de vitamina E",
  ],
);

export default function Page() {
  return <FatSolubleVitaminPage vitamin="e" />;
}
