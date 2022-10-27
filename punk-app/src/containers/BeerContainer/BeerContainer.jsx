import { useState } from "react";
import Card from "../../components/BeerCard/BeerCard";
import ShowInfoCard from "../../components/ShowInfoCard/ShowInfoCard";
import "./BeerContainer.scss";

const BeerContainer = ({ beerData }) => {
  const [beerCardClicked, setBeerCardClicked] = useState(false);
  const [beerObj, setBeerObj] = useState();

  return (
    <>
      {beerData.map((beer) => {
        // WHEN CLICKED, BEER INFO SHOULD APPEAR ON SCREEN

        const handleCardClick = () => {
          if (beerCardClicked) {
            setBeerObj(beer.food_pairing);
          }
          setBeerCardClicked(!beerCardClicked);
          // console.log(`Beer id ${beer.id} and ${beer.name} has been clicked`);
        };
        // console.log(beerObj);

        return (
          <div className="beercard_container" onClick={handleCardClick}>
            {beerCardClicked ? (
              <ShowInfoCard props={beerData.food_pairing} />
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

export default BeerContainer;
