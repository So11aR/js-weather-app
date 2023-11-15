const API_KEY = '9ea4b74763135c82f3e139b888c963ab'

const form = document.querySelector('#form')
const input = document.querySelector('.form__input')

form.onsubmit = submitHandler;

async function submitHandler (e) {
  e.preventDefault()

  if (!input.value.trim()) {
    console.log('Enter city name');
    return
  }

  const cityInfo = await getGeo(input.value.trim())

  const weatherInfo = await getWeather(cityInfo[0]['lat'], cityInfo[0]['lon'])

  console.log(weatherInfo);

  // 
  // console.log(input.value.trim());

}

async function getGeo (name) {
  const geoUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${name}&limit=5&appid=${API_KEY}`
  const response = await fetch(geoUrl)
  const data = await response.json()
  return data
}

async function getWeather (lat, lon) {
  const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`
  
  const response = await fetch(weatherUrl)
  const data = await response.json()
  return data
}