import React, { Component } from 'react';

import DynamicContentWidget from './DynamicContentWidget'

import '../css/ContentHome.css';

const creatingProps = {
    id: "ContentHomeCreatingContext",
    label: "Creating",
    text: "Producing unique designs.",
    color: "red",
}

const collaboratingProps = {
    id: "ContentHomeCollaboratingContext",
    label: "Collaborating",
    text: "Working with diverse teams to deliver.",
    color: "red",
}

const innovatingProps = {
    id: "ContentHomeInnovatingContext",
    label: "Innovating",
    text: "Spicing up the recipes.",
    color: "red",
}

export default class ContentHome extends Component {

    render() {
        return (
            <div id="ContentHome" className="ContentHome">

                <div className="ContentHomeFirstSectionCommon">
                    <div className="ContentHomeFirstSectionWrapper">
                        <DynamicContentWidget context={creatingProps} id="ContentHomeCreating" />
                        <DynamicContentWidget context={collaboratingProps} id="ContentHomeCollaborating" />
                        <DynamicContentWidget context={innovatingProps} id="ContentHomeInnovation" />
                    </div>
                </div>
            </div>
        );
    }
}
