import { CDN_LINK } from "../utils/constants";

const ResturantCard = (props) => {
  const { resdata } = props;

  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRatingString,
    costForTwo,
    sla: { deliveryTime },
  } = resdata.info;

  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="pyar han pyar"
        src={CDN_LINK + cloudinaryImageId}
      />
      <h3>{name}</h3>
      <h3>{cuisines.join(" ")}</h3>
      <h3>{avgRatingString} Stars</h3>
      <h3>{costForTwo}</h3>
      <h3>{deliveryTime} MINUTES</h3>
    </div>
  );
};

export default ResturantCard;
