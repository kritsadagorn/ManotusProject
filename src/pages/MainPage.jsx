import React from "react";
import Navbar from "../components/Navbar";
import MapBuilding from "../components/MapBuilding";
import { createContext } from "react";

export const PositionContext = createContext();

const Main = () => {
  return (
    <div>
      <MapBuilding />
    </div>
  );
};

export default Main;
