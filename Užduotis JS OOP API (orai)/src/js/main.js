// main.js
import WeatherApi from './api/WeatherApi';
import EmojiUI from './ui/EmojiUI';
import { convertKelvinToCelsius } from './utils/TemperatureUtils';

document.addEventListener('DOMContentLoaded', () => {
    const weatherApi = new WeatherApi();
    const emojiUI = new EmojiUI();

    function displayWeather(temperature) {
        let emoji = emojiUI.getEmoji(temperature);
        document.querySelector('#weatherInfo').innerHTML = `
            <h2>Vietos orai</h2>
            <p>Temperatūra: ${temperature}°C</p>
            <p>${emoji}</p>
        `;
    }

    document.querySelector('form').addEventListener('submit', async (event) => {
        event.preventDefault();
        const city = document.querySelector('#city').value;
        
        const weatherData = await weatherApi.fetchWeather(city);
        if (weatherData !== null) {
            const temperature = convertKelvinToCelsius(weatherData);
            displayWeather(temperature);
        }
    });
});