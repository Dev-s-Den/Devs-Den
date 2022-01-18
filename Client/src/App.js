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

  const [showModal, setShowModal] = useState(false)

  const [forum,setForum] = useState('none')

  return (
    <div className="App">
      <NavBar value={value} setValue={setValue} />
      <ForumNavBar setForum = {setForum}/>
      {!(forum === "none") && (<Forum forum_id = {forum}/>)}
      {(forum === "none") && (<p>HOMEPAGE</p>)}
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