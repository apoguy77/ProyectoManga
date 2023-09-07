
import jwt_decode from 'jwt-decode';

export function isUserAuthenticated() {
  const token = localStorage.getItem('authToken'); // Obtener el token almacenado en localStorage

  if (token) {
    // Decodificar y verificar el token (esto depende de tu implementación)
    try {
      const decodedToken = jwt_decode(token); // Decodificar el token (requiere el paquete 'jwt-decode')
      const currentTime = Date.now() / 1000; // Obtener la hora actual en segundos

      // Verificar si el token está expirado
      if (decodedToken.exp < currentTime) {
        return false; // El token ha expirado
      }

      return true; // El usuario está autenticado
    } catch (error) {
      console.error('Error al decodificar el token:', error);
      return false; // Error al decodificar el token
    }
  }

  return false; // No se encontró un token
}