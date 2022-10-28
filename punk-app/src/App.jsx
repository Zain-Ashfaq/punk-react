import "./App.scss";
import React, { useState, useEffect } from "react";

import BeerContainer from "./containers/BeerContainer/BeerContainer";
import SearchBar from "./components/SearchBar/SearchBar";
import Checkbox from "./containers/CheckboxContainer/Checkbox";

const App = () => {
  const [beers, setBeers] = useState([]);
  // This checks brew before 2010
  const [classicRangeCheckbox, setClassicRangeCheckbox] = useState();
  // This checks High Alcohol (ABV value greater than 6%)
  const [highAlcoholCheckbox, setHighAlcoholCheckbox] = useState();

  const [showAllBeers, setShowAllBeers] = useState();
  const [phCheckbox, setPhCheckbox] = useState();

  const [inputName, setInputName] = useState("");

  const getBeers = async (beerName) => {
    // This is default url
    let url = "https://api.punkapi.com/v2/beers?page=3&per_page=10";

    if (showAllBeers === true) {
      url = "https://api.punkapi.com/v2/beers?";
    }

    if (inputName !== "") {
      url = `https://api.punkapi.com/v2/beers?beer_name=${beerName}`;
    }

    if (classicRangeCheckbox === true) {
      url += "&brewed_before=01-2010";
    }
    if (highAlcoholCheckbox === true) {
      url += "&abv_gt=6";
    }
    if (phCheckbox === true) {
      url += "&abv_gt=6";
    }

    const res = await fetch(url);
    const data = await res.json();
    setBeers(data);
    console.log("this is the url for API", url);

    // console.log("this is data and name", data[0].name);
  };

  //initial load up to get 10 beers
  useEffect(() => {
    getBeers();
  }, []);
  // used to search for individual beer and change filters
  useEffect(() => {
    getBeers(inputName);
  }, [inputName, classicRangeCheckbox, highAlcoholCheckbox, showAllBeers]);
  const handleInput = (event) => {
    const cleanInput = event.target.value.toLowerCase().replace(" ", "_");

    setInputName(cleanInput);
  };

  const handleShowAllBeers = (event) => {
    const isTicked = event.target.checked;

    setShowAllBeers(isTicked);
  };
  const handleClassicCheckbox = (event) => {
    const isTicked = event.target.checked;
    // console.log("is classic range checkbox ticked? ", isTicked);
    setClassicRangeCheckbox(isTicked);
  };
  const handleAlcoholCheckbox = (event) => {
    const isTicked = event.target.checked;
    // console.log("is classic range checkbox ticked? ", isTicked);
    setHighAlcoholCheckbox(isTicked);
  };
  const handlePhCheckbox = (event) => {
    const isTicked = event.target.checked;
    setPhCheckbox(isTicked);
  };
  console.log("this is showAllBeers", showAllBeers);
  // console.log("this is inputName", inputName);

  // to get beer name called vice https://api.punkapi.com/v2/beers?beer_name=vice

  // Filter via PH level
  const filterBeerPh = beers.filter((word) => word.ph < 4 && word.ph !== null);
  // console.log("this is filtered beer list ", filterBeerPh);

  return (
    <main>
      <div className="main__header">
        <h1>Punk API</h1>
      </div>

      <SearchBar
        placeholder="search beer name"
        onInput={handleInput}
        value={inputName}
      />
      <Checkbox
        onChangeShowAllBeers={handleShowAllBeers}
        onChangeClassic={handleClassicCheckbox}
        onChangeAlcohol={handleAlcoholCheckbox}
        onChangePH={handlePhCheckbox}
      />
      {phCheckbox && (
        <>
          <div className="main__container">
            <BeerContainer beerData={filterBeerPh} />
          </div>
        </>
      )}

      <div className="main__container">
        <BeerContainer beerData={beers} />
      </div>
    </main>
  );
};

export default App;
