function displayWeather(response) {
  let currentTemperature = Math.round(response.data.temperature.current);
  let currentTemperatureValueElement = document.querySelector(
    ".current-temperature-value"
  );

  let city = response.data.city;
  let cityElement = document.querySelector(".current-city");

  let weatherDescription = response.data.condition.description;
  let weatherDescriptionElement = document.querySelector(
    ".weather-description"
  );

  let humidity = response.data.temperature.humidity;
  let humidityElement = document.querySelector(".humidity");

  let wind = response.data.wind.speed;
  let windElement = document.querySelector(".wind");

  let weatherIconName = response.data.condition.icon;
  let weatherIconURL = response.data.condition.icon_url;
  let weatherIconElement = document.querySelector(".current-temperature img");

  cityElement.innerHTML = city;
  currentTemperatureValueElement.innerHTML = currentTemperature;
  weatherDescriptionElement.innerHTML = weatherDescription;
  humidityElement.innerHTML = humidity;
  windElement.innerHTML = wind;

  weatherIconElement.className = weatherIconName;
  weatherIconElement.src = weatherIconURL;
}
function searchCity(event) {
  event.preventDefault();
  let cityInputElement = document.querySelector(".city-input");
  let city = cityInputElement.value.trim().toLowerCase();
  let apiKey = "c418bef3eo7aacdt413e1d00f5a173c4";
  let unit = "metric";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=${unit}`;
  axios.get(apiUrl).then(displayWeather);
}
function getCurrentDate(date) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let hours = date.getHours();
  let minutes = date.getMinutes();
  if (minutes < 10) {
    console.log("heyy");
    minutes = `0${minutes}`;
  }

  if (hours < 10) {
    hours = `0${hours}`;
  }

  let weekDay = days[date.getDay()];
  let time = `${hours}:${minutes}`;
  let timeData = { weekDay: weekDay, time: time };

  return timeData;
}
function displayCurrentDate(weekDay, time) {
  let dayElement = document.querySelector(".weekDay");
  let timeElement = document.querySelector(".time");
  dayElement.innerHTML = weekDay;
  timeElement.innerHTML = time;
}

let searchCityForm = document.querySelector("#search-city-form");
searchCityForm.addEventListener("submit", searchCity);
let currentDate = new Date();
let timeData = getCurrentDate(currentDate);
displayCurrentDate(timeData.weekDay, timeData.time);

/*
when a user searches for a city (example: Sydney)
it should display the name of the city on the result page and the current temperature of the city. 
*/
