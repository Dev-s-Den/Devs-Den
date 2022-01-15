import React, { useState } from "react"

import "./Post.scss"

export default function Post() {

  const post = {
    name: "Alex Raffa",
    time: "Today | 10:39",
    content: "I have a stream of (uniform) random bits from which I'd like to generate random integers uniformly in the range [0,n] without wasting bits. (I'm considering bits wasted which are in excess of floor(log_2(n))+1, on the assumption that it's always possible to use no more than that.) E.g., if n = 5, then the algorithm I'm looking for should use no more than three bits. How can this be done?"
  }

  const comments = [{ avatar: "blank", name: "Bob Dylan", time: "Today | 10:45", content: "That is a very good question private message me and i can help you out" }, { avatar: "blank", name: "Jerry Mcquire", time: " January 11 2022, 10:39", content: "Ive got no clue" }, { avatar: "blank", name: "Billy Bishop", time: " January 18 201", content: "Holy Moly that is very smart i will give it a try" }]

  const [showComment, setShowComment] = useState(true)

  const switchCommentShow = () => setShowComment(showComment ? false : true)

  return (
    <div className="post">

      <header className="post--header">

        <div className="post--header--left">
          <span className="post--avatar"></span>
          {/* <img className="post--avatar" src={tweet.avatar}></img> */}
          <h2 className="post--name">{post.name}</h2>
        </div>

        <div className="post--header--left">
          <small className="post--Time">{post.time}</small>
        </div>

      </header>

      <div className="post--body">
        <p>{post.content}</p>
      </div>

      <div className="post--comments">
        <article className="comment">
        <span className="comment--user--avatar"></span>
          <div className="comment--body">
            <header className="comment--header">
              <h3 className="comment--name">name</h3>
              <span className="comment--time">"Today | 10:45"</span>
            </header>
            <p className="comment--text">That is a very good question! private message me and I can help you out</p>
          </div>
          

        </article>
      </div>

      <footer className="post--footer">

        <div className="post--footer--left" >
          <span className="post--user--avatar"></span>
          <form>
            <input type="text" placeholder="Wite a comment..." />
            <button type="submit">submit</button>
          </form>
        </div>

        <span className="post--actions">
          <span>
            <i className="far fa-thumbs-up"></i>
            7
          </span>
          <span onClick={switchCommentShow}>
            <i className="far fa-comments"></i>
            6
          </span>
        </span>

      </footer>
    </div>
  )
} 