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
          // Verifica si el usuario está autenticado
          if (this.state.cantidadDisponible > 0) {
            this.toggleModal(); // Abre el modal
          }
        } else {
          // Si el usuario no está autenticado, puedes mostrar un mensaje o redirigirlo a la página de inicio de sesión.
          alert('Debes iniciar sesión para alquilar este producto.');
          // O puedes redirigir al usuario a la página de inicio de sesión, si tienes una ruta definida para ella.
          // Ejemplo usando react-router-dom:
          // this.props.history.push('/login');
        }
      };
      

    confirmAlquiler = () => {
        // Envía los datos al servidor
        axios
            .post('/api/registrar-alquiler', {
                fechaAlquiler: this.state.fechaAlquiler,
                fechaEntrega: this.state.fechaEntrega,
                productoId: this.props._id,
            })
            .then((response) => {
                // Actualiza el estado o realiza cualquier otra acción necesaria
                console.log('Alquiler registrado con éxito');
            })
            .catch((error) => {
                console.error('Error al registrar el alquiler', error);
            });

        // Cierra el modal y reinicia las fechas
        this.toggleModal();
        this.setState({
            fechaAlquiler: null,
            fechaEntrega: null,
            cantidadDisponible: this.state.cantidadDisponible - 1,
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

                {/* Modal */}
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
