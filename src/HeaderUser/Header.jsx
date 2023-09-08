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
        <a href="#" onClick="">Acceder</a>
      </nav>
      
    </header>
     

  )
}
export {Header}