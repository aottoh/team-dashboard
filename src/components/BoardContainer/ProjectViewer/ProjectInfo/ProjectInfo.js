import './ProjectInfo.css'
import { InfoTable } from './InfoTable/InfoTable'

export function ProjectInfo(props) {
    return(
        <div className="ProjectInfo infocard">
            <h1>{props.projectDE}</h1>
            <h2>{props.projectEN}</h2>
            <div className="tableContainer">
                <InfoTable 
                    title="Project Numbers"
                    idProp="table-projectNumbers" 
                    pnRight1={props.pnRight1}
                    pnRight2={props.pnRight2}
                    pnRight3={props.pnRight3}
                    pnRight4={props.pnRight4}/>
                <InfoTable 
                    title="Project Owners"
                    idProp="table-projectOwners" 
                    pfRight1={props.poRight1}
                    pfRight2={props.poRight2}
                    pfRight3={props.poRight3}/>
            </div>
        </div>
    )
}