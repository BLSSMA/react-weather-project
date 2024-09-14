import React from "react";
import "./WeatherInfo.css";
import FormatDate from "./FormatDate";
import WeatherIcon from "./WeatherIcon";
import WeatherUnit from "./WeatherUnit";
import "bootstrap/dist/css/bootstrap.css";


export default function WeatherInfo(props){

 return(
    <div className="bodyMain">
        <div className="WeatherInfo">
           <FormatDate date={props.data.date} />
            <div className="cityTitle">{props.data.city}</div>
            <WeatherIcon code={props.data.iconUrl} size={200} color="moccasin"/>
            
                <div className="row currentStats">
                     <div className="currentStatsTempDescr col-4">
                                    < WeatherUnit celsius={props.data.temperature}/>
<div className="currentStatsDescription">{props.data.description}</div>
                    </div>
             <div className="currentStatsPrecipitation col-3">Feels Like: <strong>{props.data.feelsLike}%</strong></div>
                <div className="currentStatsWind col-3"><div>wind </div><strong>{props.data.wind}km/h</strong></div>
                <div className="currentStatsHumidity col-2">humidity <strong>{props.data.humidity}%</strong></div>


            </div>
            
        </div>
        </div>
    );
}