import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AuthApiService from '../../services/auth-api-service';

class RegisterForm extends Component {
  state = { error: null };

  handleRegister = (e) => {
    e.preventDefault();
    const { first_name, last_name, user_name, password } = e.target;
    this.setState({ error: null });

    AuthApiService.postUser({
      first_name: first_name.value,
      last_name: last_name.value,
      user_name: user_name.value,
      password: password.value,
    })
      .then((user) => {
        first_name.value = '';
        last_name.value = '';
        user_name.value = '';
        password.value = '';
        this.props.registerRedirect();
      })
      .catch((res) => {
        this.setState({ error: res });
      });
  };

  render() {
    return (
      <div className="registerFormBox">
        <form className="registerForm" onSubmit={this.handleRegister}>
          <h4>Sign-up below!</h4>
          <div className="InputBox">
            <label htmlFor="first_name">First name:</label>
            <input id="registration-fname-input" name="first_name" required />
          </div>
          <div className="InputBox">
            <label htmlFor="last_name">Last name:</label>
            <input id="registration-lname-input" name="last_name" required />
          </div>
          <div className="InputBox">
            <label htmlFor="user_name">Email:</label>
            <input id="registration-username-input" name="user_name" required />
          </div>
          <div className="InputBox">
            <label htmlFor="password">Choose a password</label>
            <input
              id="registration-password-input"
              name="password"
              type="password"
              required
            />
          </div>
          <div className="btnBox">
            <button type="submit" className="register-submit">
              Sign up
            </button>
            <Link to="/login">
              <p className="login-redirect">Already have an account?</p>
            </Link>
          </div>
        </form>
      </div>
    );
  }
}

export default RegisterForm;
