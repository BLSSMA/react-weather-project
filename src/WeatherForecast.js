import React, {useState} from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import ForecastDateFormat from "./ForecastDateFormat";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";



export default function WeatherForecast(props){
let [loaded, setLoaded] = useState(false);
let [forecast, setDailyForecast] = useState(null);

    function handleResponse(response){
        setDailyForecast(response.data.daily);
        setLoaded(true);
    }
    if (loaded){
        console.log(forecast);
        return(<div className="forecast">
                <ul>
                    <li>
                        <div className="row">
                            <span className="forecastIcon d-flex-grid col-3 space-evenly">
                                <WeatherIcon code={forecast[0].condition.icon} size={40} color="black"/>
                                </span>
                            <span className="forecastDay d-flex-grid col-3 space-evenly">{<ForecastDateFormat/>*1000}</span>
                            <span className="forecastHigh d-flex-grid col-3 space-evenly">{Math.round(forecast[0].temperature.maximum)}℃</span>
                            <span className="forecastLow d-flex-grid col-3 space-evenly">{Math.round(forecast[0].temperature.minimum)}℃</span>
                            </div>
                            </li>
                   <hr />
                </ul>
</div>);
}else{    let key = `01dd2bca25c0t00b3d253f443e0of791`;
    let latitude = props.coordinates.latitude;
    let longitude = props.coordinates.longitude;
    let apiUrl=`https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${key}&unit=metric
`;
axios.get(apiUrl).then(handleResponse);
return null; 
}
}