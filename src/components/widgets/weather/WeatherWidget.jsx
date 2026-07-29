import { useState, useEffect } from "react";

import ClearDayIcon from '../../../assets/icons/weather/clear-day.svg';
import { getUserLocation } from "../../../services/locationService";
import {
        fetchWeather,
        fetchWeatherByIP
                        } from "../../../services/weatherService";
import { getWeatherIcon } from "../../../utils/weatherIconMap";
import { reverseGeocode } from "../../../services/geocodeService";
                        

function WeatherWidget() {
    const [weather, setWeather] = useState(null);
    const [locationName, setLocationName] = useState("");

    useEffect(() => {
        async function loadWeather() {
            try {
                const userLocation = await getUserLocation();

                const [weatherData, geoData] = await Promise.all([
                    fetchWeather(userLocation.lat, userLocation.lon),
                    reverseGeocode(userLocation.lat, userLocation.lon),
                ]);

                setWeather(weatherData);

                setLocationName(geoData.location);

            } catch (err) {
                console.error(err);
            }
        }

        loadWeather();
    }, []);

    const weatherIcon = weather
        ? getWeatherIcon(
            weather.current.condition.code,
            weather.current.is_day
        )
        : ClearDayIcon;

    const [now, setNow] = useState(new Date());

    useEffect(() => {
        const id = setInterval(() => setNow(new Date()), 1000 * 30);
        return () => clearInterval(id);
    }, []);

    const timeStr = now.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' });
    const dateStr = now.toLocaleDateString([], { day: '2-digit', month: 'short' });
    return (
        <div className="widget-badge weather-widget">
            <img
                src={weatherIcon}
                alt={weather?.current?.condition?.text ?? "Weather"}
            />
            <span className="widget-time">{timeStr} | {dateStr}</span>
            <span className="widget-condition">
                {locationName || "Locating..."} | {weather?.current?.condition?.text ?? "Loading..."}
            </span>
        </div>
    )
}

export default WeatherWidget;