import React, { useState } from "react";
import "../TopNav/TopNav.scss";
import hamburger from "../../assets/Icons/48dp/menu_white_48dp.svg";
import { Link } from "react-router-dom";

function TopNav() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    console.log("before:", isDropdownOpen);
    setIsDropdownOpen(!isDropdownOpen);
    console.log("after:", isDropdownOpen);
  };

  return (
    <>
      <nav className="top-nav">
        <Link className="top-nav__heading-link">
          <h1 className="top-nav__heading-text">No Routine</h1>
        </Link>
        {/* <div className="top-nav__left"> */}
        <img
          // className="top-nav__menu-icon"
          src={hamburger}
          alt="menu icon"
          onClick={toggleDropdown}
        />
        <div
          className={`top-nav__dropdown ${
            isDropdownOpen ? "top-nav__dropdown--open" : ""
          }`}
        >
          <a href="#" className="top-nav__dropdown-item">
            Link 1
          </a>
          <a href="#" className="top-nav__dropdown-item">
            Link 2
          </a>
          <a href="#" className="top-nav__dropdown-item">
            Link 3
          </a>
        </div>
        {/* </div> */}
      </nav>
    </>
  );
}

export default TopNav;
