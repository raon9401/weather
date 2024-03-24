import React from 'react'
import Loading from './Loading';

const WeatherBox = ({ weatherInfo, isLoading }) => {
  // 화씨 = 섭씨 * 1.8 + 32
  console.log(weatherInfo)
  const calcFahrenheit = (fahrenheit) => {
    return (fahrenheit * 1.8 + 32).toFixed(3);
  }

  return (
    <div className='weather-info-box'>
      {isLoading && weatherInfo ?
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
            <img src={`https://openweathermap.org/img/wn/${weatherInfo?.weather[0].icon}.png`} alt="weather icon" />
          </h3>
        </>
        :
        <>
          <Loading />
          {!weatherInfo && <h5>위치 정보 권한을 허용해주세요!</h5>}
        </>
      }
    </div>
  )
}

export default WeatherBox