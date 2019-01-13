import React from "react";
import "./style.css";

function Nav() {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <a className="navbar-brand" href="https://www.sanrio.com/">
      <img id="nav-img" src="https://logos-download.com/wp-content/uploads/2016/06/Sanrio_logo-700x210.png" alt="sanrio logo"/>
      <br></br>
      <p>images property of Sanrio</p>
      </a>
    </nav>
  );
}

export default Nav;