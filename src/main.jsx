import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainUser from './MainUser/MainUser.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <Router >
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="cargopagina" element={<MainUser/>}></Route>
      </Routes>
    </Router>
  </React.StrictMode>,
)
