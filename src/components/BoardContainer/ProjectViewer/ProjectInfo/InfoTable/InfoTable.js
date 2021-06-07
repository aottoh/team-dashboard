import './InfoTable.css'

export function InfoTable(props) {

    let [left1, left2, left3, left4] = props.title === "Project Numbers"
        ? ["BMZ (HM):", "BMZ (BM):", "InPro (HM):", "InPro (BM):"]
        : ["PM:", "LE:", "TE:"];

    let [right1, right2, right3, right4] = props.title === "Project Numbers"
        ? [props.pnRight1, props.pnRight2, props.pnRight3, props.pnRight4]
        : [props.pfRight1, props.pfRight2, props.pfRight3];
    

    return(
        <table 
            className="InfoTable"
            id={props.idProp}>
            <thead>
                <tr>
                    <th scope="colgroup" colSpan="2">{props.title}</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{left1}</td>
                    <td>{right1}</td>
                </tr>
                <tr>
                    <td>{left2}</td>
                    <td>{right2}</td>
                </tr>
                <tr>
                    <td>{left3}</td>
                    <td>{right3}</td>
                </tr>
                <tr>
                    <td>{left4}</td>
                    <td>{right4}</td>
                </tr>
            </tbody>
        </table>
    )
}
