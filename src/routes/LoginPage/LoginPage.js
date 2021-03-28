import React, { Component } from 'react';
import LoginForm from '../../components/LoginForm/LoginForm';
import './LoginPage.css';

class LoginPage extends Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => {},
    },
  };

  handleLoginSuccess = () => {
    const { location, history } = this.props;
    const destination = (location.state || {}).from || '/dashboard';
    history.push(destination);
  };

  render() {
    return (
      <section className="Login-Page">
        <LoginForm onLoginSuccess={this.handleLoginSuccess} />
      </section>
    );
  }
}

export default LoginPage;
