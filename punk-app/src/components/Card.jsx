import "./Card.scss";

const Card = ({
  beerName,
  image_url,
  firstBrewed,
  tagline,
  abvNumber,
  ph,
  id,
}) => {
  return (
    <div>
      {console.log("this is beer id number", id)}
      <p>{`This is beer name ${beerName}`}</p>
      <img src={image_url} alt="beer"></img>
      <p>{`Brew date ${firstBrewed}`}</p>
      <p>{tagline}</p>
      <p>{`ABV Number: ${abvNumber}`}</p>
      <p>{`PH number ${ph}`}</p>
    </div>
  );
};

export default Card;
