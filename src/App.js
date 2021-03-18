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

class App extends Component {
  render() {
    return (
      <main className="App">
        <Route path="/" component={Header} />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <PublicRoute path="/login" exact component={LoginPage} />
          <PrivateRoute path="/dashboard" exact component={DashBoard} />
          <PrivateRoute path="/addtopractice" exact component={AddToPractice} />
        </Switch>
        <Route path="/" component={Footer} />
      </main>
    );
  }
}

export default App;
