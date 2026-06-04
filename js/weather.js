const WEATHER_BASE = "https://api.open-meteo.com/v1/forecast";
const GEO_BASE = "https://geocoding-api.open-meteo.com/v1/search";

async function searchCityWeather(city) {
    try {
        const geoResponse = await fetch(
            `${GEO_BASE}?name=${encodeURIComponent(city)}&count=1`
        );

        const geoData = await geoResponse.json();

        if (!geoData.results || geoData.results.length === 0) {
            alert("City not found");
            return;
        }

        const location = geoData.results[0];

        await loadWeatherData(
            location.latitude,
            location.longitude,
            location.name
        );

    } catch (error) {
        console.error("City Search Error:", error);
    }
}

async function loadWeatherData(latitude, longitude, cityName) {
    try {
        const response = await fetch(
            `${WEATHER_BASE}?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,wind_speed_10m&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset&hourly=temperature_2m,weathercode`
        );

        const data = await response.json();

        updateCurrentWeather(cityName, data);

        if (data.hourly) {
            renderHourlyForecast(data.hourly);
        }

    } catch (error) {
        console.error("Weather Loading Error:", error);
    }
}

async function loadGlobalCities() {
    console.log("Global cities loaded");
}
