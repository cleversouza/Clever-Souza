import { pageMetadata } from "../metadata";
import { MassotherapyPage } from "../site";

export const metadata = pageMetadata(
  "Massoterapia em Curitiba",
  "Conheça os Protocolos Clever de massoterapia em Curitiba, como as sessões funcionam, os cuidados e as formas de contato.",
  "/massoterapia",
  [
    "massoterapia Curitiba",
    "massoterapeuta Curitiba",
    "protocolos de massoterapia",
    "cuidados na massoterapia",
  ],
);

export default function Page() {
  return <MassotherapyPage />;
}
