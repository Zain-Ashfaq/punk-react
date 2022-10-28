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
      <div className="beer-title">
        <p>{`${beerName}`}</p>
      </div>

      <img src={image_url} alt="beer"></img>
      <p className="beer-tagline">{tagline}</p>
      <p>{`Brewed ${firstBrewed}`}</p>

      <p>{`ABV Number: ${abvNumber}`}</p>
      <p>{`PH number ${ph}`}</p>
    </div>
  );
};

export default Card;
