import * as myData from '../json/tools.json';
import './ToolTag.css';

type ToolTagProps = {
  name: string;
  icon_src : string;
}

function ToolTag(props: ToolTagProps) {
  return (
    <div className="ToolTag">
      <img className="ToolTag-Img" src={props.icon_src}/>
      <span className="ToolTag-Text">{props.name}</span> 
    </div>);
};

function Tools() {
  const pl_data = myData.programming_languages as Record<string, ToolTagProps>;
  const pl_list = Object.keys(pl_data).map((key)=> {
      const tool: ToolTagProps = pl_data[key];
      return <ToolTag {...tool}/>
    }
  );

  const fw_data = myData.frameworks as Record<string, ToolTagProps>;
  const fw_list = Object.keys(fw_data).map((key)=> {
      const tool: ToolTagProps = fw_data[key];
      return <ToolTag {...tool}/>
    }
  );
  
  const hw_data = myData.hardware as Record<string, ToolTagProps>;
  const hw_list = Object.keys(hw_data).map((key)=> {
      const tool: ToolTagProps = hw_data[key];
      return <ToolTag {...tool}/>
    }
  );

  const tools_data = myData.tools as Record<string, ToolTagProps>;
  const tools_list = Object.keys(tools_data).map((key)=> {
      const tool: ToolTagProps = tools_data[key];
      return <ToolTag {...tool}/>
    }
  );
  return (<div>
            <span className="Skill-Subtitle">Programming Languages:</span>
            <div className="Skill-List PL-Section">
              {pl_list}
            </div>
            <span className="Skill-Subtitle">Frameworks & Libraries:</span>
            <div className="Skill-List Fw-Section">
              {fw_list}
            </div>
            <span className="Skill-Subtitle">Hardware:</span>
            <div className="Skill-List Hw-Section">
              {hw_list}
            </div>
            <span className="Skill-Subtitle">Tools:</span>
            <div className="Skill-List Tools-Section">
              {tools_list}
            </div>
          </div>);
}

export default Tools
