import React, {useState} from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import './Navbar.css'

const Navbar = () => {
const [click, setClick] = useState(false)
const handleClick = () => setClick(!click)


    return (
        <div className='nav_header'>
            <div className='container'>
                <h1>Double<span className='primary'>Da</span></h1>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li>
                        <a href='/'>Home</a>
                    </li>
                    <li>
                        <a href='/'>Explorer</a>
                    </li>
                    <li>
                        <a href='/'>Mining</a>
                    </li>
                    <li>
                        <a href='/'>Trade</a>
                    </li>
                    <li>
                        <a href='/'>Contact</a>
                    </li>
                </ul>
                {/* <div className='btn-group'>
                    <button className='btn'>Download App</button>
                </div> */}
                <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaTimes size={20} style={{color: '#333'}}/>) : (<FaBars size={20} style={{color: '#333'}} />)}
                    
                </div>
            </div>
        </div>
    )
}

export default Navbar
