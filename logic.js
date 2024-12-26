import { updateWeather } from './dom.js';

export async function checkWeather(city) {
    const api_key = "1c3a54399edf18c8d67ccbd68bb6cbd1";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

    const location_not_found = document.querySelector('.location-not-found');
    const weather_body = document.querySelector('.weather-body');
    const errorImage = location_not_found?.querySelector('img');
    const errorMessage = location_not_found?.querySelector('h1');

    if (!location_not_found || !weather_body) {
        console.error("Error: Required DOM elements not found.");
        return;
    }

    try {

        if (!city || city.trim() === "") {
            location_not_found.style.display = "flex";
            weather_body.style.display = "none";
            if (errorMessage) errorMessage.innerHTML = "Please enter a valid city name!";
            if (errorImage) errorImage.src = './images/404.png';
            return;
        }

        const response = await fetch(url);
        const weather_data = await response.json();

        if (response.status === 404 || weather_data.cod === "404") {

            location_not_found.style.display = "flex";
            weather_body.style.display = "none";
            if (errorMessage) errorMessage.innerHTML = `City "${city}" not found!`;
            if (errorImage) errorImage.src = './images/404.png';
            return;
        }

        location_not_found.style.display = "none";
        weather_body.style.display = "flex";
        updateWeather(weather_data);
    } catch (error) {
        console.error("Error fetching weather data:", error);

        location_not_found.style.display = "flex";
        weather_body.style.display = "none";
        if (errorMessage) errorMessage.innerHTML = "An error occurred while fetching weather data.";
        if (errorImage) errorImage.src = './images/404.png';
    }
}
