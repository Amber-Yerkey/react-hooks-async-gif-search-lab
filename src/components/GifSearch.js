import React, {useState} from "react";


function GifSearch({ onSearchFormSubmit }) {

    const [inputValue, setInputValue] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        onSearchFormSubmit(inputValue)
    }

    const handleChange = (e) => {
        setInputValue(e.target.value)
    }

    return ( 
        <div>
            <form onSubmit={handleSubmit}>
                <label>Type a Search</label>
                <input type="text" value={inputValue} onChange={handleChange}></input>
                <input type="submit"></input>
            </form>
        </div>
    );
}

export default GifSearch;