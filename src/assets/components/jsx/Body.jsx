import "../css/Body.css"
import LeftSide from './LeftSide'
import Content from "./Content";
function Body(){
    return(
        <div className="body">
            <LeftSide/>
            <Content/>
        </div>
    );
}

export default Body