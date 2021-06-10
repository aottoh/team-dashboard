import './TeamLinks.css';
import iconTeamfolder from '../../../../data/resources/icons/teamfolder.png';
import iconVacationplanner from '../../../../data/resources/icons/vacationplanner.png';
import iconOnboarding from '../../../../data/resources/icons/onboardingpackage.png';
import iconPortfolioOverview from '../../../../data/resources/icons/overview.png';
import iconTaskBoard from '../../../../data/resources/icons/taskboard.png';
import iconLink from '../../../../data/resources/icons/links.png';

export function TeamLinks(props) {

    if(props.team === "mainteam"){
        return(
            <div className={props.classType}>
                <div className="infoheader">
                    <h1>Team Links</h1>
                    <img type="img/png" src={iconLink}/>
                </div>
                <div className="teamlink-container">
                    <div className="linkrow">
                        <img className="largeicon" type="image/png" src={iconTeamfolder}/>
                        <span>Team Folder</span>
                    </div>
                    <div className="linkrow">
                        <img className="largeicon" type="image/png" src={iconVacationplanner}/>
                        <span>Vacation Planner</span>
                    </div>
                    <div className="linkrow">
                        <img className="largeicon" type="image/png" src={iconOnboarding}/>
                        <span>Onboarding Package</span>
                    </div>
                </div>
            </div>
        )
    } else if(props.team === "SB1"){
        return(
            <div className={props.classType}>
                <div className="infoheader">
                    <h1>Fruit Team Links</h1>
                    <img type="img/png" src={iconLink}/>
                </div>
                <div className="teamlink-container">
                    <div className="linkrow">
                        <img className="largeicon" type="image/png" src={iconTeamfolder}/>
                        <span>Team Folder</span>
                    </div>
                    <div className="linkrow">
                        <img className="largeicon" type="image/png" src={iconPortfolioOverview}/>
                        <span>Portfolio Overview</span>
                    </div>
                    <div className="linkrow">
                        <img className="largeicon" type="image/png" src={iconTaskBoard}/>
                        <span>Task Board</span>
                    </div>
                </div>
            </div>
        )
    } else if(props.team === "SB2"){
        return(
            <div className={props.classType}>
                <div className="infoheader">
                    <h1>Vegetable Team Links</h1>
                    <img type="img/png" src={iconLink}/>
                </div>
                <div className="teamlink-container">
                    <div className="linkrow">
                        <img className="largeicon" type="image/png" src={iconTeamfolder}/>
                        <span>Team Folder</span>
                    </div>
                    <div className="linkrow">
                        <img className="largeicon" type="image/png" src={iconPortfolioOverview}/>
                        <span>Portfolio Overview</span>
                    </div>
                </div>
            </div>
        )
    }
    
    else {
        return(
            <div className="infocard">
                <h1>Team Links</h1>
            </div>
        )
    }

    
}