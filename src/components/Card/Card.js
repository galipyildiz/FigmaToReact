import "./Card.css";

function Card({ name, genre, year, imgSrc }) {
  return (
    <div
      className="card"
      style={{
        backgroundImage: `url(${imgSrc})`,
      }}
    >
      {/* <button>like</button> */}
      <div>
        <p>{name}</p>
        <p>
          {year} | {genre}
        </p>
      </div>
    </div>
  );
}

export default Card;
