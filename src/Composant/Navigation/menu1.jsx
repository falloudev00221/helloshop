import React, { useState } from 'react';
import './Menu.css'; // Assurez-vous d'avoir un fichier Menu.css avec les styles ci-dessous

export const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="menu">
      <div className="menu-toggle" onClick={toggleMenu}>
        <span className="menu-icon"></span>
      </div>
      <ul className={`menu-items ${isOpen ? 'open' : ''}`}>
        <li><a href="#">Home</a></li>
        <li><a href="#">Femme</a></li>
        <li><a href="#">Homme</a></li>
        <li><a href="#">Enfant</a></li>
        <li><a href="#">Pépinière</a></li>
        <li><a href="#">Chaussure</a></li>
      </ul>
    </nav>
  );
};


