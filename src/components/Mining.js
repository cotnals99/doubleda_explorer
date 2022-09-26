import React from 'react'
import './Mining.css'

import Crypto from '../assets/trade.png'

const Mining = () => {
    return (
        <div className='mining'>
            <div className='container'>
                {/* left */}
                <div className='left'>
                    <img src={Crypto} alt='' />
                </div>

                {/* right */}
                <div className='right'>
                    <h1>The Mining</h1>
                    <h2>Mining does not need to be hard</h2>
                    <p>Doubleda is the utility coin and can be obtained from many social activities.</p>
                    <div className='input-container'>
                        {/* <input type='email' placeholder='Enter your email' /> */}
                        <button className='btn'>Find out How!</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Mining
