import './FilterSelect.css';

export function FilterSelect(props) {
    return(
        <div className="FilterSelect">
            <label>{props.type}:</label>
            <select 
                id={`select${props.type}`} 
                onChange={props.filterHandler}
                value={props.value}>
                    {
                        props.options.map(element => <option key={element} value={element}>{element}</option>)
                    }
            </select>
        </div>
    )
}