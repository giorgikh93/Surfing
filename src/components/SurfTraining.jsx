import React,{useContext} from 'react'
import ReadMore from './ReadMore'
import {Consumer} from '../useUrl'


function SurfTraining() {

    const {IMAGE_PATH} = useContext(Consumer)

    return (
        <div className='surfTraining'>
            <div className="article">
                <div className='numWrapper'>
                    <span className='num'>01</span>
                    <h1>Surf Training</h1>
                    <div className='rectangle'></div>
                </div>
                <p className='paragrapH'>By better understanding the various aspects of surfing. By better understanding the various aspects of surfing, you will improve faster and have more fun in the water</p>
            <ReadMore text={'READ MORE'} />
            </div>
            <div className="img">
                <img src={`${IMAGE_PATH}/images/surftraining.png`} alt="surfTraining" />
                <span>SURF CAMPS</span>
            </div>
        </div>
    )
}

export default SurfTraining