import React, {useState, useEffect} from "react";
import "../css/LeftSide.css"
import IconBlank from "../../photos/IconBlank.png";

function LeftSide(){
    const [age, setAge] = useState(0);
    const myBirthDay = new Date(2003,3,8)
    useEffect(()=>{
        const interval = setInterval(() => {
            const Today = new Date();
            setAge(age => age = ((Today.valueOf()-myBirthDay.valueOf())/(3.154*Math.pow(10,10))).toFixed(7));
        }, 1000);
        return () => clearInterval(interval);
    },[])

    return(
        <div className="leftContainer">
            <div className="leftContainer__top">
                <div className="leftContainer__topImageContainer">
                    <img className="leftContainer__topImage" src={IconBlank} alt="" />
                </div>
            </div>

            <div className="leftContainer__bottom">
                <h3 className="leftContainer__bottomTitle"> About Me :) </h3>
                <ul className="leftContainer__bottomList">
                    <li className="leftContainer__bottomElement">
                        <h4 className="leftContainer__bottomSubTittle leftContainer__bottomSubTittle--age" >Age :</h4>
                        <span className="leftContainer__bottomValue">{age}</span>
                    </li>
                    <li className="leftContainer__bottomElement">
                        <h4 className="leftContainer__bottomSubTittle leftContainer__bottomSubTittle--bday">
                            B-Day :</h4>
                        <span className="leftContainer__bottomValue">April, 08</span>
                    </li>
                    <li className="leftContainer__bottomElement">
                        <h4 className="leftContainer__bottomSubTittle leftContainer__bottomSubTittle--country">
                            Country :</h4>
                        <span className="leftContainer__bottomValue">🇵🇷</span>
                    </li>
                </ul>
            </div>
        </div>

    )
}


export default LeftSide;