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
    checkbox_count: 0,
  };

  getTimeDifference(date_start, days_to_track) {
    const endDate = moment(date_start).add(days_to_track, 'days');
    const time = Date.parse(endDate._d) - Date.parse(new Date());
    return Math.floor(time / (1000 * 60 * 60 * 24));
  }

  handleCheckBox = (e) => {
    // debugger
    this.setState({
      [e.target.name]: e.target.value,
    });

    let currVal = this.state.checkbox_count;
    if (this.state[e.target.name] === true) {
      this.setState({
        [e.target.name]: false,
        checkbox_count: currVal - 1,
      });
    } else {
      this.setState({
        [e.target.name]: true,
        checkbox_count: currVal + 1,
      });
    }
  };

  loadPractices = () => {
    const userPractices = this.context.practices.map((practice) => {
      let daysLeft = this.getTimeDifference(
        practice.date_start,
        practice.days_to_track
      );
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
            name={practice.id}
            checked={this.state[practice.id]}
            onChange={(e) => {
              this.handleCheckBox({
                target: {
                  name: e.target.name,
                  value: e.target.checked,
                },
              });
            }}
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
    let month = { month: 'long' };
    return (
      <React.Fragment>
        <div className="day-box">
          <h4 className="month">
            {new Intl.DateTimeFormat('en-US', month).format(
              this.props.todaysDate
            )}
          </h4>
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
