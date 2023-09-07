import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './main.css';

import Naruto from '../Img/narutoCarrusel1.jpg';
import guardianes from '../Img/guardianesCarrusel2.jpg';
import drago from '../Img/dragoCarrusel3.jpg';
import chichan from '../Img/chichanCarrusel4.jpg';

import slamduck from '../Img/slamdunkCarrusel5.jpg';
import kochirakatsushika from '../Img/kochirakatsushikaCarrusel6.jpg';
import doraemon from '../Img/doraemonCarrusel7.jpg';
import black  from  '../Img/blackCarrusel8.jpg';

const Main = () => {
    const carousel1Images = [
        Naruto,
        guardianes,
        drago,
        chichan,
    ];

    const carousel2Images = [
        slamduck,
        kochirakatsushika,
        doraemon,
        black
    ];

    const carousel1LegendItems = [
        { title: 'NARUTO', description: 'Naruto Uzumaki うずまきナルト Es el un joven gennin de Konohagakure e hijo de Minato Namikaze y su esposa Kushina Uzumaki. Es miembro del Equipo Kakashi, y además, el último Jinchuriki del Zorro de Nueve Colas.' },
        { title: 'GUARDIANES DE LA NOCHE', description: 'Uno de los mangas contemporáneos más destacados de los últimos años. Ya en su momento cautivó a miles de lectores, aunque no terminó de explotar del todo hasta la emisión de su excelentísima serie de animación' },
        { title: 'DRAGONBALL de Akira Toriyama', description: 'Dragon Ball es una serie simple que destaca gracias a la espectacularidad de sus combates. Siendo parco en palabras, todo se reduce a villanos, entrenamientos y batallas. Esto no quiere decir que sea mala. Más bien todo lo contrario.' },
        { title: 'SHIN CHAN', description: 'Es un niño de cinco años de edad que vive en la ciudad japonesa de Kasukabe, junto a sus padres, Hiroshi y Misae Nohara, y transcurrida gran parte de la serie, con su hermana pequeña, Himawari.' },
    ];

    const carousel2LegendItems = [
        { title: 'SLAM DUNK', description: 'Spokon de referencia que marcó a toda una generación de mangakas. Curiosamente, es una de las más cortas del top, pues tan solo se publicó durante seis años' },
        { title: 'KOCHIRA KATSUSHIKA', description: 'Con toda probabilidad, uno de los tebeos japoneses más influyentes y relevantes de toda la historia... Y uno de los más largos' },
        { title: 'DORAEMON', description: 'El Gato Cósmico siempre ha tenido muchos adeptos en España. Licenciada por diversas cadenas de televisión, entretuvo a toda una generación de jóvenes curiosos' },
        { title: 'BLACK JACK', description: 'Comúnmente apodado "dios del manga" gracias a su capacidad como dibujante y guionista, promovió la lectura manga como pocos han hecho' }
    ];

    return (
        <div className="main">
            <h1>MANGAS DESTACADOS</h1>
            <div className="carousel-container">
                <Carousel showThumbs={false}>
                    {carousel1Images.map((image, index) => (
                        <div key={index}>
                            <img src={image} alt={`imagen${index + 1}`} />
                            <div className="legend">
                                <p>{carousel1LegendItems[index].title}</p>
                                <p>{carousel1LegendItems[index].description}</p>
                            </div>
                        </div>
                    ))}
                </Carousel>
                <div className="carousel-separator"></div>
                <Carousel showThumbs={false}>
                    {carousel2Images.map((image, index) => (
                        <div key={index}>
                            <img src={image} alt={`imagen${index + 1}`} />
                            <div className="legend">
                                <p>{carousel2LegendItems[index].title}</p>
                                <p>{carousel2LegendItems[index].description}</p>
                            </div>
                        </div>
                    ))}
                </Carousel>
            </div>
        </div>
    );
}

export default Main;
