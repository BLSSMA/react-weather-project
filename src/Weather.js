import React from "react";
import "./Weather.css";
import "bootstrap/dist/css/bootstrap.css";


export default function Weather(){
    return(
        <div className="bodyMain">
        <div>
            <div className="currentWeather">
            <form className="weatherSearch">
                <input className="search auto-focus" type="search" placeholder="enter a city"/>
                <input className="submit" type="submit" value="Search" />
            </form>
            <div className="cityTitle">London</div>
            <img className="mainIcon" src="#" alt=""/>
            <div className="row currentStats">
                <div className="currentStatsTempDescr col-6"><span className="currentStatsTemp">19</span><span className="currentUnit">℃</span><div className="currentStatsDescription">description</div></div>
                <div className="currentStatsWind col-2">wind <strong>4km/h</strong></div>
                <div className="currentStatsHumidity col-2">humidity <strong>80%</strong></div>
                 <div className="currentStatsPrecipitation col-2">Precipitation <strong>10%</strong></div>

            </div>
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
    )
}