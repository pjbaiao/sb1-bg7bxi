import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <nav>
      <div className="container">
        <ul>
          <li><Link to="/">Home</Link></li>
          {!user ? (
            <>
              <li><Link to="/register">Registrar</Link></li>
              <li><Link to="/login">Login</Link></li>
            </>
          ) : (
            <>
              <li><Link to="/profile">Perfil</Link></li>
              <li><Link to="/chat">Chat</Link></li>
              <li><button onClick={logout}>Logout</button></li>
            </>
          )}
          <li><Link to="/faqs">FAQs</Link></li>
          <li><Link to="/rules">Normas da Casa</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;