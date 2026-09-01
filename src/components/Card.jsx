export default function Card({ image, onClick }) {
  return (
    <>
      <img src={image} alt="pokemon" onClick={onClick} />
    </>
  );
}
