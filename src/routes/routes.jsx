import { Redirect, Route, BrowserRouter as Router } from 'react-router-dom';
import MainUser from '../MainUser/MainUser.jsx'; // Asegúrate de que la ruta del archivo sea correcta

function App() {
  const isLoggedIn = isUserAuthenticated(); // Reemplaza esto con tu función de autenticación real

  return (
    <Router>
      <Route path="/" exact component={Login} />
      <PrivateRoute
        path="/main-usuario"
        component={MainUser}
        isAuthenticated={isLoggedIn}
      />
    </Router>
  );
}

const PrivateRoute = ({ component: Component, isAuthenticated, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isAuthenticated ? (
        <Component {...props} />
      ) : (
        <Redirect to="/" />
      )
    }
  />
);

export default App;
