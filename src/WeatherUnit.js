import React, { useState } from "react";
import "./WeatherUnit.css";


export default function WeatherUnit(props){
    const [unit, setUnit] = useState ("celsius")
    function convertF(event){
        event.preventDefault();
        setUnit("fahrenheit");
    }

    function convertC(event){
        event.preventDefault();
        setUnit("celsius");
    }

    let fahrenheit = (props.celsius * 9/5) +32;
    if (unit === "celsius"){

    return(
        <div className="currentStatsTempDescr">
                    <span className="currentStatsTemp">{Math.round(fahrenheit)}</span>
                    <span className="currentUnit">℉ | <a href="/" alt="" onClick={convertF} title="click to change unit">℃</a></span>
                    </div>);
}else{ 
    return(
        <div className="currentStatsTempDescr">
                    <span className="currentStatsTemp">{Math.round(props.celsius)}</span>
                    <span className="currentUnit"><a href="/" alt="" onClick={convertC} title="click to change unit">℉</a> | ℃</span>
                    </div>
) ;
}}