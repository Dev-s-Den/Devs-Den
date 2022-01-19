import React from "react";

// Styles
import "./Styles/MakePost.scss";

export default function MakePost(props) {
  return (
    <section className="make-post">
      <header className="header">
        <div className="header-left">
          <img
            className="avatar"
            src="https://i.imgur.com/JElWPYw.png"
            alt="user-avatar"
          />
          <label className="label">Compose a new post</label>
        </div>
      </header>

      <div className="body">
        <form className="make-post-form">
          <textarea
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
