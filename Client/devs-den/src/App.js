// Libraries
import React, { useState } from 'react';

// Compnents
import NavBar from './components/NavBar/NavBar';

// Styles
import './App.css';
import Post from './Post.jsx'

function App() {
  // States
  const [value, setValue] = useState("");
  // const [clear, setClear] = useState("");

  // Helper functions
  // const changeValue = newValue => { setValue(newValue) };

  return (
    <div className="App">
      <NavBar value={value} setValue={setValue} />
      <Post />
    </div>
  );
}

export default App;

// changeValue={() => changeValue(e => { setValue(e.target.value) })}