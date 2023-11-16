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
      alertNotif = alert("Lowest Value Reached");
    }
  };

  return (
    <>
      <h1>Counter</h1>
      <h2>Current Count : {counter}</h2>

      <button onClick={addValue}>Add Value (+1)</button>
      <br />
      <br />
      <button onClick={decreaseValue}>Decrease Value (-1)</button>
    </>
  );
}

export default App;
