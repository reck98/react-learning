import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import { use } from "react";
// import { useLoaderData } from "react-router-dom";

function GitHub() {
    const [data, setData] = useState({});
    const { userID } = useParams();

    const finalUser = userID || "reck98";

    console.log(finalUser);

    useEffect(() => {
        fetch(`https://api.github.com/users/${finalUser}`)
            .then((res) => res.json())
            .then((data) => {
                setData(data);
                console.log(data);
            })
            .catch((err) => console.log(err));
    }, [finalUser]);

    if (data?.message?.includes("rate limit")) {
        return (
            <div className="text-gray-100 m-25 p-23 bg-amber-900 text-center">
                API Rate Limit Exceeded. Try again later.
            </div>
        );
    }

    return (
        <div className="flex justify-center items-center">
            <div className="text-center m-4 bg-gray-700 text-white p-4 text-3xl w-max">
                GitHub Followers:{data.followers}
                <div className="flex justify-center items-center">
                    <img
                        className="text-center m-3 mt-6"
                        src={data.avatar_url}
                        alt="Git Picture of the user"
                        width={300}
                    />
                </div>
            </div>
        </div>
    );
}

export default GitHub;
