import React, { useState } from 'react';
import Logo from '../Img/Logo.png';
import './Header.css';
import LoginModal from './Modal';

const Header = ({ isAuthenticated, userName, onLogin, onLogout }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleLogout = () => {
    // Realiza la acción de cierre de sesión aquí (por ejemplo, eliminando tokens, etc.)
    // Luego, recarga la página para volver al estado inicial (botón "Acceder").
    onLogout();
    window.location.reload(); // Recarga la página
  };

  return (
    <header>
      <figure>
        <img src={Logo} alt="" />
      </figure>
      <nav className='nav'>
        {isAuthenticated ? (
          <div>
            <span>Bienvenido, {userName}</span>
            <button onClick={handleLogout}>Cerrar Sesión</button>
          </div>
        ) : (
          <button onClick={openModal}>Acceder</button>
        )}
      </nav>
      <LoginModal isOpen={isModalOpen} onRequestClose={closeModal} onLogin={onLogin} />
    </header>
  );
}

export { Header };
