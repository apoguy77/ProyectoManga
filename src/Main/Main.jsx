import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import carrusel1 from '../Img/narutoCarrusel1.jpg';
import carrusel2 from '../Img/guardianesCarrusel2.jpg';
import carrusel3 from '../Img/dragoCarrusel3.jpg';
import carrusel4 from '../Img/chichanCarrusel4.jpg';

import './main.css';

const Main = () => {
    const legendItems = [
        { title: 'NARUTO', description: 'Naruto Uzumaki うずまきナルト Es el un joven gennin de Konohagakure e hijo de Minato Namikaze y su esposa Kushina Uzumaki. Es miembro del Equipo Kakashi, y además, el ultimo Jinchuriki del Zorro de Nueve Colas.' },
        { title: 'GUARDIANES DE LA NOCHE', description: 'Uno de los mangas contemporáneos más destacados de los últimos años. Ya en su momento cautivó a miles de lectores, aunque no terminó de explotar del todo hasta la emisión de su excelentísima serie de animación' },
        { title: 'DRAGONBALL de Akira Toriyama', description: 'Dragon Ball es una serie simple que destaca gracias a la espectacularidad de sus combates. Siendo parco en palabras, todo se reduce a villanos, entrenamientos y batallas. Esto no quiere decir que sea mala. Más bien todo lo contrario.' },
        { title: 'SHIN CHAN', description: 'Es un niño de cinco años de edad que vive en la ciudad japonesa de Kasukabe,junto a sus padres, Hiroshi y Misae Nohara, y transcurrida gran parte de la serie, con su hermana pequeña, Himawari.' },
    
    ];  

    return (
        <div className="main">
            <h1>MANGAS DESTACADOS</h1>
            <div className="carousel-container">
                <Carousel showThumbs={false}>
                    {legendItems.map((item, index) => (
                        <div key={index}>
                            <img src={eval(`carrusel${index + 1}`)} alt={`imagen${index + 1}`} />
                            <div className="legend">
                                <p>{item.title}</p>
                                <p>{item.description}</p>
                            </div>
                        </div>
                    ))}
                </Carousel>
                <div className="carousel-separator"></div> {/* Separador */}
                <Carousel showThumbs={false}>
                    {legendItems.map((item, index) => (
                        <div key={index}>
                            <img src={eval(`carrusel${index + 1}`)} alt={`imagen${index + 1}`} />
                            <div className="legend">
                                <p>{item.title}</p>
                                <p>{item.description}</p>
                            </div>
                        </div>
                    ))}
                </Carousel>
            </div>
        </div>
    );
}

export default Main;
