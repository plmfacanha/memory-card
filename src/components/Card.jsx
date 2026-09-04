import "./Card.css";

export default function Card({ id, pokemonName, pokemonImage, handleClick }) {
  return (
    <div className="card" onClick={() => handleClick(id)}>
      <p className="card-name">{pokemonName}</p>
      <img src={pokemonImage} alt="Default image for the current pokemon" />
    </div>
  );
}
