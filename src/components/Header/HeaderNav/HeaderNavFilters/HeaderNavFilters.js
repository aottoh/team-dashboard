import './HeaderNavFilters.css';
import { FilterSelect } from './FilterSelect/FilterSelect'
import { ProjectFilter } from './ProjectFilter/ProjectFilter'

export function HeaderNavFilters(props) {
    return(
        <div className="HeaderNavFilters">
            <FilterSelect 
                type="Country"
                value={props.countryState}
                options={props.countries}
                filterHandler={props.filterHandler}/>
            <FilterSelect 
                type="Sector"countryState={props.countryState}
                value={props.sectorState}
                options={props.sectors}
                filterHandler={props.filterHandler}/>
            <ProjectFilter 
                type="Project" 
                options={props.projects} 
                projectHandler={props.projectHandler}/>
        </div>
    )
}