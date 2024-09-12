import React from "react";

import ReactAnimatedWeather from "react-animated-weather";


export default function WeatherIcon(props){
const defaults = {
size:200,
  color: 'moccasin',
  animate: true
};
const codeMapping = {
    "clear-sky-day": "CLEAR_DAY",
    "clear-sky-night": "CLEAR_NIGHT",
    "few-clouds-day": "PARTLY_CLOUDY_DAY",
    "few-clouds-night": "PARTLY_CLOUDY_NIGHT",
    "scattered-clouds-day": "CLOUDY",
    "scattered-clouds-night": "CLOUDY",
    "broken-clouds-day": "FOG",
    "broken-clouds-night": "FOG",
    "shower-rain-day": "RAIN",
    "shower-rain-night": "RAIN",
    "rain-day": "RAIN",
    "rain-night": "RAIN",
    "thunderstorm-day": "RAIN",
    "thunderstorm-night": "RAIN",
    "snow-day": "SNOW",
    "snow-night": "SNOW",
    "mist-day": "WIND",
    "mist-night": "WIND"
};
return( 
    <ReactAnimatedWeather
    icon={codeMapping[props.code]}
    size={defaults.size}
    animate={defaults.animate}
    color={defaults.color}
  />


 );
}