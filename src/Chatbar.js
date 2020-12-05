import React from 'react'
import ChatHeader from './ChatHeader'
import './Chatbar.css'
import Message from './Message'



function Chatbar() {
    return (
        <div className="chatbar">
            <ChatHeader />

            <div className="chat__messages">
                <Message />
                <Message />
            </div>

            <div className="chat__input">
                <form>
                    <input placeholder="Type Message"></input>
                    <button> Send Message </button>
                </form>

            </div>       
        </div>
    )
}

export default Chatbar
