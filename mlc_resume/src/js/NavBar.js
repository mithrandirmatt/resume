import React, { Component } from 'react';
import '../css/NavBar.css';
import Log from './Log';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faInfo } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faAddressCard } from '@fortawesome/free-solid-svg-icons';

library.add(faHome);
library.add(faInfo);
library.add(faEnvelope);
library.add(faAddressCard);


export default class NavBar extends Component {

    componentDidUpdate = ( prevProps, prevState ) => {

        let element;
        let elements;

        switch( this.props.pageState )
        {
            case "Home":
                element = document.getElementById( "NavBarHomeIcon");
                element.classList.add("NavBarIconSelected");
                break;

            case "Contact":
                element = document.getElementById( "NavBarContactIcon");
                element.classList.add("NavBarIconSelected");
                break;

            case "Resume":
                element = document.getElementById( "NavBarResumeIcon");
                element.classList.add("NavBarIconSelected");
                break;

            case "About":
                element = document.getElementById( "NavBarAboutIcon");
                element.classList.add("NavBarIconSelected");
                break;

            default: Log.info("Error: Unexpected page state detected:" + this.props.pageState, 'NavBar Component',  );
        }

        elements = [ "NavBarHomeIcon", "NavBarContactIcon", "NavBarResumeIcon", "NavBarAboutIcon" ];

        for ( var i = 0; i < elements.length; i++ )
        {
            if( elements[i].indexOf( this.props.pageState ) === -1 )
            {
                element = document.getElementById( elements[i] );
                element.classList.remove("NavBarIconSelected");
            }
        }
    }

    render() {
        return (
            <div id="NavBar" className="NavBar">
                <div className="NavBarHome">
                    <FontAwesomeIcon id="NavBarHomeIcon" className="NavBarIcon" icon="home"></FontAwesomeIcon>
                    <div className="NavBarText">Home</div>
                </div>
                <div className="NavBarContact">
                    <FontAwesomeIcon id="NavBarContactIcon" className="NavBarIcon" icon="envelope"></FontAwesomeIcon>
                    <div className="NavBarText">Contact</div>
                </div>
                <div className="NavBarResume">
                    <FontAwesomeIcon id="NavBarResumeIcon" className="NavBarIcon" icon="address-card"></FontAwesomeIcon>
                    <div className="NavBarText">Resume</div>
                </div>
                <div className="NavBarAbout">
                    <FontAwesomeIcon id="NavBarAboutIcon" className="NavBarIcon" icon="info"></FontAwesomeIcon>
                    <div className="NavBarText">About</div>
                </div>
            </div>
        );
    }
}
