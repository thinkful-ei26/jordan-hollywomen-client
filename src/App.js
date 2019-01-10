import React, { Component } from 'react';
// import './App.css';

import AppInfo from './components/app-info';
import Header from './components/header';
import SearchForm from './components/search-form';

// import { connect } from 'react-redux';


export default class App extends Component {

  render() {
    return (
      <div className="App">
        <Header />
        <SearchForm />
        <br/><br/><br/>
        <AppInfo />
      </div>
    );
  }
}

// const mapStateToProps = (state) => {
//   // console.log(state)
//   return {
    
//   }
// }

// export default connect(mapStateToProps)(App);
