import React from "react";
import { BsThermometerLow, BsThermometerHalf, BsThermometerHigh } from "react-icons/bs";

export default function PollutionUV(){
    return(
        <div className="pollutionUV">
            <BsThermometerLow className="thermometer"/> 
            <p>UV is Low</p>
            <BsThermometerLow className="thermometer"/>
            <p>Pollution is Low</p>
        </div>
    )
}