import React, { useState, useEffect } from "react";
import axios from "axios";
import Carousel from "react-bootstrap/Carousel";
import "./Styles/Home.scss";
import Tilt from "react-parallax-tilt";

// Components
import HomePost from "./HomePost";

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
    <Carousel>
      {posts.map((post) => {
        return (
          <Carousel.Item key={post.id}>
            <div className="body">
              <Tilt
                glareEnable={true}
                glareMaxOpacity={0.25}
                glareColor="rgba(49, 204, 215, 0.646)"
                glarePosition="all"
                glareBorderRadius="25px"
              >
                <HomePost key={post.id} {...post} user={props.user} />
              </Tilt>
            </div>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
}
