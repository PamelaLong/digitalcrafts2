// import React from 'react'
// import MovieContainer from "./movieContainer";
// import Movies from "./Movies";

// FIX IT ALL!!


const movieTitleDelete = async (movieTitle) => {
    const deletemovieTitle = await fetch(`http://localhost:3001/delete_title/${movieTitle}`, {
        method: "DELETE",
        mode: "cors",
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const button = document.createElement('button');
    button.movieTitle = "deleteButton"
    button.addEventListener('click', e => {
        // e.preventDefault

        deletemovieTitle(e.currentTarget.movieTitle)
        const deleteDiv = document.querySelector(`#div-${movieTitle}`)
        deleteDiv.parentNode.removeChild(deleteDiv)


    }) 
}

const readmovieTitle= async () => {
    const omdbPage = `https://www.omdbapi.com/?i=tt3896198&apikey=aa7e3de3`;
    const cartData = await fetch ("http://localhost:3001/read_movieTitle", {
        method: "GET",
        mode: "cors",
        headers: {
            'Content-Type': 'application/json'
        }
        
    });

const json = await cartData.json();
    console.log(json)
    for (const i in json.rows){
        const cartData = json.rows[i]
        
        const MovieContainer = document.querySelector('.MovieContainer')
        const MoviesName = cartData.movies
        
        const movieTitle = document.createElement('p');
        movieTitle.className ="movieTitle";
        
        const MoviesPoster = document.createElement('img');
        MoviesPoster.className = "cartPoster";
        
        const button = document.createElement('button');
        // button.movieTitle = movieTitle
        
        button.movieDelete = "Deleted from Cart"
        
        MoviesPoster.src = omdbPage;
        const MoviesDetails = document.createElement('div');
        MoviesDetails.className = "moviesDetails"
        MoviesDetails.movieTitle = `div-${movieTitle}`
        
        movieTitle.innerHTML = movieTitle;
        MoviesDetails.append(movieTitle, MoviesPoster, button);
        MovieContainer.append(MoviesDetails);
        
        
             
    }
};
