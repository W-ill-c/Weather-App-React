import React from "react";

import { FaSearchLocation } from "react-icons/fa";

export default function SearchInput(){
    return(
        <div className="searchInput">
            <form>
                <input className="locationInput" placeholder="Enter a city or town..."></input>
                <label className="searchSymbol">
                    <FaSearchLocation className="searhIcon"/>
                </label>
            </form>
        </div>
        )
}