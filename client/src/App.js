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
import { getAllProfiles } from "./services/profileService";
import { getAllImages } from "./services/imageService";


function App() {

  // const[images, setImages] = useState(null)

  // useEffect(() => {
  //   async function getImages(){
  //     if(!images) {
  //       const res = await getAllImages();
  //       setImages(res)
  //     }
  //   }

  //   getImages();
  // }, [images])
  const [profiles, setProfiles] = useState(null);

  useEffect(() => {
    async function getProfiles() {
      if (!profiles) {
        const response = await getAllProfiles();
        setProfiles(response);
      }
    }

    getProfiles();
  }, [profiles]);

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

  return (
    <Router>
    <Routes>
      <Route exact path="/"
      element={ <><Header /><Search /> <Collections /> </>}
      />
    <Route exact path="/upload"
      element={ <><Header/> <UploadForm /> </>  }
     />
     <Route exact path="/about"
     element={
       <>
       <Header/>
       <About />
      {/* <ul>
        {profiles && profiles.length > 0 ? (
          profiles.map((profile) => renderProfile(profile))
        ) : (
          <p>No profiles found</p>
        )}
      </ul> */}
       </>
     }
     />
    </Routes>
    </Router>
  );
};

export default App;
