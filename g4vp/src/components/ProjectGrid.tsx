import "./ProjectGrid.css";
import "./ProjectPopUp.css"
import remarkGfm from 'remark-gfm'
import Markdown from 'react-markdown'

import * as myData from '../json/projects.json';
import {useState} from 'react';

export type ProjectDetails = {
  img_path: string,
  title: string,
  subtitle: string,
  description: string
}

function ProjectGrid() {
  const [ShowPopUp, setShowPopUp] = useState(false);
  const [PopUpDetails, setPopUpDetails] = useState<ProjectDetails>(
    {
      "img_path" : "",
      "title": "",
      "subtitle": "",
      "description": ""
    }
  );
  const [markdownContent, setMarkdownContent] = useState("");

  async function handleProjectClick(props: ProjectDetails) {
    setPopUpDetails(props);
    if (props.description.endsWith('.md')) {
      const response = await fetch(`/${props.description}`);
      const text = await response.text();
      setMarkdownContent(text);
    } else {
      setMarkdownContent(props.description);
    }
    setShowPopUp(true);
  }

  function ProjectItem(props: ProjectDetails) {
    const ImgStyle = {
      backgroundImage: `url(${props.img_path})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      width: "100%",
      height: "100%",
    };

    return (
      <div className="project-item-container" onClick={() => handleProjectClick(props)}>
        <div style={ImgStyle} className="project-card-bg">
          <div className="project-item-details-overlay"> 
            <span className="project-details-title">{props.title}</span>
            <span className="project-details-subtitle">{props.subtitle}</span>
          </div>
        </div>
      </div>
    );
  }

  function ProjectPopUp(props: ProjectDetails){
    return (<div className="PopUp">
              <button onClick={()=>setShowPopUp(false)}></button>
              <span className="PopUp-Description">
                <Markdown remarkPlugins={[remarkGfm]}>{markdownContent}</Markdown>
              </span>
            </div>);
  }

  const projects_data = myData.Projects as Record<string, ProjectDetails>;
  const projects_list = Object.keys(projects_data)
  .map((key)=> {
    const projects_details: ProjectDetails = projects_data[key];
    return ProjectItem(projects_details);
  });
  return(<div>
          <div className="projects-grid">{projects_list} </div>
          {ShowPopUp ? ProjectPopUp(PopUpDetails) : null}
         </div>);
}

export default ProjectGrid;
