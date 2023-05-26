import React from 'react';
import { Link } from 'react-router-dom';
import { dumbell, home, plus, user } from '../assets';

const Navbar = () => {
  return (
    <nav className="navBar">
      <Link to="treinos">
        <img src={dumbell} alt="" />
      </Link>
      <Link to="home">
        <img src={home} alt="" />
      </Link>
      <Link to="perfil">
        <img src={user} alt="" />
      </Link>
      <Link to="#">
        <img src={plus} alt="" />
      </Link>
    </nav>
  );
};

export default Navbar;
