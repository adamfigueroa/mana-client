import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AuthApiService from '../../services/auth-api-service';

class RegisterForm extends Component {
  state = { error: null };

  firstInput = React.createRef();

  handleRegister = (e) => {
    e.preventDefault();
    const { first_name, last_name, user_name, password } = e.target;

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
        this.setState({ error: res.error });
      });
  };

  render() {
    const { error } = this.state;
    return (
      <div className="register-form-box">
        <form className="register-form" onSubmit={this.handleRegister}>
          <h4 className="register-title">Sign-up below!</h4>
          <div role="alert">{error && <p className="alert-text">{error}</p>}</div>
          <div className="input-box">
            <label htmlFor="first_name">First name:</label>
            <input id="first_name" name="first_name" required />
          </div>
          <div className="input-box">
            <label htmlFor="last_name">Last name:</label>
            <input id="last_name" name="last_name" required />
          </div>
          <div className="input-box">
            <label htmlFor="user_name">Email:</label>
            <input id="user_name" name="user_name" required />
          </div>
          <div className="input-box">
            <label htmlFor="password">Choose a password</label>
            <input
              id="password"
              name="password"
              type="password"
              required
            />
          </div>
          <div className="button-box">
            <button type="submit" className="register-button">
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
