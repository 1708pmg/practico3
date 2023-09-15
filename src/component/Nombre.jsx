import React from 'react';

function Nombre({ jugadorNombre, handleNombreChange }) {
  return (
    <div className="juego-container">
      <h1>Juego Piedra, Papel o Tijeras</h1>
      <h2>Ingresa tu nombre para jugar</h2>
      <input
        type="text"
        placeholder="Ingresa tu nombre"
        value={jugadorNombre}
        onChange={handleNombreChange}
      />
    </div>
  );
}

export default Nombre;
