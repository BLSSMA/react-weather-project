import React from "react";
import "./FormatDate.css";


export default function FormatDate(props){
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let day = days[props.date.getDay()];
    let hours = props.date.getHours();
    if (hours < 10){
        hours = `0${hours}`;
    }
    let minutes = props.date.getMinutes();
    if (minutes < 10){
        minutes = `0${minutes}`;
    }
 
    return(
    <div className="dayTime">
        {day} {hours}:{minutes}
        </div>
        );
}