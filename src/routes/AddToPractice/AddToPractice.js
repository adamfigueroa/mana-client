import { Component } from 'react';
import DetailedDay from '../../components/DetailedDay/DetailedDay';

class AddToPractice extends Component {
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
              <form className="add-practice-form">
                <div className="InputBox">
                  <label htmlFor="practice-name-input">
                    What will you call your new goal?
                  </label>
                  <input
                    type="text"
                    id="practice-name-input"
                    name="practice-name-input"
                    required
                    placeholder="Ex. meditate"
                  />
                </div>
                <div className="InputBox">
                  <label htmlFor="practice-days-input">
                    How many days will you commit?
                  </label>
                  <input
                    id="practice-days-input"
                    name="practice-days-input"
                    type="text"
                    required
                  />
                </div>
                <div className="InputBox">
                  <label htmlFor="practice-minutes-input">
                    How much time will it take to accomplish?
                  </label>
                  <input
                    id="practice-minutes-input"
                    name="practice-minutes-input"
                    type="text"
                    required
                  />
                </div>
                <div className="choose-day-box">
                  <h4>What day(s) of the week will your practice occur?</h4>
                  <div className="choose-day">
                    <div className="day-checkbox">
                      <label htmlFor="practice-daily-input">Daily</label>
                      <input
                        id="practice-daily-input"
                        name="practice-daily-input"
                        type="checkbox"
                        value="daily"
                      />
                    </div>
                    <div className="day-checkbox">
                      <label htmlFor="practice-sunday-input">Sunday</label>
                      <input
                        id="practice-sunday-input"
                        name="practice-sunday-input"
                        type="checkbox"
                        value="sunday"
                      />
                    </div>
                    <div className="day-checkbox">
                      <label htmlFor="practice-monday-input">Monday</label>
                      <input
                        id="practice-monday-input"
                        name="practice-monday-input"
                        type="checkbox"
                        value="monday"
                      />
                    </div>
                    <div className="day-checkbox">
                      <label htmlFor="practice-tuesday-input">Tuesday</label>
                      <input
                        id="practice-tuesday-input"
                        name="practice-tuesday-input"
                        type="checkbox"
                        value="tuesday"
                      />
                    </div>
                    <div className="day-checkbox">
                      <label htmlFor="practice-wednesday-input">
                        Wednesday
                      </label>
                      <input
                        id="practice-wednesday-input"
                        name="practice-wednesday-input"
                        type="checkbox"
                        value="wednesday"
                      />
                    </div>
                    <div className="day-checkbox">
                      <label htmlFor="practice-thursday-input">Thursday</label>
                      <input
                        id="practice-thursday-input"
                        name="practice-thursday-input"
                        type="checkbox"
                        value="thursday"
                      />
                    </div>
                    <div className="day-checkbox">
                      <label htmlFor="practice-friday-input">Friday</label>
                      <input
                        id="practice-friday-input"
                        name="practice-friday-input"
                        type="checkbox"
                        value="friday"
                      />
                    </div>
                    <div className="day-checkbox">
                      <label htmlFor="practice-saturday-input">Saturday</label>
                      <input
                        id="practice-saturday-input"
                        name="practice-saturday-input"
                        type="checkbox"
                        value="saturday"
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
