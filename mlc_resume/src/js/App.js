import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Log from './Log';
import '../css/App.css';



export default class App extends Component {

  componentDidMount() {

    if (process.env.NODE_ENV !== 'production') {
      localStorage.setItem('debug', 'awesome-react-app:*');
      Log.DEBUG_ENABLED = true;
      Log.info("Dev Mode Detected. Logging Enabled", 'App Component');
    }

    document.addEventListener("DOMContentLoaded", function(event) {
      //Load up the various modules
      ReactDOM.render(<Header />, document.getElementById('App'));
    });
  }
  render() {
    return (
      <div id="App" className="App">
      </div>
    );
  }
}
