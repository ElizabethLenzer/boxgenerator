import React, { useState } from "react";
import './App.css';
import Form from './components/Form';
import Box from './components/Box'
function App() {

  const [Boxes, SetBoxes] = useState([]);

  const [BoxDetails, SetBoxDetails] = useState({
    color: "",
    size: "",
  })

  return (
    <div className="App">
      <Form
        boxDetails={BoxDetails}
        setBoxDetails={SetBoxDetails}
        boxes = {Boxes}
        setBoxes={SetBoxes}
      />

      {
        Boxes.map(box => <Box color={Box.color} size={Box.size}/>)
      }

    </div>
  );
}

export default App;
