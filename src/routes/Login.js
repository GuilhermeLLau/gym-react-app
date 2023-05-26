import React from 'react';
import { Link } from 'react-router-dom';
import { dumbell } from '../assets';
import { socialMedia } from '../constants';

const Login = () => {
  return (
    <section className="section-containerLogin">
      <div className="loginImg">
        <h1 className="titulo">GYM APP</h1>
        <h4>Seja Bem Vindo!</h4>
        <p>Vamos te ajudar com seu objetivo.</p>
        <img className="dumbell" src={dumbell} alt="" />
      </div>
      <div className="loginCard">
        <input type="text" placeholder="Usuário ou e-mail" />
        <input type="password" placeholder="Senha" />
        <Link className="esqueceuSenha">Esqueceu a senha?</Link>
        <Link to="home" className="button">
          Entrar
        </Link>
      </div>
      <span>ou entre com</span>
      <div className="socialMedia">
        {socialMedia.map((social) => (
          <div className="socialIcon" key={social.id}>
            <img src={social.icon} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Login;
