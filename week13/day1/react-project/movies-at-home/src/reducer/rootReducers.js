import { combineReducers } from "redux";
import movieTitle from "./movieTitle";



const rootReducers = combineReducers({
    movieTitle,

}
);

export default rootReducers;



// find where you are putting this or if you need to make another movieAPI.js file
// movieAPI.js
// const myAPIKey = "aa7e3de3";
// const ombdPage = `https://www.omdbapi.com/?i=tt3896198&apikey=${myAPIKey}`
