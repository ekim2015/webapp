import * as React from 'react';
import { useState } from 'react';
import ReactDOM  from 'react-dom';
import '../styles/LoginStyles.css';
import { TextField, InputAdornment, useFormControl, Button } from '@mui/material';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { AuthContext } from './authContext'
import { SettingsSuggestRounded } from '@mui/icons-material';

const Login = () => {
    const [email, setLoginEmail] = useState("");
    const [pass, setLoginPass] = useState("");
    const [user, setUser] = useState("");
    const [login, loggedIn] = useState(false); 

    const {user} = useContext(AuthContext);

    const LoginHandler = async (email, pass) => { // arrow signifies shortened function
        try {
            firebaseApp.auth()
            firebaseApp.signInWithEmailAndPassword(email.value, pass.value)
        } catch(err) {
            console.log(err.message)
        }
    }
 
    return (
        <div>
            <div className="login-title">
                <div>Welcome to Slaplet</div>
            </div>
            <div className="login-component">
                <TextField 
                    helperText="Insert your email here"
                    id="email-field" 
                    label="Email" 
                    variant="filled"
                    onChanged={(event)=>{
                        setLoginEmail(event.target.value)
                    }}
                />
            </div>
            <div className="login-component">
                <TextField 
                    helperText="Insert your password here"
                    id="password-field" 
                    label="Password" 
                    variant="filled" />
                    onChanged={(event)=>{
                        setLoginPass(event.target.value)
                    }}
            </div>
            <div className='login-component'>
                <Button variant="contained">Login</Button>
                <Button variant="contained">Register</Button>
            </div>
        </div>
    );
}

export default Login;

