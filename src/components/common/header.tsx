import React from "react";
import { NavLink } from "react-router-dom";

export default function head() {
  return (
    <nav>
      <NavLink to="/">
        <h1>FOOD LOGGER</h1>
      </NavLink>
    </nav>
  );
}
