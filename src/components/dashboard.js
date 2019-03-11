import React, { Component } from 'react';
import { connect } from 'react-redux'
import './dashboard.css';
import Header from './header';
import SearchForm from './search-form';
import NavBar from './nav-bar';

class Dashboard extends Component {

  render() {
    return (
      <div className="dashboard">
            <Header />
            <NavBar />
            <SearchForm />
      </div>
    );
  }
}

export default connect()(Dashboard)
