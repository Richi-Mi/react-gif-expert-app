import '@testing-library/jest-dom';
import React from 'react';
import { shallow } from 'enzyme';

import GifExpertApp from '../GifExpertApp';

describe(' 5.- Pruebas en el <GifExpertApp /> ', () => {
    test(' * Debe de Mostrar el Componente correctamente', () => {
        const wrapper = shallow( <GifExpertApp />);
        
        expect( wrapper ).toMatchSnapshot();
    })
    test(' * Debe de Mostrar una lista de Categorias', () => {
        const categories = ['One Punch', 'Dragon Ball'];
        const wrapper = shallow( <GifExpertApp defaultCategories={categories}/>);

        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('GifGrid').length ).toBe( categories.length );
    })
})