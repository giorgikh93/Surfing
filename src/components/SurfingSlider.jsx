import React, { useState, useRef } from 'react'



function SurfingSlider() {

    const [state, setState] = useState(0)

    const [images, setImages] = useState([
        'http://localhost:3000/images/xx.png',
        'http://localhost:3000/images/sea.jpg',
        'http://localhost:3000/images/eye.png'
    ])

    const nextRef = useRef()
    const prevRef = useRef()


    function next() {
        prevRef.current.classList.remove('active')
        nextRef.current.classList.add('active')
        if (state < images.length - 1) {
            setState(prevState => prevState + 1)
        }
        else {

            setState(images.length - 1)
        }
    }


    function prev() {
        nextRef.current.classList.remove('active')
        prevRef.current.classList.add('active')
        if (state >= 1) {
            setState(prevState => prevState - 1)
        }
        return
    }

    return (
        <>
            <div className='surfingSliderWrapper'>
                <div className='surfingTextWrapper'>
                    <span>Y O U R</span>
                    <h1>Beautiful Escape</h1>
                    <p>One of the greatest things about the sport of surfing is</p>
                    <p> that you need only three things yout</p>
                    <p> body. a surfboard,and a wave.</p>
                </div>
                <div className='sliderImage'>
                    <img src={images[state]} alt="img" />
                </div>
                <div className='rightColumnWrapper'>
                    <div className='rightColumn'>
                        <span>FIRST SURFING MAGAZINE</span>
                    </div>
                    <div className='socialIcons'>
                        <img src='http://localhost:3000/images/tumb.png' alt="img" />
                        <img src='http://localhost:3000/images/twit.png' alt="img" />
                        <img src='http://localhost:3000/images/vimeo.png' alt="img" />

                    </div>
                </div>
                <div className="arrows">
                    <i ref={prevRef} className="fa fa-angle-left" aria-hidden="true" onClick={prev}></i>
                    <div><span className='current'>{state + 1}</span><span className='divider'>/</span>{images.length}</div>
                    <i ref={nextRef} className="fa fa-angle-right" aria-hidden="true" onClick={next}></i>
                </div>
            </div>
        </>
    )
}


export default SurfingSlider
