import React from "react";
import Avatar from "@material-ui/core/Avatar";
import "./Message.css";

const Message = (props)=> {
    return (
      <div className="message">
        <div className="message__info">
          <Avatar src={props.image} className="message__avator" />
          <p>  {props.name}  </p>
        </div>
        <div className="message__text">
          <p> {props.message} </p>
        </div>
      </div>
    );
  }




export default Message
