import React, { useState, useEffect } from "react";
import axios from "axios";

// Components
import Post from "./Post";

export default function Home(props) {
  // States
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get(`/api/search?search=${props.searchValue}`)
      .then((data) => {
        setPosts(data.data);
      })
      .catch((err) => console.error(err.message));
  }, [props.searchValue]);

  return (
    <>
    {posts.length===0 && <div className="noresults" style={{minHeight:"65vh"}}><p> No Results Found ...</p></div>}
      {posts.map((post) => {
        return <Post key={post.id} {...post} user={props.user} />;
      })}
    </>
  );
}
