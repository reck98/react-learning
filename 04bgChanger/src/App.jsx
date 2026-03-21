import React from "react";
import { useState } from "react";

const App = () => {
    const [color, setColor] = useState("Olive");

    const colors = [
        { name: "Red", value: "#ef4444" },
        { name: "Green", value: "#22c55e" },
        { name: "Violet", value: "#8b5cf6" },
        { name: "Purple", value: "#a855f7" },
        { name: "Gray", value: "#6b7280" },
        { name: "Yellow", value: "#eab308" },
        { name: "Olive", value: "#4b5563" },
    ];

    return (
        <div
            className="w-full h-screen transition-colors duration-300"
            style={{ backgroundColor: color }}
        >
            <div className="fixed bottom-10 inset-x-0 flex justify-center px-4">
                <div className="flex gap-3 flex-wrap bg-white/90 backdrop-blur-md shadow-xl px-4 py-3 rounded-2xl border">
                    {colors.map((c) => (
                        <button
                            key={c.name}
                            onClick={() => setColor(c.value)}
                            className="px-4 py-1.5 rounded-full text-white font-medium shadow-md 
                       transition-transform duration-200 hover:scale-105 active:scale-95"
                            style={{ backgroundColor: c.value }}
                        >
                            {c.name}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default App;
