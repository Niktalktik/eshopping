import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <Link to="/">Home</Link>
      <Link to="/cart">Cart</Link>
    </header>
  );
};

export default Header;
