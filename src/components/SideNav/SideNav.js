import React from 'react';
import './SideNav.css'
import { SideNavItem } from './SideNavItem/SideNavItem'

export function SideNav (props) {
    return(
        <div className="SideNav">
            <h1>Boards</h1>
            <br></br>
            <SideNavItem title="Team Overview" boardHandler={props.boardHandler}/>
            <SideNavItem title="Team Calendar" boardHandler={props.boardHandler}/>
            <SideNavItem title="Project Viewer" boardHandler={props.boardHandler}/>
        </div>
    )
}