const Checkbox = ({
  onChangeClassic,
  onChangeAlcohol,
  onChangeShowAllBeers,
  onChangePH,
}) => {
  return (
    <div>
      <label>
        <input type="checkbox" onChange={onChangeClassic}></input>
        Classic range - brewed before 2010
      </label>
      <label>
        <input type="checkbox" onChange={onChangeAlcohol}></input>
        High Alcohol - ABV value greater than 6%
      </label>
      <label>
        <input type="checkbox" onChange={onChangeShowAllBeers}></input>
        Show All beers
      </label>
      <label>
        <input type="checkbox" onChange={onChangePH}></input>
        PH less than 4
      </label>
    </div>
  );
};
export default Checkbox;
