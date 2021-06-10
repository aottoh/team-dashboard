import './InfoTable.css'
import iconIdentifiers from '../../../../../data/resources/icons/identifiers.png';
import iconOwners from '../../../../../data/resources/icons/owners.png';

export function InfoTable(props) {

    let [left1, left2, left3, left4] = props.title === "Identifiers"
        ? ["BMZ (HM):", "BMZ (BM):", "InPro (HM):", "InPro (BM):"]
        : ["PM:", "LE:", "TE:"];

    let [right1, right2, right3, right4] = props.title === "Identifiers"
        ? [props.pnRight1, props.pnRight2, props.pnRight3, props.pnRight4]
        : [props.pfRight1, props.pfRight2, props.pfRight3];
    

    return(
        <div>
            <div className="tableheader">
                <h2>{props.title}</h2>
                <img 
                    type="img/png" 
                    src={props.title === "Identifiers"
                            ? iconIdentifiers
                            : iconOwners}/>
                
            </div>
            <table 
            className="InfoTable"
            id={props.idProp}>
                <tbody>
                    <tr>
                        <td className="InfoTable-main InfoTable-left" >{left1}</td>
                        <td className="InfoTable-main">{right1}</td>
                    </tr>
                    <tr>
                        <td className="InfoTable-left">{left2}</td>
                        <td>{right2}</td>
                    </tr>
                    <tr>
                        <td className={
                            props.title === "Identifiers"
                                ? "InfoTable-main InfoTable-left"
                                : "InfoTable-left"
                        }>{left3}</td>
                        <td className={
                            props.title === "Identifiers"
                                ? "InfoTable-main"
                                : null
                        }>{right3}</td>
                    </tr>
                    <tr>
                        <td className="InfoTable-left">{left4}</td>
                        <td>{right4}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}


/*
<thead>
    <tr>
        <th scope="colgroup" colSpan="2">{props.title}</th>
    </tr>
</thead>
*/