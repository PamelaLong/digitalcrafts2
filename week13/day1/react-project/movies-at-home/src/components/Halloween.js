import React, { useEffect, useState } from 'react';
import HalloweenContainer from 'styled-components';
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
        <HalloweenContainer>
        <div>
            <h1>Halloween</h1>
                
            {halloween?.Search?.map((HalloweenData) => {
                console.log(HalloweenData)
                return <img src={HalloweenData.Poster} alt= ""/>
            })}
            
        </div>
        </HalloweenContainer>
    )
}
export default Halloween;