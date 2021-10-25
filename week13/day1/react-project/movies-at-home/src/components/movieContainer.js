import React from 'react';
import movieTitle from './movieTitle';
import { useSelector } from 'react-redux';



export default function MovieContainer() {
    // const Poster = [];
    const movieTitle = useSelector(state => state.movieTitle);


    return (
        <div>
            <h1>Movie Conatiner</h1>
            {/* mapping movie poster titles */}
            {movieTitle.map((movie) => (
                <movieTitle movie = {movie} />
            ))}

        </div>
    )
}
