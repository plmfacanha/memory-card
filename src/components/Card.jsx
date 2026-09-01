import "./Card.css";

export default function Card({ image }) {
  return (
    <div className="card">
      <img src={image} alt="Default image for the current pokemon" />
    </div>
  );
}
