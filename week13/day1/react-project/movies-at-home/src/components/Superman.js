import React, { useEffect, useState } from 'react';
import SupermanContainer from 'styled-components';
const omdbPage = `http://www.omdbapi.com/?s=superman&apikey=aa7e3de3`;



 function Superman() {
    const [superman, setSuperman] = useState([])
    useEffect(() => {
       
        async function getSuperman() {
            const fetchMovies = await fetch(omdbPage);
            const jsonMovies = await fetchMovies.json();
            console.log(jsonMovies);
            setSuperman(jsonMovies);
            
        }
        getSuperman()
    },[])
    return(
        <div>
            <h1>Superman</h1>
                
            {superman?.Search?.map((supermanData) => {
                console.log(supermanData)
                return <img src={supermanData.Poster} alt= ""/>
            })}

        </div>
    )
}
export default Superman;