import React from "react";

export default function ForecastDateFormat(props){
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let day = days[props.date.getDay()];
    }
 
    return(
    <div className="day">
        {day}
        </div>
        );
