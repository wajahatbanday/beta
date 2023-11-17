import { useState, useCallback, useEffect } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charatersAllowed, setCharactersAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charatersAllowed) str += "!@#$%^&*";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, charatersAllowed, setPassword]);
  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charatersAllowed, passwordGenerator]);
  return (
    <>
      <div className="flex justify-center w-[100vw] border-2 border-red-500">
        <div className="w-full max-w-md mx-auto shadow-md rounded-lg p-5 my-8 text-black bg-blue-300  border-2 border-red-500">
          <h1 className="text-white text-center text-[25px] p-2">
            Password Generator
          </h1>
          <div className="flex shadow rounded-lg overflow-hidden mb-4">
            <input
              type="text"
              value={password}
              className="outline-none w-full py-1 px-3"
              placeholder="password"
              readOnly
            />
            <button className="outline-none bg-blue-800 text-white px-3 py-0.5 shrink-0">
              Copy
            </button>
          </div>
          <div className="flex text-sm gap-x-2">
            <div className="flex items-center gap-x-1">
              <input
                type="range"
                min={6}
                max={100}
                value={length}
                className="cursor-pointer"
                onChange={(e) => {
                  setLength(e.target.value);
                }}
              />
              <label>Length: {length}</label>
            </div>
            <div className="flex items-center gap-x-1">
              <input
                type="checkbox"
                defaultChecked={numberAllowed}
                id="numberInput"
                onChange={() => {
                  setNumberAllowed((prev) => !prev);
                }}
              />
              <label htmlFor="numberInput"> Numbers</label>
            </div>
            <div className="flex items-center gap-x-1">
              <input
                type="checkbox"
                defaultChecked={charatersAllowed}
                id="characterInput"
                onChange={() => {
                  setCharactersAllowed((prev) => !prev);
                }}
              />
              <label htmlFor="characterInput">Characters</label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
