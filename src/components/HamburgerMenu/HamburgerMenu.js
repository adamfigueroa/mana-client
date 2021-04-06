import React, { Component } from 'react';
import { slide as Menu } from 'react-burger-menu';
import UserContext from '../../context/UserContext';
import TokenService from '../../services/token-service';
import './HamburgerMenu.css';
class HamburgerMenu extends Component {
  static contextType = UserContext;

  toggleMenu = ({ isOpen }) => {
    const menuWrap = document.querySelector('.bm-menu-wrap');
    isOpen
      ? menuWrap.setAttribute('aria-hidden', false)
      : menuWrap.setAttribute('aria-hidden', true);
  };

  handleLogout = () => {
    this.context.processLogout();
  };

  renderLoginOption = () => {
    return (
      <React.Fragment>
        <a className="menu-item" href="/">
          Home
        </a>
        <a className="menu-item" href="/Login">
          Login
        </a>
      </React.Fragment>
    );
  };
  renderLogoutOptions = () => {
    return (
      <React.Fragment>
        <button className="menu-button" onClick={this.handleLogout}>
          Logout
        </button>
        <a className="menu-item" href="/dashboard">
          Todays Practice
        </a>
        <a className="menu-item" href="/addtopractice">
          Add to your Practice
        </a>
      </React.Fragment>
    );
  };

  render() {
    return (
      <Menu
        left
        onStateChange={this.toggleMenu}
        width={'80%'}
        id={'burger-menu'}
      >
        {TokenService.hasAuthToken()
          ? this.renderLogoutOptions()
          : this.renderLoginOption()}
      </Menu>
    );
  }
}

export default HamburgerMenu;
