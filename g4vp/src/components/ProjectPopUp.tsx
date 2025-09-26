import "./ProjectPopUp.css"
import type {ProjectDetails} from "./ProjectGrid"

type ProjectData = {
  props: ProjectDetails
}

function ProjectPopUp(data: ProjectData){
  return (<div className="PopUp">
            {data.props.title} 
            <button></button>
          </div>);
}

export default ProjectPopUp;
