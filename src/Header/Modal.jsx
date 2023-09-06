import React, { useState } from 'react';
import Modal from 'react-modal';
import './Header.css';

Modal.setAppElement('#root');

function LoginModal({ isOpen, onRequestClose }) {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Login and Registration Modal"
      className="custom-modal" // Aplica la clase CSS para la modal
    >
      <div>
        <h2>{isLogin ? 'Iniciar Sesión' : 'Registrarse'}</h2>
        {isLogin ? (
          <LoginForm onToggleForm={toggleForm} />
        ) : (
          <RegistrationForm onToggleForm={toggleForm} />
        )}
      </div>
    </Modal>
  );
}

function LoginForm({ onToggleForm }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Aquí puedes implementar la lógica para el inicio de sesión,
    // por ejemplo, hacer una solicitud HTTP a tu servidor.
  };

  return (
    <form onSubmit={handleLogin}>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label>Contraseña:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit">Iniciar Sesión</button>
      <p>
        ¿No tienes una cuenta?{' '}
        <span onClick={onToggleForm}>Registrarse</span>
      </p>
    </form>
  );
}

function RegistrationForm({ onToggleForm }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
    // Aquí puedes implementar la lógica para el registro de usuario,
    // por ejemplo, hacer una solicitud HTTP a tu servidor.
  };

  return (
    <form onSubmit={handleRegister}>
      <div>
        <label>Nombre:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label>Contraseña:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit">Registrarse</button>
      <p>
        ¿Ya tienes una cuenta?{' '}
        <span onClick={onToggleForm}>Iniciar Sesión</span>
      </p>
    </form>
  );
}

export default LoginModal;
