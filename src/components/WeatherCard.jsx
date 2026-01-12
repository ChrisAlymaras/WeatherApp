import './WeatherCard.css';
import { getBackground } from '../global/Backgrounds.js';

export default function WeatherCard({ country,date,icon,temp,description,humidity,windSpeed,dt,sunset,main }){
    //define background
    const bgClass = getBackground(dt,sunset,main);
    console.log(bgClass);

    //define weather icon
    const iconURL = `https://openweathermap.org/img/wn/${icon}@2x.png`;

    //const date = new Date(data.dt*1000).toUTCString();

    return (
        <div className={`weather-card ${bgClass}`}>
            <h1>{country}</h1>
            <h3>{date.split("-").reverse().join(" / ")}</h3>
            <img src={iconURL} alt={description}/>
            <h3>{temp} °C</h3>
            <h3>{description}</h3>
            <h4>Humidity : {humidity}%</h4>
            <h4>Wind : {windSpeed} km/h</h4>
        </div>
    );
}