import React from 'react';

import '../../styles/frame.css';

function Frame (props) {
    return (
        <div className='frame'>
            <a href={props.link}>
                <img src={props.img} alt={props.alt}/>
            </a>
        </div>
    )
};
export default Frame;