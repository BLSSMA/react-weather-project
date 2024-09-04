import React, {useState} from "react";
import "./Weather.css";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";


export default function Weather(props){
    const [weatherData, setWeatherData]= useState({ready:false});
        function handleResponse(response){
setWeatherData({
    ready:true,
    temperature: response.data.temperature.current,
    city: response.data.city,
    description: response.data.condition.description,
wind: response.data.wind.speed,
humidity: response.data.temperature.humidity,
feelsLike: response.data.temperature.feels_like,
icon: response.data.condition.icon_url,
})  ;      
        }
    if (weatherData.ready){
    return(
        <div className="bodyMain">
        <div>
            <div className="currentWeather">
            <form className="weatherSearch">
                <input className="search auto-focus" type="search" placeholder="enter a city"/>
                <input className="submit" type="submit" value="Search" />
            </form>
            <div className="cityTitle">{weatherData.city}</div>
            <img src={weatherData.icon} alt={weatherData.description} />
                <div className="row currentStats">
                <div className="currentStatsTempDescr col-4"><span className="currentStatsTemp">{Math.round(weatherData.temperature)}</span><span className="currentUnit">℃</span><div className="currentStatsDescription">{weatherData.description}</div></div>
                <div className="currentStatsPrecipitation col-3">Feels Like: <strong>{weatherData.feelsLike}%</strong></div>

                <div className="currentStatsWind col-3"><div>wind </div><strong>{weatherData.wind}km/h</strong></div>
                <div className="currentStatsHumidity col-2">humidity <strong>{weatherData.humidity}%</strong></div>

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
    )} else{
    let key = `01dd2bca25c0t00b3d253f443e0of791`;
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${key}&unit=metric`;
 axios.get(apiUrl).then(handleResponse);
    return"Loading";
    }
}