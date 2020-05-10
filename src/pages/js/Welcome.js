import React, { Component } from 'react'
import Greeting from "../../components/js/Greeting";

export default class Welcome extends Component {
    constructor(props) {
        super(props)
        this.state = {name: ''};
        this.handleNameChange = this.handleNameChange.bind(this);
    }

    handleNameChange(event) {
        this.setState({name: event.target.value});
    }
    render() {
        return (
            <>
                <Greeting name={this.state.name} />
                <form>
                <label>
                Name:
                <input type="text" value ={this.state.name}
                onChange={this.handleNameChange} />
                </label>
                </form>
            </>
        )
    }
}
