import React, { useEffect, useState } from "react";
import { ThemeContextProvider } from "./context/ThemeContext";
import ThemeBtn from "./components/ThemeBtn";
import Card from "./components/Card";

function App() {
    const [theme, setTheme] = useState("light");

    const lightTheme = () => {
        setTheme("light");
    };

    const darkTheme = () => {
        setTheme("dark");
    };

    useEffect(() => {
        document.querySelector("html").classList.remove("dark", "light");
        document.querySelector("html").classList.add(theme);
    }, [theme]);

    return (
        <ThemeContextProvider value={{ darkTheme, lightTheme, theme }}>
            <div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                        <ThemeBtn />
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                        <Card />
                    </div>
                </div>
            </div>
        </ThemeContextProvider>
    );
}

export default App;
