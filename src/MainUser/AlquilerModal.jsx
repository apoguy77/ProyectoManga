import React, { Component } from 'react';
import './AlquilerModal.css'; // Importa el archivo CSS

class AlquilerModal extends Component {
    render() {
        const { modalVisible, confirmAlquiler, toggleModal, isLoggedIn } = this.props;

        const modalStyle = {
            display: modalVisible ? 'flex' : 'none',
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1,
        };

        const modalContentStyle = {
            backgroundColor: '#fff',
            padding: '20px',
            borderRadius: '8px',
            textAlign: 'center',
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
        };

        const buttonStyle = {
            backgroundColor: '#007bff',
            color: '#fff',
            padding: '10px 20px',
            margin: '10px',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            transition: 'background-color 0.3s',
        };

        const cancelButtonStyle = {
            backgroundColor: '#ccc',
            color: '#333',
        };

        return (
            <div style={modalStyle}>
                <div style={modalContentStyle} className="modal-content">
                    <h2>Confirmar Alquiler</h2>
                    <p>Fecha de Alquiler: {new Date().toLocaleDateString()}</p>
                    <p>Fecha de Entrega: {new Date(new Date().getTime() + 2 * 24 * 60 * 60 * 1000).toLocaleDateString()}</p>
                    {isLoggedIn ? (
                        <button style={buttonStyle} onClick={confirmAlquiler}>Confirmar Alquiler</button>
                    ) : (
                        <p>Por favor, inicie sesión para confirmar el alquiler.</p>
                    )}
                    
                    <button style={buttonStyle} onClick={confirmAlquiler}>Alquilar</button>
                    <button style={{ ...buttonStyle, ...cancelButtonStyle }} onClick={toggleModal}>Cancelar</button>
                </div>
            </div>
        );
    }
}

export default AlquilerModal;
