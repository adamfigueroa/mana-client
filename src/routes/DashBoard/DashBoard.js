import React, { Component } from 'react';
import DetailedDay from '../../components/DetailedDay/DetailedDay';
import Calendar from '../../components/Calendar/Calendar';
import './DashBoard.css';
import Logo from '../../images/mana-logo.png'

class DashBoard extends Component {
  render() {
    return (
      <section className="Dash-Board">
        <div className="dashBoardBox">
          <div className="calendar-left">
            <div className="dash-logo">
              <div className="mana-logo">
                <h2 className="mana-title">Mana</h2>
                <img
                  className="mana-img"
                  src={Logo}
                  alt="Wizard hat and wand icon"
                />
              </div>
              <div className="hamburger">
                <div className="burger-line"></div>
                <div className="burger-line"></div>
                <div className="burger-line"></div>
              </div>
            </div>
            <DetailedDay />
          </div>
          <div className="calendar-right">
            <Calendar />
        </div>
        </div>
      </section>
    );
  }
}
export default DashBoard;
