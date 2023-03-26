import React, { useState } from "react";
import "./navbar.scss";
import { ArrowDropDown, Search } from "@material-ui/icons";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
      <div className="container">
        <img className="page-logo" src={logo} alt="" />
        <div className="left">
          <Link to="/" className="link">
            <span>Homepage</span>
          </Link>
          <Link to="/series" className="link">
            <span>Series</span>
          </Link>
          <Link to="/movie" className="link">
            <span>Movies</span>
          </Link>
        </div>
        <div className="right">
          <Link to="/movies">
            <button className="new-movie-button">New Movie</button>
          </Link>
          <Link to="/search" className="link">
            <Search className="icon" />
          </Link>
          <img
            src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
          />
          <div className="profile">
            <ArrowDropDown className="icon" />
            <div className="options">
              <span>Settings</span>
              <span>Logout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
