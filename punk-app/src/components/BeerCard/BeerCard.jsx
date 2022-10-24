import Card from "../Card";

const BeerCard = ({ beerData }) => {
  return (
    <div>
      {beerData.map((beer, index) => {
        console.log("this is user", beer);
        return (
          <Card
            key={beer.name + index}
            beerName={beer.name}
            tagline={beer.tagline}
            firstBrewed={beer.first_brewed}
          />
        );
      })}
    </div>
  );
};

export default BeerCard;
