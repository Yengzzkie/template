import getWeatherData from './getWeatherData';

export default async function getForecast() {
  try {
    const data = await getWeatherData();

    const sevenDayForecast = data.forecast.forecastday;
    console.log(sevenDayForecast);

    sevenDayForecast.forEach((weatherData) => {
      console.log(`Date: ${weatherData.date}, Condition: ${weatherData.day.condition.text}, Average Temp: ${weatherData.day.avgtemp_c} C, Min-max Temp ${weatherData.day.mintemp_c} C - ${weatherData.day.maxtemp_c} C`);
    });
  } catch (err) {
    console.error('Something went wrong:', err);
  }
}
