import React, { useState } from 'react';
// import { HeaderContainer } from '../styled-components/HeaderStyle';
import { useDispatch, useSelector } from 'react-redux';

const omdbPage = `https://www.omdbapi.com/?i=tt3896198&apikey=aa7e3de3`;

// FIX THIS!!!!
// AND THEN FIX IT AGAIN!!


export default function Header() {
    const dispatch = useDispatch()
    const currentUser = useSelector((state) => state.userData)
    const [movieTitle, setMovieTitle] = useState(0);
    console.log(currentUser)

    

        return (
            <div>
            <HeaderContainer>
                <p>Welcome</p>
                <button onClick= {()=> setCounter(counter + 1)}>New User</button>
            </HeaderContainer>
            </div>
            
        );
    };
