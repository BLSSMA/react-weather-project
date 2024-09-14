import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";



export default function WeatherForecast(){
    function handleResponse(response){
        console.log(response);
    }
    let key = `01dd2bca25c0t00b3d253f443e0of791`;
    let latitude = `40.7128`;
    let longitude = `-74.0060`;
    let apiUrl=`https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${key}
`;
axios.get(apiUrl).then(handleResponse);

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