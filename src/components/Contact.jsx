import React from 'react'
import ReadMore from './ReadMore'

function Contact() {
    return (
        <div className='contact'>
            <div className="contactImg">
            <img src="http://localhost:3000/images/contactimg.png" alt="cimg" />
            </div>
            <div className='contactInfo'>
                <span className='ourCamp'>OUR CAMP</span>
                <div className='location'>
                    <span>CA 91932, USA</span>
                    <span>Imperial Beach</span>
                    <span>560 Silver Strand Blvd</span>
                </div>
                <div className="contactReadMore">
                <ReadMore text={'GET IN TOUCH'} />
                </div>
            </div>
        </div>
    )
}

export default Contact