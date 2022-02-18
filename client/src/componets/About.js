import React from 'react';



const About = () => {
  return <div className='about-container'>
      <h2>About this app</h2>
      <p>This is a full stack web app that was made as an example of all the skilled leanred on the Black CodHer Bootcamp 2021/2022. It contains HTML, CSS, JavaScript(front and back end), REACT, NODE JS, MongoDB</p>

      <p>The app is a resource library for storing images that are used to create Music video treatments. On the home page '/' you can search the database using keywords which are relavent to your potential project. You can also serch more specifically by Decscription, location or theme. (Give examples). On the /upload page can upload images along with infomation which is saved to a datdbase. Here you can also see a slection of resently uploaded images. </p>
      
      <br/>
      <div className='mernDiv'>
      <div className='item'><h3><i className="fa-solid fa-code"></i> Full stack MERN Application</h3>
      <p></p></div>
      <br/>
      <div className='item'><h3><i className="fa-solid fa-database"></i> MongoDB - document database</h3>
      <p>BACKEND - Used to store the images and metadata makes use of mongoose </p></div>
      <br/>
      <div className='item'><h3><i className="fa-brands fa-node"></i> Express(.js) - Node.js web framework</h3>
      <p>BACKEND -  Used to create a RESTful API which make requests so that infomation is passed between the fronend and backend</p></div>
      <br/>
      <div className='item'><h3><a href='https://reactjs.org/'><i className="fa-brands fa-react"></i> React(.js)</a> - a client-side JavaScript framework</h3>
      <p>FRONTEND - A JavaScript library for building user interfaces </p>
      <br/></div>
      <div className='item'><h3><i className="fa-brands fa-node-js"></i> Node(.js) - the premier JavaScript web server</h3>
      <p>BACKEND - Used to create the server</p></div>
      <br/>
      </div>
     
  </div>;
};

export default About;
