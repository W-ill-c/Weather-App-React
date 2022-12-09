import React from "react";
import SearchTitle from './weatherTitle';
import SearchInput from './input';
import GPSIcon from './gpsIcons';

export default function WholeSearch(){
    return(
        <div className="locationSearch">
            <SearchTitle />
            <SearchInput />
            <GPSIcon />
        </div>
    )
}
