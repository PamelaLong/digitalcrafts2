import React, { useState } from 'react';

export default function Login() {
    const [loginData, setLoginData] = useState({});

        return (
            <div>
                <p>Login to Continue</p>
                
                <p><input onChange={(e) => setLoginData({ ...loginData, [e.tartget.name]: e.target.value })} type="text" placeholder= "username" name="username" value={loginData?.username} /></p>
                <p><input onChange={(e) => setLoginData({ ...loginData, [e.tartget.name]: e.target.value })} type="password" placeholder= "password" name="password" value={loginData?.password} /></p>
                <p><button>Remember Me</button></p>
                <p><button>Login</button></p>

                <p>Forgot Your Password?</p>
                <p>Not A Member? Sign Up</p>
            </div>
        );
    };
    


