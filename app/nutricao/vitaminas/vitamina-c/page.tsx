import { pageMetadata } from "../../../metadata";
import { VitaminCPage } from "../../vitamin-c";

export const metadata = pageMetadata(
  "Vitamina C: funções, fontes e cuidados",
  "Entenda o que é vitamina C, suas funções, fontes, VDR no Brasil, deficiência, resfriados, excesso e cuidados com suplementos.",
  "/nutricao/vitaminas/vitamina-c",
  [
    "vitamina C",
    "o que é vitamina C",
    "para que serve vitamina C",
    "alimentos com vitamina C",
    "ácido ascórbico",
    "vitamina C e colágeno",
    "vitamina C resfriado",
    "deficiência de vitamina C",
    "excesso de vitamina C",
    "vitamina C valor diário",
  ],
);

export default function Page() {
  return <VitaminCPage />;
}
