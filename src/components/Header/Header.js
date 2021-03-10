import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <header class="mainNavBar">
        <h1 class="logo">
          Mana<span class="logoTag">Become who you want to be</span>
        </h1>
        <ul class="navBar">
          <li class="navBtn">Login</li>
          <li class="navBtn">Register</li>
        </ul>
      </header>
    );
  }
}

export default Header;
