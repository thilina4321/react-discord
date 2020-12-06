import { Button } from '@material-ui/core'
import React from 'react'
import './Login.css'
import {auth, provider} from './firebase'

function Login() {

    const signIn = ()=>{
        auth.signInWithPopup(provider).catch(e=> alert('error'))
    }

    return (
        <div className="login">
            <div className="login__logo">
                <img src="https://i.ytimg.com/vi/GwmRbvWX_Hs/maxresdefault.jpg" alt="logo"/>
            </div>
            <Button onClick={signIn}  color="primary"> Sign In With Google </Button>
        </div>
    )
}

export default Login
