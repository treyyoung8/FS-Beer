import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header>
            <h1>BEER!</h1>
            <div className='btn-group btn-group-lg'>
                <Link to ='/'>
                <button type='button' className='btn btn-primary button'>Home</button>
                </Link>
                <Link to='/beers'>
                <button type='button' className='btn btn-primary button'>Beer List</button>
                </Link>
                <Link to='/beers/newbeer'>
                    <button type='button' className='btn btn-primary button'>
                        <span className='glyphicon glyphicon-plus'></span>
                        <h1>Add Beer</h1>
                    </button>
                </Link>
            </div>
        </header>
    )
}

export default Header