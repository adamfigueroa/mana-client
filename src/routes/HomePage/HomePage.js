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
          <p className="landing-text">
          A daily practice is something that is cultivated over your lifetime so don't
          let missed days stop you from completing a goal! This app tracks only the 
          successful days for each individual practice. This ensures Once you've finished a 
          practice for the day, select the check box and it will be marked complete.
          </p>
        </div>
        <RegisterForm registerRedirect={this.registerRedirect} />
      </section>
    );
  }
}

export default HomePage;
