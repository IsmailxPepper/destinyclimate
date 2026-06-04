document.addEventListener(
"DOMContentLoaded",
() => {

    const searchBtn =
    document.getElementById(
        "searchBtn"
    );

    const cityInput =
    document.getElementById(
        "citySearch"
    );

    searchBtn.addEventListener(
        "click",
        () => {

            const city =
            cityInput.value.trim();

            if(city){

                searchCityWeather(
                    city
                );

            }

        }
    );

    loadGlobalCities();

});
