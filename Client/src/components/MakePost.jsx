import React, { useState, useEffect }from "react";
import axios from 'axios';
import Forum from "./Forum";
// Styles
import "./Styles/MakePost.scss";

export default function MakePost(props) {
  const [formNewPost, setformNewPost] = useState({})

  const handleChange = (event) => {
    const {name, value} = event.target
    if (!props.user.user_id) {
      setformNewPost({...formNewPost, [name]:value})
    }
    setformNewPost({img:props.user.avatar,forum_id: props.forum_id,user_id: props.user.user_id, [name]:value});
  }  


  const submit = function(e) {
   e.preventDefault();
    if (!props.user.user_id) {
      return console.log('empty')
    } 
      axios.post(`/api/posts/${props.forum_id}`, formNewPost)
      .then(data => {
      props.reFetchPosts()
    })
  }

  return (
    <section className="make-post">
      <header className="header">
        <div className="header-left">
          <img
            className="avatar"
            src={!props.user.avatar ? 'https://i.imgur.com/WxNkK7J.png':props.user.avatar}
            alt="user-avatar"
          />
          <label className="label">Compose a new post</label>
        </div>
      </header>

      <div className="body">
        <form 
        onSubmit={submit}
        className="make-post-form">
          <textarea
            onChange={handleChange}
            name="content"
            rows="4"
            cols="50"
            className="make-post-input"
            placeholder="    Write a post"
          ></textarea>
          <button type="submit" className="btn btn-lg btn-success">
            Post
            <ion-icon name="send-outline"></ion-icon>
          </button>
        </form>
      </div>
    </section>
  );
}
