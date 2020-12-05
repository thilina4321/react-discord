import React from 'react'
import Avatar from '@material-ui/core/Avatar';
import './Message.css'

function Message() {
    return (
        <div className="message">
            <div className="message__info">
                <Avatar className="message__avator"/>
                <p> Thilina dilshan at 12.00 AM </p>
            </div>
            <div className="message__text">
                <h3> This is the message section </h3>
            </div>
        </div>
    )
}

export default Message
