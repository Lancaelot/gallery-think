import React from 'react';
import { Link } from 'react-router-dom';
import home from '../../icons/home.svg';
import star from '../../icons/star.svg';
import './nav.scss';

export const Nav = () => (
  <nav className="nav">
    <ul className="nav__list">
      <li className="nav__item">
        <Link to="/home" className="nav__link">
          <img
            src={home}
            alt="img"
            className="nav__icon"
          />
          <div>Home</div>
        </Link>
      </li>
      <li className="nav__item">
        <Link to="/favorites" className="nav__link">
          <img
            src={star}
            alt="img"
            className="nav__icon"
          />
          <div>Favorites</div>
        </Link>
      </li>
    </ul>
  </nav>
);
