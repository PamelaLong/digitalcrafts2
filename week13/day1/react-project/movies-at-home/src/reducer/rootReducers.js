// import React from 'react'
// import rootReducer from './reducers/rootReducer';
import { combineReducers } from "redux";
import movieTitle from "./movieTitle";
import moviePoster from "./moviePoster";
import movieYear from "./movieYear";


const rootReducer = combineReducers ({
        movieTitle,
        moviePoster,
        movieYear,

});
export default rootReducer;