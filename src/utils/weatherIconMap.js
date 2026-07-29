import ClearDay from "../assets/icons/weather/clear-day.svg";
import ClearNight from "../assets/icons/weather/clear-night.svg";

import CloudyDay from "../assets/icons/weather/cloudy-2-day.svg";
import CloudyNight from "../assets/icons/weather/cloudy-2-night.svg";

import RainDay from "../assets/icons/weather/rainy-2-day.svg";
import RainNight from "../assets/icons/weather/rainy-2-night.svg";

import Thunder from "../assets/icons/weather/thunderstorms.svg";

import Snow from "../assets/icons/weather/snowy-2.svg";

import Fog from "../assets/icons/weather/fog.svg";


export function getWeatherIcon(code, isDay) {

    switch (code) {

        // Sunny
        case 1000:
            return isDay ? ClearDay : ClearNight;

        // Cloudy
        case 1003:
        case 1006:
        case 1009:
            return isDay ? CloudyDay : CloudyNight;

        // Fog
        case 1030:
        case 1135:
        case 1147:
            return Fog;

        // Rain
        case 1063:
        case 1150:
        case 1153:
        case 1180:
        case 1183:
        case 1186:
        case 1189:
        case 1192:
        case 1195:
        case 1240:
        case 1243:
        case 1246:
            return isDay ? RainDay : RainNight;

        // Snow
        case 1066:
        case 1114:
        case 1117:
        case 1210:
        case 1213:
        case 1216:
        case 1219:
        case 1222:
        case 1225:
        case 1255:
        case 1258:
            return Snow;

        // Thunderstorms
        case 1087:
        case 1273:
        case 1276:
        case 1279:
        case 1282:
            return Thunder;

        default:
            return isDay ? CloudyDay : CloudyNight;
    }
}