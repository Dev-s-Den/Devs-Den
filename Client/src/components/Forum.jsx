import React, {useEffect, useState} from "react";
import axios from "axios";

// Styles
import "./Styles/Forum.scss";

// Components
import Post from "./Post.jsx";

export default function Forum() {
  const foruminfo = {
    image:
      "https://getflywheel.com/layout/wp-content/uploads/2019/02/The_Best_Java_Script_Libraries_1800x500-1-1568x436.jpg",
    name: "JavaScript",
  };

  const [posts, setPosts] = useState([])


  useEffect(() => {
    Promise.all([
      axios.get('/api/posts/1'),
    ]).then((data) => {
      setPosts(data[0].data);
    });
  }, [])


  return (
    <section>
      <div className="forum-name">
        <h1>
          <em>{foruminfo.name}</em>
        </h1>
      </div>
      <div>
        <img
          className="forum-banner"
          src={foruminfo.image}
          alt={foruminfo.name}
        />
      </div>

      <div className="forum-postContainer">
        {posts.map(function (postdata) {
          return <Post key={postdata.id} {...postdata} />;
        })}
      </div>
    </section>
  );
}
