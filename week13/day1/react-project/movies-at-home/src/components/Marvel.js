import React, { useEffect, useState } from 'react';
import MarvelContainer from 'styled-components';
const omdbPage = `http://www.omdbapi.com/?s=marvel&apikey=aa7e3de3`;


 function Marvel() {
    const [marvel, setMarvel] = useState([])
    useEffect(() => {
       
        async function getMarvel() {
            const fetchMovies = await fetch(omdbPage);
            const jsonMovies = await fetchMovies.json();
            console.log(jsonMovies);
            setMarvel(jsonMovies);
            
        }
        getMarvel()
    },[])
    return(
        <div>
            <h1>Marvel</h1>
                
            {marvel?.Search?.map((marvelData) => {
                console.log(marvelData)
                return <img src={marvelData.Poster} alt= ""/>
            })}

        </div>
    )
}
export default Marvel;