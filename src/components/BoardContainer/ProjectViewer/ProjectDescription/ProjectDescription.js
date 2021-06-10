import './ProjectDescription.css';
import iconDescription from '../../../../data/resources/icons/description.png'

export function ProjectDescription(props) {
    return(
        <div className="ProjectDescription infocard">
            <div className="infoheader">
                    <h1>Desctiption</h1>
                    <img type="img/png" src={iconDescription}/>
                </div>
            <p>{props.description}</p>
        </div>
    )
}