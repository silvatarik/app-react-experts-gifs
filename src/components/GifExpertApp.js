import React, { useState } from 'react'
import './GifExpertApp.css';
import { AddCategory } from './AddCategory';
import { GifGrid } from './GifGrid';

const GifExpertApp = props => {

    const [categories, setCategories] = useState(['One punch'])

    const handleAdd = () => {
        setCategories([...categories,'Vinland']);
    }

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories}/>
            <hr/>
                {/* <button onClick={handleAdd}>Agregar</button> */}
            <ol>
                {   
                    // categories.map(category => <li key={category}>{category}</li>)
                    categories.map(category => <GifGrid  key={category} category={category}/>)
                }
            </ol>
        </>
    )
}


export default GifExpertApp;
