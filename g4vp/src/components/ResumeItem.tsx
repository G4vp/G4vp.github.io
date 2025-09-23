import "./ResumeItem.css";
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
        <div className="resume-item-details-container"> 
          <span className="resume-details-title">{props.title}</span>
          <span className="resume-details-subtitle">{props.subtitle}</span>
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

function ResumeItem(props: ProjectDetails) {
  const [IsHover, setIsHover] = useState(false);
  return(
  <div className="resume-item-container" 
   onMouseEnter={()=>setIsHover(true)}
   onMouseLeave={()=>setIsHover(false)}>
    {IsHover ? ShowDetails(props) : HiddenDetails(props)}
  </div>);
};

function ResumeGrid() {
  const projects_data = myData.Projects as Record<string, ProjectDetails>;
  const projects_list = Object.keys(projects_data)
  .map((key)=> {
    const projects_details: ProjectDetails = projects_data[key];
    console.log(projects_details.title);
    return ResumeItem(projects_details);
  });
  return(<div className="projects-grid">{projects_list}</div>);
}

export default ResumeGrid;
