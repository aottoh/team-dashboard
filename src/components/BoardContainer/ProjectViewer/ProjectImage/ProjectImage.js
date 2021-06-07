import './ProjectImage.css';
import apples from '../../../../data/resources/images/apples.jpg';
import carrots from '../../../../data/resources/images/carrots.jpg';
import cucumbers from '../../../../data/resources/images/cucumbers.jpg';
import drumsticks from '../../../../data/resources/images/drumstick.jpg';
import mango from '../../../../data/resources/images/mango.jpg';
import okra from '../../../../data/resources/images/okra.jpg';
import papaya from '../../../../data/resources/images/papaya.jpg';
import pears from '../../../../data/resources/images/pears.jpg';
import plums from '../../../../data/resources/images/plums.jpg';


export function ProjectImage(props) {

    let image;

    if(props.selectedProject === "Apfel"){
        image = apples;
    } else if(props.selectedProject === "Birne"){
        image = pears;
    } else if(props.selectedProject === "Pflaume"){
        image = plums;
    } else if(props.selectedProject === "Karotte"){
        image = carrots;
    } else if(props.selectedProject === "Gurke"){
        image = cucumbers;
    } else if(props.selectedProject === "Mango"){
        image = mango;
    } else if(props.selectedProject === "Papaya"){
        image = papaya;
    } else if(props.selectedProject === "Okra"){
        image = okra;
    } else if(props.selectedProject === "Meerrettichbaum"){
        image = drumsticks;
    }


    return(
        <figure className="ProjectImage">
            <img type="image/jpg" src={image} alt={props.alt}/>
            <figcaption>
                <a target="_blank" id="img_weblink" href={props.wpcitation}>Link to Website</a>
                <br/>
                <a target="_blank" id="img_piclink" href={props.imgcitation}>Link to Image</a>
            </figcaption>
        </figure>
    )
}
