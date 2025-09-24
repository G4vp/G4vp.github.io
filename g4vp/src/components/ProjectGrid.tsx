import "./ProjectGrid.css";
import * as myData from '../json/projects.json';
import {useState} from 'react';

type ProjectDetails = {
  img_path: string,
  title: string,
  subtitle: string
}

function ShowDetails(props: ProjectDetails) {
  const ImgStyle = {
    backgroundImage: `url(${props.img_path})`,
    backgroundSize: "cover",
    backgroundPosition: "center center",
    borderRadius: "24px",
    height: "300px"
  }
  return(
      <div style={ImgStyle}>
        <div className="project-item-details-container"> 
          <span className="project-details-title">{props.title}</span>
          <span className="project-details-subtitle">{props.subtitle}</span>
        </div>
      </div>
  )
}

function HiddenDetails(props: ProjectDetails) {
    const ImgStyle = {
      backgroundImage: `url(${props.img_path})`,
      backgroundSize: "cover",
      backgroundPosition: "center center",
      borderRadius: "24px",
      height: "300px"
    }
    return (
      <div style={ImgStyle}>
      </div>
    )
}

function ProjectItem(props: ProjectDetails) {
  const [IsHover, setIsHover] = useState(false);
  return(
  <div className="project-item-container" 
   onMouseEnter={()=>setIsHover(true)}
   onMouseLeave={()=>setIsHover(false)}>
    {IsHover ? ShowDetails(props) : HiddenDetails(props)}
  </div>);
};

function ProjectGrid() {
  const projects_data = myData.Projects as Record<string, ProjectDetails>;
  const projects_list = Object.keys(projects_data)
  .map((key)=> {
    const projects_details: ProjectDetails = projects_data[key];
    console.log(projects_details.title);
    return ProjectItem(projects_details);
  });
  return(<div className="projects-grid">{projects_list}</div>);
}

export default ProjectGrid;
