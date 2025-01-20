// WeatherApi.js
export default class WeatherApi {
    async fetchWeather(city) {
        const apiKey = process.env.OPEN_WEATHER_API_KEY;
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

        const response = await fetch(url);
        const data = await response.json();
        return data.main.temp;
    }
}