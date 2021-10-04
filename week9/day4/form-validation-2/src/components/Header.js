import React, { useState } from 'react';
import { HeaderContainer } from '../styled-components/HeaderStyle';

export default function Header() {
    const user = useState({})
    

    

        return (
            <HeaderContainer>
                
                
                <p>Welcome {user?.name?.first} {""} {user?.name?.last}</p>
                
            </HeaderContainer>
        );
    };