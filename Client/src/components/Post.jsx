import React, { useState, useEffect } from "react";
import axios from 'axios';

// Styles
import "./Styles/Post.scss";

// Components
import Comment from "./Comment.jsx";

export default function Post(props) {
  // States
  const [comments, setComments] = useState([]);
  
  const [showComments, setShowComments] = useState(false);

  const [comment, setComment] = useState("");
//loads comments 
  useEffect(() => {

    Promise.all([
      axios.get(`/api/comments/${props.id}`)
    ]).then((all) => {
      setComments( all[0].data);
    });
  }, [props.reFetchPosts])
// functions 
  const switchCommentShow = () => setShowComments(showComments ? false : true);

  const handleChange = (e) => {
    const {name, value} = e.target
    if (!props.user.user_id) {
      setComment({...comment, [name]:value})
    }
    setComment({post_id: props.id,user_id: props.user.user_id, [name]:value});
  }  

  const submitComment = function(e) {
    e.preventDefault();
    if (!props.user.user_id) {
      return console.log('empty')
    } 
    Promise.all([
      axios.post(`/api/comments/${props.id}`, comment)
    ]).then(data => {
      props.reFetchPosts();
    })
  };



  return (
    <div className="post">
      <header className="post--header">
        <div className="post--header--left">
          <img className="post--avatar" src={`${props.avatar}`} alt="user-avatar"/>
          <h2 className="post--name">{props.first_name}</h2>
        </div>
        <div className="post--header--left">
          <small className="post--Time">
          {props.created_at}
          </small>
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
          <img src={props.user.avatar} className="post--user--avatar"/>
          <form
            onSubmit={submitComment}
            className='new-comment'
          >
              <input
                name="content"
                type="text"
                className="new-comment-input"
                placeholder="Wite a comment..."
                onChange={handleChange}
              />
              <button className="btn btn-m btn-success" type="submit">Submit</button>
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
