import React, { Component } from 'react';
// import './App.css';

import AppInfo from './components/app-info';
import Header from './components/header';
import SearchForm from './components/search-form';

import { fetchTvInfo  } from './actions/tv-info';
import { fetchMovieInfo  } from './actions/movie-info';
import { connect } from 'react-redux';


class App extends Component {
  componentDidMount(){
    this.props.dispatch(fetchTvInfo())
    this.props.dispatch(fetchMovieInfo())
  };
  render() {
    return (
      <div className="App">
        <Header />
        <SearchForm />
        <AppInfo />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    
  }
}

export default connect(mapStateToProps)(App);
