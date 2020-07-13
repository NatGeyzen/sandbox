import React, { useState } from 'react';
import './App.css';

import Canvas from './Canvas/Canvas';

function App() {

  const [ renderButton, setRenderButton ] = useState(true);
  const [ renderCanvas, setRenderCanvas ] = useState(false);


  return (
    <div className="App">
      {renderButton && <button onClick={() => {
        setRenderButton(false);
        setRenderCanvas(true);
      }}>Canvas</button>}
      {renderCanvas && <Canvas />}
    </div>
  );
}

export default App;
