import moment from 'moment';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../../context/AppContext';
import './DetailedDay.css';

class DetailedDay extends Component {
  static contextType = AppContext;

  state = {
    error: false,
    sort: '',
  };

  getTimeDifference(date_start, days_to_track) {
    const endDate = moment(date_start).add(days_to_track, 'days');
    const time = Date.parse(endDate._d) - Date.parse(new Date());
    return Math.floor(time / (1000 * 60 * 60 * 24));
  }
  loadPractices = () => {
    const userPractices = this.context.practices.map((practice) => {
      let daysLeft = this.getTimeDifference(practice.date_start, practice.days_to_track)
      return (
        <div
          className="practice-box"
          id={practice.id}
          key={parseInt(Date.now() * Math.random())}
        >
          <Link
            key={parseInt(Date.now() * Math.random())}
            to={`/practice/${practice.id}`}
          >
            <label
              htmlFor="event-checkbox"
              key={parseInt(Date.now() * Math.random())}
            >
              {practice.practice_name}
            </label>
          </Link>
          <p className="day-tracker" key={parseInt(Date.now() * Math.random())}>
            {daysLeft} days left
          </p>
          <input
            type="checkbox"
            name="event-checkbox"
            key={parseInt(Date.now() * Math.random())}
          />
        </div>
      );
    });
    if (userPractices.length === 0) {
      return (
        <div className="no-practice-box">Create a new practice below!</div>
      );
    } else return userPractices;
  };
  render() {
    let weekday = { weekday: 'long' };
    let dayNum = { day: 'numeric' };
    return (
      <React.Fragment>
        <div className="day-box">
          <p className="num-date">
            {new Intl.DateTimeFormat('en-US', dayNum).format(
              this.props.todaysDate
            )}
          </p>
          <p className="day">
            {new Intl.DateTimeFormat('en-US', weekday).format(
              this.props.todaysDate
            )}
          </p>
        </div>
        <div className="todays-practice">
          <p className="todays-practice-title">Todays Mana Practice:</p>
          <form className="check-list-goals">
            {this.loadPractices()}
            <Link to="/addtopractice">
              <button className="create-event">Add to your practice</button>
            </Link>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default DetailedDay;
