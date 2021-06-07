import './HeaderNavTime.css';
import { TimeSelect } from './TimeSelect/TimeSelect'

export function HeaderNavTime(props) {
    return(
        <div className="HeaderNavTime">
            <TimeSelect 
                label="Start"
                calendarHandler={props.calendarHandler}
                iniDate={props.iniStartDate}/>
            <h1>To</h1>
            <TimeSelect 
                label="End"
                calendarHandler={props.calendarHandler}
                iniDate={props.iniEndDate}/>
        </div>
    )
}