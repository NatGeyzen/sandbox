import React from "react";
import classes from "./App.module.css";
import SVGcircle from "./SVG/SVGcircle";

function App() {

	const circle_array = [ "center-inner", "center-outer" ];

  	return (
    	<div className={classes.App}>
      		<svg className={classes.level1} height="400" width="400">
        		<g>
					{circle_array.map(id => <SVGcircle key={id} id={id} />)}
        		</g>
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
