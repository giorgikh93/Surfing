import React, { useRef, useState, useContext } from 'react'
import ReadMore from './ReadMore'
import { Consumer } from '../useUrl'

function SurfingVideo() {

    const [play, setPlay] = useState(false)
    const { IMAGE_PATH } = useContext(Consumer)

    const myVideo = useRef()

    function handlePlay(myVideo) {
        if (myVideo.current.paused) {
            myVideo.current.play()
            setPlay(true)
        } else {
            myVideo.current.pause()
            setPlay(false)
        }
    }
    return (
        <div >
            <div className='surfingVideo '>
                <p>Surfing is the most blissful experience you can have on this planet, a taste of heaven </p>
                <span>JOHN MCCARTHY</span>
                <hr />
            </div>
            <div className='videoSectionWrapper'>
                <div className='imgTextSection'>
                    <img src={`${IMAGE_PATH}/images/surf.png`} alt="" />
                    <div className='paragraphWrapper'>
                        <p>By better understanding the various aspects of surfing. you will improve faster and have more fun in the water  </p>
                        <ReadMore text={'READ MORE'} />
                    </div>
                </div>
                <div className='video'>
                    <video ref={myVideo} width='705px' height='546px' >
                        <source src={`${IMAGE_PATH}/video/surfingVideo.mp4`} />
                    </video>
                    <button onClick={() => handlePlay(myVideo)}>{play ? <i className="fa fa-pause" aria-hidden="true"></i> : <i className="fa fa-play" aria-hidden="true"></i>}</button>
                </div>
            </div>
        </div>
    )
}


export default SurfingVideo