import React, { useState } from "react";
import axios from "axios";

// Styles
import "./Styles/MakePost.scss";

export default function MakePost(props) {
  const [formNewPost, setformNewPost] = useState({ content: "", img: null });
  const [alert, setAlert] = useState({ display: "none", disabled: false });


  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "img") {
      console.log("ARE WE HITTING THIS LINE %%%%%%%%%%%%%%%")
      setformNewPost({ ...formNewPost, [name]: event.target.files[0] })
    } else {
      setformNewPost({ ...formNewPost, [name]: value });
    }
    console.log("HELLO THIS IS NE -------", formNewPost)
  };

  const submit = function (e) {
    e.preventDefault();
    if (!props.user.user_id) {
      setAlert({ display: "flex", disabled: true });
      setTimeout(() => {
        setAlert({ disabled: true, display: "none" });
      }, 5000);
      setformNewPost({ ...formNewPost, content: "", img:"null" });

    } else {
      if (formNewPost.img !== null){
        let bodyFormData = new FormData()
        console.log("=================",formNewPost.img)
        bodyFormData.append("image",formNewPost.img)
        console.log(bodyFormData)
        const config = {
          headers: {
            "Content-type": "application/x-www-form-urlencoded",
            Authorization: "",
          },
        };
        axios.post("https://api.imgur.com/3/image", bodyFormData, config)

        // axios({
        //   method: "post",
        //   url: 'https://api.imgur.com/3/image',
        //   data: bodyFormData,
        //   headers: { "Authorization": "" },
        // }).then((data)=> console.log("THITS ISI IS TETSTST",data))
        // .catch((e)=>console.log(e))
      }
      console.log("THIS IS ANOTHER TEST",formNewPost)
      // axios.post(`/api/posts/${props.forum_id}`, { ...formNewPost, forum_id: props.forum_id, user_id: props.user.user_id }).then(() => {
      //   setAlert({ display: "none", disabled: false });
      //   props.reFetchPosts();
      // });
    }
  };

  return (
    <section className="make-post">
      <header className="header">
        <div className="header-left">
          <img
            className="avatar"
            src={
              !props.user.avatar
                ? "https://i.imgur.com/WxNkK7J.png"
                : props.user.avatar
            }
            alt="user-avatar"
          />
          <label className="label">Compose a new post</label>
        </div>
      </header>

      <div className="body">
        <form onSubmit={submit} className="make-post-form" enctype="multipart/form-data" >
          <textarea
            disabled={alert.disabled}
            onChange={handleChange}
            name="content"
            rows="4"
            cols="50"
            className="make-post-input"
            placeholder="Write a post"
            value={formNewPost.content}
          ></textarea>

          <div>
            <input onChange={handleChange}  name="img" type="file" />
          </div>

          <button type="submit" className="btn btn-lg btn-success">
            Post
            <ion-icon name="send-outline"></ion-icon>
          </button>


          <div
            className="alert alert-danger"
            role="alert"
            style={{ display: alert.display }}
          >
            Please login before attempting to post
          </div>
        </form>
      </div>
    </section>
  );
}
