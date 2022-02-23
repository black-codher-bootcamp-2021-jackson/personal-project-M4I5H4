import React, { useState, useEffect } from "react";
import "./styles/App.css"
import Header from "./componets/Header";
import { BrowserRouter as Router, Route, Routes,
} from "react-router-dom";
import Search from "./componets/Search";
import Collections from "./componets/Collections";
import UploadForm from "./componets/UploadForm";
import About from "./componets/About";
import SingleImage from "./componets/SingleImage";


// SERVICES THAT CALL OUR API ENDPOINTS
// import { getAllProfiles } from "./services/profileService";
import { getAllImages, deleteImage, } from "./services/imageService";


function App() {

  const[images, setImages] = useState(null)
  const [searchTerm, setSearchTerm] = useState("")


  useEffect(() => {
    async function getImages(){
      if(!images) {
        const res = await getAllImages();
        setImages(res.images)
      }
    }
    getImages();
  }, [images]);
  console.log(images)

  // const uploadImage = () => {
  //   postImage()
  //   const updateList = images
  // }

  //Delete fucntion
  const deleteOnClick = (id) => {
     deleteImage(id)
    const currentList = images.filter(
      (img) => img._id !== id
    );
    setImages(currentList);
  }

  //Search function
//  async function findImages(value) {

//  }

  return (
    <Router>
    <Routes>
      <Route exact path="/"
      element={ <><Header /><Search searchTerm={searchTerm} setSearchTerm={setSearchTerm}/> <Collections /> 
      <div className="imglist"> <h2>Searched Images</h2>{images && images.length > 0 ? (
      images.map((image) => <div className="img"><img alt={`${image.filename}`} width="350px" height="200px"src={`http://localhost:8080/api/images/${image.filename}`} /> 
      </div>)
        ) : 
        (<p>No images found</p>)
        } 
        {/* <div>
        {images ? (
          images.map((nestImg) =>{
            if(typeof nestImg.metadata !== "undefined")
            return <p>{nestImg.metadata.description}</p>
          })):(<p>metadata not found</p>)}</div> */}
        </div>
      <SingleImage /> 
      </>}
      />

    <Route exact path="/upload"
      element={ <><Header/> <UploadForm /> 
      <div className="imglist"> <h2>Recent Images</h2>{images && images.length > 0 ? (
        images.map((image) => <div className="img"><img alt={`${image.filename}`} width="350px" height="200px"src={`http://localhost:8080/api/images/${image.filename}`} /> <button type="button" className="del-btn" onClick={() => deleteOnClick(image._id)}><i className="fa-solid fa-trash"></i> Delete</button></div>
       )  
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
