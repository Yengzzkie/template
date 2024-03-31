import getWeatherData from './getWeatherData';

export default async function getLocation() {
  const location = document.querySelector('.location');

  try {
    const data = await getWeatherData();
    const locationData = data.location;

    location.innerHTML = `${locationData.name}, ${locationData.country} <i class="fa-solid fa-location-dot"></i>`;

    console.log(locationData.name, locationData.country);
  } catch (err) {
    console.error('Something went wrong:', err);
  }
}
