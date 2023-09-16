import React, { useState } from 'react'; // Importa React y useState desde la librería React.
import './App.css'; // Importa estilos CSS para la aplicación.
import Marcadores from "./component/Marcadores.jsx"; // Importa el componente Marcadores desde el archivo Marcadores.jsx.
import Botones from "./component/Botones.jsx"; // Importa el componente Botones desde el archivo Botones.jsx.
import Nombre from "./component/Nombre.jsx"; // Importa el componente Nombre desde el archivo Nombre.jsx.
import Jugadas from './component/Jugadas'; // Importa el componente Jugadas desde el archivo Jugadas.jsx.

const JuegoPiedraPapelTijeras = () => {
  // Define  opciones para el juego.
  const opciones = ['piedra', 'papel', 'tijeras'];

  // Define los estados iniciales utilizando el hook useState.
  const [jugadorNombre, setJugadorNombre] = useState('');
  const [jugadorSeleccion, setJugadorSeleccion] = useState(null);
  const [computadoraSeleccion, setComputadoraSeleccion] = useState(null);
  const [resultado, setResultado] = useState(null);
  const [marcadorJugador, setMarcadorJugador] = useState(0);
  const [marcadorComputadora, setMarcadorComputadora] = useState(0);
  const [partidasJugadas, setPartidasJugadas] = useState(0);

  // Maneja el cambio en el campo donde el jugador ingresa su nombre//
  const handleNombreChange = (event) => {
    setJugadorNombre(event.target.value);
  };

  // Determina el ganador de una jugada y actualiza el estado.//
  const determinarGanador = (eleccionJugador, eleccionComputadora) => {
    let nuevoMarcadorJugador = marcadorJugador;
    let nuevoMarcadorComputadora = marcadorComputadora;

    // Lógica para determinar el ganador y actualizar el estado//
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
    // Actualiza el resultado, los marcadores y las partidas jugadas//
    setResultado(resultado);
    setPartidasJugadas(partidasJugadas + 1);
    setMarcadorJugador(nuevoMarcadorJugador);
    setMarcadorComputadora(nuevoMarcadorComputadora);

    // Comprueba si alguien ha ganado el juego o si hay empate//
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

  // El jugador debe ingresar su nombre para jugar, se lo alerta si no lo hace/
  // Lógica para realizar una jugada y determinar al ganador//
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
  // Reinicia el juego y los estados a su estado inicial//
  const reiniciarJuego = () => {
    setJugadorNombre('');
    setJugadorSeleccion(null);
    setComputadoraSeleccion(null);
    setResultado(null);
    setPartidasJugadas(0);
    setMarcadorJugador(0);
    setMarcadorComputadora(0);
  };

// Renderiza cada uno de los componentes en el orden establecido//
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

export default JuegoPiedraPapelTijeras; //exporta el componente principal//
