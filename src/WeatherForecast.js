import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast(props){

    return(<div className="forecast">
                <ul>
                    <li>
                        <div className="row">
                        <span>
                            <div className="forecastIcon col-3"><WeatherIcon code={props.icon} /></div>
                            </span>
                            <span className="forecastDay col-3">Tuesday</span>
                            <span className="forecastHigh col-3">23℃</span>
                            <span className="forecastLow col-3">13℃</span>
                            </div>
                            </li>
                   <hr />
                    <li>
                        <div className="row">
                            <span><img src="#" alt="" className="forecastIcon col-4"/></span>
                            <span className="forecastDay col-4">Wednesday</span>
                            <span className="forecastHigh col-4">23℃</span>
                            <span className="forecastLow col-4">13℃</span>
                            </div>
                            </li>
                    <hr />
                    <li><div className="row"><span><img src="#" alt="" className="forecastIcon col-4"/></span>
                    <span className="forecastDay col-4">Thursday</span>
                    <span className="forecastHigh col-4">23℃</span>
                    <span className="forecastLow col-4">13℃</span>
                    </div>
                    </li>
                    <hr />
                    <li><div className="row"><span><img src="#" alt="" className="forecastIcon col-4"/></span>
                    <span className="forecastDay col-4">Friday</span>
                    <span className="forecastHigh col-4">23℃</span>
                    <span className="forecastLow col-4">13℃</span>
                    </div>
                    </li>
                </ul>

</div>);
}