import React, {useState, useEffect } from "react";
import WeatherForecastDay from "./WeatherForecastDay";
import "./WeatherForecast.css";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";



export default function WeatherForecast(props){
let [loaded, setLoaded] = useState(false);
let [forecast, setDailyForecast] = useState(null);

useEffect(() => {
    setLoaded(false);
     },[props.coordinates]);
   


    function handleResponse(response){
        setDailyForecast(response.data.daily);
        setLoaded(true);
      
    }
    if (loaded){
       
        return(
        <div className="forecast">
            {forecast.map(function(dailyForecast, index){
                if (index <6){
                return( 
                    <div key={index}>
                <ul>
                    <li>
                        <WeatherForecastDay data={dailyForecast}/> 
                    </li>
                        <hr />
                </ul>    
                </div> );
            }else{
                return null;
            }})}
               
   </div>);
}else{    
    let key = `01dd2bca25c0t00b3d253f443e0of791`;
    let latitude = props.coordinates.latitude;
    let longitude = props.coordinates.longitude;
    let apiUrl=`https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${key}&unit=metric
`;
axios.get(apiUrl).then(handleResponse);
return null; 
}
}