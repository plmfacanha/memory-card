// import { useState } from "react";
import Card from "./components/Card";
import "./App.css";

// TODO: display the <Card /> components in a grid
// 1. Create a .css and display the div="grid" in a grid

function App() {
  const cards = [1, 3, 4, 5, 6];

  return (
    <>
      <h1>Down below goes the grid of cards:</h1>
      <div className="grid">
        {cards.map((num, i) => (
          <Card key={i} index={num} />
        ))}
      </div>
    </>
  );
}

export default App;
