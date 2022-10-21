const BeerCard = (props) => {
  const { name } = props;
  console.log(name);

  return (
    <div>
      <p>{name}</p>
    </div>
  );
};

export default BeerCard;
