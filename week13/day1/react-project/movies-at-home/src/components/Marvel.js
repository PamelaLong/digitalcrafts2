import React from 'react';
import { useEffect, useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
const omdbPage = `http://www.omdbapi.com/?s=marvel&apikey=aa7e3de3`;

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

 function Marvel() {
    const [marvel, setMarvel] = useState([])
    useEffect(() => {
       
        async function getData() {
            const fetchMovies = await fetch(omdbPage);
            const jsonMovies = await fetchMovies.json();
            console.log(jsonMovies);
            setMarvel(jsonMovies);
            
        }
        getData()
    },[])
    return(
        <div>
            <h1>marvel</h1>
            {/* <Carousel responsive={responsive}> */}
                
            {marvel?.Search?.map((marvelData) => {
                console.log(marvelData)
                return <img src={marvelData.Poster} alt= ""/>
            })}

            {/* </Carousel> */}
        </div>
    )
}
export default Marvel;