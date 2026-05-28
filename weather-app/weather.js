const apiKey = "7f35dfd2baeca7e607e569d5a71595ef";

const cityInput = document.getElementById("city");

const searchBtn = document.getElementById("searchBtn");

const weatherResult = document.getElementById("weatherResult");

const cityName = document.getElementById("cityName");

const temperature = document.getElementById("temperature");

const description = document.getElementById("description");

const humidity = document.getElementById("humidity");

const wind = document.getElementById("wind");

const weatherIcon = document.getElementById("weatherIcon");

// SEARCH WEATHER
async function getWeather(){

  const city = cityInput.value;

  // API URL
  const url =
  `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  // REQUEST
  const response = await fetch(url);

  const data = await response.json();

  console.log(data);

  // SHOW CARD
  weatherResult.classList.remove("d-none");

  // DATA
  cityName.textContent = data.name;

  temperature.textContent =
  `${Math.floor(data.main.temp)}°C`;

  description.textContent =
  data.weather[0].description;

  humidity.textContent =
  `${data.main.humidity}%`;

  wind.textContent =
  `${data.wind.speed} km/h`;

  // ICON
  const icon = data.weather[0].icon;

  weatherIcon.src =
  `https://openweathermap.org/img/wn/${icon}@2x.png`;

}

// BUTTON
searchBtn.addEventListener("click", getWeather);