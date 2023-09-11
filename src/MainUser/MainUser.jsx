import React, { Component } from 'react';
import './MainUser.css';
import axios from 'axios';

class Producto extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cantidadDisponible: this.props.CantDis,
        };
    }

    handleAlquiler = () => {
        // Simplemente resta 1 a la cantidad disponible cuando se realiza un alquiler
        if (this.state.cantidadDisponible > 0) {
            this.setState((prevState) => ({
                cantidadDisponible: prevState.cantidadDisponible - 1,
            }));
        }
    };

    render() {
        const { title, descripcion, image, CanttAl, precio } = this.props;
        const { cantidadDisponible } = this.state;
        const imageUrl = `/img/Alquiler/${image}`;

        return (
            <div className="producto">
                <img src={imageUrl} alt={title} />
                <h2>{title}</h2>
                <p>{descripcion}</p>
                <p>Valor: ${precio}</p>
                <p>Cantidad disponible: {cantidadDisponible}</p>
                <button onClick={this.handleAlquiler}>Alquilar</button>
            </div>
        );
    }
}

class MainUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            productos: [],
        };
    }

    componentDidMount() {
        axios
            .get('/api/mangas')
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
                <h1 className='titulo'>Alquiler de Productos</h1>
                <div className="productos-container">
                    {productos.map((producto) => (
                        <Producto key={producto._id} {...producto} />
                    ))}
                </div>
            </div>
        );
    }
}

export default MainUser;
