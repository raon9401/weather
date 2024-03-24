import React, { useState } from 'react'
import { Button } from 'react-bootstrap';

const LoadingTimeBtn = ({ loadingTimeArr, setLoadingTimeIndex }) => {
    const [selectBtn, setSelectBtn] = useState(0);

    const handleEvent = (index) => {
        setSelectBtn(index);
        setLoadingTimeIndex(index);
    }


    return (
        <div className='loading-time-box'>
            <p>
                로딩 애니메이션 시간 조절
            </p>
            <div className="loadingTimeBtn-wrap">
                {
                    loadingTimeArr.map((el, index) =>
                        <Button
                            variant={selectBtn === index ? "primary" : "warning"}
                            onClick={() => handleEvent(index)}
                            key={index}>
                            {el === 0 ? "기본 딜레이" : `${el / 1000}초`}
                        </Button>
                    )
                }
            </div>
        </div>

    )
}

export default LoadingTimeBtn