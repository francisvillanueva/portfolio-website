const UPSTREAM = "https://api.weatherapi.com/v1/current.json";

const VALID_QUERY =
    /^(?:auto:ip|-?\d{1,3}(?:\.\d{1,6})?\s*,\s*-?\d{1,3}(?:\.\d{1,6})?)$/;

export default async function handler(req, res) {
    if (req.method !== "GET") {
        return res.status(405).json({ error: "Method not allowed." });
    }

    const apiKey = process.env.WEATHER_API_KEY;

    if (!apiKey) {
        return res.status(500).json({ error: "Weather API key is not configured." });
    }

    const query = req.query.q;

    if (!query || !VALID_QUERY.test(query)) {
        return res.status(400).json({ error: "Invalid or missing query parameter." });
      }

    const upstream = await fetch(
        `${UPSTREAM}?key=${apiKey}&q=${encodeURIComponent(query)}`
    );

    if (!upstream.ok) {
        const upstreamError = await upstream.json().catch(() => null);
        const message = upstreamError?.error?.message ?? "Failed to fetch weather.";
        return res.status(upstream.status >= 500 ? 502 : upstream.status).json({ error: message });
    }

    const weather = await upstream.json();

    res.setHeader("Cache-Control", "public, max-age=600");

    return res.status(200).json(weather);
}