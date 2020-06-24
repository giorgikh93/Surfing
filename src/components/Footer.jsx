import React, { useContext } from 'react'
import Menu from './Menu'
import { Consumer } from '../useUrl'

function Footer() {
    const { IMAGE_PATH } = useContext(Consumer)
    return (
        <div className='footer'>
            <img onClick={() => window.scrollTo(0, 0)} src={`${IMAGE_PATH}/images/logo.png`} alt="" />
            <Menu />
            <div className="socialIcons2">
                <a href="https://www.tumblr.com/"><img src={`${IMAGE_PATH}/images/tumb.png `} alt="" /></a>
                <a href="https://twitter.com/home"><img src={`${IMAGE_PATH}/images/twit.png `} alt="" /></a>
                <a href="https://vimeo.com/"><img src={`${IMAGE_PATH}/images/vimeo.png`} alt="" /></a>
            </div>
        </div>

    )
}

export default Footer