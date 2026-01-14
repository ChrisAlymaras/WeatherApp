//import cache in case a city is already searched so as not to call again the API
import { getCache, setCache } from '../cache/cache.js';

//based on the documentation of https://openweathermap.org/current
//the basic url of the OpenWeatherApi is as below
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather"


export async function fetchWeatherByCity(city,apiKey){
    //import from cache if exists
    const cached = getCache(city);
    if (cached){
        console.log("imported from cache");
        return cached;
    }

    try{
        //try request the API
        const response = await fetch(`${BASE_URL}?q=${city}&apikey=${apiKey}&units=metric`);
        //check for errors
        if(!response.ok){
            alert(`${city} Not Found`);
            return null;
        }
        //store data in json format and return
        const data = await response.json();
        setCache(city, data);
        console.log(data);
        return data;
    }catch(e){
        console.log(e);
        throw e;
    }
}