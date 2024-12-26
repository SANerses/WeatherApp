import { checkWeather } from "./logic.js";

const inputBox = document.querySelector('.input-box');
const searchBtn = document.getElementById('searchBtn');
const weather_img = document.querySelector('.weather-img');
const temperature = document.querySelector('.temperature');
const description = document.querySelector('.description');
const humidity = document.getElementById('humidity');
const wind_speed = document.getElementById('wind-speed');
const location_not_found = document.querySelector('.location-not-found');
const weather_body = document.querySelector('.weather-body');

function handleSearch() {
    const city = inputBox.value.trim();
    if (city === '') {
        alert('Please enter a valid city name!');
        return;
    }
    checkWeather(city);
}

export function setupListeners() {
    searchBtn.addEventListener('click', handleSearch);

    inputBox.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    });
}

export function updateWeather(weather_data) {
    location_not_found.style.display = "none";
    weather_body.style.display = "flex";
    temperature.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`;
    description.innerHTML = `${weather_data.weather[0].description}`;
    humidity.innerHTML = `${weather_data.main.humidity}%`;
    wind_speed.innerHTML = `${weather_data.wind.speed}Km/H`;

    switch (weather_data.weather[0].main) {
        case 'Clouds':
            weather_img.src = "./images/cloud.png";
            break;
        case 'Clear':
            weather_img.src = "./images/clear.png";
            break;
        case 'Rain':
            weather_img.src = "./images/rain.png";
            break;
        case 'Mist':
            weather_img.src = "./images/mist.png";
            break;
        case 'Snow':
            weather_img.src = "./images/snow.png";
            break;
    }
}

inputBox.addEventListener('focus', () => {
    inputBox.style.outline = '2px solid #00f';  
});

inputBox.addEventListener('blur', () => {
    inputBox.style.outline = 'none'; 
});