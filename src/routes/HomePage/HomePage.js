import React, { Component } from 'react';
import RegisterForm from '../../components/RegisterForm/RegisterForm';
import './HomePage.css';

class HomePage extends Component {
  registerRedirect = () => {
    this.props.history.push('/login');
  };

  render() {
    return (
      <section className="landing-page">
        <div className="landing-text-box">
          <h3 className="landing-text-title">Create a new daily practice</h3>
          <p className="landing-text">
            Mana is an app that helps you create and track a daily practice.
          </p>
          <p className="landing-text">
            Want to accomplish 30 days of workouts? 14 days of meditation?
            Simply give your practice a name, choose how many successful days
            you want to track, what days of the week you want to do your
            practice on, and we will take care of the rest!
          </p>
        </div>
        <RegisterForm registerRedirect={this.registerRedirect} />
      </section>
    );
  }
}

export default HomePage;
