import { useState, useEffect, useRef } from "react";
import styles from "./App.module.css";
import Button from "./components/button/Button";

interface quoteStruct {
  q: string;
  a: string;
  h: string;
}

function App() {
  let [counter, setCounter] = useState(0);
  let [quote, setQuote] = useState<quoteStruct>({
    q: "loading",
    a: "loading",
    h: "",
  });
  let mounted = useRef(false);

  useEffect(() => {
    if (!mounted.current) {
      getQuote();

      mounted.current = true;
    }
  });

  async function getQuote() {
    return await fetch("https://zenquotes.io/api/random")
      .then((response) => response.json())
      .then((data) => {
        setQuote({
          q: data[0].q,
          a: data[0].a,
          h: data[0].h,
        });
      });
  }

  function handleClick(type: boolean) {
    type
      ? setCounter((counter = counter + 1))
      : setCounter((counter = counter - 1));
  }

  return (
    <>
      <div className={styles.container}>
        <h1>Counter</h1>
        <div className={styles.counterContainer}>
          <Button label="-" onClick={() => handleClick(false)} />
          <span>{counter}</span>
          <Button label="+" onClick={() => handleClick(true)} />
        </div>
      </div>

      <div className={styles.container}>
        <h1>API call</h1>
        <figure className={styles.quoteContainer}>
          <blockquote>{quote.q}</blockquote>
          <figcaption>- {quote.a}</figcaption>
        </figure>
        <Button label="Get another quote" onClick={() => getQuote()} />
      </div>
    </>
  );
}

export default App;
