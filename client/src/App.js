import React, { useState, useEffect } from "react";
import "./styles/App.css"
import Header from "./componets/Header";
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import Search from "./componets/Search";

// SERVICES THAT CALL OUR API ENDPOINTS
import { getAllProfiles } from "./services/profileService";


function App() {
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

  const renderProfile = (user) => {
    return (
      <li key={user._id}>
        <h3>
          {`${user.first_name} 
          ${user.last_name}`}
        </h3>
        <p>{user.location}</p>
      </li>
    );
  };

  return (
    <Router>
    <div className="app-container">
      <Route exact path="/"
      render={() => ( 
        <>
       <Header/>
       <Search />
      </>
      
      )}
     />
    <Route exact path="/upload"
      render={() => ( 
        <>
       <Header/>
       
      </>
      
      )}
     />
     <Route exact path="/about"
     render={() => (
       <>
       <Header/>
      <ul>
        {profiles && profiles.length > 0 ? (
          profiles.map((profile) => renderProfile(profile))
        ) : (
          <p>No profiles found</p>
        )}
      </ul>
    
       </>
     )}
     />
     </div> 
    </Router>
  );
}

export default App;
