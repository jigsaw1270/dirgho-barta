import React from "react";
import dirgho from "../assets/dirgho.png"


import "firebase/compat/app";
import './login.css'

import {auth} from  "../firebase"
import firebase from "firebase/compat/app";


const login = () => {
    return (
<div className="background">

<span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
 
 
<div id="login-card"
>

    <h2 className="tittle"><img src={dirgho} alt="dirgho" className="dirgho" /> <br />Welcome to Dirgho-batra </h2>
    <div
    className="button-62"
 
    onClick={()=> auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())}>
 Sign in with Goggle

    </div>

    <br /> <br />

    <div
    className="button-62"
 
    onClick={()=> auth.signInWithRedirect(new firebase.auth.FacebookAuthProvider())}>
     Sign in with Facebook

    </div>
</div>
 
</div>
    );
}


export default login