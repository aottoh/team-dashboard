import './ProjectFinancials.css'
import { PROJECTS } from '../../../../data/data';
import iconFinancials from '../../../../data/resources/icons/financials.png';

export function ProjectFinancials(props) {

    return(
        <div className="ProjectFinancials infocard">
            <div className="infoheader">
                    <h1>Financials</h1>
                    <img type="img/png" src={iconFinancials}/>
                </div>
            <table>
                <thead>
                    <tr>
                        <td>BMZ</td>
                        <td className="td-financials">Measure</td>
                        <td className="td-financials">Grants</td>
                        <td className="td-financials">SBF</td>
                    </tr>
                </thead>
                <tbody id="pf-tablebody"></tbody>
            </table>
        </div>
    )
}