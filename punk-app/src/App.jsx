import React from "react";
import Beers from "./data/data";
import BeerCard from "./components/BeerCard/BeerCard";

const App = () => {
  //This will be api instead of local data
  console.log(Beers);
  const beerArray = Beers.map((beer, index) => {
    return <BeerCard name={beer.name} key={`${index + 1}`} />;
  });
  return <div>{beerArray}</div>;
};

export default App;
