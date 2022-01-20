// Libraries
import React, { useState, useEffect } from 'react';

// Compnents
import NavBar from './components/NavBar';
import ForumNavBar from './components/ForumNavBar';
import Forum from './components/Forum';
import Post from './components/Post';
import Chat from './components/Chat';

// Styles
import './App.css';
import axios from 'axios';

function App() {
  const userObj = { user_id: "", avatar: "", first_name: "", last_name: "", email: "", github_url: "" };

  // States
  const [value, setValue] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [forum, setForum] = useState(0);
  const [user, setUser] = useState(userObj);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    Promise.all([
      axios.get("/api/users/login"),
      axios.get("/api/home")
    ])
      .then((data) => {
        setUser(data[0].data);
        setPosts(data[1].data);
      })
      .catch((e) => {
        console.error(e.message);
      })
  }, []);

  return (
    <div className="App">
      <NavBar user={user} setUser={setUser} value={value} setValue={setValue} />
      <ForumNavBar setForum={setForum} />
      {!(forum === 0) && (<Forum forum_id={forum} />)}
      {(forum === 0) && (<p>HOMEPAGE</p>)}
      {posts && posts.map(post => {
        return <Post key={post.id} {...post} />
      })}
      {(user.user_id === "") && (<p> NOT LOGGED IN</p>)}
      {!(user.user_id === "") && (<p>  LOGGED IN</p>)}
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