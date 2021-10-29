import React from 'react';
import { useEffect, useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
const omdbPage = `http://www.omdbapi.com/?s=disney&apikey=aa7e3de3`;

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
}

 function Movies() {
    const [movies, setMovies] = useState([])
    useEffect(() => {
       
        async function getData() {
            const fetchMovies = await fetch(omdbPage);
            const jsonMovies = await fetchMovies.json();
            console.log(jsonMovies);
            setMovies(jsonMovies);
            
        }
        getData()
    },[])
    return(
        <div>
            <h1>movies</h1>
            {/* <Carousel responsive={responsive}> */}
                
            {movies?.Search?.map((movieData) => {
                console.log(movieData)
                return <img src={movieData.Poster} alt= ""/>
            })}

            {/* </Carousel> */}
        </div>
    )
}
export default Movies;