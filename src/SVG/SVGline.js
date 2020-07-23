import React from 'react';
import { y_position, colors, x_position } from './svg_values';

const SVGline = (props) => {

    let x1, y1, x2, y2;
    const style = {
        stroke: null,
        strokeWidth: 0,
        strokeDasharray: null
    };

    if (props.id.includes('center')) {
        style.stroke = colors.base;
        style.strokeWidth = 2;
        x1 = x_position.x_0;
        y1 = y_position.y_0;
        if (props.id.includes('lv1_1')) {
            if (window.innerWidth < 768) {
                x2 = x_position.x_1_phone;
                y2 = y_position.y_1_phone;
            } else {
                x2 = x_position.x_1_tabtop;
                y2 = y_position.y_1_tabtop;
            }   
        }
        else if (props.id.includes('lv1_2')) {
            if (window.innerWidth < 768) {
                x2 = x_position.x_2_phone;
                y2 = y_position.y_2_phone;
            } else {
                x2 = x_position.x_2_tabtop;
                y2 = y_position.y_2_tabtop;
            }  
        }
        else if (props.id.includes('lv1_3')) {
            if (window.innerWidth < 768) {
                x2 = x_position.x_3_phone;
                y2 = y_position.y_3_phone;
            } else {
                x2 = x_position.x_3_tabtop;
                y2 = y_position.y_3_tabtop;
            } 
        }
        else if (props.id.includes('lv1_4')) {
            if (window.innerWidth < 768) {
                x2 = x_position.x_4_phone;
                y2 = y_position.y_4_phone;
            } else {
                x2 = x_position.x_4_tabtop;
                y2 = y_position.y_4_tabtop;
            } 
        }
        else if (props.id.includes('lv1_5')) {
            if (window.innerWidth < 768) {
                x2 = x_position.x_5_phone;
                
            } else {
                x2 = x_position.x_5_tabtop;
            } 
            y2 = y_position.y_5;
        }
    }

    else if (props.id.includes('lv2')) {
        style.strokeDasharray = "10 5";
        style.strokeWidth = 1;
        if (props.id.includes('_1_')) {
            style.stroke = colors.orange_lighter;
            if (window.innerWidth < 768) {
                x1 = x_position.x_1_phone;
                y1 = y_position.y_1_phone;
            } else {
                x1 = x_position.x_1_tabtop;
                y1 = y_position.y_1_tabtop;
            }

            if (props.id === "lv1_to_lv2_1_1") {
                if (window.innerWidth < 768) {
                    x2 = x_position.x_1_1_phone;
                    y2 = y_position.y_1_1_phone;
                } else {
                    x2 = x_position.x_1_1_tabtop;
                    y2 = y_position.y_1_1_tabtop;
                } 
            }
            else if (props.id === "lv1_to_lv2_1_2") {
                if (window.innerWidth < 768) {
                    x2 = x_position.x_1_2_phone;
                    y2 = y_position.y_1_2_phone;
                } else {
                    x2 = x_position.x_1_2_tabtop;
                    y2 = y_position.y_1_2_tabtop;
                } 
            }
            else if (props.id === "lv1_to_lv2_1_3") {
                if (window.innerWidth < 768) {
                    x2 = x_position.x_1_3_phone;
                    y2 = y_position.y_1_3_phone;
                } else {
                    x2 = x_position.x_1_3_tabtop;
                    y2 = y_position.y_1_3_tabtop;
                } 
            }
        }

        else if (props.id.includes('_2_')) {
            style.stroke = colors.blue_lighter;
            if (window.innerWidth < 768) {
                x1 = x_position.x_2_phone;
                y1 = y_position.y_2_phone;
            } else {
                x1 = x_position.x_2_tabtop;
                y1 = y_position.y_2_tabtop;
            }
            if (props.id === "lv1_to_lv2_2_1") {
                if (window.innerWidth < 768) {
                    x2 = x_position.x_2_1_phone;
                    y2 = y_position.y_2_1_phone;
                } else {
                    x2 = x_position.x_2_1_tabtop;
                    y2 = y_position.y_2_1_tabtop;
                } 
            }
            else if (props.id === "lv1_to_lv2_2_2") {
                if (window.innerWidth < 768) {
                    x2 = x_position.x_2_2_phone;
                    y2 = y_position.y_2_2_phone;
                } else {
                    x2 = x_position.x_2_2_tabtop;
                    y2 = y_position.y_2_2_tabtop;
                } 
            }
            else if (props.id === "lv1_to_lv2_2_3") {
                if (window.innerWidth < 768) {
                    x2 = x_position.x_2_3_phone;
                } else {
                    x2 = x_position.x_2_3_tabtop;
                } 
                y2 = y_position.y_2_3;
            }
        }

        else if (props.id.includes('_3_')) {
            style.stroke = colors.red_lighter;
            if (window.innerWidth < 768) {
                x1 = x_position.x_3_phone;
                y1 = y_position.y_3_phone;
            } else {
                x1 = x_position.x_3_tabtop;
                y1 = y_position.y_3_tabtop;
            }
            if (props.id === "lv1_to_lv2_3_1") {
                if (window.innerWidth < 768) {
                    x2 = x_position.x_3_1_phone;
                    y2 = y_position.y_3_1_phone;
                } else {
                    x2 = x_position.x_3_1_tabtop;
                    y2 = y_position.y_3_1_tabtop;
                } 
            }
            else if (props.id === "lv1_to_lv2_3_2") {
                if (window.innerWidth < 768) {
                    x2 = x_position.x_3_2_phone;
                    y2 = y_position.y_3_2_phone;
                } else {
                    x2 = x_position.x_3_2_tabtop;
                    y2 = y_position.y_3_2_tabtop;
                } 
            }
        }

        else if (props.id.includes('_4_')) {
            style.stroke = colors.green_lighter;
            if (window.innerWidth < 768) {
                x1 = x_position.x_4_phone;
                y1 = y_position.y_4_phone;
            } else {
                x1 = x_position.x_4_tabtop;
                y1 = y_position.y_4_tabtop;
            }
            if (props.id === "lv1_to_lv2_4_1") {
                if (window.innerWidth < 768) {
                    x2 = x_position.x_4_1_phone;
                    y2 = y_position.y_4_1_phone;
                } else {
                    x2 = x_position.x_4_1_tabtop;
                    y2 = y_position.y_4_1_tabtop;
                } 
            }
            else if (props.id === "lv1_to_lv2_4_2") {
                if (window.innerWidth < 768) {
                    x2 = x_position.x_4_2_phone;
                    y2 = y_position.y_4_2_phone;
                } else {
                    x2 = x_position.x_4_2_tabtop;
                    y2 = y_position.y_4_2_tabtop;
                } 
            }
        }

        else if (props.id.includes('_5_')) {
            style.stroke = colors.purple_lighter;
            if (window.innerWidth < 768) {
                x1 = x_position.x_5_phone;
            } else {
                x1 = x_position.x_5_tabtop;
            }
            y1 = y_position.y_5;
            if (props.id === "lv1_to_lv2_5_1") {
                if (window.innerWidth < 768) {
                    x2 = x_position.x_5_1_phone;
                    y2 = y_position.y_5_1_phone;
                } else {
                    x2 = x_position.x_5_1_tabtop;
                    y2 = y_position.y_5_1_tabtop;
                } 
            }
            else if (props.id === "lv1_to_lv2_5_2") {
                if (window.innerWidth < 768) {
                    x2 = x_position.x_5_2_phone;
                    y2 = y_position.y_5_2_phone;
                } else {
                    x2 = x_position.x_5_2_tabtop;
                    y2 = y_position.y_5_2_tabtop;
                } 
            }
            else if (props.id === "lv1_to_lv2_5_3") {
                if (window.innerWidth < 768) {
                    x2 = x_position.x_5_3_phone;
                    y2 = y_position.y_5_3_phone;
                } else {
                    x2 = x_position.x_5_3_tabtop;
                    y2 = y_position.y_5_3_tabtop;
                } 
            }
        }

        
    }



    return (
        <line x1={x1} y1={y1} x2={x2} y2={y2} style={style} />
    )
};

export default SVGline;