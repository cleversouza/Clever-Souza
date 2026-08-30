import Link from "next/link";

export function NutritionPublicationMeta({
  updatedIso,
  updatedLabel,
  readingTime,
}: {
  updatedIso: string;
  updatedLabel: string;
  readingTime: string;
}) {
  return (
    <div className="nutrition-publication-meta">
      <span>
        Por <Link href="/sobre" rel="author">Cleverson Batista de Souza</Link>
      </span>
      <span>
        Atualizado em <time dateTime={updatedIso}>{updatedLabel}</time>
      </span>
      <span>Leitura aprofundada · cerca de {readingTime}</span>
    </div>
  );
}
