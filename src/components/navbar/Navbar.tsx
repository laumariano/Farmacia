import { Link } from "react-router-dom";

import "./Navbar.css"

function Navbar() {
  return (
    <header className="header">
      <h1>Farmácia</h1>
      
      <nav>
        <ul>
          <li><Link to='/' className='hover:underline'>Home</Link></li>
          <li><Link to='/categorias' className='hover:underline'>Cadastro</Link></li>
          <li><Link to='/produto' className='hover:underline'>Produtos</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
