import { CDN_LINK } from "../utils/constants";

const ResturantCard = ({ resdata }) => {
  // Destructure flattened properties and provide default values
  const {
    cloudinaryImageId,
    name,
    avgRatingString,
    costForTwo,
    "sla.slaString": slaString = "N/A",
  } = resdata;

const cuisines = Object.keys(resdata)
.filter((key) => key.startsWith("cuisines."))
.map((key) => resdata[key]);
  return (
    <div className="h-[490px] w-[210px] p-[10px] cursor-pointer transition-transform ease-in-out duration-300 bg-[#e7dede] m-[10px] rounded-[10px] hover:-translate-y-2 hover:shadow-[10px_30px_27px_-5px_rgba(50,50,93,0.25)]">
      <img
        className="w-[190px] h-[250px] rounded-md"
        src={cloudinaryImageId ? `${CDN_LINK}${cloudinaryImageId}` : ""}
        alt={name}
      />
      <h3 className="font-bold py-3 ">{name}</h3>
      <h3 className="font-serif text-sm">{cuisines.join(", ")}</h3>
      <h3 className=" text-sm">{avgRatingString} Stars</h3>
      <h3 className=" text-sm">{costForTwo}</h3>
      <h3 className=" text-sm">{slaString}</h3>
    </div>
  );
};


// higher order component
// input - restaurantcard ==> restuarantcardpromotes

//  export const withpromoted =(ResturantCard)=>{
//   return (prop) =>{
//     return (
//       <div>
//         <label>promoted</label>
//         <ResturantCard {...prop}/>

//       </div>
//     )
//   }
// };

export default ResturantCard;
