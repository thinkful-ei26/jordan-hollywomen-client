import React, { Component } from 'react';
import { connect } from 'react-redux'

import AppInfo from './app-info';
import Header from './header';
import SearchForm from './search-form';

class Dashboard extends Component {

  render() {
    return (
      <div className="dashboard">
            <Header />
            <SearchForm /><br/><br/><br/>
            <AppInfo />
      </div>
    );
  }
}

export default connect()(Dashboard)
