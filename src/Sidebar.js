import React from 'react'
import Avatar from '@material-ui/core/Avatar';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Add from '@material-ui/icons/Add';
import SignalCellular1Bar from '@material-ui/icons/SignalCellular1Bar';
import Call from '@material-ui/icons/Call';
import Settings from '@material-ui/icons/Settings';
import Mic from '@material-ui/icons/Mic';
import Headset from '@material-ui/icons/Headset';

import './Sidebar.css'
import SidebarChannel from './SidebarChannel';

function Sidebar(props) {
    console.log(props.channels);
    return (
        
        <div className="sidebar">
            <div className="sidebar__top"> FD 115 
            <ExpandMore />
            </div>

            <div className="sidebar__chennels">
                <div className="sidebar__chennelHead">
                    <div className="sidebae__head">
                        <ExpandMore></ExpandMore>
                        <div> Text Channel </div>
                    </div>
                        <div onClick={props.addChannel}>
                            <Add 
                            className="sidebar__add"/>
                        </div>
                </div>

                {props.channels.map(ch=>{
                    return <SidebarChannel 
                    id = {ch.id}
                    name = {ch.channelName.channelName}
                    key={ch.id}/> 
                })}
            </div>

            <div className="sidebar__voice">
                <SignalCellular1Bar className="sidebar__voiceIcon"/>
 
                <div className="sidebar__voiceInfo">
                    <h3> Voice Connected </h3>
                    <p> Stream </p>
                </div>

                <div className="sidebar__voiceIcons">
                    <Call />
                    <Settings />
                </div>
            </div>

            <div className="sidebar__profile">
                <div onClick={props.logout}
                className="sidebar__avator">
                    <Avatar 
                    src={props.image}
                    className="sidebar__avator">
                    </Avatar>
                </div>
                

                <div className="sidebar__profile__name"> {props.name} </div>

                <div className="sidebar__profile__icons">
                    <Mic />
                    <Headset />
                    <Settings />
                </div>
            </div>

        </div>
    )
}

export default Sidebar
