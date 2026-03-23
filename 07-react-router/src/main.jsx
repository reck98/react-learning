import { createRoot } from "react-dom/client";
import "./index.css";
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from "react-router-dom";
import { About, Contact, GitHub, Home, User } from "./components";
import Layout from "./Layout";

// const router = createBrowserRouter([
//     {
//         path: "/",
//         element: <Layout />,
//         children: [
//             {
//                 path: "",
//                 element: <Home />,
//             },
//             {
//                 path: "/about",
//                 element: <About />,
//             },
//             {
//                 path: "/contact",
//                 element: <Contact />,
//             },
//         ],
//     },
// ]);

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Layout />}>
            <Route path="" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="user/:userID" element={<User />} />
            <Route path="github" element={<GitHub />} />
            <Route path="github/:userID" element={<GitHub />} />
        </Route>,
    ),
);

createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />,
);
