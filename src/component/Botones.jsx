
import React from 'react';
import piedraImg from '../assets/piedra.jpg';
import papelImg from '../assets/papel.jpg';
import tijerasImg from '../assets/tijeras.jpg';

function Botones({ jugar }) {
  return (
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
  );
}

export default Botones;
