import React, { useState, useEffect } from 'react';
import { HeaderContainer } from '../styled-components/HeaderStyle';
import { useDispatch, useSelector } from 'react-redux';

const URL = "https://randomuser.me/api/";



export default function Header() {
    const dispatch = useDispatch()
    const currentUser = useSelector((state) => state.userData)
    const [counter, setCounter] = useState(0);
    console.log(currentUser)
    useEffect(()=>{
    
    const getUserData = async () => {
        const newUser = await fetch(URL, {
            method: "GET",
            cache: "no-cache",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json",
              },
        })
        const jsonData = await newUser.json()
        

        dispatch({
            type: "GET_USER",
            payload: {...jsonData.results[0] }
        })
    }


    getUserData()
    return () => {};
    },[counter, dispatch])


    

        return (
            <HeaderContainer>
                <button onClick= {()=> setCounter(counter + 1)}>New User</button>
                
                {/* <p>Welcome {user?.name?.first} {""} {user?.name?.last}</p> */}
                
            </HeaderContainer>
        );
    };