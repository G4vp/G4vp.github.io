import "../css/Body.css"
import LeftSide from './LeftSide'
import Content from "./Content";
function Body(){
    return(
        <div className="body">
            <LeftSide className="leftSide"/>
            <Content className="content"/>
        </div>
    );
}

export default Body