import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Asegúrate de importar los estilos
import carrusel1 from '../Img/narutoCarrusel1.jpg';
import carrusel2 from '../Img/guardianesCarrusel2.jpg';
import carrusel3 from '../Img/dragoCarrusel3.jpg';

import './main.css';

const Main = () => {
    return (
        <div className="main">
            <h1>MANGAS DESTACADOS</h1>
            <Carousel>
                <div>
                    <img src={carrusel1}alt="imagen" />
                </div>
                <div>
                    <img src={carrusel2} alt="imagen2" />
                </div>
                <div>
                    <img src={carrusel3} alt="Foto 3" />
                </div>
                {/* Agrega más imágenes según sea necesario */}
            </Carousel>
        </div>
    );
}

export default Main;
