import React from "react";
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <h1>IAH</h1>
      <nav>
        <a href="#home">BERANDA</a>
        <a href="#map">PETA</a>
        <a href="#predictions">PREDIKSI</a>
      </nav>
    </header>
  );
};

export default Header;
