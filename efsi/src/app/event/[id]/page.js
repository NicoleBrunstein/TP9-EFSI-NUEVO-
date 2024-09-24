"use client";  // Aseguramos que este componente se ejecute en el cliente

import { useParams } from 'next/navigation';  // Cambiado a useParams para obtener el id

// Simulación de eventos
const events = [
  { id: 1, title: "Concierto de Rock", date: "2024-10-05", place: "Buenos Aires", description: "Gran concierto de rock." },
  { id: 2, title: "Exposición de Arte", date: "2024-11-12", place: "Mendoza", description: "Exposición de arte moderno." },
  // Más eventos...
];

export default function EventDetail() {
  const { id } = useParams();  // Extrae el ID de la URL usando useParams

  // Buscar el evento por ID
  const event = events.find((event) => event.id == id);

  if (!event) {
    return <p>Evento no encontrado</p>;
  }

  return (
    <div>
      <h1>{event.title}</h1>
      <p>Fecha: {event.date}</p>
      <p>Lugar: {event.place}</p>
      <p>Descripción: {event.description}</p>
    </div>
  );
}