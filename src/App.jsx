import { useState, useEffect } from "react";
import Card from "./components/Card";
import "./App.css";

const shuffleArray = (array) => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

function App() {
  const url = "https://pokeapi.co/api/v2/pokemon?limit=6&offset=0";
  const [pokemons, setPokemons] = useState([]);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  useEffect(() => {
    async function getData() {
      try {
        const res = await fetch(url);
        if (!res.ok) throw new Error(`Response status: ${res.status}`);
        const data = await res.json();

        const info = await Promise.all(
          data.results.map(async (item) => {
            const response = await fetch(item.url);
            const result = response.json();
            return result;
          }),
        );

        setPokemons(
          info.map((p) => ({
            name: p.name,
            image: p.sprites.front_default,
            isClicked: false,
          })),
        );
      } catch (error) {
        console.error(error);
      }
    }

    getData();
  }, []);

  function handleClick(pokemonName) {
    setPokemons((prevPokemons) =>
      prevPokemons.map((p) =>
        p.name === pokemonName ? { ...p, isClicked: !p.isClicked } : p,
      ),
    );
  }

  function handleScore(pokemonName) {
    const curr = pokemons.find((p) => p.name === pokemonName);

    if (!curr.isClicked) {
      setScore(score + 1);
    } else {
      setScore(0);
      setBestScore(score);
    }
  }

  function handleShuffle() {
    setPokemons((prev) => shuffleArray(prev));
  }

  return (
    <>
      <h1>Memory Card Game</h1>
      <h2>
        Click in one of the pokemons and make sure you don't click them twice!
      </h2>
      <p>Current Score: {score}</p>
      <p>Best Score: {bestScore}</p>
      <div className="grid">
        {pokemons.map((item, index) => (
          <Card
            key={index}
            pokemonName={item.name}
            pokemonImage={item.image}
            onClick={() => {
              handleClick(item.name);
              handleScore(item.name);
              handleShuffle();
            }}
          />
        ))}
      </div>
    </>
  );
}

export default App;
