import React, { useState } from 'react';
import Logo from '../Img/Logo.png'
import './Header.css'
import LoginModal from './Modal';


const Header = () =>{
   const [isModalOpen, setIsModalOpen] = useState(false);

   const openModal = () => {
     setIsModalOpen(true);
   };
 
   const closeModal = () => {
     setIsModalOpen(false);
   };

   
   return (
       <header>
      <figure>
        <img src={Logo} alt="" />
      </figure>
      <nav className='nav'>
        <a href="#" onClick={openModal}>Acceder</a>
      </nav>
      <LoginModal isOpen={isModalOpen} onRequestClose={closeModal} />
    </header>
     

  )
}
export {Header}