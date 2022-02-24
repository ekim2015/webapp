import logo from './logo.svg';
import './App.css';
import * as React from 'react';
import ReactDOM from 'react-dom';
// import Login from './components/Login.js';
import Chat from './components/Chat';
import Register from './components/Register'
import ScheduleCard from './components/Cards/scheduleCard.js';
import Recommended from './components/Recommended/Recommended.js';
import './styles/HomeStyles.css';
import { getAppBarUtilityClass } from '@mui/material';

import { signOut, getAuth } from 'firebase/auth';
import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

const app = require('express');
const express = express();
const PORT = 3000; // create basic HTTP server

app.listen(PORT, () => { // start up express
  console.log("Successfully listening to port ${PORT}!")
})

function App() {
  
  return (
    // <div className="App">
    //   <button onClick={clickHandler}>Log in to Google</button>
    // </div>
    <Register></Register>
  );

  // now we are going to get the URL from Google Calendar, since we got Google authorization 

}

const logoutHandler = (auth) => { // parentheses used to pass values through
  signOut(auth).then(() => { // if sign out works
    console.log('Sign out successful') // placeholder for what will actually happen
  }).catch((error) => { // if there is a sign out error
    console.log(error) // print out the logout error
  })
}

// designing universal logout button


export default App;