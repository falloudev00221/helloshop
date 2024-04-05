import React, { useState } from 'react';
import './NavigationDrawer.css'; // Assurez-vous de créer un fichier CSS pour le style

 export const NavigationDrawer = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <div>
      <button onClick={toggleDrawer} className="drawer-toggle-button">
        ☰ Menu
      </button>

      <div className={`navigation-drawer ${drawerOpen ? 'open' : ''}`}>
        <button onClick={toggleDrawer} className="drawer-close-button">
          &times; Close
        </button>

        <div className="menu-list">
          <a href="#" onClick={toggleDrawer}>Accueil</a>
          <a href="#" onClick={toggleDrawer}>Mode</a>
          <a href="#" onClick={toggleDrawer}>Femme</a>
          <a href="#" onClick={toggleDrawer}>Enfant</a>
        </div>
      </div>
    </div>
  );
};

export default NavigationDrawer;
