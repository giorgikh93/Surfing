import React,{useContext} from 'react'
import Menu from './Menu'
import {Consumer} from '../useUrl'

function Header() {

    const {IMAGE_PATH} = useContext(Consumer)
    
    return (
        <div className='header ' >
            <div className="logo">
                <img src={`${IMAGE_PATH}/images/logo.png`} alt="logo" />
            </div>
            <Menu/>
        </div>
    )
}


export default Header