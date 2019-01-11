import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux'
// import './App.css';
import Dashboard from './components/dashboard';
import History from './components/history'

class App extends Component {

  render() {
    return (
      <div className="App">
      <BrowserRouter>
          <div>
            <Route exact path="/" component={Dashboard}/>
            <Route path="/userhistory" component={History}/>
          </div>
      </BrowserRouter>
      </div>
    );
  }
}

export default connect()(App)
