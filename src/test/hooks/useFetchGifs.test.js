import '@testing-library/jest-dom';
import useFetchGifs from '../../hooks/useFetchGifs';
import { renderHook } from '@testing-library/react-hooks';

// PARA usar las pruebas con hooks usaremos otra libreria llamada 
// react-hooks-testing-library 
// # npm install --save-dev @testing-library/react-hooks

describe(' 6.- Pruebas en el hook useFetchGifs()', () => {
    const category = 'Cats'
    test(' * Debe devolver el estado inicial', async () => {
        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs( category ) );
        const { data, loading } = result.current;

        await waitForNextUpdate();

        expect( data ).toEqual([]);
        expect( loading ).toBe( true );
    })
    test(' * Debe de retornar un arreglo de imagenes y el loading en false', async () => {
        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs( category ) );
        await waitForNextUpdate();
        
        const { data, loading } = result.current;

        expect( data.length ).toBe( 10 );
        expect( loading ).toBe( false ); 
    })
    
})