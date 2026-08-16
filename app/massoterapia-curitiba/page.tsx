import { pageMetadata } from "../metadata";
import { LocalPage } from "../site";

export const metadata = pageMetadata(
  "Atendimento de massoterapia em Curitiba",
  "Veja como funciona o atendimento de massoterapia realizado por Clever Souza em Curitiba, os cuidados e as técnicas disponíveis.",
  "/massoterapia-curitiba",
  ["massoterapia Curitiba", "massoterapeuta Curitiba", "massagem em Curitiba"],
);

export default function Page() {
  return <LocalPage />;
}
