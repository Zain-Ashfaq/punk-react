const Checkbox = ({ onChange }) => {
  return (
    <label>
      <input type="checkbox" onChange={onChange}></input>
      Classic range - brewed before 2010
    </label>
  );
};
export default Checkbox;
