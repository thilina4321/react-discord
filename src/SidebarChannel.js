import React from 'react'
import './SidebarChannel.css'

function SidebarChannel(props) {
    return (
        <div className="sidebar__channel">
            <div 
             className="sidebar_channelName"> #{props.name}  </div>
        </div>
    )
} 

export default SidebarChannel
