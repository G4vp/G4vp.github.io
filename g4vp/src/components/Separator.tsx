import "./Separator.css"

type SeparatorProps = {
  title : string;
}
function Separator(props: SeparatorProps){
  return(
  <div className="Separator">
    <text className="Separator-Title">&gt;_ {props.title}</text>
  </div> 
  );
};

export default Separator
