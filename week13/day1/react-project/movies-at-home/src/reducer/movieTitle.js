import React from 'react'

export default function movieTitle() {
    return (
        <div>
            {movieTitle.map((movie) => (
                <movieTitle movie = {movie} />
            ))}
        </div>
    )
}
