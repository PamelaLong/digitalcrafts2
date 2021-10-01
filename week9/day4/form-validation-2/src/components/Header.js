import React, { useState } from 'react';
import { HeaderTitle, HeaderContainer } from '../styled-components/HeaderStyle';

export default function Header() {
    const user = useState({})
    


        return (
            <HeaderContainer>
                <HeaderTitle>User Has Logged In
                <p>Welcome {user?.name?.first} {""} {user?.name?.last}</p>
                </HeaderTitle>
            </HeaderContainer>
        );
    };