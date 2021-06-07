import './ProjectFinancials.css'
import { PROJECTS } from '../../../../data/data';

export function ProjectFinancials(props) {

    return(
        <div className="ProjectFinancials infocard">
            <h1>Project Financials</h1>
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