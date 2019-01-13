import React from "react";
import "./style.css";

function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-dark">
    <ul className="nav">
      <li className="nav-item"><a className="navbar-brand" href="https://www.sanrio.com/">
      <img id="nav-img" src="https://logos-download.com/wp-content/uploads/2016/06/Sanrio_logo-700x210.png" alt="sanrio logo"/>
      <br></br>
      <p>images property of Sanrio</p>
      </a>
      </li>
      <li className="nav-item"><p id="score-text">Score:   </p><span id="score"></span></li>
      <li><p id="top-score-text"> | Top Score:  </p> <span id="top-score"></span></li>
    </ul>
    </nav>
  );
}


export default Navbar;