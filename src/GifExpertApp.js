import React, { useState } from 'react'
import { Fragment } from 'react/cjs/react.production.min';
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

const GifExpertApp = ({ defaultCategories = []}) => {
    // const [categories, setCategories] = useState(['One Punch Man']);
    const [categories, setCategories] = useState(defaultCategories);

    // const handleAdd = () => {
    //     setCategories([ ...categories, 'Star Wars'])
    //     setCategories( cats => [...cats, 'Star Wars'])
    // }

    return (
        <Fragment>
            <h2 className='title'> GifExpertApp </h2>
            <AddCategory setCategories = { setCategories } />
            
            <hr />
            {/* <button onClick={ handleAdd }> Agregar </button> */}
            <ol> 
                {
                    categories.map( ( category, i ) => {
                        return <GifGrid category={ category } key={ category }/>
                    })
                }
            </ol>
        </Fragment>
    );
}
// A cada valor que agregemos por JavaScript, debemos darle una key
export default GifExpertApp