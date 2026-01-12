//this function exports only the Dates like 2026-01-12
export function getDailyDates(forecastList){
    const daily = {};

    //forecastList[0].dt_txt = "2026-01-12 12:00:00" so we have to split
    forecastList.forEach((item)=>{
        const date = item.dt_txt.split(" ")[0]; //2026-01-12 first part
        const hour = item.dt_txt.split(" ")[1]; //12:00:00 second part
        //add date and the whole info of it to daily list
        if(hour === "12:00:00"){daily[date]=item}
    });
    return Object.values(daily);
}