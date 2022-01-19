import React from "react";

// Styles
import "./Styles/Comment.scss";

export default function Comment(props) {
  const { first_name, created_at, content } = props;

  return (
    <article className="comment">
      <span className="comment--user--avatar"></span>
      <div className="comment--body">
        <header className="comment--header">
          <h3 className="comment--name">{first_name}</h3>
          <span className="comment--time">{created_at}</span>
        </header>
        <p className="comment--text">{content}</p>
      </div>
    </article>
  );
}
