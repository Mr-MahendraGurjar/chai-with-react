import { useState } from 'react';
import './App.css';

function App() {
  const [bgColor, setBgColor] = useState("olive");

  return (
    <div className="w-full h-screen"
      style={{ backgroundColor: bgColor }}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg rounded-3xl bg-white px-3 py-2">

          <button
            onClick={() => setBgColor("red")}
            className="outline-none px-4 rounded-full py-1 text-white shadow-lg"
            style={{ backgroundColor: "red" }}>
            Red
          </button>

          <button
            onClick={() => setBgColor("blue")}
            className="outline-none px-4 rounded-full py-1 text-white shadow-lg"
            style={{ backgroundColor: "blue" }}>
            Blue
          </button>

          <button
            onClick={() => setBgColor("teal")}
            className="outline-none px-4 rounded-full py-1 text-white shadow-lg"
            style={{ backgroundColor: "teal" }}>
            Teal
          </button>

          <button
            onClick={() => setBgColor("green")}
            className="outline-none px-4 rounded-full py-1 text-white shadow-lg"
            style={{ backgroundColor: "green" }}>
            Green
          </button>
          <button
            onClick={() => setBgColor("purple")}
            className="outline-none px-4 rounded-full py-1 text-white shadow-lg"
            style={{ backgroundColor: "purple" }}>
            Purple
          </button>
          <button
            onClick={() => setBgColor("orange")}
            className="outline-none px-4 rounded-full py-1 text-white shadow-lg"
            style={{ backgroundColor: "orange" }}>
            Orange
          </button>

          <button
        onClick={() => setBgColor("yellow")}
        className="outline-none px-4 rounded-full py-1 text-white shadow-lg"
        style={{ backgroundColor: "yellow" }}>
        Yellow
      </button>

      <button
        onClick={() => setBgColor("pink")}
        className="outline-none px-4 rounded-full py-1 text-white shadow-lg"
        style={{ backgroundColor: "pink" }}>
        Pink
      </button>
         
        </div>
      </div>
    </div>
  );
}

export default App;