import React, { useState } from 'react'
import './App.css'

const App = () => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [notes, setNotes] = useState([]);

  const submission = (e) => {
    e.preventDefault();
    if (title.trim() === "" || details.trim() === "") {
      alert("Please fill in both fields!");
      return;
    }

    const newNote = { id: Date.now(), title, details };
    setNotes([...notes, newNote]);

    // clear fields
    setTitle("");
    setDetails("");
  };

  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  return (
    <>
      <div className="container">
        {/* Form Section */}
        <div className="divide">
          <form onSubmit={submission}>
            <h1>Note App</h1>

            <input
              type="text"
              placeholder="Enter your task"
              className="fillform"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />

            <textarea
              className="fillformdetails"
              placeholder="Write details"
              value={details}
              onChange={(e) => setDetails(e.target.value)}
            ></textarea>

            <button type="submit" className="btns">
              Add
            </button>
          </form>
        </div>

        {/* Notes Section */}
        <div className="diva">
          <h1 className="h1q">Your Notes</h1>
          <div className="notes">
            {notes.length === 0 ? (
              <p>No notes yet. Add one!</p>
            ) : (
              notes.map((note) => (
                <div key={note.id} className="note">
                  <h2>{note.title}</h2>
                  <p>{note.details}</p>
                  <button
                    className="deleteBtn"
                    onClick={() => deleteNote(note.id)}
                  >
                    Delete
                  </button>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
