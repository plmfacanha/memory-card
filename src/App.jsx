import { useState } from "react";
import Card from "./components/Card";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Card />
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Click me!</button>
    </>
  );
}

export default App;
