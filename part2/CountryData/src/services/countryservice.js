import axios from 'axios'
const countryUrl = 'https://studies.cs.helsinki.fi/restcountries/api/'
const weatherUrl = 'https://api.openweathermap.org/data/2.5/weather'
const weatherapiKey = import.meta.env.VITE_API_KEY

console.log(weatherapiKey)
const getAll = () => {
    const request = axios.get(`${countryUrl}/all`)
    return request.then(response => response.data)
}

const getCountry = (country) => {
    const request = axios.get(`${countryUrl}/name/${country}`)
    return request.then(response => response.data)
}

const getWeather = (lat, lon) => {
    const request = axios.get(`${weatherUrl}?lat=${lat}&lon=${lon}&appid=${weatherapiKey}`).catch(error => {
        console.log('Status:', error.response?.status)
        console.log('Response:', error.response?.data)
        console.log('Headers:', error.response?.headers)
        console.log('Full error:', error)
    })
    return request.then(response => response.data)
}


export default { getAll, getCountry, getWeather }