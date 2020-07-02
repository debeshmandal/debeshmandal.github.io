import React from 'react';
import '../styles/cv.css';

function CVComponent (props) {
    return <div><h2>{props.name}</h2></div>
}

function Education () {
    return <CVComponent name='Education' />
}

function Employment () {
    return <CVComponent name='Employment' />
}

function CV () {
    return (
        <div className='App-main'>
            <Education />
            <Employment />
        </div>
    );
};

export default CV;