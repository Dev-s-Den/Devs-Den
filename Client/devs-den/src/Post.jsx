import React from "react"

import "Post.scss"

export default function Post() {

  const post = {
    name: "Alex",
    time: "Today | 10:39",
    content: "I have a stream of (uniform) random bits from which I'd like to generate random integers uniformly in the range [0,n] without wasting bits. (I'm considering bits wasted which are in excess of floor(log_2(n))+1, on the assumption that it's always possible to use no more than that.) E.g., if n = 5, then the algorithm I'm looking for should use no more than three bits. How can this be done?"


  }
  
  return(
    <article className="post">
    <header className="post--header">

      <div className="post--header--left">
        <span className="post--avatar"></span>
        {/* <img className="post--avatar" src={tweet.avatar}></img> */}
        <h2 className="post--name">{post.name}</h2>
      </div>

      <div className="post--header--left">
        <small className="post--Time">post.time</small>
      </div>

    </header>

    <div className="post--body">
      <p>{post.content}</p>
    </div>

    <footer className="post--footer">

      <div className="post--footer--left" >
        <span className="post--user--avatar"></span>

        <form>
          <input type="text" placeholder="Wite A Comment" />
          <button type="submit">submit</button>
        </form>

      </div>


      <span className="post--actions">
        Like BTN
      </span>

    </footer>
  </article>
  )
} 