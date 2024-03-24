import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';

const WeatherButton = ({ cities, setCityName }) => {
    const [selectBtn, setSelectBtn] = useState(-1);

    const handleEvent = (cityName, index) => {
        setSelectBtn(index);
        setCityName(cityName);
    }

    return (
        <div className='select-button-wrap'>
            <Button variant={selectBtn === -1 ? "success" : "info"} className={selectBtn === -1 ? "up" : ""} onClick={() => handleEvent(null, -1)}>My Location</Button>
            {
                cities.map((el, index) =>
                    <Button variant={selectBtn === index ? "success" : "info"}
                        className={selectBtn === index ? "up" : ""}
                        onClick={() => handleEvent(el, index)}
                        key={index}>
                        {el}
                    </Button>
                )
            }
        </div>
    )
}

export default WeatherButton