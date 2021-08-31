// los hooks no son mas que funciones

import React, { useEffect, useState } from 'react'
import { getGifts } from '../helpers/getGifs';

export const useFetchGifs = (category) => {

    const [state, setstate] = useState({
        data: [],
        loading: true
    });

    //lo efectos no pueden ser assync
    useEffect(()=>{
        getGifts(category).then(imgs =>{
            setTimeout(() => {
                setstate({
                    data: imgs,
                    loading: false
                });
            }, 3000);
        });
    },[category]);

    

    return state;
}
