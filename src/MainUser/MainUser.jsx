import React, { Component } from 'react';
import './MainUser.css';
import axios from 'axios';

// Componente Producto reutilizable
function Producto({ _id, title, descripcion, imageFileName, CantDis, CanttAl, precio }) {
    const imageUrl = `/api/mangas/images/${imageFileName}`; // Nueva ruta de la imagen en el backend
    return (
        <div className="producto" key={_id}>
            <img src={imageUrl} alt={title} />
            <h2>{title}</h2>
            <p>{descripcion}</p>
            <p>Valor: ${precio}</p>
            <p>Cantidad disponible: {CantDis}</p>
            <p>Disponibles para alquilar: {CanttAl}</p>
        </div>
    );
}

class MainUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            productos: [],
        };
    }

    componentDidMount() {
        axios.get('/api/mangas')
            .then((response) => {
                this.setState({ productos: response.data });
            })
            .catch((error) => {
                console.error('Error al obtener los datos del servidor', error);
            });
    }

    render() {
        const { productos } = this.state;

        return (
            <div>
                <h1>Alquiler de Productos</h1>
                <div className="productos-container">
                    {productos.map((producto) => (
                        <Producto {...producto} />
                    ))}
                </div>
            </div>
        );    
    }
}

export default MainUser;