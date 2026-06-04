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
function renderHourlyForecast(hourlyData){

    const container =
    document.getElementById(
        "hourlyForecast"
    );

    container.innerHTML = "";

    const currentHour =
    new Date().getHours();

    for(let i=0;i<12;i++){

        const hourIndex =
        currentHour + i;

        if(
            !hourlyData.temperature_2m[
                hourIndex
            ]
        ) continue;

        const hour =
        i === 0
        ? "NOW"
        : `${hourIndex % 24}:00`;

        container.innerHTML += `

        <div class="glass-card hour-card">

            <div class="hour-time">
                ${hour}
            </div>

            <div class="hour-icon">
    ${getWeatherIcon(
        hourlyData.weathercode[hourIndex]
    )}
</div>

            <div class="hour-temp">
                ${Math.round(
                    hourlyData.temperature_2m[
                        hourIndex
                    ]
                )}°
            </div>

        </div>

        `;
    }

}
