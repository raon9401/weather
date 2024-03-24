import React from 'react'
import Loading from './Loading';

const WeatherBox = ({ weatherInfo, isLoading }) => {
  // 화씨 = 섭씨 * 1.8 + 32
  const calcFahrenheit = (fahrenheit) => {
    return (fahrenheit * 1.8 + 32).toFixed(3);
  }

  return (
    <div className='weather-info-box'>
      {isLoading ?
        <>
          <span>
            {weatherInfo?.name}
          </span>
          <div>
            <h2>
              {weatherInfo?.main.temp}°C / {calcFahrenheit(weatherInfo?.main.temp)}°F
            </h2>
          </div>
          <h3>
            {weatherInfo?.weather[0].description}
          </h3>
        </>
        :
        <>
          <Loading />
        </>
      }
    </div>
  )
}

export default WeatherBox