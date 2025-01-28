import React from "react";
import build2 from "../assets/Building2.jpg";
import Stats from "../components/Stats";

const MapBuilding = () => {
  return (
    <div className="h-[1000px]">
      <div className="my-20 mx-5 md:mx-10 bg-black/20 rounded-2xl shadow-black/40 shadow-lg  flex justify-around items-center h-[102%]">
        <div className="relative border-2 border-white/90">
          {/* PicBuilding */}
          <img
            src={build2}
            className="w-auto h-[500px] object-contain"
            alt="Building"
          />
        </div>
        <Stats />
      </div>
    </div>
  );
};

export default MapBuilding;
