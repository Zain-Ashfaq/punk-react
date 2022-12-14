import { useState } from "react";
import Card from "../../components/BeerCard/BeerCard";
import ShowInfoCard from "../../components/ShowInfoCard/ShowInfoCard";
import "./BeerContainer.scss";

const BeerContainer = ({ beerData }) => {
  const [beerCardClicked, setBeerCardClicked] = useState(false);
  const [beerObj, setBeerObj] = useState([]);

  console.log(beerObj);

  if (!beerCardClicked) {
    return (
      <>
        {beerData.map((beer) => {
          // WHEN CLICKED, BEER INFO SHOULD APPEAR ON SCREEN
          const handleCardClick = () => {
            setBeerObj(beer.food_pairing);

            setBeerCardClicked(!beerCardClicked);

            // console.log(`Beer id ${beer.id} and ${beer.name} has been clicked`);
            // console.log(`Beer id ${beer.id} and ${beer.name} has been clicked`);
          };

          // console.log(beerObj);

          return (
            <div className="beercard_container" onClick={handleCardClick}>
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
  } else {
    const handleCardClick = () => {
      setBeerCardClicked(!beerCardClicked);

      // console.log(`Beer id ${beer.id} and ${beer.name} has been clicked`);
      // console.log(`Beer id ${beer.id} and ${beer.name} has been clicked`);
    };
    return (
      <div onClick={handleCardClick}>
        <ShowInfoCard info={beerObj} />
      </div>
    );
  }
};

export default BeerContainer;
