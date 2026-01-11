//OpenWeather describes the weather with one word in weather[0].main

export function getBackground(weather){
    if (!weather){return "default-bg"}

    //check for night condition
    const night = weather.dt > weather.sys.sunset;
    if (night) {return "night-bg"}

    //for every main we will return a respective className
    const condition = weather.weather[0].main.toLowerCase();
    switch(condition){
        case "clear":
            return "sunny-bg";
        case "clouds":
            return "cloudy-bg";
        case "rain":
        case "drizzle":
            return "rainy-bg";
        case "thunderstorm":
            return "thunderstorm-bg";
            case "snow":
            return "snowy-bg";
        default:
            return "default-bg";
    }
    //all above backgrounds are declared to WeatherCard.css file
}