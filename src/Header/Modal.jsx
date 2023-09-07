import React, { useState } from 'react';
import Modal from 'react-modal';
import Axios from 'axios';
import './Header.css';

Modal.setAppElement('#root');

function LoginModal({ isOpen, onRequestClose }) {
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const toggleForm = () => {
    setIsLogin(!isLogin);
    setMessage(''); // Limpiar cualquier mensaje de error o éxito
  };

  const handleLogin = async () => {
    try {
      const response = await Axios.post('/api/usuarios/login', {
        email,
        password,
      });
      console.log('Login successful:', response.data);
      // Manejar la respuesta, por ejemplo, redirigir al usuario o mostrar un mensaje de éxito
      setMessage('Inicio de sesión exitoso');
    } catch (error) {
      console.error('Login error:', error);
      // Manejar el error, por ejemplo, mostrar un mensaje de error
      setMessage('Error de inicio de sesión');
    }
  };

  const handleRegister = async () => {
    try {
      const response = await Axios.post('/api/usuarios', {
        name,
        email,
        password,
      });
      console.log('Registration successful:', response.data);
      // Manejar la respuesta, por ejemplo, redirigir al usuario o mostrar un mensaje de éxito
      setMessage('Registro exitoso');
    } catch (error) {
      console.error('Registration error:', error);
      // Manejar el error, por ejemplo, mostrar un mensaje de error
      setMessage('Error de registro');
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Login and Registration Modal"
      className="custom-modal"
    >
      <div>
        <h2>{isLogin ? 'Iniciar Sesión' : 'Registrarse'}</h2>
        {isLogin ? (
          <LoginForm
            onToggleForm={toggleForm}
            onLogin={handleLogin}
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
          />
        ) : (
          <RegistrationForm
            onToggleForm={toggleForm}
            onRegister={handleRegister}
            name={name}
            setName={setName}
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
          />
        )}
        {message && <div className="message">{message}</div>}
      </div>
    </Modal>
  );
}

function LoginForm({ onToggleForm, onLogin, email, setEmail, password, setPassword }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin();
  };

  return (
    <form onSubmit={handleSubmit}>
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

function RegistrationForm({
  onToggleForm,
  onRegister,
  name,
  setName,
  email,
  setEmail,
  password,
  setPassword,
}) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onRegister();
  };

  return (
    <form onSubmit={handleSubmit}>
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
