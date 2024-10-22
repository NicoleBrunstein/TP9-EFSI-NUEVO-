// src/app/home/page.js

"use client"; // Aseguramos que este componente se ejecute en el cliente

import { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation'; // Importamos useRouter de next/navigation

export default function EventList() {
  const [events, setEvents] = useState([]); // Inicializa como un arreglo
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const router = useRouter(); // Inicializamos useRouter de next/navigation

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/event'); // Cambia la URL a la de tu API

        const eventData = response.data;

        // Convertimos el objeto JSON en un arreglo
        const eventsArray = Object.values(eventData);

        setEvents(eventsArray); // Guardamos el arreglo de eventos en el estado
      } catch (err) {
        setError('Error al cargar los eventos');
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  if (loading) {
    return <p>Cargando eventos...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!events.length) {
    return <p>No hay eventos disponibles</p>;
  }

  return (
    <div>
      <h1>Lista de Eventos</h1>
      {events.map((event) => (
        <div key={event.id}>
          <h2>{event.name}</h2>
          <p>Fecha: {new Date(event.start_date).toLocaleString()}</p>
          <p>Lugar: {event.name}</p>
          <p>Precio: {event.price}</p>
          {/* Al hacer clic en este botón, navegamos a la página de detalles */}
          <button onClick={() => router.push(`/verDetalle/${event.id}`)}>Ver Detalle Evento</button>
        </div>
      ))}
    </div>
  );
}
