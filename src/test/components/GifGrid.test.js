import '@testing-library/jest-dom';

import React from 'react';
import GifGrid from '../../components/GifGrid';

import { shallow } from 'enzyme';
import useFetchGifs from '../../hooks/useFetchGifs';

jest.mock('../../hooks/useFetchGifs');

describe(' 4.- Pruebas en el <GifGridItem /> ', () => {
    const category = 'One Punch Man';
    
    test(' * Debe de Mostrar el componente correctamente', () => {
        useFetchGifs.mockReturnValue({ // Configuramos cual va a ser la información retornada
            data: [],
            loading: true
        });

        const wrapper = shallow( <GifGrid category={ category } /> );

        expect( wrapper ).toMatchSnapshot();
    })
    test(' * Debe de Mostrar imagenes cuando se carge useFetchGifs()', () => {
        const gifs = [
            {
                id: '2022-01-10-2:03',
                title: 'One Punch Man',
                url: 'https://giphy.com/gif/aw0osae0ad21.gif'
            },
            {
                id: '2022-01-10-2:04',
                title: 'One Punch Man Two',
                url: 'https://giphy.com/gif/aw0osae0ad21.gif'
            }
        ]
        useFetchGifs.mockReturnValue({ // Configuramos cual va a ser la información retornada
            data: gifs,
            loading: false
        });
        const wrapper = shallow( <GifGrid category={ category } /> );

        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('p').exists() ).toBe( false );
        expect( wrapper.find('GifGridItem').length ).toBe( gifs.length );
    })
    
})
