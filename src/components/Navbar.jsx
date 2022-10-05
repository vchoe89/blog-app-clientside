import React, { useContext } from "react";
import logo from "../images/logo.png";
import logo2 from "../images/logo2.jpg";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/authContext";

const Navbar = () => {
  const { currentUser, logout } = useContext(AuthContext);

  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <Link to="/">
            <img className="navbar__logo" src={logo2} alt="" />
          </Link>
        </div>
        <div className="links">
          <Link className="links" to={"/?cat=art"}>
            <h6>ART</h6>
          </Link>
          <Link className="links" to={"/?cat=science"}>
            <h6>SCIENCE</h6>
          </Link>
          <Link className="links" to={"/?cat=technology"}>
            <h6>TECHNOLOGY</h6>
          </Link>
          <Link className="links" to={"/?cat=cinema"}>
            <h6>CINEMA</h6>
          </Link>
          <Link className="links" to={"/?cat=design"}>
            <h6>DESIGN</h6>
          </Link>
          <Link className="links" to={"/?cat=food"}>
            <h6>FOOD</h6>
          </Link>
          <span>{currentUser?.username}</span>
          {currentUser ? (
            <span onClick={logout}>Logout</span>
          ) : (
            <Link className="link" to="/login">
              Login
            </Link>
          )}
          <span className="write">
            <Link className="links" to="/write">
              Write
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
