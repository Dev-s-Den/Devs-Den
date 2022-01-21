import React, { useState } from "react";
import axios from "axios";

// Styles
import "./Styles/MakePost.scss";

export default function MakePost(props) {
  const commentInfo ={ img: props.user.avatar, forum_id: props.forum_id, user_id: props.user.user_id };
  const [formNewPost, setformNewPost] = useState({});
  const [alert, setAlert] = useState({ display: "none", disabled: false });

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (!props.user.user_id) {
      setformNewPost({ [name]: value });
    }
    setformNewPost({
      [name]: value,
    });
  };

  const submit = function (e) {
    e.preventDefault();
    if (!props.user.user_id) {
      setAlert({ display: "flex", disabled: true });
      setTimeout(() => {
        setAlert({ disabled: true, display: "none" });
      }, 5000);
      setformNewPost({ ...formNewPost, content: "" });
      return console.log("empty");
    }
    axios.post(`/api/posts/${props.forum_id}`, {...commentInfo, ...formNewPost}).then(() => {
      setAlert({ display: "none", disabled: false });
      props.reFetchPosts();
    });
  };

  return (
    <section className="make-post">
      <header className="header">
        <div className="header-left">
          <img
            className="avatar"
            src={
              !props.user.avatar
                ? "https://i.imgur.com/WxNkK7J.png"
                : props.user.avatar
            }
            alt="user-avatar"
          />
          <label className="label">Compose a new post</label>
        </div>
      </header>

      <div className="body">
        <form onSubmit={submit} className="make-post-form">
          <textarea
            disabled={alert.disabled}
            onChange={handleChange}
            name="content"
            rows="4"
            cols="50"
            className="make-post-input"
            placeholder="    Write a post"
            value={formNewPost.content}
          ></textarea>
          <button type="submit" className="btn btn-lg btn-success">
            Post
            <ion-icon name="send-outline"></ion-icon>
          </button>
          <div
            className="alert alert-danger"
            role="alert"
            style={{ display: alert.display }}
          >
            Please login before attempting to post
          </div>
        </form>
      </div>
    </section>
  );
}
