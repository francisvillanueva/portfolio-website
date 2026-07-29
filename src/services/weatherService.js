import { loadCache, saveCache } from "../utils/cache";
import { CACHE_DURATION } from "../constants/cache";

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

export async function fetchWeather(lat, lon) {
    
    const cacheKey = `weather:${lat.toFixed(3)},${lon.toFixed(3)}`;

    const cached = loadCache(
        cacheKey,
        CACHE_DURATION.WEATHER
    );

    if (cached) {
        return cached;
    }

    const response = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${lat},${lon}`
    );

    if (!response.ok) {
        throw new Error("Failed to fetch weather.");
    }

    const weather = await response.json();

    saveCache(cacheKey, weather);

    return weather;
}


// fallback for when geolocation is not available or denied
export async function fetchWeatherByIP() {

    const cacheKey = `weather:${lat.toFixed(3)},${lon.toFixed(3)}`;

    const cached = loadCache(
        cacheKey,
        CACHE_DURATION.WEATHER
    );

    if (cached) {
        return cached;
    }

    const response = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=auto:ip`
    );

    if (!response.ok) {
        throw new Error("Failed to fetch weather.");
    }

    const weather = await response.json();

    saveCache(cacheKey, weather);

    return weather;
}