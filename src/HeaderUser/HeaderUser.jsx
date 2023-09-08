import React, { useState } from 'react';
import Logo from '../Img/Logo.png'
import './Header.css';
   
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

export {HeaderUser}