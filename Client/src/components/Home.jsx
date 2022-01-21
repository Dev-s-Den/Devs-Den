import React, { useState, useEffect } from "react";
import axios from "axios";

// Components
import Post from "./Post";

export default function Home(props) {
  // States
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("/api/home")
      .then((data) => {
        setPosts(data.data);
      })
      .catch((err) => console.error(err.message));
  }, []);

  return (
    <>
      {posts.map((post) => {
        return <Post key={post.id} {...post} user={props.user} />;
      })}
    </>
  );
}
