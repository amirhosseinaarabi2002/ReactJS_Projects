import { useState } from "react";
import "./App.css";
import Button from "./components/Button";

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
          <Button
            id="decrease"
            clickHandler={decreaseTemp}
            // label={"decrease"}
          >
            decrease
          </Button>
          <Button
            id="increase"
            clickHandler={increaseTemp}
            // label={"increase"}
          >
            increase
          </Button>
        </div>
      </main>
      <footer></footer>
      <div id="bg-blur"></div>
    </section>
  );
}
export default App;
