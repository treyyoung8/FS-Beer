import React from 'react'
import { Link } from 'react-router-dom'

const AddBeer = (props) => {
    return (
        <div className='edit'>
            <form className='editForm'>
                <div className='form-group'>
                    <label className='left'>Name</label>
                    <input type='text' className='form-control form-control-lg right' placeholder='Name' onChange={(e) => props.handleChange(e)} name='name'/>
                </div>
                <div className='form-group'>
                    <label className='left'>Number of Likes</label>
                    <input type='text' className='form-control form-control-lg right' placeholder='Likes' onChange={(e) => props.handleChange(e)} name='likes'/>
                </div>
                <div>
                    <Link to='/beers'>
                        <button type="button" className="btn btn-default btn-lg button" onClick={() => props.postBeer()}>Confirm</button>
                    </Link>
                </div>
            </form>
        </div>
    )
}

export default AddBeer