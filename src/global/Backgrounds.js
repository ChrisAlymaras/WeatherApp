//OpenWeather describes the weather with one word in weather[0].main

export function getBackground(dt,sunset,main){
    //check for night condition only for todays date
    if (dt && sunset){
        const night = dt > sunset;
        if (night) {return "night-bg"}
    }
    //define background based on description
    if (!main){return "default-bg"}

    //for every main we will return a respective className
    const condition = main.toLowerCase();
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