import './TeamCalendar.css'

export function TeamCalendar(props) {

    return(
        <div className="TeamCalendar infocard">
            <h1>Past and Upcoming Team Portfolio Events</h1>
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