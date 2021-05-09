import { useState } from "react";
import styles from "./App.module.css";
import Button from "./components/button/Button";

function App() {
  let [counter, setCounter] = useState(0);

  function handleClick(type: boolean) {
    type
      ? setCounter((counter = counter + 1))
      : setCounter((counter = counter - 1));
  }

  return (
    <div className={styles.container}>
      <h1>Counter</h1>
      <div className={styles.counterContainer}>
        <Button label="-" onClick={() => handleClick(false)} />
        <span>{counter}</span>
        <Button label="+" onClick={() => handleClick(true)} />
      </div>
    </div>
  );
}

export default App;
