import React from 'react';
import MovieContainer from 'styled-components';
// import Movies from "./Movies";

// FIX THE MAPPING AT SOME POINT!!!!

export default function MovieContainer(props) {
    // const URL = [`https://www.omdbapi.com/?i=tt3896198&apikey=aa7e3de3`];


    return (
        <div>
        {/* {props?.movies.map((movie) => (
            <Movies movie={movie} />
        ))}         */}
        </div>
    )
}
// carousel code?

{/* <Carousel
    components={{
      View: CustomeView
    }}
  /> */}

// play video?
// const CustomeView = props => {
//     const { data } = props;
  
//     return (
//       <div className={styles.view}>
//         {data.videoUrl ? (
//           <video width="320" height="240" controls>
//               <source src="movie.mp4" type="video/mp4">
//               <source src="movie.ogg" type="video/ogg">
//              Your browser does not support the video tag.
//           </video>
//         ) : (
//           <img className={styles.img} src={data.src} />
//         )}
//       </div>
//     );
//   };

