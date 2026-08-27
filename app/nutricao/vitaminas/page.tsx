import { pageMetadata } from "../../metadata";
import { VitaminsHubPage } from "../nutrition";

export const metadata = pageMetadata(
  "Vitaminas",
  "Guias editoriais para compreender vitaminas, funções, fontes alimentares, necessidades e limites de segurança.",
  "/nutricao/vitaminas",
  ["vitaminas", "nutrição", "fontes de vitaminas", "necessidades nutricionais"],
);

export default function Page() {
  return <VitaminsHubPage />;
}
