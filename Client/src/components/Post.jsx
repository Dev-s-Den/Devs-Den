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
      axios.get(`/api/comments/${props.id}`)
    ]).then((all) => {
      setComments( all[0].data);
    });
  }, [])

  const [showComments, setShowComments] = useState(false);
  const switchCommentShow = () => setShowComments(showComments ? false : true);

  const [comment, setComment] = useState("");
  const submitComment = () => {
    setComments(prev => [...prev, comment]);
    setComment("");
  };

  return (
    <div className="post">
      <header className="post--header">
        <div className="post--header--left">
          <img className="post--avatar" src={`${props.avatar}`} alt="user-avatar"/>
          <h2 className="post--name">{props.first_name}</h2>
        </div>
        <div className="post--header--left">
          <small className="post--Time">{props.created_at}</small>
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
