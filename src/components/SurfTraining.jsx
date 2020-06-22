import React from 'react'
import ReadMore from './ReadMore'

function SurfTraining() {
    return (
        <div className='surfTraining'>
            <div className="article">
                <div className='numWrapper'>
                    <span className='num'>01</span>
                    <h1>Surf Training</h1>
                    <div className='rectangle'></div>
                </div>
                <p className='paragrapH'>By better understanding the various aspects of surfing.By better understanding the various aspects of surfing, you will improve faster and have more fun in the water</p>
            <ReadMore text={'READ MORE'} />
            </div>
            <div className="img">
                <img src="http://localhost:3000/images/surftraining.png" alt="surfTraining" />
                <span>SURF CAMPS</span>
            </div>
        </div>
    )
}

export default SurfTraining