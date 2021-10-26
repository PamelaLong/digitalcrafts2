import { combineReducers } from "redux";
import movieAPI from "./movieAPI";
import movieTitle from "./movieTitle";
import cart from "./cart";


const rootReducers = combineReducers({
    movieAPI,
    cart,
    movieTitle,

}
);

export default rootReducers;



// find where you are putting this or if you need to make another movieAPI.js file
// movieAPI.js
// const myAPIKey = "aa7e3de3";
// const ombdPage = `https://www.omdbapi.com/?i=tt3896198&apikey=${myAPIKey}`
