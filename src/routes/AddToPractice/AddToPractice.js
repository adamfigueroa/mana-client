import { Component } from 'react';
import AppContext from '../../context/AppContext';
import PracticeApiService from '../../services/practice-api-service';
import DetailedDay from '../../components/DetailedDay/DetailedDay';

class AddToPractice extends Component {
  static contextType = AppContext;

  state = {
    sunday: false,
    monday: false,
    tuesday: false,
    wednesday: false,
    thursday: false,
    friday: false,
    saturday: false,
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
    // console.log(dayArray);

    this.setState({ error: null });

    PracticeApiService.addPractice({
      practice_name: practice_name_input.value,
      days_to_track: practice_days_input.value,
      days_left: practice_days_input.value,
      day_of_week: dayArray,
    })
      .then((practice) => {
        practice_name_input.value = '';
        practice_days_input.value = '';
        this.setState({
          sunday: false,
          monday: false,
          tuesday: false,
          wednesday: false,
          thursday: false,
          friday: false,
          saturday: false,
        });
      })
      .then(alert(`${practice_name_input.value} has been added`))
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
        <div className="dashBoardBox">
          <div className="calendar-left">
            <DetailedDay />
          </div>
          <div className="calendar-right">
            <div className="add-practice-box">
              <h2 className="practice-form-title">Add to your Practice</h2>
              <form
                className="add-practice-form"
                onSubmit={this.handlePracticeSubmit}
              >
                <div className="InputBox">
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
                <div className="InputBox">
                  <label htmlFor="practice_days_input">
                    How many days will you commit?
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
                        value="sunday"
                        checked={this.state.sunday}
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
                        value="monday"
                        checked={this.state.monday}
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
                        value="tuesday"
                        checked={this.state.tuesday}
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
                      <label htmlFor="practice_wednesday_input">
                        Wednesday
                      </label>
                      <input
                        className="day-of-week-checkbox"
                        name="practice_wednesday_input"
                        type="checkbox"
                        value="wednesday"
                        checked={this.state.wednesday}
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
                        value="thursday"
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
                        value="friday"
                        checked={this.state.friday}
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
                        value="saturday"
                        checked={this.state.saturday}
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
                  <button type="submit" className="submitBtn">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default AddToPractice;
