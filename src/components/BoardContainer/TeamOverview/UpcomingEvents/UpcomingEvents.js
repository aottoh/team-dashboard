import './UpcomingEvents.css';
import iconUpcomingEvents from '../../../../data/resources/icons/upcomingevents.png';
import { CALENDAR } from '../../../../data/data';

export function UpcomingEvents(props){

    let today = new Date()
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();
    
    today = mm + '/' + dd + '/' + yyyy;

    let arrSortedCal = CALENDAR.filter(element => Date.parse(element._date) >= Date.parse(today));

    arrSortedCal.sort(function(a, b){
        let dateA = new Date(a._date), dateB = new Date(b._date);
        return dateA - dateB;
    })

    let arrUpcoming = [];

    for(let i = 0; i < 5; i++){
        arrUpcoming.push(
        <tr key={i}>
            <td>{arrSortedCal[i]._name}</td>
            <td>{arrSortedCal[i]._event}</td>
            <td>{arrSortedCal[i]._date}</td>
        </tr>)
    }

    return(
        <div className="UpcomingEvents infocard">
            <div className="infoheader">
                <h1>Upcoming Events</h1>
                <img type="img/png" src={iconUpcomingEvents}/>
            </div>
        <table>
            <thead>
                <tr>
                    <td>Project</td>
                    <td>Event</td>
                    <td>Date</td>
                </tr>
            </thead>
            <tbody>
                {arrUpcoming}
            </tbody>
        </table>
            
        </div>
    )
}