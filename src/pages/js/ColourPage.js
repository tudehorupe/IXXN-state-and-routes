import React, { Component } from 'react';
import "../css/ColourPage.css";

export default class ColourPage extends Component {
    constructor(props) {
        super(props);
        this.state = {colour: ''};
        this.handleColourChange = this.handleColourChange.bind(this);

        }

        handleColourChange() {
            this.randomColor = Math.floor(Math.random()*16777215).toString(16);
            this.setState({colour: "#" + this.randomColor});
        }

        randomColor = Math.floor(Math.random()*16777215).toString(16);
    
    render() {
        return (
            <div className="random-colour-page" style={{backgroundColor: this.state.colour}}>
                <button className="colour-button" onClick={this.handleColourChange}>Change the colour</button>
            </div>
        )
    }
}
