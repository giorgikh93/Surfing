import React from 'react'


function ReadMore(props) {
    return (
        <div className='read-more' style={props.style}>
            <a  href='/readMore'>{props.text} </a>
            <div className='underLine'></div>
        </div>
    )
}

export default ReadMore