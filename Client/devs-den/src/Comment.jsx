import React from "react";
import "./Comment.scss"

export default function Comment(props) {

  return (
    <article className="comment">
      <span className="comment--user--avatar"></span>
      <div className="comment--body">
        <header className="comment--header">
          <h3 className="comment--name">{props.name}</h3>
          <span className="comment--time">{props.time}</span>
        </header>
        <p className="comment--text">{props.content}</p>
      </div>
    </article>
  )
}

