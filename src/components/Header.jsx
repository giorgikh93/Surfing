import React from 'react'


function Header() {
    return (
        <div className='header'>
            <div className="logo">
                <img src="http://localhost:3000/images/logo.png" alt="logo" />
            </div>
            <ul className='menu'>
                <a href="/stories"><li>S T O  R I E S</li></a>
                <a href="/events"><li>E V E N T S</li></a>
                <a href="places"><li>P L A C E S</li></a>
                <a href="boards"><li>B O A R D S</li></a>
            </ul>
        </div>
    )
}


export default Header