import React from 'react';
import { x_position, y_position, colors } from './svg_values';
import classes from './svg.module.css';

const SVGcircle = (props) => {

    let cx, cy, radius, borderColor, borderWidth, color;

    if (props.id.includes('outer')) {
        borderColor = colors.base; 
        color = "white"; 
    }

    if (props.id.includes('center')) {
        cx = x_position.x_0;
        cy = y_position.y_0;
        if (props.id.includes('inner')) {
            color = colors.base;
            borderColor = colors.base_darker;
            borderWidth = 2;
            if (window.innerWidth < 768) {radius = 50;} 
            else {radius = 75;}
        }  
        else if (props.id.includes('outer')) {
            borderWidth = 4;
            if (window.innerWidth < 768) {radius = 57.5;} 
            else {radius = 87.5;}
        }  
    }

    else if (props.id.includes('level_1')) {
        if (props.id.includes('inner')) {
            if (window.innerWidth < 768) {radius = 42.5;} 
            else {radius = 57.5;} 
            borderWidth = 3;
        }
        else if (props.id.includes('outer')) {
            borderWidth = 2;
            if (window.innerWidth < 768) {
                radius = 50;
            } else {
                radius = 67.5;
            }   
        }
        if (props.id.includes('node_1')) {
            if (window.innerWidth < 768) {
                cx = x_position.x_1_phone;
                cy = y_position.y_1_phone;
            } else {
                cx = x_position.x_1_tabtop;
                cy = y_position.y_1_tabtop;
            }
            if (props.id.includes('inner')) {
                color = colors.orange;
                borderColor = colors.orange_darker;
            }
        }
        else if (props.id.includes('node_2')) {
            if (window.innerWidth < 768) {
                cx = x_position.x_2_phone;
                cy = y_position.y_2_phone;
            } else {
                cx = x_position.x_2_tabtop;
                cy = y_position.y_2_tabtop;
            }
            
            if (props.id.includes('inner')) {
                color = colors.blue;
                borderColor = colors.blue_darker;
            }
        }
        else if (props.id.includes('node_3')) {
            if (window.innerWidth < 768) {
                cx = x_position.x_3_phone;
                cy = y_position.y_3_phone;
            } else {
                cx = x_position.x_3_tabtop;
                cy = y_position.y_3_tabtop;
            }
            
            if (props.id.includes('inner')) {
                color = colors.red;
                borderColor = colors.red_darker;
            }
        }
        else if (props.id.includes('node_4')) {
            if (window.innerWidth < 768) {
                cx = x_position.x_4_phone;
                cy = y_position.y_4_phone;
            } else {
                cx = x_position.x_4_tabtop;
                cy = y_position.y_4_tabtop;
            }
            if (props.id.includes('inner')) {
                color = colors.green;
                borderColor = colors.green_darker;
            }
        }
        else if (props.id.includes('node_5')) {
            if (window.innerWidth < 768) {
                cx = x_position.x_5_phone;
            } else {
                cx = x_position.x_5_tabtop;
            }
            cy = y_position.y_5;
            if (props.id.includes('inner')) {
                color = colors.purple;
                borderColor = colors.purple_darker;
            }
        }
    }

    else if (props.id.includes('level-2')) {

        if (props.id.includes('node_1')) {
            color = colors.orange_lighter;
            if (props.id.includes('node_1_1')) {
                if (window.innerWidth < 678) {
                    cx = x_position.x_1_1_phone;
                    cy = y_position.y_1_1_phone;
                    radius = 15;
                } else {
                    cx = x_position.x_1_1_tabtop;
                    cy = y_position.y_1_1_tabtop;
                    radius = 20;
                }
            }
            else if (props.id.includes('node_1_2')) {
                if (window.innerWidth < 678) {
                    cx = x_position.x_1_2_phone;
                    cy = y_position.y_1_2_phone;
                    radius = 18;
                } else {
                    cx = x_position.x_1_2_tabtop;
                    cy = y_position.y_1_2_tabtop;
                    radius = 23;
                }
            }
            else if (props.id.includes('node_1_3')) {
                if (window.innerWidth < 678) {
                    cx = x_position.x_1_3_phone;
                    cy = y_position.y_1_3_phone;
                    radius = 10;
                } else {
                    cx = x_position.x_1_3_tabtop;
                    cy = y_position.y_1_3_tabtop;
                    radius = 15;
                }
            }
            
        }

        else if (props.id.includes('node_2')) {
            color = colors.blue_lighter;
            if (props.id.includes('node_2_1')) {
                if (window.innerWidth < 678) {
                    cx = x_position.x_2_1_phone;
                    cy = y_position.y_2_1_phone;
                    radius = 20;
                } else {
                    cx = x_position.x_2_1_tabtop;
                    cy = y_position.y_2_1_tabtop;
                    radius = 27;
                }
            }
            else if (props.id.includes('node_2_2')) {
                if (window.innerWidth < 678) {
                    cx = x_position.x_2_2_phone;
                    cy = y_position.y_2_2_phone;
                    radius = 15;
                } else {
                    cx = x_position.x_2_2_tabtop;
                    cy = y_position.y_2_2_tabtop;
                    radius = 20;
                }
            }
            else if (props.id.includes('node_2_3')) {
                if (window.innerWidth < 678) {
                    cx = x_position.x_2_3_phone;
                    radius = 15;
                } else {
                    cx = x_position.x_2_3_tabtop;

                    radius = 17;
                }
                cy = y_position.y_2_3;
            }
        }

        else if (props.id.includes('node_3')) {
            color = colors.red_lighter;
            if (props.id.includes('node_3_1')) {
                if (window.innerWidth < 678) {
                    cx = x_position.x_3_1_phone;
                    cy = y_position.y_3_1_phone;
                    radius = 20;
                } else {
                    cx = x_position.x_3_1_tabtop;
                    cy = y_position.y_3_1_tabtop;
                    radius = 25;
                }
            }
            else if (props.id.includes('node_3_2')) {
                if (window.innerWidth < 678) {
                    cx = x_position.x_3_2_phone;
                    cy = y_position.y_3_2_phone;
                    radius = 13;
                } else {
                    cx = x_position.x_3_2_tabtop;
                    cy = y_position.y_3_2_tabtop;
                    radius = 21;
                }
            }
        }

        else if (props.id.includes('node_4')) {
            color = colors.green_lighter;
            if (props.id.includes('node_4_1')) {
                if (window.innerWidth < 678) {
                    cx = x_position.x_4_1_phone;
                    cy = y_position.y_4_1_phone;
                    radius = 20;
                } else {
                    cx = x_position.x_4_1_tabtop;
                    cy = y_position.y_4_1_tabtop;
                    radius = 23;
                }
            }
            else if (props.id.includes('node_4_2')) {
                if (window.innerWidth < 678) {
                    cx = x_position.x_4_2_phone;
                    cy = y_position.y_4_2_phone;
                    radius = 13;
                } else {
                    cx = x_position.x_4_2_tabtop;
                    cy = y_position.y_4_2_tabtop;
                    radius = 20;
                }
            }
        }

        else if (props.id.includes('node_5')) {
            color = colors.purple_lighter;
            if (props.id.includes('node_5_1')) {
                if (window.innerWidth < 678) {
                    cx = x_position.x_5_1_phone;
                    cy = y_position.y_5_1_phone;
                    radius = 12;
                } else {
                    cx = x_position.x_5_1_tabtop;
                    cy = y_position.y_5_1_tabtop;
                    radius = 23;
                }
            }
            else if (props.id.includes('node_5_2')) {
                if (window.innerWidth < 678) {
                    cx = x_position.x_5_2_phone;
                    cy = y_position.y_5_2_phone;
                    radius = 16;
                } else {
                    cx = x_position.x_5_2_tabtop;
                    cy = y_position.y_5_2_tabtop;
                    radius = 16;
                }
            }
            else if (props.id.includes('node_5_3')) {
                if (window.innerWidth < 678) {
                    cx = x_position.x_5_3_phone;
                    cy = y_position.y_5_3_phone;
                    radius = 17;
                } else {
                    cx = x_position.x_5_3_tabtop;
                    cy = y_position.y_5_3_tabtop;
                    radius = 20;
                }
            }
        }
    }


    return (
        <circle id={props.id} cx={cx} cy={cy} r={radius} stroke={borderColor} strokeWidth={borderWidth} fill={color} className={classes.clickable} />
    )
};

export default SVGcircle;




// else if (props.id.includes('connector')) {
//     if (props.id.includes('level_1')) {
//         if (window.innerWidth < 768) {
//             radius = 3;
//         } else {
//             radius = 7;
//         }  
//         if (props.id.includes('node_1')) {
//             cx = x_position.x_0 + 70;
//             cy = y_position.y_0 - 53;
//             color = colors.orange;
//         }
//         else if (props.id.includes('node_2')) {
//             cx = x_position.x_0 + 84;
//             cy = y_position.y_0 + 23;
//             color = colors.blue;
//         }
//         else if (props.id.includes('node_3')) {
//             cx = x_position.x_0 - 65;
//             cy = y_position.y_0 + 60;
//             color = colors.red;
//         }
//         else if (props.id.includes('node_4')) {
//             cx = x_position.x_0 - 88;
//             cy = y_position.y_0 + 5;
//             color = colors.green;
//         }
//         else if (props.id.includes('node_5')) {
//             cx = x_position.x_0 - 75;
//             cy = y_position.y_0 - 45;
//             color = colors.purple;
//         }
//     }
// }