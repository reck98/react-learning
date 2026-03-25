import React, { useContext } from "react";
import UserContext from "../context/UserContext";

function Profile() {
    const { user } = useContext(UserContext);

    if (!user)
        return (
            <div>
                <h2>Profile</h2>
                <p>Not logged in</p>
            </div>
        );

    return (
        <div>
            <h2>Profile</h2>
            <p>Welome {user.username}</p>
        </div>
    );
}

export default Profile;
