import React, { Component } from 'react';
import { connect } from 'react-redux'

import AppInfo from './app-info';
import Header from './header';
import SearchForm from './search-form';
import NavBar from './nav-bar';

class Dashboard extends Component {

  render() {
    return (
      <div className="dashboard">
            <Header />
            <NavBar />
            <SearchForm /><br/><br/><br/>
            <AppInfo />
      </div>
    );
  }
}

export default connect()(Dashboard)
