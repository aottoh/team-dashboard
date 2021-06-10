import './BoardContainer.css';
import { ProjectViewer } from './ProjectViewer/ProjectViewer';
import { TeamCalendar } from './TeamCalendar/TeamCalendar';
import { TeamOverview } from './TeamOverview/TeamOverview'

export function BoardContainer(props) {

    switch(props.board) {
        case "Project Viewer":
            return (
                <div className="BoardContainer">
                    <ProjectViewer selectedProject={props.selectedProject} />
                </div>);
            break;
        case "Team Calendar":
            return(
                <div className="BoardContainer">
                    <TeamCalendar />
                </div>
            )
            break;
        case "Team Overview":
            return(
                <div className="BoardContainer">
                    <TeamOverview />
                </div>
            )
        default:
            return <h1>Other</h1>;
            break;
    }

}