import getCurrentWeather from "./getCurrentWeather.js";
import getForecast from "./getForecast.js";
import getLocation from "./getLocation.js";

const AUTH_KEY = "2641f2cfbf204f7fa2921301242703";

let location = "manila";

export default async function getWeatherData() {
  try {
    const response = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=${AUTH_KEY}&q=${location}&days=7&aqi=no&alerts=no`
    );
    const data = await response.json();
    return data;
  } catch (err) {
    throw new Error("Something went wrong", err);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const searchLocation = document.getElementById("search-location-btn");

  searchLocation.addEventListener("click", async function (event) {
    event.preventDefault();

    const locationInput = document.getElementById("location-input");
    const locationValue = locationInput.value.trim(); // Get the value entered by the user
    location = locationValue;
    console.log(locationValue);

    try {
      await getWeatherData();
      await getCurrentWeather();
      await getLocation();
      await getForecast();
    } catch (error) {
      console.error(error);
    }
  });
});
