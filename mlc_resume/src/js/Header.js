import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import '../css/Animation.css';
import '../css/Buttons.css';
import '../css/Fade.css';
import '../css/Header.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faInfo } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faAddressCard } from '@fortawesome/free-solid-svg-icons';


library.add(faBars);
library.add(faInfo);
library.add(faEnvelope);
library.add(faAddressCard);

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

    constructor (props) {
        super(props);

        this.state = { menuSlideout: false };
        this.state = { pageState: "Home" };
    }

    getPageState = () => {
        return this.state.pageState;
    }

    componentWillMount () {
        this.setState(  { menuSlideout: true } );
        this.setState(  { leftContent: "Matthew Cline's Resume" } );
    }

    componentDidMount () {
        setTimeout( function() {
            ReactDOM.render(<Name />, document.getElementById('HeaderBackground'));
        }, 500);

        setTimeout( function () {
            ReactDOM.render(<ScrollDown />, document.getElementById('HeaderScrollDown'));
        }, 5000);

        this.props.getPageState( this.state.pageState );
    }

    handleClick  = e => {

        this.setState({ menuSlideout: !this.state.menuSlideout });

        var HeaderMenuBtn   = document.getElementById("HeaderMenuBtn");
        var HeaderAbout     = document.getElementById("HeaderAbout");
        var HeaderResume    = document.getElementById("HeaderResume");
        var HeaderContact   = document.getElementById("HeaderContact");

        if( this.state.menuSlideout ) {
            HeaderMenuBtn.classList.add("HeaderMenuActive");
            HeaderAbout.classList.add("HeaderAboutKeySlideOut");
            HeaderResume.classList.add("HeaderResumeKeySlideOut");
            HeaderContact.classList.add("HeaderContactKeySlideOut");
        }
        else {
            HeaderMenuBtn.classList.remove("HeaderMenuActive");
            HeaderAbout.classList.remove("HeaderAboutKeySlideOut");
            HeaderResume.classList.remove("HeaderResumeKeySlideOut");
            HeaderContact.classList.remove("HeaderContactKeySlideOut");
        }
    }

    handlePageChange = (e) => {

        var state = e.target.id;
        state = state.replace("Header", "");

        console.log(state);

        this.setState({ pageState: state });

        this.props.getPageState( state );

        this.handleClick();
    }

    render() {
        return (
            <div className="Header fade-in">
                <div id="HeaderLeftContent">{this.state.leftContent}</div>
                <div id="HeaderRightContent">
                    <div id="HeaderMenuBtn"  className="HeaderMenuBtn" onClick={this.handleClick}></div>

                    <div id="HeaderContact" data-tip="Contact" className="HeaderMenuBtn" onClick={this.handlePageChange}>
                        <FontAwesomeIcon className="HeaderContactIcon" icon="envelope"></FontAwesomeIcon>
                    </div>
                    <div id="HeaderResume" data-tip="Resume" className="HeaderMenuBtn" onClick={this.handlePageChange}>
                        <FontAwesomeIcon className="HeaderResumeIcon" icon="address-card"></FontAwesomeIcon>
                    </div>
                    <div id="HeaderAbout" data-tip="About" className="HeaderMenuBtn HeaderAboutSlideOut" onClick={this.handlePageChange}>
                        <FontAwesomeIcon className="HeaderAboutIcon"  icon="info"></FontAwesomeIcon>
                    </div>
                    <FontAwesomeIcon id="hamburger" icon="bars" />
                </div>
                <div id="HeaderBackground" className="HeaderBackground"></div>
                <div id="HeaderScrollDown"></div>
            </div>
        );
    }
}
