"use client"; // Aseguramos que este componente se ejecute en el cliente

import { useEffect, useState } from 'react';
import axios from 'axios';

export default function EventList() {
  const [events, setEvents] = useState([]); // Inicializa como un arreglo
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get('https://set-previously-redfish.ngrok-free.app/api/event'); // Cambia la URL a la de tu API
        
        // Asumimos que la respuesta contiene un campo que es un arreglo de eventos
        const eventData = response.data; // Verifica cómo está estructurado el JSON aquí

        // Cambia esta línea según la estructura real de tu JSON
        if (Array.isArray(eventData)) {
          setEvents(eventData);
        } else {
          setError('La respuesta no contiene un arreglo de eventos');
        }
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
        </div>
      ))}
    </div>
  );
}
