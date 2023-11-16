import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(0);
  const addValue = () => {
    if (counter < 20) {
      counter += 1;
      setCounter(counter);
    } else {
      alert("Maximum Value Reached");
    }
  };

  const decreaseValue = () => {
    if (counter > 0) {
      counter -= 1;
      setCounter(counter);
    } else {
      alert("Lowest Value Reached");
    }
  };

  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addValue}>Add Value</button>
      <br />
      <br />
      <button onClick={decreaseValue}>Decrease Value</button>
    </>
  );
}

export default App;
