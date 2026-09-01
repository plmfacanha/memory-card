import { useState, useEffect } from "react";
import Card from "./components/Card";
import "./App.css";

// TODO: display the <Card /> components in a grid
// //1. Create a .css and display the div="grid" in a grid 6x6
// //2. Fetch a image from Pokemon API
//  2.1 Store it as a src value in the Card.jsx component;
// 3. Create a current state as array for images fetched in the API
// 4. Update elements (images) in the array state accordingly
// 5. Initialize App.jsx with a useEffect() that stores the initial render

function App() {
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/pikachu");
  const [pokemon, setPokemon] = useState({
    name: "",
    image: null,
  });

  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch(url);
        if (!response.ok)
          throw new Error(`Response status: ${response.status}`);
        const result = await response.json();
        setPokemon({ name: result.name, image: result.sprites.front_default });
      } catch (error) {
        console.error(error);
      }
    }

    getData();
  }, [url]);

  return (
    <>
      <h1>Your pokemon is: {pokemon.name}</h1>
      <div className="grid">
        <Card image={pokemon.image} />
      </div>
    </>
  );
}

export default App;
