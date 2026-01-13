import './WeatherCard.css';
import { getBackground } from '../global/Backgrounds.js';
import { FavouritesContext } from '../context/FavouritesContext.jsx';
import {useContext} from "react";


export default function WeatherCard({ className,country,date,icon,temp,description,humidity,windSpeed,dt,sunset,main,favouriteButton }){
    const { addFavourite } = useContext(FavouritesContext);
    //define background
    const bgClass = getBackground(dt,sunset,main);
    console.log(bgClass);
    //define weather icon
    const iconURL = `https://openweathermap.org/img/wn/${icon}@2x.png`;

    return (
        <div className={`weather-card ${className} ${bgClass}`}>
            {country && <h1>{country}</h1>}
            {favouriteButton && (<button onClick={() => addFavourite(country)}>Add to Favorites</button>)}
            <h3>{date.split("-").reverse().join(" / ")}</h3>
            <img src={iconURL} alt={description}/>
            <h3>{temp} °C</h3>
            <h3>{description}</h3>
            <h4>Humidity : {humidity}%</h4>
            <h4>Wind : {windSpeed} km/h</h4>
        </div>
    );
}