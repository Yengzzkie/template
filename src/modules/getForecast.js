import getWeatherData from './getWeatherData';

export default async function getForecast() {
  try {
    const data = await getWeatherData();
    const forecastSection = document.getElementById('forecast-section')
    const forecastContainer = document.querySelector('.forecast-container');
    const sevenDayForecast = data.forecast.forecastday;
    console.log(sevenDayForecast);

    sevenDayForecast.forEach((weatherData) => {
      console.log(`Date: ${weatherData.date}, Condition: ${weatherData.day.condition.text}, Average Temp: ${weatherData.day.avgtemp_c} C, Min-max Temp ${weatherData.day.mintemp_c} C - ${weatherData.day.maxtemp_c} C`);
      const dayCard = document.createElement('div');

      dayCard.textContent = `Date: ${weatherData.date}, Condition: ${weatherData.day.condition.text}, Average Temp: ${weatherData.day.avgtemp_c} C, Min-max Temp ${weatherData.day.mintemp_c} C - ${weatherData.day.maxtemp_c} C`;
      forecastContainer.append(dayCard)
    });
    forecastSection.append(forecastContainer);
    
  } catch (err) {
    console.error('Something went wrong:', err);
  }
}
