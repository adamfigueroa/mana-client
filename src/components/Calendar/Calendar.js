import React, { Component } from 'react';
import './Calendar.css';

class Calendar extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="year-box">
          <div className="triangle-left"></div>
          <div className="year">2021</div>
          <div className="triangle-right"></div>
        </div>

        <div className="months">
          <span className="month-hover">Jan</span>
          <span className="month-hover">Feb</span>
          <strong className="month-color">Mar</strong>
          <span className="month-hover">Apr</span>
          <span className="month-hover">May</span>
          <span className="month-hover">Jun</span>
          <span className="month-hover">July</span>
          <span className="month-hover">Aug</span>
          <span className="month-hover">Sep</span>
          <span className="month-hover">Oct</span>
          <span className="month-hover">Nov</span>
          <span className="month-hover">Dec</span>
        </div>
        <hr className="month-line" />

        <div className="days">
          <p>SUN</p>
          <p>MON</p>
          <p>TUE</p>
          <p>WED</p>
          <p>THU</p>
          <p>FRI</p>
          <p>SAT</p>
        </div>

        <div className="num-dates">
          <div className="first-week">
            <p className="day-dot" style={{ color: '#808080' }}>
              28
            </p>
            <p className="day-dot">01</p>
            <p className="day-dot">02</p>
            <p className="day-dot">03</p>
            <p className="day-dot">04</p>
            <p className="day-dot">05</p>
            <p className="day-dot">06</p>
          </div>
          <div className="second-week">
            <p className="day-dot">07</p>
            <p className="day-dot">08</p>
            <p className="day-dot">09</p>
            <p className="day-dot">10</p>
            <p className="day-dot">11</p>
            <p className="day-dot">12</p>
            <p className="day-dot">13</p>
          </div>
          <div className="third-week">
            <p className="day-dot">14</p>
            <p className="day-dot">15</p>
            <p className="day-dot">16</p>
            <p className="day-dot">17</p>
            <p className="day-dot">18</p>
            <p className="day-dot">19</p>
            <p className="day-dot">20</p>
          </div>
          <div className="fourth-week">
            <p className="day-dot">21</p>
            <p className="day-dot">22</p>
            <p className="day-dot">23</p>
            <p className="day-dot">24</p>
            <p className="day-dot">25</p>
            <p className="day-dot">26</p>
            <strong className="day-dot">27</strong>
          </div>
          <div className="fifth-week">
            <p className="day-dot">28</p>
            <p className="day-dot">29</p>
            <p className="day-dot">30</p>
            <p className="day-dot">31</p>
            <p className="day-dot" style={{ color: '#808080' }}>
              01
            </p>
            <p className="day-dot" style={{ color: '#808080' }}>
              02
            </p>
            <p className="day-dot" style={{ color: '#808080' }}>
              03
            </p>
          </div>
          <div className="sixth-week">
            <p className="day-dot" style={{ color: '#808080' }}>
              04
            </p>
            <p className="day-dot" style={{ color: '#808080' }}>
              05
            </p>
            <p className="day-dot" style={{ color: '#808080' }}>
              06
            </p>
            <p className="day-dot" style={{ color: '#808080' }}>
              07
            </p>
            <p className="day-dot" style={{ color: '#808080' }}>
              08
            </p>
            <p className="day-dot" style={{ color: '#808080' }}>
              09
            </p>
            <p className="day-dot" style={{ color: '#808080' }}>
              10
            </p>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Calendar;
