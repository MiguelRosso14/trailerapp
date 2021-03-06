import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
    const { loginWithRedirect } = useAuth0();

    return (
        <button class="btn btn-primary" onClick={() => loginWithRedirect()}>Iniciar sesion</button>
    )
}

export default LoginButton