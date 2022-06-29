import React, { useEffect, useState } from 'react'
import GifSearch from './GifSearch'
import GifList from './GifList'


function GifListContainer(){

    const [gifs, setGifs] = useState([])
    const [userSearch, setUserSearch] = useState("dolphin")

    useEffect(() => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${userSearch}&api_key=JYa3IDAjN5bDDdhVTqZrcqe8mV96JAJ3&rating=g`)
        .then((resp) => {
            return resp.json()
        })
        .then(({ data }) => {
            console.log(data.slice(0,3))
            const newData = data.slice(0,3).map((gif) => {
                return {url: gif.images.original.url}
            })
            setGifs(newData)
        })
    }, [userSearch])

    const onSearchFormSubmit = (userInput) => {
        setUserSearch(userInput)
    }

    return(
        <div>
            <GifList theGifs={gifs} />
            <GifSearch onSearchFormSubmit={onSearchFormSubmit} />
        </div>
    )
}

export default GifListContainer