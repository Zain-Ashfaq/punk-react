import "./App.scss";
import React, { useState, useEffect } from "react";

import BeerContainer from "./containers/BeerContainer/BeerContainer";
import SearchBar from "./components/SearchBar/SearchBar";

const App = () => {
  const [beers, setBeers] = useState([]);
  const [requestBeers, setRequestBeers] = useState(true);

  const [inputName, setInputName] = useState("");

  const getBeers = async () => {
    const url = "https://api.punkapi.com/v2/beers?page=3&per_page=10";
    // const url = `https://api.punkapi.com/v2/beers?beer_name=${inputName}`;
    const res = await fetch(url);
    const data = await res.json();
    setBeers(data);

    // console.log("this is data and name", data[0].name);
  };
  if (requestBeers === true) {
    getBeers();
    setRequestBeers(false);
  }

  // useEffect(() => {
  //   getBeers();
  // }, []);

  // filter beers based on name
  const handleInput = (event) => {
    const cleanInput = event.target.value.toLowerCase().replace(" ", "_");

    setInputName(cleanInput);
  };
  console.log("this is inputName", inputName);

  // to get beer name called vice https://api.punkapi.com/v2/beers?beer_name=vice

  return (
    <main>
      <h1>BEERS PAGEssss</h1>
      <input
        placeholder="search for beer name"
        onInput={handleInput}
        value={inputName}
      ></input>
      <SearchBar />
      <div className="test">
        <BeerContainer beerData={beers} />
      </div>
    </main>
  );
};

export default App;
