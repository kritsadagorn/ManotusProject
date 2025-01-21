import { Outlet } from "react-router-dom";

export default function AppRoutes() {
  return (
    <div>
      <div>
        <Outlet></Outlet>
      </div>
    </div>
  );
}
