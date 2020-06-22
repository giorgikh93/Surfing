import React from 'react'
import Menu from './Menu'

function Footer(){
    return(
        <div className='footer'>
            <img src="http://localhost:3000/images/logo.png" alt=""/>
            <Menu/>
            <div className="socialIcons2">
            <img src="http://localhost:3000/images/tumb.png" alt=""/>
            <img src="http://localhost:3000/images/twit.png" alt=""/>
            <img src="http://localhost:3000/images/vimeo.png" alt=""/>

            </div>
        </div>
    )
}

export default Footer