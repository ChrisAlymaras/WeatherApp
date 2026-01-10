//import components
import SearchBar from './components/SearchBar.jsx';
import WeatherCard from './components/WeatherCard.jsx';
import Favourites from './components/Favourites';

//import stylesheet
import './app.css';

//import main api call function
import { fetchWeatherByCity } from './api/WeatherApiCall.js';
import {useState} from "react";

function App() {
    const [weatherData, setWeatherData] = useState(null);
    const [error, setError] = useState(null);

    //my own api key given when registered in OpenWeather platform
    const API_KEY = "7c9b9d17c9940e71bc65ca67749df317";

    async function handleSearch(city){
        try{
            setError(null);
            const data = await fetchWeatherByCity(city,API_KEY);
            setWeatherData(data);
            console.log(data); // ola emfanizontai ok
        }catch(error){
            console.log(error);
            setError("City not found");
            setWeatherData(null); //erwtisi edw
        }
    }

    return (
    <div className="wrapper">
        <h1>Weather App</h1>
        <SearchBar onSearch={handleSearch} />
        <WeatherCard />
        <Favourites />
    </div>
  );
}

export default App;
