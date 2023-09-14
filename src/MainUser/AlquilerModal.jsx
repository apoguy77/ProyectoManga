import React, { Component } from 'react';
import './AlquilerModal.css'; // Import the CSS file

class AlquilerModal extends Component {
    render() {
        const { modalVisible, confirmAlquiler, toggleModal, isLoggedIn } = this.props;

        return (
            <div className={modalVisible ? "modal" : "hidden"}>
                <div className="modal-content">
                    <h2>Confirmar Alquiler</h2>
                    <p>Fecha de Alquiler: {new Date().toLocaleDateString()}</p>
                    <p>Fecha de Entrega: {new Date(new Date().getTime() + 2 * 24 * 60 * 60 * 1000).toLocaleDateString()}</p>
                    {isLoggedIn ? (
                        <button className="button primary-button" onClick={confirmAlquiler}>Confirmar Alquiler</button>
                    ) : (
                        <p></p>
                    )}
                    
                    <button className="button primary-button" onClick={confirmAlquiler}>Alquilar</button>
                    <button className="button secondary-button" onClick={toggleModal}>Cancelar</button>
                </div>
            </div>
        );
    }
}

export default AlquilerModal;
