import React from 'react';
import { x_position, y_position } from './svg_values';
import classes from './svg.module.css';

const SVGtext = (props) => {

    let x, y;
    let color = "white";

    if (props.id === "center-text") {
        if (window.innerWidth < 768) {
            x = x_position.x_0 - 39;
            y = y_position.y_0 + 9;
        } else {
            x = x_position.x_0 - 52;
            y = y_position.y_0 + 12.5;
        }   
    }

    else if (props.id === "level_1_text_1") {
        if (window.innerWidth < 768) {
            x = x_position.x_1_phone - 36;
            y = y_position.y_1_phone + 5;
        } else {
            x = x_position.x_1_tabtop - 47.5;
            y = y_position.y_1_tabtop + 7;
        }       
    }
    else if (props.id === "level_1_text_2") {
        if (window.innerWidth < 768) {
            x = x_position.x_2_phone - 36;
            y = y_position.y_2_phone + 5;
        } else {
            x = x_position.x_2_tabtop - 47.5;
            y = y_position.y_2_tabtop + 7;
        }       
    }
    else if (props.id === "level_1_text_3") {
        if (window.innerWidth < 768) {
            x = x_position.x_3_phone - 36;
            y = y_position.y_3_phone + 5;
        } else {
            x = x_position.x_3_tabtop - 47.5;
            y = y_position.y_3_tabtop + 7;
        }       
    }
    else if (props.id === "level_1_text_4") {
        if (window.innerWidth < 768) {
            x = x_position.x_4_phone - 31;
            y = y_position.y_4_phone + 5;
        } else {
            x = x_position.x_4_tabtop - 41;
            y = y_position.y_4_tabtop + 5;
        }         
    }
    else if (props.id === "level_1_text_5") {
        if (window.innerWidth < 768) {
            x = x_position.x_5_phone - 20;
        } else {
            x = x_position.x_5_tabtop - 28;
        }  
        y = y_position.y_5 + 7;     
    }

    return (
        <text x={x} y={y} fill={color} id={props.id} className={classes.clickable}>
            {props.children}
        </text> 
    )
};

export default SVGtext;