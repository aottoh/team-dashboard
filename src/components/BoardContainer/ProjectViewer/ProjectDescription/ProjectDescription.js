import './ProjectDescription.css';

export function ProjectDescription(props) {
    return(
        <div className="ProjectDescription infocard">
            <h1>Project Description</h1>
            <p>{props.description}</p>
        </div>
    )
}