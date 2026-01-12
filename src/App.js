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

//import function for filtering coming days weather
import { getDailyDates } from './mutation_functions/GetForecastDates.js';

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
            //todays weather
            const currentWeather = await fetchWeatherByCity(city,API_KEY);
            setWeatherData(currentWeather);
            //get upcoming days
            const comingWeather = await fetchComingDaysWeather(city,API_KEY);
            //filter comingWeather to every dates 12:00:00 info
            const nextDays = getDailyDates(comingWeather.list);
            setComingDays(nextDays);

            //console.log(weatherData); everything show correct in the console
            console.log(nextDays);
        }catch(error){
            console.log(error);
            setError("Error fetching weather data");
            setWeatherData(null);
            setComingDays(null);
        }
    }

    return (
    <div className="wrapper">
        <h1>Weather App</h1>
        <SearchBar onSearch={handleSearch} />
        <div className="main-card">
        {weatherData && (
            <WeatherCard
                country={`${weatherData.name} , ${weatherData.sys.country}`}
                date={new Date(weatherData.dt*1000).toUTCString()}
                icon={weatherData.weather[0].icon}
                temp={weatherData.main.temp}
                description={weatherData.weather[0].description}
                humidity={weatherData.main.humidity}
                windSpeed={weatherData.wind.speed}
                dt={weatherData.dt}
                sunset={weatherData.sys.sunset}
                main={weatherData.weather[0].main}
            />)
        }
        </div>
        <div className="forecast-cards">
            {comingDays &&( comingDays.map((day,index)=> (
            <WeatherCard
                key={index}
                country={null}
                date={day.dt_txt.split(" ")[0]}
                icon={day.weather[0].icon}
                temp={day.main.temp}
                description={day.weather[0].description}
                humidity={day.main.humidity}
                windSpeed={day.wind.speed}
                dt={day.dt}
                sunset={null}
                main={day.weather[0].main}
            />
            ))
            )
        }
        </div>
    </div>
  );
}

export default App;
