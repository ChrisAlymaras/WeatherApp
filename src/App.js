//import stylesheet
import './app.css';

//import useState
import {useState} from "react";

//import components
import SearchBar from './components/SearchBar.jsx';
import WeatherCard from './components/WeatherCard.jsx';
import Favourites from './components/Favourites';


//import main api call functions
import { fetchWeatherByCity } from './api/WeatherApiCall.js';
import { fetchComingDaysWeather } from './api/ComingDaysApiCall.js';

function App() {
    const [weatherData, setWeatherData] = useState(null);
    const [error, setError] = useState(null);
    const [comingDays, setComingDays] = useState(null);

    //my own api key given when registered in OpenWeather platform
    const API_KEY = "7c9b9d17c9940e71bc65ca67749df317";

    //search given city and store current weather and coming days weather
    async function handleSearch(city){
        try{
            setError(null);

            const currentWeather = await fetchWeatherByCity(city,API_KEY);
            setWeatherData(currentWeather);

            const comingWeather = await fetchComingDaysWeather(city,API_KEY);
            setComingDays(comingWeather);

            console.log(weatherData); // ola emfanizontai ok
            console.log(comingDays);
        }catch(error){
            console.log(error);
            setError("Error fetching weather data");
            setWeatherData(null); //erwtisi edw
        }
    }



    return (
    <div className="wrapper">
        <h1>Weather App</h1>
        <SearchBar onSearch={handleSearch} />
        <WeatherCard data={weatherData} />
        <Favourites />
    </div>
  );
}

export default App;
