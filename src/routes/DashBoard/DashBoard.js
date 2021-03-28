import React, { Component } from 'react';
import DetailedDay from '../../components/DetailedDay/DetailedDay';
import MyCalendar from '../../components/Calendar/Calendar';
import './DashBoard.css';

class DashBoard extends Component {
  state = {
    today: [],
    selectedDay: [],
    dayNumber: [],
  };

  componentDidMount() {
    this.setState({
      today: new Date(),
    });
  }

  handleCalendarCallback = (value) => {
    this.setState({
      selectedDay: value,
      dayNumber: value.getDate(),
    });
  };

  render() {
    return (
      <section className="Dash-Board">
        <div className="dashBoardBox">
          <div className="calendar-left">
            <DetailedDay
              todaysDate={this.state.today}
              selectedDay={this.state.selectedDay}
              dayNumber={this.dayNumber}
            />
          </div>
          <div className="calendar-right">
            <MyCalendar
              todaysDate={this.state.today}
              handleCalendarCallback={this.handleCalendarCallback}
            />
          </div>
        </div>
      </section>
    );
  }
}
export default DashBoard;
