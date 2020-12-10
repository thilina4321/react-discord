import React from 'react'

// import Avatar from '@material-ui/core/Avatar';
import NotificationImportant from '@material-ui/icons/NotificationImportant';
import LocationDisabled from '@material-ui/icons/LocationDisabled';
import People from '@material-ui/icons/People';

import './ChatHeader.css'

function ChatHeader(props) {
    return (
        <div className="chat__header">
            <div className="chat__header_left">
                {props.name &&  <h1> # {props.name} </h1>}
            </div>

            <div className="chat__header_right">
                <NotificationImportant />
                <LocationDisabled />
                <People />
            </div>
        </div>
    )
}

export default ChatHeader
