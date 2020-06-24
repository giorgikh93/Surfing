import React from 'react'
import {Link} from 'react-router-dom'

function Menu() {
    return (
        <ul className='menu'>
            <Link to="/stories"><li>STORIES</li></Link>
            <Link to="/events"><li>EVENTS</li></Link>
            <Link to="/places"><li>PLACES</li></Link>
            <Link to="/boards"><li>BOARDS</li></Link>
        </ul>
    )
}


export default Menu