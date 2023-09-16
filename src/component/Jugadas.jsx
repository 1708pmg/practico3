import React from 'react';

function Jugadas({ jugadorSeleccion, computadoraSeleccion, resultado, reiniciarJuego }) {
  return (
    <div className='resultado'>
      <p>Tu elección: {jugadorSeleccion}</p>
      <p>Elección de la computadora: {computadoraSeleccion}</p>
      <p>Resultado: {resultado}</p>
      <button onClick={reiniciarJuego}>Reiniciar Juego</button>
    </div>
  );
}

export default Jugadas;
