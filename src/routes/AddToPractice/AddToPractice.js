import { Component } from 'react';
import AppContext from '../../context/AppContext';
import PracticeApiService from '../../services/practice-api-service';
import './AddToPractice.css';

class AddToPractice extends Component {
  static contextType = AppContext;

  static defaultProps = {
    location: {},
    history: {
      push: () => {},
    },
  };

  state = {
    Sunday: false,
    Monday: false,
    Tuesday: false,
    Wednesday: false,
    Thursday: false,
    Friday: false,
    Saturday: false,
  };

  handleAddSuccess = () => {
    const { location, history } = this.props;
    const destination = (location.state || {}).from || '/dashboard';
    this.context.setUpdating(true);
    this.setState({
      Sunday: false,
      Monday: false,
      Tuesday: false,
      Wednesday: false,
      Thursday: false,
      Friday: false,
      Saturday: false,
    });
    history.push(destination);
  };

  createDayArray = () => {
    let tempState = { ...this.state };
    let trueKeys = Object.keys(tempState).filter((key) => tempState[key]);
    return trueKeys;
  };

  handlePracticeSubmit = (e) => {
    e.preventDefault();
    const { practice_name_input, practice_days_input } = e.target;

    let dayArray = this.createDayArray();

    this.setState({ error: null });

    PracticeApiService.addPractice({
      practice_name: practice_name_input.value,
      days_to_track: practice_days_input.value,
      day_of_week: dayArray,
    })
      .then((practice) => {
        this.context.setPractice([...this.context.practices, practice]);
      })
      .then(this.handleAddSuccess())
      .catch((res) => {
        this.setState({ error: res });
      });
  };

  toggleDay = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      <section className="add-practice-page">
        <div className="add-practice-box">
          <h2 className="practice-form-title">Add to your Practice</h2>
          <form
            className="add-practice-form"
            onSubmit={this.handlePracticeSubmit}
          >
            <div className="input-box">
              <label htmlFor="practice_name_input">
                What will you call your new goal?
              </label>
              <input
                type="text"
                id="practice-name-input"
                name="practice_name_input"
                required
                placeholder="Ex. meditate"
              />
            </div>
            <div className="input-box">
              <label htmlFor="practice_days_input">
                How many successful days do you want to track?
              </label>
              <input
                id="practice-days-input"
                name="practice_days_input"
                type="text"
                required
              />
            </div>
            <div className="choose-day-box">
              <h4>What day(s) of the week will your practice occur?</h4>
              <div className="choose-day">
                <div className="day-checkbox">
                  <label htmlFor="practice_sunday_input">Sunday</label>
                  <input
                    className="day-of-week-checkbox"
                    name="practice_sunday_input"
                    type="checkbox"
                    value="Sunday"
                    checked={this.state.Sunday}
                    onChange={(e) => {
                      this.toggleDay({
                        target: {
                          name: e.target.value,
                          value: e.target.checked,
                        },
                      });
                    }}
                  />
                </div>
                <div className="day-checkbox">
                  <label htmlFor="practice_monday_input">Monday</label>
                  <input
                    className="day-of-week-checkbox"
                    name="practice_monday_input"
                    type="checkbox"
                    value="Monday"
                    checked={this.state.Monday}
                    onChange={(e) => {
                      this.toggleDay({
                        target: {
                          name: e.target.value,
                          value: e.target.checked,
                        },
                      });
                    }}
                  />
                </div>
                <div className="day-checkbox">
                  <label htmlFor="practice_tuesday_input">Tuesday</label>
                  <input
                    className="day-of-week-checkbox"
                    name="practice_tuesday_input"
                    type="checkbox"
                    value="Tuesday"
                    checked={this.state.Tuesday}
                    onChange={(e) => {
                      this.toggleDay({
                        target: {
                          name: e.target.value,
                          value: e.target.checked,
                        },
                      });
                    }}
                  />
                </div>
                <div className="day-checkbox">
                  <label htmlFor="practice_wednesday_input">Wednesday</label>
                  <input
                    className="day-of-week-checkbox"
                    name="practice_wednesday_input"
                    type="checkbox"
                    value="Wednesday"
                    checked={this.state.Wednesday}
                    onChange={(e) => {
                      this.toggleDay({
                        target: {
                          name: e.target.value,
                          value: e.target.checked,
                        },
                      });
                    }}
                  />
                </div>
                <div className="day-checkbox">
                  <label htmlFor="practice_thursday_input">Thursday</label>
                  <input
                    className="day-of-week-checkbox"
                    name="practice_thursday_input"
                    type="checkbox"
                    value="Thursday"
                    checked={this.state.thursday}
                    onChange={(e) => {
                      this.toggleDay({
                        target: {
                          name: e.target.value,
                          value: e.target.checked,
                        },
                      });
                    }}
                  />
                </div>
                <div className="day-checkbox">
                  <label htmlFor="practice_friday_input">Friday</label>
                  <input
                    className="day-of-week-checkbox"
                    name="practice_friday_input"
                    type="checkbox"
                    value="Friday"
                    checked={this.state.Friday}
                    onChange={(e) => {
                      this.toggleDay({
                        target: {
                          name: e.target.value,
                          value: e.target.checked,
                        },
                      });
                    }}
                  />
                </div>
                <div className="day-checkbox">
                  <label htmlFor="practice_saturday_input">Saturday</label>
                  <input
                    className="day-of-week-checkbox"
                    name="practice_saturday_input"
                    type="checkbox"
                    value="Saturday"
                    checked={this.state.Saturday}
                    onChange={(e) => {
                      this.toggleDay({
                        target: {
                          name: e.target.value,
                          value: e.target.checked,
                        },
                      });
                    }}
                  />
                </div>
              </div>
              <button type="submit" className="submit-button">
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>
    );
  }
}

export default AddToPractice;
