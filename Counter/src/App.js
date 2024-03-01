import { useState } from "react";
import "./App.css";

function App() {

  let [counter, setCounter] = useState(5)

  const addValue = () => {
    console.log("Value added", counter);
    // counter = counter + 1
    setCounter(counter + 1)
  }

  const subValue = () => {
    console.log("Value Sub: ", counter);
    setCounter(counter - 1)
  }

  // let counter = 5
  return (
    <>
      <h1>Sandeep Singh</h1>
      <h2>Counter Value: {counter}</h2>

      <button onClick={addValue}>Add Value</button>
      <br></br>
      <button onClick={subValue}>Remove Value</button>
    </>
  );
}

export default App;
