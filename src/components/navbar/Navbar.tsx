import { Link } from "react-router-dom";
import "./Navbar.css";
import React from "react";

function Navbar() {
  return (
    <header className="header">
      <h1>Farmácia</h1>
      <nav>
        <ul>
          <li><Link to='/' className='hover:underline'>Home</Link></li>
          <li><Link to='/about' className='hover:underline'>Sobre</Link></li>
          <li><Link to='/products' className='hover:underline'>Produtos</Link></li>
          <li><Link to='/contact' className='hover:underline'>Contato</Link></li>
          <li><Link to='/login' className='hover:underline'>Login</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
