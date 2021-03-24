import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import TokenService from '../../services/token-service';
import './HamburgerMenu.css';

const toggleMenu = ({ isOpen }) => {
  const menuWrap = document.querySelector('.bm-menu-wrap');
  isOpen
    ? menuWrap.setAttribute('aria-hidden', false)
    : menuWrap.setAttribute('aria-hidden', true);
};

const handleLogout = () => {
  TokenService.clearAuthToken();
  this.props.history.push('/');
};

const renderLoginOption = () => {
  return (
    <a className="menu-item" href="/Login">
      Login
    </a>
  );
};

const renderLogoutOptions = () => {
  return (
    <React.Fragment>
      <button className="menu-item" onClick={handleLogout}>
        Logout
      </button>
      <a className="menu-item" href="/dashboard">
        Dashboard
      </a>
      <a className="menu-item" href="/addtopractice">
        Add to your practice
      </a>
    </React.Fragment>
  );
};

const HamburgerMenu = () => {
  return (
    <Menu left onStateChange={toggleMenu} width={'50%'}>
      <a className="menu-item" href="/">
        Home
      </a>
      {TokenService.hasAuthToken()
        ? renderLogoutOptions()
        : renderLoginOption()}
    </Menu>
  );
};

export default HamburgerMenu;
