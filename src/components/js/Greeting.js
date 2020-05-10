import React from 'react';
import "../css/Greeting.css";

export default function Greeting(props) {
    return (
        <div className='greeting-containter'>
            <h1 className='greeting-text'>Hello, {props.name}</h1>
        </div>
    )
}