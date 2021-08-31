import React, { useState,useEffect } from 'react'
import { getGifts } from '../helpers/getGifs';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {

    // const [images, setImages] = useState([]);

    // useEffect(()=>{
    //     getGifts(category).then(imgs => setImages(imgs));
    // },[category])

    const {data:images,loading} = useFetchGifs(category);
    

    return (
        <>
            <h3>{category}</h3>
            {loading && <p>Loading</p>}
            <div className="card-grid">
                    {
                        images.map(img =>
                        <GifGridItem key={img.id} {...img}/>
                        )
                    }
            </div>

            {/* {loading ? 'Cargando data' : 'Data cargada'} */}
        </>
    )
}
