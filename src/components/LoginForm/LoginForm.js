import React, { Component } from 'react';
import { Input, Label } from '../Form/Form';
import AuthApiService from '../../services/auth-api-service';
import UserContext from '../../context/UserContext';
import Button from '../Button/Button';

class LoginForm extends Component {
  static defaultProps = {
    onLoginSuccess: () => {},
  };

  static contextType = UserContext;

  state = { error: null };

  handleLogin = (e) => {
    e.preventDefault();
    const { username, password } = e.target;

    this.setState({ error: null });

    AuthApiService.postLogin({
      user_name: username.value,
      password: password.value,
    })
      .then((res) => {
        username.value = '';
        password.value = '';
        this.context.processLogin(res.authToken);
        this.props.onLoginSuccess();
      })
      .catch((res) => {
        this.setState({ error: res.error });
      });
      
  };

  render() {
    const { error } = this.state;
    return (
      <div className="loginFormBox">
        <form className="loginForm" onSubmit={this.handleLogin}>
          <div role="alert">{error && <p>{error}</p>}</div>
          <div className="InputBox">
            <label htmlFor="login-username-input">Username</label>
            <Input id="login-username-input" name="username" required />
          </div>
          <div className="InputBox">
            <Label htmlFor="login-password-input">Password</Label>
            <Input
              id="login-password-input"
              name="password"
              type="password"
              required
            />
          </div>
          <Button type="submit">Login</Button>
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
