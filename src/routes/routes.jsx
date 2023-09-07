import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './Login'; // Tu componente de inicio de sesión
import MainUser from './MainUser';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/main-usua" component={MainUser} />
      </Switch>
    </Router>
  );
}

export default App;
