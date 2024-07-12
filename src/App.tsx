
import './App.css';

import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import ListaCategorias from './components/categoria/listaCategorias/ListaCategorias';
import FormularioCategoria from './components/categoria/formularioCategorias/FormularioCategorias';


function App() {
  return (
    <>

        <BrowserRouter>
          <Navbar />
          <div className='min-h-[80vh] m-0'>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/categorias" element={<ListaCategorias />} />
              <Route path="/produto" element={<FormularioCategoria />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>

    </>
  );
}
export default App;