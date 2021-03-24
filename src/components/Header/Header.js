import React from 'react';
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu.js';
import logo from '../../images/mana-logo.png';
import './Header.css';

export default function Header() {
  React.useEffect(() => {
    const menuWrap = document.querySelector('.bm-menu-wrap');
    if (menuWrap) {
      menuWrap.setAttribute('aria-hidden', true);
    }
  }, []);

  return (
    <header className="mainNavBar">
      <HamburgerMenu />
      <div className="logo-box">
        <h1 className="logo">
          Mana<span className="logoTag">Become who you want to be</span>
        </h1>
        <img src={logo} className="mana-img" alt="Wizard hat and wand icon" />
      </div>
    </header>
  );
}
