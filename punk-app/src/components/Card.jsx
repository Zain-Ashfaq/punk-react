const Card = ({ beerName, firstBrewed, tagline }) => {
  return (
    <>
      <p>{`This is beer name ${beerName}`}</p>
      <p>{`Brew date ${firstBrewed}`}</p>
      <p>{tagline}</p>
    </>
  );
};

export default Card;
