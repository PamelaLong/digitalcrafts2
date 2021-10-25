import React from 'react';
import movieTitle from './movieTitle';
import { useSelector } from 'react-redux';

const movieTitle = useSelector((state) => state.movieTitle);
// props?

export default function movieContainer(props) {
    // const Poster = [];
    

    // mapping movie poster titles?

    return (
        <div>
            
            {movieTitle.map((movie) => (
                <movieTitle movie = {movie} />
            ))}

        </div>
    )
};
