import React from 'react';

const SVGcircle = (props) => {

    let cx, cy, radius, borderColor, borderWidth, color;

    const colors = {
        base: '#444141',
        orange: '#F07407',
    }


    if (props.id === "center-inner") {
        cx = window.innerWidth / 2;
        cy = window.innerHeight / 2;
        borderWidth = 0;
        color = colors.base;
        if (window.innerWidth < 768) {
            radius = 50;
        } else {
            radius = 75;
        }
    }
    else if (props.id === "center-outer") {
        cx = window.innerWidth / 2;
        cy = window.innerHeight / 2;
        borderColor = colors.base; 
        borderWidth = 3;
        color = "transparent";
        if (window.innerWidth < 768) {
            radius = 60;
        } else {
            radius = 85;
        }
     }
     else if (props.id === "level_1--node_1-inner") {
        cx = window.innerWidth * 0.65;
        cy = window.innerHeight * 0.25;
        borderWidth = 0;
        color = colors.orange;
        if (window.innerWidth < 768) {
            radius = 40;
        } else {
            radius = 57.5;
        }    
     }
     else if (props.id === "level_1--node_1-outer") {
        cx = window.innerWidth * 0.65;
        cy = window.innerHeight * 0.25;
        borderColor = colors.base;
        borderWidth = 2;
        color = "transparent";
        if (window.innerWidth < 768) {
            radius = 50;
        } else {
            radius = 67.5;
        }   
     }

     else if (props.id === "connector_to_level_1_node_1") {
        cx = (window.innerWidth * 0.55) - 3;
        cy = window.innerHeight * 0.45;
        borderWidth = 0;
        color = colors.orange;
        if (window.innerWidth < 768) {
            radius = 3;
        } else {
            radius = 5;
        }     
     }
     else if (props.id === "connector_from_level_1_node_1") {
        cx = (window.innerWidth * 0.61) + 11;
        cy = window.innerHeight * 0.31;
        borderWidth = 0;
        color = colors.orange;
        if (window.innerWidth < 768) {
            radius = 3;
        } else {
            radius = 5;
        }     
     }

    

    return (
        <circle id={props.id} cx={cx} cy={cy} r={radius} stroke={borderColor} strokeWidth={borderWidth} fill={color} />
    )
};

export default SVGcircle;