import React from "react";
import LocationTitle from './locationTitle'

export default function LocationImage(){
    return(    
        <div className="backgroundImgSection">
            <LocationTitle />
            <img src={require("../imgs/sunnySky.jpg")} className="backgroundImg"alt="Image that depends on weather forecast of each day"/>
        </div>
    )

}