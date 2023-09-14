import React, { useState } from 'react';
import piedraImg from './assets/piedra.jpg';
import papelImg from './assets/papel.jpg';
import tijerasImg from './assets/tijeras.jpg';
import './App.css';

const JuegoPiedraPapelTijeras = () => {
  const opciones = ['piedra', 'papel', 'tijeras'];

  const [jugadorNombre, setJugadorNombre] = useState('');
  const [jugadorSeleccion, setJugadorSeleccion] = useState(null);
  const [computadoraSeleccion, setComputadoraSeleccion] = useState(null);
  const [resultado, setResultado] = useState(null);
  const [marcadorJugador, setMarcadorJugador] = useState(0);
  const [marcadorComputadora, setMarcadorComputadora] = useState(0);
  const [partidasJugadas, setPartidasJugadas] = useState(0);

  const handleNombreChange = (event) => {
    setJugadorNombre(event.target.value);
  };

  const determinarGanador = (eleccionJugador, eleccionComputadora) => {
    let nuevoMarcadorJugador = marcadorJugador;
    let nuevoMarcadorComputadora = marcadorComputadora;

    let resultado;
    if (eleccionJugador === eleccionComputadora) {
      resultado = 'Empate';
    } else if (
      (eleccionJugador === 'piedra' && eleccionComputadora === 'tijeras') ||
      (eleccionJugador === 'papel' && eleccionComputadora === 'piedra') ||
      (eleccionJugador === 'tijeras' && eleccionComputadora === 'papel')
    ) {
      resultado = 'Ganaste';
      nuevoMarcadorJugador++;
    } else {
      resultado = 'La computadora ganó';
      nuevoMarcadorComputadora++;
    }

    setResultado(resultado);
    setPartidasJugadas(partidasJugadas + 1);
    setMarcadorJugador(nuevoMarcadorJugador);
    setMarcadorComputadora(nuevoMarcadorComputadora);

    if (nuevoMarcadorJugador >= 3) {
      alert('¡Felicidades! Has ganado el juego.');
      reiniciarJuego();
    } else if (nuevoMarcadorComputadora >= 3) {
      alert('La computadora ha ganado el juego.');
      reiniciarJuego();
    } else if (partidasJugadas >= 5) {
      alert('El juego ha terminado en empate.');
      reiniciarJuego();
    }
  };

  const jugar = (eleccionJugador) => {
    if (!jugadorNombre) {
      alert('Por favor, ingresa tu nombre antes de jugar.');
      return;
    }

    const eleccionComputadora =
      opciones[Math.floor(Math.random() * opciones.length)];

    determinarGanador(eleccionJugador, eleccionComputadora);

    setJugadorSeleccion(eleccionJugador);
    setComputadoraSeleccion(eleccionComputadora);
  };

  const reiniciarJuego = () => {
    setJugadorNombre('');
    setJugadorSeleccion(null);
    setComputadoraSeleccion(null);
    setResultado(null);
    setPartidasJugadas(0);
    setMarcadorJugador(0);
    setMarcadorComputadora(0);
  };

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
      <div className='marcadores'>
        <h2>Marcadores</h2>
        <p>Jugador: {marcadorJugador}</p>
        <p>Computadora: {marcadorComputadora}</p>
      </div>
      <div className='botones'>
        <button onClick={() => jugar('piedra')}>
          <img src={piedraImg} alt="Piedra" />
        </button>
        <button onClick={() => jugar('papel')}>
          <img src={papelImg} alt="Papel" />
        </button>
        <button onClick={() => jugar('tijeras')}>
          <img src={tijerasImg} alt="Tijeras" />
        </button>
      </div>
      {jugadorSeleccion && (
        <div className='resultado'>
          <p>Tu elección: {jugadorSeleccion}</p>
          <p>Elección de la computadora: {computadoraSeleccion}</p>
          <p>Resultado: {resultado}</p>
          <button onClick={reiniciarJuego}>Reiniciar Juego</button>
        </div>
      )}
    </div>
  );
};

export default JuegoPiedraPapelTijeras;
