import React, { Component } from 'react';
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu.js';
import logo from '../../images/mana-logo.png'
import './Header.css';

class Header extends Component {
  render() {
    return (
      <header className="mainNavBar">
        <div className="logo-box">
          <h1 className="logo">
            Mana<span className="logoTag">Become who you want to be</span>
          </h1>
          <img src={logo} className="mana-img" alt="Wizard hat and wand icon"/>
        </div>
        <HamburgerMenu />
      </header>
    );
  }
}

export default Header;
