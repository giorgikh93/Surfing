import React from 'react'


function Header() {
    return (
        <div className='header'>
            <div className="logo">
                <img src="http://localhost:3000/images/logo.png" alt="logo" />
            </div>
            <ul className='menu'>
                <a href="/stories"><li>STORIES</li></a>
                <a href="/events"><li>EVENTS</li></a>
                <a href="places"><li>PLACES</li></a>
                <a href="boards"><li>BOARDS</li></a>
            </ul>
        </div>
    )
}


export default Header