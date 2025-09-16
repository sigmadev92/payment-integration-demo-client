import React from "react";
import { Outlet } from "react-router-dom";

function Navbar() {
  return (
    <>
      <header>
        <div></div>
        <nav></nav>
      </header>
      <Outlet />
    </>
  );
}

export default Navbar;
