import React, { Component } from 'react';
// import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
         <h1>HollyWomen</h1>
        </header>
        <form className="search-title">
         <input type="text" placeholder="--Enter A Title Here--"/>
         <button type="submit">submit</button>
        </form>
      </div>
    );
  }
}

export default App;
