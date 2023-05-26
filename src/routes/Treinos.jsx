import React from 'react';
import {
  benchpress,
  inclinebench,
  paulomuzy,
  pessoa2,
  triceps1,
  triceps2,
} from '../assets';

const Treinos = () => {
  return (
    <div>
      <h1>Treinos</h1>
      <div className="diasDaSemana">
        <span>D</span>
        <span>S</span>
        <span>T</span>
        <span>Q</span>
        <span>Q</span>
        <span>S</span>
        <span>S</span>
      </div>
      <h4>Treino Da Segunda :</h4>
      <div className="treinosCard">
        <div className="treinos">
          <img src={benchpress} alt="" />
          <img src={inclinebench} alt="" />
          <img src={triceps1} alt="" />
          <img src={triceps2} alt="" />
        </div>
      </div>
      <div className="personal">
        <img src={paulomuzy} alt="" />
        <h3>Paulo Muzy</h3>
        <p>avaliação: 4.2/5</p>
      </div>
    </div>
  );
};

export default Treinos;
