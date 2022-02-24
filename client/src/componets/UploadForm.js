import React from 'react';
import { useState } from 'react';


const UploadForm = () => {
  const [inputs, setInputs] = useState({ 
    imageFile: "", desc: "", loc: "", thm:""
  })
  const handleChange = (e) =>{
    const {name, value} = e.target
    setInputs((prevState) => {
      return {
        ...prevState, [name]: value,
      };
    });
  };

  const {imageFile, desc, loc, thm} = inputs
  // const handleChange = (e) => {
  //  setInputs({ ...inputs, [e.target.name]: e.target.value})

  // }

  const handleSubmit = (e) =>{
    e.preventDefault()
    alert(inputs)
  }

  return <div className="upload-form-conatiner">
      <h2>Upload Image to Library</h2>
        
        <form className="upload-form" action="/images" method="POST" encType="multipart/form-data">
        
            <label>Select your image{" "}
              <input type='file' name="imageFile" value={imageFile} />
            </label>{" "}
          
            <label> <i className="fa-solid fa-square-poll-horizontal"></i>{" "} Description{" "}
              <textarea id="desc" type="text" name="desc" value={desc} rows="2" 
                          placeholder="general desc of image" onChange={handleChange}>
              </textarea>
            </label>{" "}
          
            <label><i className="fas fa-map-marked-alt"></i> {" "}Location{" "}
                <textarea id="loc" type="text" name="loc" value={loc} rows="2" 
                          placeholder="eg: studio, london" onChange={handleChange}>
                </textarea>
            </label>{" "}
          
            <label><i className="fas fa-palette"></i> {" "}Theme{" "}
                <textarea id="thm" type="text" name="thm" value={thm} rows="2" 
                          placeholder="eg: colour or mood" onChange={handleChange}>
                </textarea>
            </label>{" "}
          
              <input className="submit-btn" type="submit" name="btn-upload-image" value="Upload" onSubmit={handleSubmit}/>
          
        </form>
    
  </div>;
};

export default UploadForm;
