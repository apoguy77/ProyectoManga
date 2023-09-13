import React, { useState } from 'react';
import Logo from '../Img/Logo.png'
import './Header.css'
import LoginModal from './Modal';

const Header = () => {
   const [isModalOpen, setIsModalOpen] = useState(false);
   const [userName, setUserName] = useState(null); // Estado para almacenar el nombre del usuario

   const openModal = () => {
     setIsModalOpen(true);
   };
 
   const closeModal = () => {
     setIsModalOpen(false);
   };

   const handleLogin = (name) => {
     setUserName(name); // Almacena el nombre del usuario al iniciar sesión
     closeModal(); // Cierra el modal después de iniciar sesión
   };

   return (
     <header>
       <figure>
         <img src={Logo} alt="" />
       </figure>
       <nav className='nav'>
         {userName ? (
           <span>Bienvenido, {userName}</span>
         ) : (
           <a href="#" onClick={openModal}>Acceder</a>
         )}
       </nav>
       <LoginModal isOpen={isModalOpen} onRequestClose={closeModal} onLogin={handleLogin} />
     </header>
   );
}

export { Header }
