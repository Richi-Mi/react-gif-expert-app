import '@testing-library/jest-dom'
import React from 'react'
import GifGridItem from '../../components/GifGridItem'

import { shallow } from 'enzyme'

// Enzyme-to-json nos va a servir para hacer las snapshots de componentes de React
describe(' 1.- Pruebas en <GifGridItem />' , () => {
    const titulo = 'One Punch';
    const url = 'https://www.giphy.com/id/algo';
    const wrapper = shallow( <GifGridItem title={ titulo } url={ url } /> ) // Renderizamos el componente para usarlo como html

    test(' * Debe de Mostrar <GifGridItem /> correctamente', () => {
        expect( wrapper ).toMatchSnapshot();
    })
    test(' * Debe de Mostrar un parrafo con el titulo', () => {
        const p = wrapper.find('p');
        const txt_p = p.text().trim();

        expect( txt_p ).toBe( titulo );
    })
    test(' * Debe de Mostrar la <img> con el url y titulo correctos', () => {
        const img = wrapper.find('img');
        // console.log( img.props().src )
        // console.log( img.prop('src') )
        expect( img.prop('src') ).toBe( url )
        expect( img.prop('alt') ).toBe( titulo )
    })
    test(' * El <div> debe tener la clase animate__fadeIn - arr', () => {
        const div = wrapper.find('div')
        const arrClasses = div.prop('className').split(' ')

        const result = arrClasses.find( clase => clase === 'animate__fadeIn')
        expect( result ).toBe('animate__fadeIn')
    })
    test(' * El <div> debe tener la clase animate__fadeIn - string', () => {
        const div = wrapper.find('div');
        const className = div.prop('className')

        expect( className.includes('animate__fadeIn') ).toBe( true );
    })
})
// El archivo de setUpTests.js dejarlo, ese es el que va a tomar node, para configuras los test