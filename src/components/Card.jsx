import "./Card.css";

export default function Card({ pokemonName, pokemonImage, onClick }) {
  return (
    <div className="card" onClick={onClick}>
      <p className="card-name">{pokemonName}</p>
      <img src={pokemonImage} alt="Default image for the current pokemon" />
    </div>
  );
}
