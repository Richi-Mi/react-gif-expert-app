import React from 'react'

const GifGridItem = ( { id, title, url } ) => {
    // console.log( id, title, url )
    return (
        <div className='card animate__animated animate__fadeIn'>
            <img src={ url } alt={ title } />
            <p> { title != '' ? title : ''} </p>
        </div>
    )
}
export default GifGridItem