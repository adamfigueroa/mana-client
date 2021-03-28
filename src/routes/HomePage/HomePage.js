import React, { Component } from 'react';
import RegisterForm from '../../components/RegisterForm/RegisterForm';
import './HomePage.css';

class HomePage extends Component {
  registerRedirect = () => {
    this.props.history.push('/login');
  };

  render() {
    return (
      <section className="Landing-Page">
        <div className="landingTextBox">
          <h3 id="landingTextTitle" className="animate__animated animate__fadeInLeft">Landing Page Title</h3>
          <p className="landingText">
            Are you sure this isn't her sister? Mrs Veal: What a lovely thing to
            say. Michael: That's an awful thing to say. Oh, yeah, the guy in the
            the $4,000 suit is holding the elevator for a guy who doesn't make
            that in three months. Come on! No, I was ashamed to be SEEN with
            you. I like being with you. That coat costs more than your house!
          </p>
          <p className="landingText">
            If mother sees this, she will blow a cow. Oh please. They didn't
            sneak into this country to be your friends. It's Sunday, but screw
            it — juice box time. Wow, this is the best free scrapbooking
            className I've ever taken! ps This one really cracks me up for some
            reason.
          </p>
          <p className="landingText">
            I believe you will find the dessert to be both engrossing and
            high-grossing! So we don't get dessert? It's a jetpack, Michael.
            What could go wrong? It's ok. You be with Yam. What's next, Michael?
            Are you going to make dancing illegal? Is this the tiny town from
            Footloose? O-kay, who'd like a banger in the mouth?
          </p>
        </div>
        <RegisterForm registerRedirect={this.registerRedirect} />
      </section>
    );
  }
}

export default HomePage;
