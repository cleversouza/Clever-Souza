import { pageMetadata } from "../metadata";
import { ServicesPage } from "../site";

export const metadata = pageMetadata(
  "Serviços de massoterapia",
  "Conheça os atendimentos de Clever Souza: massagem relaxante, terapêutica, esportiva, Quick Massage, liberação miofascial e outras abordagens.",
  "/servicos",
  [
    "massagem relaxante Curitiba",
    "massagem terapêutica Curitiba",
    "Quick Massage Curitiba",
    "liberação miofascial Curitiba",
  ],
);

export default function Page() {
  return <ServicesPage />;
}
