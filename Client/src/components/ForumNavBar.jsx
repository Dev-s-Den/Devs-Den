import React, {useState, useEffect} from "react";

// Styles
import "./Styles/ForumNavBar.scss";



export default function ForumNavBar(props) {
  const [title,setTitle] = useState("")

  
  return (
    <nav className="forumnav">
      <div className="forumnav-container" onClick = {()=> {props.setForum(1) 
        setTitle("Javascript")}}>
        <span href="">
          <img src="https://i.imgur.com/kf32mzs.png" alt="JS"></img>
        </span>
      </div>

      <div className="forumnav-container" onClick = {()=> {props.setForum(2) 
        setTitle("C++")}}>
        <span href="">
          <img src="https://i.imgur.com/LvuvZnu.png" alt="C++"></img>
        </span>
      </div>

      <div className="forumnav-container" onClick = {()=> {props.setForum(3) 
        setTitle("Ruby")}}>
        <span href="">
          <img src="https://i.imgur.com/rjcFlKo.png" alt='Ruby'></img>
        </span>
      </div>

      <div className="forumnav-container" onClick = {()=> {props.setForum(4) 
        setTitle("HTML")}}>
        <span href="">
          <img src="https://i.imgur.com/9wc7RSF.png" alt="HTML"></img>
        </span>
      </div>
      <div className="forumnav-container" onClick = {()=> {props.setForum(5) 
        setTitle("C#")}}>
        <span href="">
          <img src="https://i.imgur.com/Hzdua6v.png?1" alt="C#"></img>
        </span>
      </div>

      <div className="forumnav-container" onClick = {()=> {props.setForum(6) 
        setTitle("Java")}}>
        <span href="">
          <img src="https://i.imgur.com/mm8R9GQ.jpg" alt="Java"></img>
        </span>
      </div>
      <div className="forumnav-container" onClick = {()=> {props.setForum(7) 
        setTitle("SQL")}}>
        <span href="">
          <img src="https://i.imgur.com/RBAYFXp.png" alt="SQL"></img>
        </span>
      </div>
      {!(title ==="") && (<div className="forum-name"> 
        <h1>{title}</h1>
      </div>)}

    </nav>
  );
}
