import Link from "next/link";
import { getCategories } from "@/services/categoryService";

export default async function CategoriesPage() {
  const categories = await getCategories();

  return (
    <main>
      <h1>Categorías</h1>

      <Link href="/admin/categories/new">
        Crear categoría
      </Link>

      {categories.length === 0 ? (
        <p>No hay categorías disponibles.</p>
      ) : (
        <section>
          {categories.map((category) => (
            <article key={category.id}>
              <h2>{category.name}</h2>

              {category.description && (
                <p>{category.description}</p>
              )}

              <Link href={`/categories/${category.id}`}>
                Ver categoría
              </Link>
            </article>
          ))}
        </section>
      )}
    </main>
  );
}