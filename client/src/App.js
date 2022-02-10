import React, { useState, useEffect } from "react";
import "./styles/App.css"
import Header from "./componets/Header";
import { BrowserRouter as Router, Route, Routes,
} from "react-router-dom";
import Search from "./componets/Search";
import Collections from "./componets/Collections";
import UploadForm from "./componets/UploadForm";
import About from "./componets/About";

// SERVICES THAT CALL OUR API ENDPOINTS
// import { getAllProfiles } from "./services/profileService";
import { getAllImages } from "./services/imageService";


function App() {

  const[images, setImages] = useState(null)

  useEffect(() => {
    async function getImages(){
      if(!images) {
        const res = await getAllImages();
        setImages(res.images)
      }
    }

    getImages();
  }, [images]);
  console.log(images);
  // const [profiles, setProfiles] = useState(null);

  // useEffect(() => {
  //   async function getProfiles() {
  //     if (!profiles) {
  //       const response = await getAllProfiles();
  //       setProfiles(response);
  //     }
  //   }

  //   getProfiles();
  // }, [profiles]);

  // const renderProfile = (user) => {
  //   return (
  //     <li key={user._id}>
  //       <h3>
  //         {`${user.first_name} 
  //         ${user.last_name}`}
  //       </h3>
  //       <p>{user.location}</p>
  //     </li>
  //   );
  // };

//   const renderImage = (img) => {
//     return (
//       <li key={img._id} className="imgitem">
// <h3>
//   {`${img.title}`}
// </h3>
// <p>{img.location}</p>
// <p>{img.description}</p>
//       </li>
//     )
//   }

  return (
    <Router>
    <Routes>
      <Route exact path="/"
      element={ <><Header /><Search /> <Collections /> </>}
      />
    <Route exact path="/upload"
      element={ <><Header/> <UploadForm /> 
  
       <div className="imglist"> {images && images.length > 0 ? (
      images.map((image) => <img width="500px" height="300px"src={`http://localhost:8080/api/images/${image.filename}`} />)
      ) : (<p>No images found</p>
      )} </div>
      </>  }
     />
     <Route exact path="/about"
     element={
       <>
       <Header/>
       <About />
       </>
     }
     />
    </Routes>
    </Router>
  );
};

export default App;
