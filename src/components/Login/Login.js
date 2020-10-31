import { Button } from "@material-ui/core";
import React from "react";
import "./Login.css";
import { auth, provider } from "../../firebase/firebase";

function Login() {
  const signIn = () => {
    auth.signInWithPopup(provider).catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <div className="login__logo">
        <img
          src="https://lh3.googleusercontent.com/proxy/ddbbr-Gl1KiItOGqZAIP833DrrcsYXR2KKNAQEBK46MLjYXSZph9olXIoyalZVpxUdYnwWC3Di1noF11fCw1fJKYAUPFgdL6UrHSiOc"
          alt=""
        />
        <h1>iMessage</h1>
      </div>
      <Button onClick={signIn}>Sign in</Button>
    </div>
  );
}

export default Login;
