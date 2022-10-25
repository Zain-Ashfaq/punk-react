import "./Card.scss";

const Card = ({ beerName, firstBrewed, tagline }) => {
  return (
    <div className=".grid-item">
      <p>{`This is beer name ${beerName}`}</p>
      <p>{`Brew date ${firstBrewed}`}</p>
      <p>{tagline}</p>
    </div>
  );
};

export default Card;
