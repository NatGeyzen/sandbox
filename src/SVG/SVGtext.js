import React from 'react';

const SVGtext = (props) => {

    let x, y;
    let color = "white";

    if (props.id === "center-text") {
        if (window.innerWidth < 768) {
            x = (window.innerWidth / 2) - 42.5;
            y = (window.innerHeight / 2) + 10;
        } else {
            x = (window.innerWidth / 2) - 52;
            y = (window.innerHeight / 2) + 12.5;
        }   
    }

    else if (props.id === "level_1_text_1") {
        if (window.innerWidth < 768) {
            x = window.innerWidth * 0.65;
            y = window.innerHeight * 0.25;
        } else {
            x = window.innerWidth * 0.62;
            y = window.innerHeight * 0.26;
        }       
    }

    return (
        <text x={x} y={y} fill={color} id={props.id}>
            {props.children}
        </text> 
    )
};

export default SVGtext;