import { useState } from "react";
import "./App.css";

function App() {
  const [temp, setTemp] = useState(10);

  const decreaseTemp = () => {
    setTemp(temp - 1);
  };
  
  const increaseTemp = () => {
    setTemp(temp + 1);
  };
  return (
    <section id="wrapper" className={temp > 15 ? "too-warm" : "too-cold"}>
      <header></header>
      <main id="main" className="">
        <p id="temp">{temp}C</p>
        <div id="buttons">
          <button id="decrease" onClick={decreaseTemp}>
            Decrease
          </button>
          <button id="increase" onClick={increaseTemp}>
            Increase
          </button>
        </div>
      </main>
      <footer></footer>
      <div id="bg-blur"></div>
    </section>
  );
}
export default App;
