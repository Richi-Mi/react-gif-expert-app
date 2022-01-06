import '@testing-library/jest-dom'
import React from 'react'
import GifGridItem from '../../components/GifGridItem'

import { shallow } from 'enzyme'

// Enzyme-to-json nos va a servir para hacer las snapshots de componentes de React
describe(' 1.- Pruebas en <GifGridItem />' , () => {
    test(' - Debe de Mostrar <GifGridItem /> correctamente', () => {
        const wrapper = shallow( <GifGridItem /> ) // Renderizamos el componente para usarlo como html
        
        expect( wrapper ).toMatchSnapshot();
    })
})
// El archivo de setUpTests.js dejarlo, ese es el que va a tomar node, para configuras los test