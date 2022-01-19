import React from "react";

// Styles
import "./Styles/Comment.scss";

export default function Comment(props) {
  const { first_name, created_at, content, avatar } = props;

  return (
    <article className="comment">
      <img className="comment--user--avatar" src={`${avatar}`} alt="user-avatar"/>
      <div className="comment--body">
        <header className="comment--header">
          <h3 className="comment--name">{first_name}</h3>
          <span className="comment--time">{created_at}</span>
        </header>
        <span className="comment--text"><p >{content}</p></span>
      </div>
    </article>
  );
}
