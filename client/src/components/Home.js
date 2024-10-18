import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <div className="hero">
        <div className="hero-content">
          <h1>Bem-vindo à Casa de Estudantes</h1>
          <p>Encontre seu lar longe de casa</p>
          <Link to="/register">
            <button>Registre-se Agora</button>
          </Link>
        </div>
      </div>
      <div className="container">
        <div className="content-section">
          <h2>Por que escolher nossa casa de estudantes?</h2>
          <ul>
            <li>Localização privilegiada próxima às universidades</li>
            <li>Quartos confortáveis e bem equipados</li>
            <li>Áreas comuns espaçosas e modernas</li>
            <li>Ambiente seguro e acolhedor</li>
            <li>Oportunidade de fazer novas amizades</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;