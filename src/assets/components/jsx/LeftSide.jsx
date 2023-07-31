import React, {useState, useEffect} from "react";
import "../css/LeftSide.css"


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
        <div class="leftContainer">
            <div class="leftContainer__top">
                <div class="leftContainer__topImageContainer">
                    <img class="leftContainer__topImage" src="src/assets/photos/IconBlank.png" alt="" />
                </div>
            </div>

            <div class="leftContainer__bottom">
                <h3 class="leftContainer__bottomTitle"> About Me :) </h3>
                <ul class="leftContainer__bottomList">
                    <li class="leftContainer__bottomElement">
                        <h4 class="leftContainer__bottomSubTittle leftContainer__bottomSubTittle--age" >Age :</h4>
                        <span class="leftContainer__bottomValue">{age}</span>
                    </li>
                    <li class="leftContainer__bottomElement">
                        <h4 class="leftContainer__bottomSubTittle leftContainer__bottomSubTittle--bday">
                            B-Day :</h4>
                        <span class="leftContainer__bottomValue">April, 08</span>
                    </li>
                    <li class="leftContainer__bottomElement">
                        <h4 class="leftContainer__bottomSubTittle leftContainer__bottomSubTittle--country">
                            Country :</h4>
                        <span class="leftContainer__bottomValue">🇵🇷</span>
                    </li>
                </ul>
            </div>
        </div>

    )
}


export default LeftSide;