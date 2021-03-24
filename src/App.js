import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import PublicRoute from './utilities/PublicRoute';
import PrivateRoute from './utilities/PrivateRoute';
import AppContext from './context/AppContext';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HomePage from './routes/HomePage/HomePage';
import LoginPage from './routes/LoginPage/LoginPage';
import DashBoard from './routes/DashBoard/DashBoard';
import AddToPractice from './routes/AddToPractice/AddToPractice';
import './App.css';

class App extends Component {
  state = {
    practices: [],
    error: null,
    userLoggedIn: false,
  };

  setPractice = (practices) => {
    this.setState({ practices });
  };

  setError = (error) => {
    this.setState({ error });
  };

  render() {
    return (
      <main className="App">
        <AppContext.Provider
          value={{
            practices: this.state.practices,
            setPractice: this.setPractice,
          }}
        >
          <Route path="/" component={Header} />
          <Switch>
            <Route path="/" exact component={HomePage} />
            <PublicRoute path="/login" exact component={LoginPage} />
            <PrivateRoute path="/dashboard" exact component={DashBoard} />
            <PrivateRoute
              path="/addtopractice"
              exact
              component={AddToPractice}
            />
          </Switch>
        </AppContext.Provider>
        <Route path="/" component={Footer} />
      </main>
    );
  }
}

export default App;
