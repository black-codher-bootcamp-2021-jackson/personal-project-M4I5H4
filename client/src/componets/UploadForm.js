import React from 'react';

const UploadForm = () => {
  return <div className="upload-form-conatiner">
      <h2>Upload Image to Library</h2>
        <div>
        <form className="upload-form" action="/upload-image" method="POST" encType="multipart/form-data">
          <div>
              <label>Select your image</label>
              <input type='file' name="image" />
          </div>
          <div>
          <label>Image Description</label>
                <textarea id="desc" name="desc" value="" rows="2" 
                          placeholder="Description">
                </textarea>
          </div>
          <div>
          <label>Location </label>
                <textarea id="loc" name="loc" value="" rows="2" 
                          placeholder="Location">
                </textarea>
          </div>
          <div>
          <label>Theme</label>
                <textarea id="thm" name="thm" value="" rows="2" 
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
