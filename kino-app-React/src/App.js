import React, { Component } from 'react';
import Menu from './components/Menu';
import MovieLibrary from './components/MovieLibrary';
import './App.css';



class App extends Component {

  render() {
    return (
      <div className="App">
       <Menu/>
       <MovieLibrary/>
      </div>
    );
  }
}

export default App;
