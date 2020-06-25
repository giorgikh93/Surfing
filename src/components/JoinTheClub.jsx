import React, { useState } from 'react'
import axios from 'axios'

function JoinTheClub() {

    const [email, setEmail] = useState('')

    function handleSubscription(e) {
        e.preventDefault();
        axios.post('server-url', { email })
            .then(setEmail(''))
    }

    return (
        <div className='joinClub'>
            <hr />
            <div className='subscribeWrapper'>
                <h1>Join the Club</h1>
                <p className='paragrapH'>By better understanding the various aspects of surfing, you will improve faster and have more fun in the water</p>
                <form className='email'>
                    <input type="text" placeholder='YOUR E-MAIL' onChange={(e) => setEmail(e.target.value)} />
                    <button onClick={handleSubscription} type='button'><i className="fa fa-angle-right" aria-hidden="true"></i></button>
                </form>
            </div>
        </div>
    )
}


export default JoinTheClub