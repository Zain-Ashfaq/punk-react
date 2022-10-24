import React, { useState } from "react";
import Beers from "./data/data";
import BeerCard from "./components/BeerCard/BeerCard";

const App = () => {
  //This will be api instead of local data
  // console.log(Beers);
  // const beerArray = Beers.map((beer, index) => {
  //   return <BeerCard name={beer.name} key={`${index + 1}`} />;
  // });

  const [beers, setBeers] = useState([]);

  const getBeers = async () => {
    const url = "https://api.punkapi.com/v2/beers?page=2&per_page=3";
    const res = await fetch(url);
    const data = await res.json();
    setBeers(data);
    // console.log("this is data and name", data[0].name);
  };
  // console.log(beers[0].name);

  return (
    <>
      <button onClick={getBeers}>Press to log beer</button>
      <BeerCard beerData={beers} />
    </>
  );
};

export default App;
