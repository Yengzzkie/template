import getWeatherData from './getWeatherData';

export default async function getCurrentWeather() {
  try {
    const data = await getWeatherData();
    const currentWeather = data.current;
    console.log(currentWeather);

    const lastUpdate = currentWeather.last_updated;
    console.log(lastUpdate);

    const weatherCondition = currentWeather.condition.text;
    console.log(weatherCondition);

    const weatherTemp = currentWeather.temp_c;
    console.log(`${weatherTemp} Celsius`);

    const feelsLike = currentWeather.feelslike_c;
    console.log(`Feels like ${feelsLike} Celsius`);
  } catch (err) {
    console.error('Something went wrong:', err);
  }
}
