import getWeatherData from './getWeatherData';

export default async function getLocation() {
  try {
    const data = await getWeatherData();
    const locationData = data.location;

    console.log(locationData.name, locationData.country);
  } catch (err) {
    console.error('Something went wrong:', err);
  }
}
