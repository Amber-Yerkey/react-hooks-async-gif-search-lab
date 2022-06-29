import React from 'react';


function GifList({ theGifs }) {
    
    return (
        <ul>
            {theGifs.map(({ url }, index) => (
                <li key={index}>
                    <img src={url} alt='gif'></img>
                </li>
            ))}
        </ul>
    );
}

export default GifList;