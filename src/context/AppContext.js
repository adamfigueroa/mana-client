import React, { Component } from 'react';
import PracticeApiService from '../services/practice-api-service';
import SessionApiService from '../services/session-api-service';

const AppContext = React.createContext({
  practices: [],
  setPractice: () => {},
  sessions: [],
  setSessions: () => {},
  error: null,
  setError: () => {},
  weekday: null,
  setWeekday: () => {},
  updating: false,
  setUpdating: () => {},
});

AppContext.displayName = 'AppContext';

export default AppContext;

export class AppProvider extends Component {
  state = {
    practices: [],
    sessions: [],
    error: null,
    weekday: null,
    updating: false,
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

  setSession = (sessions) => {
    this.setState({ sessions });
  };

  setUpdating = (bool) => {
    this.setState({ updating: bool });
  };

  setWeekday = () => {
    let wd = { weekday: 'long' };
    let today = new Date();
    let dayOfWeek = new Intl.DateTimeFormat('en-US', wd).format(today);
    this.setState({
      weekday: dayOfWeek,
    });
  };

  componentDidMount() {
    if (this.state.weekday === null) {
      this.setWeekday();
    }

    PracticeApiService.fetchUserPractice()
      .then((practices) => {
        this.setPractice(practices);
        if (practices.length < 1) {
          this.setState({ empty: true });
        } else {
          this.setState({
            empty: false,
          });
        }
      })
      .catch((error) => {
        this.setState({ error });
      });

    SessionApiService.fetchUserSession()
      .then((sessions) => {
        this.setSession(sessions);
      })
      .catch((error) => {
        this.setState({ error });
      });
  }

  render() {
    const value = {
      practices: this.state.practices,
      setPractice: this.setPractice,
      sessions: this.state.sessions,
      setSession: this.setSession,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      weekday: this.state.weekday,
      setWeekday: this.setWeekday,
      updating: this.state.updating,
      setUpdating: this.setUpdating,
    };
    return (
      <AppContext.Provider value={value}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}
