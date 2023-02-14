import React from "react";
import { Link } from "react-scroll";
import './Nav.css'
function Nav() {
  return (
    <div className="navBar">
      <button className="navOp">
        <Link className="opLink" to="Home" spy={true} smooth={true}>
          Home
        </Link>
      </button>
      <button className="navOp">
        <Link to="About" className="opLink" spy={true} smooth={true}>
          About Me
        </Link>
      </button>
      <button className="navOp">
        <Link to="Skills" className="opLink" spy={true} smooth={true}>
          Skills
        </Link>
      </button>
      <button className="navOp">
        <Link to="Work" className="opLink" spy={true} smooth={true}>
          Work
        </Link>
      </button>
     </div>
  );
}

export default Nav;
