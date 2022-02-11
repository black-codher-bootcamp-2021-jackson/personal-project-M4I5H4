import React from 'react';

const Collections = () => {
  return <div className="collections">
    <span className="span person-btn"> <i className="fa-solid fa-square-poll-horizontal"></i> {" "}DESCRIPTION{" "}</span>
    <span className="span location-btn"> <i className="fas fa-map-marked-alt"></i> {" "} LOCATION{" "}</span>
    <span className="span colour-btn"> <i className="fas fa-palette"></i> {" "} THEME {" "}</span> 
  </div>;
};

export default Collections;
