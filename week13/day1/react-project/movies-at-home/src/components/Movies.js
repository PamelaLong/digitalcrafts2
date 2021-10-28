import React from 'react';
import { useEffect, useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
// import { useSelector } from 'react-redux';
// const omdbPage = `http://www.omdbapi.com/?s=disney&apikey=aa7e3de3`;
const omdbPage = 'https://imdb-api.com/en/API/MostPopularMovies/k_qmxnfhq7';
// const input = document.querySelector(".userInput");
// const search = document.querySelector(".search");

// k_qmxnfhq7
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
// const searchMovies = useSelector((state) => state.movies);

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
            <Carousel responsive={responsive}>
                
            {movies?.items?.map((movieData) => {
                console.log(movieData)
                return <img src={movieData.image} alt= ""/>
            })}

            </Carousel>
        </div>
    )
}
// style={{height: 380, width: 270, flex: 1}}
// search.addEventListener("click", () => searchMovies())
export default Movies;