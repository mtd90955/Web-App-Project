import React, { useState } from 'react';
import './UploadForm.css';

function AudioUploadForm() {
  const [work, setWork] = useState('');
  const [artist, setArtist] = useState('');
  const [file, setFile] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();
    // Do something with the artist name, work name, and file here
  }

  function handleFileChange(event) {
    setFile(event.target.files[0]);
  }

  return (
   <div className="upload-form-div">
    <form onSubmit={handleSubmit}>
      <div>
      <div>
        <label htmlFor="work">Work:</label>
        <input
          type="text"
          id="work"
          name="work"
          value={work}
          onChange={(event) => setWork(event.target.value)}
          required
        />
      </div>
        <label htmlFor="artist">Artist:</label>
        <input
          type="text"
          id="artist"
          name="artist"
          value={artist}
          onChange={(event) => setArtist(event.target.value)}
          required
        />
      </div>
      
      <div>
        <label htmlFor="file">File:</label>
        <input
          type="file"
          id="file"
          name="file"
          accept="audio/*"
          onChange={handleFileChange}
          required
        />
      </div>
      <button type="submit">Upload</button>
    </form>
    </div>
  );
}

export default AudioUploadForm;
