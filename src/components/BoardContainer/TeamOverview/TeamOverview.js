import './TeamOverview.css';
import { TeamLinks } from './TeamLinks/TeamLinks';
import { UpcomingEvents } from './UpcomingEvents/UpcomingEvents';
import { TeamNews } from './TeamNews/TeamNews'

export function TeamOverview(props) {

    return(
        <div className="TeamOverview">
            <div className="torow">
                <TeamLinks
                    classType="TeamLinks mainlinks infocard" 
                    team="mainteam"/>
                <UpcomingEvents />
            </div>
            <TeamNews />
            <div className="torow">
                <TeamLinks 
                    classType="TeamLinks sublinks infocard"
                    team="SB1"/>
                <TeamLinks 
                    classType="TeamLinks sublinks infocard"
                    team="SB2"/>
            </div>
        </div>
    )
}