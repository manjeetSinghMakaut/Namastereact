import React from "react";
import { CDN_LINK } from "../utils/constants";
const RestaurantSmallCard = (props) => {
  const { SmallCard } = props;

  const { name, price, imageId, description } = SmallCard.card.info;

  return (
    <div className="SmallCard-container">
      <div className="semi-SmallCard-container">
        <div className="inner-SmallCard-container">
          <div className="major-details">
            <div className="name-price-div">
              <h4>{name}</h4>
              <p> ₹ {price / 100}</p>
            </div>
            <div className="description">
              <p>{description}</p>
            </div>
          </div>
          <div className="pic">
            <img className="pic" alt="pyar han pyar" src={CDN_LINK + imageId} />
          </div>
        </div>
      </div>
      <div className="Border-line"></div>
    </div>
  );
};

export default RestaurantSmallCard;
