import { pageMetadata } from "../../../metadata";
import { FatSolubleVitaminPage } from "../../vitamins-dek";

export const metadata = pageMetadata(
  "Vitamina K: fontes, coagulação e cuidados",
  "Entenda vitamina K1 e K2, coagulação, fontes alimentares, VDR no Brasil, deficiência, varfarina, excesso e suplementação responsável.",
  "/nutricao/vitaminas/vitamina-k",
  [
    "vitamina K",
    "para que serve vitamina K",
    "alimentos com vitamina K",
    "vitamina K1 e K2",
    "vitamina K e coagulação",
    "vitamina K e varfarina",
    "deficiência de vitamina K",
    "vitamina K valor diário",
    "suplemento de vitamina K",
  ],
);

export default function Page() {
  return <FatSolubleVitaminPage vitamin="k" />;
}
