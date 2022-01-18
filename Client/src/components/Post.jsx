import React, { useState } from "react";

// Styles
import "./Styles/Post.scss";

// Components
import Comment from "./Comment.jsx";

export default function Post(props) {
  // States
  const [comments, setComments] = useState([
    {
      id: 1,
      avatar: "blank",
      name: "Bob Dylan",
      time: "Today | 10:45",
      content:
        "That is a very good question private message me and i can help you out",
    },
    {
      id: 2,
      avatar: "blank",
      name: "Jerry Mcquire",
      time: " January 11 2022, 10:39",
      content: "Ive got no clue",
    },
    {
      id: 3,
      avatar: "blank",
      name: "Billy Bishop",
      time: " January 18 201",
      content: "Holy Moly that is very smart i will give it a try",
    },
  ]);

  const [showComments, setShowComments] = useState(true);
  const switchCommentShow = () => setShowComments(showComments ? false : true);

  const [comment, setComment] = useState("");
  const submitComment = () => {
    setComments((prev) => [
      ...prev,
      {
        id: 4,
        avatar: "blank",
        name: "CURRENT USER",
        time: "9:55",
        content: comment,
      },
    ]);
    setComment("");
  };

  return (
    <div className="post">
      <header className="post--header">
        <div className="post--header--left">
          <span className="post--avatar"></span>
          <h2 className="post--name">{props.name}</h2>
        </div>
        <div className="post--header--left">
          <small className="post--Time">{props.time}</small>
        </div>
      </header>

      <div className="post--body">
        <p>{props.content}</p>
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
          <span className="post--user--avatar"></span>
          <form
            onSubmit={(event) => {
              event.preventDefault();
              submitComment();
            }}
          >
            <input
              type="text"
              placeholder="Wite a comment..."
              onChange={(event) => setComment(event.target.value)}
              value={comment}
            />
            <button type="submit">submit</button>
          </form>
        </div>

        <span className="post--actions">
          <span>
            <i className="far fa-thumbs-up"></i>7
          </span>
          <span onClick={switchCommentShow}>
            <i className="far fa-comments"></i>6
          </span>
        </span>
      </footer>
    </div>
  );
}
