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
// const myAPIKey = "d032f16a&s=";
// const ombdPage = `http://www.omdbapi.com/?apikey=${myAPIKey}`