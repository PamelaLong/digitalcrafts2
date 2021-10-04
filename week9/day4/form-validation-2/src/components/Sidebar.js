import React from 'react'
import {SidebarContainer} from '../styled-components/SidebarStyle';
import { Link } from "react-router-dom";

export default function Sidebar() {

        return (
    
            <SidebarContainer>
            
                <Link to="/">
                <p>Home</p>
                </Link>
                
                <Link to="/Dashboard">
                <p>Dashboard</p>
                </Link>
                
                <Link to="/Login">
                <p>Login</p>
                </Link>

                <Link to="/Account">
                <p>Account</p>
                </Link>

                <Link to="/Garage">
                <p>Garage</p>
                </Link>
        
            </SidebarContainer>
        )}