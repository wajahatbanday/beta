import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/card";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="">
        <div className="flex justify-center">
          <h1 className="text-white p-4 rounded-xl mb-4 w-[400px]">
            Tailwind Test
          </h1>
        </div>
        <div className="flex gap-[10px]">
          <Card username="Wajahat" age="28" />
          <Card username="Iqram" age="26" />
          <Card username="Suhaib" age="28" />
        </div>
      </div>
    </>
  );
}

export default App;
