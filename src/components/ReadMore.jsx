import React from 'react'
import {Link} from 'react-router-dom'

function ReadMore(props) {
    return (
        <div className='read-more' style={props.style}>
            <Link  to='/readMore'>{props.text} </Link>
            <div className='underLine'></div>
        </div>
    )
}

export default ReadMore