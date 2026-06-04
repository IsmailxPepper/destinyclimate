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
