// import { useState } from "react";
import Card from "./components/Card";
import "./App.css";

// TODO: display the <Card /> components in a grid
// 1. Create a .css and display the div="grid" in a grid

function App() {
  return (
    <>
      <h1>Down below goes the grid of cards:</h1>
      <div className="grid">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </>
  );
}

export default App;
