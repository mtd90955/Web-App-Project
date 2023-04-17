import React, { useState } from 'react';
import './DeleteForm.css';

function DeleteForm() {
  const [del, setDelete] = useState('');

  function handleDelete(event) {
    event.preventDefault();
    // Do something with the artist name, work name, and file here
  }

  function handleFileChange(event) {
    setDelete(event.target.files[0]);
  }

  return (
   <div className="delete-form-div">
    <form onSubmit={handleDelete}>
      <div>
      <div>
        <label htmlFor="work">Select item to delete:</label>
        <input
          type="text"
          id="work"
          name="work"
          value={del}
          onChange={(event) => setDelete(event.target.value)}
          required
        />
      </div>
      </div>
      <button type="submit">Delete</button>
    </form>
    </div>
  );
}

export default DeleteForm;