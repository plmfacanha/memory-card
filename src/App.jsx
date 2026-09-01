import { useState } from "react";
import Card from "./components/Card";
import "./App.css";

// TODO: display the <Card /> components in a grid
// //1. Create a .css and display the div="grid" in a grid
// 2. Fetch a image from Pokemon API
// 3. Create a current state as array for images fetched in the API
// 4. Update elements (images) in the array state accordingly
// 5. Initialize App.jsx with a useEffect() that stores the initial render

function App() {
  const [numOfCards, setNumOfCards] = useState(new Array(6));

  return (
    <>
      <h1>Down below goes the grid of cards:</h1>
      <div className="grid">
        {numOfCards.map((item, index) => (
          <Card key={index} img={item} />
        ))}
      </div>
    </>
  );
}

export default App;
