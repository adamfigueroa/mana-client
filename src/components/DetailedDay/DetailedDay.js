import moment from 'moment';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../../context/AppContext';
import SessionApiService from '../../services/session-api-service';
import './DetailedDay.css';

class DetailedDay extends Component {
  static contextType = AppContext;

  state = {
    error: false,
    sort: '',
    sessions: [],
  };

  componentDidMount() {
    SessionApiService.fetchUserSession()
      .then((sessions) => {
        this.setState({ sessions: [...sessions] });
      })
      .then(() => {
        this.checkSessionComplete();
      });
  }

  getDaysLeft(id, days_to_track) {
    let sessionArray = this.state.sessions;
    let result = sessionArray.filter((session) => session.practice_id === id);
    return days_to_track - result.length;
  }

  checkSessionComplete = () => {
    let seshArray = this.state.sessions;
    for (let i = 0; i < seshArray.length; i++) {
      let today = moment(new Date()).format('MM DD YY');
      let temp = moment(seshArray[i].date).format('MM DD YY');
      if (today === temp) {
        this.setState({
          [seshArray[i].practice_id]: true,
        });
      }
    }
  };

  handleCheckBox = (e) => {
    if (this.state[e.target.name] === undefined) {
      SessionApiService.addSession({
        date: this.props.todaysDate.toISOString(),
        practice_id: e.target.practice_id,
      });
    }
    this.setState({
      [e.target.name]: true,
    });
  };

  loadPractices = () => {
    const userPractices = this.context.practices.map((practice) => {
      let daysLeft = this.getDaysLeft(practice.id, practice.days_to_track);
      if (daysLeft > 0 && practice.day_of_week.includes(this.context.weekday)) {
        return (
          <div
            className="practice-box"
            id={practice.id}
            key={parseInt(Date.now() * Math.random())}
          >
            <label
              htmlFor="event-checkbox"
              key={parseInt(Date.now() * Math.random())}
            >
              {practice.practice_name}
            </label>
            <p
              className="day-tracker"
              key={parseInt(Date.now() * Math.random())}
            >
              {daysLeft} days left
            </p>
            {this.state[practice.id] ? (
              <p className="complete-box">Complete!</p>
            ) : (
              <input
                type="checkbox"
                className="checkbox-style"
                name={practice.id}
                checked={this.state[practice.id]}
                onChange={(e) => {
                  this.handleCheckBox({
                    target: {
                      name: e.target.name,
                      value: e.target.checked,
                      practice_id: practice.id,
                    },
                  });
                }}
                key={parseInt(Date.now() * Math.random())}
              />
            )}
          </div>
        );
      }
    });
    if (userPractices.length === 0) {
      return (
        <div className="no-practice-box">
          No scheduled practices today, create a new practice below!
        </div>
      );
    } else return userPractices;
  };
  render() {
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
          <p className="day">{this.context.weekday}</p>
        </div>
        <div className="todays-practice">
          <p className="todays-practice-title">Todays Mana Practice:</p>
          <div className="column-label">
            <p>Practice Name</p>
            <p>Progress</p>
            <p>Checkbox</p>
          </div>
          <form className="check-list-goals">
            {this.loadPractices()}
            <Link to="/addtopractice">
              <p className="create-event">Add to your practice</p>
            </Link>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default DetailedDay;
