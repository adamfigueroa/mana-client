import React, { Component } from 'react';
import './DetailedDay.css';

class DetailedDay extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="dayBox">
          <p className="num-date">27</p>
          <p className="day">THURSDAY</p>
          <p className="wake-up">Wake up Time: 7:00 AM</p>
        </div>
        <div className="todays-practice">
          <p className="todays-practice-title">Todays Mana Practice:</p>
          <form className="check-list-goals">
            <div className="goal-box">
              <label htmlFor="eventCheckbox">Meditate</label>
              <input type="checkbox" name="eventCheckbox" />
            </div>
            <div className="goal-box">
              <label htmlFor="eventCheckbox">Breathwork</label>
              <input type="checkbox" name="eventCheckbox" />
            </div>
            <div className="goal-box">
              <label htmlFor="eventCheckbox">Journal</label>
              <input type="checkbox" name="eventCheckbox" />
            </div>
            <button className="create-event">Add to your practice</button>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default DetailedDay;
