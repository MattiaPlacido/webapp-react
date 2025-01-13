import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar.jsx";

export default function DefaultLayout() {
  return (
    <div className="bg-dark text-white vh-100">
      <NavBar />
      <Outlet />
    </div>
  );
}
