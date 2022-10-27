import "./Checkbox.scss";

const Checkbox = ({
  onChangeClassic,
  onChangeAlcohol,
  onChangeShowAllBeers,
  onChangePH,
}) => {
  return (
    <div className="checkbox-container">
      <label>
        <input type="checkbox" onChange={onChangeClassic}></input>
        Classic Range
      </label>
      <label>
        <input type="checkbox" onChange={onChangeAlcohol}></input>
        High Alcohol
      </label>
      <label>
        <input type="checkbox" onChange={onChangeShowAllBeers}></input>
        Show All Beers
      </label>
      <label>
        <input type="checkbox" onChange={onChangePH}></input>
        PH Less Than 4
      </label>
    </div>
  );
};
export default Checkbox;
