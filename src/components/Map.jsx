import React from "react";
import build1 from '../assets/Building1.png';

const MapBuilding = () => {
  return (
    <div className="relative w-[500px] h-[500px]">
      {/* PicBuilding */}
      <img src={build1} className="w-full h-full object-cover" alt="Building 1" />

      {/* Position Number */}
      <div className="absolute top-[75%] right-[20%] text-brown-600 text-xl font-bold">1</div>
      <div className="absolute top-[75%] left-[25%] text-brown-600 text-xl font-bold">2</div>
      <div className="absolute top-[15%] left-[5%] text-brown-600 text-xl font-bold">3</div>
      <div className="absolute -top-[2%] right-[70%] text-brown-600 text-xl font-bold">4</div>
    </div>
  );
};

export default MapBuilding;
