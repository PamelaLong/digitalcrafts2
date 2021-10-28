// import React from 'react';
// import { useSelector } from 'react-redux';
// const myAPIKey = "aa7e3de3";
const omdbPage = `https://www.omdbapi.com/?i=tt3896198&apikey=aa7e3de3`;
const input = document.querySelector(".userInput");
const search = document.querySelector(".search");



// const searchMovies = useSelector((state) => state.movies);

async function searchMovies() {

        const userInput = input.value;
        const fetchMovies = await fetch(omdbPage + userInput);
        const jsonMovies = await fetchMovies.json();
        input.value = ""

const allMovies = document.querySelector(".mainMovies");
allMovies.innerHTML = ""

    for (const movie of jsonMovies.search) {
        const movieContainer = document.querySelector(".movieContainer");
        const divForMovies = document.createElement("div");
        const movieImage = document.createElement("img");
        movieImage.src = movie.strPoster;
        const movieTitle = document.createElement("p");
        movieTitle.innerHTML = movie.strPoster;


        divForMovies.append(movieImage, movieTitle);
        movieContainer.append(divForMovies);

    }
}
search.addEventListener("click", () => searchMovies())
