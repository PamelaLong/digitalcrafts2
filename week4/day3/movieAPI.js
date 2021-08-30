const myAPIKey = "d032f16a";
const ombdPage = `http://www.omdbapi.com/?apikey=${myAPIKey}`;

const container = document.querySelector(".moviePosters");
const search = document.querySelector(".search");

async function searchMovies(){
    const movieContainer = document.querySelector(".input").value;
    const fetchMovies = await fetch(ombdPage + `${input}`);
    const jsonMovies = await fetchMovies.json();


for (const movie of jsonMovies.search) {
    const moviePosters = document.createElement("img");
    console.log(moviePosters)
    const movieTitle = document.createElement("h2")
    moviePosters.src = movie.moviePosters;
    movieTitle.innerText = movieTitle;
    movieContainer.append(moviePosters);
    movie.append(movieTitle, moviePosters);
    movieContainer.append(movie);

    
}
}
