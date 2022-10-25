import "./App.scss";
import React, { useState } from "react";

import BeerContainer from "./containers/BeerContainer/BeerContainer";

const App = () => {
  //This will be api instead of local data
  // console.log(Beers);
  // const beerArray = Beers.map((beer, index) => {
  //   return <BeerCard name={beer.name} key={`${index + 1}`} />;
  // });

  const [beers, setBeers] = useState([]);
  const [requestBeers, setRequestBeers] = useState(true);

  const getBeers = async () => {
    const url = "https://api.punkapi.com/v2/beers?page=3&per_page=5";
    const res = await fetch(url);
    const data = await res.json();
    setBeers(data);

    // console.log("this is data and name", data[0].name);
  };

  if (requestBeers === true) {
    getBeers();
    setRequestBeers(false);
  }

  // console.log(beers[0].name);

  return (
    <main>
      <div className="test">
        <BeerContainer beerData={beers} />
      </div>
    </main>
  );
};

export default App;
