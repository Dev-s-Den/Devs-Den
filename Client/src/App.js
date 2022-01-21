// Libraries
import React, { useState, useEffect, useRef } from 'react';
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/theme-twilight";
import "ace-builds/src-noconflict/ext-language_tools";

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
  const [form, setForm] = useState("none");

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
      <NavBar loginRef={loginRef} user={user} setUser={setUser} value={value} setValue={setValue} form={form} setForm={setForm} redirect={() => { setForum(0) }} />
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
      <AceEditor
        placeholder="Write some code!"
        mode="javascript"
        theme="twilight"
        name="devsden"
        // onLoad={this.onLoad}
        ontSize={14}
        editorProps={{ $blockScrolling: true }}
        setOptions={{
          enableBasicAutocompletion: true,
          enableLiveAutocompletion: true,
          enableSnippets: true,
        }}
      />
      <footer className="footer"></footer>
    </div>
  );
}

export default App;