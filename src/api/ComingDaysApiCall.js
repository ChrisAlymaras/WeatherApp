export async function fetchComingDaysWeather(city,apiKey){
    const BASE_URL = "https://pro.openweathermap.org/data/2.5/forecast";

    try{
        const response = await fetch(`${BASE_URL}?q=${city}&appid=${apiKey}&units=metric`);
        //check response
        if(!response.ok){console.log(`Couldn't load forecast for ${city}`)}
        //store in json and return
        const data = await response.json();
        console.log(data);
        return data;
    }catch(e){
        console.error(e);
        throw e;
    }
}