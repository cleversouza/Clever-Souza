import { pageMetadata } from "../../../metadata";
import { VitaminAPage } from "../../nutrition";

export const metadata = pageMetadata(
  "Vitamina A: funções, fontes e cuidados",
  "Entenda o que é vitamina A, suas formas, funções, fontes, VDR no Brasil, deficiência, excesso, gravidez e cuidados com suplementos.",
  "/nutricao/vitaminas/vitamina-a",
  [
    "vitamina A",
    "o que é vitamina A",
    "alimentos com vitamina A",
    "retinol",
    "carotenoides pró-vitamina A",
    "deficiência de vitamina A",
    "excesso de vitamina A",
    "vitamina A valor diário",
  ],
);

export default function Page() {
  return <VitaminAPage />;
}
