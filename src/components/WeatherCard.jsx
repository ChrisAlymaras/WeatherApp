import './WeatherCard.css';
import { getBackground } from '../global/Backgrounds.js';

export default function WeatherCard({ data }){

    //always check for null condition so as the page to load
    if(!data){return 'Enter Town'}

    //define background
    const bgClass = getBackground(data);
    console.log(bgClass);

    //define icon
    const iconCode = data.weather[0].icon;
    const iconURL = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
    const description = data.weather[0].description;

    const today = new Date(data.dt*1000).toUTCString();

    return (
        <div className={`weather-card ${bgClass}`}>
            <h2>{data.name.toUpperCase()} , {data.sys.country}</h2>
            <h5>{today}</h5>
            <img src={iconURL} alt={description} className="weather-icon"/>
            <h3>{data.main.temp} °C</h3>
            <p>{data.weather[0].description}</p>
            <div className="more-info">
                <h4>Humidity : {data.main.humidity}%</h4>
                <h4>Wind Speed : {data.wind.speed} km/h</h4>
            </div>
        </div>
    );
}