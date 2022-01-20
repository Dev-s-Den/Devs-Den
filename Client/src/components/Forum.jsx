import React, { useEffect, useState } from "react";
import axios from "axios";

// Styles
import "./Styles/Forum.scss";

// Components
import Post from "./Post.jsx";
import MakePost from "./MakePost.jsx";

export default function Forum(props) {
  const [isLoading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);
  const [banner, setBanner] = useState([]);

  useEffect(() => {
    Promise.all([
      axios.get(`/api/forums/${props.forum_id}`),
      axios.get(`/api/posts/${props.forum_id}`),
    ]).then((data) => {
      setPosts(data[1].data);
      setBanner(data[0].data);
      setLoading(false);
    });
  }, [props.forum_id]);

  const reFetchPosts = () => {
    axios.get(`/api/posts/${props.forum_id}`)
    .then((data) => setPosts(data.data))
  }

  if (isLoading) {
    return <div>LOADING...</div>;
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
       {!props.user.user_id && <MakePost forum_id={props.forum_id} user={props.user}/>}
       {props.user.user_id && <MakePost reFetchPosts={reFetchPosts} forum_id={props.forum_id} user={props.user}/>}
        {posts.map(function (postdata) {
          return <Post reFetchPosts={reFetchPosts} key={postdata.id} {...postdata} user={props.user}/>;
        })}
      </div>
    </section>
  );
}
