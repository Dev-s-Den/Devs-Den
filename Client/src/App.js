// Libraries
import React, { useState, useEffect, useRef } from 'react';

// Compnents
import NavBar from './components/NavBar';
import ForumNavBar from './components/ForumNavBar';
import Forum from './components/Forum';
import Home from './components/Home';
import Chat from './components/Chat';
import IDE from './components/IDE';
import Search from './components/Search';

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
  const [form, setForm] = useState("none");
  const [searchValue, setSearchValue] = useState("")

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

  //login click outside using UseRef to trigget the Dom to add onclick when outside the login form ****** creates a bug i have no idea how to fix
  const loginRef = useRef();
  useEffect(() => {
    if (form === 'none') {
      return;
    } else {
      let handler = (e) => {
        if (!loginRef.current.contains(e.target)) {
          setForm('none');
        }
      }
      document.addEventListener('mousedown', handler);
      return () => {
        document.removeEventListener('mousedown', handler)
      }
    }
  }, [form])

  return (
    <div className="App">
      <NavBar
        loginRef={loginRef}
        user={user}
        setUser={setUser}
        value={value}
        setValue={setValue}
        form={form}
        setForm={setForm}
        forum={forum}
        redirect={setForum}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <ForumNavBar setForum={setForum} />
      <div className='main-container'>
        <div>
          {!(forum === 0 && forum !== 100) && (<Forum forum_id={forum} user={user} />)}
          {(forum === 100) && <Search searchValue={searchValue} user={user} />}
          {(forum === 0) && <Home user={user} />}
        </div>
      </div>
      {!(user.user_id === "") && (<Chat user={user} show={showModal} closeModal={() => setShowModal(false)} />)}
      {!(user.user_id === "") && (<button className='messaging-bar' onClick={() => setShowModal(true)}>
        <ion-icon name="chatbubbles-outline"></ion-icon>
      </button>)}
      
      <footer className="footer"></footer>
    </div>
  );
}

export default App;