// import React from 'react';
import { useSelector } from 'react-redux';
// const myAPIKey = "aa7e3de3";
// const omdbPage = `https://www.omdbapi.com/?i=tt3896198&apikey=aa7e3de3`;
// const input = "userInput";
// const jsonMovies = "jsonMovies";





export default function Movies(props) {

    const Movies = useSelector((state) => state.movies);
    // const Poster = [];
    return (
        <div>
            <h1>{props?.movies}</h1>
        </div>
    )
};