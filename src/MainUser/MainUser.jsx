import React, { Component } from 'react';
import './MainUser.css'

import onepiece from '../Img/Alquiler/onepiece.jpg'
import dragonball from '../Img/Alquiler/dragonball.jpg'
import hunte from '../Img/Alquiler/hunte.jpeg'
import death from '../Img/Alquiler/death.jpg'
import bleach from '../Img/Alquiler/bleach.jpg'
import jojo from '../Img/Alquiler/jojo.jpg'
import fullmetal from '../Img/Alquiler/fullmetal.jpg'
import golgo from '../Img/Alquiler/golgo.jpeg'
import pokemon from '../Img/Alquiler/pokemon.jpg'
class MainUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            productos: [
                {
                    id: 1,
                    nombre: 'One Piece de Eiichirō Oda',
                    descripcion: 'La historia narra las aventuras de Monkey D. Luffy, un joven pirata que sueña con convertirse en el rey de los piratas al encontrar el One Piece, un tesoro dejado por un antiguo rey, Gold D. Roger. Además, tiene un poder muy útil: es totalmente elástico.',
                    imagen: onepiece,
                    valor: '$100.000',
                    disponibles: 5, // Cantidad inicial disponible
                },
                {
                    id: 2,
                    nombre: 'Dragon Ball Super',
                    descripcion: 'Esta última saga ha servido para que Goku y Vegeta vuelvan a reencontrarse con el pasado de su raza. Monite, el namekiano que vive en el planeta Cereal, sacó un viejo rastreador saiyajin de sus tesoros, el mismo que utilizó Bardock en la invasión a este planeta.',
                    imagen: dragonball,
                    valor: '$180.000',
                    disponibles: 10, // Cantidad inicial disponible
                },
                {
                    id: 3,
                    nombre: 'Hunter X Hunter',
                    descripcion: 'Un joven lleno de pasión que busca convertirse en un cazador, un aventurero todo terreno, pero también lucha para encontrar a su padre, uno de los mayores cazadores existentes.',
                    imagen: hunte,
                    valor: '$140.000',
                    disponibles: 10, // Cantidad inicial disponible
                },
                {
                    id: 4,
                    nombre: 'El cultísimo Death Note',
                    descripcion: 'Death Note cuenta la historia de Light Yagami que un día encuentra un cuaderno llamado Death Note, en el que puede escribir nombres. Todas las personas anotadas en el cuaderno mueren.',
                    imagen: death,
                    valor: '$90.000',
                    disponibles: 10, // Cantidad inicial disponible
                },
                {
                    id: 5,
                    nombre: 'Bleach de Tite Kubo',
                    descripcion: 'Rukia es una shinigami, pero después de una dura pelea, ¡le da sus poderes a un humano, Ichigo, nuestro héroe!.',
                    imagen: bleach,
                    valor: '$170.000',
                    disponibles: 10, // Cantidad inicial disponible
                },
                {
                    id: 6,
                    nombre: 'Jojo’s Bizarre Adventure',
                    descripcion: 'El manga Jojo  Bizarre Adventure es bastante difícil de clasificar: acción, fantasía, familia, historia o incluso terror, este manga es tan completo como complejo.',
                    imagen: jojo,
                    valor: '$180.000',
                    disponibles: 10, // Cantidad inicial disponible
                }, 
                {
                    id: 7,
                    nombre: 'Fullmetal Alchemist de Hiromu Arakawa',
                    descripcion: 'El manga cuenta las aventuras de Edward y Alphonse Elric, dos hermanos alquimistas que pierden a su madre y tratan de traerla de vuelta usando este arte, entre la ciencia y la magia.',
                    imagen: fullmetal ,
                    valor: '$150.000',
                    disponibles: 10, // Cantidad inicial disponible
                },
                {
                    id: 8,
                    nombre: 'Golgo 13 ',
                    descripcion: 'Tiene fama de ser el manga más longevo, cuya publicación se ha extendido más de cincuenta años. La serie también ha vendido más de 280 millones de copias en varios formatos, incluyendo compilaciones, convirtiéndose así en el segundo manga más vendido de la historia.',
                    imagen: golgo,
                    valor: '$190.000',
                    disponibles: 10, // Cantidad inicial disponible
                },
                {
                    id: 9,
                    nombre: 'Pokémon Adventures',
                    descripcion: 'Es un manga basado en los videojuegos Pokémon, actualmente es de los 10 mangas más vendidos a nivel mundial con 150 millones de copias.',
                    imagen: pokemon,
                    valor: '200.000',
                    disponibles: 10, // Cantidad inicial disponible
                },
               
            ],
        };
    }

    alquilarProducto = (id) => {
        this.setState((prevState) => {
            const productosActualizados = prevState.productos.map((producto) => {
                if (producto.id === id && producto.disponibles > 0) {
                    return {
                        ...producto,
                        disponibles: producto.disponibles - 1,
                    };
                }
                return producto;
            });

            return { productos: productosActualizados };
        });
    };

    render() {
        return (
            <div>
                <h1>Alquiler de Productos</h1>
                <div className="productos-container">
                    {this.state.productos.map((producto) => (
                        <div key={producto.id} className="producto">
                            <img src={producto.imagen} alt={producto.nombre} />
                            <h2>{producto.nombre}</h2>
                            <p>{producto.descripcion}</p>
                            <p>{producto.valor}</p>
                            <p>Disponibles para alquilar: {producto.disponibles}</p>
                            <button
                                onClick={() => this.alquilarProducto(producto.id)}
                                disabled={producto.disponibles === 0}
                            >
                                Alquilar
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default MainUser;
