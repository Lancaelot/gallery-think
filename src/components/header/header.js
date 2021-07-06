import React from 'react';
import PropTypes from 'prop-types';
import './header.scss';
import { Nav } from '../nav/nav';

export const Header = props => (
  <header className="header">
    <div className="header__top">
      <h1 className="header__logo">
        my
        <span className="header__highlight">
          Gallery
        </span>
      </h1>
    </div>
    <Nav />
    <div className="header__pageNav">
      <button
        name="decrease"
        type="button"
        className="header__button"
        onClick={
          event => props.handleChange(event.target.name)
        }
      >
        Prev Page
      </button>
      <button
        name="increase"
        type="button"
        className="header__button"
        onClick={
          event => props.handleChange(event.target.name)
        }
      >
        Next Page
      </button>
    </div>
  </header>
);

Header.propTypes = {
  handleChange: PropTypes.func.isRequired,
};
