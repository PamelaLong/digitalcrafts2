// onst myAPIKey = "d032f16a&s=";
const ombdPage = `http://www.omdbapi.com/?apikey=d032f16a&s=`;

const input = document.querySelector(".input");
const search = document.querySelector(".search");

async function searchMovies(){
    const userInput = input.value;
    const fetchMovies = await fetch(ombdPage + `${userInput}`);
    const jsonMovies = await fetchMovies.json();
    console.log(jsonMovies);

    for (const movie of jsonMovies.Search) {
        // select a div where movies go inside of
        const movieContainer = document.querySelector(".movieContainer");
        // create div for images to go in to show on page
        const divForMovies = document.createElement("div");
        // this created image to go inside the div box
        const movieImage = document.createElement("img");
        // movieImage.innerHTML = ("");
        movieImage.src = movie.Poster;
        // I need to make the movie poster show up in divForMovies
        divForMovies.append(movieImage);
        // now that images are in the divForMovie box, you need to put it in the main container
        movieContainer.append(divForMovies);

    }
}
search.addEventListener("click", searchMovies)