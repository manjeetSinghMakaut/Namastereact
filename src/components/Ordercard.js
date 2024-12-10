import { CDN_LINK } from "../utils/constants";
const Itemlist = ({ items }) => {
  return (
    <div>
      {items.map((item) => (
        
        <div
        data-testid= "fooditems"
          key={item.card.info.id}
          className="p-2 m-2 border-b-4 text-left h-[260px] flex justify-between items-center"
        >
          {/* Left: Details */}
          <div className="flex-1">
            <div className="flex flex-col p-2">
              <span className="font-bold">{item.card.info.name}</span>
              <span className="text-gray-600">
                <p className="text-sm text-gray-500 mt-4 mb-4">
                  {item.card.info.description}
                </p>
              </span>
              <p className="text-base font-bold">{"₹" +
                (item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100)}</p>
            </div>
          </div>

          {/* Right: Image with Overlapping Button */}
          <div className="relative w-32 h-32 overflow-hidden rounded-lg bg-gray-200 flex-shrink-0">
            <img
              src={CDN_LINK + item.card.info.imageId}
              alt={item.card.info.name}
              className="w-full h-full object-cover"
            />
            {/* Overlapping Button */}
            <div className="absolute bottom-0 right-2 "></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Itemlist;
