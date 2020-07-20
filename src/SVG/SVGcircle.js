import React from 'react';

const SVGcircle = (props) => {

    let cx, cy, radius, borderColor, borderWidth, color;

    const colors = {
        blueInner: '#1874CD',
        blueOuter: '#003F87'
    }

    if (props.id === "center-inner") {
        cx = 200;
        cy = 200;
        radius = 65;
        borderWidth = 0;
        color = colors.blueInner;
    }
    else if (props.id === "center-outer") {
        cx = 200;
        cy = 200; 
        radius = 74; 
        borderColor = colors.blueOuter; 
        borderWidth = 3;
        color = "transparent";
     }

    return (
        <circle cx={cx} cy={cy} r={radius} stroke={borderColor} strokeWidth={borderWidth} fill={color} />
    )
};

export default SVGcircle;