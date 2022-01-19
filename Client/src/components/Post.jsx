import React, { useState, useEffect } from "react";
import axios from 'axios';

// Styles
import "./Styles/Post.scss";

// Components
import Comment from "./Comment.jsx";

export default function Post(props) {
  // States
  const [comments, setComments] = useState([]);

  useEffect(() => {

    Promise.all([
      axios.get(`/api/comments/1`)
    ]).then((all) => {
      const commentsFromAxios = [];
      all[0].data.forEach((commentFetch) => {
        const objectForComment = {}
        const {id, first_name, last_name, created_at, avatar, content} = commentFetch;
        objectForComment.id = id;
        objectForComment.name = `${first_name} ${last_name}`; 
        objectForComment.avatar = avatar; 
        objectForComment.time = created_at;
        objectForComment.content = content;
        commentsFromAxios.push(objectForComment)
      })
      setComments( commentsFromAxios);
    });
  }, [])

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
          className='form-inline'
            onSubmit={(event) => {
              event.preventDefault();
              submitComment();
            }}
          >
              <input
                type="text"
                className="form-control mb-2 mr-sm-2"
                id="submitNewComment"
                aria-describedby="newComment"
                placeholder="Wite a comment..."
                onChange={(event) => setComment(event.target.value)}
                value={comment}
              />
              <button className="btn btn-m btn-outline-success" type="submit">submit</button>
          </form>
        </div>

        <span className="post--actions">
          <span className='hover'>
            <i className="far fa-thumbs-up"></i>7
          </span>
          <span className='hover' onClick={switchCommentShow}>
            <i className="far fa-comments"></i>{comments.length}
          </span>
        </span>
      </footer>
    </div>
  );
}
