import React, { Fragment } from 'react'
import PropTypes from 'prop-types';
import useFetchGifs from '../hooks/useFetchGifs'
import GifGridItem from './GifGridItem'

const GifGrid = ({ category }) => {
    // const [images, setImages] = useState([])
    // useEffect(() => {
    //     getGifs( category )
    //         .then( imgs => setImages( imgs ))
    // }, [ category ])

    // useEffect( funcion(), dependencias ) .- Va a ejecutar el codigo, solo si se cambia de estado
    // una dependencia, en este caso lo ponemos para que solo se ejecute una vez

    // Pusimos useEffect, en el hook, useFetchGifs

    const { data: images, loading } = useFetchGifs( category )

    return (
        <Fragment>
            <h3 className='animate__animated animate__fadeIn'> {category} </h3>
            { loading && <p className='animate__animated animate__flash'> Cargando... </p> }
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
GifGrid.propTypes = {
    category: PropTypes.string.isRequired
}
export default GifGrid