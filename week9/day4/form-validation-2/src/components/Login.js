import React, { useState } from 'react';
// import { useHistory } from 'react-router';
import { LoginContainer } from '../styled-components/LoginStyle';
// import { createClient } from '@supabase/supabase-js';
// import { useHistory } from "react-router-dom";

export default function Login() {
    const [loginData, setLoginData] = useState({username: "", password: ""});
    // const history = useHistory();

// for register page (not login page)
// const supabase = createClient(
//     "URL"
//     "public anon api key"

// );
// for register page (not login page)
//SIGN IN
// const register = async (e) => { e.preventDefault();
// export default function Login(props) {
// const { user, session, error } = await supabase.auth.signin({
//     email: 'loginData.username',
//     password: 'loginData.password',

//redirect to dashboard after logging in

// if (session) {
//     history.pushState("/dashboard");
// }   else {
//     alert("User does not exist", error);
// };
//     };
// });
//SIGN UP
// const register = async (e) => { e.preventDefault();
// export default function Login(props) {
    // const { user, session, error } = await supabase.auth.signup({
        //     email: 'loginData.username',
        //     password: 'loginData.password',


//redirect to login after signup

        // if (session) {
//     history.pushState("/login");
// }   else {
//     alert(error.message);
// };
//     };
        // });
       
// };


        return (
            <LoginContainer>
                <div>
                <p>Login to Continue!</p>

                <div><input onChange={(e) => setLoginData({ ...loginData, [e.target.name]: e.target.value })} type="text" placeholder= "username" name="username" value={loginData?.username} /></div>
                <div><input onChange={(e) => setLoginData({ ...loginData, [e.target.name]: e.target.value })} type="password" placeholder= "password" name="password" value={loginData?.password} /></div>
                <div><input type="checkbox" value="lsRememberMe" id="rememberMe"></input>Remember Me</div>
{/* <BottomLoginSection> {props?.register ? ( <LoginFormSubmit onClick={(e) => loginData(e)} type="submit" value="">Log In</LoginFormSubmit> )</BottomLoginSection> */}
                    
                
                <p><button>Login</button></p>

                <h6>Forgot Your Password?</h6>
                </div>

                <div>
                <h6>Not A Member? Sign Up</h6>
                </div>
            </LoginContainer>
        );
    };
    


