import React, { Component } from 'react';
import axios from 'axios'; // Importa axios para hacer la solicitud POST
import './AlquilerModal.css'; // Importa el archivo CSS

class AlquilerModal extends Component {
    // Función para enviar la solicitud POST al servidor
    handleAlquilar = async () => {
        const { mangaNombre, fechaAlquiler, fechaEntrega, estado } = this.props; // Asegúrate de que estos valores estén disponibles en props

        try {
            const response = await axios.post('/rent', {
                mangaNombre,
                fechaAlquiler,
                fechaEntrega,
                estado,
            });

            // Maneja la respuesta según tus necesidades
            if (response.data.message) {
                // El alquiler se registró con éxito, puedes mostrar un mensaje de éxito o realizar alguna acción adicional
                console.log('Alquiler registrado con éxito');
            } else {
                // Maneja los posibles errores aquí
                console.error('Error al registrar el alquiler:', response.data.error);
            }
        } catch (error) {
            // Maneja los errores de la solicitud aquí
            console.error('Error al enviar la solicitud POST:', error);
        }
    }

    render() {
        const { modalVisible, toggleModal, isLoggedIn } = this.props;

        return (
            <div className={modalVisible ? "modal" : "modal-hidden"}>
                <div className="modal-content">
                    <h2>Confirmar Alquiler</h2>
                    <p>Fecha de Alquiler: {new Date().toLocaleDateString()}</p>
                    <p>Fecha de Entrega: {new Date(new Date().getTime() + 2 * 24 * 60 * 60 * 1000).toLocaleDateString()}</p>
                    {isLoggedIn ? (
                        <button onClick={this.handleAlquilar}>Alquilar</button>
                    ) : (
                        <p>Por favor, inicie sesión para confirmar el alquiler.</p>
                    )}
                    
                     <button onClick={this.handleAlquilar}>Confirmar Alquiler</button>
                    <button onClick={toggleModal}>Cancelar</button>
                </div>
            </div>
        );
    }
}

export default AlquilerModal;
