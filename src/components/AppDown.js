import React from 'react'
import './AppDown.css'
import Pngegg from '../assets/pngegg.png'

import Crypto from '../assets/trade.png'

const AppDown = () => {
    return (
        <div className='appDown'>
            <div className='container'>
                {/* left */}
                <div className='left'>
                    <img className="image-left" src={Crypto} alt='' />
                </div>

                {/* right */}
                <div className='right'>
                    <h1>The Apps</h1>
                    <h2>Download Apps to enjoy DoubleDa ecosystem.</h2>
                    <p>Explorer, Mine, Transfer, Trade, Reward.</p>
                    <p>Makes all convinient with Doubleda's Apps</p>

                    <div className='app-contaienr'>
                        <img className="image-right" src={Pngegg} alt="android"></img>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default AppDown
