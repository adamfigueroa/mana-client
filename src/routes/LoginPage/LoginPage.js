import React, { Component } from 'react';
import LoginForm from '../../components/LoginForm/LoginForm';
import './LoginPage.css';

class LoginPage extends Component {
  handleLoginSuccess = () => {
    this.props.history.push('dashboard');
  };

  render() {
    return (
      <section className="Login-Page">
        <LoginForm handleLoginSuccess={this.handleLoginSuccess} />
      </section>
    );
  }
}

export default LoginPage;
