import React from 'react'

const AllBeersPage = (props) => {
    return (
        <div className='allBeers container'>
            <div className='table table-striped'>
                <table>
                    <thead>
                        <tr>
                            <th>Beer Name</th>
                            <th></th>
                            <th>Number of Likes</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.beers.map(beer =>
                            <tr className={beer.id}>
                                <th>{beer.name}</th>
                                <th>
                                    <button type='button' className='btn btn-default btn-lg like' onClick={() => props.upLike(beer.id, beer.likes)}>
                                        <span className='glyphicon glyphicon-plus-sign'>
                                            <h3>Like</h3>
                                        </span>
                                    </button></th>
                                <th>{beer.likes}</th>
                                <th>
                                    <button type='button' className='btn btn-default btn-lg dislike' onClick={() => props.downLike(beer.id, beer.likes)}>
                                        <span className='glyphicon glyphicon-minus-sign'>
                                            <h3>Dislike</h3>
                                        </span>
                                    </button></th>
                                <th>
                                    <button type='button' className='btn btn-default btn-lg remove' onClick={() => props.deleteBeer(beer.id)}>
                                        <span className='glyphicon glyphicon-remove-circle'>
                                            <h3>Remove</h3>
                                        </span>
                                    </button>
                                </th>
                            </tr>)}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default AllBeersPage