import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../../context/AppContext';
import PracticeApiService from '../../services/practice-api-service';
import './DetailedDay.css';

class DetailedDay extends Component {
  static contextType = AppContext;

  state = {
    error: false,
    sort: '',
  };

  componentDidMount() {
    this.setState({ loading: true });
    PracticeApiService.fetchUserPractice()
      .then((practices) => {
        this.context.setPractice(practices);
        if (practices.length < 1) {
          this.setState({ empty: true });
        } else {
          this.setState({ empty: false });
        }
      })
      .catch((error) => {
        this.setState({ error });
      });
  }

  // renderDayNumber() {
  //   // debugger
  //   let weekday = { weekday: 'long' };
  //   let dayNum = { day: 'numeric' }
  //   if (this.props.selectedDay.length === 0) {
  //     return (
  //       <div className="day-box">
  //         <p className="num-date">{new Intl.DateTimeFormat('en-US', dayNum).format(
  //             this.props.todaysDate
  //           )}</p>
  //         <p className="day">
  //           {new Intl.DateTimeFormat('en-US', weekday).format(
  //             this.props.todaysDate
  //           )}
  //         </p>
  //       </div>
  //     );
  //   } else
  //     return (
  //       <div className="day-box">
  //         <p className="num-date">{new Intl.DateTimeFormat('en-US', dayNum).format(
  //             this.props.selectedDay
  //           )}</p>
  //         <p className="day">
  //           {new Intl.DateTimeFormat('en-US', weekday).format(
  //             this.props.selectedDay
  //           )}
  //         </p>
  //       </div>
  //     );
  // }

  loadPractices = () => {
    const userPractices = this.context.practices.map((practice) => {
      return (
        <Link key={practice.id + 3} to={`/practice/${practice.id}`}>
          <div className="practice-box" id={practice.id} key={practice.id}>
            <label htmlFor="event-checkbox" key={practice.id + 1}>
              {practice.practice_name}
            </label>
            <input
              type="checkbox"
              name="event-checkbox"
              key={practice.id + 2}
            />
          </div>
        </Link>
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
