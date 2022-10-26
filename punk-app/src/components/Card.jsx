import "./Card.scss";

const Card = ({ beerName, image_url, firstBrewed, tagline }) => {
  return (
    <div>
      <p>{`This is beer name ${beerName}`}</p>
      <img src={image_url} alt="beer"></img>
      <p>{`Brew date ${firstBrewed}`}</p>
      <p>{tagline}</p>
    </div>
  );
};

export default Card;
