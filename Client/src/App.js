// Libraries
import React, { useState } from 'react';

// Compnents
import NavBar from './components/NavBar';
import ForumNavBar from './components/ForumNavBar';
import Forum from './components/Forum';

// Styles
import './App.css';

function App() {
  // States
  const [value, setValue] = useState("");

  return (
    <div className="App">
      <NavBar value={value} setValue={setValue} />
      <ForumNavBar />
      <Forum />
    </div>
  );
}

export default App;