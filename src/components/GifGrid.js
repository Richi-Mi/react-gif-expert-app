import React, { Fragment, useEffect, useState } from 'react'
import { getGifs } from '../helpers/getGifs'
import GifGridItem from './GifGridItem'

const GifGrid = ({ category }) => {
    const [images, setImages] = useState([])

    useEffect(() => {
        getGifs( category )
            .then( imgs => setImages( imgs ))
    }, [ category ])

    // useEffect( funcion(), dependencias ) .- Va a ejecutar el codigo, solo si se cambia de estado
    // una dependencia, en este caso lo ponemos para que solo se ejecute una vez

    return (
        <Fragment>
            <h3> {category} </h3>
            <div className='card-grid'>

                {
                    images.map(img => {
                        // { ...img } .- Mandamos las propiedades del objeto
                        return <GifGridItem key={img.id} {...img} />
                    })
                }

            </div>
        </Fragment>
    )
}
export default GifGrid