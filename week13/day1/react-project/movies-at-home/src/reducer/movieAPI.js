// onst myAPIKey = "aa7e3de3";
const ombdPage = `https://www.omdbapi.com/?i=tt3896198&apikey=aa7e3de3`;
const input = "userInput";


async function searchMoviePoster() {
    const userInput = input.value;
    const fetchMovies = await fetch(ombdPage + `${userInput}`);
    const jsonMovies = await fetchMovies.json();
    console.log(jsonMovies);
}

export default searchMoviePoster;