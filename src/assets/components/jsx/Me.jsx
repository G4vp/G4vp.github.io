import "../css/Me.css"
import LeftSide from './LeftSide'
import Content from "./Content";
function Me(){
    return(
        <div className="me">
            <LeftSide className="leftSide"/>
            <Content className="content"/>
        </div>
    );
}

export default Me