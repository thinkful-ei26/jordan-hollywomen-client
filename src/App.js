import React, { Component } from 'react';
// import './App.css';

import AppInfo from './components/appInfo';
import Header from './components/header';
import TvShow from './components/tv-show'
import Movie from './components/movie';

import { fetchTvInfo  } from './actions/tvData';
import { fetchMovieInfo  } from './actions/movieData';
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
         <AppInfo />
         <TvShow />
         <Movie />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  // console.log(state)
  return {
    
  }
}

export default connect(mapStateToProps)(App);
