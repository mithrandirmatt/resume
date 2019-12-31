import React, { Component } from 'react';

import DynamicContentWidget from './DynamicContentWidget'
import CellPhoneApp from './CellPhoneApp'
import Log from './Log'

import '../css/ContentHome.css';

const creatingProps = {
    id: "ContentHomeCreatingContext",
    label: "Creating",
    text: "Producing unique designs."
}

const collaboratingProps = {
    id: "ContentHomeCollaboratingContext",
    label: "Collaborating",
    text: "Working with diverse teams to deliver."
}

const innovatingProps = {
    id: "ContentHomeInnovatingContext",
    label: "Innovating",
    text: "Spicing up the recipes."
}

export default class ContentHome extends Component {

    componentDidMount() {
        window.onscroll = function(e){
            var scroll = document.body.scrollTop;
            console.log(  document, e, e.target.scrollingElement.scrollTop );
            Log.info(" scrollTop == " + scroll, 'App Component' );

            if( scroll > 200 && scroll < 1000 )
            {
                var id = document.getElementById("ContentHomeFirstSectionCommon");
                id.classList.add( "ScrollUpShow" );
            }
        };
    }

    render() {
        return (
            <div id="ContentHome" className="ContentHome">

                <div id="ContentHomeFirstSectionCommon" className="ContentHomeFirstSectionCommon">
                    <div className="ContentHomeFirstSectionWrapper">
                        <DynamicContentWidget context={creatingProps} id="ContentHomeCreating" />
                        <DynamicContentWidget context={collaboratingProps} id="ContentHomeCollaborating" />
                        <DynamicContentWidget context={innovatingProps} id="ContentHomeInnovation" />
                        <CellPhoneApp />
                    </div>
                </div>
            </div>
        );
    }
}
