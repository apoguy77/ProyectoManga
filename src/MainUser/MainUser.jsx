import React, { Component } from 'react';
import './MainUser.css';
import axios from 'axios';
import AlquilerModal from './AlquilerModal';

class Producto extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cantidadDisponible: this.props.CantDis,
            fechaAlquiler: null,
            fechaEntrega: null,
            modalVisible: false,
        };
    }

    toggleModal = () => {
        this.setState((prevState) => ({
            modalVisible: !prevState.modalVisible,
        }));
    };

    handleAlquiler = () => {
        if (this.props.isAuthenticated) {
            if (this.state.cantidadDisponible > 0) {
                this.toggleModal();
            }
        } else {
            alert('Debes iniciar sesión para alquilar este producto.');
        }
    };

    confirmAlquiler = () => {
        const fechaAlquiler = new Date();
        const fechaEntrega = new Date(fechaAlquiler.getTime() + 2 * 24 * 60 * 60 * 1000);
 const { _id: mangaId } = this.props;

 axios.post('/api/usuarios/registrar-alquiler', {
     userId: '6501128101eedc6ec8627796', // Reemplaza con el ID del usuario actual
     fechaAlquiler, 
     fechaEntrega,
     manga: mangaId,
 
 })
 .then((response) => {
     // Maneja la respuesta del servidor y actualiza la interfaz de usuario según sea necesario
     console.log('Alquiler registrado con éxito', response.data);
     // Actualiza la interfaz de usuario para reflejar el alquiler
     this.setState({
         cantidadDisponible: this.state.cantidadDisponible - 1,
         modalVisible: false,
     });
 })
 .catch((error) => {
     console.error('Error al registrar el alquiler', error);
     // Maneja los errores adecuadamente
 });
};

    render() {
        const { title, descripcion, image, precio } = this.props;
        const { cantidadDisponible, fechaAlquiler, fechaEntrega } = this.state;
        const imageUrl = `/img/Alquiler/${image}`;

        return (
            <div className="producto">
                <img src={imageUrl} alt={title} />
                <h2>{title}</h2>
                <p>{descripcion}</p>
                <p>Valor: ${precio}</p>
                <p>Cantidad disponible: {cantidadDisponible}</p>
                {fechaAlquiler && <p>Fecha de Alquiler: {fechaAlquiler.toDateString()}</p>}
                {fechaEntrega && <p>Fecha de Entrega: {fechaEntrega.toDateString()}</p>}
                <button onClick={this.handleAlquiler}>Alquilar</button>

                {this.state.modalVisible && (
                    <AlquilerModal
                        modalVisible={this.state.modalVisible}
                        fechaAlquiler={this.state.fechaAlquiler}
                        fechaEntrega={this.state.fechaEntrega}
                        confirmAlquiler={this.confirmAlquiler}
                        toggleModal={this.toggleModal}
                    />
                )}
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
                        <Producto key={producto._id} {...producto} isAuthenticated={this.props.isAuthenticated} />
                    ))}
                </div>
            </div>
        );
    }
}

export default MainUser;
