import React from "react";

// Styles
import "./Styles/ForumNavBar.scss";

export default function ForumNavBar(props) {
  return (
    <nav className="forumnav">
      <div className="forumnav-container" onClick = {()=>props.setForum(1)}>
        <span href="">
          <img src="https://symbols.getvecta.com/stencil_25/39_javascript.0ca26ec4ab.svg" alt="JS"></img>
        </span>
      </div>

      <div className="forumnav-container" onClick = {()=>props.setForum(2)}>
        <span href="">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/120px-ISO_C%2B%2B_Logo.svg.png" alt="Ruby"></img>
        </span>
      </div>
    </nav>
  );
}
