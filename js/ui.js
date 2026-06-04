function updateCurrentWeather(
    city,
    weatherData
){

    document.getElementById(
        "cityName"
    ).textContent = city;

    document.querySelector(
        ".temperature"
    ).textContent =
    Math.round(
        weatherData.current.temperature_2m
    ) + "°";

    document.getElementById(
        "humidityValue"
    ).textContent =
    weatherData.current.relative_humidity_2m + "%";

    document.getElementById(
        "windValue"
    ).textContent =
    weatherData.current.wind_speed_10m + " km/h";

    document.getElementById(
        "sunriseValue"
    ).textContent =
    weatherData.daily.sunrise[0]
    .split("T")[1];

    document.getElementById(
        "sunsetValue"
    ).textContent =
    weatherData.daily.sunset[0]
    .split("T")[1];

}
function renderDailyForecast(dailyData){

```
const container =
document.getElementById(
    "dailyForecast"
);

if(!container) return;

console.log("DAILY DATA:", dailyData);

container.innerHTML = "";

if(
    !dailyData.time ||
    !dailyData.temperature_2m_max ||
    !dailyData.temperature_2m_min
){
    container.innerHTML =
    "<p>Forecast unavailable</p>";
    return;
}

for(
    let i = 0;
    i < dailyData.time.length;
    i++
){

    const date =
    new Date(
        dailyData.time[i]
    );

    const day =
    i === 0
    ? "Today"
    : date.toLocaleDateString(
        "en-US",
        {
            weekday:"short"
        }
    );

    container.innerHTML += `

    <div class="forecast-day">

        <span>${day}</span>

        <span>
            ${getWeatherIcon(
                dailyData.weather_code
                ? dailyData.weather_code[i]
                : 3
            )}
        </span>

        <span>
            ${Math.round(
                dailyData.temperature_2m_min[i]
            )}°
        </span>

        <span>
            ${Math.round(
                dailyData.temperature_2m_max[i]
            )}°
        </span>

    </div>

    `;
}
```

}

function getWeatherIcon(code){

    if(code === 0) return "☀️";

    if(
        code === 1 ||
        code === 2
    ) return "🌤️";

    if(code === 3)
    return "☁️";

    if(
        code >= 45 &&
        code <= 48
    ) return "🌫️";

    if(
        code >= 51 &&
        code <= 67
    ) return "🌧️";

    if(
        code >= 71 &&
        code <= 77
    ) return "❄️";

    if(
        code >= 80 &&
        code <= 82
    ) return "🌦️";

    if(
        code >= 95
    ) return "⛈️";

    return "☁️";
}
function renderDailyForecast(dailyData){

    const container =
    document.getElementById(
        "dailyForecast"
    );

    if(!container) return;

    container.innerHTML = "";

    for(let i = 0; i < 10; i++){

        const date =
        new Date(
            dailyData.time[i]
        );

        const day =
        i === 0
        ? "Today"
        : date.toLocaleDateString(
            "en-US",
            { weekday: "short" }
        );

        container.innerHTML += `

        <div class="forecast-day">

            <span>${day}</span>

            <span>
                ${getWeatherIcon(
                    dailyData.weathercode[i]
                )}
            </span>

            <span>
                ${Math.round(
                    dailyData.temperature_2m_min[i]
                )}°
            </span>

            <span>
                ${Math.round(
                    dailyData.temperature_2m_max[i]
                )}°
            </span>

        </div>

        `;

    }

}
