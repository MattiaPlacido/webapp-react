import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <>
      <div className="text-center p-4">
        <NavLink to="/movies" className="nav-link text-decoration-none fs-5">
          Home
        </NavLink>
      </div>
      <hr className="m-0"></hr>
    </>
  );
}
