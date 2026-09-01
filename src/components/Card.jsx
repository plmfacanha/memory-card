import "./Card.css";

export default function Card({ pokemonName, pokemonImage }) {
  return (
    <div className="card">
      <p className="card-name">{pokemonName}</p>
      <img src={pokemonImage} alt="Default image for the current pokemon" />
    </div>
  );
}
