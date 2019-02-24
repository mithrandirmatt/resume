import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import '../css/Animation.css';
import '../css/Fade.css';
import '../css/Header.css';


var createReactClass = require('create-react-class');


var Name = createReactClass( {

    componentWillMount () {
        this.setState(  { value: "" } );
    },
    componentDidMount () {
        this.setState( { value: "Take a look around..." } );
    },
    render () {
        return (
            <div className="HeaderName animationSlideUp">{this.state.value}</div>
        )
    }
});

var ScrollDown = createReactClass( {
    render () {
        return (
            <div className="ScrollDownContainer fade-in">
                <div className="ScrollDownChevron"></div>
                <div className="ScrollDownChevron"></div>
                <div className="ScrollDownChevron"></div>
                <span className="ScrollDownText">Scroll down</span>
            </div>
        )
    }
});


export default class Header extends Component {

    componentWillMount () {
        this.setState(  { leftContent: "Matthew\nCline's\nResume" } );
    }

    componentDidMount () {
        setTimeout( function() {
            ReactDOM.render(<Name />, document.getElementById('HeaderBackground'));
        }, 500);

        setTimeout( function () {
            ReactDOM.render(<ScrollDown />, document.getElementById('HeaderScrollDown'));
        }, 5000);
    }

    render() {
        return (
            <div className="Header fade-in">
                <div id="HeaderLeftContent">{this.state.leftContent}</div>
                <div id="HeaderRightContent"></div>
                <div id="HeaderBackground" className="HeaderBackground"></div>
                <div id="HeaderScrollDown"></div>
            </div>
        );
    }
}
