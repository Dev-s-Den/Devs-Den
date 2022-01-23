import React, { useEffect, useState } from "react";
import axios from "axios";

// Styles
import "./Styles/Forum.scss";

// Components
import Post from "./Post.jsx";
import MakePost from "./MakePost.jsx";
import IDE from './IDE';


export default function Forum(props) {
  const [isLoading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);
  const [banner, setBanner] = useState([]);
  const [showIDE, setShowIDE] =useState(true);

  useEffect(() => {
    Promise.all([
      axios.get(`/api/forums/${props.forum_id}`),
      axios.get(`/api/posts/${props.forum_id}`),
    ])
      .then((data) => {
        setPosts(data[1].data);
        setBanner(data[0].data);
        setLoading(false);
      })
      .catch((err) => console.error(err.message));
  }, [props.forum_id]);

  const reFetchPosts = () => {
    axios
      .get(`/api/posts/${props.forum_id}`)
      .then((data) => setPosts(data.data));
  };

  if (isLoading) {
    return <div>LOADING...</div>;
  }

  return (
    <section>
      <div>
        {banner.length && (
          <img
            className="forum-banner"
            src={banner[0].img}
            alt={banner[0].title}
          />
        )}
      </div>
      <div className="forum-main-container">  
        {showIDE && <IDE/>}     
        <div className={`forum-postContainer ${showIDE && 'ideshown'}`} >
          {!props.user.user_id && (
            <MakePost forum_id={props.forum_id} user={props.user} />
          )}
          {props.user.user_id && (
            <MakePost
              reFetchPosts={reFetchPosts}
              forum_id={props.forum_id}
              user={props.user}
            />
          )}
          {posts.map(function (postdata) {
            return (
              <Post
                reFetchPosts={reFetchPosts}
                key={postdata.id}
                {...postdata}
                user={props.user}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
