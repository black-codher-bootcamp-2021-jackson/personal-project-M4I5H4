import React from 'react';

import { LoremIpsum } from 'react-lorem-ipsum';

const About = () => {
  return <div className='about-container'>
      <h2>About this app</h2>
      <LoremIpsum p={3} />
  </div>;
};

export default About;
