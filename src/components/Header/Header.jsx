import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">Catalog</Link></li>
          <li><Link to="/clients">Our Clients</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
