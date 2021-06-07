import './ProjectViewer.css';
import { PROJECTS, DESCRIPTIONS, IMAGES } from '../../../data/data'

import { ProjectInfo } from './ProjectInfo/ProjectInfo';
import { ProjectImage } from './ProjectImage/ProjectImage';
import { ProjectDescription } from './ProjectDescription/ProjectDescription'
import { ProjectFinancials } from './ProjectFinancials/ProjectFinancials'

export function ProjectViewer(props) {

    let project = PROJECTS.filter(element => element._name === props.selectedProject);
    
    let projectNameDE = props.selectedProject;
    let projectNameEN = [... new Set(project.map(element => element._eng))];

    let pnRight1 = project.filter(element => element._invbm === 'inv').map(element => element._bmz);
    let pnRight2 = project.filter(element => element._invbm === 'bm').map(element => element._bmz);
    let pnRight3 = project.filter(element => element._invbm === 'inv').map(element => element._inpro);
    let pnRight4 = project.filter(element => element._invbm === 'bm').map(element => element._inpro);

    let poRight1 = [...new Set(project.map(element => element._pm))];
    let poRight2 = [...new Set(project.map(element => element._localexpert))];
    let poRight3 = [...new Set(project.map(element => element._tsv))];

    let projectImageWP = props.selectedProject === "All"
    ? null
    : IMAGES.filter(element => element._name === projectNameDE)[0]._citationwp;

    let projectImageIMG = props.selectedProject === "All"
    ? null
    : IMAGES.filter(element => element._name === projectNameDE)[0]._citationimg;

    let description = props.selectedProject === "All"
        ? null
        : DESCRIPTIONS.filter(element => element._name === props.selectedProject)[0]._desc;

    return(
        <div className="ProjectViewer">
            <div className="ProjectViewer-row1">
                <ProjectInfo 
                    projectDE={projectNameDE}
                    projectEN={projectNameEN}
                    pnRight1={pnRight1}
                    pnRight2={pnRight2}
                    pnRight3={pnRight3}
                    pnRight4={pnRight4}
                    poRight1={poRight1}
                    poRight2={poRight2}
                    poRight3={poRight3}/>
                <ProjectImage 
                    selectedProject={props.selectedProject}
                    alt={`Image of ${props.selectedProject}`}
                    wpcitation={projectImageWP}
                    imgcitation={projectImageIMG}
                    />
            </div>
            <ProjectDescription 
                description = {description}/>
            <ProjectFinancials 
                project={projectNameDE}/>
        </div>
    )

}

/*

wpcitation={projectImageData._citationwp}
imgcitation={projectImageData._citationimg}

*/