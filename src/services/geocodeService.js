import { loadCache, saveCache } from "../utils/cache";
import { CACHE_DURATION } from "../constants/cache";

function formatLocation(address = {}) {
    return (
        address.city ||
        address.town ||
        address.municipality ||
        address.village ||
        address.suburb ||
        address.city_district ||
        address.county ||
        "Unknown"
    );
}

export async function reverseGeocode(lat, lon) {

    const cacheKey =
        `geocode:${lat.toFixed(3)},${lon.toFixed(3)}`;

    const cached = loadCache(
        cacheKey,
        CACHE_DURATION.GEOCODE
    );

    if (cached) {
        return cached;
    }

    const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lon}`,
        {
            headers: {
                Accept: "application/json",
                "User-Agent": "CalicOS",
            },
        }
    );

    if (!response.ok) {
        throw new Error("Failed to reverse geocode.");
    }

    const data = await response.json();

    const geo = {
        location: formatLocation(data.address),
        address: data.address,
    };

    saveCache(cacheKey, geo);

    return geo;
}