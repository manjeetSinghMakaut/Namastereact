import React from "react";

const Shimmer = ({ count }) => {
  return (
    <div className="flex flex-wrap justify-center gap-4 p-4 mt-14">
      {Array.from({ length: count }).map((_, index) => (
        <div
          key={index}
          className="h-[500px] w-[210px] p-[10px] cursor-pointer bg-white border border-gray-200 rounded-lg shadow-md animate-pulse"
        >
        
          <div className="h-[250px] bg-gray-300 rounded-t-lg"></div>

  
          <div className="p-4 mt-4">
            <div className="h-[20px] bg-gray-300 rounded mb-5" ></div>
            
            <div className="h-[20px] bg-gray-300 rounded w-3/4 mb-2"></div>
            <div className="h-[20px] bg-gray-300 rounded w-3/4 mb-2"></div>
            <div className="h-[20px] bg-gray-300 rounded w-3/4 mb-2"></div>
            <div className="h-[20px] bg-gray-300 rounded w-3/4 mb-2"></div>
           
          </div>
        </div>
      ))}
    </div>
  );
};

export default Shimmer;
