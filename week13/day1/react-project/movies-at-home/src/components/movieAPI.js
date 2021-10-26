import React from 'react'


// const omdbPage = `https://www.omdbapi.com/?i=tt3896198&apikey=aa7e3de3`;


export default function movieAPI (){

    async function fetchMovies() {
        const movieContainer = await fetch("https://www.omdbapi.com/?i=tt3896198&apikey=aa7e3de3");

    }

}
