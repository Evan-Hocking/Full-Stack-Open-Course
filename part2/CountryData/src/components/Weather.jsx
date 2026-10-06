import countryservice from '../services/countryservice'
import { useState, useEffect } from 'react'

const Weather = ({ country }) => {
    const [weather, setWeather] = useState(null)

    const [lat, lon] = country.capitalInfo.latlng
    const KtoDegC = (Kelvin) => {
        return Math.round((Kelvin - 273.15) * 10) / 10
    }
    useEffect(() => {
        countryservice
            .getWeather(lat, lon)
            .then(APIWeather => {
                setWeather(APIWeather)
                console.log(APIWeather)
            })
    }, [lat, lon])

    if (!weather) {
        return null
    }

    return (
        <div>
            <h2>Weather in {country.capital}</h2>
            <p>Temperature {KtoDegC(weather.main.temp)} Celsius</p>
            <img
                src={`https://openweathermap.org/payload/api/media/file/${weather.weather[0].icon}.png`}
            />
            <p>Wind {weather.wind.speed} m/s</p>
        </div>
    )
}

export default Weather