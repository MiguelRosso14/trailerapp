import React from 'react';
import LinksAdmin from "./LinksAdmin";
import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
    const {isAuthenticated}=useAuth0();
    
    return (
        isAuthenticated &&
        <div>
        <LinksAdmin />
        </div>
    )
};

export default Profile;