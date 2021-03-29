import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import PublicRoute from './utilities/PublicRoute';
import PrivateRoute from './utilities/PrivateRoute';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HomePage from './routes/HomePage/HomePage';
import LoginPage from './routes/LoginPage/LoginPage';
import DashBoard from './routes/DashBoard/DashBoard';
import AddToPractice from './routes/AddToPractice/AddToPractice';
import './App.css';
import { AppProvider } from './context/AppContext';

class App extends Component {
  state = { hasError: false };

  static getDerivedStateFromError(error) {
    console.error(error);
    return { hasError: true };
  }

  render() {
    const { hasError } = this.state;
    return (
      <main className="App">
        {hasError && <p>There was an error! Oh no!</p>}
        <Route path="/" component={Header} />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <PublicRoute path="/login" exact component={LoginPage} />
          <AppProvider>
            <PrivateRoute path="/dashboard" exact component={DashBoard} />
            <PrivateRoute
              path="/addtopractice"
              exact
              component={AddToPractice}
            />
          </AppProvider>
        </Switch>
        <Route path="/" component={Footer} />
      </main>
    );
  }
}

export default App;
