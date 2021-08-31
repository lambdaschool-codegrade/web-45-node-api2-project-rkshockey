import React from 'react'
import { Link } from 'react-router-dom'

function Header () {
    return <header>
        <div className='left'>
            <p>Posts</p>
        </div>
        <div className='right'>
            <Link to='/'><button>Home</button></Link>
        </div>
    </header>
}

export default Header

