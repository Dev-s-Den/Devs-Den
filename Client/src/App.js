// Libraries
import React, { useState } from 'react';

// Compnents
import NavBar from './components/NavBar';
import Post from './components/Post';
import ForumNavBar from './components/ForumNavBar';

// Styles
import './App.css';

function App() {
  // States
  const [value, setValue] = useState("");
  // const [clear, setClear] = useState("");

  // Helper functions
  // const changeValue = newValue => { setValue(newValue) };

  return (
    <div className="App">
      <NavBar value={value} setValue={setValue} />
      <ForumNavBar></ForumNavBar>
      <Post />
    </div>
  );
}

export default App;

// changeValue={() => changeValue(e => { setValue(e.target.value) })}