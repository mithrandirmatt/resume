import React, { Component } from 'react';

import '../css/DynamicContentWidget.css';


export default class DynamicContentWidget extends Component {

    componentWillMount ()
    {
        this.setState({ id : this.props.context.id });
        this.setState({ text : this.props.context.text });
        this.setState({ label : this.props.context.label });
        this.setState({ color : this.props.context.color });
    }

    render() {
        return (
            <div className={this.state.id + " DynamicContentWidget"}>
                <div className={this.state.id + "Label DynamicContentWidgetLabel"}>{this.state.label}</div>
                <div className={this.state.id + "Text DynamicContentWidgetText"}>{this.state.text}</div>
                <div className={this.state.id + "Background"}></div>
            </div>
        );
    }
}
