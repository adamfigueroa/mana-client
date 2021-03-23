import React, { Component } from 'react';
import DetailedDay from '../../components/DetailedDay/DetailedDay';
import MyCalendar from '../../components/Calendar/Calendar';
import './DashBoard.css';

class DashBoard extends Component {
  state = {
    today: [],
  }

  componentDidMount() {
    this.setState({
      today: new Date()
    })
  }
  
  render() {
    return (
      <section className="Dash-Board">
        <div className="dashBoardBox">
          <div className="calendar-left">
            <DetailedDay />
          </div>
          <div className="calendar-right">
            <MyCalendar />
          </div>
        </div>
      </section>
    );
  }
}
export default DashBoard;
