import React from "react";
import Links from "./components/Links";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoginButton from './components/LoginButton';
import Profile from './components/Profile';
import LogoutButton from './components/LogoutButton';
import {useAuth0} from '@auth0/auth0-react'

function App() {
  const {isAuthenticated} = useAuth0();

  return (
    <div className="container p-4">
      <h6>Login</h6>
          { isAuthenticated ? <LogoutButton/> : <LoginButton/> }
          <Profile/>
      <div className="row">
        <Links />
      </div>
      <ToastContainer />
    </div>
  );
}

export default App;
