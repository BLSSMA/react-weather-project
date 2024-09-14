import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import "bootstrap/dist/css/bootstrap.css";



export default function WeatherForecast(){

    return(<div className="forecast">
                <ul>
                    <li>
                        <div className="row">
                            <span className="forecastIcon d-flex-grid col-3 space-evenly">
                                <WeatherIcon code="snow-day" size={40} color="black"/>
                                </span>
                            <span className="forecastDay d-flex-grid col-3 space-evenly">Tuesday</span>
                            <span className="forecastHigh d-flex-grid col-3 space-evenly">23℃</span>
                            <span className="forecastLow d-flex-grid col-3 space-evenly">13℃</span>
                            </div>
                            </li>
                   <hr />
                </ul>
</div>);
}