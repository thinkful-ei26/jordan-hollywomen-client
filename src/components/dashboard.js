import React, { Component } from 'react';
import { connect } from 'react-redux'

import AppInfo from './app-info';
import Header from './header';
import NavBar from './nav-bar';
// import { DynamicDisplay } from './dynamic-display';
import DynamicFeedback from './dynamic-feedback';

class Dashboard extends Component {

  render() {
    return (
      <div className="dashboard">
            <NavBar />
            <Header />
            <DynamicFeedback /><br/><br/><br/>
            <AppInfo />
      </div>
    );
  }
}

export default connect()(Dashboard)
