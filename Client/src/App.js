// Libraries
import React, { useState, useEffect } from 'react';

// Compnents
import NavBar from './components/NavBar';
import ForumNavBar from './components/ForumNavBar';
import Forum from './components/Forum';
import Home from './components/Home';
import Chat from './components/Chat';

// Styles
import './App.css';
import axios from 'axios';

function App() {
  const userObj = { user_id: "", avatar: "", first_name: "", last_name: "", email: "", github_url: "", chat_engine_secret: "" };

  // States
  const [value, setValue] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [forum, setForum] = useState(0);
  const [user, setUser] = useState(userObj);

  useEffect(() => {
    Promise.all([
      axios.get("/api/users/login"),
    ])
      .then((data) => {
        setUser(data[0].data);
      })
      .catch((e) => {
        console.error(e.message);
      })
  }, []);

  return (
    <div className="App">
      <NavBar user={user} setUser={setUser} value={value} setValue={setValue} />
      <ForumNavBar setForum={setForum} />
      {!(forum === 0) && (<Forum forum_id={forum} user={user} />)}
      {(forum === 0) && <Home user={user} />}
      {!(user.user_id === "") && (<Chat user={user} show={showModal} closeModal={() => setShowModal(false)} />)}
      {!(user.user_id === "") && (<button className='messaging-bar' onClick={() => setShowModal(true)}>
        <div className="messaging-bar-avatar-container">
          <img className="messaging-bar-avatar" src={user.avatar} alt="user avatar" />
        </div>
        <p>Messaging</p>
      </button>)}
      <footer className="footer"></footer>
    </div>
  );
}

export default App;