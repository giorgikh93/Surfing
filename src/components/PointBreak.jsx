import React from 'react'
import ReadMore from './ReadMore'

function PointBreak() {
    return (
        <div className='pointBreakWrapper'>
            <div className='imgArticleWrapper'>
                <div className="articleimg">
                    <span>SURF CAMPS</span>
                    <img src="http://localhost:3000/images/article2img.png" alt="articleImg" />
                </div>
                <div className="article2">
                    <div className='headingWrapper'>
                        <div className="heading">
                            <span className='num'>02</span>
                            <h1>Point Break</h1>
                            <span className='rectangle'></span>
                        </div>
                        <p className='paragrapH'>By better understanding the various aspects of surfing.By better understanding the various aspects of surfing, you will improve faster and have more fun in the water</p>

                        <ReadMore text={'READ MORE'}/>
                    </div>
                </div>

            </div>
            {/* <img  className='background2' src="http://localhost:3000/images/background2.png" alt="bc"/> */}
        </div>
    )
}

export default PointBreak