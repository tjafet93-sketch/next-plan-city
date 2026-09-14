import Link from "next/link";
import { getCategoryById } from "@/services/categoria";

interface CategoryDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function CategoryDetailPage({
  params,
}: CategoryDetailPageProps) {
  const { id } = await params;

  const category = await getCategoryById(id);

  return (
    <main>
      <Link href="/categories">
        Volver a categorías
      </Link>

      <h1>{category.name}</h1>

      {category.description && (
        <p>{category.description}</p>
      )}

      <p>ID: {category.id}</p>

      <Link href={`/events?category=${category.id}`}>
        Ver eventos de esta categoría
      </Link>
    </main>
  );
}