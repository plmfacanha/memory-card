import { useState, useEffect } from "react";
import Card from "./components/Card";
import "./App.css";

function App() {
  const [pokemons, setPokemons] = useState([]);

  async function fetchData() {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=6");
    const data = await res.json();
    return data.results.map((pokemon) => {
      const id = pokemon.url.split("/").filter(Boolean).pop();
      return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
    });
  }

  useEffect(() => {
    let ignore = false;

    fetchData().then((images) => {
      if (!ignore) {
        setPokemons(images);
      }
    });

    return () => {
      ignore = true;
    };
  }, []);

  return (
    <>
      <h1>Down below goes the grid of cards:</h1>
      <div className="grid">
        {pokemons.map((image, i) => (
          <Card key={i} image={image} />
        ))}
      </div>
    </>
  );
}

export default App;
