import getWeatherData from "./getWeatherData";

export default async function getForecast() {
  try {
    const data = await getWeatherData();
    const forecastSection = document.getElementById("forecast-section");
    const forecastContainer = document.querySelector(".forecast-container");
    forecastContainer.innerHTML = '';

    const sevenDayForecast = data.forecast.forecastday;
    console.log(sevenDayForecast);

    sevenDayForecast.forEach((weatherData) => {
      console.log(
        `Date: ${weatherData.date}, Condition: ${weatherData.day.condition.text}, Average Temp: ${weatherData.day.avgtemp_c} C, Min-max Temp ${weatherData.day.mintemp_c} C - ${weatherData.day.maxtemp_c} C`
      );
      const dayCard = document.createElement("div");
      const forecastDate = document.createElement("span");
      const forecastIcon = document.createElement("span");
      const forecastMinmax = document.createElement("span");
      const forecastCondition = document.createElement("span");

      dayCard.setAttribute('id', 'dayCard')

      forecastDate.textContent = `${weatherData.date}`;
      forecastIcon.innerHTML = `<img src='${weatherData.day.condition.icon}'>`;
      forecastMinmax.textContent = `${weatherData.day.mintemp_c} - ${weatherData.day.maxtemp_c}`;
      forecastCondition.textContent = `${weatherData.day.condition.text}`;

      dayCard.append(
        forecastDate,
        forecastIcon,
        forecastMinmax,
        forecastCondition
      );
      forecastContainer.append(dayCard);
    });
    forecastSection.append(forecastContainer);
  } catch (err) {
    console.error("Something went wrong:", err);
  }
}
