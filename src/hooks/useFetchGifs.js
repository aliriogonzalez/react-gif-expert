import { useEffect, useState } from 'react';
import { getGif } from '../helpers/getGifs';

export const useFetchGifs = ( category ) => {

    // Este hook con parametro [] permite que la funcion dentro solo se ejecute 
    // cuando sea redibujado el componente

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState( true )

    const getImages = async() => {
        const newImages = await getGif( category );
        setImages( newImages );
        setIsLoading(false);
    }
    

    useEffect( () => { 
        getImages();
    }, [])

    return {
        images: images,
        isLoading: isLoading
    }
}
