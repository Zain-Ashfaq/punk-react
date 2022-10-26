import Card from "../../components/Card";
import "./BeerContainer.scss";

const BeerCard = ({ beerData }) => {
  return (
    <>
      {beerData.map((beer) => {
        // WHEN CLICKED, BEER INFO SHOULD APPEAR ON SCREEN
        const print = () => {
          console.log(`Beer id ${beer.id} and ${beer.name} has been clicked`);
        };
        return (
          <div className="beercard_container" onClick={print}>
            <Card
              id={beer.id}
              beerName={beer.name}
              image_url={beer.image_url}
              tagline={beer.tagline}
              firstBrewed={beer.first_brewed}
              abvNumber={beer.abv}
              ph={beer.ph}
            />
          </div>
        );
      })}
    </>
  );
};

export default BeerCard;
