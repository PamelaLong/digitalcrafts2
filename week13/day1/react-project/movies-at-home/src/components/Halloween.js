import React from 'react';
import { useEffect, useState } from 'react';
const omdbPage = `http://www.omdbapi.com/?s=halloween&apikey=aa7e3de3`;


function Halloween() {
const [halloween, setHalloween] = useState([])
useEffect(() => {
       
        async function getHalloween() {
            const fetchMovies = await fetch(omdbPage);
            const jsonMovies = await fetchMovies.json();
            console.log(jsonMovies);
            setHalloween(jsonMovies);
            
        }
        getHalloween()
    },[])
    return(
        <div>
            <h1>Halloween</h1>
                
            {halloween?.Search?.map((halloweenData) => {
                console.log(halloweenData)
                return <img src={halloweenData.Poster} alt= ""/>
            })}

        </div>
    )
}
export default Halloween;