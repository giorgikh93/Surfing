import React, { useRef, useState } from 'react'
import ReadMore from './ReadMore'

function SurfingVideo() {

    const [play,setPlay] = useState(false)

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
            <div className='surfingVideo'>
                <p>Surfing is the most blissful experience you can have on this planet, a taste of heaven </p>
                <span>JOHN MCCARTHY</span>
                <hr />
            </div>
            <div className='videoSectionWrapper'>
                <div className='imgTextSection'>
                    <img src="http://localhost:3000/images/surf.png" alt="" />
                    <div className='paragraphWrapper'>
                    <p>By better understanding the various aspects of surfing. you will improve faster and have more fun in the water  </p>
                    <ReadMore text={'READ MORE'}/>   
                    </div>
                </div>
                <div className='video'>
                    <video ref={myVideo} width='705px' height='546px' >
                        <source src='http://localhost:3000/video/surfingVideo.mp4' />
                    </video>
                    <button onClick={() => handlePlay(myVideo)}>{play ? <i className="fa fa-pause" aria-hidden="true"></i> : <i className="fa fa-play" aria-hidden="true"></i>}</button>
                </div>
            </div>
        </div>
    )
}


export default SurfingVideo