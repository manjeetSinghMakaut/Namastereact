import { CDN_LINK } from "../utils/constants";

const ResturantCard = (props) => {
  const { resdata } = props;

  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRatingString,
    costForTwo,
    sla: {slaString},
  } = resdata?.info;

  return (
    <div className="h-[500px] w-[210px] p-[10px] cursor-pointer transition-transform ease-in-out duration-300 bg-[#e7dede] m-[10px] rounded-[10px] hover:-translate-y-2 hover:shadow-[10px_30px_27px_-5px_rgba(50,50,93,0.25)]">
      <img
        className="w-[190px] h-[250pxpx] rounded-md"
        alt="pyar han pyar"
        src={CDN_LINK + cloudinaryImageId}
      />
      <h3 className="font-bold py-3 ">{name}</h3>
      <h3>{cuisines.join(" ")}</h3>
      <h3>{avgRatingString} Stars</h3>
      <h3>{costForTwo}</h3>
      <h3>{slaString}</h3>
    </div>
  );
};

export default ResturantCard;
