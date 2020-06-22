import React from 'react'
import Menu from './Menu'

function Header() {
    return (
        <div className='header ' >
            <div className="logo">
                <img src="http://localhost:3000/images/logo.png" alt="logo" />
            </div>
            <Menu/>
        </div>
    )
}


export default Header