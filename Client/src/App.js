// Libraries
import React, { useState } from 'react';

// Compnents
import NavBar from './components/NavBar';
import ForumNavBar from './components/ForumNavBar';
import Forum from './components/Forum';
import Chat from './components/Chat';


// Styles
import './App.css';

function App() {
  // States
  const [value, setValue] = useState("");

  const [showModal, setShowModal] = useState("false")

  return (
    <div className="App">
      <NavBar value={value} setValue={setValue} />
      <Forum />
      <ForumNavBar></ForumNavBar>

      <Chat show={showModal} closeModal={() => setShowModal(false)} />
      <button className='messaging-bar' onClick={() => setShowModal(true)}>
        <div className="messaging-bar-avatar-container">
          <span className="messaging-bar-avatar"></span>
        </div>
        <p>Messaging</p>
      </button>
    </div>
  );
}

export default App;