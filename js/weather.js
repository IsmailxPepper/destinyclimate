const WEATHER_BASE =
"https://api.open-meteo.com/v1/forecast";

const GEO_BASE =
"https://geocoding-api.open-meteo.com/v1/search";

async function searchCityWeather(city){

    try{

        const geoResponse =
        await fetch(
            `${GEO_BASE}?name=${encodeURIComponent(city)}&count=1`
        );

        const geoData =
        await geoResponse.json();

        if(!geoData.results){

            alert("City not found");

            return;
        }

        const location =
        geoData.results[0];

        loadWeatherData(
            location.latitude,
            location.longitude,
            location.name
        );

    }

    catch(error){

        console.error(error);

    }

}

async function loadWeatherData(
    latitude,
    longitude,
    cityName
){

    try{

        const response =
        await fetch(

            `${WEATHER_BASE}
?latitude=${latitude}
&longitude=${longitude}
&current=temperature_2m,relative_humidity_2m,wind_speed_10m
&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset
&hourly=temperature_2m`
            .replace(/\n/g,"")

        );

        const data =
        await response.json();

        updateCurrentWeather(
            cityName,
            data
        );

    }

    catch(error){

        console.error(error);

    }

}
