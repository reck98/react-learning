import React from "react";
import Header from "./components/Header/Header.jsx";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer.jsx";

function Layout() {
    return (
        <>
            <Header />
            {/* Dynamic thing goes here  */}
            <Outlet />
            <Footer />
        </>
    );
}

export default Layout;
