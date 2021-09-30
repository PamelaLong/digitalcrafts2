import React, { useState } from 'react';
import { UserButton, HeaderTitle, HeaderContainer } from '../styled-components/HeaderStyle';

export default function Header() {
    const [counter, setCounter] = useState(0)
    const [user, setUser] = useState({})
    


        return (
            <HeaderContainer>
                <HeaderTitle>User Has Logged In</HeaderTitle>
                <p>Welcome {user?.name?.first} {""} {user?.name?.last}</p>
                <UserButton onClick={() => setCounter(counter + 1)}>Get New User</UserButton>
            </HeaderContainer>
        );
    };