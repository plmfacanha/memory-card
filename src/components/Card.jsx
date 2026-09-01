import "./Card.css";

export default function Card({ pokemonName, pokemonImage }) {
  return (
    <div className="card">
      <p>{pokemonName}</p>
      <img src={pokemonImage} alt="Default image for the current pokemon" />
    </div>
  );
}
