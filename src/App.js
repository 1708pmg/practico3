import React, { useState } from 'react';
import './App.css';
import Marcadores from "./component/Marcadores.jsx";
import Botones from "./component/Botones.jsx";
import Nombre from "./component/Nombre.jsx";
import Jugadas from './component/Jugadas';


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

// Retorno cada uno de los componentes //
  return (
    <div className="juego-container">
      <Nombre
        jugadorNombre={jugadorNombre}
        handleNombreChange={handleNombreChange}
      />
      
      <Marcadores
        marcadorJugador = {marcadorJugador}
        marcadorComputadora = {marcadorComputadora} />
      
      <Botones jugar ={jugar}/>

       {/* Componente Jugadas */}
       {jugadorSeleccion && (
        <Jugadas
          jugadorSeleccion={jugadorSeleccion}
          computadoraSeleccion={computadoraSeleccion}
          resultado={resultado}
          reiniciarJuego={reiniciarJuego}
        />
      )}
    </div>
  );
};

export default JuegoPiedraPapelTijeras;
