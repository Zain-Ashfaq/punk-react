const ShowInfoCard = ({ beer }) => {
  for (let i = 0; i < beer.food_pairing.length; i++) {
    console.log(beer.food_pairing, i);
  }

  return <p>{beer.food_pairing}</p>;
};

export default ShowInfoCard;
