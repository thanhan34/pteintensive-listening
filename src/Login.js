import { Button } from '@material-ui/core'
import React from 'react'
import './Login.css'
import { auth, provider } from "./firebase"
import { useStateValue } from './StateProvider'

function Login() {

    const [{ user }, dispatch] = useStateValue();
    // const signIn = () => {
    //     auth.signInWithPopup(provider).then((result) => {
    //         dispatch({
    //             type: "SET_USER",
    //             user: result.user,
    //         })
    //     })

    //         .catch((error) => alert(error.message));
    // };
    const signIn = () => {
        auth.signInWithPopup(provider).then((result) => {
            dispatch({
                type: "SET_USER",
                user: result.user
            })
        })
    }
    return (
        <div className="login">
            <div className="login__container">
                <img src="pteintensive-listening/src/images/PTE LOGO.jpg" alt="" />
                <div className="login__text">
                    <h1>Sign in to Whatsapp</h1>
                </div>
                <Button type="submit" onClick={signIn}>Sign In With Google</Button>
            </div>
        </div>
    )
}

export default Login