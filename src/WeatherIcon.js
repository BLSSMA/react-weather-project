import React from "react";
import ReactAnimatedWeather from 'react-animated-weather';


export default function WeatherIcon(props){
const codeMapping = {
    "clear-sky-day": "clear-day",
    "clear-sky-night": "clear-night",
    "few-clouds-day": "partly-cloudy-day",
    "few-clouds-night": "partly-cloudy-night",
    "scattered-clouds-day": "cloudy",
    "scattered-clouds-night": "cloudy",
    "broken-clouds-day": "fog",
    "broken-clouds-night": "fog",
    "shower-rain-day": "rain",
    "shower-rain-night": "rain",
    "rain-day": "rain",
    "rain-night": "rain",
    "thunderstorm-day": "rain",
    "thunderstorm-night": "rain",
    "snow-day": "snow",
    "snow-night": "snow",
    "mist-day": "wind",
    "mist-night": "wind"
};
return( 
    <ReactAnimatedWeather
    icon={codeMapping[props.code]} 
    color={black}
    size={512}
    animate={true}
  />


 );
}