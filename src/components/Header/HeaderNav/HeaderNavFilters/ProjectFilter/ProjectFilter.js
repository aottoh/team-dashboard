import './ProjectFilter.css';

export function ProjectFilter(props) {
    return(
        <div className="ProjectFilter">
            <label>{props.type}:</label>
            <select id={`select${props.type}`} onChange={props.projectHandler}>
                {
                    props.options.map(element => <option key={element} value={element}>{element}</option>)
                }
            </select>
        </div>
    )
}