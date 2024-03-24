import { useEffect, useState } from 'react';
import WeatherBox from './component/WeatherBox';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import WeatherButton from './component/WeatherButton';

// 1. 앱이 실행 되자마자 현재 위치기반의 날씨가 보인다.
// 2. 날씨 정보에는 도시, 섭씨, 화씨 날씨상태
// 3. 5개의 버튼(1개는 현재 위치, 4개는 다른 도시)
// 4. 도시버튼을 클리할때 마다 도시별 날씨가 나온다
// 5. 현재위치 버튼을 누르면 다시 현재위치 기반의 날씨가 나온다
// 6. 데이터를 들고오는 동안 로딩 스피너가돈다.
// const weatherKey = process.env.REACT_APP_WEATHER_KEY;
const weatherKey = "23f28d08e205e2b6c340da56df6982ae";


function App() {
  const [weatherInfo, setWeatherInfo] = useState(null);
  const [cityName, setCityName] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const cities = ["paris","new york", "tokyo", "seoul"];

  const getCurrentLocation = () =>{
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;

      getWeatherByCurrentLocation(lat,lon);

    });
  }

  const getWeatherByCurrentLocation = async (lat, lon) => {
    setIsLoading(false);
    let url;
    if(cityName){
      url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${weatherKey}&units=metric`;
    }else {
      url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${weatherKey}&units=metric`;
    }

    let response = await fetch(url);
    let data = await response.json();

    setWeatherInfo(data);
    setIsLoading(true);
  }

  useEffect(()=>{
    getCurrentLocation();
     // eslint-disable-next-line
  },[cityName])


  return (
    <div className='main'>
      <div className='container'>
        <WeatherBox weatherInfo={weatherInfo} isLoading={isLoading}/>
        <WeatherButton cities={cities} setCityName={setCityName}/>
      </div>
    </div>
  );
}

export default App;
