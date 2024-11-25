import { CDN_LINK } from "../utils/constants";

const Itemlist = ({ items }) => {
 

  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-b-4 text-left h-[260px] flex justify-between items-center"
        >
          {/* Left: Details */}
          <div className="flex-1">
            <div className="flex flex-col p-2">
              <span className="font-bold">{item.card.info.name}</span>
              <span className="text-gray-600">
                {"₹" + item.card.info.price / 100}
              </span>
            </div>
            <p className="text-sm text-gray-500">
              {item.card.info.description}
            </p>
          </div>

          {/* Right: Image with Overlapping Button */}
          <div className="relative w-32 h-32 overflow-hidden rounded-lg bg-gray-200 flex-shrink-0">
            <img
              src={CDN_LINK + item.card.info.imageId}
              alt={item.card.info.name}
              className="w-full h-full object-cover"
            />
            {/* Overlapping Button */}
            <div className="absolute bottom-0 right-2 ">
            <button className=" bg-white  p-3 h-10 w-28 border-2 border-black-400 text-green-600  font-bold px-3 py-1 rounded-lg shadow-md cursor-pointer">
              ADD
            </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Itemlist;
