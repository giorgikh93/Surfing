import React, { useState, useRef, useContext, useEffect } from 'react'
import { Consumer } from '../useUrl'

function SurfingSlider() {

    const [position, setPosition] = useState(0)
    const { IMAGE_PATH } = useContext(Consumer)

    const images = [
        `${IMAGE_PATH}/images/xx.png`,
        `${IMAGE_PATH}/images/sea.jpg`,
        `${IMAGE_PATH}/images/wave.jpg`
    ]

    const nextRef = useRef()
    const prevRef = useRef()

    useEffect(() => {
        if (position === 0) {
            nextRef.current.classList.add('active')
            nextRef.current.classList.remove('opacity')
            prevRef.current.classList.add('opacity')
        }
            
      else  if (position === images.length - 1) {
            nextRef.current.classList.remove('active')
            nextRef.current.classList.add('opacity')
            prevRef.current.classList.add('active')
            prevRef.current.classList.remove('opacity')
        }
    }, [position, images.length])


    function next() {
       

        if (position < images.length - 1) {
            prevRef.current.classList.remove('active')
            prevRef.current.classList.add('opacity')
            nextRef.current.classList.add('active')
            nextRef.current.classList.remove('opacity')
            setPosition(prevState => prevState + 1)
        }  
     
        else {
            setPosition(images.length - 1)
        }
    
    }

    function prev() {
        if (position >= 1) {
            nextRef.current.classList.remove('active')
            nextRef.current.classList.add('opacity')
            prevRef.current.classList.add('active')
            prevRef.current.classList.remove('opacity')
            setPosition(prevState => prevState - 1)
        }
        return
    }

    return (
        <>
            <div className='surfingSliderWrapper ' >
                <div className='surfingTextWrapper'>
                    <span>Y O U R</span>
                    <h1>Beautiful Escape</h1>
                    <p>One of the greatest things about the sport of surfing is</p>
                    <p> that you need only three things yout</p>
                    <p> body. a surfboard,and a wave.</p>
                </div>
                <div className='sliderImage'>
                    <img src={images[position]} alt="img" />
                </div>
                <div className='rightColumnWrapper'>
                    <div className='rightColumn'>
                        <span>FIRST SURFING MAGAZINE</span>
                    </div>
                    <div className='socialIcons'>
                        <a href="https://www.tumblr.com/"><i className="fa fa-tumblr" aria-hidden="true"></i> </a>
                        <a href="https://twitter.com/home"><i className="fa fa-twitter" aria-hidden="true"></i> </a>
                        <a href="https://vimeo.com/"><i className="fa fa-vimeo" aria-hidden="true"></i> </a>
                    </div>
                </div>
                <div className="arrows">
                    <i ref={prevRef} className="fa fa-angle-left" aria-hidden="true" onClick={prev}></i>
                    <div><span className='current'>{position + 1}</span><span className='divider'>/</span>{images.length}</div>
                    <i ref={nextRef} className="fa fa-angle-right" aria-hidden="true" onClick={next}></i>
                </div>
            </div>
        </>
    )
}


export default SurfingSlider
