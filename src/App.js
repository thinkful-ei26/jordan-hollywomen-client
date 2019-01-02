import React, { Component } from 'react';
// import './App.css';

import AppInfo from './components/appInfo';
import Header from './components/header';
import TvSearchForm from './components/tv-search-form';
import TvShow from './components/tvShow'
import MovieSearchForm from './components/movie-search-form';
import Movie from './components/movie';

import { fetchTvInfo  } from './actions/tvData';
import { connect } from 'react-redux';


class App extends Component {
  componentDidMount(){
    this.props.dispatch(fetchTvInfo())
  };
  render() {
    return (
      <div className="App">
        <Header />
         <AppInfo />
         <TvShow />
         <Movie />
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
