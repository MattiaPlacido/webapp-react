import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar.jsx";
import styles from "./layouts.module.css";

export default function DefaultLayout() {
  return (
    <div className={`${styles.layout_wrapper}`}>
      <NavBar />
      <Outlet />
    </div>
  );
}
