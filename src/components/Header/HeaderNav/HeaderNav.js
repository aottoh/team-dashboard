import './HeaderNav.css'
import { HeaderNavFilters } from './HeaderNavFilters/HeaderNavFilters';
import { HeaderNavTime } from './HeaderNavTime/HeaderNavTime'
import { TOMenu } from './TOMenu/TOMenu'
import { SB1Menu } from './SB1Menu/SB1Menu';
import { SB2Menu } from './SB2Menu/SB2Menu';
 
export function HeaderNav(props) {

    if(props.board === "Team Calendar"){
        return(
            <div className="HeaderNav">
                <HeaderNavFilters
                        id="HeaderNavFilters" 
                        countries={props.countries} 
                        sectors={props.sectors}
                        countryState={props.countryState}
                        sectorState={props.sectorState}
                        projects={props.projects}
                        filterHandler={props.filterHandler}
                        projectHandler={props.projectHandler}/>
                <HeaderNavTime 
                    calendarHandler={props.calendarHandler}
                    iniStartDate={props.iniStartDate}
                    iniEndDate={props.iniEndDate}/>
            </div>
        )

    } else if(props.board === "Project Viewer"){
        return(
            <div className="HeaderNav">
                <HeaderNavFilters 
                        id="HeaderNavFilters"
                        countries={props.countries} 
                        sectors={props.sectors}
                        countryState={props.countryState}
                        sectorState={props.sectorState}
                        projects={props.projects}
                        filterHandler={props.filterHandler}
                        projectHandler={props.projectHandler}/>
            </div>
        )

    } else if(props.board === "Team Overview"){
        return(
            <div className="HeaderNav">
                <TOMenu />
            </div>
        )
    } else if(props.board === "Sub-Team 1"){
        return(
            <div className="HeaderNav">
                <SB1Menu />
            </div>
        )
    } else if(props.board === "Sub-Team 2"){
        return(
            <div className="HeaderNav">
                <SB2Menu />
            </div>
        )
    }
    
      else {
        return(
            <div className="HeaderNav"></div>
        )
    }
    
}