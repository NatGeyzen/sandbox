import React from "react";
import "./App.css";
import SVGcircle from "./SVG/SVGcircle";
import SVGtext from './SVG/SVGtext';
import SVGline from './SVG/SVGline';

function App() {

	const outer_circles = [
		"center-outer",
		"level_1--node_1-outer",
		"level_1--node_2-outer",
		"level_1--node_3-outer",
		"level_1--node_4-outer",
		"level_1--node_5-outer"
	]

	const inner_circles = [ 
		"center-inner", 
		"level_1--node_1-inner",
		"level_1--node_2-inner",
		"level_1--node_3-inner",
		"level_1--node_4-inner",
		"level_1--node_5-inner"
	];

	const child_circles = [ 
		"level-2--node_1_1", 
		"level-2--node_1_2", 
		"level-2--node_1_3",
		"level-2--node_2_1", 
		"level-2--node_2_2",
		"level-2--node_2_3",
		"level-2--node_3_1", 
		"level-2--node_3_2",
		"level-2--node_4_1", 
		"level-2--node_4_2",
		"level-2--node_5_1", 
		"level-2--node_5_2",
		"level-2--node_5_3"
	];

	// const connector_circles = [
	// 	"connector_to_level_1_node_1",
	// 	"connector_to_level_1_node_2",
	// 	"connector_to_level_1_node_3",
	// 	"connector_to_level_1_node_4",
	// 	"connector_to_level_1_node_5"
	// ]

	const text_array = [
		[ "center-text", "Skills" ],
		[ "level_1_text_1", "Languages" ],
		[ "level_1_text_2", "Libraries" ],
		[ "level_1_text_3", "Databases" ],
		[ "level_1_text_4", "Testing" ],
		[ "level_1_text_5", "Other" ]
	];

	const line_array = [
		"center_to_lv1_1",
		"center_to_lv1_2",
		"center_to_lv1_3",
		"center_to_lv1_4",
		"center_to_lv1_5",
	]

	const lines_to_lv2 = [
		"lv1_to_lv2_1_1",
		"lv1_to_lv2_1_2",
		"lv1_to_lv2_1_3",
		"lv1_to_lv2_2_1",
		"lv1_to_lv2_2_2",
		"lv1_to_lv2_2_3",
		"lv1_to_lv2_3_1",
		"lv1_to_lv2_3_2",
		"lv1_to_lv2_4_1",
		"lv1_to_lv2_4_2",
		"lv1_to_lv2_5_1",
		"lv1_to_lv2_5_2",
		"lv1_to_lv2_5_3"
	]

  	return (
    	<div className="App">
      		<svg height={window.innerHeight * 0.95} width={window.innerWidth * 0.95} id="full_svg">
				{line_array.map(id => <SVGline key={id} id={id} />)}
				{lines_to_lv2.map(id => <SVGline key={id} id={id}/>)}
				{child_circles.map(circle => <SVGcircle key={circle} id={circle} />)}
				{outer_circles.map(circle => <SVGcircle key={circle} id={circle} />)}
				{inner_circles.map(circle => <SVGcircle key={circle} id={circle} />)}
				{/* {connector_circles.map(circle => <SVGcircle key={circle} id={circle} />)} */}
				{text_array.map(textNode => <SVGtext key={textNode[0]} id={textNode[0]}>{textNode[1]}</SVGtext>)}
      		</svg>
		</div>
	);
}

export default App;