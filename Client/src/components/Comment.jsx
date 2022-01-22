import React from "react";
import { Remarkable } from "remarkable";
import hljs from "highlight.js";
import javascript from 'highlight.js/lib/languages/javascript';
import 'highlight.js/styles/atom-one-dark.css';


// Styles
import "./Styles/Comment.scss";

//markdown register
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

export default function Comment(props) {
  const { username, created_at, content, avatar } = props;

  return (
    <article className="comment">
      <img className="comment--user--avatar" src={`${avatar}`} alt="user-avatar"/>
      <div className="comment--body">
        <header className="comment--header">
          <h3 className="comment--name">{username}</h3>
          <span className="comment--time">{created_at}</span>
        </header>
        <span className="comment--text"><p dangerouslySetInnerHTML={{ __html: md.render(content) }}></p></span>
      </div>
    </article>
  );
}
