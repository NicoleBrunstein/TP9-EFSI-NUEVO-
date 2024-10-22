"use client"; // Aseguramos que este componente se ejecute en el cliente

import { useEffect, useState } from 'react';
import axios from 'axios';

const EventDetail = ({ params }) => {
  const { id } = params; // Usamos params para obtener el id del evento
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEvent = async () => {
      if (id) {
        try {
          const response = await axios.get(`http://localhost:3000/api/event/${id}`); // Cambia la URL a la de tu API
          setEvent(response.data); // Guardamos el evento en el estado
        } catch (err) {
          setError('Error al cargar el evento');
        } finally {
          setLoading(false);
        }
      }
    };

    fetchEvent();
  }, [id]);

  if (loading) {
    return <p>Cargando detalles del evento...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!event) {
    return <p>No se encontró el evento.</p>;
  }

  return (
    <div>
      <h1>{event.name}</h1>
      <p>Descripción: {event.description}</p>
      <p>Fecha: {new Date(event.start_date).toLocaleString()}</p>
      <p>Lugar: {event.name}</p>
      <p>Precio: {event.price}</p>
      <p>Duración: {event.duration_in_minutes} minutos</p>
      <p>Capacidad máxima: {event.max_assistance}</p>
    </div>
  );
};

export default EventDetail;
