import React from 'react';
import './SideNavItem.css';

export function SideNavItem(props){
    return(
        <h2 className="SideNavItem"
            title={props.title} 
            onClick={props.boardHandler}>

                {props.title}
                
        </h2>
    )
}