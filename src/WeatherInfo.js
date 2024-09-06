import React from "react";
import "./WeatherInfo.css";
import FormatDate from "./FormatDate";
import "bootstrap/dist/css/bootstrap.css";


export default function WeatherInfo(props){

 return(
    <div className="bodyMain">
        <div className="WeatherInfo">
           <FormatDate date={props.data.date} />
            <div className="cityTitle">{props.data.city}</div>
            <img src={props.data.icon} alt={props.data.description} />
                <div className="row currentStats">
                <div className="currentStatsTempDescr col-4">
                    <span className="currentStatsTemp">{Math.round(props.data.temperature)}</span>
                    <span className="currentUnit">℃</span>
                    <div className="currentStatsDescription">{props.data.description}</div>
                    </div>
             <div className="currentStatsPrecipitation col-3">Feels Like: <strong>{props.data.feelsLike}%</strong></div>
                <div className="currentStatsWind col-3"><div>wind </div><strong>{props.data.wind}km/h</strong></div>
                <div className="currentStatsHumidity col-2">humidity <strong>{props.data.humidity}%</strong></div>


            </div>
            <div className="forecast">
                <ul>
                    <li><div className="row"><span><img src="#" alt="" className="forecastIcon col-4 img-fluid"/></span><span className="forecastDay col-4">Tuesday</span><span className="forecastHigh col-4">23℃</span><span className="forecastLow col-4">13℃</span></div></li>
                   <hr />
                    <li><div className="row"><span><img src="#" alt="" className="forecastIcon col-4"/></span><span className="forecastDay col-4">Wednesday</span><span className="forecastHigh col-4">23℃</span><span className="forecastLow col-4">13℃</span></div></li>
                    <hr />
                    <li><div className="row"><span><img src="#" alt="" className="forecastIcon col-4"/></span><span className="forecastDay col-4">Thursday</span><span className="forecastHigh col-4">23℃</span><span className="forecastLow col-4">13℃</span></div></li>
                    <hr />
                    <li><div className="row"><span><img src="#" alt="" className="forecastIcon col-4"/></span><span className="forecastDay col-4">Friday</span><span className="forecastHigh col-4">23℃</span><span className="forecastLow col-4">13℃</span></div></li>
                </ul>

</div>
        </div>
        </div>
    );
}