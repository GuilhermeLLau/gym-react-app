import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="treinos">Treinos</Link>
          <Link to="home">Home</Link>
          <Link to="perfil">Perfil</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
