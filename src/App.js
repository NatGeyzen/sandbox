import React from "react";
import "./App.css";
import SVGcircle from "./SVG/SVGcircle";
import SVGtext from './SVG/SVGtext';

function App() {

	const circle_array = [ 
		"center-inner", 
		"center-outer",
		"level_1--node_1-inner",
		"level_1--node_1-outer",
		"connector_to_level_1_node_1",
		"connector_from_level_1_node_1"
	];

	const text_array = [
		[ "center-text", "Skills" ],
		[ "level_1_text_1", "Languages" ]
	];

  	return (
    	<div className="App">
      		<svg height={window.innerHeight * 0.95} width={window.innerWidth * 0.95}>
				{circle_array.map(id => <SVGcircle key={id} id={id} />)}
				{text_array.map(textNode => <SVGtext key={textNode[0]} id={textNode[0]}>{textNode[1]}</SVGtext>)}
      		</svg>
		</div>
	);
	}

export default App;

// import Canvas from './Canvas/Canvas';

// const [ renderButton, setRenderButton ] = useState(true);
// const [ renderCanvas, setRenderCanvas ] = useState(false);

// {renderButton && <button onClick={() => {
//   setRenderButton(false);
//   setRenderCanvas(true);
// }}>Canvas</button>}
// {renderCanvas && <Canvas />}
