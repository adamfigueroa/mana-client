import React, { Component } from 'react';
import DetailedDay from '../../components/DetailedDay/DetailedDay';
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
  render() {
    return (
      <section className="Dash-Board">
        <div className="dashBoardBox">
          <DetailedDay
            todaysDate={this.state.today}
            selectedDay={this.state.selectedDay}
            dayNumber={this.dayNumber}
          />
        </div>
      </section>
    );
  }
}
export default DashBoard;
