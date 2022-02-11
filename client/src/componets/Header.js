import React from "react";
import leologo from "../styles/Leologo.png"
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className="header">
        <div className="navimg">
            <img className="leologo" src={ leologo } alt="lion logo"/>
            <span> </span>
        </div>
      <h1>
        <i className="fas fa-photo-video"></i>  {" "} Reference Library {" "} </h1>
      <div className="breadcrumb_nav">
        <Link to="/" className="home"> <i class="fa-solid fa-magnifying-glass"></i> SEARCH </Link> |
        <Link to="/upload" className="uploadlink">
          {" "}
          <i className="fas fa-upload"></i> UPLOAD{" "}
        </Link>{" "}
        |
        <Link to="/about" className="aboutlink">
          {" "}
          <i className="fa-solid fa-circle-question"></i>{" "}
          ABOUT{" "}
        </Link>
      </div>
    </div>
  );
};

export default Header;
