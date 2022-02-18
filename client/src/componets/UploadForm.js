import React from 'react';
import { useState } from 'react';
import { name } from 'react-lorem-ipsum';


const UploadForm = () => {
  const [inputs, setImputs] = useState
  const handleChange = (e) =>{
    const imageFile = e.target.file
    const desc = e.target.description;
    const loc = e.target.location
    const thm = e.target.theme

    setImputs(values =>({...values, [name]: imageFile, [name]:desc, [name]:loc, [name]:thm}))
  }

  const handleSubmit = (e) =>{
    e.preventDefault()
    alert(inputs)
  }
  return <div className="upload-form-conatiner">
      <h2>Upload Image to Library</h2>
        <div>
        <form className="upload-form" action="/upload-image" method="POST" encType="multipart/form-data">
          <div>
              <label>Select your image</label>
              <input type='file' name="imageFile" value={inputs.imageFile || ""} onChange={handleChange}/>
          </div>
          <div>
          <label>Image Description</label>
                <textarea id="desc" type="text" name="desc" value={inputs.desc || ""} rows="2" 
                          placeholder="Description">
                </textarea>
          </div>
          <div>
          <label>Location </label>
                <textarea id="loc" type="text" name="loc" value={inputs.loc || ""} rows="2" 
                          placeholder="Location">
                </textarea>
          </div>
          <div>
          <label>Theme</label>
                <textarea id="thm" type="text" name="thm" value={inputs.thm || ""} rows="2" 
                          placeholder="Theme">
                </textarea>
          </div>
          <div>
              <input type="submit" name="btn-upload-image" value="Upload" />
          </div>
        </form>
    </div>
  </div>;
};

export default UploadForm;
