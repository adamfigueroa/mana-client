import React, { Component } from 'react';
import AuthApiService from '../../services/auth-api-service';
import TokenService from '../../services/token-service';

class LoginForm extends Component {
  state = { error: null };

  handleLogin = (e) => {
    e.preventDefault();
    this.setState({ error: null });
    const user_name = e.target.username;
    const password = e.target.password;

    AuthApiService.postLogin({
      user_name: user_name.value,
      password: password.value,
    })
      .then((res) => {
        user_name.value = '';
        password.value = '';
        TokenService.saveAuthToken(res.authToken);
        this.props.handleLoginSuccess();
      })
      .catch((res) => {
        this.setState({ error: res.error.message });
      });
  };

  render() {
    return (
      <div className="loginFormBox">
        <form className="loginForm" onSubmit={this.handleLogin}>
          <div className="InputBox">
            <label htmlFor="login-username-input">Username</label>
            <input id="login-username-input" name="username" required />
          </div>
          <div className="InputBox">
            <label htmlFor="login-password-input">Password</label>
            <input
              id="login-password-input"
              name="password"
              type="password"
              required
            />
          </div>
          <button type="submit">Login</button>
        </form>
        <div className="demoLogin">
          <h3>Give Mana a try!</h3>
          <p>Username: test@testerson.com</p>
          <p>Password: Password!1</p>
        </div>
      </div>
    );
  }
}

export default LoginForm;
