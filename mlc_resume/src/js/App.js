import React, { Component } from 'react';
import Header from './Header';
import NavBar from './NavBar';
import Log from './Log';
import '../css/App.css';



export default class App extends Component {

    constructor (props) {
        super(props);

        this.state = { pageState : "Home" };
    }

  componentDidMount() {

        if (process.env.NODE_ENV !== 'production') {
            localStorage.setItem('debug', 'awesome-react-app:*');
            Log.DEBUG_ENABLED = true;
            Log.info("Dev Mode Detected. Logging Enabled", 'App Component');
        }

        document.addEventListener("DOMContentLoaded", function () {

        });
    }

    getPageState = (ps) => {
        console.log(ps);

        this.setState( { pageState: ps })
    }

    render() {
        return (
            <div id="App" className="App">
                <Header getPageState={this.getPageState} id="AppHeader"></Header>
                <div id="AppBody"></div>
                <div id="AppNavBar"></div>
                <NavBar pageState={this.state.pageState} id="AppFooter"></NavBar>
            </div>
        );
    }
}
