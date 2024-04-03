import getWeatherData from './getWeatherData';
import Overcast from '../assets/Overcast.png';

export default async function getCurrentWeather() {
  const temp = document.querySelector('.temp');
  const feelsLikeTemp = document.querySelector('.feelslike');
  const condition = document.querySelector('.condition');
  const minmax = document.querySelector('.minmax');
  const weatherIcon = document.querySelector('.weather-image');
  const lastUpdate = document.querySelector('.last-update')
  const timeOfDay = new Date().getHours();
  console.log(timeOfDay);

  if (timeOfDay > 18) {
    document.body.classList.add('dark');
  }

  try {
    const data = await getWeatherData();
    const currentWeather = data.current;
    console.log(currentWeather);

    const updateDate = currentWeather.last_updated;
    console.log(updateDate)
    lastUpdate.textContent = `Last update : ${updateDate}`;

    const weatherTemp = currentWeather.temp_c;
    console.log(`${weatherTemp}°`);
    temp.textContent = `${weatherTemp}°`;

    const feelsLike = currentWeather.feelslike_c;
    feelsLikeTemp.textContent = `Feels like ${feelsLike}°`;
    console.log(`Feels like ${feelsLike} Celsius`);

    const weatherCondition = currentWeather.condition.text;
    console.log(weatherCondition);
    condition.textContent = weatherCondition;

    const weatherConditionIcon = currentWeather.condition.icon;
    weatherIcon.innerHTML = `<img src=${weatherConditionIcon}>`;

  } catch (err) {
    console.error('Something went wrong:', err);
  }

}

