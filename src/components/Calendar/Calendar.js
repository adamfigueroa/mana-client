import React, { Component } from 'react';
import Calendar from 'react-calendar';
import './Calendar.css';

class MyCalendar extends Component {
  calendarCallback = (event) => {
    let temp = new Date(event)
    this.props.handleCalendarCallback(temp);
  }

  // this.props.handleCalendarCallback(value)
  render() {
    return (
      <React.Fragment>
        <Calendar className={['calendar-box']} onChange={this.calendarCallback} />
      </React.Fragment>
    );
  }
}

export default MyCalendar;
