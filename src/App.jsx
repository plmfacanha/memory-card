import { useState, useEffect, useId } from "react";
import Card from "./components/Card";
import "./App.css";

// TODO: display the <Card /> components in a grid
//// 1. Create a .css and display the div="grid" in a grid 6x6
//// 2. Fetch a image from Pokemon API
//// 2.1 Store it as a src value in the Card.jsx component;
//// 3. Fetch an url that gives 6 pokemons information
//// 4. For each Card.jsx, update it accordingly
// 5. Create a click event for each Card.jsx
// 5.1 Ensure theres a state with score that updates everytime user clicks in a Card.jsx that hasn't been clicked yet
// 5.2 shuffle it around when the event is triggered

function App() {
  const [url, setUrl] = useState(
    "https://pokeapi.co/api/v2/pokemon?limit=6&offset=0",
  );
  const [pokemons, setPokemons] = useState([]);
  const [score, setScore] = useState(0);
  const [isClicked, setClicked] = useState(false);
  const componentId = useId();

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
  }, [url]);

  function handleClick() {
    // TODO: is pokemon was already clicked, reset score, increase++ otherwise.
  }

  return (
    <>
      <h1>Memory Card Game</h1>
      <h2>
        Click in one of the pokemons and make sure you don't click them twice!
      </h2>
      <div className="grid">
        {pokemons.map((item, index) => (
          <Card
            key={index}
            id={item.name}
            pokemonName={item.name}
            pokemonImage={item.image}
            handleClick={handleClick}
          />
        ))}
      </div>
    </>
  );
}

export default App;
