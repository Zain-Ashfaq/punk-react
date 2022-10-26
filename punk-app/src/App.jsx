import "./App.scss";
import React, { useState, useEffect } from "react";

import BeerContainer from "./containers/BeerContainer/BeerContainer";
import SearchBar from "./components/SearchBar/SearchBar";
import Checkbox from "./containers/CheckboxContainer/Checkbox";

const App = () => {
  const [beers, setBeers] = useState([]);
  const [classicRangeCheckbox, setClassicRangeCheckbox] = useState();

  const [inputName, setInputName] = useState("");

  const getBeers = async (beerName) => {
    // const url = "https://api.punkapi.com/v2/beers?page=3&per_page=10";
    // const url = `https://api.punkapi.com/v2/beers?beer_name=${inputName}`;
    let url = "https://api.punkapi.com/v2/beers?page=3&per_page=10";
    if (inputName === "") {
      console.log("input is blank");
    } else {
      url = `https://api.punkapi.com/v2/beers?beer_name=${beerName}`;
    }
    if (classicRangeCheckbox === true) {
      url += "&brewed_before=01-2010";
    }

    const res = await fetch(url);
    const data = await res.json();
    setBeers(data);

    // console.log("this is data and name", data[0].name);
  };
  //initial load up to get 10 beers
  useEffect(() => {
    getBeers();
  }, []);
  // used to search for individual beer
  useEffect(() => {
    getBeers(inputName);
  }, [inputName, classicRangeCheckbox]);

  const handleInput = (event) => {
    const cleanInput = event.target.value.toLowerCase().replace(" ", "_");

    setInputName(cleanInput);
  };
  const handleClassicInput = (event) => {
    const isTicked = event.target.checked;
    // console.log("is classic range checkbox ticked? ", isTicked);
    setClassicRangeCheckbox(isTicked);
  };
  console.log("this is inputName", inputName);
  console.log("is classic range checkbox ticked? ", classicRangeCheckbox);

  // to get beer name called vice https://api.punkapi.com/v2/beers?beer_name=vice

  return (
    <main>
      <h1>BEERS PAGEssss</h1>
      <input
        placeholder="search for beer name"
        onInput={handleInput}
        value={inputName}
      ></input>
      <Checkbox onChange={handleClassicInput} />
      <SearchBar />
      <div className="test">
        <BeerContainer beerData={beers} />
      </div>
    </main>
  );
};

export default App;
