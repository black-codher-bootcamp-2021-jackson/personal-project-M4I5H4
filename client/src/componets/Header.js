import React from "react";
import leolion from "../styles/leolion-black.png"

const Header = () => {
  return (
    <div className="header">
        <div className="navimg">
            <img className="leolion" src={ leolion } alt="lion logo"/>
        </div>
      <h1>
        <i className="fas fa-photo-video"></i>  {" "}Reference Library {" "}
      </h1>
      <div className="breadcrumb_nav">
        <span className="home"> HOME </span> |
        <span className="uploadlink">
          {" "}
          <i class="fas fa-upload"></i> UPLOAD{" "}
        </span>{" "}
        |
        <span className="aboutlink">
          {" "}
          <i class="far fa-comment-dots"></i>{" "}
          ABOUT{" "}
        </span>
      </div>
    </div>
  );
};

export default Header;
