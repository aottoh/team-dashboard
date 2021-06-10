import './TeamCalendar.css'
import iconCalendar from '../../../data/resources/icons/upcomingevents.png'

export function TeamCalendar(props) {

    return(
        <div className="TeamCalendar infocard">
            <div className="infoheader">
                    <h1>Past and Upcoming Portfolio Events</h1>
                    <img type="img/png" src={iconCalendar}/>
                </div>
            <div className="tablehead">
                <table>
                    <thead>
                        <tr>
                            <th className="td-project">Project</th>
                            <th className="td-event">Event</th>
                            <th className="td-date">Date</th>
                            <th className="td-link">Link</th>
                        </tr>
                    </thead>
                </table>
            </div>
            <div className="tablebody">
                <table>
                    <tbody id="cal-tablebody"></tbody>
                </table>
            </div>
        </div>
    )
}