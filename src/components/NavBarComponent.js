import React, { Component } from 'react';

export default class NavBarComponent extends Component {
    render(){
        return(
            <div>
                <div id="horizontal-whole">
                    <div id="start-quick">
                        <button id="start-button" className="button">
                            <img src="/start.png"/>
                            <b>Start</b>
                        </button>
                        <div className="divider"></div>
                    </div>
                    <div id="clock-icons">
                        <div class="small-icons"></div>
                        <div id="bottom-time">11:22</div>
                    </div>
                </div>
            </div>
        )
    }
}