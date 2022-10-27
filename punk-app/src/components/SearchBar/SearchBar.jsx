import "./SearchBar.scss";

const SearchBar = ({ placeholder, onInput, value }) => {
  return (
    <div className="main__searchbox">
      <input placeholder={placeholder} onInput={onInput} value={value}></input>
    </div>
  );
};

export default SearchBar;
