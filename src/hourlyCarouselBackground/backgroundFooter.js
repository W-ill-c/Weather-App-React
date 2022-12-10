import React from "react";
import PollutionUV from './pollutionUV'
import SunRiseSet from './sun'

export default function BackgroundFooter(){
    return(
        <div className="backgroundFooter">
            <PollutionUV />
            <SunRiseSet />
        </div>
    )
}