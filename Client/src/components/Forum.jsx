import React from "react"
import "./Styles/Forum.scss"
import Post from "./Post.jsx"

export default function Forum() {

  const foruminfo = {
    image: "https://getflywheel.com/layout/wp-content/uploads/2019/02/The_Best_Java_Script_Libraries_1800x500-1-1568x436.jpg",
    name: "JavaScript"
  }

  const postdatatorender = [{ id: 1, name: "Alex Raffa", time: "Today | 10:39", content: "I have a stream of (uniform) random bits from which I'd like to generate random integers uniformly in the range [0,n] without wasting bits. (I'm considering bits wasted which are in excess of floor(log_2(n))+1, on the assumption that it's always possible to use no more than that.) E.g., if n = 5, then the algorithm I'm looking for should use no more than three bits. How can this be done?"}, { id: 2, name: "Johnny Legend", time: "January 12", content: "How can i fly to the moon using JS "}, { id: 3, name: "Peter Griffin", time: "November 12", content: "I am the best coder in the world"} ]

  return (
    <section>
      <div className="forum-name">
        <h1 ><em>{foruminfo.name}</em></h1>
      </div>
      <div>
        <img className= "forum-banner" src={foruminfo.image} alt={foruminfo.name} />
      </div>

      <div className="forum-postContainer">
          {postdatatorender.map(function (postdata) {
            return <Post key={postdata.id} {...postdata} />;
          })}
      </div>
    </section>
  )
}