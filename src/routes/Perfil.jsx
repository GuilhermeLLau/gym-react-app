import React from 'react';
import Navbar from '../components/Navbar';
import { pessoa2, pessoa4, post2, post4, post1 } from '../assets';

const Perfil = () => {
  return (
    <section className="section-container">
      <div className="perfilUser">
        <img src={pessoa4} alt="" />
        <h2>Pedro Henrique</h2>
      </div>
      <div className="seguidores">
        <span>Seguidores: 873</span>
        <span>Seguindo: 1042</span>
      </div>
      <div className="publicacoes">
        <div>
          <img src={post2} alt="" />
        </div>
        <div>
          <img src={post4} alt="" />
        </div>
        <div>
          <img src={pessoa2} alt="" />
        </div>
        <div>
          <img src={post4} alt="" />
        </div>
        <div>
          <img src={post4} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Perfil;
