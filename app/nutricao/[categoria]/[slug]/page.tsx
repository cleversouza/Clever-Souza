import { notFound } from "next/navigation";
import { pageMetadata } from "../../../metadata";
import { getNutrient, nutrientPath } from "../../nutrient-data";
import { NutrientDetailPage, nutrientStaticParams } from "../../nutrient-library";

type RouteProps = { params: Promise<{ categoria: string; slug: string }> };

export function generateStaticParams() {
  return nutrientStaticParams;
}

export async function generateMetadata({ params }: RouteProps) {
  const { categoria, slug } = await params;
  const data = getNutrient(categoria, slug);
  if (!data) return {};
  return pageMetadata(
    `${data.name}: funções, fontes e cuidados`,
    data.deck,
    nutrientPath(data),
    [data.name, `fontes de ${data.name}`, `para que serve ${data.name}`, "nutrição"],
  );
}

export default async function Page({ params }: RouteProps) {
  const { categoria, slug } = await params;
  const data = getNutrient(categoria, slug);
  if (!data) notFound();
  return <NutrientDetailPage data={data} />;
}

