import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav className='navbar navbar-expand-lg navbar-light nav'>
            <Link to='/'>
                <a className='navbar-brand fsBeer' href='#'>FluentStream Beer</a>
                <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarNav' aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle navigation'>
                    <span className='navbar-toggler-icon'></span>
                </button>
            </Link>
            <div className='collapse navbar-collapse' id='navbarNav'>
                <ul className='navbar-nav'>
                    <Link to='/'>
                        <li className='nav-item active'>
                            <a className='nav-link' href='#'>Home <span className='sr-only'>(current)</span></a>
                        </li>
                    </Link>
                    <Link to='/beers'>
                        <li className='nav-item'>
                            <a className='nav-link' href='#'>Beer List</a>
                        </li>
                    </Link>
                    <Link to='/beers/newbeer'>
                        <li className='nav-item'>
                            <a className='nav-link' href='#'>
                                <span className='glyphicon glyphicon-plus'></span>
                                Add Beer
                            </a>
                        </li>
                    </Link>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar