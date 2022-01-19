import React, {useEffect, useState} from "react";
import axios from "axios";

// Styles
import "./Styles/Forum.scss";

// Components
import Post from "./Post.jsx";

export default function Forum(props) {

  const [isLoading, setLoading] = useState(true)
  const [posts, setPosts] = useState([])
  const [banner, setBanner] = useState([])

  useEffect(() => {
    Promise.all([
      axios.get(`/api/forums/${props.forum_id}`),
      axios.get(`/api/posts/${props.forum_id}`)
    ]).then((data) => {
      setPosts(data[1].data);
      setBanner(data[0].data)
      setLoading(false)
    });
  }, [props.forum_id])

  if (isLoading) {
    return <div>LOADING...</div> 
  }

  return (
    <section>
      <div className="forum-name">
        <h1>
          <em>{banner[0].title}</em>
        </h1>
      </div>
      <div>
        <img
          className="forum-banner"
          src={banner[0].img}
          alt={banner[0].title}
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
