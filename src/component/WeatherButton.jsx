import React from 'react'
import { Button } from 'react-bootstrap';

const WeatherButton = ({ cities, setCityName }) => {

    return (
        <div className='select-button-wrap'>
            <Button variant="info" onClick={() => setCityName(null)}>My Location</Button>
            {
                cities.map((el, index) =>
                    <Button variant="info"
                        onClick={() => setCityName(el)}
                        key={index}>
                        {el}
                    </Button>
                )
            }
        </div>
    )
}

export default WeatherButton