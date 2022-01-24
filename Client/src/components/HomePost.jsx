import React, { useState, useEffect } from "react";
import { Remarkable } from "remarkable";
import hljs from "highlight.js";
import javascript from 'highlight.js/lib/languages/javascript';
import 'highlight.js/styles/an-old-hope.css';

// Styles
import "./Styles/HomePost.scss";

//markdown register
hljs.registerLanguage('javascript', javascript);
//Markdown
hljs.registerLanguage('javascript', javascript);

const md = new Remarkable({
  highlight: function (str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return hljs.highlight(lang, str).value;
      } catch (err) {}
    }
    try {
      return hljs.highlightAuto(str).value;
    } catch (err) {}
 
    return '';
  }
});

export default function HomePost(props) {

  return (
    <div className="homepost">
      <header className="homepost--header">
        <div className="homepost--header--left">
          <img
            className="homepost--avatar"
            src={`${props.avatar}`}
            alt="user-avatar"
          />
          <h2 className="homepost--name">{props.username}</h2>
        </div>
        <div className="homepost--header--left">
          <small className="homepost--Time">{props.created_at}</small>
        </div>
      </header>
      <div className="homepost--body">
        <p dangerouslySetInnerHTML={{ __html: md.render(props.content) }}></p>
      { props.img && <img className="homepost-image" src={props.img} alt="user-post"/>}
      </div>

      <footer className="homepost--footer">
        
        <span className="homepost--actions" >
          <span className="hover"> <i className="far fa-thumbs-up"></i>{`${props.likes}`}</span>         
        </span>
      </footer>
    </div>

      
      
  );
}