import React, { useEffect, useState } from "react";
const omdbPage = `http://www.omdbapi.com/?s=batman&apikey=aa7e3de3`;

function Batman() {
  const [batman, setBatman] = useState([]);
  useEffect(() => {
    async function getBatman() {
      const fetchMovies = await fetch(omdbPage);
      const jsonMovies = await fetchMovies.json();
      console.log(jsonMovies);
      setBatman(jsonMovies);
    }
    getBatman();
  }, []);
  return (
    <div>
      <h1>Batman</h1>

      {batman?.Search?.map((batmanData) => {
        console.log(batmanData);
        return (
          <div>
            <img src={batmanData.Poster} alt="" />
            <button> Add Movie to Cart </button>
          </div>
        );
      })}
    </div>
  );
}
export default Batman;
