import styles from "./Navbar.module.css";
import { NavLink, Outlet } from "react-router-dom";

function Navbar() {
  return (
    <>
      <header className={styles.header}>
        <div>
          <div></div>
          <div>
            <h1>Razorpay Integration</h1>
          </div>
        </div>
        <nav>
          <ul>
            <li>
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li>
              <NavLink to={"/cart"}>Cart</NavLink>
            </li>
            <li>
              <NavLink to={"/about"}>About</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet />
    </>
  );
}

export default Navbar;
