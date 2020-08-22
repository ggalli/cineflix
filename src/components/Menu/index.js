import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/logo.png';
import './menu.css';
import Button from '../../components/Button';

function Menu() {
  return (
    <nav className="Menu">
      <Link to="/">
        <img className="Logo" src={Logo} alt="Cineflix logo"/>
      </Link>

      <Button as={Link} to="/cadastro/video">
        Novo vídeo
      </Button>
    </nav>
  )
}

export default Menu;