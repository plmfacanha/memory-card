export default function Card({ image, handleClick }) {
  return (
    <>
      <img src={image} alt="pokemon" onClick={handleClick} />
    </>
  );
}
