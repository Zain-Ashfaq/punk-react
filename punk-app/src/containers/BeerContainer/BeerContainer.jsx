import { useState } from "react";
import Card from "../../components/Card";
import "./BeerContainer.scss";

const BeerCard = ({ beerData }) => {
  const [beerCardClicked, setBeerCardClicked] = useState(false);

  return (
    <>
      {beerData.map((beer) => {
        // WHEN CLICKED, BEER INFO SHOULD APPEAR ON SCREEN

        const handleCardClick = () => {
          setBeerCardClicked(!beerCardClicked);
          // console.log(`Beer id ${beer.id} and ${beer.name} has been clicked`);
          console.log(beerCardClicked);
        };
        return (
          <div className="beercard_container" onClick={handleCardClick}>
            {beerCardClicked ? (
              <Card beerCardClicked={beerCardClicked} beerName={beer.name} />
            ) : (
              <Card
                id={beer.id}
                beerName={beer.name}
                image_url={beer.image_url}
                tagline={beer.tagline}
                firstBrewed={beer.first_brewed}
                abvNumber={beer.abv}
                ph={beer.ph}
              />
            )}
          </div>
        );
      })}
    </>
  );
};

export default BeerCard;
