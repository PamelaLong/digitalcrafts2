// import React from 'react';
// import { useSelector } from 'react-redux';
// const myAPIKey = "aa7e3de3";
const omdbPage = `https://www.omdbapi.com/?i=tt3896198&apikey=aa7e3de3`;
const input = "userInput";




// const searchMovies = useSelector((state) => state.movies);

export default async function Movies(props) {

        const userInput = input.value;
        const fetchMovies = await fetch(omdbPage + `${userInput}`);
        const jsonMovies = await fetchMovies.json();
        // console.log(jsonMovies);

    for (const movie of jsonMovies.Search) {
        const movieContainer = document.querySelector(".movieContainer");
        const divForMovies = document.createElement("div");
        const movieImage = document.createElement("img");
        movieImage.src = movie.Poster;
        divForMovies.append(movieImage);
        movieContainer.append(divForMovies);
    return (
        <div>
            <h1>{props?.movies.title}</h1>
        </div>
    )
    }
};
