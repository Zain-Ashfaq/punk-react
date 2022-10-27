import "./BeerCard.scss";

const Card = ({
  beerName,
  image_url,
  firstBrewed,
  tagline,
  abvNumber,
  ph,
  id,
  beerCardClicked,
}) => {
  // console.log("this is beer card clicked in Card component", beerCardClicked);
  return (
    <div>
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
