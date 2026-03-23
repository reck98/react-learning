import React from "react";
import { useParams } from "react-router-dom";

function User() {
    const { userID } = useParams();
    return (
        <div className="bg-gray-600 text-xl text-white flex justify-center p-5 m-5">
            User : {userID}{" "}
        </div>
    );
}

export default User;
