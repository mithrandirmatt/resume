import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Log from './Log';
import ContentHome from './ContentHome'

import '../css/Body.css';



export default class Body extends Component {

    constructor (props) {
        super(props);

        this.state = { pageState : "Home" };
    }

    componentDidUpdate = ( prevProps, prevState ) => {

        switch( prevProps.pageState )
        {
            case "Home":
                ReactDOM.render(<ContentHome />, document.getElementById('Body'));
                break;

            default:
                Log.info("Error: Unexpected page state detected:" + this.props.pageState, 'Body Component',  );
                ReactDOM.render(<ContentHome />, document.getElementById('Body'));
        }
    }

    getPageState = (ps) => {
        this.setState( { pageState: ps });
    }

    render() {
        return (
            <div id="Body" className="Body">
            </div>
        );
    }
}
