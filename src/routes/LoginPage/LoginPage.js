import React, { Component } from 'react';
import './LoginPage.css';

class LoginPage extends Component {
  render() {
    return (
      <section className="Login-Page">
        <div class="loginFormBox">
          <form class="loginForm">
            <div class="InputBox">
              <label for="login-username-input">Username</label>
              <input id="login-username-input" name="username" required />
            </div>
            <div class="InputBox">
              <label for="login-password-input">Password</label>
              <input
                id="login-password-input"
                name="password"
                type="password"
                required
              />
            </div>
            <button type="submit">Login</button>
          </form>
        </div>
      </section>
    );
  }
}

export default LoginPage;
