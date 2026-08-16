import { pageMetadata } from "../metadata";
import { MassotherapyPage } from "../site";

export const metadata = pageMetadata(
  "Massoterapia em Curitiba",
  "Conheça os atendimentos de massoterapia realizados por Clever Souza em Curitiba, as técnicas, os cuidados e as formas de contato.",
  "/massoterapia",
  [
    "massoterapia Curitiba",
    "massoterapeuta Curitiba",
    "técnicas de massagem",
    "cuidados na massoterapia",
  ],
);

export default function Page() {
  return <MassotherapyPage />;
}
