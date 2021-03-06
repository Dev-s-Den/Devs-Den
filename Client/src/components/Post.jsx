import React, { useState, useEffect } from "react";
import axios from "axios";
import { Remarkable } from "remarkable";
import hljs from "highlight.js";
import javascript from "highlight.js/lib/languages/javascript";
import "highlight.js/styles/an-old-hope.css";

// Styles
import "./Styles/Post.scss";

//helper functions for post
import { switchCommentShow, handleChange } from "../helpers/postHelper";

// Components
import Comment from "./Comment.jsx";

//markdown register
hljs.registerLanguage("javascript", javascript);

const md = new Remarkable({
  highlight: function (str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return hljs.highlight(lang, str).value;
      } catch (err) {}
    }

    try {
      return hljs.highlightAuto(str).value;
    } catch (err) {}

    return "";
  },
});

export default function Post(props) {
  // States
  const [comments, setComments] = useState([]);
  const [showComments, setShowComments] = useState(false);
  const [comment, setComment] = useState("");
  const [like, setLike] = useState(props.likes);
  const [alert, setAlert] = useState({
    display: "none",
    disabled: false,
    value: "",
  });

  //loads comments
  useEffect(() => {
    Promise.all([axios.get(`/api/comments/${props.id}`)]).then((all) => {
      setComments(all[0].data);
    });
  }, [props.reFetchPosts]);

  const submitComment = function (e) {
    e.preventDefault();
    if (!props.user.user_id) {
      setComment({ content: "" });
      setAlert({
        display: "flex",
        disabled: true,
        value: "Please login before submitting a comment!",
      });
      return setTimeout(() => {
        setAlert({ disabled: true, display: "none" });
      }, 3000);
    }
    if (!comment.content || comment.content === "") {
      setAlert({
        ...alert,
        display: "flex",
        value: "Can't submit an empty comment!",
      });
      return setTimeout(() => {
        setAlert({ display: "none" });
      }, 3000);
    }
    axios
      .post(`/api/comments/${props.id}`, {
        post_id: props.id,
        user_id: props.user.user_id,
        ...comment,
      })
      .then(() => {
        axios.get(`/api/comments/${props.id}`).then((data) => {
          setAlert({ display: "none", disabled: false });
          setShowComments(true);
          setComments(data.data);
          return setComment({ content: "" });
        });
      });
  };

  const updateLike = function (e) {
    e.preventDefault();
    if (!props.user.user_id) {
    }
    axios
      .put(`/api/posts/${props.id}`, { id: props.id, like: like + 1 })
      .then(() => {
        setLike((prev) => {
          return prev + 1;
        });
      });
  };

  return (
    <div className="post">
      <header className="post--header">
        <div className="post--header--left">
          <img
            className="post--avatar"
            src={`${props.avatar}`}
            alt="user-avatar"
          />
          <h2 className="post--name">{props.username}</h2>
        </div>
        <div className="post--header--left">
          <small className="post--Time">{props.created_at}</small>
        </div>
      </header>

      <div className="post--body">
        <p dangerouslySetInnerHTML={{ __html: md.render(props.content) }}></p>
        {props.img && (
          <img className="post-image" src={props.img} alt="user-post" />
        )}
      </div>

      {showComments && (
        <div className="post--comments">
          {comments.map(function (comment) {
            return <Comment key={comment.id} {...comment} />;
          })}
        </div>
      )}

      <footer className="post--footer">
        <div className="post--footer--left">
          <img
            src={
              !props.user.avatar
                ? "https://i.imgur.com/WxNkK7J.png"
                : props.user.avatar
            }
            className="post--user--avatar"
            alt="user-avatar"
          />
          <form onSubmit={submitComment} className="new-comment">
            <textarea
              name="content"
              type="text"
              className="new-comment-input"
              placeholder="Wite a comment..."
              onChange={(e) => handleChange(e, setComment, props.user_id)}
              value={comment.content}
            />
            <button className="btn btn-m btn-success" type="submit">
              Submit
            </button>
          </form>
        </div>
        <span className="post--actions">
          <span className="hover" onClick={updateLike}>
            <i className="far fa-thumbs-up"></i>
            {`${like}`}
          </span>
          {comments.length === 0 && (
            <span className="hover" onClick={null}>
              <i className="far fa-comments"></i>
              {comments.length}
            </span>
          )}
          {comments.length > 0 && (
            <span
              className="hover"
              onClick={() => switchCommentShow(showComments, setShowComments)}
            >
              <i className="far fa-comments"></i>
              {comments.length}
            </span>
          )}
        </span>
      </footer>
      <div className="alert-size">
        <div
          className="alert alert-danger"
          role="alert"
          style={{ display: alert.display }}
        >
          {alert.value}
        </div>
      </div>
    </div>
  );
}
