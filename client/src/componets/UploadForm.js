import React from 'react';

const UploadForm = () => {
  return <div className="upload-form-conatiner">
      <h2>Upload Image to Library</h2>
        <div>
        <form className="upload-form" action="/upload" method="POST" encType="multipart/form-data">
           <div>
                <label className="upload-title-name">Image Title:
                {""} </label><input  type="text" id="name" placeholder="Name" 
                    //    value="" name="name" required 
                       />
            </div>
            <div >
            <label className="upload-description">Image Description: </label>
                <textarea  id="desc" name="desc" 
                // value="" 
                rows="3" placeholder="Description" required>
                </textarea>
            </div>
            <div >
                <label  className="upload-image-file" >Upload Image:{""}</label>
                <input type="file" id="image" 
                       name="image" 
                    //    value="" required 
                       />
            </div>
            <div>
                <button type="submit">Submit</button>
            </div>
        </form>
    </div>
  </div>;
};

export default UploadForm;
