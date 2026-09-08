import "./Card.css";

export default function Card({ pokemonName, pokemonImage, handleClick }) {
  return (
    <div className="card" onClick={handleClick}>
      <p className="card-name">{pokemonName}</p>
      <img src={pokemonImage} alt="Default image for the current pokemon" />
    </div>
  );
}
