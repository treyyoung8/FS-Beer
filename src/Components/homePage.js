import React from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => {
    return (
        <div className='homepage'>
            <h2>Welcome to the Beer Page!</h2>
            <Link to='/beers'>
                <button className='btn button'>See Beers</button>
            </Link>
        </div>
    )
}

export default HomePage