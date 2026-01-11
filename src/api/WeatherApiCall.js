//based on the documentation of https://openweathermap.org/current
//the basic url of the OpenWeatherApi is as below
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather"

//the api call based on the city name is BASE_URL

export async function fetchWeatherByCity(city,apiKey){
    try{
        //try request the API
        const response = await fetch(`${BASE_URL}?q=${city}&apikey=${apiKey}&units=metric`);
        //check for errors
        if(!response.ok){
            console.log(`${city} Not Found`);
        }
        //store data in json format and return
        const data = await response.json();
        return data;

    }catch(e){
        console.log(e);
        throw e;
    }
}