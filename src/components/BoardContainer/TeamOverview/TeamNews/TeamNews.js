import './TeamNews.css';
import iconNews from '../../../../data/resources/icons/news.png';

export function TeamNews() {

    return(
        <div className="TeamNews infocard">
            <div className="infoheader">
                    <h1>Team News</h1>
                    <img type="img/png" src={iconNews}/>
                </div>
            <p>This placeholder serves for important team information that can be placed here. This can be important announcement relevant to the entire team, but also can include information about </p> <ul><li>Team Jour Fixe Protocols</li><li>Notes on upcoming reports</li><li>Tasks for team members</li></ul> <p> Any team relevant info goes here.</p>
        </div>
    )
}