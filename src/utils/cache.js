const PREFIX = "calicos:";

function getCacheKey(key) {
    return `${PREFIX}${key}`;
}

export function saveCache(key, data) {
    const payload = {
        timestamp: Date.now(),
        data,
    };

    localStorage.setItem(
        getCacheKey(key),
        JSON.stringify(payload)
    );
}

export function loadCache(key, maxAge) {
    try {
        const cached = localStorage.getItem(
            getCacheKey(key)
        );

        if (!cached) {
            return null;
        }

        const payload = JSON.parse(cached);

        const age = Date.now() - payload.timestamp;

        if (age > maxAge) {
            localStorage.removeItem(
                getCacheKey(key)
            );

            return null;
        }

        return payload.data;

    } catch (err) {
        console.warn(`Invalid cache for "${key}".`);

        localStorage.removeItem(
            getCacheKey(key)
        );

        return null;
    }
}

export function removeCache(key) {
    localStorage.removeItem(
        getCacheKey(key)
    );
}

export function clearCache() {
    Object.keys(localStorage).forEach((key) => {
        if (key.startsWith(PREFIX)) {
            localStorage.removeItem(key);
        }
    });
}