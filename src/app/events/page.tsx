import Link from "next/link";
import { getEvents } from "@/services/eventService";

export default async function EventsPage() {
  const events = await getEvents();

  return (
    <main>
      <h1>Eventos</h1>

      <Link href="/admin/events/new">
        Crear evento
      </Link>

      {events.length === 0 ? (
        <p>No hay eventos disponibles.</p>
      ) : (
        <section>
          {events.map((event) => (
            <article key={event.id}>
              <h2>{event.name}</h2>

              {event.description && (
                <p>{event.description}</p>
              )}

              <p>Fecha: {event.date}</p>

              <p>Ubicación: {event.location}</p>

              <p>Precio: ${event.price}</p>

              <Link href={`/events/${event.id}`}>
                Ver evento
              </Link>
            </article>
          ))}
        </section>
      )}
    </main>
  );
}