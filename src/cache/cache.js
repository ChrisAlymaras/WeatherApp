//cache stores a searched city and all of its content
const cache = {};

export function getCache(city){
    //check if city exists in the cache
    const entry = cache[city];
    if (!entry){return null}

    //declare exact time we are searching
    const now = Date.now();
    //compare with exact time a city was stored in cache
    const isExpired = now - entry.timestamp > 5 *60 * 1000; // *1000 for sec - *60 for min - *5 for mins
    return isExpired ? null : entry.data;
}

export function setCache(city,data){
    //timestamp holds the exact time a city is stored in the cache
    cache[city] = {
        data,
        timestamp: Date.now()
    };
}
