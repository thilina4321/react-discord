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

function Sidebar() {
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
                        <Add className="sidebar__add"/>
                </div>

                <SidebarChannel />
                <SidebarChannel />
                <SidebarChannel />
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
                <Avatar className="sidebar__avator"></Avatar>

                <div className="sidebar__profile__name"> Thilina </div>

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
