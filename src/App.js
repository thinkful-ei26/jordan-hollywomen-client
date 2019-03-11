import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux'
import './App.css';
import LandingPage from './components/landing';
import Dashboard from './components/dashboard';
import History from './components/history';
import AppInfo from './components/app-info'
import Favorites from './components/favorites';


class App extends Component {

  render() {
    return (
      <div className="App">
      <BrowserRouter>
          <div>
            <Route exact path="/" component={LandingPage}/>
            <Route exact path="/dashboard" component={Dashboard}/>
            <Route path="/about" component={AppInfo}/>
            <Route path="/userhistory" component={History}/>
            <Route path="/userfavorites" component={Favorites}/>
          </div>
      </BrowserRouter>
      </div>
    );
  }
}

export default connect()(App)
