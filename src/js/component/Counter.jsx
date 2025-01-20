import React, { useEffect, useState } from "react"; // Importa React, useState y useEffect para manejar estado y efectos secundarios

export const Counter = () => {
  const [time, setTime] = useState(0); // Estado inicial para almacenar el tiempo transcurrido en segundos

  // useEffect: Se ejecuta después de que el componente se monta
  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prevTime) => prevTime + 1); // Incrementa el tiempo en 1 cada segundo
    }, 1000);

    // Cleanup: Limpia el intervalo cuando el componente se desmonta
    return () => clearInterval(interval);
  }, []);

  // Calcula las horas, minutos y segundos a partir del tiempo total en segundos
  const minutes = Math.floor(time / 60); // Total de minutos
  const seconds = time % 60; // Segundos restantes
  const hours = Math.floor(minutes / 60); // Total de horas
  const displayMinutes = minutes % 60; // Minutos restantes tras calcular horas

  return (
    <div
      className="d-flex justify-content-center align-items-center" // Usa utilidades de Bootstrap para centrar contenido
      style={{
        marginTop: "50px", // Margen superior
        height: "200px", // Altura del contenedor
        backgroundColor: "rgba(248, 244, 21, 0.93)", // Fondo amarillo con opacidad
      }}
    >
      <h1 className="text-danger"> {/* Clase de Bootstrap para texto rojo */}
        {/* Muestra las horas, minutos y segundos con formato de dos dígitos */}
        {hours.toString().padStart(2, "0")}:
        {displayMinutes.toString().padStart(2, "0")}:
        {seconds.toString().padStart(2, "0")}
      </h1>
    </div>
  );
};