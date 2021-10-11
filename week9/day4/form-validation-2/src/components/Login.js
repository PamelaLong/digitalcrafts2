import React, { useState } from 'react';
import { LoginContainer } from '../styled-components/LoginStyle';


export default function Login() {
    const [loginData, setLoginData] = useState({});


        return (
            <LoginContainer>
                <div>
                <p>Login to Continue!</p>
                
                {/* <div><input onChange={(e) => setLoginData({ ...loginData, [e.target.name]: e.target.value })} type="text" placeholder= "username" name="username" value={loginData?.username} /></div>
                <div><input onChange={(e) => setLoginData({ ...loginData, [e.target.name]: e.target.value })} type="password" placeholder= "password" name="password" value={loginData?.password} /></div>
                <div><input type="checkbox" value="lsRememberMe" id="rememberMe"></input>Remember Me</div>

                    <p><button onClick={(e) =>setLoginButton({...loginButton,[e.target.button]: e.target.value })}>Login</button></p> */}

                <h6>Forgot Your Password?</h6>
                </div>

                <h6>Not A Member? Sign Up</h6>
            </LoginContainer>
        );
    };
    


