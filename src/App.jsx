import React, { useState } from 'react';
import './App.css';
import { Header } from './Header/Header';
import Main from './Main/Main';
import MainUser from './MainUser/MainUser';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userName, setUserName] = useState('');

  const handleLogin = (name) => {
    setUserName(name);
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUserName('');
  };

  return (
    <>
      <Header isAuthenticated={isAuthenticated} userName={userName} onLogin={handleLogin} onLogout={handleLogout} />
      <Main />
      <MainUser isAuthenticated={isAuthenticated}  />
    </>
  );
}

export default App;
