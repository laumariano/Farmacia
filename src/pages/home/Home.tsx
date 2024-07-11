import React from "react";
import "./Home.css";
import { ShoppingCart, Heart } from "@phosphor-icons/react";


function Home() {
  return (
    <div className="home">
    

      <main className="main-content">
        <section className="intro">
          <h2>Bem-vindo à Nossa Farmácia</h2>
          <p>Oferecemos os melhores produtos para sua saúde e bem-estar.</p>
        </section>

        <section className="product-showcase">
          <h2>Nossos Produtos</h2>
          <div className="product-grid">
            <div className="product-card">
              <img src="https://via.placeholder.com/150" alt="Produto 1" />
              <h3>Produto 1</h3>
              <p>Descrição do produto 1.</p>
              <button className="cart-button"><ShoppingCart size={24} /> Adicionar ao Carrinho</button>
              <button className="wish-button"><Heart size={24} /> Adicionar aos Favoritos</button>
            </div>
            <div className="product-card">
              <img src="https://via.placeholder.com/150" alt="Produto 2" />
              <h3>Produto 2</h3>
              <p>Descrição do produto 2.</p>
              <button className="cart-button"><ShoppingCart size={24} /> Adicionar ao Carrinho</button>
              <button className="wish-button"><Heart size={24} /> Adicionar aos Favoritos</button>
            </div>
            {/* Add more product cards as needed */}
          </div>
        </section>
      </main>

    
    </div>
  );
}

export default Home;