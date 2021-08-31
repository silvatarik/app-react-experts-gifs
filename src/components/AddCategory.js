import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        // console.log(e.target.value);
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Submit hecho');
        setCategories((cats) => [inputValue,...cats]);
    }

    return (
        <>
           <form onSubmit={handleSubmit}>
                <input type="text" value={inputValue} onChange={handleInputChange}/>
           </form>
        </>
    )
}

AddCategory.propTypes = {
    setCategories:PropTypes.func.isRequired,
}
