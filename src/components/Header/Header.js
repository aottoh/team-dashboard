import './Header.css';
import { HeaderBar } from './HeaderBar/HeaderBar';
import { HeaderNav } from './HeaderNav/HeaderNav';

export function Header(props) {
    return(
        <div className="Header">
            <HeaderBar board={props.board}/>
            <HeaderNav 
                board={props.board}
                countries={props.countries} 
                sectors={props.sectors}
                countryState={props.countryState}
                sectorState={props.sectorState}
                projects={props.projects}
                filterHandler={props.filterHandler}
                projectHandler={props.projectHandler}
                calendarHandler={props.calendarHandler}
                iniStartDate={props.iniStartDate}
                iniEndDate={props.iniEndDate}/>
        </div>
    )
}