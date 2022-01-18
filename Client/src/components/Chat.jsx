import React from "react"
import { ChatEngine } from 'react-chat-engine';
import "./Styles/Chat.scss"

export default function Chat(props) {

 console.log(process.env.REACT_APP_chatProjectID)
  return(
    <div className={`modal-chat-exterior ${props.show ? 'show': ''}`} onClick={props.closeModal}>
      
      <div className="modal-chat-body" onClick={e => e.stopPropagation()}>
        <ChatEngine
          projectID= {process.env.REACT_APP_chatProjectID}
          height= "60vh" userName={process.env.REACT_APP_chatUsername}
          userSecret={process.env.REACT_APP_chatUserSecret}
        />
        <div className="modal-chat-footer">
          <button onClick={props.closeModal}>CLOSE MODAL</button>
        </div>
      </div>
      
    </div>
  ) 
}