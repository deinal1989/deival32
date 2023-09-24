// Contacto.tsx
"use client";
import React, { useState } from 'react';
import '@/css/contacto.css'; // Importa el archivo de estilos desde la carpeta raíz
import { useTheme } from 'next-themes';


const Contacto = () => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [mensaje, setMensaje] = useState('');
  const { theme } = useTheme();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validar el formulario aquí si es necesario

    // Construir el objeto de datos a enviar
    const datos = {
      nombre,
      email,
      mensaje,
    };

    // Enviar el formulario a través de una solicitud HTTP (por ejemplo, con axios o fetch)
    try {
      const response = await fetch('URL_DE_TU_SERVIDOR', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(datos),
      });

      if (response.ok) {
        // Éxito, el mensaje se envió correctamente
        console.log('Mensaje enviado con éxito');
      } else {
        // Error al enviar el mensaje
        console.error('Error al enviar el mensaje');
      }
    } catch (error) {
      console.error('Error al enviar el mensaje', error);
    }
  };

  return (
    <div className="columnas">
        <div className="columna-izquierda">
        <h1 className={`titulo-contacto ${theme === 'dark' ? 'dark' : 'light'}`}>
        Comentanos tu idea.<br/> Llevaremos tu negocio al siguiente nivel
        </h1>
        </div>
    <div className="formulario-contacto">
        <div className="columna-derecha">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="nombre">Nombre</label>
              <input
                type="text"
                id="nombre"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="mensaje">Mensaje</label>
              <textarea
                id="mensaje"
                value={mensaje}
                onChange={(e) => setMensaje(e.target.value)}
                required
              />
            </div>
            <button className="formulario-boton" type="submit">
              Enviar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contacto;
