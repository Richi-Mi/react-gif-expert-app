import '@testing-library/jest-dom'

import React from 'react'
import AddCategory from "../../components/AddCategory"
import { shallow } from "enzyme"

describe(' 3.- Pruebas en <AddCategory /> ', () => {
    const setCategories = jest.fn(); // Es una función para que podamos sabder si se llamo o no
    let wrapper = shallow( <AddCategory setCategories={ setCategories }/> );
    
    beforeEach( () => {
        jest.clearAllMocks(); // Limpia todas las simulaciones
        wrapper = shallow( <AddCategory setCategories={ setCategories }/> );
    } );

    test(' * Debe de mostrarse correctamente', () => {
        expect( wrapper ).toMatchSnapshot();
    });
    test(' * Debe de Cambiar la caja de texto', () => {
        const input = wrapper.find('input');
        const value = 'Hola Mundo';
        
        // elemento.simulate('evento', argumentos[e]) .- Simula eventos en las pruebas
        input.simulate('change', { target: { value } });
        const txt_p = wrapper.find('p').text().trim();

        expect( txt_p ).toBe( value );

    })
    test(' * Si las condiciones no se cumplen, no debe de hacer el posteo de información', () => {
        wrapper.find('form').simulate('submit', { preventDefault: () => { } });

        expect( setCategories ).not.toHaveBeenCalled() // Sirve para saber si la función fue llamada o no
    })
    test(' * Debe de llamar el setCategories, y limpiar la Caja de texto', () => {
        // 1.- Simular el inputChange
        const input = wrapper.find('input');
        const value = 'One Punch Man';

        input.simulate('change', { target: { value } } );
        // 2.- Simular el Submit
        const form = wrapper.find('form');
        form.simulate('submit', { preventDefault: () => {} });
        // 3.- setCategories, debio de haberse llamado
        expect( setCategories ).toHaveBeenCalled();
        expect( setCategories ).toHaveBeenCalledTimes(1); // Solo tiene que llamarse una vez la función
        expect( setCategories ).toHaveBeenCalledWith( expect.any( Function )); // La función tiene que llamarse con un argumento que sea una función.
        // 4.- el valor del input debe ser ''
        expect( input.prop('value') ).toBe('');
    })
    
      
})