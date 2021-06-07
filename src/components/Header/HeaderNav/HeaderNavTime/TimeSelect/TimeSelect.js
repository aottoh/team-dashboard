import './TimeSelect.css';



export function TimeSelect(props) {

    return(
        <div className="TimeSelect">
            <label>{props.label}:</label>
            <input 
                type="date"
                id={props.label}
                defaultValue={props.iniDate}
                onChange={props.calendarHandler}/>
        </div>
    )
}