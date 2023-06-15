import React from 'react'
import log from '../Styles/log.css'
import { Button } from '@mui/material'
import { auth, provider } from '../firebase'
import {signInWithPopup } from "firebase/auth";
import {login} from "../features/userSlice"

import { useDispatch } from 'react-redux'

const Login = () => {
    const dispatch = useDispatch();
    const signIn = () => {
        signInWithPopup(auth, provider)
          .then((result) => {
            const { displayName, email, photoURL } = result.user;
            dispatch(
              login({
                displayName: displayName,
                email: email,
                photoUrl: photoURL,
              })
            );
          })
          .catch((error) => alert(error.message));
      };
  return (
    <div className="login">
      <div className="login__container">
        <img src="https://static.dezeen.com/uploads/2020/10/gmail-google-logo-rebrand-workspace-design_dezeen_2364_col_0.jpg" alt="gmail logo" />
        <Button varient="contained" color="primary" className="login__button" onClick={signIn}>Login</Button>
      </div>
      
    </div>
  )
}

export default Login
