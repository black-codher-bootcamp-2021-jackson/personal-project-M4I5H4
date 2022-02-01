import React from 'react';

const Collections = () => {
  return <div className="collections">
      <span className="colour-btn"> <i className="fas fa-palette"></i> {" "} Colour {" "}</span>
      <span className="location-btn"> <i className="fas fa-map-marked-alt"></i> {" "} Location{" "}</span>
      <span className="person-btn"> <i className="fas fa-portrait"></i> {" "}Person{" "}</span>
  </div>;
};

export default Collections;
