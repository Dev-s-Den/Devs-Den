import React from "react"

import "./Styles/Chat.scss"

export default function Chat(props) {

 

  return(
    <div className={`modal-chat-exterior ${props.show ? 'show': ''}`} onClick={props.closeModal}>
      
      <div className="modal-chat-body" onClick={e => e.stopPropagation()}>
        Body Of THE MODAL
        <div className="modal-chat-footer">
          <button onClick={props.closeModal}>CLOSE MODAL</button>
        </div>
      </div>
      
    </div>
  ) 
}