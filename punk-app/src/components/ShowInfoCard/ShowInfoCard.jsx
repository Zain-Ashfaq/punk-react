import "./ShowCardInfo.scss";

const ShowInfoCard = ({ info }) => {
  console.log("this is beer info in ShowInfoCard ", info);

  return (
    <div className="beercard_info">
      <h2>Food Pairings</h2>
      <p>{info[0]}</p>
      <p>{info[1]}</p>
      <p>{info[2]}</p>
    </div>
  );
};

export default ShowInfoCard;
