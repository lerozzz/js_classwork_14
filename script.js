const API_KEY = "e46f570d82e21253abcee136927a2100";
const lat = 59.983812;//широта
const lon = 30.330082;//долгота

document.querySelector('button').onclick = getWeather;

async function getWeather() {
    let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`);
    console.log(await response.json());
}

