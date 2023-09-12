import React from 'react';
<UserBanner username="" onLogout={handleLogout} />


const UserBanner = ({ username, onLogout }) => {
  return (
    <div className="user-banner">
      <p>Bienvenido, {username}</p>
      <button onClick={onLogout}>Cerrar Sesión</button>
    </div>
  );
};

export default UserBanner;
