import * as React from 'react';
import { useState } from 'react';
import ReactDOM  from 'react-dom';
import auth from '../firebaseSetup'
import { createUserWithEmailAndPassword } from 'firebase/compat/auth';
import '../styles/LoginStyles.css';
import { TextField, InputAdornment, useFormControl, Button } from '@mui/material';
import { SettingsSuggestRounded } from '@mui/icons-material';
import { firebaseApp } from '../firebaseSetup'

const Register = () => {
    const [username, setUsername] = useState('') // starts with empty inputs
    const [pass, setPass] = useState('')
    const [email, setEmail] = useState('')
    const [dob, setDOB] = useState('') // placeholder
    
    const registerHandler = async (email, pass) => { // pass in the auth context
        try {
            await firebaseApp.auth()
            firebaseApp.createUserWithEmailAndPassword(email.value, pass.value)
        } catch(err) {
            console.log(err.message);
        }
    } // this will be triggered when the register button is pressed

    return (
        <div>
            <div className="login-component">
                <TextField 
                    helperText="New username"
                    id="username-field"
                    label="Username"
                    variant="filled"
                />
            </div>
            <div className="login-component">
                <TextField
                    helperText="Insert email"
                    id="email=field"
                    label="Email"
                    variant="filled"
                    onChange={(event)=>{
                        setEmail(event.target.value) // 
                    }}
                />
            </div>
            <div className="login-component">
                <TextField
                    helperText="Insert password"
                    id="password-field"
                    label="Password"
                    variant="filled"
                    onChange={(event)=>{
                        setPass(event.target.value) 
                    }}
                />
            </div>
            <div className='login-component'>
                <Button variant="contained" onClick={registerHandler}>Register</Button>
            </div>
        </div>
    );
}


export default Register;


