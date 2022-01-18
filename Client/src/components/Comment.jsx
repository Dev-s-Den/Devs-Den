import React from "react";

// Styles
import "./Styles/Comment.scss";

export default function Comment(props) {
  const { name, time, content } = props;

  return (
    <article className="comment">
      <span className="comment--user--avatar"></span>
      <div className="comment--body">
        <header className="comment--header">
          <h3 className="comment--name">{name}</h3>
          <span className="comment--time">{time}</span>
        </header>
        <p className="comment--text">{content}</p>
      </div>
    </article>
  );
}
