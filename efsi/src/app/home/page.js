"use client";
import Link from "next/link";

// Simulación de eventos
const events = [
  { id: 1, title: "Concierto de Rock", date: "2024-10-05", place: "Buenos Aires" },
  { id: 2, title: "Exposición de Arte", date: "2024-11-12", place: "Mendoza" },
  // Más eventos...
];

export default function Home() {
  return (
    <div className="home-container">
      <h1>Eventos Disponibles</h1>
      <ul>
        {events.map((event) => (
          <li key={event.id}>
            <h3>{event.title}</h3>
            <p>Fecha: {event.date} - Lugar: {event.place}</p>
            <Link href={`/event/${event.id}`}>Ver Detalle</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
