const myAPIKey = "d032f16a";
const ombdPage = `http://img.omdbapi.com/?apikey=${myAPIKey}`;

const container = document.querySelector(".moviePosters");
const search = document.querySelector(".search");

async function searchMovies(){
    const movieContainer = document.querySelector(".input").value;
    const fetchMovies = await fetch(ombdPage + `${input}`);
    const jsonMovies = await fetchMovies.json();


for (const movie of jsonMovies.search) {
    const movieContainer = document.createElement("div");
    const moviePosters = document.createElement("img");
    console.log(moviePosters)

    movieContainer.append(movie);
    movie.append(movieTitle, moviePosters);
}
}
search.addEventListener("click", (search) => {

});