import Card from "../../components/Card";
import "./BeerContainer.scss";

const BeerCard = ({ beerData }) => {
  return (
    <>
      {beerData.map((beer, index) => {
        console.log("this is user", beer);

        return (
          <div className="beercard_container">
            <Card
              key={beer.name + index}
              beerName={beer.name}
              tagline={beer.tagline}
              firstBrewed={beer.first_brewed}
            />
          </div>
        );
      })}
    </>
  );
};

export default BeerCard;
