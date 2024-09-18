import React, {useState} from "react";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import "./Weather.css";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";


export default function Weather(props){
    const [weatherData, setWeatherData]= useState({ready:false});
    const [city, setCity]= useState(props.defaultCity);
        function handleResponse(response){
            setWeatherData({
            ready:true,
            coordinates: response.data.coordinates,
            temperature: response.data.temperature.current,
            city: response.data.city,
            description: response.data.condition.description,
            wind: response.data.wind.speed,
            humidity: response.data.temperature.humidity,
            feelsLike: response.data.temperature.feels_like,
            iconUrl: response.data.condition.icon,
            date: new Date(response.data.time *1000),
            });}     

        function search(){
            let key = `01dd2bca25c0t00b3d253f443e0of791`;
            let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${key}&unit=metric`;
            axios.get(apiUrl).then(handleResponse);
        }

        function handleSubmit(event){
            event.preventDefault();
            search();
        }

        function handleOnChange(event){
            setCity(event.target.value);
        }

    if (weatherData.ready){
    return(
        <div className="bodyMain">
            <div className="currentWeather">
            <form onSubmit={handleSubmit} className="weatherSearch">
                <input onChange={handleOnChange} autoFocus="on" className="search" type="text" placeholder="enter a city"/>
                <input className="submit" type="submit" value="Search" />
            </form>
        </div>
            <WeatherInfo data={weatherData}/>
            <WeatherForecast coordinates={weatherData.coordinates}/>
      </div>);
}else{
    search();
    return"Loading";
    }
}
