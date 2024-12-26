# Weather App with JavaScript

## Overview
This project is a weather application built with HTML, CSS, and JavaScript. It allows users to enter a city name to fetch and display current weather data using the OpenWeatherMap API. The app displays details like temperature, weather conditions, humidity, and wind speed, along with appropriate images for weather conditions. If the city is not found, it displays a `404.png` error image and message.

---

## Project Structure
```
/weatherApp
    ├── index.html
    ├── style.css
    ├── script.js
    ├── dom.js
    ├── logic.js
    ├── /images
    │   ├── 404.png
    │   ├── clear.png
    │   ├── cloud.png
    │   ├── mist.png
    │   ├── rain.png
    │   ├── snow.png
```

### File Details
- **index.html**: The main HTML file containing the structure of the app.
- **style.css**: Contains the styling for the app.
- **script.js**: Initializes the app and sets up event listeners.
- **dom.js**: Handles DOM manipulation, such as updating the UI with weather data.
- **logic.js**: Contains the core logic for fetching weather data and error handling.
- **/images**: Stores images used in the app, including weather icons and the `404.png` error image.

---

## Features
1. **Search for Weather**:
   - Enter a city name and get the current weather data.
   - Displays temperature, weather condition, humidity, and wind speed.
2. **Error Handling**:
   - Shows a `404.png` error image and message if the city is not found.
3. **Keyboard Interaction**:
   - Users can press the Enter key to trigger a search.
4. **Dynamic Weather Icons**:
   - Displays appropriate weather icons based on conditions (e.g., clear, cloud, rain).

---

### Steps
1. Clone or download this repository.
2. Open the project folder.
3. Open `index.html` in a web browser.
4. Enter a city name in the input box and click the search button or press Enter.

---

## Future Improvements
1. Add support for auto-suggestions when typing city names.
2. Allow users to toggle between Celsius and Fahrenheit.
3. Include a feature to detect the user's current location and display the weather.

---