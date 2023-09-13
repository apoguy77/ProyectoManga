import React, { Component } from 'react';

class AlquilerModal extends Component {
    render() {
        const { modalVisible, confirmAlquiler, toggleModal, isLoggedIn } = this.props;

        return (
            <div className={`modal ${modalVisible ? 'active' : ''}`}>
                <div className="modal-content">
                    <h2>Confirmar Alquiler</h2>
                    <p>Fecha de Alquiler: {new Date().toLocaleDateString()}</p>
                    <p>Fecha de Entrega: {new Date(new Date().getTime() + 2 * 24 * 60 * 60 * 1000).toLocaleDateString()}</p>
                    {isLoggedIn ? (
                        
                        <button onClick={confirmAlquiler}>Confirmar Alquiler</button>
                    ) : (
                        <p>Por favor, inicie sesión para confirmar el alquiler.</p>
                    )}
                    <button onClick={confirmAlquiler}>inicie sesion</button>
                    <button onClick={confirmAlquiler}>Confirmar Alquiler</button>
                    <button onClick={toggleModal}>Cancelar</button>
                    
                </div>
            </div>
        );
    }
}

export default AlquilerModal;
