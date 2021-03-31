import React, { Component } from 'react';
import PracticeApiService from '../services/practice-api-service';

const AppContext = React.createContext({
  practices: [],
  setPractice: () => {},
  error: null,
  setError: () => {},
  days_complete: [],
  setDaysComplete: () => {},
  days_incomplete: [],
  setDaysIncomplete: () => {},
});

AppContext.displayName = 'AppContext';

export default AppContext;

export class AppProvider extends Component {
  state = {
    practices: [],
    practice_amount: 0,
    error: null,
    days_complete: [],
    days_incomplete: [],
  };

  setError = (error) => {
    console.error(error);
    this.setState({ error });
  };

  clearError = () => {
    this.setState({ error: null });
  };

  setPractice = (practices) => {
    this.setState({ practices });
  };

  setDaysComplete = (days_complete) => {
    this.setState({ days_complete });
  };

  setDaysIncomplete = (days_incomplete) => {
    this.setState({ days_incomplete });
  };
  componentDidMount() {
    PracticeApiService.fetchUserPractice()
      .then((practices) => {
        this.setPractice(practices);
        if (practices.length < 1) {
          this.setState({ empty: true });
        } else {
          this.setState({
            empty: false,
            practice_amount: practices.length,
          });
        }
      })
      .catch((error) => {
        this.setState({ error });
      });
  }

  render() {
    const value = {
      practices: this.state.practices,
      setPractice: this.setPractice,
      practice_amount: this.state.practice_amount,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      days_complete: this.state.days_complete,
      setDaysComplete: this.setDaysComplete,
      days_incomplete: this.state.days_incomplete,
      setDaysIncomplete: this.setDaysIncomplete,
    };
    return (
      <AppContext.Provider value={value}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}
