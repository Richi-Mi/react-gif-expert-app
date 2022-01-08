import { getGifs } from "../../helpers/getGifs"

describe(' 2.- Pruebas en getGifs() Fetch ', () => {
    test(' * Debe de traer 10 elementos ', async () => {
        const gifs = await getGifs('One Punch')

        expect( gifs.length ).toBe( 10 )
    })
    test(' * No debe traer elementos si se manda una categoria vacia ', async () => {
        const gifs = await getGifs('')

        expect( gifs.length ).toBe( 0 )
    })
})