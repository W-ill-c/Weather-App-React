import React from "react";
import SearchTitle from './weatherTitle'
import SearchInput from './input'

export default function WholeSearch(){
    return(
        <div className="locationSearch">
            <SearchTitle />
            <SearchInput />
        </div>
    )
}
