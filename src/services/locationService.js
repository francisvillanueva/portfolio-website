import { loadCache, saveCache } from "../utils/cache";
import { CACHE_DURATION } from "../constants/cache";

export function getUserLocation() {
    const cached = loadCache(
        "gps",
        CACHE_DURATION.LOCATION
    );

    if (cached) {
        return Promise.resolve(cached);
    }

    return new Promise((resolve, reject) => {
        if (!navigator.geolocation) {
            reject(new Error("Geolocation not supported."));
            return;
        }

        navigator.geolocation.getCurrentPosition(
            (position) => {
                const location = {
                    lat: position.coords.latitude,
                    lon: position.coords.longitude,
                    accuracy: position.coords.accuracy,
                };

                saveCache("gps", location);

                resolve(location);
            },
            reject,
            {
                enableHighAccuracy: true,
                timeout: 15000,
                maximumAge: 0,
            }
        );
    });
}