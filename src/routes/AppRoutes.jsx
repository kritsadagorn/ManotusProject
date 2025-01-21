import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function AppRoutes() {
  return (
    <div>
      <Navbar/>
      <div>
        <Outlet></Outlet>
      </div>
    </div>
  );
}
